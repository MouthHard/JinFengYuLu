<template>
  <svg width="48" height="48" viewBox="0 0 24 24">
    <defs>
      <linearGradient
        id="statsGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(144, 238, 144, 0.9)" />
        <stop offset="50%" stop-color="rgba(135, 206, 235, 0.9)" />
        <stop offset="100%" stop-color="rgba(144, 238, 144, 0.9)" />
      </linearGradient>
      <linearGradient
        id="statsInnerGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(144, 238, 144, 0.9)" />
        <stop offset="100%" stop-color="rgba(135, 206, 235, 0.9)" />
      </linearGradient>
      <filter id="statsGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      ry="2"
      fill="rgba(255,255,255,0.15)"
      stroke="url(#statsInnerGradient)"
      stroke-width="0.6"
    />
    <rect
      x="5"
      y="14"
      width="3"
      height="4"
      rx="1"
      ry="1"
      fill="url(#statsGradient)"
    >
      <animate
        attributeName="height"
        values="4;8;4"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="14;10;14"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="9"
      y="10"
      width="3"
      height="8"
      rx="1"
      ry="1"
      fill="url(#statsGradient)"
    >
      <animate
        attributeName="height"
        values="8;12;8"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.3s"
      />
      <animate
        attributeName="y"
        values="10;6;10"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.3s"
      />
    </rect>
    <rect
      x="13"
      y="12"
      width="3"
      height="6"
      rx="1"
      ry="1"
      fill="url(#statsGradient)"
    >
      <animate
        attributeName="height"
        values="6;10;6"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.6s"
      />
      <animate
        attributeName="y"
        values="12;8;12"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.6s"
      />
    </rect>
    <rect
      x="17"
      y="8"
      width="3"
      height="10"
      rx="1"
      ry="1"
      fill="url(#statsGradient)"
    >
      <animate
        attributeName="height"
        values="10;14;10"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.9s"
      />
      <animate
        attributeName="y"
        values="8;4;8"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.9s"
      />
    </rect>
    <rect
      x="5"
      y="14"
      width="3"
      height="4"
      rx="1"
      ry="1"
      fill="none"
      stroke="url(#statsInnerGradient)"
      stroke-width="0.4"
    />
    <rect
      x="9"
      y="10"
      width="3"
      height="8"
      rx="1"
      ry="1"
      fill="none"
      stroke="url(#statsInnerGradient)"
      stroke-width="0.4"
    />
    <rect
      x="13"
      y="12"
      width="3"
      height="6"
      rx="1"
      ry="1"
      fill="none"
      stroke="url(#statsInnerGradient)"
      stroke-width="0.4"
    />
    <rect
      x="17"
      y="8"
      width="3"
      height="10"
      rx="1"
      ry="1"
      fill="none"
      stroke="url(#statsInnerGradient)"
      stroke-width="0.4"
    />
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="rgba(135, 206, 235, 0.5)"
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
      stroke="rgba(144, 238, 144, 0.4)"
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
      stroke="rgba(100, 200, 255, 0.3)"
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
      stroke="rgba(135, 206, 235, 0.25)"
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
      stroke="rgba(144, 238, 144, 0.2)"
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
defineOptions({ name: 'StatsIcon' });
</script>

<style scoped>
</style>
