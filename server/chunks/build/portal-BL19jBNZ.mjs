import { u as useAuthStore, g as useApi, b as useLocale, I as Icon_default } from '../virtual/entry.mjs';
import { G as GridOverlay_default } from './GridOverlay-jVGDbNDU.mjs';
import { A as AppSidebar_default, M as MobileTopbar_default, C as CookieConsent_default } from './CookieConsent-DVyeNwt6.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
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
import './_virtual_public-ByjhzWq2.mjs';

//#region app/layouts/portal.vue?vue&type=script&setup=true&lang.ts
var portal_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "portal",
	__ssrInlineRender: true,
	setup(__props) {
		const auth = useAuthStore();
		useApi();
		const { tr } = useLocale();
		const isResending = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_GridOverlay = GridOverlay_default;
			const _component_AppSidebar = AppSidebar_default;
			const _component_MobileTopbar = MobileTopbar_default;
			const _component_Icon = Icon_default;
			const _component_CookieConsent = CookieConsent_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen overflow-x-hidden bg-surface font-sans text-ink antialiased" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_GridOverlay, null, null, _parent));
			_push(ssrRenderComponent(_component_AppSidebar, { mode: "portal" }, null, _parent));
			_push(ssrRenderComponent(_component_MobileTopbar, { mode: "portal" }, null, _parent));
			_push(`<div class="relative lg:pl-72">`);
			if (unref(auth).user && unref(auth).user.email_verified === false) {
				_push(`<div class="lg:left-[18rem] lg:absolute z-50 top-0 inset-x-0 mx-auto bg-amber-100 border border-amber-200 shadow-sm text-amber-700 px-4 py-3 flex items-center justify-between"><div class="flex items-center gap-3">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "alert-triangle",
					class: "h-5 w-5 flex-shrink-0"
				}, null, _parent));
				_push(`<p class="text-sm flex flex-col lg:flex-row lg:gap-2 gap-0.5"><span class="font-semibold">${ssrInterpolate(unref(tr)("อีเมลยังไม่ได้รับการยืนยัน", "Email not verified."))}</span><span>${ssrInterpolate(unref(tr)("โปรดตรวจสอบอีเมลของคุณและยืนยันให้เรียบร้อย", "Please check your inbox and verify your email."))}</span></p></div><button${ssrIncludeBooleanAttr(unref(isResending)) ? " disabled" : ""} class="text-sm font-medium underline hover:text-amber-700 disabled:opacity-50 whitespace-nowrap ml-4 flex items-center gap-1">`);
				if (unref(isResending)) _push(ssrRenderComponent(_component_Icon, {
					name: "loader-circle",
					class: "h-4 w-4 animate-spin"
				}, null, _parent));
				else _push(`<!---->`);
				_push(` ${ssrInterpolate(unref(isResending) ? unref(tr)("กำลังส่ง...", "Sending...") : unref(tr)("ส่งอีเมลยืนยันอีกครั้ง", "Resend Email"))}</button></div>`);
			} else _push(`<!---->`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_CookieConsent, null, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/layouts/portal.vue
var _sfc_setup = portal_vue_vue_type_script_setup_true_lang_default.setup;
portal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var portal_default = portal_vue_vue_type_script_setup_true_lang_default;

export { portal_default as default };
//# sourceMappingURL=portal-BL19jBNZ.mjs.map
