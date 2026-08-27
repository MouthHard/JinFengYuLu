<template>
  <svg class="categories-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" class="rect-1" />
    <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" class="rect-2" />
    <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" class="rect-3" />
    <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" class="rect-4" />
  </svg>
</template>

<style scoped lang="scss">
.categories-icon {
  width: 100%;
  height: 100%;

  .rect-1,
  .rect-2,
  .rect-3,
  .rect-4 {
    animation: rectFade 2s ease-in-out infinite;
  }

  .rect-2 {
    animation-delay: 0.25s;
  }

  .rect-3 {
    animation-delay: 0.5s;
  }

  .rect-4 {
    animation-delay: 0.75s;
  }
}

@keyframes rectFade {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }
}
</style>