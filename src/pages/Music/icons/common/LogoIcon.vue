<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
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
