<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="strokeWidth">
    <circle cx="12" cy="12" r="10"/>
  </svg>
</template>
<script setup lang="ts">
defineProps<{ strokeWidth?: number }>()
</script>
