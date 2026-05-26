<template>
  <div class="home-page">
    <HeroSection />
    <FeaturedCarousel />
    <HotTopics />
    <PopularDestinations />

    <LazyLoadWrapper>
      <TravelGuides />
    </LazyLoadWrapper>

    <LazyLoadWrapper>
      <PhotographerRecommendations />
    </LazyLoadWrapper>

    <LazyLoadWrapper>
      <VideoShowcase />
    </LazyLoadWrapper>

    <LazyLoadWrapper>
      <VisualFeast :items="items" @open-detail="$emit('open-detail', $event)" />
    </LazyLoadWrapper>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { LandscapeItem } from '@/typesOfPages/landscape';
import HeroSection from './components/HeroSection/index.vue';
import FeaturedCarousel from './components/FeaturedCarousel/index.vue';
import HotTopics from './components/HotTopics/index.vue';
import PopularDestinations from './components/PopularDestinations/index.vue';
import LazyLoadWrapper from '@/components/common/LazyLoadWrapper/index.vue';

const TravelGuides = defineAsyncComponent(() =>
  import('./components/TravelGuides/index.vue')
);
const PhotographerRecommendations = defineAsyncComponent(() =>
  import('./components/PhotographerRecommendations/index.vue')
);
const VideoShowcase = defineAsyncComponent(() =>
  import('./components/VideoShowcase/index.vue')
);
const VisualFeast = defineAsyncComponent(() =>
  import('./components/VisualFeast/index.vue')
);

defineProps<{
  items: LandscapeItem[];
}>();

defineEmits<{
  'open-detail': [item: LandscapeItem];
}>();
</script>

<style scoped lang="scss" src="./index.scss" />
