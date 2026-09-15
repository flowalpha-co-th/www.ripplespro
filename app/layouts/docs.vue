<script setup lang="ts">
const { tr } = useLocale()
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[#E9EEF6] font-sans text-ink antialiased">
    <GridOverlay />

    <header class="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-[#0F2747]/10 bg-white/90 px-6 py-4 backdrop-blur-md lg:px-10">
      <NuxtLink to="/docs" class="flex items-center gap-3">
        <img src="/ripples-logo.png" alt="Ripples" class="h-12" />
        <span class="hidden rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary sm:inline">{{ tr('เอกสารสำหรับทีม', 'Team Docs') }}</span>
      </NuxtLink>
      <div class="flex items-center gap-2.5">
        <NuxtLink to="/docs" class="inline-flex items-center gap-1.5 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm transition hover:border-primary/40 hover:text-primary"><Icon name="layout-grid" class="h-4 w-4" /> {{ tr('ดัชนีเอกสาร', 'Docs index') }}</NuxtLink>
        <NuxtLink to="/" class="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-primaryDark"><Icon name="arrow-left" class="h-4 w-4" /> {{ tr('กลับเข้าแอป', 'Back to app') }}</NuxtLink>
      </div>
    </header>

    <main class="relative mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <slot />
    </main>
  </div>
</template>
