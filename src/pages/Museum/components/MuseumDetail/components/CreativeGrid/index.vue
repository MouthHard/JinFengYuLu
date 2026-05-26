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

    <!-- 精选文创轮播 -->
    <Carousel :creative-products="creativeProducts" />

    <!-- 文创卡片库 -->
    <CreativeCardGrid :creative-products="creativeProducts" />

    <!-- 文创活动模块 -->
    <ActivitySection />

    <!-- 文创APP模块 -->
    <AppSection />
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getCreativeProductsByMuseumId } from '@/pages/Museum/data/creative-products';
  import type { CreativeProduct } from '@/typesOfPages/museum/index';
  import Carousel from './components/Carousel/index.vue';
  import CreativeCardGrid from './components/CreativeCardGrid/index.vue';
  import ActivitySection from './components/ActivitySection/index.vue';
  import AppSection from './components/AppSection/index.vue';
  import FallingLeaves from './components/FallingLeaves/index.vue';

  const route = useRoute();
  const creativeProducts = ref<CreativeProduct[]>([]);

  onMounted(() => {
    const id = Number(route.params.id);
    creativeProducts.value = getCreativeProductsByMuseumId(id);
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>
