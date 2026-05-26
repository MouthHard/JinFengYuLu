<template>
  <section class="all-photographers-section">
    <div class="section-header">
      <div class="header-left">
        <h2 class="section-title">
          <span class="title-icon">📸</span>
          所有摄影师
        </h2>
        <p class="section-desc">发现全球优秀摄影师，探索精彩作品</p>
      </div>
      <div class="header-right">
        <div class="pagination-info">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>显示 {{ startIndex }}-{{ endIndex }} / {{ filteredPhotographers.length }} 位</span>
        </div>
      </div>
    </div>

    <div class="filter-container">
      <div class="filter-left">
        <div class="filter-tabs">
          <button v-for="tag in filterTags" :key="tag.id" :class="['filter-tab', { active: selectedTag === tag.id }]" @click="selectedTag = tag.id">
            <span class="tab-icon">{{ tag.icon }}</span>
            <span class="tab-label">{{ tag.name }}</span>
            <span v-if="tag.count" class="tab-count">{{ tag.count }}</span>
          </button>
        </div>
      </div>
      <div class="filter-right">
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input v-model="searchQuery" type="text" placeholder="搜索摄影师..." @input="handleSearch" />
          <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div ref="sortDropdownRef" class="sort-dropdown">
          <button class="sort-btn" @click="showSortMenu = !showSortMenu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="4" y1="21" x2="4" y2="14"/>
              <line x1="4" y1="10" x2="4" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12" y2="3"/>
              <line x1="20" y1="21" x2="20" y2="16"/>
              <line x1="20" y1="12" x2="20" y2="3"/>
              <line x1="1" y1="14" x2="7" y2="14"/>
              <line x1="9" y1="8" x2="15" y2="8"/>
              <line x1="17" y1="16" x2="23" y2="16"/>
            </svg>
            <span>{{ currentSortLabel }}</span>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div v-if="showSortMenu" class="sort-menu">
            <button v-for="sort in sortOptions" :key="sort.value" :class="['sort-option', { active: sortBy === sort.value }]" @click="selectSort(sort.value)">
              <span>{{ sort.label }}</span>
              <svg v-if="sortBy === sort.value" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div :class="['photographers-container', viewMode]">
      <article v-for="(photographer, index) in paginatedPhotographers" :key="photographer.id" class="photographer-card" :style="{ '--delay': `${index * 0.05}s` }">
        <!-- 卡片顶部：作品预览-->
        <div class="card-preview">
          <div class="preview-grid">
            <div v-for="(work, idx) in photographer.worksPreview?.slice(0, 4)" :key="work.id || idx" class="preview-item" @click="$emit('preview', { ...(typeof work === 'string' ? { image: work } : work), author: photographer.name, authorId: photographer.id, authorAvatar: photographer.avatar })">
              <img loading="lazy" :src="typeof work === 'string' ? work : work.image" :alt="typeof work === 'string' ? `作品 ${idx + 1}` : (work.title || `作品 ${idx + 1}`)" />
              <div class="preview-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="preview-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>{{ photographer.works }}</span>
          </div>
        </div>

        <!-- 卡片内容 -->
        <div class="card-content">
          <div class="photographer-header">
            <div class="avatar-wrapper">
              <img loading="lazy" :src="photographer.avatar" :alt="photographer.name" class="avatar" />
              <div class="avatar-ring"></div>
            </div>
            <div class="photographer-info">
              <div class="name-row">
                <h3 class="name">{{ photographer.name }}</h3>
                <div class="badges">
                  <span v-if="photographer.verified" class="badge verified">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </span>
                  <span v-if="photographer.isPro" class="badge pro">PRO</span>
                  <span v-if="photographer.isOnline" class="badge online">在线</span>
                  <span v-else-if="photographer.lastActive" class="badge last-active">{{ photographer.lastActive }}</span>
                </div>
              </div>
              <p class="title">{{ photographer.title }}</p>
              <div v-if="photographer.location" class="location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{{ photographer.location }}</span>
              </div>
            </div>
          </div>

          <p v-if="photographer.bio" class="bio" :title="photographer.bio">{{ photographer.bio }}</p>

          <div class="tags-row">
            <span v-for="tag in photographer.tags?.slice(0, 3)" :key="tag" class="tag" @click="selectedTag = tag">{{ tag }}</span>
            <span v-if="photographer.tags?.length > 3" class="tag more">+{{ photographer.tags.length - 3 }}</span>
          </div>

          <div v-if="photographer.workTypes?.length" class="work-types-row">
            <span
              v-for="typeId in photographer.workTypes"
              :key="typeId"
              class="work-type-chip"
              :style="{ '--type-color': getWorkTypeColor(typeId) }"
            >
              <span class="type-icon">{{ getWorkTypeIcon(typeId) }}</span>
              <span class="type-name">{{ getWorkTypeName(typeId) }}</span>
            </span>
          </div>

          <div class="stats-grid">
            <div class="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <div class="stat-content">
                <span class="stat-value">{{ photographer.works }}</span>
                <span class="stat-label">作品</span>
              </div>
            </div>
            <div class="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <div class="stat-content">
                <span class="stat-value">{{ photographer.likes }}</span>
                <span class="stat-label">点赞</span>
              </div>
            </div>
            <div class="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <div class="stat-content">
                <span class="stat-value">{{ photographer.views || '0' }}</span>
                <span class="stat-label">浏览</span>
              </div>
            </div>
            <div class="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <div class="stat-content">
                <span class="stat-value">{{ photographer.followers || '0' }}</span>
                <span class="stat-label">粉丝</span>
              </div>
            </div>
          </div>

          <div class="card-actions">
            <button class="action-btn follow" :class="{ following: getFollowingState(photographer) }" @click="handleFollow(photographer)">
              <svg v-if="!getFollowingState(photographer)" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ getFollowingState(photographer) ? '已关注' : '关注' }}</span>
            </button>
            <button 
              class="action-btn secondary" 
              :class="{ active: interactionStore.isLiked(getPhotographerId(photographer)) }"
              @click="toggleLike(photographer)"
            >
              <ThumbUpIcon />
              <span class="count">{{ formatNumber(interactionStore.getCount(getPhotographerId(photographer)).likes) }}</span>
            </button>
            <button class="action-btn secondary" @click="handleShare(photographer)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>

    <div v-if="totalPages > 1" class="pagination-container">
      <button class="pagination-btn prev" :disabled="currentPage === 1" @click="prevPage">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"/></svg>
        <span>上一页</span>
      </button>
      <div class="pagination-numbers">
        <button v-for="page in visiblePages" :key="page" :class="['page-number', { active: currentPage === page, ellipsis: page === '...' }]" @click="page !== '...' && goToPage(page as number)">
          {{ page }}
        </button>
      </div>
      <button class="pagination-btn next" :disabled="currentPage === totalPages" @click="nextPage">
        <span>下一页</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <div v-if="filteredPhotographers.length === 0" class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
      <h3>未找到摄影师</h3>
      <p>尝试调整筛选条件或搜索关键词</p>
      <button class="reset-btn" @click="resetFilters">重置筛选</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { showMessage } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { useFormatNumber } from '@/composables/landscape/useFormatNumber';
import { workTypes, workTypeIcons, workTypeLabels, filterTags as filterTagsData, sortOptions as sortOptionsData } from '@/utils/landscape/constants';
import { usePhotographersViewData } from '@/composables/landscape';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import type { Photographer } from '@/typesOfPages/landscape';

const emit = defineEmits<{
  'toggle-follow': [photographer: Photographer]
  'preview': [data: { image?: string; author?: string; authorId?: string; authorAvatar?: string; id?: string; cover?: string; title?: string; type?: string; likes?: number; loves?: number; favorites?: number; views?: number; shares?: number }]
}>();

const interactionStore = useInteractionStore();
const { formatCount: formatNumber } = useFormatNumber();

const getFollowingState = (photographer: Photographer): boolean => {
  return interactionStore.isFollowing(String(photographer.id));
};

const getPhotographerId = (photographer: Photographer): string => {
  return String(photographer.id);
};

const selectedTag = ref('all');
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(12);
const viewMode = ref<'grid' | 'list'>('grid');
const sortBy = ref('default');
const showSortMenu = ref(false);

const sortDropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (e: MouseEvent) => {
  if (sortDropdownRef.value && !sortDropdownRef.value.contains(e.target as Node)) {
    showSortMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside, true);
  
  photographers.value.forEach(photographer => {
    const id = getPhotographerId(photographer);
    interactionStore.registerCount(id, {
      likes: parseInt(photographer.likes?.replace(/[KM]/g, '') || '0') * (photographer.likes?.includes('K') ? 1000 : photographer.likes?.includes('M') ? 1000000 : 1),
      views: parseInt(photographer.views?.replace(/[KM]/g, '') || '0') * (photographer.views?.includes('K') ? 1000 : photographer.views?.includes('M') ? 1000000 : 1),
      loves: Math.floor(Math.random() * 500 + 100),
      favorites: Math.floor(Math.random() * 300 + 50),
      shares: Math.floor(Math.random() * 100 + 10)
    });

    if (photographer.worksPreview && Array.isArray(photographer.worksPreview)) {
      interactionStore.registerBatch(
        photographer.worksPreview.map(work => ({
          id: work.id || `work-${Date.now()}-${Math.random()}`,
          counts: {
            likes: work.likes || 0,
            loves: work.loves || 0,
            favorites: work.favorites || 0,
            views: work.views || 0,
            shares: work.shares || 0,
          }
        }))
      );
    }
  });
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside, true);
});

const filterTags = ref(filterTagsData);

const workTypesList = ref(workTypes.map(key => ({
  key,
  icon: workTypeIcons[key] || '📷',
  name: workTypeLabels[key] || key,
  color: '#F59E0B'
})));

const sortOptions = sortOptionsData;

const { allPhotographers } = usePhotographersViewData();
const photographers = ref(allPhotographers());

const parseCount = (value: string): number => {
  const num = parseFloat(value.replace(/[KMk]/gi, ''));
  if (value.toUpperCase().includes('K')) return num * 1000;
  if (value.toUpperCase().includes('M')) return num * 1000000;
  return num;
};

const filteredPhotographers = computed(() => {
  let result = [...photographers.value];
  
  if (selectedTag.value !== 'all') {
    result = result.filter(p => p.tags && p.tags.includes(selectedTag.value));
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.title.toLowerCase().includes(query) ||
      p.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  if (sortBy.value === 'works') {
    result.sort((a, b) => parseCount(b.works) - parseCount(a.works));
  } else if (sortBy.value === 'likes') {
    result.sort((a, b) => parseCount(b.likes) - parseCount(a.likes));
  } else if (sortBy.value === 'followers') {
    result.sort((a, b) => parseCount(b.followers) - parseCount(a.followers));
  }
  
  return result;
});

const totalPages = computed(() => Math.ceil(filteredPhotographers.value.length / itemsPerPage.value));
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const endIndex = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredPhotographers.value.length));

const paginatedPhotographers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPhotographers.value.slice(start, end);
});

const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  const total = totalPages.value;
  const current = currentPage.value;
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (current > 3) {
      pages.push('...');
    }
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) {
      pages.push('...');
    }
    pages.push(total);
  }
  return pages;
});

const currentSortLabel = computed(() => {
  const option = sortOptions.find(opt => opt.value === sortBy.value);
  return option?.label || '默认排序';
});

const handleSearch = () => {
  currentPage.value = 1;
};

const selectSort = (value: string) => {
  sortBy.value = value;
  showSortMenu.value = false;
};

const handleFollow = (photographer: Photographer) => {
  emit('toggle-follow', photographer);
};

const toggleLike = (photographer: Photographer) => {
  const id = getPhotographerId(photographer);
  const isAdded = interactionStore.toggleLike(id);
  if (isAdded) {
    showMessage.like.success(photographer.name);
  } else {
    showMessage.like.cancel();
  }
};

const getWorkTypeIcon = (typeId: string) => {
  const type = workTypesList.value.find(t => t.key === typeId);
  return type?.icon || '📷';
};

const getWorkTypeName = (typeId: string) => {
  const type = workTypesList.value.find(t => t.key === typeId);
  return type?.name || typeId;
};

const getWorkTypeColor = (typeId: string) => {
  const type = workTypesList.value.find(t => t.key === typeId);
  return type?.color || '#F59E0B';
};

const handleShare = (photographer: Photographer) => {
  // 实现分享功能
  console.log('分享摄影师', photographer.name);
};

const resetFilters = () => {
  selectedTag.value = 'all';
  searchQuery.value = '';
  sortBy.value = 'default';
  currentPage.value = 1;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const goToPage = (page: number) => {
  currentPage.value = page;
};

watch([selectedTag, searchQuery, sortBy], () => {
  currentPage.value = 1;
});
</script>

<style scoped lang="scss" src="./index.scss" />
