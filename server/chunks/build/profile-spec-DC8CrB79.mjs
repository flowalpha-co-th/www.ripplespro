import { _ as _plugin_vue_export_helper_default, a as useHead$1, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/docs/profile-spec.vue?vue&type=script&setup=true&lang.ts
var profile_spec_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "profile-spec",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1(() => ({ title: "Profile Spec — Ripples" }));
		const legend = [
			{
				kind: "kol",
				label: "KOL กรอกเอง"
			},
			{
				kind: "sync",
				label: "sync จาก API · อ่านอย่างเดียว"
			},
			{
				kind: "admin",
				label: "แอดมินตั้ง · อ่านอย่างเดียว"
			}
		];
		const overview = [
			{
				num: "1.",
				title: "ข้อมูลส่วนตัว",
				desc: "พื้นฐาน + พื้นที่/อาชีพ + Niche + บัญชี&ความปลอดภัย + Consent"
			},
			{
				num: "2.",
				title: "บัญชีโซเชียล",
				desc: "เชื่อม OAuth, สถิติ sync (อ่านอย่างเดียว)"
			},
			{
				num: "3.",
				title: "Rate Card (TIER 1)",
				desc: "ราคาอ้างอิงต่อแพลตฟอร์ม + เงื่อนไขรับงาน"
			},
			{
				num: "4.",
				title: "ยืนยันตัวตน / KYC",
				desc: "Identity, ธนาคาร, ภาษี, เอกสาร"
			}
		];
		const tab1 = [
			{
				field: "ชื่อจริง / นามสกุล",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"text",
					"required · ตรงกับ KYC",
					"ชื่อตามบัตรประชาชน"
				]
			},
			{
				field: "ชื่อในวงการ (display_name)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"text",
					"required · 2–40 ตัว",
					"ชื่อที่โชว์ในระบบ/ให้แอดมินเห็น แยกจากชื่อจริง"
				]
			},
			{
				field: "อีเมล",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"email + verify",
					"รูปแบบอีเมล · ต้องยืนยัน",
					"ใช้ login + แจ้งเตือน · badge \"ยืนยันแล้ว\""
				]
			},
			{
				field: "เบอร์โทรศัพท์",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"tel",
					"ตัวเลข 10 หลัก",
					"ข้อมูลติดต่อล้วน — ระบบไม่มี OTP ทาง SMS จึงไม่มีสถานะ \"ยืนยันเบอร์\""
				]
			},
			{
				field: "LINE ID",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"text",
					"optional",
					"ช่องทางติดต่อสำรอง"
				]
			},
			{
				field: "เพศ (gender)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"select",
					"optional",
					"หญิง/ชาย/ไม่ระบุ/อื่น ๆ"
				]
			},
			{
				field: "ช่วงอายุ (age_range)",
				sources: [{
					kind: "sync",
					label: "KYC"
				}],
				cells: [
					"select",
					"auto จากวันเกิด",
					"ดึงจากวันเกิดใน KYC เมื่อยืนยันแล้ว"
				]
			},
			{
				field: "ที่อยู่ (ติดต่อ/จัดส่ง)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"text",
					"required เมื่อรับสินค้าตัวอย่าง",
					"คนละช่องกับที่อยู่ทะเบียนบ้านใน KYC"
				]
			},
			{
				field: "เกี่ยวกับฉัน (bio)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"textarea",
					"≤ 300 ตัว",
					"แนะนำตัว/สไตล์คอนเทนต์"
				]
			},
			{
				field: "จังหวัด/พื้นที่หลัก",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"select",
					"required",
					"ที่อยู่อาศัยหลัก"
				]
			},
			{
				field: "พื้นที่ทำคอนเทนต์ (coverage)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"multi-chips",
					"≥ 1 ค่า",
					"ใช้จับคู่แคมเปญที่ระบุพื้นที่"
				]
			},
			{
				field: "อาชีพ (occupation)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"text",
					"optional",
					"อาชีพหลัก"
				]
			},
			{
				field: "อาชีพอื่น ๆ (occupations[])",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"multi-chips",
					"optional",
					"สายอาชีพเสริม — แอดมินใช้ filter หา KOL ตามอาชีพ"
				]
			},
			{
				field: "หมวดหมู่ / Niche",
				sources: [{
					kind: "kol",
					label: "KOL"
				}, {
					kind: "admin",
					label: "list"
				}],
				cells: [
					"multi-chips",
					"≥ 1 หมวด",
					"15 หมวด ตรงกับ categoryOptions ฝั่งแอดมิน · ส่ง `value` ภาษาอังกฤษ ไม่ใช่ชื่อไทย"
				]
			},
			{
				field: "บัญชีที่ผูกไว้สำหรับเข้าสู่ระบบ (linked_socials)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"ผูก/ยกเลิก",
					"ต้องเหลือ ≥ 1 ช่องทาง",
					"Facebook / Google / TikTok — คนละเรื่องกับการเชื่อมโซเชียลในแท็บ 2 ที่ใช้ sync สถิติ"
				]
			},
			{
				field: "Consent: Terms / Privacy / PDPA",
				sources: [{
					kind: "sync",
					label: "ระบบ"
				}],
				cells: [
					"read + re-accept",
					"เก็บ version + วันที่",
					"มี version ใหม่ → บังคับยอมรับผ่าน gate ทันทีหลัง login ก่อนใช้งาน + อัปเดตวันที่"
				]
			},
			{
				field: "Marketing consent",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: [
					"toggle",
					"—",
					"เปิด/ปิดได้ในหน้านี้ + บันทึกวันที่"
				]
			}
		];
		const tab2 = [
			{
				field: "โลโก้ + ชื่อแพลตฟอร์ม",
				sources: [{
					kind: "admin",
					label: "ระบบ"
				}],
				cells: ["static", "—"]
			},
			{
				field: "@handle / ชื่อเพจ · profile_url",
				sources: [{
					kind: "sync",
					label: "sync"
				}],
				cells: ["read-only", "ได้จาก OAuth"]
			},
			{
				field: "followers · ER%",
				sources: [{
					kind: "sync",
					label: "sync"
				}],
				cells: ["read-only", "TikTok/YT ไม่มี reach → ER คิดจากยอดวิว"]
			},
			{
				field: "badge \"ยืนยันแล้ว\"",
				sources: [{
					kind: "sync",
					label: "sync"
				}],
				cells: ["read-only", "บัญชีผ่าน OAuth สำเร็จ"]
			},
			{
				field: "last_synced_at",
				sources: [{
					kind: "sync",
					label: "sync"
				}],
				cells: ["read-only", "\"sync ล่าสุดเมื่อ…\""]
			},
			{
				field: "demographic (กลุ่มผู้ติดตาม)",
				sources: [{
					kind: "sync",
					label: "sync"
				}],
				cells: ["read-only", "เพศ/อายุ/พื้นที่ ถ้ามี"]
			},
			{
				field: "สถานะเชื่อมต่อ",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["action", "เชื่อมแล้ว→\"ยกเลิกเชื่อมต่อ\" / ยังไม่เชื่อม→\"เชื่อม OAuth\""]
			}
		];
		const rateFormats = [
			{
				platform: "TikTok",
				formats: "Short VDO Review · Create Single Photo · Create Album Photo · Long VDO Review · Gen Code · Add Basket · PR Post · Story · Post Cross Platform"
			},
			{
				platform: "Facebook",
				formats: "Create Single Photo · Create Album Photo · PR Post · Short VDO Review · Long VDO Review · Add Advertiser · Management Fee · Tag Branded · Post Cross Platform"
			},
			{
				platform: "Instagram",
				formats: "Create Single Photo · Create Album Photo · Story · PR Post · Short VDO Review · Long VDO Review · Tag Branded / Paid Partnership · Post Cross Platform"
			},
			{
				platform: "YouTube",
				formats: "Sponsorship Main Content · Sponsorship Tie-In Content · Post Cross Platform"
			},
			{
				platform: "X (Twitter)",
				formats: "Create Single Photo · Create Album Photo · PR Post · Short VDO Review · Long VDO Review · Boost Fee · Post Cross Platform"
			},
			{
				platform: "Lemon8",
				formats: "Short VDO Review · Create Single Photo · Create Album Photo · Long VDO Review · PR Post"
			}
		];
		const tab3 = [
			{
				field: "ราคาต่อโพสต์ (ราคาฐาน · cost_per_post)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["ตัวเลข ≥ 0 · ว่างได้", "แถวแรกของทุกแพลตฟอร์ม — แอดมินใช้คำนวณ cost/reach และ cost/engagement"]
			},
			{
				field: "ราคาต่อรูปแบบ",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["ตัวเลข ≥ 0 · ว่างได้", "ว่าง = ไม่รับงานรูปแบบนั้น"]
			},
			{
				field: "ค่าเดินทางถ่ายนอกสถานที่ใน กทม.",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["ตัวเลข ≥ 0 · ว่างได้", "ว่าง = ไม่คิดค่าเดินทาง"]
			},
			{
				field: "ค่าให้แบรนด์ใช้คลิป 1 เดือน · ค่าซื้อขาด",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["ตัวเลข ≥ 0", "ค่าลิขสิทธิ์การนำคลิปไปใช้"]
			},
			{
				field: "ครบกำหนดแล้วแบรนด์ต้องลบคลิปไหม",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["ใช่ / ไม่ใช่", "เงื่อนไขหลังหมดสัญญาการใช้งาน"]
			},
			{
				field: "ค่าติดตะกร้า / Affiliate",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["ตัวเลข ≥ 0", "ค่าติดตะกร้าสินค้าหรือลิงก์ Affiliate"]
			},
			{
				field: "เงื่อนไขพิเศษอื่น ๆ (special_terms)",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["textarea · optional", "เงื่อนไขอิสระที่ไม่เข้าช่องไหน — ตรงกับ special_terms ฝั่งแอดมิน"]
			}
		];
		const tab4 = [
			{
				field: "ชื่อ-นามสกุล ไทย / อังกฤษ",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["required", "ตามบัตร/พาสปอร์ต"]
			},
			{
				field: "เลขบัตรประชาชน",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["13 หลัก · checksum", "ตรวจหลักสุดท้ายอัตโนมัติ"]
			},
			{
				field: "วันเกิด",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["date · อายุ ≥ 15", "ใช้คำนวณช่วงอายุ"]
			},
			{
				field: "วันออกบัตร · วันหมดอายุบัตร",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["date", "บัตรหมดอายุ = ยืนยันตัวตนไม่ผ่าน"]
			},
			{
				field: "ที่อยู่ตามทะเบียนบ้าน",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["required", "สำหรับเอกสารภาษี"]
			},
			{
				field: "ธนาคาร / เลขบัญชี / ชื่อบัญชี",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["เลขบัญชี 10–12 หลัก · ชื่อตรงกับบัตร", "สำหรับรับเงิน"]
			},
			{
				field: "เลขผู้เสียภาษี",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["13 หลัก (บุคคล=เลขบัตร)", "—"]
			},
			{
				field: "ประเภทผู้เสียภาษี · จด VAT",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["บุคคล/นิติบุคคล", "นิติบุคคล → โชว์ ชื่อบริษัท, เลขสาขา, ที่อยู่จดทะเบียน, ประเภทธุรกิจ"]
			},
			{
				field: "เอกสาร — บุคคลธรรมดา: บัตรประชาชน, เซลฟี่คู่บัตร, หน้าสมุดบัญชี",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["JPG/PNG/PDF ≤ 10MB", "ไม่มี \"หลังบัตรประชาชน\" แล้ว (ตัดออก 2026-08-09)"]
			},
			{
				field: "เอกสาร — นิติบุคคล: บัตรผู้มีอำนาจลงนาม, เซลฟี่คู่บัตร, หนังสือรับรองบริษัท, ภ.พ.20, สมุดบัญชีบริษัท",
				sources: [{
					kind: "kol",
					label: "KOL"
				}],
				cells: ["JPG/PNG/PDF ≤ 10MB", "สลับชุดอัตโนมัติเมื่อเลือกประเภทผู้เสียภาษี = นิติบุคคล · ภ.พ.20 ไม่บังคับ (แนบเมื่อจด VAT)"]
			},
			{
				field: "สถานะ KYC · เหตุผลปฏิเสธ",
				sources: [{
					kind: "admin",
					label: "แอดมิน"
				}],
				cells: ["read-only", "none / pending / approved / rejected (+reason)"]
			}
		];
		const states = [
			{
				dim: "โหมดหน้า",
				states: "อ่านอย่างเดียว ↔ แก้ไข",
				behavior: "default = อ่าน · กด \"แก้ไขโปรไฟล์\" → input ปลดล็อก ปุ่มเปลี่ยนเป็น \"บันทึก\" (เขียว) · field ที่มาจาก sync/แอดมิน ล็อกเสมอ"
			},
			{
				dim: "KYC",
				states: "none / pending / approved / rejected",
				behavior: "none→ฟอร์มแก้ได้ + ปุ่มส่ง · pending→ฟอร์ม read-only · approved→read-only + ปลดล็อก \"พร้อมรับเงิน\" · rejected→โชว์เหตุผล + แก้แล้วส่งใหม่ได้"
			},
			{
				dim: "โซเชียล",
				states: "มีบัญชี / ยังไม่เชื่อม (empty)",
				behavior: "empty → empty-state พร้อมปุ่มเชื่อมแต่ละแพลตฟอร์ม"
			},
			{
				dim: "Consent",
				states: "เป็นปัจจุบัน / มีเวอร์ชันใหม่",
				behavior: "มีเวอร์ชันใหม่ → แสดง consent gate แบบบล็อกทันทีหลัง login (ติ๊กยอมรับจึงกดปุ่มได้) · ไม่ยอมรับ = ใช้งานต่อไม่ได้ · มีแถบสรุปในแท็บข้อมูลส่วนตัวด้วย"
			}
		];
		const logicCards = [{
			title: "พร้อมรับงาน",
			body: "ข้อมูลส่วนตัวครบ และ เชื่อมโซเชียล ≥ 1 และ เลือก Niche ≥ 1 และ ตั้ง Rate Card ≥ 1 รายการ"
		}, {
			title: "พร้อมรับเงิน",
			body: "KYC = approved (ผ่านการตรวจสอบเอกสาร + บัญชีธนาคาร + ข้อมูลภาษี)"
		}];
		const edgeCases = [
			{
				lead: "ยังไม่เชื่อมโซเชียล",
				rest: " → empty-state + ปุ่มเชื่อมแต่ละแพลตฟอร์ม · completeness ไม่ขึ้น \"เชื่อมโซเชียล\""
			},
			{
				lead: "ยังไม่ตั้ง Rate Card",
				rest: " → ทุกช่องเป็น placeholder \"ไม่รับงาน\" · \"พร้อมรับงาน\" ยังไม่ติ๊ก"
			},
			{
				lead: "KYC ถูกปฏิเสธ",
				rest: " → แถบแดง + เหตุผล · ฟอร์มกลับมาแก้ได้ · ปุ่ม \"แก้ไขแล้วส่งใหม่\""
			},
			{
				lead: "มี Consent version ใหม่",
				rest: " → แสดง consent gate แบบบล็อกทันทีหลัง login · ต้องติ๊กยอมรับก่อนจึงกดปุ่มได้ · มีปุ่ม \"ออกจากระบบ\" ถ้าไม่ยอมรับ"
			},
			{
				lead: "TikTok / YouTube ไม่มี reach",
				rest: " → แสดงเท่าที่มี + หมายเหตุ \"ER คิดจากยอดวิว\""
			},
			{
				lead: "อีเมลยังไม่ยืนยัน",
				rest: " → badge เตือน + ปุ่ม \"ส่งอีเมลยืนยัน\" · บล็อกการรับเงินถ้าจำเป็น (เบอร์โทรไม่มีสถานะยืนยัน — ไม่มี OTP)"
			}
		];
		const deferred = [
			"Portfolio / ผลงานย้อนหลังแบบแกลเลอรี",
			"การตั้งค่าการแจ้งเตือนละเอียด (per-channel)",
			"2FA / ประวัติการเข้าสู่ระบบ",
			"เชื่อมหลายบัญชีต่อแพลตฟอร์ม (multi-account)",
			"ดาวน์โหลด media kit อัตโนมัติ"
		];
		const srcClass = {
			kol: "src s-kol",
			sync: "src s-sync",
			admin: "src s-admin"
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-4xl rounded-2xl border border-[#0F2747]/10 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(15,39,71,.5)] sm:p-8 lg:p-12" }, _attrs))} data-v-c175e026><section class="mb-9 border-b border-[#0F2747]/10 pb-6" data-v-c175e026><div class="flex items-start justify-between gap-4" data-v-c175e026><div data-v-c175e026><p class="text-xs font-bold uppercase tracking-[0.25em] text-primary" data-v-c175e026>Design Spec · Influencer Portal</p><h1 class="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl" data-v-c175e026>หน้าโปรไฟล์ (KOL)</h1><p class="mt-2 max-w-xl text-sm leading-relaxed text-muted" data-v-c175e026>Field inventory · validation · states · logic — มุม KOL ของตัวเองเท่านั้น ไม่มีข้อมูลภายในแอดมิน</p></div><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-16 shrink-0" data-v-c175e026></div><div class="mt-5 flex flex-wrap items-center gap-2 text-[11px]" data-v-c175e026><!--[-->`);
			ssrRenderList(legend, (l) => {
				_push(`<span class="${ssrRenderClass(srcClass[l.kind])}" data-v-c175e026>${ssrInterpolate(l.label)}</span>`);
			});
			_push(`<!--]-->`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/profile",
				class: "ml-auto inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1 font-bold text-white"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(` เปิด prototype `);
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-right",
							class: "h-3.5 w-3.5"
						}, null, _parent, _scopeId));
					} else return [createTextVNode(" เปิด prototype "), createVNode(_component_Icon, {
						name: "arrow-right",
						class: "h-3.5 w-3.5"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="mt-8" data-v-c175e026><h2 class="font-heading text-xl font-extrabold text-ink" data-v-c175e026>โครงหน้า — 4 แท็บ</h2><ol class="mt-3 grid gap-2 sm:grid-cols-2" data-v-c175e026><!--[-->`);
			ssrRenderList(overview, (o) => {
				_push(`<li class="rounded-lg bg-surface p-3 text-sm" data-v-c175e026><b data-v-c175e026>${ssrInterpolate(o.num)} ${ssrInterpolate(o.title)}</b> — ${ssrInterpolate(o.desc)}</li>`);
			});
			_push(`<!--]--></ol><p class="mt-3 text-sm text-muted" data-v-c175e026>ทั้งหน้ามี 2 โหมด: <b class="text-ink" data-v-c175e026>อ่านอย่างเดียว</b> (default) ↔ <b class="text-ink" data-v-c175e026>แก้ไข</b> (กด &quot;แก้ไขโปรไฟล์&quot;). Pricing 3 tier — หน้านี้ KOL ตั้งได้แค่ TIER 1; งบแคมเปญ (TIER 2) และราคาจริง (TIER 3 แอดมินเคาะ) ไม่อยู่ในหน้านี้.</p></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>แท็บ 1 — ข้อมูลส่วนตัว</h2><table class="mt-3" data-v-c175e026><thead data-v-c175e026><tr data-v-c175e026><th style="${ssrRenderStyle({ "width": "24%" })}" data-v-c175e026>Field</th><th style="${ssrRenderStyle({ "width": "12%" })}" data-v-c175e026>ที่มา</th><th style="${ssrRenderStyle({ "width": "18%" })}" data-v-c175e026>ประเภท</th><th style="${ssrRenderStyle({ "width": "23%" })}" data-v-c175e026>Validation</th><th data-v-c175e026>Note</th></tr></thead><tbody data-v-c175e026><!--[-->`);
			ssrRenderList(tab1, (r) => {
				_push(`<tr data-v-c175e026><td data-v-c175e026>${ssrInterpolate(r.field)}</td><td data-v-c175e026><!--[-->`);
				ssrRenderList(r.sources, (s, i) => {
					_push(`<span class="${ssrRenderClass(srcClass[s.kind])}" data-v-c175e026>${ssrInterpolate(s.label)}</span>`);
				});
				_push(`<!--]--></td><!--[-->`);
				ssrRenderList(r.cells, (c, ci) => {
					_push(`<td data-v-c175e026>${ssrInterpolate(c)}</td>`);
				});
				_push(`<!--]--></tr>`);
			});
			_push(`<!--]--></tbody></table></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>แท็บ 2 — บัญชีโซเชียล</h2><p class="mt-2 text-sm text-muted" data-v-c175e026>ต่อแพลตฟอร์ม: IG / TikTok / FB / YouTube / X / Lemon8. <b class="text-ink" data-v-c175e026>handle / followers / ER มาจาก sync — KOL แก้ไม่ได้</b>.</p><table class="mt-3" data-v-c175e026><thead data-v-c175e026><tr data-v-c175e026><th style="${ssrRenderStyle({ "width": "26%" })}" data-v-c175e026>Field</th><th style="${ssrRenderStyle({ "width": "14%" })}" data-v-c175e026>ที่มา</th><th style="${ssrRenderStyle({ "width": "18%" })}" data-v-c175e026>ประเภท</th><th data-v-c175e026>Note</th></tr></thead><tbody data-v-c175e026><!--[-->`);
			ssrRenderList(tab2, (r) => {
				_push(`<tr data-v-c175e026><td data-v-c175e026>${ssrInterpolate(r.field)}</td><td data-v-c175e026><!--[-->`);
				ssrRenderList(r.sources, (s, i) => {
					_push(`<span class="${ssrRenderClass(srcClass[s.kind])}" data-v-c175e026>${ssrInterpolate(s.label)}</span>`);
				});
				_push(`<!--]--></td><!--[-->`);
				ssrRenderList(r.cells, (c, ci) => {
					_push(`<td data-v-c175e026>${ssrInterpolate(c)}</td>`);
				});
				_push(`<!--]--></tr>`);
			});
			_push(`<!--]--></tbody></table></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>แท็บ 3 — Rate Card (TIER 1)</h2><p class="mt-2 text-sm text-muted" data-v-c175e026>โชว์การ์ดราคาครบทุกแพลตฟอร์ม ชื่อช่องตรงกับแพลตฟอร์ม · ช่องว่าง = placeholder &quot;ไม่รับงาน&quot;.</p><table class="mt-3" data-v-c175e026><thead data-v-c175e026><tr data-v-c175e026><th style="${ssrRenderStyle({ "width": "22%" })}" data-v-c175e026>แพลตฟอร์ม</th><th data-v-c175e026>รูปแบบ (ช่องราคา บาท)</th></tr></thead><tbody data-v-c175e026><!--[-->`);
			ssrRenderList(rateFormats, (r) => {
				_push(`<tr data-v-c175e026><td data-v-c175e026>${ssrInterpolate(r.platform)}</td><td data-v-c175e026>${ssrInterpolate(r.formats)}`);
				if (r.note) _push(`<span class="text-muted" data-v-c175e026>${ssrInterpolate(r.note)}</span>`);
				else _push(`<!---->`);
				_push(`</td></tr>`);
			});
			_push(`<!--]--></tbody></table><table class="mt-3" data-v-c175e026><thead data-v-c175e026><tr data-v-c175e026><th style="${ssrRenderStyle({ "width": "24%" })}" data-v-c175e026>Field</th><th style="${ssrRenderStyle({ "width": "14%" })}" data-v-c175e026>ที่มา</th><th style="${ssrRenderStyle({ "width": "20%" })}" data-v-c175e026>Validation</th><th data-v-c175e026>Note</th></tr></thead><tbody data-v-c175e026><!--[-->`);
			ssrRenderList(tab3, (r) => {
				_push(`<tr data-v-c175e026><td data-v-c175e026>${ssrInterpolate(r.field)}</td><td data-v-c175e026><!--[-->`);
				ssrRenderList(r.sources, (s, i) => {
					_push(`<span class="${ssrRenderClass(srcClass[s.kind])}" data-v-c175e026>${ssrInterpolate(s.label)}</span>`);
				});
				_push(`<!--]--></td><!--[-->`);
				ssrRenderList(r.cells, (c, ci) => {
					_push(`<td data-v-c175e026>${ssrInterpolate(c)}</td>`);
				});
				_push(`<!--]--></tr>`);
			});
			_push(`<!--]--></tbody></table></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>แท็บ 4 — ยืนยันตัวตน / KYC</h2><table class="mt-3" data-v-c175e026><thead data-v-c175e026><tr data-v-c175e026><th style="${ssrRenderStyle({ "width": "28%" })}" data-v-c175e026>Field</th><th style="${ssrRenderStyle({ "width": "12%" })}" data-v-c175e026>ที่มา</th><th style="${ssrRenderStyle({ "width": "26%" })}" data-v-c175e026>Validation</th><th data-v-c175e026>Note</th></tr></thead><tbody data-v-c175e026><!--[-->`);
			ssrRenderList(tab4, (r) => {
				_push(`<tr data-v-c175e026><td data-v-c175e026>${ssrInterpolate(r.field)}</td><td data-v-c175e026><!--[-->`);
				ssrRenderList(r.sources, (s, i) => {
					_push(`<span class="${ssrRenderClass(srcClass[s.kind])}" data-v-c175e026>${ssrInterpolate(s.label)}</span>`);
				});
				_push(`<!--]--></td><!--[-->`);
				ssrRenderList(r.cells, (c, ci) => {
					_push(`<td data-v-c175e026>${ssrInterpolate(c)}</td>`);
				});
				_push(`<!--]--></tr>`);
			});
			_push(`<!--]--></tbody></table></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>States ของหน้า</h2><table class="mt-3" data-v-c175e026><thead data-v-c175e026><tr data-v-c175e026><th style="${ssrRenderStyle({ "width": "22%" })}" data-v-c175e026>มิติ</th><th style="${ssrRenderStyle({ "width": "30%" })}" data-v-c175e026>สถานะ</th><th data-v-c175e026>พฤติกรรม</th></tr></thead><tbody data-v-c175e026><!--[-->`);
			ssrRenderList(states, (s) => {
				_push(`<tr data-v-c175e026><td data-v-c175e026>${ssrInterpolate(s.dim)}</td><td data-v-c175e026>${ssrInterpolate(s.states)}</td><td data-v-c175e026>${ssrInterpolate(s.behavior)}</td></tr>`);
			});
			_push(`<!--]--></tbody></table><p class="mt-3 text-xs text-muted" data-v-c175e026>ใน prototype มีแถบ <b data-v-c175e026>&quot;สำหรับรีวิว (ไม่ใช่ UI จริง)&quot;</b> สำหรับสลับสถานะข้างต้นเพื่อตรวจงาน — ตัดออกก่อน production.</p></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>Logic — &quot;พร้อมรับงาน&quot; / &quot;พร้อมรับเงิน&quot;</h2><div class="mt-3 grid gap-3 sm:grid-cols-2" data-v-c175e026><!--[-->`);
			ssrRenderList(logicCards, (c) => {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-surface p-4" data-v-c175e026><p class="font-bold text-ink" data-v-c175e026>${ssrInterpolate(c.title)}</p><p class="mt-1 text-sm text-muted" data-v-c175e026>${ssrInterpolate(c.body)}</p></div>`);
			});
			_push(`<!--]--></div><p class="mt-3 text-sm text-muted" data-v-c175e026>Profile completeness % = สัดส่วน checklist ที่ทำครบ (ข้อมูลพื้นฐาน · Niche · โซเชียล · Rate Card · KYC) แสดงเป็นแถบบนสุดของหน้า</p></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>Empty / Edge cases</h2><ul class="mt-3 space-y-2 text-sm text-muted" data-v-c175e026><!--[-->`);
			ssrRenderList(edgeCases, (e, i) => {
				_push(`<li class="rounded-lg bg-surface p-3" data-v-c175e026>• <b class="text-ink" data-v-c175e026>${ssrInterpolate(e.lead)}</b>${ssrInterpolate(e.rest)}</li>`);
			});
			_push(`<!--]--></ul></section><section class="mt-9 break-inside-avoid" data-v-c175e026><h2 class="font-heading text-lg font-extrabold text-ink" data-v-c175e026>Deferred (นอกขอบเขตรอบนี้)</h2><ul class="mt-3 space-y-1.5 text-sm text-muted" data-v-c175e026><!--[-->`);
			ssrRenderList(deferred, (d, i) => {
				_push(`<li data-v-c175e026>• ${ssrInterpolate(d)}</li>`);
			});
			_push(`<!--]--></ul></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/docs/profile-spec.vue
var _sfc_setup = profile_spec_vue_vue_type_script_setup_true_lang_default.setup;
profile_spec_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/profile-spec.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var profile_spec_default = /*#__PURE__*/ _plugin_vue_export_helper_default(profile_spec_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c175e026"]]);

export { profile_spec_default as default };
//# sourceMappingURL=profile-spec-DC8CrB79.mjs.map
