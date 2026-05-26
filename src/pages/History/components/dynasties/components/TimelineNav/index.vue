<template>
  <div class="timeline-nav">
    <div class="timeline-header">
      <h3 class="timeline-title">历史长河</h3>
      <div class="timeline-stats">
        <span class="stat-number">{{ filteredCount }}</span>
        <span class="stat-label">个朝代</span>
      </div>
    </div>
    <!-- 分类筛选 -->
    <div class="category-filter">
      <div class="filter-title">筛选分类</div>
      <div class="filter-tags">
        <button
          v-for="category in categories"
          :key="category.value"
          class="filter-tag"
          :class="{ active: modelValue === category.value }"
          @click="handleCategoryClick(category.value)"
        >
          {{ category.label }}
        </button>
      </div>
    </div>
    <div ref="timelineList" class="timeline-list">
      <div
        v-for="(dynasty, index) in dynasties"
        :key="dynasty.id"
        class="timeline-item"
        :class="{ active: selectedId === dynasty.id }"
        :style="{ '--delay': index * 0.05 + 's' }"
        @click="selectDynasty(dynasty)"
      >
        <div class="item-marker"></div>
        <div class="item-content">
          <span class="item-name">{{ dynasty.name }}</span>
          <div class="item-meta">
            <span class="item-period">{{ dynasty.period }}</span>
            <span class="item-duration-text">
              {{ getDurationYears(dynasty) }}年
            </span>
          </div>
        </div>
        <JadeIcon v-if="selectedId === dynasty.id" class="item-icon" />
 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { HistoryUtils } from '@/utils';
  import { JadeIcon } from '@/pages/History/icons/index.ts';

  interface Dynasty {
    id: string;
    name: string;
    period: string;
    era: string;
    periodTag: string;
    isUnified?: boolean;
    description?: string;
    highlights?: string[];
    mapUrl?: string;
    mapDescription?: string;
    capital?: string;
    location?: string;
    ethnicGroup?: string;
    founder?: string;
    startYear?: number;
    endYear?: number;
  }

  interface Category {
    label: string;
    value: string;
  }

  const props = defineProps<{
    dynasties: Dynasty[];
    modelValue: string;
    selectedId: string | null;
    filteredCount: number;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'select', dynasty: Dynasty): void;
  }>();

  // 分类数据 - 按时间段分类
  const categories: Category[] = [
    { label: '全部', value: '' },
    { label: '上古时期', value: 'ancient' },
    { label: '夏商周', value: 'xia-shang-zhou' },
    { label: '秦汉', value: 'qin-han' },
    { label: '三国两晋', value: 'three-kingdoms-jin' },
    { label: '五胡十六国', value: 'five-hus-sixteen-kingdoms' },
    { label: '南北朝', value: 'nanbeichao' },
    { label: '隋唐', value: 'sui-tang' },
    { label: '五代十国', value: 'five-dynasties' },
    { label: '宋辽夏金', value: 'song-liao-xia-jin' },
    { label: '元明清', value: 'yuan-ming-qing' },
  ];

  const handleCategoryClick = (value: string) => {
    emit('update:modelValue', props.modelValue === value ? '' : value);
  };

  const selectDynasty = (dynasty: Dynasty) => {
    emit('select', dynasty);
  };

  // 计算持续时间（年）
  const getDurationYears = (dynasty: Dynasty): number => {
    return HistoryUtils.getDurationYears(dynasty.period);
  };
</script>

<style scoped lang="scss">
  @use './index.scss' as *;
</style>
