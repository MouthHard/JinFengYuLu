<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 20V10"/>
    <path d="M12 20V4"/>
    <path d="M6 20v-6"/>
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
