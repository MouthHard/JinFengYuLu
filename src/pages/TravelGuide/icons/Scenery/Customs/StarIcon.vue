<template>
  <svg width="48" height="48" viewBox="0 0 24 24">
    <defs>
      <linearGradient
        id="starGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(255, 165, 0, 0.9)" />
        <stop offset="50%" stop-color="rgba(255, 215, 0, 0.9)" />
        <stop offset="100%" stop-color="rgba(255, 165, 0, 0.9)" />
      </linearGradient>
      <linearGradient
        id="starInnerGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(255, 165, 0, 0.9)" />
        <stop offset="100%" stop-color="rgba(255, 215, 0, 0.9)" />
      </linearGradient>
      <filter id="starGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="url(#starGradient)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="4s"
        repeatCount="indefinite"
      />
    </polygon>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="none"
      stroke="url(#starInnerGradient)"
      stroke-width="0.6"
    >
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </polygon>
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="rgba(255, 215, 0, 0.5)"
      stroke-width="0.6"
      stroke-dasharray="2 4"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="360 12 12"
        to="0 12 12"
        dur="6s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="rgba(255, 165, 0, 0.4)"
      stroke-width="0.4"
      stroke-dasharray="1 3"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="8s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="12"
      cy="12"
      r="9.5"
      fill="none"
      stroke="rgba(255, 223, 0, 0.3)"
      stroke-width="0.3"
      stroke-dasharray="3 5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="180 12 12"
        to="-180 12 12"
        dur="10s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="12"
      cy="12"
      r="8.5"
      fill="none"
      stroke="rgba(255, 215, 0, 0.25)"
      stroke-width="1"
    >
      <animate
        attributeName="r"
        values="8.5;9.5;8.5"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.25;0.5;0.25"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="rgba(255, 165, 0, 0.2)"
      stroke-width="0.8"
    >
      <animate
        attributeName="r"
        values="8;9;8"
        dur="2.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.2;0.45;0.2"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'StarIcon' });
</script>

<style scoped>
</style>
