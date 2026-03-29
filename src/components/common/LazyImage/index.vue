<template>
  <div ref="container" class="lazy-image">
    <img
      v-if="isVisible"
      :src="currentSrc"
      :alt="alt"
      :class="{ loaded: isLoaded, error: hasError }"
      loading="lazy"
      @load="onLoad"
      @error="onError"
    />
    <div v-else class="lazy-image__placeholder">
      <slot name="placeholder">
        <div class="lazy-image__default-placeholder">
          <span class="lazy-image__loading-icon">📷</span>
        </div>
      </slot>
    </div>
    <div v-if="hasError" class="lazy-image__error">
      <slot name="error">
        <span>加载失败</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

interface Props {
  src: string;
  alt?: string;
  threshold?: number;
  rootMargin?: string;
  placeholderSrc?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: "",
  threshold: 0.1,
  rootMargin: "0px",
  placeholderSrc: "",
});

const emit = defineEmits<{
  (e: "load", event: Event): void;
  (e: "error", event: Event): void;
  (e: "visible"): void;
}>();

const isVisible = ref(false);
const isLoaded = ref(false);
const hasError = ref(false);
const container = ref<HTMLElement>();

let observer: IntersectionObserver | null = null;

const currentSrc = computed(() => {
  if (props.placeholderSrc && !isLoaded.value) {
    return props.placeholderSrc;
  }
  return props.src;
});

onMounted(() => {
  if ("IntersectionObserver" in window && container.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            emit("visible");
            observer?.disconnect();
          }
        });
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin,
      },
    );
    observer.observe(container.value);
  } else {
    isVisible.value = true;
  }
});

onUnmounted(() => {
  observer?.disconnect();
});

const onLoad = (event: Event) => {
  isLoaded.value = true;
  hasError.value = false;
  emit("load", event);
};

const onError = (event: Event) => {
  hasError.value = true;
  emit("error", event);
};
</script>

<style scoped lang="scss">
.lazy-image {
  position: relative;
  display: inline-block;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.loaded {
      opacity: 1;
    }

    &.error {
      opacity: 0;
    }
  }

  &__placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  }

  &__default-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }

  &__loading-icon {
    font-size: 24px;
    animation: pulse 1.5s ease-in-out infinite;
  }

  &__error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    color: #999;
    font-size: 14px;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }
}
</style>
