import { b as useLocale, a as useHead$1, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, reactive, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrLooseContain } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@vue/shared';
import 'pinia';
import '@lucide/vue';
import 'unhead/utils';

//#region app/pages/portal/profile.vue?vue&type=script&setup=true&lang.ts
var CROSS_TH = "โพสต์ข้ามแพลตฟอร์ม (TikTok / Facebook / Instagram / YouTube / X)";
var CROSS_EN = "Post Cross Platform (TikTok / Facebook / Instagram / YouTube / X)";
var profile_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "profile",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("โปรไฟล์ — Ripples", "Profile — Ripples") }));
		const platformSvg = {
			Instagram: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><defs><radialGradient id=\"igp\" cx=\"30%\" cy=\"107%\" r=\"150%\"><stop offset=\"0%\" stop-color=\"#fdf497\"/><stop offset=\"45%\" stop-color=\"#fd5949\"/><stop offset=\"60%\" stop-color=\"#d6249f\"/><stop offset=\"90%\" stop-color=\"#285AEB\"/></radialGradient></defs><path fill=\"url(#igp)\" d=\"M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z\"/></svg>",
			Facebook: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><path fill=\"#1877F2\" d=\"M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07z\"/></svg>",
			TikTok: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><path fill=\"#010101\" d=\"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z\"/></svg>",
			YouTube: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><path fill=\"#FF0000\" d=\"M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z\"/></svg>",
			Twitter: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><path fill=\"#000\" d=\"M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z\"/></svg>",
			Lemon8: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"6\" fill=\"#FAE500\"/><text x=\"12\" y=\"14.5\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"6.2\" font-style=\"italic\" font-weight=\"700\" fill=\"#111\" text-anchor=\"middle\" letter-spacing=\"-0.2\">Lemon</text><text x=\"12\" y=\"20.5\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"6.2\" font-style=\"italic\" font-weight=\"700\" fill=\"#111\" text-anchor=\"middle\">8</text></svg>"
		};
		const user = reactive({
			avatar: "https://i.pravatar.cc/240?img=32",
			firstName: "สมใจ",
			lastName: "ใจดี",
			displayName: "Somsai JD",
			email: "somsai@email.com",
			emailVerified: true,
			phone: "081-234-5678",
			lineId: "@somsai_jd",
			gender: "หญิง",
			ageRange: "25–34 ปี",
			address: "88/12 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900",
			bio: "Content creator สาย lifestyle & beauty ชอบแชร์เรื่องราวประจำวันและรีวิวสินค้าที่ใช้จริง",
			province: "กรุงเทพมหานคร",
			coverage: [
				"กรุงเทพฯ",
				"ปริมณฑล",
				"เชียงใหม่"
			],
			occupation: "ครีเอเตอร์เต็มเวลา",
			occupations: ["นักแสดง"]
		});
		const genders = [
			"หญิง",
			"ชาย",
			"ไม่ระบุ",
			"อื่น ๆ"
		];
		const gendersEn = [
			"Female",
			"Male",
			"Prefer not to say",
			"Other"
		];
		const ageRanges = [
			"ต่ำกว่า 18 ปี",
			"18–24 ปี",
			"25–34 ปี",
			"35–44 ปี",
			"45 ปีขึ้นไป"
		];
		const ageRangesEn = [
			"Under 18",
			"18–24",
			"25–34",
			"35–44",
			"45 and over"
		];
		const provinces = [
			"กรุงเทพมหานคร",
			"นนทบุรี",
			"ปทุมธานี",
			"สมุทรปราการ",
			"เชียงใหม่",
			"ขอนแก่น",
			"ชลบุรี",
			"ภูเก็ต",
			"สงขลา",
			"นครราชสีมา"
		];
		const provincesEn = [
			"Bangkok",
			"Nonthaburi",
			"Pathum Thani",
			"Samut Prakan",
			"Chiang Mai",
			"Khon Kaen",
			"Chonburi",
			"Phuket",
			"Songkhla",
			"Nakhon Ratchasima"
		];
		const occupationOptions = [
			"ครีเอเตอร์เต็มเวลา",
			"นักแสดง",
			"นักร้อง",
			"นักศึกษา",
			"พนักงานประจำ",
			"เจ้าของธุรกิจ",
			"แพทย์ / พยาบาล",
			"ครู / อาจารย์",
			"นักกีฬา",
			"ฟรีแลนซ์"
		];
		const occupationOptionsEn = [
			"Full-time creator",
			"Actor",
			"Singer",
			"Student",
			"Full-time employee",
			"Business owner",
			"Doctor / Nurse",
			"Teacher / Lecturer",
			"Athlete",
			"Freelancer"
		];
		const coverageOptions = [
			"กรุงเทพฯ",
			"ปริมณฑล",
			"ภาคเหนือ",
			"เชียงใหม่",
			"ภาคอีสาน",
			"ภาคตะวันออก",
			"ภาคใต้",
			"ทั่วประเทศ",
			"ออนไลน์ทั้งหมด"
		];
		const coverageOptionsEn = [
			"Bangkok",
			"Greater Bangkok",
			"Northern Thailand",
			"Chiang Mai",
			"Northeastern Thailand",
			"Eastern Thailand",
			"Southern Thailand",
			"Nationwide",
			"Fully online"
		];
		const niches = reactive([
			{
				value: "Beauty",
				name: "ความงาม & สกินแคร์",
				nameEn: "Beauty & Skincare",
				on: true
			},
			{
				value: "Food",
				name: "อาหาร & เครื่องดื่ม",
				nameEn: "Food & Beverage",
				on: false
			},
			{
				value: "Lifestyle",
				name: "ไลฟ์สไตล์",
				nameEn: "Lifestyle",
				on: true
			},
			{
				value: "Health",
				name: "สุขภาพ & การแพทย์",
				nameEn: "Doctor & Health",
				on: false
			},
			{
				value: "Family",
				name: "เด็ก & ครอบครัว",
				nameEn: "Kids & Family",
				on: false
			},
			{
				value: "Entertainment",
				name: "บันเทิง & ตลก",
				nameEn: "Ent. & Comedy",
				on: true
			},
			{
				value: "Review",
				name: "รีวิว ป้ายยา",
				nameEn: "Review ป้ายยา",
				on: false
			},
			{
				value: "Promotion",
				name: "โปรโมชั่น",
				nameEn: "Promotion",
				on: false
			},
			{
				value: "Finance",
				name: "การเงิน & การลงทุน",
				nameEn: "Finance & Invest",
				on: false
			},
			{
				value: "Travel",
				name: "ท่องเที่ยว",
				nameEn: "Travel",
				on: false
			},
			{
				value: "Home & Urban design",
				name: "บ้าน & ตกแต่ง",
				nameEn: "Home & Urban design",
				on: false
			},
			{
				value: "Education",
				name: "การศึกษา",
				nameEn: "Education",
				on: false
			},
			{
				value: "Sport",
				name: "กีฬา",
				nameEn: "Sport",
				on: false
			},
			{
				value: "PET",
				name: "สัตว์เลี้ยง",
				nameEn: "PET",
				on: false
			},
			{
				value: "Couple",
				name: "คู่รัก",
				nameEn: "Couple",
				on: false
			}
		]);
		const consent = [
			{
				key: "terms",
				label: "ข้อกำหนดการใช้บริการ (Terms)",
				labelEn: "Terms of Service",
				version: "v2.1",
				acceptedAt: "12 ม.ค. 2567",
				latest: "v2.1"
			},
			{
				key: "privacy",
				label: "นโยบายความเป็นส่วนตัว (Privacy)",
				labelEn: "Privacy Policy",
				version: "v1.8",
				acceptedAt: "12 ม.ค. 2567",
				latest: "v1.8"
			},
			{
				key: "pdpa",
				label: "ความยินยอม PDPA",
				labelEn: "PDPA Consent",
				version: "v1.3",
				acceptedAt: "12 ม.ค. 2567",
				latest: "v1.3"
			}
		];
		const marketingConsent = reactive({
			on: true,
			at: "12 ม.ค. 2567"
		});
		const consentLatestWhenNew = { terms: "v2.2" };
		const socials = reactive([
			{
				platform: "Instagram",
				source: "sync",
				handle: "@somsai_jd",
				url: "instagram.com/somsai_jd",
				connected: true,
				followers: "25,500",
				er: "5.8%",
				grade: "A",
				verified: true,
				synced: "2 ชม. ที่แล้ว",
				syncedEn: "2 hrs ago",
				reachNote: "",
				reachNoteEn: "",
				demo: {
					f: "78% หญิง",
					fEn: "78% female",
					age: "25–34 ปี",
					ageEn: "25–34",
					geo: "กรุงเทพฯ 42%",
					geoEn: "Bangkok 42%"
				}
			},
			{
				platform: "TikTok",
				source: "sync",
				handle: "@somsai_jd",
				url: "tiktok.com/@somsai_jd",
				connected: true,
				followers: "45,200",
				er: "7.2%",
				grade: "A",
				verified: true,
				synced: "2 ชม. ที่แล้ว",
				syncedEn: "2 hrs ago",
				reachNote: "TikTok API ไม่มี reach — ER คิดจากยอดวิว",
				reachNoteEn: "TikTok API has no reach — ER is calculated from views",
				demo: {
					f: "65% หญิง",
					fEn: "65% female",
					age: "18–24 ปี",
					ageEn: "18–24",
					geo: "ทั่วประเทศ",
					geoEn: "Nationwide"
				}
			},
			{
				platform: "Facebook",
				source: "sync",
				handle: "Somsai JaiDee",
				url: "facebook.com/somsai.jaidee",
				connected: true,
				followers: "12,300",
				er: "3.1%",
				grade: "B",
				verified: false,
				synced: "1 วันที่แล้ว",
				syncedEn: "1 day ago",
				reachNote: "",
				reachNoteEn: "",
				demo: {
					f: "54% หญิง",
					fEn: "54% female",
					age: "35–44 ปี",
					ageEn: "35–44",
					geo: "กรุงเทพฯ 38%",
					geoEn: "Bangkok 38%"
				}
			},
			{
				platform: "YouTube",
				source: "sync",
				handle: "",
				url: "",
				connected: false,
				followers: "—",
				er: "—",
				grade: "—",
				verified: false,
				synced: "",
				syncedEn: "",
				reachNote: "YouTube API ไม่มี reach — ER คิดจากยอดวิว",
				reachNoteEn: "YouTube API has no reach — ER is calculated from views",
				demo: null
			},
			{
				platform: "Twitter",
				source: "admin",
				handle: "",
				url: "",
				connected: false,
				followers: "—",
				er: "—",
				grade: "—",
				verified: false,
				synced: "",
				syncedEn: "",
				reachNote: "",
				reachNoteEn: "",
				demo: null
			},
			{
				platform: "Lemon8",
				source: "admin",
				handle: "@somsai_jd",
				url: "lemon8-app.com/@somsai_jd",
				connected: true,
				followers: "8,700",
				er: "6.4%",
				grade: "B",
				verified: false,
				synced: "5 ชม. ที่แล้ว",
				syncedEn: "5 hrs ago",
				reachNote: "",
				reachNoteEn: "",
				demo: {
					f: "82% หญิง",
					fEn: "82% female",
					age: "18–24 ปี",
					ageEn: "18–24",
					geo: "กรุงเทพฯ 48%",
					geoEn: "Bangkok 48%"
				}
			}
		]);
		const rates = reactive([
			{
				platform: "TikTok",
				base: null,
				formats: [
					[
						"รีวิววิดีโอสั้น",
						"Short VDO Review",
						null
					],
					[
						"โพสต์ภาพเดี่ยว",
						"Create Single Photo",
						null
					],
					[
						"โพสต์ภาพอัลบั้ม",
						"Create Album Photo",
						null
					],
					[
						"รีวิววิดีโอยาว",
						"Long VDO Review",
						null
					],
					[
						"สร้างโค้ดส่วนลด",
						"Gen Code",
						null
					],
					[
						"เพิ่มตะกร้า",
						"Add Basket",
						null
					],
					[
						"โพสต์ PR",
						"PR POST",
						null
					],
					[
						"สตอรี่",
						"Story",
						null
					],
					[
						CROSS_TH,
						CROSS_EN,
						null
					]
				]
			},
			{
				platform: "Facebook",
				base: null,
				formats: [
					[
						"โพสต์ภาพเดี่ยว",
						"Create Single Photo",
						null
					],
					[
						"โพสต์ภาพอัลบั้ม",
						"Create Album Photo",
						null
					],
					[
						"โพสต์ PR",
						"PR POST",
						null
					],
					[
						"รีวิววิดีโอสั้น",
						"Short VDO Review",
						null
					],
					[
						"รีวิววิดีโอยาว",
						"Long VDO Review",
						null
					],
					[
						"เพิ่ม Advertiser",
						"Add Advertiser",
						null
					],
					[
						"ค่าบริหารจัดการ",
						"Management Fee",
						null
					],
					[
						"แท็ก Branded Content",
						"Tag Branded",
						null
					],
					[
						CROSS_TH,
						CROSS_EN,
						null
					]
				]
			},
			{
				platform: "Instagram",
				base: null,
				formats: [
					[
						"โพสต์ภาพเดี่ยว",
						"Create Single Photo",
						null
					],
					[
						"โพสต์ภาพอัลบั้ม",
						"Create Album Photo",
						null
					],
					[
						"สตอรี่",
						"Story",
						null
					],
					[
						"โพสต์ PR",
						"PR POST",
						null
					],
					[
						"รีวิววิดีโอสั้น",
						"Short VDO Review",
						null
					],
					[
						"รีวิววิดีโอยาว",
						"Long VDO Review",
						null
					],
					[
						"แท็ก Branded / Paid Partnership",
						"Tag Branded / Paid Partnership",
						null
					],
					[
						CROSS_TH,
						CROSS_EN,
						null
					]
				]
			},
			{
				platform: "YouTube",
				base: null,
				formats: [
					[
						"สปอนเซอร์คอนเทนต์หลัก",
						"Sponsorship Main Content",
						null
					],
					[
						"สปอนเซอร์คอนเทนต์ Tie-In",
						"Sponsorship Tie-In Content",
						null
					],
					[
						CROSS_TH,
						CROSS_EN,
						null
					]
				]
			},
			{
				platform: "Twitter",
				base: null,
				formats: [
					[
						"โพสต์ภาพเดี่ยว",
						"Create Single Photo",
						null
					],
					[
						"โพสต์ภาพอัลบั้ม",
						"Create Album Photo",
						null
					],
					[
						"โพสต์ PR",
						"PR POST",
						null
					],
					[
						"รีวิววิดีโอสั้น",
						"Short VDO Review",
						null
					],
					[
						"รีวิววิดีโอยาว",
						"Long VDO Review",
						null
					],
					[
						"ค่า Boost",
						"Boost Fee",
						null
					],
					[
						CROSS_TH,
						CROSS_EN,
						null
					]
				]
			},
			{
				platform: "Lemon8",
				base: 5e3,
				formats: [
					[
						"รีวิววิดีโอสั้น",
						"Short VDO Review",
						null
					],
					[
						"โพสต์ภาพเดี่ยว",
						"Create Single Photo",
						5e3
					],
					[
						"โพสต์ภาพอัลบั้ม",
						"Create Album Photo",
						null
					],
					[
						"รีวิววิดีโอยาว",
						"Long VDO Review",
						7e3
					],
					[
						"โพสต์ PR",
						"PR POST",
						null
					]
				]
			}
		]);
		const rateTerms = reactive({
			travel: "",
			usage1m: "",
			buyout: "",
			deleteAfter: "ไม่ใช่",
			affiliate: "",
			special: ""
		});
		const kyc = reactive({
			identity: {
				nameTh: "สมใจ ใจดี",
				nameEn: "Somjai Jaidee",
				idNumber: "1 1019 01234 56 7",
				dob: "15 ม.ค. 2541",
				regAddress: "123/45 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
				issuedDate: "10 มี.ค. 2563",
				expiryDate: "14 ม.ค. 2571"
			},
			bank: {
				bank: "กสิกรไทย (KBANK)",
				account: "123-4-56789-0",
				name: "สมใจ ใจดี"
			},
			tax: {
				taxId: "1 1019 01234 56 7",
				type: "บุคคลธรรมดา",
				vat: "ไม่จด",
				company: "บริษัท สมใจ ครีเอทีฟ จำกัด",
				branch: "00000 (สำนักงานใหญ่)",
				regAddr: "123/45 ถนนสุขุมวิท กรุงเทพฯ 10110",
				bizType: "บริการสื่อโฆษณา"
			},
			rejectReason: "ภาพหน้าสมุดบัญชีไม่ชัด — กรุณาอัปโหลดใหม่ให้เห็นเลขบัญชีและชื่อชัดเจน",
			rejectReasonEn: "The bankbook photo is unclear — please re-upload so the account number and name are clearly visible"
		});
		const banks = [
			"กสิกรไทย (KBANK)",
			"ไทยพาณิชย์ (SCB)",
			"กรุงเทพ (BBL)",
			"กรุงไทย (KTB)",
			"กรุงศรี (BAY)",
			"ทหารไทยธนชาต (ttb)",
			"ออมสิน (GSB)"
		];
		const banksEn = [
			"Kasikornbank (KBANK)",
			"Siam Commercial Bank (SCB)",
			"Bangkok Bank (BBL)",
			"Krungthai Bank (KTB)",
			"Krungsri (BAY)",
			"TMBThanachart (ttb)",
			"Government Savings Bank (GSB)"
		];
		const KYC_DOCS_INDIVIDUAL = [
			{
				key: "id_card_front",
				label: "บัตรประชาชน",
				labelEn: "ID card",
				required: true
			},
			{
				key: "selfie",
				label: "เซลฟี่คู่บัตรประชาชน",
				labelEn: "Selfie with ID card",
				required: true
			},
			{
				key: "book_bank",
				label: "หน้าสมุดบัญชีธนาคาร",
				labelEn: "Bankbook front page",
				required: true,
				note: "ชื่อบัญชีต้องตรงกับชื่อในบัตรประชาชน",
				noteEn: "The account name must match the name on your ID card"
			}
		];
		const KYC_DOCS_CORPORATE = [
			{
				key: "id_card_front",
				label: "บัตรประชาชนผู้มีอำนาจลงนาม",
				labelEn: "ID card of the authorised signatory",
				required: true
			},
			{
				key: "selfie",
				label: "เซลฟี่คู่บัตรประชาชน",
				labelEn: "Selfie with ID card",
				required: true
			},
			{
				key: "company_certificate",
				label: "หนังสือรับรองบริษัท",
				labelEn: "Company certificate",
				required: true
			},
			{
				key: "por_por_20",
				label: "ภ.พ.20",
				labelEn: "Por Por 20 (VAT certificate)",
				required: false,
				note: "แนบหากจดทะเบียน VAT",
				noteEn: "Attach if you are VAT registered"
			},
			{
				key: "company_book_bank",
				label: "หน้าสมุดบัญชีธนาคารของบริษัท",
				labelEn: "Company bankbook front page",
				required: true,
				note: "ชื่อบัญชีต้องตรงกับชื่อบริษัท",
				noteEn: "The account name must match the company name"
			}
		];
		const isCorporate = computed(() => kyc.tax.type === "นิติบุคคล");
		const kycDocs = computed(() => isCorporate.value ? KYC_DOCS_CORPORATE : KYC_DOCS_INDIVIDUAL);
		const acceptingWork = ref(true);
		const editing = ref(false);
		const kycState = ref("approved");
		const socialEmpty = ref(false);
		const consentNew = ref(false);
		const activeTab = ref("personal");
		const tabs = [
			[
				"personal",
				"ข้อมูลส่วนตัว",
				"Personal info",
				"user"
			],
			[
				"social",
				"บัญชีโซเชียล",
				"Social accounts",
				"share-2"
			],
			[
				"rate",
				"Rate Card",
				"Rate Card",
				"tag"
			],
			[
				"kyc",
				"ยืนยันตัวตน / KYC",
				"Identity / KYC",
				"shield-check"
			]
		];
		function fieldClass(o) {
			return `pf-in w-full rounded-lg border border-[#0F2747]/15 px-3.5 py-2.5 text-sm outline-none transition focus:border-primary/50 disabled:cursor-not-allowed ${o.ro || !editing.value ? "bg-surface text-muted" : "bg-white text-ink"}`;
		}
		function fieldDisabled(o) {
			return o.ro || !editing.value;
		}
		const basicFields = computed(() => [
			{
				label: "ชื่อจริง",
				labelEn: "First name",
				value: user.firstName,
				note: "ชื่อตามบัตรประชาชน — ต้องตรงกับ KYC",
				noteEn: "Name as it appears on your ID card — must match KYC"
			},
			{
				label: "นามสกุล",
				labelEn: "Last name",
				value: user.lastName,
				note: "นามสกุลตามบัตรประชาชน",
				noteEn: "Surname as it appears on your ID card"
			},
			{
				label: "ชื่อในวงการ",
				labelEn: "Display name",
				value: user.displayName,
				span: 2,
				note: "ชื่อที่ใช้แสดงในระบบและให้แบรนด์/แอดมินเห็น — แยกจากชื่อจริง",
				noteEn: "The name shown in the system and seen by brands/admins — separate from your real name"
			},
			{
				label: "อีเมล",
				labelEn: "Email",
				value: user.email,
				type: "email",
				verify: "email",
				note: "ใช้เข้าสู่ระบบและรับแจ้งเตือน",
				noteEn: "Used to sign in and receive notifications"
			},
			{
				label: "เบอร์โทรศัพท์",
				labelEn: "Phone number",
				value: user.phone,
				type: "tel",
				note: "ตัวเลข 10 หลัก · ใช้ติดต่อกับทีมงานและแบรนด์",
				noteEn: "10 digits · Used to contact our team and brands"
			},
			{
				label: "LINE ID",
				labelEn: "LINE ID",
				value: user.lineId,
				note: "ช่องทางติดต่อสำรองกับทีมงาน",
				noteEn: "Backup contact channel with our team"
			},
			{
				label: "เพศ",
				labelEn: "Gender",
				value: user.gender,
				type: "select",
				options: genders,
				optionsEn: gendersEn,
				note: "ใช้จับคู่แคมเปญที่ระบุกลุ่มเป้าหมาย",
				noteEn: "Used to match campaigns that target specific audiences"
			},
			{
				label: "ช่วงอายุ",
				labelEn: "Age range",
				value: user.ageRange,
				type: "select",
				options: ageRanges,
				optionsEn: ageRangesEn,
				note: "ดึงจากวันเกิดใน KYC อัตโนมัติเมื่อยืนยันแล้ว",
				noteEn: "Filled automatically from your KYC date of birth once verified"
			},
			{
				label: "ที่อยู่ (สำหรับติดต่อ/จัดส่งสินค้า)",
				labelEn: "Address (for contact/product delivery)",
				value: user.address,
				span: 2,
				note: "ใช้ส่งสินค้าตัวอย่างจากแบรนด์ — คนละช่องกับที่อยู่ตามทะเบียนบ้านใน KYC",
				noteEn: "Used to ship product samples from brands — different from the registered address in KYC"
			},
			{
				label: "เกี่ยวกับฉัน",
				labelEn: "About me",
				value: user.bio,
				type: "textarea",
				span: 2,
				note: "แนะนำตัวสั้น ๆ สไตล์คอนเทนต์ของคุณ (≤ 300 ตัวอักษร)",
				noteEn: "A short intro about you and your content style (≤ 300 characters)"
			}
		]);
		const areaFields = computed(() => [{
			label: "จังหวัด / พื้นที่หลัก",
			labelEn: "Province / main area",
			value: user.province,
			type: "select",
			options: provinces,
			optionsEn: provincesEn,
			note: "ที่อยู่อาศัยหลักของคุณ",
			noteEn: "Your primary place of residence"
		}, {
			label: "อาชีพ",
			labelEn: "Occupation",
			value: user.occupation,
			note: "อาชีพหลัก เช่น ครีเอเตอร์เต็มเวลา / นักศึกษา / พนักงานประจำ",
			noteEn: "Your main occupation, e.g. full-time creator / student / employee"
		}]);
		const secRows = computed(() => [{
			icon: "mail",
			label: "อีเมล",
			labelEn: "Email",
			val: user.email,
			ok: user.emailVerified
		}]);
		const loginProviders = reactive([
			{
				key: "facebook",
				label: "Facebook",
				linked: true
			},
			{
				key: "google",
				label: "Google",
				linked: true
			},
			{
				key: "tiktok",
				label: "TikTok",
				linked: false
			}
		]);
		const nichesOnCount = computed(() => niches.filter((n) => n.on).length);
		const consentRows = computed(() => consent.map((c) => {
			const latest = consentNew.value && consentLatestWhenNew[c.key] ? consentLatestWhenNew[c.key] : c.latest;
			return {
				...c,
				latest,
				outdated: latest !== c.version
			};
		}));
		const rateTermsFields = computed(() => [
			{
				label: "ค่าเดินทางถ่ายทำนอกสถานที่ภายในกทม. (ถ้ามี)",
				labelEn: "On-location travel fee within Bangkok (if any)",
				value: rateTerms.travel,
				note: "ระบุเป็นบาท เว้นว่างถ้าไม่คิดค่าเดินทาง",
				noteEn: "In THB — leave blank if not charged"
			},
			{
				label: "ค่าใช้จ่ายสำหรับแบรนด์นำคลิปไปใช้ 1 เดือน",
				labelEn: "Fee for the brand to use the clip for 1 month",
				value: rateTerms.usage1m,
				note: "ค่าลิขสิทธิ์นำคลิปไปใช้บนสื่อแบรนด์ 1 เดือน",
				noteEn: "Usage rights for the brand to run the clip on their media for 1 month"
			},
			{
				label: "ค่าใช้จ่ายสำหรับแบรนด์นำคลิปไปใช้แบบซื้อขาด",
				labelEn: "Fee for the brand to buy out the clip",
				value: rateTerms.buyout,
				note: "ค่าลิขสิทธิ์แบบซื้อขาด ใช้ได้ไม่จำกัดเวลา",
				noteEn: "Full buyout — unlimited usage with no time limit"
			},
			{
				label: "ถ้าครบกำหนดทางแบรนด์ต้องลบคลิปหรือไม่",
				labelEn: "Must the brand delete the clip when the term ends?",
				value: rateTerms.deleteAfter,
				type: "select",
				options: ["ใช่", "ไม่ใช่"],
				optionsEn: ["Yes", "No"],
				note: "เงื่อนไขหลังหมดสัญญาการใช้งาน",
				noteEn: "Condition after the usage term expires"
			},
			{
				label: "ค่าใช้จ่ายสำหรับติดตะกร้า หรือ Affiliate",
				labelEn: "Fee for adding a shopping basket / Affiliate",
				value: rateTerms.affiliate,
				note: "ค่าติดตะกร้าสินค้า/ลิงก์ Affiliate ในคอนเทนต์",
				noteEn: "Fee for adding a product basket / Affiliate link in the content"
			},
			{
				label: "เงื่อนไขพิเศษอื่น ๆ",
				labelEn: "Other special terms",
				value: rateTerms.special,
				type: "textarea",
				span: 2,
				note: "เช่น แก้ไขงานได้ 2 ครั้ง / เมื่อโพสต์ครบ 3 เดือนจะลบโพสต์ออก / ไม่รับงานคู่แข่งในหมวดเดียวกัน",
				noteEn: "E.g. up to 2 rounds of revisions / posts are removed after 3 months / no competing brands in the same category"
			}
		]);
		const kycRo = computed(() => kycState.value === "pending" || kycState.value === "approved");
		const identityFields = computed(() => [
			{
				label: "ชื่อ-นามสกุล (ไทย)",
				labelEn: "Full name (Thai)",
				value: kyc.identity.nameTh,
				ro: kycRo.value,
				note: "ตามหน้าบัตรประชาชน",
				noteEn: "As shown on your ID card"
			},
			{
				label: "ชื่อ-นามสกุล (อังกฤษ)",
				labelEn: "Full name (English)",
				value: kyc.identity.nameEn,
				ro: kycRo.value,
				note: "ตามที่ปรากฏบนบัตร/พาสปอร์ต",
				noteEn: "As it appears on your ID card/passport"
			},
			{
				label: "เลขบัตรประชาชน (13 หลัก)",
				labelEn: "ID card number (13 digits)",
				value: kyc.identity.idNumber,
				ro: kycRo.value,
				note: "ตัวเลข 13 หลัก ระบบตรวจ checksum อัตโนมัติ",
				noteEn: "13 digits, checksum verified automatically"
			},
			{
				label: "วันเกิด",
				labelEn: "Date of birth",
				value: kyc.identity.dob,
				ro: kycRo.value,
				note: "ใช้คำนวณช่วงอายุในโปรไฟล์",
				noteEn: "Used to calculate the age range in your profile"
			},
			{
				label: "วันออกบัตร",
				labelEn: "Date of issue",
				value: kyc.identity.issuedDate,
				ro: kycRo.value,
				note: "ตามที่ระบุบนบัตรประชาชน",
				noteEn: "As printed on your ID card"
			},
			{
				label: "วันหมดอายุบัตร",
				labelEn: "Expiry date",
				value: kyc.identity.expiryDate,
				ro: kycRo.value,
				note: "บัตรหมดอายุแล้วจะยืนยันตัวตนไม่ผ่าน",
				noteEn: "An expired ID card can't pass verification"
			},
			{
				label: "ที่อยู่ตามทะเบียนบ้าน",
				labelEn: "Registered (house registration) address",
				value: kyc.identity.regAddress,
				ro: kycRo.value,
				span: 2,
				note: "ใช้สำหรับเอกสารภาษี — อาจต่างจากที่อยู่ติดต่อ",
				noteEn: "Used for tax documents — may differ from your contact address"
			}
		]);
		const bankFields = computed(() => [
			{
				label: "ธนาคาร",
				labelEn: "Bank",
				value: kyc.bank.bank,
				type: "select",
				options: banks,
				optionsEn: banksEn,
				ro: kycRo.value,
				note: "เลือกจากรายการธนาคาร",
				noteEn: "Choose from the list of banks"
			},
			{
				label: "เลขที่บัญชี",
				labelEn: "Account number",
				value: kyc.bank.account,
				ro: kycRo.value,
				note: "ชื่อบัญชีต้องตรงกับชื่อในบัตร",
				noteEn: "The account name must match the name on your ID card"
			},
			{
				label: "ชื่อบัญชี",
				labelEn: "Account name",
				value: kyc.bank.name,
				ro: kycRo.value,
				note: "ตรงกับชื่อ-นามสกุลในบัตร",
				noteEn: "Must match the full name on your ID card"
			}
		]);
		const taxBaseFields = computed(() => [
			{
				label: "เลขประจำตัวผู้เสียภาษี",
				labelEn: "Taxpayer ID",
				value: kyc.tax.taxId,
				ro: kycRo.value,
				note: "บุคคล = เลขบัตร 13 หลัก",
				noteEn: "For individuals = your 13-digit ID card number"
			},
			{
				label: "ประเภทผู้เสียภาษี",
				labelEn: "Taxpayer type",
				value: kyc.tax.type,
				type: "select",
				options: ["บุคคลธรรมดา", "นิติบุคคล"],
				optionsEn: ["Individual", "Juristic person"],
				ro: kycRo.value,
				note: "เลือกนิติบุคคลเพื่อกรอกข้อมูลบริษัท",
				noteEn: "Select juristic person to fill in company details"
			},
			{
				label: "จด VAT",
				labelEn: "VAT registration",
				value: kyc.tax.vat,
				type: "select",
				options: ["ไม่จด", "จดทะเบียน VAT"],
				optionsEn: ["Not registered", "VAT registered"],
				ro: kycRo.value,
				note: "มีผลต่อการออกใบกำกับภาษี",
				noteEn: "Affects how tax invoices are issued"
			}
		]);
		const taxCompanyFields = computed(() => [
			{
				label: "ชื่อบริษัท",
				labelEn: "Company name",
				value: kyc.tax.company,
				ro: kycRo.value
			},
			{
				label: "เลขสาขา",
				labelEn: "Branch number",
				value: kyc.tax.branch,
				ro: kycRo.value,
				note: "สำนักงานใหญ่ = 00000",
				noteEn: "Head office = 00000"
			},
			{
				label: "ที่อยู่จดทะเบียน",
				labelEn: "Registered address",
				value: kyc.tax.regAddr,
				ro: kycRo.value,
				span: 2
			},
			{
				label: "ประเภทธุรกิจ",
				labelEn: "Business type",
				value: kyc.tax.bizType,
				ro: kycRo.value,
				span: 2
			}
		]);
		const kycBadge = computed(() => {
			switch (kycState.value) {
				case "approved": return {
					cls: "bg-green-100 text-green-700",
					icon: "check-circle",
					text: "อนุมัติแล้ว",
					textEn: "Approved"
				};
				case "pending": return {
					cls: "bg-amber-100 text-amber-700",
					icon: "clock",
					text: "รอตรวจสอบ",
					textEn: "Under review"
				};
				case "rejected": return {
					cls: "bg-red-100 text-red-700",
					icon: "x-circle",
					text: "ถูกปฏิเสธ",
					textEn: "Rejected"
				};
				default: return null;
			}
		});
		const kycBanner = computed(() => {
			const map = {
				green: "border-green-200 bg-green-50 text-green-900",
				amber: "border-amber-200 bg-amber-50 text-amber-900",
				red: "border-red-200 bg-red-50 text-red-900",
				primary: "border-primary/20 bg-primary/5 text-ink"
			};
			const ic = {
				green: "text-green-600",
				amber: "text-amber-600",
				red: "text-red-600",
				primary: "text-primary"
			};
			switch (kycState.value) {
				case "approved": return {
					box: map.green,
					ic: ic.green,
					icon: "check-circle",
					title: "ยืนยันตัวตนสำเร็จ",
					titleEn: "Identity verified",
					msg: "บัญชีของคุณได้รับการยืนยันครบถ้วนแล้ว พร้อมรับเงินจากแคมเปญ",
					msgEn: "Your account is fully verified and ready to receive payments from campaigns"
				};
				case "pending": return {
					box: map.amber,
					ic: ic.amber,
					icon: "clock",
					title: "กำลังตรวจสอบ",
					titleEn: "Under review",
					msg: "เอกสารของคุณอยู่ระหว่างตรวจสอบ ใช้เวลา 1–2 วันทำการ ระหว่างนี้แก้ไขข้อมูลไม่ได้",
					msgEn: "Your documents are being reviewed, which takes 1–2 business days. You can't edit your details in the meantime"
				};
				case "rejected": return {
					box: map.red,
					ic: ic.red,
					icon: "x-circle",
					title: "เอกสารถูกปฏิเสธ",
					titleEn: "Documents rejected",
					msg: kyc.rejectReason,
					msgEn: kyc.rejectReasonEn
				};
				default: return {
					box: map.primary,
					ic: ic.primary,
					icon: "upload",
					title: "ยืนยันตัวตนของคุณ",
					titleEn: "Verify your identity",
					msg: "อัปโหลดเอกสารเพื่อยืนยันบัญชีและเริ่มรับเงิน",
					msgEn: "Upload your documents to verify your account and start getting paid"
				};
			}
		});
		const kycNoneOrRejected = computed(() => kycState.value === "none" || kycState.value === "rejected");
		const docTitle = computed(() => tr(kycNoneOrRejected.value ? "เอกสารที่ต้องใช้" : "เอกสารที่อัปโหลด", kycNoneOrRejected.value ? "Required documents" : "Uploaded documents"));
		const completeness = computed(() => {
			const social1 = !socialEmpty.value && socials.some((s) => s.connected);
			const rate1 = rates.some((r) => r.base !== null || r.formats.some((f) => f[2] !== null));
			const niche1 = niches.some((n) => n.on);
			const checks = [
				{
					label: "ข้อมูลพื้นฐานครบ",
					labelEn: "Basic info complete",
					done: true
				},
				{
					label: "เลือกหมวดหมู่",
					labelEn: "Categories selected",
					done: niche1
				},
				{
					label: "เชื่อมโซเชียล",
					labelEn: "Social connected",
					done: social1
				},
				{
					label: "ตั้ง Rate Card",
					labelEn: "Rate Card set",
					done: rate1
				},
				{
					label: "ยืนยันตัวตน (KYC)",
					labelEn: "Identity verified (KYC)",
					done: kycState.value === "approved"
				}
			];
			const doneN = checks.filter((c) => c.done).length;
			return {
				checks,
				pct: Math.round(doneN / checks.length * 100),
				readyWork: social1 && rate1 && niche1,
				readyEarn: kycState.value === "approved"
			};
		});
		const pwdOpen = ref(false);
		const gateOpen = ref(false);
		const gateChecked = ref(false);
		const gateUpdated = computed(() => consent.filter((c) => consentLatestWhenNew[c.key]).map((c) => ({
			...c,
			latest: consentLatestWhenNew[c.key]
		})));
		function formatRate(v) {
			return v.toLocaleString();
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("โปรไฟล์", "Profile"))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("จัดการข้อมูลและการตั้งค่าของคุณ", "Manage your information and settings"))}</p></div><div class="flex gap-3"><button type="button" class="inline-flex items-center gap-2 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-sm transition hover:border-primary/40 hover:text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "lock",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่าน", "Change password"))}</button><button type="button" class="${ssrRenderClass(["inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white shadow-sm transition", unref(editing) ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primaryDark"])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(editing) ? "save" : "edit-3",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(editing) ? unref(tr)("บันทึก", "Save") : unref(tr)("แก้ไขโปรไฟล์", "Edit profile"))}</button></div></section><div class="mb-6"><div class="${ssrRenderClass(["flex flex-col gap-4 rounded-xl border p-5 shadow-sm transition sm:flex-row sm:items-center sm:justify-between", unref(acceptingWork) ? "border-green-200 bg-green-50" : "border-[#0F2747]/10 bg-white"])}"><div class="flex items-center gap-3.5"><div class="${ssrRenderClass(["flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", unref(acceptingWork) ? "bg-green-100" : "bg-surface"])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(acceptingWork) ? "briefcase" : "circle-slash",
				class: ["h-5 w-5", unref(acceptingWork) ? "text-green-600" : "text-[#5B6B82]/60"]
			}, null, _parent));
			_push(`</div><div><p class="flex items-center gap-2 font-heading text-base font-bold text-ink">${ssrInterpolate(unref(tr)("สถานะรับงาน", "Work availability"))} <span class="${ssrRenderClass(["inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold", unref(acceptingWork) ? "bg-green-100 text-green-700" : "bg-surface text-muted"])}"><span class="${ssrRenderClass(["h-1.5 w-1.5 rounded-full", unref(acceptingWork) ? "bg-green-500" : "bg-[#5B6B82]/50"])}"></span> ${ssrInterpolate(unref(acceptingWork) ? unref(tr)("เปิดรับงาน", "Open for work") : unref(tr)("ไม่รับงาน", "Not accepting work"))}</span></p><p class="mt-0.5 text-xs leading-relaxed text-muted">${ssrInterpolate(unref(acceptingWork) ? unref(tr)("แบรนด์และแอดมินสามารถเห็นโปรไฟล์และชวนคุณร่วมแคมเปญได้", "Brands and admins can see your profile and invite you to campaigns") : unref(tr)("โปรไฟล์ถูกซ่อนจากการจับคู่ — คุณจะไม่ได้รับข้อเสนองานใหม่", "Your profile is hidden from matching — you won't receive new work offers"))}</p></div></div><button type="button" role="switch"${ssrRenderAttr("aria-checked", unref(acceptingWork))} class="${ssrRenderClass(["relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors", unref(acceptingWork) ? "bg-green-500" : "bg-[#0F2747]/20"])}"><span class="${ssrRenderClass(["inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform", unref(acceptingWork) ? "translate-x-6" : "translate-x-1"])}"></span></button></div></div><div class="mb-5"><div class="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border-2 border-dashed border-violet-300 bg-violet-50/60 px-4 py-3"><span class="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-violet-700">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "flask-conical",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("สำหรับรีวิว (ไม่ใช่ UI จริง)", "For review (not the real UI)"))}</span><div class="flex items-center gap-2"><span class="text-[11px] font-bold text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("โหมด", "Mode"))}</span><div class="flex items-center gap-0.5 rounded-lg border border-[#0F2747]/10 bg-white p-0.5"><!--[-->`);
			ssrRenderList([[
				"view",
				"อ่าน",
				"Read"
			], [
				"edit",
				"แก้ไข",
				"Edit"
			]], (o) => {
				_push(`<button type="button" class="${ssrRenderClass(["rounded-md px-2.5 py-1 text-[11px] font-bold transition", (unref(editing) ? "edit" : "view") === o[0] ? "bg-primary text-white" : "text-muted hover:text-primary"])}">${ssrInterpolate(unref(tr)(o[1], o[2]))}</button>`);
			});
			_push(`<!--]--></div></div><div class="flex items-center gap-2"><span class="text-[11px] font-bold text-[#5B6B82]/70">KYC</span><div class="flex items-center gap-0.5 rounded-lg border border-[#0F2747]/10 bg-white p-0.5"><!--[-->`);
			ssrRenderList([
				[
					"none",
					"ยังไม่ส่ง",
					"Not submitted"
				],
				[
					"pending",
					"รอตรวจ",
					"Reviewing"
				],
				[
					"approved",
					"อนุมัติ",
					"Approved"
				],
				[
					"rejected",
					"ปฏิเสธ",
					"Rejected"
				]
			], (o) => {
				_push(`<button type="button" class="${ssrRenderClass(["rounded-md px-2.5 py-1 text-[11px] font-bold transition", unref(kycState) === o[0] ? "bg-primary text-white" : "text-muted hover:text-primary"])}">${ssrInterpolate(unref(tr)(o[1], o[2]))}</button>`);
			});
			_push(`<!--]--></div></div><div class="flex items-center gap-2"><span class="text-[11px] font-bold text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("โซเชียล", "Social"))}</span><div class="flex items-center gap-0.5 rounded-lg border border-[#0F2747]/10 bg-white p-0.5"><!--[-->`);
			ssrRenderList([[
				"has",
				"มีบัญชี",
				"Has accounts"
			], [
				"empty",
				"ยังไม่เชื่อม",
				"Not connected"
			]], (o) => {
				_push(`<button type="button" class="${ssrRenderClass(["rounded-md px-2.5 py-1 text-[11px] font-bold transition", (unref(socialEmpty) ? "empty" : "has") === o[0] ? "bg-primary text-white" : "text-muted hover:text-primary"])}">${ssrInterpolate(unref(tr)(o[1], o[2]))}</button>`);
			});
			_push(`<!--]--></div></div><div class="flex items-center gap-2"><span class="text-[11px] font-bold text-[#5B6B82]/70">Consent</span><div class="flex items-center gap-0.5 rounded-lg border border-[#0F2747]/10 bg-white p-0.5"><!--[-->`);
			ssrRenderList([[
				"cur",
				"ปัจจุบัน",
				"Current"
			], [
				"new",
				"มีเวอร์ชันใหม่",
				"New version"
			]], (o) => {
				_push(`<button type="button" class="${ssrRenderClass(["rounded-md px-2.5 py-1 text-[11px] font-bold transition", (unref(consentNew) ? "new" : "cur") === o[0] ? "bg-primary text-white" : "text-muted hover:text-primary"])}">${ssrInterpolate(unref(tr)(o[1], o[2]))}</button>`);
			});
			_push(`<!--]--></div></div></div></div><div class="mb-6"><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div class="flex-1"><div class="flex items-center justify-between"><p class="font-heading text-base font-bold text-ink">${ssrInterpolate(unref(tr)("ความครบของโปรไฟล์", "Profile completeness"))}</p><p class="font-heading text-lg font-extrabold text-primary">${ssrInterpolate(unref(completeness).pct)}%</p></div><div class="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface"><div class="h-full rounded-full bg-gradient-to-r from-primary to-primaryLight transition-all" style="${ssrRenderStyle({ width: unref(completeness).pct + "%" })}"></div></div><div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
			ssrRenderList(unref(completeness).checks, (c) => {
				_push(`<span class="${ssrRenderClass(["inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold", c.done ? "bg-green-100 text-green-700" : "bg-surface text-muted"])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: c.done ? "check" : "circle",
					class: "h-3 w-3"
				}, null, _parent));
				_push(`${ssrInterpolate(unref(tr)(c.label, c.labelEn))}</span>`);
			});
			_push(`<!--]--></div></div><div class="grid gap-2.5 sm:grid-cols-2 lg:w-80"><div class="${ssrRenderClass(["flex items-center gap-2.5 rounded-xl border p-3", unref(completeness).readyWork ? "border-green-200 bg-green-50" : "border-[#0F2747]/10 bg-surface"])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(completeness).readyWork ? "check-circle" : "lock",
				class: ["h-5 w-5 shrink-0", unref(completeness).readyWork ? "text-green-600" : "text-[#5B6B82]/50"]
			}, null, _parent));
			_push(`<div><p class="${ssrRenderClass(["text-sm font-bold", unref(completeness).readyWork ? "text-green-800" : "text-ink"])}">${ssrInterpolate(unref(tr)("พร้อมรับงาน", "Ready for work"))}</p><p class="${ssrRenderClass(["text-[11px]", unref(completeness).readyWork ? "text-green-600" : "text-muted"])}">${ssrInterpolate(unref(completeness).readyWork ? unref(tr)("ข้อมูลครบถ้วน", "Information complete") : unref(tr)("ทำข้อมูลให้ครบเพื่อรับงาน", "Complete your profile to get work"))}</p></div></div><div class="${ssrRenderClass(["flex items-center gap-2.5 rounded-xl border p-3", unref(completeness).readyEarn ? "border-green-200 bg-green-50" : "border-[#0F2747]/10 bg-surface"])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(completeness).readyEarn ? "check-circle" : "lock",
				class: ["h-5 w-5 shrink-0", unref(completeness).readyEarn ? "text-green-600" : "text-[#5B6B82]/50"]
			}, null, _parent));
			_push(`<div><p class="${ssrRenderClass(["text-sm font-bold", unref(completeness).readyEarn ? "text-green-800" : "text-ink"])}">${ssrInterpolate(unref(tr)("พร้อมรับเงิน", "Ready to get paid"))}</p><p class="${ssrRenderClass(["text-[11px]", unref(completeness).readyEarn ? "text-green-600" : "text-muted"])}">${ssrInterpolate(unref(completeness).readyEarn ? unref(tr)("KYC อนุมัติแล้ว", "KYC approved") : unref(tr)("ต้องผ่าน KYC ก่อน", "KYC required first"))}</p></div></div></div></div></div></div><div><div class="mb-6 flex flex-wrap gap-2"><!--[-->`);
			ssrRenderList(tabs, (t) => {
				_push(`<button type="button" class="${ssrRenderClass(["rounded-lg px-4 py-2 text-sm font-bold transition", unref(activeTab) === t[0] ? "bg-primary text-white" : "border border-[#0F2747]/10 bg-white text-muted hover:text-primary"])}">${ssrInterpolate(unref(tr)(t[1], t[2]))}</button>`);
			});
			_push(`<!--]--></div><div>`);
			if (unref(activeTab) === "personal") {
				_push(`<!--[--><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ข้อมูลพื้นฐาน", "Basic information"))}</h2><div class="mt-5"><div class="flex flex-col gap-8 md:flex-row"><div class="flex shrink-0 flex-col items-center"><img${ssrRenderAttr("src", unref(user).avatar)} alt="avatar" class="h-28 w-28 rounded-full border-4 border-primary/10 object-cover"><button type="button"${ssrIncludeBooleanAttr(!unref(editing)) ? " disabled" : ""} class="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm transition enabled:hover:text-primary disabled:opacity-50">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "camera",
					class: "h-4 w-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)("เปลี่ยนรูป", "Change photo"))}</button><p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("JPG/PNG ≤ 5MB · แนะนำ 400×400px", "JPG/PNG ≤ 5MB · 400×400px recommended"))}</p></div><div class="grid flex-1 gap-5 sm:grid-cols-2"><!--[-->`);
				ssrRenderList(unref(basicFields), (f) => {
					_push(`<div class="${ssrRenderClass(f.span === 2 ? "sm:col-span-2" : "")}"><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))} `);
					if (f.verify === "email") {
						_push(`<!--[-->`);
						if (unref(user).emailVerified) {
							_push(`<span class="inline-flex items-center gap-1 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-600">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "badge-check",
								class: "h-3 w-3"
							}, null, _parent));
							_push(` ${ssrInterpolate(unref(tr)("ยืนยันแล้ว", "Verified"))}</span>`);
						} else _push(`<button type="button" class="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 transition hover:bg-amber-100">${ssrInterpolate(unref(tr)("ส่งอีเมลยืนยัน", "Send verification email"))}</button>`);
						_push(`<!--]-->`);
					} else _push(`<!---->`);
					_push(`</label>`);
					if (f.type === "textarea") _push(`<textarea rows="3"${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}">${ssrInterpolate(f.value)}</textarea>`);
					else if (f.type === "select") {
						_push(`<select${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}"><!--[-->`);
						ssrRenderList(f.options, (opt, oi) => {
							_push(`<option${ssrRenderAttr("value", opt)}${ssrIncludeBooleanAttr(opt === f.value) ? " selected" : ""}>${ssrInterpolate(f.optionsEn ? unref(tr)(opt, f.optionsEn[oi]) : opt)}</option>`);
						});
						_push(`<!--]--></select>`);
					} else _push(`<input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
					if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div></div></div></div><div class="mt-5"></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("พื้นที่ & อาชีพ", "Area & occupation"))}</h2><div class="mt-5"><div class="grid gap-5 sm:grid-cols-2"><!--[-->`);
				ssrRenderList(unref(areaFields), (f) => {
					_push(`<div><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))}</label>`);
					if (f.type === "select") {
						_push(`<select${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}"><!--[-->`);
						ssrRenderList(f.options, (opt, oi) => {
							_push(`<option${ssrRenderAttr("value", opt)}${ssrIncludeBooleanAttr(opt === f.value) ? " selected" : ""}>${ssrInterpolate(f.optionsEn ? unref(tr)(opt, f.optionsEn[oi]) : opt)}</option>`);
						});
						_push(`<!--]--></select>`);
					} else _push(`<input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
					if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--><div class="sm:col-span-2"><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("พื้นที่ทำคอนเทนต์ (เลือกได้หลายค่า)", "Content coverage areas (select multiple)"))}</label><div class="flex flex-wrap gap-2.5"><!--[-->`);
				ssrRenderList(coverageOptions, (c, ci) => {
					_push(`<button type="button"${ssrIncludeBooleanAttr(!unref(editing)) ? " disabled" : ""} class="${ssrRenderClass(["rounded-full px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed", unref(user).coverage.includes(c) ? "bg-primary text-white" : "bg-surface text-muted enabled:hover:bg-primary/10 enabled:hover:text-primary"])}">${ssrInterpolate(unref(tr)(c, coverageOptionsEn[ci]))}</button>`);
				});
				_push(`<!--]--></div><p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("พื้นที่ที่คุณถ่ายทำ/รีวิวได้จริง ใช้จับคู่แคมเปญที่ระบุพื้นที่", "Areas where you can actually shoot/review — used to match location-specific campaigns"))}</p></div><div class="sm:col-span-2"><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("อาชีพอื่น ๆ (เลือกได้หลายค่า)", "Other occupations (select multiple)"))}</label><div class="flex flex-wrap gap-2.5"><!--[-->`);
				ssrRenderList(occupationOptions, (o, oi) => {
					_push(`<button type="button"${ssrIncludeBooleanAttr(!unref(editing)) ? " disabled" : ""} class="${ssrRenderClass(["rounded-full px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed", unref(user).occupations.includes(o) ? "bg-primary text-white" : "bg-surface text-muted enabled:hover:bg-primary/10 enabled:hover:text-primary"])}">${ssrInterpolate(unref(tr)(o, occupationOptionsEn[oi]))}</button>`);
				});
				_push(`<!--]--></div><p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("นอกจากอาชีพหลัก ถ้าคุณทำงานสายอื่นด้วย เลือกเพิ่มได้ — ช่วยให้แบรนด์หาคุณเจอจากสายอาชีพ", "If you work in other fields besides your main occupation, add them here — it helps brands find you by profession"))}</p></div></div></div></div><div class="mt-5"></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("หมวดหมู่ / Niche", "Categories / Niche"))}</h2><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("เลือกหมวดหมู่ที่คุณถนัด เพื่อให้ระบบแนะนำแคมเปญที่ใช่ (ใช้ชุดหมวดหมู่เดียวกับฝั่งแอดมิน)", "Pick the categories you specialize in so we can recommend the right campaigns (same set as the admin side)"))}</p><div class="mt-5"><div class="flex flex-wrap gap-3"><!--[-->`);
				ssrRenderList(unref(niches), (n, i) => {
					_push(`<button type="button"${ssrIncludeBooleanAttr(!unref(editing)) ? " disabled" : ""} class="${ssrRenderClass(["rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed", n.on ? "bg-primary text-white" : "bg-surface text-muted enabled:hover:bg-primary/10 enabled:hover:text-primary"])}">${ssrInterpolate(unref(tr)(n.name, n.nameEn))}</button>`);
				});
				_push(`<!--]--></div><p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("เลือกได้หลายหมวด · เลือกแล้ว " + unref(nichesOnCount) + " หมวด", "Select multiple · " + unref(nichesOnCount) + " selected"))}</p></div></div><div class="mt-5"></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("บัญชี & ความปลอดภัย", "Account & security"))}</h2><div class="mt-5"><div class="space-y-3"><!--[-->`);
				ssrRenderList(unref(secRows), (r) => {
					_push(`<div class="flex items-center justify-between gap-3 rounded-xl bg-surface p-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: r.icon,
						class: "h-5 w-5 text-ink"
					}, null, _parent));
					_push(`</div><div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)(r.label, r.labelEn))}</p><p class="text-xs text-muted">${ssrInterpolate(r.val)}</p></div></div>`);
					if (r.ok) {
						_push(`<span class="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-bold text-green-700">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "badge-check",
							class: "h-3 w-3"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("ยืนยันแล้ว", "Verified"))}</span>`);
					} else _push(`<button type="button" class="shrink-0 rounded-lg bg-amber-500 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-amber-600">${ssrInterpolate(unref(tr)("ยืนยันตอนนี้", "Verify now"))}</button>`);
					_push(`</div>`);
				});
				_push(`<!--]--><div class="flex items-center justify-between gap-3 rounded-xl bg-surface p-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "lock",
					class: "h-5 w-5 text-ink"
				}, null, _parent));
				_push(`</div><div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่าน", "Password"))}</p><p class="text-xs text-muted">${ssrInterpolate(unref(tr)("เปลี่ยนล่าสุด 3 เดือนที่แล้ว", "Last changed 3 months ago"))}</p></div></div><div class="flex shrink-0 flex-col items-end gap-1.5"><button type="button" class="rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-xs font-bold text-ink transition hover:text-primary">${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่าน", "Change password"))}</button></div></div></div><div class="mt-6"><p class="text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("บัญชีที่ผูกไว้สำหรับเข้าสู่ระบบ", "Linked sign-in accounts"))}</p><p class="mt-0.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("ใช้กดเข้าสู่ระบบได้โดยไม่ต้องกรอกรหัสผ่าน — คนละอย่างกับการเชื่อมโซเชียลในแท็บ \"บัญชีโซเชียล\" ที่ใช้ดึงสถิติ", "Use these to sign in without a password — separate from connecting your socials in the \"Social accounts\" tab, which syncs your stats"))}</p><div class="mt-3 space-y-3"><!--[-->`);
				ssrRenderList(unref(loginProviders), (p, pi) => {
					_push(`<div class="flex items-center justify-between gap-3 rounded-xl bg-surface p-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: p.linked ? "link-2" : "unlink",
						class: ["h-5 w-5", p.linked ? "text-primary" : "text-[#5B6B82]/50"]
					}, null, _parent));
					_push(`</div><div><p class="font-bold text-ink">${ssrInterpolate(p.label)}</p><p class="text-xs text-muted">${ssrInterpolate(p.linked ? unref(tr)("ผูกไว้แล้ว", "Linked") : unref(tr)("ยังไม่ได้ผูก", "Not linked"))}</p></div></div><button type="button" class="${ssrRenderClass(["shrink-0 rounded-lg px-4 py-2 text-xs font-bold transition", p.linked ? "border border-[#0F2747]/10 bg-white text-ink hover:text-primary" : "bg-primary text-white hover:bg-primaryDark"])}">${ssrInterpolate(p.linked ? unref(tr)("ยกเลิกการผูก", "Unlink") : unref(tr)("ผูกบัญชี", "Link account"))}</button></div>`);
				});
				_push(`<!--]--></div></div></div></div><div class="mt-5"></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ความยินยอม (Consent / PDPA)", "Consent (PDPA)"))}</h2><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("บันทึกเวอร์ชันและวันที่คุณยอมรับ เมื่อมีเวอร์ชันใหม่ระบบจะแจ้งให้ยอมรับอีกครั้ง", "We record the version and date you accepted. When a new version is released, you'll be asked to accept again"))}</p><div class="mt-5">`);
				if (unref(consentNew)) {
					_push(`<div class="mb-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "alert-triangle",
						class: "h-5 w-5 shrink-0 text-amber-600"
					}, null, _parent));
					_push(`<div><p class="font-bold text-amber-900">${ssrInterpolate(unref(tr)("มีข้อกำหนดเวอร์ชันใหม่ (Terms v2.2)", "A new Terms version is available (Terms v2.2)"))}</p><p class="text-sm text-amber-700">${ssrInterpolate(unref(tr)("ระบบจะขอให้ยอมรับทุกครั้งที่เข้าสู่ระบบ — กดเพื่ออ่านและยอมรับได้ที่นี่", "You'll be asked to accept on every login — tap here to read and accept"))}</p><button type="button" class="mt-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-600">${ssrInterpolate(unref(tr)("อ่านและยอมรับ", "Read and accept"))}</button></div></div>`);
				} else _push(`<!---->`);
				_push(`<div class="space-y-3"><!--[-->`);
				ssrRenderList(unref(consentRows), (c) => {
					_push(`<div class="flex items-center justify-between gap-3 rounded-xl bg-surface p-4"><div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)(c.label, c.labelEn))}</p><p class="mt-0.5 text-xs text-muted">${ssrInterpolate(unref(tr)("ยอมรับ " + c.version + " เมื่อ " + c.acceptedAt, "Accepted " + c.version + " on " + c.acceptedAt))}</p></div>`);
					if (c.outdated) _push(`<span class="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">${ssrInterpolate(unref(tr)("มี " + c.latest + " ใหม่", c.latest + " available"))}</span>`);
					else {
						_push(`<span class="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-bold text-green-700">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "check",
							class: "h-3 w-3"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("เป็นปัจจุบัน", "Up to date"))}</span>`);
					}
					_push(`</div>`);
				});
				_push(`<!--]--></div><div class="mt-3 flex items-center justify-between gap-3 rounded-xl border border-[#0F2747]/10 p-4"><div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("รับข่าวสาร / การตลาด", "Marketing communications"))}</p><p class="mt-0.5 text-xs text-muted">${ssrInterpolate((unref(marketingConsent).on ? unref(tr)("เปิดรับเมื่อ " + unref(marketingConsent).at, "Opted in on " + unref(marketingConsent).at) : unref(tr)("ปิดอยู่", "Off")) + unref(tr)(" · เปลี่ยนได้ทุกเมื่อ", " · change anytime"))}</p></div><button type="button" class="${ssrRenderClass(["relative h-7 w-12 shrink-0 rounded-full transition", unref(marketingConsent).on ? "bg-primary" : "bg-[#0F2747]/15"])}"><span class="${ssrRenderClass(["absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all", unref(marketingConsent).on ? "left-6" : "left-1"])}"></span></button></div></div></div><!--]-->`);
			} else if (unref(activeTab) === "social") {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><div><div class="mb-5"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("บัญชีที่เชื่อมต่อ", "Connected accounts"))}</h2><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("เชื่อมบัญชีโซเชียลเพื่อให้ระบบดึงสถิติให้อัตโนมัติ ช่วยให้แบรนด์เจอคุณง่ายขึ้นและเพิ่มโอกาสได้งาน", "Connect your social accounts so we can sync your stats automatically — making it easier for brands to find you and improving your chances of getting work"))}</p></div>`);
				if (unref(socialEmpty)) {
					_push(`<div class="rounded-2xl border-2 border-dashed border-[#0F2747]/15 bg-surface/50 p-10 text-center"><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "link",
						class: "h-7 w-7 text-primary"
					}, null, _parent));
					_push(`</div><p class="mt-4 font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ยังไม่ได้เชื่อมบัญชีโซเชียล", "No social accounts connected yet"))}</p><p class="mx-auto mt-1 max-w-sm text-sm text-muted">${ssrInterpolate(unref(tr)("เชื่อมอย่างน้อย 1 บัญชีเพื่อให้ระบบดึงสถิติและจับคู่แคมเปญที่เหมาะกับคุณ", "Connect at least one account so we can sync your stats and match you with the right campaigns"))}</p><div class="mx-auto mt-6 grid max-w-md gap-3 sm:grid-cols-2"><!--[-->`);
					ssrRenderList(unref(socials).filter((x) => x.source !== "admin"), (s) => {
						_push(`<button type="button" class="flex items-center gap-3 rounded-xl border border-[#0F2747]/10 bg-white p-4 text-left transition hover:border-primary/40 hover:shadow-sm"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface">${platformSvg[s.platform] ?? ""}</div><div><p class="font-bold text-ink">${ssrInterpolate(s.platform)}</p><p class="text-xs text-primary">${ssrInterpolate(unref(tr)("เชื่อม OAuth", "Connect via OAuth"))}</p></div></button>`);
					});
					_push(`<!--]--></div></div>`);
				} else {
					_push(`<div class="space-y-3"><!--[-->`);
					ssrRenderList(unref(socials), (s) => {
						_push(`<!--[-->`);
						if (!s.connected) {
							_push(`<div class="flex items-center justify-between gap-3 rounded-xl bg-surface p-4"><div class="flex items-center gap-4"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">${platformSvg[s.platform] ?? ""}</div><div><p class="font-bold text-ink">${ssrInterpolate(s.platform)}</p><p class="text-sm text-[#5B6B82]/60">${ssrInterpolate(s.source === "admin" ? unref(tr)("รอทีมงานเพิ่มข้อมูล", "Pending — added by our team") : unref(tr)("ยังไม่เชื่อมต่อ", "Not connected"))}</p></div></div>`);
							if (s.source !== "admin") _push(`<button type="button" class="shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("เชื่อม OAuth", "Connect via OAuth"))}</button>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else {
							_push(`<div class="rounded-xl border border-[#0F2747]/10 p-4"><div class="flex items-start justify-between gap-3"><div class="flex items-center gap-4"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">${platformSvg[s.platform] ?? ""}</div><div><p class="font-bold text-ink">${ssrInterpolate(s.platform)}</p><p class="text-sm text-muted">${ssrInterpolate(s.handle)}</p><a${ssrRenderAttr("href", "https://" + s.url)} class="text-xs text-primary hover:underline" target="_blank" rel="noopener">${ssrInterpolate(s.url)}</a></div></div>`);
							if (s.source !== "admin") _push(`<button type="button" class="shrink-0 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-xs font-bold text-ink transition hover:text-primary">${ssrInterpolate(unref(tr)("ยกเลิกเชื่อมต่อ", "Disconnect"))}</button>`);
							else {
								_push(`<span class="inline-flex shrink-0 items-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-[11px] font-bold text-blue-600">`);
								_push(ssrRenderComponent(_component_Icon, {
									name: "shield-check",
									class: "h-3.5 w-3.5"
								}, null, _parent));
								_push(` ${ssrInterpolate(unref(tr)("ทีมงานดูแล", "Managed by our team"))}</span>`);
							}
							_push(`</div><div class="mt-3 flex flex-wrap items-center gap-2"><span class="text-sm font-bold text-primary">${ssrInterpolate(s.followers)} ${ssrInterpolate(unref(tr)("ผู้ติดตาม", "followers"))}</span><span class="text-[#5B6B82]/30">·</span><span class="text-xs text-muted">ER ${ssrInterpolate(s.er)}</span>`);
							if (s.verified) {
								_push(`<span class="inline-flex items-center gap-1 rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-600">`);
								_push(ssrRenderComponent(_component_Icon, {
									name: "badge-check",
									class: "h-3 w-3"
								}, null, _parent));
								_push(` ${ssrInterpolate(unref(tr)("ยืนยันแล้ว", "Verified"))}</span>`);
							} else _push(`<!---->`);
							_push(`</div>`);
							if (s.demo) _push(`<div class="mt-3 flex flex-wrap gap-2 border-t border-[#0F2747]/10 pt-3 text-[11px] text-muted"><span class="rounded bg-surface px-2 py-1">${ssrInterpolate(unref(tr)("กลุ่มผู้ติดตาม: ", "Audience: "))}${ssrInterpolate(unref(tr)(s.demo.f, s.demo.fEn))}</span><span class="rounded bg-surface px-2 py-1">${ssrInterpolate(unref(tr)("อายุหลัก ", "Main age "))}${ssrInterpolate(unref(tr)(s.demo.age, s.demo.ageEn))}</span><span class="rounded bg-surface px-2 py-1">${ssrInterpolate(unref(tr)("พื้นที่ ", "Location "))}${ssrInterpolate(unref(tr)(s.demo.geo, s.demo.geoEn))}</span></div>`);
							else _push(`<!---->`);
							if (s.reachNote) _push(`<p class="mt-2 text-[11px] text-amber-600">⚠ ${ssrInterpolate(unref(tr)(s.reachNote, s.reachNoteEn))}</p>`);
							else _push(`<!---->`);
							if (s.source === "admin") _push(`<p class="mt-2 text-[11px] text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("ข้อมูลยืนยันโดยทีมงาน", "Data verified by our team"))}</p>`);
							else _push(`<p class="mt-2 text-[11px] text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("sync ล่าสุด ", "Last synced "))}${ssrInterpolate(unref(tr)(s.synced, s.syncedEn))}</p>`);
							_push(`</div>`);
						}
						_push(`<!--]-->`);
					});
					_push(`<!--]--></div>`);
				}
				_push(`<div class="mt-4"></div><p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("ℹ️ ตัวเลขผู้ติดตาม / ER มาจากการ sync ผ่าน OAuth เท่านั้น — แก้ไขเองไม่ได้ · TikTok & YouTube API ไม่มี reach ระบบจึงคิด ER จากยอดวิว · แพลตฟอร์มที่ไม่มี API (X, Lemon8) ทีมงานเป็นผู้กรอกและยืนยันข้อมูลให้", "ℹ️ Follower / ER figures come only from OAuth sync — they can't be edited manually · The TikTok & YouTube APIs have no reach, so ER is calculated from views · For platforms without an API (X, Lemon8), our team fills in and verifies the data"))}</p></div></div>`);
			} else if (unref(activeTab) === "rate") {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><div><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("Rate Card · ราคาอ้างอิงของคุณ", "Rate Card · your reference rates"))} <span class="ml-1 rounded bg-primary/10 px-2 py-0.5 align-middle text-[11px] font-bold text-primary">TIER 1</span></h2><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("ตั้งราคาต่อแพลตฟอร์มเป็น", "Set your per-platform rates as "))}<strong class="text-ink">${ssrInterpolate(unref(tr)("ราคาอ้างอิง", "reference rates"))}</strong>${ssrInterpolate(unref(tr)(" — แคมเปญจะตั้งงบเป็นช่วง (TIER 2) และแอดมินเคาะราคาจริงตอนคัดเลือก (TIER 3)", " — campaigns set a budget range (TIER 2) and admins confirm the final price during selection (TIER 3)"))}</p><div class="mt-6"><div class="overflow-x-auto rounded-xl border border-[#0F2747]/10 p-2"><table class="w-full text-sm"><thead><tr class="text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6B82]/60"><th class="px-3 pb-2">${ssrInterpolate(unref(tr)("แพลตฟอร์ม", "Platform"))}</th><th class="px-3 pb-2">${ssrInterpolate(unref(tr)("รูปแบบ", "Format"))}</th><th class="px-3 pb-2 text-right">${ssrInterpolate(unref(tr)("ราคา (บาท)", "Price (THB)"))}</th></tr></thead><tbody><!--[-->`);
				ssrRenderList(unref(rates), (r) => {
					_push(`<!--[--><tr class="border-t border-[#0F2747]/10 bg-primary/[0.04]"><td${ssrRenderAttr("rowspan", r.formats.length + 1)} class="py-3 pr-3 align-top"><div class="flex items-center gap-2.5"><span class="flex h-8 w-8 items-center justify-center rounded-lg bg-surface">${platformSvg[r.platform] ?? ""}</span><span class="font-bold text-ink">${ssrInterpolate(r.platform)}</span></div></td><td class="py-2.5 pr-3"><span class="font-semibold text-ink">${ssrInterpolate(unref(tr)("ราคาต่อโพสต์ (ราคาฐาน)", "Price per post (base rate)"))}</span><span class="block text-[11px] leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("ราคากลางของแพลตฟอร์มนี้ ใช้อ้างอิงเมื่อยังไม่ได้ระบุรูปแบบงาน", "Your standard rate for this platform, used as a reference when no specific format is set"))}</span></td><td class="py-2.5 text-right align-top"><input${ssrIncludeBooleanAttr(!unref(editing)) ? " disabled" : ""}${ssrRenderAttr("value", r.base === null ? "" : formatRate(r.base))}${ssrRenderAttr("placeholder", unref(tr)("ยังไม่ระบุ", "Not set"))} class="${ssrRenderClass(["w-36 rounded-lg border border-[#0F2747]/15 px-3 py-2 text-right text-sm outline-none focus:border-primary/50", !unref(editing) ? "bg-surface text-muted" : "bg-white text-ink"])}"></td></tr><!--[-->`);
					ssrRenderList(r.formats, (f) => {
						_push(`<tr class="border-t border-[#0F2747]/10"><td class="py-2.5 pr-3 text-muted">${ssrInterpolate(unref(tr)(f[0], f[1]))}</td><td class="py-2.5 text-right"><input${ssrIncludeBooleanAttr(!unref(editing)) ? " disabled" : ""}${ssrRenderAttr("value", f[2] === null ? "" : formatRate(f[2]))}${ssrRenderAttr("placeholder", f[2] === null ? unref(tr)("ไม่รับงาน", "Not offered") : "")} class="${ssrRenderClass(["w-36 rounded-lg border border-[#0F2747]/15 px-3 py-2 text-right text-sm outline-none focus:border-primary/50", !unref(editing) ? "bg-surface text-muted" : "bg-white text-ink"])}"></td></tr>`);
					});
					_push(`<!--]--><!--]-->`);
				});
				_push(`<!--]--></tbody></table></div></div><div class="mt-6 rounded-xl bg-surface p-5"><h3 class="font-bold text-ink">${ssrInterpolate(unref(tr)("เรทการ์ดอื่น ๆ เพิ่มเติม", "Additional rate card items"))}</h3><div class="mt-3 grid gap-4 sm:grid-cols-2"><!--[-->`);
				ssrRenderList(unref(rateTermsFields), (f) => {
					_push(`<div class="${ssrRenderClass(f.span === 2 ? "sm:col-span-2" : "")}"><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))}</label>`);
					if (f.type === "textarea") _push(`<textarea rows="3"${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}">${ssrInterpolate(f.value)}</textarea>`);
					else if (f.type === "select") {
						_push(`<select${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}"><!--[-->`);
						ssrRenderList(f.options, (opt, oi) => {
							_push(`<option${ssrRenderAttr("value", opt)}${ssrIncludeBooleanAttr(opt === f.value) ? " selected" : ""}>${ssrInterpolate(f.optionsEn ? unref(tr)(opt, f.optionsEn[oi]) : opt)}</option>`);
						});
						_push(`<!--]--></select>`);
					} else _push(`<input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
					if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div></div></div></div>`);
			} else {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-7"><div><div class="flex items-center gap-3"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ยืนยันตัวตน / KYC", "Identity verification / KYC"))}</h2>`);
				if (unref(kycBadge)) {
					_push(`<span class="${ssrRenderClass(["inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold", unref(kycBadge).cls])}">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: unref(kycBadge).icon,
						class: "h-3 w-3"
					}, null, _parent));
					_push(` ${ssrInterpolate(unref(tr)(unref(kycBadge).text, unref(kycBadge).textEn))}</span>`);
				} else _push(`<span class="rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-muted">${ssrInterpolate(unref(tr)("ยังไม่ส่ง", "Not submitted"))}</span>`);
				_push(`</div><div class="mt-5"><div class="${ssrRenderClass(["flex items-start gap-3 rounded-xl border p-4", unref(kycBanner).box])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: unref(kycBanner).icon,
					class: ["mt-0.5 h-6 w-6 shrink-0", unref(kycBanner).ic]
				}, null, _parent));
				_push(`<div><p class="font-bold">${ssrInterpolate(unref(tr)(unref(kycBanner).title, unref(kycBanner).titleEn))}</p><p class="text-sm opacity-90">${ssrInterpolate(unref(tr)(unref(kycBanner).msg, unref(kycBanner).msgEn))}</p></div></div></div><h3 class="mt-7 font-bold text-ink">${ssrInterpolate(unref(tr)("ข้อมูลตามบัตรประชาชน (Identity)", "ID card details (Identity)"))}</h3><div class="mt-3 grid gap-4 sm:grid-cols-2"><!--[-->`);
				ssrRenderList(unref(identityFields), (f) => {
					_push(`<div class="${ssrRenderClass(f.span === 2 ? "sm:col-span-2" : "")}"><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))}</label><input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
					if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div><h3 class="mt-7 font-bold text-ink">${ssrInterpolate(unref(tr)("บัญชีธนาคาร (สำหรับรับเงิน)", "Bank account (for payments)"))}</h3><div class="mt-3 grid gap-4 sm:grid-cols-3"><!--[-->`);
				ssrRenderList(unref(bankFields), (f) => {
					_push(`<div><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))}</label>`);
					if (f.type === "select") {
						_push(`<select${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}"><!--[-->`);
						ssrRenderList(f.options, (opt, oi) => {
							_push(`<option${ssrRenderAttr("value", opt)}${ssrIncludeBooleanAttr(opt === f.value) ? " selected" : ""}>${ssrInterpolate(f.optionsEn ? unref(tr)(opt, f.optionsEn[oi]) : opt)}</option>`);
						});
						_push(`<!--]--></select>`);
					} else _push(`<input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
					if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div><h3 class="mt-7 font-bold text-ink">${ssrInterpolate(unref(tr)("ข้อมูลภาษี (Tax)", "Tax information"))}</h3><div class="mt-3 grid gap-4 sm:grid-cols-3"><!--[-->`);
				ssrRenderList(unref(taxBaseFields), (f) => {
					_push(`<div><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))}</label>`);
					if (f.type === "select") {
						_push(`<select${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""} class="${ssrRenderClass(fieldClass(f))}"><!--[-->`);
						ssrRenderList(f.options, (opt, oi) => {
							_push(`<option${ssrRenderAttr("value", opt)}${ssrIncludeBooleanAttr(opt === f.value) ? " selected" : ""}>${ssrInterpolate(f.optionsEn ? unref(tr)(opt, f.optionsEn[oi]) : opt)}</option>`);
						});
						_push(`<!--]--></select>`);
					} else _push(`<input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
					if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div>`);
				if (unref(isCorporate)) {
					_push(`<div class="mt-3 grid gap-4 rounded-xl bg-surface p-4 sm:grid-cols-2"><p class="text-xs font-bold uppercase tracking-wider text-[#5B6B82]/70 sm:col-span-2">${ssrInterpolate(unref(tr)("ข้อมูลนิติบุคคล", "Company details"))}</p><!--[-->`);
					ssrRenderList(unref(taxCompanyFields), (f) => {
						_push(`<div class="${ssrRenderClass(f.span === 2 ? "sm:col-span-2" : "")}"><label class="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)(f.label, f.labelEn))}</label><input${ssrIncludeBooleanAttr(fieldDisabled(f)) ? " disabled" : ""}${ssrRenderAttr("value", f.value)} class="${ssrRenderClass(fieldClass(f))}">`);
						if (f.note) _push(`<p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(f.noteEn ? unref(tr)(f.note, f.noteEn) : f.note)}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`<h3 class="mt-7 font-bold text-ink">${ssrInterpolate(unref(docTitle))}</h3><p class="mt-1 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(isCorporate) ? unref(tr)("คุณเลือกประเภทผู้เสียภาษีเป็น \"นิติบุคคล\" — ต้องแนบเอกสารบริษัทเพิ่มและใช้สมุดบัญชีของบริษัท", "You selected \"Juristic person\" as your taxpayer type — company documents are required and the bankbook must be the company's") : unref(tr)("ชุดเอกสารสำหรับบุคคลธรรมดา — ถ้าเปลี่ยนประเภทผู้เสียภาษีเป็นนิติบุคคล รายการจะเปลี่ยนตาม", "Document set for individuals — the list changes if you switch your taxpayer type to juristic person"))}</p><div class="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
				ssrRenderList(unref(kycDocs), (d) => {
					_push(`<div class="flex flex-col rounded-xl border border-[#0F2747]/10 p-4"><div class="mb-3 flex min-h-[2.75rem] items-start justify-between gap-2"><span class="text-sm font-semibold leading-tight text-ink">${ssrInterpolate(unref(tr)(d.label, d.labelEn))} `);
					if (!d.required) _push(`<span class="ml-1 whitespace-nowrap rounded bg-surface px-1.5 py-0.5 text-[10px] font-bold text-muted">${ssrInterpolate(unref(tr)("ไม่บังคับ", "Optional"))}</span>`);
					else _push(`<!---->`);
					_push(`</span>`);
					if (!unref(kycNoneOrRejected)) {
						_push(`<!--[-->`);
						if (unref(kycState) === "approved") _push(`<span class="shrink-0 whitespace-nowrap rounded-md bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">${ssrInterpolate(unref(tr)("อนุมัติ", "Approved"))}</span>`);
						else _push(`<span class="shrink-0 whitespace-nowrap rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">${ssrInterpolate(unref(tr)("รอตรวจ", "Reviewing"))}</span>`);
						_push(`<!--]-->`);
					} else _push(`<!---->`);
					_push(`</div>`);
					if (unref(kycNoneOrRejected)) {
						_push(`<label class="flex aspect-video cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#0F2747]/20 bg-surface transition hover:bg-primary/5">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "upload",
							class: "h-6 w-6 text-[#5B6B82]/50"
						}, null, _parent));
						_push(`<span class="mt-1 text-xs text-muted">${ssrInterpolate(unref(tr)("อัปโหลด", "Upload"))}</span></label>`);
					} else {
						_push(`<div class="${ssrRenderClass(["flex aspect-video items-center justify-center rounded-lg", unref(kycState) === "approved" ? "bg-green-50" : "bg-amber-50"])}">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: unref(kycState) === "approved" ? "file-check" : "clock",
							class: ["h-8 w-8", unref(kycState) === "approved" ? "text-green-500" : "text-amber-500"]
						}, null, _parent));
						_push(`</div>`);
					}
					if (d.note) _push(`<p class="mt-2 text-[11px] leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(d.noteEn ? unref(tr)(d.note, d.noteEn) : d.note)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div><p class="mt-1.5 text-xs leading-relaxed text-[#5B6B82]/80">${ssrInterpolate(unref(tr)("ไฟล์ JPG/PNG/PDF ≤ 10MB ต่อรายการ · เซลฟี่ต้องเห็นหน้าและบัตรชัดเจน", "JPG/PNG/PDF files ≤ 10MB each · your selfie must clearly show your face and ID card"))}</p>`);
				if (unref(kycNoneOrRejected)) {
					_push(`<button type="button" class="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "upload",
						class: "h-4 w-4"
					}, null, _parent));
					_push(` ${ssrInterpolate(unref(kycState) === "rejected" ? unref(tr)("แก้ไขแล้วส่งใหม่", "Fix and resubmit") : unref(tr)("ส่งเพื่อยืนยันตัวตน", "Submit for verification"))}</button>`);
				} else _push(`<!---->`);
				_push(`</div></div>`);
			}
			_push(`</div></div>`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(pwdOpen)) {
					_push(`<div class="fixed inset-0 z-[60] flex items-center justify-center p-4"><div class="absolute inset-0 bg-ink/40 backdrop-blur-sm"></div><div class="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"><div class="flex items-center justify-between"><h3 class="font-heading text-xl font-bold text-ink">${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่าน", "Change password"))}</h3><button type="button" class="text-[#5B6B82]/60 hover:text-ink">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x",
						class: "h-5 w-5"
					}, null, _parent));
					_push(`</button></div><div class="mt-5 space-y-4"><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่านปัจจุบัน", "Current password"))}</label><input type="password"${ssrRenderAttr("placeholder", unref(tr)("กรอกรหัสผ่านเดิม", "Enter your current password"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-primary/50"></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่านใหม่", "New password"))}</label><input type="password"${ssrRenderAttr("placeholder", unref(tr)("อย่างน้อย 8 ตัว มีตัวเลขและตัวอักษร", "At least 8 characters with letters and numbers"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-primary/50"></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ยืนยันรหัสผ่านใหม่", "Confirm new password"))}</label><input type="password"${ssrRenderAttr("placeholder", unref(tr)("พิมพ์รหัสผ่านใหม่อีกครั้ง", "Re-enter your new password"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-primary/50"></div></div><div class="mt-6 flex gap-3"><button type="button" class="flex-1 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-surface">${ssrInterpolate(unref(tr)("ยกเลิก", "Cancel"))}</button><button type="button" class="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("บันทึก", "Save"))}</button></div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(gateOpen)) {
					_push(`<div class="fixed inset-0 z-[90] flex items-center justify-center p-4"><div class="absolute inset-0 bg-ink/55 backdrop-blur-sm"></div><div class="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"><div class="flex items-center gap-3 border-b border-[#0F2747]/10 bg-primary/5 px-7 py-5"><div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "file-text",
						class: "h-6 w-6 text-primary"
					}, null, _parent));
					_push(`</div><div><h3 class="font-heading text-xl font-extrabold text-ink">${ssrInterpolate(unref(tr)("มีข้อกำหนดเวอร์ชันใหม่", "A new version is available"))}</h3><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("โปรดอ่านและยอมรับก่อนเข้าใช้งานบัญชีของคุณ", "Please read and accept before using your account"))}</p></div></div><div class="px-7 py-6"><div class="space-y-2.5"><!--[-->`);
					ssrRenderList(unref(gateUpdated), (c) => {
						_push(`<div class="flex items-center justify-between gap-3 rounded-xl border border-[#0F2747]/10 bg-surface p-3.5"><div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)(c.label, c.labelEn))}</p><p class="mt-0.5 text-xs text-muted">${ssrInterpolate(unref(tr)("เวอร์ชันเดิม ", "Previous "))}${ssrInterpolate(c.version)} → <span class="font-bold text-primary">${ssrInterpolate(unref(tr)("ใหม่ ", "new "))}${ssrInterpolate(c.latest)}</span></p></div><a href="#" class="shrink-0 text-xs font-bold text-primary hover:underline">${ssrInterpolate(unref(tr)("อ่านฉบับเต็ม", "Read full version"))}</a></div>`);
					});
					_push(`<!--]--></div><label class="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[#0F2747]/10 p-3.5 transition hover:bg-surface"><input${ssrIncludeBooleanAttr(Array.isArray(unref(gateChecked)) ? ssrLooseContain(unref(gateChecked), null) : unref(gateChecked)) ? " checked" : ""} type="checkbox" class="mt-0.5 h-5 w-5 shrink-0 accent-[#2D5BFF]"><span class="text-sm leading-relaxed text-ink">${ssrInterpolate(unref(tr)("ฉันได้อ่านและยอมรับข้อกำหนดและนโยบายเวอร์ชันใหม่ข้างต้น", "I have read and accept the new terms and policies above"))}</span></label><div class="mt-6 flex flex-col gap-2.5 sm:flex-row-reverse"><button type="button"${ssrIncludeBooleanAttr(!unref(gateChecked)) ? " disabled" : ""} class="flex-1 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition enabled:hover:bg-primaryDark disabled:cursor-not-allowed disabled:opacity-50">${ssrInterpolate(unref(tr)("ยอมรับและเข้าใช้งาน", "Accept and continue"))}</button><button type="button" class="rounded-lg border border-[#0F2747]/10 bg-white px-4 py-3 text-sm font-bold text-muted transition hover:text-ink sm:flex-none">${ssrInterpolate(unref(tr)("ออกจากระบบ", "Log out"))}</button></div><p class="mt-3 text-center text-[11px] text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("หากไม่ยอมรับ จะไม่สามารถใช้งานบัญชีต่อได้", "If you don't accept, you won't be able to continue using your account"))}</p></div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/profile.vue
var _sfc_setup = profile_vue_vue_type_script_setup_true_lang_default.setup;
profile_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var profile_default = profile_vue_vue_type_script_setup_true_lang_default;

export { profile_default as default };
//# sourceMappingURL=profile-Cakb6y9P.mjs.map
