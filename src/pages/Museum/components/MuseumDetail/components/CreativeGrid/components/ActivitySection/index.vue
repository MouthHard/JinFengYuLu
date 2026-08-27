<template>
  <div class="activity-section">
    <div class="section-header">
      <span class="title-icon">🍂</span>
      文创活动
    </div>

    <!-- 3D轮播容器 -->
    <div class="carousel-wrapper">
      <button class="nav-arrow left" @click="prevSlide">
        <span>�?/span>
      </button>

      <div class="carousel-stage">
        <div class="carousel-track">
          <div
            v-for="(activity, index) in activities"
            :key="activity.id"
            :class="['carousel-slide', getSlideClass(index)]"
            :style="getSlideStyle(index)"
          >
            <div class="slide-card">
              <div class="card-image">
                <img loading="lazy" :src="activity.image" :alt="activity.title" />
                <div class="image-overlay">
                  <span class="type-badge">{{ activity.type }}</span>
                  <span v-if="activity.status === 'ongoing'" class="live-badge">
                    <span class="live-dot">�?/span>
                    进行�?                  </span>
                </div>
              </div>

              <div class="card-content">
                <h4 class="content-title">{{ activity.title }}</h4>

                <div class="content-meta">
                  <span class="meta-item">
                    <span class="meta-icon">📅</span>
                    {{ activity.date }}
                  </span>
                  <span class="meta-item">
                    <span class="meta-icon">📍</span>
                    {{ activity.location }}
                  </span>
                </div>

                <p class="content-desc">{{ activity.description }}</p>

                <!-- 名额进度 -->
                <div v-if="activity.quota" class="quota-section">
                  <div class="quota-bar">
                    <div
                      class="quota-fill"
                      :style="{
                        width:
                          ((activity?.enrolled || 0) / activity.quota) * 100 +
                          '%',
                      }"
                      :class="{
                        urgent: activity.quota - (activity?.enrolled || 0) <= 5,
                      }"
                    ></div>
                  </div>
                  <span class="quota-text">
                    已报�?                    <strong>{{ activity?.enrolled || 0 }}</strong>
                    / {{ activity.quota }}
                  </span>
                </div>

                <div class="action-area">
                  <button
                    :class="[
                      'social-btn',
                      'favorite',
                      { active: activity.favorited },
                    ]"
                    @click.stop="toggleFavorite(activity)"
                  >
                    <LikeIcon />
                  </button>
                  <button
                    class="social-btn share"
                    @click.stop="handleShare(activity)"
                  >
                    <ShareIcon />
                  </button>

                  <button
                    :class="['action-btn', activity.status]"
                    @click.stop="handleAction(activity)"
                  >
                    <span class="btn-text">{{ getActionText(activity) }}</span>
                    <span class="btn-icon">�?/span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="nav-arrow right" @click="nextSlide">
        <span>�?/span>
      </button>
    </div>

    <!-- 指示�?-->
    <div class="carousel-indicators">
      <button
        v-for="(activity, index) in activities"
        :key="activity.id"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goToSlide(index)"
      >
        <FoodPointIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useMuseumDataStore } from '@/stores/museum';
  import type { Museum } from '@/types/museum/index';
  import { FoodPointIcon } from '@/pages/Museum/icon/pages/CreativeProduct';
  import { ShareIcon, LikeIcon } from '@/pages/Museum/icon/common/index.ts';

  interface Activity {
    id: number;
    title: string;
    description: string;
    image: string;
    type: string;
    date: string;
    location: string;
    status: 'upcoming' | 'ongoing' | 'ended';
    quota?: number;
    enrolled?: number;
    favorited?: boolean;
  }

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
  const store = useMuseumDataStore();
  const router = useRouter();

  const activities = computed<Activity[]>(() => {
    return store.getActivitiesByMuseumId(props.museum.id).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      type: item.time || '活动',
      date: item.date,
      location: item.location || '待定',
      status: deriveStatus(item.date),
    }));
  });

  const deriveStatus = (dateStr: string): 'upcoming' | 'ongoing' | 'ended' => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const activityDate = new Date(dateStr);
    if (isNaN(activityDate.getTime())) return 'ongoing';
    activityDate.setHours(0, 0, 0, 0);
    if (activityDate > today) return 'upcoming';
    if (activityDate < today) return 'ended';
    return 'ongoing';
  };

  const currentIndex = ref(0);
  const totalItems = computed(() => activities.value.length);

  // 获取卡片的类�?  const getSlideClass = (index: number) => {
    const diff = index - currentIndex.value;
    if (diff === 0) return 'active';
    if (diff === -1 || diff === totalItems.value - 1) return 'prev';
    if (diff === 1 || diff === -(totalItems.value - 1)) return 'next';
    return 'hidden';
  };

  // 获取卡片的样�?  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex.value;
    const normalizedDiff =
      diff < -1
        ? diff + totalItems.value
        : diff > 1
          ? diff - totalItems.value
          : diff;

    return {
      '--index': normalizedDiff,
    };
  };

  const prevSlide = () => {
    currentIndex.value =
      currentIndex.value === 0 ? totalItems.value - 1 : currentIndex.value - 1;
  };

  const nextSlide = () => {
    currentIndex.value =
      currentIndex.value === totalItems.value - 1 ? 0 : currentIndex.value + 1;
  };

  const goToSlide = (index: number) => {
    currentIndex.value = index;
  };

  const getActionText = (activity: Activity) => {
    const texts = {
      upcoming: '立即报名',
      ongoing: '参与活动',
      ended: '查看回顾',
    };
    return texts[activity.status];
  };

  const handleAction = (_activity: Activity) => {
    router.push(`/museum/${props.museum.id}?tab=exhibitions`);
  };

  const toggleFavorite = (activity: Activity) => {
    activity.favorited = !activity.favorited;
  };

  const handleShare = (_activity: Activity) => {
    if (navigator.share) {
      navigator.share({ title: _activity.title, text: _activity.description });
    }
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>
