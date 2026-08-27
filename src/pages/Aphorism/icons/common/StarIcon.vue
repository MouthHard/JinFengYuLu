<template>
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    :class="computedClass"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'currentColor',
  strokeWidth: 2,
  class: '',
});

const computedClass = computed(() => props.class);
</script>
