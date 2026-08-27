<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15s1.5-2 4-2 4 2 4 2" />
                <circle cx="12" cy="9" r="3" />
              </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
