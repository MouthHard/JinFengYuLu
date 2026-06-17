<template>
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M8 4l-2 2"/>
    <path d="M16 4l2 2"/>
    <path d="M12 2v2"/>
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
