<template>
  <section class="special-exhibition-module">
    <div class="page-header">
      <h2 class="page-title">
        <span class="title-icon">🏛�?/span>
        展览专馆
      </h2>
      <p class="page-subtitle">
        探索博物馆特色专题展馆，领略中华文明的博大精�?      </p>
    </div>

    <div v-if="exhibitionHalls.length > 0" class="special-tabs-container">
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

    <div v-if="currentHall" class="special-content">
      <div class="hall-content">
        <!-- 展馆概览�?-->
        <HallOverview :hall="currentHall" />

        <!-- 精选文物区 -->
        <ArtifactsSection :artifacts="currentHall.artifacts" />

        <!-- 主题展览�?-->
        <ExhibitionsSection :exhibitions="currentHall.exhibitions" />

        <!-- 数字体验�?-->
        <DigitalSection :museum-id="props.museum.id" />

        <!-- 相关推荐�?-->
        <RecommendSection :recommendations="currentHall.recommendations" />
      </div>
    </div>

    <div v-else class="no-data">
      <p>该博物馆暂无专馆信息</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import type { Museum } from '@/types/museum';
  import { useMuseumDataStore } from '@/stores/museum';

  // 引入子组�?  import HallOverview from './HallOverview/index.vue';
  import ArtifactsSection from './ArtifactsSection/index.vue';
  import ExhibitionsSection from './ExhibitionsSection/index.vue';
  import DigitalSection from './DigitalSection/index.vue';
  import RecommendSection from './RecommendSection/index.vue';

  // 接收博物馆参�?  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
  const store = useMuseumDataStore();

  const specialTab = ref('');

  // 获取当前博物馆的专馆数据
  const exhibitionHalls = computed(() => {
    return store.getExhibitionHallsByMuseumId(props.museum.id);
  });

  // 监听专馆数据变化，自动选择第一个专�?  watch(
    exhibitionHalls,
    (newHalls) => {
      if (newHalls.length > 0 && !specialTab.value) {
        specialTab.value = newHalls[0].id;
      }
    },
    { immediate: true },
  );

  // 获取当前选中的专馆数�?  const currentHall = computed(() => {
    if (exhibitionHalls.value.length === 0) return null;
    return (
      exhibitionHalls.value.find((hall: any) => hall.id === specialTab.value) ||
      exhibitionHalls.value[0]
    );
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>
