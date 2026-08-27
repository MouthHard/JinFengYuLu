<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="strokeWidth">
    <polyline points="20 6 9 17 4 12" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  strokeWidth?: number;
}>(), {
  strokeWidth: 2,
});
</script>