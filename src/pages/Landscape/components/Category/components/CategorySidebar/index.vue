<template>
  <aside class="tree-sidebar">
    <div class="sidebar-header">
      <h3>分类导航</h3>
      <button
        v-if="hasActiveFilters"
        class="reset-btn"
        @click="$emit('reset')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
          />
        </svg>
        重置
      </button>
    </div>
    <div class="tree-container">
      <div class="tree-level-1">
        <div
          v-for="dim in dimensions"
          :key="dim.id"
          :class="[
            'level-1-item',
            {
              active: activeDimension === dim.id,
              expanded: expandedDimensions.includes(dim.id),
            },
          ]"
        >
          <div class="item-header" @click="toggleDimension(dim.id)">
            <span class="expand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  v-if="expandedDimensions.includes(dim.id)"
                  d="M6 9l6 6 6-6"
                />
                <path v-else d="M9 18l6-6-6-6" />
              </svg>
            </span>
            <span class="item-icon">{{ dim.icon }}</span>
            <span class="item-label">{{ dim.name }}</span>
          </div>

          <div
            v-if="expandedDimensions.includes(dim.id)"
            class="tree-level-2"
          >
            <div
              v-for="cat in getCategories(dim.id)"
              :key="cat.id"
              :class="[
                'level-2-item',
                {
                  active:
                    selectedCategory?.id === cat.id &&
                    activeDimension === dim.id,
                  expanded: expandedCategories.includes(
                    `${dim.id}-${cat.id}`,
                  ),
                },
              ]"
            >
              <div class="item-header" @click="toggleCategory(dim.id, cat)">
                <span
                  v-if="cat.children && cat.children.length > 0"
                  class="expand-icon"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      v-if="
                        expandedCategories.includes(`${dim.id}-${cat.id}`)
                      "
                      d="M6 9l6 6 6-6"
                    />
                    <path v-else d="M9 18l6-6-6-6" />
                  </svg>
                </span>
                <span v-else class="expand-icon placeholder"></span>
                <span class="item-icon">{{ cat.icon }}</span>
                <span class="item-label">{{ cat.name }}</span>
                <span class="item-count">
                  {{ getCategoryCountSum(dim.id, cat.id, cat.children) }}
                </span>
              </div>

              <div
                v-if="
                  cat.children &&
                  cat.children.length > 0 &&
                  expandedCategories.includes(`${dim.id}-${cat.id}`)
                "
                class="tree-level-3"
              >
                <div
                  v-for="child in cat.children"
                  :key="child.id"
                  :class="[
                    'level-3-item',
                    {
                      active: isSubCategoryActive(dim.id, cat.id, child.id),
                    },
                  ]"
                  @click="selectSubCategory(dim.id, cat, child)"
                >
                  <span class="item-icon">{{ child.icon }}</span>
                  <span class="item-label">{{ child.name }}</span>
                  <span class="item-count">
                    {{ getCategoryCount(dim.id, cat.id, child.id) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { LandscapeItem } from '@/types/landscape';
import type { Category } from '@/utils/landscape/categories';
import { categoryGroups } from '@/utils/landscape/categories';
import { computed } from 'vue';
import { dimensions } from '@/utils/landscape/constants';

interface Props {
  items: LandscapeItem[];
  activeDimension: string;
  selectedCategory: Category | null;
  selectedSubCategory: Category | null;
  expandedDimensions: string[];
  expandedCategories: string[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:activeDimension': [value: string];
  'update:selectedCategory': [value: Category | null];
  'update:selectedSubCategory': [value: Category | null];
  'update:expandedDimensions': [value: string[]];
  'update:expandedCategories': [value: string[]];
  'reset': [];
}>();



const hasActiveFilters = computed(() => {
  return (
    props.selectedSubCategory !== null || props.selectedCategory !== null
  );
});

const getCategories = (dimId: string) => {
  const group = categoryGroups.find((g) => g.key === dimId);
  return group?.categories || [];
};

// 获取数据在该维度的第一 tag（避免重复计数）
const getFirstTagInDimension = (item: LandscapeItem, dimId: string) => {
  if (!item.categoryTags || item.categoryTags.length === 0) {
    return null;
  }
  return item.categoryTags.find((tag) => tag.dimension === dimId) || null;
};

// 三类计数：只匹配该维度的第一 tag
const getCategoryCount = (dimId: string, catId: string, childId: string) => {
  return props.items.filter((item) => {
    const firstTag = getFirstTagInDimension(item, dimId);
    return (
      firstTag &&
      firstTag.category === catId &&
      firstTag.subCategory === childId
    );
  }).length;
};

// 二类计数：只匹配该维度的第一 tag  category
const getCategoryCountSum = (
  dimId: string,
  catId: string,
  children?: Category[],
) => {
  if (!children || children.length === 0) {
    return 0;
  }

  return props.items.filter((item) => {
    const firstTag = getFirstTagInDimension(item, dimId);
    return firstTag && firstTag.category === catId;
  }).length;
};

const isSubCategoryActive = (
  dimId: string,
  catId: string,
  childId: string,
) => {
  return (
    props.selectedSubCategory?.id === childId &&
    props.selectedCategory?.id === catId &&
    props.activeDimension === dimId
  );
};

const toggleDimension = (dimId: string) => {
  const index = props.expandedDimensions.indexOf(dimId);
  let newExpanded = [...props.expandedDimensions];
  if (index > -1) {
    newExpanded.splice(index, 1);
  } else {
    newExpanded.push(dimId);
  }
  emit('update:expandedDimensions', newExpanded);
  emit('update:activeDimension', dimId);
  emit('update:selectedCategory', null);
  emit('update:selectedSubCategory', null);
};

const toggleCategory = (dimId: string, cat: Category) => {
  const key = `${dimId}-${cat.id}`;
  const index = props.expandedCategories.indexOf(key);
  let newExpanded = [...props.expandedCategories];
  if (index > -1) {
    newExpanded.splice(index, 1);
  } else {
    newExpanded.push(key);
  }
  emit('update:expandedCategories', newExpanded);
  emit('update:activeDimension', dimId);
  emit('update:selectedCategory', cat);
  emit('update:selectedSubCategory', null);
};

const selectSubCategory = (dimId: string, cat: Category, child: Category) => {
  emit('update:activeDimension', dimId);
  emit('update:selectedCategory', cat);
  emit('update:selectedSubCategory', child);
};
</script>

<style scoped lang="scss" src="./index.scss" />
