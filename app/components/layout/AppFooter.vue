<script setup lang="ts">
const { tr } = useLocale()
const { openSettings } = useCookieConsent()

const cols = [
  {
    title: 'สำหรับ Creator',
    titleEn: 'For Creators',
    links: [
      { label: 'ค้นหาแคมเปญ', labelEn: 'Find campaigns', to: '/login' },
      { label: 'วิธีการทำงาน', labelEn: 'How it works', to: '/services' },
      { label: 'สมัครสมาชิก', labelEn: 'Sign up', to: '/register' },
      { label: 'เข้าสู่ระบบ', labelEn: 'Sign in', to: '/login' },
    ],
  },
  {
    title: 'บริษัท',
    titleEn: 'Company',
    links: [
      { label: 'เกี่ยวกับเรา', labelEn: 'About us', to: '/about' },
      { label: 'บริการ', labelEn: 'Services', to: '/services' },
      { label: 'ติดต่อเรา', labelEn: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'ช่วยเหลือ',
    titleEn: 'Help',
    links: [
      { label: 'คำถามที่พบบ่อย', labelEn: 'FAQ', to: '/faq' },
      { label: 'เงื่อนไขการใช้บริการ', labelEn: 'Terms of Service', to: '/terms' },
      { label: 'นโยบายความเป็นส่วนตัว', labelEn: 'Privacy Policy', to: '/privacy' },
      { label: 'นโยบายคุกกี้', labelEn: 'Cookie Policy', to: '/cookies' },
    ],
  },
]

const isDev = computed(() => import.meta.env.MODE === 'development')
</script>

<template>
  <footer class="mt-20 border-t border-[#0F2747]/10 pt-12 lg:mt-28">
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2 lg:col-span-1">
        <img src="/ripples-logo.png" alt="Ripples" class="h-20" />
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {{ tr('Marketplace KOL & Influencer', 'The modern KOL & Influencer') }}<br />{{ tr('ยุคใหม่ — สำหรับแบรนด์และ creator ในประเทศไทย', 'marketplace — for brands and creators in Thailand') }}
        </p>
        <div class="mt-5">
          <SocialLinks />
        </div>
      </div>

      <div v-for="col in cols" :key="col.title">
        <p class="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">{{ tr(col.title, col.titleEn) }}</p>
        <ul class="space-y-2.5">
          <li v-for="link in col.links" :key="link.label">
            <NuxtLink :to="link.to" class="text-sm text-muted transition hover:text-primary">{{ tr(link.label, link.labelEn) }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#0F2747]/10 py-7 sm:flex-row">
      <p class="text-[11px] text-[#5B6B82]/60">© 2026 Ripples · {{ tr('สงวนลิขสิทธิ์', 'All rights reserved') }}</p>
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="text-[11px] font-semibold text-[#5B6B82]/70 transition hover:text-primary"
          @click="openSettings()"
        >
          {{ tr('ตั้งค่าคุกกี้', 'Cookie settings') }}
        </button>
        <NuxtLink
          v-if="isDev"
          to="/docs" class="text-[11px] font-semibold text-[#5B6B82]/70 transition hover:text-primary"
        >
          {{ tr('เอกสารทีม', 'Team docs') }}
        </NuxtLink>
        <p class="text-[11px] text-[#5B6B82]/60">{{ tr('บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)', 'Prakit Holdings Public Company Limited') }}</p>
      </div>
    </div>
  </footer>
</template>
