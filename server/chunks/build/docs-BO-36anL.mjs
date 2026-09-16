import { b as useLocale, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { G as GridOverlay_default } from './GridOverlay-jVGDbNDU.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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

//#region app/layouts/docs.vue?vue&type=script&setup=true&lang.ts
var docs_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "docs",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_GridOverlay = GridOverlay_default;
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen overflow-x-hidden bg-[#E9EEF6] font-sans text-ink antialiased" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_GridOverlay, null, null, _parent));
			_push(`<header class="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-[#0F2747]/10 bg-white/90 px-6 py-4 backdrop-blur-md lg:px-10">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/docs",
				class: "flex items-center gap-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-12"${_scopeId}><span class="hidden rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary sm:inline"${_scopeId}>${ssrInterpolate(unref(tr)("เอกสารสำหรับทีม", "Team Docs"))}</span>`);
					else return [createVNode("img", {
						src: _virtual_public__2Fripples_logo_default,
						alt: "Ripples",
						class: "h-12"
					}), createVNode("span", { class: "hidden rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary sm:inline" }, toDisplayString(unref(tr)("เอกสารสำหรับทีม", "Team Docs")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex items-center gap-2.5">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/docs",
				class: "inline-flex items-center gap-1.5 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm transition hover:border-primary/40 hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "layout-grid",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(unref(tr)("ดัชนีเอกสาร", "Docs index"))}`);
					} else return [createVNode(_component_Icon, {
						name: "layout-grid",
						class: "h-4 w-4"
					}), createTextVNode(" " + toDisplayString(unref(tr)("ดัชนีเอกสาร", "Docs index")), 1)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-primaryDark"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-left",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(unref(tr)("กลับเข้าแอป", "Back to app"))}`);
					} else return [createVNode(_component_Icon, {
						name: "arrow-left",
						class: "h-4 w-4"
					}), createTextVNode(" " + toDisplayString(unref(tr)("กลับเข้าแอป", "Back to app")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></header><main class="relative mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div>`);
		};
	}
});
//#endregion
//#region app/layouts/docs.vue
var _sfc_setup = docs_vue_vue_type_script_setup_true_lang_default.setup;
docs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/docs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var docs_default = docs_vue_vue_type_script_setup_true_lang_default;

export { docs_default as default };
//# sourceMappingURL=docs-BO-36anL.mjs.map
