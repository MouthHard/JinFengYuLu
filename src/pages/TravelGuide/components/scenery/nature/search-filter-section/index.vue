<template>
  <div class="search-filter-section">
    <div class="filter-layout">
      <!-- 搜索框 -->
      <div class="search-box">
        <div class="search-icon-wrapper">
          <SearchIcon />
        </div>
        <input
          v-model="localSearchQuery"
          type="text"
          placeholder="搜索景点、位置或描述..."
          class="search-input"
          @input="updateSearchQuery"
        />
      </div>

      <!-- 筛选容器 -->
      <div class="filter-container">
        <div class="filter-options">
          <div
            v-for="type in landscapeTypes"
            :key="type.value"
            class="filter-chip"
            :class="{ active: selectedLandscapeType === type.value }"
            @click="selectLandscapeType(type.value)"
          >
            <span class="chip-icon">{{ type.icon }}</span>
            <span class="chip-text">{{ type.label }}</span>
            <span class="chip-count">{{ getTypeCount(type.value) }}</span>
          </div>
        </div>
      </div>

      <!-- 已选筛选 -->
      <div v-if="selectedLandscapeType" class="active-filters">
        <span class="filter-label">已选筛选：</span>
        <div class="active-filter-tag">
          <span>{{ getSelectedLandscapeName() }}</span>
          <button class="filter-close" @click="clearLandscapeType">
            <CloseIcon />
          </button>
        </div>
        <button class="clear-all" @click="clearAll">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
              fill="currentColor"
            />
          </svg>
          清空
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { landscapeTypes } from "../../../../data/scenery";
import { SearchIcon, CloseIcon } from "../../../../icons";

const props = defineProps<{
  searchQuery: string;
  selectedLandscapeType: string;
  getTypeCount: (type: string) => number;
}>();

const emit = defineEmits<{
  searchQuery: [value: string];
  selectedLandscapeType: [value: string];
  clearAll: [];
}>();

const localSearchQuery = ref(props.searchQuery);

watch(
  () => props.searchQuery,
  (newValue) => {
    localSearchQuery.value = newValue;
  },
);

const updateSearchQuery = () => {
  emit("searchQuery", localSearchQuery.value);
};

const selectLandscapeType = (type: string) => {
  emit("selectedLandscapeType", type);
};

const clearLandscapeType = () => {
  emit("selectedLandscapeType", "");
};

const clearAll = () => {
  emit("clearAll");
};

const getSelectedLandscapeName = () => {
  const type = landscapeTypes.find(
    (t) => t.value === props.selectedLandscapeType,
  );
  return type ? type.label : "";
};
</script>

<style scoped src="./index.scss" />
