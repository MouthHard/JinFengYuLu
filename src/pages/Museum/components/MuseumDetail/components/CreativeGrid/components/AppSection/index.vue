<template>
  <!-- 文创产品App区 -->
  <div class="app-section">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">📱</span>
        文创产品App
      </h3>
    </div>

    <div class="app-content">
      <!-- 主标题区 -->
      <div class="main-title-area">
        <h2 class="main-title">
          <span class="highlight">立即下载</span>
          <span class="sub">开启你的文创之旅</span>
        </h2>
      </div>

      <!-- 下载渠道区 -->
      <div class="download-area">
        <div class="download-grid">
          <button
            v-for="channel in downloadChannels"
            :key="channel.id"
            :class="['download-btn', channel.type]"
          >
            <div class="btn-icon">{{ channel.icon }}</div>
            <div class="btn-content">
              <span class="btn-label">{{ channel.label }}</span>
              <span class="btn-name">{{ channel.name }}</span>
            </div>
          </button>
        </div>

        <!-- 更多下载方式 -->
        <div class="more-options">
          <button
            class="option-btn"
            v-for="option in moreOptions"
            :key="option.id"
          >
            <span class="option-icon">{{ option.icon }}</span>
            <span class="option-text">{{ option.text }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const downloadChannels = ref([
  {
    id: 1,
    name: "App Store",
    label: "Download on the",
    icon: "🍎",
    type: "ios",
  },
  {
    id: 2,
    name: "Google Play",
    label: "GET IT ON",
    icon: "▶",
    type: "android",
  },
  {
    id: 3,
    name: "华为应用市场",
    label: "下载于",
    icon: "📱",
    type: "huawei",
  },
  {
    id: 4,
    name: "小米应用商店",
    label: "下载于",
    icon: "🛍️",
    type: "xiaomi",
  },
  {
    id: 5,
    name: "OPPO软件商店",
    label: "下载于",
    icon: "🔵",
    type: "oppo",
  },
  {
    id: 6,
    name: "vivo应用商店",
    label: "下载于",
    icon: "💙",
    type: "vivo",
  },
  {
    id: 7,
    name: "应用宝",
    label: "下载于",
    icon: "📲",
    type: "yingyongbao",
  },
  {
    id: 8,
    name: "百度手机助手",
    label: "下载于",
    icon: "🐻",
    type: "baidu",
  },
  {
    id: 9,
    name: "360手机助手",
    label: "下载于",
    icon: "⭕",
    type: "qihu",
  },
  {
    id: 10,
    name: "豌豆荚",
    label: "下载于",
    icon: "🌱",
    type: "wandoujia",
  },
  {
    id: 11,
    name: "三星应用商店",
    label: "Download on",
    icon: "⭐",
    type: "samsung",
  },
  {
    id: 12,
    name: "魅族应用商店",
    label: "下载于",
    icon: "🦋",
    type: "meizu",
  },
]);

const moreOptions = ref([
  { id: 1, icon: "📷", text: "扫码下载" },
  { id: 2, icon: "💻", text: "PC端下载" },
  { id: 3, icon: "📦", text: "APK直接下载" },
]);
</script>

<style lang="scss" scoped src="./index.scss"></style>
