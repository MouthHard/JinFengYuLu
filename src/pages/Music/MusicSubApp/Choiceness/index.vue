<template>
  <div class="choice-container">
    <!-- 标签切换 -->
    <div class="choice_tags_box">
      <router-link
        :to="value.routeName"
        v-for="value in choicenessRouteArr"
        class="tags"
        :class="{ isActive: Number(value.routeId) === active }"
        @click.capture="handleToggle(Number(value.routeId))"
      >
        {{ value.pageName }}
      </router-link>
    </div>
    <!-- 内容部分 -->
    <div class="choice-conbox">
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { choicenessRouteArr } from "../../data/choiceness";

const active = ref(0); // 默认选中第一个tab

/**
 * 切换标签页
 */
const handleToggle = (index: number): void => {
  active.value = index;
};

// 组件内路由守卫 - 监听路由变化,实时更新当前路由地址
onBeforeRouteUpdate((to, from) => {
  if (from.fullPath !== to.fullPath) {
    for (const item of choicenessRouteArr) {
      if (item.routeName === to.fullPath) {
        active.value = parseInt(item.routeId);
      }
    }
  }
});
</script>

<style scoped lang="scss" src="./index.scss" />
