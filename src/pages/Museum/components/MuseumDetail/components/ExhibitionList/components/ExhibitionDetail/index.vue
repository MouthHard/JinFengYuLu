<template>
  <div v-if="selectedExhibition" class="exhibition-detail">
    <div class="detail-header">
      <div class="header-content">
        <div class="header-left">
          <h3 class="detail-title">{{ selectedExhibition.title }}</h3>
          <div class="detail-basic-info">
            <span class="info-item date">{{ selectedExhibition.date }}</span>
            <span class="info-item location">
              {{ selectedExhibition.location }}
            </span>
          </div>
          <div class="detail-actions">
            <button class="action-btn favorite-btn">收藏</button>
            <button class="action-btn share-btn">分享</button>
            <button class="action-btn">点赞</button>
          </div>
        </div>
        <div class="header-right">
          <img loading="lazy"             :src="selectedExhibition.image"
            :alt="selectedExhibition.title"
          />
        </div>
      </div>
    </div>

    <div class="detail-tabs">
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'overview' }"
        @click="activeTab = 'overview'"
      >
        展览概览
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'exhibits' }"
        @click="activeTab = 'exhibits'"
      >
        展品欣赏
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'history' }"
        @click="activeTab = 'history'"
      >
        历史背景
      </button>
    </div>

    <div v-if="activeTab === 'overview'" class="detail-content">
      <div class="content-section">
        <h4 class="section-title">展览简�?/h4>
        <p class="detail-description">
          {{ selectedExhibition.description }}
        </p>
      </div>

      <!-- 展览信息 -->
      <div class="content-section">
        <h4 class="section-title">展览信息</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">展览时间�?/span>
            <span class="info-value">{{ selectedExhibition.date }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">展览地点�?/span>
            <span class="info-value">
              {{ selectedExhibition.location || '未知' }}
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">展览主题�?/span>
            <span class="info-value">
              {{ (selectedExhibition as any).category || '综合' }}
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">展览状态：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).status || '未知' }}
            </span>
          </div>
          <div v-if="(selectedExhibition as any).curator" class="info-item">
            <span class="info-label">策展人：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).curator }}
            </span>
          </div>
          <div v-if="(selectedExhibition as any).scale" class="info-item">
            <span class="info-label">展览规模�?/span>
            <span class="info-value">
              {{ (selectedExhibition as any).scale }}
            </span>
          </div>
          <div v-if="(selectedExhibition as any).visitors" class="info-item">
            <span class="info-label">参观人数�?/span>
            <span class="info-value">
              {{ (selectedExhibition as any).visitors }}
            </span>
          </div>
        </div>
      </div>

      <!-- 参观指南 -->
      <div v-if="visitInfo" class="content-section">
        <h4 class="section-title">参观指南</h4>
        <div class="visit-guide">
          <p v-if="visitInfo.openTime">
            开放时间：{{ typeof visitInfo.openTime === 'string' ? visitInfo.openTime : visitInfo.openTime.regularTime }}
          </p>
          <p v-if="visitInfo.ticket">
            门票价格：{{ typeof visitInfo.ticket === 'string' ? visitInfo.ticket : visitInfo.ticket.price }}
          </p>
          <p v-if="visitInfo.transportation?.address">
            地址：{{ visitInfo.transportation.address }}
          </p>
          <p v-if="visitInfo.rules?.forbidden?.length">
            注意事项：{{ visitInfo.rules.forbidden[0] }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'exhibits'" class="detail-content">
      <div class="content-section">
        <h4 class="section-title">展品欣赏</h4>
        <div v-if="exhibitionArtifacts.length > 0" class="exhibits-masonry">
          <div
            v-for="(artifact, i) in exhibitionArtifacts"
            :key="artifact.id"
            class="exhibit-item"
          >
            <div class="exhibit-image" :class="`size-${(i % 3) + 1}`">
              <img loading="lazy" :src="artifact.image" :alt="artifact.name" />
            </div>
            <div class="exhibit-info">
              <h5 class="exhibit-title">{{ artifact.name }}</h5>
              <span v-if="artifact.period" class="exhibit-period">{{ artifact.period }}</span>
            </div>
          </div>
        </div>
        <div v-else class="no-exhibits">
          <p>暂无展品信息</p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'history'" class="detail-content">
      <div class="content-section">
        <h4 class="section-title">历史背景</h4>
        <div class="history-content">
          <p>
            {{ (selectedExhibition as any).background || selectedExhibition.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="exhibition-detail-empty">
    <div class="empty-content">
      <div class="empty-icon">🏛�?/div>
      <h3>请选择一个展�?/h3>
      <p>点击左侧展览卡片查看详细信息</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import type { Exhibition } from '@/types/museum/index';
  import { useMuseumDataStore } from '@/stores/museum';

  const props = defineProps({
    selectedExhibition: {
      type: Object as () => Exhibition | null,
      default: null,
    },
  });

  const store = useMuseumDataStore();
  const activeTab = ref('overview');
  const museumDetails = ref<any>(null);

  const exhibitionArtifacts = computed(() => {
    if (!props.selectedExhibition) return [];
    return store.getArtifactsByMuseumId(props.selectedExhibition.museumId);
  });

  const visitInfo = computed(() => {
    return museumDetails.value?.visitInfo;
  });

  watch(
    () => props.selectedExhibition?.museumId,
    async (museumId) => {
      if (museumId) {
        museumDetails.value = await store.getMuseumDetailsById(museumId);
      } else {
        museumDetails.value = null;
      }
    },
    { immediate: true },
  );
</script>

<style lang="scss" scoped src="./index.scss"></style>
