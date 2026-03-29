<template>
  <div id="communityHeader">
    <h3>关注</h3>
    <button>✍ 发布</button>
  </div>
  <div id="communityFooter">
    <div class="comFirst" v-for="item in commentArr" :key="item.id">
      <header>
        <img :src="item.headIcon" alt="" />
        <h3>{{ item.userName }}</h3>
        <h6>
          {{ item.comTime }}
        </h6>
        <button>。。。</button>
      </header>
      <footer>
        <h5 v-show="item.h5Show">{{ item.text }}</h5>
        <img v-show="item.imgShow" class="textImg" :src="item.imgSrc" alt="" />
        <div v-show="item.songShow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="currentColor"
              d="M1920 0v1920H0V0zm-576 957L576 448v1024z"
            />
          </svg>
          <img :src="item.songImg" alt="" />
          <h5>{{ item.songName }}</h5>
          <h6>{{ item.singer }}</h6>
        </div>

        <span>
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 48 48"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M4.189 22.173A2 2 0 0 1 6.181 20H10a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H7.834a2 2 0 0 1-1.993-1.827zM18 21.375c0-.836.52-1.584 1.275-1.94c1.649-.778 4.458-2.341 5.725-4.454c1.633-2.724 1.941-7.645 1.991-8.772c.007-.158.003-.316.024-.472c.271-1.953 4.04.328 5.485 2.74c.785 1.308.885 3.027.803 4.37c-.089 1.436-.51 2.823-.923 4.201l-.88 2.937h10.857a2 2 0 0 1 1.925 2.543l-5.37 19.016A2 2 0 0 1 36.986 43H20a2 2 0 0 1-2-2z"
              />
            </svg>
            {{ item.goodNum }}
          </h4>

          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.2em"
              viewBox="0 0 1664 1536"
            >
              <path
                fill="currentColor"
                d="M1408 989v259q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h255q13 0 22.5 9.5T575 160q0 27-26 32q-77 26-133 60q-10 4-16 4H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29q28-13 54-37q16-16 35-8q21 9 21 29m237-496l-384 384q-18 19-45 19q-12 0-25-5q-39-17-39-59V640H992q-323 0-438 131q-119 137-74 473q3 23-20 34q-8 2-12 2q-16 0-26-13q-10-14-21-31t-39.5-68.5T312 1068t-38.5-114T256 832q0-49 3.5-91t14-90t28-88t47-81.5t68.5-74t94.5-61.5T636 297.5T795.5 267T992 256h160V64q0-42 39-59q13-5 25-5q26 0 45 19l384 384q19 19 19 45t-19 45"
              />
            </svg>
            {{ item.shareNum }}
          </h4>

          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 22 22"
            >
              <path
                fill="currentColor"
                d="M2 2h18v1h1v14h-1v1h-8v1h-1v1h-1v1H6v-3H2v-1H1V3h1zm1 2v12h5v3h1v-1h1v-1h1v-1h8V4zm2 3h12v2H5zm0 4h10v2H5z"
              />
            </svg>
            {{ item.comNum }}
          </h4>
        </span>
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import { commentArr } from "../../data/community";
</script>
<style lang="scss" scoped src="./index.scss" />
