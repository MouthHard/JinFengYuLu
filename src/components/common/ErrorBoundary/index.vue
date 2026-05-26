<template>
  <div v-if="error" class="error-boundary">
    <div class="error-boundary__stars">
      <span
        v-for="i in 80"
        :key="i"
        class="error-boundary__star"
        :style="starStyle(i)"
      />
      <span
        v-for="i in 20"
        :key="'big-' + i"
        class="error-boundary__star error-boundary__star--big"
        :style="bigStarStyle(i)"
      />
    </div>

    <div class="error-boundary__orbit">
      <div class="error-boundary__orbit-ring"></div>
      <div
        class="error-boundary__orbit-ring error-boundary__orbit-ring--outer"
      ></div>
      <div class="error-boundary__orbit-particle"></div>
      <div
        class="error-boundary__orbit-particle error-boundary__orbit-particle--2"
      ></div>
      <div
        class="error-boundary__orbit-particle error-boundary__orbit-particle--3"
      ></div>
    </div>

    <div class="error-boundary__nebula"></div>

    <div class="error-boundary__scanline"></div>

    <div class="error-boundary__debris">
      <div
        v-for="i in 6"
        :key="i"
        class="error-boundary__debris-item"
        :style="debrisStyle(i)"
      ></div>
    </div>

    <div class="error-boundary__card">
      <div class="error-boundary__card-shimmer"></div>
      <div class="error-boundary__card-border"></div>
      <div
        class="error-boundary__card-corner error-boundary__card-corner--tl"
      ></div>
      <div
        class="error-boundary__card-corner error-boundary__card-corner--tr"
      ></div>
      <div
        class="error-boundary__card-corner error-boundary__card-corner--bl"
      ></div>
      <div
        class="error-boundary__card-corner error-boundary__card-corner--br"
      ></div>

      <div class="error-boundary__icon-wrap">
        <svg class="error-boundary__icon" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#outerGlow)"
            stroke-width="2"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="url(#ringGrad)"
            stroke-width="0.5"
            opacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="32"
            stroke="url(#ringGrad)"
            stroke-width="0.5"
            opacity="0.2"
            stroke-dasharray="4 6"
          />
          <path
            d="M50 28v24"
            stroke="url(#alertGrad)"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle cx="50" cy="56" r="2" fill="url(#alertGrad)">
            <animate
              attributeName="r"
              values="2;2.5;2"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.7;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50"
            cy="40"
            r="8"
            stroke="url(#alertGrad)"
            stroke-width="0.5"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="8;16;8"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <defs>
            <linearGradient id="ringGrad" x1="4" y1="4" x2="96" y2="96">
              <stop offset="0%" stop-color="#42e5f8" />
              <stop offset="50%" stop-color="#818cf8" />
              <stop offset="100%" stop-color="#a855f7" />
            </linearGradient>
            <linearGradient id="alertGrad" x1="48" y1="28" x2="52" y2="58">
              <stop offset="0%" stop-color="#42e5f8" />
              <stop offset="100%" stop-color="#818cf8" />
            </linearGradient>
            <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#42e5f8" />
              <stop offset="100%" stop-color="#a855f7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div class="error-boundary__text-group">
        <h2 class="error-boundary__title">{{ errorTitle }}</h2>
        <p class="error-boundary__desc">{{ errorDescription }}</p>
        <div v-if="errorMessage" class="error-boundary__detail">
          {{ truncatedErrorMessage }}
          <span class="error-boundary__tooltip">{{ errorMessage }}</span>
        </div>
      </div>

      <div class="error-boundary__divider">
        <span class="error-boundary__divider-dot"></span>
        <span class="error-boundary__divider-line"></span>
        <span class="error-boundary__divider-dot"></span>
      </div>

      <div class="error-boundary__info-panel">
        <div class="error-boundary__info-item">
          <span class="error-boundary__info-label">错误代码</span>
          <span class="error-boundary__info-value">{{ errorCode }}</span>
        </div>
        <div class="error-boundary__info-item">
          <span class="error-boundary__info-label">发生时间</span>
          <span class="error-boundary__info-value">{{ errorTime }}</span>
        </div>
      </div>

      <div class="error-boundary__actions">
        <button class="error-boundary__retry" @click="handleRetry">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.006L15.707 6.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 1.414l-.707.707A5.002 5.002 0 005 10a5 5 0 0010 0 1 1 0 112 0 7 7 0 01-11 6.325V17a1 1 0 01-2 0V3a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span>重新加载</span>
        </button>
        <button class="error-boundary__home" @click="goHome">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <span>返回首页</span>
        </button>
      </div>

      <div class="error-boundary__footer">
        <p class="error-boundary__code">{{ errorCode }}</p>
        <p class="error-boundary__hint">如果问题持续存在，请联系技术支持</p>
      </div>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, computed, onErrorCaptured } from 'vue';
import { useRouter } from 'vue-router';

const error = ref<Error | null>(null);
const router = useRouter();

onErrorCaptured((err: Error) => {
  error.value = err;
  console.error('[ErrorBoundary]', err);
  return false;
});

const errorTitle = computed(() => {
  if (
    error.value?.message?.includes('fetch') ||
    error.value?.message?.includes('network')
  ) {
    return '网络连接异常';
  }
  if (error.value?.message?.includes('timeout')) {
    return '请求超时';
  }
  return '页面遇到了问题';
});

const errorDescription = computed(() => {
  if (
    error.value?.message?.includes('fetch') ||
    error.value?.message?.includes('network')
  ) {
    return '无法连接到服务器，请检查网络连接';
  }
  if (error.value?.message?.includes('timeout')) {
    return '服务器响应超时，请稍后重试';
  }
  return '信号丢失，正在尝试重新连接';
});

const errorMessage = computed(() => {
  return error.value?.message || '';
});

const truncatedErrorMessage = computed(() => {
  const msg = error.value?.message;
  if (!msg) return '';
  return msg.substring(0, 60) + (msg.length > 60 ? '...' : '');
});

const errorCode = computed(() => {
  if (
    error.value?.message?.includes('fetch') ||
    error.value?.message?.includes('network')
  ) {
    return 'ERR_NETWORK_ERROR';
  }
  if (error.value?.message?.includes('timeout')) {
    return 'ERR_REQUEST_TIMEOUT';
  }
  return 'ERR_COMPONENT_RENDER';
});

const errorTime = computed(() => {
  return new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
});

const handleRetry = (): void => {
  error.value = null;
};

const goHome = (): void => {
  error.value = null;
  router.push('/');
};

const starStyle = (i: number) => {
  const x = ((i * 7919) % 1000) / 10;
  const y = ((i * 6271) % 1000) / 10;
  const size = ((i * 3571) % 3) + 1;
  const delay = ((i * 4157) % 40) / 10;
  const duration = ((i * 2843) % 30) / 10 + 2;
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

const bigStarStyle = (i: number) => {
  const x = ((i * 8923) % 1000) / 10;
  const y = ((i * 7193) % 1000) / 10;
  const size = ((i * 4327) % 4) + 2;
  const delay = ((i * 5659) % 60) / 10;
  const duration = ((i * 3947) % 40) / 10 + 3;
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

const debrisStyle = (i: number) => {
  const x = 30 + ((i * 137) % 40);
  const y = 20 + ((i * 197) % 60);
  const size = ((i * 101) % 4) + 1;
  const delay = ((i * 71) % 30) / 10;
  const duration = ((i * 47) % 20) / 10 + 4;
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    '--rotation': `${(i * 37) % 360}deg`,
  };
};
</script>

<style lang="scss" src="./index.scss" />