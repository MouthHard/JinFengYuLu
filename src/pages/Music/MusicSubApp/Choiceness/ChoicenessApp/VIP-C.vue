<template>
  <div id="VIPCFirstLine">
    <div id="carousel_VIP">
      <div id="carousel_img_VIP">
        <template v-for="value in imgArr" :key="value.idx">
          <img
            :src="value.src"
            alt=""
            :style="{ transform: `translateX(${carouselTranslateX}%)` }"
          />
          <h6>VIP 精选歌单</h6>
        </template>
      </div>

      <!-- 轮播图圆点 -->
      <div id="carousel_btn_VIP">
        <template v-for="value in imgArr" :key="value.idx">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            :class="{ activeBtn: btnIndex === value.idx }"
            @mouseenter="changeDot(value.idx)"
          >
            <path
              fill="currentColor"
              d="M2.34 6.423L12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578zM12 3.155L9.67 4.5L12 5.845L14.33 4.5zm4.33 2.5L12 8.155l-4.33-2.5L5.34 7L12 10.845L18.66 7zm3.33 3.077L13 12.577v7.69l2.34-1.35v-4.994l4.32-2.495zm0 5.006l-2.32 1.34v2.684l2.32-1.34zm-15.32-2.31l4.32 2.495v4.994l2.34 1.35v-7.69L4.34 8.732zm0 2.31v2.685l2.32 1.34v-2.686z"
            />
          </svg>
        </template>
      </div>
    </div>
    <div id="VIP-Infor">
      <h1>
        <img
          src="https://ts1.cn.mm.bing.net/th/id/R-C.8886a7791c3dbd6296c92e51f5db804c?rik=mwvTvT%2flTpJ%2bIg&riu=http%3a%2f%2fit.people.com.cn%2fmediafile%2f200809%2f05%2fF200809051347203066413521.jpg&ehk=fTvkeukj4fe4njzI%2fufpdqXty7vDObWpOUEwc7bMAhg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </h1>
      <div>
        <h3>游音风</h3>
        <h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.17em"
            height="1.2em"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160m160 96c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96m0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32"
            />
          </svg>
          VIP 拾
        </h6>
        <h6>9999-12-31到期</h6>
      </div>
      <h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M12.987 5.74a2 2 0 1 0-1.97.002l-.01.018c-.655 1.367-1.565 3.325-2.97 4.06c-1.154.603-2.81.3-4.04.074a1.5 1.5 0 1 0-1.772 1.58l2.948 7.61A3 3 0 0 0 7.97 21h8.06a3 3 0 0 0 2.797-1.916l2.947-7.61a1.5 1.5 0 1 0-1.767-1.624c-1.259.163-2.882.371-4.044-.236c-1.377-.72-2.3-2.543-2.976-3.874"
            />
          </g>
        </svg>
        会员曲库
      </h5>
      <h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2.005 19h20v2h-20zm9-11h2v8h-2zM7.97 8l-1.86 5.113L4.247 8H2.123l2.986 7.964h2L10.095 8zm9.035 6v2h-2V8h4a3 3 0 0 1 0 6zm0-4v2h2a1 1 0 1 0 0-2zm-15-7h20v2h-20z"
          /></svg
        >免费下载
      </h5>
      <h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3.5 12a8.5 8.5 0 0 1 17 0v2h-2.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75H19a3 3 0 0 0 3-3v-7c0-5.523-4.477-10-10-10S2 6.477 2 12v7a3 3 0 0 0 3 3h.75a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H3.5zm9.25-.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm-4 2.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75m7.25.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"
          />
        </svg>
        无损音质
      </h5>
      <h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 1200 1200"
        >
          <path
            fill="currentColor"
            d="M0 0v1200h1200V0zm392.285 228.223c71.542 0 129.564 57.95 129.564 129.492S463.827 487.28 392.285 487.28S262.72 429.257 262.72 357.715s58.023-129.492 129.565-129.492m403.784 0c71.542 0 129.491 57.95 129.491 129.492S867.611 487.28 796.069 487.28s-129.565-58.023-129.565-129.565s58.023-129.492 129.565-129.492M183.032 636.108h833.936c0 230.285-186.682 417.04-416.968 417.04s-416.968-186.753-416.968-417.04"
          />
        </svg>
        头像挂件
      </h5>
      <h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M42.5 23.093a18.5 18.5 0 0 1-37 0"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M35.335 23.093a11.335 11.335 0 1 1-22.67 0"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M29.463 23.093a5.463 5.463 0 0 1-10.926 0m5.173-.134c-2.689 0-.717-6.244-3.445-7.422c-2.938-1.269-9.27-1.195-9.988-9.13A27.9 27.9 0 0 1 18.1 7.911c3 1.284 4.821 1.198 6.208 4.582c0 0 .53-2.953 4.994-4.187a35.4 35.4 0 0 1 8.02-1.287a6.7 6.7 0 0 1-1.947 5.684c-2.53 2.332-7.963 2.273-8.441 4.652c-.49 2.432-.536 5.604-3.224 5.604"
          />
        </svg>
        会员音效
      </h5>
      <button>续费</button>
    </div>
  </div>

  <div id="VIPCSecondLine">
    <header>
      <h3>金花VIP 每日推荐</h3>
      <button @click="changePart(0, 'second')">◁</button>
      <button @click="changePart(1, 'second')">▷</button>
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
        v-for="it in secondArr"
        :key="it.id"
        :style="{
          transform: `translateX(${secondTranslateX}%)`,
          transition: '0.5s',
        }"
      >
        <svg
          class="VIPCS-PlayBtn"
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
        <div class="songInfo">
          <img :src="it.imgSrc" alt="" />
          <h4>{{ it.h4Text }}</h4>
          <h5>{{ it.h5Text }}</h5>
        </div>
        <div class="songTag">
          <h6 v-for="word in it.h6Text">{{ word }}</h6>
        </div>

        <div class="songLogo">
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
  <div id="VIPCThirdLine">
    <header>
      <h3>金花VIP 排行榜</h3>
      <button @click="changePart(0, 'third')">◁</button>
      <button @click="changePart(1, 'third')">▷</button>
    </header>
    <footer>
      <div
        class="thirdRank"
        v-for="item in thirdArr"
        :key="item.rankName"
        :style="{
          transform: `translateX(${thirdTranslateX}%)`,
          transition: '0.5s',
        }"
      >
        <div>
          <h3>{{ item.rankName }} ♦</h3>
          <button>▶ 播放</button>
        </div>
        <div>
          <span v-for="it in item.rankArr" :key="it.rankId">
            <svg
              class="VIPCS-PlayBtn"
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
            <div class="songInfo">
              <img :src="it.imgSrc" alt="" />
              <h4>{{ it.h4Text }}</h4>
              <h5>{{ it.h5Text }}</h5>
              <div class="songTag">
                <h6 v-for="word in it.h6Text">{{ word }}</h6>
              </div>
            </div>

            <div class="songLogo">
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
            <h6>
              {{ it.ranking }}
            </h6>
          </span>
        </div>
      </div>
    </footer>
  </div>
  <div id="VIPCFourLine">
    <header>
      <h3>金花VIP 有声书</h3>
      <button @click="changePart(0, 'four')">◁</button>
      <button @click="changePart(1, 'four')">▷</button>
    </header>
    <footer>
      <span
        v-for="it in fourArr"
        :key="it.id"
        :style="{
          transform: `translateX(${fourTranslateX}%)`,
          transition: '0.5s',
        }"
      >
        <svg
          class="VIPCS-PlayBtn"
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
        <div class="songInfo">
          <img :src="it.imgSrc" alt="" />
          <h4>{{ it.h4Text }}</h4>
          <h5>{{ it.h5Text }}</h5>
          <div class="songTag">
            <h6 v-for="word in it.h6Text">{{ word }}</h6>
          </div>
        </div>

        <div class="songLogo">
          <h3>{{ it.count }}</h3>
          <h6>▶ {{ it.playnum }}</h6>
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
  <div id="VIPFifthLine">
    <header>
      <h3>金花VIP 数字专辑</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5em"
        viewBox="0 0 8 8"
      >
        <path
          fill="currentColor"
          d="M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4c1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88c-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.55.36 2.09.91L4.99 3h3V0L6.8 1.19C6.08.47 5.09 0 3.99 0z"
        />
      </svg>
    </header>
    <footer>
      <span v-for="item in fifthArr" :key="item.id">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18 11c.34 0 .67.03 1 .08V2H3v20h9.26A6.995 6.995 0 0 1 18 11M7 11V4h5v7L9.5 9.5z"
          />
          <path
            fill="currentColor"
            d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m-1.25 7.5v-5l4 2.5z"
          />
        </svg>
        <img :src="item.imgSrc" alt="" />
        <h4>{{ item.albumName }}</h4>
        <h6>{{ item.albumPerson }}</h6>
      </span>
    </footer>
  </div>
  <div id="VIPSixthLine">
    <header>
      <h3>金花VIP 歌单推荐</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5em"
        viewBox="0 0 8 8"
      >
        <path
          fill="currentColor"
          d="M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4c1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88c-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.55.36 2.09.91L4.99 3h3V0L6.8 1.19C6.08.47 5.09 0 3.99 0z"
        />
      </svg>
    </header>

    <footer>
      <span
        v-for="(item, index) in sixthArr"
        :key="item.id"
        :style="{
          background: `url(${item.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity:
            hoveredSixthIndex === index
              ? '1'
              : hoveredSixthIndex === -1
                ? '1'
                : '0.1',
        }"
        @mouseenter="hoveredSixthIndex = index"
        @mouseleave="hoveredSixthIndex = -1"
      >
        <h5>{{ item.playNum }}</h5>
        <div
          :style="{
            background: item.bgColor,
            boxShadow:
              hoveredSixthIndex === index
                ? `0 0 3rem -1px ${item.bgColor}`
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
          <h4>{{ item.playName }}</h4>
          <ol>
            <li v-for="it in item.songArr">{{ it }}</li>
          </ol>
        </div>
      </span>
    </footer>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import {
  imgArr,
  sixthArr,
  fifthArr,
  fourArr,
  thirdArr,
  secondArr,
} from "../../../data/vip";

let btnIndex = ref(0);
let partIndexSecond = ref(0);
let partIndexThird = ref(0);
let partIndexFour = ref(0);
const hoveredSixthIndex = ref(-1);

const changeDot = (index) => {
  btnIndex.value = index;
};

const changePart = (d, type) => {
  const partIndexMap = {
    second: partIndexSecond,
    third: partIndexThird,
    four: partIndexFour,
  };
  const currentRef = partIndexMap[type];
  const maxPage = 2;
  if (d === 0) {
    currentRef.value = Math.abs(currentRef.value - 1) % maxPage;
  } else {
    currentRef.value = (currentRef.value + 1) % maxPage;
  }
};

const carouselTranslateX = computed(() => -btnIndex.value * 100);
const secondTranslateX = computed(() => -partIndexSecond.value * 100);
const thirdTranslateX = computed(() => -partIndexThird.value * 100);
const fourTranslateX = computed(() => -partIndexFour.value * 100);
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

#VIPCFirstLine {
  display: flex;
  height: 25%;
  width: 100%;

  justify-content: flex-start;
  align-items: center;

  #carousel_VIP {
    border-radius: 15px;
    width: 25%;
    height: 90%;
    margin: 0 1rem;
    position: relative;
    overflow: hidden;
    display: flex;

    &::before {
      pointer-events: none;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(37, 37, 37, 0.5);
      opacity: 0;
      transition: 0.5s;
    }

    &:hover::before {
      opacity: 1;
      cursor: pointer;
    }

    #carousel_img_VIP {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;

      img {
        min-width: 100%;
        height: 100%;
        background-size: cover;
      }

      img:hover {
        cursor: pointer;
      }

      h6 {
        font-weight: bolder;
        left: 38%;
        top: 40%;
        position: absolute;
        color: rgb(255, 255, 255);
        text-shadow:
          -1px 1px 0 #000,
          1px 1px 0 #000,
          1px -1px 0 #000,
          -1px -1px 0 #000;
      }
    }

    #carousel_btn_VIP {
      width: 100%;
      height: 10%;
      position: absolute;
      bottom: 10%;
      left: 0;
      display: flex;
      justify-content: space-around;
      z-index: 1;

      svg {
        transition: 0.5s;
      }

      svg:hover {
        cursor: pointer;
        color: rgb(40, 109, 248);
        box-shadow: 0 0 10px 2px #0062ff;
      }

      button:hover {
        cursor: pointer;
      }

      .activeBtn {
        color: rgb(255, 2, 2);
      }
    }
  }

  #VIP-Infor {
    display: flex;
    width: 55%;
    height: 90%;
    background: linear-gradient(to right, black, rgb(87, 87, 87));
    border-radius: 10px;
    align-items: center;

    h1 {
      width: 20%;
      height: 100%;

      img {
        margin: 15px;
        border-radius: 50%;
        transition: 1s;
        border: 4px double red;
        width: 75%;
        height: 70%;
        background-size: cover;

        &:hover {
          cursor: pointer;
          transform: scale(0.7);
          border: 4px ridge red;
          box-shadow:
            0 0 15px 10px red,
            inset 0 0 15px 10px #000;
        }
      }
    }

    h5 {
      display: flex;
      height: 50%;
      font-weight: bolder;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0 10px;

      &:hover {
        cursor: pointer;

        color: #7bdcfa;
      }
    }

    div:nth-of-type(1) {
      margin: 0 10px;
      text-align: center;

      h6 {
        padding: 5px 0;
        margin: 10px 0;
      }

      h6:nth-of-type(1) {
        color: #fef770;
      }

      h6:nth-of-type(2) {
        color: #91ff00;
      }
    }

    button {
      margin: 10% 0;
      padding: 10px;
      border-radius: 50%;
      border: none;
      transition: 1s;

      &:hover {
        cursor: pointer;
        transform: rotatey(360deg);
        background: #000;
        color: #fff;
      }
    }
  }
}

#VIPCThirdLine,
#VIPCSecondLine,
#VIPCFourLine,
#VIPFifthLine,
#VIPSixthLine {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 2%;
  margin-top: 3%;

  header {
    position: relative;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      padding: 10px;
      border-left: 2px solid #fff;
      box-shadow: inset 15px 0 15px 2px #275c68;
    }

    button {
      font-size: 1.5rem;
      position: absolute;
      background: transparent;
      top: 20%;
      z-index: 1;
      margin: 10px;
      color: #ffffff;
      border: transparent;

      &:hover {
        text-align: center;
        padding: 0 20px;
        transition: 1s;
        cursor: pointer;
        color: #ff0000;
        border-bottom: 1px solid red;
      }

      &:nth-of-type(1) {
        left: 30%;
      }

      &:nth-of-type(2) {
        left: 50%;
      }
    }
  }
}

#VIPCSecondLine {
  height: 85%;

  footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 93%;
    flex-direction: column;
    justify-content: flex-start;

    span {
      display: grid;
      position: relative;
      margin-top: 1%;
      margin-left: 1%;
      grid-template-columns: 50% 20% 30%;
      grid-template-rows: 100%;
      width: 40%;
      height: 20%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      overflow: hidden;

      .VIPCS-PlayBtn {
        position: absolute;
        left: 10%;
        top: 40%;
        opacity: 0;
        transition: 1s;
        z-index: 2;
      }

      &:hover .VIPCS-PlayBtn {
        opacity: 1;
        transform: scale(1.5);
      }

      &:hover {
        cursor: pointer;
      }

      &:hover .songLogo {
        opacity: 1;
      }

      &:hover img {
        transform: scale(0.8);
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #000, #fff);
        opacity: 0;
        pointer-events: none;
        z-index: 1;
      }

      &:hover::before {
        opacity: 0.3;
      }

      .songInfo {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;

        img {
          width: 50%;
          height: 100%;

          transition: 0.5s;
        }

        h4,
        h5 {
          width: 50%;
          height: 45%;
          margin: 0;
          white-space: pre-wrap;
          padding-left: 5px;

          &:hover {
            cursor: pointer;
            color: #fcdf00;
          }
        }
      }

      .songTag {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;

        h6 {
          height: 20%;
          padding: 3px 0;
          margin: 3px 0 0 0;
          transition: 0.5s;
          text-align: center;
          color: #ff0000;
          border-radius: 5px;
          border: 2px solid #ff0000;

          &:hover {
            cursor: pointer;
            color: #00b7ff;
            border: 2px solid #00a2ff;
          }
        }
      }

      .songLogo {
        transition: 0.5s;
        opacity: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}

svg:hover {
  color: #ff0000;
  cursor: pointer;
}

#VIPCThirdLine {
  height: 70%;

  footer {
    width: 100%;
    height: 90%;
    display: flex;

    .thirdRank {
      margin: 1% 0 0 1%;
      width: 35%;
      height: 85%;
      flex-shrink: 0;
      background: #303030;

      div:nth-of-type(1) {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-between;

        h3 {
          margin: 10px 0 0 10px;
          text-align: center;
        }

        button {
          border-radius: 10px;
          padding: 5px;
          font-weight: bolder;

          border: none;
          color: #fff;
          background: rgba(75, 75, 75, 0.5);
          margin: 10px 10px 0 0;

          &:hover {
            cursor: pointer;
            background: rgba(136, 135, 135, 0.5);
          }
        }
      }

      div:nth-of-type(2) {
        width: 100%;
        height: 82%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          display: grid;
          position: relative;
          margin-top: 1%;
          margin-left: 1.5%;
          grid-template-columns: 60% 20% 20%;
          grid-template-rows: 100%;
          width: 98.5%;
          height: 30%;
          overflow: hidden;

          .songInfo {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;

            img {
              width: 45%;
              height: 100%;
              border-radius: 15px;
              transition: 0.5s;
            }

            h4,
            h5 {
              width: 55%;
              height: 35%;
              margin: 0;
              text-align: center;
              white-space: pre-wrap;
              padding-left: 5px;

              &:hover {
                cursor: pointer;
                color: #fcdf00;
              }
            }

            .songTag {
              width: 50%;
              height: 30%;
              display: flex;
              justify-content: flex-start;

              h6 {
                white-space: pre-wrap;
                padding: 3px;
                margin: 0 0 0 3px;
                transition: 0.5s;
                text-align: center;
                color: #ff0000;
                border-radius: 5px;
                border: 2px solid #ff0000;

                &:hover {
                  cursor: pointer;
                  color: #00b7ff;
                  border: 2px solid #00a2ff;
                }
              }
            }
          }

          .songLogo {
            transition: 0.5s;
            opacity: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          &:hover {
            cursor: pointer;
          }

          &:hover img {
            transform: scale(0.8);
          }

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #000, #fff);
            opacity: 0;
            pointer-events: none;
            z-index: 1;
          }

          &:hover::before {
            opacity: 0.3;
          }

          .VIPCS-PlayBtn {
            position: absolute;
            left: 10%;
            top: 40%;
            opacity: 0;
            transition: 1s;
            z-index: 2;
          }

          &:hover .VIPCS-PlayBtn {
            opacity: 1;
            transform: scale(1.5);
          }

          &:hover .songLogo {
            opacity: 1;
          }
        }
      }
    }
  }
}

#VIPCFourLine {
  height: 65%;

  footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 85%;
    flex-direction: column;
    justify-content: flex-start;

    span {
      display: grid;
      position: relative;
      margin-top: 1%;
      margin-left: 1.5%;
      grid-template-columns: 80% 20%;
      grid-template-rows: 100%;
      width: 40%;
      height: 45%;
      overflow: hidden;

      .songInfo {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;

        img {
          width: 40%;
          height: 100%;
          border-radius: 15px;
          transition: 0.5s;
        }

        h4,
        h5 {
          width: 60%;
          height: 35%;
          line-height: 2rem;
          margin: 0;
          text-align: center;
          white-space: pre-wrap;
          padding-left: 5px;

          &:hover {
            cursor: pointer;
            color: #fcdf00;
          }
        }

        .songTag {
          width: 50%;
          height: 30%;
          display: flex;
          justify-content: flex-start;

          h6 {
            line-height: 1.5rem;
            height: 1.5rem;
            white-space: pre-wrap;
            padding: 3px;
            margin: 0 0 0 3px;
            transition: 0.5s;
            text-align: center;
            color: #00a2ff;
            border-radius: 5px;
            border: 2px solid #00a2ff;

            &:hover {
              cursor: pointer;
              color: #ff0303;
              border: 2px solid #ff0303;
            }
          }
        }
      }

      .songLogo {
        transition: 0.5s;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3,
        h6 {
          margin: 0.5rem 0;
        }

        h6 {
          color: #969292;
        }
      }

      &:hover {
        cursor: pointer;
      }

      &:hover img {
        transform: scale(0.8);
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #000, #fff);
        opacity: 0;
        pointer-events: none;
        z-index: 1;
      }

      &:hover::before {
        opacity: 0.3;
      }

      .VIPCS-PlayBtn {
        position: absolute;
        left: 15%;
        top: 40%;
        opacity: 0;
        transition: 1s;
        z-index: 2;
      }

      &:hover .VIPCS-PlayBtn {
        opacity: 1;
        transform: scale(1.5);
      }

      &:hover .songLogo {
        opacity: 1;
      }
    }
  }
}

#VIPFifthLine {
  footer {
    margin-top: 1%;
    height: 88%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 15%;
      position: relative;

      h4,
      h6 {
        margin: 5px;
      }

      h4 {
        &:hover {
          cursor: pointer;
          transition: 0.5s;
          color: #ff0000;
        }
      }

      h6 {
        color: #8c8b8b;

        &:hover {
          cursor: pointer;
          transition: 0.5s;
          color: #ffffff;
        }
      }

      &:hover {
        cursor: pointer;
        transition: 0.5s;
        background: #1a1919;
      }

      &:hover svg {
        opacity: 1;
      }

      &:hover img {
        opacity: 0.5;
      }

      svg {
        position: absolute;
        left: 40%;
        top: 30%;
        opacity: 0;
        transition: 0.5s;
        z-index: 1;

        &:hover {
          cursor: pointer;
          color: #0370ff;
        }
      }

      img {
        width: 100%;
      }
    }
  }
}

#VIPSixthLine {
  height: 60%;

  footer {
    width: 100%;
    display: flex;
    height: 80%;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;

    /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
      /* Chrome Safari */
    }

    span {
      position: relative;
      background-size: cover;
      background-position: center;
      width: 11%;
      flex-shrink: 0;
      height: 100%;
      padding: 0 20px;
      margin-left: 20px;
      border-radius: 10px;

      color: #ffffff;

      h5 {
        margin: 0.2rem;
        padding-top: 0.3rem;
        text-align: right;
      }

      div {
        position: absolute;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-y: hidden;
        background: #144da8;
        border-radius: 10px;
        opacity: 0;
        transition: 1s;
        z-index: -1;

        svg {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      &:hover div {
        z-index: 1;
        opacity: 1;
      }

      &:hover {
        transition: 1s;

        cursor: pointer;
        text-shadow: -1px 1px 0 #000000;
      }

      h4,
      ol {
        margin: 5px;
      }
    }
  }
}
</style>
