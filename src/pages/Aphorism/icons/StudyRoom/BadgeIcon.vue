<template>
  <svg viewBox="0 0 24 24" :fill="fill" stroke="currentColor" :stroke-width="strokeWidth" xmlns="http://www.w3.org/2000/svg">
    <path :d="d" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
  d: string;
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
