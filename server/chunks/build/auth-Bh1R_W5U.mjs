import { d as defineNuxtRouteMiddleware, u as useAuthStore, n as navigateTo } from '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue';
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
import 'vue/server-renderer';
import 'devalue';
import 'vue-router';
import '@vue/shared';
import 'pinia';
import '@lucide/vue';
import 'unhead/utils';

//#region app/middleware/auth.ts
var auth_default = defineNuxtRouteMiddleware((to, _from) => {
	if (!useAuthStore().isAuthenticated) return navigateTo({
		path: "/login",
		query: { redirect: to.fullPath }
	});
});

export { auth_default as default };
//# sourceMappingURL=auth-Bh1R_W5U.mjs.map
