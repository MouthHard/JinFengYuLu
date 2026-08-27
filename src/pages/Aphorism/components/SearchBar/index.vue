<template>
  <div class="search-bar">
    <div class="search-container">
      <div class="search-icon"><SearchIcon /></div>
      <div class="search-input-container">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="搜索诗词、作者、名称.."
          @keyup.enter="handleSearchFromUser" @focus="handleFocus" @blur="handleBlur" />
        <button v-if="searchQuery" class="clear-button" title="清除搜索" @click="clearSearch">
          <CloseIcon />
        </button>
      </div>
      <button class="search-button" @click="handleSearchFromUser">搜索</button>
    </div>

    <!-- 空聚焦：搜索历史 + 热门推荐（不占据文档流空间） -->
    <div v-if="isFocused && !searchQuery" class="search-dropdown">
      <!-- 搜索历史区（有历史时显示，上部） -->
      <div v-if="searchHistory.length > 0" class="search-history-section">
        <div class="history-header">
          <span class="section-label">搜索历史</span>
          <div class="history-actions">
            <button v-if="searchHistory.length > collapsedLimit && !isHistoryExpanded" class="history-action-btn"
              @mousedown.prevent="toggleHistoryExpand">更多</button>
            <button v-if="isHistoryExpanded" class="history-action-btn"
              @mousedown.prevent="toggleHistoryExpand">收起</button>
            <button class="history-action-btn" @mousedown.prevent="handleClearHistory">清空</button>
          </div>
        </div>
        <div class="history-tags" :class="{ expanded: isHistoryExpanded }">
          <span v-for="item in searchHistory" :key="item" class="history-tag" @mousedown.prevent="selectTag(item)">
            <span class="history-tag-text">{{ item }}</span>
            <span class="history-remove" title="删除" @mousedown.prevent.stop="handleRemoveHistory(item)"><CloseIcon /></span>
          </span>
        </div>
      </div>

      <!-- 热门推荐区（始终底部，不被挤出） -->
      <div class="hot-searches-section">
        <span class="hot-label">热门搜索</span>
        <span v-for="(tag, index) in hotTags" :key="index" class="hot-tag" @mousedown.prevent="selectTag(tag)">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 有文字：只显示搜索建议（不占据文档流空间-->
    <div v-if="isFocused && searchQuery && suggestions.length > 0" class="search-suggestions">
      <div v-for="(item, index) in suggestions" :key="index" class="suggestion-item"
        @mousedown.prevent="selectSuggestion(item)">
        <span class="suggestion-icon"><component :is="item.icon" /></span>
        <span class="suggestion-text">{{ item.text }}</span>
        <span class="suggestion-count">{{ item.count }}首</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, type Component } from 'vue';
import type { Poem } from '@/types/aphorism/poem';
import { useAphorismDataStore } from '@/stores/aphorism';
import { useAphorismInteractionStore } from '@/stores/aphorism/interaction';
import SearchIcon from '../../icons/common/SearchIcon.vue';
import CloseIcon from '../../icons/common/CloseIcon.vue';
import ScrollIcon from '../../icons/common/ScrollIcon.vue';
import UserIcon from '../../icons/common/UserIcon.vue';
import './index.scss';

interface SuggestionItem {
  icon: Component;
  text: string;
  count: number;
  type: 'poem' | 'author';
  id?: string;
}

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'search', query: string): void;
}>();

const dataStore = useAphorismDataStore();
const interactionStore = useAphorismInteractionStore();
const searchQuery = ref(props.modelValue || '');
const isFocused = ref(false);
const isHistoryExpanded = ref(false);
const collapsedLimit = 6;

const hotTags = computed<string[]>(() => dataStore.hotTags);
const allPoems = computed(() => dataStore.poems);
const searchHistory = computed<string[]>(() => interactionStore.searchHistory);

// 预构建搜索索引：把每首诗的可搜索字段拼成一个小写字符串，避免每次按键重 toLowerCase
const searchIndex = computed(() => {
  return allPoems.value.map((p) => ({
    poem: p,
    text: `${p.title}\u0001${p.author}\u0001${p.dynasty}\u0001${p.form ?? ''}\u0001${p.content.join('\u0001')}\u0001${(p.tags ?? []).join('\u0001')}\u0001${p.annotation ?? ''}\u0001${p.translation ?? ''}\u0001${p.background ?? ''}\u0001${p.appreciation ?? ''}\u0001${p.poetIntroduction ?? ''}`.toLowerCase(),
  }));
});

let debounceTimer: number | null = null;
let blurTimer: number | null = null;

const emitSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value);
  }
};

const debouncedSearch = () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    emitSearch();
    debounceTimer = null;
  }, 500);
};

const cancelDebouncedSearch = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
};

const handleSearchFromUser = () => {
  if (searchQuery.value.trim()) {
    cancelDebouncedSearch();
    interactionStore.addSearchHistory(searchQuery.value);
    emit('search', searchQuery.value);
  }
};

watch(searchQuery, (newQuery) => {
  if (newQuery.trim()) {
    debouncedSearch();
  } else {
    cancelDebouncedSearch();
  }
});

// 用预构建索引搜索，单 includes 扫描，提前终止
const suggestions = computed<SuggestionItem[]>(() => {
  const q = searchQuery.value.trim().toLowerCase();
if (!q || searchIndex.value.length === 0) return [];

const matchedPoems: Poem[] = [];
const authorCountMap = new Map<string, number>();
const authorOrder: string[] = [];

for (const item of searchIndex.value) {
  if (item.text.includes(q)) {
    matchedPoems.push(item.poem);
    const a = item.poem.author;
    if (!authorCountMap.has(a)) {
      authorCountMap.set(a, 1);
      authorOrder.push(a);
    } else {
      authorCountMap.set(a, authorCountMap.get(a)! + 1);
    }
    // 收集足够结果后提前终止（3 首诗 + 足够统计 + 3 作者）
    if (matchedPoems.length >= 30) break;
  }
}

if (matchedPoems.length === 0) return [];

const items: SuggestionItem[] = [
  ...matchedPoems.slice(0, 3).map((p) => ({
    icon: ScrollIcon,
    text: p.title,
    count: 1,
    type: 'poem' as const,
    id: String(p.id),
  })),
  ...authorOrder.slice(0, 3).map((a) => ({
    icon: UserIcon,
    text: a,
    count: authorCountMap.get(a) || 0,
    type: 'author' as const,
  })),
 
];

  return items;
});


const handleFocus = () => {
  if (blurTimer) {
    clearTimeout(blurTimer);
    blurTimer = null;
  }
  isFocused.value = true;
};

const handleBlur = () => {
  blurTimer = window.setTimeout(() => {
    isFocused.value = false;
    isHistoryExpanded.value = false;
    blurTimer = null;
  }, 200);
};

watch(
  () => props.modelValue,
  (newVal) => {
    searchQuery.value = newVal;
  },
);

const handleSelect = (value: string) => {
  cancelDebouncedSearch();
  searchQuery.value = value;
  emit('update:modelValue', value);
  interactionStore.addSearchHistory(value);
  emit('search', value);
};

const selectTag = (tag: string) => {
  handleSelect(tag);
};

const selectSuggestion = (item: SuggestionItem) => {
  handleSelect(item.text);
};

const clearSearch = () => {
  cancelDebouncedSearch();
  searchQuery.value = '';
  emit('update:modelValue', '');
};

const toggleHistoryExpand = () => {
  isHistoryExpanded.value = !isHistoryExpanded.value;
};

const handleRemoveHistory = (keyword: string) => {
  interactionStore.removeSearchHistory(keyword);
};

const handleClearHistory = () => {
  interactionStore.clearSearchHistory();
  isHistoryExpanded.value = false;
};

onMounted(() => {
  if (dataStore.hotTags.length === 0) {
    dataStore.loadHotTags();
  }
});

onBeforeUnmount(() => {
  cancelDebouncedSearch();
  if (blurTimer) {
    clearTimeout(blurTimer);
    blurTimer = null;
  }
});
</script>
