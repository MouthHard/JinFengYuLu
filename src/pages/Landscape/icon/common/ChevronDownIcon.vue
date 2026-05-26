<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="strokeWidth">
    <path d="M19 12l-7 7-7-7" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  strokeWidth?: number;
}>(), {
  strokeWidth: 2,
});
</script>
