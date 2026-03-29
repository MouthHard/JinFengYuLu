export interface CloudDiskSong {
  id: number;
  subImgsrc: string;
  songName: string;
  singer: string;
  album?: string;
  tagArr: string[];
  type?: string;
  uploadTime?: string;
  size?: string;
  progress?: string;
  downloadSpeed?: string;
}

export const HEADER_BTN_ARR = ["已上传单曲", "正在上传"];

export const DOWNLOAD_SINGLE_ARR: CloudDiskSong[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "I Want It That Way",
    singer: "Backstreet Boys",
    album: "Playlist: The Very Best Of Backstreet Boys",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    type: "mp3",
    uploadTime: "2023-01-23",
    size: "8.1 M",
  },
];

export const DOWNLOADING_ARR: CloudDiskSong[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "I Want It That Way",
    singer: "Backstreet Boys",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    progress: "暂停中 30%",
    downloadSpeed: "0 KB/s",
  },
  {
    id: 1,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "I Want It That Way",
    singer: "Backstreet Boys",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    progress: "上传中 30%",
    downloadSpeed: "300 KB/s",
  },
];

export interface SongSortOption {
  id: number;
  arr: string[];
}

export const SONG_SORT_ARR: SongSortOption[] = [
  {
    id: 0,
    arr: [
      ` 默认排序 ⇅`,
      ` 标题升序 ⇧ `,
      ` 标题降序 ⇩ `,
      ` 歌手升序 ⇧ `,
      ` 歌手降序 ⇩ `,
    ],
  },
  { id: 1, arr: [` 默认⇅`, ` 升序 ⇧ `, ` 降序 ⇩ `] },
  { id: 2, arr: [` ⇅`, `  ⇧ `, `  ⇩ `] },
  {
    id: 3,
    arr: [
      ` 默认排序 ⇅`,
      ` 标题升序 ⇧ `,
      ` 标题降序 ⇩ `,
      ` 专辑名升序 ⇧ `,
      ` 专辑名降序 ⇩ `,
    ],
  },
];
