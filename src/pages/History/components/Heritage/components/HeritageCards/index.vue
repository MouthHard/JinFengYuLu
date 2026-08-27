<template>
  <div class="heritage-cards">
    <CloudBack />
    <div class="carousel-container">
      <!-- 左侧上下控制�?-->
      <div class="carousel-controls">
        <button class="control-btn prev" @click="prevCard">�?/button>
        <div class="control-dots">
          <span
            v-for="i in Math.min(filteredHeritages.length, 10)"
            :key="i"
            class="dot"
            :class="{ active: realIndex === i - 1 }"
            @click="goToRealIndex(i - 1)"
          ></span>
        </div>
        <button class="control-btn next" @click="nextCard">�?/button>
      </div>
      <div ref="containerRef" class="cards-wrapper">
        <div
          v-for="slot in visibleSlots"
          :key="slot.virtualIndex"
          class="heritage-card"
          :class="{ active: slot.offset === 0 }"
          :style="{
            transform: `translate(-50%, calc(-50% + ${slot.offset * cardOffset}px)) scale(${getCardScale(slot.offset)})`,
            zIndex: 10 - Math.abs(slot.offset),
            width: cardW + 'px',
            height: cardH + 'px',
          }"
          @click="goToVirtualIndex(slot.virtualIndex)"
        >
          <img loading="lazy"             :src="slot.item.imageUrl"
            :alt="slot.item.name"
            class="heritage-image"
          />
          <div class="card-info">
            <div class="card-name">{{ slot.item.name }}</div>
            <div class="card-era">{{ slot.item.era }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
  import { useHistoryDataStore } from '@/stores/history';
  import type { CulturalHeritageItem } from '@/types/history';
import { CloudBack } from '@/pages/History/icons/index.ts';

  const historyStore = useHistoryDataStore();

  // 动态计算卡片尺寸和偏移�?  const containerHeight = ref(window.innerHeight - 120);
  const containerRef = ref<HTMLElement | null>(null);
  const containerWidth = ref(500);
  const cardH = computed(() =>
    Math.min(Math.floor(containerHeight.value / 2), 420),
  );
  const cardW = computed(() => Math.min(containerWidth.value - 20, 700));
  const cardOffset = computed(() => Math.floor(cardH.value / 2));

  const handleResize = () => {
    containerHeight.value = window.innerHeight - 120;
    if (containerRef.value) {
      containerWidth.value = containerRef.value.offsetWidth;
    }
  };

  // Props
  const props = defineProps<{
    activeTab: string;
  }>();

  // 响应式数�?  const virtualIndex = ref<number>(0);

  // 真实索引（映射到数组范围�?  const realIndex = computed(() => {
    const len = filteredHeritages.value.length;
    if (len === 0) return 0;
    return ((virtualIndex.value % len) + len) % len;
  });

  // 计算属�?  const filteredHeritages = computed(() => {
    if (props.activeTab === 'all') {
      return historyStore.heritage;
    }
    return historyStore.heritage.filter((item) => item.category === props.activeTab);
  });

  // 视觉上显�?张：当前 ±1
  const MAX_VISIBLE = 1;

  // 生成可见槽位
  const visibleSlots = computed(() => {
    const len = filteredHeritages.value.length;
    if (len === 0) return [];
    const slots = [];
    for (let offset = -MAX_VISIBLE; offset <= MAX_VISIBLE; offset++) {
      const vi = virtualIndex.value + offset;
      const ri = ((vi % len) + len) % len;
      slots.push({
        virtualIndex: vi,
        offset,
        item: filteredHeritages.value[ri],
      });
    }
    return slots;
  });

  // 方法
  const goToVirtualIndex = (vi: number) => {
    virtualIndex.value = vi;
    const len = filteredHeritages.value.length;
    const ri = ((vi % len) + len) % len;
    emit('select-heritage', filteredHeritages.value[ri]);
  };

  const prevCard = () => {
    goToVirtualIndex(virtualIndex.value - 1);
  };

  const nextCard = () => {
    goToVirtualIndex(virtualIndex.value + 1);
  };

  // 通过真实索引跳转（dots 点击�?  const goToRealIndex = (ri: number) => {
    const len = filteredHeritages.value.length;
    const base = virtualIndex.value;
    const current = ((base % len) + len) % len;
    let diff = ri - current;
    // 取最短路�?    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    goToVirtualIndex(base + diff);
  };

  // offset 为相对当前的偏移量（范围 -1~+1�?  const getCardScale = (offset: number) => {
    const d = Math.abs(offset);
    if (d === 0) return 1;
    if (d === 1) return 0.88;
    return 0.76;
  };

  // 键盘导航
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      prevCard();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextCard();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevCard();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextCard();
    }
  };

  // Emits
  const emit = defineEmits<{
    'select-heritage': [heritage: CulturalHeritageItem];
  }>();

  // 监听 activeTab 变化，重置索�?  watch(
    () => props.activeTab,
    () => {
      virtualIndex.value = 0;
      // 自动选择第一个文�?      if (filteredHeritages.value.length > 0) {
        emit('select-heritage', filteredHeritages.value[0]);
      }
    },
  );

  // 生命周期
  onMounted(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeydown);
    if (containerRef.value) {
      containerWidth.value = containerRef.value.offsetWidth;
    }
    // 初始化时选择第一个文�?    if (filteredHeritages.value.length > 0) {
      emit('select-heritage', filteredHeritages.value[0]);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<style lang="scss" scoped>
  @use './index.scss';
</style>
