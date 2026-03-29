<template>
  <section class="creative-section">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2 class="page-title">
        <span class="title-icon">🎨</span>
        文创产品
        <span class="title-decoration"></span>
      </h2>
      <p class="page-subtitle">探索博物馆特色文创，将文化艺术带回家</p>
      <div class="autumn-decoration">
        <div class="leaf leaf-1"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCreativeProductsByMuseumId } from "@/pages/Museum/data";
import type { CreativeProduct } from "@/types/museum/index";
import Carousel from "./components/Carousel/index.vue";
import CreativeCardGrid from "./components/CreativeCardGrid/index.vue";
import ActivitySection from "./components/ActivitySection/index.vue";
import AppSection from "./components/AppSection/index.vue";

const route = useRoute();
const creativeProducts = ref<CreativeProduct[]>([]);

onMounted(() => {
  const id = Number(route.params.id);
  creativeProducts.value = getCreativeProductsByMuseumId(id);
});
</script>

<style lang="scss" scoped src="./index.scss"></style>
