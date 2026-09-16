import { _ as _plugin_vue_export_helper_default, a as useHead$1, N as NuxtLink } from '../virtual/entry.mjs';
import { n as notifCats, a as notifMatrix } from './notifications-DCWQgz_X.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/docs/notifications-spec.vue?vue&type=script&setup=true&lang.ts
var notifications_spec_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "notifications-spec",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1(() => ({ title: "Notification Spec — Ripples" }));
		const catKeys = Object.keys(notifMatrix);
		const deliverables = [
			{
				n: "1.",
				text: "Notification matrix (ตารางด้านล่าง)"
			},
			{
				n: "2.",
				text: "Notification Center — ",
				to: "/portal/notifications",
				linkLabel: "notifications.html"
			},
			{
				n: "3.",
				text: "กระดิ่ง + badge + dropdown (ทุกหน้า portal)"
			},
			{
				n: "4.",
				text: "Notification Settings — ",
				to: "/portal/notification-settings",
				linkLabel: "notification-settings.html"
			},
			{
				n: "5.",
				text: "Email templates — ",
				to: "/docs/email-templates",
				linkLabel: "email-templates.html"
			},
			{
				n: "6.",
				text: "กติกากันสแปม (ด้านล่าง)"
			}
		];
		const antiSpamRules = [
			"<b class=\"text-ink\">รวมเป็น digest</b> — แคมเปญแนะนำ/ตรง niche รวมส่งเป็นอีเมลสรุปสัปดาห์ละครั้ง ไม่ส่งทีละแคมเปญ",
			"<b class=\"text-ink\">รวมเหตุการณ์ใกล้กัน</b> — เหตุการณ์ประเภทเดียวกันที่เกิดในช่วงสั้น ๆ (เช่นหลายคอมเมนต์) รวมเป็นอีเมลฉบับเดียว",
			"<b class=\"text-ink\">ไม่ส่งซ้ำ</b> — เหตุการณ์เดิม (เช่นเตือน deadline) ส่งครั้งเดียวต่อรอบ เว้นเหตุการณ์เปลี่ยนสถานะ",
			"<b class=\"text-ink\">ในเว็บไม่จำกัด</b> — Notification Center แสดงทุกเหตุการณ์ตามจริง (กันสแปมใช้กับ \"อีเมล\" เป็นหลัก)",
			"<b class=\"text-ink\">ความปลอดภัย/การเงิน ไม่เข้า digest</b> — ส่งทันทีและบังคับเสมอ เพราะกระทบบัญชี/เงินโดยตรง",
			"<b class=\"text-ink\">เคารพการตั้งค่า</b> — หมวดที่ KOL ปิดอีเมลไว้ จะไม่ส่งอีเมล (ยกเว้นหมวดบังคับ) แต่ยังเห็นในเว็บ"
		];
		const centerFeatures = [
			"ไทมไลน์รวมเรียงใหม่→เก่า + แยกกลุ่ม วันนี้/เมื่อวาน/ก่อนหน้า",
			"ตัวกรองตามหมวด (พร้อมจำนวนต่อหมวด)",
			"read / unread (จุดสี) · กดรายการ = อ่าน + ไปหน้าปลายทาง",
			"“อ่านทั้งหมด” · empty state เมื่อไม่มีรายการ",
			"สลับความหนาแน่นการ์ด แน่น/โปร่ง (จำค่าไว้)",
			"กระดิ่ง dropdown แสดง 5 ล่าสุด + “ดูทั้งหมด”"
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-4xl rounded-2xl border border-[#0F2747]/10 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(15,39,71,.5)] sm:p-8 lg:p-12" }, _attrs))} data-v-9514df0a><header class="border-b border-[#0F2747]/10 pb-6" data-v-9514df0a><div class="flex items-center justify-between gap-4" data-v-9514df0a><div data-v-9514df0a><p class="text-xs font-bold uppercase tracking-[0.25em] text-primary" data-v-9514df0a>Design Spec · Notifications</p><h1 class="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl" data-v-9514df0a>ระบบการแจ้งเตือน (KOL)</h1><p class="mt-2 max-w-xl text-sm leading-relaxed text-muted" data-v-9514df0a>Notification matrix · ช่องทาง · ลิงก์ปลายทาง · อีเมลบังคับ · กติกากันสแปม</p></div><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-16 shrink-0" data-v-9514df0a></div><div class="mt-5 flex flex-wrap items-center gap-3 text-[11px]" data-v-9514df0a><span class="rounded-md bg-surface px-2 py-1" data-v-9514df0a><b class="text-ink" data-v-9514df0a>ในเว็บ</b> = Notification Center + กระดิ่ง</span><span class="rounded-md bg-surface px-2 py-1" data-v-9514df0a><b class="text-ink" data-v-9514df0a>อีเมล</b> = ส่งเข้าอีเมล</span><span class="must" data-v-9514df0a>บังคับ</span><span class="text-muted" data-v-9514df0a>= ปิดไม่ได้ (ความปลอดภัย/การเงิน)</span><div class="ml-auto flex gap-2" data-v-9514df0a>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/portal/notifications",
				class: "rounded-md bg-primary px-3 py-1 font-bold text-white"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Notification Center →`);
					else return [createTextVNode("Notification Center →")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/docs/email-templates",
				class: "rounded-md border border-primary/30 px-3 py-1 font-bold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Email →`);
					else return [createTextVNode("Email →")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></header><section class="mt-8" data-v-9514df0a><h2 class="font-heading text-lg font-extrabold text-ink" data-v-9514df0a>สิ่งที่ส่งมอบ</h2><ol class="mt-3 grid gap-2 text-sm sm:grid-cols-2" data-v-9514df0a><!--[-->`);
			ssrRenderList(deliverables, (d) => {
				_push(`<li class="rounded-lg bg-surface p-3" data-v-9514df0a><b data-v-9514df0a>${ssrInterpolate(d.n)}</b> ${ssrInterpolate(d.text)}`);
				if (d.to) _push(ssrRenderComponent(_component_NuxtLink, {
					to: d.to,
					class: "font-bold text-primary"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(d.linkLabel)}`);
						else return [createTextVNode(toDisplayString(d.linkLabel), 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<!---->`);
				_push(`</li>`);
			});
			_push(`<!--]--></ol></section><section class="mt-9" data-v-9514df0a><h2 class="font-heading text-lg font-extrabold text-ink" data-v-9514df0a>Notification Matrix</h2><!--[-->`);
			ssrRenderList(unref(catKeys), (key) => {
				_push(`<!--[--><h3 class="mt-7 flex items-center gap-2 font-heading text-base font-bold text-ink" data-v-9514df0a>${ssrInterpolate(unref(notifCats)[key].label)} `);
				if (unref(notifCats)[key].locked) _push(`<span class="must" data-v-9514df0a>หมวดบังคับอีเมล</span>`);
				else _push(`<!---->`);
				_push(`</h3><table class="mt-2" data-v-9514df0a><thead data-v-9514df0a><tr data-v-9514df0a><th style="${ssrRenderStyle({ "width": "34%" })}" data-v-9514df0a>เหตุการณ์</th><th style="${ssrRenderStyle({ "width": "22%" })}" data-v-9514df0a>Trigger</th><th class="ctr" style="${ssrRenderStyle({ "width": "9%" })}" data-v-9514df0a>ในเว็บ</th><th class="ctr" style="${ssrRenderStyle({ "width": "9%" })}" data-v-9514df0a>อีเมล</th><th class="ctr" style="${ssrRenderStyle({ "width": "10%" })}" data-v-9514df0a>บังคับ</th><th data-v-9514df0a>ลิงก์ปลายทาง</th></tr></thead><tbody data-v-9514df0a><!--[-->`);
				ssrRenderList(unref(notifMatrix)[key], (e, i) => {
					_push(`<tr data-v-9514df0a><td data-v-9514df0a>${ssrInterpolate(e.event)} `);
					if (e.note) _push(`<!--[--><br data-v-9514df0a><span style="${ssrRenderStyle({ "color": "#9aa6b5" })}" data-v-9514df0a>${ssrInterpolate(e.note)}</span><!--]-->`);
					else _push(`<!---->`);
					_push(`</td><td data-v-9514df0a>${ssrInterpolate(e.trigger)}</td><td class="ctr" data-v-9514df0a>`);
					if (e.web) _push(`<span class="yes" data-v-9514df0a>✓</span>`);
					else _push(`<span class="no" data-v-9514df0a>–</span>`);
					_push(`</td><td class="ctr" data-v-9514df0a>`);
					if (e.email) _push(`<span class="yes" data-v-9514df0a>✓</span>`);
					else _push(`<span class="no" data-v-9514df0a>–</span>`);
					_push(`</td><td class="ctr" data-v-9514df0a>`);
					if (e.mandatory) _push(`<span class="must" data-v-9514df0a>บังคับ</span>`);
					else _push(`<span class="no" data-v-9514df0a>–</span>`);
					_push(`</td><td data-v-9514df0a><code style="${ssrRenderStyle({
						"font-size": "12px",
						"color": "#2D5BFF"
					})}" data-v-9514df0a>${ssrInterpolate(e.link)}</code></td></tr>`);
				});
				_push(`<!--]--></tbody></table><!--]-->`);
			});
			_push(`<!--]--></section><section class="mt-10 break-inside-avoid" data-v-9514df0a><h2 class="font-heading text-lg font-extrabold text-ink" data-v-9514df0a>กติกากันสแปม (Anti-spam)</h2><ul class="mt-3 space-y-2 text-sm text-muted" data-v-9514df0a><!--[-->`);
			ssrRenderList(antiSpamRules, (rule, i) => {
				_push(`<li class="rounded-lg bg-surface p-3" data-v-9514df0a>• <span data-v-9514df0a>${rule ?? ""}</span></li>`);
			});
			_push(`<!--]--></ul></section><section class="mt-10 break-inside-avoid" data-v-9514df0a><h2 class="font-heading text-lg font-extrabold text-ink" data-v-9514df0a>Notification Center — พฤติกรรม</h2><ul class="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2" data-v-9514df0a><!--[-->`);
			ssrRenderList(centerFeatures, (f, i) => {
				_push(`<li class="rounded-lg bg-surface p-3" data-v-9514df0a>${ssrInterpolate(f)}</li>`);
			});
			_push(`<!--]--></ul></section><footer class="mt-10 border-t border-[#0F2747]/10 pt-5 text-[11px] text-[#5B6B82]/60" data-v-9514df0a> Ripples · Notification System Spec · มุม KOL · ทุก noti มีลิงก์ปลายทาง · เรื่องเงิน + ความปลอดภัย = อีเมลบังคับ </footer></div>`);
		};
	}
});
//#endregion
//#region app/pages/docs/notifications-spec.vue
var _sfc_setup = notifications_spec_vue_vue_type_script_setup_true_lang_default.setup;
notifications_spec_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/notifications-spec.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notifications_spec_default = /*#__PURE__*/ _plugin_vue_export_helper_default(notifications_spec_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9514df0a"]]);

export { notifications_spec_default as default };
//# sourceMappingURL=notifications-spec-rqOJBTfk.mjs.map
