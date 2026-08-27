<template>
  <div class="search-page">
    <div class="search-header">
      <div ref="searchHeaderRef" class="search-input-wrapper" :class="{ focused: isSearchFocused }">
        <SearchIcon class="search-icon" :stroke-width="2" />
        <input
          v-model="searchKeyword"
          type="text"
          class="search-input"
          placeholder="搜索风景、摄影师、攻略..."
          @input="handleInput"
          @focus="isSearchFocused = true; showSearchDropdown = true"
          @blur="handleSearchBlur"
          @keyup.enter="handleSearch"
        />
        <button class="search-btn" @click="handleSearch">
          搜索
        </button>

        <transition name="search-dropdown">
          <div v-if="showSearchDropdown" class="search-dropdown">
            <div v-if="searchHistory.length > 0" class="history-section">
              <div class="section-header">
                <h4 class="section-title">搜索历史</h4>
                <button class="clear-btn" @click.stop="clearHistory">清空</button>
              </div>
              <div class="history-tags" :class="{ expanded: showAllHistory }">
                <button
                  v-for="item in displayHistory"
                  :key="item"
                  class="history-tag"
                  @click.stop="handleHistoryClick(item)"
                >
                  {{ item }}
                </button>
                <button
                  v-if="searchHistory.length > 6 && !showAllHistory"
                  class="more-btn"
                  @click.stop="showAllHistory = true"
                >
                  更多 ▼
                </button>
                <button
                  v-if="showAllHistory"
                  class="more-btn"
                  @click.stop="showAllHistory = false"
                >
                  收起 ▲
                </button>
              </div>
            </div>

            <div class="hot-section">
              <h4 class="section-title">热门探索</h4>
              <div class="hot-tags">
                <button
                  v-for="tag in hotSearchTags"
                  :key="tag.text"
                  class="hot-tag"
                  @click.stop="handleTagClick(tag)"
                >
                  <span class="tag-icon">{{ tag.icon }}</span>
                  <span>{{ tag.text }}</span>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="filter-bar">
      <div class="filter-group">
        <label>类型：</label>
        <div class="filter-options">
          <button
            v-for="type in typeFilters"
            :key="type.value"
            class="filter-option"
            :class="{ active: selectedType === type.value }"
            @click="selectedType = type.value"
          >
            <span class="option-icon">{{ type.icon }}</span>
            <span class="option-label">{{ type.label }}</span>
            <span v-if="type.value !== 'all'" class="option-count">{{ getTypeCount(type.value) }}</span>
          </button>
        </div>
      </div>

      <div class="filter-group">
        <label>排序：</label>
        <div class="filter-options">
          <button
            v-for="sort in currentSortOptions"
            :key="sort.value"
            class="filter-option"
            :class="{ active: selectedSort === sort.value }"
            @click="selectedSort = sort.value"
          >
            {{ sort.label }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="searchKeyword" class="result-stats">
      <p>
        找到 <span class="count">{{ filteredResults.length }}</span> 个与 "<span class="keyword">{{ searchKeyword }}</span>" 相关的结果
      </p>
    </div>

    <div v-if="filteredResults.length > 0" class="result-grid" :class="`cols-${gridColumns}`">
      <SearchResultCard
        v-for="item in filteredResults"
        :key="item.id"
        :item="item"
        :sort-mode="selectedSort"
        @like="handleLike"
        @bookmark="handleBookmark"
        @share="handleShare"
        @follow="handleFollow"
      />
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">🔍</div>
      <h3>未找到相关结果</h3>
      <p>试试其他关键词或筛选条件</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Search' });
import { ref, computed, onMounted, onUnmounted, onActivated, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchIcon from '../../icon/components/home/HeroSection/SearchIcon.vue'
import SearchResultCard from './components/SearchResultCard/index.vue'
import { useSearchViewData } from '@/composables/landscape'
import { useInteractionStore } from '@/stores/landscape'
import { useSearchHistory } from '@/composables/landscape/useSearchHistory'
import { useHotTags } from '@/composables/landscape/useHotTags'
import { typeFilters, SearchPhotographerSortOptions, SearchContentSortOptions } from '@/utils/landscape/constants'
import {
  convertImageToSearchResult,
  convertVideoToSearchResult,
  convertGuideToSearchResult,
  convertPhotographerToSearchResult,
  sanitizeKeyword,
  sortSearchResults,
  filterSearchResults,
  showMessage,
  createSimpleInteractionItem,
} from '@/utils/landscape'
import { debounce } from '@/utils/landscape/debounce'
import type { SearchResultItem } from '@/utils/landscape'

const photographerSortOptions = SearchPhotographerSortOptions

const contentSortOptions = SearchContentSortOptions

const currentSortOptions = computed(() => {
  return selectedType.value === 'photographer' ? photographerSortOptions : contentSortOptions
})

const route = useRoute()
const router = useRouter()
const interactionStore = useInteractionStore()
const { history: searchHistory, addHistory, clearHistory } = useSearchHistory()
const { hotSearchTags } = useHotTags()

const searchKeyword = ref('')
const debouncedKeyword = ref('')
const selectedType = ref('image')
const selectedSort = ref('relevance')
const gridColumns = ref(3)

watch(searchKeyword, debounce((val: string) => {
  debouncedKeyword.value = val
}, 200))
const showSearchDropdown = ref(false)
const isSearchFocused = ref(false)
const showAllHistory = ref(false)

const displayHistory = computed(() => {
  if (showAllHistory.value) return searchHistory.value
  return searchHistory.value.slice(0, 6)
})

const handleSearchBlur = () => {
  isSearchFocused.value = false
  setTimeout(() => {
    showSearchDropdown.value = false
    showAllHistory.value = false
  }, 200)
}

const handleTagClick = (tag: { text: string }) => {
  searchKeyword.value = tag.text
  handleSearch()
}

const handleHistoryClick = (item: string) => {
  searchKeyword.value = item
  handleSearch()
}

const hasGuideCards = computed(() => {
  return filteredResults.value.some(item => item.type === 'guide')
})

const { searchImages, searchVideos, searchGuides, searchPhotographers } = useSearchViewData()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target) return;
  const sanitized = sanitizeKeyword(target.value);
  
  if (sanitized !== target.value) {
    searchKeyword.value = sanitized;
  }
};

const mockSearchResults = computed<SearchResultItem[]>(() => {
  const keyword = debouncedKeyword.value || ''
  const images = searchImages(keyword).map(convertImageToSearchResult)
  const videos = searchVideos(keyword).map(convertVideoToSearchResult)
  const guides = searchGuides(keyword).map(convertGuideToSearchResult)
  const photographers = searchPhotographers(keyword).map(convertPhotographerToSearchResult)
  
  return [...images, ...videos, ...guides, ...photographers]
})

const typeCounts = computed(() => {
  const counts: Record<string, number> = { all: mockSearchResults.value.length }
  for (const item of mockSearchResults.value) {
    counts[item.type] = (counts[item.type] || 0) + 1
  }
  return counts
})

const getTypeCount = (type: string) => typeCounts.value[type] || 0

const filteredResults = computed(() => {
  let results = filterSearchResults(mockSearchResults.value, searchKeyword.value, selectedType.value)
  return sortSearchResults(results, selectedSort.value)
})

const handleSearch = () => {
  const keyword = sanitizeKeyword(searchKeyword.value);
  if (keyword !== searchKeyword.value) {
    searchKeyword.value = keyword;
  }
  
  if (keyword && keyword.length >= 2) {
    addHistory(keyword);
    showSearchDropdown.value = false;
  }

  const query: Record<string, string> = {}
  if (keyword && keyword.length >= 2) query.q = keyword
  if (selectedType.value !== 'all') query.type = selectedType.value
  if (selectedSort.value !== 'relevance') query.sort = selectedSort.value

  router.push({ path: '/landscape/search', query })
}

const getItemById = (id: string): SearchResultItem | undefined => {
  return mockSearchResults.value.find(item => String(item.id) === id)
}

const handleLike = (id: string) => {
  const item = getItemById(id)
  if (!item) return
  
  const isLiked = interactionStore.toggleLike(id)
  if (isLiked) {
    showMessage.like.success(item.title)
  } else {
    showMessage.like.cancel()
  }
}

const handleBookmark = (id: string) => {
  const item = getItemById(id)
  if (!item) return
  
  const interactionItem = createSimpleInteractionItem(id, item.type, item.title, {
    image: item.thumbnail,
    location: (item as any).location,
    author: (item as any).author || (item as any).name,
    authorId: (item as any).authorId,
    authorAvatar: (item as any).authorAvatar || (item as any).avatar,
  })
  
  const isFavorited = interactionStore.toggleFavorite(interactionItem)
  if (isFavorited) {
    showMessage.favorite.success(item.title, item.type)
  } else {
    showMessage.favorite.cancel(item.title, item.type)
  }
}

const handleShare = (id: string) => {
  const item = getItemById(id)
  if (!item) return
  
  interactionStore.incrementShares(id)
  showMessage.share.success(item.title)
}

const handleFollow = (id: string) => {
  const item = getItemById(id)
  if (!item || item.type !== 'photographer') return

  const wasFollowing = interactionStore.isFollowing(id)
  const isAdded = interactionStore.toggleFollowPhotographer(id)
  if (!wasFollowing && isAdded) {
    showMessage.follow.success((item as any).name || item.title)
  } else if (wasFollowing && !isAdded) {
    showMessage.follow.cancel((item as any).name || item.title)
  }
}

const updateGridColumns = () => {
  const width = window.innerWidth
  const isGuide = hasGuideCards.value
  
  if (isGuide) {
    if (width >= 900) gridColumns.value = 2
    else gridColumns.value = 1
  } else {
    if (width >= 1200) gridColumns.value = 3
    else if (width >= 800) gridColumns.value = 2
    else gridColumns.value = 1
  }
}


const loadFromQuery = () => {
  const { q, type, sort } = route.query
  if (q) {
    const rawKeyword = Array.isArray(q) ? q[0] || '' : q || '';
    searchKeyword.value = sanitizeKeyword(rawKeyword);
  }
  if (type) selectedType.value = Array.isArray(type) ? type[0] || 'image' : type || 'image'
  if (sort) selectedSort.value = Array.isArray(sort) ? sort[0] || 'relevance' : sort || 'relevance'
}

onMounted(() => {
  loadFromQuery()
  updateGridColumns()
  window.addEventListener('resize', updateGridColumns)
})

onActivated(() => {
  loadFromQuery()
})

const debouncedRegister = (() => {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (results: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      interactionStore.registerBatch(
        results.map((item: any) => ({
          id: String(item.id),
          counts: {
            likes: item.likes || 0,
            loves: item.loves || 0,
            views: item.views || 0,
            favorites: item.bookmarks || 0,
            shares: item.shares || 0,
          },
        }))
      )
      timer = null
    }, 200)
  }
})()

watch(mockSearchResults, (results) => {
  if (results.length > 0) {
    debouncedRegister(results)
  }
}, { immediate: true })

onUnmounted(() => {
  window.removeEventListener('resize', updateGridColumns)
})

watch([selectedType, selectedSort], () => {
  if (selectedType.value !== route.query.type as string) {
    handleSearch()
  }
})

watch(hasGuideCards, () => {
  updateGridColumns()
})
</script>

<style scoped lang="scss" src="./index.scss" />
