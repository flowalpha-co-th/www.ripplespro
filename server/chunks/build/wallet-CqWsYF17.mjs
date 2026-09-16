import { b as useLocale, a as useHead$1, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
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

//#region app/pages/portal/wallet.vue?vue&type=script&setup=true&lang.ts
var wallet_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "wallet",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("กระเป๋าเงิน — Ripples", "Wallet — Ripples") }));
		const pays = [
			{
				c: "Gadget Review - Smartphone",
				plat: "YouTube",
				fee: 2e4,
				bonus: 2e3,
				s: "paid",
				date: "จ่าย 24 มี.ค. 2026",
				dateEn: "Paid 24 Mar 2026",
				slip: true
			},
			{
				c: "Summer Collection 2026",
				plat: "Instagram",
				fee: 15e3,
				bonus: 0,
				s: "paid",
				date: "จ่าย 10 มี.ค. 2026",
				dateEn: "Paid 10 Mar 2026",
				slip: true
			},
			{
				c: "New Skincare Launch",
				plat: "TikTok",
				fee: 9500,
				bonus: 0,
				s: "ready",
				date: "ครบกำหนด 2 เม.ย. 2026",
				dateEn: "Due 2 Apr 2026",
				slip: false
			},
			{
				c: "Nike Running Club",
				plat: "Instagram",
				fee: 16e3,
				bonus: 1500,
				s: "ready",
				date: "ครบกำหนด 5 เม.ย. 2026",
				dateEn: "Due 5 Apr 2026",
				slip: false
			},
			{
				c: "Fitness Challenge 30 Days",
				plat: "Instagram",
				fee: 12e3,
				bonus: 0,
				s: "pending_verify",
				date: "ส่งงาน 25 มี.ค. 2026",
				dateEn: "Submitted 25 Mar 2026",
				slip: false
			}
		];
		const net = (p) => p.fee + p.bonus;
		const ST = {
			pending_verify: {
				label: "รอตรวจสอบ",
				labelEn: "Pending verify",
				cls: "bg-amber-100 text-amber-700",
				ring: "border-amber-100 bg-amber-50/30",
				ic: "bg-amber-50 text-amber-500",
				icon: "clock",
				amt: "text-amber-600"
			},
			ready: {
				label: "พร้อมจ่าย",
				labelEn: "Ready",
				cls: "bg-blue-100 text-blue-700",
				ring: "border-primary/10 bg-primary/5",
				ic: "bg-primary/10 text-primary",
				icon: "badge-check",
				amt: "text-primary"
			},
			paid: {
				label: "จ่ายแล้ว",
				labelEn: "Paid",
				cls: "bg-green-100 text-green-700",
				ring: "border-green-100 bg-green-50/30",
				ic: "bg-green-50 text-green-500",
				icon: "check-circle",
				amt: "text-green-600"
			}
		};
		const fmt = (n) => n.toLocaleString();
		const sumBy = (st) => pays.filter((p) => p.s === st).reduce((a, p) => a + net(p), 0);
		const readyTotal = sumBy("ready");
		const paidTotal = sumBy("paid");
		const pendingTotal = sumBy("pending_verify");
		const tabDefs = [
			{
				key: "all",
				label: "ทั้งหมด",
				labelEn: "All"
			},
			{
				key: "pending_verify",
				label: "รอตรวจสอบ",
				labelEn: "Pending verify"
			},
			{
				key: "ready",
				label: "พร้อมจ่าย",
				labelEn: "Ready"
			},
			{
				key: "paid",
				label: "จ่ายแล้ว",
				labelEn: "Paid"
			}
		];
		const active = ref("all");
		const tabCount = (key) => key === "all" ? pays.length : pays.filter((p) => p.s === key).length;
		const filtered = computed(() => pays.filter((p) => active.value === "all" || p.s === active.value));
		const slipPay = ref(null);
		const slipRef = ref("");
		const slipDate = computed(() => slipPay.value ? tr(slipPay.value.date.replace("จ่าย ", ""), slipPay.value.dateEn.replace("Paid ", "")) : "");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-8"><h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("กระเป๋าเงิน", "Wallet"))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("รายได้จากแต่ละแคมเปญ — ค่างาน + โบนัส, สถานะการจ่าย และหลักฐานโอน", "Earnings by campaign — fee + bonus, payment status, and transfer slips"))}</p></section><section class="mb-8 grid gap-5 sm:grid-cols-3"><div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primaryDark p-6 text-white shadow-[0_20px_50px_-25px_rgb(45_91_255_/_60%)]"><div class="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div><div class="relative flex items-center justify-between"><div><p class="text-sm text-white/80">${ssrInterpolate(unref(tr)("พร้อมถอน (Ready)", "Ready to withdraw"))}</p><p class="mt-1 font-heading text-4xl font-extrabold">฿${ssrInterpolate(fmt(unref(readyTotal)))}</p></div><div class="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "wallet",
				class: "h-7 w-7"
			}, null, _parent));
			_push(`</div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm"><div class="flex items-center justify-between"><div><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("จ่ายแล้วทั้งหมด (Paid)", "Total paid"))}</p><p class="mt-1 font-heading text-2xl font-extrabold text-ink">฿${ssrInterpolate(fmt(unref(paidTotal)))}</p></div><div class="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "trending-up",
				class: "h-7 w-7 text-primary"
			}, null, _parent));
			_push(`</div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm"><div class="flex items-center justify-between"><div><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("รอตรวจสอบ (Pending verify)", "Pending verify"))}</p><p class="mt-1 font-heading text-2xl font-extrabold text-amber-600">฿${ssrInterpolate(fmt(unref(pendingTotal)))}</p></div><div class="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "clock",
				class: "h-7 w-7 text-amber-500"
			}, null, _parent));
			_push(`</div></div></div></section><section class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm"><h2 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("รายการรับเงินรายแคมเปญ", "Payouts by campaign"))}</h2><div class="mt-5 flex flex-wrap gap-2"><!--[-->`);
			ssrRenderList(tabDefs, (d) => {
				_push(`<button type="button" class="${ssrRenderClass(["rounded-lg px-4 py-2 text-sm font-bold transition", unref(active) === d.key ? "bg-primary text-white" : "border border-[#0F2747]/10 bg-surface text-muted hover:text-primary"])}">${ssrInterpolate(unref(tr)(d.label, d.labelEn))} (${ssrInterpolate(tabCount(d.key))}) </button>`);
			});
			_push(`<!--]--></div><div class="mt-5 space-y-3"><!--[-->`);
			ssrRenderList(unref(filtered), (p, i) => {
				_push(`<div class="${ssrRenderClass(["flex items-center justify-between rounded-xl border p-4", ST[p.s].ring])}"><div class="flex items-center gap-4"><div class="${ssrRenderClass(["flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", ST[p.s].ic])}">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: ST[p.s].icon,
					class: "h-5 w-5"
				}, null, _parent));
				_push(`</div><div><p class="text-sm font-semibold text-ink">${ssrInterpolate(p.c)}</p><p class="text-xs text-muted">${ssrInterpolate(p.plat)}</p><div class="mt-0.5 flex flex-col"><span class="text-[11px] text-muted">`);
				if (p.bonus) _push(`<!--[-->${ssrInterpolate(unref(tr)("ค่างาน", "Fee"))} ฿${ssrInterpolate(fmt(p.fee))} + ${ssrInterpolate(unref(tr)("โบนัส", "Bonus"))} ฿${ssrInterpolate(fmt(p.bonus))}<!--]-->`);
				else _push(`<!--[-->${ssrInterpolate(unref(tr)("ค่างาน", "Fee"))} ฿${ssrInterpolate(fmt(p.fee))}<!--]-->`);
				_push(`</span><span class="text-[11px] text-[#5B6B82]/60">${ssrInterpolate(unref(tr)(p.date, p.dateEn))}</span>`);
				if (p.slip) {
					_push(`<button type="button" class="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "receipt",
						class: "h-3.5 w-3.5"
					}, null, _parent));
					_push(` ${ssrInterpolate(unref(tr)("ดูสลิปโอนเงิน", "View transfer slip"))}</button>`);
				} else _push(`<!---->`);
				_push(`</div></div></div><div class="text-right"><p class="text-[10px] uppercase tracking-widest text-[#5B6B82]/50">Net</p><p class="${ssrRenderClass(["text-lg font-bold", ST[p.s].amt])}">฿${ssrInterpolate(fmt(net(p)))}</p><span class="${ssrRenderClass(["rounded-full px-2.5 py-0.5 text-xs font-bold", ST[p.s].cls])}">${ssrInterpolate(unref(tr)(ST[p.s].label, ST[p.s].labelEn))}</span></div></div>`);
			});
			_push(`<!--]--></div>`);
			if (unref(filtered).length === 0) _push(`<p class="py-8 text-center text-sm text-muted">${ssrInterpolate(unref(tr)("ไม่มีรายการในหมวดนี้", "No items in this category"))}</p>`);
			else _push(`<!---->`);
			_push(`</section>`);
			if (unref(slipPay)) {
				_push(`<div class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"><div class="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl"><div class="relative bg-gradient-to-br from-primary to-primaryDark p-7 text-center text-white"><button type="button" class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "x",
					class: "h-5 w-5"
				}, null, _parent));
				_push(`</button><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check",
					class: "h-8 w-8"
				}, null, _parent));
				_push(`</div><p class="mt-3 text-sm text-white/80">${ssrInterpolate(unref(tr)("โอนเงินสำเร็จ", "Transfer successful"))}</p><p class="mt-1 font-heading text-4xl font-extrabold">฿${ssrInterpolate(fmt(net(unref(slipPay))))}</p></div><div class="space-y-3 p-6 text-sm"><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("จาก", "From"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(tr)("Ripples (ประกิต โฮลดิ้งฯ)", "Ripples (Prakit Holdings)"))}</span></div><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("เข้าบัญชี", "To account"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(tr)("สมใจ ใจดี", "Somjai Jaidee"))}</span></div><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("ธนาคาร", "Bank"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(tr)("กสิกรไทย", "KBANK"))} · xxx-x-x789-0</span></div><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("แคมเปญ", "Campaign"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(slipPay).c)}</span></div><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("รายละเอียด", "Details"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(tr)("ค่างาน", "Fee"))} ฿${ssrInterpolate(fmt(unref(slipPay).fee))}`);
				if (unref(slipPay).bonus) _push(`<!--[--> + ${ssrInterpolate(unref(tr)("โบนัส", "Bonus"))} ฿${ssrInterpolate(fmt(unref(slipPay).bonus))}<!--]-->`);
				else _push(`<!---->`);
				_push(`</span></div><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("วันที่", "Date"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(slipDate))} · ${ssrInterpolate(unref(tr)("14:32 น.", "14:32"))}</span></div><div class="flex items-start justify-between gap-4"><span class="shrink-0 text-muted">${ssrInterpolate(unref(tr)("เลขอ้างอิง", "Reference"))}</span><span class="text-right font-semibold text-ink">${ssrInterpolate(unref(slipRef))}</span></div></div><div class="border-t border-dashed border-[#0F2747]/15 p-4 text-center"><p class="text-[11px] text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("สลิปนี้ออกโดยระบบ Ripples — ใช้เป็นหลักฐานการโอน", "This slip is issued by Ripples — valid as proof of transfer"))}</p></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/wallet.vue
var _sfc_setup = wallet_vue_vue_type_script_setup_true_lang_default.setup;
wallet_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/wallet.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var wallet_default = wallet_vue_vue_type_script_setup_true_lang_default;

export { wallet_default as default };
//# sourceMappingURL=wallet-CqWsYF17.mjs.map
