<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'currentColor' ? 'none' : 'currentColor'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue';
interface Props { fill?: string; strokeWidth?: number | string; class?: string; style?: CSSProperties; }
withDefaults(defineProps<Props>(), { fill: 'none', strokeWidth: 2 });
</script>
