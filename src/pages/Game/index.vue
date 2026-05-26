<template>
  <div class="game-page">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/common/NavBar/index.vue';
</script>

<style scoped lang="scss" src="./index.scss" />
