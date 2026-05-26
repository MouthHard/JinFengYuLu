<template>
  <div class="book-container">
    <!-- 分类标签 -->
    <CategorySection
      class="category-section"
      :active-category="activeCategory"
      @switch-category="switchCategory"
    />

    <!-- 左侧历史事件速览菜单 -->
    <Sidebar
      class="sidebar-section"
      :active-category="activeCategory"
      :current-event-index="currentEventIndex"
      :is-book-open="isBookOpen"
      @go-to-event="goToEvent"
    />

    <!-- 书本部分 -->
    <BookSection
      class="book-section"
      :active-category="activeCategory"
      :current-event-index="currentEventIndex"
      :is-book-open="isBookOpen"
      :is-flipping="isFlipping"
      :flip-direction="flipDirection"
      @toggle-book="toggleBook"
    />

    <!-- 控制按钮部分 -->
    <ControlsSection
      class="controls-section"
      :active-category="activeCategory"
      :current-event-index="currentEventIndex"
      :is-book-open="isBookOpen"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { historicalEvents } from '../../data/events';
  import CategorySection from './components/CategorySection/index.vue';
  import Sidebar from './components/Sidebar/index.vue';
  import BookSection from './components/BookSection/index.vue';
  import ControlsSection from './components/ControlsSection/index.vue';
  import './index.scss';

  const activeCategory = ref('all');
  const currentEventIndex = ref(0);
  const isBookOpen = ref(false);

  const filteredEvents = computed(() => {
    if (activeCategory.value === 'all') {
      return historicalEvents;
    }
    return historicalEvents.filter(
      (event) => event.category === activeCategory.value,
    );
  });

  const switchCategory = (categoryId: string) => {
    activeCategory.value = categoryId;
    currentEventIndex.value = 0;
    isBookOpen.value = false;
  };

  const toggleBook = () => {
    isBookOpen.value = !isBookOpen.value;
  };

  const isFlipping = ref(false);
  const flipDirection = ref('');

  // 翻页动画控制函数 - 使用requestAnimationFrame优化性能
  const handlePageChange = (newIndex: number, direction: string) => {
    if (isFlipping.value) return;

    isFlipping.value = true;
    flipDirection.value = direction;

    // 使用requestAnimationFrame确保动画流畅
    requestAnimationFrame(() => {
      // 等待翻转动画开始（300ms）
      setTimeout(() => {
        // 更新索引
        currentEventIndex.value = newIndex;
        // 等待翻转动画结束（600ms）
        setTimeout(() => {
          // 重置状态
          isFlipping.value = false;
          flipDirection.value = '';
        }, 600);
      }, 300);
    });
  };

  const prevPage = () => {
    if (currentEventIndex.value > 0 && !isFlipping.value) {
      handlePageChange(currentEventIndex.value - 1, 'left');
    }
  };

  const nextPage = () => {
    if (
      currentEventIndex.value < filteredEvents.value.length - 1 &&
      !isFlipping.value
    ) {
      handlePageChange(currentEventIndex.value + 1, 'right');
    }
  };

  const goToEvent = (index: number) => {
    if (index === currentEventIndex.value || isFlipping.value) return;

    const direction = index > currentEventIndex.value ? 'right' : 'left';
    handlePageChange(index, direction);
  };

  // 键盘导航支持 - 使用防抖优化
  const handleKeydown = (event: KeyboardEvent) => {
    // 如果正在翻页，忽略键盘事件
    if (isFlipping.value) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        prevPage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        nextPage();
        break;
      case 'Enter':
        toggleBook();
        break;
      case 'Escape':
        if (isBookOpen.value) {
          isBookOpen.value = false;
        }
        break;
    }
  };

  // 添加键盘事件监听器 - 使用passive选项优化性能
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown, { passive: false });
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>
