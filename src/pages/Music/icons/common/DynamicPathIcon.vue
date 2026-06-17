<template>
  <svg :viewBox="viewBox" fill="none" stroke="currentColor" :stroke-width="strokeWidth">
    <path :d="path" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  viewBox?: string
  path: string
  strokeWidth?: number
}

withDefaults(defineProps<Props>(), {
  viewBox: '0 0 24 24',
  strokeWidth: 2
})
</script>