<script setup lang="ts">


definePageMeta({ layout: 'default' })
const { tr } = useLocale()
useHead(() => ({ title: tr('ติดต่อเรา — Ripples', 'Contact us — Ripples') }))

type Info = { icon: string; label: string; labelEn: string; value: string; valueEn: string; note: string; noteEn: string }
const info: Info[] = [
  { icon: 'mail', label: 'อีเมล', labelEn: 'Email', value: 'hello@ripples.com', valueEn: 'hello@ripples.com', note: 'สำหรับข้อสงสัยทั่วไป', noteEn: 'For general enquiries' },
  { icon: 'phone', label: 'โทรศัพท์', labelEn: 'Phone', value: '02-123-4567', valueEn: '02-123-4567', note: 'จันทร์–ศุกร์ 9.00–18.00 น.', noteEn: 'Mon–Fri, 9.00–18.00' },
  { icon: 'map-pin', label: 'สำนักงาน', labelEn: 'Office', value: 'กรุงเทพฯ, ประเทศไทย', valueEn: 'Bangkok, Thailand', note: '88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง 10260', noteEn: '88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, 10260' },
  { icon: 'clock', label: 'เวลาทำการ', labelEn: 'Hours', value: 'จันทร์ – ศุกร์: 9.00 – 18.00 น.', valueEn: 'Mon – Fri: 9.00 – 18.00', note: 'เสาร์–อาทิตย์: ปิดทำการ', noteEn: 'Sat–Sun: Closed' },
]

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function onSubmit() {
  submitted.value = true
  toast.success(tr('ส่งข้อความแล้ว!', 'Message sent!'), { description: tr('เราจะติดต่อกลับหาคุณโดยเร็วที่สุด', "We'll get back to you as soon as possible.") })
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <div>
    <section class="mb-10">
      <span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
        <Icon name="mail" class="h-3.5 w-3.5" /> {{ tr('ติดต่อเรา', 'Contact us') }}
      </span>
      <h1 class="mt-5 font-heading text-4xl font-extrabold leading-[1.5] tracking-tight text-ink lg:text-6xl">{{ tr('ติดต่อเรา', 'Contact us') }}</h1>
      <p class="mt-4 max-w-2xl text-sm leading-relaxed text-muted lg:text-lg">{{ tr('มีคำถาม? เรายินดีรับฟัง ส่งข้อความหาเราและเราจะตอบกลับโดยเร็วที่สุด', "Have a question? We'd love to hear from you. Send us a message and we'll reply as soon as possible.") }}</p>
    </section>

    <section class="grid gap-8 lg:grid-cols-5">
      <!-- info -->
      <div class="space-y-4 lg:col-span-2">
        <div v-for="x in info" :key="x.label" class="flex items-start gap-4 rounded-xl border border-[#0F2747]/10 bg-white p-5 shadow-sm">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"><Icon :name="x.icon" class="h-6 w-6 text-primary" /></div>
          <div>
            <p class="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">{{ tr(x.label, x.labelEn) }}</p>
            <p class="mt-0.5 font-bold text-ink">{{ tr(x.value, x.valueEn) }}</p>
            <p class="mt-0.5 text-xs leading-relaxed text-muted">{{ tr(x.note, x.noteEn) }}</p>
          </div>
        </div>
      </div>

      <!-- form -->
      <div class="lg:col-span-3">
        <div class="rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm lg:p-8">
          <h2 class="font-heading text-xl font-bold text-ink">{{ tr('ส่งข้อความถึงเรา', 'Send us a message') }}</h2>
          <form class="mt-6 space-y-5" novalidate @submit.prevent="onSubmit">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('ชื่อ', 'Name') }}</label>
                <input v-model="form.name" required type="text" :placeholder="tr('ชื่อของคุณ', 'Your name')" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" />
              </div>
              <div>
                <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('อีเมล', 'Email') }}</label>
                <input v-model="form.email" required type="email" placeholder="your@email.com" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" />
              </div>
            </div>
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('หัวข้อ', 'Subject') }}</label>
              <input v-model="form.subject" required type="text" :placeholder="tr('เราจะช่วยคุณได้อย่างไร?', 'How can we help you?')" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" />
            </div>
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-ink">{{ tr('ข้อความ', 'Message') }}</label>
              <textarea v-model="form.message" required rows="5" :placeholder="tr('บอกรายละเอียดเพิ่มเติมเกี่ยวกับสิ่งที่ต้องการ...', 'Tell us more about what you need...')" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" />
            </div>
            <button type="submit" class="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5">
              {{ tr('ส่งข้อความ', 'Send message') }} <Icon name="send" class="h-4 w-4" />
            </button>
          </form>
          <div v-if="submitted" class="mt-6 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <Icon name="check-circle" class="h-6 w-6 shrink-0 text-primary" />
            <div><p class="font-bold text-ink">{{ tr('ส่งข้อความแล้ว!', 'Message sent!') }}</p><p class="text-sm text-muted">{{ tr('เราจะติดต่อกลับหาคุณโดยเร็วที่สุด', "We'll get back to you as soon as possible.") }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- office -->
    <section class="mt-8 overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm">
      <div class="grid lg:grid-cols-2">
        <div class="p-8 lg:p-10">
          <h2 class="font-heading text-xl font-bold text-ink">{{ tr('เยี่ยมชมสำนักงานเรา', 'Visit our office') }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ tr('88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพฯ 10260', '88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260') }}</p>
          <p class="mt-4 text-xs text-[#5B6B82]/70">{{ tr('บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)', 'Prakit Holdings Public Company Limited') }}</p>
        </div>
        <div class="relative min-h-[220px]">
          <img src="/office.jpg" :alt="tr('สำนักงาน Ripples', 'Ripples office')" class="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  </div>
</template>
