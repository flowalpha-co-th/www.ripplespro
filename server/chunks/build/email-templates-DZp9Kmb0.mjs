import { a as useHead$1, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/docs/email-templates.vue?vue&type=script&setup=true&lang.ts
var email_templates_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "email-templates",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1(() => ({ title: "โครง Email Template — Ripples" }));
		const cats = {
			security: {
				short: "ความปลอดภัย",
				tint: "rose"
			},
			profile: {
				short: "โปรไฟล์",
				tint: "violet"
			},
			campaign: {
				short: "แคมเปญ",
				tint: "blue"
			},
			workflow: {
				short: "งาน",
				tint: "amber"
			},
			payment: {
				short: "การเงิน",
				tint: "green"
			}
		};
		const tintClass = {
			rose: {
				bg: "bg-rose-50",
				fg: "text-rose-600",
				chip: "bg-rose-50 text-rose-600"
			},
			violet: {
				bg: "bg-violet-50",
				fg: "text-violet-600",
				chip: "bg-violet-50 text-violet-600"
			},
			blue: {
				bg: "bg-blue-50",
				fg: "text-blue-600",
				chip: "bg-blue-50 text-blue-600"
			},
			amber: {
				bg: "bg-amber-50",
				fg: "text-amber-600",
				chip: "bg-amber-50 text-amber-700"
			},
			green: {
				bg: "bg-green-50",
				fg: "text-green-600",
				chip: "bg-green-50 text-green-700"
			}
		};
		const iconForCat = {
			security: "shield-check",
			profile: "badge-check",
			campaign: "megaphone",
			workflow: "clipboard-list",
			payment: "wallet"
		};
		function toRoute(htmlLink) {
			return `/portal/${htmlLink.replace(/^(\.\.\/)+/, "").replace(/\.html$/, "")}`;
		}
		const tint = (cat) => tintClass[cats[cat].tint];
		const iconFor = (cat) => iconForCat[cat];
		const emails = [
			{
				cat: "security",
				subject: "ยินดีต้อนรับสู่ Ripples",
				preheader: "เริ่มต้นหาแคมเปญที่ใช่สำหรับคุณ",
				heading: "ยินดีต้อนรับ, สมใจ!",
				body: "ขอบคุณที่สมัครเป็นครีเอเตอร์กับ Ripples — ตั้งค่าโปรไฟล์และเชื่อมบัญชีโซเชียลให้ครบ เพื่อให้แบรนด์เจอคุณง่ายขึ้น",
				ctaLabel: "ตั้งค่าโปรไฟล์",
				ctaLink: "profile.html",
				mandatory: false
			},
			{
				cat: "security",
				subject: "ยืนยันอีเมลของคุณ — Ripples",
				preheader: "รหัสยืนยัน 6 หลัก ใช้ได้ภายใน 10 นาที",
				heading: "ยืนยันอีเมลของคุณ",
				body: "กรอกรหัสด้านล่างเพื่อยืนยันอีเมลและเริ่มใช้งานบัญชี — รหัสใช้ได้ภายใน <strong class=\"text-ink\">10 นาที</strong> หรือจะกดปุ่มเพื่อยืนยันอัตโนมัติก็ได้",
				code: "482 159",
				ctaLabel: "ยืนยันอีเมล",
				ctaLink: "profile.html",
				mandatory: true
			},
			{
				cat: "security",
				subject: "รีเซ็ตรหัสผ่าน Ripples ของคุณ",
				preheader: "ลิงก์ใช้ได้ภายใน 30 นาที",
				heading: "ขอรีเซ็ตรหัสผ่าน",
				body: "เราได้รับคำขอรีเซ็ตรหัสผ่านสำหรับบัญชีนี้ กดปุ่มด้านล่างเพื่อตั้งรหัสผ่านใหม่ — <strong class=\"text-ink\">ลิงก์ใช้ได้ภายใน 30 นาที</strong> หากคุณไม่ได้เป็นผู้ขอ ไม่ต้องดำเนินการใด ๆ รหัสผ่านเดิมยังใช้ได้ตามปกติ",
				ctaLabel: "ตั้งรหัสผ่านใหม่",
				ctaLink: "../reset-password.html",
				mandatory: true
			},
			{
				cat: "security",
				subject: "รหัสผ่านของคุณถูกเปลี่ยนแล้ว",
				preheader: "หากไม่ใช่คุณ โปรดดำเนินการทันที",
				heading: "เปลี่ยนรหัสผ่านสำเร็จ",
				body: "รหัสผ่านบัญชี Ripples ของคุณถูกเปลี่ยนเมื่อ 11 มิ.ย. 2026 เวลา 09:15 น. หากคุณไม่ได้ทำรายการนี้ โปรดรีเซ็ตรหัสผ่านและติดต่อทีมงานทันที",
				ctaLabel: "ดูความปลอดภัยบัญชี",
				ctaLink: "profile.html",
				mandatory: true
			},
			{
				cat: "profile",
				subject: "ยืนยันตัวตนสำเร็จ — พร้อมรับเงินแล้ว",
				preheader: "บัญชีของคุณผ่าน KYC เรียบร้อย",
				heading: "KYC อนุมัติแล้ว",
				body: "ยินดีด้วย! เอกสารยืนยันตัวตนของคุณผ่านการตรวจสอบแล้ว ตอนนี้คุณพร้อมรับงานและรับเงินจากแคมเปญได้เต็มรูปแบบ",
				ctaLabel: "เริ่มหาแคมเปญ",
				ctaLink: "campaigns.html",
				mandatory: false
			},
			{
				cat: "profile",
				subject: "เอกสาร KYC ต้องแก้ไข",
				preheader: "มีบางจุดที่ต้องอัปโหลดใหม่",
				heading: "KYC ถูกปฏิเสธ",
				body: "เอกสารของคุณยังไม่ผ่านการตรวจสอบ เหตุผล: ภาพหน้าสมุดบัญชีไม่ชัด — กรุณาอัปโหลดใหม่ให้เห็นเลขบัญชีและชื่อชัดเจน แล้วส่งอีกครั้ง",
				ctaLabel: "แก้ไขและส่งใหม่",
				ctaLink: "profile.html",
				mandatory: false
			},
			{
				cat: "profile",
				subject: "มีข้อกำหนด/นโยบายเวอร์ชันใหม่ ต้องยอมรับ",
				preheader: "โปรดยอมรับก่อนใช้งานครั้งถัดไป",
				heading: "มีเวอร์ชันใหม่ที่ต้องยอมรับ",
				body: "เราได้อัปเดตเอกสารต่อไปนี้: <strong class=\"text-ink\">ข้อกำหนดการใช้บริการ (Terms v2.2)</strong> เพื่อให้ใช้งานบัญชีต่อได้ กรุณาเข้าสู่ระบบและกดยอมรับเวอร์ชันใหม่ — ระบบจะแสดงหน้ายอมรับให้อัตโนมัติหลังเข้าสู่ระบบ",
				ctaLabel: "เข้าสู่ระบบเพื่อยอมรับ",
				ctaLink: "profile.html",
				mandatory: false
			},
			{
				cat: "campaign",
				subject: "คุณได้รับเชิญร่วมแคมเปญ",
				preheader: "Aura Cosmetics อยากร่วมงานกับคุณ",
				heading: "คำเชิญร่วมแคมเปญ",
				body: "แบรนด์ “Aura Cosmetics” เชิญคุณร่วมแคมเปญ “Matte Lip Collection” — ดูรายละเอียดงาน งบประมาณ และเงื่อนไข แล้วตอบรับได้เลย",
				ctaLabel: "ดูแคมเปญ",
				ctaLink: "campaign-detail.html",
				mandatory: false
			},
			{
				cat: "campaign",
				subject: "คุณได้รับเลือก! โปรดตอบรับภายใน 48 ชม.",
				preheader: "แคมเปญ Summer Skincare เคาะราคาแล้ว",
				heading: "ได้รับเลือก + เคาะราคาแล้ว",
				body: "แคมเปญ “Summer Skincare” เลือกคุณเป็นหนึ่งในครีเอเตอร์ ราคาที่ตกลง ฿15,000 — กรุณายืนยันการรับงานภายใน 48 ชั่วโมง มิฉะนั้นสิทธิ์จะถูกส่งต่อ",
				ctaLabel: "ตอบรับงาน",
				ctaLink: "campaign-detail.html",
				mandatory: false
			},
			{
				cat: "campaign",
				subject: "ใกล้หมดเวลาตอบรับงาน — เหลืออีก 6 ชม.",
				preheader: "แคมเปญ Summer Skincare รอการตอบรับ",
				heading: "อย่าพลาดงานนี้",
				body: "เหลือเวลาอีก <strong class=\"text-ink\">6 ชั่วโมง</strong> สำหรับตอบรับแคมเปญ “Summer Skincare” (฿15,000) หากเลยกำหนด สิทธิ์จะถูกส่งต่อให้ครีเอเตอร์ท่านอื่นโดยอัตโนมัติ",
				ctaLabel: "ตอบรับงานตอนนี้",
				ctaLink: "campaign-detail.html",
				mandatory: false
			},
			{
				cat: "workflow",
				subject: "ได้รับ brief แล้ว — เริ่มงานได้เลย",
				preheader: "แคมเปญ Glow Serum Launch",
				heading: "brief พร้อมแล้ว",
				body: "แอดมินส่ง brief สำหรับงาน “รีล Instagram — Glow Serum” เรียบร้อย อ่านรายละเอียด ส่ง storyline และเริ่มถ่ายทำได้ภายในกำหนด",
				ctaLabel: "ดู brief",
				ctaLink: "tasks.html",
				mandatory: false
			},
			{
				cat: "workflow",
				subject: "ถึงคิวคุณส่งงานแล้ว",
				preheader: "งาน Glow Serum รอการส่งจากคุณ",
				heading: "ถึงคิวส่งงานของคุณ",
				body: "งาน “รีล Instagram — Glow Serum” มาถึงขั้นตอนที่ต้องส่งจากคุณแล้ว — กรุณาส่ง <strong class=\"text-ink\">storyline / draft / ลิงก์โพสต์ / capture report</strong> ตามขั้นตอนในหน้างาน",
				ctaLabel: "ไปที่งาน",
				ctaLink: "tasks.html",
				mandatory: false
			},
			{
				cat: "workflow",
				subject: "ใกล้ถึง deadline ส่งงาน",
				preheader: "ครบกำหนดพรุ่งนี้ 18:00 น.",
				heading: "เหลือเวลาอีกไม่มาก",
				body: "งาน “รีล Instagram — Glow Serum” ครบกำหนดส่ง 14 มิ.ย. 2026 เวลา 18:00 น. อย่าลืมส่งลิงก์โพสต์และ capture report ก่อนหมดเวลา",
				ctaLabel: "ส่งงาน",
				ctaLink: "tasks.html",
				mandatory: false
			},
			{
				cat: "workflow",
				subject: "เลยกำหนดส่งงานแล้ว — รีบส่งด่วน",
				preheader: "งาน Glow Serum เลย deadline",
				heading: "งานเลยกำหนดส่ง",
				body: "งาน “รีล Instagram — Glow Serum” <strong class=\"text-ink\">เลยกำหนดส่งแล้ว</strong> กรุณาส่งงานโดยเร็วที่สุดเพื่อไม่ให้กระทบการรับงานในอนาคต หากติดปัญหาโปรดแจ้งทีมงาน",
				ctaLabel: "ส่งงานทันที",
				ctaLink: "tasks.html",
				mandatory: false
			},
			{
				cat: "payment",
				subject: "ค่างานพร้อมจ่าย — กำหนดจ่าย 16 มิ.ย.",
				preheader: "แคมเปญ Iced Coffee Summer ฿9,500",
				heading: "ค่างานพร้อมจ่ายแล้ว",
				body: "งานของคุณผ่านการตรวจเรียบร้อย ค่างานแคมเปญ “Iced Coffee Summer” จำนวน <strong class=\"text-ink\">฿9,500</strong> มีกำหนดโอนเข้าบัญชีวันที่ 16 มิ.ย. 2026",
				ctaLabel: "ดูรายละเอียด",
				ctaLink: "wallet.html",
				mandatory: true
			},
			{
				cat: "payment",
				subject: "จ่ายเงินแล้ว ฿18,000",
				preheader: "โอนเข้าบัญชี KBANK •••890",
				heading: "รับเงินเรียบร้อย",
				body: "ค่างานแคมเปญ “Glow Serum Launch” โอนเข้าบัญชีของคุณแล้ว ยอดสุทธิ ฿18,000 (หลังหักภาษี ณ ที่จ่าย 3%) ดูสลิปและรายละเอียดได้ในกระเป๋าเงิน",
				ctaLabel: "ดูสลิป",
				ctaLink: "wallet.html",
				mandatory: true
			},
			{
				cat: "payment",
				subject: "การจ่ายเงินล่าช้า — เรากำลังดำเนินการ",
				preheader: "ค่างาน Iced Coffee Summer ติดปัญหา",
				heading: "การจ่ายเงินล่าช้า",
				body: "ค่างานแคมเปญ “Iced Coffee Summer” (฿9,500) เกิดความล่าช้าในการโอน เนื่องจากข้อมูลบัญชีไม่ตรงกับชื่อใน KYC — กรุณาตรวจสอบบัญชีธนาคาร หรือติดต่อทีมงานเพื่อแก้ไข",
				ctaLabel: "ตรวจสอบบัญชี",
				ctaLink: "wallet.html",
				mandatory: true
			}
		];
		const antiSpamEmails = [{
			kind: "digest",
			cat: "campaign",
			rule: "รวมเป็น digest รายสัปดาห์",
			subject: "แคมเปญแนะนำประจำสัปดาห์ — 4 แคมเปญตรงสไตล์คุณ",
			preheader: "รวมแคมเปญที่ตรง niche ส่งสัปดาห์ละครั้ง",
			heading: "แคมเปญใหม่ที่ตรงกับคุณสัปดาห์นี้",
			intro: "เรารวมแคมเปญที่ตรงหมวด “ความงาม & สกินแคร์” และ “ไลฟ์สไตล์” ของคุณมาให้ในอีเมลฉบับเดียว — แทนการส่งทีละแคมเปญ",
			items: [
				{
					brand: "Aura Cosmetics",
					name: "Matte Lip Collection",
					budget: "฿12,000–18,000",
					plat: "IG · TikTok"
				},
				{
					brand: "GlowLab",
					name: "Vitamin C Serum รีวิว",
					budget: "฿8,000–15,000",
					plat: "Instagram"
				},
				{
					brand: "Taste Kitchen",
					name: "เมนูซัมเมอร์ใหม่",
					budget: "฿10,000–20,000",
					plat: "TikTok"
				},
				{
					brand: "Pure Hydra",
					name: "Mineral Water",
					budget: "฿6,000–9,000",
					plat: "IG · Facebook"
				}
			],
			ctaLabel: "ดูแคมเปญทั้งหมด",
			ctaLink: "campaigns.html"
		}, {
			kind: "bundle",
			cat: "workflow",
			rule: "รวมเหตุการณ์ใกล้กัน",
			subject: "มี 3 คอมเมนต์ใหม่บนงาน “รีล Glow Serum”",
			preheader: "แอดมินคอมเมนต์หลายรายการในช่วงสั้น ๆ",
			heading: "มีคอมเมนต์ใหม่ 3 รายการ",
			intro: "แอดมินคอมเมนต์หลายรายการในเวลาไล่เลี่ยกัน เรารวมเป็นอีเมลฉบับเดียวเพื่อไม่ให้กล่องอีเมลของคุณรก",
			items: [
				{
					who: "แอดมิน Ploy",
					text: "ปรับ storyline ช่วงเปิดคลิปให้กระชับขึ้น",
					time: "10:20 น."
				},
				{
					who: "แอดมิน Ploy",
					text: "เพิ่ม CTA “กดสั่งซื้อ” ตอนท้ายคลิป",
					time: "10:35 น."
				},
				{
					who: "แอดมิน Ploy",
					text: "อย่าลืมใส่ #GlowSerum ในแคปชั่น",
					time: "11:02 น."
				}
			],
			ctaLabel: "ดูงานและตอบกลับ",
			ctaLink: "tasks.html"
		}];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/docs/notifications-spec",
				class: "mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-muted transition hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-left",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` กลับไปการแจ้งเตือน `);
					} else return [createVNode(_component_Icon, {
						name: "arrow-left",
						class: "h-4 w-4"
					}), createTextVNode(" กลับไปการแจ้งเตือน ")];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">โครง Email Template</h1><p class="mt-1 text-sm text-muted">ตัวอย่างอีเมลต่อเหตุการณ์ — หัวเรื่อง · เนื้อหา · ปุ่ม CTA ไปหน้าที่เกี่ยว</p></div></section><section id="emails" class="grid gap-6 lg:grid-cols-2"><!--[-->`);
			ssrRenderList(emails, (e, i) => {
				_push(`<div class="overflow-hidden rounded-2xl border border-[#0F2747]/10 bg-white shadow-sm"><div class="border-b border-[#0F2747]/10 bg-surface px-5 py-3"><div class="flex items-center justify-between gap-2"><span class="${ssrRenderClass([tint(e.cat).chip, "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-bold"])}">${ssrInterpolate(cats[e.cat].short)}</span>`);
				if (e.mandatory) {
					_push(`<span class="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "lock",
						class: "h-3 w-3"
					}, null, _parent));
					_push(` อีเมลบังคับ</span>`);
				} else _push(`<span class="text-[11px] text-muted">อีเมลตามการตั้งค่า</span>`);
				_push(`</div><p class="mt-2 text-sm font-bold text-ink">${ssrInterpolate(e.subject)}</p><p class="text-xs text-[#5B6B82]/70">ตัวอย่างแสดงผล: ${ssrInterpolate(e.preheader)}</p></div><div class="m-4 overflow-hidden rounded-xl border border-[#0F2747]/10"><div class="px-6 py-6 text-center" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#2D5BFF,#4D8BFF)" })}"><span class="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-sm"><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-8"></span></div><div class="px-7 py-7 text-center"><div class="${ssrRenderClass([[tint(e.cat).bg, tint(e.cat).fg], "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: iconFor(e.cat),
					class: "h-7 w-7"
				}, null, _parent));
				_push(`</div><h3 class="font-heading text-xl font-extrabold text-ink">${ssrInterpolate(e.heading)}</h3><p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">สวัสดีคุณสมใจ,<br><span>${e.body ?? ""}</span></p>`);
				if (e.code) _push(`<div class="mx-auto mt-5 w-fit rounded-xl border border-[#0F2747]/10 bg-surface px-8 py-4"><p class="font-heading text-3xl font-extrabold tracking-[0.3em] text-ink">${ssrInterpolate(e.code)}</p></div>`);
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: toRoute(e.ctaLink),
					class: "mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primaryDark"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`${ssrInterpolate(e.ctaLabel)} `);
							_push(ssrRenderComponent(_component_Icon, {
								name: "arrow-right",
								class: "h-4 w-4"
							}, null, _parent, _scopeId));
						} else return [createTextVNode(toDisplayString(e.ctaLabel) + " ", 1), createVNode(_component_Icon, {
							name: "arrow-right",
							class: "h-4 w-4"
						})];
					}),
					_: 2
				}, _parent));
				_push(`</div><div class="border-t border-[#0F2747]/10 px-7 py-4 text-center"><p class="text-[11px] leading-relaxed text-[#5B6B82]/60"> Ripples · คุณได้รับอีเมลนี้เพราะเป็นสมาชิก Ripples `);
				if (e.mandatory) _push(`<!--[--><br>อีเมลนี้เกี่ยวกับความปลอดภัย/การเงิน จึงส่งเสมอ<!--]-->`);
				else {
					_push(`<!--[--><br>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/portal/notification-settings",
						class: "text-primary hover:underline"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`จัดการการแจ้งเตือน`);
							else return [createTextVNode("จัดการการแจ้งเตือน")];
						}),
						_: 2
					}, _parent));
					_push(`<!--]-->`);
				}
				_push(`</p></div></div></div>`);
			});
			_push(`<!--]--></section><div class="mb-5 mt-12 flex items-center gap-3"><h2 class="font-heading text-xl font-extrabold tracking-tight text-ink">ตัวอย่างอีเมลกันสแปม</h2><span class="h-px flex-1 bg-[#0F2747]/10"></span></div><p class="mb-5 -mt-2 text-sm text-muted">แทนการส่งทีละฉบับ — รวมเหตุการณ์ที่เกี่ยวข้องเป็นอีเมลเดียว</p><section id="antispam" class="grid gap-6 lg:grid-cols-2"><!--[-->`);
			ssrRenderList(antiSpamEmails, (e, i) => {
				_push(`<div class="overflow-hidden rounded-2xl border border-[#0F2747]/10 bg-white shadow-sm"><div class="border-b border-[#0F2747]/10 bg-surface px-5 py-3"><div class="flex items-center justify-between gap-2"><span class="${ssrRenderClass([tint(e.cat).chip, "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-bold"])}">${ssrInterpolate(cats[e.cat].short)}</span><span class="inline-flex items-center gap-1 rounded-md bg-violet-50 px-2 py-0.5 text-[11px] font-bold text-violet-600">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "layers",
					class: "h-3 w-3"
				}, null, _parent));
				_push(` ${ssrInterpolate(e.rule)}</span></div><p class="mt-2 text-sm font-bold text-ink">${ssrInterpolate(e.subject)}</p><p class="text-xs text-[#5B6B82]/70">ตัวอย่างแสดงผล: ${ssrInterpolate(e.preheader)}</p></div><div class="m-4 overflow-hidden rounded-xl border border-[#0F2747]/10"><div class="px-6 py-6 text-center" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#2D5BFF,#4D8BFF)" })}"><span class="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-sm"><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-8"></span></div><div class="px-7 py-7 text-center"><div class="${ssrRenderClass([[tint(e.cat).bg, tint(e.cat).fg], "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: e.kind === "digest" ? "sparkles" : "messages-square",
					class: "h-7 w-7"
				}, null, _parent));
				_push(`</div><h3 class="font-heading text-xl font-extrabold text-ink">${ssrInterpolate(e.heading)}</h3><p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">สวัสดีคุณสมใจ,<br>${ssrInterpolate(e.intro)}</p>`);
				if (e.kind === "digest") {
					_push(`<div class="mt-5 space-y-3 text-left"><!--[-->`);
					ssrRenderList(e.items, (it, j) => {
						_push(`<div class="flex items-center justify-between gap-3 rounded-xl border border-[#0F2747]/10 p-3.5"><div class="min-w-0"><p class="truncate font-bold text-ink">${ssrInterpolate(it.name)}</p><p class="text-xs text-muted">${ssrInterpolate(it.brand)} · ${ssrInterpolate(it.plat)}</p></div><span class="shrink-0 rounded-lg bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">${ssrInterpolate(it.budget)}</span></div>`);
					});
					_push(`<!--]--></div>`);
				} else {
					_push(`<div class="mt-5 space-y-3 text-left"><!--[-->`);
					ssrRenderList(e.items, (it, j) => {
						_push(`<div class="rounded-xl border border-[#0F2747]/10 p-3.5"><div class="flex items-center justify-between gap-2"><span class="text-sm font-bold text-ink">${ssrInterpolate(it.who)}</span><span class="text-[11px] text-[#5B6B82]/60">${ssrInterpolate(it.time)}</span></div><p class="mt-1 text-sm leading-relaxed text-muted">“${ssrInterpolate(it.text)}”</p></div>`);
					});
					_push(`<!--]--></div>`);
				}
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: toRoute(e.ctaLink),
					class: "mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primaryDark"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`${ssrInterpolate(e.ctaLabel)} `);
							_push(ssrRenderComponent(_component_Icon, {
								name: "arrow-right",
								class: "h-4 w-4"
							}, null, _parent, _scopeId));
						} else return [createTextVNode(toDisplayString(e.ctaLabel) + " ", 1), createVNode(_component_Icon, {
							name: "arrow-right",
							class: "h-4 w-4"
						})];
					}),
					_: 2
				}, _parent));
				_push(`</div><div class="border-t border-[#0F2747]/10 px-7 py-4 text-center"><p class="text-[11px] leading-relaxed text-[#5B6B82]/60"> Ripples · คุณได้รับอีเมลนี้เพราะเป็นสมาชิก Ripples<br>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/portal/notification-settings",
					class: "text-primary hover:underline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`จัดการการแจ้งเตือน`);
						else return [createTextVNode("จัดการการแจ้งเตือน")];
					}),
					_: 2
				}, _parent));
				_push(`</p></div></div></div>`);
			});
			_push(`<!--]--></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/docs/email-templates.vue
var _sfc_setup = email_templates_vue_vue_type_script_setup_true_lang_default.setup;
email_templates_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/email-templates.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var email_templates_default = email_templates_vue_vue_type_script_setup_true_lang_default;

export { email_templates_default as default };
//# sourceMappingURL=email-templates-DZp9Kmb0.mjs.map
