<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  strokeWidth?: number;
}>(), {
  strokeWidth: 2,
});
</script>
