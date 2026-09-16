<template>
  <AccordionHeader class="flex">
    <AccordionTrigger :class="cn('flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', $attrs.class as string)">
      <slot />
      <ChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from 'reka-ui'
import { ChevronDown } from '@lucide/vue'
import { cn } from '~/utils/utils'
defineOptions({ inheritAttrs: false })
</script>
