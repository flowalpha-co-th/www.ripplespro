import { _ as _plugin_vue_export_helper_default, b as useLocale, N as NuxtLink } from '../virtual/entry.mjs';
import { G as GridOverlay_default } from './GridOverlay-jVGDbNDU.mjs';
import { A as AppSidebar_default, M as MobileTopbar_default, C as CookieConsent_default, u as useCookieConsent, S as SocialLinks_default } from './CookieConsent-DVyeNwt6.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { mergeProps, defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import './notifications-DCWQgz_X.mjs';
import './notifications-8TgrgI_R.mjs';

//#region app/components/layout/AppFooter.vue?vue&type=script&setup=true&lang.ts
var AppFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useCookieConsent();
		const cols = [
			{
				title: "สำหรับ Creator",
				titleEn: "For Creators",
				links: [
					{
						label: "ค้นหาแคมเปญ",
						labelEn: "Find campaigns",
						to: "/login"
					},
					{
						label: "วิธีการทำงาน",
						labelEn: "How it works",
						to: "/services"
					},
					{
						label: "สมัครสมาชิก",
						labelEn: "Sign up",
						to: "/register"
					},
					{
						label: "เข้าสู่ระบบ",
						labelEn: "Sign in",
						to: "/login"
					}
				]
			},
			{
				title: "บริษัท",
				titleEn: "Company",
				links: [
					{
						label: "เกี่ยวกับเรา",
						labelEn: "About us",
						to: "/about"
					},
					{
						label: "บริการ",
						labelEn: "Services",
						to: "/services"
					},
					{
						label: "ติดต่อเรา",
						labelEn: "Contact",
						to: "/contact"
					}
				]
			},
			{
				title: "ช่วยเหลือ",
				titleEn: "Help",
				links: [
					{
						label: "คำถามที่พบบ่อย",
						labelEn: "FAQ",
						to: "/faq"
					},
					{
						label: "เงื่อนไขการใช้บริการ",
						labelEn: "Terms of Service",
						to: "/terms"
					},
					{
						label: "นโยบายความเป็นส่วนตัว",
						labelEn: "Privacy Policy",
						to: "/privacy"
					},
					{
						label: "นโยบายคุกกี้",
						labelEn: "Cookie Policy",
						to: "/cookies"
					}
				]
			}
		];
		const isDev = computed(() => false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SocialLinks = SocialLinks_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-20 border-t border-[#0F2747]/10 pt-12 lg:mt-28" }, _attrs))}><div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div class="sm:col-span-2 lg:col-span-1"><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-20"><p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)("Marketplace KOL & Influencer", "The modern KOL & Influencer"))}<br>${ssrInterpolate(unref(tr)("ยุคใหม่ — สำหรับแบรนด์และ creator ในประเทศไทย", "marketplace — for brands and creators in Thailand"))}</p><div class="mt-5">`);
			_push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
			_push(`</div></div><!--[-->`);
			ssrRenderList(cols, (col) => {
				_push(`<div><p class="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">${ssrInterpolate(unref(tr)(col.title, col.titleEn))}</p><ul class="space-y-2.5"><!--[-->`);
				ssrRenderList(col.links, (link) => {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: link.to,
						class: "text-sm text-muted transition hover:text-primary"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(tr)(link.label, link.labelEn))}`);
							else return [createTextVNode(toDisplayString(unref(tr)(link.label, link.labelEn)), 1)];
						}),
						_: 2
					}, _parent));
					_push(`</li>`);
				});
				_push(`<!--]--></ul></div>`);
			});
			_push(`<!--]--></div><div class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#0F2747]/10 py-7 sm:flex-row"><p class="text-[11px] text-[#5B6B82]/60">© 2026 Ripples · ${ssrInterpolate(unref(tr)("สงวนลิขสิทธิ์", "All rights reserved"))}</p><div class="flex items-center gap-4"><button type="button" class="text-[11px] font-semibold text-[#5B6B82]/70 transition hover:text-primary">${ssrInterpolate(unref(tr)("ตั้งค่าคุกกี้", "Cookie settings"))}</button>`);
			if (unref(isDev)) _push(ssrRenderComponent(_component_NuxtLink, {
				to: "/docs",
				class: "text-[11px] font-semibold text-[#5B6B82]/70 transition hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("เอกสารทีม", "Team docs"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("เอกสารทีม", "Team docs")), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`<p class="text-[11px] text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)", "Prakit Holdings Public Company Limited"))}</p></div></div></footer>`);
		};
	}
});
//#endregion
//#region app/components/layout/AppFooter.vue
var _sfc_setup$1 = AppFooter_vue_vue_type_script_setup_true_lang_default.setup;
AppFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppFooter.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var AppFooter_default = Object.assign(AppFooter_vue_vue_type_script_setup_true_lang_default, { __name: "AppFooter" });
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_GridOverlay = GridOverlay_default;
	const _component_AppSidebar = AppSidebar_default;
	const _component_MobileTopbar = MobileTopbar_default;
	const _component_AppFooter = AppFooter_default;
	const _component_CookieConsent = CookieConsent_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen overflow-x-hidden bg-surface font-sans text-ink antialiased" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_GridOverlay, null, null, _parent));
	_push(ssrRenderComponent(_component_AppSidebar, { mode: "public" }, null, _parent));
	_push(ssrRenderComponent(_component_MobileTopbar, { mode: "public" }, null, _parent));
	_push(`<div class="relative lg:pl-72"><main class="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
	_push(`</main></div>`);
	_push(ssrRenderComponent(_component_CookieConsent, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };
//# sourceMappingURL=default-0TgIHv6H.mjs.map
