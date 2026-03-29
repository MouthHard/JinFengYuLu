<template>
  <div class="control-panel">
    <!-- 左侧列：数据概览 + 热门景点 -->
    <div class="panel-column">
      <!-- 数据概览 -->
      <section class="panel-section stats-section">
        <h3 class="panel-title">
          <span class="panel-icon">
            <svg width="48" height="48" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="statsGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="rgba(144, 238, 144, 0.9)" />
                  <stop offset="50%" stop-color="rgba(135, 206, 235, 0.9)" />
                  <stop offset="100%" stop-color="rgba(144, 238, 144, 0.9)" />
                </linearGradient>
                <linearGradient
                  id="statsInnerGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="rgba(144, 238, 144, 0.9)" />
                  <stop offset="100%" stop-color="rgba(135, 206, 235, 0.9)" />
                </linearGradient>
                <filter id="statsGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <!-- 图表主体 -->
              <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
                ry="2"
                fill="rgba(255,255,255,0.15)"
                stroke="url(#statsInnerGradient)"
                stroke-width="0.6"
              />
              <!-- 柱状图 -->
              <rect
                x="5"
                y="14"
                width="3"
                height="4"
                rx="1"
                ry="1"
                fill="url(#statsGradient)"
              >
                <animate
                  attributeName="height"
                  values="4;8;4"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values="14;10;14"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="9"
                y="10"
                width="3"
                height="8"
                rx="1"
                ry="1"
                fill="url(#statsGradient)"
              >
                <animate
                  attributeName="height"
                  values="8;12;8"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.3s"
                />
                <animate
                  attributeName="y"
                  values="10;6;10"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.3s"
                />
              </rect>
              <rect
                x="13"
                y="12"
                width="3"
                height="6"
                rx="1"
                ry="1"
                fill="url(#statsGradient)"
              >
                <animate
                  attributeName="height"
                  values="6;10;6"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
                <animate
                  attributeName="y"
                  values="12;8;12"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
              </rect>
              <rect
                x="17"
                y="8"
                width="3"
                height="10"
                rx="1"
                ry="1"
                fill="url(#statsGradient)"
              >
                <animate
                  attributeName="height"
                  values="10;14;10"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.9s"
                />
                <animate
                  attributeName="y"
                  values="8;4;8"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.9s"
                />
              </rect>
              <!-- 发光效果 -->
              <rect
                x="5"
                y="14"
                width="3"
                height="4"
                rx="1"
                ry="1"
                fill="none"
                stroke="url(#statsInnerGradient)"
                stroke-width="0.4"
              />
              <rect
                x="9"
                y="10"
                width="3"
                height="8"
                rx="1"
                ry="1"
                fill="none"
                stroke="url(#statsInnerGradient)"
                stroke-width="0.4"
              />
              <rect
                x="13"
                y="12"
                width="3"
                height="6"
                rx="1"
                ry="1"
                fill="none"
                stroke="url(#statsInnerGradient)"
                stroke-width="0.4"
              />
              <rect
                x="17"
                y="8"
                width="3"
                height="10"
                rx="1"
                ry="1"
                fill="none"
                stroke="url(#statsInnerGradient)"
                stroke-width="0.4"
              />
              <!-- 蓝色发光效果 - 多层 -->
              <circle
                cx="12"
                cy="12"
                r="11"
                fill="none"
                stroke="rgba(135, 206, 235, 0.5)"
                stroke-width="0.6"
                stroke-dasharray="2 4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 12 12"
                  to="0 12 12"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(144, 238, 144, 0.4)"
                stroke-width="0.4"
                stroke-dasharray="1 3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="none"
                stroke="rgba(100, 200, 255, 0.3)"
                stroke-width="0.3"
                stroke-dasharray="3 5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="180 12 12"
                  to="-180 12 12"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>
              <!-- 蓝色呼吸光晕 -->
              <circle
                cx="12"
                cy="12"
                r="8.5"
                fill="none"
                stroke="rgba(135, 206, 235, 0.25)"
                stroke-width="1"
              >
                <animate
                  attributeName="r"
                  values="8.5;9.5;8.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.25;0.5;0.25"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="rgba(144, 238, 144, 0.2)"
                stroke-width="0.8"
              >
                <animate
                  attributeName="r"
                  values="8;9;8"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.45;0.2"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </span>
          数据概览
        </h3>
        <div class="stats-grid">
          <template v-if="stats.length > 0">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </template>
          <div v-else class="empty-stats">
            <div class="empty-icon">📊</div>
            <div class="empty-text">暂无数据</div>
          </div>
        </div>
      </section>

      <!-- 热门景点 -->
      <section class="panel-section highlights-section">
        <h3 class="panel-title">
          <span class="panel-icon">
            <svg width="48" height="48" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="rgba(255, 165, 0, 0.9)" />
                  <stop offset="50%" stop-color="rgba(255, 215, 0, 0.9)" />
                  <stop offset="100%" stop-color="rgba(255, 165, 0, 0.9)" />
                </linearGradient>
                <linearGradient
                  id="starInnerGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="rgba(255, 165, 0, 0.9)" />
                  <stop offset="100%" stop-color="rgba(255, 215, 0, 0.9)" />
                </linearGradient>
                <filter id="starGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <!-- 星星 -->
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="url(#starGradient)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </polygon>
              <!-- 星星边框 -->
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke="url(#starInnerGradient)"
                stroke-width="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </polygon>
              <!-- 金色发光效果 - 多层 -->
              <circle
                cx="12"
                cy="12"
                r="11"
                fill="none"
                stroke="rgba(255, 215, 0, 0.5)"
                stroke-width="0.6"
                stroke-dasharray="2 4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 12 12"
                  to="0 12 12"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255, 165, 0, 0.4)"
                stroke-width="0.4"
                stroke-dasharray="1 3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="none"
                stroke="rgba(255, 223, 0, 0.3)"
                stroke-width="0.3"
                stroke-dasharray="3 5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="180 12 12"
                  to="-180 12 12"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>
              <!-- 金色呼吸光晕 -->
              <circle
                cx="12"
                cy="12"
                r="8.5"
                fill="none"
                stroke="rgba(255, 215, 0, 0.25)"
                stroke-width="1"
              >
                <animate
                  attributeName="r"
                  values="8.5;9.5;8.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.25;0.5;0.25"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="rgba(255, 165, 0, 0.2)"
                stroke-width="0.8"
              >
                <animate
                  attributeName="r"
                  values="8;9;8"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.45;0.2"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </span>
          热门景点
        </h3>
        <div class="highlights-scroll">
          <span
            v-for="(attraction, index) in extendedAttractions"
            :key="index"
            class="highlight-item"
            :class="`highlight-${colorIndices[index] || (index % 8) + 1}`"
          >
            {{ attraction }}
          </span>
          <span v-if="extendedAttractions.length === 0" class="empty-highlight">
            暂无热门景点数据
          </span>
        </div>
      </section>
    </div>

    <!-- 右侧列：季节特色 -->
    <div class="panel-column">
      <section class="panel-section seasons-section">
        <h3 class="panel-title">
          <span class="panel-icon">
            <svg width="48" height="48" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="seasonGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.9)" />
                  <stop offset="50%" stop-color="rgba(255, 160, 122, 0.9)" />
                  <stop offset="100%" stop-color="rgba(255, 182, 193, 0.9)" />
                </linearGradient>
                <linearGradient
                  id="seasonInnerGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="rgba(255, 182, 193, 0.9)" />
                  <stop offset="100%" stop-color="rgba(255, 160, 122, 0.9)" />
                </linearGradient>
                <filter id="seasonGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <!-- 花朵中心 -->
              <circle
                cx="12"
                cy="12"
                r="5"
                fill="rgba(255,255,255,0.15)"
                stroke="url(#seasonInnerGradient)"
                stroke-width="0.6"
              >
                <animate
                  attributeName="r"
                  values="5;6;5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="12" cy="12" r="3" fill="url(#seasonGradient)">
                <animate
                  attributeName="r"
                  values="3;4;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <!-- 花瓣1 -->
              <polygon
                points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
                fill="url(#seasonGradient)"
                opacity="0.8"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.8;0.4;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </polygon>
              <!-- 花瓣2 -->
              <polygon
                points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
                fill="url(#seasonInnerGradient)"
                opacity="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="45 12 12"
                  to="405 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0.2;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </polygon>
              <!-- 花瓣3 -->
              <polygon
                points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
                fill="url(#seasonGradient)"
                opacity="0.8"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="90 12 12"
                  to="450 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.8;0.4;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="1s"
                />
              </polygon>
              <!-- 花瓣4 -->
              <polygon
                points="12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8 12 2"
                fill="url(#seasonInnerGradient)"
                opacity="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="135 12 12"
                  to="495 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0.2;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="1.5s"
                />
              </polygon>
              <!-- 粉紫色发光效果 - 多层 -->
              <circle
                cx="12"
                cy="12"
                r="11"
                fill="none"
                stroke="rgba(255, 182, 193, 0.5)"
                stroke-width="0.6"
                stroke-dasharray="2 4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 12 12"
                  to="0 12 12"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255, 160, 122, 0.4)"
                stroke-width="0.4"
                stroke-dasharray="1 3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="none"
                stroke="rgba(221, 160, 221, 0.3)"
                stroke-width="0.3"
                stroke-dasharray="3 5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="180 12 12"
                  to="-180 12 12"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>
              <!-- 粉紫色呼吸光晕 -->
              <circle
                cx="12"
                cy="12"
                r="8.5"
                fill="none"
                stroke="rgba(255, 182, 193, 0.25)"
                stroke-width="1"
              >
                <animate
                  attributeName="r"
                  values="8.5;9.5;8.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.25;0.5;0.25"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="rgba(221, 160, 221, 0.2)"
                stroke-width="0.8"
              >
                <animate
                  attributeName="r"
                  values="8;9;8"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.45;0.2"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </span>
          季节特色
        </h3>
        <div class="seasons-detail">
          <template v-if="detailedSeasons.length > 0">
            <div
              v-for="(season, index) in detailedSeasons"
              :key="index"
              class="season-detail-item"
              :data-season="season.name"
              :style="`--index: ${index}`"
            >
              <h4 class="season-name">{{ season.name }}</h4>
              <p class="season-description">{{ season.description }}</p>
              <div class="season-activities">
                <span
                  class="activity-tag"
                  v-for="(activity, actIndex) in season.activities"
                  :key="actIndex"
                >
                  {{ activity }}
                </span>
              </div>
            </div>
          </template>
          <div v-else class="empty-seasons">
            <div class="empty-icon">🌸</div>
            <div class="empty-title">暂无季节数据</div>
            <p class="empty-description">该地区暂无最佳季节数据</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  sceneryData: {
    type: Object,
    default: () => ({}),
  },
});

const stats = ref([]);
const extendedAttractions = ref([]);
const detailedSeasons = ref([]);
const colorIndices = ref([]);

// 生成随机颜色索引
const generateRandomColorIndices = (count) => {
  const indices = [];
  for (let i = 0; i < count; i++) {
    indices.push(Math.floor(Math.random() * 8) + 1);
  }
  return indices;
};

// 初始化数据
const initData = () => {
  // 重置所有数据为默认空状态
  stats.value = [];
  extendedAttractions.value = [];
  detailedSeasons.value = [];
  colorIndices.value = [];

  if (props.sceneryData.overview) {
    // 从sceneryData获取数据
    const overview = props.sceneryData.overview;
    stats.value = [
      { value: overview.totalSpots, label: "景点数量" },
      { value: overview.natureSpots, label: "自然景点" },
      { value: overview.cultureSpots, label: "文化景点" },
    ];

    // 热门景点
    extendedAttractions.value = (overview.topAttractions || []).map(
      (attraction) => attraction.name,
    );
    // 为每个热门景点生成随机颜色索引
    colorIndices.value = generateRandomColorIndices(
      extendedAttractions.value.length,
    );

    // 季节特色
    if (props.sceneryData.seasonal && props.sceneryData.seasonal.length > 0) {
      // 直接使用后端提供的季节数据
      detailedSeasons.value = props.sceneryData.seasonal.map((season) => ({
        name: season.name,
        description: season.description,
        activities: season.activities,
      }));
    } else {
      // 无季节数据时使用默认春夏秋冬
      detailedSeasons.value = [
        {
          name: "春季",
          description: "万物复苏，春暖花开",
          activities: ["赏花", "踏青", "春游"],
        },
        {
          name: "夏季",
          description: "阳光明媚，绿树成荫",
          activities: ["避暑", "游泳", "露营"],
        },
        {
          name: "秋季",
          description: "秋高气爽，层林尽染",
          activities: ["赏秋", "登山", "采摘"],
        },
        {
          name: "冬季",
          description: "银装素裹，冰天雪地",
          activities: ["滑雪", "温泉", "赏雪"],
        },
      ];
    }
  } else {
    // 无数据时显示默认春夏秋冬
    detailedSeasons.value = [
      {
        name: "春季",
        description: "万物复苏，春暖花开",
        activities: ["赏花", "踏青", "春游"],
      },
      {
        name: "夏季",
        description: "阳光明媚，绿树成荫",
        activities: ["避暑", "游泳", "露营"],
      },
      {
        name: "秋季",
        description: "秋高气爽，层林尽染",
        activities: ["赏秋", "登山", "采摘"],
      },
      {
        name: "冬季",
        description: "银装素裹，冰天雪地",
        activities: ["滑雪", "温泉", "赏雪"],
      },
    ];
  }
};

// 监听sceneryData变化，实时更新数据
watch(
  () => props.sceneryData,
  (newData) => {
    // 只有当sceneryData真正变化时才更新
    if (newData) {
      initData();
    }
  },
  { deep: true },
);

// 初始化数据
onMounted(() => {
  initData();
});
</script>

<style scoped lang="scss" src="./index.scss" />
