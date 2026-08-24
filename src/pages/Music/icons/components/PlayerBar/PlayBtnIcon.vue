<template>
  <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  isPlaying?: boolean;
}
withDefaults(defineProps<Props>(), {
  isPlaying: false,
});
</script>
