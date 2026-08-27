<template>
  <svg class="error-boundary__icon" viewBox="0 0 100 100" fill="none">
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="url(#outerGlow)"
      stroke-width="2"
      opacity="0.3"
    >
      <animate
        attributeName="opacity"
        values="0.3;0.6;0.3"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="50"
      cy="50"
      r="38"
      stroke="url(#ringGrad)"
      stroke-width="0.5"
      opacity="0.4"
    />
    <circle
      cx="50"
      cy="50"
      r="32"
      stroke="url(#ringGrad)"
      stroke-width="0.5"
      opacity="0.2"
      stroke-dasharray="4 6"
    />
    <path
      d="M50 28v24"
      stroke="url(#alertGrad)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle cx="50" cy="56" r="2" fill="url(#alertGrad)">
      <animate
        attributeName="r"
        values="2;2.5;2"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="1;0.7;1"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="50"
      cy="40"
      r="8"
      stroke="url(#alertGrad)"
      stroke-width="0.5"
      opacity="0"
    >
      <animate
        attributeName="r"
        values="8;16;8"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.5;0;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <defs>
      <linearGradient id="ringGrad" x1="4" y1="4" x2="96" y2="96">
        <stop offset="0%" stop-color="#42e5f8" />
        <stop offset="50%" stop-color="#818cf8" />
        <stop offset="100%" stop-color="#a855f7" />
      </linearGradient>
      <linearGradient id="alertGrad" x1="48" y1="28" x2="52" y2="58">
        <stop offset="0%" stop-color="#42e5f8" />
        <stop offset="100%" stop-color="#818cf8" />
      </linearGradient>
      <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#42e5f8" />
        <stop offset="100%" stop-color="#a855f7" />
      </radialGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
