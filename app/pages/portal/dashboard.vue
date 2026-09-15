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

    <div class="rounded-xl border border-primary/30 bg-primary/5 p-8">
      <div class="mx-auto flex max-w-md flex-col items-center text-center">
        <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Icon name="alert-circle" class="h-10 w-10 text-primary" />
        </div>
        <h1 class="mb-3 font-heading text-2xl font-extrabold text-ink">
            {{ tr('กำลังอยู่ในระหว่างการพัฒนา', 'Under Development') }}
        </h1>
        <p class="mb-8 text-sm text-muted">
            {{ tr('ระบบในส่วนนี้ยังไม่เปิดให้บริการอย่างเป็นทางการ ทีมงานกำลังเร่งพัฒนาฟีเจอร์นี้ให้คุณใช้งานเร็วๆ นี้ ขออภัยในความไม่สะดวกครับ', 'This section is not yet officially available. Our team is working hard to bring this feature to you soon. We apologize for the inconvenience.') }}
        </p>
      </div>
    </div>
  </main>
</template>
