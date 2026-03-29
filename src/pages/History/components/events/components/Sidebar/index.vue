<template>
  <div class="category-sidebar" v-if="isBookOpen && filteredEvents.length > 0">
    <div class="sidebar-header">
      <div class="sidebar-icon">{{ currentCategory?.icon }}</div>
      <h3 class="sidebar-title">{{ currentCategory?.name }}</h3>
      <div class="sidebar-count">{{ filteredEvents.length }}</div>
    </div>
    <div class="sidebar-content">
      <div class="sidebar-scroll">
        <div
          v-for="(event, index) in filteredEvents"
          :key="event.id"
          class="sidebar-item"
          :class="{ active: currentEventIndex === index }"
          @click="goToEvent(index)"
        >
          <div class="item-number">{{ index + 1 }}</div>
          <div class="item-info">
            <div class="item-name">{{ event.title }}</div>
            <div class="item-period">{{ event.period }}</div>
          </div>
          <div class="item-arrow" v-if="currentEventIndex === index">→</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { historicalEvents } from "../../../../data/events";
import "./index.scss";

const props = defineProps<{
  activeCategory: string;
  currentEventIndex: number;
  isBookOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "go-to-event", index: number): void;
}>();

const categories = [
  { id: "all", name: "全部", icon: "📚" },
  { id: "political", name: "政治军事", icon: "⚔️" },
  { id: "cultural", name: "文化科技", icon: "🔬" },
  { id: "economic", name: "经济社会", icon: "💰" },
  { id: "diplomatic", name: "外交民族", icon: "🤝" },
];

const currentCategory = computed(() => {
  return (
    categories.find((cat) => cat.id === props.activeCategory) || categories[0]
  );
});

const filteredEvents = computed(() => {
  if (props.activeCategory === "all") {
    return historicalEvents;
  }
  return historicalEvents.filter(
    (event) => event.category === props.activeCategory,
  );
});

const goToEvent = (index: number) => {
  emit("go-to-event", index);
};
</script>
