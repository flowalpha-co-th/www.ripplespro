<script setup lang="ts">
definePageMeta({ layout: 'auth' })
const { tr } = useLocale()
useHead(() => ({ title: tr('เข้าสู่ระบบ — Ripples', 'Sign In — Ripples') }))

const authStore = useAuthStore()
const route = useRoute()

function redirectTarget() {
  const r = route.query.redirect
  const path = Array.isArray(r) ? r[0] : r
  return path && path.startsWith('/') ? path : '/portal/dashboard'
}

const username = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)
const loading = computed(() => authStore.loading)
const error = computed(() => authStore.error)

async function onSubmit() {
  if (!username.value || !password.value) {
    toast.error(tr('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน', 'Please enter your username and password'))
    return
  }

  const status = await authStore.login(username.value, password.value, remember.value)
    
  if(!status) {
    return
  }

  toast.success(tr('เข้าสู่ระบบสำเร็จ', 'Signed in successfully'))
  await navigateTo(redirectTarget())
}

async function social(provider: 'facebook' | 'google' | 'tiktok') {
  /*loading.value = true
  try {
    await authStore.loginWithSocial(provider)
    await navigateTo(redirectTarget())
  } finally {
    loading.value = false
  }*/
}
</script>

<template>
  <div class="relative w-full max-w-md">
    <div class="rounded-2xl border border-[#0F2747]/10 bg-white p-8 shadow-[0_30px_70px_-35px_rgb(45_91_255_/_45%)]">
      <NuxtLink to="/" class="mb-6 block"><img src="/ripples-logo.png" alt="Ripples" class="mx-auto h-20" /></NuxtLink>
      <h1 class="text-center font-heading text-2xl font-extrabold text-ink">{{ tr('เข้าสู่ระบบ', 'Sign In') }}</h1>
      <p class="mt-1 text-center text-sm text-muted">{{ tr('ยินดีต้อนรับกลับมา! กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ', 'Welcome back! Please sign in to continue') }}</p>

      <div class="mt-7 grid grid-cols-3 gap-3">
        <button type="button" class="flex items-center justify-center gap-2 rounded-lg border border-[#0F2747]/15 bg-white px-3 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:bg-surface" @click="social('facebook')">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          <span class="hidden sm:inline">Facebook</span>
        </button>
        <button type="button" class="flex items-center justify-center gap-2 rounded-lg border border-[#0F2747]/15 bg-white px-3 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:bg-surface" @click="social('google')">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
          <span class="hidden sm:inline">Google</span>
        </button>
        <button type="button" class="flex items-center justify-center gap-2 rounded-lg border border-[#0F2747]/15 bg-white px-3 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:bg-surface" @click="social('tiktok')">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#010101" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" /></svg>
          <span class="hidden sm:inline">TikTok</span>
        </button>
      </div>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-[#0F2747]/10" /></div>
        <div class="relative flex justify-center"><span class="bg-white px-3 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">{{ tr('หรือดำเนินการต่อด้วย', 'or continue with') }}</span></div>
      </div>

      <form class="space-y-4" novalidate @submit.prevent="onSubmit">
        <div>
          <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('ชื่อผู้ใช้', 'Username') }}</label>
          <input v-model="username" type="text" :placeholder="tr('กรอกชื่อผู้ใช้ของคุณ', 'Enter your username')" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('รหัสผ่าน', 'Password') }}</label>
          <div class="relative">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" :placeholder="tr('กรอกรหัสผ่านของคุณ', 'Enter your password')" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50" />
            <button type="button" :aria-label="tr('แสดง/ซ่อนรหัสผ่าน', 'Show/hide password')" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink" @click="showPassword = !showPassword">
              <Icon :name="showPassword ? 'eye-off' : 'eye'" class="h-4 w-4" />
            </button>
          </div>
        </div>
        <p v-if="error" class="flex items-center gap-1 text-xs font-medium text-red-500"><Icon name="alert-circle" class="h-3.5 w-3.5 shrink-0" /> {{ error }}</p>
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 text-sm text-muted"><input v-model="remember" type="checkbox" class="h-4 w-4 rounded border-[#0F2747]/20 text-primary" /> {{ tr('จดจำฉัน', 'Remember me') }}</label>
          <NuxtLink to="/forgot-password" class="text-sm font-semibold text-primary hover:underline">{{ tr('ลืมรหัสผ่าน?', 'Forgot password?') }}</NuxtLink>
        </div>
        <button type="submit" :disabled="loading" class="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5 disabled:opacity-60">
          {{ loading ? tr('กำลังเข้าสู่ระบบ...', 'Signing in...') : tr('เข้าสู่ระบบ', 'Sign In') }}
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-muted">{{ tr('ยังไม่มีบัญชี?', "Don't have an account?") }} <NuxtLink to="/register" class="font-semibold text-primary hover:underline">{{ tr('สมัครสมาชิก', 'Sign up') }}</NuxtLink></p>
    </div>

    <p class="mt-6 text-center"><NuxtLink to="/" class="text-sm text-[#5B6B82]/70 transition hover:text-ink">{{ tr('← กลับหน้าหลัก', '← Back to home') }}</NuxtLink></p>
  </div>
</template>
