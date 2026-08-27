<template>
  <svg :viewBox="viewBox" fill="none" stroke="currentColor" stroke-width="3">
    <path :d="path" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  viewBox: string
  path: string
  strokeWidth?: number
}

withDefaults(defineProps<Props>(), {
  strokeWidth: 2
})
</script>