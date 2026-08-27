<template>
  <svg
    width="64"
    height="64"
    viewBox="0 0 16 16"
  >
    <defs>
      <linearGradient
        id="iconGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(255, 165, 0, 0.8)" />
        <stop offset="50%" stop-color="rgba(144, 238, 144, 0.8)" />
        <stop offset="100%" stop-color="rgba(255, 215, 0, 0.8)" />
      </linearGradient>
      <linearGradient
        id="iconInnerGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(255, 165, 0, 0.8)" />
        <stop offset="100%" stop-color="rgba(144, 238, 144, 0.8)" />
      </linearGradient>
      <filter id="iconGlow">
        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect
      x="3"
      y="4"
      width="10"
      height="7"
      rx="1.5"
      ry="1.5"
      fill="rgba(255,255,255,0.1)"
      stroke="url(#iconInnerGradient)"
      stroke-width="0.5"
    />

    <circle
      cx="8"
      cy="7.5"
      r="2.5"
      fill="rgba(255,255,255,0.1)"
      stroke="url(#iconInnerGradient)"
      stroke-width="0.8"
    />
    <circle cx="8" cy="7.5" r="1.5" fill="url(#iconGradient)" />
    <circle cx="8" cy="7.5" r="0.7" fill="rgba(255,255,255,0.3)" />

    <rect
      x="5"
      y="2.5"
      width="6"
      height="1.5"
      rx="0.5"
      ry="0.5"
      fill="rgba(255,255,255,0.1)"
      stroke="url(#iconInnerGradient)"
      stroke-width="0.5"
    />

    <rect
      x="11"
      y="4.5"
      width="1.5"
      height="1.5"
      rx="0.3"
      ry="0.3"
      fill="url(#iconGradient)"
    />
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 8 8"
      to="360 8 8"
      dur="20s"
      repeatCount="indefinite"
    />
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: "GalleryPanelIcon" });
</script>

<style scoped>
</style>
