import { b as useLocale, a as useHead$1, I as Icon_default, N as NuxtLink } from '../virtual/entry.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

//#region app/pages/docs/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("เอกสารสำหรับทีม — Ripples", "Team Docs — Ripples") }));
		const docs = [
			{
				to: "/docs/design-system",
				icon: "swatch-book",
				title: "Design System",
				titleEn: "Design System",
				desc: "โทเคนสี ตัวอักษร ระยะห่าง และแกลเลอรีคอมโพเนนต์ทั้งหมดในภาษาดีไซน์ v4",
				descEn: "Color tokens, typography, spacing, and the full component gallery in the v4 design language."
			},
			{
				to: "/docs/email-templates",
				icon: "mail",
				title: "โครง Email Template",
				titleEn: "Email templates",
				desc: "ตัวอย่างอีเมลแบรนด์ทุกเหตุการณ์ — OTP, อัปเดต consent, การจ่ายเงิน และตัวอย่างกันสแปม",
				descEn: "Branded email mockups for every event — OTP, consent updates, payments, and anti-spam examples."
			},
			{
				to: "/docs/notifications-spec",
				icon: "list-checks",
				title: "Notification Spec",
				titleEn: "Notification spec",
				desc: "เมทริกซ์การแจ้งเตือน (เหตุการณ์ × web/email/บังคับ/ลิงก์) พร้อมกฎกันสแปม",
				descEn: "Notification matrix (event × web/email/mandatory/link) plus anti-spam rules."
			},
			{
				to: "/docs/profile-spec",
				icon: "clipboard-list",
				title: "Profile Spec",
				titleEn: "Profile spec",
				desc: "รายการฟิลด์โปรไฟล์ (กรอกเอง / ซิงก์จาก API / แอดมินตั้ง), การตรวจสอบ, สถานะ และ edge cases",
				descEn: "Profile field inventory (self-entered / API-synced / admin-set), validation, states, and edge cases."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-10"><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "file-text",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("เอกสารสำหรับทีม", "Team Docs"))}</span><h1 class="mt-4 font-heading text-3xl font-extrabold leading-[1.3] tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("เอกสารอ้างอิง & เทมเพลต", "Reference docs & templates"))}</h1><p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted lg:text-base">${ssrInterpolate(unref(tr)("เอกสารสเปกและเทมเพลตสำหรับทีม/ลูกค้าตรวจสอบยืนยัน — ไม่ใช่หน้าใช้งานจริงของครีเอเตอร์", "Spec documents and templates for the team/client to review and confirm — not creator-facing app screens."))}</p></section><section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			ssrRenderList(docs, (d) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: d.to,
					to: d.to,
					class: "group flex flex-col gap-3 rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_40%)]"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"${_scopeId}>`);
							_push(ssrRenderComponent(_component_Icon, {
								name: d.icon,
								class: "h-6 w-6 text-primary"
							}, null, _parent, _scopeId));
							_push(`</div>`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "arrow-up-right",
								class: "h-4 w-4 text-[#5B6B82]/40 transition group-hover:text-primary"
							}, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><p class="font-heading text-base font-bold text-ink"${_scopeId}>${ssrInterpolate(unref(tr)(d.title, d.titleEn))}</p><p class="mt-1.5 text-sm leading-relaxed text-muted"${_scopeId}>${ssrInterpolate(unref(tr)(d.desc, d.descEn))}</p></div>`);
						} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", { class: "flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10" }, [createVNode(_component_Icon, {
							name: d.icon,
							class: "h-6 w-6 text-primary"
						}, null, 8, ["name"])]), createVNode(_component_Icon, {
							name: "arrow-up-right",
							class: "h-4 w-4 text-[#5B6B82]/40 transition group-hover:text-primary"
						})]), createVNode("div", null, [createVNode("p", { class: "font-heading text-base font-bold text-ink" }, toDisplayString(unref(tr)(d.title, d.titleEn)), 1), createVNode("p", { class: "mt-1.5 text-sm leading-relaxed text-muted" }, toDisplayString(unref(tr)(d.desc, d.descEn)), 1)])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/docs/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var docs_default = index_vue_vue_type_script_setup_true_lang_default;

export { docs_default as default };
//# sourceMappingURL=docs-DKWPltAN.mjs.map
