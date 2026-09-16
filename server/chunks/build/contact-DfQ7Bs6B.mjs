import { b as useLocale, a as useHead$1, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, reactive, ref, unref, useSSRContext } from 'vue';
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

//#region \0virtual:public?%2Foffice.jpg
var _virtual_public__2Foffice_default = publicAssetsURL("/office.jpg");
//#endregion
//#region app/pages/contact.vue?vue&type=script&setup=true&lang.ts
var contact_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "contact",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("ติดต่อเรา — Ripples", "Contact us — Ripples") }));
		const info = [
			{
				icon: "mail",
				label: "อีเมล",
				labelEn: "Email",
				value: "hello@ripples.com",
				valueEn: "hello@ripples.com",
				note: "สำหรับข้อสงสัยทั่วไป",
				noteEn: "For general enquiries"
			},
			{
				icon: "phone",
				label: "โทรศัพท์",
				labelEn: "Phone",
				value: "02-123-4567",
				valueEn: "02-123-4567",
				note: "จันทร์–ศุกร์ 9.00–18.00 น.",
				noteEn: "Mon–Fri, 9.00–18.00"
			},
			{
				icon: "map-pin",
				label: "สำนักงาน",
				labelEn: "Office",
				value: "กรุงเทพฯ, ประเทศไทย",
				valueEn: "Bangkok, Thailand",
				note: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง 10260",
				noteEn: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, 10260"
			},
			{
				icon: "clock",
				label: "เวลาทำการ",
				labelEn: "Hours",
				value: "จันทร์ – ศุกร์: 9.00 – 18.00 น.",
				valueEn: "Mon – Fri: 9.00 – 18.00",
				note: "เสาร์–อาทิตย์: ปิดทำการ",
				noteEn: "Sat–Sun: Closed"
			}
		];
		const form = reactive({
			name: "",
			email: "",
			subject: "",
			message: ""
		});
		const submitted = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-10"><span class="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "mail",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("ติดต่อเรา", "Contact us"))}</span><h1 class="mt-5 font-heading text-4xl font-extrabold leading-[1.5] tracking-tight text-ink lg:text-6xl">${ssrInterpolate(unref(tr)("ติดต่อเรา", "Contact us"))}</h1><p class="mt-4 max-w-2xl text-sm leading-relaxed text-muted lg:text-lg">${ssrInterpolate(unref(tr)("มีคำถาม? เรายินดีรับฟัง ส่งข้อความหาเราและเราจะตอบกลับโดยเร็วที่สุด", "Have a question? We'd love to hear from you. Send us a message and we'll reply as soon as possible."))}</p></section><section class="grid gap-8 lg:grid-cols-5"><div class="space-y-4 lg:col-span-2"><!--[-->`);
			ssrRenderList(info, (x) => {
				_push(`<div class="flex items-start gap-4 rounded-xl border border-[#0F2747]/10 bg-white p-5 shadow-sm"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: x.icon,
					class: "h-6 w-6 text-primary"
				}, null, _parent));
				_push(`</div><div><p class="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)(x.label, x.labelEn))}</p><p class="mt-0.5 font-bold text-ink">${ssrInterpolate(unref(tr)(x.value, x.valueEn))}</p><p class="mt-0.5 text-xs leading-relaxed text-muted">${ssrInterpolate(unref(tr)(x.note, x.noteEn))}</p></div></div>`);
			});
			_push(`<!--]--></div><div class="lg:col-span-3"><div class="rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm lg:p-8"><h2 class="font-heading text-xl font-bold text-ink">${ssrInterpolate(unref(tr)("ส่งข้อความถึงเรา", "Send us a message"))}</h2><form class="mt-6 space-y-5" novalidate><div class="grid gap-5 sm:grid-cols-2"><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ชื่อ", "Name"))}</label><input${ssrRenderAttr("value", unref(form).name)} required type="text"${ssrRenderAttr("placeholder", unref(tr)("ชื่อของคุณ", "Your name"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("อีเมล", "Email"))}</label><input${ssrRenderAttr("value", unref(form).email)} required type="email" placeholder="your@email.com" class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"></div></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("หัวข้อ", "Subject"))}</label><input${ssrRenderAttr("value", unref(form).subject)} required type="text"${ssrRenderAttr("placeholder", unref(tr)("เราจะช่วยคุณได้อย่างไร?", "How can we help you?"))} class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50"></div><div><label class="mb-1.5 block text-sm font-semibold text-ink">${ssrInterpolate(unref(tr)("ข้อความ", "Message"))}</label><textarea required rows="5"${ssrRenderAttr("placeholder", unref(tr)("บอกรายละเอียดเพิ่มเติมเกี่ยวกับสิ่งที่ต้องการ...", "Tell us more about what you need..."))} class="w-full rounded-lg border border-[#0F2747]/15 bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary/50">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(45_91_255_/_70%)] transition hover:bg-primaryDark active:translate-y-0.5">${ssrInterpolate(unref(tr)("ส่งข้อความ", "Send message"))} `);
			_push(ssrRenderComponent(_component_Icon, {
				name: "send",
				class: "h-4 w-4"
			}, null, _parent));
			_push(`</button></form>`);
			if (unref(submitted)) {
				_push(`<div class="mt-6 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "check-circle",
					class: "h-6 w-6 shrink-0 text-primary"
				}, null, _parent));
				_push(`<div><p class="font-bold text-ink">${ssrInterpolate(unref(tr)("ส่งข้อความแล้ว!", "Message sent!"))}</p><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("เราจะติดต่อกลับหาคุณโดยเร็วที่สุด", "We'll get back to you as soon as possible."))}</p></div></div>`);
			} else _push(`<!---->`);
			_push(`</div></div></section><section class="mt-8 overflow-hidden rounded-xl border border-[#0F2747]/10 bg-white shadow-sm"><div class="grid lg:grid-cols-2"><div class="p-8 lg:p-10"><h2 class="font-heading text-xl font-bold text-ink">${ssrInterpolate(unref(tr)("เยี่ยมชมสำนักงานเรา", "Visit our office"))}</h2><p class="mt-3 text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)("88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพฯ 10260", "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"))}</p><p class="mt-4 text-xs text-[#5B6B82]/70">${ssrInterpolate(unref(tr)("บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)", "Prakit Holdings Public Company Limited"))}</p></div><div class="relative min-h-[220px]"><img${ssrRenderAttr("src", _virtual_public__2Foffice_default)}${ssrRenderAttr("alt", unref(tr)("สำนักงาน Ripples", "Ripples office"))} class="absolute inset-0 h-full w-full object-cover"></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/contact.vue
var _sfc_setup = contact_vue_vue_type_script_setup_true_lang_default.setup;
contact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = contact_vue_vue_type_script_setup_true_lang_default;

export { contact_default as default };
//# sourceMappingURL=contact-DfQ7Bs6B.mjs.map
