<template>
  <div class="profile-page">
    <!-- 宇宙背景装饰 -->
    <div class="cosmic-bg">
      <div class="nebula"></div>
      <div class="stars"></div>
    </div>

    <!-- 个人资料展示区-->
    <ProfileHeader :user="user" :stats="stats" @update:user="handleUserUpdate" />

    <!-- 内容导航 -->
    <ContentTabs v-model:activeTab="activeTab" :tabs="tabs" />

    <!-- 作品展示区-->
    <section class="gallery-section">
      <div class="gallery-header">
        <h2 class="gallery-title">{{ currentTabTitle }}</h2>
      </div>

      <!-- 分类筛选-->
      <CategoryFilter v-model:selectedCategory="selectedCategory" :categories="currentCategories" />

      <div v-if="allItems.length > 0" class="gallery-masonry">
        <div v-for="col in 2" :key="col" class="masonry-col">
          <template v-for="item in getColumnItems(col - 1, 2)" :key="item.id">
            <ImageCard v-if="item.type === 'image'" :item="item.data" :delay="`${item.globalIndex * 0.06}s`" />
            <VideoCard v-else-if="item.type === 'video'" :item="item.data" :delay="`${item.globalIndex * 0.06}s`" />
            <PhotographerCard v-else-if="item.type === 'photographer'" :item="item.data" :delay="`${item.globalIndex * 0.06}s`" />
            <GuideCard v-else-if="item.type === 'guide'" :item="item.data" :delay="`${item.globalIndex * 0.06}s`" />
          </template>
        </div>
      </div>
      <div v-else class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h3>{{ getEmptyTitle }}</h3>
        <p>{{ getEmptyDescription }}</p>
      </div>

      <!-- 加载更多 -->
      <div class="load-more">
        <button class="load-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>加载更多 </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Profile' });
import { ref, computed } from 'vue';
import ProfileHeader from './components/ProfileHeader/index.vue';
import ContentTabs from './components/ContentTabs/index.vue';
import CategoryFilter from './components/CategoryFilter/index.vue';
import ImageCard from './components/ImageCard/index.vue';
import VideoCard from './components/VideoCard/index.vue';
import PhotographerCard from './components/PhotographerCard/index.vue';
import GuideCard from './components/GuideCard/index.vue';
import { useInteractionStore } from '@/stores/landscape';
import { userProfile, profileTabs, profileCategories } from '@/utils/landscape/constants';
import { useProfileViewData } from '@/composables/landscape';
import { useProfileItems, useProfileStats } from '@/composables/landscape/profile';
import type { User } from '@/typesOfPages/landscape';

const interactionStore = useInteractionStore();

const activeTab = ref('favorites');
const selectedCategory = ref('image');

const user = ref<any>(userProfile);
const baseTabs = profileTabs;
const categories = profileCategories;

const handleUserUpdate = (updatedUser: User) => {
  user.value = updatedUser;
};

const { myImages, myVideos, myPhotographers, myGuides } = useProfileViewData();
const images = myImages();
const videos = myVideos();
const photographers = myPhotographers();
const guides = myGuides();

const { stats } = useProfileStats();

const tabs = computed(() => {
  return [
    { ...baseTabs[0], count: interactionStore.favoritesCount },
    { ...baseTabs[1], count: interactionStore.lovesCount },
    { ...baseTabs[2], count: 0 },
    { ...baseTabs[3], count: interactionStore.followingCount },
  ];
});

const dynamicCategories = computed(() => {
  const counts = activeTab.value === 'favorites' 
    ? interactionStore.favoritesByTypeCount 
    : interactionStore.lovesByTypeCount;
  
  return categories.map(cat => ({
    ...cat,
    count: counts[cat.id as keyof typeof counts] || 0,
  }));
});

const { allItems, getColumnItems } = useProfileItems(
  activeTab,
  selectedCategory,
  images,
  videos,
  photographers,
  guides
);

const currentCategories = computed(() => {
  if (activeTab.value === 'following') {
    return [];
  }
  
  if (activeTab.value === 'favorites' || activeTab.value === 'likes') {
    return dynamicCategories.value;
  }
  
  const baseCategories = categories.map(cat => ({ ...cat, count: 0 }));
  if (activeTab.value === 'uploads') {
    return baseCategories.filter(cat => ['image', 'video', 'guide'].includes(cat.id));
  }

  return baseCategories;
});

const currentTabTitle = computed(() => {
  const tab = tabs.value.find(t => t.key === activeTab.value);
  return tab?.name || '';
});

const getEmptyTitle = computed(() => {
  const titles: Record<string, string> = {
    following: '暂无关注的摄影师',
    favorites: '暂无收藏内容',
    likes: '暂无喜欢的内容',
    uploads: '暂无上传作品',
    collections: '暂无收藏集',
  };
  return titles[activeTab.value] || '暂无内容';
});

const getEmptyDescription = computed(() => {
  const descriptions: Record<string, string> = {
    following: '去发现页关注喜欢的摄影师吧',
    favorites: '浏览内容时点击收藏按钮添加到这里',
    likes: '浏览内容时点击喜欢按钮添加到这里',
    uploads: '开始上传你的第一个作品吧',
    collections: '创建你的第一个收藏集',
  };
  return descriptions[activeTab.value] || '这里还没有任何内容';
});
</script>

<style scoped lang="scss" src="./index.scss" />
