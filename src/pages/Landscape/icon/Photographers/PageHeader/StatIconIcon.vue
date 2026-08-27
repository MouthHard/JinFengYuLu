<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
