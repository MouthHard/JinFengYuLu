<template>
  <div class="food-module">
    <!-- 热门推荐子模块 -->
    <Popular :popular-foods="popularFoods" />

    <!-- 美食分类与筛选模块 -->
    <Categories :all-foods="allFoods" @select-food="selectedFood = $event" />

    <!-- 美食排行榜子模块 -->
    <Ranking :popular-foods="popularFoods" :all-foods="allFoods" />

    <!-- 美食地图模块 -->
    <Map
      :food-map-locations="foodMapLocations"
      :all-foods="allFoods"
      @select-food="selectedFood = $event"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import { foodData, foodLocations } from "../../data/food/food.ts";

// 引入子组件
import Popular from "./popular/index.vue";
import Categories from "./categories/index.vue";
import Ranking from "./ranking/index.vue";
import Map from "./map/index.vue";

// 接收省份ID参数
const props = defineProps({
  provinceId: {
    type: String,
    default: "beijing",
  },
});

// 所有美食数据（根据当前省份动态加载）
const allFoods = computed(() => {
  // 从foodData中获取当前省份的美食数据，如果没有则使用默认省份数据
  const provinceFoods = foodData[props.provinceId] || foodData.beijing;

  // 为每个美食添加必要的字段，确保与模板中的使用一致
  const result = provinceFoods.map((food) => ({
    ...food,
    rating: food.rating || 0,
    openingHours: "10:00-22:00",
    tags: food.tags || ["推荐", "当地特色", "人气美食"],
    address: `${food.name}的详细地址`,
    recommendations: food.recommendations || {
      pairings: ["推荐搭配1", "推荐搭配2"],
      eatingMethod: "推荐食用方法",
    },
  }));

  return result;
});

// 热门推荐数据（从所有美食中筛选）
const popularFoods = computed(() => {
  const filtered = allFoods.value.filter((food) => food.isPopular);
  return filtered;
});

// 美食地图数据 - 根据当前省份动态加载真实地点数据
const foodMapLocations = computed(() => {
  const provinceFoodLocations =
    foodLocations[props.provinceId] || foodLocations.beijing;
  // 处理地图位置数据
  const result = provinceFoodLocations.map((location) => {
    // 计算平均评分
    let totalRating = 0;
    let count = 0;

    if (location.foods && location.foods.length > 0 && allFoods.value) {
      for (const foodId of location.foods) {
        const food = allFoods.value.find((f) => f.id === foodId);
        if (food && food.rating) {
          totalRating += food.rating;
          count++;
        }
      }
    }

    const averageRating =
      count > 0 ? parseFloat((totalRating / count).toFixed(1)) : 0;

    // 总是返回新对象，避免修改原始location对象
    return {
      ...location,
      id: location.id || `${props.provinceId}-location-${location.name}`,
      rating: averageRating,
    };
  });
  return result;
});

// 选择的食物
const selectedFood = ref(null);
</script>

<style scoped lang="scss" src="./index.scss" />
