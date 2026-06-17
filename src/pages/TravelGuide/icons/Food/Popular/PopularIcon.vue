<template>
  <svg class="popular-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor" class="star-path" />
  </svg>
</template>

<style scoped lang="scss">
.popular-icon {
  width: 100%;
  height: 100%;

  .star-path {
    animation: starPulse 2s ease-in-out infinite;
  }
}

@keyframes starPulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(0.95);
  }
}
</style>