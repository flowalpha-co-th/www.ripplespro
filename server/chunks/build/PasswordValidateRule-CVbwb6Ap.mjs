import { I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';

//#region app/components/common/PasswordValidateRule.vue?vue&type=script&setup=true&lang.ts
var PasswordValidateRule_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PasswordValidateRule",
	__ssrInlineRender: true,
	props: {
		password: {},
		passwordRequirements: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xs grid grid-cols-1 md:grid-cols-2 gap-1" }, _attrs))}><div class="text-gray-500 flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: __props.passwordRequirements.length ? "check" : "x-mark",
				class: [__props.passwordRequirements.length ? "text-green-500" : "text-gray-400", "w-4 h-4"]
			}, null, _parent));
			_push(`<span class="${ssrRenderClass(__props.passwordRequirements.length ? "text-green-600 font-medium" : "text-gray-500")}"> อย่างน้อย 8 ตัวอักษร </span></div><div class="text-gray-500 flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: __props.passwordRequirements.uppercase ? "check" : "x-mark",
				class: [__props.passwordRequirements.uppercase ? "text-green-500" : "text-gray-400", "w-4 h-4"]
			}, null, _parent));
			_push(`<span class="${ssrRenderClass(__props.passwordRequirements.uppercase ? "text-green-600 font-medium" : "text-gray-500")}"> ตัวพิมพ์ใหญ่ </span></div><div class="text-gray-500 flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: __props.passwordRequirements.lowercase ? "check" : "x-mark",
				class: [__props.passwordRequirements.lowercase ? "text-green-500" : "text-gray-400", "w-4 h-4"]
			}, null, _parent));
			_push(`<span class="${ssrRenderClass(__props.passwordRequirements.lowercase ? "text-green-600 font-medium" : "text-gray-500")}"> ตัวพิมพ์เล็ก </span></div><div class="text-gray-500 flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: __props.passwordRequirements.number ? "check" : "x-mark",
				class: [__props.passwordRequirements.number ? "text-green-500" : "text-gray-400", "w-4 h-4"]
			}, null, _parent));
			_push(`<span class="${ssrRenderClass(__props.passwordRequirements.number ? "text-green-600 font-medium" : "text-gray-500")}"> ตัวเลข </span></div><div class="text-gray-500 flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: __props.passwordRequirements.special ? "check" : "x-mark",
				class: [__props.passwordRequirements.special ? "text-green-500" : "text-gray-400", "w-4 h-4"]
			}, null, _parent));
			_push(`<span class="${ssrRenderClass(__props.passwordRequirements.special ? "text-green-600 font-medium" : "text-gray-500")}"> อักขระพิเศษ (! @ # \$ % ^ &amp; *) </span></div></div>`);
		};
	}
});
//#endregion
//#region app/components/common/PasswordValidateRule.vue
var _sfc_setup = PasswordValidateRule_vue_vue_type_script_setup_true_lang_default.setup;
PasswordValidateRule_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PasswordValidateRule.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PasswordValidateRule_default = Object.assign(PasswordValidateRule_vue_vue_type_script_setup_true_lang_default, { __name: "PasswordValidateRule" });

export { PasswordValidateRule_default as P };
//# sourceMappingURL=PasswordValidateRule-CVbwb6Ap.mjs.map
