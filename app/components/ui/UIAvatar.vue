<template>
  <div 
    :class="cn('relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100', $attrs.class as string)" 
    v-bind="omitClass($attrs)"
  >
    <img 
      v-if="src && !isError" 
      :src="src" 
      :alt="alt || ''" 
      class="h-full w-full object-cover" 
      @error="isError = true"
    />
    <span 
      v-else-if="initials" 
      :class="cn('text-md font-medium uppercase h-full w-full rounded-full flex items-center justify-center text-primary bg-primary/10 border border-primary/20', fallbackClass)"
    >
      {{ initials }}
    </span>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { cn } from '~/utils/utils'

defineOptions({ inheritAttrs: false })

interface Props {
  src?: string | null
  alt?: string | null
  fallbackClass?: string
}

const props = defineProps<Props>()
const isError = ref(false)

watch(() => props.src, () => {
  isError.value = false
})

const initials = computed(() => {
  if (!props.alt) return ''
  const words = props.alt.split(/[\s-_]+/).filter(Boolean)
  if (words.length === 0) return ''
  if (words.length === 1) return (words[0] as string).slice(0, 2)
  return (words[0] as string).charAt(0) + (words[words.length - 1] as string).charAt(0)
})

function omitClass(attrs: Record<string, unknown>) { 
  const { class: _, ...rest } = attrs
  return rest 
}
</script>
