<template>
  <div class="artifact-sidebar">
    <div class="sidebar-content">
      <!-- 搜索框 -->
      <div class="search-container">
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="搜索文物名称..."
          class="search-input"
        />
        <button class="search-btn">
          <SearchIcon />
        </button>
      </div>

      <!-- 筛选区域 -->
      <div class="filter-container">
        <!-- 文物类型筛选 -->
        <div class="filter-group">
          <h3 class="filter-title">文物类型</h3>
          <div class="filter-options">
            <button
              v-for="type in artifactTypes"
              :key="type.value"
              :class="[
                'filter-option',
                { active: selectedTypes === type.value },
              ]"
              @click="toggleType(type.value)"
            >
              <span class="btn-text">{{ type.label }}</span>
              <span class="btn-shine"></span>
              <span class="btn-ripple"></span>
            </button>
          </div>
        </div>

        <!-- 年代筛选 -->
        <div class="filter-group">
          <h3 class="filter-title">年代</h3>
          <div class="filter-options period-options">
            <button
              v-for="period in periods"
              :key="period.value"
              :class="[
                'filter-option',
                { active: selectedPeriods === period.value },
              ]"
              @click="togglePeriod(period.value)"
            >
              <span class="btn-text">{{ period.label }}</span>
              <span class="btn-shine"></span>
              <span class="btn-ripple"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { artifactTypes, periods } from '@/pages/Museum/constants/artifactFilters';
  import { SearchIcon } from "@/pages/Museum/icon/pages/ArtifactContainer";

  // 定义 Props
  interface Props {
    modelSelectedTypes?: string;
    modelSelectedPeriods?: string;
    modelSearchKeyword?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelSelectedTypes: '',
    modelSelectedPeriods: '',
    modelSearchKeyword: '',
  });

  // 定义 Emits
  const emit = defineEmits<{
    (e: 'update:modelSelectedTypes', value: string): void;
    (e: 'update:modelSelectedPeriods', value: string): void;
    (e: 'update:modelSearchKeyword', value: string): void;
  }>();

  // 本地状态
  const selectedTypes = ref<string>(
    props.modelSelectedTypes || artifactTypes[0]?.value || '',
  );
  const selectedPeriods = ref<string>(
    props.modelSelectedPeriods || periods[0]?.value || '',
  );
  const searchKeyword = ref<string>(props.modelSearchKeyword);

  // 监听 props 变化
  watch(
    () => props.modelSelectedTypes,
    (newVal) => {
      selectedTypes.value = newVal;
    },
  );

  watch(
    () => props.modelSelectedPeriods,
    (newVal) => {
      selectedPeriods.value = newVal;
    },
  );

  watch(
    () => props.modelSearchKeyword,
    (newVal) => {
      searchKeyword.value = newVal;
    },
  );

  // 监听本地状态变化并触发 emit
  watch(selectedTypes, (newVal) => {
    emit('update:modelSelectedTypes', newVal);
  });

  watch(selectedPeriods, (newVal) => {
    emit('update:modelSelectedPeriods', newVal);
  });

  watch(searchKeyword, (newVal) => {
    emit('update:modelSearchKeyword', newVal);
  });

  // 切换类型选择
  const toggleType = (type: string) => {
    selectedTypes.value = selectedTypes.value === type ? '' : type;
  };

  // 切换年代选择
  const togglePeriod = (period: string) => {
    selectedPeriods.value = selectedPeriods.value === period ? '' : period;
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>
