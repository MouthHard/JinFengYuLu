<template>
  <section class="creative-section">
    <!-- 落叶特效 -->
    <FallingLeaves />
    
    <div class="page-header">
      <h2 class="page-title">
        <span class="title-icon">🎨</span>
        文创产品
      </h2>
      <p class="page-subtitle">探索博物馆特色文创，将文化艺术带回家</p>
    </div>

    <!-- 精选文创轮�?-->
    <Carousel :creative-products="creativeProducts" />

    <!-- 文创卡片�?-->
    <CreativeCardGrid :creative-products="creativeProducts" />

    <!-- 文创活动模块 -->
    <ActivitySection :museum="museum" />

    <!-- 文创APP模块 -->
    <AppSection />
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useMuseumDataStore } from '@/stores/museum';
  import type { Museum, CreativeProduct } from '@/types/museum/index';
  import Carousel from './components/Carousel/index.vue';
  import CreativeCardGrid from './components/CreativeCardGrid/index.vue';
  import ActivitySection from './components/ActivitySection/index.vue';
  import AppSection from './components/AppSection/index.vue';
  import FallingLeaves from './components/FallingLeaves/index.vue';

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
  const store = useMuseumDataStore();

  const creativeProducts = computed<CreativeProduct[]>(() => {
    return store.getCreativeProductsByMuseumId(props.museum.id);
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>
