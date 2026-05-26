<template>
  <transition name="modal">
    <div v-if="visible" class="modal-overlay" @click="$emit('close')">
      <div class="upload-modal" @click.stop>
        <button class="modal-close" @click="$emit('close')">
          <CloseIcon :stroke-width="2" />
        </button>

        <h2 class="upload-title">上传风景作品</h2>

        <div class="upload-area">
          <div class="upload-icon">
            <UploadIcon :stroke-width="2" />
          </div>
          <p class="upload-text">拖拽文件到此处或点击上传</p>
          <p class="upload-hint">支持 JPG、PNG、WEBP、MP4 格式</p>
          <input type="file" accept="image/*,video/*" @change="handleUpload" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import CloseIcon from '../../../icon/common/CloseIcon.vue';
import UploadIcon from '../../../icon/header/UploadIcon.vue';

defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  close: [];
  upload: [file: File];
}>();

const handleUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    emit('upload', file);
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />
