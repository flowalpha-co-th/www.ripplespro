import { _ as _plugin_vue_export_helper_default, b as useLocale, a as useHead$1, u as useAuthStore, I as Icon_default, N as NuxtLink } from '../virtual/entry.mjs';
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("Ripples — เปลี่ยนคอนเทนต์ให้เป็นรายได้จริง", "Ripples — Turn content into real income") }));
		useAuthStore();
		const TONE = {
			open: {
				label: "เปิดรับสมัคร",
				labelEn: "Open",
				cls: "bg-primary text-white",
				dot: true
			},
			soon: {
				label: "ใกล้ปิดรับ",
				labelEn: "Closing soon",
				cls: "bg-amber-400 text-[#0F2747]",
				dot: false
			},
			new: {
				label: "มาใหม่",
				labelEn: "New",
				cls: "bg-green-500 text-white",
				dot: false
			}
		};
		const featured = [
			{
				cat: "แฟชั่น",
				catEn: "Fashion",
				brand: "Fashion Brand Co.",
				title: "Summer Collection 2026",
				d: "ร่วมโปรโมทคอลเลกชั่นแฟชั่นใหม่ล่าสุดสำหรับซัมเมอร์นี้ มองหา Influencer ที่สไตล์การแต่งตัวโดดเด่นบน Instagram",
				dEn: "Help promote the latest summer fashion collection. Looking for influencers with standout style on Instagram.",
				budget: "฿15,000 – 30,000",
				spots: "45/50",
				deadline: "30 เม.ย. 2026",
				deadlineEn: "30 Apr 2026",
				plat: "Instagram",
				tone: "open",
				img: "photo-1483985988355-763728e1935b"
			},
			{
				cat: "ความงาม",
				catEn: "Beauty",
				brand: "L'Oréal Thailand",
				title: "L'Oréal Serum Review",
				d: "เปิดตัว serum บำรุงผิวสูตรใหม่ มองหา beauty influencer ที่มีความรู้ด้าน skincare มารีวิวการใช้งานจริง",
				dEn: "Launching a new skincare serum. Looking for beauty influencers with skincare expertise to review real-world use.",
				budget: "฿12,000 – 24,000",
				spots: "28/50",
				deadline: "1 พ.ค. 2026",
				deadlineEn: "1 May 2026",
				plat: "Instagram",
				tone: "open",
				img: "photo-1596462502278-27bfdc403348"
			},
			{
				cat: "ฟิตเนส",
				catEn: "Fitness",
				brand: "Nike Thailand",
				title: "Nike Running Club",
				d: "แคมเปญรองเท้าวิ่งคอลเลกชั่นใหม่ มองหา fitness influencer มาร่วมท้าทายการวิ่งและสร้างแรงบันดาลใจ",
				dEn: "New running shoe collection campaign. Looking for fitness influencers to join the running challenge and inspire.",
				budget: "฿9,000 – 18,000",
				spots: "12/30",
				deadline: "30 มิ.ย. 2026",
				deadlineEn: "30 Jun 2026",
				plat: "Instagram",
				tone: "soon",
				img: "photo-1542291026-7eec264c27ff"
			},
			{
				cat: "เทคโนโลยี",
				catEn: "Technology",
				brand: "TechZone",
				title: "Tech Review Q2",
				d: "รีวิวสมาร์ทโฟนและแกดเจ็ตใหม่ล่าสุด มองหา tech reviewer บน YouTube ที่เล่าฟีเจอร์ได้เข้าใจง่าย",
				dEn: "Reviewing the latest smartphones and gadgets. Looking for YouTube tech reviewers who explain features clearly.",
				budget: "฿8,000 – 16,000",
				spots: "8/50",
				deadline: "15 มิ.ย. 2026",
				deadlineEn: "15 Jun 2026",
				plat: "YouTube",
				tone: "open",
				img: "photo-1511707171634-5f897ff02aa9"
			},
			{
				cat: "อาหาร",
				catEn: "Food",
				brand: "Taste Kitchen",
				title: "Food Festival Promo",
				d: "โปรโมทเทศกาลอาหารสุดยิ่งใหญ่ มองหา food blogger มารีวิวเมนูเด็ดแบบน่ากิน กระตุ้นการสั่งซื้อ",
				dEn: "Promoting a major food festival. Looking for food bloggers to review signature dishes appetisingly.",
				budget: "฿10,000 – 20,000",
				spots: "18/100",
				deadline: "28 มิ.ย. 2026",
				deadlineEn: "28 Jun 2026",
				plat: "TikTok",
				tone: "new",
				img: "photo-1414235077428-338989a2e8c0"
			}
		];
		const more = [
			{
				cat: "ความงาม",
				catEn: "Beauty",
				brand: "GlowLab Beauty",
				title: "Skincare Glow Set",
				d: "รีวิวเซ็ตสกินแคร์ตัวใหม่ เน้นผิวกระจ่างใส สำหรับสาย beauty บน TikTok & Instagram",
				dEn: "Review the new skincare set focused on radiant skin — for beauty creators on TikTok & Instagram.",
				budget: "฿12,000 – 25,000",
				spots: "30/60",
				deadline: "5 ก.ค. 2026",
				deadlineEn: "5 Jul 2026",
				plat: "TikTok",
				tone: "open",
				img: "photo-1556228578-8c89e6adf883"
			},
			{
				cat: "ฟิตเนส",
				catEn: "Fitness",
				brand: "FitPro Studio",
				title: "30-Day Fitness Challenge",
				d: "ชวนสายเฮลท์ตี้ร่วมชาเลนจ์ออกกำลังกาย 30 วัน พร้อมรีวิวอุปกรณ์ฟิตเนสรุ่นใหม่",
				dEn: "Inviting health-conscious creators to join a 30-day workout challenge and review the latest fitness gear.",
				budget: "฿9,000 – 18,000",
				spots: "22/40",
				deadline: "10 ก.ค. 2026",
				deadlineEn: "10 Jul 2026",
				plat: "Instagram",
				tone: "open",
				img: "photo-1517838277536-f5f99be501cd"
			},
			{
				cat: "ไลฟ์สไตล์",
				catEn: "Lifestyle",
				brand: "Shopee Thailand",
				title: "Shopee Mid-Year Sale",
				d: "มหกรรมช้อปออนไลน์กลางปี มองหา influencer ทุกสายช่วยโปรโมทดีลเด็ดตลอดแคมเปญ",
				dEn: "The big mid-year online shopping festival. Looking for influencers across all niches to promote the best deals.",
				budget: "฿15,000 – 30,000",
				spots: "80/200",
				deadline: "30 มิ.ย. 2026",
				deadlineEn: "30 Jun 2026",
				plat: "TikTok",
				tone: "soon",
				img: "photo-1607082349566-187342175e2f"
			},
			{
				cat: "ไลฟ์สไตล์",
				catEn: "Lifestyle",
				brand: "NimbusTV",
				title: "Travel Essentials Guide",
				d: "ไกด์ของใช้จำเป็นสำหรับการเดินทาง มองหา lifestyle creator มาเล่าเรื่องราวการใช้งานจริง",
				dEn: "A travel essentials guide. Looking for lifestyle creators to tell relatable, real-use stories.",
				budget: "฿9,000 – 19,000",
				spots: "11/35",
				deadline: "28 ก.ค. 2026",
				deadlineEn: "28 Jul 2026",
				plat: "Instagram",
				tone: "open",
				img: "photo-1542435503-956c469947f6"
			}
		];
		const heroImg = (id) => `https://images.unsplash.com/${id}?w=1600&q=80&fit=crop`;
		const cardImg = (id) => `https://images.unsplash.com/${id}?w=600&q=80&fit=crop`;
		ref(null);
		const activeSlide = ref(0);
		const counter = computed(() => `${String(activeSlide.value + 1).padStart(2, "0")} / ${String(featured.length).padStart(2, "0")}`);
		const stats = [
			[
				"10K+",
				"ครีเอเตอร์ที่ใช้งาน",
				"Active creators"
			],
			[
				"500+",
				"แบรนด์ที่ตรวจสอบแล้ว",
				"Verified brands"
			],
			[
				"7 วัน",
				"จ่ายเงินเฉลี่ย",
				"Avg. payout time"
			],
			[
				"฿500M+",
				"จ่ายแล้วทั้งหมด",
				"Total paid out"
			]
		];
		const whys = [
			[
				"badge-check",
				"แบรนด์ตรวจสอบแล้วเท่านั้น",
				"Verified brands only",
				"ทุกแบรนด์ผ่านการตรวจสอบ 100% ไม่มีงานหลอก รับงานได้อย่างมั่นใจ",
				"Every brand is 100% verified — no fake jobs, accept work with confidence."
			],
			[
				"file-text",
				"เอกสารภาษีอัตโนมัติ",
				"Automatic tax documents",
				"เอกสารภาษีครบ จบในแอป — 50 ทวิ, ใบกำกับภาษี ออกให้อัตโนมัติ",
				"All your tax documents in one app — withholding certificates and tax invoices issued automatically."
			],
			[
				"trending-up",
				"ติดตามผลเรียลไทม์",
				"Real-time tracking",
				"ดูรายได้และผลงานได้ทันทีทุกแคมเปญ โปร่งใส ตรวจสอบได้ตลอดเวลา",
				"See your earnings and performance instantly on every campaign — transparent and verifiable anytime."
			]
		];
		const steps = [
			["สมัครสมาชิก & ยืนยันตัวตน", "Sign up & verify your identity"],
			["เลือกแคมเปญที่ชอบแล้วกดสมัคร", "Pick a campaign you love and apply"],
			["สร้างคอนเทนต์ตามบรีฟ", "Create content following the brief"],
			["รับเงินโอนเข้าบัญชีโดยตรง", "Get paid directly to your account"]
		];
		const brandsA = [
			{
				n: "Luxe Beauty",
				c: "#B76E79",
				i: "spark",
				t: "Beauty"
			},
			{
				n: "TechZone",
				c: "#2D5BFF",
				i: "hex",
				t: "Zone"
			},
			{
				n: "Taste Kitchen",
				c: "#E1772B",
				i: "disc",
				t: "Kitchen"
			},
			{
				n: "GlowLab",
				c: "#D89B00",
				i: "ring",
				t: "Lab"
			},
			{
				n: "FitPro",
				c: "#1F8A5B",
				i: "bolt",
				t: "Pro"
			},
			{
				n: "Maison Aroma",
				c: "#6E4E9E",
				i: "drop",
				t: "Aroma"
			},
			{
				n: "UrbanThread",
				c: "#0F2747",
				i: "square",
				t: "Thread"
			},
			{
				n: "PureLeaf",
				c: "#3FA34D",
				i: "leaf",
				t: "Leaf"
			},
			{
				n: "NovaPlay",
				c: "#7C3AED",
				i: "tri",
				t: "Play"
			},
			{
				n: "CafeNord",
				c: "#8A5A2B",
				i: "disc",
				t: "Nord"
			},
			{
				n: "PixelByte",
				c: "#2D5BFF",
				i: "square",
				t: "Byte"
			}
		];
		const brandsB = [
			{
				n: "Verdant",
				c: "#1F8A5B",
				i: "leaf",
				t: "dant"
			},
			{
				n: "Aurio",
				c: "#C99700",
				i: "diamond",
				t: "rio"
			},
			{
				n: "SnackLab",
				c: "#E1772B",
				i: "disc",
				t: "Lab"
			},
			{
				n: "MoveOn",
				c: "#0EA5A5",
				i: "bolt",
				t: "On"
			},
			{
				n: "Lumiere",
				c: "#B76E79",
				i: "ring",
				t: "iere"
			},
			{
				n: "ByteCart",
				c: "#2D5BFF",
				i: "hex",
				t: "Cart"
			},
			{
				n: "Zenith",
				c: "#0F2747",
				i: "diamond",
				t: "nith"
			},
			{
				n: "Hydra",
				c: "#0EA5A5",
				i: "drop",
				t: "dra"
			},
			{
				n: "Solace",
				c: "#6E4E9E",
				i: "spark",
				t: "lace"
			},
			{
				n: "NimbusTV",
				c: "#2D5BFF",
				i: "disc",
				t: "TV"
			},
			{
				n: "Bloome",
				c: "#E0578B",
				i: "spark",
				t: "oome"
			}
		];
		const brandPaths = {
			spark: "M12 1.5c.6 5 3.5 7.9 9 9-5.5 1.1-8.4 4-9 9-.6-5-3.5-7.9-9-9 5.5-1.1 8.4-4 9-9z",
			hex: "M12 2l8.66 5v10L12 22 3.34 17V7L12 2z",
			disc: "M12 3a9 9 0 100 18 9 9 0 000-18z",
			ring: "M12 4a8 8 0 100 16 8 8 0 000-16z",
			bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
			drop: "M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z",
			diamond: "M12 2l7 10-7 10-7-10 7-10z",
			square: "M8.5 4h7A4.5 4.5 0 0120 8.5v7a4.5 4.5 0 01-4.5 4.5h-7A4.5 4.5 0 014 15.5v-7A4.5 4.5 0 018.5 4z",
			tri: "M12 3l9 16H3z",
			leaf: "M20 4C9 4 4 9 4 16v4h4c7 0 12-5 12-16z"
		};
		const strokeMarks = /* @__PURE__ */ new Set(["hex", "ring"]);
		function splitName(b) {
			if (b.t && b.n.endsWith(b.t)) return {
				head: b.n.slice(0, b.n.length - b.t.length),
				tail: b.t
			};
			return {
				head: b.n,
				tail: ""
			};
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-c205a0eb><section class="mb-6 lg:mb-8" data-v-c205a0eb><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary" data-v-c205a0eb>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "sparkles",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("ครีเอเตอร์ มาร์เก็ตเพลส", "Creator marketplace"))}</span><div class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between" data-v-c205a0eb><h1 class="font-heading text-3xl font-extrabold leading-[1.25] tracking-tight text-ink sm:text-4xl lg:text-5xl" data-v-c205a0eb>${ssrInterpolate(unref(tr)("เปลี่ยนคอนเทนต์ให้เป็น", "Turn your content into"))} <span class="text-primary" data-v-c205a0eb>${ssrInterpolate(unref(tr)("รายได้จริง", "real income"))}</span></h1>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/register",
				class: "inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition-all hover:bg-primaryDark active:translate-y-0.5"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`${ssrInterpolate(unref(tr)("เริ่มเป็น Creator ฟรี", "Become a Creator — free"))} `);
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-right",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
					} else return [createTextVNode(toDisplayString(unref(tr)("เริ่มเป็น Creator ฟรี", "Become a Creator — free")) + " ", 1), createVNode(_component_Icon, {
						name: "arrow-right",
						class: "h-4 w-4"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div><p class="mt-3 max-w-xl text-sm leading-relaxed text-muted lg:text-base" data-v-c205a0eb>${ssrInterpolate(unref(tr)("จับคู่กับแบรนด์ที่ผ่านการตรวจสอบ จ่ายตรงเวลา เอกสารภาษีจัดให้ครบ — ในที่เดียว", "Match with verified brands, get paid on time, and have all your tax documents handled — all in one place."))}</p></section><section class="relative mb-6 overflow-hidden rounded-[2rem]" data-v-c205a0eb><div class="no-scrollbar flex h-[68vh] min-h-[440px] max-h-[720px] snap-x snap-mandatory overflow-x-auto scroll-smooth" data-v-c205a0eb><!--[-->`);
			ssrRenderList(featured, (c, i) => {
				_push(`<article role="button" tabindex="0" class="group relative h-full w-full shrink-0 cursor-pointer snap-center snap-always overflow-hidden" data-v-c205a0eb><img${ssrRenderAttr("src", heroImg(c.img))}${ssrRenderAttr("alt", c.title)} class="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 group-hover:scale-105" data-v-c205a0eb><div class="absolute inset-0 bg-gradient-to-t from-[#0F2747] via-[#0F2747]/55 to-[#0F2747]/10" data-v-c205a0eb></div><div class="absolute inset-0 bg-gradient-to-r from-[#0F2747]/70 via-transparent to-transparent" data-v-c205a0eb></div><div class="relative flex h-full flex-col justify-end p-6 pb-24 sm:p-10 sm:pb-24 lg:p-16 lg:pb-28" data-v-c205a0eb><div class="flex flex-wrap items-center gap-2" data-v-c205a0eb><span class="${ssrRenderClass([TONE[c.tone].cls, "inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wide"])}" data-v-c205a0eb>`);
				if (TONE[c.tone].dot) _push(`<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-white" data-v-c205a0eb></span>`);
				else _push(`<!---->`);
				_push(`${ssrInterpolate(unref(tr)(TONE[c.tone].label, TONE[c.tone].labelEn))}</span><span class="rounded-md bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur" data-v-c205a0eb>${ssrInterpolate(unref(tr)(c.cat, c.catEn))}</span><span class="rounded-md bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur" data-v-c205a0eb>${ssrInterpolate(c.plat)}</span></div><p class="mt-6 text-sm font-medium text-white/70" data-v-c205a0eb>${ssrInterpolate(c.brand)}</p><h2 class="mt-1 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl" data-v-c205a0eb>${ssrInterpolate(c.title)}</h2><p class="mt-4 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/75 lg:text-base" data-v-c205a0eb>${ssrInterpolate(unref(tr)(c.d, c.dEn))}</p><div class="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-white" data-v-c205a0eb><div data-v-c205a0eb><span class="block text-[10px] uppercase tracking-widest text-white/50" data-v-c205a0eb>${ssrInterpolate(unref(tr)("งบประมาณ", "Budget"))}</span><span class="font-heading text-lg font-extrabold" data-v-c205a0eb>${ssrInterpolate(c.budget)}</span></div><div class="flex items-center gap-2 text-sm text-white/85" data-v-c205a0eb>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "users",
					class: "h-4 w-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(c.spots)}</div><div class="flex items-center gap-2 text-sm text-white/85" data-v-c205a0eb>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "calendar",
					class: "h-4 w-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)(c.deadline, c.deadlineEn))}</div></div><div class="mt-8" data-v-c205a0eb><span class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-[0_12px_30px_-10px_rgb(0_0_0_/_50%)] transition-transform group-hover:translate-x-1" data-v-c205a0eb>${ssrInterpolate(unref(tr)("ดูแคมเปญนี้", "View campaign"))} `);
				_push(ssrRenderComponent(_component_Icon, {
					name: "arrow-right",
					class: "h-4 w-4"
				}, null, _parent));
				_push(`</span></div></div></article>`);
			});
			_push(`<!--]--></div><span class="pointer-events-none absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur lg:left-16 lg:top-8" data-v-c205a0eb>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "sparkles",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("แคมเปญแนะนำ", "Featured campaigns"))}</span><button type="button"${ssrRenderAttr("aria-label", unref(tr)("ก่อนหน้า", "Previous"))} class="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-primary sm:flex lg:left-6" data-v-c205a0eb>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "chevron-left",
				class: "h-6 w-6"
			}, null, _parent));
			_push(`</button><button type="button"${ssrRenderAttr("aria-label", unref(tr)("ถัดไป", "Next"))} class="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-primary sm:flex lg:right-6" data-v-c205a0eb>`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "chevron-right",
				class: "h-6 w-6"
			}, null, _parent));
			_push(`</button><div class="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-4 lg:bottom-8" data-v-c205a0eb><div class="flex items-center gap-2" data-v-c205a0eb><!--[-->`);
			ssrRenderList(featured, (c, i) => {
				_push(`<button type="button"${ssrRenderAttr("aria-label", `${unref(tr)("ไปที่แคมเปญ", "Go to campaign")} ${i + 1}`)} class="${ssrRenderClass([i === unref(activeSlide) ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70", "h-2 rounded-full transition-all"])}" data-v-c205a0eb></button>`);
			});
			_push(`<!--]--></div><span class="font-heading text-xs font-bold tabular-nums text-white/80" data-v-c205a0eb>${ssrInterpolate(unref(counter))}</span></div></section><section data-v-c205a0eb><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-v-c205a0eb><!--[-->`);
			ssrRenderList(more, (c) => {
				_push(`<article role="button" tabindex="0" class="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_40%)]" data-v-c205a0eb><div class="relative h-44 overflow-hidden" data-v-c205a0eb><img${ssrRenderAttr("src", cardImg(c.img))}${ssrRenderAttr("alt", c.title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-v-c205a0eb><span class="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur" data-v-c205a0eb>${ssrInterpolate(unref(tr)(c.cat, c.catEn))}</span><span class="${ssrRenderClass([TONE[c.tone].cls, "absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wide"])}" data-v-c205a0eb>`);
				if (TONE[c.tone].dot) _push(`<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-white" data-v-c205a0eb></span>`);
				else _push(`<!---->`);
				_push(`${ssrInterpolate(unref(tr)(TONE[c.tone].label, TONE[c.tone].labelEn))}</span></div><div class="flex flex-1 flex-col p-5" data-v-c205a0eb><p class="text-xs text-muted" data-v-c205a0eb>${ssrInterpolate(c.brand)} · ${ssrInterpolate(c.plat)}</p><h3 class="mt-1 font-heading text-lg font-bold text-ink" data-v-c205a0eb>${ssrInterpolate(c.title)}</h3><p class="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-[#5B6B82]/80" data-v-c205a0eb>${ssrInterpolate(unref(tr)(c.d, c.dEn))}</p><div class="mt-3 flex items-center gap-4 text-xs text-muted" data-v-c205a0eb><span class="flex items-center gap-1.5" data-v-c205a0eb>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "users",
					class: "h-4 w-4 text-primary"
				}, null, _parent));
				_push(` ${ssrInterpolate(c.spots)}</span><span class="flex items-center gap-1.5" data-v-c205a0eb>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "calendar",
					class: "h-4 w-4 text-primary"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)(c.deadline, c.deadlineEn))}</span></div><div class="mt-4 flex items-center justify-between border-t border-[#0F2747]/10 pt-4" data-v-c205a0eb><div data-v-c205a0eb><span class="block text-[10px] uppercase tracking-widest text-[#5B6B82]/40" data-v-c205a0eb>${ssrInterpolate(unref(tr)("งบประมาณ", "Budget"))}</span><span class="font-bold text-primary" data-v-c205a0eb>${ssrInterpolate(c.budget)}</span></div><span class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:translate-x-1" data-v-c205a0eb>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "arrow-right",
					class: "h-4 w-4"
				}, null, _parent));
				_push(`</span></div></div></article>`);
			});
			_push(`<!--]--></div></section><section class="mt-16 lg:mt-24" data-v-c205a0eb><p class="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#5B6B82]/70" data-v-c205a0eb>${ssrInterpolate(unref(tr)("แบรนด์ชั้นนำที่ไว้วางใจ Ripples", "Leading brands that trust Ripples"))}</p><div class="rip-marquee relative overflow-hidden py-1" data-v-c205a0eb><div class="flex overflow-hidden" data-v-c205a0eb><div class="rip-track animate-marquee-left" data-v-c205a0eb><!--[-->`);
			ssrRenderList(2, (pass) => {
				_push(`<!--[--><!--[-->`);
				ssrRenderList(brandsA, (b) => {
					_push(`<div class="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#0F2747]/[0.06] bg-white px-5 py-3 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" data-v-c205a0eb><svg viewBox="0 0 24 24" class="h-7 w-7 shrink-0" data-v-c205a0eb><path${ssrRenderAttr("d", brandPaths[b.i])}${ssrRenderAttr("fill", unref(strokeMarks).has(b.i) ? "none" : b.c)}${ssrRenderAttr("stroke", unref(strokeMarks).has(b.i) ? b.c : "none")}${ssrRenderAttr("stroke-width", unref(strokeMarks).has(b.i) ? 2.4 : 0)} stroke-linejoin="round" data-v-c205a0eb></path></svg><span class="whitespace-nowrap font-heading text-[15px] font-bold tracking-tight text-[#16235C]" data-v-c205a0eb>${ssrInterpolate(splitName(b).head)}<span style="${ssrRenderStyle({ color: b.c })}" data-v-c205a0eb>${ssrInterpolate(splitName(b).tail)}</span></span></div>`);
				});
				_push(`<!--]--><!--]-->`);
			});
			_push(`<!--]--></div></div><div class="mt-3 flex overflow-hidden" data-v-c205a0eb><div class="rip-track animate-marquee-right" data-v-c205a0eb><!--[-->`);
			ssrRenderList(2, (pass) => {
				_push(`<!--[--><!--[-->`);
				ssrRenderList(brandsB, (b) => {
					_push(`<div class="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#0F2747]/[0.06] bg-white px-5 py-3 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" data-v-c205a0eb><svg viewBox="0 0 24 24" class="h-7 w-7 shrink-0" data-v-c205a0eb><path${ssrRenderAttr("d", brandPaths[b.i])}${ssrRenderAttr("fill", unref(strokeMarks).has(b.i) ? "none" : b.c)}${ssrRenderAttr("stroke", unref(strokeMarks).has(b.i) ? b.c : "none")}${ssrRenderAttr("stroke-width", unref(strokeMarks).has(b.i) ? 2.4 : 0)} stroke-linejoin="round" data-v-c205a0eb></path></svg><span class="whitespace-nowrap font-heading text-[15px] font-bold tracking-tight text-[#16235C]" data-v-c205a0eb>${ssrInterpolate(splitName(b).head)}<span style="${ssrRenderStyle({ color: b.c })}" data-v-c205a0eb>${ssrInterpolate(splitName(b).tail)}</span></span></div>`);
				});
				_push(`<!--]--><!--]-->`);
			});
			_push(`<!--]--></div></div></div></section><section class="mt-8 lg:mt-10" data-v-c205a0eb><div class="grid grid-cols-2 divide-x divide-y divide-[#0F2747]/10 overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-[0_30px_60px_-40px_rgb(45_91_255_/_35%)] sm:grid-cols-4 sm:divide-y-0" data-v-c205a0eb><!--[-->`);
			ssrRenderList(stats, (s) => {
				_push(`<div class="p-8 text-center lg:p-10" data-v-c205a0eb><div class="font-heading text-3xl font-extrabold text-primary lg:text-5xl" data-v-c205a0eb>${ssrInterpolate(s[0])}</div><div class="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#5B6B82]/60 lg:text-xs" data-v-c205a0eb>${ssrInterpolate(unref(tr)(s[1], s[2]))}</div></div>`);
			});
			_push(`<!--]--></div></section><section class="mt-16 lg:mt-28" data-v-c205a0eb><h2 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-5xl" data-v-c205a0eb>${ssrInterpolate(unref(tr)("ทำไมต้อง", "Why"))} <span class="text-primary" data-v-c205a0eb>Ripples</span></h2><p class="mt-2 max-w-lg text-sm text-muted lg:text-base" data-v-c205a0eb>${ssrInterpolate(unref(tr)("เครื่องมือครบสำหรับ Creator ตั้งแต่หา campaign จนถึงรับเงิน — จบในที่เดียว", "Every tool a creator needs, from finding campaigns to getting paid — all in one place."))}</p><div class="mt-8 grid gap-5 sm:grid-cols-3" data-v-c205a0eb><!--[-->`);
			ssrRenderList(whys, (w) => {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm" data-v-c205a0eb><div class="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10" data-v-c205a0eb>`);
				_push(ssrRenderComponent(_component_Icon, {
					name: w[0],
					class: "h-6 w-6 text-primary"
				}, null, _parent));
				_push(`</div><h3 class="mt-5 font-heading text-lg font-bold text-ink" data-v-c205a0eb>${ssrInterpolate(unref(tr)(w[1], w[2]))}</h3><p class="mt-2 text-sm leading-relaxed text-muted" data-v-c205a0eb>${ssrInterpolate(unref(tr)(w[3], w[4]))}</p></div>`);
			});
			_push(`<!--]--></div></section><section class="mt-16 lg:mt-28" data-v-c205a0eb><div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-ink to-primaryDark p-8 text-white lg:p-14" data-v-c205a0eb><div class="pointer-events-none absolute inset-0 opacity-[0.06]" style="${ssrRenderStyle({
				"background-image": "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
				"background-size": "40px 40px"
			})}" data-v-c205a0eb></div><h2 class="relative font-heading text-2xl font-extrabold tracking-tight lg:text-4xl" data-v-c205a0eb>${ssrInterpolate(unref(tr)("เริ่มต้น 4 ขั้นตอนง่าย ๆ", "Get started in 4 easy steps"))}</h2><div class="relative mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" data-v-c205a0eb><!--[-->`);
			ssrRenderList(steps, (s, i) => {
				_push(`<div class="flex gap-4 lg:flex-col" data-v-c205a0eb><div class="${ssrRenderClass(["flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-heading text-lg font-extrabold", i === 0 ? "bg-primaryLight text-ink" : "border border-white/15 bg-white/10 text-white"])}" data-v-c205a0eb>${ssrInterpolate(i + 1)}</div><p class="text-sm font-medium leading-relaxed lg:text-base" data-v-c205a0eb>${ssrInterpolate(unref(tr)(s[0], s[1]))}</p></div>`);
			});
			_push(`<!--]--></div></div></section><section class="mt-16 text-center lg:mt-28" data-v-c205a0eb><h2 class="font-heading text-3xl font-extrabold leading-[1.5] tracking-tight text-ink lg:text-6xl" data-v-c205a0eb>${ssrInterpolate(unref(tr)("พร้อมเปลี่ยนคอนเทนต์", "Ready to turn content"))}<br data-v-c205a0eb>${ssrInterpolate(unref(tr)("เป็น", "into "))}<span class="text-primary" data-v-c205a0eb>${ssrInterpolate(unref(tr)("รายได้", "income"))}</span>?</h2><p class="mt-4 text-sm text-muted lg:text-base" data-v-c205a0eb>${ssrInterpolate(unref(tr)("สมัครฟรี ไม่มีค่าธรรมเนียมแรกเข้า ยกเลิกได้ทุกเมื่อ", "Sign up free, no entry fees, cancel anytime."))}</p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/register",
				class: "mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition-all hover:bg-primaryDark active:translate-y-0.5"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`${ssrInterpolate(unref(tr)("เริ่มเป็น Creator ฟรี", "Become a Creator — free"))} `);
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-right",
							class: "h-5 w-5"
						}, null, _parent, _scopeId));
					} else return [createTextVNode(toDisplayString(unref(tr)("เริ่มเป็น Creator ฟรี", "Become a Creator — free")) + " ", 1), createVNode(_component_Icon, {
						name: "arrow-right",
						class: "h-5 w-5"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</section></div>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c205a0eb"]]);

export { pages_default as default };
//# sourceMappingURL=pages-DCFpu3pH.mjs.map
