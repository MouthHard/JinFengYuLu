<template>
  <svg viewBox="0 0 24 24" :fill="fill" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15" />
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

withDefaults(defineProps<Props>(), {
  fill: 'none',
  strokeWidth: 2,
});
</script>
