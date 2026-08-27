<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
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
