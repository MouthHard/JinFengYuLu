<template>
  <div class="filter-header">
    <div class="search-section">
      <div class="search-container" :class="{ focused: searchFocused }">
        <div class="search-input">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            :value="modelValue"
            type="text"
            placeholder="搜索风景、地点、摄影师..."
            @input="handleInput"
            @focus="searchFocused = true"
            @blur="searchFocused = false"
          />
        </div>

        <div v-if="searchFocused" class="search-expanded">
          <div class="expanded-section">
            <h4>热门推荐</h4>
            <div class="recommend-list">
              <button
                v-for="rec in hotRecommendations"
                :key="rec"
                class="recommend-item"
                @click="selectHistory(rec)"
              >
                <span class="rec-icon">🔥</span>
                <span>{{ rec }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="result-header-section">
      <div class="header-info">
        <h2>{{ title }}</h2>
        <p class="result-count">共 {{ count }} 个结果</p>
      </div>
      <div class="header-controls">
        <div class="controls-stack">
          <div class="media-type-switch">
            <button
              v-for="mt in mediaTypes"
              :key="mt.id"
              :class="['mt-btn', { active: mediaType === mt.id, [mt.id]: true }]"
              @click="$emit('update:mediaType', mt.id)"
            >
              <span class="mt-icon">{{ mt.icon }}</span>
              <span class="mt-label">{{ mt.label }}</span>
            </button>
          </div>
          <div class="quick-filters">
            <button
              v-for="filter in quickFilters"
              :key="filter.id"
              :class="['filter-chip', { active: activeFilter === filter.id }]"
              @click="$emit('update:activeFilter', filter.id)"
            >
              <span class="chip-icon">{{ filter.icon }}</span>
              <span class="chip-label">{{ filter.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mediaTypes, quickFilters } from '@/utils/landscape/constants';

interface Props {
  modelValue: string;
  title: string;
  count: number;
  activeFilter: string;
  mediaType: 'all' | 'image' | 'video';
}

defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'update:activeFilter': [value: string];
  'update:mediaType': [value: 'all' | 'image' | 'video'];
}>();

const searchFocused = ref(false);

const hotRecommendations = ['冰岛极光', '星空摄影', '富士山日出', '雪山风光', '海浪日落', '秋叶森林'];

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const selectHistory = (value: string) => {
  emit('update:modelValue', value);
  searchFocused.value = false;
};
</script>

<style scoped lang="scss" src="./index.scss" />
