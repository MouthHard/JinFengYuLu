<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <div class="header-actions">
              <button
                class="action-button"
                :title="isFavorite ? '取消收藏' : '收藏'"
                @click="toggleFavorite"
              >
                {{ isFavorite ? '❤️' : '🤍' }}
              </button>
              <button class="action-button" title="分享" @click="sharePoem">
                📤
              </button>
            </div>
            <button class="close-button" @click="handleClose">×</button>
          </div>

          <div class="modal-content">
            <div v-if="backgroundImage" class="poem-image">
              <img loading="lazy" :src="backgroundImage" :alt="poem.title" />
              <div class="image-decoration"></div>
            </div>

            <div class="poem-details">
              <div class="poem-meta">
                <span class="dynasty-tag">{{ poem.dynasty }}</span>
                <span class="author-name">{{ poem.author }}</span>
                <span v-if="poem.form" class="form-tag">{{ poem.form }}</span>
              </div>

              <h2 class="poem-title">{{ poem.title }}</h2>

              <div class="poem-content">
                <p
                  v-for="(line, index) in poem.content"
                  :key="index"
                  class="poem-line"
                >
                  {{ line }}
                </p>
              </div>

              <div v-if="poem.tags && poem.tags.length > 0" class="poem-tags">
                <span
                  v-for="(tag, index) in poem.tags"
                  :key="index"
                  class="tag"
                  @click="handleTagClick(tag)"
                >
                  #{{ tag }}
                </span>
              </div>

              <div v-if="poem.annotation" class="poem-annotation">
                <div class="annotation-title">
                  <span class="title-icon">📖</span>
                  <span>注释</span>
                </div>
                <p class="annotation-text">{{ poem.annotation }}</p>
              </div>

              <div v-if="poem.background" class="poem-background">
                <div class="background-title">
                  <span class="title-icon">📜</span>
                  <span>创作背景</span>
                </div>
                <p class="background-text">{{ poem.background }}</p>
              </div>

              <div v-if="poem.appreciation" class="poem-appreciation">
                <div class="appreciation-title">
                  <span class="title-icon">✨</span>
                  <span>赏析</span>
                </div>
                <p class="appreciation-text">{{ poem.appreciation }}</p>
              </div>

              <div v-if="poem.poetIntroduction" class="poet-introduction">
                <div class="poet-title">
                  <span class="title-icon">👤</span>
                  <span>诗人介绍</span>
                </div>
                <p class="poet-text">{{ poem.poetIntroduction }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Poem } from '../../../../typesOfPages/poetry/poem';
  import './index.scss';

  const props = defineProps<{
    visible: boolean;
    poem: Poem;
    backgroundImage: string;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'tag-click', tag: string): void;
    (e: 'favorite-toggle', poemId: string): void;
  }>();

  const isFavorite = ref(false);

  const handleClose = () => {
    emit('close');
  };

  const handleOverlayClick = () => {
    handleClose();
  };

  const handleTagClick = (tag: string) => {
    emit('tag-click', tag);
  };

  const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value;
    emit('favorite-toggle', props.poem.id);
  };

  const sharePoem = () => {
    if (navigator.share) {
      navigator.share({
        title: props.poem.title,
        text: `${props.poem.title} - ${props.poem.author}\n\n${props.poem.content.join('\n')}`,
        url: window.location.href,
      });
    } else {
      const text = `${props.poem.title} - ${props.poem.author}\n\n${props.poem.content.join('\n')}`;
      navigator.clipboard.writeText(text);
      alert('已复制到剪贴板');
    }
  };
</script>
