<template>
  <div>
    <div class="clock-container">
      <div class="time" ref="timeEl"></div>
      <div class="date" ref="dateEl"></div>
    </div>
    <div id="curPageName">
      {{ curPageName }}
    </div>

    <div id="mainPage">
      <!-- 太阳 -->
      <div id="sun"></div>
      <!-- 时钟 -->
      <div class="clock-container">
        <div class="needle hour" ref="hourEl"></div>
        <div class="needle minute" ref="minuteEl"></div>
        <div class="needle second" ref="secondEl"></div>
      </div>
      <!-- 轨迹星图 -->
      <div class="trajectory">
        <template v-for="value in routeArr" :key="value.routeId">
          <p
            @click="jumpToRouter(value.routeName)"
            @mouseover="mouseOverPages(value.routeName)"
            @mouseout="curPageName = ''"
          >
            <a
              href="javascript:void(0);"
              :style="{ backgroundImage: `url(${value.bg})` }"
            ></a>
          </p>
        </template>
      </div>
    </div>

    <div id="tabContainer" ref="tabContainer">
      <!-- 主要这里的 v-slot={Component}只能是Component而不能是其他变量名如componentA或者componentB，估计是Vue内定的变量名;
				并且要求和<component>标签中的:is绑定的变量名一致 -->
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { scale, formatTime, formatDate } from "@/utils/common";
import type { RouteItem } from "@/types/common";

const router = useRouter();
const curPageName = ref<string>("");
const timer = ref<number>();

// DOM 引用
const tabContainer = ref<HTMLElement>();
const hourEl = ref<HTMLElement>();
const minuteEl = ref<HTMLElement>();
const secondEl = ref<HTMLElement>();
const timeEl = ref<HTMLElement>();
const dateEl = ref<HTMLElement>();

const routeArr: RouteItem[] = [
  {
    routeId: "1",
    routeName: "/music",
    pageName: "音乐",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Saturn.png",
  },
  {
    routeId: "2",
    routeName: "/game",
    pageName: "游戏",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Venus.png",
  },
  {
    routeId: "3",
    routeName: "/aphorism",
    pageName: "诗词",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/earth.png",
  },
  {
    routeId: "4",
    routeName: "/history",
    pageName: "历史",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Mars.png",
  },
  {
    routeId: "5",
    routeName: "/travel-guide",
    pageName: "旅游",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Jupiter.png",
  },
  {
    routeId: "6",
    routeName: "/museum",
    pageName: "博物馆",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Mercury.png",
  },
  {
    routeId: "7",
    routeName: "/like",
    pageName: "文书",
    bg: "https://images-pc.oss-cn-hongkong.aliyuncs.com/app/Uranus.png",
  },
];

const jumpToRouter = (route: string): void => {
  showTab();
  router.push(route);
};

const showTab = (): void => {
  if (tabContainer.value) {
    tabContainer.value.style.display = "block";
  }
};

const mouseOverPages = (add: string): void => {
  const obj = routeArr.find((value) => value.routeName === add);
  if (obj) {
    curPageName.value = obj.pageName;
  }
};

// 监听路由变化
watch(
  () => router.currentRoute.value.path,
  (newPath: string) => {
    if (tabContainer.value) {
      if (newPath === "/") {
        tabContainer.value.style.display = "none";
      } else {
        tabContainer.value.style.display = "block";
        tabContainer.value.style.zIndex = "5";
      }
    }
  },
);

// 生命周期钩子
onMounted(() => {
  // 页面路由跳转后切换场景
  if (tabContainer.value) {
    if (router.currentRoute.value.path === "/") {
      tabContainer.value.style.display = "none";
    } else {
      tabContainer.value.style.display = "block";
      tabContainer.value.style.zIndex = "5";
    }
  }

  // 时钟

  function setTime(): void {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    if (hourEl.value) {
      hourEl.value.style.transform = `translate(-50%, -100%) rotate(${scale(
        hours,
        0,
        12,
        0,
        360,
      )}deg)`;
    }

    if (minuteEl.value) {
      minuteEl.value.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360,
      )}deg)`;
    }

    if (secondEl.value) {
      secondEl.value.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360,
      )}deg)`;
    }

    if (timeEl.value) {
      timeEl.value.innerHTML = formatTime(time);
    }

    if (dateEl.value) {
      dateEl.value.innerHTML = formatDate(time);
    }
  }

  setTime();
  timer.value = window.setInterval(setTime, 1000);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = undefined;
  }
});
</script>
<style scoped lang="scss" src="@/assets/css/SolarSystem.scss" />
