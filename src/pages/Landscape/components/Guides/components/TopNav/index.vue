<template>
  <nav class="top-nav">
    <div class="nav-container">
      <div class="nav-brand">
        <span class="brand-icon">🏔️</span>
        <span class="brand-text">旅途志</span>
      </div>

      <div ref="searchContainer" class="nav-search">
        <div class="search-box">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref="searchInput"
            v-model="searchKeyword"
            type="text"
            placeholder="搜索目的地、攻略、摄影技巧..."
            @input="handleSearch"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          <button
            v-if="searchKeyword"
            class="clear-btn"
            @click="clearSearch"
          >
            ×
          </button>
        </div>

        <!-- 搜索下拉菜单 -->
        <div v-if="isSearchFocused" class="search-dropdown">
          <!-- 搜索历史 -->
          <div v-if="searchHistory.length > 0" class="dropdown-section">
            <div class="section-header">
              <span class="section-title">搜索历史</span>
              <button class="clear-history-btn" @click="clearSearchHistory">清除</button>
            </div>
            <div class="history-list">
              <button
                v-for="(item, index) in searchHistory"
                :key="index"
                class="history-item"
                @mousedown="selectHistoryItem(item)"
              >
                <svg class="history-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span class="history-text">{{ item }}</span>
              </button>
            </div>
          </div>

          <!-- 热门推荐 -->
          <div class="dropdown-section">
            <div class="section-header">
              <span class="section-title">热门推荐</span>
            </div>
            <div class="hot-tags-list">
              <button
                v-for="tag in hotTags"
                :key="tag.id"
                class="hot-tag"
                @mousedown="selectHotTag(tag.name)"
              >
                {{ tag.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { hotTags } from '@/utils/landscape/constants';

const searchKeyword = ref('');
const isSearchFocused = ref(false);
const searchHistory = ref<string[]>([]);
const searchInput = ref<HTMLInputElement | null>(null);

const emit = defineEmits<{
  (e: 'update:searchKeyword', value: string): void;
  (e: 'search'): void;
}>();

// 从localStorage加载搜索历史
const loadSearchHistory = () => {
  try {
    const history = localStorage.getItem('guideSearchHistory');
    if (history) {
      searchHistory.value = JSON.parse(history);
    }
  } catch (error) {
    console.error('加载搜索历史失败:', error);
  }
};

// 保存搜索历史到localStorage
const saveSearchHistory = (keyword: string) => {
  try {
    if (!keyword.trim()) return;

    // 移除已存在的相同关键词
    const index = searchHistory.value.indexOf(keyword);
    if (index > -1) {
      searchHistory.value.splice(index, 1);
    }

    // 添加到开头
    searchHistory.value.unshift(keyword);

    // 限制历史记录数量为10条
    if (searchHistory.value.length > 10) {
      searchHistory.value = searchHistory.value.slice(0, 10);
    }

    localStorage.setItem('guideSearchHistory', JSON.stringify(searchHistory.value));
  } catch (error) {
    console.error('保存搜索历史失败:', error);
  }
};

const handleFocus = () => {
  isSearchFocused.value = true;
};

const handleBlur = () => {
  // 延迟关闭，以便点击事件能够触发
  setTimeout(() => {
    isSearchFocused.value = false;
  }, 200);
};

const handleSearch = () => {
  emit('update:searchKeyword', searchKeyword.value);
  emit('search');

  // 如果搜索内容不为空，保存到历史记录
  if (searchKeyword.value.trim()) {
    saveSearchHistory(searchKeyword.value);
  }
};

const clearSearch = () => {
  searchKeyword.value = '';
  emit('update:searchKeyword', '');
  emit('search');
  searchInput.value?.focus();
};

const selectHistoryItem = (item: string) => {
  searchKeyword.value = item;
  emit('update:searchKeyword', item);
  emit('search');
  isSearchFocused.value = false;
};

const selectHotTag = (tag: string) => {
  searchKeyword.value = tag;
  emit('update:searchKeyword', tag);
  emit('search');
  saveSearchHistory(tag);
  isSearchFocused.value = false;
};

const clearSearchHistory = () => {
  searchHistory.value = [];
  localStorage.removeItem('guideSearchHistory');
};

onMounted(() => {
  loadSearchHistory();
});
</script>

<style scoped lang="scss" src="./index.scss" />
