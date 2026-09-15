<template>
  <div class="relative min-h-screen overflow-x-hidden bg-surface font-sans text-ink antialiased">
    <GridOverlay />
    <AppSidebar mode="portal" />
    <MobileTopbar mode="portal" />

    <div class="relative lg:pl-72">
      <slot />
    </div>

    <CookieConsent />
  </div>
</template>
