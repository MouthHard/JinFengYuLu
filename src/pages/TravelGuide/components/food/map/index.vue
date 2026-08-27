<template>
  <div class="food-map">
    <MapBackground />

    <header class="food-map-header">
      <div class="logo-section">
        <span class="food-icon">🍽</span>
        <h1 class="map-title">美食探索地图</h1>
      </div>
      <div class="search-section">
        <div class="custom-search-container">
          <div class="search-icon">🔍</div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索美食地点..."
            class="custom-search-input"
          />
          <button class="custom-search-button">
            <span>搜索</span>
          </button>
        </div>
      </div>
      <div class="filter-section">
        <div class="custom-select-container" :class="{ open: isSelectOpen }">
          <div class="select-header" @click="toggleSelect">
            <span class="select-value">{{ getSelectedTypeText() }}</span>
            <span class="select-arrow"></span>
          </div>
          <div class="select-dropdown">
            <div
              v-for="option in selectOptions"
              :key="option.value"
              class="select-option"
              :class="{ selected: selectedType === option.value }"
              @click="selectOption(option.value)"
            >
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="food-map-main">
      <div class="locations-sidebar">
        <div class="locations-grid">
          <article
            v-for="location in filteredLocations"
            :key="location.id"
            class="location-card"
            :class="{ active: selectedLocation?.id === location.id }"
            @click="openLocationDetail(location)"
          >
            <div class="card-image-wrapper">
              <img loading="lazy"                 class="card-image"
                :src="location.image"
                :alt="location.name"
              />
              <div class="image-overlay">
                <span class="location-type">
                  {{ location.icon }} {{ location.type }}
                </span>
              </div>
              <div class="location-rank">
                <span class="rank-badge">🏆 #{{ location.rank }}</span>
              </div>
            </div>

            <div class="card-content">
              <h3 class="location-name">{{ location.name }}</h3>
              <p class="location-place">📍 {{ location.location }}</p>
              <div class="location-stats">
                <span class="rating">⭐{{ location.rating }}</span>
                <span class="food-count">
                  🍽 {{ location.foods.length }} 种美�?                </span>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredLocations.length === 0" class="empty-state">
          <div class="empty-icon"></div>
          <h2 class="empty-title">未找到匹配的地点</h2>
          <p class="empty-text">尝试调整搜索条件或筛选器</p>
        </div>
      </div>

      <div class="location-detail-container">
        <div v-if="selectedLocation" class="location-detail-panel">
          <div class="detail-header">
            <div class="location-header">
              <div class="title-row">
                <h2 class="detail-title">{{ selectedLocation.name }}</h2>
                <div class="title-meta">
                  <el-rate
                    :model-value="selectedLocation.rating || 0"
                    :disabled="true"
                    :max="5"
                    :precision="1"
                    show-score
                    class="detail-rating"
                  />
                </div>
              </div>
              <div class="location-row">
                <span class="detail-place">
                  📍 {{ selectedLocation.location }}
                </span>
                <div class="meta-badges">
                  <span class="rank-badge">
                    🏆 #{{ selectedLocation.rank }}
                  </span>
                  <span class="type-badge">
                    {{ selectedLocation.icon }} {{ selectedLocation.type }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <el-carousel
            v-model:model-value="activeCarouselIndex"
            height="200px"
            class="food-carousel"
            :autoplay="false"
            @change="handleCarouselChange"
          >
            <el-carousel-item
              v-for="foodId in selectedLocation.foods"
              :key="foodId"
            >
              <img loading="lazy"                 class="carousel-image"
                :src="getFoodImage(foodId)"
                :alt="getFoodName(foodId)"
              />
            </el-carousel-item>
          </el-carousel>

          <div class="food-info-section">
            <div v-if="selectedFood" class="current-food-info">
              <h3 class="food-title">{{ selectedFood.name }}</h3>
              <div class="food-meta">
                <span class="food-category">{{ selectedFood.category }}</span>
                <span class="food-price">¥{{ selectedFood.price }}</span>
              </div>
              <p class="food-description">
                {{ selectedFood.description || '暂无详细描述' }}
              </p>
              <div class="food-footer">
                <div class="food-tags">
                  <span
                    v-for="(tag, index) in selectedFood.tags || []"
                    :key="tag"
                    class="food-tag"
                    :class="`tag-color-${index % 5}`"
                  >
                    {{ tag }}
                  </span>
                </div>
                <el-button type="primary" class="detail-button">
                  查看详情
                </el-button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="location-detail-default">
          <div class="default-content">
            <div class="default-icon">🍽</div>
            <h2 class="default-title">选择美食地点</h2>
            <p class="default-text">
              从左侧选择一个美食地点，查看详细信息和特色美�?            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
  import type { Food, FoodLocation } from '@/types/travelGuide';
  import { MapBackground } from '@/pages/TravelGuide/icons/pages/food';

  // 接收props
  const props = defineProps<{
    foodMapLocations?: FoodLocation[];
    allFoods?: Food[];
  }>();

  const selectedLocation = ref<FoodLocation | null>(null);
  const searchQuery = ref('');
  const selectedType = ref('');
  const activeCarouselIndex = ref(0);
  const isSelectOpen = ref(false);
  const selectOptions = ref([
    { label: '所有类�?, value: '' },
    { label: '城市', value: '城市' },
    { label: '小镇', value: '小镇' },
    { label: '景区', value: '景区' },
  ]);

  const toggleSelect = () => {
    isSelectOpen.value = !isSelectOpen.value;
  };

  const selectOption = (value: string) => {
    selectedType.value = value;
    isSelectOpen.value = false;
  };

  const getSelectedTypeText = () => {
    const option = selectOptions.value.find(
      (opt) => opt.value === selectedType.value,
    );
    return option ? option.label : '所有类�?;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !event.target ||
      !(event.target as Element).closest('.custom-select-container')
    ) {
      isSelectOpen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    if (filteredLocations.value.length > 0) {
      openLocationDetail(filteredLocations.value[0]);
    }
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  const filteredLocations = computed(() => {
    const locations = props.foodMapLocations || [];
    return locations.filter((location: FoodLocation) => {
      const matchesSearch =
        location.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        location.location
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());

      const matchesType =
        !selectedType.value || location.type === selectedType.value;

      return matchesSearch && matchesType;
    });
  });

  const openLocationDetail = (location: FoodLocation) => {
    selectedLocation.value = location;
    activeCarouselIndex.value = 0;
  };

  const getFoodName = (foodId: string) => {
    const foods = props.allFoods || [];
    const food = foods.find((f: Food) => f.id === foodId);
    return food?.name || '未知美食';
  };

  const getFoodImage = (foodId: string) => {
    const foods = props.allFoods || [];
    const food = foods.find((f: Food) => f.id === foodId);
    return food?.image || '';
  };

  const selectedFood = computed(() => {
    if (
      !selectedLocation.value ||
      !selectedLocation.value.foods ||
      selectedLocation.value.foods.length === 0
    ) {
      return null;
    }
    const currentFoodId =
      selectedLocation.value.foods[activeCarouselIndex.value];
    const foods = props.allFoods || [];
    return foods.find((food: Food) => food.id === currentFoodId) || null;
  });

  const handleCarouselChange = (index: number) => {
    activeCarouselIndex.value = index;
  };

  // 监听筛选后的地点列表变化，当有地点时自动打开第一个地点的详情
  watch(
    filteredLocations,
    (newLocations) => {
      if (newLocations.length > 0) {
        openLocationDetail(newLocations[0]);
      } else {
        selectedLocation.value = null;
      }
    },
    { deep: true, immediate: false },
  );

  watch(
    () => props.foodMapLocations,
    () => {
      if (filteredLocations.value.length > 0) {
        openLocationDetail(filteredLocations.value[0]);
      } else {
        selectedLocation.value = null;
      }
    },
    { deep: true, immediate: false },
  );
</script>

<style scoped lang="scss" src="./index.scss" />
