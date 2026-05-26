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
  import type { Museum, ArtifactDetail } from '@/typesOfPages/museum';
  import {
    artifactTypes,
    periods,
    periodMap,
    getArtifactsByMuseumId,
    getArtifactDetailById,
  } from '@/pages/Museum/data/artifacts';
  import FilterMenu from './components/FilterMenu/index.vue';
  import ArtifactContainer from './components/ArtifactContainer/index.vue';
  import ArtifactDetailModal from './components/ArtifactDetailModal/index.vue';

  // 接收博物馆参数
  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();

  // 筛选状态
  const selectedTypes = ref<string>(artifactTypes[0]?.value || '');
  const selectedPeriods = ref<string>(periods[0]?.value || '');
  const searchKeyword = ref('');

  // 获取当前博物馆的文物列表
  const museumArtifacts = computed(() => {
    return getArtifactsByMuseumId(props.museum.id);
  });

  // 筛选逻辑
  const filteredArtifacts = computed(() => {
    // 首先根据博物馆ID过滤文物
    const artifacts = museumArtifacts.value;

    return artifacts.filter((artifact) => {
      // 类型筛选
      if (
        selectedTypes.value &&
        selectedTypes.value !== 'all' &&
        selectedTypes.value !== artifact.category
      ) {
        return false;
      }

      // 年代筛选
      if (selectedPeriods.value && selectedPeriods.value !== 'all') {
        const periodNames = periodMap[selectedPeriods.value] || [];
        if (!periodNames.includes(artifact.period)) {
          return false;
        }
      }

      // 搜索筛选
      if (searchKeyword.value) {
        return artifact.name
          .toLowerCase()
          .includes(searchKeyword.value.toLowerCase());
      }

      return true;
    });
  });

  // 状态管理
  const selectedArtifact = ref<ArtifactDetail | null>(null);
  const activeArtifactId = ref<number | null>(null);

  // 方法
  const openArtifactDetail = (artifact: any) => {
    // 获取文物详情
    const detail = getArtifactDetailById(artifact.id);
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
