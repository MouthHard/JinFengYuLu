<template>
  <div class="history-page" :class="{ 'content-revealed': showContent }">
    <!-- 首页 Hero 区域 -->
    <div class="hero-section" :class="{ hidden: showContent }">
      <div class="hero-bg">
        <div class="ink-wash"></div>
        <div class="mountain-silhouette"></div>
      </div>

      <!-- 返回项目首页按钮 -->
      <button
        class="home-button"
        @click="backToProjectHome"
        title="返回项目首页"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span class="home-text">返回首页</span>
      </button>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">史</span>
          <span class="badge-text">中华文明</span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">穿越五千年</span>
          <span class="title-line highlight">探寻华夏印记</span>
        </h1>

        <p class="hero-desc">
          从远古传说到近代风云，从帝王将相到市井百态
          <br />
          一部活生生的中华文明史诗
        </p>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">5000+</span>
            <span class="stat-label">年文明史</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">24</span>
            <span class="stat-label">朝代更迭</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">历史名人</span>
          </div>
        </div>
      </div>

      <!-- 下拉箭头 -->
      <div class="scroll-indicator" @click="enterContent">
        <span class="scroll-text">向下探索</span>
        <div class="scroll-arrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <div class="scroll-pulse"></div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="content-area" :class="{ visible: showContent }">
      <!-- 侧边栏容器 - 竖排布局 -->
      <div class="sidebar-container">
        <!-- 返回主页按钮 - 位于卷轴上方 -->
        <button class="back-to-top" @click="backToHome" title="返回首页">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span class="back-text">主页</span>
          <div class="back-pulse"></div>
        </button>

        <!-- 侧边导航 - 书卷样式 -->
        <div class="sidebar-scroll" :class="{ 'rolled-up': sidebarRolledUp }">
          <!-- 卷轴顶部 -->
          <div class="scroll-roller top">
            <!-- 左侧玉轴 -->
            <div class="jade-axis left"></div>
            <div class="roller-bar"></div>
            <div class="roller-end"></div>
            <!-- 收起/展开按钮 - 固定在头部 -->
            <button
              class="roll-toggle"
              @click="toggleRollUp"
              :title="sidebarRolledUp ? '展开卷轴' : '收起卷轴'"
            ></button>
            <!-- 右侧玉轴 -->
            <div class="jade-axis right"></div>
          </div>

          <!-- 卷轴内容区 -->
          <div class="scroll-paper">
            <div class="scroll-edge-left"></div>
            <div class="scroll-edge-right"></div>
            <div class="paper-content">
              <div class="scroll-header">
                <span class="scroll-icon">卷</span>
                <span class="scroll-title">历史卷轴</span>
                <!-- 传统印章装饰 -->
                <div class="scroll-seal">
                  <span class="seal-text">历史</span>
                </div>
              </div>
              <div class="nav-items">
                <button
                  v-for="item in navItems"
                  :key="item.id"
                  class="nav-item"
                  :class="{ active: activeNav === item.id }"
                  @click="activeNav = item.id"
                >
                  <span class="item-icon">
                    <component :is="item.icon" />
                  </span>
                  <span class="item-text">{{ item.name }}</span>
                  <div class="item-ink"></div>
                </button>
              </div>
            </div>
          </div>

          <!-- 卷轴底部 -->
          <div class="scroll-roller bottom">
            <!-- 左侧玉轴 -->
            <div class="jade-axis left"></div>

            <div class="roller-bar"></div>
            <!-- 右侧玉轴 -->
            <div class="jade-axis right"></div>
            <div class="roller-end"></div>
          </div>
        </div>
      </div>

      <!-- 主内容区 -->
      <div class="main-content" ref="mainContentRef">
        <Transition name="fade-slide" mode="out-in">
          <div :key="activeNav" class="content-panel">
            <DynastiesTimeline v-if="activeNav === 'dynasties'" />
            <HistoricalEvents v-else-if="activeNav === 'events'" />
            <HistoricalFigures v-else-if="activeNav === 'figures'" />
            <CulturalHeritage v-else-if="activeNav === 'heritage'" />
          </div>
        </Transition>
      </div>
    </div>

    <div class="floating-decorations">
      <div class="decoration-item deco-1"></div>
      <div class="decoration-item deco-2"></div>
      <div class="decoration-item deco-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

// 导入组件
import DynastiesTimeline from "./components/dynasties/index.vue";
import HistoricalEvents from "./components/events/index.vue";
import HistoricalFigures from "./components/figures/index.vue";
import CulturalHeritage from "./components/heritage/index.vue";

// 导入图标
import ScrollIcon from "./icons/ScrollIcon.vue";
import BookIcon from "./icons/BookIcon.vue";
import PersonIcon from "./icons/PersonIcon.vue";
import RelicIcon from "./icons/RelicIcon.vue";

const router = useRouter();

// 响应式状态
const showContent = ref(false);
const sidebarRolledUp = ref(false);
const activeNav = ref("dynasties");

// 导航项（静态数据）
const navItems = [
  { id: "dynasties", name: "朝代更迭", icon: ScrollIcon },
  { id: "events", name: "历史事件", icon: BookIcon },
  { id: "figures", name: "历史人物", icon: PersonIcon },
  { id: "heritage", name: "文化遗产", icon: RelicIcon },
];

// 导航函数
const enterContent = () => {
  showContent.value = true;
  document.body.style.overflow = "hidden";
};

const backToHome = () => {
  showContent.value = false;
  document.body.style.overflow = "hidden";
  sidebarRolledUp.value = false;
};

const backToProjectHome = () => {
  router.push("/");
};

const toggleRollUp = () => {
  sidebarRolledUp.value = !sidebarRolledUp.value;
};

// 生命周期钩子
onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<style scoped src="./index.scss" lang="scss"></style>
