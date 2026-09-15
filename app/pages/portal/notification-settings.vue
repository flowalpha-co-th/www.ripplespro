<script setup lang="ts">

import { notifCats, notifMatrix, tintOf, type NotifCategory } from '~/data/notifications'

definePageMeta({ layout: 'portal', middleware: 'auth' })
const { tr } = useLocale()
useHead(() => ({ title: tr('ตั้งค่าการแจ้งเตือน — Ripples', 'Notification settings — Ripples') }))

const notifications = useNotificationsStore()

const cats = Object.keys(notifCats) as NotifCategory[]

function eventCount(cat: NotifCategory) {
  return notifMatrix[cat]?.length ?? 0
}
function mandatoryCount(cat: NotifCategory) {
  return notifMatrix[cat]?.filter(e => e.mandatory).length ?? 0
}
function catSubtext(cat: NotifCategory) {
  const base = `${eventCount(cat)} ${tr('ประเภทเหตุการณ์', 'event types')}`
  if (notifCats[cat].locked) return `${base} · ${tr('บังคับรับอีเมล เพื่อความปลอดภัยของบัญชี', 'email required for account security')}`
  const m = mandatoryCount(cat)
  return m ? `${base} · ${m} ${tr('รายการบังคับ', 'required')}` : base
}
// locked categories render as always-on
function emailOn(cat: NotifCategory) {
  return notifCats[cat].locked ? true : notifications.emailSettings[cat]
}

function saveSettings() {
  toast.success(tr('บันทึกการตั้งค่าแล้ว', 'Settings saved'))
}
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
    <section class="mb-6">
      <NuxtLink to="/portal/notifications" class="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-muted transition hover:text-primary"><Icon name="arrow-left" class="h-4 w-4" /> {{ tr('กลับไปการแจ้งเตือน', 'Back to notifications') }}</NuxtLink>
      <h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">{{ tr('ตั้งค่าการแจ้งเตือน', 'Notification settings') }}</h1>
      <p class="mt-1 text-sm text-muted">{{ tr('เลือกว่าจะรับอีเมลในหมวดไหนบ้าง — การแจ้งเตือนในเว็บจะแสดงทุกหมวดเสมอ', 'Choose which categories you receive emails for — in-app notifications always show every category.') }}</p>
    </section>

    <!-- legend -->
    <section class="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-[#0F2747]/10 bg-white p-4 text-sm">
      <span class="flex items-center gap-2"><Icon name="monitor" class="h-4 w-4 text-primary" /> <b class="text-ink">{{ tr('ในเว็บ', 'In-app') }}</b> <span class="text-muted">{{ tr('— แสดงเสมอ ปิดไม่ได้', '— always on, can’t be turned off') }}</span></span>
      <span class="flex items-center gap-2"><Icon name="mail" class="h-4 w-4 text-primary" /> <b class="text-ink">{{ tr('อีเมล', 'Email') }}</b> <span class="text-muted">{{ tr('— เปิด/ปิดได้รายหมวด', '— toggle per category') }}</span></span>
      <span class="flex items-center gap-2"><Icon name="lock" class="h-4 w-4 text-rose-500" /> <span class="text-muted">{{ tr('หมวดที่ล็อก = บังคับรับ (ความปลอดภัย/การเงิน)', 'Locked categories are required (security/payments)') }}</span></span>
    </section>

    <!-- per-category email toggles -->
    <section class="space-y-3">
      <div v-for="cat in cats" :key="cat" class="flex items-center justify-between gap-4 rounded-2xl border border-[#0F2747]/10 bg-white p-5">
        <div class="flex min-w-0 items-start gap-3.5">
          <span :class="['flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', tintOf(cat).bg, tintOf(cat).fg]"><Icon :name="notifCats[cat].icon" class="h-5 w-5" /></span>
          <div class="min-w-0">
            <p class="flex items-center gap-2 font-bold text-ink">{{ tr(notifCats[cat].label, notifCats[cat].labelEn) }}<Icon v-if="notifCats[cat].locked" name="lock" class="h-3.5 w-3.5 text-rose-400" /></p>
            <p class="mt-0.5 text-xs text-muted">{{ catSubtext(cat) }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2.5 text-xs">
          <span class="hidden items-center gap-1 text-muted sm:flex"><Icon name="mail" class="h-3.5 w-3.5" /> {{ tr('อีเมล', 'Email') }}</span>
          <button
            type="button"
            :disabled="notifCats[cat].locked"
            :class="['relative h-7 w-12 shrink-0 rounded-full transition', emailOn(cat) ? 'bg-primary' : 'bg-[#0F2747]/15', notifCats[cat].locked ? 'cursor-not-allowed opacity-60' : '']"
            @click="notifications.toggleEmail(cat)"
          >
            <span :class="['absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all', emailOn(cat) ? 'left-6' : 'left-1']" />
          </button>
        </div>
      </div>
    </section>

    <!-- digest -->
    <section class="mt-6 rounded-2xl border border-[#0F2747]/10 bg-white p-6">
      <h2 class="font-heading text-base font-bold text-ink">{{ tr('สรุปรวม (Digest) &amp; กันสแปม', 'Digest &amp; anti-spam') }}</h2>
      <div class="mt-4 flex items-center justify-between gap-3 rounded-xl bg-surface p-4">
        <div>
          <p class="font-bold text-ink">{{ tr('แคมเปญแนะนำ — สรุปรายสัปดาห์', 'Recommended campaigns — weekly digest') }}</p>
          <p class="mt-0.5 text-xs text-muted">{{ tr('รวมแคมเปญที่ตรง niche ของคุณส่งเป็นอีเมลสัปดาห์ละครั้ง แทนการส่งทีละแคมเปญ', 'Bundle campaigns matching your niche into one weekly email instead of sending each one separately.') }}</p>
        </div>
        <button
          type="button"
          :class="['relative h-7 w-12 shrink-0 rounded-full transition', notifications.digestWeekly ? 'bg-primary' : 'bg-[#0F2747]/15']"
          @click="notifications.digestWeekly = !notifications.digestWeekly"
        >
          <span :class="['absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all', notifications.digestWeekly ? 'left-6' : 'left-1']" />
        </button>
      </div>
      <p class="mt-3 text-xs leading-relaxed text-[#5B6B82]/70">{{ tr('ℹ️ ระบบจะรวมเหตุการณ์ที่เกิดใกล้กันเป็นอีเมลฉบับเดียว และไม่ส่งซ้ำสำหรับเหตุการณ์เดิมภายในช่วงเวลาสั้น ๆ', 'ℹ️ We combine events that happen close together into a single email and avoid resending the same event within a short window.') }}</p>
    </section>

    <div class="mt-6 flex justify-end">
      <button type="button" class="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primaryDark" @click="saveSettings">{{ tr('บันทึกการตั้งค่า', 'Save settings') }}</button>
    </div>
  </main>
</template>
