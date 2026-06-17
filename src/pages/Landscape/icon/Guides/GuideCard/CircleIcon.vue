<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'currentColor' ? 'none' : 'currentColor'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  fill?: string;
  strokeWidth?: number;
}>()
</script>
