import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/components/layout/GridOverlay.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({
		class: "pointer-events-none fixed inset-0 opacity-[0.04]",
		style: {
			"background-image": "linear-gradient(#2d5bff 1px, transparent 1px), linear-gradient(90deg, #2d5bff 1px, transparent 1px)",
			"background-size": "44px 44px"
		}
	}, _attrs))}></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/GridOverlay.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var GridOverlay_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "GridOverlay" });

export { GridOverlay_default as G };
//# sourceMappingURL=GridOverlay-jVGDbNDU.mjs.map
