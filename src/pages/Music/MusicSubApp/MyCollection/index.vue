<template>
  <button :class="{ isActive: activeTab === 0 }" @click="handleToggle(0)">
    专辑
  </button>
  <button :class="{ isActive: activeTab === 1 }" @click="handleToggle(1)">
    MV
  </button>
  <input type="text" placeholder=" 🔍  搜 索 " />
  <footer>
    <div v-show="activeTab === 0">
      <button
        :class="{ isSubActive: subActiveTab === 0 }"
        @click="subHandleToggle(0)"
      >
        收藏专辑
      </button>
      <button
        :class="{ isSubActive: subActiveTab === 1 }"
        @click="subHandleToggle(1)"
      >
        已购专辑
      </button>
      <p v-show="showMsgWindow">
        关注的歌手请前往
        <a href="javascript:;">我的主页 → 关注 → 歌手</a>
        <svg
          @click="showMsgWindow = false"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z"
            clip-rule="evenodd"
          />
        </svg>
      </p>

      <div v-show="subActiveTab === 0" id="myCollectSubTab">
        <div
          v-for="singer in albumList"
          :key="singer.singerId"
          class="singer-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z"
            />
          </svg>
          <img :src="singer.pigSrc" alt="" />
          <h5>{{ singer.album }}</h5>
          <h6>{{ singer.name }}</h6>
        </div>
      </div>
      <div v-show="subActiveTab === 1" id="myCollectSecTab">
        <div
          v-for="singer in albumList"
          :key="singer.singerId"
          class="singer-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z"
            />
          </svg>
          <img :src="singer.pigSrc" alt="" />
          <h5>{{ singer.album }}</h5>
          <h6>{{ singer.name }}</h6>
        </div>
      </div>
    </div>
    <div v-show="activeTab === 1" id="myCollectMv">
      <div v-for="singer in mvList" :key="singer.singerId" class="singer-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z"
          />
        </svg>
        <img :src="singer.pigSrc" alt="" />
        <h5>{{ singer.album }}</h5>
        <h6>{{ singer.name }}</h6>
        <h4>{{ singer.playNum }}</h4>
        <h4>{{ singer.time }}</h4>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from "vue";
import { ALBUM_LIST, MV_LIST } from "../../data/myCollection";

let activeTab = ref(0);
let subActiveTab = ref(0);
let showMsgWindow = ref(true);

const handleToggle = (index) => {
  activeTab.value = index;
};
const subHandleToggle = (index) => {
  subActiveTab.value = index;
};
const albumList = ALBUM_LIST;
const mvList = MV_LIST;
</script>
<style lang="scss" scoped src="./index.scss" />
