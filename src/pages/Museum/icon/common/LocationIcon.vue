<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    :class="className"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: '',
});
</script>
