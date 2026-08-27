<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round">
    <path d="M9 18h6M10 22h4" />
    <path
      d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26C17.81 13.47 19 11.38 19 9a7 7 0 0 0-7-7z" />
    <path d="M9 9h.01M15 9h.01" />
  </svg>
</template>

<script setup lang="ts">

withDefaults(defineProps<{ strokeWidth?: number }>(), { strokeWidth: 2 })
</script>
