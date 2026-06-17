<template>
  <div class="studyroom-card" @click="handleClick">
    <div
      ref="containerRef"
      class="scroll-container"
      :style="visible ? { backgroundImage: `url('${backgroundImage}')` } : {}"
    >
      <!-- 移除按钮 -->
      <button class="remove-btn" :class="typeClass" :title="removeTitle" @click.stop="handleRemove">
        <CloseIcon />
      </button>

      <!-- 类型标签 -->
      <div class="type-badge" :class="typeClass">{{ typeLabel }}</div>

      <!-- 诗词标题 -->
      <h3 class="poem-title">{{ poem.title }}</h3>

      <!-- 朝代和作者 -->
      <div class="meta-info">
        <span class="dynasty-badge">{{ poem.dynasty }}</span>
        <span class="author-name">{{ poem.author }}</span>
      </div>

      <!-- 派别 tags -->
      <div v-if="poem.tags && poem.tags.length > 0" class="poem-tags">
        <span
          v-for="(tag, index) in poem.tags.slice(0, 3)"
          :key="index"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>

      <!-- 诗词内容 -->
      <div class="poem-content">
        <p
          v-for="(line, index) in previewLines"
          :key="index"
          class="content-line"
        >
          {{ line }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import type { Poem } from '@/typesOfPages/aphorism/poem';
import CloseIcon from '../../../../icons/common/CloseIcon.vue';
import { usePoemBackground } from '../../../../composables/usePoemBackground';
import './index.scss';

const props = defineProps<{
  poem: Poem;
  type: 'loved' | 'favorites';
}>();

const emit = defineEmits<{
  (e: 'click', poem: Poem, backgroundImage: string): void;
  (e: 'remove', poemId: string): void;
}>();

const previewLines = computed(() => props.poem.content.slice(0, 6));

const { backgroundImage } = usePoemBackground(props.poem);

// ---- 背景图懒加载：进入视口才加载图片 ----
const containerRef = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!containerRef.value) return;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true;
        observer?.disconnect();
      }
    },
    { rootMargin: '100px' },
  );
  observer.observe(containerRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

// 类型相关
const typeLabel = computed(() =>
  props.type === 'loved' ? '喜爱' : '收藏',
);

const typeClass = computed(() => props.type);

const removeTitle = computed(() =>
  props.type === 'loved' ? '取消喜爱' : '取消收藏',
);

const handleClick = () => {
  emit('click', props.poem, backgroundImage);
};

const handleRemove = () => {
  emit('remove', props.poem.id);
};
</script>
