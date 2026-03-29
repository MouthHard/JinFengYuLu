<template>
  <div class="category-section">
    <div class="category-tabs">
      <div
        v-for="category in categories"
        :key="category.id"
        class="tab-wrapper"
        :class="{ active: activeCategory === category.id }"
      >
        <button
          class="category-tab"
          :class="{ active: activeCategory === category.id }"
          @click="switchCategory(category.id)"
        >
          <span class="tab-icon">{{ category.icon }}</span>
          <span class="tab-name">{{ category.name }}</span>
          <span class="tab-count">{{ getCategoryCount(category.id) }}</span>
        </button>
        <span v-if="activeCategory === category.id" class="tab-indicator">
          <span class="indicator-line-left"></span>
          <span class="indicator-line-right"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { historicalEvents } from "../../../../data/events";
import "./index.scss";

const props = defineProps<{
  activeCategory: string;
}>();

const emit = defineEmits<{
  (e: "switch-category", categoryId: string): void;
}>();

const categories = [
  { id: "all", name: "全部", icon: "📚" },
  { id: "political", name: "政治军事", icon: "⚔️" },
  { id: "cultural", name: "文化科技", icon: "🔬" },
  { id: "economic", name: "经济社会", icon: "💰" },
  { id: "diplomatic", name: "外交民族", icon: "🤝" },
];

const getCategoryCount = (categoryId: string) => {
  if (categoryId === "all") {
    return historicalEvents.length;
  }
  return historicalEvents.filter((event) => event.category === categoryId)
    .length;
};

const switchCategory = (categoryId: string) => {
  emit("switch-category", categoryId);
};
</script>
