<script setup lang="ts">
const auth = useAuthStore()
const api = useApi()
const { tr } = useLocale()

const isResending = ref(false)

const resendVerification = async () => {
  if (isResending.value) return
  isResending.value = true
  
  try {
    await api.post('/auth/email/resend')
    toast.success(tr('ส่งอีเมลยืนยันอีกครั้งเรียบร้อย', 'Verification email sent!'))
  } catch (e: any) {
    toast.error(e.data?.error?.message || tr('ไม่สามารถส่งอีเมลยืนยันได้', 'Failed to resend email'))
  } finally {
    isResending.value = false
  }
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-surface font-sans text-ink antialiased">
    <GridOverlay />
    <AppSidebar mode="portal" />
    <MobileTopbar mode="portal" />

    <div class="relative lg:pl-72">
      <!-- Email Verification Alert -->
      <div 
        v-if="auth.user && auth.user.email_verified === false" 
        class="lg:left-[18rem] lg:absolute z-50 top-0 inset-x-0 mx-auto bg-amber-100 border border-amber-200 shadow-sm text-amber-700 px-4 py-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <Icon name="alert-triangle" class="h-5 w-5 flex-shrink-0" />
          <p class="text-sm flex flex-col lg:flex-row lg:gap-2 gap-0.5">
            <span class="font-semibold">{{ tr('อีเมลยังไม่ได้รับการยืนยัน', 'Email not verified.') }}</span>
            <span>{{ tr('โปรดตรวจสอบอีเมลของคุณและยืนยันให้เรียบร้อย', 'Please check your inbox and verify your email.') }}</span>
          </p>
        </div>
        <button 
          @click="resendVerification" 
          :disabled="isResending" 
          class="text-sm font-medium underline hover:text-amber-700 disabled:opacity-50 whitespace-nowrap ml-4 flex items-center gap-1"
        >
          <Icon v-if="isResending" name="loader-circle" class="h-4 w-4 animate-spin" />
          {{ isResending ? tr('กำลังส่ง...', 'Sending...') : tr('ส่งอีเมลยืนยันอีกครั้ง', 'Resend Email') }}
        </button>
      </div>

      <slot />
    </div>

    <CookieConsent />
  </div>
</template>
