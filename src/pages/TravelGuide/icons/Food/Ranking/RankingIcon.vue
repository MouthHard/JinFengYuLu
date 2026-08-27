<template>
  <svg class="ranking-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3H19V5H5V3ZM5 7H19V9H5V7ZM5 11H15V13H5V11Z" fill="currentColor" class="bar-1" />
    <circle cx="18" cy="12" r="3" fill="currentColor" class="medal-circle" />
  </svg>
</template>

<style scoped lang="scss">
.ranking-icon {
  width: 100%;
  height: 100%;

  .bar-1 {
    animation: barGrow 1.5s ease-in-out infinite;
  }

  .medal-circle {
    animation: medalPulse 2s ease-in-out infinite;
  }
}

@keyframes barGrow {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

@keyframes medalPulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
</style>