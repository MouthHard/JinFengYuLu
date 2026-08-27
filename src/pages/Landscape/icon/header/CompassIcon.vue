<template>
  <svg
    viewBox="0 0 24 24"
    :fill="fill"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    :class="props.class"
    :style="props.style"
  >
    <path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.24 7.76 14 14l-6.24 2.24L10 10l6.24-2.24Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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
  fill: 'none',
  strokeWidth: 2
})
</script>
