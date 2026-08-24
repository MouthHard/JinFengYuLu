<template>
  <svg
      class="star-background"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="nebula1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(94, 234, 212, 0.12)" />
          <stop offset="100%" stop-color="rgba(94, 234, 212, 0)" />
        </radialGradient>
        <radialGradient id="nebula2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(147, 197, 253, 0.12)" />
          <stop offset="100%" stop-color="rgba(147, 197, 253, 0)" />
        </radialGradient>
        <radialGradient id="nebula3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(196, 181, 253, 0.12)" />
          <stop offset="100%" stop-color="rgba(196, 181, 253, 0)" />
        </radialGradient>
        <radialGradient id="nebula4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(251, 191, 36, 0.08)" />
          <stop offset="100%" stop-color="rgba(251, 191, 36, 0)" />
        </radialGradient>
        <radialGradient id="nebula5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(52, 211, 153, 0.12)" />
          <stop offset="100%" stop-color="rgba(52, 211, 153, 0)" />
        </radialGradient>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
        </radialGradient>

        <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
        <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="#0a0a0f" />

      <rect width="100%" height="100%" fill="url(#bgGradient)" opacity="0.5" />
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="50%" stop-color="#0a0e1a" />
        <stop offset="100%" stop-color="#0f1629" />
      </linearGradient>

      <g class="nebulae">
        <ellipse
          v-for="nebula in nebulae"
          :key="nebula.id"
          :cx="nebula.x"
          :cy="nebula.y"
          :rx="nebula.rx"
          :ry="nebula.ry"
          :fill="`url(#${nebula.gradient})`"
          :filter="nebula.blur"
          class="nebula"
          :style="{
            transformOrigin: `${nebula.x}px ${nebula.y}px`,
            animationDelay: `${nebula.delay}s`,
            animationDuration: `${nebula.duration}s`,
          }"
        />
      </g>

      <g class="stars">
        <circle
          v-for="star in stars"
          :key="`star-${star.id}`"
          :cx="star.x"
          :cy="star.y"
          :r="star.size"
          fill="rgba(255, 255, 255, 0.9)"
          class="star"
          :style="{
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }"
        />

        <circle
          v-for="star in brightStars"
          :key="`glow-${star.id}`"
          :cx="star.x"
          :cy="star.y"
          :r="star.size * 4"
          fill="url(#starGlow)"
          class="star-glow"
          :style="{
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }"
        />
      </g>
    </svg>
</template>

<script setup lang="ts">
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Nebula {
  id: number;
  x: number;
  y: number;
  rx: number;
  ry: number;
  gradient: string;
  blur: string;
  delay: number;
  duration: number;
}

interface Props {
  class?: string;
  stars?: Star[];
  brightStars?: Star[];
  nebulae?: Nebula[];
}
defineProps<Props>();
</script>
