<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[9999] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="t in toasts"
          :key="t.id"
          :class="[
            'pointer-events-auto bg-white rounded-xl shadow-lg border-l-4 overflow-hidden ring-1 ring-black/5',
            variantBorder[t.variant],
          ]"
        >
          <div class="flex items-start gap-3 p-4">
            <div
              :class="[
                'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
                variantIconBg[t.variant],
              ]"
            >
              <Icon :name="variantIcon[t.variant]" class="text-white h-4 w-4" />
            </div>
            <div class="flex-1 min-w-0 pt-0.5">
              <p class="text-sm font-semibold text-ink leading-snug">{{ t.title }}</p>
              <p v-if="t.message" class="mt-1 text-xs text-muted leading-relaxed">{{ t.message }}</p>
            </div>
            <button
              type="button"
              @click="dismissToast(t.id)"
              class="flex-shrink-0 text-[#5B6B82]/60 hover:text-ink transition-colors p-1 -m-1"
              aria-label="Close"
            >
              <Icon name="x" class="h-4 w-4" />
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { toasts, dismissToast } from '~/composables/useToast'

const variantBorder: Record<string, string> = {
  success: 'border-green-500',
  error: 'border-red-500',
  info: 'border-primary',
  warning: 'border-amber-500',
}

const variantIconBg: Record<string, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-primary',
  warning: 'bg-amber-500',
}

const variantIcon: Record<string, string> = {
  success: 'check',
  error: 'x',
  info: 'info',
  warning: 'alert-triangle',
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(120%);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(120%);
}
.toast-leave-active {
  position: absolute;
  width: 100%;
}
.toast-move {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
