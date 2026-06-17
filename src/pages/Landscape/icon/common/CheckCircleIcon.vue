<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'none' ? 'currentColor' : 'none'" stroke-width="3">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
withDefaults(defineProps<Props>(), { fill: 'currentColor', strokeWidth: 0 });
</script>
