<template>
  <div v-if="selectedFigure" class="figure-modal" @click="closeDetail">
    <div class="modal-wrapper" @click.stop>
      <button class="modal-close" @click="closeDetail">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div class="modal-layout">
        <!-- 左侧区域 -->
        <div class="modal-aside">
          <div class="aside-portrait">
            <img :src="selectedFigure.portraitUrl" :alt="selectedFigure.name" />
            <div class="portrait-ring"></div>
          </div>
          <h2 class="aside-name">{{ selectedFigure.name }}</h2>
          <p class="aside-dynasty">
            <span class="dynasty-icon">📅</span>
            {{ selectedFigure.dynasty }}
          </p>
          <p class="aside-title">{{ selectedFigure.title }}</p>
          <div class="aside-tags">
            <span
              v-for="tag in selectedFigure.tags"
              :key="tag"
              class="aside-tag"
            >
              {{ tag }}
            </span>
          </div>
          <div v-if="selectedFigure.backContent" class="aside-stats">
            <div class="stat-item">
              <span class="stat-value">{{
                selectedFigure.backContent.influence
              }}</span>
            </div>
          </div>
        </div>

        <!-- 右侧区域 -->
        <div class="modal-main">
          <!-- 生平简介 -->
          <div class="main-section intro-section">
            <h4 class="section-title">
              <span class="title-icon">📜</span>
              <span class="title-text">生平简介</span>
            </h4>
            <div class="section-content">
              <p class="content-text">{{ selectedFigure.description }}</p>
            </div>
          </div>

          <!-- 主要成就 -->
          <div
            v-if="selectedFigure.achievements?.length"
            class="main-section achievements-section"
          >
            <h4 class="section-title">
              <span class="title-icon">🏆</span>
              <span class="title-text">主要成就</span>
            </h4>
            <div class="section-content">
              <div class="achievements-timeline">
                <div
                  v-for="(achievement, idx) in selectedFigure.achievements"
                  :key="idx"
                  class="achievement-item"
                >
                  <div class="achievement-marker">
                    <span class="achievement-number">{{ idx + 1 }}</span>
                  </div>
                  <div class="achievement-content">
                    <p class="achievement-desc">{{ achievement }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 主要贡献 -->
          <div
            v-if="selectedFigure.backContent"
            class="main-section contribution-section"
          >
            <h4 class="section-title">
              <span class="title-icon">🌟</span>
              <span class="title-text">主要贡献</span>
            </h4>
            <div class="section-content contribution-box">
              <div class="contribution-icon">💎</div>
              <p class="content-text">
                {{ selectedFigure.backContent.contribution }}
              </p>
            </div>
          </div>

          <!-- 趣闻轶事 -->
          <div
            v-if="selectedFigure.backContent"
            class="main-section funfact-section"
          >
            <h4 class="section-title">
              <span class="title-icon">💡</span>
              <span class="title-text">趣闻轶事</span>
            </h4>
            <div class="section-content fun-fact-box">
              <div class="fun-fact-icon">✨</div>
              <p class="content-text">
                {{ selectedFigure.backContent.funFact }}
              </p>
            </div>
          </div>

          <!-- 相关人物 -->
          <div
            v-if="selectedFigure.backContent?.relatedFigures"
            class="main-section related-section"
          >
            <h4 class="section-title">
              <span class="title-icon">👥</span>
              <span class="title-text">相关人物</span>
            </h4>
            <div class="section-content">
              <div class="related-figures-grid">
                <div
                  v-for="(related, index) in selectedFigure.backContent
                    .relatedFigures"
                  :key="index"
                  class="related-figure-card"
                >
                  <div class="related-figure-avatar">
                    {{ related.charAt(0) }}
                  </div>
                  <span class="related-figure-name">{{ related }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 经典名言 -->
          <div v-if="selectedFigure.quotes" class="main-section quotes-section">
            <h4 class="section-title">
              <span class="title-icon">💬</span>
              <span class="title-text">经典名言</span>
            </h4>
            <div class="section-content">
              <div class="quote-card">
                <span class="quote-mark open">"</span>
                <p class="quote-content">{{ selectedFigure.quotes }}</p>
                <span class="quote-mark close">"</span>
                <div class="quote-author">
                  <span class="author-line"></span>
                  <span class="author-name">—— {{ selectedFigure.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 历史评价 -->
          <div class="main-section evaluation-section">
            <h4 class="section-title">
              <span class="title-icon">📊</span>
              <span class="title-text">历史评价</span>
            </h4>
            <div class="section-content">
              <span
                v-for="(tag, idx) in getEvaluationTags(selectedFigure)"
                :key="idx"
                class="evaluation-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- 历史影响 -->
          <div class="main-section influence-section">
            <h4 class="section-title">
              <span class="title-icon">🌊</span>
              <span class="title-text">历史影响</span>
            </h4>
            <div class="section-content">
              <p class="content-text">
                {{ selectedFigure.backContent?.influence || "暂无记录" }}
              </p>
            </div>
          </div>

          <!-- 文化遗产 -->
          <div class="main-section heritage-section">
            <h4 class="section-title">
              <span class="title-icon">🏛️</span>
              <span class="title-text">文化遗产</span>
            </h4>
            <div class="section-content">
              <div class="heritage-items">
                <div class="heritage-item">
                  <span class="heritage-icon">📜</span>
                  <span class="heritage-name">{{
                    getRepresentativeWorks(selectedFigure)
                  }}</span>
                </div>
                <div class="heritage-item">
                  <span class="heritage-icon">🗺️</span>
                  <span class="heritage-name"
                    >{{ selectedFigure.dynasty }}时期</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HistoricalFigure } from "@/types/history";
import {
  figureWorksMap,
  figureEvaluationTagsMap,
} from "../../../../data/figures";

const props = defineProps<{
  selectedFigure: HistoricalFigure | null;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeDetail = () => {
  emit("close");
};

// 获取代表作品
const getRepresentativeWorks = (figure: HistoricalFigure): string => {
  return figureWorksMap[figure.id] || "暂无记录";
};

// 获取历史评价标签
const getEvaluationTags = (figure: HistoricalFigure): string[] => {
  return figureEvaluationTagsMap[figure.id] || ["历史人物", "杰出代表"];
};
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
