<script setup lang="ts">
defineOptions({ name: "ParticlesBackground" });
</script>

<template>
  <svg
    class="particles-svg"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 1000 1000"
  >
    <defs>
      <filter id="starGlow" x="-500%" y="-500%" width="1000%" height="1000%">
        <feGaussianBlur stdDeviation="12" result="blur1" />
        <feComposite
          in="SourceGraphic"
          in2="blur1"
          operator="over"
          result="glow1"
        />
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur2" />
        <feComposite in="glow1" in2="blur2" operator="over" />
      </filter>
      <animateTransform
        id="float1"
        attributeName="transform"
        type="translate"
        values="0 0; 50 50; 100 100; 50 150; 0 0"
        dur="15s"
        repeatCount="indefinite"
      />
      <animateTransform
        id="float2"
        attributeName="transform"
        type="translate"
        values="100 100; 150 50; 200 0; 150 50; 100 100"
        dur="12s"
        repeatCount="indefinite"
      />
    </defs>
  </svg>
</template>
