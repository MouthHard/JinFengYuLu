<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="7" r="4"/>
    <path d="M5.5 21.7c0-2.2 1.4-4 3.3-4.7 1.2-.5 2.3-.4 3.2.2 1 .6 1.8 1.5 2.5 2.5.7-.9 1.5-2 2.5-2.5.9-.6 2-.7 3.2-.2 1.9.7 3.3 2.5 3.3 4.7"/>
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
  style?: CSSProperties;
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'none',
  strokeWidth: 2,
});
</script>
