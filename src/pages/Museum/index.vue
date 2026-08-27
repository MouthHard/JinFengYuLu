<template>
  <div class="museum-page">
    <HeroSection v-if="!$route.params.id" />

    <div v-if="!$route.params.id" class="content-grid">
      <MapSection
        :selected-province="selectedProvince"
        :museums="museums"
        @select="selectProvince"
      />

      <MuseumList :museums="museums" :selected-province="selectedProvince" />
    </div>

    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import HeroSection from './components/HeroSection/index.vue';
  import MapSection from './components/MapSection/index.vue';
  import MuseumList from './components/MuseumList/index.vue';
  import { useMuseumDataStore } from '@/stores/museum';

  const store = useMuseumDataStore();
  const selectedProvince = ref('');

  const museums = computed(() => store.museums);

  onMounted(() => {
    store.ensureLoaded();
  });

  const selectProvince = (province: string) => {
    selectedProvince.value = province;
  };
</script>

<style lang="scss" src="./index.scss"></style>
