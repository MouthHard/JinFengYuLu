<template>
  <svg
    viewBox="0 0 24 24"
    :fill="filled ? 'currentColor' : 'none'"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    :class="props.class"
    :style="props.style"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
interface Props {
  strokeWidth?: number | string
  filled?: boolean
  class?: string
  style?: CSSProperties
}

const props = withDefaults(defineProps<Props>(), {
  strokeWidth: 2,
  filled: false
})
</script>
