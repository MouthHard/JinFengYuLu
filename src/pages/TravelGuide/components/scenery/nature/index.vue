<template>
  <div class="nature-scenery">
    <SearchFilterSection
      :search-query="searchQuery"
      :selected-landscape-type="selectedLandscapeType"
      :get-type-count="getTypeCount"
      @search-query="searchQuery = $event"
      @selected-landscape-type="selectedLandscapeType = $event"
      @clear-all="clearAllFilters"
    />

    <SpotsList
      v-if="filteredSpots.length > 0"
      :spots="filteredSpots"
      @toggle-favorite="toggleFavorite"
    />

    <div v-if="filteredSpots.length === 0" class="empty-state">
      <div class="empty-icon">🌿</div>
      <h3 class="empty-title">未找到符合条件的景点</h3>
      <p class="empty-desc">尝试调整筛选条件或搜索关键词</p>
      <button class="reset-btn" @click="clearAllFilters">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
            fill="currentColor"
          />
        </svg>
        重置筛选
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { landscapeTypes } from "../../../data/scenery.ts";
import { loadSceneryData } from "../../../data/dataLoader.ts";
import SearchFilterSection from "./search-filter-section/index.vue";
import SpotsList from "./spots-list/index.vue";

const props = defineProps<{
  provinceId: string;
}>();

const searchQuery = ref("");
const selectedLandscapeType = ref("");
const sceneryData = ref<any>(null);

const provinceScenery = computed(() => {
  return sceneryData.value || { spots: [] };
});

const natureSpots = computed(() => {
  return provinceScenery.value.spots.filter(
    (spot: any) => spot.type === "nature",
  );
});
const getSubTypes = (mainTypeValue: string) => {
  const mainType = landscapeTypes.find((t) => t.value === mainTypeValue);
  if (mainType && mainType.children) {
    return mainType.children.map((child) => child.value);
  }
  return [mainTypeValue];
};

const filteredSpots = computed(() => {
  let spots = natureSpots.value;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    spots = spots.filter(
      (spot: any) =>
        spot.name.toLowerCase().includes(query) ||
        spot.description.toLowerCase().includes(query) ||
        spot.location.toLowerCase().includes(query),
    );
  }

  if (selectedLandscapeType.value) {
    const subTypes = getSubTypes(selectedLandscapeType.value);
    spots = spots.filter(
      (spot: any) =>
        spot.landscapeType && subTypes.includes(spot.landscapeType),
    );
  }

  return spots;
});

const getTypeCount = (type: string) => {
  if (!type) return natureSpots.value.length;
  const subTypes = getSubTypes(type);
  return natureSpots.value.filter(
    (spot: any) => spot.landscapeType && subTypes.includes(spot.landscapeType),
  ).length;
};

const loadProvinceData = async () => {
  try {
    const data = await loadSceneryData(props.provinceId);
    sceneryData.value = data;
  } catch (error) {
    console.error("Failed to load scenery data:", error);
  }
};

watch(
  () => props.provinceId,
  () => {
    loadProvinceData();
  },
  { immediate: true },
);

const clearAllFilters = () => {
  searchQuery.value = "";
  selectedLandscapeType.value = "";
};

const toggleFavorite = (spotId: string) => {
  console.log("Toggle favorite:", spotId);
};
</script>

<style scoped>
@import "./index.scss";
</style>
