<template>
  <svg
    class="disc-svg ellipse"
    viewBox="0 0 400 220"
    xmlns="http://www.w3.org/2000/svg"
    style="overflow: visible"
  >
    <!-- 外层椭圆 - 上细下粗 ridge 边框效果 -->
    <!-- 底部粗边框 -->
    <ellipse
      cx="200"
      cy="110"
      rx="140"
      ry="50"
      fill="url(#discGradient)"
      stroke="rgba(0, 255, 255, 0.8)"
      stroke-width="16"
      stroke-dasharray="0 314.16"
      stroke-dashoffset="-157.08"
      filter="drop-shadow(0 0 40px rgba(0, 255, 255, 1))"
    />
    <!-- 顶部细边框 -->
    <ellipse
      cx="200"
      cy="110"
      rx="140"
      ry="50"
      fill="none"
      stroke="rgba(255, 255, 255, 0.6)"
      stroke-width="4"
      stroke-dasharray="0 314.16"
      stroke-dashoffset="0"
    />
    <!-- 中间边框 -->
    <ellipse
      cx="200"
      cy="110"
      rx="140"
      ry="50"
      fill="none"
      stroke="rgba(0, 255, 255, 0.4)"
      stroke-width="10"
    />

    <!-- 环形动画 - 每层不同颜色 -->
    <g class="disc-rings">
      <!-- 第1层 - 青色 -->
      <ellipse
        cx="200"
        cy="110"
        rx="20"
        ry="7"
        stroke="rgba(0, 255, 255, 0.9)"
        fill="none"
        stroke-width="2"
      >
        <animate
          attributeName="rx"
          values="20;30;20"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="7;10.5;7"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </ellipse>
      <!-- 第2层 - 紫色 -->
      <ellipse
        cx="200"
        cy="110"
        rx="40"
        ry="14"
        stroke="rgba(147, 112, 219, 0.8)"
        fill="none"
        stroke-width="2"
      >
        <animate
          attributeName="rx"
          values="40;60;40"
          dur="3s"
          repeatCount="indefinite"
          begin="0.5s"
        />
        <animate
          attributeName="ry"
          values="14;21;14"
          dur="3s"
          repeatCount="indefinite"
          begin="0.5s"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </ellipse>
      <!-- 第3层 - 粉色 -->
      <ellipse
        cx="200"
        cy="110"
        rx="60"
        ry="21"
        stroke="rgba(255, 105, 180, 0.7)"
        fill="none"
        stroke-width="2"
      >
        <animate
          attributeName="rx"
          values="60;90;60"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
        <animate
          attributeName="ry"
          values="21;31.5;21"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
      </ellipse>
      <!-- 第4层 - 金色 -->
      <ellipse
        cx="200"
        cy="110"
        rx="80"
        ry="28"
        stroke="rgba(255, 215, 0, 0.6)"
        fill="none"
        stroke-width="2"
      >
        <animate
          attributeName="rx"
          values="80;120;80"
          dur="3s"
          repeatCount="indefinite"
          begin="1.5s"
        />
        <animate
          attributeName="ry"
          values="28;42;28"
          dur="3s"
          repeatCount="indefinite"
          begin="1.5s"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
          begin="1.5s"
        />
      </ellipse>
      <!-- 第5层 - 橙色 -->
      <ellipse
        cx="200"
        cy="110"
        rx="100"
        ry="35"
        stroke="rgba(255, 140, 0, 0.5)"
        fill="none"
        stroke-width="2"
      >
        <animate
          attributeName="rx"
          values="100;130;100"
          dur="3s"
          repeatCount="indefinite"
          begin="2s"
        />
        <animate
          attributeName="ry"
          values="35;45.5;35"
          dur="3s"
          repeatCount="indefinite"
          begin="2s"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
          begin="2s"
        />
      </ellipse>
      <!-- 第6层 - 绿色 -->
      <ellipse
        cx="200"
        cy="110"
        rx="120"
        ry="42"
        stroke="rgba(50, 205, 50, 0.4)"
        fill="none"
        stroke-width="2"
      >
        <animate
          attributeName="rx"
          values="120;140;120"
          dur="3s"
          repeatCount="indefinite"
          begin="2.5s"
        />
        <animate
          attributeName="ry"
          values="42;49;42"
          dur="3s"
          repeatCount="indefinite"
          begin="2.5s"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
          begin="2.5s"
        />
      </ellipse>
    </g>

    <!-- 粒子动画 -->
    <g class="disc-particles">
      <circle
        cx="155"
        cy="98"
        r="2"
        fill="rgba(0, 255, 255, 1)"
        filter="drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))"
      >
        <animate
          attributeName="cy"
          values="98;86;98"
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
        cy="122"
        r="2"
        fill="rgba(255, 215, 0, 1)"
        filter="drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))"
      >
        <animate
          attributeName="cy"
          values="122;110;122"
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
        cy="85"
        r="1.5"
        fill="rgba(255, 105, 180, 1)"
        filter="drop-shadow(0 0 8px rgba(255, 105, 180, 0.8))"
      >
        <animate
          attributeName="cy"
          values="85;75;85"
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

    <!-- 渐变定义 -->
    <defs>
      <linearGradient
        id="discGradient"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stop-color="rgba(0, 255, 255, 0.1)" />
        <stop offset="50%" stop-color="rgba(147, 112, 219, 0.2)" />
        <stop offset="100%" stop-color="rgba(0, 255, 255, 0.5)" />
      </linearGradient>
    </defs>
  </svg>
</template>