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
        title="返回项目首页"
        @click="backToProjectHome"
      >
        <HomeIcon />
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
          <UpArrowIcon />
        </div>
        <div class="scroll-pulse"></div>
      </div>
    </div>

    <div class="content-area" :class="{ visible: showContent }">
      <!-- 侧边栏容器 - 竖排布局 -->
      <div class="sidebar-container">
        <button class="back-to-top" title="返回首页" @click="backToHome">
          <UpArrowIcon />
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
            <button
              class="roll-toggle"
              :title="sidebarRolledUp ? '展开卷轴' : '收起卷轴'"
              @click="toggleRollUp"
            ></button>
            <!-- 右侧玉轴 -->
            <div class="jade-axis right"></div>
          </div>

          <!-- 卷轴内容区 -->
          <div class="scroll-paper">
            <div class="scroll-header">
              <span class="scroll-icon">
                <BookIcon />
              </span>
              <span class="scroll-title">历史卷轴</span>
              <!-- 传统印章装饰 -->
              <div class="scroll-seal">
                <SealIcon />
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
              </button>
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
      <div ref="mainContentRef" class="main-content">
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
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
  import { useRouter } from 'vue-router';

  // 导入组件 - 异步懒加载
  const DynastiesTimeline = defineAsyncComponent(() => import('./components/Dynasties/index.vue'));
  const HistoricalEvents = defineAsyncComponent(() => import('./components/Events/index.vue'));
  const HistoricalFigures = defineAsyncComponent(() => import('./components/Figures/index.vue'));
  const CulturalHeritage = defineAsyncComponent(() => import('./components/Heritage/index.vue'));

  // 导入图标
  import {
    CulturalHeritageIcon,
    DynasticChangesIcon,
    HistoricalFiguresIcon,
    HistoricalEventsIcon,
    UpArrowIcon,
    BookIcon,
    HomeIcon,
    SealIcon,
  } from './icons/index.ts';

  const router = useRouter();

  // 响应式状态
  const showContent = ref(false);
  const sidebarRolledUp = ref(false);
  const activeNav = ref('dynasties');

  // 导航项（静态数据）
  const navItems = [
    { id: 'dynasties', name: '朝代更迭', icon: DynasticChangesIcon },
    { id: 'events', name: '历史事件', icon: HistoricalEventsIcon },
    { id: 'figures', name: '历史人物', icon: HistoricalFiguresIcon },
    { id: 'heritage', name: '文化遗产', icon: CulturalHeritageIcon },
  ];

  // 导航函数
  const enterContent = () => {
    showContent.value = true;
    document.body.style.overflow = 'hidden';
  };

  const backToHome = () => {
    showContent.value = false;
    document.body.style.overflow = 'hidden';
    sidebarRolledUp.value = false;
  };

  const backToProjectHome = () => {
    router.push('/');
  };

  const toggleRollUp = () => {
    sidebarRolledUp.value = !sidebarRolledUp.value;
  };

  // 生命周期钩子
  onMounted(() => {
    document.body.style.overflow = 'hidden';
  });

  onUnmounted(() => {
    document.body.style.overflow = '';
  });
</script>

<style scoped src="./index.scss" lang="scss"></style>
