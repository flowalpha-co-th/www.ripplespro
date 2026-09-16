import { b as useLocale, a as useHead$1, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { t as tintOf, n as notifCats, a as notifMatrix } from './notifications-DCWQgz_X.mjs';
import { u as useNotificationsStore } from './notifications-8TgrgI_R.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

//#region app/pages/portal/notification-settings.vue?vue&type=script&setup=true&lang.ts
var notification_settings_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "notification-settings",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("ตั้งค่าการแจ้งเตือน — Ripples", "Notification settings — Ripples") }));
		const notifications = useNotificationsStore();
		const cats = Object.keys(notifCats);
		function eventCount(cat) {
			return notifMatrix[cat]?.length ?? 0;
		}
		function mandatoryCount(cat) {
			return notifMatrix[cat]?.filter((e) => e.mandatory).length ?? 0;
		}
		function catSubtext(cat) {
			const base = `${eventCount(cat)} ${tr("ประเภทเหตุการณ์", "event types")}`;
			if (notifCats[cat].locked) return `${base} · ${tr("บังคับรับอีเมล เพื่อความปลอดภัยของบัญชี", "email required for account security")}`;
			const m = mandatoryCount(cat);
			return m ? `${base} · ${m} ${tr("รายการบังคับ", "required")}` : base;
		}
		function emailOn(cat) {
			return notifCats[cat].locked ? true : notifications.emailSettings[cat];
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-6">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/notifications",
				class: "mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-muted transition hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-left",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(unref(tr)("กลับไปการแจ้งเตือน", "Back to notifications"))}`);
					} else return [createVNode(_component_Icon, {
						name: "arrow-left",
						class: "h-4 w-4"
					}), createTextVNode(" " + toDisplayString(unref(tr)("กลับไปการแจ้งเตือน", "Back to notifications")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("ตั้งค่าการแจ้งเตือน", "Notification settings"))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("เลือกว่าจะรับอีเมลในหมวดไหนบ้าง — การแจ้งเตือนในเว็บจะแสดงทุกหมวดเสมอ", "Choose which categories you receive emails for — in-app notifications always show every category."))}</p></section><section class="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-[#0F2747]/10 bg-white p-4 text-sm"><span class="flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "monitor",
				class: "h-4 w-4 text-primary"
			}, null, _parent));
			_push(` <b class="text-ink">${ssrInterpolate(unref(tr)("ในเว็บ", "In-app"))}</b> <span class="text-muted">${ssrInterpolate(unref(tr)("— แสดงเสมอ ปิดไม่ได้", "— always on, can’t be turned off"))}</span></span><span class="flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "mail",
				class: "h-4 w-4 text-primary"
			}, null, _parent));
			_push(` <b class="text-ink">${ssrInterpolate(unref(tr)("อีเมล", "Email"))}</b> <span class="text-muted">${ssrInterpolate(unref(tr)("— เปิด/ปิดได้รายหมวด", "— toggle per category"))}</span></span><span class="flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "lock",
				class: "h-4 w-4 text-rose-500"
			}, null, _parent));
			_push(` <span class="text-muted">${ssrInterpolate(unref(tr)("หมวดที่ล็อก = บังคับรับ (ความปลอดภัย/การเงิน)", "Locked categories are required (security/payments)"))}</span></span></section><section class="space-y-3"><!--[-->`);
			ssrRenderList(unref(cats), (cat) => {
				_push(`<div class="flex items-center justify-between gap-4 rounded-2xl border border-[#0F2747]/10 bg-white p-5"><div class="flex min-w-0 items-start gap-3.5"><span class="${ssrRenderClass([
					"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
					unref(tintOf)(cat).bg,
					unref(tintOf)(cat).fg
				])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: unref(notifCats)[cat].icon,
					class: "h-5 w-5"
				}, null, _parent));
				_push(`</span><div class="min-w-0"><p class="flex items-center gap-2 font-bold text-ink">${ssrInterpolate(unref(tr)(unref(notifCats)[cat].label, unref(notifCats)[cat].labelEn))}`);
				if (unref(notifCats)[cat].locked) _push(ssrRenderComponent(_component_Icon, {
					name: "lock",
					class: "h-3.5 w-3.5 text-rose-400"
				}, null, _parent));
				else _push(`<!---->`);
				_push(`</p><p class="mt-0.5 text-xs text-muted">${ssrInterpolate(catSubtext(cat))}</p></div></div><div class="flex items-center gap-2.5 text-xs"><span class="hidden items-center gap-1 text-muted sm:flex">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "mail",
					class: "h-3.5 w-3.5"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)("อีเมล", "Email"))}</span><button type="button"${ssrIncludeBooleanAttr(unref(notifCats)[cat].locked) ? " disabled" : ""} class="${ssrRenderClass([
					"relative h-7 w-12 shrink-0 rounded-full transition",
					emailOn(cat) ? "bg-primary" : "bg-[#0F2747]/15",
					unref(notifCats)[cat].locked ? "cursor-not-allowed opacity-60" : ""
				])}"><span class="${ssrRenderClass(["absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all", emailOn(cat) ? "left-6" : "left-1"])}"></span></button></div></div>`);
			});
			_push(`<!--]--></section><section class="mt-6 rounded-2xl border border-[#0F2747]/10 bg-white p-6"><h2 class="font-heading text-base font-bold text-ink">${ssrInterpolate(unref(tr)("สรุปรวม (Digest) & กันสแปม", "Digest & anti-spam"))}</h2><div class="mt-4 flex items-center justify-between gap-3 rounded-xl bg-surface p-4"><div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("แคมเปญแนะนำ — สรุปรายสัปดาห์", "Recommended campaigns — weekly digest"))}</p><p class="mt-0.5 text-xs text-muted">${ssrInterpolate(unref(tr)("รวมแคมเปญที่ตรง niche ของคุณส่งเป็นอีเมลสัปดาห์ละครั้ง แทนการส่งทีละแคมเปญ", "Bundle campaigns matching your niche into one weekly email instead of sending each one separately."))}</p></div><button type="button" class="${ssrRenderClass(["relative h-7 w-12 shrink-0 rounded-full transition", unref(notifications).digestWeekly ? "bg-primary" : "bg-[#0F2747]/15"])}"><span class="${ssrRenderClass(["absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all", unref(notifications).digestWeekly ? "left-6" : "left-1"])}"></span></button></div><p class="mt-3 text-xs leading-relaxed text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("ℹ️ ระบบจะรวมเหตุการณ์ที่เกิดใกล้กันเป็นอีเมลฉบับเดียว และไม่ส่งซ้ำสำหรับเหตุการณ์เดิมภายในช่วงเวลาสั้น ๆ", "ℹ️ We combine events that happen close together into a single email and avoid resending the same event within a short window."))}</p></section><div class="mt-6 flex justify-end"><button type="button" class="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("บันทึกการตั้งค่า", "Save settings"))}</button></div></main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/notification-settings.vue
var _sfc_setup = notification_settings_vue_vue_type_script_setup_true_lang_default.setup;
notification_settings_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/notification-settings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notification_settings_default = notification_settings_vue_vue_type_script_setup_true_lang_default;

export { notification_settings_default as default };
//# sourceMappingURL=notification-settings-Ml53XRgO.mjs.map
