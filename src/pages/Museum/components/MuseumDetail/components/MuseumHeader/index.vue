<template>
  <header class="museum-header-component">
    <div class="left-content">
      <button class="back-button" @click="goBack">返回</button>
      <div class="museum-info">
        <span class="logo-icon">🏛️</span>
        <h1 class="museum-name">{{ museumName }}</h1>
      </div>
    </div>
    <div class="right-content">
      <nav class="museum-nav">
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeTab === 'home' }"
          @click.prevent="switchTab('home')"
          >首页</a
        >
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeTab === 'artifacts' }"
          @click.prevent="switchTab('artifacts')"
          >文物</a
        >
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeTab === 'exhibitions' }"
          @click.prevent="switchTab('exhibitions')"
          >展览</a
        >
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeTab === 'special' }"
          @click.prevent="switchTab('special')"
          >专馆</a
        >
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeTab === 'creative' }"
          @click.prevent="switchTab('creative')"
          >文创</a
        >
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeTab === 'about' }"
          @click.prevent="switchTab('about')"
          >关于</a
        >
      </nav>
      <button class="virtual-button" @click="startVirtualTour">虚拟参观</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

interface Props {
  museumName: string;
  activeTab: string;
}

const props = defineProps<Props>();
const router = useRouter();
const emit = defineEmits<{
  "update:activeTab": [tab: string];
}>();

const goBack = () => {
  router.push("/museum");
};

const switchTab = (tab: string) => {
  emit("update:activeTab", tab);
};

const startVirtualTour = () => {
  emit("update:activeTab", "special");
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
