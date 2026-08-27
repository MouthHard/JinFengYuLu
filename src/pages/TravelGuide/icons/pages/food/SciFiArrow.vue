<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="sci-fi-arrow"
  >
    <defs>
      <linearGradient
        id="mainArrowGrad"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop
          offset="0%"
          style="stop-color: #00ff88; stop-opacity: 1"
        />
        <stop
          offset="40%"
          style="stop-color: #00cc6a; stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: #00994d; stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient
        id="sideArrowGrad"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop
          offset="0%"
          style="stop-color: #00ff88; stop-opacity: 0.7"
        />
        <stop
          offset="100%"
          style="stop-color: #00cc6a; stop-opacity: 0.2"
        />
      </linearGradient>
    </defs>
    <filter id="neonGlow">
      <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="depthShadow">
      <feDropShadow
        dx="0"
        dy="2"
        stdDeviation="2"
        flood-color="#000"
        flood-opacity="0.5"
      />
    </filter>
    <g filter="url(#depthShadow)">
      <polygon
        points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
        fill="url(#mainArrowGrad)"
        filter="url(#neonGlow)"
      />
      <polygon
        points="12,5 5,12 9,12 9,17 15,17 15,12 19,12"
        fill="url(#sideArrowGrad)"
        opacity="0.6"
      />
      <polygon
        points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
        fill="none"
        stroke="#00ff88"
        stroke-width="0.5"
        stroke-opacity="0.8"
      />
      <rect
        x="11"
        y="18"
        width="2"
        height="3"
        fill="url(#mainArrowGrad)"
        rx="0.5"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
  // 可复用的科幻风格箭头组件
</script>

<style scoped>
  .sci-fi-arrow {
    transition: transform 0.3s ease;
  }
</style>