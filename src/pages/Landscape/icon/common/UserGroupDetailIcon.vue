<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'none' ? 'currentColor' : 'none'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 15s1.5-2 4-2 4 2 4 2" />
    <circle cx="12" cy="9" r="3" />
    <circle cx="12" cy="12" r="10" />
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
