<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="18" height="10" rx="2"/>
            <line x1="22" y1="10" x2="22" y2="14"/>
            <rect x="4" y="9" width="6" height="6" fill="currentColor" stroke="none"/>
          </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
