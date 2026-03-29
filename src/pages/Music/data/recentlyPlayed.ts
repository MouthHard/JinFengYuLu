export interface SongSortOption {
  id: number;
  arr: string[];
}

export interface SingleSongItem {
  id: number;
  subImgsrc: string;
  songName: string;
  tagArr: string[];
  singer: string;
  album: string;
  time: string;
  flag: boolean;
}

export interface BokeSongItem {
  id: number;
  subImgsrc: string;
  bokeName: string;
  fromList: string;
  progress: string;
  lastPlayed: string;
  time: string;
}

export interface SoundBookItem {
  id: number;
  subImgsrc: string;
  bokeName: string;
  soundNum: string;
  time: string;
}

export interface AlbumItem {
  id: number;
  subImgsrc: string;
  bokeName: string;
  author: string;
  lastPlayed: string;
}

export interface ListSongItem {
  id: number;
  subImgsrc: string;
  bokeName: string;
  songNum: string;
  lastPlayed: string;
}

export const SONG_TITLE_ARR: SongSortOption[] = [
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

export const SINGLE_SONG_ARR: SingleSongItem[] = [
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

export const BOKE_SONG_ARR: BokeSongItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    bokeName: "唐宋历史",
    fromList: "送式选读",
    progress: "已播放5%",
    lastPlayed: "06-30",
    time: "03:46",
  },
];

export const SOUND_BOOK_ARR: SoundBookItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    bokeName: "戴老师讲述《鱼羊野史》",
    soundNum: "4699期",
    time: "03:46",
  },
];

export const ALBUM_ARR: AlbumItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    bokeName: "La La Land (Original Motion Picture Score)",
    author: "Justin Hurwitz",
    lastPlayed: "1分钟前",
  },
];

export const LIST_SONG_ARR: ListSongItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    bokeName: "随便收集的歌单",
    songNum: "4首",
    lastPlayed: "2天前",
  },
];
