<template>
  <div class="travel-guide-container">
    <!-- 固定头部区域 -->
    <header class="sticky-header">
      <div class="header-content">
        <!-- 左侧区域：当前省份标签和基本信息 -->
        <div class="header-left">
          <!-- 省份基本信息 -->
          <div class="basic-info">
            <div class="capital-info">
              <span class="info-label">省会: </span>
              <span class="info-value">{{ currentProvinceCapital }}</span>
            </div>
            <div class="weather-info">
              <span class="weather-icon">{{ weatherIcon }}</span>
              <span class="info-value">{{ weatherDescription }}</span>
            </div>
          </div>

          <!-- 省份标签 -->
          <div class="province-tags">
            <span
              v-for="(tag, index) in allTags"
              :key="index"
              class="tag-item"
              :class="getTagColorClass(index)"
            >
              {{ tag }}
            </span>
          </div>

          <!-- 省份简要描述 -->
          <div class="province-description">
            {{ provinceDescription }}
          </div>
        </div>

        <!-- 中间区域：标题和标签页导航 -->
        <div class="header-center">
          <div class="header-title">
            <h1 class="hero-title">{{ currentProvinceName }}旅游指引</h1>
          </div>
          <!-- 标签页导航 -->
          <div class="tab-navigation">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="tab-button"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              <span class="tab-icon">
                <component :is="tab.icon" />
              </span>
              <span class="tab-name">{{ tab.name }}</span>
            </button>
          </div>
        </div>

        <!-- 右侧区域：返回按钮 -->
        <div class="header-right">
          <!-- 返回首页按钮 -->
          <button class="back-home-button" @click="router.push('/')">
            <span class="back-icon">🏠</span>
            <span class="back-text">返回首页</span>
            <span class="button-glow"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- 左侧省份选择菜单 -->
    <aside class="province-sidebar">
      <div class="sidebar-content">
        <!-- 菜单标题 -->
        <div class="sidebar-title">
          <component :is="provinceSelectorIcon" class="title-icon" />
          <h3>省份选择</h3>
        </div>

        <!-- 搜索框 -->
        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="搜索省份..."
            class="search-input"
          />
          <span class="search-icon">🔍</span>
        </div>

        <!-- 地区筛选 -->
        <div class="region-filter">
          <button
            v-for="region in regions"
            :key="region"
            class="region-button"
            :class="{ active: selectedRegion === region }"
            @click="selectedRegion = region"
          >
            {{ region }}
          </button>
        </div>

        <!-- 省份列表 -->
        <div class="province-list">
          <div
            v-for="province in filteredProvinces"
            :key="province.id"
            class="province-item"
            :class="{ selected: province.id === selectedProvinceId }"
            @click="selectProvince(province.id)"
          >
            <span class="province-name">{{ province.name }}</span>
            <span class="province-abbreviation">{{
              province.abbreviation
            }}</span>
            <span class="province-region">{{ province.region }}</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- 主内容区域 - 可滚动 -->
    <main class="main-content">
      <FoodModule
        v-if="activeTab === 'food'"
        :province-id="selectedProvinceId"
      />
      <SceneryModule
        v-else-if="activeTab === 'scenery'"
        :province-id="selectedProvinceId"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, type Ref, type ComputedRef } from "vue";
import { useRouter } from "vue-router";

// 类型定义
interface Province {
  id: string;
  name: string;
  abbreviation: string;
  region: string;
  capital: string;
  description: string;
  tags?: string[];
}

interface Tab {
  id: string;
  name: string;
  icon: any;
}

import { provinces as provincesData } from "./data/provinces.ts";
import {
  WEATHER_ICONS,
  WEATHER_DESCRIPTIONS,
  TAG_COLOR_CLASSES,
  DEFAULT_TAB_ID,
  DEFAULT_REGION,
} from "./data/constants.ts";
import FoodModule from "./components/food/index.vue";
import SceneryModule from "./components/scenery/index.vue";
import { FoodIcon, SceneryIcon, ProvinceIcon } from "./icons";

const router = useRouter();
const selectedProvinceId: Ref<string> = ref(provincesData[0].id); // 默认选择第一个省份
const activeTab: Ref<string> = ref(DEFAULT_TAB_ID); // 默认显示美食标签页

// 标签页定义
const tabs: Tab[] = [
  { id: "food", name: "美食", icon: FoodIcon },
  { id: "scenery", name: "风光", icon: SceneryIcon },
];

// 省份选择器图标
const provinceSelectorIcon = ProvinceIcon;

// 提供省份选择状态给子组件
provide("selectedProvinceId", selectedProvinceId);

// 使用 computed 缓存当前省份
const currentProvince: ComputedRef<Province | undefined> = computed(() => {
  return provincesData.find((p) => p.id === selectedProvinceId.value);
});

// 计算属性：当前省份名称
const currentProvinceName = computed(() => {
  return currentProvince.value?.name || "";
});

// 计算属性：当前省份标签（包括地区）
const allTags = computed(() => {
  if (!currentProvince.value) return [];
  return [currentProvince.value.region, ...(currentProvince.value.tags || [])];
});

// 计算属性：当前省份描述
const provinceDescription = computed(() => {
  return currentProvince.value?.description || "";
});

// 计算属性：当前省份省会
const currentProvinceCapital = computed(() => {
  return currentProvince.value?.capital || "";
});

// 计算属性：天气图标（模拟数据）
const weatherIcon = computed(() => {
  const province = currentProvince.value;
  if (!province) return WEATHER_ICONS[0];
  // 使用省份ID的哈希值生成相对稳定的随机数
  const hash = province.id
    .split("")
    .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
  return WEATHER_ICONS[hash % WEATHER_ICONS.length];
});

// 计算属性：天气描述（模拟数据）
const weatherDescription = computed(() => {
  const province = currentProvince.value;
  if (!province) return WEATHER_DESCRIPTIONS[0];
  // 使用省份ID的哈希值生成相对稳定的随机数
  const hash = province.id
    .split("")
    .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
  return WEATHER_DESCRIPTIONS[hash % WEATHER_DESCRIPTIONS.length];
});

// 获取标签颜色类
const getTagColorClass = (index: number): string => {
  return TAG_COLOR_CLASSES[index % TAG_COLOR_CLASSES.length];
};

// 省份选择器相关状态
const selectedRegion: Ref<string> = ref(DEFAULT_REGION);
const searchQuery: Ref<string> = ref("");

// 计算属性：所有地区
const regions = computed(() => {
  const regionSet = new Set(provincesData.map((p) => p.region));
  return [DEFAULT_REGION, ...Array.from(regionSet)];
});

// 计算属性：过滤后的省份列表
const filteredProvinces: ComputedRef<Province[]> = computed(() => {
  return provincesData.filter((province) => {
    const matchRegion =
      selectedRegion.value === "全部" ||
      province.region === selectedRegion.value;
    const matchSearch =
      searchQuery.value === "" ||
      province.name.includes(searchQuery.value) ||
      province.id.includes(searchQuery.value);
    return matchRegion && matchSearch;
  });
});

const selectProvince = (provinceId: string): void => {
  selectedProvinceId.value = provinceId;
};
</script>

<style scoped src="./index.scss" lang="scss"></style>
