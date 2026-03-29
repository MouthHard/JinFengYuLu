<template>
  <!-- 移动端 -->
  <div id="musicCon" @click.self="(closeSongList(), closeShareSetting())">
    <!-- 右侧歌单 -->
    <div
      id="songList"
      :style="{ width: songListWidth }"
      @click.self="(closeSingleSongSetting(), closeShareSetting())"
    >
      <h1>当前歌曲</h1>
      <h5>总共 {{ songArr.length }} 首</h5>
      <div
        class="subSong"
        v-for="song in songArr"
        @dblclick="changeSong(song, song.songId)"
        :key="song.songId"
        :class="{ active: acitveSongIdx === song.songId }"
      >
        <img :src="song.imgSrc" />
        <div :title="song.songName">{{ song.songName }}</div>
        <div :title="song.author">{{ song.author }}</div>
        <div>{{ song.time }}</div>
        <div>
          <svg
            @click="changeLike($event, song.songId)"
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 32 32"
          >
            <path
              fill="black"
              d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 2h20v11h-2V4H4v16h9v2H2zm10 5h4v2h-2v5a3 3 0 1 1-2-2.83zm0 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0m8 1v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"
            />
          </svg>
          <svg
            @click="showsingleSongSetting(song.songId)"
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M3 13v-2h2v2zm8 0v-2h2v2zm8 0v-2h2v2z"
            />
          </svg>
          <div
            class="singleSongSetting"
            v-show="showSingleSongSettingIndex === song.songId"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="black"
                  d="M2048 128v1408H731l-475 475v-475H0V128zm-128 128H128v1152h256v293l293-293h1243zm-640 640h-128V640h256v256q0 27-10 50t-27 40t-41 28t-50 10zm-512 0H640V640h256v256q0 27-10 50t-27 40t-41 28t-50 10z"
                />
              </svg>
              查看评论
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="black"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"
                />
              </svg>
              播放
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M384 256h128v1536H384zm1472 768L768 1792V256zm-960 521l738-521l-738-521z"
                />
              </svg>
              下一首播放
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 48 48"
              >
                <g fill="none" stroke="currentColor" stroke-linejoin="round">
                  <circle cx="25.328" cy="23.997" r="9.244" />
                  <circle cx="25.328" cy="23.997" r="2.464" />
                  <path
                    stroke-linecap="round"
                    d="M26.194 19.543a4.539 4.539 0 0 1 3.566 3.48m-5.299 5.43a4.538 4.538 0 0 1-3.566-3.48m5.905-7.94a7.12 7.12 0 0 1 5.432 5.233m-8.377 8.698a7.12 7.12 0 0 1-5.432-5.233"
                  />
                  <g stroke-linecap="round">
                    <path
                      d="M11.038 23.96c.015-7.891 6.424-14.277 14.316-14.263c7.892.015 14.277 6.424 14.263 14.316c-.008 7.887-6.405 14.276-14.292 14.275"
                    />
                    <path
                      d="M44.175 34.34c-5.712 10.41-18.78 14.217-29.19 8.505A21.498 21.498 0 0 1 4.657 29.9C1.396 18.483 8.01 6.585 19.426 3.326a21.499 21.499 0 0 1 16.45 1.939"
                    />
                  </g>
                  <path stroke-linecap="round" d="m35.874 5.264l-.004 9.087" />
                </g>
                <circle cx="25.328" cy="23.997" r=".75" fill="currentColor" />
              </svg>
              专辑:
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="m10.155 14.773l-.009-.021a6.996 6.996 0 0 1-.402-.123l-.01-.004A6.996 6.996 0 0 1 5 8a7 7 0 0 1 13.96-.749c.044.412-.296.749-.71.749s-.745-.338-.8-.748a5.501 5.501 0 1 0-7.279 5.937a2 2 0 0 1 3.829.81c0 .598-.262 1.134-.677 1.5A1.99 1.99 0 0 1 12 16a1.993 1.993 0 0 1-1.845-1.227m-2.158.727a8.528 8.528 0 0 1-2.003-1.485a2.25 2.25 0 0 0-1.99 2.234v.578c0 .892.318 1.756.898 2.435c1.566 1.834 3.952 2.74 7.098 2.74s5.533-.906 7.102-2.74a3.75 3.75 0 0 0 .901-2.438v-.575a2.249 2.249 0 0 0-2.248-2.25H15.5c0 .538-.12 1.046-.337 1.5h2.592a.75.75 0 0 1 .748.75v.575a2.25 2.25 0 0 1-.54 1.463c-1.257 1.468-3.224 2.214-5.963 2.214c-2.738 0-4.704-.746-5.957-2.213a2.25 2.25 0 0 1-.54-1.462v-.577a.75.75 0 0 1 .75-.75zM8 8a4 4 0 1 1 6.243 3.313A3.486 3.486 0 0 0 12 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5c-.854 0-1.636.306-2.242.813A3.986 3.986 0 0 1 8 8"
                />
              </svg>
              歌手:{{ song.author }}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="m7.859 14.691l-.81.805a1.814 1.814 0 0 1-2.545 0a1.762 1.762 0 0 1 0-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 1 0 1.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 0 0 2 14.244a3.72 3.72 0 0 0 1.108 2.658a3.779 3.779 0 0 0 2.669 1.096c.967 0 1.934-.365 2.669-1.096l.811-.805a.988.988 0 0 0 .005-1.4a.995.995 0 0 0-1.403-.006m9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 1 0 1.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197c.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 1 0-1.396 1.406c.668.662 1.43.99 2.228.99c.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0 0 18 5.866a3.726 3.726 0 0 0-1.109-2.659"
                />
              </svg>
              来自:
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M112.56 196H44V92h168v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20h-82.61l-26-29.29A20 20 0 0 0 92.41 32H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h73.18a12 12 0 0 0 0-24M44 56h46.61l10.67 12H44Zm199.44 102a12 12 0 0 0-10.52-8.34l-27.42-2.12l-10.5-24.29a12 12 0 0 0-22 0l-10.5 24.28l-27.42 2.12a12 12 0 0 0-6.72 21.22l20.58 17l-6.25 25.26a12 12 0 0 0 17.73 13.22L184 212.46l23.58 13.88a12 12 0 0 0 17.73-13.22l-6.25-25.26l20.58-17a12 12 0 0 0 3.8-12.86M198 174.16a12 12 0 0 0-4 12.13l1.21 4.89l-5.07-3a12.06 12.06 0 0 0-12.18 0l-5.07 3l1.21-4.89a12 12 0 0 0-4-12.13l-3.48-2.87l5-.39a12 12 0 0 0 10.1-7.21l2.33-5.4l2.33 5.4a12 12 0 0 0 10.09 7.21l5 .39Z"
                />
              </svg>
              收藏
            </span>
            <span @click="showShareSetting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="currentColor"
                  d="M754.553 35.03v294.208C487.317 329.246 0 332.178 0 1164.97c55.25-556.9 309.061-560.402 754.553-560.408v321.292L1200 480.407z"
                />
              </svg>
              分享
            </span>
            <span :title="song.author">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 48 48"
              >
                <g fill="none" stroke="currentColor" stroke-width="4">
                  <path
                    d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983"
                  />
                  <rect
                    width="34"
                    height="34"
                    x="4"
                    y="10"
                    stroke-linejoin="round"
                    rx="3"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m18.44 23.11l5.292-5.51c1.451-1.451 3.837-1.42 5.328.072c1.491 1.491 1.523 3.877.072 5.328l-1.91 2.023m-13.756 3.724c-.51.51-1.565 1.53-1.565 1.53c-1.452 1.451-1.492 4.038 0 5.53c1.49 1.49 3.876 1.523 5.328.071l5.164-4.688"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.663 28.328a3.863 3.863 0 0 1-1.131-2.473A3.665 3.665 0 0 1 18.592 23m3.729 2.861c1.491 1.491 1.523 3.877.072 5.329"
                  />
                </g>
              </svg>
              复制链接
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-arrow-down-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
              下载
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M61.214 7.959c-.303 0-.576.092-.576.092l-11.371 5.314c.299-3.529.609-7.047.861-9.561c.258-2.564-1.955-1.643-1.955-1.643l-20.896 8.017s-.75-1.847-1.447-2.953c-1.623-2.578-4.398-1.785-4.398-1.785l-15.94 5.723s-2.199 1.018-3.098 3.717c-.887 2.661 0 5.903 0 5.903L11.603 62l40.023-31.268s9.971-20.099 10.311-21.536c.246-1.031-.272-1.237-.723-1.237M50.136 29.517L13.398 58.25c1.648-9.367 3.447-18.741 3.963-19.896c.744-1.363 2.025-2.317 2.287-2.503c1.236-.672 14.017-7.5 16.72-9.059c2.582-1.491 4.5-7.434 4.5-7.434l18.361-8.58c-1.859 4.035-6.142 12.786-9.093 18.739"
                />
              </svg>
              打开文件所在目录
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.5 17h2q.625 0 1.063-.437T18 15.5v-4h1V10h-2.5V9h-2v1H12v1.5h1v4q0 .625.438 1.063T14.5 17m0-5.5h2v4h-2zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
                />
              </svg>
              从列表中删除
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧歌单的分享菜单 -->
    <div class="shareSetting" v-show="showShareSettingFlag">
      <h4>分享到</h4>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 56 56"
        >
          <path
            fill="red"
            d="M16.844 3.637c.14-1.992 1.289-3.024 3.445-3.024h14.93c2.156 0 3.281 1.032 3.422 3.024zm-4.149 6.492c.352-2.133 1.36-3.305 3.703-3.305h22.524c2.344 0 3.351 1.172 3.703 3.305zm1.899 45.258c-4.875 0-7.36-2.414-7.36-7.266v-27c0-4.828 2.485-7.265 7.36-7.265h26.812c4.899 0 7.36 2.437 7.36 7.265v27c0 4.828-2.438 7.266-6.657 7.266zM34.44 30.635c1.019-.276 1.337-.488 1.337-1.719v-4.159c0-.806-.276-1.167-1.4-.891l-6.218 1.549c-1.04.255-1.273.467-1.273 1.719v9.57c0 .934-.085 1.104-1.146 1.4l-1.952.51c-1.931.51-3.565 1.655-3.565 3.735c0 1.803 1.358 3.119 3.501 3.119c3.035 0 5.093-2.186 5.093-5.263v-7.278c0-.785.17-.997.658-1.104z"
          /></svg
        >音乐动态
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 64 64"
        >
          <path
            fill="#FF6A6A"
            d="m.6 48.7l18.5-19.3L4.9 8.9c-.7.9-1.2 2.1-1.3 3.5L0 45.1c-.1 1.4.1 2.6.6 3.6M62.7 5.5L35.9 30.4L57 58.9c1.2-1 2-2.5 2.2-4.3L64 10c.2-1.8-.4-3.5-1.3-4.5"
          />
          <path
            fill="#FFFF00"
            d="m25.7 39.4l-6.6-10L.6 48.7c.4.9 1.1 1.5 1.9 1.7L53.3 60c1.4.3 2.7-.2 3.7-1.1L35.9 30.4z"
          />
          <path
            fill="#8470FF"
            d="M59.3 4L7.1 7.5c-.8.1-1.6.6-2.2 1.4l14.3 20.5l6.6 10l10.2-9L62.7 5.5c-.9-1-2.1-1.6-3.4-1.5"
          />
          <path
            fill="#000"
            d="m35.2 23.6l.6-5.1l-17.5-.1l-2.9 23.9l17 4l.7-5.1l-12.8-2.5l.7-5.5L33.8 35l.6-5.1l-12.9-1.3l.7-5.6z"
          />
        </svg>
        私信
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#63B8FF	"
            d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
          />
          <path
            fill="#7FFFD4"
            d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
          />
        </svg>
        微信好友
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#B2DFEE"
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7c0 31.3-16.2 72.2-51.1 101.8c16.9 5.2 54.9 19.2 45.9 34.4c-7.3 12.3-125.6 7.9-159.8 4c-34.2 3.8-152.5 8.3-159.8-4c-9.1-15.2 28.9-29.2 45.8-34.4c-35-29.5-51.1-70.4-51.1-101.8c0 0-33.4 54.1-44.9 52.7c-5.4-.7-12.4-29.6 9.4-99.7c10.3-33 22-60.5 40.2-105.8c-3.1-116.9 45.3-215 160.4-215c113.9 0 163.3 96.1 160.4 215c18.1 45.2 29.9 72.8 40.2 105.8c21.7 70.1 14.6 99.1 9.3 99.7"
          />
        </svg>
        QQ好友
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 15 15"
        >
          <path
            fill="#FFD700"
            fill-rule="evenodd"
            d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.5-4a.5.5 0 0 1 .453.288L8.92 5.85l2.155.33a.5.5 0 0 1 .282.843L9.784 8.636l.373 2.284a.5.5 0 0 1-.736.518L7.5 10.376l-1.921 1.062a.5.5 0 0 1-.736-.519l.373-2.283l-1.574-1.613a.5.5 0 0 1 .283-.844l2.154-.329l.968-2.062A.5.5 0 0 1 7.5 3.5"
            clip-rule="evenodd"
          />
        </svg>
        QQ空间
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 20 20"
        >
          <path
            fill="	#FF4500"
            d="M14.812 9.801c-.778-.141-.4-.534-.4-.534s.761-1.178-.15-2.034c-1.13-1.061-3.877.135-3.877.135c-1.05.306-.77-.14-.622-.897c0-.892-.326-2.402-3.12-1.51C3.853 5.858 1.455 9 1.455 9C-.212 11.087.01 12.7.01 12.7c.416 3.562 4.448 4.54 7.584 4.771c3.299.243 7.752-1.067 9.102-3.76c1.35-2.696-1.104-3.763-1.884-3.91m-1.044 2.549c0 2.051-2.653 3.977-5.93 4.117c-3.276.144-5.923-1.398-5.923-3.45c0-2.054 2.647-3.7 5.923-3.842c3.277-.142 5.93 1.126 5.93 3.175m-6.584-1.823c-3.293.362-2.913 3.259-2.913 3.259s-.034.917.883 1.384c1.927.98 3.912.387 4.915-.829c1.003-1.216.415-4.173-2.885-3.814m.281 3.075c0 .48-.498.925-1.112.99c-.614.068-1.11-.265-1.11-.747s.44-.985 1.055-1.045c.707-.064 1.167.318 1.167.802m1.003-1.15c.11.174.031.437-.173.588c-.208.146-.464.126-.574-.05c-.115-.17-.072-.445.139-.588c.244-.171.498-.122.608.05m4.86-9.806c.335-.06 1.532-.281 2.696-.025c2.083.456 4.941 2.346 3.655 6.368c-.094.575-.398.62-.76.62c-.432 0-.781-.255-.781-.662c0-.352.155-.71.155-.71c.046-.148.411-1.07-.241-2.448c-1.198-1.887-3.609-1.915-3.893-1.807a3.48 3.48 0 0 1-.591.141l-.106.016l-.014.002c-.437 0-.786-.333-.786-.737a.75.75 0 0 1 .573-.715s.007-.011.018-.014c.024-.004.049-.027.075-.029m.66 2.611s3.367-.584 2.964 2.811a.21.21 0 0 1-.007.054c-.037.241-.264.426-.529.426c-.3 0-.543-.225-.543-.507c0 0 .534-2.269-1.885-1.768c-.299 0-.538-.227-.538-.505c0-.283.24-.51.538-.51"
          />
        </svg>
        微博
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 256 256"
        >
          <path
            fill="#F5DEB3"
            d="M136.37 187.53a12 12 0 0 1 0 17l-5.94 5.94a60 60 0 0 1-84.88-84.88l24.12-24.11A60 60 0 0 1 152 99a12 12 0 1 1-16 18a36 36 0 0 0-49.37 1.47l-24.1 24.08a36 36 0 0 0 50.92 50.92l5.94-5.94a12 12 0 0 1 16.98 0m74.08-142a60.09 60.09 0 0 0-84.88 0l-5.94 5.94a12 12 0 0 0 17 17l5.94-5.94a36 36 0 0 1 50.92 50.92l-24.11 24.12A36 36 0 0 1 120 139a12 12 0 1 0-16 18a60 60 0 0 0 82.3-2.43l24.12-24.11a60.09 60.09 0 0 0 .03-84.91Z"
          />
        </svg>
        复制链接
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="#7FFF00"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path
              fill="currentColor"
              d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 24H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM42 4H30a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
            />
            <path stroke-linecap="round" d="M28 28h16m-8 8h8m-16 8h16" />
          </g>
        </svg>
        其他
      </span>
    </div>
    <!-- 左侧歌词 -->
    <div id="songLiric" @click="closeSongList">
      <p v-if="lyricMap.get(acitveSongIdx) == '纯音乐请聆听'">纯音乐请聆听</p>
      <p
        v-else-if="lyricMap.get(acitveSongIdx) !== '纯音乐请聆听'"
        v-for="lyric in lyricMap.get(acitveSongIdx).values()"
        :key="lyric.itId"
        :class="{ activeLyric: activeLyricIndex === lyric.itId }"
      >
        {{ lyric.itLyric }}
      </p>
    </div>
    <!-- 手机背景 -->
    <div class="phone" :style="{ left: phoneLeft }">
      <div class="phone-back">
        <div class="phone-left-side">
          <div class="phone-antena"></div>
          <div class="phone-button top"></div>
          <div class="phone-button"></div>
          <div class="phone-button bottom"></div>
          <div class="phone-antena bottom"></div>
        </div>
        <div class="phone-bottom">
          <div class="phone-antena"></div>
          <div class="bottom-speaker">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="phone-screw">
            <div></div>
          </div>
          <div class="phone-charger"></div>
          <div class="phone-screw right">
            <div></div>
          </div>
          <div class="bottom-speaker right">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="phone-antena right"></div>
        </div>
      </div>

      <div class="phone-screen"></div>

      <div class="phone-display">
        <div class="phone-notch">
          <div class="phone-speaker"></div>
        </div>
        <div class="notifications-bar">
          <div class="time">{{ curTime }}</div>
          <div class="range">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-bar-chart-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"
              />
            </svg>
          </div>
          <div class="wifi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-wifi"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"
              />
              <path
                d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
              />
            </svg>
          </div>
          <div class="battery">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-battery-half"
              viewBox="0 0 16 16"
            >
              <path d="M2 6h5v4H2V6z" />
              <path
                d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"
              />
            </svg>
          </div>
        </div>

        <div class="bottom-icons">
          <div>☰</div>
          <div @click="router.push('/')">□</div>
          <div>◀</div>
        </div>

        <!-- 音乐 -->
        <div class="display-content">
          <div class="music-content">
            <div class="music-head" @click.self="closeSongList">
              <svg
                @click="changePorM"
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01c-2.094 5.977-4.496 11.044-7.068 14.968c-17.29 26.383-62.522 40.075-101.654 28.596c5.984-19.75 10.132-39.834 12.07-59.12c-95.46 8.177-212.544 8.42-301.207-22.642c41.727 95.317 99.325 164.465 164.983 230.08c18.296-2.164 35.807-11.35 51.837-25.37c85.218 34.667 188.066-2.555 226.748-60.68c46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03c-37.15-93.627-137.68-191.855-312.38-239.03H19.83z"
                />
              </svg>
              <div>{{ activeSong }}</div>
              <svg
                @click="showShareSetting"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </div>
            <div class="music-center" @click.self="closeSongList">
              <div>
                <img
                  :src="activeSongPig"
                  :style="{ animationPlayState: animationPlayState }"
                />
              </div>
            </div>
            <div class="music-foot" @click.self="closeSongList">
              <div>
                <svg
                  @click="fillColor = fillColor === 'black' ? 'red' : 'black'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 32 32"
                >
                  <path
                    :fill="fillColor"
                    d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      stroke-dasharray="14"
                      stroke-dashoffset="14"
                      d="M6 19h12"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.4s"
                        values="14;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="18"
                      stroke-dashoffset="18"
                      d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.4s"
                        values="18;0"
                      />
                      <animate
                        attributeName="d"
                        calcMode="linear"
                        dur="1.5s"
                        keyTimes="0;0.7;1"
                        repeatCount="indefinite"
                        values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                      />
                    </path>
                  </g>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="bi bi-chat-left-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                  />
                  <path
                    d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
              </div>
              <audio
                ref="musicFoot"
                controls
                @ended="nextAndPreSong(1)"
                :style="audioStyle"
              >
                <source :src="activeSongSrc" />
              </audio>
              <div>
                <svg
                  @click="changePlayStyle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path :d="playPath" />
                  <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                  />
                </svg>
                <svg
                  @click="nextAndPreSong(0)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 3.002a1 1 0 0 0-1.578-.816l-7 4.963a1 1 0 0 0-.007 1.628l7 5.037A1 1 0 0 0 14 13.003zM2 2.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0z"
                  />
                </svg>
                <svg
                  @click="playSong"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 16 16"
                  :style="playBtnStyle"
                >
                  <path :d="playIconPath" />
                </svg>
                <svg
                  @click="nextAndPreSong(1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 3.002a1 1 0 0 1 1.578-.816l7 4.963a1 1 0 0 1 .007 1.628l-7 5.037A1 1 0 0 1 2 13.003zM14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0z"
                  />
                </svg>
                <svg
                  @click="showSongList"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  :style="songListBtnStyle"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.3 4a1 1 0 0 0-.9.2a1 1 0 0 0-.4.8v8.6c-.6-.3-1.3-.5-2-.5c-2 0-4 1.4-4 3.5c0 2 2 3.4 4 3.4s4-1.3 4-3.4V6.8a3 3 0 0 1 1 2.3c0 .5.4 1 1 1s1-.5 1-1a5 5 0 0 0-1.9-4a6.4 6.4 0 0 0-1.8-1ZM4 5a1 1 0 0 0-1 1c0 .6.4 1 1 1h9c.6 0 1-.4 1-1c0-.5-.4-1-1-1zm0 4a1 1 0 0 0-1 1c0 .6.4 1 1 1h9c.6 0 1-.4 1-1c0-.5-.4-1-1-1zm0 4.1a1 1 0 0 0-1 1c0 .6.4 1 1 1h4c.6 0 1-.4 1-1c0-.5-.4-1-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 屏幕发光在手机边框形成的光 -->
      <div class="phone-reflections">
        <div class="reflection-1"></div>
        <div class="reflection-2"></div>
        <div class="reflection-3"></div>
        <div class="reflection-4"></div>
        <div class="reflection-5"></div>
        <div class="reflection-6"></div>
        <div class="reflection-7"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, reactive, computed, nextTick } from "vue";
import router from "@/router";
import { MOBILE_SONG_ARR } from "../../data/mobileMusic";
const musicFoot = ref(null);
const songLiricRef = ref(null);

let timer = null;
const curTime = ref("");
const isPlaying = ref(false);

const fillColor = ref("black");
const showSingleSongSettingIndex = ref(-1);
const showShareSettingFlag = ref(false);
const showSongListFlag = ref(false);
const playStyleIndex = ref(1);

const songListWidth = computed(() => (showSongListFlag.value ? "30%" : "0"));
const phoneLeft = computed(() => (showSongListFlag.value ? "47%" : "50%"));
const songListBtnStyle = computed(() =>
  showSongListFlag.value
    ? {
        border: "2px double darkblue",
        boxShadow:
          "-1px 1px #81abff, -2px 2px blue, -3px 3px #000, -4px 4px red, -5px 5px 1.5rem 3px #000",
        transform: "translateX(4px) translateY(-4px)",
      }
    : {},
);
const playBtnStyle = computed(() =>
  isPlaying.value
    ? {
        boxShadow:
          "-1px 1px #ff2600, -2px 2px #000000, -3px 3px #ffee05, -4px 4px #000000, -5px 5px #81abff, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #ffffff, -10px 5px 1.5rem 3px #000",
        transform: "translateX(8px) translateY(-8px)",
        borderRadius: "50%",
      }
    : {},
);
const audioStyle = computed(() =>
  isPlaying.value
    ? {
        boxShadow:
          "-1px 1px #000000, -2px 2px #000000, -3px 3px #000000, -4px 4px #000000, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #ffffff,0 0 1.5rem 3px #000",
        transform: "translateX(8px) translateY(-8px)",
      }
    : {},
);
const animationPlayState = computed(() =>
  isPlaying.value ? "running" : "paused",
);

const playStylePaths = {
  1: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z",
  2: "M12.894 5.238a3.987 3.987 0 0 1 1.098 3.015A4.475 4.475 0 0 0 13 8.027V8a2.99 2.99 0 0 0-.866-2.109a.5.5 0 0 1 .688-.725zm-4.638 5.761c-.112.319-.19.654-.228 1H6.707l1.148 1.149a.5.5 0 0 1 .058.638l-.058.069a.5.5 0 0 1-.638.058l-.069-.058l-2.002-2.002a.5.5 0 0 1-.057-.638l.057-.069l2.002-2.002a.5.5 0 0 1 .765.638l-.058.07l-1.148 1.147zm.528-8.912l.07.057l2.001 2.002l.058.07a.5.5 0 0 1 0 .568l-.058.07l-2.001 2.001l-.07.058a.5.5 0 0 1-.568 0l-.07-.058l-.057-.07a.5.5 0 0 1 0-.568l.057-.07L9.294 5H6a3 3 0 0 0-2.995 2.824L3 8c0 .82.329 1.562.861 2.104a.5.5 0 0 1-.714.698A4 4 0 0 1 5.8 4.005L6 4l3.294-.001l-1.148-1.147l-.057-.07a.5.5 0 0 1 .695-.695M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-2.952-2.661a.62.62 0 0 0-.68.233c-.213.303-.58.726-1.092.98a.5.5 0 1 0 .448.895a3.66 3.66 0 0 0 .776-.529V14.5a.5.5 0 0 0 1 0v-4.076c0-.349-.267-.533-.452-.585 ",
  3: "M18 6.01L14 9V7h-4l-5 8H2v-2h2l5-8h5V3zM2 5h3l1.15 2.17l-1.12 1.8L4 7H2zm16 9.01L14 17v-2H9l-1.15-2.17l1.12-1.8L10 13h4v-2z",
  4: "M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m15.25-.75a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75M2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75",
};
const playPath = computed(
  () => playStylePaths[playStyleIndex.value] || playStylePaths[1],
);

const playIconPath = computed(() =>
  isPlaying.value
    ? "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 14.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13M5 5h2v6H5zm4 0h2v6H9z"
    : "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m8.5 0a.5.5 0 0 0-.254-.435L7.62 6.077a.75.75 0 0 0-1.12.652v2.542a.75.75 0 0 0 1.12.653l2.626-1.489A.5.5 0 0 0 10.5 8",
);
const songArr = MOBILE_SONG_ARR;

//移动端正在听的歌曲的信息
let activeSong = ref(songArr[0].songName);
let activeSongSrc = ref(songArr[0].songSrc);
let acitveSongIdx = ref(0);
let activeSongPig = ref(songArr[0].imgSrc);
let activeLyricIndex = ref(-1);

let lyricMap = reactive(new Map());
let index = 0;
songArr.forEach((e) => {
  if (e.lyric === "纯音乐请聆听") {
    lyricMap.set(index++, e.lyric);
  } else {
    lyricMap.set(
      index++,
      e.lyric.split("[").slice(1, e.lyric.split("[").length),
    );
  }
});

for (let [key, value] of lyricMap.entries()) {
  if (value === "纯音乐请聆听") continue;
  let itObj = [];
  for (let i = 0; i < value.length; i++) {
    const obj = {};
    obj.itTime = value[i].split("]")[0].slice(0, 9);
    obj.itLyric = value[i].split("]")[1];
    obj.itId = i;
    itObj.push(obj);
  }
  lyricMap.set(key, itObj);
}

//移动端歌曲详情展示
const showsingleSongSetting = (index) => {
  showSingleSongSettingIndex.value =
    showSingleSongSettingIndex.value === index ? -1 : index;
};
//移动端歌曲详情关闭
const closeSingleSongSetting = () => {
  showSingleSongSettingIndex.value = -1;
};
const closeShareSetting = () => {
  showShareSettingFlag.value = false;
};
const showShareSetting = () => {
  showShareSettingFlag.value = !showShareSettingFlag.value;
};
//移动端播放歌曲
const playSong = () => {
  const audio = musicFoot.value;
  if (!audio) return;

  if (!isPlaying.value) {
    isPlaying.value = true;
    audio.play();
  } else {
    isPlaying.value = false;
    audio.pause();
  }
};
//移动端上一首下一首
const nextAndPreSong = (type) => {
  if (type === 1) {
    acitveSongIdx.value++;
    if (acitveSongIdx.value > songArr.length - 1) {
      acitveSongIdx.value = 0;
    }
  } else {
    acitveSongIdx.value--;
    if (acitveSongIdx.value < 0) {
      acitveSongIdx.value = songArr.length - 1;
    }
  }
  changeSong(songArr[acitveSongIdx.value], acitveSongIdx.value);
};
//移动端改变喜爱❤状态
const changeLike = (e, index) => {
  if (songArr[index].flag === true) {
    e.target.setAttribute("fill", "red");
    songArr[index].flag = false;
  } else {
    e.target.setAttribute("fill", "black");
    songArr[index].flag = true;
  }
};

//移动端 改变单曲播放、循环播放、随机和全播放模式
const changePlayStyle = () => {
  playStyleIndex.value++;
  if (playStyleIndex.value > 4) {
    playStyleIndex.value = 1;
  }
  const audio = musicFoot.value;
  if (!audio) return;

  audio.loop = playStyleIndex.value === 2;
};
//移动端 关闭歌单
const closeSongList = () => {
  showSongListFlag.value = false;
  closeSingleSongSetting();
};
//移动端 展示歌单
const showSongList = () => {
  showSongListFlag.value = !showSongListFlag.value;
};
//改变PC和移动端状态时，关闭和重开播放歌曲
const changePorM = () => {
  router.push("/music");
};
//移动端通过点击来改变播放歌曲
const changeSong = (song, index) => {
  activeSong.value = song.songName;
  acitveSongIdx.value = index;
  activeSongSrc.value = song.songSrc;
  activeSongPig.value = song.imgSrc;
  activeLyricIndex.value = -1;
  isPlaying.value = false;
  nextTick(() => {
    const audio = musicFoot.value;
    if (audio) {
      audio.load();
      audio.play();
      isPlaying.value = true;
    }
  });
};

//移动端转换歌曲时间变成秒数方便对
function parseTimeString(timeString) {
  // 拆分分钟、秒和毫秒部分
  const [minutesSeconds, centiseconds] = timeString.split(".");
  const [minutes, seconds] = minutesSeconds.split(":");
  // 将各部分转换为总秒数
  const totalSeconds =
    parseInt(minutes, 10) * 60 + // 分钟转秒
    parseInt(seconds, 10) + // 秒
    parseFloat(`.${centiseconds}`); // 百分之一秒转秒
  return totalSeconds;
}

onMounted(() => {
  musicFoot.value.addEventListener("timeupdate", (e) => {
    const curLyric = lyricMap.get(acitveSongIdx.value);
    if (!curLyric || curLyric === "纯音乐请聆听") return;

    for (let i = 0; i < curLyric.length; i++) {
      if (e.target.currentTime > parseTimeString(curLyric[i].itTime)) {
        activeLyricIndex.value = curLyric[i].itId;
      }
    }
  });

  let time, hours, hoursForClock, minutes;
  function setTime() {
    time = new Date();
    hours = time.getHours();
    hoursForClock = hours < 10 ? "0" + hours : hours;
    minutes = time.getMinutes();
    curTime.value = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} `;
  }
  setTime();
  timer = setInterval(setTime, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});
</script>

<style scoped lang="scss" src="./index.scss" />

<style scoped lang="scss">
@use "./mobileMusic.css";
</style>
