<template>
  <transition name="modal">
    <div v-if="item" class="modal-overlay" @click="$emit('close')">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="$emit('close')">
          <CloseIcon :stroke-width="2" />
        </button>

        <div class="modal-content">
          <div class="modal-media">
            <img v-if="item.type === 'image'" loading="lazy" :src="item.fullImage" :alt="item.title" />
            <video v-else :src="item.videoUrl" controls autoplay></video>
          </div>

          <div class="modal-info">
            <h2 class="modal-title">{{ item.title }}</h2>
            <p class="modal-description">{{ item.description }}</p>

            <div class="modal-meta">
              <div class="meta-row">
                <LocationIcon :stroke-width="2" />
                <span>{{ item.location }}</span>
              </div>
              <div class="meta-row">
                <CalendarIcon :stroke-width="2" />
                <span>{{ item.date }}</span>
              </div>
              <div class="meta-row">
                <CameraIcon :stroke-width="2" />
                <span>{{ item.camera }}</span>
              </div>
            </div>

            <div class="modal-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="modal-stats">
              <div class="stat-item">
                <HeartIcon :stroke-width="2" :filled="item.liked" />
                <span>{{ item.likes }} 喜欢</span>
              </div>
              <div class="stat-item">
                <EyeIcon :stroke-width="2" />
                <span>{{ item.views }} 浏览</span>
              </div>
            </div>

            <div class="modal-actions">
              <button class="action-btn primary" @click="$emit('toggle-like', item)">
                <HeartIcon :stroke-width="2" :filled="item.liked" />
                <span>{{ item.liked ? '已喜欢' : '喜欢' }}</span>
              </button>
              <button class="action-btn" @click="$emit('share', item)">
                <ShareIcon :stroke-width="2" />
                <span>分享</span>
              </button>
              <button class="action-btn" @click="$emit('download', item)">
                <DownloadIcon :stroke-width="2" />
                <span>下载</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { LandscapeItem } from '@/typesOfPages/landscape';
import CloseIcon from '../../../icon/common/CloseIcon.vue';
import HeartIcon from '../../../icon/common/HeartIcon.vue';
import ShareIcon from '../../../icon/common/ShareIcon.vue';
import DownloadIcon from '../../../icon/common/DownloadIcon.vue';
import LocationIcon from '../../../icon/common/LocationIcon.vue';
import CalendarIcon from '../../../icon/common/CalendarIcon.vue';
import EyeIcon from '../../../icon/common/EyeIcon.vue';
import CameraIcon from '../../../icon/common/CameraIcon.vue';

defineProps<{
  item: LandscapeItem | null;
}>();

defineEmits<{
  close: [];
  'toggle-like': [item: LandscapeItem];
  share: [item: LandscapeItem];
  download: [item: LandscapeItem];
}>();
</script>

<style scoped lang="scss" src="./index.scss" />
