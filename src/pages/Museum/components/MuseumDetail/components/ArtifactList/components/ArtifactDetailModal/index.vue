<template>
  <div class="artifact-modal" :class="{ open: artifact }">
    <div v-if="artifact" class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">{{ artifact.name }}</h2>
        <button class="close-btn" @click="handleClose">×</button>
      </div>
      <div class="modal-body">
        <img loading="lazy" :src="artifact.image" class="artifact-detail-image" />
        <div class="modal-content-grid">
          <div class="artifact-detail-description">
            <strong>描述�?/strong>
            {{ artifact.description }}
          </div>
          <div class="modal-actions-container">
            <div class="modal-actions">
              <button class="modal-action-btn love">
                <HeartIcon />
              </button>
              <button class="modal-action-btn favorite">
                <StarIcon />
              </button>
              <button class="modal-action-btn share">
                <ShareIcon />
              </button>
            </div>
          </div>
          <div v-if="artifact.basicInfo" class="artifact-detail-section">
            <h3 class="section-title">基础信息</h3>
            <p
              v-if="artifact.basicInfo?.periodDetail"
              class="section-content basic-info-content"
            >
              <strong>详细年代�?/strong>
              {{ artifact.basicInfo.periodDetail }}
            </p>
            <p
              v-if="artifact.basicInfo?.material"
              class="section-content basic-info-content"
            >
              <strong>材质工艺�?/strong>
              {{ artifact.basicInfo.material }}
            </p>
            <p
              v-if="artifact.basicInfo?.dimensions"
              class="section-content basic-info-content"
            >
              <strong>规格�?/strong>
              {{ artifact.basicInfo.dimensions }}
            </p>
            <p
              v-if="artifact.basicInfo?.collection"
              class="section-content basic-info-content"
            >
              <strong>收藏机构�?/strong>
              {{ artifact.basicInfo.collection }}
            </p>
            <p
              v-if="artifact.basicInfo?.excavation"
              class="section-content basic-info-content"
            >
              <strong>出土信息�?/strong>
              {{ artifact.basicInfo.excavation }}
            </p>
          </div>
          <div v-if="artifact.appearance" class="artifact-detail-section">
            <h3 class="section-title">外观细节</h3>
            <p class="section-content simple-content">
              {{ artifact.appearance }}
            </p>
          </div>
          <div v-if="artifact.historicalValue" class="artifact-detail-section">
            <h3 class="section-title">历史价�?/h3>
            <p class="section-content simple-content">
              {{ artifact.historicalValue }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ArtifactDetail } from '@/types/museum';
  import { HeartIcon, StarIcon, ShareIcon } from "@/pages/Museum/icon/pages/ArtifactContainer";

  interface Props {
    artifact: ArtifactDetail | null;
  }

  defineProps<Props>();

  // 定义 Emits
  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  // 处理关闭
  const handleClose = () => {
    emit('close');
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>
