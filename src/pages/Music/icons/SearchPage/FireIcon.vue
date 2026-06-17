<template>
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.06 1.96-5.67 4.78-6.88.26-.11.54-.01.68.22.14.23.08.53-.13.7C6.74 9.95 6 11.47 6 13c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.53-.74-3.05-2.33-3.96-.21-.17-.27-.47-.13-.7.14-.23.42-.33.68-.22C19.04 9.33 21 11.94 21 15c0 4.42-4.03 8-9 8zm0-18c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1z"/>
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
  style?: CSSProperties;
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'currentColor',
  strokeWidth: 2,
});
</script>
