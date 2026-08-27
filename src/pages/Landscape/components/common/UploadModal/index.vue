<template>
  <transition name="modal">
    <div v-if="visible" class="modal-overlay" @click="$emit('close')">
      <div class="upload-modal" @click.stop>
        <!-- 背景装饰 -->
        <div class="modal-bg-decoration">
          <div class="glow-orb orb-1"></div>
          <div class="glow-orb orb-2"></div>
          <div class="glow-orb orb-3"></div>
          <div class="grid-pattern"></div>
        </div>

        <button class="modal-close" @click="$emit('close')">
          <CloseIcon :stroke-width="2" />
        </button>

        <!-- 头部 -->
        <div class="modal-header">
          <div class="header-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>创作中心</span>
          </div>
          <h2 class="upload-title">上传风景作品</h2>
          <p class="upload-subtitle">分享你眼中的壮丽世界，让更多人看到你的摄影作品</p>
        </div>

        <!-- 上传区域 -->
        <div class="upload-area">
          <div class="upload-area-glow"></div>
          <div class="upload-icon">
            <div class="icon-ring"></div>
            <div class="icon-pulse"></div>
            <UploadIcon :stroke-width="2" />
          </div>
          <p class="upload-text">拖拽文件到此处或点击上传</p>
          <p class="upload-hint">支持以下格式</p>
          <div class="format-badges">
            <span class="format-badge">JPG</span>
            <span class="format-badge">PNG</span>
            <span class="format-badge">WEBP</span>
            <span class="format-badge video">MP4</span>
          </div>
          <input type="file" accept="image/*,video/*" @change="handleUpload" />
        </div>

        <!-- 底部信息 -->
        <div class="modal-footer">
          <div class="footer-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>单次最大 50MB</span>
          </div>
          <div class="footer-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>原创内容受保护</span>
          </div>
          <div class="footer-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>上传即同意社区规范</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import CloseIcon from '../../../icon/common/CloseIcon.vue';
import UploadIcon from '../../../icon/header/UploadIcon.vue';
import { showMessage } from '@/utils/landscape';

defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  close: [];
  upload: [file: File];
}>();

const MAX_FILE_SIZE = 50 * 1024 * 1024;

const handleUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    if (file.size > MAX_FILE_SIZE) {
      showMessage.error('文件大小不能超过 50MB');
      target.value = '';
      return;
    }
    emit('upload', file);
    target.value = '';
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />
