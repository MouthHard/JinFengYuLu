<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'currentColor' ? 'none' : 'currentColor'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue';
interface Props { fill?: string; strokeWidth?: number | string; class?: string; style?: CSSProperties; }
withDefaults(defineProps<Props>(), { fill: 'none', strokeWidth: 2 });
</script>
