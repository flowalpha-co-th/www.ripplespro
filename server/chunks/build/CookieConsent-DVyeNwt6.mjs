import { c as useRoute, u as useAuthStore, b as useLocale, N as NuxtLink, I as Icon_default, e as useState, f as useLanguageStore } from '../virtual/entry.mjs';
import { t as tintOf } from './notifications-DCWQgz_X.mjs';
import { u as useNotificationsStore } from './notifications-8TgrgI_R.mjs';
import { _ as _virtual_public__2Fripples_logo_default } from './_virtual_public-ByjhzWq2.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, ref, watch, reactive, createTextVNode, createCommentVNode, toValue, getCurrentScope, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderTeleport, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';

//#region node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {};
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
//#endregion
//#region node_modules/@vueuse/core/index.mjs
var defaultWindow = void 0;
function unrefElement(elRef) {
	var _a;
	const plain = toValue(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	const stopWatch = watchImmediate(() => {
		var _a, _b;
		return [
			(_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options]) => {
		cleanup();
		if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
		cleanups.push(...raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone)))));
	}, { flush: "post" });
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(cleanup);
	return stop;
}
function onClickOutside(target, handler, options = {}) {
	const { window = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
	if (!window) return controls ? {
		stop: noop,
		cancel: noop,
		trigger: noop
	} : noop;
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return toValue(ignore).some((target2) => {
			if (typeof target2 === "string") return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target2);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	function hasMultipleRoots(target2) {
		const vm = toValue(target2);
		return vm && vm.$.subTree.shapeFlag === 16;
	}
	function checkMultipleRoots(target2, event) {
		const vm = toValue(target2);
		const children = vm.$.subTree && vm.$.subTree.children;
		if (children == null || !Array.isArray(children)) return false;
		return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
	}
	const listener = (event) => {
		const el = unrefElement(target);
		if (event.target == null) return;
		if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	let isProcessingClick = false;
	const cleanup = [
		useEventListener(window, "click", (event) => {
			if (!isProcessingClick) {
				isProcessingClick = true;
				setTimeout(() => {
					isProcessingClick = false;
				}, 0);
				listener(event);
			}
		}, {
			passive: true,
			capture
		}),
		useEventListener(window, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window, "blur", (event) => {
			setTimeout(() => {
				var _a;
				const el = unrefElement(target);
				if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) handler(event);
			}, 0);
		}, { passive: true })
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	if (controls) return {
		stop,
		cancel: () => {
			shouldListen = false;
		},
		trigger: (event) => {
			shouldListen = true;
			listener(event);
			shouldListen = false;
		}
	};
	return stop;
}
//#endregion
//#region app/components/layout/NotificationBell.vue?vue&type=script&setup=true&lang.ts
var NotificationBell_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "NotificationBell",
	__ssrInlineRender: true,
	props: {
		extra: { default: "" },
		align: { default: "right" }
	},
	setup(__props) {
		const notifications = useNotificationsStore();
		const { tr } = useLocale();
		const open = ref(false);
		const root = ref(null);
		ref(null);
		const panel = ref(null);
		const panelStyle = ref({});
		function onItem(id) {
			notifications.markRead(id);
			open.value = false;
		}
		onClickOutside(root, () => {
			open.value = false;
		}, { ignore: [panel] });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "root",
				ref: root,
				class: "relative"
			}, _attrs))}><button type="button"${ssrRenderAttr("aria-label", "การแจ้งเตือน")} class="${ssrRenderClass(["rip-bell relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2747]/10 bg-white text-ink shadow-sm transition hover:text-primary", __props.extra])}">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "bell",
				class: "h-5 w-5"
			}, null, _parent));
			if (unref(notifications).unreadCount > 0) _push(`<span class="absolute -right-1.5 -top-1.5 flex min-w-[18px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">${ssrInterpolate(unref(notifications).unreadCount > 9 ? "9+" : unref(notifications).unreadCount)}</span>`);
			else _push(`<!---->`);
			_push(`</button>`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(open)) {
					_push(`<div style="${ssrRenderStyle(unref(panelStyle))}" class="fixed z-[60] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-[#0F2747]/10 bg-white shadow-2xl"><div class="flex items-center justify-between gap-3 border-b border-[#0F2747]/10 px-4 py-3.5"><p class="font-heading text-sm font-extrabold text-ink">${ssrInterpolate(unref(tr)("การแจ้งเตือน", "Notifications"))} `);
					if (unref(notifications).unreadCount > 0) _push(`<span class="text-muted">(${ssrInterpolate(unref(notifications).unreadCount)} ${ssrInterpolate(unref(tr)("ใหม่", "new"))})</span>`);
					else _push(`<!---->`);
					_push(`</p><button type="button" class="text-xs font-bold text-primary hover:underline">${ssrInterpolate(unref(tr)("อ่านทั้งหมด", "Mark all read"))}</button></div><div class="max-h-[60vh] overflow-y-auto">`);
					if (!unref(notifications).latest.length) _push(`<p class="px-4 py-10 text-center text-sm text-muted">${ssrInterpolate(unref(tr)("ยังไม่มีการแจ้งเตือน", "No notifications yet"))}</p>`);
					else _push(`<!---->`);
					_push(`<!--[-->`);
					ssrRenderList(unref(notifications).latest, (n) => {
						_push(ssrRenderComponent(_component_NuxtLink, {
							key: n.id,
							to: `/portal/${n.link}`,
							class: ["flex items-start gap-3 px-4 py-3 transition hover:bg-surface", n.read ? "" : "bg-primary/[0.03]"],
							onClick: ($event) => onItem(n.id)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="${ssrRenderClass([
										"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
										unref(tintOf)(n.cat).bg,
										unref(tintOf)(n.cat).fg
									])}"${_scopeId}>`);
									_push(ssrRenderComponent(_component_Icon, {
										name: n.icon,
										class: "h-[18px] w-[18px]"
									}, null, _parent, _scopeId));
									_push(`</span><span class="min-w-0 flex-1"${_scopeId}><span class="flex items-center gap-1.5"${_scopeId}><span class="truncate text-sm font-bold text-ink"${_scopeId}>${ssrInterpolate(unref(tr)(n.title, n.titleEn))}</span>`);
									if (!n.read) _push(`<span class="${ssrRenderClass(["h-1.5 w-1.5 shrink-0 rounded-full", unref(tintOf)(n.cat).dot])}"${_scopeId}></span>`);
									else _push(`<!---->`);
									_push(`</span><span class="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted"${_scopeId}>${ssrInterpolate(unref(tr)(n.msg, n.msgEn))}</span><span class="mt-1 block text-[11px] text-[#5B6B82]/55"${_scopeId}>${ssrInterpolate(unref(tr)(n.ago, n.agoEn))}</span></span>`);
								} else return [createVNode("span", { class: [
									"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
									unref(tintOf)(n.cat).bg,
									unref(tintOf)(n.cat).fg
								] }, [createVNode(_component_Icon, {
									name: n.icon,
									class: "h-[18px] w-[18px]"
								}, null, 8, ["name"])], 2), createVNode("span", { class: "min-w-0 flex-1" }, [
									createVNode("span", { class: "flex items-center gap-1.5" }, [createVNode("span", { class: "truncate text-sm font-bold text-ink" }, toDisplayString(unref(tr)(n.title, n.titleEn)), 1), !n.read ? (openBlock(), createBlock("span", {
										key: 0,
										class: ["h-1.5 w-1.5 shrink-0 rounded-full", unref(tintOf)(n.cat).dot]
									}, null, 2)) : createCommentVNode("", true)]),
									createVNode("span", { class: "mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted" }, toDisplayString(unref(tr)(n.msg, n.msgEn)), 1),
									createVNode("span", { class: "mt-1 block text-[11px] text-[#5B6B82]/55" }, toDisplayString(unref(tr)(n.ago, n.agoEn)), 1)
								])];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: "/portal/notifications",
						class: "block border-t border-[#0F2747]/10 bg-surface px-4 py-3 text-center text-sm font-bold text-primary transition hover:bg-primary/5",
						onClick: ($event) => open.value = false
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(tr)("ดูทั้งหมด", "View all"))}`);
							else return [createTextVNode(toDisplayString(unref(tr)("ดูทั้งหมด", "View all")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/layout/NotificationBell.vue
var _sfc_setup$5 = NotificationBell_vue_vue_type_script_setup_true_lang_default.setup;
NotificationBell_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/NotificationBell.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var NotificationBell_default = Object.assign(NotificationBell_vue_vue_type_script_setup_true_lang_default, { __name: "NotificationBell" });
//#endregion
//#region app/components/layout/LangToggle.vue?vue&type=script&setup=true&lang.ts
var LangToggle_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "LangToggle",
	__ssrInlineRender: true,
	setup(__props) {
		const languageStore = useLanguageStore();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-fit items-center rounded-md border border-[#0F2747]/10 bg-white p-1 shadow-sm" }, _attrs))}><button type="button" class="${ssrRenderClass([unref(languageStore).language === "th" ? "bg-primary text-white" : "text-[#5B6B82]/40 hover:text-ink", "rounded px-2.5 py-0.5 text-[10px] font-bold transition"])}"> TH </button><button type="button" class="${ssrRenderClass([unref(languageStore).language === "en" ? "bg-primary text-white" : "text-[#5B6B82]/40 hover:text-ink", "rounded px-2.5 py-0.5 text-[10px] font-bold transition"])}"> EN </button></div>`);
		};
	}
});
//#endregion
//#region app/components/layout/LangToggle.vue
var _sfc_setup$4 = LangToggle_vue_vue_type_script_setup_true_lang_default.setup;
LangToggle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/LangToggle.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var LangToggle_default = Object.assign(LangToggle_vue_vue_type_script_setup_true_lang_default, { __name: "LangToggle" });
//#endregion
//#region app/components/layout/SocialLinks.vue?vue&type=script&setup=true&lang.ts
var SocialLinks_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SocialLinks",
	__ssrInlineRender: true,
	props: { size: { default: "h-[18px] w-[18px]" } },
	setup(__props) {
		const links = [
			{
				label: "Facebook",
				path: "M24 12.07C24 5.4 18.6 0 12 0S0 5.4 0 12.07c0 6 4.4 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.6 23.02 24 18.06 24 12.07z"
			},
			{
				label: "Instagram",
				path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4m6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44"
			},
			{
				label: "X",
				path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
			},
			{
				label: "YouTube",
				path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81M9.55 15.57V8.43L15.82 12z"
			},
			{
				label: "TikTok",
				path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 text-[#5B6B82]/40" }, _attrs))}><!--[-->`);
			ssrRenderList(links, (s) => {
				_push(`<a href="#"${ssrRenderAttr("aria-label", s.label)} class="transition hover:text-primary"><svg viewBox="0 0 24 24" fill="currentColor" class="${ssrRenderClass(__props.size)}"><path${ssrRenderAttr("d", s.path)}></path></svg></a>`);
			});
			_push(`<!--]--></div>`);
		};
	}
});
//#endregion
//#region app/components/layout/SocialLinks.vue
var _sfc_setup$3 = SocialLinks_vue_vue_type_script_setup_true_lang_default.setup;
SocialLinks_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SocialLinks.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SocialLinks_default = Object.assign(SocialLinks_vue_vue_type_script_setup_true_lang_default, { __name: "SocialLinks" });
//#endregion
//#region app/composables/useNav.ts
var useAppMenu = (mode) => {
	const authStore = useAuthStore();
	return computed(() => {
		if (mode === "portal") return [
			{
				key: "dashboard",
				label: "แดชบอร์ด",
				labelEn: "Dashboard",
				to: "/portal/dashboard",
				icon: "layout-dashboard"
			},
			{
				key: "campaigns",
				label: "แคมเปญ",
				labelEn: "Campaigns",
				to: "/portal/campaigns",
				icon: "briefcase"
			},
			{
				key: "tasks",
				label: "งานของฉัน",
				labelEn: "My Tasks",
				to: "/portal/tasks",
				icon: "check-square"
			},
			{
				key: "wallet",
				label: "กระเป๋าเงิน",
				labelEn: "Wallet",
				to: "/portal/wallet",
				icon: "wallet"
			},
			{
				key: "notifications",
				label: "การแจ้งเตือน",
				labelEn: "Notifications",
				to: "/portal/notifications",
				icon: "bell"
			},
			{
				key: "profile",
				label: "โปรไฟล์",
				labelEn: "Profile",
				to: "/portal/profile",
				icon: "user"
			}
		];
		return [
			{
				key: "home",
				label: "หน้าหลัก",
				labelEn: "Home",
				to: "/"
			},
			{
				key: "campaigns",
				label: "แคมเปญ",
				labelEn: "Campaigns",
				to: authStore.isAuthenticated ? "/portal/campaigns" : "/login"
			},
			{
				key: "about",
				label: "เกี่ยวกับเรา",
				labelEn: "About",
				to: "/about"
			},
			{
				key: "services",
				label: "บริการ",
				labelEn: "Services",
				to: "/services"
			},
			{
				key: "faq",
				label: "คำถามที่พบบ่อย",
				labelEn: "FAQ",
				to: "/faq"
			},
			{
				key: "contact",
				label: "ติดต่อเรา",
				labelEn: "Contact",
				to: "/contact"
			}
		];
	});
};
//#endregion
//#region app/components/layout/AppSidebar.vue?vue&type=script&setup=true&lang.ts
var AppSidebar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppSidebar",
	__ssrInlineRender: true,
	props: { mode: { default: "public" } },
	setup(__props) {
		const props = __props;
		const route = useRoute();
		const authStore = useAuthStore();
		const { tr } = useLocale();
		const menu = useAppMenu(props.mode);
		function isActive(item) {
			if (item.to === "/") return route.path === "/";
			return route.path === item.to || route.path.startsWith(item.to + "/");
		}
		const displayName = computed(() => {
			const u = authStore.user;
			return u ? `${u.influencer?.first_name || ""} ${u.influencer?.last_name || ""}`.trim() : "";
		});
		const handle = computed(() => authStore.user?.username);
		const avatar = computed(() => {
			return authStore.user?.influencer?.avatar ? authStore.user?.influencer?.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName.value ?? handle.value ?? "User")}&background=random&size=128`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_NotificationBell = NotificationBell_default;
			const _component_Icon = Icon_default;
			const _component_LangToggle = LangToggle_default;
			const _component_SocialLinks = SocialLinks_default;
			_push(`<aside${ssrRenderAttrs(mergeProps({ class: "fixed inset-y-0 left-0 z-50 hidden w-72 flex-col overflow-y-auto border-r border-[#0F2747]/10 bg-white px-6 py-7 lg:flex" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "self-center"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-24"${_scopeId}>`);
					else return [createVNode("img", {
						src: _virtual_public__2Fripples_logo_default,
						alt: "Ripples",
						class: "h-24"
					})];
				}),
				_: 1
			}, _parent));
			if (__props.mode === "portal") {
				_push(`<div class="mt-7 flex items-center gap-3 rounded-xl border border-[#0F2747]/10 bg-surface p-3"><img${ssrRenderAttr("src", unref(avatar))}${ssrRenderAttr("alt", unref(displayName))} class="h-11 w-11 shrink-0 rounded-full object-cover"><div class="min-w-0 flex-1"><p class="truncate text-sm font-bold text-ink">${ssrInterpolate(unref(displayName))}</p><p class="text-xs text-muted">Creator · @${ssrInterpolate(unref(handle))}</p></div>`);
				_push(ssrRenderComponent(_component_NotificationBell, {
					extra: "shrink-0",
					align: "left"
				}, null, _parent));
				_push(`</div>`);
			} else {
				_push(`<div class="mt-7">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: unref(authStore).user ? "/portal/dashboard" : "/login",
					class: "flex items-center justify-between gap-2 rounded-lg bg-primary px-4 py-3 text-white shadow-[0_6px_16px_-6px_rgb(45_91_255_/_55%)] transition hover:bg-primaryDark"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span class="text-left leading-tight"${_scopeId}><span class="block text-[9px] font-bold uppercase tracking-wide text-white/70"${_scopeId}>Influencer / Creator</span><span class="mt-0.5 block text-sm font-bold"${_scopeId}>${ssrInterpolate(!unref(authStore).user ? unref(tr)("เข้าสู่ระบบ", "Sign in") : unref(tr)("ไปที่หน้าแดชบอร์ด", "Go to Dashboard"))}</span></span>`);
							_push(ssrRenderComponent(_component_Icon, {
								name: "arrow-right",
								class: "h-4 w-4 shrink-0"
							}, null, _parent, _scopeId));
						} else return [createVNode("span", { class: "text-left leading-tight" }, [createVNode("span", { class: "block text-[9px] font-bold uppercase tracking-wide text-white/70" }, "Influencer / Creator"), createVNode("span", { class: "mt-0.5 block text-sm font-bold" }, toDisplayString(!unref(authStore).user ? unref(tr)("เข้าสู่ระบบ", "Sign in") : unref(tr)("ไปที่หน้าแดชบอร์ด", "Go to Dashboard")), 1)]), createVNode(_component_Icon, {
							name: "arrow-right",
							class: "h-4 w-4 shrink-0"
						})];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			}
			_push(`<nav class="mt-7 flex flex-1 flex-col gap-0.5"><!--[-->`);
			ssrRenderList(unref(menu), (item) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: item.key,
					to: item.to,
					class: ["rounded-lg px-3 py-2.5 text-sm font-semibold transition", isActive(item) ? "bg-primary/10 text-primary" : "text-muted hover:bg-primary/5 hover:text-primary"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							if (item.icon) {
								_push(`<span class="flex items-center gap-3"${_scopeId}>`);
								_push(ssrRenderComponent(_component_Icon, {
									name: item.icon,
									class: "h-[18px] w-[18px]"
								}, null, _parent, _scopeId));
								_push(`<span${_scopeId}>${ssrInterpolate(unref(tr)(item.label, item.labelEn))}</span></span>`);
							} else _push(`<span${_scopeId}>${ssrInterpolate(unref(tr)(item.label, item.labelEn))}</span>`);
						} else return [item.icon ? (openBlock(), createBlock("span", {
							key: 0,
							class: "flex items-center gap-3"
						}, [createVNode(_component_Icon, {
							name: item.icon,
							class: "h-[18px] w-[18px]"
						}, null, 8, ["name"]), createVNode("span", null, toDisplayString(unref(tr)(item.label, item.labelEn)), 1)])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(tr)(item.label, item.labelEn)), 1))];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav>`);
			if (__props.mode === "portal") {
				_push(`<div class="mt-6"><button type="button" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50">`);
				_push(ssrRenderComponent(_component_Icon, {
					name: "log-out",
					class: "h-[18px] w-[18px]"
				}, null, _parent));
				_push(` ${ssrInterpolate(unref(tr)("ออกจากระบบ", "Log out"))}</button><div class="mt-5 flex items-center justify-between gap-3 border-t border-[#0F2747]/10 pt-5">`);
				_push(ssrRenderComponent(_component_LangToggle, null, null, _parent));
				_push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
				_push(`</div></div>`);
			} else {
				_push(`<div class="mt-6 space-y-5">`);
				_push(ssrRenderComponent(_component_LangToggle, null, null, _parent));
				_push(`<p class="text-[11px] leading-relaxed text-muted">${ssrInterpolate(unref(tr)("Marketplace KOL & Influencer ยุคใหม่ — สำหรับแบรนด์และ creator ในประเทศไทย", "The modern KOL & Influencer marketplace — for brands and creators in Thailand"))}</p>`);
				_push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
				_push(`</div>`);
			}
			_push(`</aside>`);
		};
	}
});
//#endregion
//#region app/components/layout/AppSidebar.vue
var _sfc_setup$2 = AppSidebar_vue_vue_type_script_setup_true_lang_default.setup;
AppSidebar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppSidebar.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AppSidebar_default = Object.assign(AppSidebar_vue_vue_type_script_setup_true_lang_default, { __name: "AppSidebar" });
//#endregion
//#region app/components/layout/MobileTopbar.vue?vue&type=script&setup=true&lang.ts
var MobileTopbar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MobileTopbar",
	__ssrInlineRender: true,
	props: { mode: { default: "public" } },
	setup(__props) {
		const props = __props;
		const route = useRoute();
		const authStore = useAuthStore();
		const { tr } = useLocale();
		const open = ref(false);
		const menu = useAppMenu(props.mode);
		function isActive(item) {
			if (item.to === "/") return route.path === "/";
			return route.path === item.to || route.path.startsWith(item.to + "/");
		}
		const displayName = computed(() => {
			return authStore.user ? `${authStore.user.influencer?.first_name} ${authStore.user.influencer?.last_name}`.trim() : "";
		});
		const handle = computed(() => authStore.user?.username);
		const avatar = computed(() => {
			return authStore.user?.influencer?.avatar ? authStore.user?.influencer?.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName.value ?? handle.value ?? "User")}&background=random&size=128`;
		});
		watch(() => route.path, () => {
			open.value = false;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_NotificationBell = NotificationBell_default;
			const _component_Icon = Icon_default;
			const _component_LangToggle = LangToggle_default;
			const _component_SocialLinks = SocialLinks_default;
			_push(`<!--[--><header class="sticky top-0 z-40 flex items-center justify-between border-b border-[#0F2747]/10 bg-white/90 px-6 py-4 backdrop-blur-md lg:hidden">`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: __props.mode === "portal" ? "/portal/dashboard" : "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-16"${_scopeId}>`);
					else return [createVNode("img", {
						src: _virtual_public__2Fripples_logo_default,
						alt: "Ripples",
						class: "h-16"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex items-center gap-2.5">`);
			if (__props.mode === "portal") _push(ssrRenderComponent(_component_NotificationBell, null, null, _parent));
			else _push(`<!---->`);
			_push(`<button type="button" aria-label="Menu" class="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2747]/10 bg-white text-ink shadow-sm">`);
			_push(ssrRenderComponent(_component_Icon, {
				name: "menu",
				class: "h-5 w-5"
			}, null, _parent));
			_push(`</button></div></header>`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(open)) _push(`<div class="fixed inset-0 z-[70] bg-ink/40 lg:hidden"></div>`);
				else _push(`<!---->`);
				if (unref(open)) {
					_push(`<aside class="fixed inset-y-0 right-0 z-[71] flex w-72 max-w-[85vw] flex-col overflow-y-auto bg-white px-6 py-7 lg:hidden"><div class="flex items-center justify-between"><img${ssrRenderAttr("src", _virtual_public__2Fripples_logo_default)} alt="Ripples" class="h-16"><button type="button" aria-label="ปิด" class="flex h-9 w-9 items-center justify-center rounded-lg text-[#5B6B82]/60 transition hover:bg-surface hover:text-ink">`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x",
						class: "h-5 w-5"
					}, null, _parent));
					_push(`</button></div>`);
					if (__props.mode === "portal") _push(`<div class="mt-6 flex items-center gap-3 rounded-xl border border-[#0F2747]/10 bg-surface p-3"><img${ssrRenderAttr("src", unref(avatar))}${ssrRenderAttr("alt", unref(displayName))} class="h-11 w-11 shrink-0 rounded-full object-cover"><div class="min-w-0 flex-1"><p class="truncate text-sm font-bold text-ink">${ssrInterpolate(unref(displayName))}</p><p class="text-xs text-muted">Creator · @${ssrInterpolate(unref(handle))}</p></div></div>`);
					else _push(ssrRenderComponent(_component_NuxtLink, {
						to: "/login",
						class: "mt-6 flex items-center justify-between gap-2 rounded-lg bg-primary px-4 py-3 text-white shadow-sm transition hover:bg-primaryDark"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(unref(tr)("เข้าสู่ระบบ", "Sign in"))}</span>`);
								_push(ssrRenderComponent(_component_Icon, {
									name: "arrow-right",
									class: "h-4 w-4"
								}, null, _parent, _scopeId));
							} else return [createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(tr)("เข้าสู่ระบบ", "Sign in")), 1), createVNode(_component_Icon, {
								name: "arrow-right",
								class: "h-4 w-4"
							})];
						}),
						_: 1
					}, _parent));
					_push(`<nav class="mt-6 flex flex-1 flex-col gap-0.5"><!--[-->`);
					ssrRenderList(unref(menu), (item) => {
						_push(ssrRenderComponent(_component_NuxtLink, {
							key: item.key,
							to: item.to,
							class: ["rounded-lg px-3 py-2.5 text-sm font-semibold transition", isActive(item) ? "bg-primary/10 text-primary" : "text-muted hover:bg-primary/5 hover:text-primary"]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (item.icon) {
										_push(`<span class="flex items-center gap-3"${_scopeId}>`);
										_push(ssrRenderComponent(_component_Icon, {
											name: item.icon,
											class: "h-[18px] w-[18px]"
										}, null, _parent, _scopeId));
										_push(`<span${_scopeId}>${ssrInterpolate(unref(tr)(item.label, item.labelEn))}</span></span>`);
									} else _push(`<span${_scopeId}>${ssrInterpolate(unref(tr)(item.label, item.labelEn))}</span>`);
								} else return [item.icon ? (openBlock(), createBlock("span", {
									key: 0,
									class: "flex items-center gap-3"
								}, [createVNode(_component_Icon, {
									name: item.icon,
									class: "h-[18px] w-[18px]"
								}, null, 8, ["name"]), createVNode("span", null, toDisplayString(unref(tr)(item.label, item.labelEn)), 1)])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(tr)(item.label, item.labelEn)), 1))];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></nav>`);
					if (__props.mode === "portal") {
						_push(`<button type="button" class="mt-6 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "log-out",
							class: "h-[18px] w-[18px]"
						}, null, _parent));
						_push(` ${ssrInterpolate(unref(tr)("ออกจากระบบ", "Log out"))}</button>`);
					} else _push(`<!---->`);
					_push(`<div class="mt-5 flex items-center justify-between gap-3 border-t border-[#0F2747]/10 pt-5">`);
					_push(ssrRenderComponent(_component_LangToggle, null, null, _parent));
					_push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
					_push(`</div></aside>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region app/components/layout/MobileTopbar.vue
var _sfc_setup$1 = MobileTopbar_vue_vue_type_script_setup_true_lang_default.setup;
MobileTopbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/MobileTopbar.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var MobileTopbar_default = Object.assign(MobileTopbar_vue_vue_type_script_setup_true_lang_default, { __name: "MobileTopbar" });
//#endregion
//#region app/composables/useCookieConsent.ts
function useCookieConsent() {
	const visible = useState("rip-cookie-visible", () => false);
	const forceSettings = useState("rip-cookie-force-settings", () => false);
	function hasConsent() {
		return true;
	}
	function store(choice) {}
	function initBanner() {}
	function openSettings() {
		forceSettings.value = true;
		visible.value = true;
	}
	function close() {
		visible.value = false;
		forceSettings.value = false;
	}
	return {
		visible,
		forceSettings,
		hasConsent,
		store,
		initBanner,
		openSettings,
		close
	};
}
//#endregion
//#region app/components/common/CookieConsent.vue?vue&type=script&setup=true&lang.ts
var CookieConsent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "CookieConsent",
	__ssrInlineRender: true,
	setup(__props) {
		const { visible, forceSettings} = useCookieConsent();
		const { tr } = useLocale();
		const showSettings = ref(false);
		const cats = [
			{
				key: "necessary",
				label: "จำเป็นต่อการใช้งาน",
				labelEn: "Strictly necessary",
				desc: "ทำให้เว็บทำงานได้ เช่น การเข้าสู่ระบบและความปลอดภัย — เปิดตลอด",
				descEn: "Required for the site to work — e.g. sign-in and security. Always on.",
				locked: true
			},
			{
				key: "functional",
				label: "การใช้งาน (Functional)",
				labelEn: "Functional",
				desc: "จดจำการตั้งค่า เช่น ภาษาและตัวเลือกที่คุณเลือกไว้",
				descEn: "Remember your settings, such as language and your saved choices.",
				locked: false
			},
			{
				key: "analytics",
				label: "การวิเคราะห์ (Analytics)",
				labelEn: "Analytics",
				desc: "ช่วยให้เราเข้าใจการใช้งานเพื่อปรับปรุงเว็บ",
				descEn: "Help us understand usage so we can improve the site.",
				locked: false
			},
			{
				key: "marketing",
				label: "การตลาด (Marketing)",
				labelEn: "Marketing",
				desc: "ใช้แนะนำแคมเปญ/เนื้อหาที่ตรงกับคุณมากขึ้น",
				descEn: "Used to recommend campaigns and content that match you better.",
				locked: false
			}
		];
		const choice = reactive({
			necessary: true,
			functional: false,
			analytics: false,
			marketing: false
		});
		watch(forceSettings, (v) => {
			if (v) showSettings.value = true;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			const _component_NuxtLink = NuxtLink;
			ssrRenderTeleport(_push, (_push) => {
				if (unref(visible)) {
					_push(`<div class="fixed inset-x-0 bottom-0 z-[85] flex justify-center p-4 sm:bottom-5 sm:left-auto sm:right-5 sm:p-0"><div class="w-full max-w-md overflow-hidden rounded-2xl border border-[#0F2747]/10 bg-white shadow-[0_30px_70px_-25px_rgba(15,39,71,.45)]">`);
					if (!unref(showSettings)) {
						_push(`<div class="p-5"><div class="flex items-start gap-3"><div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "cookie",
							class: "h-6 w-6"
						}, null, _parent));
						_push(`</div><div><p class="font-heading text-base font-extrabold text-ink">${ssrInterpolate(unref(tr)("เราใช้คุกกี้", "We use cookies"))}</p><p class="mt-1 text-sm leading-relaxed text-muted">${ssrInterpolate(unref(tr)("เพื่อให้เว็บทำงานได้ดี วิเคราะห์การใช้งาน และแนะนำแคมเปญที่ตรงกับคุณ — อ่าน", "To keep the site working well, analyze usage, and recommend campaigns that match you — read our "))}`);
						_push(ssrRenderComponent(_component_NuxtLink, {
							to: "/cookies",
							class: "font-bold text-primary hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(tr)("นโยบายคุกกี้", "Cookie Policy"))}`);
								else return [createTextVNode(toDisplayString(unref(tr)("นโยบายคุกกี้", "Cookie Policy")), 1)];
							}),
							_: 1
						}, _parent));
						_push(`</p></div></div><div class="mt-4 flex flex-col gap-2 sm:flex-row-reverse"><button type="button" class="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("ยอมรับทั้งหมด", "Accept all"))}</button><button type="button" class="flex-1 rounded-lg border border-[#0F2747]/15 bg-white px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-surface">${ssrInterpolate(unref(tr)("เฉพาะที่จำเป็น", "Necessary only"))}</button></div><button type="button" class="mt-2 w-full rounded-lg py-2 text-center text-xs font-bold text-muted transition hover:text-primary">${ssrInterpolate(unref(tr)("ตั้งค่าคุกกี้", "Cookie settings"))}</button></div>`);
					} else {
						_push(`<div class="p-5"><div class="flex items-center justify-between"><p class="font-heading text-base font-extrabold text-ink">${ssrInterpolate(unref(tr)("ตั้งค่าคุกกี้", "Cookie settings"))}</p><button type="button" class="text-[#5B6B82]/60 transition hover:text-ink">`);
						_push(ssrRenderComponent(_component_Icon, {
							name: "x",
							class: "h-5 w-5"
						}, null, _parent));
						_push(`</button></div><div class="mt-4 max-h-[46vh] space-y-2.5 overflow-y-auto"><!--[-->`);
						ssrRenderList(cats, (c) => {
							_push(`<div class="flex items-start justify-between gap-3 rounded-xl border border-[#0F2747]/10 p-3.5"><div><p class="text-sm font-bold text-ink">${ssrInterpolate(unref(tr)(c.label, c.labelEn))} `);
							if (c.locked) _push(`<span class="ml-1 rounded bg-surface px-1.5 py-0.5 text-[10px] font-bold text-muted">${ssrInterpolate(unref(tr)("จำเป็น", "Required"))}</span>`);
							else _push(`<!---->`);
							_push(`</p><p class="mt-0.5 text-xs leading-relaxed text-muted">${ssrInterpolate(unref(tr)(c.desc, c.descEn))}</p></div><button type="button"${ssrIncludeBooleanAttr(c.locked) ? " disabled" : ""} class="${ssrRenderClass([
								"relative h-6 w-11 shrink-0 rounded-full transition",
								c.locked || unref(choice)[c.key] ? "bg-primary" : "bg-[#0F2747]/15",
								c.locked ? "cursor-not-allowed opacity-60" : ""
							])}"><span class="${ssrRenderClass(["absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all", c.locked || unref(choice)[c.key] ? "left-6" : "left-1"])}"></span></button></div>`);
						});
						_push(`<!--]--></div><div class="mt-4 flex flex-col gap-2 sm:flex-row-reverse"><button type="button" class="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primaryDark">${ssrInterpolate(unref(tr)("บันทึกตัวเลือก", "Save choices"))}</button><button type="button" class="flex-1 rounded-lg border border-[#0F2747]/15 bg-white px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-surface">${ssrInterpolate(unref(tr)("ยอมรับทั้งหมด", "Accept all"))}</button></div></div>`);
					}
					_push(`</div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
});
//#endregion
//#region app/components/common/CookieConsent.vue
var _sfc_setup = CookieConsent_vue_vue_type_script_setup_true_lang_default.setup;
CookieConsent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CookieConsent.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CookieConsent_default = Object.assign(CookieConsent_vue_vue_type_script_setup_true_lang_default, { __name: "CookieConsent" });

export { AppSidebar_default as A, CookieConsent_default as C, MobileTopbar_default as M, SocialLinks_default as S, useCookieConsent as u };
//# sourceMappingURL=CookieConsent-DVyeNwt6.mjs.map
