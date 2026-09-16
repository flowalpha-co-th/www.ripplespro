import { b as notifItems, d as defaultEmailSettings, n as notifCats } from './notifications-DCWQgz_X.mjs';
import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';

//#region app/stores/notifications.ts
var useNotificationsStore = defineStore("notifications", () => {
	const items = ref(notifItems.map((n) => ({ ...n })));
	const emailSettings = reactive({ ...defaultEmailSettings });
	const digestWeekly = ref(true);
	const unreadCount = computed(() => items.value.filter((n) => !n.read).length);
	const latest = computed(() => items.value.slice(0, 5));
	function unreadByCategory(cat) {
		return items.value.filter((n) => n.cat === cat && !n.read).length;
	}
	function countByCategory(cat) {
		return items.value.filter((n) => n.cat === cat).length;
	}
	function markRead(id) {
		const n = items.value.find((x) => x.id === id);
		if (n) n.read = true;
	}
	function markAllRead() {
		items.value.forEach((n) => {
			n.read = true;
		});
	}
	function setEmail(cat, on) {
		if (notifCats[cat]?.locked) return;
		emailSettings[cat] = on;
	}
	function toggleEmail(cat) {
		setEmail(cat, !emailSettings[cat]);
	}
	return {
		items,
		emailSettings,
		digestWeekly,
		unreadCount,
		latest,
		unreadByCategory,
		countByCategory,
		markRead,
		markAllRead,
		setEmail,
		toggleEmail
	};
});

export { useNotificationsStore as u };
//# sourceMappingURL=notifications-8TgrgI_R.mjs.map
