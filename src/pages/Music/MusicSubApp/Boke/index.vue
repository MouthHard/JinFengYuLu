<template>
  <div id="BokeFirst">
    <div id="BokeFm" :style="{ background: fmBackground }">
      <h4>▁ ▂ ▃ ▄ ▅ ▆ ▇ █ 随身听FM █ ▇ ▆ ▅ ▄ ▃ ▂ ▁</h4>
      <div>
        <img :src="imgSrcFm" alt="" />
        <h3>{{ titleFm }}</h3>
        <h5>{{ listFm }}</h5>
        <h6>{{ numFm }}</h6>
      </div>
      <header>
        <div>
          <h5
            v-for="item in fmARR"
            :key="item.id"
            :class="{ isFmActive: item.id === fmActive }"
            @click="handleToggle(item.id)"
            :style="{ transform: `translateX(${-fmActive * 50}%)` }"
          >
            {{ item.text }}
          </h5>
        </div>
      </header>
      <footer>
        <button @click="changeFM(0)"></button>
        <h1></h1>
        <button @click="changeFM(1)"></button>
      </footer>
    </div>
    <div id="BokeList" :style="{ background: listBackground }">
      <header>
        <h5
          v-for="item in bokeListTags"
          :key="item.id"
          :class="{ isListActive: item.id === listAct }"
          @click="clickList(item.id)"
        >
          {{ item.text }}
        </h5>
        <button>查看更多</button>
      </header>
      <footer>
        <div
          v-show="item.id === listAct"
          v-for="item in bokeListTags"
          :key="item.id"
          class="choiceSecondTabFooter"
        >
          <span v-for="it in item.content" :key="it.id">
            <img :src="it.imgSrcList" alt="" />
            <h5 :style="{ background: it.h6Color }">{{ it.listId }}</h5>
            <h6>{{ it.h6Text }}</h6>
          </span>
        </div>
      </footer>
    </div>
    <div id="BokeBtn">
      <button v-for="(item, idx) in bokeBtnArr" :key="idx">{{ item }}</button>
    </div>
  </div>
  <div id="BokeSecond">
    <div
      class="BokeSecLine"
      v-for="item in BokeSecLineFooterArr"
      :key="item.idB"
    >
      <header>
        <h3>{{ item.h3Text }}</h3>
        <MoreIcon_Common />
      </header>
      <footer>
        <span
          v-for="(it, idx) in item.idBArr"
          :key="it.id"
          :style="{
            background: `url(${it.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          @mouseenter="hoveredBokeSec[`${item.idB}-${idx}`] = true"
          @mouseleave="hoveredBokeSec[`${item.idB}-${idx}`] = false"
        >
          <h5>{{ it.playNum }}</h5>
          <div
            :style="{
              background: it.bgColor,
              boxShadow: hoveredBokeSec[`${item.idB}-${idx}`]
                ? `0 -3rem 3rem -1px ${it.bgColor}`
                : 'none',
            }"
          >
            <PlayIcon_Boke />
            <h4>{{ it.playName }}</h4>
          </div>
        </span>
      </footer>
    </div>
    <div class="bokeMulPart" v-for="item in partArr" :key="item.partId">
      <div class="recFiveLine">
        <header>
          <h3>{{ item.title }}</h3>
          <MoreIcon_Common />
        </header>
        <footer>
          <span v-for="it in item.fifthArr" :key="it.id">
            <FivePlayBtnIcon class="FivePlayBtn" />
            <img :src="it.imgSrc" alt="" />
            <h4>{{ it.h4Text }}</h4>
            <h5>{{ it.h5Text }}</h5>
            <h6>{{ it.h6Text }}</h6>
            <h6>{{ it.h6OtherText }}</h6>
            <div>
              <LikeIcon_Boke />

              <ThreeDotIcon_Common />
            </div>
          </span>
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import {
  MoreIcon_Common,
  LikeIcon_Boke,
  ThreeDotIcon_Common,
} from "../../icon-components";
import {
  BOKE_FM_ARR,
  BOKE_BTN_ARR,
  BOKE_PARTS,
  BOKE_SECTIONS,
  BOKE_LIST_TAGS,
} from "../../data/boke";

let listAct = ref(0);
let fmActive = ref(0);
let imgSrcFm = ref(
  "https://i0.hdslb.com/bfs/article/86cdd7bfa8a596da0983fa0112c554a0cfaae684.jpg@progressive.webp",
);
let titleFm = ref("主播|《傲慢与偏见》：内心越强大的人，心性越沉稳");
let listFm = ref("播单：晚间读书");
let numFm = ref("123842次播放");
const hoveredBokeSec = reactive({});

const bokeBtnArr = BOKE_BTN_ARR;
const partArr = BOKE_PARTS;
const BokeSecLineFooterArr = BOKE_SECTIONS;
const fmARR = BOKE_FM_ARR;
const bokeListTags = BOKE_LIST_TAGS;

const fmBackground = computed(
  () => fmARR.find((it) => it.id === fmActive.value)?.bgcolor || "",
);
const listBackground = computed(
  () => bokeListTags.find((it) => it.id === listAct.value)?.bg || "",
);

const changeFM = (dir) => {
  if (dir === 0) {
    fmActive.value--;
    if (fmActive.value < 0) fmActive.value = fmARR.length - 1;
  } else {
    fmActive.value++;
    if (fmActive.value > fmARR.length - 1) fmActive.value = 0;
  }
  handleToggle(fmActive.value);
};

const clickList = (id) => {
  listAct.value = id;
};

const handleToggle = (id) => {
  fmActive.value = id;
  const fmItem = fmARR.find((it) => it.id === id);
  if (fmItem) {
    imgSrcFm.value = fmItem.imgSrc;
    titleFm.value = fmItem.title;
    listFm.value = fmItem.list;
    numFm.value = fmItem.num;
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />
