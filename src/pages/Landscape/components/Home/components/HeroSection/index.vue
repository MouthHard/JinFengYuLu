<template>
  <section class="hero-section">
    <h1 class="hero-title">
      <span class="title-line">
        <span
          v-for="(char, index) in heroTitle"
          :key="index"
          class="title-char"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ char }}
        </span>
      </span>
      <span class="title-line subtitle">
        <span
          v-for="(word, index) in heroSubtitleWords"
          :key="index"
          class="subtitle-word"
          :style="{ animationDelay: `${1 + index * 0.2}s` }"
        >
          {{ word }}
          <span v-if="index < 2" class="dot">✦</span>
        </span>
      </span>
    </h1>
    <div class="hero-stats">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-item"
        :style="{ animationDelay: `${1.5 + index * 0.15}s` }"
      >
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-content">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { heroStats as stats, heroTitle, heroSubtitleWords } from '@/utils/landscape/constants';
</script>

<style scoped lang="scss" src="./index.scss" />
