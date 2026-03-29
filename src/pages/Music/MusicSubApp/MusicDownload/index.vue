<template>
  <header>
    <button :class="{ isActive: activeTab === 0 }" @click="handleToggle(0)">
      已下载单曲
    </button>
    <button :class="{ isActive: activeTab === 1 }" @click="handleToggle(1)">
      已下载声音
    </button>
    <button :class="{ isActive: activeTab === 2 }" @click="handleToggle(2)">
      已下载MV
    </button>
    <button :class="{ isActive: activeTab === 3 }" @click="handleToggle(3)">
      正在下载
    </button>
  </header>
  <footer>
    <div class="buttonGroup">
      <button v-show="buttonIndex === 1 || buttonIndex === 2">
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
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Z"
          />
        </svg>
        打开目录
      </button>
      <button v-show="buttonIndex === 1 || buttonIndex === 2">。。。</button>
      <input
        v-show="buttonIndex === 1 || buttonIndex === 2"
        type="text"
        placeholder=" 🔍  搜 索 "
      />
      <button v-show="buttonIndex === 4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 14 14"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M6.375 0H3.383A1.5 1.5 0 0 0 2.07.772L.347 3.875h6.028zM0 12.5V5.125h14V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5m13.653-8.625H7.625V0h2.992a1.5 1.5 0 0 1 1.312.772zm-9.3 6.479l2.293 2.293a.5.5 0 0 0 .708 0l2.292-2.293a.5.5 0 0 0-.353-.854H8v-2a1 1 0 1 0-2 0v2H4.707a.5.5 0 0 0-.353.854Z"
            clip-rule="evenodd"
          />
        </svg>
        全部下载
      </button>
      <button v-show="buttonIndex === 4">
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
      <button v-show="buttonIndex === 4">
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
    <div v-show="activeTab === 0" id="myDownloadA">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th @click="changeSongTitleA('songTitleDL', 0)">
              标题
              <h5>{{ sortLabels.songTitleDL }}</h5>
            </th>
            <th @click="changeSongTitleA('albumTitleDL', 1)">
              专辑
              <h5>{{ sortLabels.albumTitleDL }}</h5>
            </th>
            <th @click="changeSongTitleA('timeTitleDL', 2)">
              下载时间
              <h5>{{ sortLabels.timeTitleDL }}</h5>
            </th>
            <th @click="changeSongTitleA('sizeDL', 2)">
              大小
              <h5>{{ sortLabels.sizeDL }}</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in downloadSingleArr"
            :key="item._originalId || item.id"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.songName }}</h3>
              <h5>{{ item.singer }}</h5>
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
            <td>{{ item.downloadTime }}</td>
            <td>{{ item.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="activeTab === 1" id="myDownloadB">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th @click="changeSongTitleA('songTitleDL2', 0)">
              标题
              <h5>{{ sortLabels.songTitleDL2 }}</h5>
            </th>

            <th @click="changeSongTitleA('timeTitleDL2', 1)">
              下载时间
              <h5>{{ sortLabels.timeTitleDL2 }}</h5>
            </th>
            <th @click="changeSongTitleA('sizeDL2', 2)">
              大小
              <h5>{{ sortLabels.sizeDL2 }}</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in downloadSoundArr"
            :key="item._originalId || item.id"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.songName }}</h3>
              <h5>{{ item.album }}</h5>
              <h4>
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
            <td>{{ item.downloadTime }}</td>
            <td>{{ item.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="activeTab === 2" id="myDownloadC">
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
        <h4>{{ singer.quality }}</h4>
        <h4>{{ singer.time }}</h4>
      </div>
    </div>
    <div v-show="activeTab === 3" id="myDownloadD">
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
            v-for="item in downloadingArr"
            :key="item._originalId || item.id"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.songName }}</h3>
              <h5>{{ item.album }}</h5>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0m-101.66 5.66a8 8 0 0 0 11.32 0l40-40A8 8 0 0 0 168 96h-32V32a8 8 0 0 0-16 0v64H88a8 8 0 0 0-5.66 13.66Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07L5 7H4a1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"
                    />
                  </g>
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
                  <div class="progressDL"></div>
                </div>

                <h6>{{ item.downloadSpeed }}</h6>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </footer>
</template>
<script setup>
import { ref, reactive } from "vue";
import {
  SONG_TITLE_ARR,
  DEFAULT_SORT_LABELS,
  DOWNLOAD_SINGLE_ARR,
  DOWNLOAD_SOUND_ARR,
  MV_LIST,
  DOWNLOADING_ARR,
} from "../../data/musicDownload";

const activeTab = ref(0);
const sortIndex_DL0 = ref(0);
const sortIndex_DL1 = ref(0);
const sortIndex_DL2 = ref(0);
const buttonIndex = ref(1);

const handleToggle = (index) => {
  activeTab.value = index;
  buttonIndex.value = index + 1;
};

const songTitleArr = SONG_TITLE_ARR;

const sortLabels = reactive({ ...DEFAULT_SORT_LABELS });

const changeSongTitleA = (labelKey, num) => {
  const arr = songTitleArr[num].arr;
  const indexRef =
    num === 0 ? sortIndex_DL0 : num === 1 ? sortIndex_DL1 : sortIndex_DL2;
  sortLabels[labelKey] = arr[indexRef.value];
  indexRef.value = (indexRef.value + 1) % arr.length;
};

const downloadSingleArr = reactive(
  DOWNLOAD_SINGLE_ARR.map((item) => ({ ...item })),
);

const downloadSoundArr = reactive(
  DOWNLOAD_SOUND_ARR.map((item) => ({ ...item })),
);

const mvList = MV_LIST;

const downloadingArr = reactive(DOWNLOADING_ARR.map((item) => ({ ...item })));

const handleMouseEnter = (item) => {
  item._originalId = item.id;
  item._showPlayIcon = true;
  item.id = " ▶ ";
};

const handleMouseLeave = (item) => {
  item.id = item._originalId;
  item._showPlayIcon = false;
};
</script>
<style lang="scss" scoped src="./index.scss" />
