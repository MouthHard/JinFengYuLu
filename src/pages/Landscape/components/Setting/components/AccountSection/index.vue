<template>
  <div class="section-content">
    <h2 class="section-title">账户设置</h2>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">个人信息</h3>
          <p class="card-desc">管理你的基本资料</p>
        </div>
        <button class="edit-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          编辑
        </button>
      </div>
      <div class="card-body">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div class="info-content">
              <span class="info-label">用户名</span>
              <span class="info-value">风光摄影爱好者</span>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div class="info-content">
              <span class="info-label">邮箱</span>
              <span class="info-value">user@example.com</span>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div class="info-content">
              <span class="info-label">手机号</span>
              <span class="info-value">138****8888</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">安全设置</h3>
          <p class="card-desc">保护你的账户安全</p>
        </div>
      </div>
      <div class="card-body">
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">修改密码</span>
            <span class="item-desc">定期修改密码可以提高账户安全性</span>
          </div>
          <button class="action-btn primary">修改</button>
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">两步验证</span>
            <span class="item-desc">开启后登录需要额外验证</span>
          </div>
          <CustomSwitch v-model="twoFactorAuth" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">登录设备管理</span>
            <span class="item-desc">查看和管理已登录的设备</span>
          </div>
          <button class="action-btn">查看</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomSwitch from '../../common/CustomSwitch.vue'

const twoFactorAuth = ref(false)
</script>

<style lang="scss" src="./index.scss"></style>