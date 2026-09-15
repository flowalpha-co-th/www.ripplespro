<script setup lang="ts">
import { tintOf } from '~/data/notifications'

const { tr } = useLocale()

definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead(() => ({ title: tr('แดชบอร์ด — Ripples', 'Dashboard — Ripples') }))

const notifications = useNotificationsStore()
const authStore = useAuthStore()
const user = computed(() => authStore.currentUser)

const displayName = computed(() => {
  return user.value ? `${user.value.influencer?.first_name || ''}`.trim() : ''
})

type Stat = { icon: string; label: string; labelEn: string; value: string; to: string }
const stats: Stat[] = [
  { icon: 'wallet', label: 'ยอดเงินในกระเป๋า', labelEn: 'Wallet balance', value: `฿${user.value?.influencer?.wallet_balance}`, to: '/portal/wallet' },
  { icon: 'briefcase', label: 'แคมเปญที่กำลังทำ', labelEn: 'Active campaigns', value: '3', to: '/portal/campaigns' },
  { icon: 'clock', label: 'งานที่ต้องส่ง', labelEn: 'Tasks to submit', value: '1', to: '/portal/tasks' },
  { icon: 'alert-circle', label: 'งานที่ต้องแก้ไข', labelEn: 'Tasks to revise', value: '1', to: '/portal/tasks' },
]

type Txn = { title: string; titleEn: string; date: string; amount: number; status: 'completed' | 'pending' }
const txns: Txn[] = [
  { title: 'รายได้จากแคมเปญ Gadget Review', titleEn: 'Earnings from Gadget Review', date: '24 มี.ค. 2026', amount: 20000, status: 'completed' },
  { title: 'รายได้จากแคมเปญ Summer Fashion', titleEn: 'Earnings from Summer Fashion', date: '10 มี.ค. 2026', amount: 15000, status: 'completed' },
  { title: 'รายได้จากแคมเปญ Skincare (รออนุมัติ)', titleEn: 'Earnings from Skincare (awaiting approval)', date: '18 มี.ค. 2026', amount: 8000, status: 'pending' },
  { title: 'รายได้จากแคมเปญ Fitness (รอแก้ไข)', titleEn: 'Earnings from Fitness (pending revision)', date: '25 มี.ค. 2026', amount: 12000, status: 'pending' },
]

const notifList = computed(() => notifications.items.slice(0, 4))

type Action = { icon: string; title: string; titleEn: string; desc: string; descEn: string; to: string }
const actions: Action[] = [
  { icon: 'briefcase', title: 'หาแคมเปญ', titleEn: 'Find campaigns', desc: 'ค้นหางานที่ใช่', descEn: 'Discover the right jobs', to: '/portal/campaigns' },
  { icon: 'user', title: 'อัปเดตโปรไฟล์', titleEn: 'Update profile', desc: 'แก้ไขข้อมูลของคุณ', descEn: 'Edit your information', to: '/portal/profile' },
  { icon: 'wallet', title: 'ดูรายได้', titleEn: 'View earnings', desc: 'กระเป๋าเงินและประวัติ', descEn: 'Wallet and history', to: '/portal/wallet' },
]

const fmt = (n: number) => n.toLocaleString()
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
    <section class="mb-8">
      <h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">{{ tr(`ยินดีต้อนรับกลับ, ${displayName}!`, `Welcome back, ${displayName}!`) }}</h1>
      <p class="mt-1 text-sm text-muted">{{ tr('สรุปกิจกรรมในบัญชีของคุณวันนี้', "Here's a summary of your account activity today") }}</p>
    </section>

    <!-- stat cards -->
    <section class="mb-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <NuxtLink
        v-for="s in stats"
        :key="s.label"
        :to="s.to"
        class="group rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_35%)]"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-muted">{{ tr(s.label, s.labelEn) }}</p>
            <p class="mt-1 font-heading text-2xl font-extrabold text-ink">{{ s.value }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 shrink-0">
            <Icon :name="s.icon" class="h-6 w-6 text-primary shrink-0" />
          </div>
        </div>
        <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">{{ tr('ดูรายละเอียด', 'View details') }} <Icon name="arrow-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
      </NuxtLink>
    </section>

    <!-- main grid -->
    <section class="grid gap-6 lg:grid-cols-3">
      <!-- transactions -->
      <div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:col-span-2">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-heading text-lg font-bold text-ink">{{ tr('ประวัติการรับเงินล่าสุด', 'Recent payouts') }}</h2>
          <NuxtLink to="/portal/wallet" class="text-xs font-bold text-primary">{{ tr('ดูทั้งหมด', 'View all') }} →</NuxtLink>
        </div>
        <div class="space-y-3">
          <div
            v-for="t in txns"
            :key="t.title"
            class="flex items-center justify-between rounded-xl border border-[#0F2747]/10 bg-surface p-4"
          >
            <div class="flex items-center gap-3">
              <div :class="['flex h-10 w-10 items-center justify-center rounded-lg', t.status === 'completed' ? 'bg-primary/10 text-primary' : 'bg-amber-50 text-amber-500']">
                <Icon :name="t.status === 'completed' ? 'trending-up' : 'clock'" class="h-5 w-5" />
              </div>
              <div>
                <p class="text-sm font-semibold text-ink">{{ tr(t.title, t.titleEn) }}</p>
                <p class="text-xs text-muted">{{ t.date }}</p>
              </div>
            </div>
            <div class="text-right">
              <p :class="['font-bold', t.status === 'completed' ? 'text-primary' : 'text-amber-600']">+฿{{ fmt(t.amount) }}</p>
              <span :class="['rounded-full px-2 py-0.5 text-[10px] font-bold', t.status === 'completed' ? 'bg-primary/10 text-primary' : 'bg-amber-100 text-amber-700']">{{ t.status === 'completed' ? tr('รับเงินแล้ว', 'Paid') : tr('รอรับเงิน', 'Pending') }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- notifications -->
      <div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-heading text-lg font-bold text-ink">{{ tr('การแจ้งเตือน', 'Notifications') }}</h2>
          <span v-if="notifications.unreadCount > 0" class="rounded-md bg-primary px-2.5 py-0.5 text-[10px] font-bold text-white">{{ notifications.unreadCount }} {{ tr('ใหม่', 'new') }}</span>
        </div>
        <div class="space-y-1">
          <NuxtLink
            v-for="n in notifList"
            :key="n.id"
            :to="`/portal/${n.link}`"
            class="flex items-start gap-3 rounded-lg p-3 transition hover:bg-surface"
          >
            <div :class="['flex h-9 w-9 shrink-0 items-center justify-center rounded-lg', tintOf(n.cat).bg, tintOf(n.cat).fg]">
              <Icon :name="n.icon" class="h-4 w-4" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-ink">{{ tr(n.title, n.titleEn) }}</p>
              <p class="line-clamp-2 text-xs text-muted">{{ tr(n.msg, n.msgEn) }}</p>
              <p class="mt-0.5 text-[11px] text-[#5B6B82]/60">{{ tr(n.ago, n.agoEn) }}</p>
            </div>
            <span v-if="!n.read" :class="['mt-1.5 h-2 w-2 shrink-0 rounded-full', tintOf(n.cat).dot]" />
          </NuxtLink>
        </div>
        <NuxtLink to="/portal/notifications" class="mt-3 block rounded-lg py-2 text-center text-sm font-bold text-primary transition hover:bg-primary/5">{{ tr('ดูทั้งหมด', 'View all') }}</NuxtLink>
      </div>
    </section>

    <!-- quick actions -->
    <section class="mt-8">
      <h2 class="mb-4 font-heading text-lg font-bold text-ink">{{ tr('ทางลัด', 'Shortcuts') }}</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="a in actions"
          :key="a.title"
          :to="a.to"
          class="flex items-center gap-4 rounded-xl border border-[#0F2747]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_35%)]"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
            <Icon :name="a.icon" class="h-6 w-6 text-primary" />
          </div>
          <div>
            <p class="font-bold text-ink">{{ tr(a.title, a.titleEn) }}</p>
            <p class="text-xs text-muted">{{ tr(a.desc, a.descEn) }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
