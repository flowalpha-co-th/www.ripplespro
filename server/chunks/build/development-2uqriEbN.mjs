import { b as useLocale, a as useHead$1, I as Icon_default, N as NuxtLink } from '../virtual/entry.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/portal/development.vue?vue&type=script&setup=true&lang.ts
var development_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "development",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("กำลังพัฒนา — Ripples", "Under Development — Ripples") }));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center mx-auto w-full max-w-6xl px-6 py-20 lg:px-12" }, _attrs))}><div class="flex max-w-md flex-col items-center text-center"><div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "alert-circle",
				class: "h-10 w-10 text-primary"
			}, null, _parent));
			_push(`</div><h1 class="mb-3 font-heading text-2xl font-extrabold text-ink">${ssrInterpolate(unref(tr)("กำลังอยู่ในระหว่างการพัฒนา", "Under Development"))}</h1><p class="mb-8 text-sm text-muted">${ssrInterpolate(unref(tr)("ระบบในส่วนนี้ยังไม่เปิดให้บริการอย่างเป็นทางการ ทีมงานกำลังเร่งพัฒนาฟีเจอร์นี้ให้คุณใช้งานเร็วๆ นี้ ขออภัยในความไม่สะดวกครับ", "This section is not yet officially available. Our team is working hard to bring this feature to you soon. We apologize for the inconvenience."))}</p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/dashboard",
				class: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primaryDark"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-left",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(unref(tr)("กลับหน้าแดชบอร์ด", "Back to Dashboard"))}`);
					} else return [createVNode(_component_Icon, {
						name: "arrow-left",
						class: "h-4 w-4"
					}), createTextVNode(" " + toDisplayString(unref(tr)("กลับหน้าแดชบอร์ด", "Back to Dashboard")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/development.vue
var _sfc_setup = development_vue_vue_type_script_setup_true_lang_default.setup;
development_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/development.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var development_default = development_vue_vue_type_script_setup_true_lang_default;

export { development_default as default };
//# sourceMappingURL=development-2uqriEbN.mjs.map
