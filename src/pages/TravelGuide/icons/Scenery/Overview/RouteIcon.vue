<template>
  <svg width="48" height="48" viewBox="0 0 24 24">
    <defs>
      <linearGradient
        id="routeGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(100, 200, 255, 0.9)" />
        <stop offset="50%" stop-color="rgba(150, 220, 255, 0.9)" />
        <stop offset="100%" stop-color="rgba(100, 200, 255, 0.9)" />
      </linearGradient>
      <linearGradient
        id="routeInnerGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(100, 200, 255, 0.9)" />
        <stop offset="100%" stop-color="rgba(150, 220, 255, 0.9)" />
      </linearGradient>
      <filter id="routeGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect
      x="2"
      y="3"
      width="20"
      height="16"
      rx="2"
      ry="2"
      fill="rgba(255,255,255,0.15)"
      stroke="url(#routeInnerGradient)"
      stroke-width="0.6"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.6;1;0.6"
        dur="3s"
        repeatCount="indefinite"
      />
    </rect>
    <g stroke="rgba(100, 200, 255, 0.3)" stroke-width="0.3">
      <line x1="2" y1="7" x2="22" y2="7">
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="2" y1="11" x2="22" y2="11">
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </line>
      <line x1="2" y1="15" x2="22" y2="15">
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </line>
      <line x1="6" y1="3" x2="6" y2="19">
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </line>
      <line x1="12" y1="3" x2="12" y2="19">
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
          begin="0.8s"
        />
      </line>
      <line x1="18" y1="3" x2="18" y2="19">
        <animate
          attributeName="opacity"
          values="0.2;0.5;0.2"
          dur="2s"
          repeatCount="indefinite"
          begin="1.3s"
        />
      </line>
    </g>
    <path
      d="M5 15 Q8 12 10 10 T15 7 T19 5"
      fill="none"
      stroke="url(#routeGradient)"
      stroke-width="1.2"
      stroke-linecap="round"
    >
      <animate
        attributeName="stroke-dasharray"
        values="0,100;100,0;0,100"
        dur="4s"
        repeatCount="indefinite"
      />
    </path>

    <g>
      <circle cx="5" cy="15" r="1.5" fill="url(#routeGradient)">
        <animate
          attributeName="r"
          values="1.5;2.2;1.5"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="5"
        cy="15"
        r="2.5"
        fill="none"
        stroke="rgba(100, 200, 255, 0.4)"
        stroke-width="0.5"
      >
        <animate
          attributeName="r"
          values="2.5;3.5;2.5"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
    <g>
      <circle cx="10" cy="10" r="1.5" fill="url(#routeGradient)">
        <animate
          attributeName="r"
          values="1.5;2.2;1.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </circle>
      <circle
        cx="10"
        cy="10"
        r="2.5"
        fill="none"
        stroke="rgba(100, 200, 255, 0.4)"
        stroke-width="0.5"
      >
        <animate
          attributeName="r"
          values="2.5;3.5;2.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </circle>
    </g>
    <g>
      <circle cx="15" cy="7" r="1.5" fill="url(#routeGradient)">
        <animate
          attributeName="r"
          values="1.5;2.2;1.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
      <circle
        cx="15"
        cy="7"
        r="2.5"
        fill="none"
        stroke="rgba(100, 200, 255, 0.4)"
        stroke-width="0.5"
      >
        <animate
          attributeName="r"
          values="2.5;3.5;2.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1s"
        />
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
    </g>
    <g>
      <circle cx="19" cy="5" r="1.5" fill="url(#routeGradient)">
        <animate
          attributeName="r"
          values="1.5;2.2;1.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1.5s"
        />
      </circle>
      <circle
        cx="19"
        cy="5"
        r="2.5"
        fill="none"
        stroke="rgba(100, 200, 255, 0.4)"
        stroke-width="0.5"
      >
        <animate
          attributeName="r"
          values="2.5;3.5;2.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1.5s"
        />
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1.5s"
        />
      </circle>
    </g>
    <circle cx="5" cy="15" r="0.8" fill="rgba(255, 255, 255, 0.9)">
      <animate
        attributeName="cx"
        values="5;10;15;19"
        dur="4s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values="15;10;7;5"
        dur="4s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="1;0.8;1;0.8;1"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: "RouteIcon" });
</script>

<style scoped>
</style>
