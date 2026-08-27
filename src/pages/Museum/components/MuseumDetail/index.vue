<template>
  <div class="museum-detail">
    <MuseumHeader
      :museum-name="museum?.name || ''"
      :active-tab="activeTab"
      @update:active-tab="switchTab"
    />

    <main class="museum-content">
      <MuseumInfo v-if="activeTab === 'home' && museum" :museum="museum" />
      <ArtifactList
        v-if="activeTab === 'artifacts' && museum"
        :museum="museum"
      />
      <ExhibitionList
        v-if="activeTab === 'exhibitions' && museum"
        :museum="museum"
      />
      <SpecialExhibition
        v-if="activeTab === 'special' && museum"
        :museum="museum"
      />
      <CreativeGrid v-if="activeTab === 'creative' && museum" :museum="museum" />
      <AboutSection
        v-if="activeTab === 'about' && museum"
        :museum-id="museum.id"
        @update:active-tab="switchTab"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch, defineAsyncComponent } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useMuseumDataStore } from '@/stores/museum';
  import type { Museum } from '@/types/museum/index';
  import MuseumHeader from './components/MuseumHeader/index.vue';
  const MuseumInfo = defineAsyncComponent(() => import('./components/MuseumInfo/index.vue'));
  const ArtifactList = defineAsyncComponent(() => import('./components/ArtifactList/index.vue'));
  const ExhibitionList = defineAsyncComponent(() => import('./components/ExhibitionList/index.vue'));
  const SpecialExhibition = defineAsyncComponent(() => import('./components/SpecialExhibition/index.vue'));
  const CreativeGrid = defineAsyncComponent(() => import('./components/CreativeGrid/index.vue'));
  const AboutSection = defineAsyncComponent(() => import('./components/AboutSection/index.vue'));

  const route = useRoute();
  const router = useRouter();
  const store = useMuseumDataStore();
  const museum = ref<Museum | null>(null);
  const activeTab = ref('home');

  const switchTab = (tab: string) => {
    activeTab.value = tab;
  };

  const loadMuseum = async (id: number) => {
    await store.ensureLoaded();
    const found = await store.getMuseum(id);
    if (found) {
      museum.value = found;
      activeTab.value = 'home';
    } else {
      router.push('/museum');
    }
  };

  onMounted(() => {
    const id = Number(route.params.id);
    loadMuseum(id);
  });

  watch(
    () => route.params.id,
    (newId) => {
      if (newId) {
        loadMuseum(Number(newId));
      }
    },
  );
</script>

<style lang="scss" scoped src="./index.scss"></style>
