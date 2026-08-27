<template>
  <div class="section-content">
    <h2 class="section-title">通知设置</h2>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">推送通知</h3>
          <p class="card-desc">管理你的通知偏好设置</p>
        </div>
      </div>
      <div class="card-body">
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">新粉丝</span>
            <span class="item-desc">当有人关注你时发送通知</span>
          </div>
          <CustomSwitch v-model="newFollower" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">点赞和评论</span>
            <span class="item-desc">当你的作品被点赞或评论时</span>
          </div>
          <CustomSwitch v-model="likeComment" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">系统消息</span>
            <span class="item-desc">接收平台重要通知</span>
          </div>
          <CustomSwitch v-model="systemMessage" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">作品推荐</span>
            <span class="item-desc">接收精选作品推荐</span>
          </div>
          <CustomSwitch v-model="recommendation" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">邮件通知</span>
            <span class="item-desc">将重要通知发送到邮箱</span>
          </div>
          <CustomSwitch v-model="emailNotification" />
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">互动提醒</h3>
          <p class="card-desc">设置互动相关的提醒</p>
        </div>
      </div>
      <div class="card-body">
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">@ 提及</span>
            <span class="item-desc">当有人@你时发送通知</span>
          </div>
          <CustomSwitch v-model="mention" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">私信消息</span>
            <span class="item-desc">接收私信消息通知</span>
          </div>
          <CustomSwitch v-model="directMessage" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">合作邀请</span>
            <span class="item-desc">接收商业合作邀请</span>
          </div>
          <CustomSwitch v-model="collaboration" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomSwitch from '../../common/CustomSwitch.vue'

const newFollower = ref(true)
const likeComment = ref(true)
const systemMessage = ref(true)
const recommendation = ref(false)
const emailNotification = ref(true)
const mention = ref(true)
const directMessage = ref(true)
const collaboration = ref(false)
</script>

<style lang="scss" src="./index.scss"></style>