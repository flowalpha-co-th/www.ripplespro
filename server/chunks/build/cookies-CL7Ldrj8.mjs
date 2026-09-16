import { b as useLocale, a as useHead$1, I as Icon_default, N as NuxtLink } from '../virtual/entry.mjs';
import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

//#region app/pages/cookies.vue?vue&type=script&setup=true&lang.ts
var cookies_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "cookies",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("นโยบายคุกกี้ — Ripples", "Cookie Policy — Ripples") }));
		const sections = [
			[
				"คุกกี้คืออะไร?",
				"What Are Cookies?",
				"คุกกี้คือไฟล์ข้อความขนาดเล็กที่ถูกวางบนอุปกรณ์ของคุณเมื่อคุณเข้าชมเว็บไซต์ ช่วยให้เว็บไซต์จดจำการตั้งค่า คงการ login และเข้าใจวิธีที่คุณใช้ไซต์ เราใช้คุกกี้และเทคโนโลยีที่คล้ายกัน เช่น local storage และ session storage",
				"Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site. We use cookies and similar technologies like local storage and session storage."
			],
			[
				"วิธีที่เราใช้คุกกี้",
				"How We Use Cookies",
				"เราใช้คุกกี้เพื่อคงการ login ในบัญชีของคุณ จดจำการตั้งค่าภาษา วิเคราะห์การใช้งานเพื่อปรับปรุงแพลตฟอร์ม วัดประสิทธิภาพของแคมเปญ และให้เนื้อหาและคำแนะนำที่ตรงกับคุณ",
				"We use cookies to keep you logged in to your account, remember your language preference, analyze how you use the Platform to improve it, measure the effectiveness of our campaigns, and provide personalized content and recommendations."
			],
			[
				"การจัดการคุกกี้",
				"Managing Cookies",
				"คุณสามารถควบคุมคุกกี้ผ่านการตั้งค่าเบราว์เซอร์ การปิดคุกกี้บางประเภทอาจส่งผลต่อฟังก์ชันของแพลตฟอร์ม คุกกี้ที่จำเป็นไม่สามารถปิดได้เนื่องจากจำเป็นสำหรับการทำงานของแพลตฟอร์ม",
				"You can control cookies through your browser settings. Disabling certain cookies may affect Platform functionality. Essential cookies cannot be disabled as they are required for the Platform to function properly."
			],
			[
				"คุกกี้ของบุคคลที่สาม",
				"Third-Party Cookies",
				"คุกกี้บางประเภทถูกวางโดยบริการของบุคคลที่สามที่ปรากฏในหน้าของเรา เช่น ผู้ให้บริการ analytics และแพลตฟอร์มโซเชียล ซึ่งจะอยู่ภายใต้นโยบายความเป็นส่วนตัวของบุคคลที่สามนั้นๆ",
				"Some cookies are placed by third-party services that appear on our pages, such as analytics providers and social media platforms. These are governed by the respective third parties' privacy policies."
			]
		].map(([title, titleEn, body, bodyEn]) => ({
			title,
			titleEn,
			body,
			bodyEn
		}));
		const types = [
			[
				"คุกกี้ที่จำเป็น",
				"Essential Cookies",
				"จำเป็นสำหรับการทำงานพื้นฐานของแพลตฟอร์ม เช่น การยืนยันตัวตน การจัดการ session และระบบความปลอดภัย ไม่สามารถปิดได้",
				"Required for basic Platform functionality including authentication, session management, and security features. Cannot be disabled.",
				"จำเป็น",
				"Required",
				true
			],
			[
				"คุกกี้ความต้องการ",
				"Preference Cookies",
				"จดจำการตั้งค่าและความต้องการของคุณ เช่น ภาษา เพื่อให้ไม่ต้องกรอกใหม่ทุกครั้งที่เข้าชม",
				"Remember your settings and preferences such as language selection, so you don't have to re-enter them each visit.",
				"ทางเลือก",
				"Optional",
				false
			],
			[
				"คุกกี้วิเคราะห์",
				"Analytics Cookies",
				"ช่วยให้เราเข้าใจวิธีที่ผู้เข้าชมใช้แพลตฟอร์มโดยเก็บสถิติแบบไม่ระบุตัวตนเพื่อปรับปรุงบริการ",
				"Help us understand how visitors interact with the Platform by collecting anonymous usage statistics to improve our services.",
				"ทางเลือก",
				"Optional",
				false
			],
			[
				"คุกกี้การตลาด",
				"Marketing Cookies",
				"ใช้ติดตามผู้เข้าชมข้ามเว็บไซต์เพื่อแสดงโฆษณาที่ตรงกับความสนใจของคุณ",
				"Used to track visitors across websites to display relevant and engaging advertisements based on your interests.",
				"ทางเลือก",
				"Optional",
				false
			]
		].map(([name, nameEn, desc, descEn, badge, badgeEn, required]) => ({
			name,
			nameEn,
			desc,
			descEn,
			badge,
			badgeEn,
			required
		}));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-10 border-b border-[#0F2747]/10 pb-8"><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "cookie",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("ทางกฎหมาย", "Legal"))}</span><h1 class="mt-4 font-heading text-3xl font-extrabold leading-[1.3] tracking-tight text-ink lg:text-5xl">${ssrInterpolate(unref(tr)("นโยบายคุกกี้", "Cookie Policy"))}</h1><p class="mt-3 text-sm text-muted">${ssrInterpolate(unref(tr)("อัปเดตล่าสุด: 1 มกราคม 2026", "Last updated: January 1, 2026"))}</p></section><article class="mx-auto max-w-3xl space-y-8"><!--[-->`);
			ssrRenderList(unref(sections), (s, i) => {
				_push(`<section><h2 class="flex items-baseline gap-3 font-heading text-xl font-bold text-ink"><span class="text-primary">${ssrInterpolate(i + 1)}.</span> ${ssrInterpolate(unref(tr)(s.title, s.titleEn))}</h2><p class="mt-3 text-sm leading-[1.9] text-muted">${ssrInterpolate(unref(tr)(s.body, s.bodyEn))}</p></section>`);
			});
			_push(`<!--]--></article><section class="mx-auto mt-12 max-w-3xl"><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink">${ssrInterpolate(unref(tr)("ประเภทคุกกี้ที่เราใช้", "Types of Cookies We Use"))}</h2><div class="mt-6 grid gap-4 sm:grid-cols-2"><!--[-->`);
			ssrRenderList(unref(types), (t) => {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm"><div class="flex items-center justify-between"><h3 class="font-heading text-base font-bold text-ink">${ssrInterpolate(unref(tr)(t.name, t.nameEn))}</h3><span class="${ssrRenderClass(["rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide", t.required ? "bg-primary text-white" : "border border-[#0F2747]/15 bg-surface text-muted"])}">${ssrInterpolate(unref(tr)(t.badge, t.badgeEn))}</span></div><p class="mt-3 text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)(t.desc, t.descEn))}</p></div>`);
			});
			_push(`<!--]--></div></section><section class="mx-auto mt-12 max-w-3xl rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm"><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("สำหรับคำถามเกี่ยวกับคุกกี้ ติดต่อเราได้ที่", "For cookie-related questions, contact us at"))} `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "font-semibold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("ติดต่อเรา", "Contact us"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("ติดต่อเรา", "Contact us")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/cookies.vue
var _sfc_setup = cookies_vue_vue_type_script_setup_true_lang_default.setup;
cookies_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cookies.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var cookies_default = cookies_vue_vue_type_script_setup_true_lang_default;

export { cookies_default as default };
//# sourceMappingURL=cookies-CL7Ldrj8.mjs.map
