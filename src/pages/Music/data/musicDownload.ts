export interface DownloadSong {
  id: number;
  subImgsrc: string;
  songName: string;
  singer?: string;
  album?: string;
  downloadTime?: string;
  size?: string;
  _showPlayIcon: boolean;
  _originalId: number;
  progress?: string;
  downloadSpeed?: string;
}

export interface MVItem {
  singerId: number;
  album: string;
  name: string;
  time: string;
  quality: string;
  pigSrc: string;
}

export interface SongSortOption {
  id: number;
  arr: string[];
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

export const DEFAULT_SORT_LABELS = {
  songTitleDL: " 默认排序 ⇅",
  albumTitleDL: " 默认⇅",
  timeTitleDL: " ⇅",
  sizeDL: " ⇅",
  songTitleDL2: " 默认排序 ⇅",
  timeTitleDL2: " 默认⇅",
  sizeDL2: " ⇅",
};

export const DOWNLOAD_SINGLE_ARR: DownloadSong[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "I Want It That Way",
    singer: "Backstreet Boys",
    album: "Playlist: The Very Best Of Backstreet Boys",
    downloadTime: "2024-07-09",
    size: "8.1 M",
    _showPlayIcon: false,
    _originalId: 0,
  },
];

export const DOWNLOAD_SOUND_ARR: DownloadSong[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "风雪壁炉烤火-大自然助眠",
    album: "3D助眠-大自然白噪音-超长音频",
    downloadTime: "3小时前",
    size: "400 M",
    _showPlayIcon: false,
    _originalId: 0,
  },
];

export const MV_LIST: MVItem[] = [
  {
    singerId: 0,
    album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
    name: "Olivier Deriviere",
    time: "02:01",
    quality: " 标清",
    pigSrc:
      "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
  },
  {
    singerId: 1,
    album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
    name: "Olivier Deriviere",
    time: "02:01",
    quality: " 高清",
    pigSrc:
      "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
  },
  {
    singerId: 2,
    album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
    name: "Olivier Deriviere",
    time: "02:01",
    quality: " 无损",
    pigSrc:
      "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
  },
  {
    singerId: 3,
    album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
    name: "Olivier Deriviere",
    time: "02:01",
    quality: " 标清",
    pigSrc:
      "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
  },
  {
    singerId: 4,
    album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
    name: "Olivier Deriviere",
    time: "02:01",
    quality: " 标清",
    pigSrc:
      "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
  },
  {
    singerId: 5,
    album: "Dying Light 2 Stay Human (Original Game Soundtrack)",
    name: "Olivier Deriviere",
    time: "02:01",
    quality: " 标清",
    pigSrc:
      "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2019/08/DL2-artwork2-logo-small.jpg?fit=1920%2C1285&ssl=1",
  },
];

export const DOWNLOADING_ARR: DownloadSong[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "风雪壁炉烤火-大自然助眠",
    album: "3D助眠-大自然白噪音-超长音频",
    progress: "下载中 30%",
    downloadSpeed: "300 KB/s",
    _showPlayIcon: false,
    _originalId: 0,
  },
  {
    id: 1,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "风雪壁炉烤火-大自然助眠",
    album: "3D助眠-大自然白噪音-超长音频",
    progress: "暂停中 30%",
    downloadSpeed: "",
    _showPlayIcon: false,
    _originalId: 1,
  },
  {
    id: 2,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    songName: "风雪壁炉烤火-大自然助眠",
    album: "3D助眠-大自然白噪音-超长音频",
    progress: "获取下载地址错误",
    downloadSpeed: "",
    _showPlayIcon: false,
    _originalId: 2,
  },
];
