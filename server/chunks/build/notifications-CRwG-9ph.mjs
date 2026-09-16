import { b as useLocale, a as useHead$1, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { n as notifCats, t as tintOf } from './notifications-DCWQgz_X.mjs';
import { u as useNotificationsStore } from './notifications-8TgrgI_R.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

//#region app/pages/portal/notifications.vue?vue&type=script&setup=true&lang.ts
var notifications_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "notifications",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("การแจ้งเตือน — Ripples", "Notifications — Ripples") }));
		const notifications = useNotificationsStore();
		const activeFilter = ref("all");
		const chips = computed(() => [{
			key: "all",
			label: "ทั้งหมด",
			labelEn: "All",
			icon: "inbox"
		}, ...Object.keys(notifCats).map((k) => ({
			key: k,
			label: notifCats[k].short,
			labelEn: notifCats[k].shortEn,
			icon: notifCats[k].icon
		}))]);
		function chipCount(key) {
			return key === "all" ? notifications.items.length : notifications.countByCategory(key);
		}
		const filtered = computed(() => notifications.items.filter((n) => activeFilter.value === "all" || n.cat === activeFilter.value));
		const groupOrder = [
			"วันนี้",
			"เมื่อวาน",
			"ก่อนหน้านี้"
		];
		function groupOf(n) {
			if (/นาที|ชม\.|วันนี้/.test(n.ago)) return "วันนี้";
			if (/เมื่อวาน/.test(n.ago)) return "เมื่อวาน";
			return "ก่อนหน้านี้";
		}
		const groupLabelEn = {
			"วันนี้": "Today",
			"เมื่อวาน": "Yesterday",
			"ก่อนหน้านี้": "Earlier"
		};
		const groups = computed(() => groupOrder.map((label) => ({
			label,
			labelEn: groupLabelEn[label],
			items: filtered.value.filter((n) => groupOf(n) === label)
		})).filter((g) => g.items.length));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("การแจ้งเตือน", "Notifications"))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(notifications).unreadCount)} ${ssrInterpolate(unref(tr)("รายการที่ยังไม่ได้อ่าน", "unread"))}</p></div><div class="flex items-center gap-2.5"><button type="button" class="shrink-0 rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2.5 text-xs font-bold text-primary shadow-sm transition hover:bg-primary/5">${ssrInterpolate(unref(tr)("อ่านทั้งหมด", "Mark all read"))}</button>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/notification-settings",
				title: unref(tr)("ตั้งค่าการแจ้งเตือน", "Notification settings"),
				class: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#0F2747]/10 bg-white text-muted shadow-sm transition hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_Icon, {
						name: "settings",
						class: "h-4 w-4"
					}, null, _parent, _scopeId));
					else return [createVNode(_component_Icon, {
						name: "settings",
						class: "h-4 w-4"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="mb-6 flex flex-wrap gap-2"><!--[-->`);
			ssrRenderList(unref(chips), (c) => {
				_push(`<button type="button" class="${ssrRenderClass(["inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold transition", unref(activeFilter) === c.key ? "bg-primary text-white shadow-sm" : "border border-[#0F2747]/10 bg-white text-muted hover:text-primary"])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: c.icon,
					class: "h-4 w-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)(c.label, c.labelEn))} <span class="${ssrRenderClass(["rounded-full px-1.5 text-[11px]", unref(activeFilter) === c.key ? "bg-white/25 text-white" : "bg-surface text-muted"])}">${ssrInterpolate(chipCount(c.key))}</span></button>`);
			});
			_push(`<!--]--></section>`);
			if (unref(groups).length) {
				_push(`<section><!--[-->`);
				ssrRenderList(unref(groups), (g) => {
					_push(`<!--[--><div class="mb-3 mt-7 flex items-center gap-3 first:mt-0"><span class="text-xs font-bold uppercase tracking-wider text-[#5B6B82]/60">${ssrInterpolate(unref(tr)(g.label, g.labelEn))}</span><span class="h-px flex-1 bg-[#0F2747]/10"></span></div><div class="space-y-3"><!--[-->`);
					ssrRenderList(g.items, (n) => {
						_push(`<a href="#" class="${ssrRenderClass(["group flex items-start gap-4 overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-[0_20px_44px_-30px_rgb(45_91_255_/_35%)]", n.read ? "border-[#0F2747]/10" : "border-[#0F2747]/10 border-l-4 border-l-primary"])}"><span class="${ssrRenderClass([
							"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
							unref(tintOf)(n.cat).bg,
							unref(tintOf)(n.cat).fg
						])}">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: n.icon,
							class: "h-5 w-5"
						}, null, _parent));
						_push(`</span><span class="min-w-0 flex-1"><span class="flex flex-wrap items-center gap-x-2 gap-y-1"><span class="${ssrRenderClass(["font-bold", n.read ? "text-ink/60" : "text-ink"])}">${ssrInterpolate(unref(tr)(n.title, n.titleEn))}</span>`);
						if (!n.read) _push(`<span class="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">${ssrInterpolate(unref(tr)("ใหม่", "New"))}</span>`);
						else _push(`<!---->`);
						if (n.urgent) {
							_push(`<span class="ml-1 inline-flex items-center gap-1 rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "alarm-clock",
								class: "h-3 w-3"
							}, null, _parent));
							_push(` ${ssrInterpolate(unref(tr)("ด่วน", "Urgent"))}</span>`);
						} else _push(`<!---->`);
						_push(`</span><span class="${ssrRenderClass(["mt-0.5 block text-sm leading-relaxed", n.read ? "text-[#5B6B82]/65" : "text-muted"])}">${ssrInterpolate(unref(tr)(n.msg, n.msgEn))}</span><span class="mt-2 flex items-center gap-2"><span class="${ssrRenderClass(["inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-bold", unref(tintOf)(n.cat).chip])}">${ssrInterpolate(unref(tr)(unref(notifCats)[n.cat].short, unref(notifCats)[n.cat].shortEn))}</span><span class="text-[11px] text-[#5B6B82]/55">${ssrInterpolate(unref(tr)(n.ago, n.agoEn))} · ${ssrInterpolate(unref(tr)(n.date, n.dateEn))}</span></span></span>`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "chevron-right",
							class: "ml-1 mt-1 h-4 w-4 shrink-0 text-[#5B6B82]/35 transition group-hover:text-primary"
						}, null, _parent));
						_push(`</a>`);
					});
					_push(`<!--]--></div><!--]-->`);
				});
				_push(`<!--]--></section>`);
			} else {
				_push(`<section class="rounded-2xl border-2 border-dashed border-[#0F2747]/15 bg-white/60 p-12 text-center"><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "bell-off",
					class: "h-7 w-7 text-primary"
				}, null, _parent));
				_push(`</div><p class="mt-4 font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ไม่มีการแจ้งเตือน", "No notifications"))}</p><p class="mx-auto mt-1 max-w-xs text-sm text-muted">${ssrInterpolate(unref(tr)("ยังไม่มีรายการในหมวดนี้ — เมื่อมีความเคลื่อนไหวจะแสดงที่นี่", "Nothing in this category yet — new activity will show up here."))}</p></section>`);
			}
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/notifications.vue
var _sfc_setup = notifications_vue_vue_type_script_setup_true_lang_default.setup;
notifications_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/notifications.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notifications_default = notifications_vue_vue_type_script_setup_true_lang_default;

export { notifications_default as default };
//# sourceMappingURL=notifications-CRwG-9ph.mjs.map
