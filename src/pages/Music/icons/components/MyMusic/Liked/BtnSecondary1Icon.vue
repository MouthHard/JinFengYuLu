<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 3h5v5"/>
            <path d="M4 20h16"/>
            <path d="M21 3l-7 7"/>
            <path d="M10 14H4v7h7"/>
            <path d="M3 21l7-7"/>
          </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string;
}
defineProps<Props>();
</script>
