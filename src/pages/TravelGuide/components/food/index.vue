<template>
  <div class="food-module">
    <template v-if="isLoading">
      <div class="food-loading">加载�?..</div>
    </template>
    <template v-else>
      <Popular :popular-foods="popularFoods" />

      <Categories :all-foods="allFoods" />

      <Ranking :popular-foods="popularFoods" :all-foods="allFoods" />

      <Map
        :food-map-locations="foodMapLocations"
        :all-foods="allFoods"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import type { Food, FoodItem, FoodLocation } from '@/types/travelGuide/index.ts';
  import { loadFoodDataByProvince, getLoadedFoodData, foodLocations } from '../../data/food/food.ts';

  import Popular from './popular/index.vue';
  import Categories from './categories/index.vue';
  import Ranking from './ranking/index.vue';
  import Map from './map/index.vue';

  const props = defineProps<{
    provinceId?: string;
  }>();

  const isLoading = ref(true);

  const foodData = computed(() => getLoadedFoodData());

  const allFoods = computed(() => {
    const provinceKey = props.provinceId || 'beijing';
    const provinceFoods = foodData.value[provinceKey];
    if (!provinceFoods) return [];

    const result = provinceFoods.map((food: FoodItem) => ({
      id: food.id,
      name: food.name,
      description: food.description,
      image: food.image,
      isPopular: food.isPopular,
      price: food.price,
      rating: food.rating,
      category: food.category,
      badgeText: food.badgeText,
      badgeColor: food.badgeColor,
      tags: food.tags || [],
      recommendations: food.recommendations
        ? {
            pairings: food.recommendations.pairings || [],
            eatingMethod: food.recommendations.eatingMethod || '',
          }
        : undefined,
      openingHours: '10:00-22:00',
      address: `${food.name} `,
    }));

    return result;
  });

  const popularFoods = computed(() => {
    const filtered = allFoods.value.filter((food: Food) => food.isPopular);
    return filtered;
  });

  const foodMapLocations = computed(() => {
    const provinceKey = props.provinceId || 'beijing';
    const provinceFoodLocations = foodLocations[provinceKey];
    if (!provinceFoodLocations) return [];

    const result = provinceFoodLocations.map((location: FoodLocation) => {
      let totalRating = 0;
      let count = 0;

      if (location.foods && location.foods.length > 0 && allFoods.value) {
        for (const foodId of location.foods) {
          const food = allFoods.value.find((f: Food) => f.id === foodId);
          if (food && food.rating) {
            totalRating += food.rating;
            count++;
          }
        }
      }

      const averageRating =
        count > 0 ? parseFloat((totalRating / count).toFixed(1)) : 0;

      return {
        ...location,
        id: location.id || `${props.provinceId}-location-${location.name}`,
        rating: averageRating,
      };
    });
    return result;
  });

  watch(
    () => props.provinceId,
    async (newProvinceId) => {
      isLoading.value = true;
      await loadFoodDataByProvince(newProvinceId || 'beijing');
      isLoading.value = false;
    },
    { immediate: true },
  );
</script>

<style scoped lang="scss" src="./index.scss" />
