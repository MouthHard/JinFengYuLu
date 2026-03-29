<template>
  <div id="RL-C_Con">
    <div class="ranking" v-for="item in rankingArr" :key="item.id">
      <header>{{ item.headerText }}</header>
      <footer>
        <div v-for="it in item.footerArr" :key="it.subId">
          <h3>{{ it.h3Text }}</h3>
          <h6>{{ it.h6Text }}</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M22 12a9.969 9.969 0 0 1-2.922 7.064M2 12a9.969 9.969 0 0 1 2.936-7.078M19.141 5a10.015 10.015 0 0 1 2.027 3M5 19.142A10.02 10.02 0 0 1 2.832 16m13.453-7.956C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982C6 10.427 6.673 9.018 7.762 8"
              />
              <path
                d="M13.656 10.451C14.552 11.11 15 11.438 15 12c0 .562-.448.891-1.344 1.549a13.08 13.08 0 0 1-.718.495a12.23 12.23 0 0 1-.653.38c-.894.49-1.34.735-1.741.464c-.401-.271-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917c0-.282.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.272.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495Z"
              />
            </g>
          </svg>
        </div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { RANKING_ARR } from "../../../data/rankingList";

const rankingArr = RANKING_ARR;

const randomRGBA = () => {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return `rgba(${R}, ${G}, ${B}, 1)`;
};

onMounted(() => {
  const colorDom = document.querySelectorAll(".ranking footer div");
  colorDom.forEach((item) => {
    item.style.background = `linear-gradient(45deg, ${randomRGBA()}, ${randomRGBA()})`;
  });
});
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#RL-C_Con {
  width: 97%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .ranking {
    width: 100%;
    height: 50%;
    margin-top: 3%;
    padding: 10px 0 0 15px;
    header {
      font-weight: bolder;
      width: 100%;
      height: 10%;
    }
    footer {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      height: 90%;
      div {
        width: 12%;
        height: 45%;
        margin-left: 1%;
        text-align: center;
        transition: 1s;
        svg {
          opacity: 0;
          transition: 1s;
        }
        h3 {
          margin-top: 1px;
          margin-bottom: 10px;
          padding-bottom: 10px;
          transition: 1s;
          border-bottom: 1px solid rgb(0, 0, 0, 0);
          text-shadow:
            -1px 1px 0 #000000,
            1px 1px 0 #000000,
            1px -1px 0 #000000,
            -1px -1px 0 #000000;
        }
        h6 {
          margin: 0;
          opacity: 0;
          transition: 1s;
          color: #000000;
        }
        &:hover h6 {
          opacity: 1;
          text-shadow:
            -1px 1px 0 #fffdfd,
            1px 1px 0 #fff,
            1px -1px 0 #fff,
            -1px -1px 0 #fff;
        }
        &:hover {
          cursor: pointer;
          transform: scale(1.2) translateY(5%);
        }
        &:hover h3 {
          cursor: pointer;
          border-bottom: 1px solid rgb(134, 133, 133);
        }
        &:hover svg {
          opacity: 1;
        }
      }
    }
  }
}
</style>
