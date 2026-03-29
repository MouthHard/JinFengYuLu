<template>
  <div class="food-map">
    <!-- 赛博朋克风格背景特效 -->
    <svg
      class="cyber-bg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
    >
      <!-- 定义 -->
      <defs>
        <!-- 渐变定义 -->
        <linearGradient id="cyberGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(0, 255, 255, 0.1)" />
          <stop offset="25%" stop-color="rgba(255, 0, 255, 0.15)" />
          <stop offset="50%" stop-color="rgba(255, 255, 0, 0.2)" />
          <stop offset="75%" stop-color="rgba(255, 0, 255, 0.15)" />
          <stop offset="100%" stop-color="rgba(0, 255, 255, 0.1)" />
        </linearGradient>

        <linearGradient id="cyberGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(0, 0, 0, 0.3)" />
          <stop offset="50%" stop-color="rgba(0, 0, 0, 0.6)" />
          <stop offset="100%" stop-color="rgba(0, 0, 0, 0.3)" />
        </linearGradient>

        <radialGradient id="cyberRadial1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(0, 255, 255, 0.8)" />
          <stop offset="50%" stop-color="rgba(0, 255, 255, 0.2)" />
          <stop offset="100%" stop-color="rgba(0, 255, 255, 0)" />
        </radialGradient>

        <radialGradient id="cyberRadial2" cx="30%" cy="30%" r="40%">
          <stop offset="0%" stop-color="rgba(255, 0, 255, 0.8)" />
          <stop offset="50%" stop-color="rgba(255, 0, 255, 0.2)" />
          <stop offset="100%" stop-color="rgba(255, 0, 255, 0)" />
        </radialGradient>

        <!-- 滤镜定义 -->
        <filter id="cyberGlowFilter">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
        </filter>

        <filter id="cyberShadowFilter">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="4"
            flood-color="rgba(0, 255, 255, 0.5)"
          />
        </filter>

        <filter id="cyberGlowShadowFilter">
          <!-- 首先应用发光效果 -->
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
          <!-- 然后应用阴影效果 -->
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="4"
            flood-color="rgba(0, 255, 255, 0.5)"
            result="shadow"
          />
          <!-- 组合所有效果 -->
          <feComposite in="SourceGraphic" in2="shadow" operator="over" />
        </filter>

        <filter id="cyberDistortionFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01"
            numOctaves="4"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              values="0.01; 0.015; 0.01"
              dur="10s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
            result="distort"
          >
            <animate
              attributeName="scale"
              values="5; 8; 5"
              dur="8s"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>

        <!-- 图案定义 -->
        <pattern
          id="cyberGrid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(0, 255, 255, 0.1)"
            stroke-width="0.5"
          />
        </pattern>

        <!-- 剪辑路径 -->
        <clipPath id="cyberClip">
          <rect width="100%" height="100%" />
        </clipPath>
      </defs>

      <!-- 背景层 -->
      <rect width="100%" height="100%" fill="url(#cyberGrid)" />
      <rect width="100%" height="100%" fill="url(#cyberGradient1)" />
      <rect width="100%" height="100%" fill="url(#cyberGradient2)" />

      <!-- 变形效果层 -->
      <g filter="url(#cyberDistortionFilter)">
        <rect
          width="100%"
          height="100%"
          fill="url(#cyberGradient1)"
          opacity="0.3"
        />
      </g>

      <!-- 发光球体 -->
      <circle
        cx="200"
        cy="150"
        r="30"
        fill="url(#cyberRadial1)"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="r"
          values="30; 40; 30"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7; 0.9; 0.7"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="200; 210; 190; 200"
          dur="15s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="150; 140; 160; 150"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="800"
        cy="450"
        r="25"
        fill="url(#cyberRadial2)"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="r"
          values="25; 35; 25"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6; 0.8; 0.6"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="800; 790; 810; 800"
          dur="12s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="450; 460; 440; 450"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>

      <!-- 网格线条 -->
      <g clip-path="url(#cyberClip)">
        <!-- 水平线条 -->
        <g v-for="i in 10" :key="'h' + i">
          <line
            x1="0"
            :y1="i * 60"
            x2="1000"
            :y2="i * 60"
            stroke="rgba(0, 255, 255, 0.2)"
            stroke-width="0.5"
            filter="url(#cyberGlowShadowFilter)"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.1; 0.3; 0.1"
              :dur="i * 0.5 + 3"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="1000; 1050; 1000"
              :dur="i * 0.8 + 5"
              repeatCount="indefinite"
            />
          </line>
        </g>

        <!-- 垂直线条 -->
        <g v-for="i in 10" :key="'v' + i">
          <line
            :x1="i * 100"
            y1="0"
            :x2="i * 100"
            y2="600"
            stroke="rgba(255, 0, 255, 0.2)"
            stroke-width="0.5"
            filter="url(#cyberGlowShadowFilter)"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.1; 0.3; 0.1"
              :dur="i * 0.6 + 2"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="600; 650; 600"
              :dur="i * 0.7 + 4"
              repeatCount="indefinite"
            />
          </line>
        </g>
      </g>

      <!-- 几何图形 -->
      <!-- 三角形 -->
      <polygon
        points="500,100 550,200 450,200"
        fill="none"
        stroke="rgba(0, 255, 255, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 500 150"
          to="360 500 150"
          dur="20s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 四边形 -->
      <polygon
        points="300,300 350,250 400,300 350,350"
        fill="none"
        stroke="rgba(255, 0, 255, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="7s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 350 300"
          to="-360 350 300"
          dur="18s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 五边形 -->
      <polygon
        points="700,400 750,350 800,400 775,450 725,450"
        fill="none"
        stroke="rgba(255, 255, 0, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="9s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 750 400"
          to="360 750 400"
          dur="22s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 动态路径 -->
      <path
        d="M 100,500 Q 300,400 500,500 T 900,450"
        fill="none"
        stroke="rgba(0, 255, 255, 0.4)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="d"
          values="M 100,500 Q 300,400 500,500 T 900,450; M 100,520 Q 300,420 500,480 T 900,470; M 100,500 Q 300,400 500,500 T 900,450"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.2; 0.5; 0.2"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      <!-- 粒子效果 -->
      <g v-for="i in 20" :key="'p' + i">
        <circle
          :cx="Math.random() * 1000"
          :cy="Math.random() * 600"
          r="1"
          fill="rgba(0, 255, 255, 0.8)"
          filter="url(#cyberGlowShadowFilter)"
        >
          <animate
            attributeName="cx"
            :from="Math.random() * 1000"
            :to="Math.random() * 1000"
            :dur="Math.random() * 10 + 10"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            :from="Math.random() * 600"
            :to="Math.random() * 600"
            :dur="Math.random() * 10 + 10"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 0"
            :dur="Math.random() * 3 + 2"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="0; 1.5; 0"
            :dur="Math.random() * 3 + 2"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <!-- 更多几何图形 -->
      <!-- 六边形 -->
      <polygon
        points="600,400 650,350 700,400 700,450 650,500 600,450"
        fill="none"
        stroke="rgba(255, 255, 0, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="9s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 650 425"
          to="360 650 425"
          dur="24s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 八边形 -->
      <polygon
        points="400,150 450,120 500,150 530,200 500,250 450,280 400,250 370,200"
        fill="none"
        stroke="rgba(0, 255, 255, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 450 200"
          to="-360 450 200"
          dur="22s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 星形 -->
      <polygon
        points="200,400 220,450 270,460 230,490 240,540 200,510 160,540 170,490 130,460 180,450"
        fill="none"
        stroke="rgba(255, 0, 255, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 470"
          to="360 200 470"
          dur="26s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 不规则多边形 -->
      <polygon
        points="750,150 800,180 830,140 850,200 820,240 780,220 740,250 720,210"
        fill="none"
        stroke="rgba(255, 255, 0, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="11s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 780 200"
          to="-360 780 200"
          dur="28s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 复杂不规则图形 -->
      <!-- 波浪形路径 -->
      <path
        d="M 100,300 Q 150,250 200,300 Q 250,350 300,300 Q 350,250 400,300 Q 450,350 500,300 Q 550,250 600,300 Q 650,350 700,300 Q 750,250 800,300 Q 850,350 900,300"
        fill="none"
        stroke="rgba(0, 255, 255, 0.4)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.3; 0.7; 0.3"
          dur="12s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          values="0, 10; 5, 15; 0, 10"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      <!-- 螺旋形 -->
      <path
        d="M 300,100 Q 350,80 400,100 Q 450,120 500,100 Q 550,80 600,100 Q 650,120 700,100"
        fill="none"
        stroke="rgba(255, 0, 255, 0.4)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.3; 0.7; 0.3"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 500 100"
          to="360 500 100"
          dur="30s"
          repeatCount="indefinite"
        />
      </path>

      <!-- 额外的发光球体 -->
      <circle
        cx="600"
        cy="500"
        r="20"
        fill="url(#cyberRadial1)"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="r"
          values="20; 30; 20"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6; 0.9; 0.6"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="600; 620; 580; 600"
          dur="18s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="500; 480; 520; 500"
          dur="18s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="300"
        cy="500"
        r="15"
        fill="url(#cyberRadial2)"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="r"
          values="15; 25; 15"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5; 0.8; 0.5"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="300; 320; 280; 300"
          dur="15s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="500; 480; 520; 500"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>

      <!-- 随机生成的不规则形状 -->
      <path
        d="M 150,200 Q 180,180 200,200 Q 220,220 200,240 Q 180,260 150,240 Q 120,220 150,200"
        fill="none"
        stroke="rgba(255, 255, 0, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 175 220"
          to="360 175 220"
          dur="26s"
          repeatCount="indefinite"
        />
      </path>

      <!-- 复杂路径 -->
      <path
        d="M 800,150 C 850,100 900,200 850,250 C 800,300 750,200 800,150"
        fill="none"
        stroke="rgba(0, 255, 255, 0.6)"
        stroke-width="1.5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.8; 0.4"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 825 200"
          to="-360 825 200"
          dur="22s"
          repeatCount="indefinite"
        />
      </path>

      <!-- 实心图形 -->
      <!-- 实心三角形 -->
      <polygon
        points="150,150 200,200 100,200"
        fill="rgba(0, 255, 255, 0.4)"
        stroke="rgba(0, 255, 255, 0.8)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.7; 0.4"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 150 180"
          to="360 150 180"
          dur="20s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 实心四边形 -->
      <polygon
        points="700,250 750,220 800,250 750,280"
        fill="rgba(255, 0, 255, 0.4)"
        stroke="rgba(255, 0, 255, 0.8)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.7; 0.4"
          dur="7s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 750 250"
          to="-360 750 250"
          dur="18s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 实心五边形 -->
      <polygon
        points="500,350 550,320 600,350 580,400 520,400"
        fill="rgba(255, 255, 0, 0.4)"
        stroke="rgba(255, 255, 0, 0.8)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="opacity"
          values="0.4; 0.7; 0.4"
          dur="9s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 550 360"
          to="360 550 360"
          dur="22s"
          repeatCount="indefinite"
        />
      </polygon>

      <!-- 环形 -->
      <circle
        cx="300"
        cy="100"
        r="30"
        fill="none"
        stroke="rgba(0, 255, 255, 0.8)"
        stroke-width="5"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animate
          attributeName="r"
          values="30; 40; 30"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6; 0.9; 0.6"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>

      <!-- 扇形 -->
      <path
        d="M 600,150 L 650,100 A 50 50 0 0 1 650,200 Z"
        fill="rgba(255, 0, 255, 0.4)"
        stroke="rgba(255, 0, 255, 0.8)"
        stroke-width="1"
        filter="url(#cyberGlowShadowFilter)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 600 150"
          to="360 600 150"
          dur="24s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4; 0.7; 0.4"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      <!-- 3D效果图形 -->
      <!-- 立方体（使用多个路径模拟3D效果） -->
      <g filter="url(#cyberGlowShadowFilter)">
        <!-- 立方体前面 -->
        <polygon
          points="350,400 400,370 450,400 400,430"
          fill="rgba(0, 255, 255, 0.3)"
          stroke="rgba(0, 255, 255, 0.8)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.3; 0.6; 0.3"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
        <!-- 立方体上面 -->
        <polygon
          points="400,370 450,340 500,370 450,400"
          fill="rgba(0, 255, 255, 0.2)"
          stroke="rgba(0, 255, 255, 0.6)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.2; 0.4; 0.2"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
        <!-- 立方体右面 -->
        <polygon
          points="450,400 500,370 450,430 400,430"
          fill="rgba(0, 255, 255, 0.2)"
          stroke="rgba(0, 255, 255, 0.6)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.2; 0.4; 0.2"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 425 400"
          to="360 425 400"
          dur="26s"
          repeatCount="indefinite"
        />
      </g>

      <!-- 金字塔（使用多个三角形模拟3D效果） -->
      <g filter="url(#cyberGlowShadowFilter)">
        <!-- 金字塔底面 -->
        <polygon
          points="150,500 200,470 250,500 200,530"
          fill="rgba(255, 255, 0, 0.3)"
          stroke="rgba(255, 255, 0, 0.8)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.3; 0.6; 0.3"
            dur="9s"
            repeatCount="indefinite"
          />
        </polygon>
        <!-- 金字塔前面 -->
        <polygon
          points="200,450 200,470 250,500 200,530"
          fill="rgba(255, 255, 0, 0.2)"
          stroke="rgba(255, 255, 0, 0.6)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.2; 0.4; 0.2"
            dur="9s"
            repeatCount="indefinite"
          />
        </polygon>
        <!-- 金字塔右面 -->
        <polygon
          points="200,450 250,500 200,530 150,500"
          fill="rgba(255, 255, 0, 0.2)"
          stroke="rgba(255, 255, 0, 0.6)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.2; 0.4; 0.2"
            dur="9s"
            repeatCount="indefinite"
          />
        </polygon>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 500"
          to="360 200 500"
          dur="28s"
          repeatCount="indefinite"
        />
      </g>

      <!-- 圆柱体（使用椭圆和矩形模拟3D效果） -->
      <g filter="url(#cyberGlowShadowFilter)">
        <!-- 圆柱体底部 -->
        <ellipse
          cx="750"
          cy="450"
          rx="40"
          ry="20"
          fill="rgba(255, 0, 255, 0.3)"
          stroke="rgba(255, 0, 255, 0.8)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.3; 0.6; 0.3"
            dur="8s"
            repeatCount="indefinite"
          />
        </ellipse>
        <!-- 圆柱体侧面 -->
        <rect
          x="710"
          y="400"
          width="80"
          height="50"
          fill="rgba(255, 0, 255, 0.2)"
          stroke="rgba(255, 0, 255, 0.6)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.2; 0.4; 0.2"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>
        <!-- 圆柱体顶部 -->
        <ellipse
          cx="750"
          cy="400"
          rx="40"
          ry="20"
          fill="rgba(255, 0, 255, 0.3)"
          stroke="rgba(255, 0, 255, 0.8)"
          stroke-width="1"
        >
          <animate
            attributeName="opacity"
            values="0.3; 0.6; 0.3"
            dur="8s"
            repeatCount="indefinite"
          />
        </ellipse>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 750 425"
          to="360 750 425"
          dur="30s"
          repeatCount="indefinite"
        />
      </g>
    </svg>

    <header class="food-map-header">
      <div class="logo-section">
        <span class="food-icon">🍽️</span>
        <h1 class="map-title">美食探索地图</h1>
      </div>
      <div class="search-section">
        <div class="custom-search-container">
          <div class="search-icon">🔍</div>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="搜索美食地点..."
            class="custom-search-input"
          />
          <button class="custom-search-button">
            <span>搜索</span>
          </button>
        </div>
      </div>
      <div class="filter-section">
        <div class="custom-select-container" :class="{ open: isSelectOpen }">
          <div class="select-header" @click="toggleSelect">
            <span class="select-value">{{ getSelectedTypeText() }}</span>
            <span class="select-arrow">▼</span>
          </div>
          <div class="select-dropdown">
            <div
              v-for="option in selectOptions"
              :key="option.value"
              class="select-option"
              :class="{ selected: selectedType === option.value }"
              @click="selectOption(option.value)"
            >
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="food-map-main">
      <!-- 左侧：地点卡片网格 -->
      <div class="locations-sidebar">
        <div class="locations-grid">
          <article
            v-for="location in filteredLocations"
            :key="location.id"
            class="location-card"
            :class="{ active: selectedLocation?.id === location.id }"
            @click="openLocationDetail(location)"
          >
            <div class="card-image-wrapper">
              <img
                class="card-image"
                :src="location.image"
                :alt="location.name"
              />
              <div class="image-overlay">
                <span class="location-type"
                  >{{ location.icon }} {{ location.type }}</span
                >
              </div>
              <div class="location-rank">
                <span class="rank-badge">🏆 #{{ location.rank }}</span>
              </div>
            </div>

            <div class="card-content">
              <h3 class="location-name">{{ location.name }}</h3>
              <p class="location-place">📍 {{ location.location }}</p>
              <div class="location-stats">
                <span class="rating">⭐ {{ location.rating }}</span>
                <span class="food-count"
                  >🍽️ {{ location.foods.length }} 种美食</span
                >
              </div>
            </div>
          </article>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredLocations.length === 0" class="empty-state">
          <div class="empty-icon">🗺️</div>
          <h2 class="empty-title">未找到匹配的地点</h2>
          <p class="empty-text">尝试调整搜索条件或筛选器</p>
        </div>
      </div>

      <!-- 右侧：地点详情面板 -->
      <div class="location-detail-container">
        <div v-if="selectedLocation" class="location-detail-panel">
          <!-- 基础信息部分 -->
          <div class="detail-header">
            <div class="location-header">
              <div class="title-row">
                <h2 class="detail-title">{{ selectedLocation.name }}</h2>
                <div class="title-meta">
                  <el-rate
                    :model-value="parseFloat(selectedLocation.rating)"
                    :disabled="true"
                    :max="5"
                    :precision="1"
                    show-score
                    class="detail-rating"
                  />
                </div>
              </div>
              <div class="location-row">
                <span class="detail-place"
                  >📍 {{ selectedLocation.location }}</span
                >
                <div class="meta-badges">
                  <span class="rank-badge"
                    >🏆 #{{ selectedLocation.rank }}</span
                  >
                  <span class="type-badge"
                    >{{ selectedLocation.icon }}
                    {{ selectedLocation.type }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 轮播图部分 -->
          <div class="carousel-section">
            <el-carousel
              v-model:model-value="activeCarouselIndex"
              height="200px"
              class="food-carousel"
              :autoplay="false"
              @change="handleCarouselChange"
            >
              <el-carousel-item
                v-for="(foodId, index) in selectedLocation.foods"
                :key="foodId"
              >
                <img
                  class="carousel-image"
                  :src="getFoodImage(foodId)"
                  :alt="getFoodName(foodId)"
                />
              </el-carousel-item>
            </el-carousel>
          </div>

          <!-- 美食信息部分 -->
          <div class="food-info-section">
            <div v-if="selectedFood" class="current-food-info">
              <h3 class="food-title">{{ selectedFood.name }}</h3>
              <div class="food-meta">
                <span class="food-category">{{ selectedFood.category }}</span>
                <span class="food-price">¥{{ selectedFood.price }}</span>
              </div>
              <p class="food-description">
                {{ selectedFood.description || "暂无详细描述" }}
              </p>
              <div class="food-footer">
                <div class="food-tags">
                  <span
                    v-for="(tag, index) in selectedFood.tags || []"
                    :key="tag"
                    class="food-tag"
                    :class="`tag-color-${index % 5}`"
                  >
                    {{ tag }}
                  </span>
                </div>
                <el-button type="primary" class="detail-button">
                  查看详情
                </el-button>
              </div>
            </div>
          </div>
        </div>
        <!-- 默认提示内容 -->
        <div v-else class="location-detail-default">
          <div class="default-content">
            <div class="default-icon">🍽️</div>
            <h2 class="default-title">选择美食地点</h2>
            <p class="default-text">
              从左侧选择一个美食地点，查看详细信息和特色美食
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// 接收props
const props = defineProps({
  foodMapLocations: {
    type: Array,
    default: () => [],
  },
  allFoods: {
    type: Array,
    default: () => [],
  },
});

// 定义emit事件
const emit = defineEmits(["select-food"]);

// 状态管理
const selectedLocation = ref(null);
const searchQuery = ref("");
const selectedType = ref("");
const activeCarouselIndex = ref(0);
const isSelectOpen = ref(false);
const selectOptions = ref([
  { label: "所有类型", value: "" },
  { label: "城市", value: "城市" },
  { label: "小镇", value: "小镇" },
  { label: "景区", value: "景区" },
]);

// 切换下拉菜单
const toggleSelect = () => {
  isSelectOpen.value = !isSelectOpen.value;
};

// 选择选项
const selectOption = (value) => {
  selectedType.value = value;
  isSelectOpen.value = false;
};

// 获取选中的类型文本
const getSelectedTypeText = () => {
  const option = selectOptions.value.find(
    (opt) => opt.value === selectedType.value,
  );
  return option ? option.label : "所有类型";
};

// 点击外部关闭下拉菜单
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
  if (!event.target.closest(".custom-select-container")) {
    isSelectOpen.value = false;
  }
};

// 过滤后的地点列表
const filteredLocations = computed(() => {
  return props.foodMapLocations.filter((location) => {
    // 搜索过滤
    const matchesSearch =
      location.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      location.location.toLowerCase().includes(searchQuery.value.toLowerCase());
    // 类型过滤
    const matchesType =
      !selectedType.value || location.type === selectedType.value;

    return matchesSearch && matchesType;
  });
});

// 选择地点
const openLocationDetail = (location) => {
  selectedLocation.value = location;
  // 重置轮播图索引，确保每次选择新地点时从第一张美食图片开始显示
  activeCarouselIndex.value = 0;
};

// 美食相关方法
const getFoodName = (foodId) => {
  const food = props.allFoods.find((f) => f.id === foodId);
  return food?.name || "未知美食";
};

const getFoodImage = (foodId) => {
  const food = props.allFoods.find((f) => f.id === foodId);
  return food?.image || "";
};

const getFoodCategory = (foodId) => {
  const food = props.allFoods.find((f) => f.id === foodId);
  return food?.category || "";
};

// 当前选中的美食（与轮播图联动）
const selectedFood = computed(() => {
  if (!selectedLocation.value || !selectedLocation.value.foods.length)
    return null;
  const currentFoodId = selectedLocation.value.foods[activeCarouselIndex.value];
  return props.allFoods.find((food) => food.id === currentFoodId) || null;
});

// 轮播图切换事件处理
const handleCarouselChange = (index) => {
  activeCarouselIndex.value = index;
};

// 监听筛选后的地点列表变化，当有地点时自动打开第一个地点的详情
watch(
  filteredLocations,
  (newLocations, oldLocations) => {
    if (newLocations.length > 0) {
      openLocationDetail(newLocations[0]);
    } else {
      // 如果没有地点，清空选中状态
      selectedLocation.value = null;
    }
  },
  { deep: true, immediate: false },
);

// 直接监听 foodMapLocations 的变化，确保省份切换时能实时更新
watch(
  () => props.foodMapLocations,
  (newLocations, oldLocations) => {
    // 这样可以确保当省份切换时，右侧详情面板能实时更新
    if (filteredLocations.value.length > 0) {
      openLocationDetail(filteredLocations.value[0]);
    } else {
      selectedLocation.value = null;
    }
  },
  { deep: true, immediate: false },
);

// 组件挂载
onMounted(() => {
  if (filteredLocations.value.length > 0) {
    openLocationDetail(filteredLocations.value[0]);
  }
});

// 组件卸载
onUnmounted(() => {});
</script>

<style scoped lang="scss" src="./index.scss" />
