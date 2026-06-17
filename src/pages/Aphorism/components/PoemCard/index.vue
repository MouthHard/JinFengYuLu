<template>
  <div ref="cardRef" class="poem-card" @click="handleClick">
    <div class="scroll-container" :style="{ backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none' }">
      <div v-if="!isLoaded" class="skeleton-placeholder">
        <div class="skeleton-title"></div>
        <div class="skeleton-meta"></div>
        <div class="skeleton-content"></div>
      </div>

      <template v-else>
        <h3 class="poem-title">{{ poem.title }}</h3>

        <div class="meta-info">
          <span class="dynasty-badge">{{ poem.dynasty }}</span>
          <span class="author-name">{{ poem.author }}</span>
        </div>

        <div v-if="poem.tags && poem.tags.length > 0" class="poem-tags">
          <span v-for="(tag, index) in poem.tags.slice(0, 3)" :key="index" class="tag">
            {{ tag }}
          </span>
        </div>

        <div class="poem-content">
          <p v-for="(line, index) in previewLines" :key="index" class="content-line">
            {{ line }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Poem } from '../../../../typesOfPages/poetry/poem';
import { useBackgroundImage } from '../../composables/useBackgroundImages';
import './index.scss';

const props = defineProps<{
  poem: Poem;
}>();

const emit = defineEmits<{
  (e: 'click', poem: Poem, backgroundImage: string): void;
  (e: 'tag-click', tag: string): void;
}>();

const cardRef = ref<HTMLElement>();
const backgroundImage = ref<string>('');
const isLoaded = ref(false);

const previewLines = computed(() => {
  return props.poem.content.slice(0, 6);
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isLoaded.value) {
        backgroundImage.value = useBackgroundImage(props.poem.id);
        isLoaded.value = true;
        observer.disconnect();
      }
    },
    { rootMargin: '100px' }
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

const handleClick = () => {
  emit('click', props.poem, backgroundImage.value);
};
</script>

<style scoped lang="scss">
.skeleton-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.skeleton-title {
  width: 60%;
  height: 28px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-meta {
  width: 40%;
  height: 20px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-content {
  flex: 1;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.15) 100%);
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  border-radius: 4px;
}

@keyframes skeleton-pulse {

  0%,
  100% {
    background-position: 200% 0;
  }

  50% {
    background-position: -200% 0;
  }
}
</style>
