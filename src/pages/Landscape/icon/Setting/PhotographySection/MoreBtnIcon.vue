<template>
  <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
              :class="{ rotated: showMore }"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  showMore?: boolean;
}
defineProps<Props>();
</script>
