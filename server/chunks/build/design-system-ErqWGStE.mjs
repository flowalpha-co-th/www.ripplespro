import { _ as _plugin_vue_export_helper_default, a as useHead$1, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
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
import 'vue-router';
import '@vue/shared';
import 'pinia';
import '@lucide/vue';
import 'unhead/utils';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region \0virtual:public?%2Fripples-logo-white.png
var _virtual_public__2Fripples_logo_white_default = publicAssetsURL("/ripples-logo-white.png");
//#endregion
//#region app/pages/docs/design-system.vue?vue&type=script&setup=true&lang.ts
var design_system_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "design-system",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1(() => ({ title: "Design System — Ripples" }));
		const toc = [
			{
				href: "#brand",
				label: "Brand"
			},
			{
				href: "#color",
				label: "Colors"
			},
			{
				href: "#type",
				label: "Typography"
			},
			{
				href: "#space",
				label: "Spacing & Elevation"
			},
			{
				href: "#components",
				label: "Components"
			},
			{
				href: "#overlays",
				label: "Overlays & Feedback"
			},
			{
				href: "#loading",
				label: "Loading & States"
			}
		];
		const coreColors = [
			{
				name: "Primary",
				hex: "#2D5BFF",
				bg: "bg-primary"
			},
			{
				name: "Primary Dark",
				hex: "#1A3FB8",
				bg: "bg-primaryDark"
			},
			{
				name: "Primary Light",
				hex: "#4D8BFF",
				bg: "bg-primaryLight"
			},
			{
				name: "Ink",
				hex: "#0F2747",
				bg: "bg-ink"
			},
			{
				name: "Muted",
				hex: "#5B6B82",
				bg: "bg-muted"
			},
			{
				name: "Surface",
				hex: "#F4F7FB",
				bg: "bg-surface"
			}
		];
		const statusColors = [
			{
				name: "Success",
				hex: "#16A34A",
				bg: "bg-green-600"
			},
			{
				name: "Pending",
				hex: "#D97706",
				bg: "bg-amber-600"
			},
			{
				name: "Invited",
				hex: "#7C3AED",
				bg: "bg-violet-600"
			},
			{
				name: "Error",
				hex: "#DC2626",
				bg: "bg-red-600"
			}
		];
		const categoryTints = [
			{
				icon: "shield-check",
				label: "ความปลอดภัย",
				tone: "rose",
				iconWrap: "bg-rose-50 text-rose-600"
			},
			{
				icon: "user-check",
				label: "โปรไฟล์",
				tone: "violet",
				iconWrap: "bg-violet-50 text-violet-600"
			},
			{
				icon: "megaphone",
				label: "แคมเปญ",
				tone: "blue",
				iconWrap: "bg-blue-50 text-blue-600"
			},
			{
				icon: "clipboard-list",
				label: "งาน",
				tone: "amber",
				iconWrap: "bg-amber-50 text-amber-600"
			},
			{
				icon: "wallet",
				label: "การเงิน",
				tone: "green",
				iconWrap: "bg-green-50 text-green-600"
			}
		];
		const typeSamples = [
			{
				meta: "Display · text-7xl / extrabold",
				text: "เปลี่ยนคอนเทนต์",
				cls: "font-heading text-6xl font-extrabold leading-[1.05] tracking-tight text-ink"
			},
			{
				meta: "H1 · text-4xl / extrabold",
				text: "แคมเปญที่น่าสนใจ",
				cls: "font-heading text-4xl font-extrabold tracking-tight text-ink"
			},
			{
				meta: "H2 · text-2xl / bold",
				text: "ทำไมต้อง Ripples",
				cls: "font-heading text-2xl font-bold text-ink"
			},
			{
				meta: "H3 · text-lg / bold",
				text: "Verified Brands Only",
				cls: "font-heading text-lg font-bold text-ink"
			},
			{
				meta: "Body · text-base / regular · color muted",
				text: "จับคู่กับแบรนด์ที่ผ่านการตรวจสอบ จ่ายตรงเวลา เอกสารภาษีจัดให้ครบ — ในที่เดียว",
				cls: "text-base leading-relaxed text-muted"
			},
			{
				meta: "Eyebrow · text-sm / bold / uppercase / tracking-[0.25em]",
				text: "แบรนด์ชั้นนำที่ไว้วางใจ Ripples",
				cls: "text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70"
			}
		];
		const radiusSamples = [
			{
				cls: "rounded-md",
				label: "md · 6px"
			},
			{
				cls: "rounded-lg",
				label: "lg · 8px"
			},
			{
				cls: "rounded-xl",
				label: "xl · 12px"
			},
			{
				cls: "rounded-2xl",
				label: "2xl · 16px"
			},
			{
				cls: "rounded-full",
				label: "full"
			}
		];
		const elevationSamples = [
			{
				cls: "shadow-sm",
				label: "shadow-sm"
			},
			{
				cls: "shadow-[0_24px_50px_-30px_rgb(45_91_255_/_40%)]",
				label: "card-hover"
			},
			{
				cls: "shadow-[0_30px_60px_-40px_rgb(45_91_255_/_35%)]",
				label: "panel"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl" }, _attrs))} data-v-26c8564e><header class="mb-14 flex flex-col gap-6 border-b border-[#0F2747]/10 pb-10 sm:flex-row sm:items-center sm:justify-between" data-v-26c8564e><div class="flex items-center gap-5" data-v-26c8564e><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-24" data-v-26c8564e><div data-v-26c8564e><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary" data-v-26c8564e>Design System</span><h1 class="mt-3 font-heading text-4xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Ripples v4</h1><p class="mt-1 text-sm text-muted" data-v-26c8564e>ภาษาดีไซน์เดียวสำหรับทุกหน้า — Creator Marketplace</p></div></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/docs",
				class: "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#0F2747]/10 bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:border-primary/40 hover:text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`ดูทุกหน้า `);
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-up-right",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
					} else return [createTextVNode("ดูทุกหน้า "), createVNode(_component_Icon, {
						name: "arrow-up-right",
						class: "h-4 w-4"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</header><nav class="mb-16 flex flex-wrap gap-2" data-v-26c8564e><!--[-->`);
			ssrRenderList(toc, (t) => {
				_push(`<a${ssrRenderAttr("href", t.href)} class="rounded-lg bg-white px-4 py-2 text-sm font-bold text-muted shadow-sm transition hover:text-primary" data-v-26c8564e>${ssrInterpolate(t.label)}</a>`);
			});
			_push(`<!--]--></nav><section id="brand" class="mb-20 scroll-mt-8" data-v-26c8564e><div class="mb-6 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>01</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Brand</h2></div><div class="grid gap-5 sm:grid-cols-2" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-4 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Logo · light</p><div class="flex items-center justify-center rounded-lg bg-surface py-10" data-v-26c8564e><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-28" data-v-26c8564e></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-4 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Logo · on dark</p><div class="flex items-center justify-center rounded-lg bg-gradient-to-br from-ink to-primaryDark py-10" data-v-26c8564e><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_white_default)} alt="Ripples" class="h-28" data-v-26c8564e></div></div></div><div class="mt-5 rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm" data-v-26c8564e><p class="text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Motif · Ripple</p><p class="mt-2 max-w-2xl text-sm leading-relaxed text-muted" data-v-26c8564e>มาร์ก &quot;r&quot; รูปคลื่นน้ำสีน้ำเงินไล่เฉด สื่อถึงเสียงของ creator ที่กระเพื่อมออกไป — ใช้คู่กับพื้นตาราง (grid overlay) จางๆ และวงเรืองแสง (soft glow) สีน้ำเงินเป็นพื้นหลังตกแต่ง</p><div class="mt-4 flex flex-wrap gap-4" data-v-26c8564e><div class="relative h-24 w-24 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primaryDark" data-v-26c8564e><div class="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/15 blur-xl" data-v-26c8564e></div></div><div class="h-24 w-24 rounded-xl border border-[#0F2747]/10" style="${ssrRenderStyle({
				"background-image": "linear-gradient(#2D5BFF 1px,transparent 1px),linear-gradient(90deg,#2D5BFF 1px,transparent 1px)",
				"background-size": "16px 16px",
				"opacity": ".5"
			})}" data-v-26c8564e></div></div></div></section><section id="color" class="mb-20 scroll-mt-8" data-v-26c8564e><div class="mb-6 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>02</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Colors</h2></div><p class="mb-3 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Primary &amp; ink</p><div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-v-26c8564e><!--[-->`);
			ssrRenderList(coreColors, (c) => {
				_push(`<div class="overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm" data-v-26c8564e><div class="${ssrRenderClass([c.bg, "h-20"])}" data-v-26c8564e></div><div class="p-3" data-v-26c8564e><p class="text-sm font-bold text-ink" data-v-26c8564e>${ssrInterpolate(c.name)}</p><p class="mono text-[11px] text-muted" data-v-26c8564e>${ssrInterpolate(c.hex)}</p></div></div>`);
			});
			_push(`<!--]--></div><p class="mb-3 mt-8 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Status (functional)</p><div class="grid grid-cols-2 gap-4 sm:grid-cols-4" data-v-26c8564e><!--[-->`);
			ssrRenderList(statusColors, (c) => {
				_push(`<div class="overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm" data-v-26c8564e><div class="${ssrRenderClass([c.bg, "h-16"])}" data-v-26c8564e></div><div class="p-3" data-v-26c8564e><p class="text-sm font-bold text-ink" data-v-26c8564e>${ssrInterpolate(c.name)}</p><p class="mono text-[11px] text-muted" data-v-26c8564e>${ssrInterpolate(c.hex)}</p></div></div>`);
			});
			_push(`<!--]--></div><p class="mb-3 mt-8 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Notification category tints</p><div class="grid grid-cols-2 gap-4 sm:grid-cols-5" data-v-26c8564e><!--[-->`);
			ssrRenderList(categoryTints, (t) => {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-4 text-center shadow-sm" data-v-26c8564e><span class="${ssrRenderClass([t.iconWrap, "mx-auto flex h-11 w-11 items-center justify-center rounded-xl"])}" data-v-26c8564e>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: t.icon,
					class: "h-5 w-5"
				}, null, _parent));
				_push(`</span><p class="mt-3 text-sm font-bold text-ink" data-v-26c8564e>${ssrInterpolate(t.label)}</p><p class="mono text-[11px] text-muted" data-v-26c8564e>${ssrInterpolate(t.tone)}</p></div>`);
			});
			_push(`<!--]--></div></section><section id="type" class="mb-20 scroll-mt-8" data-v-26c8564e><div class="mb-6 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>03</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Typography</h2></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="text-sm text-muted" data-v-26c8564e>Typeface — <span class="font-bold text-ink" data-v-26c8564e>Prompt</span> (Google Fonts) · headings + body · weights 300–800</p><div class="mt-8 space-y-6 divide-y divide-[#0F2747]/10" data-v-26c8564e><!--[-->`);
			ssrRenderList(typeSamples, (s, i) => {
				_push(`<div class="${ssrRenderClass(i === 0 ? "" : "pt-6")}" data-v-26c8564e><p class="mono text-[11px] text-[#5B6B82]/60" data-v-26c8564e>${ssrInterpolate(s.meta)}</p><p class="${ssrRenderClass(s.cls)}" data-v-26c8564e>${ssrInterpolate(s.text)}</p></div>`);
			});
			_push(`<!--]--></div></div></section><section id="space" class="mb-20 scroll-mt-8" data-v-26c8564e><div class="mb-6 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>04</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Spacing &amp; Elevation</h2></div><div class="grid gap-5 lg:grid-cols-2" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Radius</p><div class="flex flex-wrap items-end gap-5" data-v-26c8564e><!--[-->`);
			ssrRenderList(radiusSamples, (r) => {
				_push(`<div class="text-center" data-v-26c8564e><div class="${ssrRenderClass([r.cls, "h-16 w-16 border-2 border-primary/30 bg-primary/10"])}" data-v-26c8564e></div><p class="mono mt-2 text-[11px] text-muted" data-v-26c8564e>${ssrInterpolate(r.label)}</p></div>`);
			});
			_push(`<!--]--></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Elevation</p><div class="flex flex-wrap items-end gap-6" data-v-26c8564e><!--[-->`);
			ssrRenderList(elevationSamples, (e) => {
				_push(`<div class="text-center" data-v-26c8564e><div class="${ssrRenderClass([e.cls, "h-16 w-24 rounded-xl bg-white"])}" data-v-26c8564e></div><p class="mono mt-3 text-[11px] text-muted" data-v-26c8564e>${ssrInterpolate(e.label)}</p></div>`);
			});
			_push(`<!--]--></div></div></div></section><section id="components" class="mb-10 scroll-mt-8" data-v-26c8564e><div class="mb-6 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>05</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Components</h2></div><div class="space-y-5" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Buttons</p><div class="flex flex-wrap items-center gap-4" data-v-26c8564e><button type="button" class="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5" data-v-26c8564e>Primary `);
			_push(ssrRenderComponent(_component_Icon, {
				name: "arrow-right",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button><button type="button" class="inline-flex items-center gap-2 rounded-lg border border-[#0F2747]/15 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-primary/40 hover:text-primary" data-v-26c8564e>Secondary</button><button type="button" class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary/5" data-v-26c8564e>Ghost `);
			_push(ssrRenderComponent(_component_Icon, {
				name: "arrow-right",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button><button type="button" disabled class="cursor-not-allowed rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white opacity-50" data-v-26c8564e>Disabled</button></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Badges &amp; status chips</p><div class="flex flex-wrap items-center gap-3" data-v-26c8564e><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "sparkles",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` Eyebrow pill</span><span class="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary" data-v-26c8564e>เปิดรับสมัคร</span><span class="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700" data-v-26c8564e>รอตรวจ</span><span class="rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-bold text-violet-700" data-v-26c8564e>ได้รับเชิญ</span><span class="rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-bold text-green-700" data-v-26c8564e>เสร็จสิ้น</span><span class="rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-bold text-red-700" data-v-26c8564e>ต้องแก้ไข</span></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Form inputs</p><div class="grid gap-5 sm:grid-cols-2" data-v-26c8564e><div data-v-26c8564e><label class="mb-1.5 block text-sm font-semibold text-ink" data-v-26c8564e>ปกติ</label><input placeholder="กรอกข้อมูล..." class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50" data-v-26c8564e></div><div data-v-26c8564e><label class="mb-1.5 block text-sm font-semibold text-ink" data-v-26c8564e>Error</label><input value="ผิดพลาด" class="w-full rounded-lg border border-red-400 bg-red-50/40 px-4 py-3 text-sm outline-none" data-v-26c8564e><p class="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "alert-circle",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` กรุณากรอกข้อมูลให้ถูกต้อง</p></div></div><div class="mt-5 flex flex-wrap gap-2" data-v-26c8564e><button type="button" class="rounded-md bg-primary px-4 py-1.5 text-xs font-bold text-white" data-v-26c8564e>Filter active</button><button type="button" class="rounded-md border border-[#0F2747]/10 bg-surface px-4 py-1.5 text-xs font-bold text-muted" data-v-26c8564e>Filter</button><button type="button" class="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white" data-v-26c8564e>Niche selected</button><button type="button" class="rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-muted" data-v-26c8564e>Niche</button></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Cards</p><div class="grid gap-5 sm:grid-cols-3" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm" data-v-26c8564e><div class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "badge-check",
				class: "h-6 w-6 text-primary"
			}, null, _parent));
			_push(`</div><h3 class="mt-4 font-heading text-base font-bold text-ink" data-v-26c8564e>Feature card</h3><p class="mt-1 text-sm text-muted" data-v-26c8564e>ไอคอน + หัวข้อ + คำอธิบายสั้น</p></div><div class="overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primaryDark p-6 text-white" data-v-26c8564e><div class="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "user-plus",
				class: "h-6 w-6"
			}, null, _parent));
			_push(`</div><h3 class="mt-4 font-heading text-base font-extrabold" data-v-26c8564e>Gradient CTA</h3><p class="mt-1 text-sm text-white/80" data-v-26c8564e>การ์ดเน้น action หลัก</p></div><div class="flex flex-col justify-between rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm" data-v-26c8564e><div data-v-26c8564e><p class="text-xs text-muted" data-v-26c8564e>ยอดเงิน</p><p class="font-heading text-2xl font-extrabold text-primary" data-v-26c8564e>฿125,000</p></div><p class="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#5B6B82]/50" data-v-26c8564e>Stat card</p></div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Sidebar nav &amp; tabs</p><div class="grid gap-6 sm:grid-cols-2" data-v-26c8564e><div class="space-y-1" data-v-26c8564e><a class="block rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary" data-v-26c8564e>เมนู active</a><a class="block rounded-lg px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-primary/5 hover:text-primary" data-v-26c8564e>เมนูปกติ</a><a class="block rounded-lg px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-primary/5 hover:text-primary" data-v-26c8564e>เมนูปกติ</a></div><div class="flex flex-wrap gap-2" data-v-26c8564e><button type="button" class="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white" data-v-26c8564e>Tab active</button><button type="button" class="rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-sm font-bold text-muted" data-v-26c8564e>Tab</button><button type="button" class="rounded-lg border border-[#0F2747]/10 bg-white px-4 py-2 text-sm font-bold text-muted" data-v-26c8564e>Tab</button></div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Toggle switch</p><div class="flex flex-wrap items-center gap-x-8 gap-y-4" data-v-26c8564e><div class="flex items-center gap-3" data-v-26c8564e><span class="relative h-7 w-12 rounded-full bg-primary" data-v-26c8564e><span class="absolute left-6 top-1 h-5 w-5 rounded-full bg-white shadow" data-v-26c8564e></span></span><span class="text-sm font-semibold text-ink" data-v-26c8564e>เปิด</span></div><div class="flex items-center gap-3" data-v-26c8564e><span class="relative h-7 w-12 rounded-full bg-[#0F2747]/15" data-v-26c8564e><span class="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow" data-v-26c8564e></span></span><span class="text-sm font-semibold text-muted" data-v-26c8564e>ปิด</span></div><div class="flex items-center gap-3" data-v-26c8564e><span class="relative h-7 w-12 rounded-full bg-primary opacity-60" data-v-26c8564e><span class="absolute left-6 top-1 h-5 w-5 rounded-full bg-white shadow" data-v-26c8564e></span></span><span class="flex items-center gap-1 text-sm font-semibold text-muted" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "lock",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ล็อก (บังคับเปิด)</span></div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-2 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Data source tags</p><p class="mb-5 text-sm text-muted" data-v-26c8564e>กำกับที่มาของข้อมูลในฟอร์ม — KOL กรอกเอง / ดึงจาก API (อ่านอย่างเดียว) / แอดมินตั้ง</p><div class="flex flex-wrap items-center gap-3" data-v-26c8564e><span class="rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-600" data-v-26c8564e>KOL กรอกเอง</span><span class="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-600" data-v-26c8564e>sync · อ่านอย่างเดียว</span><span class="rounded bg-violet-50 px-1.5 py-0.5 text-[10px] font-bold text-violet-600" data-v-26c8564e>แอดมินตั้ง</span><span class="inline-flex items-center gap-1 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-600" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "badge-check",
				class: "h-3 w-3"
			}, null, _parent));
			_push(` ยืนยันแล้ว</span></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Progress · profile completeness</p><div class="flex items-center justify-between" data-v-26c8564e><p class="text-sm font-bold text-ink" data-v-26c8564e>ความครบของโปรไฟล์</p><p class="font-heading text-lg font-extrabold text-primary" data-v-26c8564e>60%</p></div><div class="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface" data-v-26c8564e><div class="h-full rounded-full bg-gradient-to-r from-primary to-primaryLight" style="${ssrRenderStyle({ "width": "60%" })}" data-v-26c8564e></div></div><div class="mt-3 flex flex-wrap gap-2" data-v-26c8564e><span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "check",
				class: "h-3 w-3"
			}, null, _parent));
			_push(` ข้อมูลพื้นฐาน</span><span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "check",
				class: "h-3 w-3"
			}, null, _parent));
			_push(` เชื่อมโซเชียล</span><span class="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "circle",
				class: "h-3 w-3"
			}, null, _parent));
			_push(` ตั้ง Rate Card</span><span class="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "circle",
				class: "h-3 w-3"
			}, null, _parent));
			_push(` ยืนยันตัวตน</span></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Notification item (unread / urgent)</p><div class="space-y-3" data-v-26c8564e><a class="group flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/[0.035] p-5 shadow-sm" data-v-26c8564e><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "check-circle",
				class: "h-5 w-5"
			}, null, _parent));
			_push(`</span><span class="min-w-0 flex-1" data-v-26c8564e><span class="flex flex-wrap items-center gap-2" data-v-26c8564e><span class="font-bold text-ink" data-v-26c8564e>จ่ายเงินแล้ว ฿18,000</span><span class="h-2 w-2 rounded-full bg-green-500" data-v-26c8564e></span></span><span class="mt-0.5 block text-sm text-muted" data-v-26c8564e>ค่างานแคมเปญ “Glow Serum Launch” โอนเข้าบัญชีเรียบร้อย</span><span class="mt-2 flex items-center gap-2" data-v-26c8564e><span class="inline-flex items-center gap-1 rounded-md bg-green-50 px-1.5 py-0.5 text-[11px] font-bold text-green-700" data-v-26c8564e>การเงิน</span><span class="text-[11px] text-[#5B6B82]/55" data-v-26c8564e>12 นาทีที่แล้ว</span></span></span>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "chevron-right",
				class: "ml-1 mt-1 h-4 w-4 shrink-0 text-[#5B6B82]/35"
			}, null, _parent));
			_push(`</a><a class="group flex items-start gap-4 rounded-xl border border-[#0F2747]/10 bg-white p-5" data-v-26c8564e><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "alarm-clock",
				class: "h-5 w-5"
			}, null, _parent));
			_push(`</span><span class="min-w-0 flex-1" data-v-26c8564e><span class="flex flex-wrap items-center gap-2" data-v-26c8564e><span class="font-bold text-ink" data-v-26c8564e>ใกล้ถึง deadline ส่งงาน</span><span class="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "alarm-clock",
				class: "h-3 w-3"
			}, null, _parent));
			_push(` ด่วน</span></span><span class="mt-0.5 block text-sm text-muted" data-v-26c8564e>งาน “รีล Instagram — Glow Serum” ครบกำหนดพรุ่งนี้ 18:00 น.</span><span class="mt-2 flex items-center gap-2" data-v-26c8564e><span class="inline-flex items-center gap-1 rounded-md bg-amber-50 px-1.5 py-0.5 text-[11px] font-bold text-amber-700" data-v-26c8564e>งาน</span><span class="text-[11px] text-[#5B6B82]/55" data-v-26c8564e>1 ชม. ที่แล้ว</span></span></span>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "chevron-right",
				class: "ml-1 mt-1 h-4 w-4 shrink-0 text-[#5B6B82]/35"
			}, null, _parent));
			_push(`</a></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Filter chips (with count)</p><div class="flex flex-wrap gap-2" data-v-26c8564e><button type="button" class="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-sm font-bold text-white shadow-sm" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "inbox",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` ทั้งหมด <span class="rounded-full bg-white/25 px-1.5 text-[11px]" data-v-26c8564e>11</span></button><button type="button" class="inline-flex items-center gap-1.5 rounded-full border border-[#0F2747]/10 bg-white px-3.5 py-2 text-sm font-bold text-muted transition hover:text-primary" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "megaphone",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` แคมเปญ <span class="rounded-full bg-surface px-1.5 text-[11px]" data-v-26c8564e>3</span></button><button type="button" class="inline-flex items-center gap-1.5 rounded-full border border-[#0F2747]/10 bg-white px-3.5 py-2 text-sm font-bold text-muted transition hover:text-primary" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "wallet",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` การเงิน <span class="rounded-full bg-surface px-1.5 text-[11px]" data-v-26c8564e>2</span></button></div></div><div class="grid gap-5 lg:grid-cols-2" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Identity chip + bell</p><div class="flex items-center gap-3 rounded-xl border border-[#0F2747]/10 bg-surface p-3" data-v-26c8564e><img src="https://i.pravatar.cc/120?img=32" alt="" class="h-11 w-11 shrink-0 rounded-full object-cover" data-v-26c8564e><div class="min-w-0 flex-1" data-v-26c8564e><p class="truncate text-sm font-bold text-ink" data-v-26c8564e>สมใจ ใจดี</p><p class="text-xs text-muted" data-v-26c8564e>Creator · @somsai_jd</p></div><span class="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2747]/10 bg-white text-ink shadow-sm" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "bell",
				class: "h-5 w-5"
			}, null, _parent));
			_push(`<span class="absolute -right-1.5 -top-1.5 flex min-w-[18px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white" data-v-26c8564e>4</span></span></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Toast</p><div class="flex items-center justify-center rounded-xl bg-surface py-8" data-v-26c8564e><div class="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-xl" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "check",
				class: "h-4 w-4"
			}, null, _parent));
			_push(` บันทึกโปรไฟล์แล้ว</div></div></div></div></div></section><section id="loading" class="mb-10 scroll-mt-8" data-v-26c8564e><div class="mb-2 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>06</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Loading &amp; States</h2></div><p class="mb-6 max-w-2xl text-sm text-muted" data-v-26c8564e>เลือกรูปแบบให้ตรงบริบท: <strong class="text-ink" data-v-26c8564e>Skeleton</strong> สำหรับโหลดเนื้อหาที่รู้โครงสร้าง (การ์ด/ลิสต์), <strong class="text-ink" data-v-26c8564e>Spinner</strong> สำหรับ action สั้นๆ หรือทั้งหน้า, <strong class="text-ink" data-v-26c8564e>ปุ่มโหลด</strong> ตอน submit, และ <strong class="text-ink" data-v-26c8564e>Empty state</strong> เมื่อไม่มีข้อมูล</p><div class="space-y-5" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-6 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Spinner &amp; inline</p><div class="flex flex-wrap items-center gap-10" data-v-26c8564e><div class="text-center" data-v-26c8564e><div class="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-primary/25 border-t-primary" data-v-26c8564e></div><p class="mono mt-3 text-[11px] text-muted" data-v-26c8564e>sm</p></div><div class="text-center" data-v-26c8564e><div class="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-primary/25 border-t-primary" data-v-26c8564e></div><p class="mono mt-3 text-[11px] text-muted" data-v-26c8564e>md</p></div><div class="text-center" data-v-26c8564e><div class="mx-auto h-12 w-12 animate-spin rounded-full border-[3px] border-primary/20 border-t-primary" data-v-26c8564e></div><p class="mono mt-3 text-[11px] text-muted" data-v-26c8564e>lg</p></div><div class="text-center" data-v-26c8564e><div class="flex items-center gap-1.5" data-v-26c8564e><span class="dot h-2.5 w-2.5 rounded-full bg-primary" style="${ssrRenderStyle({ "animation-delay": "-0.32s" })}" data-v-26c8564e></span><span class="dot h-2.5 w-2.5 rounded-full bg-primary" style="${ssrRenderStyle({ "animation-delay": "-0.16s" })}" data-v-26c8564e></span><span class="dot h-2.5 w-2.5 rounded-full bg-primary" data-v-26c8564e></span></div><p class="mono mt-3 text-[11px] text-muted" data-v-26c8564e>dots</p></div><div class="flex items-center gap-2 text-sm font-semibold text-muted" data-v-26c8564e><span class="h-4 w-4 animate-spin rounded-full border-2 border-muted/30 border-t-muted" data-v-26c8564e></span> กำลังโหลด...</div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-6 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Button · loading state</p><div class="flex flex-wrap items-center gap-4" data-v-26c8564e><button type="button" disabled class="inline-flex cursor-wait items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white opacity-80" data-v-26c8564e><span class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" data-v-26c8564e></span> กำลังบันทึก...</button><button type="button" disabled class="inline-flex cursor-wait items-center gap-2 rounded-lg border border-[#0F2747]/15 bg-white px-6 py-3 text-sm font-bold text-muted" data-v-26c8564e><span class="h-4 w-4 animate-spin rounded-full border-2 border-muted/30 border-t-muted" data-v-26c8564e></span> กำลังส่ง...</button></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-6 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Skeleton · campaign card</p><div class="grid gap-5 sm:grid-cols-3" data-v-26c8564e><!--[-->`);
			ssrRenderList(3, (n) => {
				_push(`<div class="overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white" data-v-26c8564e><div class="skeleton h-40 w-full" data-v-26c8564e></div><div class="space-y-3 p-5" data-v-26c8564e><div class="skeleton h-3 w-1/3 rounded" data-v-26c8564e></div><div class="skeleton h-4 w-3/4 rounded" data-v-26c8564e></div><div class="skeleton h-3 w-full rounded" data-v-26c8564e></div><div class="flex items-center justify-between pt-2" data-v-26c8564e><div class="skeleton h-6 w-24 rounded" data-v-26c8564e></div><div class="skeleton h-9 w-20 rounded-lg" data-v-26c8564e></div></div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-6 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Skeleton · list / table row</p><div class="space-y-3" data-v-26c8564e><div class="flex items-center gap-4 rounded-xl border border-[#0F2747]/10 bg-surface p-4" data-v-26c8564e><div class="skeleton h-11 w-11 rounded-xl" data-v-26c8564e></div><div class="flex-1 space-y-2" data-v-26c8564e><div class="skeleton h-3.5 w-1/2 rounded" data-v-26c8564e></div><div class="skeleton h-3 w-1/3 rounded" data-v-26c8564e></div></div><div class="skeleton h-6 w-20 rounded-full" data-v-26c8564e></div></div><div class="flex items-center gap-4 rounded-xl border border-[#0F2747]/10 bg-surface p-4" data-v-26c8564e><div class="skeleton h-11 w-11 rounded-xl" data-v-26c8564e></div><div class="flex-1 space-y-2" data-v-26c8564e><div class="skeleton h-3.5 w-2/3 rounded" data-v-26c8564e></div><div class="skeleton h-3 w-1/4 rounded" data-v-26c8564e></div></div><div class="skeleton h-6 w-20 rounded-full" data-v-26c8564e></div></div><div class="flex items-center gap-4 rounded-xl border border-[#0F2747]/10 bg-surface p-4" data-v-26c8564e><div class="skeleton h-11 w-11 rounded-xl" data-v-26c8564e></div><div class="flex-1 space-y-2" data-v-26c8564e><div class="skeleton h-3.5 w-1/2 rounded" data-v-26c8564e></div><div class="skeleton h-3 w-2/5 rounded" data-v-26c8564e></div></div><div class="skeleton h-6 w-20 rounded-full" data-v-26c8564e></div></div></div></div><div class="grid gap-5 lg:grid-cols-2" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-6 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Section / page loader</p><div class="flex flex-col items-center justify-center rounded-xl bg-surface py-12" data-v-26c8564e><div class="relative flex h-14 w-14 items-center justify-center" data-v-26c8564e><div class="absolute inset-0 animate-spin rounded-full border-[3px] border-primary/20 border-t-primary" data-v-26c8564e></div><div class="h-6 w-6 animate-pulse rounded-full bg-primary/20" data-v-26c8564e></div></div><p class="mt-4 text-sm font-semibold text-muted" data-v-26c8564e>กำลังโหลดข้อมูล...</p></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-6 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Empty state</p><div class="flex flex-col items-center justify-center rounded-xl bg-surface py-10 text-center" data-v-26c8564e><div class="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "inbox",
				class: "h-7 w-7 text-primary"
			}, null, _parent));
			_push(`</div><p class="mt-4 font-heading text-base font-bold text-ink" data-v-26c8564e>ยังไม่มีแคมเปญ</p><p class="mt-1 text-sm text-muted" data-v-26c8564e>เมื่อมีแคมเปญที่ตรงกับคุณ จะแสดงที่นี่</p><button type="button" class="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primaryDark" data-v-26c8564e>ค้นหาแคมเปญ `);
			_push(ssrRenderComponent(_component_Icon, {
				name: "arrow-right",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></div></div></div></div></section><section id="overlays" class="mb-10 scroll-mt-8" data-v-26c8564e><div class="mb-6 flex items-baseline gap-3" data-v-26c8564e><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-26c8564e>07</span><h2 class="font-heading text-2xl font-extrabold tracking-tight text-ink" data-v-26c8564e>Overlays &amp; Feedback</h2></div><div class="space-y-5" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Status banners · KYC states</p><div class="grid gap-3 sm:grid-cols-2" data-v-26c8564e><div class="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "upload",
				class: "mt-0.5 h-6 w-6 shrink-0 text-primary"
			}, null, _parent));
			_push(`<div data-v-26c8564e><p class="font-bold text-ink" data-v-26c8564e>ยังไม่ส่ง</p><p class="text-sm text-muted" data-v-26c8564e>อัปโหลดเอกสารเพื่อยืนยันบัญชีและเริ่มรับเงิน</p></div></div><div class="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "clock",
				class: "mt-0.5 h-6 w-6 shrink-0 text-amber-600"
			}, null, _parent));
			_push(`<div data-v-26c8564e><p class="font-bold" data-v-26c8564e>กำลังตรวจสอบ</p><p class="text-sm opacity-90" data-v-26c8564e>ใช้เวลา 1–2 วันทำการ ระหว่างนี้แก้ไขข้อมูลไม่ได้</p></div></div><div class="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-900" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "check-circle",
				class: "mt-0.5 h-6 w-6 shrink-0 text-green-600"
			}, null, _parent));
			_push(`<div data-v-26c8564e><p class="font-bold" data-v-26c8564e>อนุมัติแล้ว</p><p class="text-sm opacity-90" data-v-26c8564e>บัญชีได้รับการยืนยันครบถ้วน พร้อมรับเงิน</p></div></div><div class="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "x-circle",
				class: "mt-0.5 h-6 w-6 shrink-0 text-red-600"
			}, null, _parent));
			_push(`<div data-v-26c8564e><p class="font-bold" data-v-26c8564e>ถูกปฏิเสธ</p><p class="text-sm opacity-90" data-v-26c8564e>ภาพหน้าสมุดบัญชีไม่ชัด — กรุณาอัปโหลดใหม่</p></div></div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Modal · dialog</p><div class="flex justify-center rounded-xl bg-ink/[0.06] p-6" data-v-26c8564e><div class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-[#0F2747]/10" data-v-26c8564e><div class="flex items-center justify-between" data-v-26c8564e><h3 class="font-heading text-lg font-bold text-ink" data-v-26c8564e>เปลี่ยนรหัสผ่าน</h3>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "x",
				class: "h-5 w-5 text-[#5B6B82]/60"
			}, null, _parent));
			_push(`</div><div class="mt-4 space-y-3" data-v-26c8564e><div data-v-26c8564e><label class="mb-1.5 block text-sm font-semibold text-ink" data-v-26c8564e>รหัสผ่านใหม่</label><input type="password" placeholder="อย่างน้อย 8 ตัว" class="w-full rounded-lg border border-[#0F2747]/15 bg-white px-3.5 py-2.5 text-sm outline-none" data-v-26c8564e></div></div><div class="mt-5 flex gap-2" data-v-26c8564e><button type="button" class="flex-1 rounded-lg border border-[#0F2747]/10 px-4 py-2.5 text-sm font-bold text-ink" data-v-26c8564e>ยกเลิก</button><button type="button" class="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white" data-v-26c8564e>บันทึก</button></div></div></div></div><div class="grid gap-5 lg:grid-cols-2" data-v-26c8564e><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Notification dropdown</p><div class="mx-auto max-w-[340px] overflow-hidden rounded-2xl border border-[#0F2747]/10 shadow-xl" data-v-26c8564e><div class="flex items-center justify-between border-b border-[#0F2747]/10 px-4 py-3.5" data-v-26c8564e><p class="text-sm font-extrabold text-ink" data-v-26c8564e>การแจ้งเตือน <span class="text-muted" data-v-26c8564e>(4 ใหม่)</span></p><span class="text-xs font-bold text-primary" data-v-26c8564e>อ่านทั้งหมด</span></div><div class="bg-primary/[0.03] flex items-start gap-3 px-4 py-3" data-v-26c8564e><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "check-circle",
				class: "h-[18px] w-[18px]"
			}, null, _parent));
			_push(`</span><div class="min-w-0" data-v-26c8564e><div class="flex items-center gap-1.5" data-v-26c8564e><p class="truncate text-sm font-bold text-ink" data-v-26c8564e>จ่ายเงินแล้ว ฿18,000</p><span class="h-1.5 w-1.5 rounded-full bg-green-500" data-v-26c8564e></span></div><p class="text-xs text-muted" data-v-26c8564e>โอนเข้าบัญชีเรียบร้อย</p><p class="mt-1 text-[11px] text-[#5B6B82]/55" data-v-26c8564e>12 นาทีที่แล้ว</p></div></div><div class="flex items-start gap-3 px-4 py-3" data-v-26c8564e><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "alarm-clock",
				class: "h-[18px] w-[18px]"
			}, null, _parent));
			_push(`</span><div class="min-w-0" data-v-26c8564e><p class="truncate text-sm font-bold text-ink" data-v-26c8564e>ใกล้ถึง deadline ส่งงาน</p><p class="text-xs text-muted" data-v-26c8564e>ครบกำหนดพรุ่งนี้ 18:00 น.</p><p class="mt-1 text-[11px] text-[#5B6B82]/55" data-v-26c8564e>1 ชม. ที่แล้ว</p></div></div><div class="block border-t border-[#0F2747]/10 bg-surface px-4 py-3 text-center text-sm font-bold text-primary" data-v-26c8564e>ดูทั้งหมด</div></div></div><div class="rounded-xl border border-[#0F2747]/10 bg-white p-8 shadow-sm" data-v-26c8564e><p class="mb-5 text-xs font-bold uppercase tracking-widest text-[#5B6B82]/60" data-v-26c8564e>Cookie consent</p><div class="mx-auto max-w-sm rounded-2xl border border-[#0F2747]/10 bg-white p-5 shadow-xl" data-v-26c8564e><div class="flex items-start gap-3" data-v-26c8564e><div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" data-v-26c8564e>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "cookie",
				class: "h-6 w-6"
			}, null, _parent));
			_push(`</div><div data-v-26c8564e><p class="font-heading text-base font-extrabold text-ink" data-v-26c8564e>เราใช้คุกกี้</p><p class="mt-1 text-sm leading-relaxed text-muted" data-v-26c8564e>เพื่อให้เว็บทำงานได้ดีและแนะนำแคมเปญที่ตรงกับคุณ</p></div></div><div class="mt-4 flex flex-col gap-2 sm:flex-row-reverse" data-v-26c8564e><button type="button" class="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white" data-v-26c8564e>ยอมรับทั้งหมด</button><button type="button" class="flex-1 rounded-lg border border-[#0F2747]/15 bg-white px-4 py-2.5 text-sm font-bold text-ink" data-v-26c8564e>เฉพาะที่จำเป็น</button></div><p class="mt-2 text-center text-xs font-bold text-muted" data-v-26c8564e>ตั้งค่าคุกกี้</p></div></div></div></div></section><footer class="mt-16 flex items-center gap-3 border-t border-[#0F2747]/10 pt-8" data-v-26c8564e><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-12" data-v-26c8564e><p class="text-[11px] text-[#5B6B82]/60" data-v-26c8564e>© 2026 Ripples · Design System v4</p></footer></div>`);
		};
	}
});
//#endregion
//#region app/pages/docs/design-system.vue
var _sfc_setup = design_system_vue_vue_type_script_setup_true_lang_default.setup;
design_system_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/design-system.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var design_system_default = /*#__PURE__*/ _plugin_vue_export_helper_default(design_system_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-26c8564e"]]);

export { design_system_default as default };
//# sourceMappingURL=design-system-ErqWGStE.mjs.map
