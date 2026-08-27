<template>
  <div class="star-background-container">
    <svg
      class="star-background"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="nebula1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(94, 234, 212, 0.12)" />
          <stop offset="100%" stop-color="rgba(94, 234, 212, 0)" />
        </radialGradient>
        <radialGradient id="nebula2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(147, 197, 253, 0.12)" />
          <stop offset="100%" stop-color="rgba(147, 197, 253, 0)" />
        </radialGradient>
        <radialGradient id="nebula3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(196, 181, 253, 0.12)" />
          <stop offset="100%" stop-color="rgba(196, 181, 253, 0)" />
        </radialGradient>
        <radialGradient id="nebula4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(251, 191, 36, 0.08)" />
          <stop offset="100%" stop-color="rgba(251, 191, 36, 0)" />
        </radialGradient>
        <radialGradient id="nebula5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(52, 211, 153, 0.12)" />
          <stop offset="100%" stop-color="rgba(52, 211, 153, 0)" />
        </radialGradient>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
        </radialGradient>

        <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
        <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="#0a0a0f" />

      <rect width="100%" height="100%" fill="url(#bgGradient)" opacity="0.5" />
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="50%" stop-color="#0a0e1a" />
        <stop offset="100%" stop-color="#0f1629" />
      </linearGradient>

      <g class="nebulae">
        <ellipse
          v-for="nebula in nebulae"
          :key="nebula.id"
          :cx="nebula.x"
          :cy="nebula.y"
          :rx="nebula.rx"
          :ry="nebula.ry"
          :fill="`url(#${nebula.gradient})`"
          :filter="nebula.blur"
          class="nebula"
          :style="{
            transformOrigin: `${nebula.x}px ${nebula.y}px`,
            animationDelay: `${nebula.delay}s`,
            animationDuration: `${nebula.duration}s`,
          }"
        />
      </g>

      <g class="stars">
        <circle
          v-for="star in stars"
          :key="`star-${star.id}`"
          :cx="star.x"
          :cy="star.y"
          :r="star.size"
          fill="rgba(255, 255, 255, 0.9)"
          class="star"
          :style="{
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }"
        />

        <circle
          v-for="star in brightStars"
          :key="`glow-${star.id}`"
          :cx="star.x"
          :cy="star.y"
          :r="star.size * 4"
          fill="url(#starGlow)"
          class="star-glow"
          :style="{
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }"
        />
      </g>
    </svg>

    <div class="shooting-stars-layer">
      <div
        v-for="meteor in activeMeteors"
        :key="meteor.id"
        class="shooting-star"
        :style="{
          left:
            meteor.x +
            Math.cos((meteor.angle * Math.PI) / 180) * meteor.progress +
            'px',
          top:
            meteor.y +
            Math.sin((meteor.angle * Math.PI) / 180) * meteor.progress +
            'px',
          width: meteor.length + 'px',
          transform: 'rotate(' + meteor.angle + 'deg)',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { shallowRef, onMounted, onUnmounted, computed } from 'vue';

  interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }

  interface Nebula {
    id: number;
    x: number;
    y: number;
    rx: number;
    ry: number;
    gradient: string;
    blur: string;
    delay: number;
    duration: number;
  }

  interface Meteor {
    id: number;
    x: number;
    y: number;
    length: number;
    angle: number;
    speed: number;
    progress: number;
    active: boolean;
  }

  const stars = shallowRef<Star[]>([]);
  const brightStars = shallowRef<Star[]>([]);
  const nebulae = shallowRef<Nebula[]>([]);
  const meteors = shallowRef<Meteor[]>([]);
  // 生成星星
  const generateStars = () => {
    const newStars: Star[] = [];
    const newBrightStars: Star[] = [];

    for (let i = 0; i < 200; i++) {
      const star: Star = {
        id: i,
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        size: Math.random() * 1 + 0.3,
        delay: Math.random() * 3,
        duration: Math.random() * 1 + 2,
      };
      newStars.push(star);

      if (star.size > 0.8) {
        newBrightStars.push(star);
      }
    }

    stars.value = newStars;
    brightStars.value = newBrightStars;
  };
  // 生成星云
  const generateNebulae = () => {
    const gradients = ['nebula1', 'nebula2', 'nebula3', 'nebula4', 'nebula5'];
    const blurs = ['url(#blur1)', 'url(#blur2)'];
    const newNebulae: Nebula[] = [];

    for (let i = 0; i < 10; i++) {
      newNebulae.push({
        id: i,
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        rx: Math.random() * 300 + 200,
        ry: Math.random() * 200 + 100,
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
        blur: blurs[Math.floor(Math.random() * blurs.length)],
        delay: Math.random() * 2,
        duration: Math.random() * 10 + 40,
      });
    }

    nebulae.value = newNebulae;
  };
  // 生成流星
  const generateMeteors = () => {
    const newMeteors: Meteor[] = [];

    for (let i = 0; i < 15; i++) {
      newMeteors.push({
        id: i,
        x: 0,
        y: 0,
        length: Math.random() * 1000 + 100,
        angle: 0,
        speed: Math.random() * 20 + 5,
        progress: 0,
        active: false,
      });
    }

    meteors.value = newMeteors;
  };

  const activeMeteors = computed(() => meteors.value.filter((m) => m.active));

  const triggerMeteor = () => {
    const inactiveMeteor = meteors.value.find((m) => !m.active);
    if (!inactiveMeteor) return;

    const angle = Math.random() * 360;

    let startX = 0;
    let startY = 0;

    if (angle >= 0 && angle < 90) {
      startX = Math.random() * window.innerWidth;
      startY = -100;
    } else if (angle >= 90 && angle < 180) {
      startX = window.innerWidth + 100;
      startY = Math.random() * window.innerHeight;
    } else if (angle >= 180 && angle < 270) {
      startX = Math.random() * window.innerWidth;
      startY = window.innerHeight + 100;
    } else {
      startX = -100;
      startY = Math.random() * window.innerHeight;
    }

    inactiveMeteor.x = startX;
    inactiveMeteor.y = startY;
    inactiveMeteor.angle = angle;
    inactiveMeteor.progress = 0;
    inactiveMeteor.active = true;
  };

  let animationFrameId: number;
  let lastTriggerTime = 0;

  const animate = (timestamp: number) => {
    if (timestamp - lastTriggerTime > 2500 && Math.random() > 0.4) {
      triggerMeteor();
      lastTriggerTime = timestamp;
    }

    meteors.value.forEach((meteor) => {
      if (meteor.active) {
        meteor.progress += meteor.speed;

        const angleRad = (meteor.angle * Math.PI) / 180;
        const distance = meteor.progress;

        const currentX = meteor.x + Math.cos(angleRad) * distance;
        const currentY = meteor.y + Math.sin(angleRad) * distance;

        if (
          currentX < -200 ||
          currentX > window.innerWidth + 200 ||
          currentY < -200 ||
          currentY > window.innerHeight + 200
        ) {
          meteor.active = false;
        }
      }
    });

    animationFrameId = requestAnimationFrame(animate);
  };

  onMounted(() => {
    generateStars();
    generateNebulae();
    generateMeteors();

    animationFrameId = requestAnimationFrame(animate);
  });

  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
</script>

<style scoped lang="scss" src="./index.scss" />
