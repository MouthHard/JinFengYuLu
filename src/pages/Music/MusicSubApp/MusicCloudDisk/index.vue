<template>
  <button
    v-for="(item, index) in headerBtnArr"
    class="btnTab"
    :class="{ isActive: activeTab === index }"
    @click="handleToggle(index)"
  >
    {{ item }}
  </button>
  <div v-show="activeTab === 0" id="localTabA">
    <span>
      <h6>云盘容量</h6>
      <div class="capacity-container">
        <div class="proCapacity"></div>
      </div>
      <h6>300g / 1T</h6>
      <h6>歌曲永久保存，随时随地多端畅听</h6>
      <a href="javascript:;">扩容</a>
    </span>
    <div class="buttonGroup">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"
          />
        </svg>
        播放全部
      </button>
      <button>。。。</button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M210.5 419.9h93.1V233.7h139.6L257 1L70.8 233.7h139.6v186.2zm256-46.5v93.1h-419v-93.1H1V513h512V373.4z"
          />
        </svg>
      </button>

      <input type="text" placeholder=" 🔍  搜 索 " />
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th @click="changeSongTitleA(0)">
            标题
            <h5>{{ songSortArr[0].arr[sortIndex_DL0] }}</h5>
          </th>
          <th @click="changeSongTitleA(1)">
            专辑
            <h5>{{ songSortArr[1].arr[sortIndex_DL1] }}</h5>
          </th>
          <th @click="changeSongTitleA(2)">
            格式
            <h5>{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
          </th>
          <th @click="changeSongTitleA(2)">
            上传时间
            <h5>{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
          </th>
          <th @click="changeSongTitleA(2)">
            大小
            <h5>{{ songSortArr[2].arr[sortIndex_DL2] }}</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in downloadSingleArr"
          :key="item.id"
          @mouseenter="hoveredRowIndex = idx"
          @mouseleave="hoveredRowIndex = -1"
        >
          <td>{{ hoveredRowIndex === idx ? " ▶ " : item.id }}</td>
          <td class="likeSong">
            <img :src="item.subImgsrc" alt="" />
            <h3>{{ item.songName }}</h3>
            <span>
              <h6 v-for="it in item.tagArr">{{ it }}</h6>
              <h5>{{ item.singer }}</h5>
            </span>
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 14 14"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 1792 1504"
              >
                <path
                  fill="currentColor"
                  d="M640 640q0-53-37.5-90.5T512 512t-90.5 37.5T384 640t37.5 90.5T512 768t90.5-37.5T640 640m384 0q0-53-37.5-90.5T896 512t-90.5 37.5T768 640t37.5 90.5T896 768t90.5-37.5T1024 640m384 0q0-53-37.5-90.5T1280 512t-90.5 37.5T1152 640t37.5 90.5T1280 768t90.5-37.5T1408 640m384 0q0 174-120 321.5t-326 233t-450 85.5q-110 0-211-18q-173 173-435 229q-52 10-86 13q-12 1-22-6t-13-18q-4-15 20-37q5-5 23.5-21.5T198 1398t23.5-25.5t24-31.5t20.5-37t20-48t14.5-57.5T313 1126q-146-90-229.5-216.5T0 640q0-174 120-321.5t326-233T896 0t450 85.5t326 233T1792 640"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                />
              </svg>
            </h4>
          </td>
          <td>
            {{ item.album }}
          </td>
          <td>{{ item.type }}</td>
          <td>{{ item.uploadTime }}</td>
          <td>{{ item.size }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-show="activeTab === 1" id="localTabB">
    <div class="buttonGroup">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5l5 5z"
          />
        </svg>
        全部上传
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M6 9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 5h1v-4H8zm6-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm2 6h-1v-4h1z"
            clip-rule="evenodd"
          />
        </svg>
        全部暂停
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6zm6.414 8l1.768-1.768l-1.414-1.414L12 12.586l-1.768-1.768l-1.414 1.414L10.586 14l-1.768 1.768l1.414 1.414L12 15.414l1.768 1.768l1.414-1.414zM9 4v2h6V4z"
          />
        </svg>
        全部清空
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>标题</th>
          <th>进度</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in downloadingArr"
          :key="item.id"
          @mouseenter="hoveredDownloadIndex = idx"
          @mouseleave="hoveredDownloadIndex = -1"
        >
          <td>{{ hoveredDownloadIndex === idx ? " ▶ " : item.id }}</td>
          <td class="likeSong">
            <img :src="item.subImgsrc" alt="" />
            <h3>{{ item.songName }}</h3>
            <span>
              <h6 v-for="it in item.tagArr">{{ it }}</h6>
              <h5>{{ item.singer }}</h5>
            </span>
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m4 15v-2H8v2zm0-7l-4-4l-4 4h2.5v4h3v-4z"
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
                  d="M14.12 10.47L12 12.59l-2.13-2.12l-1.41 1.41L10.59 14l-2.12 2.12l1.41 1.41L12 15.41l2.12 2.12l1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-6-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                />
              </svg>
            </h4>
          </td>
          <td>
            <div class="progress-download">
              <h5>{{ item.progress }}</h5>
              <div class="progress-container">
                <div class="progressDL">
                  <h1></h1>
                </div>
              </div>

              <h6>{{ item.downloadSpeed }}</h6>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  HEADER_BTN_ARR,
  DOWNLOAD_SINGLE_ARR,
  DOWNLOADING_ARR,
  SONG_SORT_ARR,
} from "../../data/musicCloudDisk";

let activeTab = ref(1);
let sortIndex_DL0 = ref(0);
let sortIndex_DL1 = ref(0);
let sortIndex_DL2 = ref(0);
let hoveredRowIndex = ref(-1);
let hoveredDownloadIndex = ref(-1);

const handleToggle = (index) => {
  activeTab.value = index;
};
const headerBtnArr = HEADER_BTN_ARR;
const downloadSingleArr = DOWNLOAD_SINGLE_ARR;
const downloadingArr = DOWNLOADING_ARR;

const changeSongTitleA = (num) => {
  if (num === 0) {
    sortIndex_DL0.value++;
    sortIndex_DL0.value %= songSortArr[num].arr.length;
  } else if (num === 1) {
    sortIndex_DL1.value++;
    sortIndex_DL1.value %= songSortArr[num].arr.length;
  } else {
    sortIndex_DL2.value++;
    sortIndex_DL2.value %= songSortArr[num].arr.length;
  }
};
const songSortArr = SONG_SORT_ARR;
</script>
<style lang="scss" scoped src="./index.scss" />
