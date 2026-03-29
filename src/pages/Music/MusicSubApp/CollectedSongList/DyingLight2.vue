<template>
  <header>
    <p></p>
    <h3>
      游音风的2023年度歌单
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M19 3H3v2h16zm0 6h-7v2h7zm0 6H8v2h11zM8.8 11.9l1-1.1a.6.6 0 0 0 0-.8L8 8.2a.6.6 0 0 0-.8 0l-1 1L8.7 12zm-3.3-2L0 15.3V18h2.6l5.6-5.5l-2.7-2.7Z"
        />
      </svg>
    </h3>
    <h1>
      想要记得四季 想要记得情绪 这份歌单载着你2023年的故事 我们终将在音乐里相遇
    </h1>
    <div>
      <h6>
        <img
          src="https://ts1.cn.mm.bing.net/th/id/R-C.8886a7791c3dbd6296c92e51f5db804c?rik=mwvTvT%2flTpJ%2bIg&riu=http%3a%2f%2fit.people.com.cn%2fmediafile%2f200809%2f05%2fF200809051347203066413521.jpg&ehk=fTvkeukj4fe4njzI%2fufpdqXty7vDObWpOUEwc7bMAhg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        游音风
      </h6>
      <h6>2017-08-30 创 建</h6>
    </div>
    <div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
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
        播 放 全 部
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="m8 9l4-4H9V1H7v4H4zm3.636-1.636l-1.121 1.121L14.579 10L8 12.453L1.421 10l4.064-1.515l-1.121-1.121L0 9v4l8 3l8-3V9z"
          />
        </svg>
        下 载
      </button>
      <button>。。。</button>
    </div>
  </header>
  <aside>
    <button :class="{ isActive: active == 0 }" @click="handleToggle(0)">
      歌曲
      <h6>{{ likeSongArr.length }}</h6>
    </button>
    <button :class="{ isActive: active == 1 }" @click="handleToggle(1)">
      评论
      <h6>{{ commentArr.length }}</h6>
    </button>
    <button :class="{ isActive: active == 2 }" @click="handleToggle(2)">
      收藏者
    </button>
    <input v-show="active == 0" type="text" placeholder=" 🔍  搜 索 " />
  </aside>
  <footer>
    <div v-show="active == 0" id="likePartA">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th @click="cycleSortLabel(0)">
              标题
              <h5>{{ SORT_LABELS[0].arr[sortIndices[0]] }}</h5>
            </th>
            <th @click="cycleSortLabel(1)">
              专辑
              <h5>{{ SORT_LABELS[1].arr[sortIndices[1]] }}</h5>
            </th>
            <th>喜欢</th>
            <th @click="cycleSortLabel(2)">
              时长
              <h5>{{ SORT_LABELS[2].arr[sortIndices[2]] }}</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in likeSongArr"
            :key="item.id"
            @mouseenter="handleRowEnter(item.id)"
            @mouseleave="handleRowLeave"
          >
            <td>{{ hoveredRowId === item.id ? " ▶ " : item.id }}</td>
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
                  /></svg
                ><svg
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
                @click="toggleHeart(item.id)"
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
    <div v-show="active == 1" id="likePartB">
      <textarea rows="5" cols="30" placeholder=" 说 点 什 么 吧 "> </textarea>
      <span>
        <h6>150 字</h6>
        <button>#</button>
        <button>@</button>
        <button>😅</button>
        <button>发 布</button>
      </span>
      <h3>精选评论</h3>
      <div class="commentSP">
        <img
          src="https://ts1.cn.mm.bing.net/th/id/R-C.bce643843f297a348a620b02dec5dd6c?rik=vGMu1xOGEt5sZQ&riu=http%3a%2f%2fimg-download.pchome.net%2fdownload%2f1k0%2fxd%2f2i%2fodbf7c-1xnq.jpg&ehk=fzIKhJf9OjdHZZd6RheQwC1fUk6Pq9AkQfOTIiyR%2bGk%3d&risl=&pid=ImgRaw&r=0"
        />
        <div class="userComment">
          <h5>
            <a href="">用户名称</a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 22 22"
            >
              <path
                fill="yellow"
                d="M6 2h10v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V6h1V5h1V4h1V3h1zm9 3V4h-1v2h1v1h2V6h-1V5zm-3 1V4h-2v2H9v1h4V6zM8 6V4H7v1H6v1H5v1h2V6zm-4 5h1v1h1v1h1v1h1v-2H7V9H4zm6 1v4h2v-4h1V9H9v3zm4 0v2h1v-1h1v-1h1v-1h1V9h-3v3z"
              />
            </svg>

            VIP3
          </h5>
          <h5>
            发言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试
          </h5>
          <h5>
            <a href="">@ 另一个用户名称 ：</a>
            回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试
          </h5>
          <span>
            <h4>
              144
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
            </h4>

            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 1664 1536"
              >
                <path
                  fill="currentColor"
                  d="M1408 989v259q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h255q13 0 22.5 9.5T575 160q0 27-26 32q-77 26-133 60q-10 4-16 4H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29q28-13 54-37q16-16 35-8q21 9 21 29m237-496l-384 384q-18 19-45 19q-12 0-25-5q-39-17-39-59V640H992q-323 0-438 131q-119 137-74 473q3 23-20 34q-8 2-12 2q-16 0-26-13q-10-14-21-31t-39.5-68.5T312 1068t-38.5-114T256 832q0-49 3.5-91t14-90t28-88t47-81.5t68.5-74t94.5-61.5T636 297.5T795.5 267T992 256h160V64q0-42 39-59q13-5 25-5q26 0 45 19l384 384q19 19 19 45t-19 45"
                />
              </svg>
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
            </h4>
          </span>
        </div>
      </div>
      <h3>最新评论 {{ commentArr.length }}</h3>
      <div class="commentSP" v-for="item in commentArr" :key="item.id">
        <img :src="item.userHead" />
        <div class="userComment">
          <h5>
            <a href="">{{ item.userName }}</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 22 22"
            >
              <path
                fill="yellow"
                d="M6 2h10v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V6h1V5h1V4h1V3h1zm9 3V4h-1v2h1v1h2V6h-1V5zm-3 1V4h-2v2H9v1h4V6zM8 6V4H7v1H6v1H5v1h2V6zm-4 5h1v1h1v1h1v1h1v-2H7V9H4zm6 1v4h2v-4h1V9H9v3zm4 0v2h1v-1h1v-1h1v-1h1V9h-3v3z"
              />
            </svg>
            VIP {{ item.VIP }}
          </h5>
          <h5>
            {{ item.comment }}
          </h5>
          <h5 v-show="item.showReply">
            <a href="">@ {{ item.otherUser }} ：</a>
            {{ item.reply }}
          </h5>
          <span>
            <h4>
              {{ item.goodNum }}
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
            </h4>

            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 1664 1536"
              >
                <path
                  fill="currentColor"
                  d="M1408 989v259q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h255q13 0 22.5 9.5T575 160q0 27-26 32q-77 26-133 60q-10 4-16 4H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29q28-13 54-37q16-16 35-8q21 9 21 29m237-496l-384 384q-18 19-45 19q-12 0-25-5q-39-17-39-59V640H992q-323 0-438 131q-119 137-74 473q3 23-20 34q-8 2-12 2q-16 0-26-13q-10-14-21-31t-39.5-68.5T312 1068t-38.5-114T256 832q0-49 3.5-91t14-90t28-88t47-81.5t68.5-74t94.5-61.5T636 297.5T795.5 267T992 256h160V64q0-42 39-59q13-5 25-5q26 0 45 19l384 384q19 19 19 45t-19 45"
                />
              </svg>
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
            </h4>
          </span>
        </div>
      </div>
    </div>
    <div v-show="active == 2" id="likePartC">
      <span v-for="item in collectorArr" :key="item.id">
        <img :src="item.imgSrc" alt="" />
        <h4>{{ item.userName }}</h4>
        <h6>{{ item.sign }}</h6>
        <svg
          v-show="item.showVIP"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="yellow"
              d="M11.2 1.401a1 1 0 0 1 1.6 0L15.5 5h4.645a1.5 1.5 0 0 1 1.308 2.235L13.09 22.103a1.25 1.25 0 0 1-2.18 0L2.549 7.235A1.5 1.5 0 0 1 3.855 5H8.5zm.797 2.266L9.33 7.222l2.667 4.445l2.666-4.445z"
            />
          </g>
        </svg>
        <svg
          v-show="item.showCreator"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="lightblue"
            d="M11 14c1 0 2.05.16 3.2.44c-.81.87-1.2 1.89-1.2 3.06c0 .89.25 1.73.78 2.5H3v-2c0-1.19.91-2.15 2.74-2.88C7.57 14.38 9.33 14 11 14m0-2c-1.08 0-2-.39-2.82-1.17C7.38 10.05 7 9.11 7 8c0-1.08.38-2 1.18-2.82C9 4.38 9.92 4 11 4c1.11 0 2.05.38 2.83 1.18C14.61 6 15 6.92 15 8c0 1.11-.39 2.05-1.17 2.83S12.11 12 11 12m7.5-2H22v2h-2v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.36 0 .69.07 1 .21z"
          />
        </svg>
      </span>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useSongList } from "@/composables/useSongList";

const {
  active,
  sortIndices,
  hoveredRowId,
  likeSongArr,
  commentArr,
  collectorArr,
  SORT_LABELS,
  handleToggle,
  cycleSortLabel,
  toggleHeart,
  handleRowEnter,
  handleRowLeave,
} = useSongList();
</script>
<style lang="less" scoped>
header {
  svg:hover {
    transition: 0.5s;
    color: #f7eb7e;
    cursor: pointer;
  }

  display: grid;
  padding-left: 4%;
  grid-template-rows: 25% 15% 20% 40%;
  grid-template-columns: 20% 70%;

  p {
    margin-right: 5%;
    height: 90%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 4;
    background: url("https://pic.netbian.com/uploads/allimg/240516/014422-1715795062dabc.jpg");
    background-size: 100% 100%;
    border-radius: 10px;
  }

  h3 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  h1 {
    padding-left: 0.5rem;
    color: #bcbcbd;
    font-size: 0.7rem;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }

  div {
    display: flex;
  }

  div:nth-of-type(1) {
    width: 35%;
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
    align-items: center;

    h6 {
      display: flex;
      margin-right: 3%;
      justify-content: space-around;
      align-items: center;
    }

    img {
      height: 2rem;
      margin-right: 10px;
      border-radius: 50%;
    }
  }

  div:nth-of-type(2) {
    grid-column: 2 / span 1;
    grid-row: 4 / span 1;
    align-items: flex-end;
    width: 40%;

    button {
      margin-right: 3%;
      height: 3rem;
      padding: 0 10px;
      line-height: 3rem;
      text-align: center;
      color: #fff;
      border-radius: 5px;
      border: 1px transparent solid;
      background: rgba(111, 111, 111, 0.5);
      transition: 1s;

      &:hover {
        cursor: pointer;
        background: rgba(197, 197, 197, 0.5);
      }
    }

    button:nth-of-type(1) {
      background: rgba(7, 74, 130);

      &:hover {
        cursor: pointer;
        background: rgba(3, 45, 128, 0.5);
        border: 1px solid #fff;
      }
    }
  }
}

aside {
  width: 95%;
  margin-top: 2%;
  padding-left: 4%;
  height: 10%;
  display: flex;
  position: relative;

  input {
    position: absolute;
    background: rgba(60, 80, 99, 0.5);
    border: none;
    right: 5%;
    top: 25%;
    color: #fff;
    height: 50%;
    width: 7%;
    transition: 0.5s;

    &:focus {
      width: 15%;
      outline: none;
      border-bottom: 1px solid #ffea00;
    }

    &:hover {
      box-shadow: inset -15px 0 10px -1px #0046af;
    }
  }

  button {
    position: relative;
    background: transparent;
    color: #b7b4b4;
    font-size: 1rem;
    margin-right: 5%;
    border: 1px solid transparent;

    &:hover {
      cursor: pointer;
      color: #fff;
    }

    h6 {
      position: absolute;
      font-size: 0.9rem;
      top: -35%;
      right: -20%;
    }
  }

  .isActive {
    transition: 0.5s;
    text-align: center;
    color: #fff;
    font-weight: bolder;
    border-bottom: 2px solid #fff;
  }

  button::before {
    position: absolute;
    font-size: 0.9rem;
    top: 15%;
    right: -50%;
  }
}

footer {
  width: 95%;
  padding-left: 4%;
  display: flex;

  svg:hover {
    transition: 0.5s;
    color: #ff52bd;
    cursor: pointer;
  }

  #likePartA {
    margin-top: 2%;
    width: 100%;

    table {
      width: 95%;

      tr {
        &:hover {
          cursor: pointer;
          background: rgba(111, 111, 111, 0.5);
        }

        &:hover h4 {
          opacity: 1;
        }
      }

      .likeSong {
        display: grid;
        padding-top: 1%;

        grid-template-rows: 50% 40%;
        grid-template-columns: 10% 60% 25%;

        img {
          height: 100%;
          width: 3rem;
          border-radius: 10px;
          grid-column: 1 / span 1;
          grid-row: 1 / span 2;
        }

        h3 {
          grid-column: 2 / span 1;
          grid-row: 1 / span 1;
          margin: 0;
        }

        h4 {
          display: flex;
          align-items: center;
          justify-content: space-around;
          grid-column: 3 / span 1;
          grid-row: 1 / span 2;
          opacity: 0;
          transition: 0.5s;
        }

        span {
          display: flex;
          grid-column: 2 / span 1;
          grid-row: 2 / span 1;
          align-items: center;

          h6,
          h5 {
            margin: 5px;
          }

          h5 {
            color: #b7b4b4;

            &:hover {
              color: #f4f3f3;
            }
          }

          h6 {
            font-size: 0.6rem;
            color: #ffea00;
            border: 1px solid #ffea00;
            padding: 3px;

            &:hover {
              color: #ff0000;
              border: 1px solid #ff0000;
            }
          }
        }
      }

      th {
        text-align: left;
        color: #b7b4b4;
        padding: 10px;
        position: relative;

        &:hover h5 {
          opacity: 1;
          transition: 0.5s;
        }

        h5 {
          position: absolute;
          margin: 0;
          right: 10%;
          top: 25%;
          opacity: 0;
        }

        &:hover {
          cursor: pointer;
          background: rgba(92, 45, 45, 0.5);
        }
      }

      th:nth-of-type(1),
      th:nth-of-type(4),
      th:nth-of-type(5) {
        width: 6%;
      }

      th:nth-of-type(3) {
        width: 25%;
      }

      td:nth-of-type(3) {
        &:hover {
          color: rgb(255, 189, 132);
        }
      }

      td {
        padding-left: 1%;
      }
    }
  }

  #likePartB {
    width: 100%;
    display: flex;
    flex-direction: column;

    textarea {
      position: relative;
      font-weight: bolder;
      margin-top: 2%;
      resize: none;
      width: 93%;
      padding: 10px;
      border-radius: 10px;
      background: rgba(49, 87, 128, 0.5);
      border: none;
      color: #fff;
      transition: 0.5s;

      &:focus {
        outline: none;
        border-bottom: 1px solid #ffea00;
      }
    }

    span {
      width: 95%;
      display: flex;

      justify-content: flex-end;

      h6 {
        margin-top: 10px;
        margin-right: 2rem;
      }

      button {
        width: 5%;
        font-size: 1.1rem;
        color: #a8a7a7;
        background: transparent;
        border: none;

        &:hover {
          cursor: pointer;
          color: #ffffff;
        }
      }
    }

    .commentSP {
      display: flex;
      width: 97%;
      margin-top: 1%;
      flex-direction: row;
      border-bottom: 1px solid #3f3f40;

      h5 {
        a {
          font-size: 1rem;
          color: #65bfd5;
          text-decoration: none;

          &:hover {
            color: #58ffac;
          }
        }

        svg {
          margin-left: 1rem;
        }
      }

      .userComment {
        margin: 0 0 0 1rem;
        display: flex;
        flex-direction: column;

        h5 {
          margin: 0 0 1rem 0;
        }

        h5:nth-of-type(3) {
          color: #a3a3a6;
        }

        span {
          width: 100%;
          display: flex;

          h4 {
            margin: 0 2rem 1rem 0;
          }
        }
      }

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        box-shadow: 0 0 15px 5px #101627;
      }
    }
  }

  #likePartC {
    width: 100%;
    margin-top: 1%;
    display: flex;

    span {
      width: 18%;
      padding: 2% 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 1s;
      border-radius: 15px;
      position: relative;

      svg {
        position: absolute;
      }

      svg:nth-of-type(1) {
        left: 30%;
        top: 50%;
      }

      svg:nth-of-type(2) {
        right: 30%;
        top: 50%;
      }

      h4,
      h6 {
        margin: 1rem 0 0 0;
      }

      h6 {
        color: #c2c2c2;
      }

      img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        box-shadow: 0 0 15px 10px #000000;
      }

      &:hover {
        cursor: pointer;
        background: linear-gradient(
          45deg,
          rgba(93, 128, 171, 0.5),
          rgba(173, 110, 64, 0.5)
        );
      }
    }
  }
}
</style>
