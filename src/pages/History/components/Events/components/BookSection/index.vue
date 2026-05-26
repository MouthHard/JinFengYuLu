<template>
  <div class="book-section">
    <div
      class="book"
      :class="{
        'book-open': isBookOpen,
        'book-closed': !isBookOpen,
      }"
    >
      <!-- 封面 -->
      <div
        class="book-cover"
        @click="toggleBook"
        @mouseenter="isCoverHovered = true"
        @mouseleave="isCoverHovered = false"
      >
        <!-- 书签 - 放在封面内部，跟随封面一起翻转 -->
        <div class="book-bookmark">
          <div class="bookmark-ribbon"></div>
        </div>

        <!-- 封面光照效果 -->
        <div class="cover-lighting"></div>

        <div class="cover-content">
          <div class="cover-icon">{{ currentCategory?.icon }}</div>
          <h2 class="cover-title">{{ currentCategory?.name }}</h2>
          <p class="cover-subtitle">历史事件录</p>
          <div class="cover-decoration">
            <div class="ornament top"></div>
            <div class="ornament bottom"></div>
          </div>
          <div class="cover-hint">
            {{ isBookOpen ? "点击合上" : "点击翻开" }}
          </div>
        </div>
      </div>

      <!-- 书籍背景层 -->
      <div v-if="isBookOpen" class="book-background">
        <!-- 书页层叠 -->
        <div class="page-stack">
          <div class="stack-page page-1"></div>
          <div class="stack-page page-2"></div>
          <div class="stack-page page-3"></div>
          <div class="stack-page page-4"></div>
          <div class="stack-page page-5"></div>
        </div>

        <!-- 书脊 -->
        <div class="book-spine">
          <div class="spine-effect"></div>
        </div>
      </div>

      <!-- 内页 -->
      <div v-if="isBookOpen" class="book-pages">
        <!-- 空状态 - 左右分页布局 -->
        <template v-if="filteredEvents.length === 0">
          <!-- 左页 - 空状态提示 -->
          <div class="page left-page empty-left-page">
            <div class="page-content">
              <div class="page-header">
                <span class="page-period">提示</span>
                <span class="page-number">1</span>
              </div>
              <div class="empty-page-content">
                <div class="empty-icon">📖</div>
                <h3 class="empty-title">暂无历史事件</h3>
                <p class="empty-desc">该分类下暂时没有记录</p>
                <div class="empty-decoration">
                  <span class="empty-line"></span>
                  <span class="empty-dot">◆</span>
                  <span class="empty-line"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- 右页 - 推荐内容 -->
          <div class="page right-page empty-right-page">
            <div class="page-content">
              <div class="page-header">
                <span class="page-section-title">探索更多</span>
                <span class="page-number">2</span>
              </div>
              <div class="empty-suggestions">
                <h4 class="suggestion-title">
                  <span class="title-icon">💡</span>
                  试试其他分类
                </h4>
                <div class="category-hints">
                  <div
                    class="hint-item"
                    @click="$emit('change-category', 'all')"
                  >
                    <span class="hint-icon">📚</span>
                    <span class="hint-text">全部事件</span>
                    <span class="hint-arrow">→</span>
                  </div>
                  <div
                    class="hint-item"
                    @click="$emit('change-category', 'political')"
                  >
                    <span class="hint-icon">⚔️</span>
                    <span class="hint-text">政治军事</span>
                    <span class="hint-arrow">→</span>
                  </div>
                  <div
                    class="hint-item"
                    @click="$emit('change-category', 'cultural')"
                  >
                    <span class="hint-icon">🔬</span>
                    <span class="hint-text">文化科技</span>
                    <span class="hint-arrow">→</span>
                  </div>
                  <div
                    class="hint-item"
                    @click="$emit('change-category', 'economic')"
                  >
                    <span class="hint-icon">💰</span>
                    <span class="hint-text">经济社会</span>
                    <span class="hint-arrow">→</span>
                  </div>
                </div>
                <div class="empty-quote">
                  <p class="quote-text">"历史是最好的教科书"</p>
                  <p class="quote-author">—— 继续探索，发现更多精彩</p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 左页 -->
        <div
          v-if="filteredEvents.length > 0"
          class="page left-page"
          :class="{
            'page-flipping': props.isFlipping,
            'flip-left': props.isFlipping && props.flipDirection === 'left',
            'flip-right': props.isFlipping && props.flipDirection === 'right',
            'page-enter': !props.isFlipping,
          }"
        >
          <div v-if="currentEvent" class="page-content">
            <div class="page-header">
              <span class="page-period">{{ currentEvent.period }}</span>
              <span class="page-number">{{ currentPageNumber }}</span>
            </div>
            <div class="page-image">
              <img loading="lazy" :src="currentEvent.imageUrl" :alt="currentEvent.title" />
            </div>
            <div class="page-body">
              <h3 class="page-title">{{ currentEvent.title }}</h3>
              <p class="page-brief">{{ currentEvent.brief }}</p>
              <div class="page-tags">
                <span class="tag">
                  {{ getCategoryName(currentEvent.category) }}
                </span>
                <span v-for="tag in currentEvent.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
          <div class="page-back"></div>
        </div>

        <!-- 右页 -->
        <div
          v-if="filteredEvents.length > 0"
          class="page right-page"
          :class="{
            'page-flipping': props.isFlipping,
            'flip-left': props.isFlipping && props.flipDirection === 'left',
            'flip-right': props.isFlipping && props.flipDirection === 'right',
            'page-enter': !props.isFlipping,
          }"
        >
          <div v-if="currentEvent" class="page-content">
            <div class="page-header">
              <span class="page-section-title">事件详情</span>
              <span class="page-number">{{ currentPageNumber + 1 }}</span>
            </div>
            <div class="page-detail">
              <div class="detail-block">
                <h4 class="block-title">
                  <span class="title-icon">📜</span>
                  详细描述
                </h4>
                <p class="block-content">{{ currentEvent.description }}</p>
              </div>

              <div v-if="currentEvent.impact" class="detail-block impact-block">
                <h4 class="block-title">
                  <span class="title-icon">⚡</span>
                  历史影响
                </h4>
                <p class="block-content">{{ currentEvent.impact }}</p>
              </div>

              <div class="detail-block meta-block">
                <div class="meta-item">
                  <span class="meta-label">时期</span>
                  <span class="meta-value">{{ currentEvent.period }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">分类</span>
                  <span class="meta-value">{{
                    getCategoryName(currentEvent.category)
                  }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">标签</span>
                  <span class="meta-value">{{
                    currentEvent.tags.join("、")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="page-back"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { historicalEvents } from "../../../../data/events";
import "./index.scss";

const props = defineProps<{
  activeCategory: string;
  currentEventIndex: number;
  isBookOpen: boolean;
  isFlipping: boolean;
  flipDirection: string;
}>();

const emit = defineEmits<{
  (e: "toggle-book"): void;
  (e: "change-category", category: string): void;
}>();

const isCoverHovered = ref(false);

const categories = [
  { id: "all", name: "全部", icon: "📚" },
  { id: "political", name: "政治军事", icon: "⚔️" },
  { id: "cultural", name: "文化科技", icon: "🔬" },
  { id: "economic", name: "经济社会", icon: "💰" },
  { id: "diplomatic", name: "外交民族", icon: "🤝" },
];

const currentCategory = computed(() => {
  return (
    categories.find((cat) => cat.id === props.activeCategory) || categories[0]
  );
});

const filteredEvents = computed(() => {
  if (props.activeCategory === "all") {
    return historicalEvents;
  }
  return historicalEvents.filter(
    (event) => event.category === props.activeCategory,
  );
});

const currentEvent = computed(() => {
  if (filteredEvents.value.length === 0) return null;
  return filteredEvents.value[props.currentEventIndex];
});

const currentPageNumber = computed(() => {
  return props.currentEventIndex * 2 + 1;
});

const getCategoryName = (categoryId: string) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : categoryId;
};

const toggleBook = () => {
  emit("toggle-book");
};
</script>
