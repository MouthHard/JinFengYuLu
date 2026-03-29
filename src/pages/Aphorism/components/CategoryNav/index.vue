<template>
  <div class="category-nav">
    <!-- 主分类标签 -->
    <div class="category-tabs">
      <button
        v-for="category in mainCategories"
        :key="category.id"
        class="category-tab"
        :class="{ active: activeCategory === category.id }"
        @click="selectCategory(category)"
      >
        <span class="tab-icon">{{ category.icon }}</span>
        <span class="tab-name">{{ category.name }}</span>
      </button>
    </div>

    <!-- 子分类 -->
    <div v-if="subCategories.length > 0" class="category-section">
      <div class="category-grid">
        <button
          v-for="sub in subCategories"
          :key="sub.id"
          class="category-item sub-category"
          :class="{ active: activeSubCategory === sub.id }"
          @click="selectSubCategory(sub)"
        >
          <span class="item-icon">{{ sub.icon }}</span>
          <span class="item-name">{{ sub.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { mainCategories } from "../../data/categories";
import type { Category } from "../../../../types/poetry/category";
import "./index.scss";

/**
 * 处理分类选择并触发事件
 */
const handleCategorySelection = (
  categoryId: string,
  subCategoryId?: string,
) => {
  emit("category-change", categoryId, subCategoryId);
};

/**
 * 重置子分类选择
 */
const resetSubCategorySelections = () => {
  activeSubCategory.value = "";
};

const emit = defineEmits<{
  (e: "category-change", categoryId: string, subCategoryId?: string): void;
}>();

const activeCategory = ref<string>("dynasty");
const activeSubCategory = ref<string>("");

const initializeDefaultSelection = () => {
  if (activeCategory.value !== "all") {
    const category = mainCategories.find((c) => c.id === activeCategory.value);
    if (category && category.children && category.children.length > 0) {
      const firstSubCategory = category.children[0];
      activeSubCategory.value = firstSubCategory.id;
      handleCategorySelection(activeCategory.value, firstSubCategory.id);
    }
  }
};

onMounted(() => {
  initializeDefaultSelection();
});

const subCategories = computed(() => {
  if (activeCategory.value === "all") return [];
  const category = mainCategories.find((c) => c.id === activeCategory.value);
  return category?.children || [];
});

const selectCategory = (category: Category) => {
  // 不允许取消选择，直接设置为选中的分类
  activeCategory.value = category.id;
  resetSubCategorySelections();
  const firstSubCategory = category.children?.[0];
  if (firstSubCategory) {
    activeSubCategory.value = firstSubCategory.id;
    handleCategorySelection(activeCategory.value, firstSubCategory.id);
  } else {
    handleCategorySelection(activeCategory.value);
  }
};

const selectSubCategory = (sub: Category) => {
  activeSubCategory.value = sub.id;
  handleCategorySelection(activeCategory.value, sub.id);
};
</script>
