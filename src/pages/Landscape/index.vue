<template>
  <div id="landMain">
    <!-- 主页面加载页 -->
    <PageChange></PageChange>

    <div id="container">
      <flipbook class="flipbook" :pages="pages">
        <button>试试保持鼠标点击不动然后鼠标向左向右移动翻照片</button>
        <button class="return-button" @click="router.push('/')">
          返回主页
        </button>
      </flipbook>
    </div>
  </div>
</template>

<script setup lang="ts">
import flipbook from "flipbook-vue";
import PageChange from "@/pages/PageChange/index.vue";
import router from "@/router";

const pages: string[] = [];
for (let i = 0; i <= 22; i++) {
  pages.push(
    `https://images-pc.oss-cn-hongkong.aliyuncs.com/landscape/${i}.webp`,
  );
}
</script>

<style scoped lang="scss" src="./index.scss" />
