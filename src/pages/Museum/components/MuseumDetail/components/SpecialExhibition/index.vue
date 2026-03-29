<template>
  <section class="special-exhibition-module">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2 class="page-title">
        <span class="title-icon">🏛️</span>
        展览专馆
        <span class="title-decoration"></span>
      </h2>
      <p class="page-subtitle">
        探索博物馆特色专题展馆，领略中华文明的博大精深
      </p>
    </div>

    <!-- 专馆导航标签 -->
    <div class="special-tabs-container" v-if="exhibitionHalls.length > 0">
      <div class="special-tabs">
        <button
          v-for="hall in exhibitionHalls"
          :key="hall.id"
          class="special-tab-btn"
          :class="{ active: specialTab === hall.id }"
          @click="specialTab = hall.id"
        >
          <span class="tab-icon">{{ hall.icon }}</span>
          <span class="tab-text">{{ hall.name }}</span>
        </button>
      </div>
    </div>

    <!-- 专馆内容区 -->
    <div class="special-content" v-if="currentHall">
      <div class="hall-content">
        <!-- 1. 专馆概览区（包含参观信息） -->
        <div class="hall-overview">
          <div class="overview-main">
            <div class="overview-image">
              <img :src="currentHall.coverImage" :alt="currentHall.name" />
              <div class="image-overlay">
                <span class="hall-badge">{{ currentHall.category }}</span>
              </div>
            </div>
            <div class="overview-info">
              <h3 class="hall-name">{{ currentHall.name }}</h3>
              <p class="hall-intro">{{ currentHall.introduction }}</p>
              <div class="hall-stats">
                <div class="stat-item">
                  <span class="stat-number">{{
                    currentHall.stats.artifacts
                  }}</span>
                  <span class="stat-label">件藏品</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{
                    currentHall.stats.exhibitions
                  }}</span>
                  <span class="stat-label">个展览</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{
                    currentHall.stats.visitors
                  }}</span>
                  <span class="stat-label">万+参观</span>
                </div>
              </div>
              <div class="hall-actions">
                <button class="action-btn primary">
                  <span>🎫</span> 立即预约
                </button>
                <button class="action-btn secondary">
                  <span>🎧</span> 语音导览
                </button>
              </div>
              <!-- 参观信息（合并到概览区） -->
              <div class="visit-info-inline">
                <div class="info-item-inline">
                  <span class="info-icon">📍</span>
                  <div class="info-content">
                    <span class="info-label">展馆位置</span>
                    <span class="info-value">{{ currentHall.location }}</span>
                  </div>
                </div>
                <div class="info-item-inline">
                  <span class="info-icon">🕐</span>
                  <div class="info-content">
                    <span class="info-label">开放时间</span>
                    <span class="info-value">{{ currentHall.openTime }}</span>
                  </div>
                </div>
                <div class="info-item-inline">
                  <span class="info-icon">⏱️</span>
                  <div class="info-content">
                    <span class="info-label">建议时长</span>
                    <span class="info-value">{{ currentHall.duration }}</span>
                  </div>
                </div>
                <div class="info-item-inline">
                  <span class="info-icon">🎫</span>
                  <div class="info-content">
                    <span class="info-label">门票信息</span>
                    <span class="info-value">{{ currentHall.ticket }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. 精选文物区 -->
        <div class="artifacts-section">
          <div class="section-header">
            <h4 class="section-title">
              <span class="title-icon">✨</span>
              馆藏精品
            </h4>
            <button class="more-link">
              查看全部 <span class="arrow">→</span>
            </button>
          </div>
          <div class="artifacts-grid">
            <div
              v-for="(artifact, index) in currentHall.artifacts"
              :key="index"
              class="artifact-card"
              @mouseenter="hoveredArtifact = `${currentHall.id}-${index}`"
              @mouseleave="hoveredArtifact = null"
            >
              <div class="artifact-image">
                <img :src="artifact.image" :alt="artifact.name" />
                <div
                  class="artifact-overlay"
                  :class="{
                    active: hoveredArtifact === `${currentHall.id}-${index}`,
                  }"
                >
                  <button class="view-btn">查看详情</button>
                </div>
              </div>
              <div class="artifact-info">
                <h5 class="artifact-name">{{ artifact.name }}</h5>
                <p class="artifact-period">{{ artifact.period }}</p>
                <p class="artifact-desc">{{ artifact.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. 主题展览区 -->
        <div class="exhibitions-section">
          <div class="section-header">
            <h4 class="section-title">
              <span class="title-icon">🎯</span>
              专题展览
            </h4>
            <button class="more-link">
              更多展览 <span class="arrow">→</span>
            </button>
          </div>
          <div class="exhibitions-list">
            <div
              v-for="(exhibition, index) in currentHall.exhibitions"
              :key="index"
              class="exhibition-item"
            >
              <div class="exhibition-image">
                <img :src="exhibition.image" :alt="exhibition.title" />
                <span class="exhibition-status" :class="exhibition.status">{{
                  exhibition.statusText
                }}</span>
              </div>
              <div class="exhibition-info">
                <h5 class="exhibition-title">{{ exhibition.title }}</h5>
                <p class="exhibition-date">📅 {{ exhibition.date }}</p>
                <p class="exhibition-desc">{{ exhibition.description }}</p>
                <div class="exhibition-tags">
                  <span
                    v-for="(tag, tIndex) in exhibition.tags"
                    :key="tIndex"
                    class="tag"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. 数字体验区 -->
        <div class="digital-section">
          <div class="section-header">
            <h4 class="section-title">
              <span class="title-icon">🌐</span>
              数字体验
            </h4>
          </div>
          <div class="digital-grid">
            <div class="digital-card vr-card">
              <div class="digital-icon">🥽</div>
              <h5>VR虚拟展厅</h5>
              <p>360°沉浸式体验，足不出户逛展馆</p>
              <button class="digital-btn">进入VR展厅</button>
            </div>
            <div class="digital-card ar-card">
              <div class="digital-icon">📱</div>
              <h5>AR文物识别</h5>
              <p>扫描文物，解锁背后的历史故事</p>
              <button class="digital-btn">体验AR功能</button>
            </div>
            <div class="digital-card video-card">
              <div class="digital-icon">🎬</div>
              <h5>专家讲解视频</h5>
              <p>权威专家深度解读，领略文物之美</p>
              <button class="digital-btn">观看视频</button>
            </div>
            <div class="digital-card audio-card">
              <div class="digital-icon">🎧</div>
              <h5>语音导览</h5>
              <p>专业讲解伴随，深入了解每件藏品</p>
              <button class="digital-btn">收听导览</button>
            </div>
          </div>
        </div>

        <!-- 6. 相关推荐区 -->
        <div class="recommend-section">
          <div class="section-header">
            <h4 class="section-title">
              <span class="title-icon">💡</span>
              相关推荐
            </h4>
          </div>
          <div class="recommend-grid">
            <div
              v-for="(item, index) in currentHall.recommendations"
              :key="index"
              class="recommend-card"
            >
              <div class="recommend-icon">{{ item.icon }}</div>
              <h5>{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <span class="recommend-type">{{ item.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 无专馆数据提示 -->
    <div class="no-data" v-else>
      <p>该博物馆暂无专馆信息</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { Museum } from "@/types/museum";
import { getExhibitionHallsByMuseumId } from "@/pages/Museum/data";

// 接收博物馆参数
interface Props {
  museum: Museum;
}

const props = defineProps<Props>();

const specialTab = ref("");
const hoveredArtifact = ref<string | null>(null);

// 获取当前博物馆的专馆数据
const exhibitionHalls = computed(() => {
  return getExhibitionHallsByMuseumId(props.museum.id);
});

// 监听专馆数据变化，自动选择第一个专馆
watch(
  exhibitionHalls,
  (newHalls) => {
    if (newHalls.length > 0 && !specialTab.value) {
      specialTab.value = newHalls[0].id;
    }
  },
  { immediate: true },
);

// 获取当前选中的专馆数据
const currentHall = computed(() => {
  if (exhibitionHalls.value.length === 0) return null;
  return (
    exhibitionHalls.value.find((hall: any) => hall.id === specialTab.value) ||
    exhibitionHalls.value[0]
  );
});
</script>

<style lang="scss" scoped src="./index.scss"></style>
