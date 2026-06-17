<template>
  <svg
    class="background-svg"
    width="100%"
    height="100%"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(5, 15, 35, 0.95)" />
        <stop offset="20%" stop-color="rgba(15, 30, 60, 0.98)" />
        <stop offset="40%" stop-color="rgba(20, 40, 80, 0.95)" />
        <stop offset="60%" stop-color="rgba(15, 35, 70, 0.98)" />
        <stop offset="80%" stop-color="rgba(10, 25, 50, 0.95)" />
        <stop offset="100%" stop-color="rgba(5, 15, 30, 0.9)" />
      </linearGradient>

      <radialGradient id="scanGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(0, 255, 150, 0.4)" />
        <stop offset="40%" stop-color="rgba(0, 220, 120, 0.2)" />
        <stop offset="70%" stop-color="rgba(0, 180, 90, 0.1)" />
        <stop offset="100%" stop-color="rgba(0, 100, 50, 0)" />
      </radialGradient>

      <radialGradient id="scanGradient2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(0, 200, 255, 0.4)" />
        <stop offset="40%" stop-color="rgba(0, 180, 220, 0.2)" />
        <stop offset="70%" stop-color="rgba(0, 150, 200, 0.1)" />
        <stop offset="100%" stop-color="rgba(0, 50, 100, 0)" />
      </radialGradient>

      <radialGradient id="scanGradient3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(150, 100, 255, 0.4)" />
        <stop offset="40%" stop-color="rgba(120, 80, 220, 0.2)" />
        <stop offset="70%" stop-color="rgba(90, 60, 180, 0.1)" />
        <stop offset="100%" stop-color="rgba(50, 30, 100, 0)" />
      </radialGradient>

      <radialGradient id="gridGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(0, 200, 255, 0.15)" />
        <stop offset="50%" stop-color="rgba(0, 150, 200, 0.08)" />
        <stop offset="100%" stop-color="rgba(0, 50, 100, 0)" />
      </radialGradient>

      <linearGradient id="gridLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(0, 200, 255, 0.02)" />
        <stop offset="50%" stop-color="rgba(0, 200, 255, 0.1)" />
        <stop offset="100%" stop-color="rgba(0, 200, 255, 0.02)" />
      </linearGradient>

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

      <!-- 增强的发光滤?-->
      <filter id="radarGlow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <filter id="centerGlow" x="-300%" y="-300%" width="700%" height="700%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

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
      <!-- 主要同心?-->
      <g stroke="rgba(0, 200, 255, 0.15)" stroke-width="1.5">
        <circle cx="500" cy="500" r="120" />
        <circle cx="500" cy="500" r="240" />
        <circle cx="500" cy="500" r="360" />
        <circle cx="500" cy="500" r="480" />
      </g>

      <!-- 辅助同心?-->
      <g stroke="rgba(0, 200, 255, 0.08)" stroke-width="0.8">
        <circle cx="500" cy="500" r="60" />
        <circle cx="500" cy="500" r="180" />
        <circle cx="500" cy="500" r="300" />
        <circle cx="500" cy="500" r="420" />
      </g>
    </g>

    <!-- 雷达扫描?-->
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

      <!-- 辅助扫描?- 蓝色 -->
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

      <!-- 扫描?- 紫色 -->
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

      <!-- 扫描?- 黄色 -->
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

      <!-- 扫描?- 红色 -->
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

      <!-- 新增扫描?- 青色 -->
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

      <!-- 新增扫描?- 粉色 -->
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

      <!-- 新增扫描?- 橙色 -->
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

      <!-- 新增雷达?-->
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

      <!-- 新增更多扫描?-->
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

      <!-- 新增彩色扫描?-->
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

    <!-- 增强的雷达扫描波?-->
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

    <!-- 雷达网格交叉?-->
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

      <!-- 新增交叉?-->
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

    <!-- 增强的雷达中?-->
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

    <!-- 中心辐射?-->
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
</template>

<script setup lang="ts">
// 无需额外逻辑，纯 SVG 背景组件
</script>

<style scoped lang="scss">
  .background-svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>