<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <component :is="feature.icon" />
            </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  feature?: { icon?: unknown };
}
withDefaults(defineProps<Props>(), {
  feature: () => ({ icon: undefined }),
});
</script>
