<script setup lang="ts">
import { components } from 'reka-ui/constant'
import PasswordValidateRule from '~/components/common/PasswordValidateRule.vue'

definePageMeta({ layout: 'auth' })
const { tr } = useLocale()
useHead(() => ({ title: tr('ตั้งรหัสผ่านใหม่ — Ripples', 'Reset Password — Ripples') }))

const authStore = useAuthStore()
const route = useRoute()

const password = ref('')
const confirm = ref('')
const showPw = ref(false)
const showConfirm = ref(false)
const done = ref(false)
const loading = computed(() => authStore.loading)
const error = ref('')

const passwordRequirements = reactive({
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  special: false,
})

const validatePassword = () => {
  setTimeout(() => {
    passwordRequirements.length = password.value.length >= 8
    passwordRequirements.uppercase = /[A-Z]/.test(password.value)
    passwordRequirements.lowercase = /[a-z]/.test(password.value)
    passwordRequirements.number = /[0-9]/.test(password.value)
    passwordRequirements.special = /[!@#$%^&*]/.test(password.value)
  }, 300)
}

async function onSubmit() {
  if (password.value.length < 8) {
    error.value = tr('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร', 'Password must be at least 8 characters')
    return
  }

  if (password.value !== confirm.value) {
    error.value = tr('รหัสผ่านไม่ตรงกัน', 'Passwords do not match')
    return
  }

  error.value = ''
  const result = await authStore.resetPassword(String(route.query.token || ''), password.value)

  if (result) {
    done.value = true
    await navigateTo('/login')
  } else {
    error.value = authStore.error ?? tr('เกิดข้อผิดพลาด', 'Something went wrong')
  }
}
</script>

<template>
  <div class="relative w-full max-w-lg">
    <div class="rounded-2xl border border-[#0F2747]/10 bg-white p-8 shadow-[0_30px_70px_-35px_rgb(45_91_255_/_45%)]">
      <NuxtLink to="/" class="mb-6 block"><img src="/ripples-logo.png" alt="Ripples" class="mx-auto h-20" /></NuxtLink>
      <h1 class="text-center font-heading text-2xl font-extrabold text-ink">{{ tr('ตั้งรหัสผ่านใหม่', 'Reset Password') }}</h1>
      <p class="mt-1 text-center text-sm text-muted">{{ tr('กรอกรหัสผ่านใหม่ของคุณ', 'Enter your new password') }}</p>

      <form class="mt-7 space-y-4" novalidate @submit.prevent="onSubmit">
        <div>
          <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('รหัสผ่านใหม่', 'New password') }}</label>
          <div class="relative">
            <input 
              v-model="password" 
              :type="showPw ? 'text' : 'password'" 
              placeholder="••••••••" 
              @input="validatePassword()"
              class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50" />
            <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink" @click="showPw = !showPw"><Icon :name="showPw ? 'eye-off' : 'eye'" class="h-4 w-4" /></button>
          </div>
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('ยืนยันรหัสผ่านใหม่', 'Confirm new password') }}</label>
          <div class="relative">
            <input v-model="confirm" :type="showConfirm ? 'text' : 'password'" placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50" />
            <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink" @click="showConfirm = !showConfirm"><Icon :name="showConfirm ? 'eye-off' : 'eye'" class="h-4 w-4" /></button>
          </div>
        </div>
        <PasswordValidateRule
          :password="password"
          :password-requirements="passwordRequirements"
        />
        <p v-if="error" class="flex items-center gap-1 text-xs font-medium text-red-500"><Icon name="alert-circle" class="h-3.5 w-3.5 shrink-0" /> {{ error }}</p>
        <button type="submit" :disabled="loading" class="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5 disabled:opacity-60">
          {{ loading ? tr('กำลังบันทึก...', 'Saving...') : tr('รีเซ็ตรหัสผ่าน', 'Reset Password') }}
        </button>
      </form>

      <div v-if="done" class="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <Icon name="check-circle" class="mt-0.5 h-6 w-6 shrink-0 text-primary" />
        <div><p class="font-bold text-ink">{{ tr('เปลี่ยนรหัสผ่านสำเร็จ', 'Password changed successfully') }}</p><p class="text-sm text-muted">{{ tr('ตอนนี้คุณสามารถเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้แล้ว ·', 'You can now sign in with your new password ·') }} <NuxtLink to="/login" class="font-semibold text-primary hover:underline">{{ tr('เข้าสู่ระบบ', 'Sign In') }}</NuxtLink></p></div>
      </div>

      <p class="mt-6 text-center text-sm text-muted"><NuxtLink to="/login" class="font-semibold text-primary hover:underline">{{ tr('← กลับไปเข้าสู่ระบบ', '← Back to sign in') }}</NuxtLink></p>
    </div>
  </div>
</template>
