<template>
  <svg
    class="stars-animation"
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="25"
      cy="15"
      r="1.2"
      fill="rgba(255,255,255,0.7)"
      class="star star-1"
    />
    <circle
      cx="60"
      cy="30"
      r="0.9"
      fill="rgba(255,255,255,0.55)"
      class="star star-2"
    />
    <circle
      cx="95"
      cy="10"
      r="1.1"
      fill="rgba(255,255,255,0.65)"
      class="star star-3"
    />
    <circle
      cx="130"
      cy="35"
      r="0.8"
      fill="rgba(255,255,255,0.5)"
      class="star star-4"
    />
    <circle
      cx="165"
      cy="20"
      r="1.3"
      fill="rgba(255,255,255,0.75)"
      class="star star-5"
    />
    <circle
      cx="35"
      cy="55"
      r="1"
      fill="rgba(255,255,255,0.6)"
      class="star star-6"
    />
    <circle
      cx="85"
      cy="65"
      r="0.7"
      fill="rgba(255,255,255,0.45)"
      class="star star-7"
    />
    <circle
      cx="115"
      cy="50"
      r="1.1"
      fill="rgba(255,255,255,0.7)"
      class="star star-8"
    />
    <circle
      cx="155"
      cy="60"
      r="0.9"
      fill="rgba(255,255,255,0.55)"
      class="star star-9"
    />
    <circle
      cx="45"
      cy="75"
      r="0.8"
      fill="rgba(255,255,255,0.5)"
      class="star star-10"
    />
    <circle
      cx="105"
      cy="85"
      r="1"
      fill="rgba(255,255,255,0.6)"
      class="star star-11"
    />
    <circle
      cx="145"
      cy="80"
      r="0.7"
      fill="rgba(255,255,255,0.45)"
      class="star star-12"
    />
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: "StarsAnimation" });
</script>

<style scoped>
.stars-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;

  .star {
    animation: twinkle 3s ease-in-out infinite;
  }

  .star-1 {
    animation-delay: 0s;
  }

  .star-2 {
    animation-delay: 0.5s;
  }

  .star-3 {
    animation-delay: 1s;
  }

  .star-4 {
    animation-delay: 1.5s;
  }

  .star-5 {
    animation-delay: 2s;
  }

  .star-6 {
    animation-delay: 0.3s;
  }

  .star-7 {
    animation-delay: 0.8s;
  }

  .star-8 {
    animation-delay: 1.3s;
  }

  .star-9 {
    animation-delay: 1.8s;
  }

  .star-10 {
    animation-delay: 0.6s;
  }

  .star-11 {
    animation-delay: 1.1s;
  }

  .star-12 {
    animation-delay: 1.6s;
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>
