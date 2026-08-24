<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <component :is="method.icon" />
              </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  method?: { icon?: unknown };
}
withDefaults(defineProps<Props>(), {
  method: () => ({ icon: undefined }),
});
</script>
