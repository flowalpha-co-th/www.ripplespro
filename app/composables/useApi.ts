import { useAuthStore } from '~/stores/auth'

/**
 * client กลางของทุก API call — ห้ามยิง $fetch ตรงๆ จากหน้าไหนอีก
 *
 * หน้าที่ที่รวมไว้ตรงนี้เพราะทำกระจายแล้วมีที่ลืมแน่นอน:
 *  1. แนบ Authorization + X-Request-ID
 *  2. แกะ envelope { success, data, error, meta } ออกให้เหลือแต่ data
 *  3. โยน ApiError ที่มี code/details ให้หน้าเอาไปตัดสินใจได้
 *  4. เจอ 401 → refresh token แล้วยิงซ้ำครั้งเดียว
 *
 * ดูโครง response ที่ design_api_auth.openapi.json
 */

export type ApiErrorDetail = { field: string; message: string }

export class ApiError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly status: number,
    readonly details: ApiErrorDetail[] = [],
    readonly requestId: string | null = null,
  ) {
    super(message)
    this.name = 'ApiError'
  }

  /** หาข้อความ error ของฟิลด์หนึ่ง — ใช้โชว์ใต้ช่องในฟอร์ม */
  detail(field: string): string | undefined {
    return this.details.find(d => d.field === field)?.message
  }

  /** แปลง details เป็น map ยัดเข้า state ของฟอร์มได้เลย */
  fieldErrors(): Record<string, string> {
    const out: Record<string, string> = {}
    for (const d of this.details) {
      if (!(d.field in out)) out[d.field] = d.message
    }
    return out
  }
}

/** ข้อความไทยตาม error.code — `code` คือสัญญา ส่วน message จาก server ไว้ให้ dev อ่าน */
const MESSAGES: Record<string, string> = {
  INVALID_CREDENTIALS: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
  ACCOUNT_LOCKED: 'กรอกรหัสผ่านผิดหลายครั้งเกินไป กรุณารอสักครู่แล้วลองใหม่',
  ACCOUNT_SUSPENDED: 'บัญชีนี้ถูกระงับการใช้งาน',
  TOKEN_EXPIRED: 'เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่',
  INVALID_REFRESH_TOKEN: 'เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่',
  PASSWORD_REUSED: 'รหัสผ่านใหม่ต้องไม่ซ้ำกับรหัสเดิม',
  FORBIDDEN: 'คุณไม่มีสิทธิ์ทำรายการนี้',
  NOT_FOUND: 'ไม่พบข้อมูลที่ต้องการ',
  VALIDATION_ERROR: 'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง',
  EMAIL_ALREADY_EXISTS: 'อีเมลนี้มีผู้ใช้อื่นใช้อยู่แล้ว',
  UNKNOWN_PERMISSION: 'พบสิทธิ์ที่ระบบไม่รู้จัก',
  INVALID_FILE_TYPE: 'รับเฉพาะไฟล์รูป JPG, PNG หรือ WebP',
  FILE_TOO_LARGE: 'ไฟล์ใหญ่เกินไป — ขนาดต้องไม่เกิน 5MB',
  RATE_LIMITED: 'ทำรายการถี่เกินไป กรุณารอสักครู่',
  INTERNAL_ERROR: 'ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง',
}

export const apiErrorMessage = (err: unknown): string => {
  if (err instanceof ApiError) return MESSAGES[err.code] ?? err.message
  return MESSAGES.INTERNAL_ERROR!
}

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type Options = {
  query?: Record<string, any>
  body?: Record<string, any> | FormData
  /** ข้ามการต่อ token — ใช้กับ login/refresh/forgot ที่ยังไม่มี session */
  auth?: boolean
}

// refresh พร้อมกันหลาย request ต้องยิงจริงครั้งเดียว ที่เหลือรอ promise เดียวกัน
// ไม่งั้น token จะถูก rotate ซ้อนกันแล้วตัวที่ยิงทีหลังใช้ token ที่เพิ่งถูกเพิกถอน
let refreshing: Promise<boolean> | null = null

export const useApi = () => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()

  const base = () => `${config.public.apiBase}`

  const newRequestId = () =>
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`

  const toApiError = (err: any): ApiError => {
    const payload = err?.data
    const status = err?.status ?? err?.statusCode ?? 0

    // envelope ของเรา — server ตอบมาแบบนี้เสมอสำหรับ route /api
    if (payload?.error?.code) {
      return new ApiError(
        payload.error.code,
        payload.error.message ?? 'Request failed',
        status,
        payload.error.details ?? [],
        payload.meta?.requestId ?? null,
      )
    }

    // ไปไม่ถึง server (เน็ตหลุด / CORS / server ล่ม) — ไม่มี envelope ให้แกะ
    return new ApiError('INTERNAL_ERROR', err?.message ?? 'Network error', status)
  }

  const send = async <T = any>(method: Method, path: string, options: Options = {}): Promise<T> => {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'X-Request-ID': newRequestId(),
    }

    // FormData ต้องปล่อยให้ browser ใส่ Content-Type เอง เพราะต้องแนบ boundary
    // ที่มันสุ่มขึ้นมาด้วย · ถ้าเซ็ตทับเป็น multipart/form-data เฉยๆ ฝั่ง PHP
    // จะแกะไม่ออกแล้ว $request->file() เป็น null โดยไม่มี error อะไรบอก
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json'
    }

    if (options.auth !== false && auth.token) {
      headers.Authorization = `Bearer ${auth.token}`
    }

    const res = await $fetch<any>(path, {
      baseURL: base(),
      method,
      headers,
      query: options.query,
      body: options.body,
    })

    // แกะ envelope — หน้าเรียกใช้ได้ข้อมูลตรงๆ ไม่ต้องรู้จัก success/data/meta
    return (res?.data ?? null) as T
  }

  const request = async <T = any>(method: Method, path: string, options: Options = {}): Promise<T> => {
    try {
      return await send<T>(method, path, options)
    } catch (raw: any) {
      const err = toApiError(raw)

      // token หมดอายุ → ต่ออายุแล้วยิงซ้ำครั้งเดียว
      // ยิงซ้ำได้แค่รอบเดียวเพื่อไม่ให้วนไม่รู้จบถ้า refresh สำเร็จแต่ token ใหม่ก็ยังไม่ผ่าน
      const canRetry = err.code === 'TOKEN_EXPIRED' && options.auth !== false && !!auth.refreshToken

      if (!canRetry) throw err

      refreshing ??= auth.refreshSession().finally(() => { refreshing = null })
      const ok = await refreshing

      if (!ok) {
        await auth.forceLogout()
        throw err
      }

      try {
        return await send<T>(method, path, options)
      } catch (secondRaw: any) {
        const secondErr = toApiError(secondRaw)
        if (secondErr.code === 'TOKEN_EXPIRED') await auth.forceLogout()
        throw secondErr
      }
    }
  }

  return {
    get: <T = any>(path: string, query?: Record<string, any>, options: Options = {}) =>
      request<T>('GET', path, { ...options, query }),
    post: <T = any>(path: string, body?: Record<string, any>, options: Options = {}) =>
      request<T>('POST', path, { ...options, body }),
    /** อัปโหลดไฟล์ — multipart · ดู design_api_upload.openapi.json */
    upload: <T = any>(path: string, form: FormData, options: Options = {}) =>
      request<T>('POST', path, { ...options, body: form }),
    put: <T = any>(path: string, body?: Record<string, any>, options: Options = {}) =>
      request<T>('PUT', path, { ...options, body }),
    patch: <T = any>(path: string, body?: Record<string, any>, options: Options = {}) =>
      request<T>('PATCH', path, { ...options, body }),
    delete: <T = any>(path: string, options: Options = {}) =>
      request<T>('DELETE', path, options),
  }
}
