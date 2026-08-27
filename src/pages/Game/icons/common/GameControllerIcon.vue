<template>
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <line x1="6" y1="10" x2="6" y2="14" />
    <line x1="10" y1="10" x2="10" y2="14" />
    <line x1="14" y1="10" x2="14" y2="14" />
    <line x1="18" y1="10" x2="18" y2="14" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
}

withDefaults(defineProps<Props>(), {
  fill: 'currentColor',
  strokeWidth: 2,
});
</script>
