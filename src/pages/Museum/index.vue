<template>
  <div class="museum-page">
    <HeroSection v-if="!$route.params.id" />

    <!-- 主要内容区域 -->
    <div class="content-grid" v-if="!$route.params.id">
      <!-- 地图区域 -->
      <MapSection
        :selectedProvince="selectedProvince"
        :museums="museums"
        @select="selectProvince"
      />

      <!-- 博物馆列表区域 -->
      <MuseumList :museums="museums" :selectedProvince="selectedProvince" />
    </div>

    <!-- 博物馆详情路由视图 -->
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeroSection from "./components/HeroSection/index.vue";
import MapSection from "./components/MapSection/index.vue";
import MuseumList from "./components/MuseumList/index.vue";
import { museums } from "./data";

// 状态管理
const selectedProvince = ref("");

// 方法
const selectProvince = (province: string) => {
  selectedProvince.value = province;
};
</script>

<style lang="scss" src="./index.scss"></style>
