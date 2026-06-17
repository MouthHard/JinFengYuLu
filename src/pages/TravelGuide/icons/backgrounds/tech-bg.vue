<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 800">
  <!-- 背景渐变 -->
  <defs>
    <!-- 星空渐变 -->
    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0e17" />
      <stop offset="50%" stop-color="#1a1f30" />
      <stop offset="100%" stop-color="#0a0e17" />
    </linearGradient>

    <!-- 光晕滤镜 -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- 网格图案 -->
    <pattern id="gridPattern" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,255,255,0.1)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- 背景 -->
  <rect width="100%" height="100%" fill="url(#starGradient)" />

  <!-- 网格背景 -->
  <rect width="100%" height="100%" fill="url(#gridPattern)" />

  <!-- 星星 -->
  <g id="stars">
    <!-- 闪烁星星 -->
    <circle cx="50" cy="100" r="2" fill="#ffffff" opacity="0.8">
      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="150" r="1.5" fill="#ffffff" opacity="0.6">
      <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="80" r="2.5" fill="#ffffff" opacity="0.9">
      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="350" cy="120" r="1" fill="#ffffff" opacity="0.5">
      <animate attributeName="opacity" values="0.05;0.5;0.05" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="80" cy="200" r="1.8" fill="#ffffff" opacity="0.7">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="250" r="2.2" fill="#ffffff" opacity="0.8">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="320" cy="180" r="1.2" fill="#ffffff" opacity="0.6">
      <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="300" r="1.6" fill="#ffffff" opacity="0.7">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="280" cy="320" r="1.4" fill="#ffffff" opacity="0.5">
      <animate attributeName="opacity" values="0.05;0.5;0.05" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="380" r="2" fill="#ffffff" opacity="0.8">
      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="180" cy="400" r="1.8" fill="#ffffff" opacity="0.7">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="240" cy="450" r="2.2" fill="#ffffff" opacity="0.9">
      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="360" cy="420" r="1.5" fill="#ffffff" opacity="0.6">
      <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="500" r="1.2" fill="#ffffff" opacity="0.5">
      <animate attributeName="opacity" values="0.05;0.5;0.05" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="220" cy="550" r="2" fill="#ffffff" opacity="0.8">
      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="300" cy="580" r="1.6" fill="#ffffff" opacity="0.7">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="40" cy="620" r="1.8" fill="#ffffff" opacity="0.7">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="160" cy="650" r="2.2" fill="#ffffff" opacity="0.9">
      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="280" cy="680" r="1.4" fill="#ffffff" opacity="0.6">
      <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="340" cy="700" r="1.2" fill="#ffffff" opacity="0.5">
      <animate attributeName="opacity" values="0.05;0.5;0.05" dur="3.5s" repeatCount="indefinite" />
    </circle>
  </g>

  <!-- 天文元素 -->
  <g id="astronomy">
    <!-- 星座连线 -->
    <path d="M 50 100 L 80 150 L 120 130 L 150 180" fill="none" stroke="rgba(0,255,255,0.3)" stroke-width="1">
      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" />
    </path>
    <path d="M 200 200 L 230 250 L 260 220 L 290 270" fill="none" stroke="rgba(255,0,255,0.3)" stroke-width="1">
      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
    </path>

    <!-- 行星 -->
    <circle cx="300" cy="300" r="10" fill="#00ffff" opacity="0.2" filter="url(#glow)">
      <animate attributeName="r" values="8;12;8" dur="8s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="400" r="8" fill="#ff00ff" opacity="0.2" filter="url(#glow)">
      <animate attributeName="r" values="6;10;6" dur="7s" repeatCount="indefinite" />
    </circle>
  </g>

  <!-- 科技元素 -->
  <g id="tech">
    <!-- 扫描线 -->
    <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(0,255,255,0.3)" stroke-width="1">
      <animate attributeName="y1" values="0;800;0" dur="10s" repeatCount="indefinite" />
      <animate attributeName="y2" values="0;800;0" dur="10s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;0.5;0" dur="10s" repeatCount="indefinite" />
    </line>

    <!-- 数据流动效果 -->
    <path d="M 0 200 Q 100 150 200 200 T 400 200" fill="none" stroke="rgba(0,255,255,0.2)" stroke-width="1">
      <animate attributeName="stroke-dasharray" values="0,100,200" dur="5s" repeatCount="indefinite" />
    </path>
    <path d="M 0 400 Q 100 450 200 400 T 400 400" fill="none" stroke="rgba(255,0,255,0.2)" stroke-width="1">
      <animate attributeName="stroke-dasharray" values="0,100,200" dur="6s" repeatCount="indefinite" />
    </path>
    <path d="M 0 600 Q 100 550 200 600 T 400 600" fill="none" stroke="rgba(0,255,255,0.2)" stroke-width="1">
      <animate attributeName="stroke-dasharray" values="0,100,200" dur="7s" repeatCount="indefinite" />
    </path>
  </g>

  <!-- 未来感元素 -->
  <g id="future">
    <!-- 几何图形 -->
    <polygon points="50,50 70,30 90,50 70,70" fill="rgba(0,255,255,0.1)" stroke="rgba(0,255,255,0.3)" stroke-width="1">
      <animateTransform attributeName="transform" type="rotate" from="0 70 50" to="360 70 50" dur="20s" repeatCount="indefinite" />
    </polygon>
    <circle cx="350" cy="750" r="20" fill="rgba(255,0,255,0.1)" stroke="rgba(255,0,255,0.3)" stroke-width="1">
      <animate attributeName="r" values="15;25;15" dur="10s" repeatCount="indefinite" />
    </circle>
  </g>
</svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
  style?: CSSProperties;
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'none',
  strokeWidth: 2,
});
</script>
