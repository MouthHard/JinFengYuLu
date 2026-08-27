<template>
  <svg viewBox="0 0 24 24" fill="none" :class="props.class">
    <circle
      class="spin"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  strokeWidth?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  strokeWidth: 2,
});
</script>
