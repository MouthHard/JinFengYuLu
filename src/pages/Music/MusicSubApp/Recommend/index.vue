<template>
  <div id="recommendCon">
    <div class="recFirstLine">
      <div
        class="carousel"
        @mouseenter="clearDotchange"
        @mouseleave="setDotchange"
      >
        <h2 @click="leftOrRight(0)">◀</h2>
        <h2 @click="leftOrRight(1)">▶</h2>
        <!-- 轮播图图片容器-->
        <div class="carousel-img">
          <template v-for="value in imgArr" :key="value.id">
            <img
              :src="value.src"
              alt=""
              :style="{
                transform: carouselTransform,
                transition: 'transform 0.5s ease',
              }"
            />
          </template>
        </div>

        <!-- 轮播图圆点 -->
        <div class="carousel-btn">
          <template v-for="value in imgArr" :key="value.id">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              :class="{ activeBtn: btnIndex === value.id }"
              @mouseenter="dotChange(value.id)"
            >
              <path
                fill="currentColor"
                d="m12 14l-2-2l2-2l2 2zM9.875 8.125l-2.5-2.5L12 1l4.625 4.625l-2.5 2.5L12 6zm-4.25 8.5L1 12l4.625-4.625l2.5 2.5L6 12l2.125 2.125zm12.75 0l-2.5-2.5L18 12l-2.125-2.125l2.5-2.5L23 12zM12 23l-4.625-4.625l2.5-2.5L12 18l2.125-2.125l2.5 2.5z"
              />
            </svg>
          </template>
        </div>
      </div>
      <div id="recSongList">
        <p>夜深了，猜你喜欢听</p>
        <span v-for="value in recSongList" :key="value.id">
          <h6>{{ value.text }}</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z"
              clip-rule="evenodd"
            />
            <path
              fill="currentColor"
              d="m8.597 21.615l12.812-6.968A2.988 2.988 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648"
              opacity="0.5"
            />
          </svg>
          <img :src="value.src" />
        </span>
      </div>
      <div
        id="recScene"
        :style="{
          background: currentScene ? `url(${currentScene.src})` : '',
          backgroundSize: '100% 100%',
        }"
      >
        <h3>{{ h5CurText }}</h3>
        <button @click="toggleSubScene">
          选场景 {{ showSubScene ? "▲" : "▼" }}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z"
          />
        </svg>
        <div id="recSubScene" v-show="showSubScene">
          <span
            v-for="value in sceneArr"
            :key="value.id"
            @click="changeSubScene(value)"
          >
            <h5>{{ value.h5Text }}</h5>
            <img :src="value.src" alt="" />
          </span>
        </div>
      </div>
    </div>
    <div id="recSecLine">
      <header>
        <button @click="changCommendSong(0, recSecLineFooterArr)">◀</button>
        <button @click="changCommendSong(1, recSecLineFooterArr)">▶</button>
        <h3>推荐歌单 ◢</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"
          />
        </svg>
      </header>
      <footer>
        <span
          v-for="item in recSecLineFooterArr"
          :key="item.id"
          :style="{
            transform: commendTransform,
            transition: 'transform 0.5s ease',
          }"
        >
          <h5>{{ item.playNum }}</h5>
          <div :style="{ background: item.bgColor }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8rem"
              height="1.8rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z"
              />
            </svg>
            <h4>{{ item.playName }}</h4>
            <ol>
              <li v-for="it in item.songArr">{{ it }}</li>
            </ol>
          </div>
        </span>
      </footer>
    </div>
    <div id="recThirdLine">
      <header>
        <h3>榜单精选 ✿</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"
          />
        </svg>
      </header>
      <footer>
        <div v-for="item in songRank" :key="item.id">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.1 19.2l.3-.6c.4-.9.6-1.9.6-2.6L9.99 3.25c0-1.2-.39-1.45-.79-1.55L5.4.5c-.3-.1-1-.2-1.8.5c-.5.4-.9 1-1.2 1.8c-.3.8-.5 1.5-.5 2.2v12.8c0 1 .5 1.3.8 1.5c-1 .4-1.7 1-1.7 1.6v.6c0 1.2 2.3 2.2 5 2.2c2.8 0 5-1 5-2.2v-.6c0-.7-.7-1.3-1.9-1.7M6.6 6.7c0-1.1-.16-2.7 1.24-3.9c1.27-1.12 1.2.71 1.2.71S9 13.7 9 14.8c0 1.8 0 3.4-1.3 4.8c-1 1.2-1.1-.3-1.1-.3zm14.5 12.5l.3-.6c.4-.9.6-1.9.6-2.6l-.01-12.75c0-1.2-.39-1.45-.79-1.55L17.4.5c-.3-.1-1-.2-1.8.5c-.5.4-.9 1-1.2 1.8c-.3.8-.5 1.5-.5 2.2v12.8c0 1 .5 1.3.8 1.5c-1 .4-1.7 1-1.7 1.6v.6c0 1.2 2.3 2.2 5 2.2c2.8 0 5-1 5-2.2v-.6c0-.7-.7-1.3-1.9-1.7M18.6 6.7c0-1.1-.16-2.7 1.24-3.9c1.27-1.12 1.2.71 1.2.71S21 13.7 21 14.8c0 1.8 0 3.4-1.3 4.8c-1 1.2-1.1-.3-1.1-.3z"
            />
          </svg>
          <h3>{{ item.rankName }}</h3>
          <h6>{{ item.rankUpdate }}</h6>
          <img :src="item.src" alt="" />
          <ol>
            <li v-for="it in item.songArr">{{ it }}</li>
          </ol>
        </div>
      </footer>
    </div>
    <div id="recFourLine">
      <header>
        <button @click="changCommendSong(0, radarRank)">◁</button>
        <button @click="changCommendSong(1, radarRank)">▷</button>
        <h3>雷达歌单 ◥</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"
          />
        </svg>
      </header>
      <footer>
        <span
          v-for="item in radarRank"
          :key="item.id"
          :style="{
            transform: commendTransform,
            transition: 'transform 0.5s ease',
          }"
        >
          <h5>{{ item.playNum }}</h5>
          <div :style="{ background: item.bgColor }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z"
              />
            </svg>
            <h4>{{ item.playName }}</h4>
            <ol>
              <li v-for="it in item.songArr">{{ it }}</li>
            </ol>
          </div>
        </span>
      </footer>
    </div>
    <div class="recMulPart" v-for="item in partArr" :key="item.partId">
      <div class="recFiveLine">
        <header>
          <h3>{{ item.title }}</h3>
          <button @click="changPart(0, item.fifthArr)">◁</button>
          <button @click="changPart(1, item.fifthArr)">▷</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"
            />
          </svg>
        </header>
        <footer>
          <span
            v-for="it in item.fifthArr"
            :key="it.id"
            :style="{
              transform: partTransform,
              transition: 'transform 0.5s ease',
            }"
          >
            <svg
              class="FivePlayBtn"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882"
                clip-rule="evenodd"
              />
            </svg>
            <img :src="it.imgSrc" alt="" />
            <h4>{{ it.h4Text }}</h4>
            <h5>{{ it.h5Text }}</h5>
            <h6>{{ it.h6Text }}</h6>
            <h6>{{ it.h6OtherText }}</h6>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M15 4v16.563L9.719 15.28L8.28 16.72l7 7l.719.687l.719-.687l7-7l-1.438-1.438l-5.28 5.28V4zM7 26v2h18v-2z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                />
              </svg>
            </div>
          </span>
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, onMounted, computed } from "vue";
import type { SceneItem } from "../../../../types/music/music";
import {
  imgArr,
  sceneArr,
  recSongList,
  recSecLineFooterArr,
  songRank,
  radarRank,
  partArr,
} from "../../data/recommend";

// 状态管理
const btnIndex = ref(0);
const h5CurText = ref("夜晚");
const timerRecommend = ref<number | null>(null);
const commendIndex = ref(0);
const partIndex = ref(0);
const showSubScene = ref(false);
const currentScene = ref<SceneItem | null>(null);

// 计算属性：当前轮播图的transform值
const carouselTransform = computed(() => {
  return `translateX(${-btnIndex.value * 100}%)`;
});

// 轮播图相关方法
const dotChange = (index: number | undefined): void => {
  if (index !== undefined) {
    btnIndex.value = index;
  }
};

const clearDotchange = (): void => {
  if (timerRecommend.value !== null) {
    clearInterval(timerRecommend.value);
    timerRecommend.value = null;
  }
};

const setDotchange = (): void => {
  timerRecommend.value = window.setInterval(() => {
    leftOrRight(1);
  }, 3000);
};

const leftOrRight = (d: number): void => {
  if (d === 0) {
    btnIndex.value = (btnIndex.value - 1 + imgArr.length) % imgArr.length;
  } else {
    btnIndex.value = (btnIndex.value + 1) % imgArr.length;
  }
};

// 场景相关方法
const toggleSubScene = (): void => {
  showSubScene.value = !showSubScene.value;
};

const changeSubScene = (scene: SceneItem): void => {
  currentScene.value = scene;
  h5CurText.value = scene.h5Text;
  showSubScene.value = false;
};

// 推荐歌单滚动方法
const changCommendSong = (d: number, arr: any[]): void => {
  const step = arr.length / 2;
  if (d === 0) {
    commendIndex.value = Math.abs(commendIndex.value - step) % arr.length;
  } else {
    commendIndex.value = (commendIndex.value + step) % arr.length;
  }
};

// 计算属性：推荐歌单的transform值
const commendTransform = computed(() => {
  return `translateX(${-commendIndex.value * 110}%)`;
});

// 部分滚动方法
const changPart = (d: number, arr: any[]): void => {
  const step = arr.length / 6;
  const maxIndex = arr.length / 3;
  if (d === 0) {
    partIndex.value = Math.abs(partIndex.value - step) % maxIndex;
  } else {
    partIndex.value = (partIndex.value + step) % maxIndex;
  }
};

// 计算属性：部分的transform值
const partTransform = computed(() => {
  return `translateX(${-partIndex.value * 100}%)`;
});

// 生命周期钩子
onMounted(() => {
  setDotchange();
});

onUnmounted(() => {
  clearDotchange();
});
</script>

<style scoped lang="scss" src="./index.scss" />
