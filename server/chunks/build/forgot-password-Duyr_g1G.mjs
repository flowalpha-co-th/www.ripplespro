import { b as useLocale, a as useHead$1, u as useAuthStore, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

//#region app/pages/forgot-password.vue?vue&type=script&setup=true&lang.ts
var forgot_password_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "forgot-password",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("ลืมรหัสผ่าน — Ripples", "Forgot Password — Ripples") }));
		const authStore = useAuthStore();
		const email = ref("");
		const sent = ref(false);
		const loading = computed(() => authStore.loading);
		const error = ref("");
		computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full max-w-md" }, _attrs))}><div class="rounded-2xl border border-[#0F2747]/10 bg-white p-8 shadow-[0_30px_70px_-35px_rgb(45_91_255_/_45%)]">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "mb-6 block"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="mx-auto h-20"${_scopeId}>`);
					else return [createVNode("img", {
						src: _virtual_public__2Fripples_logo_default,
						alt: "Ripples",
						class: "mx-auto h-20"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="text-center font-heading text-2xl font-extrabold text-ink">${ssrInterpolate(unref(tr)("ลืมรหัสผ่าน", "Forgot Password"))}</h1><p class="mt-1 text-center text-sm text-muted">${ssrInterpolate(unref(tr)("กรอกอีเมลของคุณเพื่อรับลิงก์รีเซ็ตรหัสผ่าน", "Enter your email to receive a password reset link"))}</p><form class="mt-7 space-y-4" novalidate><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("อีเมล", "Email"))}</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="your@email.com" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50">`);
			if (unref(error)) {
				_push(`<p class="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "alert-circle",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(error))}</p>`);
			} else _push(`<!---->`);
			_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5 disabled:opacity-60">${ssrInterpolate(unref(loading) ? unref(tr)("กำลังส่ง...", "Sending...") : unref(tr)("ส่งลิงก์รีเซ็ต", "Send reset link"))}</button></form>`);
			if (unref(sent)) {
				_push(`<div class="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check-circle",
					class: "mt-0.5 h-6 w-6 shrink-0 text-primary"
				}, null, _parent));
				_push(`<div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("ส่งลิงก์รีเซ็ตรหัสผ่านแล้ว", "Password reset link sent"))}</p><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("กรุณาตรวจสอบกล่องอีเมลของคุณ", "Please check your inbox"))}</p></div></div>`);
			} else _push(`<!---->`);
			_push(`<p class="mt-6 text-center text-sm text-muted">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/login",
				class: "font-semibold text-primary hover:underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("← กลับไปเข้าสู่ระบบ", "← Back to sign in"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("← กลับไปเข้าสู่ระบบ", "← Back to sign in")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/forgot-password.vue
var _sfc_setup = forgot_password_vue_vue_type_script_setup_true_lang_default.setup;
forgot_password_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var forgot_password_default = forgot_password_vue_vue_type_script_setup_true_lang_default;

export { forgot_password_default as default };
//# sourceMappingURL=forgot-password-Duyr_g1G.mjs.map
