<template>
  <header class="sticky-header">
    <div class="header-left">
      <div class="basic-info">
        <div class="capital-info">
          <span class="info-label">省会:</span>
          <span class="info-value">{{ currentProvinceCapital }}</span>
        </div>
        <div class="weather-info">
          <span class="weather-icon">{{ weatherIcon }}</span>
          <span class="info-value">{{ weatherDescription }}</span>
        </div>
      </div>

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

      <div class="province-description">
        {{ provinceDescription }}
      </div>
    </div>

    <div class="header-center">
      <div class="header-title">
        <h1 class="hero-title">{{ currentProvinceName }}旅游指引</h1>
      </div>

      <div class="tab-navigation">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-button"
          :class="{ active: activeTab === tab.id }"
          @click="$emit('update:activeTab', tab.id)"
        >
          <span class="tab-icon">
            <component :is="tab.icon" />
          </span>
          <span class="tab-name">{{ tab.name }}</span>
        </button>
      </div>
    </div>

    <div class="header-right">
      <button class="back-home-button" @click="$emit('back-home')">
        <span class="back-icon">🏠</span>
        <span class="back-text">返回首页</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import type { Tab } from '@/typesOfPages/travelGuide';
  import { getTagColorClass } from '@/utils/travelGuide';

  const props = defineProps<{
    currentProvinceCapital: string;
    weatherIcon: string;
    weatherDescription: string;
    allTags: string[];
    provinceDescription: string;
    currentProvinceName: string;
    tabs: Tab[];
    activeTab: string;
  }>();

  defineEmits<{
    (e: 'update:activeTab', tabId: string): void;
    (e: 'back-home'): void;
  }>();
</script>

<style scoped src="./index.scss" />
