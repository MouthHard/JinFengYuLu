<template>
  <div class="choiceSecondTab">
    <header>
      <h6
        v-for="item in choiceSecTab_tags"
        :key="item.id"
        :class="{ isSubActive: item.id === subActive }"
        @click="handleToggle(item.id)"
      >
        {{ item.text }}
      </h6>
      <button @click="showChoiceSecondSceneFlag = !showChoiceSecondSceneFlag">
        其他场景 ▼
      </button>
      <div id="choiceSecond_Scene" v-show="showChoiceSecondSceneFlag">
        <div v-for="item in choiceSecTab_suBtags" :key="item.id">
          <h4>{{ item.text }}</h4>
          <p v-for="it in item.arr">{{ it }}</p>
        </div>
      </div>
    </header>
    <footer @click="showChoiceSecondSceneFlag = false">
      <div
        v-show="item.id === subActive"
        v-for="(item, index) in choiceSecTab_tags"
        :key="item.id"
        class="choiceSecondTabFooter"
      >
        <span
          v-for="(it, subIndex) in item.content"
          :key="it.subId"
          :style="{
            background: `url(${it.imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: hoveredItems[`${index}-${subIndex}`] ? '1' : '1',
          }"
          @mouseenter="hoveredItems[`${index}-${subIndex}`] = true"
          @mouseleave="hoveredItems[`${index}-${subIndex}`] = false"
        >
          <h5>{{ it.playNum }}</h5>
          <div
            :style="{
              background: it.bgColor,
              boxShadow: hoveredItems[`${index}-${subIndex}`]
                ? `0 -3rem 3rem -1px ${it.bgColor}`
                : 'none',
            }"
          >
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
            <h4>{{ it.playName }}</h4>
            <ol>
              <li v-for="temp in it.songArr">{{ temp }}</li>
            </ol>
          </div>
        </span>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import {
  choiceSecTab_tags,
  choiceSecTab_suBtags,
} from "../../../data/musicPlaza";

const subActive = ref(0);
const showChoiceSecondSceneFlag = ref(false);
const hoveredItems = reactive({});

const handleToggle = (index) => {
  subActive.value = index;
  showChoiceSecondSceneFlag.value = false;
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.choiceSecondTab {
  width: 97%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  header {
    margin-top: 10px;
    display: flex;
    width: 98%;
    height: 7%;
    margin-left: 2%;
    text-align: center;
    position: relative;

    #choiceSecond_Scene {
      position: absolute;
      z-index: 3;
      background: #040729;
      width: 70%;
      top: 3rem;
      right: 10%;
      display: none;
      flex-direction: column;
      justify-content: space-around;

      div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        border-bottom: 1px solid #fff;

        h4 {
          height: 2rem;
          line-height: 2rem;
          display: inline;
          padding: 5px 5px 5px 10px;
          background: transparent;
          text-align: center;
          margin: 0;
        }

        p {
          height: 2rem;
          line-height: 2rem;
          color: #b2b2b2;
          padding: 5px 15px;
          margin: 0;
          transition: 0.5s;
          border-radius: 30px;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;

          &:hover {
            color: #8fbcff;
            border-radius: 0;
            font-weight: bolder;
            cursor: pointer;
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
            box-shadow:
              inset 20px 0 15px -15px #fff,
              inset -20px 0 15px -15px #fff;
          }
        }
      }
    }

    .isSubActive {
      border-radius: 5px;
      font-weight: bolder;
      transition: 0.5s;

      color: #cbf0ff;
      font-weight: bolder;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: inset 20px 0 15px -15px #00ff666d;
    }

    h6 {
      display: inline-block;
      height: 2rem;
      line-height: 2rem;
      padding: 5px 10px;
      margin: 0;
      transition: 0.5s;
      border-radius: 5px;
      border: 1px solid transparent;

      &:hover {
        color: #cbf0ff;
        font-weight: bolder;
        cursor: pointer;
        border: 1px solid #fff;
        box-shadow:
          inset 20px 0 15px -15px #00ff666d,
          inset -20px 0 15px -15px #00ff666d;
      }
    }

    button {
      height: 2rem;
      line-height: 2rem;
      padding: 5px 10px;
      margin: 0;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  footer {
    width: 98%;
    height: 93%;
    margin-left: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    overflow-y: auto;

    .choiceSecondTabFooter {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: flex-start;

      span {
        width: 30%;
        height: 45%;
        margin: 1%;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        transition: 0.5s;

        h5 {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px 10px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          border-radius: 0 10px 0 10px;
        }

        div {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 10px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0 0 10px 10px;

          svg {
            width: 2rem;
            height: 2rem;
            fill: #fff;
          }

          h4 {
            color: #fff;
            margin: 5px 0;
          }

          ol {
            display: flex;
            flex-wrap: wrap;

            li {
              color: #ccc;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
