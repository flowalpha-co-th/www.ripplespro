<script setup lang="ts">
definePageMeta({ layout: 'default' })
const { tr } = useLocale()
useHead(() => ({ title: tr('Ripples — เปลี่ยนคอนเทนต์ให้เป็นรายได้จริง', 'Ripples — Turn content into real income') }))

const authStore = useAuthStore()
function goCampaigns() {
  if (authStore.isAuthenticated) {
    return navigateTo('/portal/campaigns')
  }
  return navigateTo({ path: '/login', query: { redirect: '/portal/campaigns' } })
}

type Tone = 'open' | 'soon' | 'new'
interface Campaign {
  cat: string
  catEn: string
  brand: string
  title: string
  d: string
  dEn: string
  budget: string
  spots: string
  deadline: string
  deadlineEn: string
  plat: string
  tone: Tone
  img: string
}

const TONE: Record<Tone, { label: string, labelEn: string, cls: string, dot: boolean }> = {
  open: { label: 'เปิดรับสมัคร', labelEn: 'Open', cls: 'bg-primary text-white', dot: true },
  soon: { label: 'ใกล้ปิดรับ', labelEn: 'Closing soon', cls: 'bg-amber-400 text-[#0F2747]', dot: false },
  new: { label: 'มาใหม่', labelEn: 'New', cls: 'bg-green-500 text-white', dot: false },
}

// จอแรก — แคมเปญแนะนำแบบเลื่อน (สูงสุด 5)
const featured: Campaign[] = [
  { cat: 'แฟชั่น', catEn: 'Fashion', brand: 'Fashion Brand Co.', title: 'Summer Collection 2026', d: 'ร่วมโปรโมทคอลเลกชั่นแฟชั่นใหม่ล่าสุดสำหรับซัมเมอร์นี้ มองหา Influencer ที่สไตล์การแต่งตัวโดดเด่นบน Instagram', dEn: 'Help promote the latest summer fashion collection. Looking for influencers with standout style on Instagram.', budget: '฿15,000 – 30,000', spots: '45/50', deadline: '30 เม.ย. 2026', deadlineEn: '30 Apr 2026', plat: 'Instagram', tone: 'open', img: 'photo-1483985988355-763728e1935b' },
  { cat: 'ความงาม', catEn: 'Beauty', brand: "L'Oréal Thailand", title: "L'Oréal Serum Review", d: 'เปิดตัว serum บำรุงผิวสูตรใหม่ มองหา beauty influencer ที่มีความรู้ด้าน skincare มารีวิวการใช้งานจริง', dEn: 'Launching a new skincare serum. Looking for beauty influencers with skincare expertise to review real-world use.', budget: '฿12,000 – 24,000', spots: '28/50', deadline: '1 พ.ค. 2026', deadlineEn: '1 May 2026', plat: 'Instagram', tone: 'open', img: 'photo-1596462502278-27bfdc403348' },
  { cat: 'ฟิตเนส', catEn: 'Fitness', brand: 'Nike Thailand', title: 'Nike Running Club', d: 'แคมเปญรองเท้าวิ่งคอลเลกชั่นใหม่ มองหา fitness influencer มาร่วมท้าทายการวิ่งและสร้างแรงบันดาลใจ', dEn: 'New running shoe collection campaign. Looking for fitness influencers to join the running challenge and inspire.', budget: '฿9,000 – 18,000', spots: '12/30', deadline: '30 มิ.ย. 2026', deadlineEn: '30 Jun 2026', plat: 'Instagram', tone: 'soon', img: 'photo-1542291026-7eec264c27ff' },
  { cat: 'เทคโนโลยี', catEn: 'Technology', brand: 'TechZone', title: 'Tech Review Q2', d: 'รีวิวสมาร์ทโฟนและแกดเจ็ตใหม่ล่าสุด มองหา tech reviewer บน YouTube ที่เล่าฟีเจอร์ได้เข้าใจง่าย', dEn: 'Reviewing the latest smartphones and gadgets. Looking for YouTube tech reviewers who explain features clearly.', budget: '฿8,000 – 16,000', spots: '8/50', deadline: '15 มิ.ย. 2026', deadlineEn: '15 Jun 2026', plat: 'YouTube', tone: 'open', img: 'photo-1511707171634-5f897ff02aa9' },
  { cat: 'อาหาร', catEn: 'Food', brand: 'Taste Kitchen', title: 'Food Festival Promo', d: 'โปรโมทเทศกาลอาหารสุดยิ่งใหญ่ มองหา food blogger มารีวิวเมนูเด็ดแบบน่ากิน กระตุ้นการสั่งซื้อ', dEn: 'Promoting a major food festival. Looking for food bloggers to review signature dishes appetisingly.', budget: '฿10,000 – 20,000', spots: '18/100', deadline: '28 มิ.ย. 2026', deadlineEn: '28 Jun 2026', plat: 'TikTok', tone: 'new', img: 'photo-1414235077428-338989a2e8c0' },
]

// ~4 จอด้านล่าง — grid ปกติ (ไม่เลื่อน)
const more: Campaign[] = [
  { cat: 'ความงาม', catEn: 'Beauty', brand: 'GlowLab Beauty', title: 'Skincare Glow Set', d: 'รีวิวเซ็ตสกินแคร์ตัวใหม่ เน้นผิวกระจ่างใส สำหรับสาย beauty บน TikTok & Instagram', dEn: 'Review the new skincare set focused on radiant skin — for beauty creators on TikTok & Instagram.', budget: '฿12,000 – 25,000', spots: '30/60', deadline: '5 ก.ค. 2026', deadlineEn: '5 Jul 2026', plat: 'TikTok', tone: 'open', img: 'photo-1556228578-8c89e6adf883' },
  { cat: 'ฟิตเนส', catEn: 'Fitness', brand: 'FitPro Studio', title: '30-Day Fitness Challenge', d: 'ชวนสายเฮลท์ตี้ร่วมชาเลนจ์ออกกำลังกาย 30 วัน พร้อมรีวิวอุปกรณ์ฟิตเนสรุ่นใหม่', dEn: 'Inviting health-conscious creators to join a 30-day workout challenge and review the latest fitness gear.', budget: '฿9,000 – 18,000', spots: '22/40', deadline: '10 ก.ค. 2026', deadlineEn: '10 Jul 2026', plat: 'Instagram', tone: 'open', img: 'photo-1517838277536-f5f99be501cd' },
  { cat: 'ไลฟ์สไตล์', catEn: 'Lifestyle', brand: 'Shopee Thailand', title: 'Shopee Mid-Year Sale', d: 'มหกรรมช้อปออนไลน์กลางปี มองหา influencer ทุกสายช่วยโปรโมทดีลเด็ดตลอดแคมเปญ', dEn: "The big mid-year online shopping festival. Looking for influencers across all niches to promote the best deals.", budget: '฿15,000 – 30,000', spots: '80/200', deadline: '30 มิ.ย. 2026', deadlineEn: '30 Jun 2026', plat: 'TikTok', tone: 'soon', img: 'photo-1607082349566-187342175e2f' },
  { cat: 'ไลฟ์สไตล์', catEn: 'Lifestyle', brand: 'NimbusTV', title: 'Travel Essentials Guide', d: 'ไกด์ของใช้จำเป็นสำหรับการเดินทาง มองหา lifestyle creator มาเล่าเรื่องราวการใช้งานจริง', dEn: 'A travel essentials guide. Looking for lifestyle creators to tell relatable, real-use stories.', budget: '฿9,000 – 19,000', spots: '11/35', deadline: '28 ก.ค. 2026', deadlineEn: '28 Jul 2026', plat: 'Instagram', tone: 'open', img: 'photo-1542435503-956c469947f6' },
]

const heroImg = (id: string) => `https://images.unsplash.com/${id}?w=1600&q=80&fit=crop`
const cardImg = (id: string) => `https://images.unsplash.com/${id}?w=600&q=80&fit=crop`

// ---- carousel (เลื่อน + ลูกศร + จุด + เลื่อนอัตโนมัติ) ----
const track = ref<HTMLElement | null>(null)
const activeSlide = ref(0)
let autoTimer: ReturnType<typeof setInterval> | null = null

function scrollToSlide(i: number) {
  const el = track.value
  if (!el) return
  const n = featured.length
  const idx = ((i % n) + n) % n
  el.scrollTo({ left: el.clientWidth * idx, behavior: 'smooth' })
}
function onTrackScroll() {
  const el = track.value
  if (!el) return
  activeSlide.value = Math.round(el.scrollLeft / el.clientWidth)
}
function next() { scrollToSlide(activeSlide.value + 1) }
function prev() { scrollToSlide(activeSlide.value - 1) }

function startAuto() {
  stopAuto()
  autoTimer = setInterval(() => scrollToSlide(activeSlide.value + 1), 6000)
}
function stopAuto() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null }
}
onMounted(startAuto)
onBeforeUnmount(stopAuto)

const counter = computed(() => `${String(activeSlide.value + 1).padStart(2, '0')} / ${String(featured.length).padStart(2, '0')}`)

const stats: [string, string, string][] = [
  ['10K+', 'ครีเอเตอร์ที่ใช้งาน', 'Active creators'],
  ['500+', 'แบรนด์ที่ตรวจสอบแล้ว', 'Verified brands'],
  ['7 วัน', 'จ่ายเงินเฉลี่ย', 'Avg. payout time'],
  ['฿500M+', 'จ่ายแล้วทั้งหมด', 'Total paid out'],
]

const whys: [string, string, string, string, string][] = [
  ['badge-check', 'แบรนด์ตรวจสอบแล้วเท่านั้น', 'Verified brands only', 'ทุกแบรนด์ผ่านการตรวจสอบ 100% ไม่มีงานหลอก รับงานได้อย่างมั่นใจ', 'Every brand is 100% verified — no fake jobs, accept work with confidence.'],
  ['file-text', 'เอกสารภาษีอัตโนมัติ', 'Automatic tax documents', 'เอกสารภาษีครบ จบในแอป — 50 ทวิ, ใบกำกับภาษี ออกให้อัตโนมัติ', 'All your tax documents in one app — withholding certificates and tax invoices issued automatically.'],
  ['trending-up', 'ติดตามผลเรียลไทม์', 'Real-time tracking', 'ดูรายได้และผลงานได้ทันทีทุกแคมเปญ โปร่งใส ตรวจสอบได้ตลอดเวลา', 'See your earnings and performance instantly on every campaign — transparent and verifiable anytime.'],
]

const steps: [string, string][] = [
  ['สมัครสมาชิก & ยืนยันตัวตน', 'Sign up & verify your identity'],
  ['เลือกแคมเปญที่ชอบแล้วกดสมัคร', 'Pick a campaign you love and apply'],
  ['สร้างคอนเทนต์ตามบรีฟ', 'Create content following the brief'],
  ['รับเงินโอนเข้าบัญชีโดยตรง', 'Get paid directly to your account'],
]

// trusted brands marquee — inline SVG marks
type Brand = { n: string; c: string; i: string; t: string }
const brandsA: Brand[] = [
  { n: 'Luxe Beauty', c: '#B76E79', i: 'spark', t: 'Beauty' }, { n: 'TechZone', c: '#2D5BFF', i: 'hex', t: 'Zone' },
  { n: 'Taste Kitchen', c: '#E1772B', i: 'disc', t: 'Kitchen' }, { n: 'GlowLab', c: '#D89B00', i: 'ring', t: 'Lab' },
  { n: 'FitPro', c: '#1F8A5B', i: 'bolt', t: 'Pro' }, { n: 'Maison Aroma', c: '#6E4E9E', i: 'drop', t: 'Aroma' },
  { n: 'UrbanThread', c: '#0F2747', i: 'square', t: 'Thread' }, { n: 'PureLeaf', c: '#3FA34D', i: 'leaf', t: 'Leaf' },
  { n: 'NovaPlay', c: '#7C3AED', i: 'tri', t: 'Play' }, { n: 'CafeNord', c: '#8A5A2B', i: 'disc', t: 'Nord' },
  { n: 'PixelByte', c: '#2D5BFF', i: 'square', t: 'Byte' },
]
const brandsB: Brand[] = [
  { n: 'Verdant', c: '#1F8A5B', i: 'leaf', t: 'dant' }, { n: 'Aurio', c: '#C99700', i: 'diamond', t: 'rio' },
  { n: 'SnackLab', c: '#E1772B', i: 'disc', t: 'Lab' }, { n: 'MoveOn', c: '#0EA5A5', i: 'bolt', t: 'On' },
  { n: 'Lumiere', c: '#B76E79', i: 'ring', t: 'iere' }, { n: 'ByteCart', c: '#2D5BFF', i: 'hex', t: 'Cart' },
  { n: 'Zenith', c: '#0F2747', i: 'diamond', t: 'nith' }, { n: 'Hydra', c: '#0EA5A5', i: 'drop', t: 'dra' },
  { n: 'Solace', c: '#6E4E9E', i: 'spark', t: 'lace' }, { n: 'NimbusTV', c: '#2D5BFF', i: 'disc', t: 'TV' },
  { n: 'Bloome', c: '#E0578B', i: 'spark', t: 'oome' },
]

const brandPaths: Record<string, string> = {
  spark: 'M12 1.5c.6 5 3.5 7.9 9 9-5.5 1.1-8.4 4-9 9-.6-5-3.5-7.9-9-9 5.5-1.1 8.4-4 9-9z',
  hex: 'M12 2l8.66 5v10L12 22 3.34 17V7L12 2z',
  disc: 'M12 3a9 9 0 100 18 9 9 0 000-18z',
  ring: 'M12 4a8 8 0 100 16 8 8 0 000-16z',
  bolt: 'M13 2L4 14h6l-1 8 9-12h-6l1-8z',
  drop: 'M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z',
  diamond: 'M12 2l7 10-7 10-7-10 7-10z',
  square: 'M8.5 4h7A4.5 4.5 0 0120 8.5v7a4.5 4.5 0 01-4.5 4.5h-7A4.5 4.5 0 014 15.5v-7A4.5 4.5 0 018.5 4z',
  tri: 'M12 3l9 16H3z',
  leaf: 'M20 4C9 4 4 9 4 16v4h4c7 0 12-5 12-16z',
}
const strokeMarks = new Set(['hex', 'ring'])

function splitName(b: Brand) {
  if (b.t && b.n.endsWith(b.t)) return { head: b.n.slice(0, b.n.length - b.t.length), tail: b.t }
  return { head: b.n, tail: '' }
}
</script>

<template>
  <div>
    <!-- editorial intro -->
    <section class="mb-6 lg:mb-8">
      <span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
        <Icon name="sparkles" class="h-3.5 w-3.5" /> {{ tr('ครีเอเตอร์ มาร์เก็ตเพลส', 'Creator marketplace') }}
      </span>
      <div class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h1 class="font-heading text-3xl font-extrabold leading-[1.25] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {{ tr('เปลี่ยนคอนเทนต์ให้เป็น', 'Turn your content into') }} <span class="text-primary">{{ tr('รายได้จริง', 'real income') }}</span>
        </h1>
        <NuxtLink to="/register" class="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition-all hover:bg-primaryDark active:translate-y-0.5">
          {{ tr('เริ่มเป็น Creator ฟรี', 'Become a Creator — free') }} <Icon name="arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </div>
      <p class="mt-3 max-w-xl text-sm leading-relaxed text-muted lg:text-base">
        {{ tr('จับคู่กับแบรนด์ที่ผ่านการตรวจสอบ จ่ายตรงเวลา เอกสารภาษีจัดให้ครบ — ในที่เดียว', 'Match with verified brands, get paid on time, and have all your tax documents handled — all in one place.') }}
      </p>
    </section>

    <!-- ============ campaigns teaser — จอแรกใหญ่สุด: HERO CAROUSEL (เลื่อนได้สูงสุด 5 แคมเปญ) ============ -->
    <section
      class="relative mb-6 overflow-hidden rounded-[2rem]"
      @mouseenter="stopAuto"
      @mouseleave="startAuto"
    >
      <!-- track -->
      <div
        ref="track"
        class="no-scrollbar flex h-[68vh] min-h-[440px] max-h-[720px] snap-x snap-mandatory overflow-x-auto scroll-smooth"
        @scroll.passive="onTrackScroll"
      >
        <article
          v-for="(c, i) in featured"
          :key="c.title"
          role="button"
          tabindex="0"
          class="group relative h-full w-full shrink-0 cursor-pointer snap-center snap-always overflow-hidden"
          @click="goCampaigns"
          @keydown.enter="goCampaigns"
        >
          <img :src="heroImg(c.img)" :alt="c.title" class="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F2747] via-[#0F2747]/55 to-[#0F2747]/10" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#0F2747]/70 via-transparent to-transparent" />

          <div class="relative flex h-full flex-col justify-end p-6 pb-24 sm:p-10 sm:pb-24 lg:p-16 lg:pb-28">
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wide" :class="TONE[c.tone].cls">
                <span v-if="TONE[c.tone].dot" class="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />{{ tr(TONE[c.tone].label, TONE[c.tone].labelEn) }}
              </span>
              <span class="rounded-md bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">{{ tr(c.cat, c.catEn) }}</span>
              <span class="rounded-md bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">{{ c.plat }}</span>
            </div>

            <p class="mt-6 text-sm font-medium text-white/70">{{ c.brand }}</p>
            <h2 class="mt-1 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">{{ c.title }}</h2>
            <p class="mt-4 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/75 lg:text-base">{{ tr(c.d, c.dEn) }}</p>

            <div class="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-white">
              <div>
                <span class="block text-[10px] uppercase tracking-widest text-white/50">{{ tr('งบประมาณ', 'Budget') }}</span>
                <span class="font-heading text-lg font-extrabold">{{ c.budget }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-white/85"><Icon name="users" class="h-4 w-4" /> {{ c.spots }}</div>
              <div class="flex items-center gap-2 text-sm text-white/85"><Icon name="calendar" class="h-4 w-4" /> {{ tr(c.deadline, c.deadlineEn) }}</div>
            </div>

            <div class="mt-8">
              <span class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-[0_12px_30px_-10px_rgb(0_0_0_/_50%)] transition-transform group-hover:translate-x-1">
                {{ tr('ดูแคมเปญนี้', 'View campaign') }} <Icon name="arrow-right" class="h-4 w-4" />
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- eyebrow (บนซ้าย) -->
      <span class="pointer-events-none absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur lg:left-16 lg:top-8">
        <Icon name="sparkles" class="h-3.5 w-3.5" /> {{ tr('แคมเปญแนะนำ', 'Featured campaigns') }}
      </span>

      <!-- arrows -->
      <button type="button" :aria-label="tr('ก่อนหน้า', 'Previous')" class="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-primary sm:flex lg:left-6" @click.stop="prev">
        <Icon name="chevron-left" class="h-6 w-6" />
      </button>
      <button type="button" :aria-label="tr('ถัดไป', 'Next')" class="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-primary sm:flex lg:right-6" @click.stop="next">
        <Icon name="chevron-right" class="h-6 w-6" />
      </button>

      <!-- dots + counter -->
      <div class="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-4 lg:bottom-8">
        <div class="flex items-center gap-2">
          <button
            v-for="(c, i) in featured"
            :key="`dot-${c.title}`"
            type="button"
            :aria-label="`${tr('ไปที่แคมเปญ', 'Go to campaign')} ${i + 1}`"
            class="h-2 rounded-full transition-all"
            :class="i === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'"
            @click.stop="scrollToSlide(i)"
          />
        </div>
        <span class="font-heading text-xs font-bold tabular-nums text-white/80">{{ counter }}</span>
      </div>
    </section>

    <!-- ============ ด้านล่าง ~4 จอ: แคมเปญเพิ่มเติม (grid ปกติ ไม่เลื่อน) ============ -->
    <section>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="c in more"
          :key="c.title"
          role="button"
          tabindex="0"
          class="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_40%)]"
          @click="goCampaigns"
          @keydown.enter="goCampaigns"
        >
          <div class="relative h-44 overflow-hidden">
            <img :src="cardImg(c.img)" :alt="c.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span class="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur">{{ tr(c.cat, c.catEn) }}</span>
            <span class="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wide" :class="TONE[c.tone].cls">
              <span v-if="TONE[c.tone].dot" class="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />{{ tr(TONE[c.tone].label, TONE[c.tone].labelEn) }}
            </span>
          </div>
          <div class="flex flex-1 flex-col p-5">
            <p class="text-xs text-muted">{{ c.brand }} · {{ c.plat }}</p>
            <h3 class="mt-1 font-heading text-lg font-bold text-ink">{{ c.title }}</h3>
            <p class="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-[#5B6B82]/80">{{ tr(c.d, c.dEn) }}</p>
            <div class="mt-3 flex items-center gap-4 text-xs text-muted">
              <span class="flex items-center gap-1.5"><Icon name="users" class="h-4 w-4 text-primary" /> {{ c.spots }}</span>
              <span class="flex items-center gap-1.5"><Icon name="calendar" class="h-4 w-4 text-primary" /> {{ tr(c.deadline, c.deadlineEn) }}</span>
            </div>
            <div class="mt-4 flex items-center justify-between border-t border-[#0F2747]/10 pt-4">
              <div>
                <span class="block text-[10px] uppercase tracking-widest text-[#5B6B82]/40">{{ tr('งบประมาณ', 'Budget') }}</span>
                <span class="font-bold text-primary">{{ c.budget }}</span>
              </div>
              <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:translate-x-1"><Icon name="arrow-right" class="h-4 w-4" /></span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- trusted brands -->
    <section class="mt-16 lg:mt-24">
      <p class="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70">{{ tr('แบรนด์ชั้นนำที่ไว้วางใจ Ripples', 'Leading brands that trust Ripples') }}</p>
      <div class="rip-marquee relative overflow-hidden py-1">
        <div class="flex overflow-hidden">
          <div class="rip-track animate-marquee-left">
            <template v-for="pass in 2" :key="pass">
              <div v-for="b in brandsA" :key="`a${pass}-${b.n}`" class="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#0F2747]/[0.06] bg-white px-5 py-3 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
                <svg viewBox="0 0 24 24" class="h-7 w-7 shrink-0">
                  <path :d="brandPaths[b.i]" :fill="strokeMarks.has(b.i) ? 'none' : b.c" :stroke="strokeMarks.has(b.i) ? b.c : 'none'" :stroke-width="strokeMarks.has(b.i) ? 2.4 : 0" stroke-linejoin="round" />
                </svg>
                <span class="whitespace-nowrap font-heading text-[15px] font-bold tracking-tight text-[#16235C]">{{ splitName(b).head }}<span :style="{ color: b.c }">{{ splitName(b).tail }}</span></span>
              </div>
            </template>
          </div>
        </div>
        <div class="mt-3 flex overflow-hidden">
          <div class="rip-track animate-marquee-right">
            <template v-for="pass in 2" :key="pass">
              <div v-for="b in brandsB" :key="`b${pass}-${b.n}`" class="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#0F2747]/[0.06] bg-white px-5 py-3 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
                <svg viewBox="0 0 24 24" class="h-7 w-7 shrink-0">
                  <path :d="brandPaths[b.i]" :fill="strokeMarks.has(b.i) ? 'none' : b.c" :stroke="strokeMarks.has(b.i) ? b.c : 'none'" :stroke-width="strokeMarks.has(b.i) ? 2.4 : 0" stroke-linejoin="round" />
                </svg>
                <span class="whitespace-nowrap font-heading text-[15px] font-bold tracking-tight text-[#16235C]">{{ splitName(b).head }}<span :style="{ color: b.c }">{{ splitName(b).tail }}</span></span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- stats -->
    <section class="mt-8 lg:mt-10">
      <div class="grid grid-cols-2 divide-x divide-y divide-[#0F2747]/10 overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-[0_30px_60px_-40px_rgb(45_91_255_/_35%)] sm:grid-cols-4 sm:divide-y-0">
        <div v-for="s in stats" :key="s[1]" class="p-8 text-center lg:p-10">
          <div class="font-heading text-3xl font-extrabold text-primary lg:text-5xl">{{ s[0] }}</div>
          <div class="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#5B6B82]/60 lg:text-xs">{{ tr(s[1], s[2]) }}</div>
        </div>
      </div>
    </section>

    <!-- why -->
    <section class="mt-16 lg:mt-28">
      <h2 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-5xl">{{ tr('ทำไมต้อง', 'Why') }} <span class="text-primary">Ripples</span></h2>
      <p class="mt-2 max-w-lg text-sm text-muted lg:text-base">{{ tr('เครื่องมือครบสำหรับ Creator ตั้งแต่หา campaign จนถึงรับเงิน — จบในที่เดียว', 'Every tool a creator needs, from finding campaigns to getting paid — all in one place.') }}</p>
      <div class="mt-8 grid gap-5 sm:grid-cols-3">
        <div v-for="w in whys" :key="w[1]" class="rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10"><Icon :name="w[0]" class="h-6 w-6 text-primary" /></div>
          <h3 class="mt-5 font-heading text-lg font-bold text-ink">{{ tr(w[1], w[2]) }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ tr(w[3], w[4]) }}</p>
        </div>
      </div>
    </section>

    <!-- how -->
    <section class="mt-16 lg:mt-28">
      <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-ink to-primaryDark p-8 text-white lg:p-14">
        <div class="pointer-events-none absolute inset-0 opacity-[0.06]" style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 40px 40px" />
        <h2 class="relative font-heading text-2xl font-extrabold tracking-tight lg:text-4xl">{{ tr('เริ่มต้น 4 ขั้นตอนง่าย ๆ', 'Get started in 4 easy steps') }}</h2>
        <div class="relative mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div v-for="(s, i) in steps" :key="s[0]" class="flex gap-4 lg:flex-col">
            <div :class="['flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-heading text-lg font-extrabold', i === 0 ? 'bg-primaryLight text-ink' : 'border border-white/15 bg-white/10 text-white']">{{ i + 1 }}</div>
            <p class="text-sm font-medium leading-relaxed lg:text-base">{{ tr(s[0], s[1]) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="mt-16 text-center lg:mt-28">
      <h2 class="font-heading text-3xl font-extrabold leading-[1.5] tracking-tight text-ink lg:text-6xl">{{ tr('พร้อมเปลี่ยนคอนเทนต์', 'Ready to turn content') }}<br />{{ tr('เป็น', 'into ') }}<span class="text-primary">{{ tr('รายได้', 'income') }}</span>?</h2>
      <p class="mt-4 text-sm text-muted lg:text-base">{{ tr('สมัครฟรี ไม่มีค่าธรรมเนียมแรกเข้า ยกเลิกได้ทุกเมื่อ', 'Sign up free, no entry fees, cancel anytime.') }}</p>
      <NuxtLink to="/register" class="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition-all hover:bg-primaryDark active:translate-y-0.5">
        {{ tr('เริ่มเป็น Creator ฟรี', 'Become a Creator — free') }} <Icon name="arrow-right" class="h-5 w-5" />
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
