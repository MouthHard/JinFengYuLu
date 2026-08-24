<template>
  <!-- 博物馆介�?-->
  <MuseumIntroSection :museum="museum" />

  <!-- 最新展�?-->
  <ExhibitionsSection :museum="museum" />

  <!-- 文物精�?-->
  <ArtifactsSection :museum="museum" />

  <!-- 活动预告 -->
  <ActivitiesSection :museum="museum" />

  <!-- 博物馆新�?-->
  <NewsSection :museum="museum" />

  <!-- 沉浸式体�?-->
  <ImmersiveSection :museum="museum" />
</template>

<script setup lang="ts">
  import type { Museum } from '@/types/museum';
  import MuseumIntroSection from './components/MuseumIntroSection/index.vue';
  import ExhibitionsSection from './components/ExhibitionsSection/index.vue';
  import ArtifactsSection from './components/ArtifactsSection/index.vue';
  import ActivitiesSection from './components/ActivitiesSection/index.vue';
  import NewsSection from './components/NewsSection/index.vue';
  import ImmersiveSection from './components/ImmersiveSection/index.vue';

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
