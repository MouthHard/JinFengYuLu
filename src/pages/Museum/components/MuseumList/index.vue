<template>
  <div class="museum-container">
    <div class="museum-header">
      <div class="header-title">
        <span class="title-icon">🏛️</span>
        <h2 class="section-title">
          {{ selectedProvince ? selectedProvince + "的博物馆" : "博物馆列表" }}
        </h2>
        <span class="museum-count" v-if="filteredMuseums.length > 0">{{
          filteredMuseums.length
        }}</span>
      </div>
      <div class="search-box">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="搜索博物馆名称、地点..."
          class="search-input"
        />
        <button class="search-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="museum-grid" v-if="filteredMuseums.length > 0">
      <div
        v-for="(museum, index) in filteredMuseums"
        :key="museum.id"
        class="museum-card"
        @click="openMuseumDetail(museum)"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <!-- 博物馆图片区域 -->
        <div class="museum-image">
          <!-- 博物馆类型标签和访问量 -->
          <div class="museum-badge-wrapper">
            <div class="museum-badge">
              <span class="badge-icon">✨</span>
              {{ museum.type }}
            </div>
            <div class="visitor-count">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{{ formatNumber(museum.visitors) }} 年访问量</span>
            </div>
          </div>

          <div class="image-container">
            <img
              :src="museum.image"
              :alt="String(museum.id)"
              loading="lazy"
              @error="handleImageError"
            />
            <div class="image-placeholder" v-if="imageErrors[museum.id]">
              <span class="placeholder-icon">🏛️</span>
            </div>

            <!-- 统计信息 - 迁移到图片容器底部 -->
            <div class="image-stats">
              <span class="stat-item" title="文物数量">
                <span class="stat-icon">🏺</span>
                <span class="stat-value">{{
                  formatNumber(museum.artifacts)
                }}</span>
                <span>件文物</span>
              </span>
              <span class="stat-item" title="展览数量">
                <span class="stat-icon">🎨</span>
                <span class="stat-value">{{ museum.exhibitions }}</span>
                <span>个展览</span>
              </span>
            </div>
          </div>
        </div>

        <!-- 博物馆信息区域 -->
        <div class="museum-info">
          <h3 class="museum-name">{{ museum.name }}</h3>

          <div class="museum-meta">
            <span class="museum-location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ museum.province }}
            </span>
            <span class="museum-type-tag">{{ museum.type }}</span>
          </div>

          <p class="museum-description">{{ museum.description }}</p>

          <!-- 快速操作按钮 -->
          <div class="quick-actions">
            <button
              class="action-btn primary"
              @click.stop="openMuseumDetail(museum)"
            >
              <span>查看详情</span>
            </button>
            <button class="action-btn secondary" @click.stop>
              <span>❤️ 收藏</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>未找到相关博物馆</h3>
      <p>请尝试调整筛选条件或搜索关键词</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import type { Museum } from "@/types/museum";
import { formatNumber, generateMuseumRoute } from "@/utils/museum";

interface Props {
  museums: Museum[];
  selectedProvince: string;
}

const props = defineProps<Props>();
const router = useRouter();

const searchQuery = ref("");
const imageErrors = reactive<Record<number, boolean>>({});

const filteredMuseums = computed<Museum[]>(() => {
  let result = props.museums;

  if (props.selectedProvince) {
    result = result.filter(
      (museum) => museum.province === props.selectedProvince,
    );
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (museum) =>
        museum.name.toLowerCase().includes(query) ||
        museum.province.toLowerCase().includes(query) ||
        museum.description.toLowerCase().includes(query),
    );
  }

  return result;
});

const openMuseumDetail = (museum: Museum) => {
  const routePath = generateMuseumRoute(museum.province, museum.id);
  router.push(routePath);
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const museumId = parseInt(img.alt);
  if (museumId) {
    imageErrors[museumId] = true;
  }
  // 隐藏错误的图片
  img.style.display = "none";
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
