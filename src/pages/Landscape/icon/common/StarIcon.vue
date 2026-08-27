<template>
  <svg
    viewBox="0 0 24 24"
    :fill="fill"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    :class="props.class"
    :style="props.style"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
interface Props {
  fill?: string
  strokeWidth?: number | string
  class?: string
  style?: CSSProperties
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'currentColor',
  strokeWidth: 0
})
</script>
