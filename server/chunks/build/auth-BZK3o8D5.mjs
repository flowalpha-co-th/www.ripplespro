import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { G as GridOverlay_default } from './GridOverlay-jVGDbNDU.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

//#region app/layouts/auth.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_GridOverlay = GridOverlay_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen items-center justify-center overflow-x-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 px-4 py-12 font-sans text-ink antialiased" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_GridOverlay, null, null, _parent));
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var auth_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth_default as default };
//# sourceMappingURL=auth-BZK3o8D5.mjs.map
