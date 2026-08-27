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
import type { LandscapeItem } from '@/types/landscape';
import LazyLoadWrapper from '@/components/common/LazyLoadWrapper/index.vue';

const HeroSection = defineAsyncComponent(() =>
  import('./components/HeroSection/index.vue')
);
const FeaturedCarousel = defineAsyncComponent(() =>
  import('./components/FeaturedCarousel/index.vue')
);
const HotTopics = defineAsyncComponent(() =>
  import('./components/HotTopics/index.vue')
);
const PopularDestinations = defineAsyncComponent(() =>
  import('./components/PopularDestinations/index.vue')
);

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
