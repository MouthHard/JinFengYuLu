<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 18V5l12-3v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
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
