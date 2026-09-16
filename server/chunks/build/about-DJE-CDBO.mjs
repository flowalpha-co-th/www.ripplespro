import { b as useLocale, a as useHead$1, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

//#region \0virtual:public?%2Fabout-team.jpg
var _virtual_public__2Fabout_team_default = publicAssetsURL("/about-team.jpg");
//#endregion
//#region app/pages/about.vue?vue&type=script&setup=true&lang.ts
var about_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "about",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("เกี่ยวกับเรา — Ripples", "About us — Ripples") }));
		const stats = [
			[
				"10,000+",
				"ครีเอเตอร์ที่ตรวจสอบแล้ว",
				"Verified creators"
			],
			[
				"500+",
				"แบรนด์ที่ไว้วางใจ",
				"Brands that trust us"
			],
			[
				"98%",
				"อัตราความสำเร็จ",
				"Success rate"
			],
			[
				"24/7",
				"ทีมซัพพอร์ต",
				"Support team"
			]
		];
		const values = [
			[
				"target",
				"ความโปร่งใส",
				"Transparency",
				"ทุกตัวเลขบน Ripples ตรวจสอบได้ ทั้งราคา engagement และผลงาน",
				"Every number on Ripples is verifiable — pricing, engagement, and results."
			],
			[
				"shield-check",
				"ความเชื่อถือได้",
				"Reliability",
				"สัญญาดิจิทัล เอกสารภาษีครบ ติดตามสถานะทุก milestone — แบรนด์และ creator ไว้ใจกันได้",
				"Digital contracts, complete tax documents, and milestone tracking — so brands and creators can trust each other."
			],
			[
				"zap",
				"นวัตกรรม",
				"Innovation",
				"เครื่องมือวัดผลและ dashboard ที่ทันสมัย ช่วยคุณตัดสินใจบน data จริง",
				"Modern measurement tools and dashboards that help you decide based on real data."
			],
			[
				"heart",
				"ชุมชน",
				"Community",
				"เราเชื่อว่า creator กับแบรนด์โตไปด้วยกันได้ Ripples คือสะพานเชื่อม",
				"We believe creators and brands can grow together — Ripples is the bridge."
			]
		];
		const team = [
			[
				"Alex K.",
				"Founder & CEO",
				68
			],
			[
				"Sara T.",
				"Head of Product",
				47
			],
			[
				"Chris L.",
				"Head of Creator Relations",
				13
			],
			[
				"Emma P.",
				"Head of Brand Success",
				32
			]
		];
		const features = [
			["Creator ทุกคนผ่านการตรวจสอบตัวตน (KYC) และ engagement จริง", "Every creator is identity-verified (KYC) with real engagement."],
			["สัญญาดิจิทัล + เอกสารภาษีครบถ้วน โปร่งใสทั้งสองฝ่าย", "Digital contracts plus complete tax documents — transparent for both sides."],
			["Dashboard วัดผลเรียลไทม์ทุกแคมเปญ", "A real-time performance dashboard for every campaign."],
			["Account manager ดูแลทุก campaign ตั้งแต่ต้นจนจบ", "An account manager handles every campaign from start to finish."],
			["ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อน", "Transparent pricing with no hidden fees."],
			["Support 24/7 ตอบเร็วทั้งไทยและอังกฤษ", "24/7 support with fast replies in both Thai and English."]
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-12"><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "sparkles",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("เกี่ยวกับเรา", "About us"))}</span><h1 class="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[1.5] tracking-tight text-ink lg:text-6xl">${ssrInterpolate(unref(tr)("พื้นที่ที่แบรนด์เจอ", "Where brands meet"))} <span class="text-primary">${ssrInterpolate(unref(tr)("Creator ตัวจริง", "real creators"))}</span></h1><p class="mt-5 max-w-2xl text-sm leading-relaxed text-muted lg:text-lg">${ssrInterpolate(unref(tr)("Marketplace ยุคใหม่ — KOL ผ่านการตรวจสอบ engagement จริง วัดผลได้ทุกแคมเปญ ดูแลตั้งแต่เลือก creator บรีฟงาน ตรวจเนื้อหา จนถึงออกเอกสารครบถ้วน", "A modern marketplace — verified KOLs with real engagement, measurable results on every campaign, handled from picking creators and briefing to content review and full documentation."))}</p></section><section class="mb-16"><div class="grid grid-cols-2 divide-x divide-y divide-[#0F2747]/10 overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-[0_30px_60px_-40px_rgb(45_91_255_/_35%)] sm:grid-cols-4 sm:divide-y-0"><!--[-->`);
			ssrRenderList(stats, (s) => {
				_push(`<div class="p-8 text-center lg:p-10"><div class="font-heading text-3xl font-extrabold text-primary lg:text-5xl">${ssrInterpolate(s[0])}</div><div class="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#5B6B82]/60 lg:text-xs">${ssrInterpolate(unref(tr)(s[1], s[2]))}</div></div>`);
			});
			_push(`<!--]--></div></section><section class="mb-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div><h2 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("ทำไมเราสร้าง Ripples", "Why we built Ripples"))}</h2><div class="mt-5 space-y-4 text-sm leading-relaxed text-muted lg:text-base"><p>${ssrInterpolate(unref(tr)("วงการ KOL ในไทยโตเร็วมาก แต่แบรนด์ยังหา creator ที่ใช่ยาก ปัญหา fake followers, engagement ปลอม, สื่อสารกันวุ่นวาย — Ripples เกิดขึ้นเพื่อแก้โจทย์เหล่านี้ในที่เดียว", "Thailand's KOL scene is growing fast, but brands still struggle to find the right creators. Fake followers, fake engagement, and messy communication — Ripples was built to solve all of these in one place."))}</p><p>${ssrInterpolate(unref(tr)("เราคัดกรอง creator ทุกคนผ่าน KYC และวิเคราะห์ engagement จริง ตัวเลขในโปรไฟล์โปร่งใส ตรวจสอบได้ ไม่มี bot ไม่มี fake", "We screen every creator through KYC and analyze real engagement. Profile numbers are transparent and verifiable — no bots, no fakes."))}</p><p>${ssrInterpolate(unref(tr)("ตั้งแต่เลือก creator, บรีฟงาน, ตรวจเนื้อหา, go live, วัดผล จนจ่ายเงิน — จบในที่เดียว เรียลไทม์ ปลอดภัยทั้งสองฝ่าย", "From picking creators, briefing, and content review to going live, measuring results, and payment — all in one place, in real time, safe for both sides."))}</p></div></div><div class="relative"><img${ssrRenderAttr("src", _virtual_public__2Fabout_team_default)}${ssrRenderAttr("alt", unref(tr)("ทีม Ripples", "The Ripples team"))} class="w-full rounded-xl border border-[#0F2747]/10 object-cover shadow-[0_30px_60px_-30px_rgb(45_91_255_/_45%)]"><div class="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-2xl bg-primary/10"></div><div class="absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full bg-primary/20"></div></div></section><section class="mb-20"><div class="mb-8 max-w-xl"><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("ค่านิยมของเรา", "Our values"))}</span><h2 class="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("สิ่งที่เรายึดถือ", "What we stand for"))}</h2></div><div class="grid gap-5 sm:grid-cols-2"><!--[-->`);
			ssrRenderList(values, (v) => {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_35%)]"><div class="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: v[0],
					class: "h-7 w-7 text-primary"
				}, null, _parent));
				_push(`</div><h3 class="mt-5 font-heading text-xl font-bold text-ink">${ssrInterpolate(unref(tr)(v[1], v[2]))}</h3><p class="mt-2 text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)(v[3], v[4]))}</p></div>`);
			});
			_push(`<!--]--></div></section><section class="mb-20"><div class="mb-8 max-w-xl"><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("ทีมของเรา", "Our team"))}</span><h2 class="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("ทีมเบื้องหลัง Ripples", "The team behind Ripples"))}</h2></div><div class="grid grid-cols-2 gap-5 lg:grid-cols-4"><!--[-->`);
			ssrRenderList(team, (m) => {
				_push(`<div class="overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm"><div class="aspect-square overflow-hidden"><img${ssrRenderAttr("src", `https://i.pravatar.cc/600?img=${m[2]}`)}${ssrRenderAttr("alt", m[0])} class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"></div><div class="p-5 text-center"><h3 class="font-heading text-base font-bold text-ink">${ssrInterpolate(m[0])}</h3><p class="mt-0.5 text-xs text-muted">${ssrInterpolate(m[1])}</p></div></div>`);
			});
			_push(`<!--]--></div></section><section><div class="mb-8 max-w-xl"><span class="text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("ทำไมต้องเลือกเรา", "Why choose us"))}</span><h2 class="mt-2 font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("ทำไมแบรนด์เลือก Ripples", "Why brands choose Ripples"))}</h2></div><div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			ssrRenderList(features, (f) => {
				_push(`<div class="flex items-start gap-3 rounded-xl border border-[#0F2747]/10 bg-white p-4 shadow-sm">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check-circle",
					class: "mt-0.5 h-5 w-5 shrink-0 text-primary"
				}, null, _parent));
				_push(`<span class="text-sm leading-relaxed text-ink">${ssrInterpolate(unref(tr)(f[0], f[1]))}</span></div>`);
			});
			_push(`<!--]--></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/about.vue
var _sfc_setup = about_vue_vue_type_script_setup_true_lang_default.setup;
about_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = about_vue_vue_type_script_setup_true_lang_default;

export { about_default as default };
//# sourceMappingURL=about-DJE-CDBO.mjs.map
