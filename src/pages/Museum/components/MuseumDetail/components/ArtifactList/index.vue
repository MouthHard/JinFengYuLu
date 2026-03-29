<template>
  <div class="artifact-list">
    <div class="artifact-layout">
      <!-- 左侧筛选菜单 -->
      <div class="artifact-sidebar">
        <div class="sidebar-content">
          <!-- 搜索框 -->
          <div class="search-container">
            <input
              type="text"
              v-model="searchKeyword"
              placeholder="搜索文物名称..."
              class="search-input"
            />
            <button class="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <!-- 筛选区域 -->
          <div class="filter-container">
            <!-- 文物类型筛选 -->
            <div class="filter-group">
              <h3 class="filter-title">文物类型</h3>
              <div class="filter-options">
                <button
                  v-for="type in artifactTypes"
                  :key="type.value"
                  :class="[
                    'filter-option',
                    { active: selectedTypes === type.value },
                  ]"
                  @click="toggleType(type.value)"
                >
                  {{ type.label }}
                </button>
              </div>
            </div>

            <!-- 年代筛选 -->
            <div class="filter-group">
              <h3 class="filter-title">年代</h3>
              <div class="filter-options period-options">
                <button
                  v-for="period in periods"
                  :key="period.value"
                  :class="[
                    'filter-option',
                    { active: selectedPeriods === period.value },
                  ]"
                  @click="togglePeriod(period.value)"
                >
                  {{ period.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 中间文物卡片容器 -->
      <div class="artifact-main">
        <div class="artifact-container">
          <div
            v-for="artifact in filteredArtifacts"
            :key="artifact.id"
            class="artifact-item"
            :class="{ active: activeArtifactId === artifact.id }"
            @click="openArtifactDetail(artifact)"
          >
            <div class="artifact-card">
              <div
                class="artifact-card-inner"
                :class="{ flipped: activeArtifactId === artifact.id }"
              >
                <!-- 卡片正面 -->
                <div class="artifact-card-face front">
                  <div class="artifact-image">
                    <img :src="artifact.image" :alt="artifact.name" />
                    <div class="artifact-actions">
                      <button class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                          ></path>
                        </svg>
                      </button>
                      <button class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon>
                        </svg>
                      </button>
                      <button class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            y1="13.51"
                            x2="15.42"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            y1="6.51"
                            x2="8.59"
                            y2="10.49"
                          ></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="artifact-info">
                    <h3 class="artifact-name">{{ artifact.name }}</h3>
                    <p class="artifact-period">{{ artifact.period }}</p>
                    <p class="artifact-description">
                      {{ artifact.description }}
                    </p>
                  </div>
                </div>
                <!-- 卡片背面 -->
                <div class="artifact-card-face back"></div>
              </div>
            </div>
            <div
              class="artifact-disc"
              :class="{ active: activeArtifactId === artifact.id }"
            >
              <!-- 未激活状态 - 椭圆圆盘 -->
              <svg
                v-if="activeArtifactId !== artifact.id"
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
              <!-- 激活状态 - 圆形圆盘 -->
              <svg
                v-else
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 文物详情弹窗 -->
    <div class="artifact-modal" :class="{ open: selectedArtifact }">
      <div v-if="selectedArtifact" class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{{ selectedArtifact.name }}</h2>
          <button class="close-btn" @click="closeArtifactDetail">×</button>
        </div>
        <div class="modal-body">
          <img :src="selectedArtifact.image" class="artifact-detail-image" />
          <div class="modal-content-grid">
            <div class="artifact-detail-description">
              <strong>描述：</strong>{{ selectedArtifact.description }}
            </div>
            <div class="modal-actions-container">
              <div class="modal-actions">
                <button class="modal-action-btn love">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                  </svg>
                </button>
                <button class="modal-action-btn favorite">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                </button>
                <button class="modal-action-btn share">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div
              v-if="selectedArtifact.basicInfo"
              class="artifact-detail-section"
            >
              <h3 class="section-title">基础信息</h3>
              <p
                v-if="selectedArtifact.basicInfo?.periodDetail"
                class="section-content basic-info-content"
              >
                <strong>详细年代：</strong
                >{{ selectedArtifact.basicInfo.periodDetail }}
              </p>
              <p
                v-if="selectedArtifact.basicInfo?.material"
                class="section-content basic-info-content"
              >
                <strong>材质工艺：</strong
                >{{ selectedArtifact.basicInfo.material }}
              </p>
              <p
                v-if="selectedArtifact.basicInfo?.dimensions"
                class="section-content basic-info-content"
              >
                <strong>规格：</strong
                >{{ selectedArtifact.basicInfo.dimensions }}
              </p>
              <p
                v-if="selectedArtifact.basicInfo?.collection"
                class="section-content basic-info-content"
              >
                <strong>收藏机构：</strong
                >{{ selectedArtifact.basicInfo.collection }}
              </p>
              <p
                v-if="selectedArtifact.basicInfo?.excavation"
                class="section-content basic-info-content"
              >
                <strong>出土信息：</strong
                >{{ selectedArtifact.basicInfo.excavation }}
              </p>
            </div>
            <div
              v-if="selectedArtifact.appearance"
              class="artifact-detail-section"
            >
              <h3 class="section-title">外观细节</h3>
              <p class="section-content simple-content">
                {{ selectedArtifact.appearance }}
              </p>
            </div>
            <div
              v-if="selectedArtifact.historicalValue"
              class="artifact-detail-section"
            >
              <h3 class="section-title">历史价值</h3>
              <p class="section-content simple-content">
                {{ selectedArtifact.historicalValue }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Museum, ArtifactDetail } from "@/types/museum";
import {
  artifactTypes,
  periods,
  periodMap,
  getArtifactsByMuseumId,
  getArtifactDetailById,
} from "@/pages/Museum/data";

// 接收博物馆参数
interface Props {
  museum: Museum;
}

const props = defineProps<Props>();

// 筛选状态
const selectedTypes = ref<string>(artifactTypes[0]?.value || "");
const selectedPeriods = ref<string>(periods[0]?.value || "");
const searchKeyword = ref("");

// 获取当前博物馆的文物列表
const museumArtifacts = computed(() => {
  return getArtifactsByMuseumId(props.museum.id);
});

// 筛选逻辑
const filteredArtifacts = computed(() => {
  // 首先根据博物馆ID过滤文物
  const artifacts = museumArtifacts.value;

  return artifacts.filter((artifact) => {
    // 类型筛选
    if (
      selectedTypes.value &&
      selectedTypes.value !== "all" &&
      selectedTypes.value !== artifact.category
    ) {
      return false;
    }

    // 年代筛选
    if (selectedPeriods.value && selectedPeriods.value !== "all") {
      const periodNames = periodMap[selectedPeriods.value] || [];
      if (!periodNames.includes(artifact.period)) {
        return false;
      }
    }

    // 搜索筛选
    if (searchKeyword.value) {
      return artifact.name
        .toLowerCase()
        .includes(searchKeyword.value.toLowerCase());
    }

    return true;
  });
});

// 切换类型选择
const toggleType = (type: string) => {
  selectedTypes.value = selectedTypes.value === type ? "" : type;
};

// 切换年代选择
const togglePeriod = (period: string) => {
  selectedPeriods.value = selectedPeriods.value === period ? "" : period;
};

// 状态管理
const selectedArtifact = ref<ArtifactDetail | null>(null);
const activeArtifactId = ref<number | null>(null);

// 方法
const openArtifactDetail = (artifact: any) => {
  // 获取文物详情
  const detail = getArtifactDetailById(artifact.id);
  if (detail) {
    selectedArtifact.value = detail;
    activeArtifactId.value = artifact.id;
  }
};

const closeArtifactDetail = () => {
  selectedArtifact.value = null;
  activeArtifactId.value = null;
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
