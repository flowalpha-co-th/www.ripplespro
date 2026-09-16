import { _ as _plugin_vue_export_helper_default, b as useLocale, a as useHead$1, I as Icon_default, N as NuxtLink, n as navigateTo } from '../virtual/entry.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

//#region app/pages/portal/campaigns.vue?vue&type=script&setup=true&lang.ts
var BUDGET_MIN = 0;
var BUDGET_MAX = 3e4;
var CHIP_ON = "bg-primary text-white shadow-[0_8px_18px_-8px_rgb(45_91_255_/_65%)]";
var CHIP_OFF = "border border-[#0F2747]/10 bg-white text-muted hover:border-primary/30 hover:text-primary";
var PAGE_SIZE = 9;
var campaigns_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "campaigns",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("แคมเปญ — Ripples", "Campaigns — Ripples") }));
		const cats = [
			"ทั้งหมด",
			"แฟชั่น",
			"ความงาม",
			"อาหาร",
			"เทคโนโลยี",
			"ไลฟ์สไตล์",
			"ฟิตเนส"
		];
		const catEn = {
			"ทั้งหมด": "All",
			"แฟชั่น": "Fashion",
			"ความงาม": "Beauty",
			"อาหาร": "Food",
			"เทคโนโลยี": "Technology",
			"ไลฟ์สไตล์": "Lifestyle",
			"ฟิตเนส": "Fitness"
		};
		const catLabel = (c) => tr(c, catEn[c] ?? c);
		const baseCampaigns = [
			{
				t: "Summer Collection 2026",
				b: "Fashion Brand Co.",
				plat: "Instagram",
				cat: "แฟชั่น",
				d: "ร่วมโปรโมทคอลเลกชั่นแฟชั่นใหม่ล่าสุดสำหรับซัมเมอร์นี้ มองหา influencer สไตล์โดดเด่นบน Instagram",
				dEn: "Help promote the latest summer fashion collection. Looking for influencers with standout style on Instagram.",
				j: 45,
				n: 50,
				end: "30 เม.ย. 2026",
				min: 15e3,
				max: 3e4,
				app: "none",
				img: "photo-1469334031218-e382a71b716b",
				logo: "photo-1441986300917-64674bd600d8"
			},
			{
				t: "L'Oréal Serum Review",
				b: "L'Oréal Thailand",
				plat: "Instagram",
				cat: "ความงาม",
				d: "เปิดตัว serum บำรุงผิวสูตรใหม่ มองหา beauty influencer ที่มีความรู้ด้าน skincare",
				dEn: "Launching a new skincare serum. Looking for beauty influencers with skincare expertise.",
				j: 28,
				n: 50,
				end: "1 พ.ค. 2026",
				min: 12e3,
				max: 24e3,
				app: "applied",
				img: "photo-1556228578-0d85b1a4d571",
				logo: "photo-1522335789203-aabd1fc54bc9"
			},
			{
				t: "Nike Running Club",
				b: "Nike Thailand",
				plat: "Instagram",
				cat: "ฟิตเนส",
				d: "แคมเปญรองเท้าวิ่งคอลเลกชั่นใหม่ มองหา fitness influencer มาร่วมท้าทายการวิ่ง",
				dEn: "New running shoe collection campaign. Looking for fitness influencers to join the running challenge.",
				j: 12,
				n: 30,
				end: "30 มิ.ย. 2026",
				min: 9e3,
				max: 18e3,
				app: "invited",
				final: 16e3,
				img: "photo-1542291026-7eec264c27ff",
				logo: "photo-1542291026-7eec264c27ff"
			},
			{
				t: "Tech Review Q2",
				b: "TechZone",
				plat: "YouTube",
				cat: "เทคโนโลยี",
				d: "รีวิวสมาร์ทโฟนและแกดเจ็ตใหม่ล่าสุด มองหา tech reviewer บน YouTube",
				dEn: "Reviewing the latest smartphones and gadgets. Looking for tech reviewers on YouTube.",
				j: 8,
				n: 50,
				end: "15 มิ.ย. 2026",
				min: 8e3,
				max: 16e3,
				app: "none",
				img: "photo-1511707171634-5f897ff02aa9",
				logo: "photo-1519389950473-47ba0277781c"
			},
			{
				t: "Food Festival Promo",
				b: "Taste Kitchen",
				plat: "TikTok",
				cat: "อาหาร",
				d: "โปรโมทเทศกาลอาหารสุดยิ่งใหญ่ มองหา food blogger มารีวิวเมนูเด็ด",
				dEn: "Promoting a major food festival. Looking for food bloggers to review signature dishes.",
				j: 100,
				n: 100,
				end: "28 ก.พ. 2026",
				min: 1e4,
				max: 2e4,
				app: "selected",
				final: 15e3,
				img: "photo-1414235077428-338989a2e8c0",
				logo: "photo-1517248135467-4c7edcad34c4"
			},
			{
				t: "Shopee 11.11 Mega Sale",
				b: "Shopee Thailand",
				plat: "TikTok",
				cat: "ไลฟ์สไตล์",
				d: "มหกรรมช้อปออนไลน์ครั้งยิ่งใหญ่แห่งปี มองหา influencer ทุกสายช่วยโปรโมท",
				dEn: "The year's biggest online shopping festival. Looking for influencers across all niches to help promote.",
				j: 200,
				n: 200,
				end: "12 พ.ย. 2025",
				min: 15e3,
				max: 3e4,
				app: "closed",
				img: "photo-1607082349566-187342175e2f",
				logo: "photo-1607082348824-0a96f2a4b9da"
			}
		];
		function buildCampaigns() {
			const list = baseCampaigns.map((c) => ({ ...c }));
			const imgPool = {
				"แฟชั่น": [
					"photo-1490481651871-ab68de25d43d",
					"photo-1483985988355-763728e1935b",
					"photo-1485231183945-fffde7cc051e",
					"photo-1539109136881-3be0616acf4b"
				],
				"ความงาม": [
					"photo-1596462502278-27bfdc403348",
					"photo-1620916566398-39f1143ab7be",
					"photo-1512496015851-a90fb38ba796",
					"photo-1503236823255-94609f598e71"
				],
				"อาหาร": [
					"photo-1504674900247-0877df9cc836",
					"photo-1540189549336-e6e99c3679fe",
					"photo-1565299624946-b28f40a0ae38",
					"photo-1476224203421-9ac39bcb3327"
				],
				"เทคโนโลยี": [
					"photo-1518770660439-4636190af475",
					"photo-1498049794561-7780e7231661",
					"photo-1517336714731-489689fd1ca8",
					"photo-1531297484001-80022131f5a1"
				],
				"ไลฟ์สไตล์": [
					"photo-1556742049-0cfed4f6a45d",
					"photo-1556228720-195a672e8a03",
					"photo-1542435503-956c469947f6",
					"photo-1517245386807-bb43f82c33c4"
				],
				"ฟิตเนส": [
					"photo-1571019613454-1cb2f99b2d8b",
					"photo-1517836357463-d25dfeac3438",
					"photo-1534258936925-c58bed479fcb",
					"photo-1518611012118-696072aa579a"
				]
			};
			const brands = [
				"Aura",
				"Nova",
				"Pulse",
				"Lumi",
				"Vibe",
				"Bloom",
				"Urban",
				"Stellar",
				"Fresh",
				"Peak",
				"Glow",
				"Zenith",
				"Maple",
				"Coral",
				"Drift",
				"Echo",
				"Halo",
				"Onyx"
			];
			const titles = {
				"แฟชั่น": [
					"New Arrivals Drop",
					"Streetwear Capsule",
					"Denim Reload",
					"Resort Collection",
					"Monochrome Edit"
				],
				"ความงาม": [
					"Glow Serum Launch",
					"Matte Lip Series",
					"Skincare Routine",
					"Clean Beauty Set",
					"Sunscreen Reboot"
				],
				"อาหาร": [
					"Signature Menu Tasting",
					"Plant-Based Launch",
					"Dessert Pop-up",
					"Coffee Origin Series",
					"Midnight Snack Box"
				],
				"เทคโนโลยี": [
					"Smartphone Unboxing",
					"Earbuds Review",
					"Smart Home Setup",
					"Laptop Challenge",
					"Gadget Roundup"
				],
				"ไลฟ์สไตล์": [
					"City Weekend Guide",
					"Home Makeover",
					"Travel Essentials",
					"Minimal Desk Setup",
					"Self-care Sunday"
				],
				"ฟิตเนส": [
					"30-Day Challenge",
					"Gym Wear Drop",
					"Protein Launch",
					"Morning Run Series",
					"Yoga Flow Sessions"
				]
			};
			const descs = {
				"แฟชั่น": "มองหา influencer สายแฟชั่นมาถ่ายลุคและรีวิวคอลเลกชั่นใหม่ให้โดดเด่นบนฟีด",
				"ความงาม": "มองหา beauty creator มารีวิวการใช้งานจริง เน้นเล่าขั้นตอนและผลลัพธ์ที่เห็นได้",
				"อาหาร": "มองหา food creator มาถ่ายเมนูและบอกต่อรสชาติแบบน่ากิน กระตุ้นการสั่งซื้อ",
				"เทคโนโลยี": "มองหา tech reviewer มาเล่าฟีเจอร์เด่นและประสบการณ์ใช้งานแบบเข้าใจง่าย",
				"ไลฟ์สไตล์": "มองหา lifestyle creator มาเล่าเรื่องราวการใช้งานในชีวิตประจำวันให้เข้าถึงง่าย",
				"ฟิตเนส": "มองหา fitness creator มาร่วมท้าทายและสร้างแรงบันดาลใจให้สายออกกำลังกาย"
			};
			const descsEn = {
				"แฟชั่น": "Looking for fashion creators to shoot looks and review the new collection so it stands out in the feed.",
				"ความงาม": "Looking for beauty creators to review real-world use, focusing on the routine and visible results.",
				"อาหาร": "Looking for food creators to shoot dishes and share their flavour appetisingly to drive orders.",
				"เทคโนโลยี": "Looking for tech reviewers to walk through key features and the user experience in an easy-to-follow way.",
				"ไลฟ์สไตล์": "Looking for lifestyle creators to tell relatable stories of everyday use.",
				"ฟิตเนส": "Looking for fitness creators to join the challenge and inspire the workout community."
			};
			const plats = [
				"Instagram",
				"TikTok",
				"YouTube",
				"Facebook"
			];
			const months = [
				"ก.พ.",
				"มี.ค.",
				"เม.ย.",
				"พ.ค.",
				"มิ.ย.",
				"ก.ค.",
				"ส.ค."
			];
			const apps = [
				"none",
				"none",
				"none",
				"none",
				"applied",
				"applied",
				"closed"
			];
			const catList = [
				"แฟชั่น",
				"ความงาม",
				"อาหาร",
				"เทคโนโลยี",
				"ไลฟ์สไตล์",
				"ฟิตเนส"
			];
			let seed = 7;
			const rnd = () => {
				seed = seed * 1103515245 + 12345 & 2147483647;
				return seed / 2147483647;
			};
			const pick = (a) => a[Math.floor(rnd() * a.length)];
			for (let i = 0; i < 42; i++) {
				const cat = catList[i % catList.length];
				const brand = `${brands[i % brands.length]} ${cat}`;
				const minB = (5 + Math.floor(rnd() * 16)) * 1e3;
				const maxB = Math.min(3e4, minB + (4 + Math.floor(rnd() * 12)) * 1e3);
				const cap = pick([
					20,
					30,
					50,
					80,
					100
				]);
				list.push({
					t: `${brands[i % brands.length]} · ${pick(titles[cat])}`,
					b: brand,
					plat: pick(plats),
					cat,
					d: descs[cat],
					dEn: descsEn[cat],
					j: Math.floor(rnd() * cap),
					n: cap,
					end: `${1 + Math.floor(rnd() * 28)} ${pick(months)} 2026`,
					min: minB,
					max: maxB,
					app: pick(apps),
					img: pick(imgPool[cat]),
					logo: pick(imgPool[cat])
				});
			}
			return list;
		}
		const campaigns = ref(buildCampaigns());
		const APP = {
			none: {
				label: "เปิดรับสมัคร",
				labelEn: "Open",
				cls: "bg-primary text-white"
			},
			applied: {
				label: "สมัครแล้ว · รอคัดเลือก",
				labelEn: "Applied · In review",
				cls: "bg-amber-100 text-amber-700"
			},
			invited: {
				label: "ได้รับเชิญ",
				labelEn: "Invited",
				cls: "bg-violet-100 text-violet-700"
			},
			selected: {
				label: "ได้รับเลือก · กำลังทำ",
				labelEn: "Selected · In progress",
				cls: "bg-green-100 text-green-700"
			},
			closed: {
				label: "ปิดรับแล้ว",
				labelEn: "Closed",
				cls: "bg-white/90 text-muted backdrop-blur"
			}
		};
		const statusFilters = [
			[
				"all",
				"ทั้งหมด",
				"All"
			],
			[
				"none",
				"เปิดรับ",
				"Open"
			],
			[
				"applied",
				"สมัครแล้ว",
				"Applied"
			],
			[
				"invited",
				"ได้รับเชิญ",
				"Invited"
			],
			[
				"selected",
				"กำลังทำ",
				"In progress"
			]
		];
		const STATUS_DOT = {
			all: "bg-primary",
			none: "bg-primary",
			applied: "bg-amber-400",
			invited: "bg-violet-400",
			selected: "bg-green-500"
		};
		const budgetPresets = [
			{
				label: "ทั้งหมด",
				labelEn: "All",
				lo: 0,
				hi: 3e4
			},
			{
				label: "ต่ำกว่า ฿1,000",
				labelEn: "Under ฿1,000",
				lo: 0,
				hi: 1e3
			},
			{
				label: "฿1,000+",
				labelEn: "฿1,000+",
				lo: 1e3,
				hi: 3e4
			},
			{
				label: "฿5,000+",
				labelEn: "฿5,000+",
				lo: 5e3,
				hi: 3e4
			},
			{
				label: "฿10,000+",
				labelEn: "฿10,000+",
				lo: 1e4,
				hi: 3e4
			}
		];
		const money = (n) => `฿${n.toLocaleString()}`;
		const actCat = ref("ทั้งหมด");
		const actStatus = ref("all");
		const q = ref("");
		const bLo = ref(BUDGET_MIN);
		const bHi = ref(BUDGET_MAX);
		const page = ref(1);
		const shown = ref(PAGE_SIZE);
		const viewMode = ref("infinite");
		const filterOpen = ref(false);
		function statusCount(s) {
			return s === "all" ? campaigns.value.length : campaigns.value.filter((c) => c.app === s).length;
		}
		const filteredList = computed(() => campaigns.value.filter((c) => {
			const ql = q.value.toLowerCase();
			return (actStatus.value === "all" || c.app === actStatus.value) && (actCat.value === "ทั้งหมด" || c.cat === actCat.value) && (c.t.toLowerCase().includes(ql) || c.b.toLowerCase().includes(ql)) && c.min <= bHi.value && c.max >= bLo.value;
		}));
		const anyFilter = computed(() => actStatus.value !== "all" || actCat.value !== "ทั้งหมด" || q.value !== "" || bLo.value !== BUDGET_MIN || bHi.value !== BUDGET_MAX);
		watch([
			actStatus,
			actCat,
			q,
			bLo,
			bHi,
			viewMode
		], () => {
			page.value = 1;
			shown.value = PAGE_SIZE;
		});
		const totalPages = computed(() => Math.max(1, Math.ceil(filteredList.value.length / PAGE_SIZE)));
		const slice = computed(() => {
			const list = filteredList.value;
			if (viewMode.value === "pagination") {
				const start = (Math.min(page.value, totalPages.value) - 1) * PAGE_SIZE;
				return list.slice(start, start + PAGE_SIZE);
			}
			return list.slice(0, shown.value);
		});
		const gridCount = computed(() => {
			const list = filteredList.value;
			if (!list.length) return "";
			if (viewMode.value === "pagination") {
				const p = Math.min(page.value, totalPages.value);
				const start = (p - 1) * PAGE_SIZE;
				return tr(`แสดง ${start + 1}–${start + slice.value.length} จาก ${list.length} · หน้า ${p}/${totalPages.value}`, `Showing ${start + 1}–${start + slice.value.length} of ${list.length} · Page ${p}/${totalPages.value}`);
			}
			return tr(`แสดง ${slice.value.length} จาก ${list.length} แคมเปญ`, `Showing ${slice.value.length} of ${list.length} campaigns`);
		});
		const resultCount = computed(() => anyFilter.value ? tr(`พบ ${filteredList.value.length} จาก ${campaigns.value.length} แคมเปญ`, `Found ${filteredList.value.length} of ${campaigns.value.length} campaigns`) : tr(`แสดงทั้งหมด ${campaigns.value.length} แคมเปญ`, `Showing all ${campaigns.value.length} campaigns`));
		const budgetHiLabel = computed(() => bHi.value >= BUDGET_MAX ? `${money(BUDGET_MAX)}+` : money(bHi.value));
		const budgetActive = computed(() => !(bLo.value === BUDGET_MIN && bHi.value === BUDGET_MAX));
		const activeChips = computed(() => {
			const chips = [];
			if (q.value) chips.push(["search", tr(`ค้นหา: “${q.value}”`, `Search: “${q.value}”`)]);
			if (actStatus.value !== "all") chips.push(["status", statusLabel(actStatus.value)]);
			if (actCat.value !== "ทั้งหมด") chips.push(["cat", catLabel(actCat.value)]);
			if (bLo.value !== BUDGET_MIN || bHi.value !== BUDGET_MAX) chips.push(["budget", `${money(bLo.value)}–${budgetHiLabel.value}`]);
			return chips;
		});
		const activeCount = computed(() => activeChips.value.length);
		const showSummary = computed(() => activeChips.value.length > 0 && !filterOpen.value);
		function statusLabel(s) {
			const f = statusFilters.find((x) => x[0] === s);
			return f ? tr(f[1], f[2]) : s;
		}
		function isInvitedOrSelected(c) {
			return c.app === "invited" || c.app === "selected";
		}
		const pagerNums = computed(() => {
			const out = [];
			const pages = totalPages.value;
			const p = Math.min(page.value, pages);
			for (let i = 1; i <= pages; i++) if (i === 1 || i === pages || i >= p - 1 && i <= p + 1) out.push(i);
			else if (i === p - 2 || i === p + 2) out.push("…");
			return out;
		});
		const remain = computed(() => filteredList.value.length - shown.value);
		function apply(c) {
			c.app = "applied";
		}
		function accept(c) {
			c.app = "selected";
		}
		const declined = ref(/* @__PURE__ */ new Set());
		function decline(c) {
			declined.value = /* @__PURE__ */ new Set([...declined.value, c]);
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))} data-v-175b8af1><section class="mb-8" data-v-175b8af1><h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-5xl" data-v-175b8af1>${ssrInterpolate(unref(tr)("แคมเปญที่น่าสนใจ", "Campaigns for you"))}</h1><p class="mt-2 max-w-2xl text-sm text-muted lg:text-base" data-v-175b8af1>${ssrInterpolate(unref(tr)("เลือกแคมเปญที่ใช่ สมัครได้ทันที — แคมเปญตั้งงบเป็นช่วง (budget range) ส่วนราคาจริงที่ได้รับ แอดมินจะเคาะตอนคัดเลือก", "Find the right campaign and apply instantly — each campaign sets a budget range, and the admin finalises your actual fee during selection."))}</p></section><section class="mb-6 overflow-hidden rounded-2xl border border-[#0F2747]/10 bg-white shadow-[0_18px_44px_-30px_rgb(15_39_71_/_45%)]" data-v-175b8af1><div class="flex items-center justify-between gap-3 border-b border-[#0F2747]/[0.07] bg-gradient-to-r from-surface to-white px-5 py-4 lg:px-7" data-v-175b8af1><button type="button" class="flex flex-1 items-center gap-3 text-left" data-v-175b8af1><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "sliders-horizontal",
				class: "h-5 w-5"
			}, null, _parent));
			_push(`</span><div class="min-w-0" data-v-175b8af1><p class="flex items-center gap-1.5 font-heading text-sm font-bold text-ink" data-v-175b8af1>${ssrInterpolate(unref(tr)("ตัวกรองแคมเปญ", "Campaign filters"))} `);
			if (unref(activeCount)) _push(`<span class="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-white" data-v-175b8af1>${ssrInterpolate(unref(activeCount))}</span>`);
			else _push(`<!---->`);
			_push(`</p><p class="truncate text-[11px] text-muted" data-v-175b8af1>${ssrInterpolate(unref(resultCount))}</p></div></button><div class="flex shrink-0 items-center gap-2" data-v-175b8af1>`);
			if (unref(anyFilter)) {
				_push(`<button type="button" class="flex items-center gap-1.5 rounded-lg border border-[#0F2747]/12 bg-white px-3 py-1.5 text-xs font-bold text-muted transition hover:border-primary/40 hover:text-primary" data-v-175b8af1>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "rotate-ccw",
					class: "h-3.5 w-3.5"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)("ล้าง", "Clear"))}</button>`);
			} else _push(`<!---->`);
			_push(`<button type="button" class="flex items-center gap-1.5 rounded-lg border border-[#0F2747]/12 bg-white px-3 py-1.5 text-xs font-bold text-muted transition hover:border-primary/40 hover:text-primary" data-v-175b8af1><span data-v-175b8af1>${ssrInterpolate(unref(filterOpen) ? unref(tr)("ซ่อน", "Hide") : unref(tr)("ตัวกรอง", "Filters"))}</span> `);
			_push(ssrRenderComponent(_component_Icon, {
				name: "chevron-down",
				class: ["h-4 w-4 transition-transform", unref(filterOpen) ? "rotate-180" : ""]
			}, null, _parent));
			_push(`</button></div></div>`);
			if (unref(showSummary)) {
				_push(`<div class="flex flex-wrap gap-1.5 border-b border-[#0F2747]/[0.07] px-5 py-3 lg:px-7" data-v-175b8af1><!--[-->`);
				ssrRenderList(unref(activeChips), (c) => {
					_push(`<button type="button" class="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary transition hover:bg-primary/15" data-v-175b8af1>${ssrInterpolate(c[1])} `);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x",
						class: "h-3 w-3"
					}, null, _parent));
					_push(`</button>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`<div class="space-y-5 p-5 lg:p-7" style="${ssrRenderStyle(unref(filterOpen) ? null : { display: "none" })}" data-v-175b8af1><div class="relative" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "search",
				class: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5B6B82]/50"
			}, null, _parent));
			_push(`<input${ssrRenderAttr("value", unref(q))} type="text"${ssrRenderAttr("placeholder", unref(tr)("ค้นหาแคมเปญ หรือแบรนด์...", "Search campaigns or brands..."))} class="w-full rounded-xl border border-[#0F2747]/12 bg-surface py-3 pl-12 pr-4 text-sm text-ink placeholder-[#5B6B82]/50 outline-none transition focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10" data-v-175b8af1></div><div data-v-175b8af1><div class="mb-2.5 flex items-center gap-2" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "briefcase",
				class: "h-3.5 w-3.5 text-primary/60"
			}, null, _parent));
			_push(`<p class="text-[11px] font-bold uppercase tracking-widest text-muted" data-v-175b8af1>${ssrInterpolate(unref(tr)("สถานะงานของฉัน", "My status"))}</p></div><div class="flex flex-wrap gap-2" data-v-175b8af1><!--[-->`);
			ssrRenderList(statusFilters, (s) => {
				_push(`<button type="button" class="${ssrRenderClass([s[0] === unref(actStatus) ? CHIP_ON : CHIP_OFF, "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition"])}" data-v-175b8af1><span class="${ssrRenderClass([s[0] === unref(actStatus) ? "bg-white" : STATUS_DOT[s[0]], "h-2 w-2 rounded-full"])}" data-v-175b8af1></span>${ssrInterpolate(unref(tr)(s[1], s[2]))} <span class="${ssrRenderClass([s[0] === unref(actStatus) ? "bg-white/25 text-white" : "bg-surface text-muted", "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums"])}" data-v-175b8af1>${ssrInterpolate(statusCount(s[0]))}</span></button>`);
			});
			_push(`<!--]--></div></div><div class="border-t border-[#0F2747]/[0.07] pt-5" data-v-175b8af1><div class="mb-2.5 flex items-center gap-2" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "tag",
				class: "h-3.5 w-3.5 text-primary/60"
			}, null, _parent));
			_push(`<p class="text-[11px] font-bold uppercase tracking-widest text-muted" data-v-175b8af1>${ssrInterpolate(unref(tr)("หมวดหมู่", "Category"))}</p></div><div class="flex flex-wrap gap-2" data-v-175b8af1><!--[-->`);
			ssrRenderList(cats, (c) => {
				_push(`<button type="button" class="${ssrRenderClass([c === unref(actCat) ? CHIP_ON : CHIP_OFF, "rounded-full px-4 py-1.5 text-xs font-bold transition"])}" data-v-175b8af1>${ssrInterpolate(catLabel(c))}</button>`);
			});
			_push(`<!--]--></div></div><div class="border-t border-[#0F2747]/[0.07] pt-5" data-v-175b8af1><div class="mb-2.5 flex items-center gap-2" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "wallet",
				class: "h-3.5 w-3.5 text-primary/60"
			}, null, _parent));
			_push(`<p class="text-[11px] font-bold uppercase tracking-widest text-muted" data-v-175b8af1>${ssrInterpolate(unref(tr)("ช่วงงบประมาณ", "Budget range"))}</p>`);
			if (unref(budgetActive)) _push(`<button type="button" class="text-[11px] font-bold text-primary hover:text-primaryDark" data-v-175b8af1>${ssrInterpolate(unref(tr)("· ล้างค่า", "· Reset"))}</button>`);
			else _push(`<!---->`);
			_push(`</div><div class="flex flex-wrap gap-2" data-v-175b8af1><!--[-->`);
			ssrRenderList(budgetPresets, (p) => {
				_push(`<button type="button" class="${ssrRenderClass([unref(bLo) === p.lo && unref(bHi) === p.hi ? CHIP_ON : CHIP_OFF, "whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold transition"])}" data-v-175b8af1>${ssrInterpolate(unref(tr)(p.label, p.labelEn))}</button>`);
			});
			_push(`<!--]--></div><div class="mt-4 flex items-center gap-3 rounded-xl border border-[#0F2747]/[0.07] bg-surface/60 p-4" data-v-175b8af1><label class="flex flex-1 items-center gap-1.5 rounded-lg border border-[#0F2747]/10 bg-white px-3 py-2 focus-within:border-primary/50" data-v-175b8af1><span class="text-sm font-bold text-muted" data-v-175b8af1>฿</span><input type="number" inputmode="numeric" min="0" max="30000" step="500"${ssrRenderAttr("value", unref(bLo) || "")}${ssrRenderAttr("placeholder", unref(tr)("ต่ำสุด", "Min"))}${ssrRenderAttr("aria-label", unref(tr)("งบต่ำสุด", "Minimum budget"))} class="w-full min-w-0 bg-transparent text-sm font-bold tabular-nums text-ink outline-none placeholder:font-normal placeholder:text-muted/60" data-v-175b8af1></label><span class="text-muted" data-v-175b8af1>–</span><label class="flex flex-1 items-center gap-1.5 rounded-lg border border-[#0F2747]/10 bg-white px-3 py-2 focus-within:border-primary/50" data-v-175b8af1><span class="text-sm font-bold text-muted" data-v-175b8af1>฿</span><input type="number" inputmode="numeric" min="0" max="30000" step="500"${ssrRenderAttr("value", unref(bHi) >= BUDGET_MAX ? "" : unref(bHi))}${ssrRenderAttr("placeholder", unref(tr)("สูงสุด", "Max"))}${ssrRenderAttr("aria-label", unref(tr)("งบสูงสุด", "Maximum budget"))} class="w-full min-w-0 bg-transparent text-sm font-bold tabular-nums text-ink outline-none placeholder:font-normal placeholder:text-muted/60" data-v-175b8af1></label></div></div></div></section><div class="mb-4 flex items-center justify-between gap-3" data-v-175b8af1><p class="text-xs text-muted" data-v-175b8af1>${ssrInterpolate(unref(gridCount))}</p><div class="inline-flex shrink-0 rounded-lg border border-[#0F2747]/10 bg-white p-1 text-xs font-bold" data-v-175b8af1><button type="button" class="${ssrRenderClass([unref(viewMode) === "infinite" ? "bg-primary text-white" : "text-muted hover:text-primary", "flex items-center gap-1.5 rounded-md px-3 py-1.5 transition"])}" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "mouse-pointer-2",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("เลื่อนต่อเนื่อง", "Infinite scroll"))}</button><button type="button" class="${ssrRenderClass([unref(viewMode) === "pagination" ? "bg-primary text-white" : "text-muted hover:text-primary", "flex items-center gap-1.5 rounded-md px-3 py-1.5 transition"])}" data-v-175b8af1>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "layout-grid",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("แบ่งหน้า", "Pages"))}</button></div></div><section class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-v-175b8af1><!--[-->`);
			ssrRenderList(unref(slice), (c) => {
				_push(`<article class="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_40%)]" data-v-175b8af1>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/portal/campaign-detail",
					class: "flex flex-1 flex-col"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="relative h-44 overflow-hidden" data-v-175b8af1${_scopeId}><img${ssrRenderAttr("src", `https://images.unsplash.com/${c.img}?w=800&h=600&fit=crop`)}${ssrRenderAttr("alt", c.t)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-v-175b8af1${_scopeId}><span class="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur" data-v-175b8af1${_scopeId}>${ssrInterpolate(catLabel(c.cat))}</span><span class="${ssrRenderClass([APP[c.app].cls, "absolute right-4 top-4 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wide"])}" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)(APP[c.app].label, APP[c.app].labelEn))}</span></div><div class="flex flex-1 flex-col p-5" data-v-175b8af1${_scopeId}><div class="flex items-center gap-2" data-v-175b8af1${_scopeId}><img${ssrRenderAttr("src", `https://images.unsplash.com/${c.logo}?w=100&h=100&fit=crop`)} class="h-6 w-6 rounded-full object-cover"${ssrRenderAttr("alt", c.b)} data-v-175b8af1${_scopeId}><span class="text-xs text-muted" data-v-175b8af1${_scopeId}>${ssrInterpolate(c.b)} · ${ssrInterpolate(c.plat)}</span></div><h3 class="mt-3 line-clamp-1 font-heading text-lg font-bold text-ink" data-v-175b8af1${_scopeId}>${ssrInterpolate(c.t)}</h3><p class="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-[#5B6B82]/80" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)(c.d, c.dEn))}</p><div class="mt-3 flex items-center gap-4 text-xs text-muted" data-v-175b8af1${_scopeId}><span class="flex items-center gap-1.5" data-v-175b8af1${_scopeId}>`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "users",
								class: "h-4 w-4 text-primary"
							}, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(c.j)}/${ssrInterpolate(c.n)}</span><span class="flex items-center gap-1.5" data-v-175b8af1${_scopeId}>`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "calendar",
								class: "h-4 w-4 text-primary"
							}, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(c.end)}</span></div><div class="mt-4 border-t border-[#0F2747]/10 pt-4" data-v-175b8af1${_scopeId}>`);
							if (c.app === "invited") {
								_push(`<div class="mb-3 flex items-center gap-2 rounded-lg bg-violet-50 p-2.5 text-xs text-violet-700" data-v-175b8af1${_scopeId}>`);
								_push(ssrRenderComponent(_component_Icon, {
									name: "mail-open",
									class: "h-4 w-4 shrink-0"
								}, null, _parent, _scopeId));
								_push(` ${ssrInterpolate(unref(tr)("แบรนด์เชิญคุณร่วมงาน พร้อมเสนอราคาแล้ว", "The brand invited you to collaborate and has made an offer"))}</div>`);
							} else _push(`<!---->`);
							_push(`<div class="flex items-center justify-between gap-2" data-v-175b8af1${_scopeId}>`);
							if (isInvitedOrSelected(c)) _push(`<div data-v-175b8af1${_scopeId}><p class="text-[10px] uppercase tracking-widest text-[#5B6B82]/50" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("ราคาจริง · TIER 3", "Final price · TIER 3"))}</p><p class="font-bold text-primary" data-v-175b8af1${_scopeId}>${ssrInterpolate(money(c.final))}</p><p class="text-[10px] text-[#5B6B82]/50 line-through" data-v-175b8af1${_scopeId}>${ssrInterpolate(money(c.min))}–${ssrInterpolate(money(c.max))}</p></div>`);
							else _push(`<div data-v-175b8af1${_scopeId}><p class="text-[10px] uppercase tracking-widest text-[#5B6B82]/50" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("งบประมาณ (ช่วง)", "Budget (range)"))}</p><p class="font-bold text-primary" data-v-175b8af1${_scopeId}>${ssrInterpolate(money(c.min))} – ${ssrInterpolate(money(c.max))}</p></div>`);
							_push(`<span data-v-175b8af1${_scopeId}>`);
							if (c.app === "none") _push(`<button type="button" class="rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-primaryDark active:translate-y-0.5" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("สมัครเลย", "Apply now"))}</button>`);
							else if (c.app === "applied") _push(`<button disabled type="button" class="cursor-default rounded-lg bg-amber-50 px-4 py-2 text-xs font-bold text-amber-600" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("รอผลคัดเลือก", "Awaiting selection"))}</button>`);
							else if (c.app === "invited") {
								_push(`<!--[-->`);
								if (unref(declined).has(c)) _push(`<span class="text-xs font-bold text-muted" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("ปฏิเสธข้อเสนอแล้ว", "Offer declined"))}</span>`);
								else _push(`<div class="flex gap-2" data-v-175b8af1${_scopeId}><button type="button" class="rounded-lg bg-primary px-3 py-2 text-xs font-bold text-white transition hover:bg-primaryDark" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("ตอบรับ", "Accept"))}</button><button type="button" class="rounded-lg border border-[#0F2747]/15 px-3 py-2 text-xs font-bold text-muted transition hover:text-ink" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("ปฏิเสธ", "Decline"))}</button></div>`);
								_push(`<!--]-->`);
							} else if (c.app === "selected") {
								_push(`<button type="button" class="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("ไปที่งาน", "Go to task"))} `);
								_push(ssrRenderComponent(_component_Icon, {
									name: "arrow-right",
									class: "h-3.5 w-3.5"
								}, null, _parent, _scopeId));
								_push(`</button>`);
							} else _push(`<button disabled type="button" class="cursor-not-allowed rounded-lg border border-[#0F2747]/10 bg-surface px-4 py-2 text-xs font-bold text-[#5B6B82]/45" data-v-175b8af1${_scopeId}>${ssrInterpolate(unref(tr)("ปิดรับแล้ว", "Closed"))}</button>`);
							_push(`</span></div></div></div>`);
						} else return [createVNode("div", { class: "relative h-44 overflow-hidden" }, [
							createVNode("img", {
								src: `https://images.unsplash.com/${c.img}?w=800&h=600&fit=crop`,
								alt: c.t,
								class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							}, null, 8, ["src", "alt"]),
							createVNode("span", { class: "absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur" }, toDisplayString(catLabel(c.cat)), 1),
							createVNode("span", { class: ["absolute right-4 top-4 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wide", APP[c.app].cls] }, toDisplayString(unref(tr)(APP[c.app].label, APP[c.app].labelEn)), 3)
						]), createVNode("div", { class: "flex flex-1 flex-col p-5" }, [
							createVNode("div", { class: "flex items-center gap-2" }, [createVNode("img", {
								src: `https://images.unsplash.com/${c.logo}?w=100&h=100&fit=crop`,
								class: "h-6 w-6 rounded-full object-cover",
								alt: c.b
							}, null, 8, ["src", "alt"]), createVNode("span", { class: "text-xs text-muted" }, toDisplayString(c.b) + " · " + toDisplayString(c.plat), 1)]),
							createVNode("h3", { class: "mt-3 line-clamp-1 font-heading text-lg font-bold text-ink" }, toDisplayString(c.t), 1),
							createVNode("p", { class: "mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-[#5B6B82]/80" }, toDisplayString(unref(tr)(c.d, c.dEn)), 1),
							createVNode("div", { class: "mt-3 flex items-center gap-4 text-xs text-muted" }, [createVNode("span", { class: "flex items-center gap-1.5" }, [createVNode(_component_Icon, {
								name: "users",
								class: "h-4 w-4 text-primary"
							}), createTextVNode(" " + toDisplayString(c.j) + "/" + toDisplayString(c.n), 1)]), createVNode("span", { class: "flex items-center gap-1.5" }, [createVNode(_component_Icon, {
								name: "calendar",
								class: "h-4 w-4 text-primary"
							}), createTextVNode(" " + toDisplayString(c.end), 1)])]),
							createVNode("div", { class: "mt-4 border-t border-[#0F2747]/10 pt-4" }, [c.app === "invited" ? (openBlock(), createBlock("div", {
								key: 0,
								class: "mb-3 flex items-center gap-2 rounded-lg bg-violet-50 p-2.5 text-xs text-violet-700"
							}, [createVNode(_component_Icon, {
								name: "mail-open",
								class: "h-4 w-4 shrink-0"
							}), createTextVNode(" " + toDisplayString(unref(tr)("แบรนด์เชิญคุณร่วมงาน พร้อมเสนอราคาแล้ว", "The brand invited you to collaborate and has made an offer")), 1)])) : createCommentVNode("", true), createVNode("div", { class: "flex items-center justify-between gap-2" }, [isInvitedOrSelected(c) ? (openBlock(), createBlock("div", { key: 0 }, [
								createVNode("p", { class: "text-[10px] uppercase tracking-widest text-[#5B6B82]/50" }, toDisplayString(unref(tr)("ราคาจริง · TIER 3", "Final price · TIER 3")), 1),
								createVNode("p", { class: "font-bold text-primary" }, toDisplayString(money(c.final)), 1),
								createVNode("p", { class: "text-[10px] text-[#5B6B82]/50 line-through" }, toDisplayString(money(c.min)) + "–" + toDisplayString(money(c.max)), 1)
							])) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("p", { class: "text-[10px] uppercase tracking-widest text-[#5B6B82]/50" }, toDisplayString(unref(tr)("งบประมาณ (ช่วง)", "Budget (range)")), 1), createVNode("p", { class: "font-bold text-primary" }, toDisplayString(money(c.min)) + " – " + toDisplayString(money(c.max)), 1)])), createVNode("span", { onClick: withModifiers(() => {}, ["prevent", "stop"]) }, [c.app === "none" ? (openBlock(), createBlock("button", {
								key: 0,
								type: "button",
								class: "rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-primaryDark active:translate-y-0.5",
								onClick: ($event) => apply(c)
							}, toDisplayString(unref(tr)("สมัครเลย", "Apply now")), 9, ["onClick"])) : c.app === "applied" ? (openBlock(), createBlock("button", {
								key: 1,
								disabled: "",
								type: "button",
								class: "cursor-default rounded-lg bg-amber-50 px-4 py-2 text-xs font-bold text-amber-600"
							}, toDisplayString(unref(tr)("รอผลคัดเลือก", "Awaiting selection")), 1)) : c.app === "invited" ? (openBlock(), createBlock(Fragment, { key: 2 }, [unref(declined).has(c) ? (openBlock(), createBlock("span", {
								key: 0,
								class: "text-xs font-bold text-muted"
							}, toDisplayString(unref(tr)("ปฏิเสธข้อเสนอแล้ว", "Offer declined")), 1)) : (openBlock(), createBlock("div", {
								key: 1,
								class: "flex gap-2"
							}, [createVNode("button", {
								type: "button",
								class: "rounded-lg bg-primary px-3 py-2 text-xs font-bold text-white transition hover:bg-primaryDark",
								onClick: ($event) => accept(c)
							}, toDisplayString(unref(tr)("ตอบรับ", "Accept")), 9, ["onClick"]), createVNode("button", {
								type: "button",
								class: "rounded-lg border border-[#0F2747]/15 px-3 py-2 text-xs font-bold text-muted transition hover:text-ink",
								onClick: ($event) => decline(c)
							}, toDisplayString(unref(tr)("ปฏิเสธ", "Decline")), 9, ["onClick"])]))], 64)) : c.app === "selected" ? (openBlock(), createBlock("button", {
								key: 3,
								type: "button",
								class: "inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700",
								onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/portal/tasks")
							}, [createTextVNode(toDisplayString(unref(tr)("ไปที่งาน", "Go to task")) + " ", 1), createVNode(_component_Icon, {
								name: "arrow-right",
								class: "h-3.5 w-3.5"
							})], 8, ["onClick"])) : (openBlock(), createBlock("button", {
								key: 4,
								disabled: "",
								type: "button",
								class: "cursor-not-allowed rounded-lg border border-[#0F2747]/10 bg-surface px-4 py-2 text-xs font-bold text-[#5B6B82]/45"
							}, toDisplayString(unref(tr)("ปิดรับแล้ว", "Closed")), 1))], 8, ["onClick"])])])
						])];
					}),
					_: 2
				}, _parent));
				_push(`</article>`);
			});
			_push(`<!--]--></section>`);
			if (unref(filteredList).length === 0) _push(`<p class="py-16 text-center text-muted" data-v-175b8af1>${ssrInterpolate(unref(tr)("ไม่พบแคมเปญตามที่ค้นหา", "No campaigns match your search"))}</p>`);
			else _push(`<!---->`);
			_push(`<div class="mt-8" data-v-175b8af1>`);
			if (unref(filteredList).length > 0) {
				_push(`<!--[-->`);
				if (unref(viewMode) === "pagination") {
					_push(`<div class="flex flex-wrap items-center justify-center gap-1.5" data-v-175b8af1><button type="button"${ssrIncludeBooleanAttr(unref(page) === 1) ? " disabled" : ""} class="${ssrRenderClass([unref(page) === 1 ? "border border-[#0F2747]/8 bg-surface text-[#5B6B82]/40" : "border border-[#0F2747]/10 bg-white text-muted hover:border-primary/30 hover:text-primary", "inline-flex h-9 min-w-[36px] items-center justify-center rounded-lg px-3 text-xs font-bold transition"])}" data-v-175b8af1>‹ ${ssrInterpolate(unref(tr)("ก่อนหน้า", "Prev"))}</button><!--[-->`);
					ssrRenderList(unref(pagerNums), (p, i) => {
						_push(`<!--[-->`);
						if (p === "…") _push(`<span class="px-1 text-muted" data-v-175b8af1>…</span>`);
						else _push(`<button type="button" class="${ssrRenderClass([p === Math.min(unref(page), unref(totalPages)) ? "bg-primary text-white shadow-[0_8px_18px_-8px_rgb(45_91_255_/_65%)]" : "border border-[#0F2747]/10 bg-white text-muted hover:border-primary/30 hover:text-primary", "inline-flex h-9 min-w-[36px] items-center justify-center rounded-lg px-3 text-xs font-bold transition"])}" data-v-175b8af1>${ssrInterpolate(p)}</button>`);
						_push(`<!--]-->`);
					});
					_push(`<!--]--><button type="button"${ssrIncludeBooleanAttr(unref(page) >= unref(totalPages)) ? " disabled" : ""} class="${ssrRenderClass([unref(page) >= unref(totalPages) ? "border border-[#0F2747]/8 bg-surface text-[#5B6B82]/40" : "border border-[#0F2747]/10 bg-white text-muted hover:border-primary/30 hover:text-primary", "inline-flex h-9 min-w-[36px] items-center justify-center rounded-lg px-3 text-xs font-bold transition"])}" data-v-175b8af1>${ssrInterpolate(unref(tr)("ถัดไป", "Next"))} ›</button></div>`);
				} else {
					_push(`<!--[-->`);
					if (unref(shown) >= unref(filteredList).length) _push(`<p class="text-center text-xs text-[#5B6B82]/60" data-v-175b8af1>${ssrInterpolate(unref(tr)(`— แสดงครบทั้ง ${unref(filteredList).length} แคมเปญแล้ว —`, `— All ${unref(filteredList).length} campaigns shown —`))}</p>`);
					else {
						_push(`<div class="flex justify-center" data-v-175b8af1><button type="button" class="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white" data-v-175b8af1>`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "plus",
							class: "h-4 w-4"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("โหลดเพิ่มเติม", "Load more"))} <span class="text-xs font-medium opacity-70" data-v-175b8af1>${ssrInterpolate(unref(tr)(`(เหลืออีก ${unref(remain)})`, `(${unref(remain)} more)`))}</span></button></div>`);
					}
					_push(`<!--]-->`);
				}
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</div></main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/campaigns.vue
var _sfc_setup = campaigns_vue_vue_type_script_setup_true_lang_default.setup;
campaigns_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/campaigns.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var campaigns_default = /*#__PURE__*/ _plugin_vue_export_helper_default(campaigns_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-175b8af1"]]);

export { campaigns_default as default };
//# sourceMappingURL=campaigns-BqK9F36D.mjs.map
