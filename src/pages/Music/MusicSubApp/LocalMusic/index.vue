<template>
  <div id="localMusic">
    <h2>本地音乐 300首</h2>
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
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.71.71 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.71.71 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709s.7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0"
          />
        </svg>
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
      <input type="text" placeholder=" 🔍  搜 索 " />
    </div>
    <header>
      <button
        v-for="(item, index) in headerBtnArr"
        :class="{ isActive: activeTab === index }"
        @click="handleToggle(index)"
      >
        {{ item }}
      </button>
      <p v-show="showVipMsg">
        VIP专享特权含
        <a href="javascript:;">200首VIP专属本地音乐</a>
        <svg
          @click="closeMsgWindow"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z"
            clip-rule="evenodd"
          />
        </svg>
      </p>
    </header>
    <footer>
      <div v-show="activeTab == 0" id="localTabA">
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
                时长
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
              <td>{{ item.time }}</td>
              <td>{{ item.size }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="activeTab === 1" id="localTabB">
        <aside>
          <h5 @click="changeSongTitleA('singerSort', 1)">
            歌手列表
            <p>{{ sortLabels.singerSort }}</p>
          </h5>
          <button
            v-for="item in sortSingerArr"
            :key="item.id"
            :class="{ singerSelectedDom: singerSelected === item.id }"
            @click="changeSingerSort(item.id)"
          >
            <img :src="item.imgSrc" alt="" />
            <h3>{{ item.singer }}</h3>
            <h4>{{ item.songNum }}</h4>
          </button>
        </aside>
        <main>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th @click="changeSongTitleA('songTitleDL', 1)">
                  标题
                  <h5>{{ sortLabels.songTitleDL }}</h5>
                </th>
                <th @click="changeSongTitleA('albumTitleDL', 1)">
                  专辑
                  <h5>{{ sortLabels.albumTitleDL }}</h5>
                </th>
                <th @click="changeSongTitleA('timeTitleDL', 2)">
                  时长
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
                v-for="item in downloadSingleArr.filter((obj) => {
                  return obj.id === singerSelected;
                })"
                :key="item._originalId || item.id"
                @mouseenter="handleMouseEnter(item)"
                @mouseleave="handleMouseLeave(item)"
              >
                <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
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
                <td>{{ item.time }}</td>
                <td>{{ item.size }}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div v-show="activeTab === 2" id="localTabC">
        <aside>
          <h5 @click="changeSongTitleA('singerSortA', 1)">
            歌手列表
            <p>{{ sortLabels.singerSortA }}</p>
          </h5>
          <button
            v-for="item in sortSingerArr"
            :key="item.id"
            :class="{ singerSelectedDom: albumSelected === item.album }"
            @click="changeAlbumSort(item.album)"
          >
            <img :src="item.imgSrc" alt="" />
            <h3>{{ item.album }}</h3>
            <h4>{{ item.albumNum }}</h4>
          </button>
        </aside>
        <main>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th @click="changeSongTitleA('songTitleDL', 1)">
                  标题
                  <h5>{{ sortLabels.songTitleDL }}</h5>
                </th>
                <th @click="changeSongTitleA('albumTitleDL', 1)">
                  专辑
                  <h5>{{ sortLabels.albumTitleDL }}</h5>
                </th>
                <th @click="changeSongTitleA('timeTitleDL', 2)">
                  时长
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
                v-for="item in downloadSingleArr.filter((obj) => {
                  return obj.album === albumSelected;
                })"
                :key="item._originalId || item.id"
                @mouseenter="handleMouseEnter(item)"
                @mouseleave="handleMouseLeave(item)"
              >
                <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
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
                <td>{{ item.time }}</td>
                <td>{{ item.size }}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <div v-show="activeTab === 3" id="localTabD">
        <aside>
          <h5 @click="changeSongTitleA('singerSortB', 1)">
            歌手列表
            <p>{{ sortLabels.singerSortB }}</p>
          </h5>
          <button
            v-for="item in sortSingerArr"
            :key="item.id"
            :class="{ singerSelectedDom: albumSelected === item.album }"
            @click="changeAlbumSort(item.album)"
          >
            <img :src="item.imgSrc" alt="" />
            <h3>{{ item.album }}</h3>
            <h4>{{ item.albumNum }}</h4>
          </button>
        </aside>
        <main>
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
                  时长
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
                v-for="item in downloadSingleArr.filter((obj) => {
                  return obj.album === albumSelected;
                })"
                :key="item._originalId || item.id"
                @mouseenter="handleMouseEnter(item)"
                @mouseleave="handleMouseLeave(item)"
              >
                <td>{{ item._showPlayIcon ? " ▶ " : item._originalId }}</td>
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
                <td>{{ item.time }}</td>
                <td>{{ item.size }}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import {
  HEADER_BTN_ARR,
  SONG_SORT_ARR,
  DEFAULT_SORT_LABELS,
  DOWNLOAD_SINGLE_ARR,
  SORT_SINGER_ARR,
} from "../../data/localMusic";

const activeTab = ref(0);
const sortIndex_DL0 = ref(0);
const sortIndex_DL1 = ref(0);
const sortIndex_DL2 = ref(0);
const buttonIndex = ref(1);
const singerSelected = ref(0);
const albumSelected = ref("Playlist: The Very Best Of Backstreet Boys");
const showVipMsg = ref(true);

const handleToggle = (index) => {
  activeTab.value = index;
  buttonIndex.value = index + 1;
};

const headerBtnArr = HEADER_BTN_ARR;

const changeSingerSort = (index) => {
  singerSelected.value = index;
};

const changeAlbumSort = (str) => {
  albumSelected.value = str;
};

const closeMsgWindow = () => {
  showVipMsg.value = false;
};

const songSortArr = SONG_SORT_ARR;

const sortLabels = reactive({ ...DEFAULT_SORT_LABELS });

const changeSongTitleA = (labelKey, num) => {
  const arr = songSortArr[num].arr;
  const indexRef =
    num === 0 ? sortIndex_DL0 : num === 1 ? sortIndex_DL1 : sortIndex_DL2;
  sortLabels[labelKey] = arr[indexRef.value];
  indexRef.value = (indexRef.value + 1) % arr.length;
};

const downloadSingleArr = reactive(
  DOWNLOAD_SINGLE_ARR.map((item) => ({
    ...item,
    _showPlayIcon: false,
    _originalId: item.id,
  })),
);

const sortSingerArr = SORT_SINGER_ARR;

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
