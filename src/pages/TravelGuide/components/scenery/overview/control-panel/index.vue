<template>
  <div class="control-panel">
    <section class="panel-section stats-section">
      <h3 class="panel-title">
        <span class="panel-icon">
          <StatsIcon />
        </span>
        数据概览
      </h3>
      <div class="stats-grid">
        <template v-if="stats.length > 0">
          <div v-for="(stat, index) in stats" :key="index" class="stat-item">
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

    <section class="panel-section seasons-section">
      <h3 class="panel-title">
        <span class="panel-icon">
          <SeasonsPanelIcon />
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
                v-for="(activity, actIndex) in season.activities"
                :key="actIndex"
                class="activity-tag"
              >
                {{ activity }}
              </span>
            </div>
          </div>
        </template>
        <div v-else class="empty-seasons">
          <div class="empty-icon">🌸</div>
          <div class="empty-title">暂无季节数据</div>
          <p class="empty-description">该地区暂无最佳季节数</p>
        </div>
      </div>
    </section>

    <section class="panel-section highlights-section">
      <h3 class="panel-title">
        <span class="panel-icon">
          <StarIcon />
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
</template>

<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import type { SceneryData } from '@/types/travelGuide';
  import {
    StatsIcon,
    StarIcon,
    SeasonsPanelIcon,
  } from '@/pages/TravelGuide/icons/pages/scenery';

  interface Stat {
    value: number;
    label: string;
  }

  interface Season {
    name: string;
    description: string;
    activities: string[];
  }

  const props = defineProps<{
    sceneryData?: SceneryData;
  }>();

  const stats = ref<Stat[]>([]);
  const extendedAttractions = ref<string[]>([]);
  const detailedSeasons = ref<Season[]>([]);
  const colorIndices = ref<number[]>([]);

  // 生成随机颜色索引
  const generateRandomColorIndices = (count: number): number[] => {
    const indices: number[] = [];
    for (let i = 0; i < count; i++) {
      indices.push(Math.floor(Math.random() * 8) + 1);
    }
    return indices;
  };

  // 初始化数�?  const initData = () => {
    // 重置所有数据为默认空状�?    stats.value = [];
    extendedAttractions.value = [];
    detailedSeasons.value = [];
    colorIndices.value = [];

    if (props.sceneryData?.overview) {
      // 从sceneryData获取数据
      const overview = props.sceneryData.overview;
      stats.value = [
        { value: overview.totalSpots, label: '景点数量' },
        { value: overview.natureSpots, label: '自然景点' },
        { value: overview.cultureSpots, label: '文化景点' },
      ];

      // 热门景点
      extendedAttractions.value = (overview.topAttractions || []).map(
        (attraction) => attraction.name,
      );
      // 为每个热门景点生成随机颜色索�?      colorIndices.value = generateRandomColorIndices(
        extendedAttractions.value.length,
      );

      // 季节特色
      if (props.sceneryData.seasonal && props.sceneryData.seasonal.length > 0) {
        // 直接使用后端提供的季节数
        detailedSeasons.value = props.sceneryData.seasonal.map((season) => ({
          name: season.name,
          description: season.description,
          activities: season.activities,
        }));
      } else {
        // 无季节数据时使用默认春夏秋冬
        detailedSeasons.value = [
          {
            name: '春季',
            description: '万物复苏，春暖花开',
            activities: ['赏花', '踏青', '春游'],
          },
          {
            name: '夏季',
            description: '阳光明媚，绿树成�?,
            activities: ['避暑', '游泳', '露营'],
          },
          {
            name: '秋季',
            description: '秋高气爽，层林尽�?,
            activities: ['赏秋', '登山', '采摘'],
          },
          {
            name: '冬季',
            description: '银装素裹，冰天雪�?,
            activities: ['滑雪', '温泉', '赏雪'],
          },
        ];
      }
    } else {
      // 无数据时显示默认春夏秋冬
      detailedSeasons.value = [
        {
          name: '春季',
          description: '万物复苏，春暖花开',
          activities: ['赏花', '踏青', '春游'],
        },
        {
          name: '夏季',
          description: '阳光明媚，绿树成�?,
          activities: ['避暑', '游泳', '露营'],
        },
        {
          name: '秋季',
          description: '秋高气爽，层林尽�?,
          activities: ['赏秋', '登山', '采摘'],
        },
        {
          name: '冬季',
          description: '银装素裹，冰天雪�?,
          activities: ['滑雪', '温泉', '赏雪'],
        },
      ];
    }
  };

  // 监听sceneryData变化，实时更新数�?  watch(
    () => props.sceneryData,
    (newData) => {
      // 只有当sceneryData真正变化时才更新
      if (newData) {
        initData();
      }
    },
    { deep: true },
  );

  // 初始化数�?  onMounted(() => {
    initData();
  });
</script>

<style scoped lang="scss" src="./index.scss" />
