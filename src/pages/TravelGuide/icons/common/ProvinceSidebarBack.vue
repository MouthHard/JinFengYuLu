<template>
  <svg
    class="cyber-bg-effects"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
  >
    <!-- 渐变定义 -->
    <defs>
      <!-- 霓虹青蓝渐变 -->
      <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FFFF" stop-opacity="1" />
        <stop offset="50%" stop-color="#00D4FF" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#00FFFF" stop-opacity="0.6" />
      </linearGradient>

      <!-- 霓虹品红渐变 -->
      <linearGradient id="neonMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF00FF" stop-opacity="1" />
        <stop offset="50%" stop-color="#FF00D4" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#FF00FF" stop-opacity="0.6" />
      </linearGradient>

      <!-- 赛博双色渐变 -->
      <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FFFF" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#FF00FF" stop-opacity="0.7" />
        <stop offset="100%" stop-color="#00FFFF" stop-opacity="0.5" />
      </linearGradient>

      <!-- 增强网格图案 -->
      <pattern
        id="enhancedGrid"
        width="30"
        height="30"
        patternUnits="userSpaceOnUse"
      >
        <!-- 水平线 -->
        <line
          x1="0"
          y1="0"
          x2="30"
          y2="0"
          stroke="#00FFFF"
          stroke-opacity="0.25"
          stroke-width="1"
        />
        <line
          x1="0"
          y1="15"
          x2="30"
          y2="15"
          stroke="#00FFFF"
          stroke-opacity="0.15"
          stroke-width="0.5"
        />
        <!-- 垂直线 -->
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="30"
          stroke="#FF00FF"
          stroke-opacity="0.25"
          stroke-width="1"
        />
        <line
          x1="15"
          y1="0"
          x2="15"
          y2="30"
          stroke="#FF00FF"
          stroke-opacity="0.15"
          stroke-width="0.5"
        />
        <!-- 对角线 -->
        <line
          x1="0"
          y1="0"
          x2="30"
          y2="30"
          stroke="#00FFFF"
          stroke-opacity="0.1"
          stroke-width="0.5"
        />
      </pattern>

      <!-- 强发光滤镜 -->
      <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- 发光滤镜 -->
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- 深空背景 -->
    <rect width="100%" height="100%" fill="#000010" />

    <!-- 增强网格层 -->
    <rect width="100%" height="100%" fill="url(#enhancedGrid)" opacity="1">
      <animate
        attributeName="opacity"
        values="0.8;1;0.8"
        dur="4s"
        repeatCount="indefinite"
      />
    </rect>

    <!-- 增强扫描线 -->
    <g class="scan-lines" opacity="0.4">
      <line
        x1="0"
        y1="20%"
        x2="100%"
        y2="20%"
        stroke="#00FFFF"
        stroke-width="1.5"
        filter="url(#glow)"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
      <line
        x1="0"
        y1="40%"
        x2="100%"
        y2="40%"
        stroke="#FF00FF"
        stroke-width="1.5"
        filter="url(#glow)"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </line>
      <line
        x1="0"
        y1="60%"
        x2="100%"
        y2="60%"
        stroke="#00FFFF"
        stroke-width="1.5"
        filter="url(#glow)"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      <line
        x1="0"
        y1="80%"
        x2="100%"
        y2="80%"
        stroke="#FF00FF"
        stroke-width="1.5"
        filter="url(#glow)"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </line>
    </g>

    <!-- 增强能量粒子 -->
    <g class="energy-particles" filter="url(#strongGlow)">
      <!-- 青色粒子 -->
      <circle cx="15%" cy="20%" r="3" fill="#00FFFF" fill-opacity="0.9">
        <animate
          attributeName="cy"
          values="20%;80%;20%"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.5;1;0.5"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="2;4;2"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="35%" cy="15%" r="2.5" fill="#00FFFF" fill-opacity="0.8">
        <animate
          attributeName="cy"
          values="15%;85%;15%"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.4;0.9;0.4"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.8;3.5;1.8"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60%" cy="25%" r="3.2" fill="#00FFFF" fill-opacity="0.95">
        <animate
          attributeName="cy"
          values="25%;75%;25%"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.5;1;0.5"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="2.2;4.2;2.2"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="85%" cy="18%" r="2.8" fill="#00FFFF" fill-opacity="0.85">
        <animate
          attributeName="cy"
          values="18%;82%;18%"
          dur="7.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.4;0.95;0.4"
          dur="7.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="2;3.8;2"
          dur="3.8s"
          repeatCount="indefinite"
        />
      </circle>

      <!-- 品红粒子 -->
      <circle cx="25%" cy="75%" r="3" fill="#FF00FF" fill-opacity="0.9">
        <animate
          attributeName="cy"
          values="75%;25%;75%"
          dur="6.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.5;1;0.5"
          dur="6.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="2;4;2"
          dur="3.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="45%" cy="80%" r="2.6" fill="#FF00FF" fill-opacity="0.85">
        <animate
          attributeName="cy"
          values="80%;20%;80%"
          dur="7.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.4;0.95;0.4"
          dur="7.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.9;3.6;1.9"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="70%" cy="72%" r="3.1" fill="#FF00FF" fill-opacity="0.92">
        <animate
          attributeName="cy"
          values="72%;28%;72%"
          dur="7.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.45;0.98;0.45"
          dur="7.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="2.1;4.1;2.1"
          dur="3.9s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="90%" cy="78%" r="2.7" fill="#FF00FF" fill-opacity="0.88">
        <animate
          attributeName="cy"
          values="78%;22%;78%"
          dur="8.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.42;0.96;0.42"
          dur="8.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.95;3.7;1.95"
          dur="4.1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    <!-- 增强数据脉冲线 -->
    <g class="data-pulse" opacity="0.6">
      <path
        d="M0,30% Q25%,10% 50%,30% T100%,30%"
        fill="none"
        stroke="#00FFFF"
        stroke-width="1.2"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="d"
          values="M0,30% Q25%,10% 50%,30% T100%,30%;M0,30% Q25%,50% 50%,30% T100%,30%;M0,30% Q25%,10% 50%,30% T100%,30%"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M0,70% Q25%,90% 50%,70% T100%,70%"
        fill="none"
        stroke="#FF00FF"
        stroke-width="1.2"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="d"
          values="M0,70% Q25%,90% 50%,70% T100%,70%;M0,70% Q25%,50% 50%,70% T100%,70%;M0,70% Q25%,90% 50%,70% T100%,70%"
          dur="4.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </path>
    </g>

    <!-- 增强框架 -->
    <g class="enhanced-frame" opacity="0.4">
      <!-- 左侧框架 -->
      <line
        x1="3%"
        y1="3%"
        x2="3%"
        y2="97%"
        stroke="#00FFFF"
        stroke-width="1.5"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      <!-- 右侧框架 -->
      <line
        x1="97%"
        y1="3%"
        x2="97%"
        y2="97%"
        stroke="#FF00FF"
        stroke-width="1.5"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.5;1;0.5"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </line>
      <!-- 角落装饰 -->
      <circle
        cx="3%"
        cy="3%"
        r="3"
        fill="#00FFFF"
        fill-opacity="0.7"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="r"
          values="2;4;2"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="3%"
        cy="97%"
        r="3"
        fill="#FF00FF"
        fill-opacity="0.7"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="r"
          values="2;4;2"
          dur="2.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="97%"
        cy="3%"
        r="3"
        fill="#00FFFF"
        fill-opacity="0.7"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="r"
          values="2;4;2"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="97%"
        cy="97%"
        r="3"
        fill="#FF00FF"
        fill-opacity="0.7"
        filter="url(#strongGlow)"
      >
        <animate
          attributeName="r"
          values="2;4;2"
          dur="2.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    <!-- 动态能量环 -->
    <g class="energy-rings" opacity="0.3" filter="url(#strongGlow)">
      <circle
        cx="50%"
        cy="50%"
        r="25%"
        fill="none"
        stroke="#00FFFF"
        stroke-width="1"
      >
        <animate
          attributeName="r"
          values="20%;30%;20%"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.2;0.5;0.2"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50%"
        cy="50%"
        r="40%"
        fill="none"
        stroke="#FF00FF"
        stroke-width="1"
      >
        <animate
          attributeName="r"
          values="35%;45%;35%"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.2;0.4;0.2"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
</template>
