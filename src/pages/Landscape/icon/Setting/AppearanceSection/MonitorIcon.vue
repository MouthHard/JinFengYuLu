<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'currentColor' ? 'none' : 'currentColor'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue';
interface Props { fill?: string; strokeWidth?: number | string; class?: string; style?: CSSProperties; }
withDefaults(defineProps<Props>(), { fill: 'none', strokeWidth: 2 });
</script>
