<template>
  <div ref="searchBoxRef" class="search-box">
    <div class="search-container" :class="{ focused: isFocused }">
      <div class="geometric-bg">
        <div class="hexagon hex-1"></div>
        <div class="hexagon hex-2"></div>
        <div class="line line-1"></div>
        <div class="line line-2"></div>
      </div>
      
      <div class="search-input-wrapper">
        <div class="icon-container">
          <SearchIcon class="search-icon" :stroke-width="2" />
          <div class="icon-ring"></div>
        </div>
        
        <input 
          v-model="searchKeyword" 
          type="text" 
          class="search-input" 
          placeholder="搜索风景、摄影师、攻略..."
          @input="handleInput"
          @focus="handleFocus" 
          @blur="handleBlur" 
          @keyup.enter="handleSearch" 
        />
        
        <button class="explore-btn" @click="handleSearch">
          <div class="btn-bg"></div>
          <CompassIcon class="compass-icon" :stroke-width="2.5" />
          <span class="btn-text">探索</span>
          <div class="btn-particles">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>

    <transition name="dropdown">
      <div v-if="showDropdown" class="search-dropdown">
        <div class="dropdown-header">
          <div class="diamond"></div>
          <h4 class="section-title">热门探索</h4>
          <div class="diamond"></div>
        </div>
        
        <div class="hot-tags">
          <button 
            v-for="(tag, index) in hotSearchTags" 
            :key="tag.text" 
            class="hot-tag"
            :style="{ animationDelay: `${index * 0.06}s` }"
            @click="handleTagClick(tag)"
          >
            <div class="tag-glow"></div>
            <span class="tag-icon">{{ tag.icon }}</span>
            <span class="tag-text">{{ tag.text }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchIcon from '../../../icon/components/home/HeroSection/SearchIcon.vue';
import CompassIcon from '../../../icon/header/CompassIcon.vue';

const router = useRouter();
const searchKeyword = ref('');
const showDropdown = ref(false);
const isFocused = ref(false);

const hotSearchTags = [
  { icon: '🌌', text: '冰岛极光' },
  { icon: '🗻', text: '富士山日出' },
  { icon: '✨', text: '星空摄影' },
  { icon: '🏔️', text: '雪山风光' },
  { icon: '🌊', text: '海浪日落' },
  { icon: '🍂', text: '秋叶森林' }
];

const sanitizeKeyword = (keyword: string): string => {
  let sanitized = keyword
    .replace(/[\s\t\n\r]+/g, ' ')
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s\-_.,，。！!？?、]/g, '')
    .trim()
    .substring(0, 50);
  
  return sanitized;
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const sanitized = sanitizeKeyword(target.value);
  
  if (sanitized !== target.value) {
    searchKeyword.value = sanitized;
  }
};

const handleFocus = () => {
  showDropdown.value = true;
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
  setTimeout(() => {
    showDropdown.value = false;
  }, 200);
};

const handleSearch = () => {
  const keyword = sanitizeKeyword(searchKeyword.value);
  if (keyword && keyword.length >= 2) {
    router.push({
      path: '/landscape/search',
      query: { q: keyword }
    });
    showDropdown.value = false;
    searchKeyword.value = keyword;
  }
};

const handleTagClick = (tag: { text: string }) => {
  searchKeyword.value = tag.text;
  handleSearch();
};
</script>

<style scoped lang="scss" src="./index.scss" />
