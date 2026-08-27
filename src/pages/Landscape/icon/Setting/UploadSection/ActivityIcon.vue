<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'none' ? 'currentColor' : 'none'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
withDefaults(defineProps<Props>(), { fill: 'none', strokeWidth: 2 });
</script>
