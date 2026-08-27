<template>
  <section class="hot-topics">
    <div class="section-header">
      <div class="title-wrapper">
        <h2 class="section-title">
          <span class="title-icon">
            <TrendIcon />
          </span>
          <span class="title-text">万象景章</span>
          <span class="title-subtitle">· 风光主题</span>
        </h2>
        <div class="title-decoration right"></div>
      </div>
    </div>

    <div v-if="displayedTopics.length > 0" class="topics-container">
      <div
        v-for="(topic, index) in displayedTopics"
        :key="topic.id"
        class="topic-card"
        :class="`card-${index + 1}`"
      >
        <div class="card-image">
          <img :src="topic.image" :alt="topic.title" loading="lazy" />
          <span class="card-badge">{{ topic.category }}</span>
          <span class="card-number">0{{ index + 1 }}</span>
        </div>
        <div class="card-content">
          <div class="publish-time-top" @click.stop>
            <CalendarIcon class="time-svg" />
            <span class="time-text">{{ topic.date }}</span>
          </div>

          <div class="content-header">
            <h3>{{ topic.title }}</h3>
            <div class="title-tags">
              <span class="season-tag">{{ topic.bestSeason }}</span>
            </div>
          </div>

          <p class="description">{{ topic.description }}</p>

          <div class="hot-locations">
            <div class="section-label">
              <LocationIcon class="label-svg" />
              <span class="label-text">热门地点</span>
            </div>
            <div class="locations-list">
              <span
                v-for="(location, idx) in topic.locations.slice(0, 3)"
                :key="idx"
                class="location-item"
                @click.stop
              >
                <span class="loc-dot"></span>
                {{ location }}
              </span>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-stats">
              <span class="stat stat-views">
                <EyeIcon />
                <span class="stat-value">{{ topic.views }}</span>
              </span>
              <span class="stat stat-likes">
                <ThumbUpIcon />
                <span class="stat-value">{{ topic.likes }}</span>
              </span>
              <span class="stat stat-favorites">
                <BookmarkIcon />
                <span class="stat-value">{{ topic.favorites || 0 }}</span>
              </span>
              <span class="stat stat-comments">
                <CommentIcon />
                <span class="stat-value">{{ topic.comments }}</span>
              </span>
            </div>

            <button class="view-detail-btn" @click="openTopicDetail(topic)">
              <PlayCircleIcon />
              <span>查看详情</span>
            </button>
          </div>
        </div>
      </div>

      <div class="load-more-container">
        <button
          class="load-more-btn"
          :class="{ loading: isLoading }"
          :disabled="isLoading || !hasMoreTopics"
          @click="loadMoreTopics"
        >
          <SpinnerIcon
            v-if="isLoading"
            class="loading-icon"
          />
          <ChevronDownIcon
            v-else
            class="arrow-icon"
          />
          <span>
            {{
              isLoading
                ? '加载�?..'
                : hasMoreTopics
                  ? '加载更多主题'
                  : '已加载全�?
            }}
          </span>
          <ChevronDownIcon
            v-if="!isLoading && hasMoreTopics"
            class="arrow-icon"
          />
        </button>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <TrendIcon :stroke-width="1.5" :dot-radius="1.5" />
      </div>
      <p class="empty-text">暂无热门主题</p>
      <span class="empty-hint">精彩主题即将呈现</span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import type { Topic } from '@/types/landscape/home';
  import { useLandscapeDataStore } from '@/stores/landscape';
  import TrendIcon from '@/pages/Landscape/icon/components/home/HotTopics/TrendIcon.vue';
  import PlayCircleIcon from '@/pages/Landscape/icon/components/home/HotTopics/PlayCircleIcon.vue';
  import SpinnerIcon from '@/pages/Landscape/icon/components/home/HotTopics/SpinnerIcon.vue';
  import CalendarIcon from '@/pages/Landscape/icon/common/CalendarIcon.vue';
  import LocationIcon from '@/pages/Landscape/icon/common/LocationIcon.vue';
  import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
  import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
  import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
  import ChevronDownIcon from '@/pages/Landscape/icon/common/ChevronDownIcon.vue';
  import CommentIcon from '@/pages/Landscape/icon/components/profile/VideoCard/CommentIcon.vue';

  const router = useRouter();
  const dataStore = useLandscapeDataStore();

  const hotTopics = computed(() => dataStore.getAllHotTopics());
  const displayCount = ref(2);
  const isLoading = ref(false);

  const displayedTopics = computed(() => {
    return hotTopics.value.slice(0, displayCount.value);
  });

  const hasMoreTopics = computed(() => {
    return displayCount.value < hotTopics.value.length;
  });

  const loadMoreTopics = () => {
    if (isLoading.value || !hasMoreTopics.value) return;
    displayCount.value += 2;
  };

  const openTopicDetail = (topic: Topic) => {
    // 跳转到分类页面，并传递导航参�?    if (topic.navigation) {
      router.push({
        path: '/landscape/category',
        query: {
          dimension: topic.navigation.dimension,
          category: topic.navigation.category,
          subCategory: topic.navigation.subCategory,
        },
      });
    }
  };
</script>

<style scoped lang="scss" src="./index.scss" />
