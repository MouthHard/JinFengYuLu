<template>
  <div class="pagination">
    <button
      class="pagination-button"
      :disabled="currentPage === 1"
      title="上一页"
      @click="goToPage(currentPage - 1)"
    >
      <span class="button-icon">‹</span>
      <span class="button-text">上一页</span>
    </button>

    <div class="pagination-pages">
      <button
        v-for="page in visiblePages"
        :key="page"
        class="page-button"
        :class="{ active: page === currentPage, ellipsis: page === '...' }"
        :disabled="page === '...'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="pagination-button"
      :disabled="currentPage === totalPages"
      title="下一页"
      @click="goToPage(currentPage + 1)"
    >
      <span class="button-text">下一页</span>
      <span class="button-icon">›</span>
    </button>

    <div class="pagination-info">
      <span class="info-text">第 {{ currentPage }} / {{ totalPages }} 页</span>
      <span class="info-divider">|</span>
      <span class="info-text">共 {{ totalItems }} 条</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import './index.scss';

  const props = defineProps<{
    currentPage: number;
    totalPages: number;
    totalItems: number;
    maxVisiblePages?: number;
  }>();

  const emit = defineEmits<{
    (e: 'page-change', page: number): void;
  }>();

  const maxVisiblePages = computed(() => props.maxVisiblePages || 7);

  const visiblePages = computed(() => {
    const pages: (number | string)[] = [];
    const current = props.currentPage;
    const total = props.totalPages;
    const max = maxVisiblePages.value;

    if (total <= max) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(max / 2);

      if (current <= half + 1) {
        for (let i = 1; i <= max - 2; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(total);
      } else if (current >= total - half) {
        pages.push(1);
        pages.push('...');
        for (let i = total - max + 3; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        const start = current - Math.floor((max - 4) / 2);
        const end = current + Math.ceil((max - 4) / 2);
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(total);
      }
    }

    return pages;
  });

  const goToPage = (page: number | string) => {
    if (typeof page === 'number' && page !== props.currentPage) {
      emit('page-change', page);
    }
  };
</script>
