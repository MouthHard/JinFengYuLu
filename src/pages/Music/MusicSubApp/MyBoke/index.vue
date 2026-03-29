<template>
  <header>
    <button :class="{ isActive: activeTab === 0 }" @click="handleToggle(0)">
      收藏播客
      <h6>{{ collectBokeArr.length }}</h6>
    </button>
    <button :class="{ isActive: activeTab === 1 }" @click="handleToggle(1)">
      创建播客
      <h6>{{ collectBokeArr.length }}</h6>
    </button>
    <button :class="{ isActive: activeTab === 2 }" @click="handleToggle(2)">
      购买播客
      <h6>{{ collectBokeArr.length }}</h6>
    </button>
    <button :class="{ isActive: activeTab === 3 }" @click="handleToggle(3)">
      喜欢的声音
      <h6>{{ likeBokeArr.length }}</h6>
    </button>
  </header>
  <footer>
    <div v-show="activeTab === 0" id="myBokeA">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>播放量</th>
            <th>声音数</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in collectBokeArr"
            :key="item._originalId"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <span>
                <h6>{{ item.updated }}</h6>
                <h5>{{ item.description }}</h5>
              </span>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M9.52 3a2 2 0 0 1 1.442.614l.12.137L12.48 5.5H20a2 2 0 0 1 1.995 1.85L22 7.5V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zM9 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                    />
                  </g>
                </svg>
              </h4>
            </td>
            <td>
              {{ item.playNum }}
            </td>
            <td>{{ item.soundNum }}</td>
          </tr>
        </tbody>
      </table>
      <aside>
        <h3>为您推荐 ▼</h3>
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
      </aside>
      <footer>
        <span
          v-for="item in collectRecommend"
          :key="item.id"
          :style="{
            background: `url(${item.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <h5>{{ item.playNum }}</h5>
          <div
            :style="{
              background: item.bgColor,
              boxShadow: item._isHovered
                ? `0 -3rem 3rem -1px ${item.bgColor}`
                : 'none',
            }"
            @mouseenter="item._isHovered = true"
            @mouseleave="item._isHovered = false"
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
          </div>
        </span>
      </footer>
    </div>
    <div v-show="activeTab === 1" id="myBokeB">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>播放量</th>
            <th>声音数</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in collectBokeArr"
            :key="item._originalId"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <span>
                <h6>{{ item.updated }}</h6>
                <h5>{{ item.description }}</h5>
              </span>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M9.52 3a2 2 0 0 1 1.442.614l.12.137L12.48 5.5H20a2 2 0 0 1 1.995 1.85L22 7.5V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zM9 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                    />
                  </g>
                </svg>
              </h4>
            </td>
            <td>
              {{ item.playNum }}
            </td>
            <td>{{ item.soundNum }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="activeTab === 2" id="myBokeC">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>播放量</th>
            <th>声音数</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in collectBokeArr"
            :key="item._originalId"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <span>
                <h6>{{ item.updated }}</h6>
                <h5>{{ item.description }}</h5>
              </span>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M9.52 3a2 2 0 0 1 1.442.614l.12.137L12.48 5.5H20a2 2 0 0 1 1.995 1.85L22 7.5V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zM9 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                    />
                  </g>
                </svg>
              </h4>
            </td>
            <td>
              {{ item.playNum }}
            </td>
            <td>{{ item.soundNum }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="activeTab === 3" id="myBokeD">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>播放量</th>
            <th>声音数</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in likeBokeArr"
            :key="item._originalId"
            @mouseenter="handleMouseEnter(item)"
            @mouseleave="handleMouseLeave(item)"
          >
            <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <span>
                <h5>{{ item.description }}</h5>
              </span>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M9 4L7 2H0v13h16V4zm-1 9.5L4.5 10H7V6h2v4h2.5z"
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
                    d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 9H8v2h3v3h2v-3h3v-2h-3V8h-2z"
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
                    d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm8-11V9h-2v2zm-4 0V9h-2v2zm-4 0V9H7v2z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.08l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M9.52 3a2 2 0 0 1 1.442.614l.12.137L12.48 5.5H20a2 2 0 0 1 1.995 1.85L22 7.5V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zM9 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                    />
                  </g>
                </svg>
              </h4>
            </td>
            <td>
              {{ item.playNum }}
            </td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </footer>
</template>
<script setup>
import { ref, reactive } from "vue";
import {
  COLLECT_BOKE_ARR,
  COLLECT_RECOMMEND,
  LIKE_BOKE_ARR,
} from "../../data/myBoke";

const activeTab = ref(0);

const handleToggle = (index) => {
  activeTab.value = index;
};

const collectBokeArr = reactive(COLLECT_BOKE_ARR.map((item) => ({ ...item })));

const collectRecommend = reactive(
  COLLECT_RECOMMEND.map((item) => ({ ...item })),
);

const likeBokeArr = reactive(LIKE_BOKE_ARR.map((item) => ({ ...item })));

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
