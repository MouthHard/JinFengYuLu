<template>
  <div class="activity-section">
    <!-- 标题 -->
    <div class="section-header">
      <span class="title-icon">🍂</span>
      文创活动
    </div>

    <!-- 3D轮播容器 -->
    <div class="carousel-wrapper">
      <!-- 左箭头 -->
      <button class="nav-arrow left" @click="prevSlide">
        <span>‹</span>
      </button>

      <!-- 轮播舞台 -->
      <div class="carousel-stage">
        <div class="carousel-track">
          <div
            v-for="(activity, index) in activities"
            :key="activity.id"
            :class="['carousel-slide', getSlideClass(index)]"
            :style="getSlideStyle(index)"
          >
            <div class="slide-card">
              <!-- 图片区 -->
              <div class="card-image">
                <img :src="activity.image" :alt="activity.title" />
                <div class="image-overlay">
                  <span class="type-badge">{{ activity.type }}</span>
                  <span v-if="activity.status === 'ongoing'" class="live-badge">
                    <span class="live-dot"></span>
                    进行中
                  </span>
                </div>
              </div>

              <!-- 信息区 -->
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
                    已报名 <strong>{{ activity?.enrolled || 0 }}</strong
                    >/{{ activity.quota }}
                  </span>
                </div>

                <!-- 操作按钮区 -->
                <div class="action-area">
                  <!-- 收藏和分享按钮 -->
                  <div class="social-buttons">
                    <button
                      :class="[
                        'social-btn',
                        'favorite',
                        { active: activity.favorited },
                      ]"
                      @click.stop="toggleFavorite(activity)"
                    >
                      <span class="btn-icon">♥</span>
                    </button>
                    <button
                      class="social-btn share"
                      @click.stop="handleShare(activity)"
                    >
                      <span class="btn-icon">↗</span>
                    </button>
                  </div>

                  <!-- 主操作按钮 -->
                  <button
                    :class="['action-btn', activity.status]"
                    @click.stop="handleAction(activity)"
                  >
                    <span class="btn-text">{{ getActionText(activity) }}</span>
                    <span class="btn-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右箭头 -->
      <button class="nav-arrow right" @click="nextSlide">
        <span>›</span>
      </button>
    </div>

    <!-- 指示器 -->
    <div class="carousel-indicators">
      <button
        v-for="(activity, index) in activities"
        :key="activity.id"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goToSlide(index)"
      >
        <span class="indicator-dot"></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  date: string;
  location: string;
  status: "upcoming" | "ongoing" | "ended";
  quota?: number;
  enrolled?: number;
  favorited?: boolean;
}

const activities = ref<Activity[]>([
  {
    id: 1,
    title: "非遗手工艺工作坊",
    description: "跟随非遗传承人学习传统技艺，亲手制作文创作品",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=600&h=400&fit=crop",
    type: "工作坊",
    date: "4月10日 14:00",
    location: "创意工坊A区",
    status: "upcoming",
    quota: 30,
    enrolled: 24,
    favorited: false,
  },
  {
    id: 2,
    title: "新锐设计师作品展",
    description: "汇聚10位新锐设计师的100+件原创作品",
    image:
      "https://images.unsplash.com/photo-1600080972464-17691c34616a?w=600&h=400&fit=crop",
    type: "展览",
    date: "4月15日-4月30日",
    location: "主展厅",
    status: "ongoing",
    favorited: false,
  },
  {
    id: 3,
    title: "文创产业趋势论坛",
    description: "行业大咖齐聚，深度解析文创产业发展新机遇",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop",
    type: "讲座",
    date: "5月1日 10:00",
    location: "多功能报告厅",
    status: "upcoming",
    quota: 200,
    enrolled: 167,
    favorited: false,
  },
  {
    id: 4,
    title: "亲子文化体验日",
    description: "专为家庭设计，让孩子在游戏中感受传统文化",
    image:
      "https://images.unsplash.com/photo-1524661135-423928c7931a?w=600&h=400&fit=crop",
    type: "体验活动",
    date: "5月15日 13:00",
    location: "儿童活动中心",
    status: "upcoming",
    quota: 50,
    enrolled: 38,
    favorited: false,
  },
]);

const currentIndex = ref(0);
const totalItems = computed(() => activities.value.length);

// 获取卡片的类名
const getSlideClass = (index: number) => {
  const diff = index - currentIndex.value;
  if (diff === 0) return "active";
  if (diff === -1 || diff === totalItems.value - 1) return "prev";
  if (diff === 1 || diff === -(totalItems.value - 1)) return "next";
  return "hidden";
};

// 获取卡片的样式
const getSlideStyle = (index: number) => {
  const diff = index - currentIndex.value;
  const normalizedDiff =
    diff < -1
      ? diff + totalItems.value
      : diff > 1
        ? diff - totalItems.value
        : diff;

  return {
    "--index": normalizedDiff,
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
    upcoming: "立即报名",
    ongoing: "参与活动",
    ended: "查看回顾",
  };
  return texts[activity.status];
};

const handleAction = (activity: Activity) => {
  console.log("处理活动:", activity.title);
};

const toggleFavorite = (activity: Activity) => {
  activity.favorited = !activity.favorited;
  console.log("收藏状态:", activity.favorited);
};

const handleShare = (activity: Activity) => {
  console.log("分享活动:", activity.title);
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
