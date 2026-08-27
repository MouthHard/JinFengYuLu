<template>
  <div class="about-page">
    <!-- Hero Section -->
    <div class="about-hero">
      <div class="hero-bg"></div>
      <div class="hero-glow"></div>
      <div class="floating-particles">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
      <div class="hero-content">
        <div v-once class="logo-container">
          <div class="app-logo">
              <LogoIcon />
            </div>
          <div class="logo-pulse"></div>
          <div class="logo-ring"></div>
        </div>
        <h1 v-once class="app-name">SoundWave</h1>
        <p v-once class="app-tagline">感受音乐的律动，享受生活的每一刻</p>
        <div v-once class="version-badge">
          <span class="version-label">当前版本</span>
          <span class="version-number">v2.0.0</span>
        </div>
        <div class="hero-stats">
          <div v-for="(stat, index) in heroStats" :key="`hero-stat-${index}`" class="hero-stat">
            <div class="stat-num-wrapper">
              <span class="stat-num">{{ stat.value }}</span>
              <span class="stat-unit">{{ stat.unit }}</span>
            </div>
            <span class="stat-text">{{ stat.label }}</span>
          </div>
        </div>
        <div class="hero-actions">
          <button class="btn-primary">立即体验</button>
          <button class="btn-secondary">了解更多</button>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="section-header">
        <div class="section-icon">✨</div>
        <h2 class="section-title">核心功能</h2>
        <p class="section-desc">我们致力于为您提供最优质的音乐体验与服务</p>
      </div>
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="`feature-${index}`"
          class="feature-card"
          @mouseenter="activeFeature = index"
          @mouseleave="activeFeature = -1"
        >
          <div class="card-glow" :style="{ background: feature.gradient }"></div>
          <div class="feature-icon" :style="{ background: feature.gradient }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <component :is="feature.icon" />
            </svg>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
          <div class="feature-highlight">{{ feature.highlight }}</div>
          <div class="feature-shine"></div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-showcase">
      <div class="stats-bg"></div>
      <div class="stats-content">
        <h2 class="stats-title">数据见证</h2>
        <p class="stats-desc">每一个数字背后，都是我们对音乐品质的执着追求</p>
        <div class="stats-grid">
          <div v-for="(stat, index) in showcaseStats" :key="`showcase-stat-${index}`" class="stat-item">
            <div class="stat-icon-wrapper">
              <component :is="stat.icon" class="stat-icon" />
            </div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-bar">
              <div class="stat-bar-fill" :style="{ width: getStatWidth(stat.value) }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div class="tech-section">
      <div class="section-header">
        <div class="section-icon">💻</div>
        <h2 class="section-title">技术栈</h2>
        <p class="section-desc">现代化技术栈，打造卓越的用户体验</p>
      </div>
      <div class="tech-grid">
        <div v-for="(tech, index) in techStack" :key="`tech-${index}`" class="tech-card">
          <div class="tech-logo" :style="{ background: tech.color }">
            {{ tech.icon }}
          </div>
          <div class="tech-info">
            <div class="tech-name">{{ tech.name }}</div>
            <div class="tech-desc">{{ tech.desc }}</div>
          </div>
          <div class="tech-rating">
            <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= tech.rating }"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
      <div class="section-header">
        <div class="section-icon"><UsersIcon /></div>
        <h2 class="section-title">核心团队</h2>
        <p class="section-desc">一群热爱音乐与技术的开发者</p>
      </div>
      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="`team-${index}`" class="team-card">
          <div class="team-card-inner">
            <div class="team-avatar" :style="{ background: member.gradient }">
              <UserIcon />
            </div>
            <div class="team-info">
              <div class="team-name">{{ member.name }}</div>
              <div class="team-role">{{ member.role }}</div>
              <div class="team-social">
                <span class="social-icon"></span>
                <span class="social-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <div class="contact-card">
        <div class="contact-header">
          <div class="contact-icon">📬</div>
          <h2>联系我们</h2>
          <p>有问题或建议？我们随时欢迎您的来信</p>
        </div>
        <div class="contact-methods">
          <div v-for="(method, index) in contactMethods" :key="`contact-${index}`" class="contact-item">
            <div class="contact-icon-bg" :style="{ background: method.gradient }">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <component :is="method.icon" />
              </svg>
            </div>
            <div class="contact-info">
              <div class="contact-label">{{ method.label }}</div>
              <div class="contact-value">{{ method.value }}</div>
            </div>
            <div class="contact-arrow">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="about-footer">
      <div class="footer-content">
        <div class="footer-top">
          <div class="footer-brand">
            <LogoIcon />
            <span>SoundWave</span>
          </div>
          <div class="footer-links-section">
            <div class="footer-links-group">
              <h4>产品服务</h4>
              <a href="#">音乐播放</a>
              <a href="#">歌单推荐</a>
              <a href="#">会员中心</a>
              <a href="#">VIP特权</a>
            </div>
            <div class="footer-links-group">
              <h4>支持帮助</h4>
              <a href="#">帮助中心</a>
              <a href="#">意见反馈</a>
              <a href="#">用户协议</a>
              <a href="#">隐私政策</a>
            </div>
            <div class="footer-links-group">
              <h4>关于我们</h4>
              <a href="#">公司介绍</a>
              <a href="#">加入我们</a>
              <a href="#">商务合作</a>
              <a href="#">联系我们</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>© 2026 SoundWave. All rights reserved.</p>
            <p>用 ❤️ 打造的音乐平台</p>
          </div>
          <div class="footer-social">
            <span class="social-btn">微信</span>
            <span class="social-btn">微博</span>
            <span class="social-btn">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import LogoIcon from '../../icons/common/LogoIcon.vue';
import UserIcon from '../../icons/common/UserIcon.vue';
import ArrowRightIcon from '../../icons/common/ArrowRightIcon.vue';
import UsersIcon from '../../icons/common/UsersIcon.vue';
import MusicNoteIcon from '../../icons/Profile/common/MusicNoteIcon.vue';
import ChartIcon from '../../icons/common/ChartIcon.vue';
import TrophyIcon from '../../icons/common/TrophyIcon.vue';

const activeFeature = ref(-1);

const heroStats = [
  { value: '50', unit: 'M+', label: '活跃用户' },
  { value: '100', unit: 'M+', label: '音乐库' },
  { value: '99.9', unit: '%', label: '服务可用率' }
];

const features = [
  {
    icon: () => h('polygon', { points: '5 3 19 12 5 21 5 3' }),
    title: '智能推荐',
    desc: '基于你的听歌习惯，智能推荐你喜欢的音乐',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    highlight: '个性化推荐'
  },
  {
    icon: () => h('path', { d: 'M9 18V5l12-2v13' }),
    title: '高品质音质',
    desc: '支持无损音质播放，还原最真实的音乐细节',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
    highlight: '无损音质'
  },
  {
    icon: () => h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' }),
    title: '同步歌词',
    desc: '实时显示歌词，跟随音乐节奏一起歌唱',
    gradient: 'linear-gradient(135deg, #A8E6CF 0%, #FF8B94 100%)',
    highlight: '逐字歌词'
  },
  {
    icon: () => h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }),
    title: '个性歌单',
    desc: '创建专属于你的歌单，收藏喜欢的音乐',
    gradient: 'linear-gradient(135deg, #DDA0DD 0%, #98D8C8 100%)',
    highlight: '无限歌单'
  },
  {
    icon: () => h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' }),
    title: '社交分享',
    desc: '与好友分享喜欢的音乐，一起发现好歌',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)',
    highlight: '一键分享'
  },
  {
    icon: () => h('path', { d: 'M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z' }),
    title: '离线缓存',
    desc: '下载喜欢的音乐，随时随地畅听无忧',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    highlight: '离线收听'
  }
];

const showcaseStats = [
  { icon: UsersIcon, value: '50M+', label: '活跃用户' },
  { icon: MusicNoteIcon, value: '100M+', label: '音乐库' },
  { icon: ChartIcon, value: '10B+', label: '播放次数' },
  { icon: TrophyIcon, value: '500+', label: '合作伙伴' }
];

const techStack = [
  { icon: 'V', name: 'Vue 3', desc: '渐进式JavaScript框架', color: 'linear-gradient(135deg, #42b883 0%, #35495e 100%)', rating: 5 },
  { icon: 'TS', name: 'TypeScript', desc: '类型安全的JavaScript超集', color: 'linear-gradient(135deg, #3178C6 0%, #000 100%)', rating: 5 },
  { icon: 'S', name: 'SCSS', desc: '强大的CSS预处理器', color: 'linear-gradient(135deg, #CC6699 0%, #666699 100%)', rating: 4 },
  { icon: 'Vite', name: 'Vite', desc: '下一代前端构建工具', color: 'linear-gradient(135deg, #646CFF 0%, #43853D 100%)', rating: 5 }
];

const teamMembers = [
  { name: '张明', role: '首席技术官', gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)' },
  { name: '李华', role: '产品总监', gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)' },
  { name: '王芳', role: '设计主管', gradient: 'linear-gradient(135deg, #A8E6CF 0%, #FF8B94 100%)' },
  { name: '陈伟', role: '后端架构', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
];

const contactMethods = [ 
  { 
    icon: () => h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    label: '邮箱',
    value: 'support@soundwave.com',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
  },
  { 
    icon: () => h('circle', { cx: '12', cy: '12', r: '10' }),
    label: '官网',
    value: 'www.soundwave.com',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
  },
  { 
    icon: () => h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
    label: '地址',
    value: '中国 · 深圳',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
];

const getParticleStyle = (index: number) => {
  const left = (index * 5) % 100;
  const delay = (index * 0.3) % 5;
  const size = 4 + (index % 6);
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    width: `${size}px`,
    height: `${size}px`
  };
};

const getStatWidth = (value: string) => {
  const num = parseFloat(value.replace(/[^\d.]/g, ''));
  if (num >= 1000000000) return '95%';
  if (num >= 100000000) return '90%';
  if (num >= 1000000) return '85%';
  return '75%';
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
