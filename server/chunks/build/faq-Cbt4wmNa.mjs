import { b as useLocale, a as useHead$1, I as Icon_default, N as NuxtLink } from '../virtual/entry.mjs';
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/faq.vue?vue&type=script&setup=true&lang.ts
var faq_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "faq",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("FAQ คำถามที่พบบ่อย — Ripples", "FAQ — Ripples") }));
		const cats = [
			[
				"all",
				"ทั้งหมด",
				"All"
			],
			[
				"general",
				"ทั่วไป",
				"General"
			],
			[
				"payment",
				"การชำระเงิน",
				"Payment"
			],
			[
				"campaigns",
				"แคมเปญ",
				"Campaigns"
			],
			[
				"requirements",
				"ข้อกำหนด",
				"Requirements"
			]
		];
		const faqs = [
			{
				q: "ฉันจะสมัครเป็น influencer ได้อย่างไร?",
				qEn: "How do I sign up as an influencer?",
				a: "สมัครได้ง่ายๆ เพียงคลิกที่ปุ่ม \"สมัครสมาชิก\" และกรอกข้อมูลส่วนตัว จากนั้นเพิ่มบัญชีโซเชียลมีเดียและอัปโหลดเอกสารยืนยันตัวตน เมื่อทีมงานตรวจสอบและอนุมัติแล้ว คุณสามารถเริ่มสมัครแคมเปญได้ทันที",
				aEn: "Signing up is easy. Just click the \"Sign up\" button and fill in your personal details, then connect your social media accounts and upload your identity verification documents. Once our team reviews and approves your account, you can start applying for campaigns right away.",
				c: "general"
			},
			{
				q: "ระบบจับคู่ทำงานอย่างไร?",
				qEn: "How does the matching system work?",
				a: "ระบบ AI ของเราจะวิเคราะห์บัญชีโซเชียลมีเดีย หมวดหมู่เนื้อหา และ engagement rate ของคุณ เพื่อแนะนำแคมเปญที่เหมาะสมที่สุด นอกจากนี้แบรนด์ยังสามารถเชิญคุณเข้าร่วมแคมเปญโดยตรงได้อีกด้วย",
				aEn: "Our AI analyzes your social media accounts, content categories, and engagement rate to recommend the campaigns that fit you best. Brands can also invite you to join their campaigns directly.",
				c: "general"
			},
			{
				q: "ฉันจะได้รับเงินเมื่อไหร่และอย่างไร?",
				qEn: "When and how do I get paid?",
				a: "เมื่องานของคุณได้รับการอนุมัติ เงินจะเข้าสู่กระเป๋าเงินของคุณภายใน 24 ชั่วโมง คุณสามารถขอถอนเงินไปยังบัญชีธนาคารที่ลงทะเบียนไว้ได้ตลอดเวลา การโอนเงินจะใช้เวลา 1-2 วันทำการ",
				aEn: "Once your work is approved, the payment lands in your wallet within 24 hours. You can withdraw to your registered bank account at any time, and transfers take 1-2 business days.",
				c: "payment"
			},
			{
				q: "มีแคมเปญประเภทไหนบ้าง?",
				qEn: "What types of campaigns are available?",
				a: "เรามีแคมเปญหลากหลายประเภท ได้แก่ Fashion, Beauty, Food, Tech, Lifestyle, Travel, Fitness และอื่นๆ คุณสามารถกรองแคมเปญตามหมวดหมู่ที่สนใจได้",
				aEn: "We offer a wide range of campaign types including Fashion, Beauty, Food, Tech, Lifestyle, Travel, Fitness, and more. You can filter campaigns by the categories you are interested in.",
				c: "campaigns"
			},
			{
				q: "ต้องมีผู้ติดตามขั้นต่ำเท่าไหร่?",
				qEn: "Is there a minimum follower requirement?",
				a: "ขึ้นอยู่กับแต่ละแคมเปญ บางแคมเปญอาจต้องการผู้ติดตาม 1,000+ ในขณะที่บางแคมเปญอาจต้องการ 100,000+ เรามีแคมเปญสำหรับ nano, micro, macro และ mega influencers ทุกระดับ",
				aEn: "It depends on the campaign. Some require 1,000+ followers while others need 100,000+. We have campaigns for every tier, from nano and micro to macro and mega influencers.",
				c: "requirements"
			},
			{
				q: "ฉันสามารถปฏิเสธข้อเสนอแคมเปญได้หรือไม่?",
				qEn: "Can I decline a campaign offer?",
				a: "ได้ค่ะ คุณสามารถปฏิเสธข้อเสนอแคมเปญได้โดยไม่มีผลกระทบใดๆ เราเข้าใจว่าคุณต้องเลือกแคมเปญที่เหมาะสมกับแบรนด์ส่วนตัวของคุณ",
				aEn: "Yes. You can decline a campaign offer with no penalty. We understand that you need to choose campaigns that align with your personal brand.",
				c: "campaigns"
			}
		];
		const active = ref("all");
		const q = ref("");
		const open = ref(-1);
		const filtered = computed(() => {
			const term = q.value.toLowerCase();
			return faqs.filter((f) => (active.value === "all" || f.c === active.value) && (f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term) || f.qEn.toLowerCase().includes(term) || f.aEn.toLowerCase().includes(term)));
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-8"><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "help-circle",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` FAQ </span><h1 class="mt-5 font-heading text-4xl font-extrabold leading-[1.5] tracking-tight text-ink lg:text-6xl">${ssrInterpolate(unref(tr)("คำถามที่พบบ่อย", "Frequently Asked Questions"))}</h1><p class="mt-4 max-w-2xl text-sm leading-relaxed text-muted lg:text-lg">${ssrInterpolate(unref(tr)("ทุกสิ่งที่คุณต้องรู้เกี่ยวกับแพลตฟอร์มของเรา", "Everything you need to know about our platform"))}</p></section><section class="mb-8"><div class="relative max-w-xl">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "search",
				class: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5B6B82]/50"
			}, null, _parent));
			_push(`<input${ssrRenderAttr("value", unref(q))} type="text"${ssrRenderAttr("placeholder", unref(tr)("ค้นหาคำตอบ...", "Search for answers..."))} class="w-full rounded-lg border border-[#0F2747]/15 bg-white py-3.5 pl-12 pr-4 text-sm text-ink placeholder-[#5B6B82]/50 shadow-sm outline-none transition focus:border-primary/50"></div></section><section class="grid gap-8 lg:grid-cols-4"><div class="lg:col-span-1"><div class="rounded-xl border border-[#0F2747]/10 bg-white p-4 shadow-sm lg:sticky lg:top-6"><h3 class="mb-3 px-2 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("หมวดหมู่", "Categories"))}</h3><div class="flex flex-wrap gap-2 lg:flex-col"><!--[-->`);
			ssrRenderList(cats, (c) => {
				_push(`<button type="button" class="${ssrRenderClass(["w-full rounded-lg px-4 py-2 text-left text-sm font-semibold transition", unref(active) === c[0] ? "bg-primary text-white" : "text-muted hover:bg-primary/5 hover:text-primary"])}">${ssrInterpolate(unref(tr)(c[1], c[2]))}</button>`);
			});
			_push(`<!--]--></div></div></div><div class="lg:col-span-3"><div class="space-y-3"><!--[-->`);
			ssrRenderList(unref(filtered), (f, i) => {
				_push(`<div class="overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm"><button type="button" class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"><span class="font-heading text-base font-bold text-ink">${ssrInterpolate(unref(tr)(f.q, f.qEn))}</span>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "chevron-down",
					class: ["h-5 w-5 shrink-0 text-primary transition-transform", unref(open) === i ? "rotate-180" : ""]
				}, null, _parent));
				_push(`</button><div class="${ssrRenderClass([unref(open) === i ? "pb-6" : "hidden", "px-6"])}"><p class="text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)(f.a, f.aEn))}</p></div></div>`);
			});
			_push(`<!--]--></div><p class="rounded-xl bg-white py-16 text-center text-muted shadow-sm" style="${ssrRenderStyle(unref(filtered).length === 0 ? null : { display: "none" })}">${ssrInterpolate(unref(tr)("ไม่พบคำถามตามที่ค้นหา", "No questions match your search"))}</p></div></section><section class="mt-16 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primaryDark p-10 text-center text-white lg:p-14"><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "message-circle",
				class: "h-7 w-7"
			}, null, _parent));
			_push(`</div><h2 class="mt-5 font-heading text-2xl font-extrabold tracking-tight lg:text-4xl">${ssrInterpolate(unref(tr)("ยังมีคำถามอยู่ใช่ไหม?", "Still have questions?"))}</h2><p class="mx-auto mt-3 max-w-md text-sm text-white/80">${ssrInterpolate(unref(tr)("ไม่เจอคำตอบที่ต้องการ? ทักทีมงานของเราได้เลย", "Can't find the answer you need? Reach out to our team."))}</p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-primary transition hover:bg-white/90"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`${ssrInterpolate(unref(tr)("ติดต่อเรา", "Contact us"))} `);
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-right",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
					} else return [createTextVNode(toDisplayString(unref(tr)("ติดต่อเรา", "Contact us")) + " ", 1), createVNode(_component_Icon, {
						name: "arrow-right",
						class: "h-4 w-4"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</section></div>`);
		};
	}
});
//#endregion
//#region app/pages/faq.vue
var _sfc_setup = faq_vue_vue_type_script_setup_true_lang_default.setup;
faq_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var faq_default = faq_vue_vue_type_script_setup_true_lang_default;

export { faq_default as default };
//# sourceMappingURL=faq-Cbt4wmNa.mjs.map
