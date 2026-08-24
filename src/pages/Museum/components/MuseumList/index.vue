<template>
  <div class="museum-container">
    <div class="museum-header">
      <div class="header-title">
        <span class="title-icon">🏛�?/span>
        <h2 class="section-title">
          {{ selectedProvince ? selectedProvince + '的博物馆' : '博物馆列�? }}
        </h2>
        <span v-if="filteredMuseums.length > 0" class="museum-count">
          {{ filteredMuseums.length }}
        </span>
      </div>
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索博物馆名称、地�?.."
          class="search-input"
        />
        <button
          v-if="searchQuery"
          class="clear-btn"
          @click="searchQuery = ''"
          aria-label="清空搜索"
        >
          �?        </button>
        <button class="search-btn">🔍</button>
      </div>
    </div>

    <div v-if="filteredMuseums.length > 0" class="museum-grid">
      <div
        v-for="(museum, index) in filteredMuseums"
        :key="museum.id"
        class="museum-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="openMuseumDetail(museum)"
      >
        <div class="museum-image">
          <div class="museum-badge-wrapper">
            <div class="museum-badge">
              <span class="badge-icon">�?/span>
              {{ museum.type }}
            </div>
            <div class="visitor-count">
              <VisitorsIcon />
              <span>{{ museum.visitors > 0 ? formatNumber(museum.visitors) + ' 年访问量' : '暂无数据' }}</span>
            </div>
          </div>

          <div class="image-container">
            <img
              :src="museum.image"
              :alt="String(museum.id)"
              loading="lazy"
              @error="handleImageError"
            />
            <div v-if="imageErrors[museum.id]" class="image-placeholder">
              <span class="placeholder-icon">🏛�?/span>
            </div>

            <!-- 统计信息 - 迁移到图片容器底�?-->
            <div class="image-stats">
              <span class="stat-item" title="文物数量">
                <span class="stat-icon">🏺</span>
                <template v-if="museum.artifacts > 0">
                  <span class="stat-value">{{ formatNumber(museum.artifacts) }}</span>
                  <span>件文�?/span>
                </template>
                <span v-else class="stat-value">暂无数据</span>
              </span>
              <span class="stat-item" title="展览数量">
                <span class="stat-icon">🎨</span>
                <span class="stat-value">{{ museum.exhibitions }}</span>
                <span>个展�?/span>
              </span>
            </div>
          </div>
        </div>

        <div class="museum-info">
          <h3 class="museum-name">{{ museum.name }}</h3>

          <div class="museum-meta">
            <span class="museum-location">
              <LocationIcon />
              {{ museum.province }}
            </span>
            <span class="museum-type-tag">{{ museum.type }}</span>
          </div>

          <p class="museum-description">{{ museum.description }}</p>

          <div class="quick-actions">
            <button
              class="action-btn primary"
              @click.stop="openMuseumDetail(museum)"
            >
              <span>查看详情</span>
            </button>
            <button class="action-btn secondary" @click.stop>
              <span>�?收藏</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>未找到相关博物馆</h3>
      <p>请尝试调整筛选条件或搜索关键�?/p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import type { Museum } from '@/types/museum';
  import { formatNumber, generateMuseumRoute } from '@/utils/museum';
  import { LocationIcon, VisitorsIcon } from '../../icon/common';

  interface Props {
    museums: Museum[];
    selectedProvince: string;
  }

  const props = defineProps<Props>();
  const router = useRouter();

  const searchQuery = ref('');
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
    // 隐藏错误的图�?    img.style.display = 'none';
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>
