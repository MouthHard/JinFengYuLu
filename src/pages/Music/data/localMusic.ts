export interface DownloadSingle {
  id: number;
  subImgsrc: string;
  songName: string;
  singer: string;
  album: string;
  tagArr: string[];
  time: string;
  size: string;
  _showPlayIcon?: boolean;
  _originalId?: number;
}

export interface SortSinger {
  id: number;
  imgSrc: string;
  songNum: string;
  singer: string;
  album: string;
  albumNum: string;
  folderLocation?: string;
}

export interface SongSortItem {
  id: number;
  arr: string[];
}

export interface SortLabels {
  songTitleDL: string;
  albumTitleDL: string;
  timeTitleDL: string;
  sizeDL: string;
  singerSort: string;
  singerSortA: string;
  singerSortB: string;
}

export const HEADER_BTN_ARR = ["默认", "歌手", "专辑", "文件夹"];

export const SONG_SORT_ARR: SongSortItem[] = [
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
  {
    id: 3,
    arr: [
      " 默认排序 ⇅",
      " 标题升序 ⇧ ",
      " 标题降序 ⇩ ",
      " 专辑名升序 ⇧ ",
      " 专辑名降序 ⇩ ",
    ],
  },
];

export const DEFAULT_SORT_LABELS: SortLabels = {
  songTitleDL: " 默认排序 ⇅",
  albumTitleDL: " 默认⇅",
  timeTitleDL: " ⇅",
  sizeDL: " ⇅",
  singerSort: " 默认⇅",
  singerSortA: " 默认⇅",
  singerSortB: " 默认⇅",
};

export const DOWNLOAD_SINGLE_ARR: DownloadSingle[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "I Want It That Way",
    singer: "Backstreet Boys",
    album: "Playlist: The Very Best Of Backstreet Boys",
    tagArr: ["超清母带", "M V ▶", "VIP", "沉浸声"],
    time: "01:23",
    size: "8.1 M",
  },
];

export const SORT_SINGER_ARR: SortSinger[] = [
  {
    id: 0,
    imgSrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songNum: "120首",
    singer: "歌手名",
    album: "Playlist: The Very Best Of Backstreet Boys",
    albumNum: "3首",
  },
  {
    id: 1,
    imgSrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songNum: "44首",
    singer: "歌手名",
    album: "A",
    albumNum: "2首",
  },
  {
    id: 2,
    imgSrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songNum: "1首",
    singer: "歌手名",
    album: "B",
    albumNum: "5首",
  },
];
