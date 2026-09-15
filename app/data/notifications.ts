/* Ripples — Notification system shared DATA (ported from design notif-data.js)
   มุม KOL · ภาษาไทยล้วน · ทุก noti มีลิงก์ปลายทาง
   เรื่องเงิน + ความปลอดภัย = อีเมลบังคับ (ปิดไม่ได้) */

export type NotifTint = 'rose' | 'violet' | 'blue' | 'amber' | 'green'
export type NotifCategory = 'security' | 'profile' | 'campaign' | 'workflow' | 'payment'

export interface NotifCategoryMeta {
  label: string
  labelEn: string
  short: string
  shortEn: string
  icon: string
  tint: NotifTint
  locked: boolean
}

export interface NotifTintClasses {
  bg: string
  fg: string
  ring: string
  dot: string
  chip: string
}

export interface NotifItem {
  id: string
  cat: NotifCategory
  icon: string
  title: string
  titleEn: string
  msg: string
  msgEn: string
  ago: string
  agoEn: string
  date: string
  dateEn: string
  read: boolean
  /** route path within /portal (e.g. 'wallet', 'tasks', 'campaign-detail', 'profile') */
  link: string
  urgent?: boolean
}

export interface NotifMatrixRow {
  event: string
  trigger: string
  web: boolean
  email: boolean
  mandatory: boolean
  link: string
  note?: string
}

export interface NotifEmail {
  cat: NotifCategory
  subject: string
  preheader: string
  heading: string
  body: string
  code?: string
  ctaLabel: string
  ctaLink: string
  mandatory: boolean
}

/* ---------- หมวดหมู่ (journey) ---------- */
export const notifCats: Record<NotifCategory, NotifCategoryMeta> = {
  security: { label: 'บัญชี & ความปลอดภัย', labelEn: 'Account & Security', short: 'ความปลอดภัย', shortEn: 'Security', icon: 'shield-check', tint: 'rose', locked: true },
  profile: { label: 'โปรไฟล์ & KYC', labelEn: 'Profile & KYC', short: 'โปรไฟล์', shortEn: 'Profile', icon: 'user-check', tint: 'violet', locked: false },
  campaign: { label: 'แคมเปญ & การรับงาน', labelEn: 'Campaigns & Offers', short: 'แคมเปญ', shortEn: 'Campaigns', icon: 'megaphone', tint: 'blue', locked: false },
  workflow: { label: 'ขั้นตอนการทำงาน', labelEn: 'Workflow', short: 'งาน', shortEn: 'Tasks', icon: 'clipboard-list', tint: 'amber', locked: false },
  payment: { label: 'การจ่ายเงิน', labelEn: 'Payments', short: 'การเงิน', shortEn: 'Payments', icon: 'wallet', tint: 'green', locked: true },
}

/* tint → tailwind classes (กล่องไอคอน + จุด unread) */
export const tintClass: Record<NotifTint, NotifTintClasses> = {
  rose: { bg: 'bg-rose-50', fg: 'text-rose-600', ring: 'ring-rose-100', dot: 'bg-rose-500', chip: 'bg-rose-50 text-rose-600' },
  violet: { bg: 'bg-violet-50', fg: 'text-violet-600', ring: 'ring-violet-100', dot: 'bg-violet-500', chip: 'bg-violet-50 text-violet-600' },
  blue: { bg: 'bg-blue-50', fg: 'text-blue-600', ring: 'ring-blue-100', dot: 'bg-blue-500', chip: 'bg-blue-50 text-blue-600' },
  amber: { bg: 'bg-amber-50', fg: 'text-amber-600', ring: 'ring-amber-100', dot: 'bg-amber-500', chip: 'bg-amber-50 text-amber-700' },
  green: { bg: 'bg-green-50', fg: 'text-green-600', ring: 'ring-green-100', dot: 'bg-green-500', chip: 'bg-green-50 text-green-700' },
}

/** classes for a given category */
export function tintOf(cat: NotifCategory): NotifTintClasses {
  return tintClass[notifCats[cat]?.tint] ?? tintClass.blue
}

/* ---------- Timeline notifications (เรียงใหม่→เก่า) ---------- */
export const notifItems: NotifItem[] = [
  /*{ id: 'n1', cat: 'payment', icon: 'check-circle', title: 'จ่ายเงินแล้ว ฿18,000', titleEn: 'Paid ฿18,000', msg: 'ค่างานแคมเปญ “Glow Serum Launch” โอนเข้าบัญชี KBANK •••890 เรียบร้อย — ยอดสุทธิหลังหัก ณ ที่จ่าย', msgEn: 'Your fee for “Glow Serum Launch” has been transferred to KBANK •••890 — net amount after withholding tax.', ago: '12 นาทีที่แล้ว', agoEn: '12 minutes ago', date: '13 มิ.ย. 2026 09:48', dateEn: '13 Jun 2026 09:48', read: false, link: 'wallet' },
  { id: 'n2', cat: 'workflow', icon: 'alarm-clock', title: 'ใกล้ถึง deadline ส่งงาน', titleEn: 'Submission deadline approaching', msg: 'งาน “รีล Instagram — Glow Serum” ครบกำหนดส่งพรุ่งนี้ 14 มิ.ย. เวลา 18:00 น.', msgEn: 'Your task “Instagram Reel — Glow Serum” is due tomorrow, 14 Jun at 18:00.', ago: '1 ชม. ที่แล้ว', agoEn: '1 hour ago', date: '13 มิ.ย. 2026 08:30', dateEn: '13 Jun 2026 08:30', read: false, link: 'tasks', urgent: true },
  { id: 'n3', cat: 'campaign', icon: 'badge-check', title: 'คุณได้รับเลือก + เคาะราคาแล้ว', titleEn: 'You’ve been selected + priced', msg: 'แคมเปญ “Summer Skincare” เลือกคุณแล้ว ราคา ฿15,000 — กรุณาตอบรับภายใน 48 ชม.', msgEn: 'Campaign “Summer Skincare” selected you at ฿15,000 — please respond within 48 hours.', ago: '3 ชม. ที่แล้ว', agoEn: '3 hours ago', date: '13 มิ.ย. 2026 06:50', dateEn: '13 Jun 2026 06:50', read: false, link: 'campaign-detail', urgent: true },
  { id: 'n4', cat: 'workflow', icon: 'message-square', title: 'มีคอมเมนต์ใหม่จากแอดมิน', titleEn: 'New comment from admin', msg: 'แอดมินขอให้ปรับ storyline ช่วงเปิดคลิปให้กระชับขึ้น ดูรายละเอียดในงาน', msgEn: 'The admin asked you to tighten the storyline’s opening — see the task for details.', ago: '5 ชม. ที่แล้ว', agoEn: '5 hours ago', date: '13 มิ.ย. 2026 04:20', dateEn: '13 Jun 2026 04:20', read: false, link: 'tasks' },
  { id: 'n5', cat: 'profile', icon: 'shield-check', title: 'ยืนยันตัวตน (KYC) อนุมัติแล้ว', titleEn: 'Identity (KYC) approved', msg: 'บัญชีของคุณยืนยันตัวตนสำเร็จ พร้อมรับเงินจากแคมเปญแล้ว', msgEn: 'Your account is verified — you’re now ready to get paid from campaigns.', ago: 'เมื่อวาน', agoEn: 'Yesterday', date: '12 มิ.ย. 2026 16:10', dateEn: '12 Jun 2026 16:10', read: true, link: 'profile' },
  { id: 'n6', cat: 'campaign', icon: 'mail-open', title: 'ได้รับคำเชิญร่วมแคมเปญ', titleEn: 'Campaign invitation received', msg: 'แบรนด์ “Aura Cosmetics” เชิญคุณร่วมแคมเปญ “Matte Lip Collection”', msgEn: 'Brand “Aura Cosmetics” invited you to the “Matte Lip Collection” campaign.', ago: 'เมื่อวาน', agoEn: 'Yesterday', date: '12 มิ.ย. 2026 11:00', dateEn: '12 Jun 2026 11:00', read: true, link: 'campaign-detail' },
  { id: 'n7', cat: 'workflow', icon: 'file-check', title: 'storyline ได้รับอนุมัติ', titleEn: 'Storyline approved', msg: 'storyline ของงาน “TikTok — Matte Lip” ผ่านแล้ว เริ่มถ่ายทำได้เลย', msgEn: 'The storyline for “TikTok — Matte Lip” is approved. You can start filming.', ago: '2 วันที่แล้ว', agoEn: '2 days ago', date: '11 มิ.ย. 2026 14:30', dateEn: '11 Jun 2026 14:30', read: true, link: 'tasks' },
  { id: 'n8', cat: 'security', icon: 'key-round', title: 'เปลี่ยนรหัสผ่านสำเร็จ', titleEn: 'Password changed', msg: 'รหัสผ่านบัญชีของคุณถูกเปลี่ยนเมื่อ 11 มิ.ย. 2026 หากไม่ใช่คุณ โปรดติดต่อทีมงานทันที', msgEn: 'Your account password was changed on 11 Jun 2026. If this wasn’t you, contact support immediately.', ago: '2 วันที่แล้ว', agoEn: '2 days ago', date: '11 มิ.ย. 2026 09:15', dateEn: '11 Jun 2026 09:15', read: true, link: 'profile' },
  { id: 'n9', cat: 'payment', icon: 'hourglass', title: 'ค่างานพร้อมจ่าย', titleEn: 'Fee ready for payout', msg: 'ค่างานแคมเปญ “Iced Coffee Summer” ฿9,500 กำหนดจ่าย 16 มิ.ย. 2026', msgEn: 'Your “Iced Coffee Summer” fee of ฿9,500 is scheduled to pay out on 16 Jun 2026.', ago: '3 วันที่แล้ว', agoEn: '3 days ago', date: '10 มิ.ย. 2026 17:00', dateEn: '10 Jun 2026 17:00', read: true, link: 'wallet' },
  { id: 'n10', cat: 'campaign', icon: 'sparkles', title: 'แคมเปญใหม่ตรงกับ niche ของคุณ', titleEn: 'New campaigns match your niche', msg: 'มี 3 แคมเปญสาย “ความงาม & สกินแคร์” เปิดรับสมัครสัปดาห์นี้', msgEn: '3 “Beauty & Skincare” campaigns opened for applications this week.', ago: '4 วันที่แล้ว', agoEn: '4 days ago', date: '9 มิ.ย. 2026 10:00', dateEn: '9 Jun 2026 10:00', read: true, link: 'campaigns' },
  { id: 'n11', cat: 'profile', icon: 'user-cog', title: 'โปรไฟล์ยังไม่ครบ', titleEn: 'Your profile is incomplete', msg: 'เพิ่ม Rate Card ให้ครบเพื่อปลดสถานะ “พร้อมรับงาน” และเพิ่มโอกาสได้งาน', msgEn: 'Complete your Rate Card to unlock “Ready for work” status and get more offers.', ago: '5 วันที่แล้ว', agoEn: '5 days ago', date: '8 มิ.ย. 2026 12:00', dateEn: '8 Jun 2026 12:00', read: true, link: 'profile' },*/
]

/* ---------- Notification matrix (เอกสาร spec) ---------- */
export const notifMatrix: Record<NotifCategory, NotifMatrixRow[]> = {
  security: [
    { event: 'สมัครสำเร็จ (welcome)', trigger: 'สมัครบัญชีเสร็จ', web: true, email: true, mandatory: false, link: 'dashboard' },
    { event: 'ยืนยันอีเมล (ส่งรหัส/ลิงก์)', trigger: 'ขอยืนยันอีเมล', web: false, email: true, mandatory: true, link: 'profile' },
    { event: 'ขอรีเซ็ตรหัสผ่าน (ลืมรหัสผ่าน)', trigger: 'กด "ลืมรหัสผ่าน"', web: false, email: true, mandatory: true, link: 'reset-password', note: 'ลิงก์ใช้ได้ภายใน 30 นาที · ส่งทางอีเมลเท่านั้น' },
    { event: 'เปลี่ยนรหัสผ่านสำเร็จ', trigger: 'รหัสผ่านถูกเปลี่ยน', web: true, email: true, mandatory: true, link: 'profile' },
  ],
  profile: [
    { event: 'ส่ง KYC แล้ว รอตรวจสอบ', trigger: 'กดส่งเอกสาร KYC', web: true, email: false, mandatory: false, link: 'profile' },
    { event: 'KYC อนุมัติแล้ว (พร้อมรับเงิน)', trigger: 'แอดมินอนุมัติ', web: true, email: true, mandatory: false, link: 'profile' },
    { event: 'KYC ถูกปฏิเสธ (+เหตุผล ต้องแก้)', trigger: 'แอดมินปฏิเสธ', web: true, email: true, mandatory: false, link: 'profile' },
    { event: 'โปรไฟล์ยังไม่ครบ (เตือนให้ทำต่อ)', trigger: 'completeness < 100%', web: true, email: false, mandatory: false, link: 'profile', note: 'ส่งเป็น digest ไม่ถี่' },
    { event: 'มี consent/PDPA version ใหม่ ต้องยอมรับ', trigger: 'เผยแพร่ version ใหม่', web: true, email: true, mandatory: false, link: 'profile', note: 'บล็อกหลัง login' },
  ],
  campaign: [
    { event: 'ได้รับคำเชิญร่วมแคมเปญ (invited)', trigger: 'แบรนด์/แอดมินเชิญ', web: true, email: true, mandatory: false, link: 'campaign-detail' },
    { event: 'สมัครแคมเปญสำเร็จ', trigger: 'กดสมัครแคมเปญ', web: true, email: false, mandatory: false, link: 'campaigns' },
    { event: 'ได้รับเลือก + เคาะราคา ต้องตอบรับ/ปฏิเสธ', trigger: 'แอดมินเลือก + ตั้งราคา', web: true, email: true, mandatory: false, link: 'campaign-detail' },
    { event: 'ใกล้หมดเวลาตอบรับงาน', trigger: 'ก่อนหมดอายุตอบรับ', web: true, email: true, mandatory: false, link: 'campaign-detail' },
    { event: 'ไม่ได้รับเลือก (rejected)', trigger: 'ปิดรอบคัดเลือก', web: true, email: false, mandatory: false, link: 'campaigns', note: 'อีเมลเป็นออปชัน' },
    { event: 'แคมเปญตรง niche เปิดรับ (แนะนำ)', trigger: 'มีแคมเปญเข้าเกณฑ์', web: true, email: false, mandatory: false, link: 'campaigns', note: 'ออปชัน: weekly digest' },
  ],
  workflow: [
    { event: 'ได้รับ brief แล้ว (เริ่มงานได้)', trigger: 'แอดมินส่ง brief', web: true, email: true, mandatory: false, link: 'tasks' },
    { event: 'มี feedback / ขอแก้ storyline หรือ draft', trigger: 'แอดมินขอแก้', web: true, email: true, mandatory: false, link: 'tasks' },
    { event: 'storyline / draft ได้รับอนุมัติ', trigger: 'แอดมินอนุมัติ', web: true, email: false, mandatory: false, link: 'tasks' },
    { event: 'ถึงคิว KOL ต้องส่งงาน', trigger: 'ถึงขั้นตอนส่งงาน', web: true, email: true, mandatory: false, link: 'tasks', note: 'storyline/draft/ลิงก์โพสต์/capture' },
    { event: 'ใกล้ถึง deadline ส่งงาน', trigger: 'ก่อน deadline', web: true, email: true, mandatory: false, link: 'tasks' },
    { event: 'เลย deadline แล้วยังไม่ส่ง (overdue)', trigger: 'เลย deadline', web: true, email: true, mandatory: false, link: 'tasks' },
    { event: 'มีคอมเมนต์ใหม่จากแอดมินบนงาน', trigger: 'แอดมินคอมเมนต์', web: true, email: false, mandatory: false, link: 'tasks' },
  ],
  payment: [
    { event: 'ค่างานพร้อมจ่าย / กำหนดจ่ายแล้ว', trigger: 'งานผ่าน + ตั้งกำหนดจ่าย', web: true, email: true, mandatory: false, link: 'wallet' },
    { event: 'จ่ายเงินแล้ว (+สลิป +ยอดสุทธิ)', trigger: 'โอนเงินสำเร็จ', web: true, email: true, mandatory: true, link: 'wallet' },
    { event: 'การจ่ายล่าช้า / ติดปัญหา', trigger: 'จ่ายล่าช้า/ติดปัญหา', web: true, email: true, mandatory: false, link: 'wallet' },
  ],
}

export const defaultEmailSettings: Record<NotifCategory, boolean> = {
  security: true,
  profile: true,
  campaign: true,
  workflow: true,
  payment: true,
}
