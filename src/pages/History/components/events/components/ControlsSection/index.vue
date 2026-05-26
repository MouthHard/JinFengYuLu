<template>
  <div v-if="isBookOpen && filteredEvents.length > 0" class="controls-section">
    <button
      class="control-btn prev-btn"
      :disabled="currentEventIndex <= 0"
      @click="prevPage"
      @mouseenter="hoveredControl = 'prev'"
      @mouseleave="hoveredControl = null"
    >
      <span class="control-icon">◀</span>
      <span>上一页</span>
      <div class="control-glow"></div>
    </button>
    <div class="page-indicator">
      <span class="current-page">{{ currentEventIndex + 1 }}</span>
      <span class="page-separator">/</span>
      <span class="total-pages">{{ filteredEvents.length }}</span>
    </div>
    <button
      class="control-btn next-btn"
      :disabled="currentEventIndex >= filteredEvents.length - 1"
      @click="nextPage"
      @mouseenter="hoveredControl = 'next'"
      @mouseleave="hoveredControl = null"
    >
      <span>下一页</span>
      <span class="control-icon">▶</span>
      <div class="control-glow"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { historicalEvents } from '../../../../data/events';
  import './index.scss';

  const props = defineProps<{
    activeCategory: string;
    currentEventIndex: number;
    isBookOpen: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'prev-page'): void;
    (e: 'next-page'): void;
  }>();

  const hoveredControl = ref<string | null>(null);

  const filteredEvents = computed(() => {
    if (props.activeCategory === 'all') {
      return historicalEvents;
    }
    return historicalEvents.filter(
      (event) => event.category === props.activeCategory,
    );
  });

  const prevPage = () => {
    emit('prev-page');
  };

  const nextPage = () => {
    emit('next-page');
  };
</script>
