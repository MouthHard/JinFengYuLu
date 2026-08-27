<template>
  <svg class="pie-chart" viewBox="0 0 100 100">
            <circle v-for="(segment, index) in pieSegments" :key="index" class="pie-segment" cx="50" cy="50" r="40"
              :stroke="segment.color" :stroke-dasharray="segment.dashArray" :stroke-dashoffset="segment.dashOffset"
              fill="none" stroke-width="20" :style="{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }" />
          </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  pieSegments?: { color: string; dashArray: string; dashOffset: string }[];
}
withDefaults(defineProps<Props>(), {
  pieSegments: () => [],
});
</script>
