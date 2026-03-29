<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-overlay" v-if="visible" @click="handleOverlayClick">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <div class="header-actions">
              <button
                class="action-button"
                @click="toggleFavorite"
                :title="isFavorite ? '取消收藏' : '收藏'"
              >
                {{ isFavorite ? "❤️" : "🤍" }}
              </button>
              <button class="action-button" @click="sharePoem" title="分享">
                📤
              </button>
            </div>
            <button class="close-button" @click="handleClose">×</button>
          </div>

          <div class="modal-content">
            <div class="poem-image" v-if="backgroundImage">
              <img :src="backgroundImage" :alt="poem.title" />
              <div class="image-decoration"></div>
            </div>

            <div class="poem-details">
              <div class="poem-meta">
                <span class="dynasty-tag">{{ poem.dynasty }}</span>
                <span class="author-name">{{ poem.author }}</span>
                <span class="form-tag" v-if="poem.form">{{ poem.form }}</span>
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

              <div class="poem-tags" v-if="poem.tags && poem.tags.length > 0">
                <span
                  v-for="(tag, index) in poem.tags"
                  :key="index"
                  class="tag"
                  @click="handleTagClick(tag)"
                >
                  #{{ tag }}
                </span>
              </div>

              <div class="poem-annotation" v-if="poem.annotation">
                <div class="annotation-title">
                  <span class="title-icon">📖</span>
                  <span>注释</span>
                </div>
                <p class="annotation-text">{{ poem.annotation }}</p>
              </div>

              <div class="poem-background" v-if="poem.background">
                <div class="background-title">
                  <span class="title-icon">📜</span>
                  <span>创作背景</span>
                </div>
                <p class="background-text">{{ poem.background }}</p>
              </div>

              <div class="poem-appreciation" v-if="poem.appreciation">
                <div class="appreciation-title">
                  <span class="title-icon">✨</span>
                  <span>赏析</span>
                </div>
                <p class="appreciation-text">{{ poem.appreciation }}</p>
              </div>

              <div class="poet-introduction" v-if="poem.poetIntroduction">
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
import { ref } from "vue";
import type { Poem } from "../../../../types/poetry/poem";
import "./index.scss";

const props = defineProps<{
  visible: boolean;
  poem: Poem;
  backgroundImage: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "tag-click", tag: string): void;
  (e: "favorite-toggle", poemId: string): void;
}>();

const isFavorite = ref(false);

const handleClose = () => {
  emit("close");
};

const handleOverlayClick = () => {
  handleClose();
};

const handleTagClick = (tag: string) => {
  emit("tag-click", tag);
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  emit("favorite-toggle", props.poem.id);
};

const sharePoem = () => {
  if (navigator.share) {
    navigator.share({
      title: props.poem.title,
      text: `${props.poem.title} - ${props.poem.author}\n\n${props.poem.content.join("\n")}`,
      url: window.location.href,
    });
  } else {
    const text = `${props.poem.title} - ${props.poem.author}\n\n${props.poem.content.join("\n")}`;
    navigator.clipboard.writeText(text);
    alert("已复制到剪贴板");
  }
};
</script>
