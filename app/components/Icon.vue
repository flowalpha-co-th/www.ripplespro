<script setup lang="ts">
import { icons } from 'lucide-vue-next'

/** Dynamic Lucide icon. Accepts kebab-case names (e.g. "layout-dashboard")
 *  matching the design markup, or PascalCase. Size is set via class (h-5 w-5). */
const props = defineProps<{ name: string }>()

/** Deprecated Lucide names → current names. The old icons were removed in
 *  newer lucide-vue-next, so without these they silently fall back to Circle. */
const aliases: Record<string, string> = {
  'check-circle': 'CircleCheck',
  'alert-circle': 'CircleAlert',
  'alert-triangle': 'TriangleAlert',
  'help-circle': 'CircleHelp',
  'file-signature': 'FilePen',
  'check-square': 'SquareCheckBig',
  'x-circle': 'CircleX',
  'check': 'Check',
  'x-mark': 'X'
}

function toPascal(n: string) {
  return n
    .split(/[-_\s]/)
    .filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

const comp = computed(() => {
  const key = (aliases[props.name] ?? toPascal(props.name)) as keyof typeof icons
  return icons[key] ?? icons.Circle
})
</script>

<template>
  <component :is="comp" />
</template>
