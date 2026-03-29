import type {
  SongItem,
  CollectorItem,
  SongListCommentItem,
  SortLabelItem,
} from "@/types/music/music";

export const SORT_LABELS: SortLabelItem[] = [
  {
    id: 0,
    arr: [
      " 默认排序 ⇅",
      " 标题升序 ⇧ ",
      " 标题降序 ⇩ ",
      " 歌手升序 ⇧ ",
      " 歌手降序 ⇩ ",
    ],
  },
  { id: 1, arr: [" 默认⇅", " 升序 ⇧ ", " 降序 ⇩ "] },
  { id: 2, arr: [" ⇅", "  ⇧ ", "  ⇩ "] },
];

export const DEFAULT_COLLECTORS: CollectorItem[] = [
  {
    id: 0,
    imgSrc:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.c9_P4a9IpF24CGyQaL9lYgHaLW?rs=1&pid=ImgDetMain",
    userName: "用户名称",
    sign: "这个很懒，什么都没有留下",
    showVIP: true,
    showCreator: true,
  },
  {
    id: 1,
    imgSrc:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.c9_P4a9IpF24CGyQaL9lYgHaLW?rs=1&pid=ImgDetMain",
    userName: "用户名称",
    sign: "这个很懒，什么都没有留下",
    showVIP: true,
    showCreator: true,
  },
  {
    id: 2,
    imgSrc:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.c9_P4a9IpF24CGyQaL9lYgHaLW?rs=1&pid=ImgDetMain",
    userName: "用户名称",
    sign: "这个很懒，什么都没有留下",
    showVIP: true,
    showCreator: true,
  },
  {
    id: 3,
    imgSrc:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.c9_P4a9IpF24CGyQaL9lYgHaLW?rs=1&pid=ImgDetMain",
    userName: "用户名称",
    sign: "这个很懒，什么都没有留下",
    showVIP: true,
    showCreator: true,
  },
];

export const DEFAULT_LIKE_SONGS: SongItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "As It Was",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    singer: "歌手名",
    album: "As It Was",
    time: "03:46",
    flag: true,
  },
  {
    id: 1,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "As It Was",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    singer: "歌手名",
    album: "As It Was",
    time: "03:46",
    flag: true,
  },
  {
    id: 2,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "As It Was",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    singer: "歌手名",
    album: "As It Was",
    time: "03:46",
    flag: true,
  },
  {
    id: 3,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "As It Was",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    singer: "歌手名",
    album: "As It Was",
    time: "03:46",
    flag: true,
  },
];

export const DEFAULT_COMMENTS: SongListCommentItem[] = [
  {
    id: 0,
    userHead:
      "https://ts1.cn.mm.bing.net/th/id/R-C.bce643843f297a348a620b02dec5dd6c?rik=vGMu1xOGEt5sZQ&riu=http%3a%2f%2fimg-download.pchome.net%2fdownload%2f1k0%2fxd%2f2i%2fodbf7c-1xnq.jpg&ehk=fzIKhJf9OjdHZZd6RheQwC1fUk6Pq9AkQfOTIiyR%2bGk%3d&risl=&pid=ImgRaw&r=0",
    userName: "游音风",
    comment:
      "发言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试",
    VIP: 3,
    showReply: true,
    reply:
      "回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试",
    otherUser: "音风游",
    goodNum: "144",
  },
  {
    id: 1,
    userHead:
      "https://ts1.cn.mm.bing.net/th/id/R-C.bce643843f297a348a620b02dec5dd6c?rik=vGMu1xOGEt5sZQ&riu=http%3a%2f%2fimg-download.pchome.net%2fdownload%2f1k0%2fxd%2f2i%2fodbf7c-1xnq.jpg&ehk=fzIKhJf9OjdHZZd6RheQwC1fUk6Pq9AkQfOTIiyR%2bGk%3d&risl=&pid=ImgRaw&r=0",
    userName: "游音风",
    comment:
      "发言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试",
    VIP: 4,
    showReply: false,
    reply:
      "回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试",
    otherUser: "音风游",
    goodNum: "144",
  },
  {
    id: 2,
    userHead:
      "https://ts1.cn.mm.bing.net/th/id/R-C.bce643843f297a348a620b02dec5dd6c?rik=vGMu1xOGEt5sZQ&riu=http%3a%2f%2fimg-download.pchome.net%2fdownload%2f1k0%2fxd%2f2i%2fodbf7c-1xnq.jpg&ehk=fzIKhJf9OjdHZZd6RheQwC1fUk6Pq9AkQfOTIiyR%2bGk%3d&risl=&pid=ImgRaw&r=0",
    userName: "游音风",
    comment:
      "发言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试",
    VIP: 1,
    showReply: false,
    reply:
      "回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试",
    otherUser: "音风游",
    goodNum: "144",
  },
  {
    id: 3,
    userHead:
      "https://ts1.cn.mm.bing.net/th/id/R-C.bce643843f297a348a620b02dec5dd6c?rik=vGMu1xOGEt5sZQ&riu=http%3a%2f%2fimg-download.pchome.net%2fdownload%2f1k0%2fxd%2f2i%2fodbf7c-1xnq.jpg&ehk=fzIKhJf9OjdHZZd6RheQwC1fUk6Pq9AkQfOTIiyR%2bGk%3d&risl=&pid=ImgRaw&r=0",
    userName: "游音风",
    comment:
      "发言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试",
    VIP: 6,
    showReply: true,
    reply:
      "回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试",
    otherUser: "音风游",
    goodNum: "144",
  },
  {
    id: 4,
    userHead:
      "https://ts1.cn.mm.bing.net/th/id/R-C.bce643843f297a348a620b02dec5dd6c?rik=vGMu1xOGEt5sZQ&riu=http%3a%2f%2fimg-download.pchome.net%2fdownload%2f1k0%2fxd%2f2i%2fodbf7c-1xnq.jpg&ehk=fzIKhJf9OjdHZZd6RheQwC1fUk6Pq9AkQfOTIiyR%2bGk%3d&risl=&pid=ImgRaw&r=0",
    userName: "游音风",
    comment:
      "发言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试言测试",
    VIP: 7,
    showReply: false,
    reply:
      "回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试回复测试",
    otherUser: "音风游",
    goodNum: "144",
  },
];
