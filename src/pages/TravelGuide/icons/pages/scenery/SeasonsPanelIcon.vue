<template>
  <svg width="48" height="48" viewBox="0 0 24 24">
    <defs>
      <linearGradient
        id="seasonGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(255, 182, 193, 0.9)" />
        <stop offset="50%" stop-color="rgba(255, 160, 122, 0.9)" />
        <stop offset="100%" stop-color="rgba(255, 182, 193, 0.9)" />
      </linearGradient>
      <linearGradient
        id="seasonInnerGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(255, 182, 193, 0.9)" />
        <stop offset="100%" stop-color="rgba(255, 160, 122, 0.9)" />
      </linearGradient>
      <filter id="seasonGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <circle
      cx="12"
      cy="12"
      r="5"
      fill="rgba(255,255,255,0.15)"
      stroke="url(#seasonInnerGradient)"
      stroke-width="0.6"
    >
      <animate
        attributeName="r"
        values="5;6;5"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="12" cy="12" r="3" fill="url(#seasonGradient)">
      <animate
        attributeName="r"
        values="3;4;3"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>

    <polygon
      points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
      fill="url(#seasonGradient)"
      opacity="0.8"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="8s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.8;0.4;0.8"
        dur="2s"
        repeatCount="indefinite"
      />
    </polygon>

    <polygon
      points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
      fill="url(#seasonInnerGradient)"
      opacity="0.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="45 12 12"
        to="405 12 12"
        dur="8s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.5;0.2;0.5"
        dur="2s"
        repeatCount="indefinite"
        begin="0.5s"
      />
    </polygon>

    <polygon
      points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
      fill="url(#seasonGradient)"
      opacity="0.8"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="90 12 12"
        to="450 12 12"
        dur="8s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.8;0.4;0.8"
        dur="2s"
        repeatCount="indefinite"
        begin="1s"
      />
    </polygon>

    <polygon
      points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
      fill="url(#seasonInnerGradient)"
      opacity="0.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="135 12 12"
        to="495 12 12"
        dur="8s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.5;0.2;0.5"
        dur="2s"
        repeatCount="indefinite"
        begin="1.5s"
      />
    </polygon>

    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="rgba(255, 182, 193, 0.5)"
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
      stroke="rgba(255, 160, 122, 0.4)"
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
      stroke="rgba(221, 160, 221, 0.3)"
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
      stroke="rgba(255, 182, 193, 0.25)"
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
      stroke="rgba(221, 160, 221, 0.2)"
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
defineOptions({ name: 'SeasonsPanelIcon' });
</script>

<style scoped>
</style>
