<template>
  <svg
    viewBox="0 0 24 24"
    :fill="fill"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    :class="props.class"
    :style="props.style"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3 1.4.4.4 0 0 0-.5-.4 5.2 5.2 0 0 0-5.8 3.3.4.4 0 0 1-.3.2A11.7 11.7 0 0 1 2 4.2a.4.4 0 0 0-.4.4 5.2 5.2 0 0 0 2.5 4.9.4.4 0 0 1-.2.7 5.1 5.1 0 0 1-3.2-.9.4.4 0 0 0-.5.5 5.3 5.3 0 0 0 4.5 4.2.4.4 0 0 1-.2.6 5.1 5.1 0 0 1-4.8 0 .4.4 0 0 0-.4.4 10.9 10.9 0 0 0 5.6 4.9.4.4 0 0 1 .3.3 11.5 11.5 0 0 0 6.3-.5.4.4 0 0 1 .3.1 10.9 10.9 0 0 0 5.4-5.7.4.4 0 0 1 .1-.3A11.3 11.3 0 0 0 23 3z"/>
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
