<template>
  <svg
    class="disc-svg circle"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    style="overflow: visible"
  >
    <circle
      cx="200"
      cy="200"
      r="140"
      fill="url(#activeDiscGradient)"
      stroke="rgba(255, 255, 255, 0.8)"
      stroke-width="8"
      filter="drop-shadow(0 0 40px rgba(255, 255, 255, 1))"
    />
    <circle
      cx="200"
      cy="200"
      r="132"
      fill="none"
      stroke="rgba(255, 255, 255, 0.8)"
      stroke-width="4"
      filter="drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))"
    />

    <g class="disc-rings" clip-path="url(#discClip)">
      <g>
        <polygon
          points="200,180 215,210 185,210"
          stroke="rgba(255, 255, 255, 0.9)"
          fill="none"
          stroke-width="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotateY"
          values="0 200 200; 180 200 200; 360 200 200"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotateX"
          values="0; 15; 0; -15; 0"
          dur="8s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1; 1.2; 1"
          dur="5s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
      <!-- 第2层 - 白色正方形 - 围绕Y轴翻转并X轴偏转 -->
      <g>
        <rect
          x="180"
          y="180"
          width="40"
          height="40"
          stroke="rgba(255, 255, 255, 0.8)"
          fill="none"
          stroke-width="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotateY"
          values="0 200 200; 180 200 200; 360 200 200"
          dur="12s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotateX"
          values="0; -10; 0; 10; 0"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1; 0.8; 1"
          dur="6s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
      <!-- 第3层 - 白色五边形 - 围绕Y轴翻转并X轴偏转 -->
      <g>
        <polygon
          points="200,140 225,165 215,195 185,195 175,165"
          stroke="rgba(255, 255, 255, 0.7)"
          fill="none"
          stroke-width="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotateY"
          values="0 200 200; 180 200 200; 360 200 200"
          dur="15s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotateX"
          values="0; 20; 0; -20; 0"
          dur="12s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1; 1.1; 1"
          dur="7s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
      <!-- 第4层 - 白色六边形 - 围绕Y轴翻转并X轴偏转 -->
      <g>
        <polygon
          points="200,120 230,140 230,170 200,190 170,170 170,140"
          stroke="rgba(255, 255, 255, 0.6)"
          fill="none"
          stroke-width="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotateY"
          values="0 200 200; 180 200 200; 360 200 200"
          dur="18s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotateX"
          values="0; -15; 0; 15; 0"
          dur="14s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1; 0.9; 1"
          dur="8s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
      <!-- 第5层 - 白色星形 - 围绕Y轴翻转并X轴偏转 -->
      <g>
        <polygon
          points="200,100 210,130 240,130 215,150 225,180 200,160 175,180 185,150 160,130 190,130"
          stroke="rgba(255, 255, 255, 0.5)"
          fill="none"
          stroke-width="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotateY"
          values="0 200 200; 180 200 200; 360 200 200"
          dur="20s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotateX"
          values="0; 25; 0; -25; 0"
          dur="16s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1; 1.15; 1"
          dur="9s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
      <!-- 第6层 - 白色菱形 - 围绕Y轴翻转并X轴偏转 -->
      <g>
        <polygon
          points="200,80 240,160 200,240 160,160"
          stroke="rgba(255, 255, 255, 0.4)"
          fill="none"
          stroke-width="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotateY"
          values="0 200 200; 180 200 200; 360 200 200"
          dur="22s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotateX"
          values="0; -20; 0; 20; 0"
          dur="18s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1; 0.95; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
    </g>

    <!-- 粒子动画 -->
    <g class="disc-particles" clip-path="url(#discClip)">
      <circle
        cx="155"
        cy="188"
        r="2"
        fill="rgba(255, 255, 255, 1)"
        filter="drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
      >
        <animate
          attributeName="cy"
          values="188;176;188"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="2;2.4;2"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="245"
        cy="212"
        r="2"
        fill="rgba(255, 255, 255, 1)"
        filter="drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
      >
        <animate
          attributeName="cy"
          values="212;200;212"
          dur="3s"
          repeatCount="indefinite"
          begin="1.5s"
        />
        <animate
          attributeName="r"
          values="2;2.4;2"
          dur="3s"
          repeatCount="indefinite"
          begin="1.5s"
        />
      </circle>
      <circle
        cx="200"
        cy="175"
        r="1.5"
        fill="rgba(255, 255, 255, 1)"
        filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))"
      >
        <animate
          attributeName="cy"
          values="175;165;175"
          dur="2.5s"
          repeatCount="indefinite"
          begin="0.8s"
        />
        <animate
          attributeName="r"
          values="1.5;2;1.5"
          dur="2.5s"
          repeatCount="indefinite"
          begin="0.8s"
        />
      </circle>
    </g>

    <!-- 渐变定义和裁剪路径 -->
    <defs>
      <!-- 白色透明渐变 -->
      <radialGradient
        id="activeDiscGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.2)" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.1)" />
      </radialGradient>

      <clipPath id="discClip">
        <circle cx="200" cy="200" r="140" />
      </clipPath>
    </defs>
  </svg>
</template>