<template>
  <svg viewBox="0 0 24 24" :fill="fill" :stroke="fill === 'currentColor' ? 'none' : 'currentColor'" stroke-width="3"
    stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
</template>
<script setup lang="ts">
defineProps<{ fill?: string; strokeWidth?: number }>()
</script>
