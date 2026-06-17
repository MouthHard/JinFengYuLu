<template>
  <svg
    class="cyberpunk-background"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${width} ${height}`"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <!-- 主背景渐?-->
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="50%" stop-color="#050505" />
        <stop offset="100%" stop-color="#000000" />
      </linearGradient>

      <!-- 模糊滤镜 -->
      <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
      </filter>

      <!-- 强模糊滤?-->
      <filter id="strongBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>

      <!-- 噪点滤镜 -->
      <filter id="noise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
        <feColorMatrix type="saturate" values="0" result="monoNoise" />
        <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
      </filter>

      <!-- 发光滤镜 -->
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- RGB色彩分离滤镜 -->
      <filter id="rgbSplit" x="-10%" y="-10%" width="120%" height="120%">
        <feOffset in="SourceGraphic" dx="1" dy="0" result="red" />
        <feOffset in="SourceGraphic" dx="-1" dy="0" result="blue" />
        <feColorMatrix in="red" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" result="redOnly" />
        <feColorMatrix in="blue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 0.5 0" result="blueOnly" />
        <feBlend in="redOnly" in2="blueOnly" mode="screen" />
      </filter>

      <!-- 雪花噪点滤镜 -->
      <filter id="snowNoise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="1" result="noise" seed="0">
          <animate attributeName="seed" values="0;100;0" dur="0.1s" repeatCount="indefinite" />
        </feTurbulence>
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="0 1 1 0 1 0 0 1" />
        </feComponentTransfer>
      </filter>

      <!-- 画面撕裂滤镜 -->
      <filter id="tearEffect" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" result="noise" seed="5">
          <animate attributeName="seed" values="5;50;5" dur="0.3s" repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>

    <!-- 主背?-->
    <rect width="100%" height="100%" fill="url(#bgGradient)" filter="url(#blur)" />

    <!-- 噪点?-->
    <rect width="100%" height="100%" fill="#ffffff" opacity="0.02" filter="url(#noise)">
      <animate attributeName="opacity" values="0.01;0.03;0.01" dur="0.1s" repeatCount="indefinite" />
    </rect>

    <!-- 顶部稀疏故障线 -->
    <g filter="url(#blur)" opacity="0.6">
      <line x1="5%" y1="8%" x2="25%" y2="8%" stroke="#cccccc" stroke-width="1">
        <animate attributeName="opacity" values="0;0.8;0" dur="0.3s" repeatCount="indefinite" begin="0.1s" />
      </line>
      <line x1="70%" y1="12%" x2="90%" y2="12%" stroke="#e0e0e0" stroke-width="0.8">
        <animate attributeName="opacity" values="0;0.7;0" dur="0.25s" repeatCount="indefinite" begin="0.5s" />
      </line>
      <line x1="15%" y1="5%" x2="35%" y2="5%" stroke="#d0d0d0" stroke-width="1.2">
        <animate attributeName="opacity" values="0;0.6;0" dur="0.35s" repeatCount="indefinite" begin="0.8s" />
      </line>
    </g>

    <!-- 中部中等密度故障?-->
    <g filter="url(#blur)" opacity="0.7">
      <line x1="0%" y1="25%" x2="40%" y2="25%" stroke="#f0f0f0" stroke-width="1.5">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.2s" repeatCount="indefinite" begin="0.2s" />
      </line>
      <line x1="60%" y1="28%" x2="100%" y2="28%" stroke="#e5e5e5" stroke-width="1">
        <animate attributeName="opacity" values="0;0.8;0" dur="0.15s" repeatCount="indefinite" begin="0.6s" />
      </line>
      <line x1="10%" y1="32%" x2="50%" y2="32%" stroke="#d8d8d8" stroke-width="1.3">
        <animate attributeName="opacity" values="0;0.7;0" dur="0.28s" repeatCount="indefinite" begin="1s" />
      </line>
      <line x1="55%" y1="35%" x2="85%" y2="35%" stroke="#c8c8c8" stroke-width="0.9">
        <animate attributeName="opacity" values="0;0.6;0" dur="0.22s" repeatCount="indefinite" begin="1.3s" />
      </line>
      <line x1="20%" y1="38%" x2="70%" y2="38%" stroke="#e0e0e0" stroke-width="1.1">
        <animate attributeName="opacity" values="0;0.8;0" dur="0.18s" repeatCount="indefinite" begin="1.6s" />
      </line>
    </g>

    <!-- 中下部密集故障线 -->
    <g filter="url(#blur)" opacity="0.8">
      <line x1="0%" y1="50%" x2="30%" y2="50%" stroke="#f5f5f5" stroke-width="1.8">
        <animate attributeName="opacity" values="0;1;0" dur="0.12s" repeatCount="indefinite" begin="0.3s" />
      </line>
      <line x1="35%" y1="52%" x2="75%" y2="52%" stroke="#ebebeb" stroke-width="1.4">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.1s" repeatCount="indefinite" begin="0.7s" />
      </line>
      <line x1="80%" y1="54%" x2="100%" y2="54%" stroke="#e0e0e0" stroke-width="1.6">
        <animate attributeName="opacity" values="0;0.85;0" dur="0.14s" repeatCount="indefinite" begin="1.1s" />
      </line>
      <line x1="5%" y1="56%" x2="45%" y2="56%" stroke="#d5d5d5" stroke-width="1.2">
        <animate attributeName="opacity" values="0;0.75;0" dur="0.16s" repeatCount="indefinite" begin="1.4s" />
      </line>
      <line x1="50%" y1="58%" x2="90%" y2="58%" stroke="#e8e8e8" stroke-width="1.5">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.11s" repeatCount="indefinite" begin="1.7s" />
      </line>
    </g>

    <!-- 底部高密度故障线 -->
    <g filter="url(#strongBlur)" opacity="0.9">
      <!-- 宽幅白色条带 -->
      <rect x="0%" y="75%" width="100%" height="8" fill="#f8f8f8">
        <animate attributeName="y" values="75%;78%;75%" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="0.08s" repeatCount="indefinite" begin="0.4s" />
      </rect>
      
      <!-- 密集线条 -->
      <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="#ffffff" stroke-width="2">
        <animate attributeName="opacity" values="0;1;0" dur="0.06s" repeatCount="indefinite" begin="0.2s" />
      </line>
      <line x1="0%" y1="82%" x2="60%" y2="82%" stroke="#f0f0f0" stroke-width="1.8">
        <animate attributeName="opacity" values="0;0.95;0" dur="0.07s" repeatCount="indefinite" begin="0.5s" />
      </line>
      <line x1="40%" y1="84%" x2="100%" y2="84%" stroke="#e8e8e8" stroke-width="1.6">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.08s" repeatCount="indefinite" begin="0.8s" />
      </line>
      <line x1="0%" y1="86%" x2="100%" y2="86%" stroke="#f5f5f5" stroke-width="2.2">
        <animate attributeName="opacity" values="0;1;0" dur="0.05s" repeatCount="indefinite" begin="1.1s" />
      </line>
      <line x1="20%" y1="88%" x2="80%" y2="88%" stroke="#e0e0e0" stroke-width="1.4">
        <animate attributeName="opacity" values="0;0.85;0" dur="0.09s" repeatCount="indefinite" begin="1.4s" />
      </line>
      <line x1="0%" y1="90%" x2="100%" y2="90%" stroke="#ffffff" stroke-width="2.5">
        <animate attributeName="opacity" values="0;1;0" dur="0.04s" repeatCount="indefinite" begin="1.7s" />
      </line>
    </g>

    <!-- 底部淡紫/蓝偏色条?-->
    <g filter="url(#strongBlur)" opacity="0.4">
      <rect x="0%" y="92%" width="100%" height="6" fill="#e0e0ff">
        <animate attributeName="y" values="92%;95%;92%" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.6;0" dur="0.1s" repeatCount="indefinite" begin="0.6s" />
      </rect>
      <line x1="0%" y1="94%" x2="100%" y2="94%" stroke="#d8d8ff" stroke-width="1.5">
        <animate attributeName="opacity" values="0;0.5;0" dur="0.12s" repeatCount="indefinite" begin="1s" />
      </line>
    </g>

    <!-- 随机断续短线 -->
    <g filter="url(#blur)" opacity="0.5">
      <line x1="8%" y1="15%" x2="18%" y2="15%" stroke="#d0d0d0" stroke-width="0.8">
        <animate attributeName="opacity" values="0;0.7;0" dur="0.4s" repeatCount="indefinite" begin="0.9s" />
      </line>
      <line x1="75%" y1="20%" x2="88%" y2="20%" stroke="#c8c8c8" stroke-width="0.6">
        <animate attributeName="opacity" values="0;0.6;0" dur="0.35s" repeatCount="indefinite" begin="1.2s" />
      </line>
      <line x1="25%" y1="42%" x2="38%" y2="42%" stroke="#e0e0e0" stroke-width="0.9">
        <animate attributeName="opacity" values="0;0.8;0" dur="0.3s" repeatCount="indefinite" begin="1.5s" />
      </line>
      <line x1="62%" y1="48%" x2="78%" y2="48%" stroke="#d5d5d5" stroke-width="0.7">
        <animate attributeName="opacity" values="0;0.65;0" dur="0.38s" repeatCount="indefinite" begin="1.8s" />
      </line>
    </g>

    <!-- RGB色彩分离效果 -->
    <g filter="url(#rgbSplit)" opacity="0.3">
      <rect x="10%" y="60%" width="25%" height="3" fill="#ff0000">
        <animate attributeName="opacity" values="0;0.4;0" dur="0.15s" repeatCount="indefinite" begin="0.3s" />
      </rect>
      <rect x="65%" y="65%" width="20%" height="2" fill="#00ff00">
        <animate attributeName="opacity" values="0;0.35;0" dur="0.18s" repeatCount="indefinite" begin="0.7s" />
      </rect>
      <rect x="40%" y="70%" width="30%" height="2.5" fill="#0000ff">
        <animate attributeName="opacity" values="0;0.3;0" dur="0.2s" repeatCount="indefinite" begin="1.1s" />
      </rect>
    </g>

    <!-- 扫描线动?-->
    <rect x="0" y="0" width="100%" height="1.5" fill="#ffffff" opacity="0.05" filter="url(#blur)">
      <animate attributeName="y" values="0;100%;0" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;0.08;0" dur="2s" repeatCount="indefinite" />
    </rect>

    <!-- 雪花噪点?-->
    <rect width="100%" height="100%" fill="#ffffff" opacity="0.08" filter="url(#snowNoise)">
      <animate attributeName="opacity" values="0.05;0.12;0.05" dur="0.15s" repeatCount="indefinite" />
    </rect>

    <!-- 随机雪花?-->
    <g opacity="0.4">
      <circle cx="10%" cy="15%" r="1" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="25%" cy="30%" r="0.8" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.18s" repeatCount="indefinite" begin="0.1s" />
      </circle>
      <circle cx="45%" cy="20%" r="1.2" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.22s" repeatCount="indefinite" begin="0.2s" />
      </circle>
      <circle cx="70%" cy="40%" r="0.9" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.16s" repeatCount="indefinite" begin="0.3s" />
      </circle>
      <circle cx="85%" cy="25%" r="1.1" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.24s" repeatCount="indefinite" begin="0.4s" />
      </circle>
      <circle cx="15%" cy="55%" r="0.7" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.19s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="60%" cy="65%" r="1" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.21s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="35%" cy="75%" r="0.8" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.17s" repeatCount="indefinite" begin="0.7s" />
      </circle>
      <circle cx="80%" cy="85%" r="1.3" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.23s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle cx="50%" cy="90%" r="0.9" fill="#ffffff">
        <animate attributeName="opacity" values="0;1;0" dur="0.2s" repeatCount="indefinite" begin="0.9s" />
      </circle>
    </g>

    <!-- 画面撕裂效果 -->
    <g filter="url(#tearEffect)" opacity="0.15">
      <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#ffffff" stroke-width="0.5" />
    </g>

    <!-- 信号干扰?-->
    <g opacity="0.25">
      <rect x="5%" y="10%" width="8%" height="4%" fill="#ffffff" filter="url(#blur)">
        <animate attributeName="opacity" values="0;0.8;0" dur="0.1s" repeatCount="indefinite" begin="0.2s" />
        <animate attributeName="x" values="5%;7%;5%" dur="0.05s" repeatCount="indefinite" begin="0.2s" />
      </rect>
      <rect x="85%" y="35%" width="10%" height="3%" fill="#ffffff" filter="url(#blur)">
        <animate attributeName="opacity" values="0;0.7;0" dur="0.12s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="y" values="35%;37%;35%" dur="0.06s" repeatCount="indefinite" begin="0.5s" />
      </rect>
      <rect x="40%" y="60%" width="12%" height="5%" fill="#ffffff" filter="url(#blur)">
        <animate attributeName="opacity" values="0;0.9;0" dur="0.08s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="width" values="12%;14%;12%" dur="0.04s" repeatCount="indefinite" begin="0.8s" />
      </rect>
      <rect x="20%" y="80%" width="15%" height="4%" fill="#ffffff" filter="url(#blur)">
        <animate attributeName="opacity" values="0;0.6;0" dur="0.15s" repeatCount="indefinite" begin="1.1s" />
        <animate attributeName="height" values="4%;6%;4%" dur="0.07s" repeatCount="indefinite" begin="1.1s" />
      </rect>
    </g>

    <!-- 画面抖动?-->
    <g opacity="0.2">
      <rect x="30%" y="45%" width="20%" height="8%" fill="#e0e0e0" filter="url(#blur)">
        <animate attributeName="x" values="30%;32%;30%" dur="0.08s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur="0.1s" repeatCount="indefinite" begin="0.3s" />
      </rect>
      <rect x="55%" y="70%" width="18%" height="6%" fill="#d8d8d8" filter="url(#blur)">
        <animate attributeName="y" values="70%;72%;70%" dur="0.1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.4;0" dur="0.12s" repeatCount="indefinite" begin="0.6s" />
      </rect>
    </g>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  width?: number;
  height?: number;
}

withDefaults(defineProps<Props>(), {
  width: 400,
  height: 600
});
</script>

<style scoped lang="scss">
.cyberpunk-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
