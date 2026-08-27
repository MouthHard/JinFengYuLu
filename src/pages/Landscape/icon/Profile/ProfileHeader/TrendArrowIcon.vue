<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path :d="up ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'" />
            </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  up?: boolean;
}
withDefaults(defineProps<Props>(), { up: false });
</script>
