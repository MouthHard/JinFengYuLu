<template>
  <svg
    viewBox="0 0 24 24"
    :fill="fill"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
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

  withDefaults(defineProps<Props>(), {
    fill: 'none',
    strokeWidth: 2,
  });
</script>
