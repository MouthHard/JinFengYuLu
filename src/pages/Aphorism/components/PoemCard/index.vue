<template>
  <div class="poem-card" @click="handleClick">
    <div
      class="scroll-container"
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
    >
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
  import { computed } from 'vue';
  import type { Poem } from '../../../../typesOfPages/poetry/poem';
  import './index.scss';

  const props = defineProps<{
    poem: Poem;
  }>();

  const emit = defineEmits<{
    (e: 'click', poem: Poem, backgroundImage: string): void;
    (e: 'tag-click', tag: string): void;
  }>();

  const previewLines = computed(() => {
    return props.poem.content.slice(0, 6);
  });

  // 动态获取 PoemPic 文件夹下的所有图片
  const backgroundImages = computed(() => {
    // 使用 import.meta.glob 匹配所有图片文件
    const imageModules = import.meta.glob(
      '../../../../assets/image/PoemPic/*.webp',
      { eager: true },
    );
    // 提取图片路径并转换为正确的URL
    return Object.values(imageModules).map((module: any) => module.default);
  });

  // 根据诗词 id 计算背景图索引
  const backgroundImage = computed(() => {
    const id = props.poem.id;
    // 使用 id 的哈希值来选择背景图，确保相同 id 总是使用相同背景
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = (hash << 5) - hash + id.charCodeAt(i);
      hash = hash & hash;
    }
    // 取绝对值并对背景图数量取模
    const images = backgroundImages.value;
    if (images.length === 0) {
      // 如果没有图片，返回默认背景
      return '';
    }
    const index = Math.abs(hash) % images.length;
    return images[index];
  });

  const handleClick = () => {
    emit('click', props.poem, backgroundImage.value);
  };
</script>
