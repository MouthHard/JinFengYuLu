<template>
  <div class="theme-settings-page">
    <div class="page-header">
      <div class="header-content">
        <div class="header-icon">
          <SunIcon />
        </div>
        <h1>主题</h1>
        <p>选择你喜欢的外观</p>
      </div>
    </div>

    <div class="theme-content">
      <div class="section">
        <h2 class="section-title">预设</h2>
        <div class="theme-grid">
          <div v-for="theme in themes" :key="theme.id" :class="['theme-card', { active: currentTheme === theme.id }]"
            @click="selectTheme(theme)">
            <div class="theme-preview">
              <div class="preview-header" :style="{ background: theme.primaryGradient }"></div>
              <div class="preview-body" :style="{ background: theme.bgPrimary }">
                <div class="preview-avatar" :style="{ background: theme.accentColor }"></div>
                <div class="preview-content">
                  <div class="preview-line" :style="{ background: theme.textSecondary }"></div>
                  <div class="preview-line short" :style="{ background: theme.textSecondary }"></div>
                </div>
              </div>
            </div>
            <div class="theme-info">
              <h3>{{ theme.name }}</h3>
              <p>{{ theme.description }}</p>
            </div>
            <div v-if="currentTheme === theme.id" class="check-mark">
              <CheckIcon :stroke-width="3" />
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">背景</h2>
        <div class="effect-grid">
          <button v-for="effect in bgEffects" :key="effect.id"
            :class="['effect-card', { active: currentEffect === effect.id }]" @click="selectEffect(effect)">
            <div class="effect-icon" :class="effect.id">
              <CircleIcon v-if="effect.id === 'none'" :stroke-width="2" />
              <GradientIcon v-else-if="effect.id === 'gradient'" :stroke-width="2" />
              <DotsIcon v-else-if="effect.id === 'particles'" :stroke-width="2" />
              <XIcon v-else :stroke-width="2" />
            </div>
            <span>{{ effect.name }}</span>
          </button>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">自定义</h2>
        <div class="color-pickers">
          <div class="color-item">
            <label></label>
            <div class="color-input-wrapper">
              <input v-model="customColors.primary" type="color" @change="applyCustomTheme" />
              <span class="color-value">{{ customColors.primary }}</span>
            </div>
          </div>
          <div class="color-item">
            <label>次色</label>
            <div class="color-input-wrapper">
              <input v-model="customColors.secondary" type="color" @change="applyCustomTheme" />
              <span class="color-value">{{ customColors.secondary }}</span>
            </div>
          </div>
          <div class="color-item">
            <label>强调</label>
            <div class="color-input-wrapper">
              <input v-model="customColors.accent" type="color" @change="applyCustomTheme" />
              <span class="color-value">{{ customColors.accent }}</span>
            </div>
          </div>
        </div>
        <button class="apply-btn" @click="applyCustomTheme">
          搴旂敤鑷畾涔夐鑹? </button>
      </div>

      <div class="section">
        <h2 class="section-title">图标</h2>
        <div class="style-grid">
          <button v-for="style in iconStyles" :key="style.id"
            :class="['style-card', { active: currentIconStyle === style.id }]" @click="selectIconStyle(style)">
            <div class="style-preview">
              <DynamicPathIcon :view-box="style.viewBox" :path="style.path" :stroke-width="style.strokeWidth" />
            </div>
            <span>{{ style.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SunIcon from '@/pages/Music/icons/ThemeSettings/SunIcon.vue';
import CheckIcon from '@/pages/Music/icons/common/CheckIcon.vue';
import CircleIcon from '@/pages/Music/icons/ThemeSettings/CircleIcon.vue';
import GradientIcon from '@/pages/Music/icons/ThemeSettings/GradientIcon.vue';
import DotsIcon from '@/pages/Music/icons/MyMusic/common/DotsIcon.vue';
import XIcon from '@/pages/Music/icons/ThemeSettings/XIcon.vue';
import DynamicPathIcon from '@/pages/Music/icons/common/DynamicPathIcon.vue';

interface Theme {
  id: string;
  name: string;
  description: string;
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecondary: string;
  accentColor: string;
  primaryGradient: string;
}

interface Effect {
  id: string;
  name: string;
}

interface IconStyle {
  id: string;
  name: string;
  viewBox: string;
  stroke: string;
  strokeWidth: number;
  path: string;
}

const currentTheme = ref('sunset');
const currentEffect = ref('gradient');
const currentIconStyle = ref('rounded');

const themes = ref<Theme[]>([
  {
    id: 'sunset',
    name: '日落暖橙',
    description: '温暖的红色调',
    bgPrimary: '#0a0a0f',
    bgSecondary: '#1a1018',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    accentColor: '#FF6B6B',
    primaryGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFA500 100%)',
  },
  {
    id: 'ocean',
    name: '深海蓝调',
    description: '清爽的蓝色主调',
    bgPrimary: '#0a0f1a',
    bgSecondary: '#0f1525',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    accentColor: '#4ECDC4',
    primaryGradient: 'linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)',
  },
  {
    id: 'forest',
    name: '森林绿意',
    description: '自然的绿色主调',
    bgPrimary: '#0a100f',
    bgSecondary: '#0f1a18',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    accentColor: '#4CAF50',
    primaryGradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
  },
  {
    id: 'purple',
    name: '神秘紫韵',
    description: '神秘的紫色调',
    bgPrimary: '#100a1a',
    bgSecondary: '#1a0f25',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    accentColor: '#9C27B0',
    primaryGradient: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)',
  },
  {
    id: 'minimal',
    name: '极简黑白',
    description: '简约的黑白风格',
    bgPrimary: '#1a1a1a',
    bgSecondary: '#252525',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.5)',
    accentColor: '#607D8B',
    primaryGradient: 'linear-gradient(135deg, #607D8B 0%, #9E9E9E 100%)',
  },
  {
    id: 'neon',
    name: '霓虹之夜',
    description: '炫目的霓虹效果',
    bgPrimary: '#0a0015',
    bgSecondary: '#150025',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    accentColor: '#00FF88',
    primaryGradient: 'linear-gradient(135deg, #00FF88 0%, #00D4FF 100%)',
  },
]);

const bgEffects = ref<Effect[]>([
  { id: 'none', name: '无效果' },
  { id: 'gradient', name: '渐变背景' },
  { id: 'particles', name: '粒子效果' },
  { id: 'grid', name: '网格线条' },
]);

const iconStyles = ref<IconStyle[]>([
  {
    id: 'rounded',
    name: '圆角',
    viewBox: '0 0 24 24',
    stroke: '#FFD700',
    strokeWidth: 2,
    path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
  },
  {
    id: 'sharp',
    name: '锐利',
    viewBox: '0 0 24 24',
    stroke: '#FFD700',
    strokeWidth: 1.5,
    path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
  },
  {
    id: 'bold',
    name: '粗体',
    viewBox: '0 0 24 24',
    stroke: '#FFD700',
    strokeWidth: 3,
    path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
  },
]);

const customColors = reactive({
  primary: '#FFD700',
  secondary: '#87CEEB',
  accent: '#FF6B6B',
});

const selectTheme = (theme: Theme) => {
  currentTheme.value = theme.id;
};

const selectEffect = (effect: Effect) => {
  currentEffect.value = effect.id;
};

const selectIconStyle = (style: IconStyle) => {
  currentIconStyle.value = style.id;
};

const applyCustomTheme = () => {
  const style = document.documentElement.style;
  style.setProperty('--custom-primary', customColors.primary);
  style.setProperty('--custom-secondary', customColors.secondary);
  style.setProperty('--custom-accent', customColors.accent);
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
