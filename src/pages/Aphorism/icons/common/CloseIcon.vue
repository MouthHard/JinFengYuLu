<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="strokeWidth" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  strokeWidth?: number | string;
}

withDefaults(defineProps<Props>(), {
  strokeWidth: 2,
});
</script>
