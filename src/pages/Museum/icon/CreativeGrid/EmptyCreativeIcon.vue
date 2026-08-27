<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160" fill="none" class="empty-icon">
    <!-- 背景光晕 -->
    <circle cx="100" cy="80" r="60" fill="#f6daac" opacity="0.35" />
    <circle cx="100" cy="80" r="40" fill="#e6c8a0" opacity="0.25" />

    <!-- 悬挂的空卡片 -->
    <line x1="100" y1="8" x2="100" y2="32" stroke="#a0522d" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="100" cy="36" r="7" fill="#fff8ee" stroke="#8b4513" stroke-width="2.5" />
    <circle cx="100" cy="36" r="3" fill="#f5e8d3" stroke="#c67e5d" stroke-width="1.5" />

    <!-- 卡片主体 -->
    <rect x="50" y="46" width="100" height="76" rx="10" fill="url(#cardGrad)" stroke="#d2691e" stroke-width="2.5" />
    <rect x="56" y="52" width="88" height="30" rx="6" fill="#faf3e8" opacity="0.7" />

    <!-- 卡片上的占位线条 -->
    <line x1="66" y1="62" x2="110" y2="62" stroke="#d09870" stroke-width="3" stroke-linecap="round" opacity="0.55" />
    <line x1="66" y1="73" x2="90" y2="73" stroke="#d09870" stroke-width="2.5" stroke-linecap="round" opacity="0.35" />

    <!-- 底部装饰 - 小圆点行 -->
    <circle cx="70" cy="104" r="4" fill="#f4a460" opacity="0.45" />
    <circle cx="86" cy="108" r="4" fill="#c67e5d" opacity="0.4" />
    <circle cx="102" cy="104" r="4" fill="#f4a460" opacity="0.45" />
    <circle cx="118" cy="108" r="4" fill="#c67e5d" opacity="0.4" />
    <circle cx="134" cy="104" r="4" fill="#f4a460" opacity="0.45" />

    <!-- 搜索放大镜 (右上角) -->
    <circle cx="138" cy="62" r="12" fill="#fff8ee" stroke="#ab3a01" stroke-width="2" opacity="0.9" />
    <line x1="146" y1="70" x2="156" y2="80" stroke="#ab3a01" stroke-width="2.5" stroke-linecap="round" opacity="0.85" />
    <path d="M134 62 Q138 58 142 62" stroke="#c67e5d" stroke-width="1.5" stroke-linecap="round" fill="none"
      opacity="0.6" />

    <!-- 左上角小星星装饰 -->
    <g transform="translate(38, 28)" opacity="0.5">
      <path d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2 Z" fill="#f4a460" />
    </g>
    <!-- 右下角小星星装饰 -->
    <g transform="translate(165, 120) scale(0.65)" opacity="0.4">
      <path d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2 Z" fill="#c67e5d" />
    </g>

    <!-- 渐变定义 -->
    <defs>
      <linearGradient id="cardGrad" x1="50" y1="46" x2="150" y2="122" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#f5e8d3" />
        <stop offset="100%" stop-color="#ddb892" />
      </linearGradient>
    </defs>
  </svg>
</template>