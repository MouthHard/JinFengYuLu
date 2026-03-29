<template>
  <div
    class="figure-card"
    :style="{ '--delay': delay + 's' }"
    @click="openDetail(figure)"
  >
    <div class="card-inner">
      <!-- 正面 -->
      <div class="card-front">
        <div class="card-background">
          <div class="card-header">
            <div class="header-decor left"></div>
            <div class="header-text">{{ figure.dynasty }}</div>
            <div class="header-decor right"></div>
          </div>
          <div class="portrait-frame">
            <img
              :src="figure.portraitUrl"
              :alt="figure.name"
              class="portrait"
            />
          </div>
          <div class="card-body">
            <h3 class="figure-name">{{ figure.name }}</h3>
            <p class="figure-title">{{ figure.title }}</p>
            <p class="figure-brief">{{ figure.brief }}</p>
          </div>
        </div>
        <div class="card-corner"></div>
      </div>

      <!-- 背面 -->
      <div class="card-back" v-if="figure.backContent">
        <h3 class="back-name">{{ figure.name }}</h3>
        <div class="back-content">
          <div class="back-section">
            <span class="section-label">主要成就</span>
            <p class="section-text">{{ figure.backContent?.contribution }}</p>
          </div>
          <div class="back-section related">
            <span class="section-label">相关人物</span>
            <span
              v-for="related in figure.backContent?.relatedFigures"
              :key="related"
              class="related-tag"
            >
              {{ related }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HistoricalFigure } from "@/types/history";

const props = defineProps<{
  figure: HistoricalFigure;
  delay: number;
}>();

const emit = defineEmits<{
  (e: "open-detail", figure: HistoricalFigure): void;
}>();

const openDetail = (figure: HistoricalFigure) => {
  emit("open-detail", figure);
};
</script>

<style scoped lang="scss">
@use "./index.scss" as *;
</style>
