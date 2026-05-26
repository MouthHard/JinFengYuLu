<template>
  <div class="artifact-main">
    <div class="artifact-container">
      <div v-if="artifacts.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">未找到相关文物</h3>
        <p class="empty-description">尝试更换搜索关键词或调整筛选条件</p>
        <div class="empty-tips">
          <span class="tip-item">💡 提示：</span>
          <span class="tip-text">使用更简短的关键词可能会有更多结果</span>
        </div>
      </div>
      <div
        v-for="artifact in artifacts"
        v-else
        :key="artifact.id"
        class="artifact-item"
        :class="{ active: activeArtifactId === artifact.id }"
        @click="handleArtifactClick(artifact)"
      >
        <div class="artifact-card">
          <div
            class="artifact-card-inner"
            :class="{ flipped: activeArtifactId === artifact.id }"
          >
            <div class="artifact-card-face front">
              <div class="artifact-image">
                <img loading="lazy" :src="artifact.image" :alt="artifact.name" />
                <div class="artifact-actions">
                  <button class="action-btn">
                    <HeartIcon />
                  </button>
                  <button class="action-btn">
                    <StarIcon />
                  </button>
                  <button class="action-btn">
                    <ShareIcon />
                  </button>
                </div>
              </div>
              <div class="artifact-info">
                <h3 class="artifact-name">{{ artifact.name }}</h3>
                <p class="artifact-period">{{ artifact.period }}</p>
                <p class="artifact-description">
                  {{ artifact.description }}
                </p>
              </div>
            </div>
            <!-- 卡片背面 -->
            <div class="artifact-card-face back"></div>
          </div>
        </div>
        <div
          class="artifact-disc"
          :class="{ active: activeArtifactId === artifact.id }"
        >
          <!-- 未激活状态 - 椭圆圆盘 -->
          <InactiveDiscIcon v-if="activeArtifactId !== artifact.id" />
          <!-- 激活状态 - 圆形圆盘 -->
          <ActiveDiscIcon v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 导入图标组件
  import {
    HeartIcon,
    StarIcon,
    ShareIcon,
    InactiveDiscIcon,
    ActiveDiscIcon
  } from "@/pages/Museum/icon/pages/ArtifactContainer";

  // 定义 Props
  interface Props {
    artifacts: any[];
    activeArtifactId: number | null;
  }

  defineProps<Props>();

  // 定义 Emits
  const emit = defineEmits<{
    (e: 'artifactClick', artifact: any): void;
  }>();

  // 处理文物点击
  const handleArtifactClick = (artifact: any) => {
    emit('artifactClick', artifact);
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>
