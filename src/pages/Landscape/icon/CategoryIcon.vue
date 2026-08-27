<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'currentColor' ? 'none' : 'currentColor'" stroke-width="3">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
</template>
<script setup lang="ts">
defineProps<{ fill?: string; strokeWidth?: number }>()
</script>
