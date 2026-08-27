<template>
  <div class="search-filter-section">
    <div class="filter-layout">
      <div class="search-box">
        <div class="search-icon-wrapper">🔍</div>
        <input
          v-model="localSearchQuery"
          type="text"
          placeholder="搜索景点、位置或描述..."
          class="search-input"
          @input="updateSearchQuery"
        />
      </div>

      <div class="filter-container">
        <div class="filter-options">
          <div
            v-for="theme in cultureThemes"
            :key="theme.value"
            class="filter-chip"
            :class="{ active: selectedTheme === theme.value }"
            @click="selectTheme(theme.value)"
          >
            <span class="chip-icon">{{ theme.icon }}</span>
            <span class="chip-text">{{ theme.name }}</span>
            <span class="chip-count">{{ getThemeCount(theme.value) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { cultureThemes } from '../../../../data/scenery';

  const props = defineProps<{
    searchQuery: string;
    selectedTheme: string;
    getThemeCount: (theme: string) => number;
  }>();

  const emit = defineEmits<{
    searchQuery: [value: string];
    selectedTheme: [value: string];
  }>();

  const localSearchQuery = ref(props.searchQuery);

  watch(
    () => props.searchQuery,
    (newValue) => {
      localSearchQuery.value = newValue;
    },
  );

  const updateSearchQuery = () => {
    emit('searchQuery', localSearchQuery.value);
  };

  const selectTheme = (theme: string) => {
    emit('selectedTheme', theme);
  };
</script>

<style scoped src="./index.scss" />
