<template>
  <div class="played">
    <input
      type="radio"
      name="tab-radio"
      class="tab-radio"
      id="tab-radio-1"
      checked
      @change="buttonIndex = 1"
    />
    <label for="tab-radio-1" class="tab-handler"
      >单曲 {{ singleSongArr.length }}</label
    >
    <div class="tab-content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th @click="changeSongTitleA(0)">
              标题
              <h5>{{ songTitleArr[0].arr[sortIndex0] }}</h5>
            </th>
            <th @click="changeSongTitleA(1)">
              专辑
              <h5>{{ songTitleArr[1].arr[sortIndex1] }}</h5>
            </th>
            <th>喜欢</th>
            <th @click="changeSongTitleA(2)">
              播放时间
              <h5>{{ songTitleArr[2].arr[sortIndex2] }}</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in singleSongArr"
            :key="item.id"
            @mouseenter="hoveredRowIndex = idx"
            @mouseleave="hoveredRowIndex = -1"
          >
            <td @click="">{{ hoveredRowIndex === idx ? " ▶ " : item.id }}</td>
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
            <td>{{ item.album }}</td>
            <td>
              <svg
                @click="fullHeartOrEmpty(item.id)"
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 36 36"
              >
                <path
                  :fill="item.flag ? 'white' : 'red'"
                  d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242"
                />
              </svg>
            </td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input
      type="radio"
      name="tab-radio"
      class="tab-radio"
      id="tab-radio-2"
      @change="buttonIndex = 2"
    />
    <label for="tab-radio-2" class="tab-handler"
      >播客 {{ bokeSongArr.length }}</label
    >
    <div class="tab-content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>播放日期</th>
            <th>时长</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in bokeSongArr"
            :key="item.id"
            @mouseenter="hoveredBokeIndex = idx"
            @mouseleave="hoveredBokeIndex = -1"
          >
            <td @click="">{{ hoveredBokeIndex === idx ? " ▶ " : item.id }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <span>
                <h6>{{ item.fromList }}</h6>
                <h5>{{ item.progress }}</h5>
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
              {{ item.lastPlayed }}
            </td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input
      type="radio"
      name="tab-radio"
      class="tab-radio"
      id="tab-radio-3"
      @change="buttonIndex = 3"
    />
    <label for="tab-radio-3" class="tab-handler"
      >有声书 {{ soundBookArr.length }}</label
    >
    <div class="tab-content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>声音数</th>
            <th>时长</th>
          </tr>
        </thead>
        <tbody valign="center">
          <tr
            v-for="(item, idx) in soundBookArr"
            :key="item.id"
            @mouseenter="hoveredSoundBookIndex = idx"
            @mouseleave="hoveredSoundBookIndex = -1"
          >
            <td @click="">
              {{ hoveredSoundBookIndex === idx ? " ▶ " : item.id }}
            </td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <h4>
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
              {{ item.soundNum }}
            </td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input
      type="radio"
      name="tab-radio"
      class="tab-radio"
      id="tab-radio-4"
      @change="buttonIndex = 4"
    />
    <label for="tab-radio-4" class="tab-handler"
      >歌单 {{ listSongArr.length }}</label
    >
    <div class="tab-content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>歌曲数</th>
            <th>播放时间</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in listSongArr"
            :key="item.id"
            @mouseenter="hoveredListSongIndex = idx"
            @mouseleave="hoveredListSongIndex = -1"
          >
            <td @click="">
              {{ hoveredListSongIndex === idx ? " ▶ " : item.id }}
            </td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
              <h4>
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
              {{ item.songNum }}
            </td>
            <td>{{ item.lastPlayed }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <input
      type="radio"
      name="tab-radio"
      class="tab-radio"
      id="tab-radio-5"
      @change="buttonIndex = 5"
    />
    <label for="tab-radio-5" class="tab-handler"
      >专辑 {{ albumArr.length }}
    </label>
    <div class="tab-content">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>作者</th>
            <th>播放时间</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in albumArr"
            :key="item.id"
            @mouseenter="hoveredAlbumIndex = idx"
            @mouseleave="hoveredAlbumIndex = -1"
          >
            <td @click="">{{ hoveredAlbumIndex === idx ? " ▶ " : item.id }}</td>
            <td class="likeSong">
              <img :src="item.subImgsrc" alt="" />
              <h3>{{ item.bokeName }}</h3>
            </td>
            <td>
              {{ item.author }}
            </td>
            <td>{{ item.lastPlayed }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="buttonGroup">
      <button v-show="buttonIndex == 1 || buttonIndex == 2">
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
      <button v-show="buttonIndex == 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.777 2.451a3.74 3.74 0 0 1 1.784 2.14l.515 1.909H11.25l-.198.005h-.014A3.75 3.75 0 0 0 7.5 10.25v7.5l.005.198v.014q.023.374.113.725a3.74 3.74 0 0 1-1.707-.45a3.74 3.74 0 0 1-1.785-2.14L2.13 8.663a3.74 3.74 0 0 1 .32-2.753a3.74 3.74 0 0 1 2.14-1.785l7.434-1.997a3.74 3.74 0 0 1 2.752.322M11.257 7.5l-.17.005A2.75 2.75 0 0 0 8.5 10.25v7.493l.005.17A2.75 2.75 0 0 0 11.25 20.5h.482a6.5 6.5 0 0 1 9.768-8.124v-2.119l-.005-.17A2.75 2.75 0 0 0 18.75 7.5zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5.59-3.493L17.5 14l.09.008a.5.5 0 0 1 .402.402l.008.09V17l2.505.001l.09.008a.5.5 0 0 1 .402.402l.008.09l-.008.09a.5.5 0 0 1-.403.402l-.09.008h-2.503v2.503l-.008.09a.5.5 0 0 1-.402.402l-.09.008l-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09V18h-2.503l-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09l.008-.09a.5.5 0 0 1 .402-.402l.09-.008H17v-2.5l.008-.09a.5.5 0 0 1 .402-.403"
          />
        </svg>
        收藏全部
      </button>
      <button v-show="buttonIndex == 1 || buttonIndex == 2">。。。</button>
      <button v-show="buttonIndex == 3 || buttonIndex == 4 || buttonIndex == 5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 26 26"
        >
          <path
            fill="currentColor"
            d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
          />
        </svg>
        清空列表
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  SONG_TITLE_ARR,
  SINGLE_SONG_ARR,
  BOKE_SONG_ARR,
  SOUND_BOOK_ARR,
  ALBUM_ARR,
  LIST_SONG_ARR,
} from "../../data/recentlyPlayed";

let sortIndex0 = ref(0);
let sortIndex1 = ref(0);
let sortIndex2 = ref(0);
let buttonIndex = ref(1);
let hoveredRowIndex = ref(-1);
let hoveredBokeIndex = ref(-1);
let hoveredSoundBookIndex = ref(-1);
let hoveredListSongIndex = ref(-1);
let hoveredAlbumIndex = ref(-1);

const songTitleArr = SONG_TITLE_ARR;

const changeSongTitleA = (num) => {
  if (num === 0) {
    sortIndex0.value++;
    sortIndex0.value %= songTitleArr[num].arr.length;
  } else if (num === 1) {
    sortIndex1.value++;
    sortIndex1.value %= songTitleArr[num].arr.length;
  } else {
    sortIndex2.value++;
    sortIndex2.value %= songTitleArr[num].arr.length;
  }
};
const singleSongArr = SINGLE_SONG_ARR;
const bokeSongArr = BOKE_SONG_ARR;
const soundBookArr = SOUND_BOOK_ARR;
const albumArr = ALBUM_ARR;
const listSongArr = LIST_SONG_ARR;
const fullHeartOrEmpty = (num) => {
  singleSongArr[num].flag = !singleSongArr[num].flag;
};
</script>
<style lang="scss" scoped src="./index.scss" />
