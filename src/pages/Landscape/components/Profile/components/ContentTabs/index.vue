<template>
  <section class="darkroom-nav">
    <div class="film-strip">
      <div v-for="i in 14" :key="i" class="strip-perf" :class="{ top: i <= 7, bottom: i > 7 }"></div>
      <div class="nav-track">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['nav-tab', { active: activeTab === tab.key }]"
          @click="$emit('update:activeTab', tab.key)"
          @mouseenter="onEnter"
          @mouseleave="onLeave"
        >
          <span class="tab-safelight"></span>
          <span class="tab-develop-trail"></span>
          <div class="tab-icon">
            <component :is="tab.icon" />
          </div>
          <span class="tab-label">{{ tab.name }}</span>
          <span class="tab-count">{{ tab.count }}</span>
          <span class="tab-grain"></span>
          <span v-for="d in 3" :key="d" class="tab-drip" :class="`drip-${d}`"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Tab {
  key: string;
  name: string;
  count: number;
  icon: string;
}

defineProps<{
  tabs: Tab[];
  activeTab: string;
}>();

defineEmits<{
  'update:activeTab': [key: string];
}>();

const onEnter = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty('--hx', `${e.offsetX}`);
  el.style.setProperty('--hy', `${e.offsetY}`);
};

const onLeave = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty('--hx', `${e.offsetX}`);
  el.style.setProperty('--hy', `${e.offsetY}`);
};
</script>

<style scoped lang="scss" src="./index.scss" />
