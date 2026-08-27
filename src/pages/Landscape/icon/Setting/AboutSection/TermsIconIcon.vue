<template>
  <svg :viewBox="item.iconViewBox" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="item.iconPath" />
              </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  item?: { iconViewBox?: string; iconPath?: string };
}
withDefaults(defineProps<Props>(), {
  item: () => ({ iconViewBox: '0 0 24 24', iconPath: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 14 8 20 8 M16 13l-8 0 M16 17l-8 0 M10 9 9 9 8 9' }),
});
</script>
