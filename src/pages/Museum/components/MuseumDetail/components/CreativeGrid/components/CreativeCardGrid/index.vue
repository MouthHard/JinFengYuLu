<template>
  <div>
    <div class="category-filter">
      <h3 class="filter-title">所有文创产品</h3>
      <div class="filter-buttons">
        <button
          class="filter-btn"
          :class="{ active: selectedCategory === '全部' }"
          @click="selectedCategory = '全部'"
        >
          全部
        </button>
        <button
          v-for="category in categories"
          :key="category"
          class="filter-btn"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="creative-grid">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="creative-card-wrapper"
      >
        <div class="creative-card">
          <div class="hanger">
            <div class="rope"></div>
            <div class="ring"></div>
          </div>

          <div class="creative-image">
            <img loading="lazy" :src="product.image" :alt="product.name" />
          </div>
          <div class="creative-info">
            <span class="creative-category">{{ product.category }}</span>
            <h3 class="creative-name">{{ product.name }}</h3>
            <p class="creative-desc">{{ product.description }}</p>
            <div class="creative-footer">
              <p class="creative-price">¥{{ product.price }}</p>
              <div class="action-buttons">
                <button class="action-btn like-btn" title="喜欢">
                  <HeartIcon />
                </button>
                <button class="action-btn star-btn" title="收藏">
                  <StarIcon />
                </button>
                <button class="action-btn share-btn" title="分享">
                  <ShareIcon />
                </button>
              </div>
              <button class="buy-btn">加入购物车</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { CreativeProduct } from '@/typesOfPages/museum/index';
  import { HeartIcon, StarIcon, ShareIcon } from '@/pages/Museum/icon/common';

  const props = defineProps<{
    creativeProducts: CreativeProduct[];
  }>();

  const selectedCategory = ref('全部');

  // 所有分类
  const categories = computed(() => {
    const cats = new Set(
      props.creativeProducts
        .map((product) => product.category)
        .filter((category): category is string => category !== undefined),
    );
    return Array.from(cats);
  });

  // 筛选后的产品
  const filteredProducts = computed(() => {
    if (selectedCategory.value === '全部') {
      return props.creativeProducts;
    }
    return props.creativeProducts.filter(
      (product) => product.category === selectedCategory.value,
    );
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>
