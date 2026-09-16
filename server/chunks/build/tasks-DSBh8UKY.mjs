import { b as useLocale, a as useHead$1, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, useModel, watchEffect, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderTeleport, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

//#region app/components/FileDropzone.vue?vue&type=script&setup=true&lang.ts
var FileDropzone_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "FileDropzone",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		accept: { default: "" },
		multiple: {
			type: Boolean,
			default: true
		},
		hint: { default: "" }
	}, {
		"files": { default: () => [] },
		"filesModifiers": {}
	}),
	emits: ["update:files"],
	setup(__props) {
		const { tr } = useLocale();
		const files = useModel(__props, "files");
		ref(null);
		function fmtSize(n) {
			if (n < 1024) return `${n} B`;
			if (n < 1048576) return `${(n / 1024).toFixed(0)} KB`;
			return `${(n / 1048576).toFixed(1)} MB`;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><input type="file" class="hidden"${ssrRenderAttr("accept", __props.accept || void 0)}${ssrIncludeBooleanAttr(__props.multiple) ? " multiple" : ""}><button type="button" class="flex w-full cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-[#0F2747]/15 p-3 text-left transition hover:border-primary/50">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "upload",
				class: "h-5 w-5 shrink-0 text-[#5B6B82]/60"
			}, null, _parent));
			_push(`<span class="text-sm text-muted">${ssrInterpolate(files.value.length ? unref(tr)("เลือกไฟล์เพิ่ม", "Add more files") : unref(tr)("คลิกเพื่อเลือกไฟล์", "Click to choose a file"))} `);
			if (__props.hint) _push(`<span class="text-[#5B6B82]/50"> · ${ssrInterpolate(__props.hint)}</span>`);
			else _push(`<!---->`);
			_push(`</span></button>`);
			if (files.value.length) {
				_push(`<ul class="mt-2 space-y-1.5"><!--[-->`);
				ssrRenderList(files.value, (f, i) => {
					_push(`<li class="flex items-center gap-2.5 rounded-lg border border-[#0F2747]/10 bg-surface px-3 py-2">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "file",
						class: "h-4 w-4 shrink-0 text-primary"
					}, null, _parent));
					_push(`<span class="min-w-0 flex-1 truncate text-sm text-ink">${ssrInterpolate(f.name)}</span><span class="shrink-0 text-[11px] text-[#5B6B82]/60">${ssrInterpolate(fmtSize(f.size))}</span><button type="button"${ssrRenderAttr("aria-label", unref(tr)("ลบไฟล์", "Remove file"))} class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[#5B6B82]/60 transition hover:bg-red-50 hover:text-red-600">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x",
						class: "h-4 w-4"
					}, null, _parent));
					_push(`</button></li>`);
				});
				_push(`<!--]--></ul>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/FileDropzone.vue
var _sfc_setup$2 = FileDropzone_vue_vue_type_script_setup_true_lang_default.setup;
FileDropzone_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FileDropzone.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var FileDropzone_default = Object.assign(FileDropzone_vue_vue_type_script_setup_true_lang_default, { __name: "FileDropzone" });
//#endregion
//#region app/components/BillingSection.vue?vue&type=script&setup=true&lang.ts
var BillingSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BillingSection",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		price: {},
		campaignName: {}
	}, {
		"settled": {
			type: Boolean,
			default: false
		},
		"settledModifiers": {}
	}),
	emits: ["update:settled"],
	setup(__props) {
		const { tr } = useLocale();
		const settled = useModel(__props, "settled");
		const mode = ref(null);
		const invoiceFiles = ref([]);
		const consentGiven = ref(false);
		const consentOpen = ref(false);
		watchEffect(() => {
			settled.value = mode.value === "invoice" && invoiceFiles.value.length > 0 || mode.value === "consent" && consentGiven.value;
		});
		function fmtPrice(n) {
			return n.toLocaleString();
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_FileDropzone = FileDropzone_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><div class="grid gap-2 sm:grid-cols-2"><button type="button" class="${ssrRenderClass([unref(mode) === "invoice" ? "border-primary bg-primary/[0.06] text-primary" : "border-[#0F2747]/15 bg-white text-ink hover:border-primary/40", "flex items-center gap-2.5 rounded-xl border p-3 text-left text-sm font-semibold transition"])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "file-text",
				class: "h-5 w-5 shrink-0"
			}, null, _parent));
			_push(`<span>${ssrInterpolate(unref(tr)("มีใบแจ้งหนี้", "I have an invoice"))}</span>`);
			if (unref(mode) === "invoice") _push(ssrRenderComponent(_component_Icon, {
				name: "check",
				class: "ml-auto h-4 w-4 shrink-0"
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</button><button type="button" class="${ssrRenderClass([unref(mode) === "consent" && unref(consentGiven) ? "border-primary bg-primary/[0.06] text-primary" : "border-[#0F2747]/15 bg-white text-ink hover:border-primary/40", "flex items-center gap-2.5 rounded-xl border p-3 text-left text-sm font-semibold transition"])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "file-check",
				class: "h-5 w-5 shrink-0"
			}, null, _parent));
			_push(`<span>${ssrInterpolate(unref(tr)("ไม่มีใบแจ้งหนี้", "No invoice"))}</span>`);
			if (unref(mode) === "consent" && unref(consentGiven)) _push(ssrRenderComponent(_component_Icon, {
				name: "check",
				class: "ml-auto h-4 w-4 shrink-0"
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</button></div>`);
			if (unref(mode) === "invoice") {
				_push(`<div class="mt-3"><label class="mb-1 block text-xs font-semibold text-ink">${ssrInterpolate(unref(tr)("ไฟล์ใบแจ้งหนี้", "Invoice file"))}</label>`);
				_push(ssrRenderComponent(_component_FileDropzone, {
					files: unref(invoiceFiles),
					"onUpdate:files": ($event) => isRef(invoiceFiles) ? invoiceFiles.value = $event : null,
					hint: unref(tr)("PDF, รูป, ไฟล์อื่นๆ", "PDF, images, any file")
				}, null, _parent));
				_push(`</div>`);
			} else if (unref(mode) === "consent" && unref(consentGiven)) {
				_push(`<div class="mt-3 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-xs text-green-700">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check-circle",
					class: "mt-0.5 h-4 w-4 shrink-0"
				}, null, _parent));
				_push(`<span>${ssrInterpolate(unref(tr)("ยินยอมให้ตั้งเบิกเรียบร้อยแล้ว", "Consent to file the billing has been recorded."))} · ฿${ssrInterpolate(fmtPrice(__props.price))}</span></div>`);
			} else _push(`<!---->`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(consentOpen)) {
					_push(`<div class="fixed inset-0 z-[70] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"><div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"><div class="flex items-start gap-3"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "file-check",
						class: "h-6 w-6"
					}, null, _parent));
					_push(`</span><div><h3 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("เอกสารยินยอมรับทราบ", "Consent & acknowledgement"))}</h3><p class="text-xs text-muted">${ssrInterpolate(unref(tr)("สำหรับกรณีไม่มีใบแจ้งหนี้", "For creators without an invoice"))}</p></div></div><div class="mt-4 rounded-xl border border-[#0F2747]/10 bg-surface p-4 text-sm leading-relaxed text-ink/80">${ssrInterpolate(unref(tr)(`ข้าพเจ้ายินยอมและรับทราบให้ทาง Ripples นำข้อมูลของข้าพเจ้าในระบบไปใช้ในการตั้งเบิกค่าใช้จ่าย และยินยอมรับค่าตอบแทนสำหรับงาน “${__props.campaignName}” เป็นจำนวนเงิน ฿${fmtPrice(__props.price)} ตามที่ได้ตกลงกันไว้`, `I consent and acknowledge that Ripples may use my information in the system to file for reimbursement, and I agree to receive the compensation for “${__props.campaignName}” in the amount of ฿${fmtPrice(__props.price)} as agreed.`))}</div><div class="mt-4 flex items-center justify-between rounded-xl bg-primary/[0.06] px-4 py-3"><span class="text-sm text-muted">${ssrInterpolate(unref(tr)("ยอดค่าตอบแทนงานนี้", "Compensation for this task"))}</span><span class="font-heading text-xl font-extrabold text-primary">฿${ssrInterpolate(fmtPrice(__props.price))}</span></div><div class="mt-5 flex gap-3"><button type="button" class="flex-1 rounded-lg border border-[#0F2747]/15 bg-white px-4 py-3 text-sm font-bold text-muted transition hover:bg-surface">${ssrInterpolate(unref(tr)("ยกเลิก", "Cancel"))}</button><button type="button" class="flex-1 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ยินยอม", "I consent"))}</button></div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/BillingSection.vue
var _sfc_setup$1 = BillingSection_vue_vue_type_script_setup_true_lang_default.setup;
BillingSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BillingSection.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var BillingSection_default = Object.assign(BillingSection_vue_vue_type_script_setup_true_lang_default, { __name: "BillingSection" });
//#endregion
//#region app/pages/portal/tasks.vue?vue&type=script&setup=true&lang.ts
var tasks_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "tasks",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("งานของฉัน — Ripples", "My Tasks — Ripples") }));
		const STAGES = [
			{
				k: "brief_sent",
				ph: "brief",
				label: "รับบรีฟแล้ว",
				labelEn: "Brief received",
				bucket: "action",
				act: "storyline"
			},
			{
				k: "storyline_sent",
				ph: "storyline",
				label: "ส่ง Storyline แล้ว",
				labelEn: "Storyline submitted",
				bucket: "review"
			},
			{
				k: "storyline_feedback",
				ph: "storyline",
				label: "ได้รับ Feedback",
				labelEn: "Feedback received",
				bucket: "action",
				act: "storyline_revise"
			},
			{
				k: "storyline_revising",
				ph: "storyline",
				label: "กำลังแก้ Storyline",
				labelEn: "Revising storyline",
				bucket: "action",
				act: "storyline_revise"
			},
			{
				k: "storyline_approved",
				ph: "storyline",
				label: "Storyline อนุมัติ",
				labelEn: "Storyline approved",
				bucket: "action",
				act: "first_draft"
			},
			{
				k: "first_draft_sent",
				ph: "draft",
				label: "ส่ง First Draft แล้ว",
				labelEn: "First draft submitted",
				bucket: "review"
			},
			{
				k: "first_draft_feedback",
				ph: "draft",
				label: "Feedback First Draft",
				labelEn: "First draft feedback",
				bucket: "action",
				act: "second_draft"
			},
			{
				k: "second_draft_sent",
				ph: "draft",
				label: "ส่ง Second Draft แล้ว",
				labelEn: "Second draft submitted",
				bucket: "review"
			},
			{
				k: "second_draft_feedback",
				ph: "draft",
				label: "Feedback Second Draft",
				labelEn: "Second draft feedback",
				bucket: "action",
				act: "final_draft"
			},
			{
				k: "final_draft",
				ph: "draft",
				label: "ส่ง Final Draft แล้ว",
				labelEn: "Final draft submitted",
				bucket: "review"
			},
			{
				k: "draft_approved",
				ph: "draft",
				label: "Draft อนุมัติ",
				labelEn: "Draft approved",
				bucket: "action",
				act: "post_link"
			},
			{
				k: "posted_with_link",
				ph: "live",
				label: "โพสต์แล้ว + แนบลิงก์",
				labelEn: "Posted + link attached",
				bucket: "live"
			},
			{
				k: "waiting_capture_report",
				ph: "live",
				label: "รอส่ง Capture Report",
				labelEn: "Capture report pending",
				bucket: "action",
				act: "capture"
			},
			{
				k: "capture_report_sent",
				ph: "live",
				label: "ส่ง Capture Report",
				labelEn: "Capture report sent",
				bucket: "done"
			}
		];
		const PHASES = [
			[
				"brief",
				"บรีฟ",
				"Brief",
				"file-text"
			],
			[
				"storyline",
				"สตอรี่ไลน์",
				"Storyline",
				"pen-line"
			],
			[
				"draft",
				"ดราฟต์คอนเทนต์",
				"Content draft",
				"clapperboard"
			],
			[
				"live",
				"เผยแพร่ & รายงาน",
				"Publish & report",
				"rocket"
			]
		];
		function idx(k) {
			return STAGES.findIndex((s) => s.k === k);
		}
		function bucketOf(k) {
			return STAGES[idx(k)].bucket;
		}
		function effBucket(t) {
			return t.rejected ? "rejected" : bucketOf(t.stage);
		}
		function progress(stage) {
			return Math.round((idx(stage) + 1) / STAGES.length * 100);
		}
		const PLAT_CLS = {
			Instagram: "bg-pink-50",
			TikTok: "bg-ink/5",
			YouTube: "bg-red-50",
			Facebook: "bg-blue-50",
			Twitter: "bg-ink/5",
			Lemon8: "bg-yellow-50"
		};
		const PAY = {
			upfront: {
				label: "จ่ายก่อนเริ่มงาน 100%",
				labelEn: "Paid 100% upfront",
				icon: "wallet"
			},
			on_completion: {
				label: "จ่ายหลังงานเสร็จ 100%",
				labelEn: "Paid 100% on completion",
				icon: "circle-check-big"
			}
		};
		const tasks = [
			{
				id: 1,
				c: "Summer Collection 2026",
				brand: "Fashion Brand Co.",
				plat: "Instagram",
				due: "15 มี.ค. 2026",
				price: 18e3,
				stage: "brief_sent",
				pay: "upfront",
				fb: []
			},
			{
				id: 2,
				c: "New Skincare Launch",
				brand: "GlowLab Beauty",
				plat: "TikTok",
				due: "20 มี.ค. 2026",
				price: 9500,
				stage: "first_draft_feedback",
				pay: "on_completion",
				fb: [{
					u: "Glow Beauty",
					t: "วิดีโอดีมากค่ะ แต่รบกวนเพิ่มการแสดงวิธีใช้ผลิตภัณฑ์ในวินาทีที่ 15-25 ด้วยนะคะ",
					d: "19 มี.ค."
				}]
			},
			{
				id: 3,
				c: "Gadget Review - Smartphone",
				brand: "TechZone",
				plat: "YouTube",
				due: "25 มี.ค. 2026",
				price: 22e3,
				stage: "draft_approved",
				pay: "on_completion",
				fb: []
			},
			{
				id: 4,
				c: "Fitness Challenge 30 Days",
				brand: "FitPro Studio",
				plat: "Instagram",
				due: "5 เม.ย. 2026",
				price: 12e3,
				stage: "waiting_capture_report",
				pay: "on_completion",
				fb: []
			},
			{
				id: 5,
				c: "Food Festival Promo",
				brand: "Taste Kitchen",
				plat: "TikTok",
				due: "28 ก.พ. 2026",
				price: 15e3,
				stage: "capture_report_sent",
				pay: "upfront",
				fb: []
			},
			{
				id: 6,
				c: "Mineral Water รุ่นใหม่",
				brand: "Pure Hydra",
				plat: "Facebook",
				due: "10 เม.ย. 2026",
				price: 8e3,
				stage: "brief_sent",
				pay: "upfront",
				fb: []
			},
			{
				id: 7,
				c: "Coffee Drop Teaser",
				brand: "CafeNord",
				plat: "Twitter",
				due: "3 เม.ย. 2026",
				price: 6e3,
				stage: "draft_approved",
				pay: "upfront",
				fb: []
			},
			{
				id: 8,
				c: "Skincare Routine รีวิว",
				brand: "Aura Cosmetics",
				plat: "Lemon8",
				due: "18 เม.ย. 2026",
				price: 7e3,
				stage: "first_draft_feedback",
				pay: "on_completion",
				fb: [{
					u: "Aura",
					t: "รูปสวยมากค่ะ ขอเพิ่มข้อความบรรยายส่วนผสมในรูปที่ 3 ด้วยนะคะ",
					d: "17 เม.ย."
				}]
			},
			{
				id: 9,
				c: "Energy Drink Launch",
				brand: "Volt Beverage",
				plat: "TikTok",
				due: "12 มี.ค. 2026",
				price: 11e3,
				stage: "brief_sent",
				pay: "on_completion",
				fb: [],
				rejected: true,
				rej: ["ราคาที่เสนอสูงกว่างบของแคมเปญ จึงไม่ผ่านการพิจารณา", "The quoted price was over the campaign budget, so it was not approved."]
			},
			{
				id: 10,
				c: "Travel Vlog Bangkok",
				brand: "Wander Co.",
				plat: "YouTube",
				due: "8 มี.ค. 2026",
				price: 16e3,
				stage: "brief_sent",
				pay: "on_completion",
				fb: [],
				rejected: true,
				rej: ["ไม่ได้รับเลือกสำหรับแคมเปญนี้ — แบรนด์เลือก KOL รายอื่น", "Not selected for this campaign — the brand chose another creator."]
			}
		];
		const BUCKET = {
			action: {
				label: "ต้องดำเนินการ",
				labelEn: "Action needed",
				cls: "bg-primary/10 text-primary",
				dot: "bg-primary"
			},
			review: {
				label: "รอตรวจ",
				labelEn: "In review",
				cls: "bg-amber-100 text-amber-700",
				dot: "bg-amber-500"
			},
			live: {
				label: "เผยแพร่ / เก็บผล",
				labelEn: "Publish / collect",
				cls: "bg-violet-100 text-violet-700",
				dot: "bg-violet-500"
			},
			done: {
				label: "เสร็จสิ้น",
				labelEn: "Completed",
				cls: "bg-green-100 text-green-700",
				dot: "bg-green-500"
			},
			rejected: {
				label: "ไม่ผ่าน",
				labelEn: "Not passed",
				cls: "bg-red-100 text-red-700",
				dot: "bg-red-500"
			}
		};
		const tabs = [
			[
				"action",
				"ต้องดำเนินการ",
				"Action needed"
			],
			[
				"review",
				"รอตรวจ",
				"In review"
			],
			[
				"live",
				"เผยแพร่ & รายงาน",
				"Publish & report"
			],
			[
				"done",
				"เสร็จสิ้น",
				"Completed"
			],
			[
				"rejected",
				"ไม่ผ่าน",
				"Not passed"
			]
		];
		const active = ref("action");
		function countOf(bucket) {
			return tasks.filter((t) => effBucket(t) === bucket).length;
		}
		const visibleTasks = computed(() => tasks.filter((t) => effBucket(t) === active.value));
		function fmtPrice(n) {
			return n.toLocaleString();
		}
		function timelineGroups(t) {
			const cur = idx(t.stage);
			return PHASES.map(([ph, label, labelEn, icon]) => ({
				ph,
				label,
				labelEn,
				icon,
				rows: STAGES.map((s, i) => ({
					stage: s,
					i
				})).filter((x) => x.stage.ph === ph).map((x) => ({
					stage: x.stage,
					done: x.i < cur,
					on: x.i === cur
				}))
			}));
		}
		function chatInitials(n) {
			const m = (n || "").trim().split(/\s+/);
			return (m[0]?.[0] ?? "") + (m[1]?.[0] ?? "");
		}
		const briefDeliverables = [
			["1 Reel (30–60 วิ)", "1 Reel (30–60 sec)"],
			["3 Stories", "3 Stories"],
			["แท็กแบรนด์", "Tag the brand"],
			["ปักลิงก์โปรโมชั่น", "Pin the promo link"]
		];
		const briefHashtags = [
			"#รีวิวจริง",
			"#ของดีบอกต่อ",
			"@brand.official"
		];
		const briefPoints = [
			["เน้นรีวิวจากการใช้จริง 7 วัน เห็นผลชัด", "Focus on a genuine 7-day review with clear results"],
			["พูดถึงส่วนผสมหลักและจุดเด่นของสินค้า", "Mention the key ingredients and product highlights"],
			["แสดงวิธีใช้ที่ถูกต้อง พร้อมโชว์เนื้อสัมผัส", "Show the correct usage and the product texture"],
			["แนบโค้ดส่วนลดเปิดตัว + CTA ชวนกดลิงก์", "Include the launch discount code + a CTA to tap the link"]
		];
		const briefDo = [
			["รีวิวด้วยภาษาของตัวเอง จริงใจ", "Review honestly, in your own words"],
			["ติดแท็กแบรนด์ + hashtag ให้ครบ", "Tag the brand and add all hashtags"],
			["ส่ง draft ให้ตรวจก่อนโพสต์จริง", "Submit the draft for review before posting live"]
		];
		const briefDont = [
			["กล่าวอ้างเกินจริง / อ้างรักษาโรค", "Make exaggerated or medical-cure claims"],
			["เทียบคู่แข่งโดยตรง", "Compare directly with competitors"],
			["ลบ / แก้โพสต์ก่อนครบ 30 วัน", "Delete or edit the post before 30 days"]
		];
		const openId = ref(null);
		const current = computed(() => tasks.find((t) => t.id === openId.value) ?? null);
		const currentStage = computed(() => current.value ? STAGES[idx(current.value.stage)] : null);
		const currentBucket = computed(() => current.value ? BUCKET[effBucket(current.value)] : null);
		const chatMessages = ref([]);
		const chatInput = ref("");
		ref(null);
		const uploadFiles = ref([]);
		const billingSettled = ref(false);
		const canConfirmPost = computed(() => current.value?.pay === "upfront" || billingSettled.value);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_BillingSection = BillingSection_default;
			const _component_FileDropzone = FileDropzone_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14" }, _attrs))}><section class="mb-8"><h1 class="font-heading text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">${ssrInterpolate(unref(tr)("งานของฉัน", "My Tasks"))}</h1><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("ติดตามขั้นตอนการผลิตคอนเทนต์ของแต่ละแคมเปญ — 14 ขั้นตอน ตั้งแต่บรีฟจนส่ง capture report", "Track the content production stages of each campaign — 14 stages, from brief to capture report."))}</p></section><section class="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"><!--[-->`);
			ssrRenderList(tabs, (tb) => {
				_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-white p-4 shadow-sm"><div class="flex items-center gap-2"><span class="${ssrRenderClass([BUCKET[tb[0]].dot, "h-2 w-2 rounded-full"])}"></span><p class="text-xs text-muted">${ssrInterpolate(unref(tr)(tb[1], tb[2]))}</p></div><p class="mt-1 font-heading text-2xl font-extrabold text-ink">${ssrInterpolate(countOf(tb[0]))}</p></div>`);
			});
			_push(`<!--]--></section><section class="mb-6 flex flex-wrap gap-2"><!--[-->`);
			ssrRenderList(tabs, (tb) => {
				_push(`<button type="button" class="${ssrRenderClass([tb[0] === unref(active) ? "bg-primary text-white" : "border border-[#0F2747]/10 bg-white text-muted hover:text-primary", "rounded-lg px-4 py-2 text-sm font-bold transition"])}">${ssrInterpolate(unref(tr)(tb[1], tb[2]))} (${ssrInterpolate(countOf(tb[0]))}) </button>`);
			});
			_push(`<!--]--></section><section class="space-y-4"><!--[-->`);
			ssrRenderList(unref(visibleTasks), (t) => {
				_push(`<div class="cursor-pointer rounded-xl border border-[#0F2747]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(45_91_255_/_35%)]"><div class="flex items-start justify-between gap-4"><div class="flex items-start gap-4"><div class="${ssrRenderClass([PLAT_CLS[t.plat], "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"])}">`);
				if (t.plat === "Instagram") _push(`<svg viewBox="0 0 24 24" class="h-6 w-6"><defs><radialGradient${ssrRenderAttr("id", `igtp-card-${t.id}`)} cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#fdf497"></stop><stop offset="45%" stop-color="#fd5949"></stop><stop offset="60%" stop-color="#d6249f"></stop><stop offset="90%" stop-color="#285AEB"></stop></radialGradient></defs><path${ssrRenderAttr("fill", `url(#igtp-card-${t.id})`)} d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path></svg>`);
				else if (t.plat === "TikTok") _push(`<svg viewBox="0 0 24 24" class="h-6 w-6"><path fill="#010101" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"></path></svg>`);
				else if (t.plat === "YouTube") _push(`<svg viewBox="0 0 24 24" class="h-6 w-6"><path fill="#FF0000" d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"></path></svg>`);
				else if (t.plat === "Facebook") _push(`<svg viewBox="0 0 24 24" class="h-6 w-6"><path fill="#1877F2" d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07z"></path></svg>`);
				else if (t.plat === "Twitter") _push(`<svg viewBox="0 0 24 24" class="h-6 w-6"><path fill="#000" d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"></path></svg>`);
				else if (t.plat === "Lemon8") _push(`<svg viewBox="0 0 24 24" class="h-6 w-6"><rect width="24" height="24" rx="6" fill="#FAE500"></rect><text x="12" y="14.5" font-family="Georgia, serif" font-size="6.2" font-style="italic" font-weight="700" fill="#111" text-anchor="middle" letter-spacing="-0.2">Lemon</text><text x="12" y="20.5" font-family="Georgia, serif" font-size="6.2" font-style="italic" font-weight="700" fill="#111" text-anchor="middle">8</text></svg>`);
				else _push(`<!---->`);
				_push(`</div><div><h3 class="font-heading text-base font-bold text-ink">${ssrInterpolate(t.c)}</h3><p class="text-sm text-muted">${ssrInterpolate(t.brand)} · ${ssrInterpolate(t.plat)}</p><div class="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted">`);
				if (t.rejected) {
					_push(`<span class="flex items-center gap-1.5 text-red-600">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x-circle",
						class: "h-4 w-4"
					}, null, _parent));
					_push(` ${ssrInterpolate(unref(tr)("ไม่ผ่านการพิจารณา", "Not selected"))}</span>`);
				} else {
					_push(`<span class="flex items-center gap-1.5">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "git-commit-vertical",
						class: "h-4 w-4 text-primary"
					}, null, _parent));
					_push(` ${ssrInterpolate(unref(tr)(STAGES[idx(t.stage)].label, STAGES[idx(t.stage)].labelEn))}</span>`);
				}
				_push(`<span class="flex items-center gap-1.5">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "calendar",
					class: "h-4 w-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(t.due)}</span>`);
				if (!t.rejected) {
					_push(`<span class="${ssrRenderClass([t.pay === "upfront" ? "text-green-600" : "", "flex items-center gap-1.5"])}">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: PAY[t.pay].icon,
						class: "h-4 w-4"
					}, null, _parent));
					_push(` ${ssrInterpolate(unref(tr)(PAY[t.pay].label, PAY[t.pay].labelEn))}</span>`);
				} else _push(`<!---->`);
				_push(`</div></div></div><div class="shrink-0 text-right"><span class="${ssrRenderClass([BUCKET[effBucket(t)].cls, "rounded-full px-2.5 py-1 text-[11px] font-bold"])}">${ssrInterpolate(unref(tr)(BUCKET[effBucket(t)].label, BUCKET[effBucket(t)].labelEn))}</span><p class="${ssrRenderClass([t.rejected ? "text-muted line-through" : "text-primary", "mt-2 font-heading text-lg font-extrabold"])}">฿${ssrInterpolate(fmtPrice(t.price))}</p><p class="text-[10px] uppercase tracking-widest text-[#5B6B82]/50">${ssrInterpolate(t.rejected ? unref(tr)("ราคาที่เสนอ", "Quoted price") : "Final price")}</p></div></div>`);
				if (!t.rejected) _push(`<div class="mt-4"><div class="flex items-center justify-between text-[11px] text-muted"><span>${ssrInterpolate(unref(tr)("ความคืบหน้า · ขั้นที่", "Progress · stage"))} ${ssrInterpolate(idx(t.stage) + 1)}/14</span><span class="font-bold text-primary">${ssrInterpolate(progress(t.stage))}%</span></div><div class="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface"><div class="h-full rounded-full bg-primary" style="${ssrRenderStyle({ width: progress(t.stage) + "%" })}"></div></div></div>`);
				else {
					_push(`<div class="mt-4 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/60 px-3 py-2.5 text-xs text-red-700">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "info",
						class: "mt-0.5 h-4 w-4 shrink-0"
					}, null, _parent));
					_push(`<span>${ssrInterpolate(t.rej ? unref(tr)(t.rej[0], t.rej[1]) : unref(tr)("ไม่ผ่านการพิจารณาของแอดมิน/แบรนด์", "Not approved by the admin / brand."))}</span></div>`);
				}
				_push(`</div>`);
			});
			_push(`<!--]--></section>`);
			if (unref(visibleTasks).length === 0) _push(`<p class="py-12 text-center text-muted">${ssrInterpolate(unref(tr)("ไม่มีงานในหมวดหมู่นี้", "No tasks in this category"))}</p>`);
			else _push(`<!---->`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(current) && unref(currentStage) && unref(currentBucket)) {
					_push(`<div class="fixed inset-0 z-[60] flex bg-surface"><div class="h-full w-full overflow-y-auto"><div class="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[#0F2747]/10 bg-white/95 px-6 py-4 backdrop-blur-md lg:px-10"><div class="flex min-w-0 items-center gap-3"><button type="button" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition hover:bg-surface">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "arrow-left",
						class: "h-5 w-5"
					}, null, _parent));
					_push(`</button><div class="min-w-0"><h2 class="truncate font-heading text-lg font-bold text-ink lg:text-xl">${ssrInterpolate(unref(current).c)}</h2><p class="truncate text-sm text-muted">${ssrInterpolate(unref(current).brand)} · ${ssrInterpolate(unref(current).plat)}</p></div></div><button type="button" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition hover:bg-surface">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x",
						class: "h-5 w-5"
					}, null, _parent));
					_push(`</button></div><div class="relative overflow-hidden bg-gradient-to-br from-ink to-primaryDark px-6 py-9 lg:px-10"><div class="pointer-events-none absolute inset-0 opacity-[0.07]" style="${ssrRenderStyle({
						"background-image": "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
						"background-size": "36px 36px"
					})}"></div><div class="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div><div class="relative mx-auto max-w-5xl"><div class="flex flex-wrap items-center gap-2"><span class="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur"><span class="${ssrRenderClass([unref(currentBucket).dot, "h-1.5 w-1.5 rounded-full"])}"></span>${ssrInterpolate(unref(tr)(unref(currentBucket).label, unref(currentBucket).labelEn))}</span><span class="rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">${ssrInterpolate(unref(current).plat)}</span>`);
					if (!unref(current).rejected) {
						_push(`<span class="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: PAY[unref(current).pay].icon,
							class: "h-3.5 w-3.5"
						}, null, _parent));
						_push(`${ssrInterpolate(unref(tr)(PAY[unref(current).pay].label, PAY[unref(current).pay].labelEn))}</span>`);
					} else _push(`<!---->`);
					_push(`</div><h1 class="mt-4 font-heading text-3xl font-extrabold leading-tight text-white lg:text-4xl">${ssrInterpolate(unref(current).c)}</h1><p class="mt-1 text-white/70">${ssrInterpolate(unref(current).brand)}</p><div class="mt-6 flex flex-wrap gap-3"><div class="rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur"><p class="text-[10px] font-bold uppercase tracking-widest text-white/50">${ssrInterpolate(unref(tr)("กำหนดส่ง", "Due date"))}</p><p class="mt-0.5 font-bold text-white">${ssrInterpolate(unref(current).due)}</p></div><div class="rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur"><p class="text-[10px] font-bold uppercase tracking-widest text-white/50">${ssrInterpolate(unref(current).rejected ? unref(tr)("ราคาที่เสนอ", "Quoted price") : "Final price · TIER 3")}</p><p class="mt-0.5 font-bold text-white">฿${ssrInterpolate(fmtPrice(unref(current).price))}</p></div>`);
					if (!unref(current).rejected) _push(`<div class="rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur"><p class="text-[10px] font-bold uppercase tracking-widest text-white/50">${ssrInterpolate(unref(tr)("ความคืบหน้า", "Progress"))}</p><p class="mt-0.5 font-bold text-white">${ssrInterpolate(unref(tr)("ขั้น", "Stage"))} ${ssrInterpolate(idx(unref(current).stage) + 1)}/14 · ${ssrInterpolate(progress(unref(current).stage))}%</p></div>`);
					else _push(`<!---->`);
					_push(`</div></div></div><div class="mx-auto max-w-5xl px-6 py-8 lg:px-10">`);
					if (unref(current).rejected) {
						_push(`<div class="rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm lg:p-8"><div class="flex items-start gap-3"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "x-circle",
							class: "h-6 w-6"
						}, null, _parent));
						_push(`</span><div><h3 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ไม่ผ่านการพิจารณา", "Not selected"))}</h3><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("แอดมิน/แบรนด์พิจารณาแล้วว่าจะไม่จ้างสำหรับแคมเปญนี้ จึงยังไม่เริ่มขั้นตอนการผลิต", "The admin / brand reviewed the application and decided not to proceed, so production never started."))}</p></div></div><div class="mt-5 rounded-xl border border-red-100 bg-white p-4"><p class="text-[11px] font-bold uppercase tracking-widest text-red-500/70">${ssrInterpolate(unref(tr)("เหตุผล", "Reason"))}</p><p class="mt-1 text-sm leading-relaxed text-ink/80">${ssrInterpolate(unref(current).rej ? unref(tr)(unref(current).rej[0], unref(current).rej[1]) : unref(tr)("ไม่ผ่านการพิจารณาของแอดมิน/แบรนด์", "Not approved by the admin / brand."))}</p></div><div class="mt-4 flex flex-wrap gap-3"><div class="rounded-xl bg-surface px-4 py-2.5"><p class="text-[10px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("ราคาที่เสนอ", "Quoted price"))}</p><p class="mt-0.5 font-bold text-ink">฿${ssrInterpolate(fmtPrice(unref(current).price))}</p></div><div class="rounded-xl bg-surface px-4 py-2.5"><p class="text-[10px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("แพลตฟอร์ม", "Platform"))}</p><p class="mt-0.5 font-bold text-ink">${ssrInterpolate(unref(current).plat)}</p></div></div><p class="mt-5 text-xs text-muted">${ssrInterpolate(unref(tr)("ไม่ต้องกังวล — ลองสมัครแคมเปญอื่นที่เหมาะกับคุณได้เลย", "Don’t worry — feel free to apply to other campaigns that suit you."))}</p></div>`);
					} else _push(`<!---->`);
					if (!unref(current).rejected) {
						_push(`<div class="rounded-2xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:p-8"><div class="flex flex-wrap items-center justify-between gap-3"><h3 class="flex items-center gap-2 font-heading text-lg font-bold text-ink">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "file-text",
							class: "h-5 w-5 text-primary"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("บรีฟงานจากแบรนด์", "Brief from the brand"))}</h3><span class="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">${ssrInterpolate(unref(current).plat)}</span></div><p class="mt-1 text-xs text-muted">${ssrInterpolate(unref(tr)("ส่งโดย", "From"))} ${ssrInterpolate(unref(current).brand)} · ${ssrInterpolate(unref(tr)("อัปเดต", "Updated"))} 1 มี.ค. 2026</p><div class="mt-6 grid gap-6 sm:grid-cols-2"><div class="sm:col-span-2"><p class="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("วัตถุประสงค์", "Objective"))}</p><p class="text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)("สร้างการรับรู้และกระตุ้นยอดขายผลิตภัณฑ์ใหม่ ผ่านรีวิวที่จริงใจในสไตล์ของคุณ กลุ่มเป้าหมายผู้หญิง 18–34 ปี", "Build awareness and drive sales of the new product through an authentic review in your own style. Target audience: women aged 18–34."))}</p></div><div><p class="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("สิ่งที่ต้องส่งมอบ", "Deliverables"))}</p><div class="flex flex-wrap gap-2"><!--[-->`);
						ssrRenderList(briefDeliverables, (x) => {
							_push(`<span class="rounded-md bg-surface px-3 py-1.5 text-xs font-semibold text-ink">${ssrInterpolate(unref(tr)(x[0], x[1]))}</span>`);
						});
						_push(`<!--]--></div></div><div><p class="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">Hashtag &amp; Mention</p><div class="flex flex-wrap gap-2"><!--[-->`);
						ssrRenderList(briefHashtags, (x) => {
							_push(`<span class="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">${ssrInterpolate(x)}</span>`);
						});
						_push(`<!--]--></div></div><div class="sm:col-span-2"><p class="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("ประเด็นหลักที่ต้องสื่อ", "Key messages to convey"))}</p><ul class="space-y-1.5"><!--[-->`);
						ssrRenderList(briefPoints, (x) => {
							_push(`<li class="flex items-start gap-2 text-sm text-muted">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "check-circle",
								class: "mt-0.5 h-4 w-4 shrink-0 text-primary"
							}, null, _parent));
							_push(`<span>${ssrInterpolate(unref(tr)(x[0], x[1]))}</span></li>`);
						});
						_push(`<!--]--></ul></div><div class="rounded-xl border border-green-100 bg-green-50/40 p-4"><p class="mb-2 flex items-center gap-1.5 text-sm font-bold text-green-700">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "check",
							class: "h-4 w-4"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("ควรทำ", "Do"))}</p><ul class="space-y-1.5"><!--[-->`);
						ssrRenderList(briefDo, (x) => {
							_push(`<li class="flex items-start gap-2 text-sm text-ink/80"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span><span>${ssrInterpolate(unref(tr)(x[0], x[1]))}</span></li>`);
						});
						_push(`<!--]--></ul></div><div class="rounded-xl border border-red-100 bg-red-50/40 p-4"><p class="mb-2 flex items-center gap-1.5 text-sm font-bold text-red-600">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "x",
							class: "h-4 w-4"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("ห้ามทำ", "Don't"))}</p><ul class="space-y-1.5"><!--[-->`);
						ssrRenderList(briefDont, (x) => {
							_push(`<li class="flex items-start gap-2 text-sm text-ink/80"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"></span><span>${ssrInterpolate(unref(tr)(x[0], x[1]))}</span></li>`);
						});
						_push(`<!--]--></ul></div></div></div>`);
					} else _push(`<!---->`);
					if (!unref(current).rejected) {
						_push(`<div class="mt-6 grid gap-6 lg:grid-cols-5"><div class="rounded-2xl border border-[#0F2747]/10 bg-white p-6 shadow-sm lg:col-span-2 lg:p-8"><h3 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("ขั้นตอนการผลิต", "Production stages"))} <span class="font-medium text-muted">(14 stage)</span></h3><div class="mt-4 h-1.5 overflow-hidden rounded-full bg-surface"><div class="h-full rounded-full bg-primary transition-all" style="${ssrRenderStyle({ width: progress(unref(current).stage) + "%" })}"></div></div><div class="mt-6 space-y-6"><!--[-->`);
						ssrRenderList(timelineGroups(unref(current)), (grp) => {
							_push(`<div><div class="mb-2 flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: grp.icon,
								class: "h-4 w-4"
							}, null, _parent));
							_push(`</span><p class="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)(grp.label, grp.labelEn))}</p></div><div class="ml-3 space-y-0.5 border-l-2 border-dashed border-[#0F2747]/10 pl-5"><!--[-->`);
							ssrRenderList(grp.rows, (row) => {
								_push(`<div class="${ssrRenderClass([row.on ? "bg-primary/5" : "", "-ml-3 flex items-center gap-3 rounded-lg py-2 pl-3 pr-3"])}">`);
								if (row.done) {
									_push(`<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">`);
									_push(ssrRenderComponent(_component_Icon, {
										name: "check",
										class: "h-3.5 w-3.5"
									}, null, _parent));
									_push(`</span>`);
								} else if (row.on) _push(`<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-primary/15"><span class="h-2 w-2 animate-pulse rounded-full bg-white"></span></span>`);
								else _push(`<span class="h-6 w-6 shrink-0 rounded-full border-2 border-[#0F2747]/15 bg-white"></span>`);
								_push(`<span class="${ssrRenderClass([row.on ? "font-bold text-ink" : row.done ? "text-ink/70" : "text-[#5B6B82]/45", "text-sm"])}">${ssrInterpolate(unref(tr)(row.stage.label, row.stage.labelEn))}</span>`);
								if (row.on) _push(`<span class="ml-auto rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">${ssrInterpolate(unref(tr)("ตอนนี้", "Now"))}</span>`);
								else _push(`<!---->`);
								_push(`</div>`);
							});
							_push(`<!--]--></div></div>`);
						});
						_push(`<!--]--></div></div><div class="space-y-6 lg:col-span-3">`);
						if (unref(current).pay === "upfront") {
							_push(`<div class="rounded-2xl border border-green-200 bg-green-50/50 p-6 shadow-sm"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="flex items-center gap-2 font-heading text-lg font-bold text-ink">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "receipt",
								class: "h-5 w-5 text-green-600"
							}, null, _parent));
							_push(` ${ssrInterpolate(unref(tr)("วางบิลได้เลย", "Bill now"))}</h3><span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-[11px] font-bold text-green-700">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "wallet",
								class: "h-3.5 w-3.5"
							}, null, _parent));
							_push(` ${ssrInterpolate(unref(tr)(PAY.upfront.label, PAY.upfront.labelEn))}</span></div><p class="mt-1 text-sm text-muted">${ssrInterpolate(unref(tr)("งานนี้จ่ายก่อนเริ่มงาน 100% — แนบใบแจ้งหนี้ หรือกดยินยอมให้เราตั้งเบิกได้ทันที ไม่ต้องรอส่งงาน", "This task pays 100% upfront — attach an invoice or give consent to file the billing right away, no need to wait for delivery."))}</p><div class="mt-4">`);
							_push(ssrRenderComponent(_component_BillingSection, {
								key: `bill-up-${unref(current).id}`,
								settled: unref(billingSettled),
								"onUpdate:settled": ($event) => isRef(billingSettled) ? billingSettled.value = $event : null,
								price: unref(current).price,
								"campaign-name": unref(current).c
							}, null, _parent));
							_push(`</div>`);
							if (unref(billingSettled)) {
								_push(`<div class="mt-4 flex items-center gap-2 rounded-lg bg-green-100/70 px-3 py-2.5 text-sm font-semibold text-green-800">`);
								_push(ssrRenderComponent(_component_Icon, {
									name: "check-circle",
									class: "h-4 w-4 shrink-0"
								}, null, _parent));
								_push(` ${ssrInterpolate(unref(tr)("รับเรื่องวางบิลแล้ว — ทีมงานจะดำเนินการตั้งเบิกให้", "Billing received — the team will process the reimbursement for you."))}</div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div class="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] to-transparent p-6 shadow-sm"><h3 class="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-ink">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "circle-dot",
							class: "h-5 w-5 text-primary"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("สิ่งที่ต้องทำตอนนี้", "What to do now"))}</h3>`);
						if (unref(currentStage).bucket === "review") {
							_push(`<div class="rounded-xl border border-amber-200 bg-amber-50 p-4"><p class="flex items-center gap-2 font-bold text-amber-900">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "clock",
								class: "h-4 w-4"
							}, null, _parent));
							_push(` ${ssrInterpolate(unref(tr)("รอแอดมิน / แบรนด์ตรวจ", "Awaiting admin / brand review"))}</p><p class="mt-1 text-sm text-amber-700">${ssrInterpolate(unref(tr)("เราจะแจ้งเตือนทันทีที่มี feedback หรือผลอนุมัติ", "We will notify you the moment there is feedback or an approval."))}</p></div>`);
						} else if (unref(currentStage).bucket === "done") {
							_push(`<div class="rounded-xl border border-green-200 bg-green-50 p-4"><p class="flex items-center gap-2 font-bold text-green-900">`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "check-circle",
								class: "h-4 w-4"
							}, null, _parent));
							_push(` ${ssrInterpolate(unref(tr)("ส่ง Capture Report เรียบร้อย", "Capture report submitted"))}</p><p class="mt-1 text-sm text-green-700">${ssrInterpolate(unref(tr)("งานเสร็จสมบูรณ์ รอแคมเปญปิดเพื่อรับเงิน", "The task is complete. Awaiting campaign close to receive payment."))}</p></div>`);
						} else {
							_push(`<div class="space-y-3">`);
							if (unref(currentStage).act === "storyline") {
								_push(`<!--[--><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("Storyline / แนวทางคอนเทนต์", "Storyline / content direction"))}</label><textarea rows="3" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none focus:border-primary/50"></textarea></div><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("แนบ moodboard (ถ้ามี)", "Attach moodboard (optional)"))}</label>`);
								_push(ssrRenderComponent(_component_FileDropzone, {
									files: unref(uploadFiles),
									"onUpdate:files": ($event) => isRef(uploadFiles) ? uploadFiles.value = $event : null,
									hint: unref(tr)("รูป, PDF, ไฟล์อื่นๆ", "Images, PDF, any file")
								}, null, _parent));
								_push(`</div><button type="button" class="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ส่ง Storyline", "Submit storyline"))}</button><!--]-->`);
							} else if (unref(currentStage).act === "storyline_revise") _push(`<!--[--><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("Storyline (แก้ไขตาม feedback)", "Storyline (revised per feedback)"))}</label><textarea rows="3" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none focus:border-primary/50"></textarea></div><button type="button" class="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ส่ง Storyline ใหม่", "Resubmit storyline"))}</button><!--]-->`);
							else if (unref(currentStage).act === "first_draft") {
								_push(`<!--[--><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("First Draft (รูป / วิดีโอ)", "First draft (photo / video)"))}</label>`);
								_push(ssrRenderComponent(_component_FileDropzone, {
									files: unref(uploadFiles),
									"onUpdate:files": ($event) => isRef(uploadFiles) ? uploadFiles.value = $event : null,
									hint: unref(tr)("รูป, วิดีโอ, PDF, ไฟล์อื่นๆ", "Photo, video, PDF, any file")
								}, null, _parent));
								_push(`</div><div><label class="mb-1 block text-sm font-semibold text-ink">Caption</label><textarea rows="3" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none focus:border-primary/50"></textarea></div><button type="button" class="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ส่ง First Draft", "Submit first draft"))}</button><!--]-->`);
							} else if (unref(currentStage).act === "second_draft") {
								_push(`<!--[--><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("Second Draft (แก้ตาม feedback)", "Second draft (revised per feedback)"))}</label>`);
								_push(ssrRenderComponent(_component_FileDropzone, {
									files: unref(uploadFiles),
									"onUpdate:files": ($event) => isRef(uploadFiles) ? uploadFiles.value = $event : null,
									hint: unref(tr)("รูป, วิดีโอ, PDF, ไฟล์อื่นๆ", "Photo, video, PDF, any file")
								}, null, _parent));
								_push(`</div><button type="button" class="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ส่ง Second Draft", "Submit second draft"))}</button><!--]-->`);
							} else if (unref(currentStage).act === "final_draft") {
								_push(`<!--[--><div><label class="mb-1 block text-sm font-semibold text-ink">Final Draft</label>`);
								_push(ssrRenderComponent(_component_FileDropzone, {
									files: unref(uploadFiles),
									"onUpdate:files": ($event) => isRef(uploadFiles) ? uploadFiles.value = $event : null,
									hint: unref(tr)("รูป, วิดีโอ, PDF, ไฟล์อื่นๆ", "Photo, video, PDF, any file")
								}, null, _parent));
								_push(`</div><button type="button" class="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ส่ง Final Draft", "Submit final draft"))}</button><!--]-->`);
							} else if (unref(currentStage).act === "post_link") {
								_push(`<!--[--><div class="rounded-xl border border-green-200 bg-green-50 p-4"><p class="flex items-center gap-2 font-bold text-green-900">${ssrInterpolate(unref(tr)("Draft อนุมัติแล้ว — โพสต์ได้เลย!", "Draft approved — you can post now!"))}</p><p class="mt-1 text-sm text-green-700">${ssrInterpolate(unref(tr)("เผยแพร่งานจริงแล้วแนบลิงก์โพสต์ด้านล่าง", "Publish the content live, then attach the post link below."))}</p></div><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ลิงก์โพสต์จริง (Post URL)", "Live post link (Post URL)"))}</label><input placeholder="https://www.instagram.com/p/..." class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none focus:border-primary/50"></div>`);
								if (unref(current).pay === "on_completion") {
									_push(`<div class="rounded-xl border border-[#0F2747]/10 bg-surface/60 p-4"><p class="flex items-center gap-2 text-sm font-bold text-ink">`);
									_push(ssrRenderComponent(_component_Icon, {
										name: "receipt",
										class: "h-4 w-4 text-primary"
									}, null, _parent));
									_push(` ${ssrInterpolate(unref(tr)("การวางบิล", "Billing"))}</p><p class="mt-1 text-xs text-muted">${ssrInterpolate(unref(tr)("งานนี้จ่ายหลังเสร็จ 100% — แนบใบแจ้งหนี้ หรือกดยินยอมให้เราตั้งเบิกแทน (เลือก 1 กรณี)", "This task pays 100% on completion — attach an invoice, or give consent so we can file the billing for you (choose one)."))}</p><div class="mt-3">`);
									_push(ssrRenderComponent(_component_BillingSection, {
										key: `bill-del-${unref(current).id}`,
										settled: unref(billingSettled),
										"onUpdate:settled": ($event) => isRef(billingSettled) ? billingSettled.value = $event : null,
										price: unref(current).price,
										"campaign-name": unref(current).c
									}, null, _parent));
									_push(`</div></div>`);
								} else _push(`<!---->`);
								_push(`<button type="button" class="${ssrRenderClass([unref(canConfirmPost) ? "bg-green-600 hover:bg-green-700" : "cursor-not-allowed bg-[#0F2747]/20", "w-full rounded-lg px-4 py-3 text-sm font-bold text-white transition"])}"${ssrIncludeBooleanAttr(!unref(canConfirmPost)) ? " disabled" : ""}>${ssrInterpolate(unref(canConfirmPost) ? unref(tr)("ยืนยันโพสต์ + แนบลิงก์", "Confirm post + attach link") : unref(tr)("กรุณาแนบใบแจ้งหนี้ หรือกดยินยอมก่อน", "Attach an invoice or give consent first"))}</button><!--]-->`);
							} else if (unref(currentStage).act === "capture") {
								_push(`<!--[--><div class="rounded-xl border border-violet-200 bg-violet-50 p-4"><p class="flex items-center gap-2 font-bold text-violet-900">`);
								_push(ssrRenderComponent(_component_Icon, {
									name: "bar-chart-3",
									class: "h-4 w-4"
								}, null, _parent));
								_push(` ${ssrInterpolate(unref(tr)("ถึงเวลาส่ง Capture Report", "Time to submit the capture report"))}</p><p class="mt-1 text-sm text-violet-700">${ssrInterpolate(unref(tr)("แนบสกรีนช็อตยอด views / likes / reach หลังโพสต์ครบ 48 ชม.", "Attach screenshots of views / likes / reach, 48 hours after posting."))}</p></div><div><label class="mb-1 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("Capture Report (สกรีนช็อตสถิติ)", "Capture report (stats screenshots)"))}</label>`);
								_push(ssrRenderComponent(_component_FileDropzone, {
									files: unref(uploadFiles),
									"onUpdate:files": ($event) => isRef(uploadFiles) ? uploadFiles.value = $event : null,
									hint: unref(tr)("รูป, PDF, ไฟล์อื่นๆ", "Images, PDF, any file")
								}, null, _parent));
								_push(`</div><button type="button" class="w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-violet-700">${ssrInterpolate(unref(tr)("ส่ง Capture Report", "Submit capture report"))}</button><!--]-->`);
							} else _push(`<!---->`);
							_push(`</div>`);
						}
						_push(`</div><div class="flex flex-col rounded-2xl border border-[#0F2747]/10 bg-white shadow-sm"><div class="flex items-center gap-2 border-b border-[#0F2747]/10 p-5">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "messages-square",
							class: "h-5 w-5 text-primary"
						}, null, _parent));
						_push(`<div><h3 class="font-heading text-lg font-bold text-ink">${ssrInterpolate(unref(tr)("การพูดคุย & Feedback", "Conversation & Feedback"))}</h3><p class="text-xs text-muted">${ssrInterpolate(unref(tr)("คุยกับทีมงานของแบรนด์ได้โดยตรง", "Chat directly with the brand team."))}</p></div></div><div class="max-h-[560px] space-y-4 overflow-y-auto p-5"><!--[-->`);
						ssrRenderList(unref(chatMessages), (m, i) => {
							_push(`<!--[-->`);
							if (m.who === "me") _push(`<div class="flex justify-end"><div class="max-w-[85%]"><div class="rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-white">${ssrInterpolate(unref(tr)(m.t, m.tEn ?? m.t))}</div><p class="mt-1 text-right text-[10px] text-[#5B6B82]/50">${ssrInterpolate(unref(tr)("คุณ", "You"))} · ${ssrInterpolate(m.time)}</p></div></div>`);
							else _push(`<div class="flex justify-start gap-2.5"><div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold uppercase text-primary">${ssrInterpolate(chatInitials(m.name))}</div><div class="max-w-[85%]"><div class="rounded-2xl rounded-tl-md bg-surface px-4 py-2.5 text-sm leading-relaxed text-ink">${ssrInterpolate(unref(tr)(m.t, m.tEn ?? m.t))}</div><p class="mt-1 text-[10px] text-[#5B6B82]/50">${ssrInterpolate(m.name)} · ${ssrInterpolate(m.time)}</p></div></div>`);
							_push(`<!--]-->`);
						});
						_push(`<!--]--></div><div class="flex items-center gap-2 border-t border-[#0F2747]/10 p-4"><input${ssrRenderAttr("value", unref(chatInput))}${ssrRenderAttr("placeholder", unref(tr)("พิมพ์ข้อความถึงแบรนด์...", "Type a message to the brand..."))} class="flex-1 rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-primary/50"><button type="button"${ssrRenderAttr("aria-label", unref(tr)("ส่ง", "Send"))} class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition hover:bg-primaryDark">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "send",
							class: "h-4 w-4"
						}, null, _parent));
						_push(`</button></div></div></div></div>`);
					} else _push(`<!---->`);
					_push(`</div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/pages/portal/tasks.vue
var _sfc_setup = tasks_vue_vue_type_script_setup_true_lang_default.setup;
tasks_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/tasks.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var tasks_default = tasks_vue_vue_type_script_setup_true_lang_default;

export { tasks_default as default };
//# sourceMappingURL=tasks-DSBh8UKY.mjs.map
