<template>
  <Transition name="page-change" @after-leave="onAfterLeave">
    <div v-if="visible" class="page-change-overlay">
      <div class="page-change-images">
        <img
          v-for="(src, index) in images"
          :key="index"
          :src="src"
          class="page-change-img"
          :style="{ animationDelay: `${index * 0.08}s` }"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps<{
    images?: string[];
    duration?: number;
  }>();

  const router = useRouter();
  const visible = ref(false);

  const defaultImages = [
    'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/app/Saturn.png',
    'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/app/Venus.png',
    'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/app/earth.png',
    'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/app/Mars.png',
  ];

  const images = props.images?.length ? props.images : defaultImages;

  const emit = defineEmits<{
    (e: 'complete'): void;
  }>();

  watch(
    () => router.currentRoute.value.path,
    (newPath, oldPath) => {
      if (oldPath === '/' && newPath !== '/') {
        visible.value = true;
      }
    },
  );

  function onAfterLeave() {
    emit('complete');
  }

  defineExpose({ visible });
</script>

<style scoped lang="scss">
  .page-change-overlay {
    position: fixed;
    z-index: 9999;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    pointer-events: none;
  }

  .page-change-images {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .page-change-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    opacity: 0;
    transform: scale(0.3) rotate(-180deg);
    animation: img-appear v-bind(animDuration + 'ms') ease-out forwards;
  }

  @keyframes img-appear {
    0% {
      opacity: 0;
      transform: scale(0.3) rotate(-180deg);
    }
    50% {
      opacity: 1;
      transform: scale(1.1) rotate(0deg);
    }
    70% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: scale(1.5) rotate(0deg);
    }
  }

  .page-change-enter-active {
    transition: opacity 0.15s ease-out;
  }

  .page-change-leave-active {
    transition: opacity 0.4s ease-in v-bind(animDuration + 'ms');
  }

  .page-change-enter-from {
    opacity: 0;
  }

  .page-change-leave-to {
    opacity: 0;
  }
</style>
