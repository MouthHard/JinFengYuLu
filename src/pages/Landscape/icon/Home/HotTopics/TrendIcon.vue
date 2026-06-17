<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
    <path d="M3 20l5.5-11L14 15l3-6 4 11" />
    <circle :cx="dotCx" :cy="dotCy" :r="dotRadius" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  strokeWidth?: number;
  dotCx?: number;
  dotCy?: number;
  dotRadius?: number;
}>(), {
  strokeWidth: 2,
  dotCx: 8.5,
  dotCy: 9,
  dotRadius: 0,
});
</script>
