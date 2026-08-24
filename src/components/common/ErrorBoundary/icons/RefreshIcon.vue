<template>
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.006L15.707 6.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 1.414l-.707.707A5.002 5.002 0 005 10a5 5 0 0010 0 1 1 0 112 0 7 7 0 01-11 6.325V17a1 1 0 01-2 0V3a1 1 0 011-1z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
