<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="strokeWidth">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  strokeWidth?: number;
}>(), {
  strokeWidth: 2,
});
</script>