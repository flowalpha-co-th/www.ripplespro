import { ref } from 'vue'

export type ToastVariant = 'success' | 'error' | 'info' | 'warning'

export interface ToastItem {
  id: number
  variant: ToastVariant
  title: string
  message?: string
  duration: number
}

export const toasts = ref<ToastItem[]>([])
let nextId = 1

function push(variant: ToastVariant, title: string, message?: string, duration = 4000) {
  if (import.meta.server) return -1
  const id = nextId++
  toasts.value.push({ id, variant, title, message, duration })
  if (duration > 0) {
    setTimeout(() => dismissToast(id), duration)
  }
  return id
}

export function dismissToast(id: number) {
  const idx = toasts.value.findIndex(t => t.id === id)
  if (idx !== -1) toasts.value.splice(idx, 1)
}

export const toast = {
  success: (title: string, message?: string, duration?: number) => push('success', title, message, duration),
  error: (title: string, message?: string, duration?: number) => push('error', title, message, duration ?? 6000),
  info: (title: string, message?: string, duration?: number) => push('info', title, message, duration),
  warning: (title: string, message?: string, duration?: number) => push('warning', title, message, duration),
}
