<template>
  <svg
    class="cyber-bg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 600"
    preserveAspectRatio="none"
  >
    <defs>
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
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />

        <feDropShadow
          dx="2"
          dy="2"
          stdDeviation="4"
          flood-color="rgba(0, 255, 255, 0.5)"
          result="shadow"
        />

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

      <clipPath id="cyberClip">
        <rect width="100%" height="100%" />
      </clipPath>
    </defs>

    <rect width="100%" height="100%" fill="url(#cyberGrid)" />
    <rect width="100%" height="100%" fill="url(#cyberGradient1)" />
    <rect width="100%" height="100%" fill="url(#cyberGradient2)" />

    <g filter="url(#cyberDistortionFilter)">
      <rect
        width="100%"
        height="100%"
        fill="url(#cyberGradient1)"
        opacity="0.3"
      />
    </g>

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

    <g clip-path="url(#cyberClip)">
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

    <g filter="url(#cyberGlowShadowFilter)">
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

    <g filter="url(#cyberGlowShadowFilter)">
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

    <g filter="url(#cyberGlowShadowFilter)">
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
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .cyber-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>