<template>
  <div class="optics-filter">
    <div class="filter-carousel">
      <div class="carousel-track">
        <div
          class="sliding-indicator"
          :style="indicatorStyle"
        >
          <span class="indicator-flare"></span>
          <span class="indicator-streak"></span>
        </div>
        <button
          v-for="(category, index) in categories"
          :key="category.id"
          :ref="el => { if (el) cellRefs[index] = el as HTMLElement }"
          :class="['filter-cell', { active: selectedCategory === category.id }]"
          @click="$emit('update:selectedCategory', category.id)"
          @mouseenter="onEnter"
          @mouseleave="onLeave"
        >
          <span class="cell-prism"></span>
          <span class="cell-glass">
            <span class="glass-coating"></span>
            <span class="glass-arc"></span>
            <span class="glass-icon">{{ category.icon }}</span>
          </span>
          <span class="cell-label">{{ category.name }}</span>
          <span class="cell-count">{{ category.count }}</span>
          <span class="cell-spectrum"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const props = defineProps<{
  categories: Category[];
  selectedCategory: string;
}>();

defineEmits<{
  'update:selectedCategory': [id: string];
}>();

const cellRefs = ref<Record<number, HTMLElement>>({});
const indicatorStyle = ref<Record<string, string>>({});

const updateIndicator = () => {
  const activeIndex = props.categories.findIndex(c => c.id === props.selectedCategory);
  const el = cellRefs.value[activeIndex];
  if (el) {
    const track = el.parentElement;
    if (track) {
      const trackRect = track.getBoundingClientRect();
      const cellRect = el.getBoundingClientRect();
      indicatorStyle.value = {
        left: `${cellRect.left - trackRect.left}px`,
        width: `${cellRect.width}px`,
      };
    }
  }
};

const onEnter = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty('--mx', `${e.offsetX}`);
  el.style.setProperty('--my', `${e.offsetY}`);
};

const onLeave = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty('--mx', `${e.offsetX}`);
  el.style.setProperty('--my', `${e.offsetY}`);
};

onMounted(() => {
  nextTick(updateIndicator);
});

watch(() => props.selectedCategory, () => {
  nextTick(updateIndicator);
});

watch(() => props.categories, () => {
  nextTick(updateIndicator);
}, { deep: true });
</script>

<style scoped lang="scss" src="./index.scss" />
