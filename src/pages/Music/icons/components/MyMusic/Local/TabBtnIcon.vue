<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path :d="tab.icon" />
        </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  tab?: { icon?: string };
}
withDefaults(defineProps<Props>(), {
  tab: () => ({ icon: '' }),
});
</script>
