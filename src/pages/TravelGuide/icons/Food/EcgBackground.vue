<template>
  <svg
    class="ecg-svg"
    width="100%"
    height="100%"
    viewBox="0 0 200 50"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient
        id="ecgGrad"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop
          offset="0%"
          style="stop-color: rgba(0, 255, 128, 0)"
        />
        <stop
          offset="20%"
          style="stop-color: rgba(0, 255, 128, 0.8)"
        />
        <stop
          offset="50%"
          style="stop-color: rgba(0, 255, 128, 1)"
        />
        <stop
          offset="80%"
          style="stop-color: rgba(0, 255, 128, 0.8)"
        />
        <stop
          offset="100%"
          style="stop-color: rgba(0, 255, 128, 0)"
        />
      </linearGradient>
      <filter id="ecgGlow">
        <feGaussianBlur
          stdDeviation="1.5"
          result="coloredBlur"
        />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M0,25 L20,25 L25,20 L30,30 L35,25 L40,25 L45,10 L50,40 L55,25 L60,25 L65,20 L70,30 L75,25 L100,25 L105,20 L110,30 L115,25 L120,25 L125,10 L130,40 L135,25 L140,25 L145,20 L150,30 L155,25 L200,25"
      fill="none"
      stroke="url(#ecgGrad)"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="200"
      stroke-dashoffset="200"
      filter="url(#ecgGlow)"
    />
  </svg>
</template>

<script setup lang="ts">
  // 可复用的心电图背景组?
</script>

<style scoped>
  .ecg-svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    pointer-events: none;
    opacity: 0.6;
  }

  .ecg-svg path {
    animation: ecgWave 1.5s ease-in-out infinite;
  }

  @keyframes ecgWave {
    0%, 100% {
      stroke-dashoffset: 200;
      stroke-opacity: 0.6;
    }
    50% {
      stroke-dashoffset: 0;
      stroke-opacity: 1;
    }
  }
</style>