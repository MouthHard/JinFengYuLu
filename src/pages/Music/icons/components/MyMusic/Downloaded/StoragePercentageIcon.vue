<template>
  <svg viewBox="0 0 36 36" class="circular-chart">
              <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3" />
              <path class="circle-fill" :stroke-dasharray="`${storagePercent}, 100`"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"
                stroke-width="3" stroke-linecap="round" />
            </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
  storagePercent?: number;
}
withDefaults(defineProps<Props>(), {
  storagePercent: 0,
});
</script>
