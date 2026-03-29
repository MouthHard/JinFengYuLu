<template>
  <div class="route-recommendation sci-fi-section">
    <div class="recommendation-header">
      <span class="recommendation-icon">
        <svg width="48" height="48" viewBox="0 0 24 24">
          <defs>
            <linearGradient
              id="routeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="rgba(100, 200, 255, 0.9)" />
              <stop offset="50%" stop-color="rgba(150, 220, 255, 0.9)" />
              <stop offset="100%" stop-color="rgba(100, 200, 255, 0.9)" />
            </linearGradient>
            <linearGradient
              id="routeInnerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="rgba(100, 200, 255, 0.9)" />
              <stop offset="100%" stop-color="rgba(150, 220, 255, 0.9)" />
            </linearGradient>
            <filter id="routeGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <!-- 地图底座 -->
          <rect
            x="2"
            y="3"
            width="20"
            height="16"
            rx="2"
            ry="2"
            fill="rgba(255,255,255,0.15)"
            stroke="url(#routeInnerGradient)"
            stroke-width="0.6"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.6;1;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <!-- 地图网格线 -->
          <g stroke="rgba(100, 200, 255, 0.3)" stroke-width="0.3">
            <line x1="2" y1="7" x2="22" y2="7">
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="2s"
                repeatCount="indefinite"
              />
            </line>
            <line x1="2" y1="11" x2="22" y2="11">
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="2s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </line>
            <line x1="2" y1="15" x2="22" y2="15">
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="2s"
                repeatCount="indefinite"
                begin="1s"
              />
            </line>
            <line x1="6" y1="3" x2="6" y2="19">
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="2s"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </line>
            <line x1="12" y1="3" x2="12" y2="19">
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="2s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </line>
            <line x1="18" y1="3" x2="18" y2="19">
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="2s"
                repeatCount="indefinite"
                begin="1.3s"
              />
            </line>
          </g>
          <!-- 路线路径 -->
          <path
            d="M5 15 Q8 12 10 10 T15 7 T19 5"
            fill="none"
            stroke="url(#routeGradient)"
            stroke-width="1.2"
            stroke-linecap="round"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,0;0,100"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <!-- 路线点 - 带脉冲扩散效果 -->
          <g>
            <circle cx="5" cy="15" r="1.5" fill="url(#routeGradient)">
              <animate
                attributeName="r"
                values="1.5;2.2;1.5"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="5"
              cy="15"
              r="2.5"
              fill="none"
              stroke="rgba(100, 200, 255, 0.4)"
              stroke-width="0.5"
            >
              <animate
                attributeName="r"
                values="2.5;3.5;2.5"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <g>
            <circle cx="10" cy="10" r="1.5" fill="url(#routeGradient)">
              <animate
                attributeName="r"
                values="1.5;2.2;1.5"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle
              cx="10"
              cy="10"
              r="2.5"
              fill="none"
              stroke="rgba(100, 200, 255, 0.4)"
              stroke-width="0.5"
            >
              <animate
                attributeName="r"
                values="2.5;3.5;2.5"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.5s"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
          </g>
          <g>
            <circle cx="15" cy="7" r="1.5" fill="url(#routeGradient)">
              <animate
                attributeName="r"
                values="1.5;2.2;1.5"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
            <circle
              cx="15"
              cy="7"
              r="2.5"
              fill="none"
              stroke="rgba(100, 200, 255, 0.4)"
              stroke-width="0.5"
            >
              <animate
                attributeName="r"
                values="2.5;3.5;2.5"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1s"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
          </g>
          <g>
            <circle cx="19" cy="5" r="1.5" fill="url(#routeGradient)">
              <animate
                attributeName="r"
                values="1.5;2.2;1.5"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
            <circle
              cx="19"
              cy="5"
              r="2.5"
              fill="none"
              stroke="rgba(100, 200, 255, 0.4)"
              stroke-width="0.5"
            >
              <animate
                attributeName="r"
                values="2.5;3.5;2.5"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1.5s"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="1.5s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
          </g>
          <!-- 移动的小光点 -->
          <circle cx="5" cy="15" r="0.8" fill="rgba(255, 255, 255, 0.9)">
            <animate
              attributeName="cx"
              values="5;10;15;19"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="15;10;7;5"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.8;1;0.8;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </span>
      智能路线推荐
    </div>

    <!-- 有数据时显示路线卡片 -->
    <div v-if="recommendedRoutes.length > 0" class="route-container">
      <div
        v-for="(route, index) in recommendedRoutes"
        :key="route.id"
        class="route-card"
        :data-route-id="route.id"
      >
        <!-- SVG 背景层 -->
        <div class="svg-background-layer">
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1a9fff" stop-opacity="0.9" />
                <stop offset="50%" stop-color="#00ffff" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#1a9fff" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient
                id="purpleGlow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#9d4edd" stop-opacity="0.9" />
                <stop offset="50%" stop-color="#c77dff" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#9d4edd" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient
                id="greenGlow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#2a9d8f" stop-opacity="0.9" />
                <stop offset="50%" stop-color="#55a630" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#2a9d8f" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e76f51" stop-opacity="0.9" />
                <stop offset="50%" stop-color="#f4a261" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#e76f51" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient
                id="yellowGlow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#e9c46a" stop-opacity="0.9" />
                <stop offset="50%" stop-color="#f4a261" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#e9c46a" stop-opacity="0.9" />
              </linearGradient>
            </defs>
            <!-- 圆形 - 更多随机分布 -->
            <circle
              cx="50"
              cy="50"
              r="18"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.7"
              stroke-opacity="0.65"
            />
            <circle
              cx="150"
              cy="80"
              r="25"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <circle
              cx="250"
              cy="60"
              r="20"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.6"
              stroke-opacity="0.6"
            />
            <circle
              cx="350"
              cy="90"
              r="28"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.9"
              stroke-opacity="0.72"
            />
            <circle
              cx="450"
              cy="70"
              r="22"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <circle
              cx="80"
              cy="180"
              r="30"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <circle
              cx="200"
              cy="200"
              r="15"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.6"
              stroke-opacity="0.62"
            />
            <circle
              cx="300"
              cy="170"
              r="35"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="1"
              stroke-opacity="0.75"
            />
            <circle
              cx="420"
              cy="190"
              r="24"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <circle
              cx="60"
              cy="300"
              r="20"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.6"
              stroke-opacity="0.64"
            />
            <circle
              cx="180"
              cy="320"
              r="32"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.9"
              stroke-opacity="0.74"
            />
            <circle
              cx="280"
              cy="290"
              r="18"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.7"
              stroke-opacity="0.66"
            />
            <circle
              cx="380"
              cy="310"
              r="26"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <circle
              cx="460"
              cy="280"
              r="22"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <circle
              cx="100"
              cy="400"
              r="28"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <circle
              cx="220"
              cy="380"
              r="16"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.6"
              stroke-opacity="0.63"
            />
            <circle
              cx="320"
              cy="420"
              r="34"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="1"
              stroke-opacity="0.76"
            />
            <circle
              cx="430"
              cy="390"
              r="20"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.7"
              stroke-opacity="0.67"
            />
            <circle
              cx="480"
              cy="450"
              r="25"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <circle
              cx="40"
              cy="450"
              r="18"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.6"
              stroke-opacity="0.64"
            />
            <!-- 多边形 -->
            <polygon
              points="250,30 280,80 220,80"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <polygon
              points="400,150 440,200 360,200"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <polygon
              points="80,250 120,300 40,300"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.9"
              stroke-opacity="0.72"
            />
            <polygon
              points="320,350 360,400 280,400"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <polygon
              points="150,450 190,480 110,480"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <polygon
              points="460,50 490,100 430,100"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.6"
              stroke-opacity="0.65"
            />
            <polygon
              points="30,120 70,160 10,160"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <polygon
              points="200,250 250,300 150,300"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <polygon
              points="380,250 430,320 330,280"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.9"
              stroke-opacity="0.72"
            />
            <!-- 矩形 -->
            <rect
              x="120"
              y="40"
              width="45"
              height="45"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <rect
              x="280"
              y="120"
              width="55"
              height="40"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <rect
              x="350"
              y="220"
              width="40"
              height="50"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <rect
              x="80"
              y="340"
              width="50"
              height="45"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.9"
              stroke-opacity="0.72"
            />
            <rect
              x="250"
              y="360"
              width="45"
              height="55"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <rect
              x="400"
              y="420"
              width="40"
              height="40"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <rect
              x="30"
              y="200"
              width="35"
              height="50"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.6"
              stroke-opacity="0.65"
            />
            <rect
              x="180"
              y="100"
              width="50"
              height="35"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.8"
              stroke-opacity="0.7"
            />
            <rect
              x="320"
              y="80"
              width="45"
              height="45"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.7"
              stroke-opacity="0.68"
            />
            <!-- 路径线条 -->
            <path
              d="M20 20l50 50M80 20l50 50M140 20l50 50M200 20l50 50"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M260 20l50 50M320 20l50 50M380 20l50 50M440 20l50 50"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M20 100l60 0M100 100l60 0M180 100l60 0"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M280 100l60 0M360 100l60 0M440 100l60 0"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M20 180l70 0M110 180l70 0M200 180l70 0"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.4"
              stroke-opacity="0.55"
            />
            <path
              d="M300 180l70 0M390 180l70 0M480 180l-20 0"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.4"
              stroke-opacity="0.55"
            />
            <path
              d="M20 260l80 0M120 260l80 0M220 260l80 0"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M320 260l80 0M420 260l80 0"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M20 340l90 0M130 340l90 0M240 340l90 0"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M360 340l90 0M470 340l30 0"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M20 420l100 0M140 420l100 0M260 420l100 0"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M380 420l100 0M490 420l10 0"
              fill="none"
              stroke="url(#purpleGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M50 50l100 100M200 50l100 100M350 50l100 100"
              fill="none"
              stroke="url(#greenGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M50 200l100 -100M200 200l100 -100M350 200l100 -100"
              fill="none"
              stroke="url(#redGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M50 350l100 -100M200 350l100 -100M350 350l100 -100"
              fill="none"
              stroke="url(#yellowGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <path
              d="M50 450l100 -100M200 450l100 -100M350 450l100 -100"
              fill="none"
              stroke="url(#blueGlow)"
              stroke-width="0.5"
              stroke-opacity="0.6"
            />
            <!-- 数学符号 -->
            <text
              x="50"
              y="55"
              font-family="Arial"
              font-size="9"
              fill="url(#blueGlow)"
              opacity="0.75"
            >
              π
            </text>
            <text
              x="150"
              y="85"
              font-family="Arial"
              font-size="10"
              fill="url(#purpleGlow)"
              opacity="0.8"
            >
              Σ
            </text>
            <text
              x="250"
              y="65"
              font-family="Arial"
              font-size="9"
              fill="url(#greenGlow)"
              opacity="0.75"
            >
              ∫
            </text>
            <text
              x="350"
              y="95"
              font-family="Arial"
              font-size="11"
              fill="url(#redGlow)"
              opacity="0.82"
            >
              √
            </text>
            <text
              x="450"
              y="75"
              font-family="Arial"
              font-size="9"
              fill="url(#yellowGlow)"
              opacity="0.75"
            >
              ∞
            </text>
            <text
              x="80"
              y="185"
              font-family="Arial"
              font-size="10"
              fill="url(#blueGlow)"
              opacity="0.78"
            >
              ∂
            </text>
            <text
              x="200"
              y="205"
              font-family="Arial"
              font-size="8"
              fill="url(#purpleGlow)"
              opacity="0.72"
            >
              ∇
            </text>
            <text
              x="300"
              y="175"
              font-family="Arial"
              font-size="11"
              fill="url(#greenGlow)"
              opacity="0.82"
            >
              Δ
            </text>
            <text
              x="420"
              y="195"
              font-family="Arial"
              font-size="9"
              fill="url(#redGlow)"
              opacity="0.76"
            >
              λ
            </text>
            <text
              x="60"
              y="305"
              font-family="Arial"
              font-size="9"
              fill="url(#yellowGlow)"
              opacity="0.74"
            >
              μ
            </text>
            <text
              x="180"
              y="325"
              font-family="Arial"
              font-size="10"
              fill="url(#blueGlow)"
              opacity="0.78"
            >
              σ
            </text>
            <text
              x="280"
              y="295"
              font-family="Arial"
              font-size="8"
              fill="url(#purpleGlow)"
              opacity="0.72"
            >
              τ
            </text>
            <text
              x="380"
              y="315"
              font-family="Arial"
              font-size="10"
              fill="url(#greenGlow)"
              opacity="0.78"
            >
              ω
            </text>
            <text
              x="460"
              y="285"
              font-family="Arial"
              font-size="9"
              fill="url(#redGlow)"
              opacity="0.76"
            >
              θ
            </text>
            <text
              x="100"
              y="405"
              font-family="Arial"
              font-size="10"
              fill="url(#yellowGlow)"
              opacity="0.78"
            >
              φ
            </text>
            <text
              x="220"
              y="385"
              font-family="Arial"
              font-size="8"
              fill="url(#blueGlow)"
              opacity="0.72"
            >
              ψ
            </text>
            <text
              x="320"
              y="425"
              font-family="Arial"
              font-size="11"
              fill="url(#purpleGlow)"
              opacity="0.82"
            >
              Ω
            </text>
            <text
              x="430"
              y="395"
              font-family="Arial"
              font-size="9"
              fill="url(#greenGlow)"
              opacity="0.76"
            >
              α
            </text>
            <text
              x="480"
              y="455"
              font-family="Arial"
              font-size="10"
              fill="url(#redGlow)"
              opacity="0.78"
            >
              β
            </text>
            <text
              x="40"
              y="455"
              font-family="Arial"
              font-size="8"
              fill="url(#yellowGlow)"
              opacity="0.72"
            >
              γ
            </text>
            <text
              x="120"
              y="55"
              font-family="Arial"
              font-size="7"
              fill="url(#blueGlow)"
              opacity="0.7"
            >
              sin
            </text>
            <text
              x="280"
              y="135"
              font-family="Arial"
              font-size="8"
              fill="url(#purpleGlow)"
              opacity="0.74"
            >
              cos
            </text>
            <text
              x="350"
              y="235"
              font-family="Arial"
              font-size="7"
              fill="url(#greenGlow)"
              opacity="0.7"
            >
              tan
            </text>
            <text
              x="80"
              y="355"
              font-family="Arial"
              font-size="8"
              fill="url(#redGlow)"
              opacity="0.74"
            >
              cot
            </text>
            <text
              x="250"
              y="375"
              font-family="Arial"
              font-size="7"
              fill="url(#yellowGlow)"
              opacity="0.7"
            >
              sec
            </text>
            <text
              x="400"
              y="435"
              font-family="Arial"
              font-size="8"
              fill="url(#blueGlow)"
              opacity="0.74"
            >
              csc
            </text>
            <text
              x="30"
              y="215"
              font-family="Arial"
              font-size="7"
              fill="url(#purpleGlow)"
              opacity="0.7"
            >
              log
            </text>
            <text
              x="180"
              y="115"
              font-family="Arial"
              font-size="8"
              fill="url(#greenGlow)"
              opacity="0.74"
            >
              ln
            </text>
            <text
              x="320"
              y="95"
              font-family="Arial"
              font-size="7"
              fill="url(#redGlow)"
              opacity="0.7"
            >
              exp
            </text>
            <text
              x="250"
              y="270"
              font-family="Arial"
              font-size="9"
              fill="url(#yellowGlow)"
              opacity="0.76"
              text-anchor="middle"
            >
              x²+y²=r²
            </text>
            <text
              x="100"
              y="150"
              font-family="Arial"
              font-size="8"
              fill="url(#blueGlow)"
              opacity="0.74"
              text-anchor="middle"
            >
              a²+b²=c²
            </text>
            <text
              x="400"
              y="280"
              font-family="Arial"
              font-size="8"
              fill="url(#purpleGlow)"
              opacity="0.74"
              text-anchor="middle"
            >
              e=mc²
            </text>
            <text
              x="200"
              y="330"
              font-family="Arial"
              font-size="7"
              fill="url(#greenGlow)"
              opacity="0.7"
              text-anchor="middle"
            >
              ∂f/∂x
            </text>
            <text
              x="350"
              y="410"
              font-family="Arial"
              font-size="8"
              fill="url(#redGlow)"
              opacity="0.74"
              text-anchor="middle"
            >
              ∫₀^∞
            </text>
            <text
              x="150"
              y="480"
              font-family="Arial"
              font-size="7"
              fill="url(#yellowGlow)"
              opacity="0.7"
              text-anchor="middle"
            >
              ∑ₙ=₁^∞
            </text>
            <text
              x="450"
              y="480"
              font-family="Arial"
              font-size="8"
              fill="url(#blueGlow)"
              opacity="0.74"
              text-anchor="middle"
            >
              ∏ₙ=₁^∞
            </text>
            <text
              x="70"
              y="130"
              font-family="Arial"
              font-size="7"
              fill="url(#purpleGlow)"
              opacity="0.7"
            >
              ∐
            </text>
            <text
              x="430"
              y="130"
              font-family="Arial"
              font-size="7"
              fill="url(#greenGlow)"
              opacity="0.7"
            >
              ∈
            </text>
            <text
              x="70"
              y="230"
              font-family="Arial"
              font-size="7"
              fill="url(#redGlow)"
              opacity="0.7"
            >
              ∉
            </text>
            <text
              x="430"
              y="230"
              font-family="Arial"
              font-size="7"
              fill="url(#yellowGlow)"
              opacity="0.7"
            >
              ⊂
            </text>
            <text
              x="70"
              y="330"
              font-family="Arial"
              font-size="7"
              fill="url(#blueGlow)"
              opacity="0.7"
            >
              ⊃
            </text>
            <text
              x="430"
              y="330"
              font-family="Arial"
              font-size="7"
              fill="url(#purpleGlow)"
              opacity="0.7"
            >
              ∪
            </text>
            <text
              x="70"
              y="430"
              font-family="Arial"
              font-size="7"
              fill="url(#greenGlow)"
              opacity="0.7"
            >
              ∩
            </text>
            <text
              x="430"
              y="430"
              font-family="Arial"
              font-size="7"
              fill="url(#redGlow)"
              opacity="0.7"
            >
              ∀
            </text>
            <!-- 更多小圆点装饰 -->
            <circle cx="25" cy="75" r="3" fill="url(#blueGlow)" opacity="0.6" />
            <circle
              cx="475"
              cy="125"
              r="4"
              fill="url(#purpleGlow)"
              opacity="0.65"
            />
            <circle
              cx="125"
              cy="25"
              r="3"
              fill="url(#greenGlow)"
              opacity="0.6"
            />
            <circle
              cx="375"
              cy="475"
              r="4"
              fill="url(#redGlow)"
              opacity="0.65"
            />
            <circle
              cx="25"
              cy="375"
              r="3"
              fill="url(#yellowGlow)"
              opacity="0.6"
            />
            <circle
              cx="475"
              cy="375"
              r="4"
              fill="url(#blueGlow)"
              opacity="0.65"
            />
            <circle
              cx="125"
              cy="475"
              r="3"
              fill="url(#purpleGlow)"
              opacity="0.6"
            />
            <circle
              cx="375"
              cy="25"
              r="4"
              fill="url(#greenGlow)"
              opacity="0.65"
            />
          </svg>
        </div>

        <div class="route-card-header">
          <h4 class="route-title">{{ route.title }}</h4>
          <div class="route-badges">
            <span
              v-for="(tag, tagIndex) in (route.tags || []).slice(0, 3)"
              :key="tagIndex"
              class="tag-badge"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="route-image-section">
          <img :src="route.image" :alt="route.title" class="route-image" />
          <div class="route-image-overlay">
            <div class="route-rating">
              <span class="rating-icon">⭐</span>
              <span class="rating-value">{{ route.rating }}</span>
            </div>
            <div class="route-duration">
              <span class="duration-icon">⏱️</span>
              <span class="duration-value">{{ route.duration }}</span>
            </div>
          </div>
        </div>

        <div class="route-details-block">
          <div class="info-row">
            <div class="info-item">
              <span class="info-label">最佳时间</span>
              <span class="info-value">{{ route.bestTime }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">交通方式</span>
              <span class="info-value">{{ route.traffic }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">适合人群</span>
              <span class="info-value">{{ route.suitableFor }}</span>
            </div>
          </div>
          <div class="spots-section">
            <span class="spots-label">途经景点：</span>
            <span
              v-for="(spot, spotIndex) in route.spots"
              :key="spotIndex"
              class="spot-tag"
            >
              {{ spot }}
            </span>
          </div>
        </div>

        <div class="route-actions">
          <button class="btn-primary">
            <span class="btn-icon">📋</span>
            查看详情
          </button>
          <button class="btn-secondary">
            <span class="btn-icon">❤️</span>
            收藏路线
          </button>
        </div>
      </div>
    </div>

    <!-- 无数据时显示空状态 -->
    <div v-else class="empty-state">
      <div class="empty-icon">🗺️</div>
      <h4 class="empty-title">暂无路线推荐</h4>
      <p class="empty-description">该地区暂无路线推荐数据</p>
      <button class="btn-primary">
        <span class="btn-icon">🔍</span>
        探索更多路线
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  sceneryData: {
    type: Object,
    default: () => ({}),
  },
});

// Emits
const emit = defineEmits(["view-more", "view-details", "save"]);

// 使用计算属性替代方法，避免每次渲染都返回新数组
const recommendedRoutes = computed(() => {
  // 从props获取路线数据，如果没有则返回空数组
  if (props.sceneryData.routes && props.sceneryData.routes.length > 0) {
    // 返回前4条路线
    return props.sceneryData.routes.slice(0, 4);
  }

  // 没有数据时返回空数组
  return [];
});
</script>

<style scoped lang="scss" src="./index.scss" />
