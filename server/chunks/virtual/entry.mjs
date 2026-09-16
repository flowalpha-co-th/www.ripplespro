import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineProdDiagnostics } from 'nostics';
import { ansiFormatter } from 'nostics/formatters/ansi';
import { hasInjectionContext, inject, isRef, toValue, getCurrentScope, ref, watchEffect, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated, shallowReactive, reactive, effectScope, toRef, createApp, provide, onErrorCaptured, onServerPrefetch, unref, createVNode, resolveDynamicComponent, defineComponent, mergeProps, withCtx, computed, shallowRef, h, defineAsyncComponent, customRef, isVNode, createCommentVNode, resolveComponent, isReadonly, createElementBlock, cloneVNode, toRaw, Suspense, nextTick, Fragment, useSSRContext, isShallow, isReactive, queuePostFlushCb } from 'vue';
import { f as createError, p as parseURL, e as encodePath, m as decodePath, w as withQuery, n as hasProtocol, o as isScriptProtocol, i as joinURL, q as sanitizeStatusCode, v as klona, x as defu, y as getRequestHeader, z as isEqual, A as setCookie, B as getCookie, C as deleteCookie, D as parseQuery, E as withTrailingSlash, F as withoutTrailingSlash, $ as $fetch } from '../_/nitro.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { useRoute as useRoute$1, RouterView, START_LOCATION, createMemoryHistory, createRouter } from 'vue-router';
import { isPlainObject } from '@vue/shared';
import { defineStore, setActivePinia, createPinia, shouldHydrate } from 'pinia';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrInterpolate, ssrRenderTeleport, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import * as icons from '@lucide/vue';
import { walkResolver } from 'unhead/utils';

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function injectHead$1() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (instance)
      return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}

const VueResolver = /* @__PURE__ */ Object.assign(
  (_, value) => isRef(value) ? toValue(value) : value,
  // identity for plain non-reactive values, so the SSR default init entry
  // keeps its precomputed fast path (see unhead/server createHead)
  { _static: true }
);

function useHead(input, options = {}) {
  const head = options.head || injectHead$1();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const scope = getCurrentScope();
  if (scope && !scope.active) {
    return { patch() {
    }, dispose() {
    }, _i: -1 };
  }
  const deactivated = ref(false);
  if (options.onRendered && scope) {
    const _onRendered = options.onRendered;
    options = { ...options, onRendered: (ctx) => scope.run(() => _onRendered(ctx)) };
  }
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

function flatHooks(configHooks, hooks = {}, parentName) {
	for (const key in configHooks) {
		const subHook = configHooks[key];
		const name = parentName ? `${parentName}:${key}` : key;
		if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
		else if (typeof subHook === "function") hooks[name] = subHook;
	}
	return hooks;
}
const createTask = /* @__PURE__ */ (() => {
	if (console.createTask) return console.createTask;
	const defaultTask = { run: (fn) => fn() };
	return () => defaultTask;
})();
function callHooks(hooks, args, startIndex, task) {
	for (let i = startIndex; i < hooks.length; i += 1) try {
		const result = task ? task.run(() => hooks[i](...args)) : hooks[i](...args);
		if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks(hooks, args, i + 1, task));
	} catch (error) {
		return Promise.reject(error);
	}
}
function serialTaskCaller(hooks, args, name) {
	if (hooks.length > 0) return callHooks(hooks, args, 0, createTask(name));
}
function parallelTaskCaller(hooks, args, name) {
	if (hooks.length > 0) {
		const task = createTask(name);
		return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
	}
}
function callEachWith(callbacks, arg0) {
	for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
	_hooks;
	_before;
	_after;
	_deprecatedHooks;
	_deprecatedMessages;
	constructor() {
		this._hooks = {};
		this._before = void 0;
		this._after = void 0;
		this._deprecatedMessages = void 0;
		this._deprecatedHooks = {};
		this.hook = this.hook.bind(this);
		this.callHook = this.callHook.bind(this);
		this.callHookWith = this.callHookWith.bind(this);
	}
	hook(name, function_, options = {}) {
		if (!name || typeof function_ !== "function") return () => {};
		const originalName = name;
		let dep;
		while (this._deprecatedHooks[name]) {
			dep = this._deprecatedHooks[name];
			name = dep.to;
		}
		if (dep && !options.allowDeprecated) {
			let message = dep.message;
			if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
			if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
			if (!this._deprecatedMessages.has(message)) {
				console.warn(message);
				this._deprecatedMessages.add(message);
			}
		}
		if (!function_.name) try {
			Object.defineProperty(function_, "name", {
				get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
				configurable: true
			});
		} catch {}
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(function_);
		return () => {
			if (function_) {
				this.removeHook(name, function_);
				function_ = void 0;
			}
		};
	}
	hookOnce(name, function_) {
		let _unreg;
		let _function = (...arguments_) => {
			if (typeof _unreg === "function") _unreg();
			_unreg = void 0;
			_function = void 0;
			return function_(...arguments_);
		};
		_unreg = this.hook(name, _function);
		return _unreg;
	}
	removeHook(name, function_) {
		const hooks = this._hooks[name];
		if (hooks) {
			const index = hooks.indexOf(function_);
			if (index !== -1) hooks.splice(index, 1);
			if (hooks.length === 0) this._hooks[name] = void 0;
		}
	}
	clearHook(name) {
		this._hooks[name] = void 0;
	}
	deprecateHook(name, deprecated) {
		this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
		const _hooks = this._hooks[name] || [];
		this._hooks[name] = void 0;
		for (const hook of _hooks) this.hook(name, hook);
	}
	deprecateHooks(deprecatedHooks) {
		for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
	}
	addHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
		return () => {
			for (const unreg of removeFns) unreg();
			removeFns.length = 0;
		};
	}
	removeHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		for (const key in hooks) this.removeHook(key, hooks[key]);
	}
	removeAllHooks() {
		this._hooks = {};
	}
	callHook(name, ...args) {
		return this.callHookWith(serialTaskCaller, name, args);
	}
	callHookParallel(name, ...args) {
		return this.callHookWith(parallelTaskCaller, name, args);
	}
	callHookWith(caller, name, args) {
		const event = this._before || this._after ? {
			name,
			args,
			context: {}
		} : void 0;
		if (this._before) callEachWith(this._before, event);
		const result = caller(this._hooks[name] ? [...this._hooks[name]] : [], args, name);
		if (result instanceof Promise) return result.finally(() => {
			if (this._after && event) callEachWith(this._after, event);
		});
		if (this._after && event) callEachWith(this._after, event);
		return result;
	}
	beforeEach(function_) {
		this._before = this._before || [];
		this._before.push(function_);
		return () => {
			if (this._before !== void 0) {
				const index = this._before.indexOf(function_);
				if (index !== -1) this._before.splice(index, 1);
			}
		};
	}
	afterEach(function_) {
		this._after = this._after || [];
		this._after.push(function_);
		return () => {
			if (this._after !== void 0) {
				const index = this._after.indexOf(function_);
				if (index !== -1) this._after.splice(index, 1);
			}
		};
	}
};
function createHooks() {
	return new Hookable();
}

function _getAsyncLocalStorage() {
	return globalThis.AsyncLocalStorage || globalThis.process?.getBuiltinModule?.("node:async_hooks")?.AsyncLocalStorage;
}
function createContext(opts = {}) {
	let currentInstance;
	let isSingleton = false;
	const checkConflict = (instance) => {
		if (currentInstance && currentInstance !== instance) throw new Error("Context conflict");
	};
	let als;
	if (opts.asyncContext) {
		const _AsyncLocalStorage = opts.AsyncLocalStorage || _getAsyncLocalStorage();
		if (_AsyncLocalStorage) als = new _AsyncLocalStorage();
		else console.warn("[unctx] `AsyncLocalStorage` is not provided.");
	}
	const _wrapInstance = (instance) => als && instance !== null && typeof instance === "object" ? { __unctx_weak: new WeakRef(instance) } : instance;
	const _unwrapInstance = (store) => store && store.__unctx_weak ? store.__unctx_weak.deref() : store;
	const _getCurrentInstance = () => {
		if (als) {
			const store = als.getStore();
			if (store !== void 0) return _unwrapInstance(store);
		}
		return currentInstance;
	};
	return {
		use: () => {
			const _instance = _getCurrentInstance();
			if (_instance === void 0) throw new Error("Context is not available");
			return _instance;
		},
		tryUse: () => {
			return _getCurrentInstance();
		},
		set: (instance, replace) => {
			if (!replace) checkConflict(instance);
			currentInstance = instance;
			isSingleton = true;
		},
		unset: () => {
			currentInstance = void 0;
			isSingleton = false;
		},
		call: (instance, callback) => {
			checkConflict(instance);
			currentInstance = instance;
			try {
				return als ? als.run(_wrapInstance(instance), callback) : callback();
			} finally {
				if (!isSingleton) currentInstance = void 0;
			}
		},
		async callAsync(instance, callback) {
			currentInstance = instance;
			const onRestore = () => {
				currentInstance = instance;
			};
			const onLeave = () => currentInstance === instance ? onRestore : void 0;
			asyncHandlers.add(onLeave);
			try {
				const r = als ? als.run(_wrapInstance(instance), callback) : callback();
				if (!isSingleton) currentInstance = void 0;
				return await r;
			} finally {
				asyncHandlers.delete(onLeave);
			}
		}
	};
}
function createNamespace(defaultOpts = {}) {
	const contexts = {};
	return { get(key, opts = {}) {
		if (!contexts[key]) contexts[key] = createContext({
			...defaultOpts,
			...opts
		});
		return contexts[key];
	} };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
	const restores = [];
	for (const leaveHandler of asyncHandlers) {
		const restore = leaveHandler();
		if (restore) restores.push(restore);
	}
	const restore = () => {
		for (const restore of restores) restore();
	};
	let awaitable = function_();
	if (awaitable && typeof awaitable === "object" && "catch" in awaitable) awaitable = awaitable.catch((error) => {
		restore();
		throw error;
	});
	return [awaitable, restore];
}

//#region node_modules/nuxt/dist/app/diagnostics/_shared.js
/**
* Shared configuration for the runtime (E<N>xxx) diagnostics catalogs.
*
* Catalogs are split by domain and imported directly where used (no barrel),
* so the browser bundle only pulls in the codes a module references. Pair the
* pure-call annotations on each `defineDiagnostics()` with dev-guarded,
* statement-level report calls so report-only diagnostics strip from production.
*
* Codes are stable, fully-qualified `NUXT_E<NNNN>` identifiers. Codes with a
* dedicated docs page resolve a `see:` URL via {@link docsBase}; the rest opt
* out with `docs: false`.
*/
function docsBase(code) {
	return `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
}
var ansi = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
var colors = {
	red: ansi(31, 39),
	yellow: ansi(33, 39),
	cyan: ansi(36, 39),
	gray: ansi(90, 39),
	bold: ansi(1, 22),
	dim: ansi(2, 22)
};
ansiFormatter(colors);
var prodReporter = (diagnostic) => {
	console.error(`[${diagnostic.name}]`);
};
var prodReporters = [prodReporter];
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/core.js
/**
* E1xxx
* Core / Nuxt-instance / lifecycle runtime diagnostics.
*/
var appDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fnuxt.config.mjs
var nuxtLinkDefaults = {
	"componentName": "NuxtLink"};
var asyncDataDefaults = { "deep": false };
var fetchDefaults = {};
//#endregion
//#region node_modules/nuxt/dist/app/nuxt.js
function getNuxtAppCtx(id = "nuxt-app") {
	return getContext(id, { asyncContext: false });
}
var NuxtPluginIndicator = "__nuxt_plugin";
/** @since 3.0.0 */
function createNuxtApp(options) {
	let hydratingCount = 0;
	const nuxtApp = {
		_id: options.id || "nuxt-app",
		_scope: effectScope(),
		provide: void 0,
		versions: {
			get nuxt() {
				return "4.5.2";
			},
			get vue() {
				return nuxtApp.vueApp.version;
			}
		},
		payload: shallowReactive({
			...options.ssrContext?.payload || {},
			data: shallowReactive({}),
			state: reactive({}),
			once: /* @__PURE__ */ new Set(),
			_errors: shallowReactive({})
		}),
		static: { data: {} },
		runWithContext(fn) {
			if (nuxtApp._scope.active && !getCurrentScope()) return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
			return callWithNuxt(nuxtApp, fn);
		},
		isHydrating: false,
		deferHydration() {
			if (!nuxtApp.isHydrating) return () => {};
			hydratingCount++;
			let called = false;
			return () => {
				if (called) return;
				called = true;
				hydratingCount--;
				if (hydratingCount === 0) {
					nuxtApp.isHydrating = false;
					return nuxtApp.callHook("app:suspense:resolve");
				}
			};
		},
		_asyncDataPromises: {},
		_asyncData: shallowReactive({}),
		_state: shallowReactive({}),
		_payloadRevivers: {},
		...options
	};
	nuxtApp.payload.serverRendered = true;
	if (nuxtApp.ssrContext) {
		nuxtApp.payload.path = nuxtApp.ssrContext.url;
		nuxtApp.ssrContext.nuxt = nuxtApp;
		nuxtApp.ssrContext.payload = nuxtApp.payload;
		nuxtApp.ssrContext.config = {
			public: nuxtApp.ssrContext.runtimeConfig.public,
			app: nuxtApp.ssrContext.runtimeConfig.app
		};
	}
	nuxtApp.hooks = createHooks();
	nuxtApp.hook = nuxtApp.hooks.hook;
	{
		const contextCaller = async function(hooks, args) {
			for (const hook of hooks) await nuxtApp.runWithContext(() => hook(...args));
		};
		nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, args);
	}
	nuxtApp.callHook = nuxtApp.hooks.callHook;
	nuxtApp.provide = (name, value) => {
		const $name = "$" + name;
		defineGetter(nuxtApp, $name, value);
		defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
	};
	defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
	defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
	const runtimeConfig = options.ssrContext.runtimeConfig;
	nuxtApp.provide("config", runtimeConfig);
	return nuxtApp;
}
/** @since 3.12.0 */
function registerPluginHooks(nuxtApp, plugin) {
	if (plugin.hooks) nuxtApp.hooks.addHooks(plugin.hooks);
}
/** @since 3.0.0 */
async function applyPlugin(nuxtApp, plugin) {
	if (typeof plugin === "function") {
		const run = () => nuxtApp.runWithContext(() => plugin(nuxtApp));
		const { provide } = await run() || {};
		if (provide && typeof provide === "object") for (const key in provide) nuxtApp.provide(key, provide[key]);
	}
}
/** @since 3.0.0 */
async function applyPlugins(nuxtApp, plugins) {
	let error;
	for (const plugin of plugins) registerPluginHooks(nuxtApp, plugin);
	for (const plugin of plugins) try {
		await applyPlugin(nuxtApp, plugin);
	} catch (e) {
		if (!nuxtApp.payload.error) throw e;
		error ||= e;
	}
	if (error) throw nuxtApp.payload.error || error;
}
/** @since 3.0.0 */
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtPlugin(plugin) {
	if (typeof plugin === "function") return plugin;
	const _name = plugin._name || plugin.name;
	delete plugin.name;
	return Object.assign(plugin.setup || (() => {}), plugin, {
		[NuxtPluginIndicator]: true,
		_name
	});
}
var definePayloadPlugin = defineNuxtPlugin;
/**
* Ensures that the setup function passed in has access to the Nuxt instance via `useNuxtApp`.
* @param nuxt A Nuxt instance
* @param setup The function to call
* @since 3.0.0
*/
function callWithNuxt(nuxt, setup, args) {
	const fn = () => setup();
	const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
	return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
}
function tryUseNuxtApp(id) {
	let nuxtAppInstance;
	if (hasInjectionContext()) nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
	nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
	return nuxtAppInstance || null;
}
function useNuxtApp(id) {
	const nuxtAppInstance = tryUseNuxtApp(id);
	if (!nuxtAppInstance) throw appDiagnostics.NUXT_E1001();
	return nuxtAppInstance;
}
/** @since 3.0.0 */
/* @__NO_SIDE_EFFECTS__ */
function useRuntimeConfig(_event) {
	return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
	Object.defineProperty(obj, key, { get: () => val });
}

//#region node_modules/nuxt/dist/app/utils.js
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
//#endregion
//#region node_modules/nuxt/dist/app/components/injections.js
var LayoutMetaSymbol = Symbol("layout-meta");
var LayoutSymbol = Symbol("layout");
var PageRouteSymbol = Symbol("route");
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/navigation.js
/**
* E2xxx
* Navigation / routing / middleware runtime diagnostics.
*/
var navigationDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/nuxt/dist/app/composables/router.js
/** @since 3.0.0 */
var useRouter = () => {
	return useNuxtApp()?.$router;
};
/**
* Whether the current effect scope is (a descendant of) the component instance's scope.
* A detached scope (e.g. `createSharedComposable`) outlives the component, so the
* per-page route injected there would freeze after navigation (#18903).
*/
function isScopeWithinInstance(instance) {
	const instanceScope = instance.scope;
	let scope = getCurrentScope();
	while (scope) {
		if (scope === instanceScope) return true;
		scope = scope.parent;
	}
	return false;
}
/** @since 3.0.0 */
var useRoute = (() => {
	if (hasInjectionContext()) {
		const instance = getCurrentInstance();
		if (!instance || isScopeWithinInstance(instance)) return inject(PageRouteSymbol, useNuxtApp()._route);
	}
	return useNuxtApp()._route;
});
/** @since 3.0.0 */
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtRouteMiddleware(middleware) {
	return middleware;
}
/** @since 3.0.0 */
var isProcessingMiddleware = () => {
	try {
		if (useNuxtApp()._processingMiddleware) return true;
	} catch {
		return false;
	}
	return false;
};
var HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
var HTML_ATTR_ENCODE_MAP = {
	"&": "&amp;",
	"\"": "&quot;",
	"'": "&#x27;",
	"<": "&lt;",
	">": "&gt;"
};
function encodeForHtmlAttr(value) {
	return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
/**
* A helper that aids in programmatic navigation within your Nuxt application.
*
* Can be called on the server and on the client, within pages, route middleware, plugins, and more.
* @param {RouteLocationRaw | undefined | null} [to] - The route to navigate to. Accepts a route object, string path, `undefined`, or `null`. Defaults to '/'.
* @param {NavigateToOptions} [options] - Optional customization for controlling the behavior of the navigation.
* @returns {Promise<void | NavigationFailure | false> | false | void | RouteLocationRaw} The navigation result, which varies depending on context and options.
* @see https://nuxt.com/docs/4.x/api/utils/navigate-to
* @since 3.0.0
*/
var navigateTo = (to, options) => {
	to ||= "/";
	const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
	const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
	const isExternal = options?.external || isExternalHost;
	if (isExternal) {
		if (!options?.external) throw navigationDiagnostics.NUXT_E2001({ toPath });
		const { protocol } = new URL(toPath, "http://localhost");
		if (protocol && isScriptProtocol(protocol)) throw navigationDiagnostics.NUXT_E2002({
			toPath,
			protocol
		});
	}
	const inMiddleware = isProcessingMiddleware();
	const router = useRouter();
	const nuxtApp = useNuxtApp();
	if (nuxtApp.ssrContext) {
		const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
		const location = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
		const redirect = async function(response) {
			await nuxtApp.callHook("app:redirected");
			const encodedHeader = encodeURL(location, isExternalHost);
			const encodedLoc = encodeForHtmlAttr(encodedHeader);
			nuxtApp.ssrContext["~renderResponse"] = {
				statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
				body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
				headers: { location: encodedHeader }
			};
			return response;
		};
		if (!isExternal && inMiddleware) {
			router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
			return to;
		}
		return redirect(!inMiddleware ? void 0 : false);
	}
	if (isExternal) {
		nuxtApp._scope.stop();
		if (options?.replace) (void 0).replace(toPath);
		else (void 0).href = toPath;
		if (inMiddleware) {
			if (!nuxtApp.isHydrating) return false;
			return new Promise(() => {});
		}
		return Promise.resolve();
	}
	const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
	return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
/**
* @internal
*/
function resolveRouteObject(to) {
	return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
/**
* @internal
*/
function encodeURL(location, isExternalHost = false) {
	const url = new URL(location, "http://localhost");
	if (!isExternalHost) return url.pathname.replace(/^\/{2,}/, "/") + url.search + url.hash;
	if (location.startsWith("//")) return url.toString().replace(url.protocol, "");
	return url.toString();
}
/**
* Encode the pathname of a route location string. Ensures decoded paths like
* `/café` are percent-encoded to match vue-router's encoded route records.
* Already-encoded paths are not double-encoded.
* @internal
*/
function encodeRoutePath(url) {
	const parsed = parseURL(url);
	return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/error.js
var NUXT_ERROR_SIGNATURE = "__nuxt_error";
/** @since 3.0.0 */
var useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
/** @since 3.0.0 */
var showError = (error) => {
	const nuxtError = createError$1(error);
	try {
		const error = /* @__PURE__ */ useError();
		error.value ||= nuxtError;
	} catch {
		throw nuxtError;
	}
	return nuxtError;
};
/**
* Show the error page unless the current client is a crawler, in which case the
* bot receives the already server-rendered HTML instead (#32137, #35338).
*
* @internal
*/
var _showErrorUnlessCrawler = async (nuxtApp, error) => {
	await nuxtApp.runWithContext(() => showError(error));
};
/** @since 3.0.0 */
var isNuxtError = (error) => !!error && typeof error === "object" && "__nuxt_error" in error;
/** @since 3.0.0 */
var createError$1 = (error) => {
	if (typeof error !== "string" && error.statusText) error.message ??= error.statusText;
	const nuxtError = createError(error);
	Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
		value: true,
		configurable: false,
		writable: false
	});
	Object.defineProperty(nuxtError, "status", {
		get: () => nuxtError.statusCode,
		configurable: true
	});
	Object.defineProperty(nuxtError, "statusText", {
		get: () => nuxtError.statusMessage,
		configurable: true
	});
	return nuxtError;
};

//#region src/index.ts
/**
* Compute the 64-bit FNV-1a hash of a string as two 32-bit lanes.
*
* This is the fast core: no BigInt, no allocations, plain `Math.imul`-free
* 32-bit arithmetic. Prefer {@link fnv1a64Hex} or {@link fnv1a64Base36} for a
* usable key; use this directly only when you want to avoid string formatting.
*
* The hash is computed over UTF-16 code units (`str.charCodeAt(i)`), not UTF-8
* bytes. For ASCII input this matches a canonical FNV-1a-64; for non-ASCII it
* does not. See the README for details.
*
* @param str - The string to hash.
* @returns The `{ high, low }` 32-bit lanes of the 64-bit hash.
*/
function fnv1a64(str) {
	const len = str.length;
	let i = 0;
	let t0 = 0;
	let v0 = 8997;
	let t1 = 0;
	let v1 = 33826;
	let t2 = 0;
	let v2 = 40164;
	let t3 = 0;
	let v3 = 52210;
	while (i < len) {
		v0 ^= str.charCodeAt(i++);
		t0 = v0 * 435;
		t1 = v1 * 435;
		t2 = v2 * 435;
		t3 = v3 * 435;
		t2 += v0 << 8;
		t3 += v1 << 8;
		t1 += t0 >>> 16;
		v0 = t0 & 65535;
		t2 += t1 >>> 16;
		v1 = t1 & 65535;
		v3 = t3 + (t2 >>> 16) & 65535;
		v2 = t2 & 65535;
	}
	return {
		high: (v3 << 16 | v2) >>> 0,
		low: (v1 << 16 | v0) >>> 0
	};
}
/**
* Compute the 64-bit FNV-1a hash of a string as a `bigint`.
*
* Ergonomic and comparable, at the cost of composing the two lanes into a
* `bigint`. For a compact string key, prefer {@link fnv1a64Base36}.
*
* @param str - The string to hash.
* @returns The 64-bit hash as an unsigned `bigint`.
*/
function fnv1a64BigInt(str) {
	const { high, low } = fnv1a64(str);
	return BigInt(high) << 32n | BigInt(low);
}
const hexDigits = "0123456789abcdef";
/**
* Every byte value rendered as its two hex digits, so a 32-bit lane formats in
* 4 lookups instead of `toString(16)` plus a `padStart`. Leading zeros are
* intrinsic to the table, which is what makes the padding free.
*/
Array.from({ length: 256 }, (_, i) => hexDigits.charAt(i >> 4) + hexDigits.charAt(i & 15));
/**
* Compute the 64-bit FNV-1a hash of a string as a base36 string.
*
* This is the shortest textual form (up to 13 characters) and is ideal for
* cache keys. The length varies with the value; it is not zero-padded. Equal
* inputs always produce identical strings.
*
* @param str - The string to hash.
* @returns A base36 string of the 64-bit hash.
*/
function fnv1a64Base36(str) {
	return fnv1a64BigInt(str).toString(36);
}

function walk(input, seen) {
	if (input === null) return "L";
	let out, i = 0, keys = input, tmp = typeof input;
	if (tmp !== "object") {
		if (tmp === "number") return input - input === 0 ? "n" + input : "L";
		if (tmp === "string") return "s" + input;
		if (tmp === "bigint") return "n" + input;
		if (tmp === "boolean") return input ? "T" : "F";
		return;
	}
	let is_arr = Array.isArray(input);
	if (!is_arr) {
		if (input instanceof Date) return "d" + +input;
		if (input instanceof RegExp) return "r" + input.source + input.flags;
	}
	tmp = seen.indexOf(input);
	if (~tmp) return "~" + (tmp + 1);
	if (typeof input.toJSON === "function" && !ArrayBuffer.isView(input)) {
		input = input.toJSON();
		if (input === null || typeof input !== "object") return walk(input, seen);
		tmp = seen.indexOf(input);
		if (~tmp) return "~" + (tmp + 1);
		is_arr = Array.isArray(input);
	}
	seen.push(keys);
	if (is_arr) {
		for (out = "a"; i < input.length; out += (tmp = walk(input[i++], seen)) === undefined ? "L" : tmp);
	} else if (input instanceof Set) {
		out = "e";
		for (let value of input) out += (tmp = walk(value, seen)) === undefined ? "L" : tmp;
	} else if (input instanceof Map) {
		keys = [...input.keys()];
		if (keys.length > 1) keys.sort();
		for (out = "o"; i < keys.length; i++) {
			if ((tmp = walk(input.get(keys[i]), seen)) !== undefined) out += keys[i] + tmp;
		}
	} else if (input[Symbol.toStringTag] === undefined || ArrayBuffer.isView(input)) {
		keys = Object.keys(input);
		if (keys.length > 1) keys.sort();
		for (out = "o"; i < keys.length; i++) {
			if ((tmp = walk(input[keys[i]], seen)) !== undefined) out += keys[i] + tmp;
		}
	} else {
		throw new Error("Unsupported value");
	}
	seen.pop();
	return out;
}
/**
* Canonicalize a value into a stable identity string. Two structurally-equal
* inputs return the same id, regardless of key order.
*
* @example
* ```ts
* identify({ a: 1, b: 2 }) === identify({ b: 2, a: 1 }); // true
* ```
*/
function identify(input) {
	return walk(input, []) ?? "U";
}

function endIndex(str, min, len) {
	const index = str.indexOf(";", min);
	return index === -1 ? len : index;
}
function eqIndex(str, min, max) {
	const index = str.indexOf("=", min);
	return index < max ? index : -1;
}
function valueSlice(str, min, max) {
	if (min === max) return "";
	let start = min;
	let end = max;
	do {
		const code = str.charCodeAt(start);
		if (code !== 32 && code !== 9) break;
	} while (++start < end);
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 32 && code !== 9) break;
		end--;
	}
	return str.slice(start, end);
}
const NullObject = /* @__PURE__ */ (() => {
	const C = function() {};
	C.prototype = Object.create(null);
	return C;
})();
function parse(str, options) {
	const obj = new NullObject();
	const len = str.length;
	if (len < 2) return obj;
	const dec = options?.decode || decode;
	const allowMultiple = options?.allowMultiple || false;
	let index = 0;
	do {
		const eqIdx = eqIndex(str, index, len);
		if (eqIdx === -1) break;
		const endIdx = endIndex(str, index, len);
		if (eqIdx > endIdx) {
			index = str.lastIndexOf(";", eqIdx - 1) + 1;
			continue;
		}
		const key = valueSlice(str, index, eqIdx);
		if (options?.filter && !options.filter(key)) {
			index = endIdx + 1;
			continue;
		}
		const val = dec(valueSlice(str, eqIdx + 1, endIdx));
		if (allowMultiple) {
			const existing = obj[key];
			if (existing === void 0) obj[key] = val;
			else if (Array.isArray(existing)) existing.push(val);
			else obj[key] = [existing, val];
		} else if (obj[key] === void 0) obj[key] = val;
		index = endIdx + 1;
	} while (index < len);
	return obj;
}
function decode(str) {
	if (!str.includes("%")) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Ffetch.mjs
if (!globalThis.$fetch) globalThis.$fetch = $fetch.create({ baseURL: baseURL() });
var $fetch$2 = globalThis.$fetch;
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fglobal-polyfills.mjs
if (!("global" in globalThis)) globalThis.global = globalThis;
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/head.js
/**
* E6xxx
* Head / unhead runtime diagnostics.
*/
var unheadDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/nuxt/dist/head/runtime/composables.js
/**
* Injects the head client from the Nuxt context or Vue inject.
*/
function injectHead(nuxtApp) {
	const nuxt = nuxtApp || useNuxtApp();
	return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
		if (hasInjectionContext()) {
			const head = inject(headSymbol);
			if (!head) throw unheadDiagnostics.NUXT_E6001();
			return head;
		}
	});
}
function useHead$1(input, options = {}) {
	const head = options.head || injectHead(options.nuxt);
	return useHead(input, {
		head,
		...options
	});
}
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/state.js
/**
* E7xxx
* Payload / state / cookie runtime diagnostics.
*/
var stateDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/manifest.js
/**
* E5xxx
* App manifest / route-rules runtime diagnostics.
*/
var manifestDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/nuxt/dist/app/components/utils.js
/**
* Internal utility
* @private
*/
var _wrapInTransition = (props, children) => {
	return { default: () => children.default?.() };
};
var ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
function generateRouteKey$1(route) {
	const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => route.params[r.slice(1)]?.toString() || "");
	return typeof source === "function" ? source(route) : source;
}
/**
* Utility used within router guards
* return true if the route has been changed with a page change during navigation
*/
function isChangingPage(to, from) {
	if (to === from || from === START_LOCATION) return false;
	if (generateRouteKey$1(to) !== generateRouteKey$1(from)) return true;
	if (to.matched.every((comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default)) return false;
	return true;
}
var VALID_TAG_RE = /^[a-z][a-z0-9-]*$/i;
/** Return `tag` if it is a safe HTML tag name, otherwise `fallback`. */
function sanitizeTag(tag, fallback) {
	return tag && VALID_TAG_RE.test(tag) ? tag : fallback;
}
function toArray$1(value) {
	return Array.isArray(value) ? value : [value];
}
/**
* Internal utility
* @private
*/
function _mergeTransitionProps(routeProps) {
	const _props = [];
	for (const prop of routeProps) {
		if (!prop) continue;
		_props.push({
			...prop,
			onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0,
			onBeforeLeave: prop.onBeforeLeave ? toArray$1(prop.onBeforeLeave) : void 0
		});
	}
	return defu(..._props);
}
//#endregion
//#region node_modules/nuxt/dist/pages/runtime/router.options.js
var router_options_default = { scrollBehavior(to, from, savedPosition) {
	const nuxtApp = useNuxtApp();
	const router = useRouter();
	const hashScrollBehaviour = router.options?.scrollBehaviorType ?? "auto";
	if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
		if (from.hash && !to.hash) return savedPosition ?? {
			left: 0,
			top: 0
		};
		if (to.hash) return {
			el: to.hash,
			top: _getHashElementScrollMarginTop(to.hash),
			behavior: hashScrollBehaviour
		};
		return false;
	}
	if ((typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop) === false) return false;
	if (from === START_LOCATION) return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
	return new Promise((resolve) => {
		const doScroll = () => {
			requestAnimationFrame(() => {
				if (router.currentRoute.value.fullPath !== to.fullPath) {
					resolve(false);
					return;
				}
				resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
			});
		};
		nuxtApp.hooks.hookOnce("page:loading:end", () => {
			const transitionPromise = nuxtApp["~transitionPromise"];
			if (transitionPromise) transitionPromise.then(doScroll);
			else doScroll();
		});
	});
} };
function _getHashElementScrollMarginTop(selector) {
	try {
		const elem = (void 0).querySelector(selector);
		if (elem) return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
	} catch {}
	return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
	if (savedPosition) return savedPosition;
	if (to.hash) return {
		el: to.hash,
		top: _getHashElementScrollMarginTop(to.hash),
		behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
	};
	return {
		left: 0,
		top: 0
	};
}
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default = {
	hashMode: false,
	scrollBehaviorType: "auto",
	...router_options_default
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Froute-rules.mjs
var sensitiveMatcher = /* @__PURE__ */ (() => {
	const $0 = { redirect: "/portal/campaigns" };
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		if (p === "/campaigns") r.push({ data: $0 });
		else if (p.charCodeAt(p.length - 1) === 47) {
			if (p === "/campaigns/") r.push({ data: $0 });
		}
		let s = p.split("/");
		if (s.length > 1 && s[s.length - 1] === "") {
			s.pop();
			p = p.slice(0, -1);
		}
		if (s.length > 1) {
			if (s[1] === "campaigns") r.push({
				data: $0,
				params: { "_": p.slice(11) }
			});
		}
		return r.reverse();
	};
})();
var foldedMatcher = sensitiveMatcher;
var decodeRoutePath = function decodeRoutePath(path) {
	if (!path.includes("%")) return path;
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	try {
		return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
	} catch {
		return path;
	}
};
var normalizePath = (path, fold) => {
	if (typeof path !== "string") return path;
	const decoded = decodeRoutePath(path);
	return fold ? decoded.toLowerCase() : decoded;
};
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froute_rules_default = (path) => virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.sensitive ? defu({}, ...sensitiveMatcher("", normalizePath(path, false)).map((r) => r.data).reverse()) : defu({}, ...foldedMatcher("", normalizePath(path, true)).map((r) => r.data).reverse());
//#endregion
//#region node_modules/nuxt/dist/app/composables/manifest.js
var routeRulesMatcher$1 = virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froute_rules_default;
function getRouteRules(arg) {
	const path = typeof arg === "string" ? arg : arg.path;
	try {
		return routeRulesMatcher$1(path);
	} catch (e) {
		manifestDiagnostics.NUXT_E5003({
			path,
			cause: e
		});
		return {};
	}
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/payload.js
/**
* This is an experimental function for configuring passing rich data from server -> client.
* @since 3.4.0
*/
function definePayloadReducer(name, reduce) {
	useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
}
//#endregion
//#region node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js
var payloadPlugin = definePayloadPlugin(() => {
	definePayloadReducer("skipHydrate", (data) => !shouldHydrate(data) && 1);
});
//#endregion
//#region node_modules/nuxt/dist/head/runtime/island-head.js
/**
* No-op `head.push` until the returned `unfreeze` runs. Plugin/transformer
* augmentations on the same head are unaffected.
*/
function freezeHead(head) {
	const realPush = head.push;
	head.push = () => ({
		dispose: () => {},
		patch: () => {},
		_i: 0
	});
	return () => {
		head.push = realPush;
	};
}
//#endregion
//#region node_modules/nuxt/dist/head/runtime/plugins/unhead.server.js
var plugin$3 = defineNuxtPlugin({
	name: "nuxt:head",
	enforce: "pre",
	setup(nuxtApp) {
		const head = nuxtApp.ssrContext.head;
		if (nuxtApp.ssrContext.islandContext) {
			const unfreeze = freezeHead(head);
			nuxtApp.hooks.hookOnce("app:created", unfreeze);
		}
		nuxtApp.vueApp.use(head);
	}
});
//#endregion
//#region node_modules/nuxt/dist/pages/runtime/utils.js
var ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE = /:\w+/g;
var interpolatePath = (route, match) => {
	return match.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
};
var generateRouteKey = (routeProps, override) => {
	const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
	const source = matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
	return typeof source === "function" ? source(routeProps.route) : source;
};
/** @since 3.9.0 */
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
Object.assign(Object.create(null), {});
var pageIslandRoutes = Object.assign(Object.create(null), {});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fmiddleware.mjs
var globalMiddleware = [
	defineNuxtRouteMiddleware(async (to) => {
		let __temp, __restore;
		if (!to.meta?.validate) return;
		const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
		if (result === true) return;
		return createError$1({
			fatal: false,
			status: result && (result.status || result.statusCode) || 404,
			statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
			data: { path: to.fullPath }
		});
	}),
	defineNuxtRouteMiddleware((to) => {
		if (to.path.startsWith("/portal/") && to.path !== "/portal/dashboard" && to.path !== "/portal/development") return navigateTo("/portal/development");
	}),
	/* @__PURE__ */ defineNuxtRouteMiddleware((to) => {})
];
var namedMiddleware = { auth: () => import('../build/auth-Bh1R_W5U.mjs') };
//#endregion
//#region app/pages/docs/design-system.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$26 = { layout: "docs" };
//#endregion
//#region app/pages/docs/email-templates.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$25 = { layout: "docs" };
//#endregion
//#region app/pages/docs/notifications-spec.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$24 = { layout: "docs" };
//#endregion
//#region app/pages/docs/profile-spec.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$23 = { layout: "docs" };
//#endregion
//#region app/pages/portal/campaign-detail.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$22 = { layout: "portal" };
//#endregion
//#region app/pages/portal/campaigns.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$21 = { layout: "portal" };
//#endregion
//#region app/pages/portal/change-password.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$20 = { layout: "portal" };
//#endregion
//#region app/pages/portal/dashboard.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$19 = { layout: "portal" };
//#endregion
//#region app/pages/portal/development.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$18 = { layout: "portal" };
//#endregion
//#region app/pages/portal/notification-settings.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$17 = { layout: "portal" };
//#endregion
//#region app/pages/portal/notifications.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$16 = { layout: "portal" };
//#endregion
//#region app/pages/portal/profile.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$15 = { layout: "portal" };
//#endregion
//#region app/pages/portal/tasks.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$14 = { layout: "portal" };
//#endregion
//#region app/pages/portal/wallet.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$13 = { layout: "portal" };
//#endregion
//#region app/pages/about.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$12 = { layout: "default" };
//#endregion
//#region app/pages/contact.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$11 = { layout: "default" };
//#endregion
//#region app/pages/cookies.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$10 = { layout: "default" };
//#endregion
//#region app/pages/docs/index.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$9 = { layout: "docs" };
//#endregion
//#region app/pages/faq.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$8 = { layout: "default" };
//#endregion
//#region app/pages/forgot-password.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$7 = { layout: "auth" };
//#endregion
//#region app/pages/login.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$6 = { layout: "auth" };
//#endregion
//#region app/pages/privacy.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$5 = { layout: "default" };
//#endregion
//#region app/pages/register.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$4 = { layout: "auth" };
//#endregion
//#region app/pages/reset-password.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$3 = { layout: "auth" };
//#endregion
//#region app/pages/services.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$2 = { layout: "default" };
//#endregion
//#region app/pages/terms.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta$1 = { layout: "default" };
//#endregion
//#region app/pages/index.vue?macro=true&vue&type=script&setup=true&lang.ts
var __nuxt_page_meta = { layout: "default" };
//#endregion
//#region node_modules/nuxt/dist/pages/runtime/component-stub.js
var component_stub_default = {};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Froutes.mjs
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default = [
	{
		name: "docs-design-system",
		path: "/docs/design-system",
		meta: __nuxt_page_meta$26 || {},
		component: () => import('../build/design-system-ErqWGStE.mjs')
	},
	{
		name: "docs-email-templates",
		path: "/docs/email-templates",
		meta: __nuxt_page_meta$25 || {},
		component: () => import('../build/email-templates-DZp9Kmb0.mjs')
	},
	{
		name: "docs-notifications-spec",
		path: "/docs/notifications-spec",
		meta: __nuxt_page_meta$24 || {},
		component: () => import('../build/notifications-spec-rqOJBTfk.mjs')
	},
	{
		name: "docs-profile-spec",
		path: "/docs/profile-spec",
		meta: __nuxt_page_meta$23 || {},
		component: () => import('../build/profile-spec-DC8CrB79.mjs')
	},
	{
		name: "portal-campaign-detail",
		path: "/portal/campaign-detail",
		meta: {
			...__nuxt_page_meta$22 || {},
			"middleware": "auth"
		},
		component: () => import('../build/campaign-detail-eO6C4vjW.mjs')
	},
	{
		name: "portal-campaigns",
		path: "/portal/campaigns",
		meta: {
			...__nuxt_page_meta$21 || {},
			"middleware": "auth"
		},
		component: () => import('../build/campaigns-BqK9F36D.mjs')
	},
	{
		name: "portal-change-password",
		path: "/portal/change-password",
		meta: {
			...__nuxt_page_meta$20 || {},
			"middleware": "auth"
		},
		component: () => import('../build/change-password-DIxwAoJW.mjs')
	},
	{
		name: "portal-dashboard",
		path: "/portal/dashboard",
		meta: {
			...__nuxt_page_meta$19 || {},
			"middleware": "auth"
		},
		component: () => import('../build/dashboard-Bp4FZh2T.mjs')
	},
	{
		name: "portal-development",
		path: "/portal/development",
		meta: {
			...__nuxt_page_meta$18 || {},
			"middleware": "auth"
		},
		component: () => import('../build/development-2uqriEbN.mjs')
	},
	{
		name: "portal-notification-settings",
		path: "/portal/notification-settings",
		meta: {
			...__nuxt_page_meta$17 || {},
			"middleware": "auth"
		},
		component: () => import('../build/notification-settings-Ml53XRgO.mjs')
	},
	{
		name: "portal-notifications",
		path: "/portal/notifications",
		meta: {
			...__nuxt_page_meta$16 || {},
			"middleware": "auth"
		},
		component: () => import('../build/notifications-CRwG-9ph.mjs')
	},
	{
		name: "portal-profile",
		path: "/portal/profile",
		meta: {
			...__nuxt_page_meta$15 || {},
			"middleware": "auth"
		},
		component: () => import('../build/profile-Cakb6y9P.mjs')
	},
	{
		name: "portal-tasks",
		path: "/portal/tasks",
		meta: {
			...__nuxt_page_meta$14 || {},
			"middleware": "auth"
		},
		component: () => import('../build/tasks-DSBh8UKY.mjs')
	},
	{
		name: "portal-wallet",
		path: "/portal/wallet",
		meta: {
			...__nuxt_page_meta$13 || {},
			"middleware": "auth"
		},
		component: () => import('../build/wallet-CqWsYF17.mjs')
	},
	{
		name: "about",
		path: "/about",
		meta: __nuxt_page_meta$12 || {},
		component: () => import('../build/about-DJE-CDBO.mjs')
	},
	{
		name: "contact",
		path: "/contact",
		meta: __nuxt_page_meta$11 || {},
		component: () => import('../build/contact-DfQ7Bs6B.mjs')
	},
	{
		name: "cookies",
		path: "/cookies",
		meta: __nuxt_page_meta$10 || {},
		component: () => import('../build/cookies-CL7Ldrj8.mjs')
	},
	{
		name: "docs",
		path: "/docs",
		meta: __nuxt_page_meta$9 || {},
		component: () => import('../build/docs-DKWPltAN.mjs')
	},
	{
		name: "faq",
		path: "/faq",
		meta: __nuxt_page_meta$8 || {},
		component: () => import('../build/faq-Cbt4wmNa.mjs')
	},
	{
		name: "forgot-password",
		path: "/forgot-password",
		meta: __nuxt_page_meta$7 || {},
		component: () => import('../build/forgot-password-Duyr_g1G.mjs')
	},
	{
		name: "login",
		path: "/login",
		meta: __nuxt_page_meta$6 || {},
		component: () => import('../build/login-N6y1RufN.mjs')
	},
	{
		name: "privacy",
		path: "/privacy",
		meta: __nuxt_page_meta$5 || {},
		component: () => import('../build/privacy-NKhQ7wPX.mjs')
	},
	{
		name: "register",
		path: "/register",
		meta: __nuxt_page_meta$4 || {},
		component: () => import('../build/register-CMknK-K2.mjs')
	},
	{
		name: "reset-password",
		path: "/reset-password",
		meta: __nuxt_page_meta$3 || {},
		component: () => import('../build/reset-password-C0Bi3K5Q.mjs')
	},
	{
		name: "services",
		path: "/services",
		meta: __nuxt_page_meta$2 || {},
		component: () => import('../build/services-BjaG6uN8.mjs')
	},
	{
		name: "terms",
		path: "/terms",
		meta: __nuxt_page_meta$1 || {},
		component: () => import('../build/terms-DM8qjCzV.mjs')
	},
	{
		name: "index",
		path: "/",
		meta: __nuxt_page_meta || {},
		component: () => import('../build/pages-DCFpu3pH.mjs')
	},
	{
		name: void 0,
		path: "/campaigns",
		component: component_stub_default
	},
	{
		name: void 0,
		path: "/campaigns/:pathMatch(.*)",
		component: component_stub_default
	}
];
//#endregion
//#region node_modules/nuxt/dist/pages/runtime/plugins/router.js
var plugin$2 = defineNuxtPlugin({
	name: "nuxt:router",
	enforce: "pre",
	async setup(nuxtApp) {
		let __temp, __restore;
		let routerBase = useRuntimeConfig().app.baseURL;
		const history = virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.history?.(routerBase) ?? createMemoryHistory(routerBase);
		const routes = virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.routes ? ([__temp, __restore] = executeAsync(() => virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.routes(virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default : virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default;
		let startPosition;
		const router = createRouter({
			...virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default,
			scrollBehavior: (to, from, savedPosition) => {
				if (from === START_LOCATION) {
					startPosition = savedPosition;
					return;
				}
				if (virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior) {
					router.options.scrollBehavior = virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior;
					if ("scrollRestoration" in (void 0).history) {
						const unsub = router.beforeEach(() => {
							unsub();
							(void 0).history.scrollRestoration = "manual";
						});
					}
					return virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
				}
			},
			history,
			routes
		});
		nuxtApp.vueApp.use(router);
		const previousRoute = shallowRef(router.currentRoute.value);
		router.afterEach((_to, from) => {
			previousRoute.value = from;
		});
		Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", { get: () => previousRoute.value });
		const initialURL = nuxtApp.ssrContext.url;
		const _route = shallowRef(router.currentRoute.value);
		const syncCurrentRoute = () => {
			_route.value = router.currentRoute.value;
		};
		router.afterEach((to, from) => {
			const lastTo = to.matched.at(-1)?.components?.default;
			const lastFrom = from.matched.at(-1)?.components?.default;
			if (lastTo === lastFrom) {
				if (generateRouteKey({
					route: to,
					Component: { type: lastTo }
				}) === generateRouteKey({
					route: from,
					Component: { type: lastFrom }
				})) syncCurrentRoute();
				return;
			}
			if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) syncCurrentRoute();
		});
		const route = { sync: syncCurrentRoute };
		for (const key in _route.value) Object.defineProperty(route, key, {
			get: () => _route.value[key],
			enumerable: true
		});
		nuxtApp._route = shallowReactive(route);
		nuxtApp._middleware ||= {
			global: [],
			named: {}
		};
		const error = useError();
		const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
		if (!nuxtApp.ssrContext?.islandContext || isServerPage) router.afterEach(async (to, _from, failure) => {
			delete nuxtApp._processingMiddleware;
			delete nuxtApp._middlewareTo;
			if (failure) await nuxtApp.callHook("page:loading:end");
			if (failure?.type === 4) return;
			if (to.redirectedFrom && to.fullPath !== initialURL) await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
		});
		try {
			[__temp, __restore] = executeAsync(() => router.push(initialURL)), __temp = await __temp, __restore();
			[__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
		} catch (error) {
			[__temp, __restore] = executeAsync(() => _showErrorUnlessCrawler(nuxtApp, error)), await __temp, __restore();
		}
		const resolvedInitialRoute = router.currentRoute.value;
		syncCurrentRoute();
		if (nuxtApp.ssrContext?.islandContext && !isServerPage) return { provide: { router } };
		const initialLayout = nuxtApp.payload.state._layout;
		router.beforeEach(async (to, from) => {
			await nuxtApp.callHook("page:loading:start");
			to.meta = reactive(to.meta);
			if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) to.meta.layout = initialLayout;
			nuxtApp._processingMiddleware = true;
			nuxtApp._middlewareTo = to;
			if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
				const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
				for (const component of to.matched) {
					const componentMiddleware = component.meta.middleware;
					if (!componentMiddleware) continue;
					for (const entry of toArray(componentMiddleware)) middlewareEntries.add(entry);
				}
				const routeRules = getRouteRules({ path: to.path });
				if (routeRules.appMiddleware) for (const key in routeRules.appMiddleware) if (routeRules.appMiddleware[key]) middlewareEntries.add(key);
				else middlewareEntries.delete(key);
				for (const entry of middlewareEntries) {
					const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
					if (!middleware) throw navigationDiagnostics.NUXT_E2004({
						entry: String(entry),
						validMiddleware: void 0
					});
					try {
						const result = await nuxtApp.runWithContext(() => middleware(to, from));
						if (result === false || result instanceof Error) {
							const error = result || createError$1({
								status: 404,
								statusText: `Page Not Found: ${initialURL}`
							});
							await nuxtApp.runWithContext(() => showError(error));
							return false;
						}
						if (result === true) continue;
						if (result === false) return result;
						if (result) {
							if (isNuxtError(result) && result.fatal) await nuxtApp.runWithContext(() => showError(result));
							return result;
						}
					} catch (err) {
						const error = createError$1(err);
						if (error.fatal) await nuxtApp.runWithContext(() => showError(error));
						return error;
					}
				}
			}
		});
		if (isServerPage) router.beforeResolve((to) => {
			const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
			const actual = to.matched.find((m) => (m.components?.default)?.__nuxt_island)?.components?.default;
			if (!expected || expected !== actual?.__nuxt_island) {
				nuxtApp.ssrContext["~renderResponse"] = {
					statusCode: 400,
					statusMessage: "Invalid island request path"
				};
				return false;
			}
		});
		router.onError(async () => {
			delete nuxtApp._processingMiddleware;
			delete nuxtApp._middlewareTo;
			await nuxtApp.callHook("page:loading:end");
		});
		router.afterEach((to) => {
			if (to.matched.length === 0 && !error.value) return nuxtApp.runWithContext(() => showError(createError$1({
				status: 404,
				fatal: false,
				statusText: `Page not found: ${to.fullPath}`,
				data: { path: to.fullPath }
			})));
		});
		nuxtApp.hooks.hookOnce("app:created", async () => {
			try {
				if ("name" in resolvedInitialRoute) resolvedInitialRoute.name = void 0;
				await router.replace({
					...resolvedInitialRoute,
					force: true
				});
				router.options.scrollBehavior = virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior;
			} catch (error) {
				await _showErrorUnlessCrawler(nuxtApp, error);
			}
		});
		return { provide: { router } };
	}
});
//#endregion
//#region node_modules/nuxt/dist/app/plugins/revive-payload.server.js
var reducers = [
	["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
	["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
	["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
	["Ref", (data) => isRef(data) && data.value],
	["Reactive", (data) => isReactive(data) && toRaw(data)]
];
var plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:revive-payload:server",
	setup() {
		for (const [reducer, fn] of reducers) definePayloadReducer(reducer, fn);
	}
});
//#endregion
//#region node_modules/nuxt/dist/app/utils/hash.js
/**
* Hash an arbitrary value into a short, stable string key.
*
* Values are serialized to a canonical, locale-independent representation
* (equal structures hash equally regardless of key order or runtime locale),
* then digested with a fast non-cryptographic hash. This is what `useFetch` and
* `useAsyncData` use internally to derive their cache keys, so it is safe to use
* for the same purpose in your own code.
*
* The digest is non-cryptographic and must not be used for integrity checks.
*
* @since 4.5.0
*/
function hashKey(value) {
	return fnv1a64Base36(identify(value));
}
//#endregion
//#region node_modules/nuxt/dist/app/utils/debounce-tick.js
/**
* Debounce an async function so that repeated calls within the same tick are
* collapsed into a single call (plus a trailing call if arguments arrived
* while the debounced call was still pending).
*
* Adapted from https://github.com/unjs/perfect-debounce with the timeout
* replaced by Vue's post-flush callback queue.
*/
function debounceTick(fn, options = {}) {
	let leadingValue;
	let active = false;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		const promise = _applyPromised(fn, _this, args);
		currentPromise = promise;
		promise.finally(() => {
			currentPromise = void 0;
			if (trailingArgs && !active) {
				const args = trailingArgs;
				trailingArgs = void 0;
				applyFn(_this, args);
			}
		});
		return promise;
	};
	return function(...args) {
		trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = options.leading && !active;
			if (!active) {
				active = true;
				queuePostFlushCb(() => {
					active = false;
					const flushArgs = trailingArgs ?? args;
					trailingArgs = void 0;
					const promise = options.leading ? leadingValue : applyFn(this, flushArgs);
					for (const _resolve of resolveList) _resolve(promise);
					resolveList = [];
				});
			}
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}
defineComponent({
	name: "ServerPlaceholder",
	render() {
		return createElementBlock("div");
	}
});
//#endregion
//#region node_modules/nuxt/dist/app/components/client-only.js
var clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
	name: "ClientOnly",
	inheritAttrs: false,
	props: [
		"fallback",
		"placeholder",
		"placeholderTag",
		"fallbackTag"
	],
	setup(props, { slots, attrs }) {
		const mounted = shallowRef(false);
		const vm = getCurrentInstance();
		if (vm) vm._nuxtClientOnly = true;
		provide(clientOnlySymbol, true);
		return () => {
			if (mounted.value) {
				const vnodes = slots.default?.();
				if (vnodes && vnodes.length === 1) return [cloneVNode(vnodes[0], attrs)];
				return vnodes;
			}
			const slot = slots.fallback || slots.placeholder;
			if (slot) return h(slot);
			const fallbackStr = props.fallback || props.placeholder || "";
			const fallbackTag = sanitizeTag(props.fallbackTag || props.placeholderTag, "span");
			return createElementBlock(fallbackTag, attrs, fallbackStr);
		};
	}
});
//#endregion
//#region node_modules/nuxt/dist/compiler/runtime/index.js
/**
* Define a factory for a function that should be registered for automatic key injection.
* @since 4.2.0
* @param factory
*/
function defineKeyedFunctionFactory(factory) {
	const placeholder = function() {
		throw appDiagnostics.NUXT_E1007({ name: factory.name });
	};
	return Object.defineProperty(placeholder, "__nuxt_factory", {
		enumerable: false,
		get: () => factory.factory
	});
}
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/data.js
/**
* E3xxx
* Data fetching (useFetch / useAsyncData) runtime diagnostics.
*/
var dataDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/nuxt/dist/app/composables/asyncData.js
var createUseAsyncData = defineKeyedFunctionFactory({
	name: "createUseAsyncData",
	factory(options = {}) {
		function useAsyncData(...args) {
			const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
			if (_isAutoKeyNeeded(args[0], args[1])) args.unshift(autoKey);
			let [_key, _handler, opts = {}] = args;
			const key = isRef(_key) || typeof _key === "function" ? computed(() => toValue(_key)) : { value: _key };
			if (!key.value || typeof key.value !== "string") throw dataDiagnostics.NUXT_E3008();
			if (typeof _handler !== "function") throw dataDiagnostics.NUXT_E3009();
			const shouldFactoryOptionsOverride = typeof options === "function";
			const nuxtApp = useNuxtApp();
			const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
			if (!shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				if (opts[key] !== void 0) continue;
				opts[key] = factoryOptions[key];
			}
			opts.server ??= true;
			opts.default ??= getDefault;
			opts.getCachedData ??= getDefaultCachedData;
			opts.lazy ??= false;
			opts.immediate ??= true;
			opts.deep ??= asyncDataDefaults.deep;
			opts.dedupe ??= "cancel";
			opts.enabled ??= true;
			if (shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				opts[key] = factoryOptions[key];
			}
			nuxtApp._asyncData[key.value];
			function createInitialFetch() {
				const initialFetchOptions = {
					cause: "initial",
					dedupe: opts.dedupe
				};
				const existing = nuxtApp._asyncData[key.value];
				if (!existing?._init) {
					initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
					nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
					nuxtApp._asyncData[key.value]._initialCachedData = initialFetchOptions.cachedData;
				} else if (nuxtApp._asyncDataPromises[key.value]) initialFetchOptions.cachedData = existing._initialCachedData;
				return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
			}
			const initialFetch = createInitialFetch();
			const asyncData = nuxtApp._asyncData[key.value];
			asyncData._deps++;
			if (opts.server !== false && nuxtApp.payload.serverRendered && opts.immediate) {
				const promise = initialFetch();
				if (getCurrentInstance()) onServerPrefetch(() => promise);
				else nuxtApp.hook("app:created", async () => {
					await promise;
				});
			}
			const asyncReturn = {
				data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
				pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
				status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
				error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
				refresh: (...args) => {
					if (!nuxtApp._asyncData[key.value]?._init) return createInitialFetch()();
					return nuxtApp._asyncData[key.value].execute(...args);
				},
				execute: (...args) => asyncReturn.refresh(...args),
				clear: () => {
					const entry = nuxtApp._asyncData[key.value];
					if (entry?._abortController) try {
						entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
					} finally {
						entry._abortController = void 0;
					}
					clearNuxtDataByKey(nuxtApp, key.value);
				}
			};
			const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
			Object.assign(asyncDataPromise, asyncReturn);
			Object.defineProperties(asyncDataPromise, {
				then: {
					enumerable: true,
					value: asyncDataPromise.then.bind(asyncDataPromise)
				},
				catch: {
					enumerable: true,
					value: asyncDataPromise.catch.bind(asyncDataPromise)
				},
				finally: {
					enumerable: true,
					value: asyncDataPromise.finally.bind(asyncDataPromise)
				}
			});
			return asyncDataPromise;
		}
		return useAsyncData;
	}
});
var useAsyncData = createUseAsyncData.__nuxt_factory();
createUseAsyncData.__nuxt_factory({
	lazy: true,
	_functionName: "useLazyAsyncData"
});
function writableComputedRef(getter) {
	return computed({
		get() {
			return getter()?.value;
		},
		set(value) {
			const ref = getter();
			if (ref) ref.value = value;
		}
	});
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
	if (typeof keyOrFetcher === "string") return false;
	if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) return false;
	if (typeof keyOrFetcher === "function" && typeof fetcher === "function") return false;
	return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
	delete nuxtApp.payload.data[key];
	delete nuxtApp.payload._errors[key];
	if (nuxtApp._asyncData[key]) {
		nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
		nuxtApp._asyncData[key].error.value = void 0;
		nuxtApp._asyncData[key].status.value = "idle";
		nuxtApp._asyncData[key]._initialCachedData = void 0;
	}
	delete nuxtApp._asyncDataPromises[key];
}
function pick(obj, keys) {
	const newObj = {};
	for (const key of keys) newObj[key] = obj[key];
	return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
	nuxtApp.payload._errors[key] ??= void 0;
	const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
	const handler = _handler ;
	const _ref = options.deep ? ref : shallowRef;
	const hasCachedData = initialCachedData !== void 0;
	const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
		if (!keys || keys.includes(key)) await asyncData.execute({ cause: "refresh:hook" });
	});
	const asyncData = {
		data: _ref(hasCachedData ? initialCachedData : options.default()),
		pending: computed(() => asyncData.status.value === "pending"),
		error: toRef(nuxtApp.payload._errors, key),
		status: shallowRef("idle"),
		execute: (...args) => {
			const [_opts, newValue = void 0] = args;
			const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
			if (nuxtApp._asyncDataPromises[key]) {
				if ((opts.dedupe ?? options.dedupe) === "defer") return nuxtApp._asyncDataPromises[key];
			}
			{
				const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
				if (cachedData !== void 0) {
					nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
					asyncData.error.value = void 0;
					asyncData.status.value = "success";
					return Promise.resolve(cachedData);
				}
			}
			if (toValue(options.enabled) === false) return Promise.resolve(asyncData.data.value);
			if (asyncData._abortController) asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
			asyncData._abortController = new AbortController();
			asyncData.status.value = "pending";
			const cleanupController = new AbortController();
			const promise = new Promise((resolve, reject) => {
				try {
					const timeout = opts.timeout ?? options.timeout;
					const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
					if (mergedSignal.aborted) {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
						return;
					}
					mergedSignal.addEventListener("abort", () => {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
					}, {
						once: true,
						signal: cleanupController.signal
					});
					return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
				} catch (err) {
					reject(err);
				}
			}).then(async (_result) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return;
				let result = _result;
				if (options.transform) result = await options.transform(_result);
				if (options.pick) result = pick(result, options.pick);
				nuxtApp.payload.data[key] = result;
				asyncData.data.value = result;
				asyncData.error.value = void 0;
				asyncData.status.value = "success";
			}).catch((error) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return nuxtApp._asyncDataPromises[key];
				if (asyncData._abortController?.signal.aborted) return nuxtApp._asyncDataPromises[key];
				if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
					asyncData.status.value = "idle";
					return nuxtApp._asyncDataPromises[key];
				}
				asyncData.error.value = createError$1(error);
				asyncData.data.value = unref(options.default());
				asyncData.status.value = "error";
			}).finally(() => {
				cleanupController.abort();
				if (nuxtApp._asyncDataPromises[key] === promise) delete nuxtApp._asyncDataPromises[key];
			});
			nuxtApp._asyncDataPromises[key] = promise;
			return nuxtApp._asyncDataPromises[key];
		},
		_execute: debounceTick((...args) => asyncData.execute(...args)),
		_default: options.default,
		_deps: 0,
		_init: true,
		_hash: void 0,
		_off: () => {
			unsubRefreshAsyncData();
			if (nuxtApp._asyncData[key]?._init) nuxtApp._asyncData[key]._init = false;
			if (nuxtApp._asyncDataPromises[key]) {
				asyncData._abortController?.abort(new DOMException("AsyncData request cancelled by unmount", "AbortError"));
				delete nuxtApp._asyncDataPromises[key];
				if (asyncData.status.value === "pending") asyncData.status.value = "idle";
			}
			if (!hasCustomGetCachedData) nextTick(() => {
				if (!nuxtApp._asyncData[key]?._init) {
					clearNuxtDataByKey(nuxtApp, key);
					asyncData.execute = () => Promise.resolve();
				}
			});
		}
	};
	return asyncData;
}
var getDefault = () => void 0;
var getDefaultCachedData = (key, nuxtApp, ctx) => {
	if (nuxtApp.isHydrating) return nuxtApp.payload.data[key];
	if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") return nuxtApp.static.data[key];
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
	const list = signals.filter((s) => !!s);
	if (typeof timeout === "number" && timeout >= 0) {
		const timeoutSignal = AbortSignal.timeout?.(timeout);
		if (timeoutSignal) list.push(timeoutSignal);
	}
	if (AbortSignal.any) return AbortSignal.any(list);
	const controller = new AbortController();
	for (const sig of list) if (sig.aborted) {
		const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
		return controller.signal;
	}
	const onAbort = () => {
		const reason = list.find((s) => s.aborted)?.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
	};
	for (const sig of list) sig.addEventListener?.("abort", onAbort, {
		once: true,
		signal: cleanupSignal
	});
	return controller.signal;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/state.js
var useStateKeyPrefix = "$s";
function useState(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (typeof args[0] !== "string") args.unshift(autoKey);
	const [_key, init] = args;
	if (!_key || typeof _key !== "string") throw stateDiagnostics.NUXT_E7009({ key: _key });
	if (init !== void 0 && typeof init !== "function") throw stateDiagnostics.NUXT_E7007({ type: typeof init });
	const key = useStateKeyPrefix + _key;
	const nuxtApp = useNuxtApp();
	const state = toRef(nuxtApp.payload.state, key);
	if (init) nuxtApp._state[key] ??= { _default: init };
	if (state.value === void 0 && init) {
		const initialValue = init();
		if (isRef(initialValue)) {
			nuxtApp.payload.state[key] = initialValue;
			return initialValue;
		}
		state.value = initialValue;
	}
	return state;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/ssr.js
var $fetch$1$1 = $fetch$2;
/** @since 3.0.0 */
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
/** @since 3.2.0 */
function useRequestFetch() {
	return useRequestEvent()?.$fetch || $fetch$1$1;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/fetch.js
var $fetch$1 = $fetch$2;
var MAYBE_REF_OR_GETTER_OPTION_KEYS = [
	"method",
	"baseURL",
	"query",
	"params",
	"body",
	"headers"
];
function generateOptionSegments(opts) {
	const segments = [toValue(opts.method)?.toUpperCase() || "GET", toValue(opts.baseURL)];
	for (const _obj of [opts.query || opts.params]) {
		const obj = toValue(_obj);
		if (!obj) continue;
		const unwrapped = {};
		for (const [key, value] of Object.entries(obj)) unwrapped[toValue(key)] = toValue(value);
		segments.push(unwrapped);
	}
	if (opts.body) {
		const value = toValue(opts.body);
		if (!value) segments.push(hashKey(value));
		else if (value instanceof ArrayBuffer) segments.push(hashKey(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
		else if (value instanceof FormData) {
			const entries = [];
			for (const entry of value.entries()) {
				const [key, val] = entry;
				entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
			}
			segments.push(hashKey(entries));
		} else if (isPlainObject(value)) segments.push(hashKey(reactive(value)));
		else try {
			segments.push(hashKey(value));
		} catch {
			dataDiagnostics.NUXT_E3002({ cause: value });
		}
	}
	return segments;
}
/**
* A factory function to create a custom `useFetch` composable with pre-defined default options.
* @since 4.2.0
*/
var createUseFetch = defineKeyedFunctionFactory({
	name: "createUseFetch",
	factory(options = {}) {
		function useFetch(request, arg1, arg2) {
			const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
			const factoryOptions = typeof options === "function" ? options(opts) : options;
			const { server, lazy, default: defaultFn, transform, pick, watch: watchSources, immediate, getCachedData, deep, dedupe, timeout, enabled, ...fetchOptions } = {
				...typeof options === "function" ? {} : factoryOptions,
				...opts,
				...typeof options === "function" ? factoryOptions : {}
			};
			const _request = computed(() => toValue(request));
			const key = computed(() => toValue(fetchOptions.key) || "$f" + hashKey([
				autoKey,
				typeof _request.value === "string" ? _request.value : "",
				...generateOptionSegments(fetchOptions)
			]));
			if (!fetchOptions.baseURL && typeof _request.value === "string" && _request.value[0] === "/" && _request.value[1] === "/") throw dataDiagnostics.NUXT_E3001({ url: _request.value });
			const _fetchOptions = reactive({
				...fetchDefaults,
				...fetchOptions,
				cache: typeof fetchOptions.cache === "boolean" ? void 0 : fetchOptions.cache
			});
			const _asyncDataOptions = {
				server,
				lazy,
				default: defaultFn,
				transform,
				pick,
				immediate,
				getCachedData,
				deep,
				dedupe,
				timeout,
				enabled,
				watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
			};
			if (watchSources === false) _asyncDataOptions._keyTriggersExecute = false;
			return useAsyncData(key, (_, { signal }) => {
				let _$fetch = fetchOptions.$fetch || $fetch$1;
				if (!fetchOptions.$fetch) {
					if (typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(fetchOptions.baseURL) || toValue(fetchOptions.baseURL)[0] === "/")) _$fetch = useRequestFetch();
				}
				const resolvedOptions = {
					signal,
					..._fetchOptions
				};
				for (const key of MAYBE_REF_OR_GETTER_OPTION_KEYS) if (typeof resolvedOptions[key] === "function") resolvedOptions[key] = toValue(resolvedOptions[key]);
				return _$fetch(_request.value, resolvedOptions);
			}, _asyncDataOptions);
		}
		return useFetch;
	}
});
createUseFetch.__nuxt_factory();
createUseFetch.__nuxt_factory({
	lazy: true,
	_functionName: "useLazyFetch"
});
//#endregion
//#region node_modules/nuxt/dist/app/composables/cookie.js
function parseCookieValue(value) {
	if (value === "undefined") return;
	try {
		const parsed = JSON.parse(value);
		if (typeof parsed === "number" && String(parsed) !== value) return value;
		return parsed;
	} catch {
		return value;
	}
}
var CookieDefaults = {
	path: "/",
	watch: true,
	decode: (val) => val ? parseCookieValue(decodeURIComponent(val)) : val,
	encode: (val) => {
		if (typeof val !== "string" || val === "undefined") return encodeURIComponent(JSON.stringify(val));
		try {
			if (typeof JSON.parse(val) !== "string") return encodeURIComponent(JSON.stringify(val));
		} catch {}
		return encodeURIComponent(val);
	},
	refresh: false
};
function useCookie(name, _opts) {
	const opts = {
		...CookieDefaults,
		..._opts
	};
	opts.filter ??= (key) => key === name;
	const cookies = readRawCookies(opts) || {};
	let delay;
	if (opts.maxAge !== void 0) delay = opts.maxAge * 1e3;
	else if (opts.expires) delay = opts.expires.getTime() - Date.now();
	const cookie = cookieServerRef(name, klona(delay !== void 0 && delay <= 0 ? void 0 : cookies[name] ?? opts.default?.()));
	{
		const nuxtApp = useNuxtApp();
		const writeFinalCookieValue = () => {
			const valueIsSame = isEqual(cookie.value, cookies[name]);
			if (opts.readonly || valueIsSame && !opts.refresh) return;
			nuxtApp._cookiesChanged ||= {};
			if (valueIsSame && opts.refresh && !nuxtApp._cookiesChanged[name]) return;
			nuxtApp._cookies ||= {};
			if (name in nuxtApp._cookies) {
				if (isEqual(cookie.value, nuxtApp._cookies[name])) return;
			}
			nuxtApp._cookies[name] = cookie.value;
			const encoded = cookie.value === null || cookie.value === void 0 ? void 0 : opts.encode(cookie.value);
			writeServerCookie(useRequestEvent(nuxtApp), name, encoded, opts);
		};
		const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
		nuxtApp.hooks.hookOnce("app:error", () => {
			unhook();
			return writeFinalCookieValue();
		});
	}
	return cookie;
}
function readRawCookies(opts = {}) {
	return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
}
var identityEncode = (val) => val;
function toSerializeOptions(opts) {
	const { encode: _encode, decode: _decode, ...rest } = opts;
	return {
		...rest,
		encode: identityEncode
	};
}
function writeServerCookie(event, name, value, opts = {}) {
	if (event) {
		const serializeOpts = toSerializeOptions(opts);
		if (value !== void 0) return setCookie(event, name, value, serializeOpts);
		if (getCookie(event, name) !== void 0) return deleteCookie(event, name, serializeOpts);
	}
}
/**
* Custom ref that tracks explicit cookie writes on the server.
*
* This is required for the `refresh` option to ensure the cookie is
* re-written on SSR even when the value remains unchanged.
*/
function cookieServerRef(name, value) {
	const internalRef = ref(value);
	const nuxtApp = useNuxtApp();
	return customRef((track, trigger) => {
		return {
			get() {
				track();
				return internalRef.value;
			},
			set(newValue) {
				nuxtApp._cookiesChanged ||= {};
				nuxtApp._cookiesChanged[name] = true;
				internalRef.value = newValue;
				trigger();
			}
		};
	});
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/layout.js
var routeRulesMatcher = virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Froute_rules_default;
function resolveLayoutName(route, name) {
	return unref(name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path ?? "/").appLayout ?? "default";
}
//#endregion
//#region node_modules/nuxt/dist/app/components/nuxt-link.js
var firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
/**
* Reject URL strings that would resolve to a script-capable protocol when used as the
* `href` of an anchor element. Returns the value unchanged when safe, or `null`.
*
* The denylist is delegated to `ufo`'s `isScriptProtocol` so it stays in sync with the
* check used by `navigateTo` (currently `javascript:`, `data:`, `vbscript:`, `blob:`).
* ASCII whitespace and control characters are stripped first because browser URL
* parsers tolerate them before the scheme, and `view-source:` is peeled recursively
* because Chromium resolves it transparently to the inner URL.
*/
function sanitizeExternalHref(value) {
	let candidate = value.replace(/[\u0000-\u001F\s]+/g, "");
	while (candidate.toLowerCase().startsWith("view-source:")) candidate = candidate.slice(12);
	const colon = candidate.indexOf(":");
	if (colon > 0 && isScriptProtocol(candidate.slice(0, colon + 1))) return null;
	return value;
}
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtLink(options) {
	const componentName = options.componentName || "NuxtLink";
	function isHashLinkWithoutHashMode(link) {
		return typeof link === "string" && link.startsWith("#");
	}
	function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
		const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
		if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") return to;
		if (typeof to === "string") return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
		const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
		return {
			...to,
			name: void 0,
			path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
		};
	}
	function useNuxtLink(props) {
		const router = useRouter();
		const config = /* @__PURE__ */ useRuntimeConfig();
		const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
		const isAbsoluteUrl = computed(() => {
			const path = unref(props.to) || unref(props.href) || "";
			return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
		});
		const builtinRouterLink = resolveComponent("RouterLink");
		const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
		const isExternal = computed(() => {
			if (unref(props.external)) return true;
			const path = unref(props.to) || unref(props.href) || "";
			if (typeof path === "object") return false;
			return path === "" || isAbsoluteUrl.value;
		});
		const to = computed(() => {
			const path = unref(props.to) || unref(props.href) || "";
			if (isExternal.value) return path;
			return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
		});
		const link = isExternal.value ? void 0 : useBuiltinLink?.({
			...props,
			to,
			viewTransition: unref(props.viewTransition)
		});
		const href = computed(() => {
			const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
			if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
				const raw = to.value;
				return typeof raw === "string" ? sanitizeExternalHref(raw) : raw;
			}
			if (isExternal.value) {
				const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
				const href = typeof path === "object" ? router.resolve(path).href : path;
				const safe = typeof href === "string" ? sanitizeExternalHref(href) : href;
				return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
			}
			if (typeof to.value === "object") return router.resolve(to.value)?.href ?? null;
			return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
		});
		return {
			to,
			hasTarget,
			isAbsoluteUrl,
			isExternal,
			href,
			isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
			isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
			route: link?.route ?? computed(() => router.resolve(to.value)),
			async navigate(_e) {
				if (href.value === null) return;
				await navigateTo(href.value, {
					replace: unref(props.replace),
					external: isExternal.value || hasTarget.value
				});
			}
		};
	}
	return defineComponent({
		name: componentName,
		props: {
			to: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			href: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			target: {
				type: String,
				default: void 0,
				required: false
			},
			rel: {
				type: String,
				default: void 0,
				required: false
			},
			noRel: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetchOn: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			noPrefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			activeClass: {
				type: String,
				default: void 0,
				required: false
			},
			exactActiveClass: {
				type: String,
				default: void 0,
				required: false
			},
			prefetchedClass: {
				type: String,
				default: void 0,
				required: false
			},
			replace: {
				type: Boolean,
				default: void 0,
				required: false
			},
			ariaCurrentValue: {
				type: String,
				default: void 0,
				required: false
			},
			external: {
				type: Boolean,
				default: void 0,
				required: false
			},
			custom: {
				type: Boolean,
				default: void 0,
				required: false
			},
			trailingSlash: {
				type: String,
				default: void 0,
				required: false
			}
		},
		useLink: useNuxtLink,
		setup(props, { slots }) {
			const router = useRouter();
			const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
			const prefetched = shallowRef(false);
			const el = void 0;
			const elRef = void 0;
			function shouldPrefetch(mode) {
				return false;
			}
			async function prefetch(nuxtApp = useNuxtApp()) {}
			return () => {
				const target = props.target || null;
				const rel = firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : "") || null;
				const getCustomSlotProps = (routerLinkSlotProps) => ({
					href: href.value,
					navigate,
					get route() {
						if (!href.value) return;
						const url = new URL(href.value, "http://localhost");
						return {
							path: url.pathname,
							fullPath: url.pathname,
							get query() {
								return parseQuery(url.search);
							},
							hash: url.hash,
							params: {},
							name: void 0,
							matched: [],
							redirectedFrom: void 0,
							meta: {},
							href: href.value
						};
					},
					rel,
					target,
					isExternal: isExternal.value || hasTarget.value,
					isActive: false,
					isExactActive: false,
					...routerLinkSlotProps,
					prefetch,
					prefetched: prefetched.value,
					shouldPrefetch
				});
				if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
					const routerLinkProps = {
						ref: elRef,
						to: to.value,
						activeClass: props.activeClass || options.activeClass,
						exactActiveClass: props.exactActiveClass || options.exactActiveClass,
						replace: props.replace,
						ariaCurrentValue: props.ariaCurrentValue,
						custom: props.custom
					};
					if (!props.custom) routerLinkProps.rel = props.rel || void 0;
					return h(resolveComponent("RouterLink"), routerLinkProps, props.custom && slots.default ? { default: (slotProps) => slots.default(getCustomSlotProps(slotProps)) } : slots.default);
				}
				if (props.custom) {
					if (!slots.default) return null;
					return slots.default(getCustomSlotProps());
				}
				return h("a", {
					ref: el,
					href: href.value || null,
					rel,
					target,
					onClick: async (event) => {
						if (isExternal.value || hasTarget.value) return;
						event.preventDefault();
						try {
							const encodedHref = encodeRoutePath(href.value ?? "");
							return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
						} finally {}
					}
				}, slots.default?.());
			};
		}
	});
}
var NuxtLink = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
	if (trailingSlash !== "append" && trailingSlash !== "remove") return to;
	const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
	if (hasProtocol(to) && !to.startsWith("http")) return to;
	return normalizeFn(to, true);
}
//#endregion
//#region node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js
var plugin = defineNuxtPlugin({
	name: "pinia",
	setup(nuxtApp) {
		const pinia = createPinia();
		nuxtApp.vueApp.use(pinia);
		setActivePinia(pinia);
		if (nuxtApp.payload && nuxtApp.payload.pinia) pinia.state.value = nuxtApp.payload.pinia;
		return { provide: { pinia } };
	},
	hooks: { "app:rendered"() {
		const nuxtApp = useNuxtApp();
		nuxtApp.payload.pinia = toRaw(nuxtApp.$pinia).state.value;
		setActivePinia(void 0);
	} }
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fcomponents.plugin.mjs
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcomponents_plugin_default = defineNuxtPlugin({ name: "nuxt:global-components" });
//#endregion
//#region app/composables/useApi.ts
var ApiError = class extends Error {
	code;
	status;
	details;
	requestId;
	constructor(code, message, status, details = [], requestId = null) {
		super(message);
		this.code = code;
		this.status = status;
		this.details = details;
		this.requestId = requestId;
		this.name = "ApiError";
	}
	/** หาข้อความ error ของฟิลด์หนึ่ง — ใช้โชว์ใต้ช่องในฟอร์ม */
	detail(field) {
		return this.details.find((d) => d.field === field)?.message;
	}
	/** แปลง details เป็น map ยัดเข้า state ของฟอร์มได้เลย */
	fieldErrors() {
		const out = {};
		for (const d of this.details) if (!(d.field in out)) out[d.field] = d.message;
		return out;
	}
};
/** ข้อความไทยตาม error.code — `code` คือสัญญา ส่วน message จาก server ไว้ให้ dev อ่าน */
var MESSAGES = {
	INVALID_CREDENTIALS: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
	ACCOUNT_LOCKED: "กรอกรหัสผ่านผิดหลายครั้งเกินไป กรุณารอสักครู่แล้วลองใหม่",
	ACCOUNT_SUSPENDED: "บัญชีนี้ถูกระงับการใช้งาน",
	TOKEN_EXPIRED: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่",
	INVALID_REFRESH_TOKEN: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่",
	PASSWORD_REUSED: "รหัสผ่านใหม่ต้องไม่ซ้ำกับรหัสเดิม",
	FORBIDDEN: "คุณไม่มีสิทธิ์ทำรายการนี้",
	NOT_FOUND: "ไม่พบข้อมูลที่ต้องการ",
	VALIDATION_ERROR: "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง",
	EMAIL_ALREADY_EXISTS: "อีเมลนี้มีผู้ใช้อื่นใช้อยู่แล้ว",
	UNKNOWN_PERMISSION: "พบสิทธิ์ที่ระบบไม่รู้จัก",
	INVALID_FILE_TYPE: "รับเฉพาะไฟล์รูป JPG, PNG หรือ WebP",
	FILE_TOO_LARGE: "ไฟล์ใหญ่เกินไป — ขนาดต้องไม่เกิน 5MB",
	RATE_LIMITED: "ทำรายการถี่เกินไป กรุณารอสักครู่",
	INTERNAL_ERROR: "ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง"
};
var apiErrorMessage = (err) => {
	if (err instanceof ApiError) return MESSAGES[err.code] ?? err.message;
	return MESSAGES.INTERNAL_ERROR;
};
var refreshing = null;
var useApi = () => {
	const config = useRuntimeConfig();
	const auth = useAuthStore();
	const base = () => `${config.public.apiBase}`;
	const newRequestId = () => typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
	const toApiError = (err) => {
		const payload = err?.data;
		const status = err?.status ?? err?.statusCode ?? 0;
		if (payload?.error?.code) return new ApiError(payload.error.code, payload.error.message ?? "Request failed", status, payload.error.details ?? [], payload.meta?.requestId ?? null);
		return new ApiError("INTERNAL_ERROR", err?.message ?? "Network error", status);
	};
	const send = async (method, path, options = {}) => {
		const headers = {
			Accept: "application/json",
			"X-Request-ID": newRequestId()
		};
		if (!(options.body instanceof FormData)) headers["Content-Type"] = "application/json";
		if (options.auth !== false && auth.token) headers.Authorization = `Bearer ${auth.token}`;
		return (await $fetch$2(path, {
			baseURL: base(),
			method,
			headers,
			query: options.query,
			body: options.body
		}))?.data ?? null;
	};
	const request = async (method, path, options = {}) => {
		try {
			return await send(method, path, options);
		} catch (raw) {
			const err = toApiError(raw);
			if (!(err.code === "TOKEN_EXPIRED" && options.auth !== false && !!auth.refreshToken)) throw err;
			refreshing ??= auth.refreshSession().finally(() => {
				refreshing = null;
			});
			if (!await refreshing) {
				await auth.forceLogout();
				throw err;
			}
			try {
				return await send(method, path, options);
			} catch (secondRaw) {
				const secondErr = toApiError(secondRaw);
				if (secondErr.code === "TOKEN_EXPIRED") await auth.forceLogout();
				throw secondErr;
			}
		}
	};
	return {
		get: (path, query, options = {}) => request("GET", path, {
			...options,
			query
		}),
		post: (path, body, options = {}) => request("POST", path, {
			...options,
			body
		}),
		/** อัปโหลดไฟล์ — multipart · ดู design_api_upload.openapi.json */
		upload: (path, form, options = {}) => request("POST", path, {
			...options,
			body: form
		}),
		put: (path, body, options = {}) => request("PUT", path, {
			...options,
			body
		}),
		patch: (path, body, options = {}) => request("PATCH", path, {
			...options,
			body
		}),
		delete: (path, options = {}) => request("DELETE", path, options)
	};
};
//#endregion
//#region app/composables/useToast.ts
var toasts = ref([]);
function push(variant, title, message, duration = 4e3) {
	return -1;
}
var toast = {
	success: (title, message, duration) => push("success", title, message, duration),
	error: (title, message, duration) => push("error", title, message, duration ?? 6e3),
	info: (title, message, duration) => push("info", title, message, duration),
	warning: (title, message, duration) => push("warning", title, message, duration)
};
//#endregion
//#region app/stores/auth.ts
var ACCESS_KEY = "auth_token";
var REFRESH_KEY = "auth_refresh_token";
var useAuthStore = defineStore("auth", {
	state: () => ({
		user: null,
		token: useCookie(ACCESS_KEY).value,
		refreshToken: useCookie(REFRESH_KEY).value,
		isAuthenticated: !!useCookie(ACCESS_KEY).value,
		loading: false,
		error: null,
		/** true เมื่อ bootstrap ตอนเปิดแอปเสร็จแล้ว — กัน middleware เด้งออกก่อนรู้ผล */
		ready: false
	}),
	getters: {
		isLoggedIn: (state) => state.isAuthenticated,
		currentUser: (state) => state.user
	},
	actions: {
		setTokens(accessToken, refreshToken) {
			this.token = accessToken;
			this.refreshToken = refreshToken;
			useCookie(ACCESS_KEY, {
				maxAge: 2592e3,
				path: "/"
			}).value = accessToken;
			useCookie(REFRESH_KEY, {
				maxAge: 2592e3,
				path: "/"
			}).value = refreshToken;
		},
		clearTokens() {
			this.token = null;
			this.refreshToken = null;
			this.user = null;
			this.isAuthenticated = false;
			useCookie(ACCESS_KEY, { path: "/" }).value = null;
			useCookie(REFRESH_KEY, { path: "/" }).value = null;
		},
		/**
		* bootstrap ตอนเปิดแอป — อ่าน token จาก cookie แล้ว **ถาม server ว่าเราเป็นใคร**
		*/
		async restore() {
			const nuxtApp = useNuxtApp();
			const token = useCookie(ACCESS_KEY).value;
			const refresh = useCookie(REFRESH_KEY).value;
			if (!token) {
				this.ready = true;
				return false;
			}
			this.token = token;
			this.refreshToken = refresh;
			try {
				this.user = await useApi().get("/me");
				this.isAuthenticated = true;
				return true;
			} catch {
				nuxtApp.runWithContext(() => this.clearTokens());
				return false;
			} finally {
				this.ready = true;
			}
		},
		/** ต่ออายุ access token — เรียกจาก useApi ตอนเจอ 401 (อย่าเรียกเองจากหน้า) */
		async refreshSession() {
			const nuxtApp = useNuxtApp();
			if (!this.refreshToken) return false;
			try {
				const data = await useApi().post("/auth/refresh", { refreshToken: this.refreshToken }, { auth: false });
				nuxtApp.runWithContext(() => this.setTokens(data.accessToken, data.refreshToken));
				return true;
			} catch {
				return false;
			}
		},
		async login(username, password, rememberMe = false) {
			const nuxtApp = useNuxtApp();
			this.loading = true;
			this.error = null;
			try {
				const data = await useApi().post("/auth/login", {
					username,
					password,
					rememberMe
				}, { auth: false });
				nuxtApp.runWithContext(() => {
					this.setTokens(data.accessToken, data.refreshToken);
				});
				this.user = data.user;
				this.isAuthenticated = true;
				this.ready = true;
				return true;
			} catch (err) {
				this.error = apiErrorMessage(err);
				if (err instanceof ApiError && err.code === "INVALID_CREDENTIALS") {
					const remaining = err.detail("remainingAttempts");
					const max = err.detail("maxAttempts");
					if (remaining && max) this.error += ` (เหลืออีก ${remaining} จาก ${max} ครั้ง)`;
				}
				return false;
			} finally {
				this.loading = false;
			}
		},
		async logout() {
			const nuxtApp = useNuxtApp();
			try {
				await useApi().post("/auth/logout", { refreshToken: this.refreshToken ?? void 0 });
			} catch {} finally {
				nuxtApp.runWithContext(() => this.clearTokens());
			}
		},
		async register(registerData) {
			const nuxtApp = useNuxtApp();
			this.loading = true;
			this.error = null;
			try {
				const data = await useApi().post("/auth/register", registerData, { auth: false });
				nuxtApp.runWithContext(() => {
					this.setTokens(data.accessToken, data.refreshToken);
				});
				this.user = data.user;
				this.isAuthenticated = true;
				this.ready = true;
				return true;
			} catch (err) {
				this.error = apiErrorMessage(err);
				toast.error(this.error);
				return false;
			} finally {
				this.loading = false;
			}
		},
		/** เซสชันกู้ไม่ได้แล้ว — ล้างทิ้งแล้วส่งกลับหน้า login (เรียกจาก useApi) */
		async forceLogout() {
			this.clearTokens();
		},
		async forgotPassword(email) {
			this.loading = true;
			this.error = null;
			try {
				await useApi().post("/auth/forgot-password", { email }, { auth: false });
				return true;
			} catch (err) {
				this.error = apiErrorMessage(err);
				return false;
			} finally {
				this.loading = false;
			}
		},
		async resetPassword(token, newPassword) {
			this.loading = true;
			this.error = null;
			try {
				await useApi().post("/auth/reset-password", {
					token,
					newPassword
				}, { auth: false });
				return true;
			} catch (err) {
				this.error = apiErrorMessage(err);
				return false;
			} finally {
				this.loading = false;
			}
		},
		/** โหลดโปรไฟล์ตัวเองใหม่ — ใช้หลังแก้ชื่อ/รูปในหน้า /account */
		async reloadMe() {
			this.user = await useApi().get("/me");
		}
	}
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fplugins.server.mjs
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fplugins_server_default = [
	payloadPlugin,
	plugin$3,
	plugin$2,
	plugin$1,
	plugin,
	virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcomponents_plugin_default,
	defineNuxtPlugin(async () => {
		let __temp, __restore;
		const authStore = useAuthStore();
		[__temp, __restore] = executeAsync(() => authStore.restore()), await __temp, __restore();
	})
];
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Flayouts.mjs
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Flayouts_default = {
	auth: defineAsyncComponent(() => import('../build/auth-BZK3o8D5.mjs').then((m) => m.default || m)),
	default: defineAsyncComponent(() => import('../build/default-0TgIHv6H.mjs').then((m) => m.default || m)),
	docs: defineAsyncComponent(() => import('../build/docs-BO-36anL.mjs').then((m) => m.default || m)),
	portal: defineAsyncComponent(() => import('../build/portal-BL19jBNZ.mjs').then((m) => m.default || m))
};
//#endregion
//#region node_modules/nuxt/dist/app/components/nuxt-layout.js
var LayoutLoader = defineComponent({
	name: "LayoutLoader",
	inheritAttrs: false,
	props: {
		name: String,
		layoutProps: Object
	},
	setup(props, context) {
		return () => h(virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Flayouts_default[props.name], props.layoutProps, context.slots);
	}
});
var nuxt_layout_default = defineComponent({
	name: "NuxtLayout",
	inheritAttrs: false,
	props: {
		name: {
			type: [
				String,
				Boolean,
				Object
			],
			default: null
		},
		fallback: {
			type: [String, Object],
			default: null
		}
	},
	setup(props, context) {
		const nuxtApp = useNuxtApp();
		const injectedRoute = inject(PageRouteSymbol);
		const route = !injectedRoute || injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
		const layout = computed(() => {
			let layout = resolveLayoutName(route, props.name);
			if (layout && !(layout in virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Flayouts_default)) {
				if (props.fallback) layout = unref(props.fallback);
			}
			return layout;
		});
		provide(LayoutSymbol, layout);
		const layoutRef = shallowRef();
		context.expose({ layoutRef });
		const done = nuxtApp.deferHydration();
		let lastLayout;
		return () => {
			const hasTransition = !!layout.value && layout.value in virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Flayouts_default && !!(route?.meta.layoutTransition ?? false);
			const transitionProps = hasTransition && _mergeTransitionProps([
				route?.meta.layoutTransition,
				false,
				{
					onBeforeLeave() {
						nuxtApp["~transitionPromise"] = new Promise((resolve) => {
							nuxtApp["~transitionFinish"] = resolve;
						});
					},
					onAfterLeave() {
						nuxtApp["~transitionFinish"]?.();
						delete nuxtApp["~transitionFinish"];
						delete nuxtApp["~transitionPromise"];
					}
				}
			]);
			const previouslyRenderedLayout = lastLayout;
			lastLayout = layout.value;
			return _wrapInTransition(transitionProps, { default: () => h(Suspense, {
				suspensible: true,
				onResolve: async () => {
					await nextTick(done);
				}
			}, { default: () => h(LayoutProvider, {
				layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
				key: layout.value || void 0,
				name: layout.value,
				shouldProvide: !props.name,
				isRenderingNewLayout: (name) => {
					return name !== previouslyRenderedLayout && name === layout.value;
				},
				hasTransition
			}, context.slots) }) }).default();
		};
	}
});
var LayoutProvider = defineComponent({
	name: "NuxtLayoutProvider",
	inheritAttrs: false,
	props: {
		name: { type: [String, Boolean] },
		layoutProps: { type: Object },
		hasTransition: { type: Boolean },
		shouldProvide: { type: Boolean },
		isRenderingNewLayout: {
			type: Function,
			required: true
		}
	},
	setup(props, context) {
		const name = props.name;
		if (props.shouldProvide) provide(LayoutMetaSymbol, { isCurrent: (route) => name === false || name === resolveLayoutName(route) });
		const injectedRoute = inject(PageRouteSymbol);
		const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
		const enclosingLayout = inject(LayoutMetaSymbol, null);
		if (isNotWithinNuxtPage) {
			const vueRouterRoute = useRoute$1();
			const reactiveChildRoute = {};
			for (const _key in vueRouterRoute) {
				const key = _key;
				Object.defineProperty(reactiveChildRoute, key, {
					enumerable: true,
					get: () => {
						return props.isRenderingNewLayout(props.name) && (!enclosingLayout || enclosingLayout.isCurrent(vueRouterRoute)) ? vueRouterRoute[key] : injectedRoute[key];
					}
				});
			}
			provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
		}
		return () => {
			if (!name || typeof name === "string" && !(name in virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Flayouts_default)) return context.slots.default?.();
			return h(LayoutLoader, {
				key: name,
				layoutProps: props.layoutProps,
				name
			}, context.slots);
		};
	}
});
//#endregion
//#region node_modules/nuxt/dist/app/components/route-provider.js
var defineRouteProvider = (name = "RouteProvider") => defineComponent({
	name,
	props: {
		route: {
			type: Object,
			required: true
		},
		vnode: Object,
		vnodeRef: Object,
		renderKey: String,
		trackRootNodes: Boolean,
		routeRecord: Object
	},
	setup(props) {
		const previousKey = props.renderKey;
		const previousRoute = props.route;
		const route = {};
		for (const key in props.route) Object.defineProperty(route, key, {
			get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
			enumerable: true
		});
		provide(PageRouteSymbol, shallowReactive(route));
		return () => {
			if (!props.vnode) return props.vnode;
			return h(props.vnode, { ref: props.vnodeRef });
		};
	}
});
var RouteProvider = defineRouteProvider();
//#endregion
//#region node_modules/nuxt/dist/pages/runtime/page.js
var page_default = defineComponent({
	name: "NuxtPage",
	inheritAttrs: false,
	props: {
		name: { type: String },
		transition: {
			type: [Boolean, Object],
			default: void 0
		},
		keepalive: {
			type: [Boolean, Object],
			default: void 0
		},
		route: { type: Object },
		pageKey: {
			type: [Function, String],
			default: null
		}
	},
	setup(props, { attrs, slots, expose }) {
		const nuxtApp = useNuxtApp();
		const pageRef = ref();
		inject(PageRouteSymbol, null);
		expose({ pageRef });
		inject(LayoutMetaSymbol, null);
		nuxtApp.deferHydration();
		return () => {
			return h(RouterView, {
				name: props.name,
				route: props.route,
				...attrs
			}, { default: markStableSlot((routeProps) => {
				return h(Suspense, { suspensible: true }, { default() {
					return h(RouteProvider, {
						vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
						route: routeProps.route,
						vnodeRef: pageRef
					});
				} });
			}) });
		};
	}
});
function markStableSlot(fn) {
	const wrapped = ((routeProps) => {
		const result = fn(routeProps);
		if (Array.isArray(result)) return result;
		if (result == null || !isVNode(result)) return [createCommentVNode()];
		return [result];
	});
	wrapped._n = true;
	return wrapped;
}
function normalizeSlot(slot, data) {
	const slotContent = slot(data);
	return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
//#endregion
//#region app/components/Icon.vue?vue&type=script&setup=true&lang.ts
/** Dynamic Lucide icon. Accepts kebab-case names (e.g. "layout-dashboard")
*  matching the design markup, or PascalCase. Size is set via class (h-5 w-5). */
var Icon_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Icon",
	__ssrInlineRender: true,
	props: { name: {} },
	setup(__props) {
		const props = __props;
		/** Deprecated Lucide names → current names. The old icons were removed in
		*  newer lucide-vue-next, so without these they silently fall back to Circle. */
		const aliases = {
			"check-circle": "CircleCheck",
			"alert-circle": "CircleAlert",
			"alert-triangle": "TriangleAlert",
			"help-circle": "CircleHelp",
			"file-signature": "FilePen",
			"check-square": "SquareCheckBig",
			"x-circle": "CircleX",
			"check": "Check",
			"x-mark": "X",
			"loader-circle": "LoaderCircle"
		};
		function toPascal(n) {
			return n.split(/[-_\s]/).filter(Boolean).map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
		}
		const comp = computed(() => {
			const key = aliases[props.name] ?? toPascal(props.name);
			return icons[key] ?? icons.Circle;
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(comp)), _attrs, null), _parent);
		};
	}
});
//#endregion
//#region app/components/Icon.vue
var _sfc_setup$4 = Icon_vue_vue_type_script_setup_true_lang_default.setup;
Icon_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Icon_default = Object.assign(Icon_vue_vue_type_script_setup_true_lang_default, { __name: "Icon" });
//#endregion
//#region app/components/AppToast.vue?vue&type=script&setup=true&lang.ts
var AppToast_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppToast",
	__ssrInlineRender: true,
	setup(__props) {
		const variantBorder = {
			success: "border-green-500",
			error: "border-red-500",
			info: "border-primary",
			warning: "border-amber-500"
		};
		const variantIconBg = {
			success: "bg-green-500",
			error: "bg-red-500",
			info: "bg-primary",
			warning: "bg-amber-500"
		};
		const variantIcon = {
			success: "check",
			error: "x",
			info: "info",
			warning: "alert-triangle"
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = Icon_default;
			ssrRenderTeleport(_push, (_push) => {
				_push(`<div class="fixed top-4 right-4 z-[9999] flex flex-col gap-3 w-full max-w-sm pointer-events-none" data-v-30c5d193><!--[-->`);
				ssrRenderList(unref(toasts), (t) => {
					_push(`<div class="${ssrRenderClass(["pointer-events-auto bg-white rounded-xl shadow-lg border-l-4 overflow-hidden ring-1 ring-black/5", variantBorder[t.variant]])}" data-v-30c5d193><div class="flex items-start gap-3 p-4" data-v-30c5d193><div class="${ssrRenderClass(["flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center", variantIconBg[t.variant]])}" data-v-30c5d193>`);
					_push(ssrRenderComponent(_component_Icon, {
						name: variantIcon[t.variant],
						class: "text-white h-4 w-4"
					}, null, _parent));
					_push(`</div><div class="flex-1 min-w-0 pt-0.5" data-v-30c5d193><p class="text-sm font-semibold text-ink leading-snug" data-v-30c5d193>${ssrInterpolate(t.title)}</p>`);
					if (t.message) _push(`<p class="mt-1 text-xs text-muted leading-relaxed" data-v-30c5d193>${ssrInterpolate(t.message)}</p>`);
					else _push(`<!---->`);
					_push(`</div><button type="button" class="flex-shrink-0 text-[#5B6B82]/60 hover:text-ink transition-colors p-1 -m-1" aria-label="Close" data-v-30c5d193>`);
					_push(ssrRenderComponent(_component_Icon, {
						name: "x",
						class: "h-4 w-4"
					}, null, _parent));
					_push(`</button></div></div>`);
				});
				_push(`<!--]--></div>`);
			}, "body", false, _parent);
		};
	}
});
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region app/components/AppToast.vue
var _sfc_setup$3 = AppToast_vue_vue_type_script_setup_true_lang_default.setup;
AppToast_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppToast.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var AppToast_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(AppToast_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-30c5d193"]]), { __name: "AppToast" });
//#endregion
//#region app/stores/language.ts
var thTranslations = {
	nav: {
		home: "หน้าหลัก",
		about: "เกี่ยวกับเรา",
		services: "บริการ",
		campaigns: "แคมเปญ",
		blog: "บล็อก",
		contact: "ติดต่อเรา",
		joinInfluencer: "ร่วมงานกับเรา",
		login: "เข้าสู่ระบบ",
		register: "สมัครสมาชิก",
		logout: "ออกจากระบบ",
		dashboard: "แดชบอร์ด",
		profile: "โปรไฟล์",
		wallet: "กระเป๋าเงิน",
		myCampaigns: "แคมเปญของฉัน",
		tasks: "งาน",
		notifications: "การแจ้งเตือน"
	},
	hero: {
		subtitle: "KOL Marketplace อันดับ 1 ของไทย",
		title: "จับคู่แบรนด์กับ Creator ตัวจริง",
		titleBefore: "จับคู่แบรนด์กับ",
		titleHighlight: "Creator ตัวจริง",
		description: "หา Creator ที่ใช่ใน 48 ชั่วโมง • วัดผลเรียลไทม์",
		getStarted: "เริ่มต้นฟรี",
		exploreCampaigns: "ดูวิธีการทำงาน",
		stats: {
			influencers: "Verified Creators",
			brands: "Trusted Brands",
			paidOut: "Success Rate"
		},
		trustBadge: "ได้รับความไว้วางใจจากแบรนด์ชั้นนำ"
	},
	about: {
		badge: "เกี่ยวกับเรา",
		title: "พื้นที่ที่แบรนด์เจอ Creator ตัวจริง",
		description: "Marketplace ยุคใหม่ — KOL ผ่านการตรวจสอบ engagement จริง วัดผลได้ทุกแคมเปญ",
		heroDescription: "Ripples คือแพลตฟอร์มจับคู่แบรนด์กับ creator/KOL ตัวจริง ทุกคนผ่านการตรวจสอบตัวตนและ engagement แพลตฟอร์มดูแลตั้งแต่เลือก creator บรีฟงาน ตรวจเนื้อหา จนถึงออกเอกสารครบถ้วน",
		points: {
			point1: "Creator ทุกคนผ่าน KYC และตรวจ engagement จริง ไม่มี bot",
			point2: "ราคาโปร่งใส เอกสารครบ หัก ณ ที่จ่ายถูกต้อง ไม่มีค่าซ่อน",
			point3: "Dashboard วัดผลเรียลไทม์ ทุกแคมเปญทุก creator"
		},
		learnMore: "เรียนรู้เพิ่มเติม",
		stats: {
			stat1Value: "10,000+",
			stat1Label: "Verified Creators",
			stat2Value: "500+",
			stat2Label: "Trusted Brands",
			stat3Value: "98%",
			stat3Label: "Success Rate",
			stat4Value: "24/7",
			stat4Label: "Support"
		},
		story: {
			title: "ทำไมเราสร้าง Ripples",
			paragraph1: "วงการ KOL ในไทยโตเร็วมาก แต่แบรนด์ยังหา creator ที่ใช่ยาก ปัญหา fake followers, engagement ปลอม, สื่อสารกันวุ่นวาย — Ripples เกิดขึ้นเพื่อแก้โจทย์เหล่านี้ในที่เดียว",
			paragraph2: "เราคัดกรอง creator ทุกคนผ่าน KYC และวิเคราะห์ engagement จริง ตัวเลขในโปรไฟล์โปร่งใส ตรวจสอบได้ ไม่มี bot ไม่มี fake",
			paragraph3: "ตั้งแต่เลือก creator, บรีฟงาน, ตรวจเนื้อหา, go live, วัดผล จนจ่ายเงิน — จบในที่เดียว เรียลไทม์ ปลอดภัยทั้งสองฝ่าย"
		},
		values: {
			value1Title: "ความโปร่งใส",
			value1Description: "ทุกตัวเลขบน Ripples ตรวจสอบได้ ทั้งราคา engagement และผลงาน",
			value2Title: "ความเชื่อถือได้",
			value2Description: "สัญญาดิจิทัล เอกสารภาษีครบ ติดตามสถานะทุก milestone — แบรนด์และ creator ไว้ใจกันได้",
			value3Title: "นวัตกรรม",
			value3Description: "เครื่องมือวัดผลและ dashboard ที่ทันสมัย ช่วยคุณตัดสินใจบน data จริง",
			value4Title: "ชุมชน",
			value4Description: "เราเชื่อว่า creator กับแบรนด์โตไปด้วยกันได้ Ripples คือสะพานเชื่อม"
		},
		team: {
			badge: "ทีมของเรา",
			title: "ทีมเบื้องหลัง Ripples",
			member1Name: "Alex K.",
			member1Role: "Founder & CEO",
			member2Name: "Sara T.",
			member2Role: "Head of Product",
			member3Name: "Chris L.",
			member3Role: "Head of Creator Relations",
			member4Name: "Emma P.",
			member4Role: "Head of Brand Success"
		},
		whyUs: {
			badge: "ทำไมต้องเลือกเรา",
			title: "ทำไมแบรนด์เลือก Ripples",
			feature1: "Creator ทุกคนผ่านการตรวจสอบตัวตน (KYC) และ engagement จริง",
			feature2: "สัญญาดิจิทัล + เอกสารภาษีครบถ้วน โปร่งใสทั้งสองฝ่าย",
			feature3: "Dashboard วัดผลเรียลไทม์ทุกแคมเปญ",
			feature4: "Account manager ดูแลทุก campaign ตั้งแต่ต้นจนจบ",
			feature5: "ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อน",
			feature6: "Support 24/7 ตอบเร็วทั้งไทยและอังกฤษ"
		}
	},
	services: {
		badge: "บริการของเรา",
		title: "ทุกอย่างที่คุณต้องการ จบในที่เดียว",
		description: "ตั้งแต่หา creator ที่ใช่ ไปจนจ่ายเงินให้เสร็จ Ripples มีเครื่องมือครบพร้อมดูแลทุกขั้นตอน",
		service1: "Creator Discovery",
		service1Desc: "ค้นหา creator ที่ใช่ตามหมวดหมู่ งบประมาณ และกลุ่มเป้าหมาย",
		service1Feature1: "ค้นหาด้วย filter หลายชั้น",
		service1Feature2: "Match ตามกลุ่มเป้าหมาย",
		service1Feature3: "แนะนำ creator อัตโนมัติ",
		service1Feature4: "ดูผลงานย้อนหลัง",
		service2: "Campaign Management",
		service2Desc: "บรีฟงาน สัญญา timeline ครบจบในระบบเดียว",
		service2Feature1: "Template บรีฟสำเร็จรูป",
		service2Feature2: "สัญญาดิจิทัล",
		service2Feature3: "Timeline อัตโนมัติ",
		service2Feature4: "แจ้งเตือนทุก milestone",
		service3: "Content Approval",
		service3Desc: "ตรวจ draft และ approve content ก่อน go live",
		service3Feature1: "Review draft ออนไลน์",
		service3Feature2: "Comment/Revision flow",
		service3Feature3: "Version tracking",
		service3Feature4: "Approval workflow",
		service4: "Real-time Analytics",
		service4Desc: "วัดผล engagement reach conversion แบบเรียลไทม์",
		service4Feature1: "Dashboard เรียลไทม์",
		service4Feature2: "Engagement metrics",
		service4Feature3: "ROI tracking",
		service4Feature4: "Export รายงาน PDF",
		service5: "Account Management",
		service5Desc: "ทีม account manager + support 24/7 ดูแลทุก campaign",
		service5Feature1: "Dedicated account manager",
		service5Feature2: "Support 24/7",
		service5Feature3: "ไทย/อังกฤษ",
		service5Feature4: "คำปรึกษากลยุทธ์",
		service6: "Invoice & Tax Docs",
		service6Desc: "ใบแจ้งหนี้ดิจิทัล เอกสารภาษีครบ หัก ณ ที่จ่ายถูกต้อง",
		service6Feature1: "ใบแจ้งหนี้ดิจิทัล",
		service6Feature2: "เอกสารหัก ณ ที่จ่าย",
		service6Feature3: "ติดตามสถานะจ่าย",
		service6Feature4: "แจ้งเตือนครบกำหนด",
		howItWorks: {
			badge: "วิธีการทำงาน",
			title: "ง่าย โปร่งใส 4 ขั้นตอน",
			step1Title: "เลือก Creator",
			step1Description: "ค้นหาและเลือก creator ที่ใช่ตามกลุ่มเป้าหมาย งบประมาณ และหมวดหมู่ของแบรนด์",
			step2Title: "บรีฟงาน",
			step2Description: "สร้างบรีฟผ่าน template ออกสัญญาดิจิทัล วาง timeline ของแคมเปญ",
			step3Title: "Approve & Go Live",
			step3Description: "ตรวจ draft approve content creator โพสต์จริง ติดตามผลในทันที",
			step4Title: "วัดผล & รับเอกสาร",
			step4Description: "ดูผล engagement เรียลไทม์ เมื่อครบเงื่อนไข Ripples ออกใบแจ้งหนี้ + เอกสารภาษีให้อัตโนมัติ"
		},
		ctaSection: {
			title: "พร้อมเริ่ม campaign แรกของคุณหรือยัง?",
			description: "เริ่มทำ campaign แรกวันนี้ — หา creator ตัวจริงในไม่กี่คลิก",
			button1: "เริ่มต้นใช้งาน",
			button2: "ติดต่อเรา"
		}
	},
	expertise: {
		badge: "Case Studies",
		title: "แคมเปญที่น่าสนใจ",
		viewAll: "ดูทั้งหมด"
	},
	testimonials: {
		badge: "เสียงจากแบรนด์",
		title: "แบรนด์ที่ไว้วางใจเรา",
		testimonial1: "Ripples ทำให้เราหา creator ที่ตรงกับแบรนด์ได้ง่ายขึ้นมาก ระบบคัดกรองดี ผลงานออกมาตรงตามคาด",
		testimonial1Name: "สมชาย ท.",
		testimonial1Role: "Brand Director",
		testimonial2: "ชอบที่ทุกอย่างจบในที่เดียว — บรีฟ สัญญา วัดผล จ่ายเงิน ประหยัดเวลาทีมเราไปเยอะมาก",
		testimonial2Name: "สิริพร ป.",
		testimonial2Role: "Marketing Manager",
		testimonial3: "Ripples ช่วยให้เราหา creator ที่ใช่ได้ใน 48 ชั่วโมง วัดผลได้ชัดทุก campaign",
		testimonial3Name: "อานนท์ ล.",
		testimonial3Role: "CEO, Leading Brand"
	},
	cta: {
		title: "พร้อมให้แบรนด์ของคุณปัง?",
		description: "เริ่ม campaign แรกวันนี้ — หา Creator ที่ใช่ในไม่กี่คลิก ไม่มีค่าสมัคร",
		button1: "เริ่มต้นฟรี",
		button2: "ดูตัวอย่าง Campaign"
	},
	mediaInsights: {
		badge: "Insights",
		title: "เทรนด์และเคล็ดลับ KOL ล่าสุด",
		viewMore: "อ่านเพิ่มเติม"
	},
	auth: {
		loginTitle: "เข้าสู่ระบบ",
		loginSubtitle: "ยินดีต้อนรับกลับมา! กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ",
		registerTitle: "สมัครสมาชิก",
		registerSubtitle: "สร้างบัญชีใหม่เพื่อเริ่มต้นเป็น Influencer",
		forgotPasswordTitle: "ลืมรหัสผ่าน",
		forgotPasswordSubtitle: "กรอกอีเมลของคุณเพื่อรับลิงก์รีเซ็ตรหัสผ่าน",
		resetPasswordTitle: "รีเซ็ตรหัสผ่าน",
		resetPasswordSubtitle: "กรอกรหัสผ่านใหม่ของคุณ",
		changePasswordTitle: "เปลี่ยนรหัสผ่าน",
		changePasswordSubtitle: "อัปเดตรหัสผ่านของคุณ",
		username: "ชื่อผู้ใช้",
		password: "รหัสผ่าน",
		email: "อีเมล",
		confirmPassword: "ยืนยันรหัสผ่าน",
		firstName: "ชื่อ",
		lastName: "นามสกุล",
		rememberMe: "จดจำฉัน",
		forgotPassword: "ลืมรหัสผ่าน?",
		noAccount: "ยังไม่มีบัญชี?",
		haveAccount: "มีบัญชีแล้ว?",
		registerNow: "สมัครสมาชิก",
		loginNow: "เข้าสู่ระบบ",
		sendResetLink: "ส่งลิงก์รีเซ็ต",
		resetPassword: "รีเซ็ตรหัสผ่าน",
		changePassword: "เปลี่ยนรหัสผ่าน",
		oldPassword: "รหัสผ่านเดิม",
		newPassword: "รหัสผ่านใหม่",
		orContinueWith: "หรือดำเนินการต่อด้วย",
		loginSuccess: "เข้าสู่ระบบสำเร็จ",
		registerSuccess: "สมัครสมาชิกสำเร็จ",
		passwordResetSent: "ส่งลิงก์รีเซ็ตรหัสผ่านแล้ว",
		passwordChanged: "เปลี่ยนรหัสผ่านสำเร็จ"
	},
	dashboard: {
		title: "แดชบอร์ด",
		welcome: "ยินดีต้อนรับกลับ",
		summary: "สรุป",
		walletBalance: "ยอดเงินในกระเป๋า",
		activeCampaigns: "แคมเปญที่กำลังทำ",
		pendingTasks: "งานที่ต้องส่ง",
		revisionTasks: "งานที่ต้องแก้ไข",
		recentTransactions: "ประวัติการรับเงินล่าสุด",
		notifications: "การแจ้งเตือน",
		viewAll: "ดูทั้งหมด",
		noNotifications: "ไม่มีการแจ้งเตือน",
		markAsRead: "อ่านแล้ว",
		newCampaign: "แคมเปญใหม่",
		taskApproved: "งานได้รับการอนุมัติ",
		paymentReceived: "ได้รับการโอนเงิน"
	},
	profile: {
		title: "โปรไฟล์",
		personalInfo: "ข้อมูลส่วนตัว",
		socialAccounts: "บัญชีโซเชียล",
		categories: "หมวดหมู่ / Niche",
		rateCard: "Rate Card",
		verification: "ยืนยันตัวตน / KYC",
		verificationStatus: "สถานะการยืนยัน",
		pending: "รอตรวจสอบ",
		approved: "อนุมัติแล้ว",
		rejected: "ถูกปฏิเสธ",
		uploadDocument: "อัปโหลดเอกสาร",
		idCard: "บัตรประชาชน",
		selfie: "เซลฟี่คู่บัตรประชาชน",
		bankBook: "หน้าสมุดบัญชีธนาคาร",
		saveChanges: "บันทึกการเปลี่ยนแปลง",
		editProfile: "แก้ไขโปรไฟล์",
		bio: "เกี่ยวกับฉัน",
		phone: "เบอร์โทรศัพท์",
		location: "ที่อยู่"
	},
	campaigns: {
		title: "แคมเปญ",
		marketplace: "ตลาดแคมเปญ",
		featured: "แคมเปญแนะนำ",
		allCampaigns: "แคมเปญทั้งหมด",
		filter: "กรอง",
		category: "หมวดหมู่",
		budget: "งบประมาณ",
		followers: "ผู้ติดตาม",
		platform: "แพลตฟอร์ม",
		apply: "สมัคร",
		applied: "สมัครแล้ว",
		details: "รายละเอียด",
		requirements: "ข้อกำหนด",
		deadline: "วันสิ้นสุด",
		influencersNeeded: "ต้องการ Influencer",
		joined: "เข้าร่วมแล้ว",
		budgetRange: "ช่วงราคา"
	},
	tasks: {
		title: "งาน",
		subtitle: "จัดการงานแคมเปญของคุณ",
		myTasks: "งานของฉัน",
		pending: "รอดำเนินการ",
		inProgress: "กำลังทำ",
		submitted: "ส่งแล้ว",
		revision: "ต้องแก้ไข",
		approved: "อนุมัติแล้ว",
		waitingGoLive: "รอ Go Live",
		done: "Go Live ✓",
		noTasks: "ไม่มีงานในหมวดหมู่นี้",
		campaign: "แคมเปญ",
		dueDate: "กำหนดส่ง",
		payment: "ค่าตอบแทน",
		description: "รายละเอียด",
		comments: "ความคิดเห็น",
		noComments: "ยังไม่มีความคิดเห็น",
		addComment: "เพิ่มความคิดเห็น",
		commentPlaceholder: "พิมพ์ความคิดเห็น...",
		postComment: "โพสต์ความคิดเห็น",
		submitWork: "ส่งงาน",
		resubmitWork: "ส่งงานใหม่",
		draftContent: "Draft Content / Caption",
		draftContentPlaceholder: "เขียน caption หรือรายละเอียด content ที่จะโพสต์...",
		attachFile: "แนบไฟล์ (รูป / วิดีโอ)",
		chooseFile: "คลิกเพื่อเลือกไฟล์",
		revisionNote: "ต้องแก้ไข",
		revisionDesc: "กรุณาตรวจสอบ comment และ resubmit งาน",
		draftContentRevised: "Draft Content / Caption (แก้ไขแล้ว)",
		draftContentRevisedPlaceholder: "เขียน caption หรือรายละเอียด content ที่แก้ไขแล้ว...",
		attachFileRevised: "แนบไฟล์ที่แก้ไขแล้ว (รูป / วิดีโอ)",
		readyGoLive: "พร้อม Go Live แล้ว!",
		goLiveDesc: "Draft ได้รับการอนุมัติ กรุณาโพสต์งานจริงและแนบลิ้งด้านล่าง",
		postUrl: "ลิ้งโพสต์จริง (Post URL)",
		confirmGoLive: "ยืนยัน Go Live",
		goneLive: "Go Live เรียบร้อยแล้ว",
		postLink: "ลิ้งโพสต์:",
		viewDetails: "ดูรายละเอียด",
		attachments: "ไฟล์แนบ",
		uploadFile: "อัปโหลดไฟล์",
		due: "กำหนดส่ง"
	},
	wallet: {
		title: "กระเป๋าเงิน",
		balance: "ยอดเงิน",
		transactionHistory: "ประวัติธุรกรรม",
		income: "รายรับ",
		withdrawal: "ถอนเงิน",
		pending: "รอดำเนินการ",
		completed: "สำเร็จ",
		failed: "ล้มเหลว",
		withdraw: "ถอนเงิน",
		bankAccount: "บัญชีธนาคาร",
		amount: "จำนวนเงิน",
		requestWithdrawal: "ขอถอนเงิน",
		noTransactions: "ไม่มีธุรกรรม"
	},
	common: {
		loading: "กำลังโหลด...",
		save: "บันทึก",
		cancel: "ยกเลิก",
		edit: "แก้ไข",
		delete: "ลบ",
		confirm: "ยืนยัน",
		close: "ปิด",
		search: "ค้นหา",
		filter: "กรอง",
		sort: "เรียงลำดับ",
		next: "ถัดไป",
		previous: "ก่อนหน้า",
		submit: "ส่ง",
		back: "กลับ",
		more: "เพิ่มเติม",
		readMore: "อ่านเพิ่มเติม",
		viewAll: "ดูทั้งหมด",
		seeDetails: "ดูรายละเอียด",
		learnMore: "เรียนรู้เพิ่มเติม",
		getStarted: "เริ่มต้นใช้งาน",
		contactUs: "ติดต่อเรา",
		followUs: "ติดตามเรา",
		subscribe: "สมัครรับข่าวสาร",
		emailPlaceholder: "กรอกอีเมลของคุณ",
		allRightsReserved: "สงวนลิขสิทธิ์",
		privacyPolicy: "นโยบายความเป็นส่วนตัว",
		termsOfService: "เงื่อนไขการใช้บริการ",
		cookiePolicy: "นโยบายคุกกี้",
		companyName: "Ripples",
		subject: "หัวข้อ",
		message: "ข้อความ"
	},
	footer: {
		description: "Marketplace KOL & Influencer ยุคใหม่ — สำหรับแบรนด์และ creator ในประเทศไทย",
		quickLinks: "ลิงก์ด่วน",
		services: "บริการ",
		newsletter: "รับข่าวสาร",
		newsletterDesc: "รับเทรนด์และเคล็ดลับ KOL ล่าสุด",
		forInfluencers: "สำหรับ Creator",
		forBrands: "สำหรับแบรนด์",
		pricing: "ราคา",
		support: "ช่วยเหลือ"
	},
	contact: {
		badge: "ติดต่อเรา",
		title: "ติดต่อเรา",
		subtitle: "มีคำถาม? เรายินดีรับฟัง ส่งข้อความหาเราและเราจะตอบกลับโดยเร็วที่สุด",
		info: {
			emailTitle: "อีเมล",
			emailDesc: "สำหรับข้อสงสัยทั่วไป",
			phoneTitle: "โทรศัพท์",
			phoneDesc: "จันทร์–ศุกร์ 9.00–18.00 น.",
			officeTitle: "สำนักงาน",
			officeContent: "กรุงเทพฯ, ประเทศไทย",
			officeDesc: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง 10260",
			hoursTitle: "เวลาทำการ",
			hoursContent: "จันทร์ – ศุกร์: 9.00 – 18.00 น.",
			hoursDesc: "เสาร์–อาทิตย์: ปิดทำการ"
		},
		form: {
			title: "ส่งข้อความถึงเรา",
			namePlaceholder: "ชื่อของคุณ",
			emailPlaceholder: "your@email.com",
			subjectPlaceholder: "เราจะช่วยคุณได้อย่างไร?",
			messagePlaceholder: "บอกรายละเอียดเพิ่มเติมเกี่ยวกับสิ่งที่ต้องการ...",
			sending: "กำลังส่ง...",
			send: "ส่งข้อความ",
			successTitle: "ส่งข้อความแล้ว!",
			successDesc: "เราจะติดต่อกลับหาคุณโดยเร็วที่สุด"
		},
		office: {
			title: "เยี่ยมชมสำนักงานเรา",
			address: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพฯ 10260"
		},
		faq: {
			title: "คำถามที่พบบ่อย",
			description: "ค้นหาคำตอบสำหรับคำถามทั่วไปได้ในส่วน FAQ ของเรา",
			button: "ดู FAQ"
		}
	},
	blog: {
		badge: "บล็อกของเรา",
		title: "เทรนด์และเคล็ดลับล่าสุด",
		subtitle: "ค้นพบกลยุทธ์ เคล็ดลับ และข้อมูลเชิงลึกเพื่อเติบโตในโลกดิจิทัล",
		searchPlaceholder: "ค้นหาบทความ...",
		readMore: "อ่านต่อ",
		minRead: "นาที",
		noResults: "ไม่พบบทความตามที่ค้นหา",
		categories: {
			all: "ทั้งหมด",
			tips: "เคล็ดลับ",
			guide: "คู่มือ",
			analytics: "วิเคราะห์",
			business: "ธุรกิจ"
		}
	},
	faq: {
		badge: "FAQ",
		title: "คำถามที่พบบ่อย",
		subtitle: "ทุกสิ่งที่คุณต้องรู้เกี่ยวกับแพลตฟอร์มของเรา",
		searchPlaceholder: "ค้นหาคำตอบ...",
		categoriesTitle: "หมวดหมู่",
		noResults: "ไม่พบคำถามตามที่ค้นหา",
		categories: {
			all: "ทั้งหมด",
			general: "ทั่วไป",
			payment: "การชำระเงิน",
			campaigns: "แคมเปญ",
			requirements: "ข้อกำหนด"
		},
		cta: {
			title: "ยังมีคำถามอยู่ใช่ไหม?",
			description: "ไม่เจอคำตอบที่ต้องการ? ทักทีมงานของเราได้เลย",
			button: "ติดต่อเรา"
		}
	},
	campaignsPage: {
		badge: "แคมเปญ",
		title: "สำรวจแคมเปญ",
		subtitle: "ค้นพบแคมเปญจากแบรนด์ชั้นนำและเริ่มสร้างรายได้วันนี้",
		searchPlaceholder: "ค้นหาแคมเปญ...",
		statusOpen: "เปิดรับ",
		applyNow: "สมัครเลย",
		pendingReview: "รออนุมัติ",
		goToTask: "ไปที่งาน",
		close: "ปิด",
		noResults: "ไม่พบแคมเปญตามที่ค้นหา",
		description: "รายละเอียด",
		reqTitle: "ข้อกำหนด",
		reqMinFollowers: "ผู้ติดตามขั้นต่ำ {count} คน",
		reqPlatforms: "แพลตฟอร์ม: {list}",
		reqContentType: "ประเภทคอนเทนต์: {list}",
		deadline: "กำหนดส่ง",
		budgetRange: "ช่วงราคา",
		categories: {
			all: "ทั้งหมด",
			fashion: "แฟชั่น",
			beauty: "ความงาม",
			food: "อาหาร",
			tech: "เทคโนโลยี",
			lifestyle: "ไลฟ์สไตล์",
			travel: "ท่องเที่ยว",
			fitness: "ฟิตเนส"
		},
		toast: {
			loginRequired: "กรุณาเข้าสู่ระบบก่อน",
			loginRequiredDesc: "สมัครสมาชิกหรือ login เพื่อสมัครแคมเปญ",
			applySuccess: "สมัครสำเร็จ!",
			applySuccessDesc: "ระบบจะแจ้งผลภายใน 1-3 วันทำการ"
		},
		statusFilter: {
			label: "สถานะงาน",
			all: "ทั้งหมด",
			applied: "สมัครแล้ว",
			inProgress: "กำลังทำ"
		}
	},
	terms: {
		hero: {
			backLink: "กลับไปสมัครสมาชิก",
			title: "ข้อกำหนดและเงื่อนไข",
			updated: "อัปเดตล่าสุด: 1 มกราคม 2026 · อ่านประมาณ 8 นาที"
		},
		contact: {
			question: "มีคำถามเกี่ยวกับข้อกำหนดเหล่านี้? ติดต่อเราได้ที่",
			entityLabel: "ผู้ให้บริการ",
			entityNameTh: "บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)",
			entityNameEn: "PRAKIT HOLDINGS PUBLIC COMPANY LIMITED",
			entityAddressTh: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260",
			entityAddressEn: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"
		},
		sections: {
			s1Title: "คำนิยาม",
			s1Content: "สำหรับข้อกำหนดฉบับนี้และนโยบายที่เกี่ยวข้อง คำนิยามต่อไปนี้ให้มีความหมายตามที่กำหนด: \"บริษัท\" หมายถึง บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน) (PRAKIT HOLDINGS PUBLIC COMPANY LIMITED) ที่ตั้งเลขที่ 88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260; \"แพลตฟอร์ม\" หมายถึง Ripples ระบบและช่องทางออนไลน์ที่บริษัทจัดให้บริการ; \"แบรนด์\" หมายถึง บุคคลหรือนิติบุคคลที่ใช้แพลตฟอร์มเพื่อว่าจ้าง Creator ในการโปรโมทสินค้าหรือบริการ; \"Creator\" หมายถึง ผู้สร้างเนื้อหา (Influencer/KOL) ที่ลงทะเบียนเพื่อรับงานแคมเปญผ่านแพลตฟอร์ม; \"ผู้ใช้บริการ\" หมายถึง ทั้งแบรนด์และ Creator; \"บัญชี\" \"ชื่อผู้ใช้\" และ \"รหัสผ่าน\" หมายถึง ข้อมูลยืนยันตัวตนสำหรับเข้าใช้งานแพลตฟอร์ม; \"นโยบายความเป็นส่วนตัว\" หมายถึง เอกสารที่บริษัทจัดทำเพื่อคุ้มครองข้อมูลของผู้ใช้บริการ",
			s2Title: "การยอมรับข้อตกลงการเข้าใช้งาน",
			s2Content: "ก่อนการลงทะเบียน ผู้ใช้บริการต้องอ่านและทำความเข้าใจข้อกำหนดฉบับนี้โดยละเอียด เมื่อผู้ใช้บริการกด \"ยอมรับ\" ถือว่าได้ยินยอมให้ข้อกำหนดฉบับนี้มีผลผูกพันทางกฎหมาย และอนุญาตให้บริษัทเข้าถึงและใช้ข้อมูลส่วนบุคคลภายใต้นโยบายความเป็นส่วนตัว หากผู้ใช้บริการไม่ยอมรับข้อกำหนดใดข้อหนึ่ง กรุณายุติการใช้งานทันที",
			s3Title: "การลงทะเบียน",
			s3Content: "3.1 Creator ต้องให้ข้อมูลส่วนบุคคลและข้อมูลบัญชีโซเชียลมีเดียที่ถูกต้องและเป็นปัจจุบัน บริษัทสงวนสิทธิ์ระงับการให้บริการหากข้อมูลไม่ถูกต้อง  3.2 แบรนด์ต้องสร้างบัญชีผู้ใช้ พร้อมชื่อผู้ใช้และรหัสผ่าน ระบุที่อยู่ของกิจการและรายละเอียดสินค้า/บริการ โดยแบรนด์เป็นผู้รับผิดชอบความถูกต้องของข้อมูลทั้งหมด  3.3 บริษัทจะไม่เปิดเผยข้อมูลส่วนบุคคลของผู้ใช้บริการแก่บุคคลภายนอก ยกเว้นเพื่อวัตถุประสงค์การตลาดภายในแพลตฟอร์ม การดำเนินงานร่วมกับพันธมิตร การปฏิบัติตามกฎหมาย หรือเพื่อคุ้มครองสิทธิและความปลอดภัย",
			s4Title: "การจัดการเนื้อหาของผู้ใช้บริการ",
			s4Content: "ผู้ใช้บริการรับผิดชอบต่อความถูกต้องและความเหมาะสมของเนื้อหาที่ส่งเข้าสู่แพลตฟอร์ม เนื้อหาที่ส่งถือเป็นเนื้อหาที่ไม่เป็นความลับ บริษัทอาจนำไปใช้เพื่อวัตถุประสงค์ทางการตลาดของแพลตฟอร์มได้ ผู้ใช้บริการต้องไม่อัปโหลดไวรัส มัลแวร์ หรือโค้ดที่เป็นอันตรายต่อระบบ",
			s5Title: "ข้อห้ามในการใช้งาน",
			s5Content: "เนื้อหาที่เผยแพร่ผ่านแพลตฟอร์มต้องไม่มีลักษณะ: อนาจาร ความรุนแรง ฉ้อโกง คุกคาม หรือสร้างความเกลียดชัง; เลือกปฏิบัติด้านเชื้อชาติ เพศ ศาสนา สัญชาติ ความพิการ หรืออายุ; ละเมิดลิขสิทธิ์หรือคัดลอกโดยไม่ให้เครดิต; โปรโมทเชิงพาณิชย์โดยไม่ได้รับอนุญาต; ละเมิดกฎหมายหรือสร้างผลเสียต่อสาธารณะ; หรือขัดต่อข้อกำหนดฉบับนี้หรือนโยบายความเป็นส่วนตัว",
			s6Title: "เกณฑ์การประเมินผู้ใช้บริการ",
			s6Content: "6.1 Creator จะถูกประเมินคุณภาพงานโดยแบรนด์ คะแนนที่ได้รับมีผลต่อโอกาสรับงานและค่าตอบแทนในอนาคต บริษัทสงวนสิทธิ์ในการปรับเกณฑ์การให้คะแนนโดยไม่ต้องแจ้งล่วงหน้า  6.2 แบรนด์จะถูกประเมินตามเกณฑ์ที่บริษัทกำหนดจาก feedback ของ Creator ผลการประเมินอาจมีผลต่อโอกาสรับสมัคร Creator ในครั้งต่อไป",
			s7Title: "ผลตอบแทนของ Creator",
			s7Content: "บริษัทอาจจ่ายค่าตอบแทนให้ Creator เป็นเงินสด การสนับสนุน หรือสินค้าตามที่ระบุในแต่ละแคมเปญ บริษัทเรียกเก็บค่าธรรมเนียมบริการตามอัตราที่ตกลงในสัญญาแคมเปญ รวมถึงภาษีหัก ณ ที่จ่ายและภาษีที่เกี่ยวข้องตามกฎหมาย Creator เป็นผู้รับผิดชอบค่าธรรมเนียมของสถาบันการเงินในการโอนเงิน บริษัทไม่รับผิดชอบต่อข้อพิพาทที่เกิดจากการจ่ายค่าตอบแทนโดยตรงระหว่างแบรนด์และ Creator นอกระบบแพลตฟอร์ม",
			s8Title: "สิทธิในทรัพย์สินทางปัญญา",
			s8Content: "บริษัทเป็นเจ้าของทรัพย์สินทางปัญญาทั้งหมดบนแพลตฟอร์ม รวมถึงลิขสิทธิ์ ซอฟต์แวร์ และความลับทางการค้า ผู้ใช้บริการสามารถใช้แพลตฟอร์มเพื่อการรับบริการเท่านั้น การทำซ้ำ เผยแพร่ หรือดัดแปลงโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากบริษัทถือเป็นการละเมิด ผู้ใช้บริการห้ามนำเนื้อหาของผู้อื่นมาใช้โดยไม่ให้เครดิตตามหลักทรัพย์สินทางปัญญา",
			s9Title: "ความรับผิดชอบของผู้ใช้บริการ",
			s9Content: "9.1 Creator เป็นเจ้าของเนื้อหาที่ตนสร้างขึ้นและรับผิดชอบต่อการเรียกร้องทางกฎหมายทั้งหมด หากการละเมิดข้อกำหนดของ Creator ก่อให้เกิดความเสียหายต่อบริษัท Creator ต้องชดใช้ตามสมควร Creator สามารถยกเลิกก่อนรับสินค้า/บริการได้โดยแจ้งเหตุผลอันสมควร และต้องชดเชยกรณีส่งงานล่าช้าตามที่ตกลงไว้  9.2 แบรนด์เป็นเจ้าของเนื้อหาที่ตนสร้างขึ้นและรับผิดชอบต่อการเรียกร้องทางกฎหมายทั้งหมด หากการละเมิดข้อกำหนดของแบรนด์ก่อให้เกิดความเสียหายต่อบริษัท แบรนด์ต้องชดใช้ตามสมควร แบรนด์สามารถปฏิเสธความร่วมมือกับ Creator ก่อนการส่งมอบได้โดยแจ้งเหตุผลอันสมควร",
			s10Title: "การจำกัดความรับผิดของบริษัท",
			s10Content: "บริษัทไม่รับผิดชอบต่อ: ความเสียหายที่เกิดจากแพลตฟอร์มโซเชียลเน็ตเวิร์กภายนอก; การตรวจสอบความถูกต้องของเนื้อหาที่ผู้ใช้บริการสร้างขึ้น; ธุรกรรมระหว่างผู้ใช้บริการหรือผลกำไรที่ไม่เป็นไปตามที่คาด; การหยุดให้บริการเพื่อบำรุงรักษาระบบ; ภัยธรรมชาติ สงคราม หรือเหตุสุดวิสัย; การรั่วไหลของข้อมูลจากการโจมตีทางเทคโนโลยีที่เกินกว่ามาตรการความปลอดภัยตามมาตรฐานอุตสาหกรรม",
			s11Title: "การชดเชยค่าเสียหาย",
			s11Content: "ผู้ใช้บริการต้องชดใช้ค่าเสียหายให้แก่บริษัท กรรมการ ผู้บริหาร และพนักงาน ในกรณีที่มีการเรียกร้องจากบุคคลที่สามอันเนื่องมาจากการกระทำของผู้ใช้บริการ ผู้ใช้บริการต้องยื่นคำขอชดเชยเป็นลายลักษณ์อักษรพร้อมหลักฐานประกอบภายใน 3 เดือนนับแต่วันที่ทราบเหตุ หากเกินกำหนดถือว่าสละสิทธิ์ในการเรียกร้อง บริษัทสงวนสิทธิ์ในการใช้ดุลยพินิจพิจารณาคำขอ",
			s12Title: "การติดต่อสื่อสาร",
			s12Content: "การสื่อสารทางอีเมลจากบริษัทให้ถือว่าผู้ใช้บริการได้รับแล้วเมื่อครบ 3 วันทำการนับแต่วันที่เข้าสู่กล่องขาเข้าของผู้รับ การแจ้งเตือนหรือการสื่อสารรูปแบบอื่นให้ถือว่าได้รับแล้วเมื่อครบ 3 วันทำการนับแต่วันที่ส่ง",
			s13Title: "กฎหมายที่บังคับใช้",
			s13Content: "ข้อกำหนดฉบับนี้และเอกสารที่เกี่ยวข้องอยู่ภายใต้บังคับและตีความตามกฎหมายของประเทศไทย ข้อพิพาทใดๆ ที่เกิดขึ้นจากหรือเกี่ยวเนื่องกับข้อกำหนดฉบับนี้ให้อยู่ในอำนาจพิจารณาของศาลไทย"
		}
	},
	privacy: {
		hero: {
			backLink: "กลับไปสมัครสมาชิก",
			title: "นโยบายความเป็นส่วนตัว",
			updated: "อัปเดตล่าสุด: 1 มกราคม 2026 · อ่านประมาณ 6 นาที"
		},
		summary: "เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ ข้อมูลของคุณจะถูกใช้เพื่อให้บริการแพลตฟอร์มเท่านั้น และเราจะไม่ขายข้อมูลส่วนบุคคลของคุณให้กับบุคคลที่สาม",
		contact: {
			question: "มีคำถามเกี่ยวกับนโยบายฉบับนี้? ติดต่อเราได้ที่",
			entityLabel: "ผู้ควบคุมข้อมูล",
			entityNameTh: "บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)",
			entityNameEn: "PRAKIT HOLDINGS PUBLIC COMPANY LIMITED",
			entityAddressTh: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260",
			entityAddressEn: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"
		},
		sections: {
			s1Title: "บทนำ",
			s1Content: "บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน) (\"บริษัท\") ได้พัฒนาแพลตฟอร์ม Ripples (\"แพลตฟอร์ม\") เพื่อทำหน้าที่เป็นสื่อกลางในการเชื่อมต่อระหว่าง Creator และแบรนด์ (รวมเรียกว่า \"ผู้ใช้บริการ\") ให้มีประสิทธิภาพมากที่สุด โปรดศึกษานโยบายความเป็นส่วนตัวฉบับนี้โดยละเอียดก่อนการใช้งาน เมื่อผู้ใช้บริการกด \"ยอมรับ\" ก่อนเริ่มใช้บริการ ถือว่าได้ยินยอมและยอมรับนโยบายฉบับนี้โดยสมบูรณ์",
			s2Title: "จุดประสงค์ของการเก็บข้อมูล",
			s2Content: "บริษัทจำเป็นต้องเก็บรวบรวมข้อมูลส่วนบุคคลของผู้ใช้บริการและยืนยันว่าจะไม่เปิดเผยข้อมูลโดยไม่ได้รับความยินยอมล่วงหน้า เพื่อวัตถุประสงค์ดังต่อไปนี้: เพื่อพัฒนาระบบและยกระดับประสบการณ์การใช้งานให้ตอบโจทย์ทั้ง Creator และแบรนด์; เพื่อระบุตัวตนของผู้ใช้บริการและใช้ในการติดต่อประสานงานระหว่างบริษัท ผู้ใช้บริการ และบุคคลอื่นที่เกี่ยวข้องกับการให้บริการ; เพื่อป้องกันการแอบอ้างจากบุคคลที่ไม่ได้รับอนุญาตให้เข้าใช้งาน; เพื่อปฏิบัติตามข้อกำหนดทางกฎหมายที่เกี่ยวข้อง",
			s3Title: "รายการข้อมูลที่ถูกจัดเก็บ และวิธีการจัดการข้อมูล",
			s3Content: "ข้อมูลที่บริษัทจัดเก็บประกอบด้วย: ข้อมูลส่วนบุคคลของ Creator ที่จำเป็นต่อการลงทะเบียน ได้แก่ ชื่อ-นามสกุล อีเมล เบอร์โทรศัพท์ วันเกิด เพศ จังหวัดที่อาศัย อาชีพ ความถนัดและความสนใจ; ข้อมูลและบัญชีโซเชียลมีเดียของ Creator เช่น Facebook, Instagram, TikTok, Twitter รวมถึงประวัติส่วนตัว ข้อมูลเชิงลึก สถิติ engagement และข้อมูลอื่นที่ปรากฏในบัญชีดังกล่าว; กรณีมีบุคคลอื่นกรอกข้อมูลหรือเชื่อมต่อผ่านบัญชีโซเชียลเดียวกันกับ Creator บริษัทจะถือว่าบุคคลดังกล่าวเป็นตัวแทนหรือบุคคลเดียวกันกับ Creator กรุณาดูแลสิทธิ์การเข้าถึงบัญชีของท่านเอง; ข้อมูลของแบรนด์สำหรับการสร้างบัญชีเพื่อเข้าใช้แพลตฟอร์มและติดต่อกับ Creator รวมถึงที่อยู่กิจการและรายละเอียดสินค้า/บริการ; ข้อมูลที่จัดเก็บโดยอัตโนมัติผ่านระบบคุกกี้ (Cookies) ที่บันทึกในอุปกรณ์ของผู้ใช้บริการ เพื่อใช้ในการจัดเก็บและบริหารจัดการข้อมูล ในกรณีที่บริษัทหรือแบรนด์ประสงค์จะนำข้อมูลบางส่วนไปใช้หรือเปิดเผยต่อบุคคลที่สาม จะแจ้งและขอความยินยอมจากผู้ใช้บริการก่อนทุกครั้ง",
			s4Title: "การจัดเก็บและรักษาข้อมูล",
			s4Content: "บริษัทจะเก็บรักษาข้อมูลส่วนบุคคลของผู้ใช้บริการตลอดระยะเวลาที่ผู้ใช้บริการยังคงใช้บริการแพลตฟอร์ม บันทึกทางการเงินและภาษีจะถูกเก็บรักษาไว้ไม่น้อยกว่า 7 ปีตามที่กฎหมายไทยกำหนด หากผู้ใช้บริการลบข้อมูลหรือขอยกเลิกการลงทะเบียน ข้อมูลจะถูกลบออกจากแพลตฟอร์มและบริษัทไม่สามารถกู้คืนข้อมูลดังกล่าวกลับมาได้",
			s5Title: "การเข้าถึงข้อมูลของผู้ใช้บริการ และความปลอดภัย",
			s5Content: "5.1 ผู้มีสิทธิ์เข้าถึงข้อมูลของผู้ใช้บริการนอกจากบริษัท ได้แก่: ตัวผู้ใช้บริการเอง ซึ่งมีหน้าที่ดูแลปรับปรุงข้อมูลส่วนบุคคลให้ถูกต้องและเป็นปัจจุบัน; แบรนด์ ซึ่งอาจเป็นบุคคลหรือนิติบุคคลผู้เป็นเจ้าของสินค้าหรือบริการที่ลงทะเบียนในแพลตฟอร์ม ใช้ข้อมูลประกอบการตัดสินใจเลือก Creator ที่เหมาะสมกับแคมเปญ; บุคคลหรือบริษัทภายนอกที่ต้องการทำการตลาดกับผู้ใช้บริการตามที่ผู้ใช้บริการได้ให้ความยินยอมไว้ หากบริษัทประสงค์จะเปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลหรือบริษัทอื่นนอกเหนือจากที่ระบุ จะแจ้งและขอความยินยอมก่อนทุกครั้ง  5.2 บริษัทให้ความสำคัญกับความปลอดภัยของข้อมูลเป็นหลัก โดยจำกัดสิทธิ์การเข้าถึงฐานข้อมูลและเซิร์ฟเวอร์ มีการสำรองข้อมูลส่วนบุคคลของผู้ใช้บริการผ่านบริการคลาวด์ที่เชื่อถือได้ และตรวจสอบความปลอดภัยอย่างสม่ำเสมอ อย่างไรก็ดี บริษัทแนะนำให้ผู้ใช้บริการระมัดระวังการเข้าใช้งาน โดยหลีกเลี่ยงเครือข่ายสาธารณะเพื่อป้องกันอันตรายที่อาจเกิดขึ้น",
			s6Title: "ข้อจำกัดความรับผิด",
			s6Content: "บริษัทจำกัดความรับผิดเฉพาะกรณีที่เกิดความเสียหายจากความประมาทของบริษัทที่ส่งผลต่อการรั่วไหลของข้อมูลส่วนบุคคลของผู้ใช้บริการสู่สาธารณะหรือบุคคลภายนอก อันมีผลทำให้ผู้ใช้บริการได้รับความเสียหาย โดยบริษัทจะพิจารณาชดเชยค่าเสียหายตามสมควร ทั้งนี้ บริษัทไม่รับผิดชอบต่อข้อมูลหรือเนื้อหาที่อยู่นอกเหนือขอบเขตการให้บริการของแพลตฟอร์ม หรือปัญหาที่เกิดจากการดำเนินการของบุคคลภายนอก แม้จะกระทำผ่านแพลตฟอร์มของบริษัทก็ตาม",
			s7Title: "การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว",
			s7Content: "บริษัทสงวนสิทธิ์ในการแก้ไขนโยบายความเป็นส่วนตัวให้มีความถูกต้อง สอดคล้องกับหลักกฎหมาย และเป็นปัจจุบันอยู่เสมอ เพื่อการให้บริการที่มีประสิทธิภาพและมีความปลอดภัยสูงสุด นโยบายฉบับแก้ไขจะมีผลบังคับใช้ทันทีหลังประกาศบนแพลตฟอร์ม บริษัทจะแจ้งผู้ใช้บริการล่วงหน้าก่อนการประกาศใช้ ผู้ใช้บริการควรตรวจสอบนโยบายอยู่สม่ำเสมอเพื่อเข้าใจข้อกำหนดล่าสุดของบริษัท",
			s8Title: "ช่องทางการติดต่อ",
			s8Content: "หากผู้ใช้บริการมีข้อสงสัยหรือคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ สามารถติดต่อบริษัทได้ที่ privacy@ripples.com หรือทางไปรษณีย์ที่ บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน) เลขที่ 88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260"
		}
	},
	cookies: {
		badge: "ทางกฎหมาย",
		title: "นโยบายคุกกี้",
		updated: "อัปเดตล่าสุด: 1 มกราคม 2026",
		typesTitle: "ประเภทคุกกี้ที่เราใช้",
		required: "จำเป็น",
		optional: "ทางเลือก",
		contact: "สำหรับคำถามเกี่ยวกับคุกกี้ ติดต่อเราได้ที่",
		sections: {
			s1Title: "คุกกี้คืออะไร?",
			s1Content: "คุกกี้คือไฟล์ข้อความขนาดเล็กที่ถูกวางบนอุปกรณ์ของคุณเมื่อคุณเข้าชมเว็บไซต์ ช่วยให้เว็บไซต์จดจำการตั้งค่า คงการ login และเข้าใจวิธีที่คุณใช้ไซต์ เราใช้คุกกี้และเทคโนโลยีที่คล้ายกัน เช่น local storage และ session storage",
			s2Title: "วิธีที่เราใช้คุกกี้",
			s2Content: "เราใช้คุกกี้เพื่อคงการ login ในบัญชีของคุณ จดจำการตั้งค่าภาษา วิเคราะห์การใช้งานเพื่อปรับปรุงแพลตฟอร์ม วัดประสิทธิภาพของแคมเปญ และให้เนื้อหาและคำแนะนำที่ตรงกับคุณ",
			s3Title: "การจัดการคุกกี้",
			s3Content: "คุณสามารถควบคุมคุกกี้ผ่านการตั้งค่าเบราว์เซอร์ การปิดคุกกี้บางประเภทอาจส่งผลต่อฟังก์ชันของแพลตฟอร์ม คุกกี้ที่จำเป็นไม่สามารถปิดได้เนื่องจากจำเป็นสำหรับการทำงานของแพลตฟอร์ม",
			s4Title: "คุกกี้ของบุคคลที่สาม",
			s4Content: "คุกกี้บางประเภทถูกวางโดยบริการของบุคคลที่สามที่ปรากฏในหน้าของเรา เช่น ผู้ให้บริการ analytics และแพลตฟอร์มโซเชียล ซึ่งจะอยู่ภายใต้นโยบายความเป็นส่วนตัวของบุคคลที่สามนั้นๆ"
		},
		types: {
			t1Name: "คุกกี้ที่จำเป็น",
			t1Desc: "จำเป็นสำหรับการทำงานพื้นฐานของแพลตฟอร์ม เช่น การยืนยันตัวตน การจัดการ session และระบบความปลอดภัย ไม่สามารถปิดได้",
			t2Name: "คุกกี้ความต้องการ",
			t2Desc: "จดจำการตั้งค่าและความต้องการของคุณ เช่น ภาษา เพื่อให้ไม่ต้องกรอกใหม่ทุกครั้งที่เข้าชม",
			t3Name: "คุกกี้วิเคราะห์",
			t3Desc: "ช่วยให้เราเข้าใจวิธีที่ผู้เข้าชมใช้แพลตฟอร์มโดยเก็บสถิติแบบไม่ระบุตัวตนเพื่อปรับปรุงบริการ",
			t4Name: "คุกกี้การตลาด",
			t4Desc: "ใช้ติดตามผู้เข้าชมข้ามเว็บไซต์เพื่อแสดงโฆษณาที่ตรงกับความสนใจของคุณ"
		}
	},
	error: {
		404: {
			title: "ไม่พบหน้านี้",
			description: "ขออภัย หน้าที่คุณกำลังค้นหาไม่มีอยู่",
			backHome: "กลับหน้าหลัก"
		},
		500: {
			title: "ข้อผิดพลาดของเซิร์ฟเวอร์",
			description: "ขออภัย เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง",
			tryAgain: "ลองใหม่"
		}
	}
};
var enTranslations = {
	nav: {
		home: "Home",
		about: "About",
		services: "Services",
		campaigns: "Campaigns",
		blog: "Blog",
		contact: "Contact",
		joinInfluencer: "Join Us",
		login: "Login",
		register: "Register",
		logout: "Logout",
		dashboard: "Dashboard",
		profile: "Profile",
		wallet: "Wallet",
		myCampaigns: "My Campaigns",
		tasks: "Tasks"
	},
	hero: {
		subtitle: "Thailand's #1 KOL Marketplace",
		title: "Where Brands Meet Real Creators",
		titleBefore: "Where Brands Meet",
		titleHighlight: "Real Creators",
		description: "Find the right creator in 48 hours • Real-time analytics • Transparent invoicing — all in one platform",
		getStarted: "Start Free",
		exploreCampaigns: "See How It Works",
		stats: {
			influencers: "Verified Creators",
			brands: "Trusted Brands",
			paidOut: "Success Rate"
		},
		trustBadge: "Trusted by leading brands"
	},
	about: {
		badge: "About Us",
		title: "Where Brands Meet Real Creators",
		description: "A modern marketplace — verified creators, real engagement, measurable results on every campaign",
		heroDescription: "Ripples is a marketplace that connects brands with real, verified creators. Every KOL passes identity and engagement verification. From discovery to briefing, content approval, through to compliant invoicing — everything lives in one place.",
		points: {
			point1: "Every creator is KYC-verified with real engagement — no bots",
			point2: "Transparent pricing, full documentation, correct withholding tax — no hidden fees",
			point3: "Real-time analytics on every campaign, every creator"
		},
		learnMore: "Learn More",
		stats: {
			stat1Value: "10,000+",
			stat1Label: "Verified Creators",
			stat2Value: "500+",
			stat2Label: "Trusted Brands",
			stat3Value: "98%",
			stat3Label: "Success Rate",
			stat4Value: "24/7",
			stat4Label: "Support"
		},
		story: {
			title: "Why We Built Ripples",
			paragraph1: "Thailand's KOL scene is booming, but brands still struggle to find the right creators. Fake followers, inflated engagement, messy communication — we built Ripples to solve these problems in one place.",
			paragraph2: "We screen every creator through KYC and real engagement analysis. Profile numbers are transparent and verifiable. No bots, no fake metrics.",
			paragraph3: "From discovery, briefing, content review, go-live, measurement to payment — all in one platform. Real-time, secure, protected for both sides."
		},
		values: {
			value1Title: "Transparency",
			value1Description: "Every number on Ripples is verifiable — pricing, engagement, and results.",
			value2Title: "Trust",
			value2Description: "Digital contracts, complete tax docs, tracked milestones — trust between brands and creators.",
			value3Title: "Innovation",
			value3Description: "Modern analytics and dashboards help you decide with real data.",
			value4Title: "Community",
			value4Description: "Creators and brands grow together. Ripples is the bridge."
		},
		team: {
			badge: "Our Team",
			title: "The Team Behind Ripples",
			member1Name: "Alex K.",
			member1Role: "Founder & CEO",
			member2Name: "Sara T.",
			member2Role: "Head of Product",
			member3Name: "Chris L.",
			member3Role: "Head of Creator Relations",
			member4Name: "Emma P.",
			member4Role: "Head of Brand Success"
		},
		whyUs: {
			badge: "Why Choose Us",
			title: "Why Brands Choose Ripples",
			feature1: "Every creator is KYC-verified with real engagement",
			feature2: "Digital contracts + full tax documentation — transparent on both sides",
			feature3: "Real-time analytics on every campaign",
			feature4: "Dedicated account manager for every campaign",
			feature5: "Transparent pricing, no hidden fees",
			feature6: "24/7 support in Thai and English"
		}
	},
	services: {
		badge: "Our Services",
		title: "Everything You Need, All in One Place",
		description: "From finding the right creator to processing payment, Ripples has every tool you need to run a successful campaign.",
		service1: "Creator Discovery",
		service1Desc: "Find the right creator by category, budget, and target audience",
		service1Feature1: "Multi-layer filters",
		service1Feature2: "Audience matching",
		service1Feature3: "AI recommendations",
		service1Feature4: "Past work portfolio",
		service2: "Campaign Management",
		service2Desc: "Briefs, contracts, and timelines — all in one system",
		service2Feature1: "Brief templates",
		service2Feature2: "Digital contracts",
		service2Feature3: "Automated timelines",
		service2Feature4: "Milestone alerts",
		service3: "Content Approval",
		service3Desc: "Review drafts and approve content before go-live",
		service3Feature1: "Online draft review",
		service3Feature2: "Comment & revision flow",
		service3Feature3: "Version tracking",
		service3Feature4: "Approval workflow",
		service4: "Real-time Analytics",
		service4Desc: "Measure engagement, reach, and conversion in real time",
		service4Feature1: "Real-time dashboards",
		service4Feature2: "Engagement metrics",
		service4Feature3: "ROI tracking",
		service4Feature4: "PDF export",
		service5: "Account Management",
		service5Desc: "Dedicated account managers and 24/7 support for every campaign",
		service5Feature1: "Dedicated account manager",
		service5Feature2: "24/7 support",
		service5Feature3: "Thai/English",
		service5Feature4: "Strategic guidance",
		service6: "Invoice & Tax Docs",
		service6Desc: "Digital invoices, complete tax documentation, correct withholding",
		service6Feature1: "Digital invoices",
		service6Feature2: "Withholding tax docs",
		service6Feature3: "Payment status tracking",
		service6Feature4: "Due-date reminders",
		howItWorks: {
			badge: "How It Works",
			title: "Simple, Transparent, 4 Steps",
			step1Title: "Pick a Creator",
			step1Description: "Search and select the right creator by target audience, budget, and brand category.",
			step2Title: "Brief the Work",
			step2Description: "Create briefs from templates, issue digital contracts, set campaign timelines.",
			step3Title: "Approve & Go Live",
			step3Description: "Review drafts, approve content, creator posts the live work, track results instantly.",
			step4Title: "Measure & Document",
			step4Description: "Track engagement in real time. When conditions are met, Ripples auto-generates invoices and tax docs."
		},
		ctaSection: {
			title: "Ready to Launch Your First Campaign?",
			description: "Launch your first creator campaign today — find real creators in just a few clicks.",
			button1: "Get Started",
			button2: "Contact Us"
		}
	},
	expertise: {
		badge: "Case Studies",
		title: "Featured Campaigns",
		viewAll: "View All"
	},
	testimonials: {
		badge: "Brand Voices",
		title: "Brands That Trust Us",
		testimonial1: "Ripples made finding brand-aligned creators so much easier. The screening is solid and results hit expectations every time.",
		testimonial1Name: "Somchai T.",
		testimonial1Role: "Brand Director",
		testimonial2: "I love that everything happens in one place — briefs, contracts, analytics, payment. It saves our team a huge amount of time.",
		testimonial2Name: "Siriporn P.",
		testimonial2Role: "Marketing Manager",
		testimonial3: "Ripples helped us find the right creator within 48 hours. Every campaign comes with clear, measurable results.",
		testimonial3Name: "Ananda L.",
		testimonial3Role: "CEO, Leading Brand"
	},
	cta: {
		title: "Ready to Make Your Brand Pop?",
		description: "Launch your first campaign today — find the right creator in a few clicks. No sign-up fee.",
		button1: "Start Free",
		button2: "See Example Campaigns"
	},
	mediaInsights: {
		badge: "Insights",
		title: "Latest KOL Trends & Tips",
		viewMore: "Read More"
	},
	auth: {
		loginTitle: "Login",
		loginSubtitle: "Welcome back! Please login to continue",
		registerTitle: "Register",
		registerSubtitle: "Create a new account to start as an Influencer",
		forgotPasswordTitle: "Forgot Password",
		forgotPasswordSubtitle: "Enter your email to receive a password reset link",
		resetPasswordTitle: "Reset Password",
		resetPasswordSubtitle: "Enter your new password",
		changePasswordTitle: "Change Password",
		changePasswordSubtitle: "Update your password",
		username: "Username",
		password: "Password",
		email: "Email",
		confirmPassword: "Confirm Password",
		firstName: "First Name",
		lastName: "Last Name",
		rememberMe: "Remember me",
		forgotPassword: "Forgot password?",
		noAccount: "Don't have an account?",
		haveAccount: "Already have an account?",
		registerNow: "Register now",
		loginNow: "Login now",
		sendResetLink: "Send Reset Link",
		resetPassword: "Reset Password",
		changePassword: "Change Password",
		oldPassword: "Old Password",
		newPassword: "New Password",
		orContinueWith: "Or continue with",
		loginSuccess: "Login successful",
		registerSuccess: "Registration successful",
		passwordResetSent: "Password reset link sent",
		passwordChanged: "Password changed successfully"
	},
	dashboard: {
		title: "Dashboard",
		welcome: "Welcome back",
		summary: "Summary",
		walletBalance: "Wallet Balance",
		activeCampaigns: "Active Campaigns",
		pendingTasks: "Pending Tasks",
		revisionTasks: "Tasks Need Revision",
		recentTransactions: "Recent Transactions",
		notifications: "Notifications",
		viewAll: "View All",
		noNotifications: "No notifications",
		markAsRead: "Mark as read",
		newCampaign: "New Campaign",
		taskApproved: "Task Approved",
		paymentReceived: "Payment Received"
	},
	profile: {
		title: "Profile",
		personalInfo: "Personal Information",
		socialAccounts: "Social Accounts",
		categories: "Categories / Niche",
		rateCard: "Rate Card",
		verification: "Verification / KYC",
		verificationStatus: "Verification Status",
		pending: "Pending",
		approved: "Approved",
		rejected: "Rejected",
		uploadDocument: "Upload Document",
		idCard: "ID Card",
		selfie: "Selfie with ID",
		bankBook: "Bank Book",
		saveChanges: "Save Changes",
		editProfile: "Edit Profile",
		bio: "About Me",
		phone: "Phone",
		location: "Location"
	},
	campaigns: {
		title: "Campaigns",
		marketplace: "Campaign Marketplace",
		featured: "Featured Campaigns",
		allCampaigns: "All Campaigns",
		filter: "Filter",
		category: "Category",
		budget: "Budget",
		followers: "Followers",
		platform: "Platform",
		apply: "Apply",
		applied: "Applied",
		details: "Details",
		requirements: "Requirements",
		deadline: "Deadline",
		influencersNeeded: "Influencers Needed",
		joined: "Joined",
		budgetRange: "Budget Range"
	},
	tasks: {
		title: "Tasks",
		subtitle: "Manage your campaign tasks",
		myTasks: "My Tasks",
		pending: "Pending",
		inProgress: "In Progress",
		submitted: "Submitted",
		revision: "Needs Revision",
		approved: "Approved",
		waitingGoLive: "Awaiting Go Live",
		done: "Go Live ✓",
		noTasks: "No tasks in this category.",
		campaign: "Campaign",
		dueDate: "Due Date",
		payment: "Payment",
		description: "Description",
		comments: "Comments",
		noComments: "No comments yet.",
		addComment: "Add Comment",
		commentPlaceholder: "Type your comment...",
		postComment: "Post Comment",
		submitWork: "Submit Work",
		resubmitWork: "Resubmit Work",
		draftContent: "Draft Content / Caption",
		draftContentPlaceholder: "Write your caption or content description...",
		attachFile: "Attach File (Image / Video)",
		chooseFile: "Click to choose file",
		revisionNote: "Needs Revision",
		revisionDesc: "Please review the comments and resubmit your work",
		draftContentRevised: "Draft Content / Caption (Revised)",
		draftContentRevisedPlaceholder: "Write your revised caption or content...",
		attachFileRevised: "Attach Revised File (Image / Video)",
		readyGoLive: "Ready to Go Live!",
		goLiveDesc: "Draft approved. Please post your content and submit the link below.",
		postUrl: "Post URL",
		confirmGoLive: "Confirm Go Live",
		goneLive: "Successfully Gone Live",
		postLink: "Post Link:",
		viewDetails: "View Details",
		attachments: "Attachments",
		uploadFile: "Upload File",
		due: "Due"
	},
	wallet: {
		title: "Wallet",
		balance: "Balance",
		transactionHistory: "Transaction History",
		income: "Income",
		withdrawal: "Withdrawal",
		pending: "Pending",
		completed: "Completed",
		failed: "Failed",
		withdraw: "Withdraw",
		bankAccount: "Bank Account",
		amount: "Amount",
		requestWithdrawal: "Request Withdrawal",
		noTransactions: "No transactions"
	},
	common: {
		loading: "Loading...",
		save: "Save",
		cancel: "Cancel",
		edit: "Edit",
		delete: "Delete",
		confirm: "Confirm",
		close: "Close",
		search: "Search",
		filter: "Filter",
		sort: "Sort",
		next: "Next",
		previous: "Previous",
		submit: "Submit",
		back: "Back",
		more: "More",
		readMore: "Read More",
		viewAll: "View All",
		seeDetails: "See Details",
		learnMore: "Learn More",
		getStarted: "Get Started",
		contactUs: "Contact Us",
		followUs: "Follow Us",
		subscribe: "Subscribe",
		emailPlaceholder: "Enter your email",
		allRightsReserved: "All rights reserved",
		privacyPolicy: "Privacy Policy",
		termsOfService: "Terms of Service",
		cookiePolicy: "Cookie Policy",
		companyName: "Ripples",
		subject: "Subject",
		message: "Message"
	},
	footer: {
		description: "Modern KOL & influencer marketplace — for brands and creators in Thailand",
		quickLinks: "Quick Links",
		services: "Services",
		newsletter: "Newsletter",
		newsletterDesc: "Get the latest KOL trends and tips",
		forInfluencers: "For Creators",
		forBrands: "For Brands",
		pricing: "Pricing",
		support: "Support"
	},
	contact: {
		badge: "Contact Us",
		title: "Get in Touch",
		subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
		info: {
			emailTitle: "Email",
			emailDesc: "For general inquiries",
			phoneTitle: "Phone",
			phoneDesc: "Mon–Fri 9am–6pm",
			officeTitle: "Office",
			officeContent: "Bangkok, Thailand",
			officeDesc: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong 10260",
			hoursTitle: "Working Hours",
			hoursContent: "Mon – Fri: 9AM – 6PM",
			hoursDesc: "Weekend: Closed"
		},
		form: {
			title: "Send us a Message",
			namePlaceholder: "Your name",
			emailPlaceholder: "your@email.com",
			subjectPlaceholder: "How can we help?",
			messagePlaceholder: "Tell us more about your inquiry...",
			sending: "Sending...",
			send: "Send Message",
			successTitle: "Message sent!",
			successDesc: "We'll get back to you as soon as possible."
		},
		office: {
			title: "Visit Our Office",
			address: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"
		},
		faq: {
			title: "Frequently Asked Questions",
			description: "Find quick answers to common questions in our FAQ section.",
			button: "View FAQ"
		}
	},
	blog: {
		badge: "Our Blog",
		title: "Latest Insights & Tips",
		subtitle: "Discover strategies, tips, and insights to grow your influence and succeed in the digital world.",
		searchPlaceholder: "Search articles...",
		readMore: "Read More",
		minRead: "min read",
		noResults: "No articles found matching your criteria.",
		categories: {
			all: "All",
			tips: "Tips",
			guide: "Guide",
			analytics: "Analytics",
			business: "Business"
		}
	},
	faq: {
		badge: "FAQ",
		title: "Frequently Asked Questions",
		subtitle: "Everything you need to know about joining our platform.",
		searchPlaceholder: "Search for answers...",
		categoriesTitle: "Categories",
		noResults: "No questions found matching your search.",
		categories: {
			all: "All",
			general: "General",
			payment: "Payment",
			campaigns: "Campaigns",
			requirements: "Requirements"
		},
		cta: {
			title: "Still have questions?",
			description: "Can't find the answer you're looking for? Please chat to our friendly team.",
			button: "Contact Us"
		}
	},
	campaignsPage: {
		badge: "Campaigns",
		title: "Explore Campaigns",
		subtitle: "Discover exciting brand campaigns and start earning as an influencer today.",
		searchPlaceholder: "Search campaigns...",
		statusOpen: "Open",
		applyNow: "Apply Now",
		pendingReview: "Pending Review",
		goToTask: "Go to Task",
		close: "Close",
		noResults: "No campaigns found matching your criteria.",
		description: "Description",
		reqTitle: "Requirements",
		reqMinFollowers: "Minimum {count} followers",
		reqPlatforms: "Platforms: {list}",
		reqContentType: "Content types: {list}",
		deadline: "Deadline",
		budgetRange: "Budget Range",
		categories: {
			all: "All",
			fashion: "Fashion",
			beauty: "Beauty",
			food: "Food",
			tech: "Tech",
			lifestyle: "Lifestyle",
			travel: "Travel",
			fitness: "Fitness"
		},
		toast: {
			loginRequired: "Please log in first",
			loginRequiredDesc: "Register or log in to apply for campaigns",
			applySuccess: "Applied successfully!",
			applySuccessDesc: "We'll review your application within 1-3 business days"
		},
		statusFilter: {
			label: "My Status",
			all: "All",
			applied: "Applied",
			inProgress: "In progress"
		}
	},
	terms: {
		hero: {
			backLink: "Back to registration",
			title: "Terms and Conditions",
			updated: "Last updated: January 1, 2026 · 8 min read"
		},
		contact: {
			question: "Questions about these terms? Reach us at",
			entityLabel: "Service Provider",
			entityNameTh: "บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)",
			entityNameEn: "PRAKIT HOLDINGS PUBLIC COMPANY LIMITED",
			entityAddressTh: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260",
			entityAddressEn: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"
		},
		sections: {
			s1Title: "Definitions",
			s1Content: "For the purposes of these Terms and any related policies, the following definitions apply: \"Company\" means PRAKIT HOLDINGS PUBLIC COMPANY LIMITED, registered at 88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260; \"Platform\" means Ripples, the online system and channels operated by the Company; \"Brand\" means any individual or entity using the Platform to engage Creators to promote products or services; \"Creator\" means the content creator (influencer/KOL) registered on the Platform to accept campaign work; \"User\" means both Brands and Creators; \"Account\", \"Username\", and \"Password\" mean the authentication details used to access the Platform; \"Privacy Policy\" means the document issued by the Company to protect User data.",
			s2Title: "Acceptance of Terms",
			s2Content: "Before registering, Users must read and understand these Terms in full. By clicking \"Accept\", the User consents to be legally bound by these Terms and authorizes the Company to process personal data under the Privacy Policy. If you do not agree to any provision, please discontinue use immediately.",
			s3Title: "Registration",
			s3Content: "3.1 Creators must provide accurate and up-to-date personal and social media account information. The Company reserves the right to suspend service if any information is false.  3.2 Brands must create an account with a username and password, and provide a business address and product/service details. The Brand is responsible for the accuracy of all information submitted.  3.3 The Company will not disclose User personal data to third parties except for in-Platform marketing, operations with business partners, legal compliance, or to protect rights and safety.",
			s4Title: "Content Management",
			s4Content: "Users are responsible for the accuracy and appropriateness of content submitted to the Platform. Submitted content is considered non-confidential and may be used by the Company for Platform marketing purposes. Users must not upload viruses, malware, or any code harmful to the system.",
			s5Title: "Prohibited Activities",
			s5Content: "Content published through the Platform must not: be obscene, violent, fraudulent, harassing, or hateful; discriminate on the basis of race, gender, religion, nationality, disability, or age; infringe copyright or be copied without attribution; promote commercial activity without authorization; violate law or cause public harm; or breach these Terms or the Privacy Policy.",
			s6Title: "User Evaluation",
			s6Content: "6.1 Creators are rated on work quality by Brands. Scores affect future work opportunities and compensation. The Company reserves the right to adjust scoring criteria without prior notice.  6.2 Brands are evaluated against criteria set by the Company based on Creator feedback. Evaluation results may affect the Brand’s ability to engage Creators in future campaigns.",
			s7Title: "Creator Compensation",
			s7Content: "The Company may pay Creators in cash, sponsorship, or products as specified in each campaign. The Company charges a service fee at the rate agreed in the campaign contract, plus applicable withholding tax and other taxes required by law. Creators bear any bank transfer fees. The Company is not liable for disputes arising from compensation paid directly between Brands and Creators outside the Platform.",
			s8Title: "Intellectual Property",
			s8Content: "The Company owns all intellectual property on the Platform, including copyrights, software, and trade secrets. Users may use the Platform only to access the services provided. Reproduction, distribution, or modification without the Company’s prior written consent is prohibited. Users may not use third-party content without proper attribution in accordance with IP law.",
			s9Title: "User Responsibilities",
			s9Content: "9.1 Creators own the content they produce and are responsible for all related legal claims. If a Creator’s breach of these Terms causes damage to the Company, the Creator must indemnify the Company. Creators may cancel before receiving goods or services by providing a reasonable justification, and must compensate for late deliveries as agreed.  9.2 Brands own the content they produce and are responsible for all related legal claims. If a Brand’s breach of these Terms causes damage to the Company, the Brand must indemnify the Company. Brands may refuse cooperation with a Creator before delivery by providing a reasonable justification.",
			s10Title: "Limitation of Liability",
			s10Content: "The Company is not liable for: damage arising from external social networks; verification of the accuracy of User-generated content; transactions between Users or profit shortfalls; service interruptions due to system maintenance; force majeure events including natural disasters, war, or other uncontrollable circumstances; data breaches arising from technology attacks that exceed industry-standard security measures.",
			s11Title: "Indemnification",
			s11Content: "Users must indemnify the Company, its directors, officers, and employees against any third-party claims arising from the User’s acts. Users must submit damage claims in writing with supporting evidence within 3 months from the date the User became aware of the incident; otherwise the right to compensation is forfeited. The Company reserves full discretion to review claims.",
			s12Title: "Communications",
			s12Content: "Email communications from the Company are deemed received 3 business days after arriving in the recipient’s inbox. Other notifications or communications are deemed received 3 business days after transmission.",
			s13Title: "Governing Law",
			s13Content: "These Terms and any related documents are governed by and construed in accordance with the laws of Thailand. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the Thai courts."
		}
	},
	privacy: {
		hero: {
			backLink: "Back to registration",
			title: "Privacy Policy",
			updated: "Last updated: January 1, 2026 · 6 min read"
		},
		summary: "We take your privacy seriously. Your data is used solely to provide the Platform and we do not sell your personal information to third parties.",
		contact: {
			question: "Questions about this policy? Reach us at",
			entityLabel: "Data Controller",
			entityNameTh: "บริษัท ประกิต โฮลดิ้งส์ จำกัด (มหาชน)",
			entityNameEn: "PRAKIT HOLDINGS PUBLIC COMPANY LIMITED",
			entityAddressTh: "88 ซอยสุขุมวิท 62 แยก 3 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260",
			entityAddressEn: "88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260"
		},
		sections: {
			s1Title: "Introduction",
			s1Content: "PRAKIT HOLDINGS PUBLIC COMPANY LIMITED (\"Company\") developed the Ripples platform (\"Platform\") to serve as a marketplace connecting Creators and Brands (collectively, \"Users\") as efficiently as possible. Please read this Privacy Policy carefully before using the Platform. By clicking \"Accept\" before using our service, the User is deemed to have fully consented to and accepted this Policy.",
			s2Title: "Purpose of Data Collection",
			s2Content: "The Company collects Users’ personal data and affirms that it will not disclose such data without prior consent, for the following purposes: to develop the system and improve the service experience for both Creators and Brands; to verify the identity of Users and to facilitate communication between the Company, Users, and other related parties involved in providing services; to prevent unauthorized access by persons not authorized by the Company; to comply with applicable legal requirements.",
			s3Title: "Data Collected and How We Manage It",
			s3Content: "The data we collect includes: Creator personal data required for registration, including first and last name, email, phone number, date of birth, gender, city of residence, occupation, skills, and interests; Creator social media account data such as Facebook, Instagram, TikTok, and Twitter, including profile information, analytics, engagement statistics, and other data appearing in such accounts; if another person submits data or connects through the same social media account as a Creator, the Company will treat that person as the Creator’s representative or the same person—please manage access to your own social accounts accordingly; Brand account data used to register and communicate with Creators and the Company, including business address and product/service details; data automatically collected via cookies stored on the User’s device to manage services. If the Company or a Brand wishes to use or disclose any data to third parties, the User will be notified and consent obtained each time.",
			s4Title: "Data Retention",
			s4Content: "The Company retains personal data for as long as the User continues to use the Platform. Financial and tax records are retained for no less than 7 years as required by Thai law. If the User deletes their data or cancels registration, the data will be removed from the Platform and the Company cannot recover it.",
			s5Title: "Access & Security",
			s5Content: "5.1 Besides the Company, parties authorized to access User data include: the User themselves, who is responsible for keeping personal data accurate and up to date; Brands, which may be individuals or entities owning products or services registered on the Platform, using the data to help select Creators suitable for their campaigns; external individuals or companies that wish to market to Users where the User has consented to such disclosure. If the Company wishes to disclose personal data to any party outside this scope, it will notify and obtain consent before doing so.  5.2 The Company prioritizes data security by restricting access to databases and servers, backing up User personal data with trusted cloud services, and conducting regular security audits. Users are nonetheless advised to take care when accessing the Platform by avoiding public networks in order to prevent potential harm.",
			s6Title: "Limitation of Liability",
			s6Content: "The Company’s liability is limited to damage caused by the Company’s negligence resulting in disclosure of User personal data to the public or third parties, where such disclosure causes harm to the User. In such cases the Company will assess reasonable compensation. The Company is not responsible for data or content outside the scope of the Platform services, or for issues arising from third parties, whether or not they acted through the Platform.",
			s7Title: "Changes to This Policy",
			s7Content: "The Company reserves the right to amend this Privacy Policy to keep it accurate, legally compliant, and current, so that services remain effective and secure. Amendments take effect upon publication on the Platform. The Company will notify Users in advance before the changes take effect. Users should review this policy regularly to understand the Company’s latest requirements.",
			s8Title: "Contact",
			s8Content: "If the User has any questions or inquiries about this Privacy Policy, please contact the Company at privacy@ripples.com or by post at PRAKIT HOLDINGS PUBLIC COMPANY LIMITED, 88 Soi Sukhumvit 62 Yaek 3, Phra Khanong Tai, Phra Khanong, Bangkok 10260."
		}
	},
	cookies: {
		badge: "Legal",
		title: "Cookie Policy",
		updated: "Last updated: January 1, 2026",
		typesTitle: "Types of Cookies We Use",
		required: "Required",
		optional: "Optional",
		contact: "For cookie-related questions, contact us at",
		sections: {
			s1Title: "What Are Cookies?",
			s1Content: "Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site. We use cookies and similar technologies like local storage and session storage.",
			s2Title: "How We Use Cookies",
			s2Content: "We use cookies to keep you logged in to your account, remember your language preference, analyze how you use the Platform to improve it, measure the effectiveness of our campaigns, and provide personalized content and recommendations.",
			s3Title: "Managing Cookies",
			s3Content: "You can control cookies through your browser settings. Disabling certain cookies may affect Platform functionality. Essential cookies cannot be disabled as they are required for the Platform to function properly.",
			s4Title: "Third-Party Cookies",
			s4Content: "Some cookies are placed by third-party services that appear on our pages, such as analytics providers and social media platforms. These are governed by the respective third parties' privacy policies."
		},
		types: {
			t1Name: "Essential Cookies",
			t1Desc: "Required for basic Platform functionality including authentication, session management, and security features. Cannot be disabled.",
			t2Name: "Preference Cookies",
			t2Desc: "Remember your settings and preferences such as language selection, so you don't have to re-enter them each visit.",
			t3Name: "Analytics Cookies",
			t3Desc: "Help us understand how visitors interact with the Platform by collecting anonymous usage statistics to improve our services.",
			t4Name: "Marketing Cookies",
			t4Desc: "Used to track visitors across websites to display relevant and engaging advertisements based on your interests."
		}
	},
	error: {
		404: {
			title: "Page Not Found",
			description: "Sorry, the page you are looking for does not exist",
			backHome: "Back to Home"
		},
		500: {
			title: "Server Error",
			description: "Sorry, something went wrong. Please try again later",
			tryAgain: "Try Again"
		}
	}
};
var useLanguageStore = defineStore("language", () => {
	const language = ref("th");
	function init() {}
	function setLanguage(lang) {
		language.value = lang;
	}
	function t(key) {
		const translations = language.value === "th" ? thTranslations : enTranslations;
		const keys = key.split(".");
		let value = translations;
		for (const k of keys) if (typeof value === "object" && value !== null && k in value) value = value[k];
		else return key;
		return typeof value === "string" ? value : key;
	}
	return {
		language,
		init,
		setLanguage,
		t
	};
});
//#endregion
//#region app/composables/useLocale.ts
function useLocale() {
	const store = useLanguageStore();
	const lang = computed(() => store.language);
	function tr(th, en) {
		return store.language === "en" ? en : th;
	}
	function loc(pair) {
		return store.language === "en" ? pair.en : pair.th;
	}
	return {
		lang,
		tr,
		loc
	};
}
//#endregion
//#region app/app.vue?vue&type=script&setup=true&lang.ts
var app_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "app",
	__ssrInlineRender: true,
	setup(__props) {
		useAuthStore();
		useLanguageStore();
		const { lang } = useLocale();
		useHead$1({ htmlAttrs: { lang } });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLayout = nuxt_layout_default;
			const _component_NuxtPage = page_default;
			const _component_AppToast = AppToast_default;
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_component_NuxtLayout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId));
					else return [createVNode(_component_NuxtPage)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_AppToast, null, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region app/app.vue
var _sfc_setup$2 = app_vue_vue_type_script_setup_true_lang_default.setup;
app_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var app_default = app_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region app/error.vue?vue&type=script&setup=true&lang.ts
var error_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "error",
	__ssrInlineRender: true,
	props: { error: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-primary/10 px-4" }, _attrs))}><div class="text-center max-w-md"><div class="text-8xl font-bold text-primary mb-4">${ssrInterpolate(__props.error?.statusCode || 500)}</div><h1 class="text-2xl font-bold text-gray-900 mb-4">${ssrInterpolate(__props.error?.statusCode === 404 ? "Page Not Found" : "Something Went Wrong")}</h1><p class="text-gray-600 mb-8">${ssrInterpolate(__props.error?.statusCode === 404 ? "The page you're looking for doesn't exist or has been moved." : "We're sorry, an unexpected error occurred. Please try again.")}</p><div class="flex flex-col sm:flex-row gap-3 justify-center"><button class="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"> Go Home </button><button class="inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"> Try Again </button></div></div></div>`);
		};
	}
});
//#endregion
//#region app/error.vue
var _sfc_setup$1 = error_vue_vue_type_script_setup_true_lang_default.setup;
error_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var error_default = error_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fisland-renderer.mjs
var IslandRenderer = () => null;
//#endregion
//#region node_modules/nuxt/dist/app/components/nuxt-root.vue
var _sfc_main = {
	__name: "nuxt-root",
	__ssrInlineRender: true,
	setup(__props) {
		const nuxtApp = useNuxtApp();
		nuxtApp.deferHydration();
		nuxtApp.ssrContext.url;
		const SingleRenderer = false;
		provide(PageRouteSymbol, useRoute());
		nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
		const error = useError();
		const abortRender = error.value && !nuxtApp.ssrContext.error;
		function invokeAppErrorHandler(err, target, info) {
			const errorHandler = nuxtApp.vueApp.config.errorHandler;
			if (errorHandler && !errorHandler.__nuxt_default) try {
				errorHandler(err, target, info);
			} catch (handlerError) {
				console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
			}
		}
		onErrorCaptured((err, target, info) => {
			nuxtApp.hooks.callHook("vue:error", err, target, info)?.catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
			{
				const p = nuxtApp.runWithContext(() => showError(err));
				onServerPrefetch(() => p);
				invokeAppErrorHandler(err, target, info);
				return false;
			}
		});
		const islandContext = nuxtApp.ssrContext.islandContext;
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderSuspense(_push, {
				default: () => {
					if (unref(abortRender)) _push(`<div></div>`);
					else if (unref(error)) _push(ssrRenderComponent(unref(error_default), { error: unref(error) }, null, _parent));
					else if (unref(islandContext)) _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
					else if (unref(SingleRenderer)) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
					else _push(ssrRenderComponent(unref(app_default), null, null, _parent));
				},
				_: 1
			});
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region node_modules/nuxt/dist/app/entry.js
var entry$1 = async function createNuxtAppServer(ssrContext) {
	const vueApp = createApp(_sfc_main);
	const nuxt = createNuxtApp({
		vueApp,
		ssrContext
	});
	try {
		await applyPlugins(nuxt, virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fplugins_server_default);
		await nuxt.hooks.callHook("app:created", vueApp);
	} catch (error) {
		await nuxt.hooks.callHook("app:error", error);
		nuxt.payload.error ||= createError$1(error);
	}
	if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) throw new Error("skipping render");
	return vueApp;
};
var entry_default = ((ssrContext) => entry$1(ssrContext));

const entry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: entry_default
}, Symbol.toStringTag, { value: 'Module' }));

export { Icon_default as I, NuxtLink as N, _plugin_vue_export_helper_default as _, useHead$1 as a, useLocale as b, useRoute as c, defineNuxtRouteMiddleware as d, useState as e, useLanguageStore as f, useApi as g, entry as h, navigateTo as n, useAuthStore as u };
//# sourceMappingURL=entry.mjs.map
