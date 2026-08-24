<template>
  <div class="artifact-list">
    <div class="artifact-layout">
 
      <FilterMenu
        v-model:modelSelectedTypes="selectedTypes"
        v-model:modelSelectedPeriods="selectedPeriods"
        v-model:modelSearchKeyword="searchKeyword"
      />

 
      <ArtifactContainer
        :artifacts="filteredArtifacts"
        :activeArtifactId="activeArtifactId"
        @artifact-click="openArtifactDetail"
      />
    </div>

    <!-- 文物详情弹窗 -->
    <ArtifactDetailModal
      :artifact="selectedArtifact"
      @close="closeArtifactDetail"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { Museum, ArtifactDetail } from '@/types/museum';
  import {
    artifactTypes,
    periods,
    periodMap,
  } from '@/pages/Museum/constants/artifactFilters';
  import { useMuseumDataStore } from '@/stores/museum';
  import FilterMenu from './components/FilterMenu/index.vue';
  import ArtifactContainer from './components/ArtifactContainer/index.vue';
  import ArtifactDetailModal from './components/ArtifactDetailModal/index.vue';

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
  const store = useMuseumDataStore();

  // 筛选状�?  const selectedTypes = ref<string>(artifactTypes[0]?.value || '');
  const selectedPeriods = ref<string>(periods[0]?.value || '');
  const searchKeyword = ref('');

  // 获取当前博物馆的文物列表
  const museumArtifacts = computed(() => {
    return store.getArtifactsByMuseumId(props.museum.id);
  });

  // 筛选逻辑
  const filteredArtifacts = computed(() => {
    // 首先根据博物馆ID过滤文物
    const artifacts = museumArtifacts.value;

    return artifacts.filter((artifact) => {
      // 类型筛�?      if (
        selectedTypes.value &&
        selectedTypes.value !== 'all' &&
        selectedTypes.value !== artifact.category
      ) {
        return false;
      }

      // 年代筛�?      if (selectedPeriods.value && selectedPeriods.value !== 'all') {
        const periodNames = periodMap[selectedPeriods.value] || [];
        if (!periodNames.includes(artifact.period)) {
          return false;
        }
      }

      // 搜索筛�?      if (searchKeyword.value) {
        return artifact.name
          .toLowerCase()
          .includes(searchKeyword.value.toLowerCase());
      }

      return true;
    });
  });

  // 状态管�?  const selectedArtifact = ref<ArtifactDetail | null>(null);
  const activeArtifactId = ref<number | null>(null);

  // 方法
  const openArtifactDetail = async (artifact: any) => {
    const detail = await store.getArtifactDetailById(artifact.id);
    if (detail) {
      selectedArtifact.value = detail;
      activeArtifactId.value = artifact.id;
    }
  };

  const closeArtifactDetail = () => {
    selectedArtifact.value = null;
    activeArtifactId.value = null;
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>
