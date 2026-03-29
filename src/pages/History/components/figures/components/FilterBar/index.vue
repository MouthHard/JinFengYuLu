<template>
  <div class="filter-bar">
    <button
      v-for="category in categories"
      :key="category.id"
      class="pill-btn"
      :class="{ active: activeCategory === category.id }"
      @click="handleCategoryChange(category.id)"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
// 接收父组件传递的activeCategory
const props = defineProps<{
  activeCategory: string;
}>();

// 定义emit事件
const emit = defineEmits<{
  (e: "category-change", category: string): void;
}>();

const categories = [
  { id: "all", name: "全部人物" },
  { id: "politics", name: "政治军事" },
  { id: "culture", name: "文化艺术" },
  { id: "science", name: "科技学术" },
  { id: "philosophy", name: "思想哲学" },
];

// 处理分类变化
const handleCategoryChange = (category: string) => {
  emit("category-change", category);
};
</script>

<style scoped lang="scss">
@use "./index.scss" as *;
</style>
