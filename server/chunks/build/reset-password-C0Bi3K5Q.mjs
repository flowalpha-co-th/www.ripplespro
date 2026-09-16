import { b as useLocale, a as useHead$1, u as useAuthStore, c as useRoute, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { P as PasswordValidateRule_default } from './PasswordValidateRule-CVbwb6Ap.mjs';
import { defineComponent, ref, computed, reactive, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

//#region app/pages/reset-password.vue?vue&type=script&setup=true&lang.ts
var reset_password_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "reset-password",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("ตั้งรหัสผ่านใหม่ — Ripples", "Reset Password — Ripples") }));
		const authStore = useAuthStore();
		useRoute();
		const password = ref("");
		const confirm = ref("");
		const showPw = ref(false);
		const showConfirm = ref(false);
		const done = ref(false);
		const loading = computed(() => authStore.loading);
		const error = ref("");
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
			_push(`<h1 class="text-center font-heading text-2xl font-extrabold text-ink">${ssrInterpolate(unref(tr)("ตั้งรหัสผ่านใหม่", "Reset Password"))}</h1><p class="mt-1 text-center text-sm text-muted">${ssrInterpolate(unref(tr)("กรอกรหัสผ่านใหม่ของคุณ", "Enter your new password"))}</p><form class="mt-7 space-y-4" novalidate><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่านใหม่", "New password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showPw) ? "text" : "password", unref(password), null)}${ssrRenderAttr("type", unref(showPw) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showPw) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ยืนยันรหัสผ่านใหม่", "Confirm new password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showConfirm) ? "text" : "password", unref(confirm), null)}${ssrRenderAttr("type", unref(showConfirm) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showConfirm) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div>`);
			_push(ssrRenderComponent(_component_PasswordValidateRule, {
				password: unref(password),
				"password-requirements": unref(passwordRequirements)
			}, null, _parent));
			if (unref(error)) {
				_push(`<p class="flex items-center gap-1 text-xs font-medium text-red-500">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "alert-circle",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(error))}</p>`);
			} else _push(`<!---->`);
			_push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5 disabled:opacity-60">${ssrInterpolate(unref(loading) ? unref(tr)("กำลังบันทึก...", "Saving...") : unref(tr)("รีเซ็ตรหัสผ่าน", "Reset Password"))}</button></form>`);
			if (unref(done)) {
				_push(`<div class="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check-circle",
					class: "mt-0.5 h-6 w-6 shrink-0 text-primary"
				}, null, _parent));
				_push(`<div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่านสำเร็จ", "Password changed successfully"))}</p><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("ตอนนี้คุณสามารถเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้แล้ว ·", "You can now sign in with your new password ·"))} `);
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
				_push(`</p></div></div>`);
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
//#region app/pages/reset-password.vue
var _sfc_setup = reset_password_vue_vue_type_script_setup_true_lang_default.setup;
reset_password_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var reset_password_default = reset_password_vue_vue_type_script_setup_true_lang_default;

export { reset_password_default as default };
//# sourceMappingURL=reset-password-C0Bi3K5Q.mjs.map
