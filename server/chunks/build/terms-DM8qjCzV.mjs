import { b as useLocale, a as useHead$1, N as NuxtLink, I as Icon_default } from '../virtual/entry.mjs';
import { defineComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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

//#region app/pages/terms.vue?vue&type=script&setup=true&lang.ts
var terms_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "terms",
	__ssrInlineRender: true,
	setup(__props) {
		const { tr } = useLocale();
		useHead$1(() => ({ title: tr("ข้อกำหนดและเงื่อนไข — Ripples", "Terms and Conditions — Ripples") }));
		const sections = [
			[
				"คำนิยาม",
				"Definitions",
				"สำหรับข้อกำหนดฉบับนี้และนโยบายที่เกี่ยวข้อง คำนิยามต่อไปนี้ให้มีความหมายตามที่กำหนด: \"บริษัท\" หมายถึง บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน) ที่ตั้งเลขที่ 88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260; \"แพลตฟอร์ม\" หมายถึง Ripples ระบบและช่องทางออนไลน์ที่บริษัทจัดให้บริการ; \"แบรนด์\" หมายถึง บุคคลหรือนิติบุคคลที่ใช้แพลตฟอร์มเพื่อว่าจ้าง Creator ในการโปรโมทสินค้าหรือบริการ; \"Creator\" หมายถึง ผู้สร้างเนื้อหา (Influencer/KOL) ที่ลงทะเบียนเพื่อรับงานแคมเปญผ่านแพลตฟอร์ม; \"ผู้ใช้บริการ\" หมายถึง ทั้งแบรนด์และ Creator",
				"For the purposes of these Terms and any related policies, the following definitions apply: \"Company\" means PRAKIT HOLDINGS PUBLIC COMPANY LIMITED, registered at 88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260; \"Platform\" means Ripples, the online system and channels operated by the Company; \"Brand\" means any individual or entity using the Platform to engage Creators to promote products or services; \"Creator\" means the content creator (influencer/KOL) registered on the Platform to accept campaign work; \"User\" means both Brands and Creators; \"Account\", \"Username\", and \"Password\" mean the authentication details used to access the Platform; \"Privacy Policy\" means the document issued by the Company to protect User data."
			],
			[
				"การยอมรับข้อตกลงการเข้าใช้งาน",
				"Acceptance of Terms",
				"ก่อนการลงทะเบียน ผู้ใช้บริการต้องอ่านและทำความเข้าใจข้อกำหนดฉบับนี้โดยละเอียด เมื่อผู้ใช้บริการกด \"ยอมรับ\" ถือว่าได้ยินยอมให้ข้อกำหนดฉบับนี้มีผลผูกพันทางกฎหมาย และอนุญาตให้บริษัทเข้าถึงและใช้ข้อมูลส่วนบุคคลภายใต้นโยบายความเป็นส่วนตัว หากผู้ใช้บริการไม่ยอมรับข้อกำหนดใดข้อหนึ่ง กรุณายุติการใช้งานทันที",
				"Before registering, Users must read and understand these Terms in full. By clicking \"Accept\", the User consents to be legally bound by these Terms and authorizes the Company to process personal data under the Privacy Policy. If you do not agree to any provision, please discontinue use immediately."
			],
			[
				"การลงทะเบียน",
				"Registration",
				"3.1 Creator ต้องให้ข้อมูลส่วนบุคคลและข้อมูลบัญชีโซเชียลมีเดียที่ถูกต้องและเป็นปัจจุบัน บริษัทสงวนสิทธิ์ระงับการให้บริการหากข้อมูลไม่ถูกต้อง  3.2 แบรนด์ต้องสร้างบัญชีผู้ใช้ พร้อมชื่อผู้ใช้และรหัสผ่าน ระบุที่อยู่ของกิจการและรายละเอียดสินค้า/บริการ โดยแบรนด์เป็นผู้รับผิดชอบความถูกต้องของข้อมูลทั้งหมด  3.3 บริษัทจะไม่เปิดเผยข้อมูลส่วนบุคคลของผู้ใช้บริการแก่บุคคลภายนอก ยกเว้นเพื่อวัตถุประสงค์การตลาดภายในแพลตฟอร์ม การปฏิบัติตามกฎหมาย หรือเพื่อคุ้มครองสิทธิและความปลอดภัย",
				"3.1 Creators must provide accurate and up-to-date personal and social media account information. The Company reserves the right to suspend service if any information is false.  3.2 Brands must create an account with a username and password, and provide a business address and product/service details. The Brand is responsible for the accuracy of all information submitted.  3.3 The Company will not disclose User personal data to third parties except for in-Platform marketing, operations with business partners, legal compliance, or to protect rights and safety."
			],
			[
				"การจัดการเนื้อหาของผู้ใช้บริการ",
				"Content Management",
				"ผู้ใช้บริการรับผิดชอบต่อความถูกต้องและความเหมาะสมของเนื้อหาที่ส่งเข้าสู่แพลตฟอร์ม เนื้อหาที่ส่งถือเป็นเนื้อหาที่ไม่เป็นความลับ บริษัทอาจนำไปใช้เพื่อวัตถุประสงค์ทางการตลาดของแพลตฟอร์มได้ ผู้ใช้บริการต้องไม่อัปโหลดไวรัส มัลแวร์ หรือโค้ดที่เป็นอันตรายต่อระบบ",
				"Users are responsible for the accuracy and appropriateness of content submitted to the Platform. Submitted content is considered non-confidential and may be used by the Company for Platform marketing purposes. Users must not upload viruses, malware, or any code harmful to the system."
			],
			[
				"ข้อห้ามในการใช้งาน",
				"Prohibited Activities",
				"เนื้อหาที่เผยแพร่ผ่านแพลตฟอร์มต้องไม่มีลักษณะ: อนาจาร ความรุนแรง ฉ้อโกง คุกคาม หรือสร้างความเกลียดชัง; เลือกปฏิบัติด้านเชื้อชาติ เพศ ศาสนา สัญชาติ ความพิการ หรืออายุ; ละเมิดลิขสิทธิ์หรือคัดลอกโดยไม่ให้เครดิต; โปรโมทเชิงพาณิชย์โดยไม่ได้รับอนุญาต; ละเมิดกฎหมายหรือสร้างผลเสียต่อสาธารณะ",
				"Content published through the Platform must not: be obscene, violent, fraudulent, harassing, or hateful; discriminate on the basis of race, gender, religion, nationality, disability, or age; infringe copyright or be copied without attribution; promote commercial activity without authorization; violate law or cause public harm; or breach these Terms or the Privacy Policy."
			],
			[
				"เกณฑ์การประเมินผู้ใช้บริการ",
				"User Evaluation",
				"6.1 Creator จะถูกประเมินคุณภาพงานโดยแบรนด์ คะแนนที่ได้รับมีผลต่อโอกาสรับงานและค่าตอบแทนในอนาคต บริษัทสงวนสิทธิ์ในการปรับเกณฑ์การให้คะแนนโดยไม่ต้องแจ้งล่วงหน้า  6.2 แบรนด์จะถูกประเมินตามเกณฑ์ที่บริษัทกำหนดจาก feedback ของ Creator ผลการประเมินอาจมีผลต่อโอกาสรับสมัคร Creator ในครั้งต่อไป",
				"6.1 Creators are rated on work quality by Brands. Scores affect future work opportunities and compensation. The Company reserves the right to adjust scoring criteria without prior notice.  6.2 Brands are evaluated against criteria set by the Company based on Creator feedback. Evaluation results may affect the Brand’s ability to engage Creators in future campaigns."
			],
			[
				"ผลตอบแทนของ Creator",
				"Creator Compensation",
				"บริษัทอาจจ่ายค่าตอบแทนให้ Creator เป็นเงินสด การสนับสนุน หรือสินค้าตามที่ระบุในแต่ละแคมเปญ บริษัทเรียกเก็บค่าธรรมเนียมบริการตามอัตราที่ตกลงในสัญญาแคมเปญ รวมถึงภาษีหัก ณ ที่จ่ายและภาษีที่เกี่ยวข้องตามกฎหมาย Creator เป็นผู้รับผิดชอบค่าธรรมเนียมของสถาบันการเงินในการโอนเงิน",
				"The Company may pay Creators in cash, sponsorship, or products as specified in each campaign. The Company charges a service fee at the rate agreed in the campaign contract, plus applicable withholding tax and other taxes required by law. Creators bear any bank transfer fees. The Company is not liable for disputes arising from compensation paid directly between Brands and Creators outside the Platform."
			],
			[
				"สิทธิในทรัพย์สินทางปัญญา",
				"Intellectual Property",
				"บริษัทเป็นเจ้าของทรัพย์สินทางปัญญาทั้งหมดบนแพลตฟอร์ม รวมถึงลิขสิทธิ์ ซอฟต์แวร์ และความลับทางการค้า ผู้ใช้บริการสามารถใช้แพลตฟอร์มเพื่อการรับบริการเท่านั้น การทำซ้ำ เผยแพร่ หรือดัดแปลงโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากบริษัทถือเป็นการละเมิด",
				"The Company owns all intellectual property on the Platform, including copyrights, software, and trade secrets. Users may use the Platform only to access the services provided. Reproduction, distribution, or modification without the Company’s prior written consent is prohibited. Users may not use third-party content without proper attribution in accordance with IP law."
			],
			[
				"ความรับผิดชอบของผู้ใช้บริการ",
				"User Responsibilities",
				"9.1 Creator เป็นเจ้าของเนื้อหาที่ตนสร้างขึ้นและรับผิดชอบต่อการเรียกร้องทางกฎหมายทั้งหมด หากการละเมิดข้อกำหนดของ Creator ก่อให้เกิดความเสียหายต่อบริษัท Creator ต้องชดใช้ตามสมควร  9.2 แบรนด์เป็นเจ้าของเนื้อหาที่ตนสร้างขึ้นและรับผิดชอบต่อการเรียกร้องทางกฎหมายทั้งหมด แบรนด์สามารถปฏิเสธความร่วมมือกับ Creator ก่อนการส่งมอบได้โดยแจ้งเหตุผลอันสมควร",
				"9.1 Creators own the content they produce and are responsible for all related legal claims. If a Creator’s breach of these Terms causes damage to the Company, the Creator must indemnify the Company. Creators may cancel before receiving goods or services by providing a reasonable justification, and must compensate for late deliveries as agreed.  9.2 Brands own the content they produce and are responsible for all related legal claims. If a Brand’s breach of these Terms causes damage to the Company, the Brand must indemnify the Company. Brands may refuse cooperation with a Creator before delivery by providing a reasonable justification."
			],
			[
				"การจำกัดความรับผิดของบริษัท",
				"Limitation of Liability",
				"บริษัทไม่รับผิดชอบต่อ: ความเสียหายที่เกิดจากแพลตฟอร์มโซเชียลเน็ตเวิร์กภายนอก; การตรวจสอบความถูกต้องของเนื้อหาที่ผู้ใช้บริการสร้างขึ้น; ธุรกรรมระหว่างผู้ใช้บริการหรือผลกำไรที่ไม่เป็นไปตามที่คาด; การหยุดให้บริการเพื่อบำรุงรักษาระบบ; ภัยธรรมชาติ สงคราม หรือเหตุสุดวิสัย",
				"The Company is not liable for: damage arising from external social networks; verification of the accuracy of User-generated content; transactions between Users or profit shortfalls; service interruptions due to system maintenance; force majeure events including natural disasters, war, or other uncontrollable circumstances; data breaches arising from technology attacks that exceed industry-standard security measures."
			],
			[
				"การชดเชยค่าเสียหาย",
				"Indemnification",
				"ผู้ใช้บริการต้องชดใช้ค่าเสียหายให้แก่บริษัท กรรมการ ผู้บริหาร และพนักงาน ในกรณีที่มีการเรียกร้องจากบุคคลที่สามอันเนื่องมาจากการกระทำของผู้ใช้บริการ ผู้ใช้บริการต้องยื่นคำขอชดเชยเป็นลายลักษณ์อักษรพร้อมหลักฐานประกอบภายใน 3 เดือนนับแต่วันที่ทราบเหตุ หากเกินกำหนดถือว่าสละสิทธิ์ในการเรียกร้อง",
				"Users must indemnify the Company, its directors, officers, and employees against any third-party claims arising from the User’s acts. Users must submit damage claims in writing with supporting evidence within 3 months from the date the User became aware of the incident; otherwise the right to compensation is forfeited. The Company reserves full discretion to review claims."
			],
			[
				"การติดต่อสื่อสาร",
				"Communications",
				"การสื่อสารทางอีเมลจากบริษัทให้ถือว่าผู้ใช้บริการได้รับแล้วเมื่อครบ 3 วันทำการนับแต่วันที่เข้าสู่กล่องขาเข้าของผู้รับ การแจ้งเตือนหรือการสื่อสารรูปแบบอื่นให้ถือว่าได้รับแล้วเมื่อครบ 3 วันทำการนับแต่วันที่ส่ง",
				"Email communications from the Company are deemed received 3 business days after arriving in the recipient’s inbox. Other notifications or communications are deemed received 3 business days after transmission."
			],
			[
				"กฎหมายที่บังคับใช้",
				"Governing Law",
				"ข้อกำหนดฉบับนี้และเอกสารที่เกี่ยวข้องอยู่ภายใต้บังคับและตีความตามกฎหมายของประเทศไทย ข้อพิพาทใดๆ ที่เกิดขึ้นจากหรือเกี่ยวเนื่องกับข้อกำหนดฉบับนี้ให้อยู่ในอำนาจพิจารณาของศาลไทย",
				"These Terms and any related documents are governed by and construed in accordance with the laws of Thailand. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the Thai courts."
			]
		].map(([title, titleEn, body, bodyEn]) => ({
			title,
			titleEn,
			body,
			bodyEn
		}));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = Icon_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="mb-10 border-b border-[#0F2747]/10 pb-8">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/register",
				class: "flex w-fit items-center gap-1.5 text-sm font-semibold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Icon, {
							name: "arrow-left",
							class: "h-4 w-4"
						}, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(unref(tr)("กลับไปสมัครสมาชิก", "Back to registration"))}`);
					} else return [createVNode(_component_Icon, {
						name: "arrow-left",
						class: "h-4 w-4"
					}), createTextVNode(" " + toDisplayString(unref(tr)("กลับไปสมัครสมาชิก", "Back to registration")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<span class="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "file-text",
				class: "h-3.5 w-3.5"
			}, null, _parent));
			_push(` ${ssrInterpolate(unref(tr)("ทางกฎหมาย", "Legal"))}</span><h1 class="mt-4 font-heading text-3xl font-extrabold leading-[1.3] tracking-tight text-ink lg:text-5xl">${ssrInterpolate(unref(tr)("ข้อกำหนดและเงื่อนไข", "Terms and Conditions"))}</h1><p class="mt-3 text-sm text-muted">${ssrInterpolate(unref(tr)("อัปเดตล่าสุด: 1 มกราคม 2026 · อ่านประมาณ 8 นาที", "Last updated: January 1, 2026 · 8 min read"))}</p></section><div class="grid gap-10 lg:grid-cols-4"><aside class="lg:col-span-1"><nav class="lg:sticky lg:top-6"><p class="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]/60">${ssrInterpolate(unref(tr)("สารบัญ", "Contents"))}</p><ol class="space-y-1.5 text-sm"><!--[-->`);
			ssrRenderList(unref(sections), (s, i) => {
				_push(`<li><a${ssrRenderAttr("href", `#s${i + 1}`)} class="text-muted transition hover:text-primary">${ssrInterpolate(i + 1)}. ${ssrInterpolate(unref(tr)(s.title, s.titleEn))}</a></li>`);
			});
			_push(`<!--]--></ol></nav></aside><article class="space-y-8 lg:col-span-3"><!--[-->`);
			ssrRenderList(unref(sections), (s, i) => {
				_push(`<section${ssrRenderAttr("id", `s${i + 1}`)} class="scroll-mt-6"><h2 class="flex items-baseline gap-3 font-heading text-xl font-bold text-ink"><span class="text-primary">${ssrInterpolate(i + 1)}.</span> ${ssrInterpolate(unref(tr)(s.title, s.titleEn))}</h2><p class="mt-3 text-sm leading-[1.9] text-muted">${ssrInterpolate(unref(tr)(s.body, s.bodyEn))}</p></section>`);
			});
			_push(`<!--]--></article></div><section class="mt-12 rounded-xl border border-[#0F2747]/10 bg-white p-7 shadow-sm"><p class="text-sm text-muted">${ssrInterpolate(unref(tr)("มีคำถามเกี่ยวกับข้อกำหนดเหล่านี้? ติดต่อเราได้ที่", "Questions about these terms? Reach us at"))} `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "font-semibold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(tr)("ติดต่อเรา", "Contact us"))}`);
					else return [createTextVNode(toDisplayString(unref(tr)("ติดต่อเรา", "Contact us")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p><div class="mt-4 border-t border-[#0F2747]/10 pt-4 text-xs leading-relaxed text-[#5B6B82]/80"><p class="font-semibold text-ink">${ssrInterpolate(unref(tr)("ผู้ให้บริการ: บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)", "Service Provider: PRAKIT HOLDINGS PUBLIC COMPANY LIMITED"))}</p><p>PRAKIT HOLDINGS PUBLIC COMPANY LIMITED</p><p class="mt-1">${ssrInterpolate(unref(tr)("88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260", "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"))}</p></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/terms.vue
var _sfc_setup = terms_vue_vue_type_script_setup_true_lang_default.setup;
terms_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var terms_default = terms_vue_vue_type_script_setup_true_lang_default;

export { terms_default as default };
//# sourceMappingURL=terms-DM8qjCzV.mjs.map
