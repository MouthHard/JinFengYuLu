<template>
  <section class="module-ranking">
    <!-- SVG背景 -->
    <svg
      class="background-svg"
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <!-- 定义渐变和滤镜 -->
      <defs>
        <!-- 雷达背景渐变 -->
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(5, 15, 35, 0.95)" />
          <stop offset="20%" stop-color="rgba(15, 30, 60, 0.98)" />
          <stop offset="40%" stop-color="rgba(20, 40, 80, 0.95)" />
          <stop offset="60%" stop-color="rgba(15, 35, 70, 0.98)" />
          <stop offset="80%" stop-color="rgba(10, 25, 50, 0.95)" />
          <stop offset="100%" stop-color="rgba(5, 15, 30, 0.9)" />
        </linearGradient>

        <!-- 雷达扫描渐变 -->
        <radialGradient id="scanGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(0, 255, 150, 0.4)" />
          <stop offset="40%" stop-color="rgba(0, 220, 120, 0.2)" />
          <stop offset="70%" stop-color="rgba(0, 180, 90, 0.1)" />
          <stop offset="100%" stop-color="rgba(0, 100, 50, 0)" />
        </radialGradient>

        <!-- 雷达扫描渐变2 - 蓝色 -->
        <radialGradient id="scanGradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(0, 200, 255, 0.4)" />
          <stop offset="40%" stop-color="rgba(0, 180, 220, 0.2)" />
          <stop offset="70%" stop-color="rgba(0, 150, 200, 0.1)" />
          <stop offset="100%" stop-color="rgba(0, 50, 100, 0)" />
        </radialGradient>

        <!-- 雷达扫描渐变3 - 紫色 -->
        <radialGradient id="scanGradient3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(150, 100, 255, 0.4)" />
          <stop offset="40%" stop-color="rgba(120, 80, 220, 0.2)" />
          <stop offset="70%" stop-color="rgba(90, 60, 180, 0.1)" />
          <stop offset="100%" stop-color="rgba(50, 30, 100, 0)" />
        </radialGradient>

        <!-- 雷达网格渐变 -->
        <radialGradient id="gridGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(0, 200, 255, 0.15)" />
          <stop offset="50%" stop-color="rgba(0, 150, 200, 0.08)" />
          <stop offset="100%" stop-color="rgba(0, 50, 100, 0)" />
        </radialGradient>

        <!-- 增强的网格渐变 -->
        <linearGradient id="gridLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(0, 200, 255, 0.02)" />
          <stop offset="50%" stop-color="rgba(0, 200, 255, 0.1)" />
          <stop offset="100%" stop-color="rgba(0, 200, 255, 0.02)" />
        </linearGradient>

        <!-- 雷达网格 -->
        <pattern
          id="radarGrid"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 40 H1000"
            fill="none"
            stroke="url(#gridLineGradient)"
            stroke-width="0.8"
          />
          <path
            d="M40 0 V1000"
            fill="none"
            stroke="url(#gridLineGradient)"
            stroke-width="0.8"
          />
          <circle cx="40" cy="40" r="1.5" fill="rgba(0, 200, 255, 0.15)" />
        </pattern>

        <!-- 增强的发光滤镜 -->
        <filter id="radarGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <!-- 中心辉光滤镜 -->
        <filter id="centerGlow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <!-- 粒子滤镜 -->
        <filter
          id="particleGlow"
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- 背景 -->
      <rect x="0" y="0" width="1000" height="1000" fill="#000000" />

      <!-- 网格纹理 -->
      <rect x="0" y="0" width="1000" height="1000" fill="url(#radarGrid)" />

      <!-- 增强的雷达同心圆 -->
      <g fill="none">
        <!-- 主要同心圆 -->
        <g stroke="rgba(0, 200, 255, 0.15)" stroke-width="1.5">
          <circle cx="500" cy="500" r="120" />
          <circle cx="500" cy="500" r="240" />
          <circle cx="500" cy="500" r="360" />
          <circle cx="500" cy="500" r="480" />
        </g>

        <!-- 辅助同心圆 -->
        <g stroke="rgba(0, 200, 255, 0.08)" stroke-width="0.8">
          <circle cx="500" cy="500" r="60" />
          <circle cx="500" cy="500" r="180" />
          <circle cx="500" cy="500" r="300" />
          <circle cx="500" cy="500" r="420" />
        </g>
      </g>

      <!-- 雷达扫描线 -->
      <g filter="url(#radarGlow)">
        <!-- 主扫描线 - 绿色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(0, 255, 150, 0.7)"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="7s"
            repeatCount="indefinite"
          />
        </line>

        <!-- 辅助扫描线 - 蓝色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(0, 200, 255, 0.6)"
          stroke-width="2"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="9s"
            repeatCount="indefinite"
            begin="1s"
          />
        </line>

        <!-- 扫描线 - 紫色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(150, 100, 255, 0.6)"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="11s"
            repeatCount="indefinite"
            begin="2s"
          />
        </line>

        <!-- 扫描线 - 黄色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(255, 200, 0, 0.5)"
          stroke-width="1.5"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="13s"
            repeatCount="indefinite"
            begin="3s"
          />
        </line>

        <!-- 扫描线 - 红色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(255, 100, 100, 0.5)"
          stroke-width="1.2"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="15s"
            repeatCount="indefinite"
            begin="4s"
          />
        </line>

        <!-- 新增扫描线 - 青色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(0, 255, 255, 0.6)"
          stroke-width="1.7"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="8s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </line>

        <!-- 新增扫描线 - 粉色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(255, 100, 255, 0.5)"
          stroke-width="1.3"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="12s"
            repeatCount="indefinite"
            begin="2.5s"
          />
        </line>

        <!-- 新增扫描线 - 橙色 -->
        <line
          x1="500"
          y1="500"
          x2="500"
          y2="0"
          stroke="rgba(255, 150, 50, 0.5)"
          stroke-width="1.4"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="14s"
            repeatCount="indefinite"
            begin="3.5s"
          />
        </line>

        <!-- 扫描扇形 -->
        <path
          d="M500 500 L500 0 A500 500 0 0 1 600 0 L500 500 Z"
          fill="url(#scanGradient)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>

        <!-- 新增扫描扇形 - 蓝色 -->
        <path
          d="M500 500 L500 0 A500 500 0 0 1 650 0 L500 500 Z"
          fill="url(#scanGradient2)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="9s"
            repeatCount="indefinite"
            begin="1s"
          />
        </path>

        <!-- 新增扫描扇形 - 紫色 -->
        <path
          d="M500 500 L500 0 A500 500 0 0 1 550 0 L500 500 Z"
          fill="url(#scanGradient3)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="11s"
            repeatCount="indefinite"
            begin="2s"
          />
        </path>
      </g>

      <!-- 增强的雷达点 -->
      <g filter="url(#particleGlow)">
        <circle cx="250" cy="180" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="750" cy="250" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        <circle cx="200" cy="600" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3.5s"
            repeatCount="indefinite"
            begin="1.6s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3.5s"
            repeatCount="indefinite"
            begin="1.6s"
          />
        </circle>

        <circle cx="800" cy="650" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3.5s"
            repeatCount="indefinite"
            begin="2.4s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3.5s"
            repeatCount="indefinite"
            begin="2.4s"
          />
        </circle>

        <!-- 新增雷达点 -->
        <circle cx="500" cy="150" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>

        <circle cx="150" cy="500" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        <circle cx="850" cy="500" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="1.9s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="1.9s"
          />
        </circle>

        <circle cx="500" cy="850" r="3" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="2.6s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="2.6s"
          />
        </circle>

        <!-- 新增更多扫描点 -->
        <circle cx="300" cy="120" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="0.3s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="0.3s"
          />
        </circle>

        <circle cx="700" cy="180" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="1.1s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="1.1s"
          />
        </circle>

        <circle cx="120" cy="300" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="1.9s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="1.9s"
          />
        </circle>

        <circle cx="880" cy="350" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="2.7s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="2.7s"
          />
        </circle>

        <circle cx="180" cy="700" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="0.6s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="0.6s"
          />
        </circle>

        <circle cx="820" cy="750" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="1.4s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </circle>

        <circle cx="350" cy="800" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="2.2s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="2.2s"
          />
        </circle>

        <circle cx="650" cy="800" r="3" fill="rgba(0, 200, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="3s"
            repeatCount="indefinite"
            begin="3s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="3s"
            repeatCount="indefinite"
            begin="3s"
          />
        </circle>

        <!-- 新增彩色扫描点 -->
        <circle cx="400" cy="200" r="3" fill="rgba(255, 200, 0, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="0.2s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>

        <circle cx="600" cy="250" r="3" fill="rgba(255, 100, 100, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>

        <circle cx="250" cy="400" r="3" fill="rgba(150, 100, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="1.8s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="1.8s"
          />
        </circle>

        <circle cx="750" cy="450" r="3" fill="rgba(255, 100, 255, 0.9)">
          <animate
            attributeName="opacity"
            values="0.9;0.1;0.9"
            dur="4s"
            repeatCount="indefinite"
            begin="2.6s"
          />
          <animate
            attributeName="r"
            values="3;6;3"
            dur="4s"
            repeatCount="indefinite"
            begin="2.6s"
          />
        </circle>
      </g>

      <!-- 增强的雷达扫描波纹 -->
      <g>
        <circle
          cx="500"
          cy="500"
          r="50"
          fill="none"
          stroke="rgba(0, 255, 150, 0.4)"
          stroke-width="1.5"
        >
          <animate
            attributeName="r"
            values="50;500;50"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="1.5;0.5;1.5"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="500"
          cy="500"
          r="50"
          fill="none"
          stroke="rgba(0, 200, 255, 0.4)"
          stroke-width="1.5"
        >
          <animate
            attributeName="r"
            values="50;500;50"
            dur="9s"
            repeatCount="indefinite"
            begin="1.8s"
          />
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="9s"
            repeatCount="indefinite"
            begin="1.8s"
          />
          <animate
            attributeName="stroke-width"
            values="1.5;0.5;1.5"
            dur="9s"
            repeatCount="indefinite"
            begin="1.8s"
          />
        </circle>

        <circle
          cx="500"
          cy="500"
          r="50"
          fill="none"
          stroke="rgba(0, 255, 150, 0.4)"
          stroke-width="1.5"
        >
          <animate
            attributeName="r"
            values="50;500;50"
            dur="9s"
            repeatCount="indefinite"
            begin="3.6s"
          />
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="9s"
            repeatCount="indefinite"
            begin="3.6s"
          />
          <animate
            attributeName="stroke-width"
            values="1.5;0.5;1.5"
            dur="9s"
            repeatCount="indefinite"
            begin="3.6s"
          />
        </circle>

        <!-- 新增波纹 -->
        <circle
          cx="500"
          cy="500"
          r="50"
          fill="none"
          stroke="rgba(0, 200, 255, 0.4)"
          stroke-width="1.5"
        >
          <animate
            attributeName="r"
            values="50;500;50"
            dur="9s"
            repeatCount="indefinite"
            begin="5.4s"
          />
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="9s"
            repeatCount="indefinite"
            begin="5.4s"
          />
          <animate
            attributeName="stroke-width"
            values="1.5;0.5;1.5"
            dur="9s"
            repeatCount="indefinite"
            begin="5.4s"
          />
        </circle>
      </g>

      <!-- 雷达网格交叉点 -->
      <g>
        <circle cx="200" cy="200" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="400" cy="200" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.4s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.4s"
          />
        </circle>

        <circle cx="600" cy="200" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        <circle cx="800" cy="200" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        <circle cx="200" cy="400" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.2s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>

        <circle cx="400" cy="400" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.6s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.6s"
          />
        </circle>

        <circle cx="600" cy="400" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>

        <circle cx="800" cy="400" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.4s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </circle>

        <circle cx="200" cy="600" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.4s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.4s"
          />
        </circle>

        <circle cx="400" cy="600" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        <circle cx="600" cy="600" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        <circle cx="800" cy="600" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>

        <circle cx="200" cy="800" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        <circle cx="400" cy="800" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        <circle cx="600" cy="800" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>

        <circle cx="800" cy="800" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.4s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.4s"
          />
        </circle>

        <!-- 新增交叉点 -->
        <circle cx="300" cy="300" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.2s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>

        <circle cx="700" cy="300" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.6s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.6s"
          />
        </circle>

        <circle cx="300" cy="700" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>

        <circle cx="700" cy="700" r="2" fill="rgba(0, 200, 255, 0.7)">
          <animate
            attributeName="opacity"
            values="0.7;0.1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.4s"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.4s"
          />
        </circle>
      </g>

      <!-- 增强的雷达中心 -->
      <g filter="url(#centerGlow)">
        <circle cx="500" cy="500" r="10" fill="rgba(0, 255, 150, 0.9)">
          <animate
            attributeName="r"
            values="10;16;10"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0.6;0.9"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="500" cy="500" r="6" fill="rgba(255, 255, 255, 1)">
          <animate
            attributeName="r"
            values="6;9;6"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.8;1"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        <!-- 中心内环 -->
        <circle cx="500" cy="500" r="3" fill="rgba(0, 255, 150, 1)">
          <animate
            attributeName="r"
            values="3;5;3"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <!-- 中心辐射线 -->
      <g stroke="rgba(0, 200, 255, 0.2)" stroke-width="1">
        <line x1="500" y1="500" x2="500" y2="0" />
        <line x1="500" y1="500" x2="1000" y2="500" />
        <line x1="500" y1="500" x2="0" y2="500" />
        <line x1="500" y1="500" x2="500" y2="1000" />
        <line x1="500" y1="500" x2="1000" y2="0" />
        <line x1="500" y1="500" x2="0" y2="0" />
        <line x1="500" y1="500" x2="1000" y2="1000" />
        <line x1="500" y1="500" x2="0" y2="1000" />
      </g>
    </svg>

    <header class="grid-area-header">
      <div class="header-title">🏆 美食排行榜</div>

      <!-- 控制区域：筛选和排序 -->
      <div class="header-controls">
        <div class="filters-group">
          <!-- 价格筛选 -->
          <div class="filter-item">
            <label class="filter-label">价格</label>
            <div
              class="custom-select"
              :class="{ 'open-select': openSelect === 'price' }"
            >
              <div class="select-header" @click="toggleSelect('price')">
                <span class="select-value">{{
                  getSelectedText(priceOptions, selectedPriceFilter, "选择价格")
                }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sci-fi-arrow"
                >
                  <defs>
                    <linearGradient
                      id="mainArrowGrad"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #00ff88; stop-opacity: 1"
                      />
                      <stop
                        offset="40%"
                        style="stop-color: #00cc6a; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #00994d; stop-opacity: 1"
                      />
                    </linearGradient>
                    <linearGradient
                      id="sideArrowGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #00ff88; stop-opacity: 0.7"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #00cc6a; stop-opacity: 0.2"
                      />
                    </linearGradient>
                  </defs>
                  <filter id="neonGlow">
                    <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="depthShadow">
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2"
                      flood-color="#000"
                      flood-opacity="0.5"
                    />
                  </filter>
                  <g filter="url(#depthShadow)">
                    <polygon
                      points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                      fill="url(#mainArrowGrad)"
                      filter="url(#neonGlow)"
                    />
                    <polygon
                      points="12,5 5,12 9,12 9,17 15,17 15,12 19,12"
                      fill="url(#sideArrowGrad)"
                      opacity="0.6"
                    />
                    <polygon
                      points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                      fill="none"
                      stroke="#00ff88"
                      stroke-width="0.5"
                      stroke-opacity="0.8"
                    />
                    <rect
                      x="11"
                      y="18"
                      width="2"
                      height="3"
                      fill="url(#mainArrowGrad)"
                      rx="0.5"
                    />
                  </g>
                </svg>
              </div>
              <div v-if="openSelect === 'price'" class="select-options">
                <div
                  v-for="option in priceOptions"
                  :key="option.value"
                  class="select-option"
                  :class="{ selected: selectedPriceFilter === option.value }"
                  @click="selectOption('price', option.value)"
                >
                  <span class="option-icon">💰</span>
                  <span class="option-text">{{ option.text }}</span>
                  <svg
                    v-if="selectedPriceFilter === option.value"
                    class="ecg-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 50"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="ecgGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                        <stop
                          offset="20%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="50%"
                          style="stop-color: rgba(255, 100, 100, 1)"
                        />
                        <stop
                          offset="80%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="100%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                      </linearGradient>
                      <filter id="ecgGlow">
                        <feGaussianBlur
                          stdDeviation="1.5"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M0,25 L20,25 L25,20 L30,30 L35,25 L40,25 L45,10 L50,40 L55,25 L60,25 L65,20 L70,30 L75,25 L100,25 L105,20 L110,30 L115,25 L120,25 L125,10 L130,40 L135,25 L140,25 L145,20 L150,30 L155,25 L200,25"
                      fill="none"
                      stroke="url(#ecgGrad)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="200"
                      stroke-dashoffset="200"
                      filter="url(#ecgGlow)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- 评分筛选 -->
          <div class="filter-item">
            <label class="filter-label">评分</label>
            <div
              class="custom-select"
              :class="{ 'open-select': openSelect === 'rating' }"
            >
              <div class="select-header" @click="toggleSelect('rating')">
                <span class="select-value">{{
                  getSelectedText(
                    ratingOptions,
                    selectedRatingFilter,
                    "选择评分",
                  )
                }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sci-fi-arrow"
                >
                  <defs>
                    <linearGradient
                      id="mainArrowGrad2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #00ff88; stop-opacity: 1"
                      />
                      <stop
                        offset="40%"
                        style="stop-color: #00cc6a; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #00994d; stop-opacity: 1"
                      />
                    </linearGradient>
                    <linearGradient
                      id="sideArrowGrad2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #00ff88; stop-opacity: 0.7"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #00cc6a; stop-opacity: 0.2"
                      />
                    </linearGradient>
                  </defs>
                  <filter id="neonGlow2">
                    <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="depthShadow2">
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2"
                      flood-color="#000"
                      flood-opacity="0.5"
                    />
                  </filter>
                  <g filter="url(#depthShadow2)">
                    <polygon
                      points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                      fill="url(#mainArrowGrad2)"
                      filter="url(#neonGlow2)"
                    />
                    <polygon
                      points="12,5 5,12 9,12 9,17 15,17 15,12 19,12"
                      fill="url(#sideArrowGrad2)"
                      opacity="0.6"
                    />
                    <polygon
                      points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                      fill="none"
                      stroke="#00ff88"
                      stroke-width="0.5"
                      stroke-opacity="0.8"
                    />
                    <rect
                      x="11"
                      y="18"
                      width="2"
                      height="3"
                      fill="url(#mainArrowGrad2)"
                      rx="0.5"
                    />
                  </g>
                </svg>
              </div>
              <div v-if="openSelect === 'rating'" class="select-options">
                <div
                  v-for="option in ratingOptions"
                  :key="option.value"
                  class="select-option"
                  :class="{ selected: selectedRatingFilter === option.value }"
                  @click="selectOption('rating', option.value)"
                >
                  <span class="option-icon">⭐</span>
                  <span class="option-text">{{ option.text }}</span>
                  <svg
                    v-if="selectedRatingFilter === option.value"
                    class="ecg-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 50"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="ecgGrad2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                        <stop
                          offset="20%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="50%"
                          style="stop-color: rgba(255, 100, 100, 1)"
                        />
                        <stop
                          offset="80%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="100%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                      </linearGradient>
                      <filter id="ecgGlow2">
                        <feGaussianBlur
                          stdDeviation="1.5"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M0,25 L20,25 L25,20 L30,30 L35,25 L40,25 L45,10 L50,40 L55,25 L60,25 L65,20 L70,30 L75,25 L100,25 L105,20 L110,30 L115,25 L120,25 L125,10 L130,40 L135,25 L140,25 L145,20 L150,30 L155,25 L200,25"
                      fill="none"
                      stroke="url(#ecgGrad2)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="200"
                      stroke-dashoffset="200"
                      filter="url(#ecgGlow2)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- 分类筛选 -->
          <div class="filter-item">
            <label class="filter-label">分类</label>
            <div
              class="custom-select"
              :class="{ 'open-select': openSelect === 'category' }"
            >
              <div class="select-header" @click="toggleSelect('category')">
                <span class="select-value">{{
                  getSelectedCategoryText()
                }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sci-fi-arrow"
                >
                  <defs>
                    <linearGradient
                      id="mainArrowGrad3"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #00ff88; stop-opacity: 1"
                      />
                      <stop
                        offset="40%"
                        style="stop-color: #00cc6a; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #00994d; stop-opacity: 1"
                      />
                    </linearGradient>
                    <linearGradient
                      id="sideArrowGrad3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #00ff88; stop-opacity: 0.7"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #00cc6a; stop-opacity: 0.2"
                      />
                    </linearGradient>
                  </defs>
                  <filter id="neonGlow3">
                    <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="depthShadow3">
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2"
                      flood-color="#000"
                      flood-opacity="0.5"
                    />
                  </filter>
                  <g filter="url(#depthShadow3)">
                    <polygon
                      points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                      fill="url(#mainArrowGrad3)"
                      filter="url(#neonGlow3)"
                    />
                    <polygon
                      points="12,5 5,12 9,12 9,17 15,17 15,12 19,12"
                      fill="url(#sideArrowGrad3)"
                      opacity="0.6"
                    />
                    <polygon
                      points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                      fill="none"
                      stroke="#00ff88"
                      stroke-width="0.5"
                      stroke-opacity="0.8"
                    />
                    <rect
                      x="11"
                      y="18"
                      width="2"
                      height="3"
                      fill="url(#mainArrowGrad3)"
                      rx="0.5"
                    />
                  </g>
                </svg>
              </div>
              <div v-if="openSelect === 'category'" class="select-options">
                <div
                  class="select-option"
                  :class="{ selected: selectedCategoryFilter === 'all' }"
                  @click="selectOption('category', 'all')"
                >
                  <span class="option-icon">🍽️</span>
                  <span class="option-text">全部</span>
                  <svg
                    v-if="selectedCategoryFilter === 'all'"
                    class="ecg-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 50"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="ecgGrad3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                        <stop
                          offset="20%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="50%"
                          style="stop-color: rgba(255, 100, 100, 1)"
                        />
                        <stop
                          offset="80%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="100%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                      </linearGradient>
                      <filter id="ecgGlow3">
                        <feGaussianBlur
                          stdDeviation="1.5"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M0,25 L20,25 L25,20 L30,30 L35,25 L40,25 L45,10 L50,40 L55,25 L60,25 L65,20 L70,30 L75,25 L100,25 L105,20 L110,30 L115,25 L120,25 L125,10 L130,40 L135,25 L140,25 L145,20 L150,30 L155,25 L200,25"
                      fill="none"
                      stroke="url(#ecgGrad3)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="200"
                      stroke-dashoffset="200"
                      filter="url(#ecgGlow3)"
                    />
                  </svg>
                </div>
                <div
                  v-for="category in uniqueCategories"
                  :key="category"
                  class="select-option"
                  :class="{ selected: selectedCategoryFilter === category }"
                  @click="selectOption('category', category)"
                >
                  <span class="option-icon">🍜</span>
                  <span class="option-text">{{ category }}</span>
                  <svg
                    v-if="selectedCategoryFilter === category"
                    class="ecg-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 50"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="ecgGrad4"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                        <stop
                          offset="20%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="50%"
                          style="stop-color: rgba(255, 100, 100, 1)"
                        />
                        <stop
                          offset="80%"
                          style="stop-color: rgba(255, 100, 100, 0.8)"
                        />
                        <stop
                          offset="100%"
                          style="stop-color: rgba(255, 100, 100, 0)"
                        />
                      </linearGradient>
                      <filter id="ecgGlow4">
                        <feGaussianBlur
                          stdDeviation="1.5"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M0,25 L20,25 L25,20 L30,30 L35,25 L40,25 L45,10 L50,40 L55,25 L60,25 L65,20 L70,30 L75,25 L100,25 L105,20 L110,30 L115,25 L120,25 L125,10 L130,40 L135,25 L140,25 L145,20 L150,30 L155,25 L200,25"
                      fill="none"
                      stroke="url(#ecgGrad4)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="200"
                      stroke-dashoffset="200"
                      filter="url(#ecgGlow4)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 排序控制 -->
        <div class="sort-control">
          <label class="filter-label">排序</label>
          <div
            class="custom-select"
            :class="{ 'open-select': openSelect === 'sort' }"
          >
            <div class="select-header" @click="toggleSelect('sort')">
              <span class="select-value">{{
                getSelectedText(sortOptions, selectedSort, "选择排序方式")
              }}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sci-fi-arrow"
              >
                <defs>
                  <linearGradient
                    id="mainArrowGrad4"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #00ff88; stop-opacity: 1"
                    />
                    <stop
                      offset="40%"
                      style="stop-color: #00cc6a; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #00994d; stop-opacity: 1"
                    />
                  </linearGradient>
                  <linearGradient
                    id="sideArrowGrad4"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #00ff88; stop-opacity: 0.7"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #00cc6a; stop-opacity: 0.2"
                    />
                  </linearGradient>
                </defs>
                <filter id="neonGlow4">
                  <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="depthShadow4">
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="2"
                    flood-color="#000"
                    flood-opacity="0.5"
                  />
                </filter>
                <g filter="url(#depthShadow4)">
                  <polygon
                    points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                    fill="url(#mainArrowGrad4)"
                    filter="url(#neonGlow4)"
                  />
                  <polygon
                    points="12,5 5,12 9,12 9,17 15,17 15,12 19,12"
                    fill="url(#sideArrowGrad4)"
                    opacity="0.6"
                  />
                  <polygon
                    points="12,3 4,11 8,11 8,18 16,18 16,11 20,11"
                    fill="none"
                    stroke="#00ff88"
                    stroke-width="0.5"
                    stroke-opacity="0.8"
                  />
                  <rect
                    x="11"
                    y="18"
                    width="2"
                    height="3"
                    fill="url(#mainArrowGrad4)"
                    rx="0.5"
                  />
                </g>
              </svg>
            </div>
            <div v-if="openSelect === 'sort'" class="select-options">
              <div
                v-for="option in sortOptions"
                :key="option.value"
                class="select-option"
                :class="{ selected: selectedSort === option.value }"
                @click="selectOption('sort', option.value)"
              >
                <span class="option-icon">
                  {{
                    option.value === "ranking"
                      ? "🏆"
                      : option.value === "rating"
                        ? "⭐"
                        : option.value === "price-asc"
                          ? "↗️"
                          : option.value === "price-desc"
                            ? "↘️"
                            : option.value === "reviews"
                              ? "💬"
                              : ""
                  }}
                </span>
                <span class="option-text">{{ option.text }}</span>
                <svg
                  v-if="selectedSort === option.value"
                  class="ecg-svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 50"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="ecgGrad5"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: rgba(255, 100, 100, 0)"
                      />
                      <stop
                        offset="20%"
                        style="stop-color: rgba(255, 100, 100, 0.8)"
                      />
                      <stop
                        offset="50%"
                        style="stop-color: rgba(255, 100, 100, 1)"
                      />
                      <stop
                        offset="80%"
                        style="stop-color: rgba(255, 100, 100, 0.8)"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: rgba(255, 100, 100, 0)"
                      />
                    </linearGradient>
                    <filter id="ecgGlow5">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M0,25 L20,25 L25,20 L30,30 L35,25 L40,25 L45,10 L50,40 L55,25 L60,25 L65,20 L70,30 L75,25 L100,25 L105,20 L110,30 L115,25 L120,25 L125,10 L130,40 L135,25 L140,25 L145,20 L150,30 L155,25 L200,25"
                    fill="none"
                    stroke="url(#ecgGrad5)"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="200"
                    stroke-dashoffset="200"
                    filter="url(#ecgGlow5)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- 左侧数据面板（左下角图表） -->
    <div class="grid-area-chart">
      <header class="panel-header">美食数据洞察</header>

      <section class="chart-section">
        <!-- 图表Tab导航 -->
        <nav class="chart-tabs">
          <button
            v-for="tab in chartTabs"
            :key="tab.id"
            class="tab-button"
            :class="{ active: activeTab === tab.id }"
            @click="switchChartTab(tab.id)"
          >
            {{ tab.title }}
          </button>
        </nav>

        <!-- 图表容器 -->
        <div class="chart-container">
          <div
            ref="chartContainer"
            class="chart-content"
            :class="`chart-${activeTab}`"
          ></div>
        </div>
      </section>
    </div>
    <!-- 右侧排行榜（右下角） -->
    <div class="grid-area-ranking">
      <!-- 空结果提示 -->
      <div v-if="filteredAndSortedFoods.length === 0" class="empty-results">
        <div class="empty-icon">🔍</div>
        <h4 class="empty-title">没有找到匹配的美食</h4>
        <p class="empty-description">尝试调整筛选条件，或者查看其他推荐</p>
        <button class="reset-button" @click="resetFilters">重置筛选条件</button>
      </div>

      <!-- 美食列表 -->
      <div v-else class="foods-container">
        <!-- 最多显示4个 -->
        <article
          v-for="(food, index) in filteredAndSortedFoods.slice(0, 4)"
          :key="food.id"
          class="food-card"
          :class="{
            'gold-medal': index === 0,
            'silver-medal': index === 1,
            'bronze-medal': index === 2,
            'fourth-place': index === 3,
          }"
        >
          <!-- 排名区域 -->
          <div class="rank-badge">
            <span class="rank-number">{{ index + 1 }}</span>
            <span v-if="index < 3" class="rank-medal">
              {{ ["🥇", "🥈", "🥉"][index] }}
            </span>
            <span v-else class="rank-medal"> 🏅 </span>
          </div>

          <!-- 卡片内容 -->
          <div class="card-content">
            <!-- 图片区域 -->
            <div class="image-container">
              <img :src="food.image" :alt="food.name" class="food-image" />
            </div>

            <div class="food-info">
              <h4 class="food-name">
                {{ food.name }}
                <span class="food-price-inline">¥{{ food.price }}</span>
              </h4>

              <div class="food-tags">
                <!-- 亮点作为标签 -->
                <span class="food-tag highlight-tag">
                  {{ food.highlight || "人气美食推荐" }}
                </span>
                <!-- 原标签 -->
                <span
                  v-for="(tag, tagIndex) in food.tags.slice(0, 2)"
                  :key="tagIndex"
                  class="food-tag"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="food-meta">
                <div class="food-rating">
                  <el-rate
                    :model-value="parseFloat(food.rating)"
                    :disabled="true"
                    :max="5"
                    :precision="1"
                    show-score
                    class="custom-element-rate"
                  />
                  <span class="rating-count"
                    >({{ food.reviewCount || 0 }}条评价)</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 操作区域 -->
          <div class="card-actions">
            <!-- 收藏按钮 -->
            <button
              class="action-button favorite-button"
              :class="{ active: isFavorite(food.id) }"
              @click="toggleFavorite(food.id)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  :fill="isFavorite(food.id) ? 'currentColor' : 'none'"
                />
              </svg>
            </button>

            <!-- 查看详情按钮 -->
            <button class="action-button detail-button" aria-label="查看详情">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>详情</span>
            </button>
          </div>
        </article>

        <!-- 更多按钮 -->
        <div v-if="filteredAndSortedFoods.length > 4" class="more-container">
          <button class="more-button">
            <span>查看更多</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  computed,
  nextTick,
  shallowRef,
} from "vue";
import * as echarts from "echarts";

// 接收props
const props = defineProps({
  popularFoods: {
    type: Array,
    default: () => [],
  },
  allFoods: {
    type: Array,
    default: () => [],
  },
});

// 定义筛选和排序的响应式数据
const selectedPriceFilter = ref("all");
const selectedRatingFilter = ref("all");
const selectedCategoryFilter = ref("all");
const selectedSort = ref("ranking");
// 使用 shallowRef 优化数组操作，因为我们只需要监听数组的引用变化
const favoriteFoods = shallowRef([]);

// 自定义下拉菜单状态管理
const openSelect = ref(null);

// 切换下拉菜单
const toggleSelect = (type) => {
  openSelect.value = openSelect.value === type ? null : type;
};

//下拉菜单选中什么值则将展示在下拉框的值更新为这个值
const selectOption = (type, value) => {
  switch (type) {
    case "price":
      selectedPriceFilter.value = value;
      break;
    case "rating":
      selectedRatingFilter.value = value;
      break;
    case "category":
      selectedCategoryFilter.value = value;
      break;
    case "sort":
      selectedSort.value = value;
      break;
  }
  openSelect.value = null;
};

// 点击外部区域关闭下拉菜单
const handleClickOutside = (event) => {
  const customSelects = document.querySelectorAll(".custom-select");
  let clickedInside = false;

  customSelects.forEach((select) => {
    if (select.contains(event.target)) {
      clickedInside = true;
    }
  });

  if (!clickedInside) {
    openSelect.value = null;
  }
};

// 获取选中的文本
const getSelectedText = (options, value, placeholder) => {
  const option = options.find((opt) => opt.value === value);
  return option ? option.text : placeholder;
};

// 获取选中的分类文本
const getSelectedCategoryText = () => {
  if (selectedCategoryFilter.value === "all") {
    return "全部";
  }
  return selectedCategoryFilter.value || "选择分类";
};

// 下拉选项数据
const priceOptions = [
  { value: "all", text: "全部" },
  { value: "0-50", text: "¥0-50" },
  { value: "51-100", text: "¥51-100" },
  { value: "101-150", text: "¥101-150" },
  { value: "151+", text: "¥151+" },
];

const ratingOptions = [
  { value: "all", text: "全部" },
  { value: "4.5+", text: "4.5分以上" },
  { value: "4.0-4.4", text: "4.0-4.4分" },
  { value: "3.5-3.9", text: "3.5-3.9分" },
  { value: "3.0-3.4", text: "3.0-3.4分" },
];

const sortOptions = [
  { value: "ranking", text: "按排名" },
  { value: "rating", text: "按评分" },
  { value: "price-asc", text: "价格从低到高" },
  { value: "price-desc", text: "价格从高到低" },
  { value: "reviews", text: "按评价数量" },
];

// 重置所有筛选条件
const resetFilters = () => {
  selectedPriceFilter.value = "all";
  selectedRatingFilter.value = "all";
  selectedCategoryFilter.value = "all";
  selectedSort.value = "ranking";
};

const uniqueCategories = computed(() => {
  const categories = new Set();
  props.allFoods.forEach((food) => {
    if (food.category) {
      categories.add(food.category);
    }
  });
  return Array.from(categories);
});

// 使用 computed 缓存计算结果，只有当依赖变化时才重新计算
const filteredAndSortedFoods = computed(() => {
  // 直接使用 props.popularFoods 的引用，避免不必要的数组拷贝
  let result = props.popularFoods;

  // 应用价格筛选
  if (selectedPriceFilter.value !== "all") {
    const [min, max] = selectedPriceFilter.value.split("-");
    if (max === undefined) {
      result = result.filter((food) => food.price >= parseInt(min));
    } else {
      result = result.filter(
        (food) => food.price >= parseInt(min) && food.price <= parseInt(max),
      );
    }
  }

  // 应用评分筛选
  if (selectedRatingFilter.value !== "all") {
    const ratingValue = selectedRatingFilter.value;
    if (ratingValue === "4.5+") {
      result = result.filter((food) => food.rating >= 4.5);
    } else if (ratingValue.includes("-")) {
      const [min, max] = ratingValue.split("-").map(parseFloat);
      result = result.filter(
        (food) => food.rating >= min && food.rating <= max,
      );
    }
  }

  // 应用分类筛选
  if (selectedCategoryFilter.value !== "all") {
    result = result.filter(
      (food) => food.category === selectedCategoryFilter.value,
    );
  }

  // 应用排序 - 只有在需要时才创建新数组
  if (selectedSort.value !== "ranking") {
    // 创建副本避免修改原始数据
    result = [...result];
    switch (selectedSort.value) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "reviews":
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
    }
  }

  return result;
});

// 收藏功能
const toggleFavorite = (foodId) => {
  const currentFavorites = [...favoriteFoods.value];
  const index = currentFavorites.indexOf(foodId);
  if (index === -1) {
    currentFavorites.push(foodId);
  } else {
    currentFavorites.splice(index, 1);
  }
  favoriteFoods.value = currentFavorites; // 重新赋值触发响应式更新
};

const isFavorite = (foodId) => {
  return favoriteFoods.value.includes(foodId);
};

// 图表配置
const chartTabs = ref([
  { id: "rating", title: "评分对比" },
  { id: "price", title: "价格分布" },
  { id: "category", title: "分类数量" },
  { id: "price-rating", title: "价格-评分关系" },
]);

// 当前激活的图表Tab
const activeTab = ref("rating");

// 图表容器ref
const chartContainer = ref(null);

// 当前图表实例
let currentChart = null;

// Tab切换方法
const switchChartTab = (tabId) => {
  activeTab.value = tabId;
  // 切换Tab后重新初始化当前图表
  nextTick(() => {
    setTimeout(() => {
      initChart();
    }, 50);
  });
};

// 初始化评分对比图表
const initRatingChart = () => {
  if (!chartContainer.value || !props.popularFoods.length) return;

  const foodNames = props.popularFoods.map((food) => food.name);
  const foodRatings = props.popularFoods.map((food) => food.rating);
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeead"];

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      backgroundColor: "rgba(20, 35, 55, 0.95)",
      borderColor: "rgba(0, 255, 255, 0.5)",
      borderWidth: 2,
      textStyle: { color: "#fff" },
      transitionDuration: 0.3,
    },
    grid: {
      left: "10%",
      right: "10%",
      top: "15%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      name: "美食名称",
      nameLocation: "middle",
      nameGap: 60,
      nameTextStyle: {
        color: "#ffff00",
        fontSize: 14,
        fontWeight: "bold",
        textShadowBlur: 5,
        textShadowColor: "rgba(255, 255, 0, 0.5)",
      },
      data: foodNames,
      axisLabel: {
        interval: 0,
        rotate: 45,
        fontSize: 12,
        color: "#e0e0e0",
      },
      axisLine: { show: true },
      axisTick: { show: true },
    },
    yAxis: {
      type: "value",
      name: "评分",
      nameLocation: "end",
      nameGap: 25,
      nameTextStyle: {
        color: "#ffff00",
        fontSize: 14,
        fontWeight: "bold",
        textShadowBlur: 5,
        textShadowColor: "rgba(255, 255, 0, 0.5)",
      },
      min: 3,
      max: 5.5,
      interval: 0.5,
      axisLabel: { color: "#e0e0e0" },
      axisLine: { show: true },
      axisTick: { show: true },
      splitLine: { show: true },
    },
    series: [
      {
        name: "评分",
        type: "bar",
        barWidth: "60%",
        data: foodRatings,
        animation: true,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        itemStyle: {
          color: (params) => {
            const baseColor = colors[params.dataIndex % colors.length];
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: baseColor },
              { offset: 1, color: baseColor + "88" }, // 透明度降低
            ]);
          },
          radius: [8, 8],
          shadowBlur: 10,
          shadowColor: "rgba(255, 255, 255, 0.3)",
          shadowOffsetY: 2,
        },
        label: {
          show: true,
          position: "top",
          fontSize: 14,
          fontWeight: "bold",
          formatter: "{c}",
          color: "#fff",
          shadowBlur: 5,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba(255, 255, 255, 0.5)",
            shadowOffsetY: 5,
          },
        },
      },
    ],
  };
};

// 初始化价格分布环形图
const initPriceChart = () => {
  if (!chartContainer.value || !props.allFoods.length) return;

  const priceRanges = {
    "¥0-50": 0,
    "¥51-100": 0,
    "¥101-150": 0,
    "¥151-200": 0,
    "¥200+": 0,
  };

  props.allFoods.forEach((food) => {
    const price = food.price;
    if (price <= 50) priceRanges["¥0-50"]++;
    else if (price <= 100) priceRanges["¥51-100"]++;
    else if (price <= 150) priceRanges["¥101-150"]++;
    else if (price <= 200) priceRanges["¥151-200"]++;
    else priceRanges["¥200+"]++;
  });

  const pieData = Object.entries(priceRanges).map(([name, value]) => ({
    name,
    value,
  }));
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#ffeead",
    "#feca57",
  ];
  const totalCount = props.allFoods.length;

  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c}种美食 ({d}%)",
      backgroundColor: "rgba(20, 35, 55, 0.95)",
      borderColor: "rgba(0, 255, 255, 0.5)",
      borderWidth: 2,
      textStyle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
      },
      transitionDuration: 0.3,
      padding: [10, 15],
      borderRadius: 8,
    },
    legend: {
      orient: "vertical",
      right: 10,
      top: "center",
      data: Object.keys(priceRanges),
      textStyle: {
        fontSize: 13,
        color: "#e0e0e0",
        fontWeight: "500",
      },
      itemWidth: 14,
      itemHeight: 14,
      itemGap: 15,
      selectedMode: true,
    },
    series: [
      {
        name: "价格分布",
        type: "pie",
        radius: ["50%", "70%"],
        center: ["35%", "50%"],
        avoidLabelOverlap: true,
        animation: true,
        animationDuration: 1500,
        animationEasing: "cubicOut",
        animationDelay: (idx) => idx * 50,
        itemStyle: {
          borderRadius: 10,
          borderColor: "rgba(30, 45, 65, 1)",
          borderWidth: 2,
          color: (params) => {
            const baseColor = colors[params.dataIndex % colors.length];
            return new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
              { offset: 0, color: baseColor + "ff" },
              { offset: 0.6, color: baseColor + "cc" },
              { offset: 1, color: baseColor + "88" },
            ]);
          },
          shadowBlur: 8,
          shadowColor: "rgba(255, 255, 255, 0.2)",
          shadowOffsetY: 3,
        },
        label: {
          show: false,
        },
        emphasis: {
          scale: true,
          scaleSize: 8,
          shadowBlur: 20,
          shadowColor: "rgba(255, 255, 255, 0.6)",
          shadowOffsetY: 8,
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: pieData,
      },
      // 中间总数量显示
      {
        name: "总数",
        type: "pie",
        radius: ["0%", "40%"],
        center: ["35%", "50%"],
        avoidLabelOverlap: true,
        itemStyle: {
          color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
            { offset: 0, color: "rgba(30, 45, 65, 0.9)" },
            { offset: 1, color: "rgba(20, 35, 55, 0.95)" },
          ]),
          borderWidth: 2,
          borderColor: "rgba(0, 255, 255, 0.3)",
          shadowBlur: 15,
          shadowColor: "rgba(0, 255, 255, 0.2)",
          shadowOffsetY: 5,
        },
        label: {
          show: true,
          position: "center",
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff",
          formatter: `总美食数\n${totalCount}`,
          lineHeight: 22,
          shadowBlur: 8,
          shadowColor: "rgba(0, 0, 0, 0.7)",
        },
        labelLine: {
          show: false,
        },
        data: [{ value: 1, name: "总数" }],
      },
    ],
  };
};

// 初始化分类数量水平柱状图
const initCategoryChart = () => {
  if (!chartContainer.value || !props.allFoods.length) return;

  // 统计分类数量
  const categoryCounts = {};
  props.allFoods.forEach((food) => {
    categoryCounts[food.category] = (categoryCounts[food.category] || 0) + 1;
  });

  // 按数量排序
  const sortedCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  const categoryNames = sortedCategories.map((item) => item.name);
  const categoryValues = sortedCategories.map((item) => item.value);
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#ffeead",
    "#feca57",
  ];

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "rgba(255, 255, 255, 0.15)",
          blur: 10,
        },
      },
      backgroundColor: "rgba(20, 35, 55, 0.95)",
      borderColor: "rgba(0, 255, 255, 0.5)",
      borderWidth: 2,
      textStyle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
      },
      transitionDuration: 0.3,
      formatter: "{b}: {c}种美食",
      padding: [8, 12],
      borderRadius: 6,
    },
    grid: {
      left: "18%",
      right: "10%",
      top: "10%",
      bottom: "10%",
      containLabel: true,
    },
    // 水平柱状图：y轴为分类，x轴为数量
    xAxis: {
      type: "value",
      name: "美食数量",
      nameLocation: "middle",
      nameGap: 40,
      nameTextStyle: {
        color: "#ffff00",
        fontSize: 14,
        fontWeight: "bold",
        textShadowBlur: 5,
        textShadowColor: "rgba(255, 255, 0, 0.5)",
      },
      minInterval: 1,
      axisLabel: {
        formatter: "{value}种",
        color: "#e0e0e0",
        fontSize: 12,
        fontWeight: "500",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      name: "美食分类",
      nameLocation: "end",
      nameGap: 50,
      nameTextStyle: {
        color: "#ffff00",
        fontSize: 14,
        fontWeight: "bold",
        textShadowBlur: 5,
        textShadowColor: "rgba(255, 255, 0, 0.5)",
      },
      data: categoryNames,
      axisLabel: {
        color: "#e0e0e0",
        fontSize: 13,
        interval: 0,
        width: 90,
        overflow: "truncate",
        fontWeight: "500",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      axisTick: {
        show: false,
      },
      axisPointer: {
        show: true,
        type: "shadow",
        shadowStyle: {
          color: "rgba(0, 255, 255, 0.1)",
          blur: 5,
        },
      },
    },
    series: [
      {
        name: "美食数量",
        type: "bar",
        barWidth: "65%",
        data: categoryValues,
        animation: true,
        animationDuration: 1200,
        animationEasing: "cubicOut",
        animationDelay: (idx) => idx * 80,
        animationDurationUpdate: 800,
        itemStyle: {
          color: (params) => {
            const baseColor = colors[params.dataIndex % colors.length];
            return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: baseColor + "ff" },
              { offset: 0.5, color: baseColor + "cc" },
              { offset: 1, color: baseColor + "99" },
            ]);
          },
          radius: [0, 12, 12, 0],
          shadowBlur: 8,
          shadowColor: "rgba(255, 255, 255, 0.3)",
          shadowOffsetX: 5,
          shadowOffsetY: 2,
        },
        label: {
          show: true,
          position: "inside",
          fontSize: 12,
          fontWeight: "bold",
          formatter: "{c}种",
          color: "#fff",
          textShadowBlur: 3,
          textShadowColor: "rgba(0, 0, 0, 0.8)",
          // 添加标签动画
          animation: true,
          animationDuration: 500,
          animationEasing: "backOut",
          animationDelay: (idx) => idx * 80 + 500,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowColor: "rgba(255, 255, 255, 0.6)",
            shadowOffsetX: 8,
            shadowOffsetY: 3,
          },
          label: {
            fontSize: 16,
            color: "#fff",
            shadowBlur: 8,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      },
    ],
  };
};

// 初始化价格-评分关系气泡图
const initPriceRatingChart = () => {
  if (!chartContainer.value || !props.allFoods.length) return;

  // 按价格区间和评分区间分组，统计数量
  const priceRatingGroups = {};
  props.allFoods.forEach((food) => {
    // 价格区间：每20元一个区间
    const priceRange = Math.floor(food.price / 20) * 20;
    // 评分区间：每0.5分一个区间
    const ratingRange = Math.floor(food.rating / 0.5) * 0.5;
    const key = `${priceRange}-${ratingRange}`;

    if (!priceRatingGroups[key]) {
      priceRatingGroups[key] = {
        price: priceRange + 10, // 区间中间值
        rating: ratingRange + 0.25, // 区间中间值
        count: 0,
        foods: [],
      };
    }
    priceRatingGroups[key].count++;
    priceRatingGroups[key].foods.push(food);
  });

  // 准备气泡图数据 [price, rating, count]
  const bubbleData = Object.values(priceRatingGroups).map((group) => [
    group.price,
    group.rating,
    group.count,
  ]);

  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeead"];

  return {
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        const dataIndex = params.dataIndex;
        const group = Object.values(priceRatingGroups)[dataIndex];
        const priceMin = group.price - 10;
        const priceMax = group.price + 10;
        const ratingMin = group.rating - 0.25;
        const ratingMax = group.rating + 0.25;

        return `价格区间: ¥${priceMin}-${priceMax}<br/>评分区间: ${ratingMin.toFixed(
          1,
        )}-${ratingMax.toFixed(1)}<br/>美食数量: ${group.count}种美食`;
      },
      backgroundColor: "rgba(20, 35, 55, 0.95)",
      borderColor: "rgba(0, 255, 255, 0.5)",
      borderWidth: 2,
      textStyle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
      },
      transitionDuration: 0.3,
      padding: [10, 15],
      borderRadius: 8,
    },
    grid: {
      left: "12%",
      right: "12%",
      top: "15%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      name: "价格",
      nameLocation: "middle",
      nameGap: 40,
      nameTextStyle: {
        color: "#ffff00",
        fontSize: 14,
        fontWeight: "bold",
        textShadowBlur: 5,
        textShadowColor: "rgba(255, 255, 0, 0.5)",
      },
      axisLabel: {
        formatter: "¥{value}",
        color: "#e0e0e0",
        fontSize: 12,
        fontWeight: "500",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "value",
      name: "评分",
      nameLocation: "end",
      nameGap: 25,
      nameTextStyle: {
        color: "#ffff00",
        fontSize: 14,
        fontWeight: "bold",
        textShadowBlur: 5,
        textShadowColor: "rgba(255, 255, 0, 0.5)",
      },
      min: 3,
      max: 5.5,
      interval: 0.5,
      axisLabel: {
        color: "#e0e0e0",
        fontSize: 12,
        fontWeight: "500",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.3)",
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "价格-评分关系",
        type: "scatter",
        data: bubbleData,
        symbolSize: (data) => {
          // 根据数量动态调整气泡大小
          return Math.max(12, Math.min(70, data[2] * 2.2));
        },
        animation: true,
        animationDuration: 2000,
        animationEasing: "elasticOut",
        animationDelay: (idx) => idx * 15,
        itemStyle: {
          color: (params) => {
            // 根据评分动态调整颜色
            const rating = params.data[1];
            const colorIndex = Math.floor((rating - 3) / 0.5) % colors.length;
            const baseColor = colors[colorIndex];
            return new echarts.graphic.RadialGradient(0.4, 0.4, 1, [
              { offset: 0, color: baseColor + "ff" },
              { offset: 0.4, color: baseColor + "cc" },
              { offset: 0.7, color: baseColor + "99" },
              { offset: 1, color: baseColor + "66" },
            ]);
          },
          shadowBlur: 12,
          shadowColor: "rgba(255, 255, 255, 0.4)",
          shadowOffsetX: 2,
          shadowOffsetY: 4,
        },
        emphasis: {
          symbolSize: (data) => {
            return Math.max(20, Math.min(80, data[2] * 2.8));
          },
          shadowBlur: 20,
          shadowColor: "rgba(255, 255, 255, 0.7)",
          shadowOffsetX: 5,
          shadowOffsetY: 8,
          itemStyle: {
            color: (params) => {
              const rating = params.data[1];
              const colorIndex = Math.floor((rating - 3) / 0.5) % colors.length;
              const baseColor = colors[colorIndex];
              return new echarts.graphic.RadialGradient(0.4, 0.4, 1, [
                { offset: 0, color: baseColor + "ff" },
                { offset: 0.3, color: baseColor + "ee" },
                { offset: 0.6, color: baseColor + "cc" },
                { offset: 1, color: baseColor + "88" },
              ]);
            },
          },
        },
        // 添加脉动动画效果
        rippleEffect: {
          show: true,
          brushType: "stroke",
          scale: 2.5,
          period: 3,
          itemStyle: {
            color: (params) => {
              const rating = params.data[1];
              const colorIndex = Math.floor((rating - 3) / 0.5) % colors.length;
              return colors[colorIndex] + "44";
            },
            shadowBlur: 10,
            shadowColor: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
      // 添加趋势线引导
      {
        name: "趋势线",
        type: "line",
        data: [
          [0, 3.5],
          [200, 5.0],
        ],
        showSymbol: false,
        lineStyle: {
          color: "rgba(0, 255, 255, 0.6)",
          width: 2,
          type: "dashed",
          opacity: 0.6,
        },
        tooltip: {
          show: false,
        },
        animation: {
          show: true,
          animationDuration: 2000,
          animationEasing: "cubicOut",
        },
      },
    ],
  };
};

// 清理图表事件监听器
const cleanupChartEventListeners = () => {
  if (currentChart) {
    currentChart.off("mouseover");
    currentChart.off("mouseout");
  }
};

// 添加价格分布图表的事件监听
const addPriceChartEventListeners = () => {
  if (activeTab.value === "price" && currentChart) {
    // 鼠标悬停事件
    currentChart.on("mouseover", "series", (params) => {
      if (params.seriesName === "价格分布") {
        // 更新中间圆的显示内容为当前悬停的扇面信息
        currentChart.setOption({
          series: [
            {}, // 第一个系列保持不变
            {
              label: {
                formatter: `${params.name}\n${params.value}种美食 (${params.percent}%)`,
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.8)",
                lineHeight: 26,
              },
            },
          ],
        });
      }
    });

    // 鼠标离开事件
    currentChart.on("mouseout", "series", (params) => {
      if (params.seriesName === "价格分布") {
        // 恢复显示总美食数
        const totalCount = props.allFoods.length;
        currentChart.setOption({
          series: [
            {}, // 第一个系列保持不变
            {
              label: {
                formatter: `总美食数\n${totalCount}`,
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
                shadowBlur: 8,
                shadowColor: "rgba(0, 0, 0, 0.7)",
                lineHeight: 26,
              },
            },
          ],
        });
      }
    });
  }
};

// 通用图表初始化方法
const initChart = () => {
  if (!chartContainer.value) return;

  // 如果图表实例不存在，创建新实例
  if (!currentChart) {
    // 确保容器有正确的尺寸
    chartContainer.value.style.width = "100%";
    chartContainer.value.style.height = "400px";

    // 初始化新图表
    currentChart = echarts.init(chartContainer.value);
  }

  // 根据当前激活的Tab初始化对应的图表
  let chartOption = null;
  switch (activeTab.value) {
    case "rating":
      chartOption = initRatingChart();
      break;
    case "price":
      chartOption = initPriceChart();
      break;
    case "category":
      chartOption = initCategoryChart();
      break;
    case "price-rating":
      chartOption = initPriceRatingChart();
      break;
  }

  // 设置图表选项
  if (chartOption) {
    // 使用 replaceMerge 模式，只更新变化的部分
    currentChart.setOption(chartOption, true);
    // 确保图表立即调整大小以填充容器
    currentChart.resize();
  } else {
    // 如果没有数据，创建空图表
    currentChart.setOption(
      {
        title: {
          text: "暂无数据",
          left: "center",
          top: "center",
          textStyle: {
            color: "#999",
            fontSize: 14,
          },
        },
        grid: {
          left: "10%",
          right: "10%",
          top: "15%",
          bottom: "15%",
        },
      },
      true,
    );
    currentChart.resize();
  }

  // 清理之前的事件监听器，避免累积
  cleanupChartEventListeners();

  // 添加价格分布图表的事件监听
  addPriceChartEventListeners();
};

// 图表大小调整方法
const handleChartResize = () => {
  if (currentChart) {
    currentChart.resize();
  }
};

// 数据变化监听 - 直接监听props对象，确保任何变化都能被检测到
watch(
  () => props,
  (newProps) => {
    try {
      // 切换省份先销毁旧图表实例
      if (currentChart) {
        currentChart.dispose();
        currentChart = null;
      }
      initChart();
    } catch (error) {}
  },
  { deep: true },
);

// 生命周期钩子
onMounted(() => {
  initChart();
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", handleChartResize);
});

onUnmounted(() => {
  // 销毁图表实例
  if (currentChart) {
    // 清理所有事件监听器
    currentChart.off();
    currentChart.dispose();
    currentChart = null;
  }
  document.removeEventListener("click", handleClickOutside);
  // 移除事件监听器
  window.removeEventListener("resize", handleChartResize);
});
</script>

<style scoped lang="scss" src="./index.scss" />
