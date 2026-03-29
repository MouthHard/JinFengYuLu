<template>
  <div id="shopMain">
    <div id="shopHeader">
      <div id="imgGroup">
        <img v-for="item in imgArr" :key="item.id" :src="item.imgSrc" alt="" />
      </div>
      <div id="buttonGroup">
        <img
          src="https://images-pc.oss-cn-hongkong.aliyuncs.com/mao.png"
          alt=""
        />
        <button class="clickBtn">
          {{ btnArr[0].name }}
          <div class="subBtn" v-show="curArr == 0">
            <span v-for="value in btnArr[0].subArr.slice(0, 3)">
              {{ value }}
            </span>
            <p>推荐</p>
            <span v-for="value in btnArr[0].subArr.slice(3, 11)">
              {{ value }}
            </span>
            <p>因为您喜爱</p>
            <span
              v-for="value in btnArr[0].subArr.slice(
                11,
                btnArr[0].subArr.length,
              )"
            >
              {{ value }}
            </span>
          </div>
        </button>
        <button class="clickBtn">
          {{ btnArr[1].name }}
          <div class="subBtn" v-show="curArr == 1">
            <div class="leftSubBtn">
              <p>最热门</p>
              <span v-for="value in btnArr[1].subArr.slice(0, 4)">
                {{ value }}
              </span>
              <p>新闻及更新</p>
              <span v-for="value in btnArr[1].subArr.slice(4, 5)">
                {{ value }}
              </span>
            </div>
            <div class="rightSubBtn">
              <p>促销与活动</p>
              <span v-for="value in btnArr[1].subArr.slice(5, 10)">
                {{ value }}
              </span>
            </div>
          </div>
        </button>
        <button class="clickBtn">
          {{ btnArr[2].name }}
          <div class="subBtn" v-show="curArr == 2">
            <div class="leftSubBtn">
              <p>特别栏目</p>
              <span v-for="value in btnArr[2].subArr.slice(0, 14)">
                {{ value }}
              </span>
            </div>
            <div class="centerSubBtn">
              <p>类型</p>
              <span v-for="value in btnArr[2].subArr.slice(14, 62)">
                {{ value }}
              </span>
            </div>
            <div class="rightSubBtn">
              <p>主题</p>
              <span v-for="value in btnArr[2].subArr.slice(62, 69)">
                {{ value }}
              </span>
              <p>玩家支持</p>
              <span v-for="value in btnArr[2].subArr.slice(69, 76)">
                {{ value }}
              </span>
            </div>
          </div>
        </button>
        <button class="clickBtn" v-for="item in btnArr.slice(3, 5)">
          {{ item }}
        </button>

        <div id="searchGroup">
          <input type="text" placeholder="搜索" />
          <svg
            title="搜索"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m8.175 13l-3.324 6h11.824L20 13zM5.865 2.299L0 12.914l3.372 6.084L9.238 8.383zM19.445 12L13.349 1H6.604l6.088 11z"
            />
          </svg>
        </div>
        <div id="wishList">
          <button>愿望单（114514）</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 720 820"
            >
              <path
                fill="currentColor"
                d="M278 557q29 0 49 20t20 50t-20 49t-49 20t-49-20t-21-49t21-50t49-20m324 0q29 0 50 20t20 50t-20 49t-50 20t-49-20t-20-49t20-50t49-20M255 418v24h452q11 0 11 11v46q0 12-11 12H174q-12 0-12-12q0-81-21-159L72 79q-3-8-11-8H5q-5 0-5-5V6q0-5 5-5h129q5 0 5 5v35q0 7 7 7h561q11 0 11 11v186q0 15-9 27t-24 17z"
              />
            </svg>
            购物车（1919810）
          </button>
        </div>
      </div>
    </div>
    <div id="shopContainer">
      <div id="leftMenuCon">
        <div id="gift">
          <img
            src="https://store.st.dl.eccdnx.com/public/images/gift/steamcards_physical.png"
            alt=""
          />
          <h3>争气礼物卡</h3>
          以游戏为赠礼
        </div>
        <div class="subLeftMenuCon" v-for="value in leftConArr" :key="value.id">
          <p>{{ value.title }}</p>
          <span v-for="item in value.list">{{ item }}</span>
        </div>
      </div>
      <div id="rightMenuCon">
        <div
          id="rightCarousel"
          @mouseenter="clearDotchange"
          @mouseleave="setDotchange"
        >
          <h4>精选与推荐</h4>
          <button @click="leftOrRight(0)">◀</button>
          <!-- 轮播图图片容器-->
          <div id="carousel-img">
            <template v-for="value in carouselArr" :key="value.id">
              <img :src="value.src" />
            </template>
          </div>

          <div id="carousel-con">
            <h2>{{ carouselArr[btnIndex].title }}</h2>
            <div id="curCards">
              <img
                v-for="imgSrc in carouselArr[btnIndex].cardArr"
                :src="imgSrc"
              />
            </div>
            <h3>{{ carouselArr[btnIndex].introduce }}</h3>
            <div id="curTags">
              <h6 v-for="tag in carouselArr[btnIndex].tags">{{ tag }}</h6>
            </div>
            <p>
              <span v-show="carouselArr[btnIndex].discount !== 0"
                >-{{ carouselArr[btnIndex].discount }}%</span
              >
              <span
                :style="{
                  textDecoration:
                    carouselArr[btnIndex].discount !== 0
                      ? 'line-through'
                      : 'none',
                }"
                >￥{{ carouselArr[btnIndex].price }}</span
              >
              <span v-show="carouselArr[btnIndex].discount !== 0"
                >￥{{
                  (
                    carouselArr[btnIndex].price *
                    (1 - carouselArr[btnIndex].discount / 100)
                  ).toFixed(2)
                }}</span
              >
            </p>
            <div id="carouselSvgGroup">
              <svg
                v-show="carouselArr[btnIndex].sprites.indexOf(0) !== -1"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.5 12.5H20V20h-7.5zm0-1V4H20v7.5zm-1 0H4V4h7.5zm0 1V20H4v-7.5z"
                />
              </svg>
              <svg
                v-show="carouselArr[btnIndex].sprites.indexOf(1) !== -1"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1 3.09a3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81a4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82s2 .82 3.3.79s2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04"
                />
              </svg>
              <svg
                v-show="carouselArr[btnIndex].sprites.indexOf(2) !== -1"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M478.07 356.88L439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0 1 14.28-8.78h198.28a16 16 0 0 1 14.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88M224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48Zm68 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20"
                />
              </svg>
            </div>
          </div>
          <button @click="leftOrRight(1)">▶</button>

          <!-- 轮播图圆点 -->
          <div id="carousel-btn">
            <template v-for="value in carouselArr" :key="value.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 717 669"
                :class="{ activeBtn: btnIndex === value.id }"
                @click="dotChange(value.id)"
              >
                <path
                  fill="currentColor"
                  d="M143 96V24h72v72zm359-72h71v72h-71zm143 215V96h72v287h-72v71h-72v72h72v72h72v71H573v-71h-71v-72H215v72h-72v71H0v-71h72v-72h71v-72H72v-71H0V96h72v143h71v-71h72V96h72v72h143V96h72v72h71v71zm-358 72v-72h-72v72zm215 0v-72h-72v72z"
                />
              </svg>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const imgArr = [
  {
    id: 0,
    imgSrc:
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/230410/header.jpg?t=1733441878",
  },
  {
    id: 1,
    imgSrc:
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2677660/header_schinese.jpg?t=1733702560",
  },
  {
    id: 2,
    imgSrc:
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2358720/header_schinese.jpg?t=1732286900",
  },
  {
    id: 3,
    imgSrc:
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1551360/header.jpg?t=1730830713",
  },
  {
    id: 4,
    imgSrc:
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/413150/header.jpg?t=1711128146",
  },
  {
    id: 5,
    imgSrc:
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1623730/header_schinese.jpg?t=1728458632",
  },
];

let curArr = ref(undefined);
const btnArr = [
  {
    name: "您的商店",
    subArr: [
      "主页",
      "关注的游戏和软件",
      "偏好",
      "探索队列",
      "新品队列",
      "社区推荐",
      "交互式推荐模型",
      "好友中热门",
      "争气鉴赏家",
      "为您推荐的DLC",
      "农业",
      "开放世界生存制作",
      "制作",
      "黑色幽默",
      "为您推荐更多的标签...",
    ],
  },
  {
    name: "新鲜推荐",
    subArr: [
      "热销产品",
      "最常玩的游戏",
      "新品",
      "即将推出",
      "最近更新",
      "特别优惠",
      "特卖活动",
      "争气年度回顾",
      "争气新品节",
      "争气大奖",
    ],
  },
  {
    name: "类别",
    subArr: [
      "免费开玩",
      "试玩",
      "抢先体验",
      "争气Deck",
      "非常适合Deck",
      "支持控制器",
      "远程畅玩",
      "VR作品",
      "VR硬件",
      "软件",
      "原声音轨",
      "macOS",
      "争气OS + Linux",
      "网吧游戏",
      "动作",
      "平台及奔跑",
      "格斗及武术",
      "清版射击",
      "砍杀",
      "第一人称射击",
      "第三人称射击",
      "街机及格斗",
      "冒险",
      "休闲",
      "冒险角色扮演",
      "剧情丰富",
      "类银河战士恶魔城",
      "视觉小说",
      "解谜",
      "隐藏物体",
      "角色扮演",
      "冒险角色扮演",
      "动作角色扮演",
      "回合制",
      "团队制",
      "日系角色扮演",
      "策略角色扮演",
      "类Rogue",
      "模拟",
      "农场及制作",
      "太空及飞行",
      "建造及自动化",
      "恋爱",
      "沙盒及物理",
      "爱好与工作",
      "生活及沉浸式",
      "策略",
      "军事",
      "卡牌及桌游",
      "即时战略",
      "回合制策略",
      "城市及定居点",
      "塔防",
      "大战略及4X",
      "体育及竞速",
      "体育模拟",
      "单人运动",
      "团队体育",
      "所有运动",
      "竞速",
      "竞速模拟",
      "钓鱼及狩猎",
      "动漫",
      "太空",
      "开放世界",
      "恐怖",
      "悬疑及推理",
      "生存",
      "科幻及赛博朋克",
      "单人",
      "合作",
      "在线竞技",
      "多人",
      "大型多人在线",
      "局域网",
      "本地及派对",
    ],
  },
  "点数商店",
  "新闻",
  "实验室",
];
const leftConArr = [
  {
    id: 0,
    title: "最近查看过",
    list: ["巫师3狂猎", "消逝的光芒", "赛博朋克2077", "刺客信条", "星露谷物语"],
  },
  {
    id: 1,
    title: "您的标签",
    list: ["农业", "开放世界生存制作", "中世纪", "农场", "末日"],
  },
  { id: 2, title: "推荐", list: ["由好友推荐", "由争气鉴赏家推荐", "标签"] },
  {
    id: 3,
    title: "浏览分类",
    list: [
      "热销商品",
      "新品",
      "即将推出",
      "优惠",
      "VR作品",
      "支持控制器",
      "非常适合Deck",
    ],
  },
  {
    id: 4,
    title: "按类型浏览",
    list: [
      "免费开玩",
      "抢先体验",
      "休闲",
      "体育",
      "冒险",
      "动作",
      "大型多人在线",
      "模拟",
      "独立",
      "竞速",
      "策略",
      "角色扮演",
    ],
  },
];
let btnIndex = ref(0);

const carouselArr = [
  {
    id: 0,
    title: "Red Dead Redemption 2",
    cardArr: [
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.600x338.jpg?t=1720558643",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.600x338.jpg?t=1720558643",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.600x338.jpg?t=1720558643",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.600x338.jpg?t=1720558643",
    ],
    price: 279.0,
    discount: 0,
    sprites: [0],
    tags: ["开放世界", "剧情丰富", "多结局"],
    introduce: "由于您玩过的游戏中包含以下标签，所以为您推荐",
    src: "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
  },
  {
    id: 1,
    title: "赛博朋克2077",
    cardArr: [
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1091500/ss_0e64170751e1ae20ff8fdb7001a8892fd48260e7.600x338.jpg?t=1733850169",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1091500/ss_7924f64b6e5d586a80418c9896a1c92881a7905b.600x338.jpg?t=1733850169",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1091500/ss_b529b0abc43f55fc23fe8058eddb6e37c9629a6a.600x338.jpg?t=1733850169",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1091500/ss_9284d1c5b248726760233a933dbb83757d7d5d95.600x338.jpg?t=1733850169",
    ],
    price: 298.0,
    discount: 55,
    sprites: [0],
    tags: ["热销商品"],
    introduce: "由争气鉴赏家为您推荐",
    src: "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/1091500/header_alt_assets_6_schinese.jpg?t=1733850169",
  },
  {
    id: 2,
    title: "It Takes Two Friend's Pass",
    cardArr: [
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2995920/ss_ca764f1c88a7b9ce19d232234db11b5d1a0d7d6b.600x338.jpg?t=1733241802",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2995920/ss_4726f5709993f73fd29b364bd981c2867866b444.600x338.jpg?t=1733241802",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2995920/ss_49e1b5a913ace8cbed8bd2893a3dc41e45dbb499.600x338.jpg?t=1733241802",
      "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2995920/ss_82f78b479de0a17332b7d7a111630e6da7206154.600x338.jpg?t=1733241802",
    ],
    price: 198.0,
    discount: 80,
    sprites: [0],
    tags: ["热销商品"],
    introduce: "现已推出",
    src: "https://shared.st.dl.eccdnx.com/store_item_assets/steam/apps/2995920/header.jpg?t=1733241802",
  },
];
let timerRecommend = null;
const dotChange = (index) => {
  btnIndex.value = index;
  realTimePicture();
};
const clearDotchange = () => {
  clearInterval(timerRecommend);
};
const setDotchange = () => {
  timerRecommend = setInterval(() => {
    leftOrRight(1);
  }, 3000);
};
const leftOrRight = (d) => {
  if (d == 0) {
    btnIndex.value =
      (btnIndex.value - 1 + carouselArr.length) % carouselArr.length;
  } else {
    btnIndex.value = (btnIndex.value + 1) % carouselArr.length;
  }
  realTimePicture();
};
const realTimePicture = () => {
  const imgArrDom = document.querySelectorAll("#carousel-img img");
  imgArrDom.forEach((e) => {
    e.style.transform = `translateX(${-btnIndex.value * 100}%)`;
  });
};
onMounted(() => {
  setDotchange();
  const clickBtn = document.querySelectorAll(".clickBtn");
  const subBtn = document.querySelectorAll(".subBtn");
  clickBtn.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      for (let i = 0; i < 3; i++) {
        if (item.textContent.split(" ")[0] == btnArr[i].name) {
          curArr.value = i;
          subBtn[i].style.display = "flex";
        }
      }
    });
    item.addEventListener("mouseleave", function () {
      for (let it of subBtn) {
        it.style.display = "none";
      }
    });
  });
});
onUnmounted(() => {
  clearInterval(timerRecommend);
});
</script>
<style lang="scss" scoped src="./index.scss" />
