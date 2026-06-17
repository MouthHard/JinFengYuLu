<template>
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    <line x1="9" y1="2" x2="9" y2="4"/>
    <line x1="15" y1="2" x2="15" y2="4"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
}

withDefaults(defineProps<Props>(), {
  fill: 'none',
  strokeWidth: 2,
});
</script>
