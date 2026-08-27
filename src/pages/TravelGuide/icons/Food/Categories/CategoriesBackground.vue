<template>
  <svg
    class="particles-svg"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 1000 1000"
  >
    <defs>
      <filter
        id="starGlow"
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
      >
        <feGaussianBlur stdDeviation="12" result="blur1" />
        <feComposite
          in="SourceGraphic"
          in2="blur1"
          operator="over"
          result="glow1"
        />
        <!-- 更强烈的外层模糊 -->
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="20"
          result="blur2"
        />
        <feComposite in="glow1" in2="blur2" operator="over" />
      </filter>

      <!-- 粒子浮动动画 -->
      <animateTransform
        id="float1"
        attributeName="transform"
        type="translate"
        values="0 0; 50 50; 100 100; 50 150; 0 0"
        dur="15s"
        repeatCount="indefinite"
      />
      <animateTransform
        id="float2"
        attributeName="transform"
        type="translate"
        values="0 0; 30 30; 60 60; 30 90; 0 0"
        dur="12s"
        repeatCount="indefinite"
        begin="1s"
      />
      <animateTransform
        id="float3"
        attributeName="transform"
        type="translate"
        values="0 0; 70 70; 140 140; 70 210; 0 0"
        dur="18s"
        repeatCount="indefinite"
        begin="2s"
      />

      <!-- 粒子透明度动?-->
      <animate
        id="fade1"
        attributeName="opacity"
        values="0.4; 0.6; 0.4"
        dur="4s"
        repeatCount="indefinite"
      />
      <animate
        id="fade2"
        attributeName="opacity"
        values="0.3; 0.5; 0.3"
        dur="3s"
        repeatCount="indefinite"
        begin="0.5s"
      />
      <animate
        id="fade3"
        attributeName="opacity"
        values="0.2; 0.4; 0.2"
        dur="5s"
        repeatCount="indefinite"
        begin="1s"
      />
    </defs>

    <!-- 背景径向渐变 -->
    <circle cx="500" cy="500" r="500" fill="url(#bgGradient)" />
    <defs>
      <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(0, 255, 255, 0.02)" />
        <stop offset="50%" stop-color="rgba(255, 0, 127, 0.02)" />
        <stop offset="100%" stop-color="transparent" />
      </radialGradient>
    </defs>

    <!-- 粒子定义 -->
    <defs>
      <circle id="particle" cx="0" cy="0" r="1" />
    </defs>

    <!-- 动态生成的随机粒子 -->
    <g v-for="particle in particles" :key="particle.id">
      <circle
        :cx="particle.x"
        :cy="particle.y"
        r="2.5"
        :fill="particle.color"
        :opacity="particle.opacity"
        filter="url(#starGlow)"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          :values="particle.animationValues"
          :dur="particle.animationDuration"
          repeatCount="indefinite"
          :begin="particle.animationDelay"
        />
        <animate
          attributeName="opacity"
          :values="particle.opacityValues"
          :dur="particle.fadeDuration"
          repeatCount="indefinite"
          :begin="particle.fadeDelay"
        />
      </circle>
    </g>
  </svg>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Particle {
    id: number;
    x: number;
    y: number;
    color: string;
    opacity: number;
    animationValues: string;
    animationDuration: string;
    animationDelay: string;
    opacityValues: string;
    fadeDuration: string;
    fadeDelay: string;
  }

  const PARTICLE_COLORS = [
    'rgba(0, 255, 255, 0.8)',
    'rgba(255, 0, 127, 0.8)',
    'rgba(255, 255, 100, 0.8)',
    'rgba(0, 255, 127, 0.8)',
    'rgba(128, 0, 255, 0.8)',
  ];

  const PARTICLE_COUNT = 100;

  const particles = computed<Particle[]>(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const x = Math.random() * 1000;
      const y = Math.random() * 1000;
      const color =
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const opacity = Math.random() * 0.5 + 0.4;
      const animationDuration = Math.random() * 10 + 15;
      const animationDelay = Math.random() * 3;
      const fadeDuration = Math.random() * 3 + 1;
      const fadeDelay = Math.random() * 2;

      const dx1 = Math.random() * 30 + 10;
      const dy1 = Math.random() * 30 + 10;
      const dx2 = Math.random() * 60 + 20;
      const dy2 = Math.random() * 60 + 20;
      const dx3 = Math.random() * 90 + 30;
      const dy3 = Math.random() * 90 + 30;

      return {
        id: i,
        x,
        y,
        color,
        opacity,
        animationValues: `0 0; ${dx1} ${dy1}; ${dx2} ${dy2}; ${dx3} ${dy3}; 0 0`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
        opacityValues: `${opacity}; ${opacity + 0.5}; ${opacity}; ${opacity + 0.3}; ${opacity}`,
        fadeDuration: `${fadeDuration}s`,
        fadeDelay: `${fadeDelay}s`,
      };
    });
  });
</script>

<style scoped lang="scss">
  .particles-svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
