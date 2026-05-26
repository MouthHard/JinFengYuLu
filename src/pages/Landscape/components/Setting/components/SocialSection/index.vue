<template>
  <div class="section-content">
    <h2 class="section-title">社交集成</h2>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">绑定社交账号</h3>
          <p class="card-desc">关联你的社交媒体账号</p>
        </div>
      </div>
      <div class="card-body">
        <div class="social-item linked">
          <div class="social-info">
            <div class="social-icon weibo">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm-1.191-8.798c-3.16.311-5.635 2.238-5.522 4.309.113 2.07 2.925 3.572 6.086 3.263 3.161-.309 5.635-2.237 5.523-4.307-.112-2.073-2.926-3.574-6.087-3.265zM18.05 7.299c-.698-.678-1.794-.641-2.437.087-.644.729-.603 1.89.094 2.569.697.679 1.793.643 2.437-.086.644-.729.603-1.891-.094-2.57zm.15-2.606c-1.527-1.486-4.003-1.451-5.524.079-1.52 1.529-1.48 3.99.047 5.476 1.527 1.486 4.003 1.451 5.524-.079 1.52-1.53 1.48-3.991-.047-5.476z" />
              </svg>
            </div>
            <div>
              <span class="social-name">微博</span>
              <span class="social-status">已绑定：@风光摄影师</span>
            </div>
          </div>
          <button class="action-btn danger">解绑</button>
        </div>
        <div class="social-item">
          <div class="social-info">
            <div class="social-icon wechat">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.756c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.97.983.976.976 0 0 1-.968-.983c0-.542.434-.982.969-.982z" />
              </svg>
            </div>
            <div>
              <span class="social-name">微信</span>
              <span class="social-status">未绑定</span>
            </div>
          </div>
          <button class="action-btn primary">绑定</button>
        </div>
        <div class="social-item">
          <div class="social-info">
            <div class="social-icon ins">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <span class="social-name">Instagram</span>
              <span class="social-status">未绑定</span>
            </div>
          </div>
          <button class="action-btn primary">绑定</button>
        </div>
        <div class="social-item">
          <div class="social-info">
            <div class="social-icon twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </div>
            <div>
              <span class="social-name">Twitter/X</span>
              <span class="social-status">未绑定</span>
            </div>
          </div>
          <button class="action-btn primary">绑定</button>
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">自动分享</h3>
          <p class="card-desc">发布作品时自动分享到社交平台</p>
        </div>
      </div>
      <div class="card-body">
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">微博自动分享</span>
            <span class="item-desc">发布新作品时自动分享到微博</span>
          </div>
          <CustomSwitch v-model="weiboAutoShare" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">Twitter自动分享</span>
            <span class="item-desc">发布新作品时自动分享到Twitter</span>
          </div>
          <CustomSwitch v-model="twitterAutoShare" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomSwitch from '../../common/CustomSwitch.vue'

const weiboAutoShare = ref(false)
const twitterAutoShare = ref(false)
</script>

<style lang="scss" src="./index.scss"></style>