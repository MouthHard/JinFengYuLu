<template>
  <svg class="circuit-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path
      v-for="i in 15"
      :key="i"
      class="circuit-path"
      :d="getCircuitPath(i)"
      :style="{ animationDelay: `${i * 0.3}s` }"
    />
  </svg>
</template>

<script setup lang="ts">
  const getCircuitPath = (_index: number): string => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const midX = startX + (Math.random() * 40 - 20);
    const midY = startY + (Math.random() * 40 - 20);
    const endX = midX + (Math.random() * 40 - 20);
    const endY = midY + (Math.random() * 40 - 20);

    return `M ${startX} ${startY} L ${midX} ${midY} L ${endX} ${endY}`;
  };
</script>

<style scoped lang="scss">
  .circuit-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;

    .circuit-path {
      fill: none;
      stroke: rgba(0, 255, 200, 0.6);
      stroke-width: 0.3;
      stroke-linecap: round;
      animation: circuitFlow 3s ease-in-out infinite;
      filter: drop-shadow(0 0 2px rgba(0, 255, 200, 0.8));
    }
  }

  @keyframes circuitFlow {
    0% {
      stroke-dasharray: 0, 100;
      stroke-dashoffset: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      stroke-dasharray: 100, 0;
      stroke-dashoffset: -100;
      opacity: 0;
    }
  }
</style>
