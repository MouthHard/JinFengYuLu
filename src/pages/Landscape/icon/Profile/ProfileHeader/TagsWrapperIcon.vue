<template>
  <svg class="tags-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
