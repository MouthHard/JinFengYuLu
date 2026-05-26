<template>
  <svg
    viewBox="0 0 24 24"
    :fill="filled ? 'currentColor' : 'none'"
    stroke="currentColor"
    :stroke-width="strokeWidth"
  >
    <path
      d="M20.84 4.61a5 5 0 0 0-7.33 0L12 5.67l-1.51-1.06a5 5 0 0 0-7.33 7.33l1.06 1.51L12 21.35l7.76-7.76 1.06-1.51a5 5 0 0 0 0-7.33z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  strokeWidth?: number;
  filled?: boolean;
}>();
</script>
