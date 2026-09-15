<script setup lang="ts">
const props = withDefaults(defineProps<{ mode?: 'public' | 'portal' }>(), { mode: 'public' })

const route = useRoute()
const authStore = useAuthStore()
const { tr } = useLocale()
const open = ref(false)

const menu = computed(() => (props.mode === 'portal' ? portalMenu : publicMenu))

function isActive(item: NavItem) {
  if (item.to === '/') return route.path === '/'
  return route.path === item.to || route.path.startsWith(item.to + '/')
}

const displayName = computed(() => {
  const u = authStore.user
  return u ? `${u.firstName} ${u.lastName}`.trim() : 'สมใจ ใจดี'
})
const handle = computed(() => authStore.user?.username || 'somsai_jd')
const avatar = computed(() => authStore.user?.avatar || 'https://i.pravatar.cc/120?img=32')

function logout() {
  open.value = false
  authStore.logout()
  navigateTo('/')
}

// close drawer on navigation
watch(() => route.path, () => { open.value = false })
</script>

<template>
  <header class="sticky top-0 z-40 flex items-center justify-between border-b border-[#0F2747]/10 bg-white/90 px-6 py-4 backdrop-blur-md lg:hidden">
    <NuxtLink :to="mode === 'portal' ? '/portal/dashboard' : '/'">
      <img src="/ripples-logo.png" alt="Ripples" class="h-16" />
    </NuxtLink>
    <div class="flex items-center gap-2.5">
      <NotificationBell v-if="mode === 'portal'" />
      <button
        type="button"
        aria-label="Menu"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2747]/10 bg-white text-ink shadow-sm"
        @click="open = true"
      >
        <Icon name="menu" class="h-5 w-5" />
      </button>
    </div>
  </header>

  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-150"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-[70] bg-ink/40 lg:hidden" @click="open = false" />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-200 ease-out"
      enter-from-class="translate-x-full"
      leave-active-class="transition-transform duration-150 ease-in"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="open"
        class="fixed inset-y-0 right-0 z-[71] flex w-72 max-w-[85vw] flex-col overflow-y-auto bg-white px-6 py-7 lg:hidden"
      >
        <div class="flex items-center justify-between">
          <img src="/ripples-logo.png" alt="Ripples" class="h-16" />
          <button
            type="button"
            aria-label="ปิด"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-[#5B6B82]/60 transition hover:bg-surface hover:text-ink"
            @click="open = false"
          >
            <Icon name="x" class="h-5 w-5" />
          </button>
        </div>

        <div v-if="mode === 'portal'" class="mt-6 flex items-center gap-3 rounded-xl border border-[#0F2747]/10 bg-surface p-3">
          <img :src="avatar" :alt="displayName" class="h-11 w-11 shrink-0 rounded-full object-cover" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-bold text-ink">{{ displayName }}</p>
            <p class="text-xs text-muted">Creator · @{{ handle }}</p>
          </div>
        </div>
        <NuxtLink
          v-else
          to="/login"
          class="mt-6 flex items-center justify-between gap-2 rounded-lg bg-primary px-4 py-3 text-white shadow-sm transition hover:bg-primaryDark"
        >
          <span class="text-sm font-bold">{{ tr('เข้าสู่ระบบ', 'Sign in') }}</span>
          <Icon name="arrow-right" class="h-4 w-4" />
        </NuxtLink>

        <nav class="mt-6 flex flex-1 flex-col gap-0.5">
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

        <button
          v-if="mode === 'portal'"
          type="button"
          class="mt-6 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          @click="logout"
        >
          <Icon name="log-out" class="h-[18px] w-[18px]" /> {{ tr('ออกจากระบบ', 'Log out') }}
        </button>
        <div class="mt-5 flex items-center justify-between gap-3 border-t border-[#0F2747]/10 pt-5">
          <LangToggle />
          <SocialLinks />
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>
