<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="strokeWidth">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  strokeWidth?: number;
}>();
</script>
