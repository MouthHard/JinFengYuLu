<template>
  <div
    class="figure-card"
    :style="{ '--delay': delay + 's' }"
  >
    <div class="card-inner" :class="{ 'flipped': isFlipped }">
      <!-- 正面 -->
      <div class="card-front">
        <div class="card-background">
          <div class="card-header">
            <div class="header-decor left"></div>
            <div class="header-text">{{ figure.dynasty }}</div>
            <div class="header-decor right"></div>
          </div>
          <div class="card-body">
            <h3 class="figure-name">{{ figure.name }}</h3>
            <p class="figure-title">{{ figure.title }}</p>
            <p class="figure-brief">{{ figure.brief }}</p>
            <div class="tags-container">
              <div class="tags-title">相关人物</div>
              <div class="tags-content">
                <span
                  v-for="related in figure.backContent?.relatedFigures"
                  :key="related"
                  class="tag"
                >
                  {{ related }}
                </span>
                <span class="tag more-tag">更多..tags</span>
              </div>
            </div>
            <div class="card-buttons">
              <button class="btn detail-btn" @click="openDetail(figure)">详情</button>
              <button class="btn flip-btn" @click="isFlipped = !isFlipped">翻面</button>
            </div>
          </div>
        </div>
        <div class="card-corner"></div>
      </div>

      <!-- 背面 -->
      <div class="card-back">
        <img loading="lazy"           :src="figure.portraitUrl"
          :alt="figure.name"
          class="back-image"
        />
        <div class="back-buttons">
          <button class="btn back-detail-btn" @click="openDetail(figure)">详情</button>
          <button class="btn back-flip-btn" @click="isFlipped = !isFlipped">翻面</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { HistoricalFigure } from '@/typesOfPages/history';
  import { ref } from 'vue';

  const props = defineProps<{
    figure: HistoricalFigure;
    delay: number;
  }>();

  const emit = defineEmits<{
    (e: 'open-detail', figure: HistoricalFigure): void;
  }>();

  const isFlipped = ref(false);

  const openDetail = (figure: HistoricalFigure) => {
    emit('open-detail', figure);
  };
</script>

<style scoped lang="scss">
  @use './index.scss' as *;
</style>
