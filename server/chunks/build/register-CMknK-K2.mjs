import { b as useLocale, a as useHead$1, u as useAuthStore, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { P as PasswordValidateRule_default } from './PasswordValidateRule-CVbwb6Ap.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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

//#region app/pages/register.vue?vue&type=script&setup=true&lang.ts
var register_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "register",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("สมัครสมาชิก — Ripples", "Sign Up — Ripples") }));
		const authStore = useAuthStore();
		const firstName = ref("");
		const lastName = ref("");
		const email = ref("");
		const username = ref("");
		const password = ref("");
		const confirmPassword = ref("");
		const acceptedTerms = ref(false);
		const acceptedMarketing = ref(false);
		const showPw = ref(false);
		const showConfirm = ref(false);
		const passwordRequirements = reactive({
			length: false,
			uppercase: false,
			lowercase: false,
			number: false,
			special: false
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			const _component_PasswordValidateRule = PasswordValidateRule_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full max-w-lg" }, _attrs))}><div class="rounded-2xl border border-[#0F2747]/10 bg-white p-8 shadow-[0_30px_70px_-35px_rgb(45_91_255_/_45%)]">`);
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
			_push(`<h1 class="text-center font-heading text-2xl font-extrabold text-ink">${ssrInterpolate(unref(tr)("สมัครสมาชิก", "Sign Up"))}</h1><p class="mt-1 text-center text-sm text-muted">${ssrInterpolate(unref(tr)("สร้างบัญชีใหม่เพื่อเริ่มต้นเป็น Creator", "Create a new account to start as a Creator"))}</p><form class="mt-7 space-y-4" novalidate><div class="grid gap-4 sm:grid-cols-2"><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ชื่อ", "First name"))}</label><input${ssrRenderAttr("value", unref(firstName))} type="text"${ssrRenderAttr("placeholder", unref(tr)("ชื่อ", "First name"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("นามสกุล", "Last name"))}</label><input${ssrRenderAttr("value", unref(lastName))} type="text"${ssrRenderAttr("placeholder", unref(tr)("นามสกุล", "Last name"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"></div></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("อีเมล", "Email"))}</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="your@email.com" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ชื่อผู้ใช้", "Username"))}</label><input${ssrRenderAttr("value", unref(username))} type="text" placeholder="username" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"><p class="mt-1 text-xs text-muted">${ssrInterpolate(unref(tr)("เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น", "English letters and numbers only"))}</p></div><div class="grid gap-4 sm:grid-cols-2"><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่าน", "Password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showPw) ? "text" : "password", unref(password), null)}${ssrRenderAttr("type", unref(showPw) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showPw) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ยืนยันรหัสผ่าน", "Confirm password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showConfirm) ? "text" : "password", unref(confirmPassword), null)}${ssrRenderAttr("type", unref(showConfirm) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showConfirm) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div></div>`);
			_push(ssrRenderComponent(_component_PasswordValidateRule, {
				password: unref(password),
				"password-requirements": unref(passwordRequirements)
			}, null, _parent));
			_push(`<hr><div class="space-y-1"><label class="flex items-start gap-2 text-xs leading-relaxed text-muted"><input${ssrIncludeBooleanAttr(Array.isArray(unref(acceptedTerms)) ? ssrLooseContain(unref(acceptedTerms), null) : unref(acceptedTerms)) ? " checked" : ""} type="checkbox" class="mt-0.5 h-4 w-4 rounded border-[#0F2747]/20 text-primary"><span>${ssrInterpolate(unref(tr)("ฉันยอมรับ", "I accept the"))} `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/terms",
				class: "font-semibold text-primary hover:underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("ข้อกำหนดและเงื่อนไข", "Terms and Conditions"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("ข้อกำหนดและเงื่อนไข", "Terms and Conditions")), 1)];
				}),
				_: 1
			}, _parent));
			_push(` ${ssrInterpolate(unref(tr)("และ", "and"))} `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/privacy",
				class: "font-semibold text-primary hover:underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("นโยบายความเป็นส่วนตัว", "Privacy Policy"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("นโยบายความเป็นส่วนตัว", "Privacy Policy")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</span></label><label class="flex items-start gap-2 text-xs leading-relaxed text-muted"><input${ssrIncludeBooleanAttr(Array.isArray(unref(acceptedMarketing)) ? ssrLooseContain(unref(acceptedMarketing), null) : unref(acceptedMarketing)) ? " checked" : ""} type="checkbox" class="mt-0.5 h-4 w-4 rounded border-[#0F2747]/20 text-primary"><span>${ssrInterpolate(unref(tr)("ฉันยินยอมรับข่าวสาร/การตลาด", "I agree to receive news and marketing updates"))}</span></label></div>`);
			if (unref(authStore).error) {
				_push(`<p class="flex items-center gap-1 text-xs font-medium text-red-500">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "alert-circle",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(authStore).error)}</p>`);
			} else _push(`<!---->`);
			_push(`<button type="submit"${ssrIncludeBooleanAttr(unref(authStore).loading) ? " disabled" : ""} class="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5 disabled:opacity-60">${ssrInterpolate(unref(authStore).loading ? unref(tr)("กำลังสมัคร...", "Signing up...") : unref(tr)("สมัครสมาชิก", "Sign Up"))}</button></form><p class="mt-6 text-center text-sm text-muted">${ssrInterpolate(unref(tr)("มีบัญชีแล้ว?", "Already have an account?"))} `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/login",
				class: "font-semibold text-primary hover:underline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("เข้าสู่ระบบ", "Sign In"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("เข้าสู่ระบบ", "Sign In")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><p class="mt-6 text-center">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "text-sm text-[#5B6B82]/70 transition hover:text-ink"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("← กลับหน้าหลัก", "← Back to home"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("← กลับหน้าหลัก", "← Back to home")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></div>`);
		};
	}
});
//#endregion
//#region app/pages/register.vue
var _sfc_setup = register_vue_vue_type_script_setup_true_lang_default.setup;
register_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var register_default = register_vue_vue_type_script_setup_true_lang_default;

export { register_default as default };
//# sourceMappingURL=register-CMknK-K2.mjs.map
