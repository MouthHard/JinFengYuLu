<template>
  <div class="heritage-detail">
    <CloudBackground class="background-icon" />
    <div v-if="selectedHeritage" class="detail-content">
      <div class="detail-header">
        <h2 class="detail-title">{{ selectedHeritage.name }}</h2>
        <div class="meta-row">
          <span class="heritage-type">
            {{
              categoryNameMap[selectedHeritage.category] ||
              selectedHeritage.category
            }}
          </span>
          <span class="era-badge">{{ selectedHeritage.era }}</span>
          <span class="meta-item period">  
            {{ selectedHeritage.year }}
          </span>
          <span class="meta-item location">
            {{ selectedHeritage.location }}
          </span>
        </div>
      </div>

      <div class="detail-sections">
        <section class="detail-section">
          <h3 class="section-title">简介</h3>
          <p class="section-content">{{ selectedHeritage.description }}</p>
        </section>

        <section class="detail-section">
          <h3 class="section-title">历史背景</h3>
          <p class="section-content">{{ selectedHeritage.history }}</p>
        </section>

        <section class="detail-section">
          <h3 class="section-title">文化意义</h3>
          <p class="section-content">
            {{ selectedHeritage.culturalSignificance }}
          </p>
        </section>

        <section class="detail-section">
          <h3 class="section-title">特色亮点</h3>
          <ul class="highlight-list">
            <li v-for="(highlight, index) in selectedHeritage.features" :key="index">
              {{ highlight }}
            </li>
          </ul>
        </section>

        <section v-if="
          selectedHeritage.relatedFigures &&
          selectedHeritage.relatedFigures.length > 0
        " class="detail-section">
          <h3 class="section-title">相关人物</h3>
          <div class="related-figures-list">
            <span v-for="(figure, index) in selectedHeritage.relatedFigures" :key="index" class="figure-tag">
              {{ figure }}
            </span>
          </div>
        </section>

        <section v-if="selectedHeritage.images && selectedHeritage.images.length > 0" class="detail-section">
          <h3 class="section-title">图片画廊</h3>
          <div class="image-gallery">
            <div v-for="(image, index) in selectedHeritage.images" :key="index" class="gallery-item">
              <img loading="lazy" :src="image" :alt="selectedHeritage.name + ' - ' + (index + 1)" class="gallery-image" />
            </div>
          </div>
        </section>

        <section class="detail-section">
          <h3 class="section-title">相关推荐</h3>
          <div class="related-heritage-list">
            <div v-for="relatedItem in relatedHeritage" :key="relatedItem.id" class="related-heritage-card">
              <img loading="lazy" :src="relatedItem.thumbnailUrl" :alt="relatedItem.name" class="related-heritage-image" />
              <div class="related-heritage-info">
                <h4 class="related-heritage-name">{{ relatedItem.name }}</h4>
                <p class="related-heritage-location">
                  {{ relatedItem.location }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-else class="detail-placeholder">
      <p>请选择一个文化遗产查看详情</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHistoryDataStore } from '@/stores/history';
import type { CulturalHeritageItem } from '@/types/history';
import { CloudBackground } from '@/pages/History/icons';

const historyStore = useHistoryDataStore();
const categoryNameMap: Record<string, string> = {
  site: '文化遗址',
  building: '古建筑',
  artifact: '文物',
  intangible: '非遗',
};

const props = defineProps<{
  selectedHeritage: CulturalHeritageItem | null;
}>();

const relatedHeritage = computed(() => {
  if (!props.selectedHeritage?.relatedItems) {
    return [];
  }
  return historyStore.heritage.filter((item) =>
    props.selectedHeritage?.relatedItems?.includes(item.id),
  );
});
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
