<script setup lang="ts">
definePageMeta({ layout: 'auth' })
const { tr } = useLocale()
useHead(() => ({ title: tr('ลืมรหัสผ่าน — Ripples', 'Forgot Password — Ripples') }))

const authStore = useAuthStore()
const email = ref('')
const sent = ref(false)
const loading = computed(() => authStore.loading)
const error = ref('')

const validEmail = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))

async function onSubmit() {
  if (!validEmail.value) {
    error.value = tr('รูปแบบอีเมลไม่ถูกต้อง', 'Invalid email format')
    return
  }

  error.value = ''
  const result = await authStore.forgotPassword(email.value)
  sent.value = result

  if (result) {
    email.value = ''
  } else {
    error.value = authStore.error ?? tr('เกิดข้อผิดพลาด', 'Something went wrong')
  }
}
</script>

<template>
  <div class="relative w-full max-w-md">
    <div class="rounded-2xl border border-[#0F2747]/10 bg-white p-8 shadow-[0_30px_70px_-35px_rgb(45_91_255_/_45%)]">
      <NuxtLink to="/" class="mb-6 block"><img src="/ripples-logo.png" alt="Ripples" class="mx-auto h-20" /></NuxtLink>
      <h1 class="text-center font-heading text-2xl font-extrabold text-ink">{{ tr('ลืมรหัสผ่าน', 'Forgot Password') }}</h1>
      <p class="mt-1 text-center text-sm text-muted">{{ tr('กรอกอีเมลของคุณเพื่อรับลิงก์รีเซ็ตรหัสผ่าน', 'Enter your email to receive a password reset link') }}</p>

      <form class="mt-7 space-y-4" novalidate @submit.prevent="onSubmit">
        <div>
          <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('อีเมล', 'Email') }}</label>
          <input v-model="email" type="email" placeholder="your@email.com" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" />
          <p v-if="error" class="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500"><Icon name="alert-circle" class="h-3.5 w-3.5 shrink-0" /> {{ error }}</p>
        </div>
        <button type="submit" :disabled="loading" class="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5 disabled:opacity-60">
          {{ loading ? tr('กำลังส่ง...', 'Sending...') : tr('ส่งลิงก์รีเซ็ต', 'Send reset link') }}
        </button>
      </form>

      <div v-if="sent" class="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <Icon name="check-circle" class="mt-0.5 h-6 w-6 shrink-0 text-primary" />
        <div>
          <p class="font-bold text-ink">{{ tr('ส่งลิงก์รีเซ็ตรหัสผ่านแล้ว', 'Password reset link sent') }}</p>
          <p class="text-sm text-muted">{{ tr('กรุณาตรวจสอบกล่องอีเมลของคุณ', 'Please check your inbox') }}</p>
          <!--<NuxtLink to="/reset-password" class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">{{ tr('(ตัวอย่าง) เปิดหน้าตั้งรหัสผ่านใหม่', '(Demo) Open the reset-password page') }} <Icon name="arrow-right" class="h-3.5 w-3.5" /></NuxtLink>-->
        </div>
      </div>

      <p class="mt-6 text-center text-sm text-muted"><NuxtLink to="/login" class="font-semibold text-primary hover:underline">{{ tr('← กลับไปเข้าสู่ระบบ', '← Back to sign in') }}</NuxtLink></p>
    </div>
  </div>
</template>
