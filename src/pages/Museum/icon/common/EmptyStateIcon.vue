<template>
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    :class="klass"
    :style="style"
  >
    <path
      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      fill="currentColor"
      opacity="0.5"
    />
    <path
      d="M512 256c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256z m0 448c-106 0-192-86-192-192s86-192 192-192 192 86 192 192-86 192-192 192z"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue';

  interface Props {
    class?: string;
    style?: CSSProperties;
  }

  defineProps<Props>();

  const klass = undefined;
</script>
