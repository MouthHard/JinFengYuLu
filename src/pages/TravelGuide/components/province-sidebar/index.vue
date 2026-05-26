<template>
  <aside class="province-sidebar">
    <ProvinceSidebarBack class="cyber-bg-effects" />

    <div class="sidebar-title">
      <component :is="provinceSelectorIcon" class="title-icon" />
      <h3 class="glitch-text" data-text="省份选择">省份选择</h3>
      <div class="title-decoration">
        <span class="deco-line"></span>
        <span class="deco-dot"></span>
      </div>
    </div>

    <div class="search-box">
      <input
        :value="searchQuery"
        type="text"
        placeholder="搜索省份..."
        class="search-input"
        @input="
          $emit('update:searchQuery', ($event.target as HTMLInputElement).value)
        "
      />
      <span class="search-icon">🔍</span>
    </div>

    <div class="region-filter">
      <button
        v-for="region in regions"
        :key="region"
        class="region-button"
        :class="{ active: selectedRegion === region }"
        @click="$emit('update:selectedRegion', region)"
      >
        <span class="btn-text">{{ region }}</span>
        <span class="btn-glow"></span>
        <span class="btn-particles"></span>
      </button>
    </div>

    <div class="province-list">
      <div class="list-header">
        <span class="header-text">数据终端</span>
        <span class="header-status">ONLINE</span>
      </div>
      <div class="list-content">
        <div
          v-for="(province, index) in filteredProvinces"
          :key="province.id"
          class="province-item"
          :class="{ selected: province.id === selectedProvinceId }"
          :style="{ animationDelay: `${index * 0.05}s` }"
          @click="$emit('select-province', province.id)"
        >
          <div class="item-glow"></div>
          <span class="province-name">{{ province.name }}</span>
          <span class="province-abbreviation">{{ province.abbreviation }}</span>
          <span class="province-region">{{ province.region }}</span>
          <div class="item-data-line"></div>
        </div>
      </div>
    </div>

    <div class="status-bar">
      <div class="status-item">
        <span class="status-dot"></span>
        <span class="status-text">系统就绪</span>
      </div>
      <div class="status-item">
        <span class="status-count">{{ filteredProvinces.length }}</span>
        <span class="status-label">个省份</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  import { ProvinceSidebarBack } from '@/pages/TravelGuide/icons/common/index';

  const props = defineProps<{
    provinceSelectorIcon: any;
    searchQuery: string;
    selectedRegion: string;
    regions: string[];
    filteredProvinces: any[];
    selectedProvinceId: string;
  }>();

  defineEmits<{
    (e: 'update:searchQuery', query: string): void;
    (e: 'update:selectedRegion', region: string): void;
    (e: 'select-province', provinceId: string): void;
  }>();
</script>

<style scoped src="./index.scss" />
