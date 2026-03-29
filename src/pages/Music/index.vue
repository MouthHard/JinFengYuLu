<template>
  <!-- PC端 -->
  <div id="pcMusic">
    <div id="pcLeft">
      <h4 @click="router.push('/mobile-music')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 512 512"
        >
          <path
            fill="#5dc80c"
            d="M227.346 21.72C166.6 21.42 106.33 48.002 65.633 99.272c-70.398 88.68-55.576 217.634 33.103 288.032c6.407 5.09 13.482 9.924 20.276 14.13C46.694 328.73 38.35 211.73 103.664 129.462c65.31-82.275 181.147-100.695 268.36-46.756c-5.63-5.66-11.952-11.454-18.358-16.54c-37.412-29.7-81.993-44.23-126.32-44.448zm40.79 68.012c-17.173-.17-34.464 4.025-50.984 13.588l.13.237l-3.91 1.95c32.484 65.062 44.2 140.54 37.956 217.565c-16.43-21.657-45.042-39.13-74.498-43.38c-40.71-5.87-67.6 15.738-60.06 48.265c7.542 32.527 46.656 63.654 87.365 69.525c33.316 4.805 57.36-8.8 60.87-31.726h.005c8.48-53.158 9.01-106.548.57-157.475c59.49-1.135 110.173 84.413 71.965 171.062c80.733-78.593 6.76-226.6-81.28-213.508a395.884 395.884 0 0 0-6.144-20.176c76.357-22.337 165.25 73.996 134.405 190.856C461.34 235.536 366.66 90.718 268.137 89.732zm119.83 14.264c74.538 70.422 86.508 187.106 23.778 271.363c-62.724 84.26-177.937 106.267-266.78 55.062c5.804 5.48 12.3 11.076 18.862 15.96c90.823 67.61 219.258 48.798 286.867-42.028c67.612-90.823 48.798-219.256-42.025-286.868c-6.56-4.887-13.783-9.498-20.703-13.49z"
          />
        </svg>
        高山流水
      </h4>
      <div id="leftList">
        <template v-for="value in musicRouteArr" :key="value.routeId">
          <router-link :to="value.routeName"
            >{{ value.pageName }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path fill="#fff" :d="value.pathD" />
            </svg>
          </router-link>
        </template>
        <div id="listCreated">
          <button @click="COList('listCreated')">
            创建的歌单 {{ listStates.listCreated ? "▼" : "▲" }}
          </button>
          <span
            v-for="value in musicCreatedArr"
            :key="value.routeId"
            v-show="listStates.listCreated"
          >
            <img :src="value.listImg" alt="" />
            <router-link :to="value.routeName">{{
              value.pageName
            }}</router-link>
          </span>
        </div>
        <br />
        <div id="listCollected">
          <button @click="COList('listCollected')">
            收藏的歌单 {{ listStates.listCollected ? "▼" : "▲" }}
          </button>
          <span
            v-for="value in musicCollectedArr"
            :key="value.routeId"
            v-show="listStates.listCollected"
          >
            <img :src="value.listImg" alt="" />
            <router-link :to="value.routeName">{{
              value.pageName
            }}</router-link>
          </span>
        </div>
      </div>
    </div>
    <div id="pcBottom"></div>
    <div id="pcCenter">
      <div>
        <button>◀</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
          />
        </svg>
        <input placeholder="国际歌" type="text" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <rect width="6" height="12" x="9" y="2" rx="3" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"
            />
          </g>
        </svg>
        <img
          src="https://images-pc.oss-cn-hongkong.aliyuncs.com/music/mao.webp"
          alt=""
        />
        <p>游音风</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.116 11.774v24.452M8.804 16.833v14.334M4.5 21.471v5.058m12.957-9.696v14.334m4.49-9.696v5.058m12.722-14.755v24.452m-4.312-19.393v14.334m-4.304-9.696v5.058m12.957-9.696v14.334m4.49-9.696v5.058"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22 7v9c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.1.3-.1.7-.1 1s0 .7.1 1H4v12h16V7.9c.7-.1 1.4-.5 2-.9m-6-4c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3s-3 1.3-3 3"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.013 2.475T12.05 15.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 50 50"
        >
          <path
            fill="currentColor"
            d="M47.36 14.75c.08.29-.021.61-.19.86l-5.39 8.02c-.2.31-.62.48-.971.48c-.1 0-.38-.02-.489-.05L36 23v19c0 .58-.41 1-1 1H14c-.59 0-1-.42-1-1V23l-3.88 1.07c-.45.14-.84-.04-1.09-.43l-5.35-8c-.17-.26-.22-.55-.14-.84c.07-.3.28-.5.55-.64L14 9h5c.59 0 1 .41 1 1c0 2.06 2.89 3.52 4.95 3.52S30 12.07 30 10c0-.58.41-1 1-1h5l10.8 5.06c.28.14.48.39.56.69"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v6.268A1.99 1.99 0 0 0 18 12h-4a2 2 0 0 0-2 2v4c0 .364.097.706.268 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"
            clip-rule="evenodd"
          />
        </svg>
        <button>▬</button>
        <button>口</button>
        <button @click="router.push('/')">X</button>
      </div>
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </div>
    <div id="buttonGroup">
      <button @click="router.push('/')">首页</button>
      <button @click="returnTop">顶部</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

import {
  musicCreatedArr,
  musicCollectedArr,
  musicRouteArr,
} from "./data/routes";

// 状态管理
const listStates = ref({
  listCreated: true,
  listCollected: true,
});

//返回顶部
const returnTop = (): void => {
  const pcCenter = document.getElementById("pcCenter");
  if (pcCenter) {
    pcCenter.scrollTo({ top: 0, behavior: "smooth" });
  }
};

//PC端收缩和下拉歌单
const COList = (str: string): void => {
  listStates.value[str as keyof typeof listStates.value] =
    !listStates.value[str as keyof typeof listStates.value];
};
</script>

<style scoped src="./index.scss" lang="scss" />
