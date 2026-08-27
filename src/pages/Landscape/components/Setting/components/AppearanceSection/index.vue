<template>
  <div class="section-content">
    <h2 class="section-title">外观设置</h2>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">主题模式</h3>
          <p class="card-desc">选择你喜欢的界面主题</p>
        </div>
      </div>
      <div class="card-body">
        <div class="theme-options">
          <label class="theme-option">
            <input type="radio" name="theme" value="dark" checked />
            <div class="option-content">
              <div class="option-icon dark-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <span class="option-label">深色模式</span>
            </div>
          </label>
          <label class="theme-option">
            <input type="radio" name="theme" value="light" />
            <div class="option-content">
              <div class="option-icon light-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <span class="option-label">浅色模式</span>
            </div>
          </label>
          <label class="theme-option">
            <input type="radio" name="theme" value="auto" />
            <div class="option-content">
              <div class="option-icon auto-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span class="option-label">跟随系统</span>
            </div>
          </label>
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">显示设置</h3>
          <p class="card-desc">自定义界面显示效果</p>
        </div>
      </div>
      <div class="card-body">
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">卡片阴影</span>
            <span class="item-desc">为卡片添加立体阴影效果</span>
          </div>
          <CustomSwitch v-model="cardShadow" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">动画效果</span>
            <span class="item-desc">启用页面过渡和交互动画</span>
          </div>
          <CustomSwitch v-model="animationEffect" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">紧凑模式</span>
            <span class="item-desc">减少间距以显示更多内容</span>
          </div>
          <CustomSwitch v-model="compactMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomSwitch from '../../common/CustomSwitch.vue'

const cardShadow = ref(true)
const animationEffect = ref(true)
const compactMode = ref(false)
</script>

<style lang="scss" src="./index.scss"></style>