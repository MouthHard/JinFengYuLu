<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">
  <!-- 背景 -->
  <rect width="100%" height="100%" fill="rgba(10, 15, 30, 0.95)"/>

  <!-- 星座线条 -->
  <g opacity="0.3">
    <path d="M100,100 L150,120 L200,100 L180,150 L130,130" stroke="rgba(100, 150, 255, 0.6)" stroke-width="1" fill="none">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="8s" repeatCount="indefinite"/>
    </path>
    <path d="M300,200 L350,180 L400,220 L380,270 L330,250" stroke="rgba(100, 150, 255, 0.4)" stroke-width="1" fill="none">
      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="10s" repeatCount="indefinite"/>
    </path>
    <path d="M500,300 L550,280 L600,320 L580,370 L530,350" stroke="rgba(100, 150, 255, 0.5)" stroke-width="1" fill="none">
      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="12s" repeatCount="indefinite"/>
    </path>
    <path d="M700,400 L750,380 L800,420 L780,470 L730,450" stroke="rgba(100, 150, 255, 0.4)" stroke-width="1" fill="none">
      <animate attributeName="opacity" values="0.1;0.4;0.1" dur="9s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- 随机星星 - 普通星星 -->
  <g id="stars">
    <!-- 第一组星星 -->
    <circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="150" cy="80" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="60" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="90" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="450" cy="70" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>

    <!-- 第二组星星 -->
    <circle cx="100" cy="150" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="130" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="300" cy="160" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="400" cy="140" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="500" cy="170" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite"/>
    </circle>

    <!-- 第三组星星 -->
    <circle cx="150" cy="250" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="230" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="260" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="450" cy="240" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="550" cy="270" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>

    <!-- 第四组星星 -->
    <circle cx="200" cy="350" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="300" cy="330" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="400" cy="360" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="500" cy="340" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="600" cy="370" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite"/>
    </circle>

    <!-- 第五组星星 -->
    <circle cx="250" cy="450" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="430" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="450" cy="460" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="550" cy="440" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="650" cy="470" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite"/>
    </circle>

    <!-- 第六组星星 -->
    <circle cx="300" cy="550" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="400" cy="530" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="500" cy="560" r="1" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="600" cy="540" r="1" fill="rgba(255, 255, 255, 0.7)">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="570" r="1" fill="rgba(255, 255, 255, 0.6)">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- 亮星（模拟恒星） -->
  <g id="bright-stars">
    <!-- 第一颗亮星 -->
    <circle cx="120" cy="120" r="2" fill="rgba(255, 215, 0, 0.9)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.5;2" dur="2s" repeatCount="indefinite"/>
    </circle>
    <!-- 第二颗亮星 -->
    <circle cx="320" cy="220" r="2" fill="rgba(255, 182, 193, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.3;2" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <!-- 第三颗亮星 -->
    <circle cx="520" cy="320" r="2" fill="rgba(173, 216, 230, 0.9)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.6;2" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <!-- 第四颗亮星 -->
    <circle cx="720" cy="420" r="2" fill="rgba(221, 160, 221, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.2s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.4;2" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <!-- 第五颗亮星 -->
    <circle cx="220" cy="420" r="2" fill="rgba(255, 239, 213, 0.9)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.5;2" dur="2.1s" repeatCount="indefinite"/>
    </circle>
    <!-- 第六颗亮星 -->
    <circle cx="420" cy="520" r="2" fill="rgba(144, 238, 144, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.3s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.3;2" dur="2.3s" repeatCount="indefinite"/>
    </circle>
    <!-- 第七颗亮星 -->
    <circle cx="620" cy="620" r="2" fill="rgba(255, 228, 196, 0.9)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="1.9s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.6;2" dur="1.9s" repeatCount="indefinite"/>
    </circle>
    <!-- 第八颗亮星 -->
    <circle cx="120" cy="320" r="2" fill="rgba(200, 200, 255, 0.8)">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;2.4;2" dur="2.4s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- 星云效果 -->
  <circle cx="700" cy="100" r="80" fill="rgba(100, 150, 255, 0.1)">
    <animate attributeName="opacity" values="0.05;0.15;0.05" dur="10s" repeatCount="indefinite"/>
  </circle>
  <circle cx="100" cy="600" r="60" fill="rgba(150, 100, 255, 0.1)">
    <animate attributeName="opacity" values="0.05;0.1;0.05" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="500" cy="700" r="70" fill="rgba(100, 200, 255, 0.08)">
    <animate attributeName="opacity" values="0.03;0.12;0.03" dur="9s" repeatCount="indefinite"/>
  </circle>
</svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
  fill?: string;
  strokeWidth?: number | string;
  class?: string;
  style?: CSSProperties;
}

const props = withDefaults(defineProps<Props>(), {
  fill: 'none',
  strokeWidth: 2,
});
</script>
