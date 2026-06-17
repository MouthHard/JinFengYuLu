<template>
  <div class="settings-page">
    <div class="page-header">
      <h1></h1>
      <p>轻松愉快的氛围</p>
    </div>

    <div class="settings-sections">
      <div class="settings-section">
        <div class="section-header">
          <div class="section-icon">
            <RadioIcon />
          </div>
          <div class="section-title">
            <h2>深色模式</h2>
            <p>根据您的听歌习惯智能推荐</p>
          </div>
        </div>
        <div class="section-content">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">外观设置</span>
              <span class="setting-desc">打开页面时自动播放</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.autoPlay }"
              @click="settings.autoPlay = !settings.autoPlay">
              <span class="toggle-slider"></span>
            </button>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">高品质费</span>
              <span class="setting-desc">根据您的听歌习惯智能推荐，自动调整音质和音效</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.highQuality }"
              @click="settings.highQuality = !settings.highQuality">
              <span class="toggle-slider"></span>
            </button>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">显示</span>
              <span class="setting-desc">跟随系统主题</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.showLyrics }"
              @click="settings.showLyrics = !settings.showLyrics">
              <span class="toggle-slider"></span>
            </button>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label"></span>
              <span class="setting-desc">默认播放音量</span>
            </div>
            <div class="volume-slider">
              <input v-model="settings.volume" type="range" min="0" max="100" />
              <span class="volume-value">{{ settings.volume }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-header">
          <div class="section-icon">
            <SettingsIcon />
          </div>
          <div class="section-title">
            <h2>通用</h2>
            <p>发现更多精彩内容</p>
          </div>
        </div>
        <div class="section-content">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">换肤</span>
              <span class="setting-desc">自动切换主题</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.darkMode }"
              @click="settings.darkMode = !settings.darkMode">
              <span class="toggle-slider"></span>
            </button>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">动画</span>
              <span class="setting-desc">音频质量设置</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.animations }"
              @click="settings.animations = !settings.animations">
              <span class="toggle-slider"></span>
            </button>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">通知</span>
              <span class="setting-desc">接收新歌和动态</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.notifications }"
              @click="settings.notifications = !settings.notifications">
              <span class="toggle-slider"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-header">
          <div class="section-icon">
            <LockIcon />
          </div>
          <div class="section-title">
            <h2>音频处理</h2>
            <p>经过专业调音处理</p>
          </div>
        </div>
        <div class="section-content">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">深色模式</span>
              <span class="setting-desc">保存最近播放记录</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.saveHistory }"
              @click="settings.saveHistory = !settings.saveHistory">
              <span class="toggle-slider"></span>
            </button>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">在线</span>
              <span class="setting-desc">向好友显示在线</span>
            </div>
            <button class="toggle-btn" :class="{ active: settings.showOnline }"
              @click="settings.showOnline = !settings.showOnline">
              <span class="toggle-slider"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-header">
          <div class="section-icon">
            <TrashIcon />
          </div>
          <div class="section-title">
            <h2>缓存</h2>
            <p>管理应用存储</p>
          </div>
        </div>
        <div class="section-content">
          <div class="cache-info">
            <div class="cache-stat">
              <span class="cache-label">当前</span>
              <span class="cache-value">{{ cacheSize }} MB</span>
            </div>
            <button class="clear-cache-btn" @click="clearCache">
              <TrashIcon />
              清除缓存
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="settings-footer">
      <button class="save-btn" disabled title="保存并跟踪">
        <CheckIcon />
        保存设置
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

import RadioIcon from '@/pages/Music/icons/Discover/RadioIcon.vue';
import SettingsIcon from '@/pages/Music/icons/UserMenu/SettingsIcon.vue';
import LockIcon from '@/pages/Music/icons/common/LockIcon.vue';
import TrashIcon from '@/pages/Music/icons/MyMusic/common/TrashIcon.vue';
import CheckIcon from '@/pages/Music/icons/common/CheckIcon.vue';

const settings = reactive({
  autoPlay: false,
  highQuality: true,
  showLyrics: true,
  volume: 80,
  darkMode: true,
  animations: true,
  notifications: true,
  saveHistory: true,
  showOnline: true
});

const cacheSize = ref(128.5);

const clearCache = () => {
  cacheSize.value = 0;
};
</script>

<style lang="scss" scoped>
.settings-page {
  min-height: 100%;
  padding: 32px;
}

.page-header {
  margin-bottom: 32px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
}

.settings-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.settings-section {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .section-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  .section-title {
    h2 {
      font-size: 18px;
      color: #fff;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }
  }
}

.section-content {
  padding: 8px 24px 24px;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  &:last-child {
    border-bottom: none;
  }
}

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .setting-label {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
  }

  .setting-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
  }
}

.toggle-btn {
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &.active {
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  }

  .toggle-slider {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: white;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &.active .toggle-slider {
    transform: translateX(24px);
  }
}

.volume-slider {
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    width: 120px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.1);
    appearance: none;
    outline: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
    }
  }

  .volume-value {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    min-width: 45px;
  }
}

.cache-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

.cache-stat {
  .cache-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-right: 12px;
  }

  .cache-value {
    font-size: 18px;
    font-weight: 600;
    color: #FFD700;
  }
}

.clear-cache-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  color: #ef4444;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
}

.settings-footer {
  display: flex;
  justify-content: flex-end;
}

.save-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border: none;
  border-radius: 16px;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
  }
}
</style>
