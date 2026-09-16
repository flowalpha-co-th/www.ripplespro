import { b as useLocale, a as useHead$1, u as useAuthStore, I as Icon_default } from '../virtual/entry.mjs';
import { u as useNotificationsStore } from './notifications-8TgrgI_R.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/portal/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("แดชบอร์ด — Ripples", "Dashboard — Ripples") }));
		const notifications = useNotificationsStore();
		const authStore = useAuthStore();
		const user = computed(() => authStore.currentUser);
		const displayName = computed(() => {
			return user.value ? `${user.value.influencer?.first_name || ""}`.trim() : "";
		});
		`${user.value?.influencer?.wallet_balance}`;
		computed(() => notifications.items.slice(0, 4));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-8"><h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)(`ยินดีต้อนรับกลับ, ${unref(displayName)}!`, `Welcome back, ${unref(displayName)}!`))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("สรุปกิจกรรมในบัญชีของคุณวันนี้", "Here's a summary of your account activity today"))}</p></section><div class="rounded-xl border border-primary/30 bg-primary/5 p-8"><div class="mx-auto flex max-w-md flex-col items-center text-center"><div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "alert-circle",
				class: "h-10 w-10 text-primary"
			}, null, _parent));
			_push(`</div><h1 class="mb-3 font-heading text-2xl font-extrabold text-ink">${ssrInterpolate(unref(tr)("กำลังอยู่ในระหว่างการพัฒนา", "Under Development"))}</h1><p class="mb-8 text-sm text-muted">${ssrInterpolate(unref(tr)("ระบบในส่วนนี้ยังไม่เปิดให้บริการอย่างเป็นทางการ ทีมงานกำลังเร่งพัฒนาฟีเจอร์นี้ให้คุณใช้งานเร็วๆ นี้ ขออภัยในความไม่สะดวกครับ", "This section is not yet officially available. Our team is working hard to bring this feature to you soon. We apologize for the inconvenience."))}</p></div></div></main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-Bp4FZh2T.mjs.map
