<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'none' ? 'currentColor' : 'none'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
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
