<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="16" rx="5" ry="3" />
    <path d="M8 9c0-2.5 1.8-4 4-4s4 1.5 4 4c0 1.5-.8 2.5-2 3h-4c-1.2-.5-2-1.5-2-3z" />
    <path d="M4 14c1-1 2.5-1.5 4-1.5M20 14c-1-1-2.5-1.5-4-1.5" />
  </svg>
</template>

<script setup lang="ts">

withDefaults(defineProps<{ strokeWidth?: number }>(), { strokeWidth: 2 })
</script>
