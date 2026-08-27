<template>
  <div v-if="isBookOpen && filteredEvents.length > 0" class="category-sidebar">
    <div class="sidebar-header">
      <div class="sidebar-icon">{{ currentCategory?.icon }}</div>
      <h3 class="sidebar-title">{{ currentCategory?.name }}</h3>
      <div class="sidebar-count">{{ filteredEvents.length }}</div>
    </div>
    <div ref="sidebarContentRef" class="sidebar-content">
      <div
        v-for="(event, index) in filteredEvents"
        :key="event.id"
        class="sidebar-item"
        :class="{ active: currentEventIndex === index }"
        @click="goToEvent(index)"
      >
        <div class="item-number">{{ index + 1 }}</div>
        <div class="item-info">
          <div class="item-name">{{ event.title }}</div>
          <div class="item-period">{{ event.period }}</div>
        </div>

        <DynasticActiveIcon
          v-if="currentEventIndex === index"
          class="item-active"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, watch, ref, onMounted } from 'vue';
  import { useHistoryDataStore } from '@/stores/history';
  import './index.scss';
  import { DynasticActiveIcon } from '@/pages/History/icons/index.ts';

  const props = defineProps<{
    activeCategory: string;
    currentEventIndex: number;
    isBookOpen: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'go-to-event', index: number): void;
  }>();

  const historyStore = useHistoryDataStore();
  const sidebarContentRef = ref<HTMLElement | null>(null);

  const categories = [
    { id: 'all', name: '全部', icon: '📚' },
    { id: 'political', name: '政治军事', icon: '⚔️' },
    { id: 'cultural', name: '文化科技', icon: '🔬' },
    { id: 'economic', name: '经济社会', icon: '💰' },
    { id: 'diplomatic', name: '外交民族', icon: '🤝' },
  ];

  const currentCategory = computed(() => {
    return (
      categories.find((cat) => cat.id === props.activeCategory) || categories[0]
    );
  });

  const filteredEvents = computed(() => {
    if (props.activeCategory === 'all') {
      return historyStore.events;
    }
    return historyStore.events.filter(
      (event) => event.category === props.activeCategory,
    );
  });

  const goToEvent = (index: number) => {
    emit('go-to-event', index);
  };

  // 自动滚动到当前活动事件
  const scrollToActiveEvent = () => {
    if (!sidebarContentRef.value) return;

    const activeElement = sidebarContentRef.value.querySelector('.sidebar-item.active');
    if (!activeElement) return;

    // 计算元素是否在视窗范围内
    const sidebarRect = sidebarContentRef.value.getBoundingClientRect();
    const elementRect = activeElement.getBoundingClientRect();

    // 检查元素是否在视窗内
    const isElementInView = (
      elementRect.top >= sidebarRect.top &&
      elementRect.bottom <= sidebarRect.bottom
    );

    if (!isElementInView) {
      // 滚动到元素位置，使元素居中
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // 监听 currentEventIndex 变化
  watch(
    () => props.currentEventIndex,
    () => {
      // 使用 setTimeout 确保 DOM 更新后再滚动
      setTimeout(scrollToActiveEvent, 0);
    }
  );

  // 监听 activeCategory 变化（类别切换时）
  watch(
    () => props.activeCategory,
    () => {
      setTimeout(scrollToActiveEvent, 0);
    }
  );

  // 组件挂载后执行一次滚动
  onMounted(() => {
    setTimeout(scrollToActiveEvent, 0);
  });
</script>
