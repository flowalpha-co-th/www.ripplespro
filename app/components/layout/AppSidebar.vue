<script setup lang="ts">
const props = withDefaults(defineProps<{ mode?: 'public' | 'portal' }>(), { mode: 'public' })

const route = useRoute()
const authStore = useAuthStore()
const { tr } = useLocale()

const menu = computed(() => (props.mode === 'portal' ? portalMenu : publicMenu))

function isActive(item: NavItem) {
  if (item.to === '/') return route.path === '/'
  return route.path === item.to || route.path.startsWith(item.to + '/')
}

const displayName = computed(() => {
  const u = authStore.user
  return u ? `${u.influencer?.first_name || ''} ${u.influencer?.last_name || ''}`.trim() : ''
})

const handle = computed(() => authStore.user?.username)
const avatar = computed(() => authStore.user?.influencer?.avatar || '')
async function logout() {
  await authStore.logout()
  await navigateTo('/')
}
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-50 hidden w-72 flex-col overflow-y-auto border-r border-[#0F2747]/10 bg-white px-6 py-7 lg:flex">
    <!-- logo -->
    <NuxtLink to="/" class="self-center">
      <img src="/ripples-logo.png" alt="Ripples" class="h-24" />
    </NuxtLink>

    <!-- identity (portal) / login CTA (public) -->
    <div v-if="mode === 'portal'" class="mt-7 flex items-center gap-3 rounded-xl border border-[#0F2747]/10 bg-surface p-3">
      <Avatar 
        :alt="handle" 
        :src="avatar" 
        class="h-11 w-11 shrink-0 rounded-full object-cover"
      />
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-bold text-ink">{{ displayName }}</p>
        <p class="text-xs text-muted">Creator · @{{ handle }}</p>
      </div>
      <NotificationBell extra="shrink-0" align="left" />
    </div>
    <div v-else class="mt-7">
      <NuxtLink
        :to="authStore.user ? '/portal/dashboard' : '/login'"
        class="flex items-center justify-between gap-2 rounded-lg bg-primary px-4 py-3 text-white shadow-[0_6px_16px_-6px_rgb(45_91_255_/_55%)] transition hover:bg-primaryDark"
      >
        <span class="text-left leading-tight">
          <span class="block text-[9px] font-bold uppercase tracking-wide text-white/70">Influencer / Creator</span>
          <span class="mt-0.5 block text-sm font-bold">{{ !authStore.user ? tr('เข้าสู่ระบบ', 'Sign in') : tr('ไปที่หน้าแดชบอร์ด', 'Go to Dashboard') }}</span>
        </span>
        <Icon name="arrow-right" class="h-4 w-4 shrink-0" />
      </NuxtLink>
    </div>

    <!-- nav -->
    <nav class="mt-7 flex flex-1 flex-col gap-0.5">
      <NuxtLink
        v-for="item in menu"
        :key="item.key"
        :to="item.to"
        :class="[
          'rounded-lg px-3 py-2.5 text-sm font-semibold transition',
          isActive(item) ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-primary/5 hover:text-primary',
        ]"
      >
        <span v-if="item.icon" class="flex items-center gap-3">
          <Icon :name="item.icon" class="h-[18px] w-[18px]" />
          <span>{{ tr(item.label, item.labelEn) }}</span>
        </span>
        <span v-else>{{ tr(item.label, item.labelEn) }}</span>
      </NuxtLink>
    </nav>

    <!-- footer -->
    <div v-if="mode === 'portal'" class="mt-6">
      <button
        type="button"
        class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        @click="logout"
      >
        <Icon name="log-out" class="h-[18px] w-[18px]" /> {{ tr('ออกจากระบบ', 'Log out') }}
      </button>
      <div class="mt-5 flex items-center justify-between gap-3 border-t border-[#0F2747]/10 pt-5">
        <LangToggle />
        <SocialLinks />
      </div>
    </div>
    <div v-else class="mt-6 space-y-5">
      <LangToggle />
      <p class="text-[11px] leading-relaxed text-muted">
        {{ tr('Marketplace KOL & Influencer ยุคใหม่ — สำหรับแบรนด์และ creator ในประเทศไทย', 'The modern KOL & Influencer marketplace — for brands and creators in Thailand') }}
      </p>
      <SocialLinks />
    </div>
  </aside>
</template>
