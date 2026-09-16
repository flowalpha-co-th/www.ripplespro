import { b as useLocale, a as useHead$1, u as useAuthStore, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderDynamicModel, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/portal/change-password.vue?vue&type=script&setup=true&lang.ts
var change_password_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "change-password",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("เปลี่ยนรหัสผ่าน — Ripples", "Change Password — Ripples") }));
		useAuthStore();
		const oldPw = ref("");
		const newPw = ref("");
		const confirmPw = ref("");
		const showOld = ref(false);
		const showNew = ref(false);
		const showConfirm = ref(false);
		const error = ref("");
		const success = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-8">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/profile",
				class: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-left",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(unref(tr)("กลับไปโปรไฟล์", "Back to profile"))}`);
					} else return [createVNode(_component_Icon, {
						name: "arrow-left",
						class: "h-4 w-4"
					}), createTextVNode(" " + toDisplayString(unref(tr)("กลับไปโปรไฟล์", "Back to profile")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่าน", "Change Password"))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("อัปเดตรหัสผ่านของคุณเพื่อความปลอดภัย", "Update your password to keep your account secure"))}</p></section><div class="rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm lg:p-8"><form class="space-y-5" novalidate><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่านเดิม", "Current password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showOld) ? "text" : "password", unref(oldPw), null)} required${ssrRenderAttr("type", unref(showOld) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showOld) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("รหัสผ่านใหม่", "New password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showNew) ? "text" : "password", unref(newPw), null)} required${ssrRenderAttr("type", unref(showNew) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showNew) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div><p class="mt-1.5 text-xs text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("อย่างน้อย 8 ตัวอักษร ประกอบด้วยตัวอักษรและตัวเลข", "At least 8 characters, including letters and numbers"))}</p></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ยืนยันรหัสผ่านใหม่", "Confirm new password"))}</label><div class="relative"><input${ssrRenderDynamicModel(unref(showConfirm) ? "text" : "password", unref(confirmPw), null)} required${ssrRenderAttr("type", unref(showConfirm) ? "text" : "password")} placeholder="••••••••" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 pr-11 text-sm outline-none transition focus:border-primary/50"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6B82]/60 transition hover:text-ink">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: unref(showConfirm) ? "eye-off" : "eye",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div>`);
			if (unref(error)) _push(`<p class="text-sm font-semibold text-red-600">${ssrInterpolate(unref(error))}</p>`);
			else _push(`<!---->`);
			_push(`<div class="flex gap-3 pt-2"><button type="submit" class="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "lock",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่าน", "Change Password"))}</button>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/profile",
				class: "inline-flex items-center rounded-lg border border-[#0F2747]/10 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-primary/40 hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("ยกเลิก", "Cancel"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("ยกเลิก", "Cancel")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></form>`);
			if (unref(success)) {
				_push(`<div class="mt-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check-circle",
					class: "h-6 w-6 shrink-0 text-primary"
				}, null, _parent));
				_push(`<div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("เปลี่ยนรหัสผ่านสำเร็จ", "Password changed successfully"))}</p><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("รหัสผ่านของคุณได้รับการอัปเดตแล้ว", "Your password has been updated"))}</p></div></div>`);
			} else _push(`<!---->`);
			_push(`</div></main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/change-password.vue
var _sfc_setup = change_password_vue_vue_type_script_setup_true_lang_default.setup;
change_password_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/change-password.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var change_password_default = change_password_vue_vue_type_script_setup_true_lang_default;

export { change_password_default as default };
//# sourceMappingURL=change-password-DIxwAoJW.mjs.map
