<script setup lang="ts">
defineOptions({ name: "StarIcon" });
</script>

<template>
  <svg width="48" height="48" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 165, 0, 0.9)" />
        <stop offset="50%" stop-color="rgba(255, 215, 0, 0.9)" />
        <stop offset="100%" stop-color="rgba(255, 165, 0, 0.9)" />
      </linearGradient>
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="url(#starGradient)"
    />
  </svg>
</template>
