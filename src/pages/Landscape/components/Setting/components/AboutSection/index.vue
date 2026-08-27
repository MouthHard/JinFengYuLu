<template>
  <div class="section-content">
    <h2 class="section-title">关于我们</h2>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">关于平台</h3>
          <p class="card-desc">了解风光摄影社区</p>
        </div>
      </div>
      <div class="card-body">
        <div class="info-row">
          <span class="info-label">平台名称</span>
          <span class="info-value">风光摄影社区</span>
        </div>
        <div class="info-row">
          <span class="info-label">版本号</span>
          <span class="info-value">v2.0.0</span>
        </div>
        <div class="info-row">
          <span class="info-label">创立时间</span>
          <span class="info-value">2024年</span>
        </div>
        <div class="info-row">
          <span class="info-label">用户数量</span>
          <span class="info-value">50,000+</span>
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">服务条款</h3>
          <p class="card-desc">查看相关协议</p>
        </div>
      </div>
      <div class="card-body">
        <div class="terms-list">
          <div 
            v-for="(item, index) in termsItems" 
            :key="index" 
            class="terms-item"
            @click="showToast"
          >
            <div class="terms-icon">
              <svg :viewBox="item.iconViewBox" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="item.iconPath" />
              </svg>
            </div>
            <span class="terms-text">{{ item.text }}</span>
            <div class="terms-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15s1.5-2 4-2 4 2 4 2" />
                <circle cx="12" cy="9" r="3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="terms-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
          <span>条款内容正在完善中，敬请期待</span>
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">联系我们</h3>
          <p class="card-desc">如有问题请联系我们</p>
        </div>
      </div>
      <div class="card-body">
        <div class="info-row">
          <span class="info-label">邮箱</span>
          <span class="info-value">support@landscape.com</span>
        </div>
        <div class="info-row">
          <span class="info-label">微信</span>
          <span class="info-value">Landscape_Support</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'AboutSection'
})

const termsItems = ref([
  { 
    iconViewBox: '0 0 24 24', 
    iconPath: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 14 8 20 8 M16 13l-8 0 M16 17l-8 0 M10 9 9 9 8 9',
    text: '用户协议' 
  },
  { 
    iconViewBox: '0 0 24 24', 
    iconPath: 'M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9',
    text: '隐私政策' 
  },
  { 
    iconViewBox: '0 0 24 24', 
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6',
    text: '帮助中心' 
  }
])

const showToast = () => {
  const toast = document.createElement('div')
  toast.className = 'terms-toast'
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
    <span>条款内容正在完善中</span>
  `
  document.body.appendChild(toast)
  
  setTimeout(() => {
    toast.classList.add('fade-out')
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 2000)
}
</script>

<style lang="scss" src="./index.scss"></style>