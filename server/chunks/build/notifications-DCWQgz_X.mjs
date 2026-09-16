//#region app/data/notifications.ts
var notifCats = {
	security: {
		label: "บัญชี & ความปลอดภัย",
		labelEn: "Account & Security",
		short: "ความปลอดภัย",
		shortEn: "Security",
		icon: "shield-check",
		tint: "rose",
		locked: true
	},
	profile: {
		label: "โปรไฟล์ & KYC",
		labelEn: "Profile & KYC",
		short: "โปรไฟล์",
		shortEn: "Profile",
		icon: "user-check",
		tint: "violet",
		locked: false
	},
	campaign: {
		label: "แคมเปญ & การรับงาน",
		labelEn: "Campaigns & Offers",
		short: "แคมเปญ",
		shortEn: "Campaigns",
		icon: "megaphone",
		tint: "blue",
		locked: false
	},
	workflow: {
		label: "ขั้นตอนการทำงาน",
		labelEn: "Workflow",
		short: "งาน",
		shortEn: "Tasks",
		icon: "clipboard-list",
		tint: "amber",
		locked: false
	},
	payment: {
		label: "การจ่ายเงิน",
		labelEn: "Payments",
		short: "การเงิน",
		shortEn: "Payments",
		icon: "wallet",
		tint: "green",
		locked: true
	}
};
var tintClass = {
	rose: {
		bg: "bg-rose-50",
		fg: "text-rose-600",
		ring: "ring-rose-100",
		dot: "bg-rose-500",
		chip: "bg-rose-50 text-rose-600"
	},
	violet: {
		bg: "bg-violet-50",
		fg: "text-violet-600",
		ring: "ring-violet-100",
		dot: "bg-violet-500",
		chip: "bg-violet-50 text-violet-600"
	},
	blue: {
		bg: "bg-blue-50",
		fg: "text-blue-600",
		ring: "ring-blue-100",
		dot: "bg-blue-500",
		chip: "bg-blue-50 text-blue-600"
	},
	amber: {
		bg: "bg-amber-50",
		fg: "text-amber-600",
		ring: "ring-amber-100",
		dot: "bg-amber-500",
		chip: "bg-amber-50 text-amber-700"
	},
	green: {
		bg: "bg-green-50",
		fg: "text-green-600",
		ring: "ring-green-100",
		dot: "bg-green-500",
		chip: "bg-green-50 text-green-700"
	}
};
/** classes for a given category */
function tintOf(cat) {
	return tintClass[notifCats[cat]?.tint] ?? tintClass.blue;
}
var notifItems = [];
var notifMatrix = {
	security: [
		{
			event: "สมัครสำเร็จ (welcome)",
			trigger: "สมัครบัญชีเสร็จ",
			web: true,
			email: true,
			mandatory: false,
			link: "dashboard"
		},
		{
			event: "ยืนยันอีเมล (ส่งรหัส/ลิงก์)",
			trigger: "ขอยืนยันอีเมล",
			web: false,
			email: true,
			mandatory: true,
			link: "profile"
		},
		{
			event: "ขอรีเซ็ตรหัสผ่าน (ลืมรหัสผ่าน)",
			trigger: "กด \"ลืมรหัสผ่าน\"",
			web: false,
			email: true,
			mandatory: true,
			link: "reset-password",
			note: "ลิงก์ใช้ได้ภายใน 30 นาที · ส่งทางอีเมลเท่านั้น"
		},
		{
			event: "เปลี่ยนรหัสผ่านสำเร็จ",
			trigger: "รหัสผ่านถูกเปลี่ยน",
			web: true,
			email: true,
			mandatory: true,
			link: "profile"
		}
	],
	profile: [
		{
			event: "ส่ง KYC แล้ว รอตรวจสอบ",
			trigger: "กดส่งเอกสาร KYC",
			web: true,
			email: false,
			mandatory: false,
			link: "profile"
		},
		{
			event: "KYC อนุมัติแล้ว (พร้อมรับเงิน)",
			trigger: "แอดมินอนุมัติ",
			web: true,
			email: true,
			mandatory: false,
			link: "profile"
		},
		{
			event: "KYC ถูกปฏิเสธ (+เหตุผล ต้องแก้)",
			trigger: "แอดมินปฏิเสธ",
			web: true,
			email: true,
			mandatory: false,
			link: "profile"
		},
		{
			event: "โปรไฟล์ยังไม่ครบ (เตือนให้ทำต่อ)",
			trigger: "completeness < 100%",
			web: true,
			email: false,
			mandatory: false,
			link: "profile",
			note: "ส่งเป็น digest ไม่ถี่"
		},
		{
			event: "มี consent/PDPA version ใหม่ ต้องยอมรับ",
			trigger: "เผยแพร่ version ใหม่",
			web: true,
			email: true,
			mandatory: false,
			link: "profile",
			note: "บล็อกหลัง login"
		}
	],
	campaign: [
		{
			event: "ได้รับคำเชิญร่วมแคมเปญ (invited)",
			trigger: "แบรนด์/แอดมินเชิญ",
			web: true,
			email: true,
			mandatory: false,
			link: "campaign-detail"
		},
		{
			event: "สมัครแคมเปญสำเร็จ",
			trigger: "กดสมัครแคมเปญ",
			web: true,
			email: false,
			mandatory: false,
			link: "campaigns"
		},
		{
			event: "ได้รับเลือก + เคาะราคา ต้องตอบรับ/ปฏิเสธ",
			trigger: "แอดมินเลือก + ตั้งราคา",
			web: true,
			email: true,
			mandatory: false,
			link: "campaign-detail"
		},
		{
			event: "ใกล้หมดเวลาตอบรับงาน",
			trigger: "ก่อนหมดอายุตอบรับ",
			web: true,
			email: true,
			mandatory: false,
			link: "campaign-detail"
		},
		{
			event: "ไม่ได้รับเลือก (rejected)",
			trigger: "ปิดรอบคัดเลือก",
			web: true,
			email: false,
			mandatory: false,
			link: "campaigns",
			note: "อีเมลเป็นออปชัน"
		},
		{
			event: "แคมเปญตรง niche เปิดรับ (แนะนำ)",
			trigger: "มีแคมเปญเข้าเกณฑ์",
			web: true,
			email: false,
			mandatory: false,
			link: "campaigns",
			note: "ออปชัน: weekly digest"
		}
	],
	workflow: [
		{
			event: "ได้รับ brief แล้ว (เริ่มงานได้)",
			trigger: "แอดมินส่ง brief",
			web: true,
			email: true,
			mandatory: false,
			link: "tasks"
		},
		{
			event: "มี feedback / ขอแก้ storyline หรือ draft",
			trigger: "แอดมินขอแก้",
			web: true,
			email: true,
			mandatory: false,
			link: "tasks"
		},
		{
			event: "storyline / draft ได้รับอนุมัติ",
			trigger: "แอดมินอนุมัติ",
			web: true,
			email: false,
			mandatory: false,
			link: "tasks"
		},
		{
			event: "ถึงคิว KOL ต้องส่งงาน",
			trigger: "ถึงขั้นตอนส่งงาน",
			web: true,
			email: true,
			mandatory: false,
			link: "tasks",
			note: "storyline/draft/ลิงก์โพสต์/capture"
		},
		{
			event: "ใกล้ถึง deadline ส่งงาน",
			trigger: "ก่อน deadline",
			web: true,
			email: true,
			mandatory: false,
			link: "tasks"
		},
		{
			event: "เลย deadline แล้วยังไม่ส่ง (overdue)",
			trigger: "เลย deadline",
			web: true,
			email: true,
			mandatory: false,
			link: "tasks"
		},
		{
			event: "มีคอมเมนต์ใหม่จากแอดมินบนงาน",
			trigger: "แอดมินคอมเมนต์",
			web: true,
			email: false,
			mandatory: false,
			link: "tasks"
		}
	],
	payment: [
		{
			event: "ค่างานพร้อมจ่าย / กำหนดจ่ายแล้ว",
			trigger: "งานผ่าน + ตั้งกำหนดจ่าย",
			web: true,
			email: true,
			mandatory: false,
			link: "wallet"
		},
		{
			event: "จ่ายเงินแล้ว (+สลิป +ยอดสุทธิ)",
			trigger: "โอนเงินสำเร็จ",
			web: true,
			email: true,
			mandatory: true,
			link: "wallet"
		},
		{
			event: "การจ่ายล่าช้า / ติดปัญหา",
			trigger: "จ่ายล่าช้า/ติดปัญหา",
			web: true,
			email: true,
			mandatory: false,
			link: "wallet"
		}
	]
};
var defaultEmailSettings = {
	security: true,
	profile: true,
	campaign: true,
	workflow: true,
	payment: true
};

export { notifMatrix as a, notifItems as b, defaultEmailSettings as d, notifCats as n, tintOf as t };
//# sourceMappingURL=notifications-DCWQgz_X.mjs.map
