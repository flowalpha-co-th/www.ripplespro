<template>
  <CheckboxRoot
    v-bind="props"
    :class="cn('peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground', $attrs.class as string)"
    @update:checked="emit('update:checked', $event)"
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="h-4 w-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import { Check } from '@lucide/vue'
import { cn } from '~/utils/utils'

const props = defineProps<{
  checked?: boolean | 'indeterminate'
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
}>()

const emit = defineEmits<{ (e: 'update:checked', value: boolean): void }>()
defineOptions({ inheritAttrs: false })
</script>
