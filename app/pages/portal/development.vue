<script setup lang="ts">
const { tr } = useLocale()

definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead(() => ({ title: tr('กำลังพัฒนา — Ripples', 'Under Development — Ripples') }))
</script>

<template>
  <main class="flex items-center justify-center mx-auto w-full max-w-6xl px-6 py-20 lg:px-12">
    <div class="flex max-w-md flex-col items-center text-center">
      <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <Icon name="alert-circle" class="h-10 w-10 text-primary" />
      </div>
      <h1 class="mb-3 font-heading text-2xl font-extrabold text-ink">
        {{ tr('กำลังอยู่ในระหว่างการพัฒนา', 'Under Development') }}
      </h1>
      <p class="mb-8 text-sm text-muted">
        {{ tr('ระบบในส่วนนี้ยังไม่เปิดให้บริการอย่างเป็นทางการ ทีมงานกำลังเร่งพัฒนาฟีเจอร์นี้ให้คุณใช้งานเร็วๆ นี้ ขออภัยในความไม่สะดวกครับ', 'This section is not yet officially available. Our team is working hard to bring this feature to you soon. We apologize for the inconvenience.') }}
      </p>
      <NuxtLink
        to="/portal/dashboard"
        class="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primaryDark"
      >
        <Icon name="arrow-left" class="h-4 w-4" />
        {{ tr('กลับหน้าแดชบอร์ด', 'Back to Dashboard') }}
      </NuxtLink>
    </div>
  </main>
</template>
