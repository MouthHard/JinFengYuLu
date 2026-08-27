import type { Song, MyPlaylist, LocalFolder, PlayTimeInfo, LocalSong, DownloadedSong } from "@/types/music";

export const likedSongsData: Song[] = [
  {
    id: 1001,
    name: "夜曲",
    cover: "https://picsum.photos/seed/liked1/400/400",
    duration: 245000,
    artists: [{ id: 1, name: "周杰�? }],
    album: { id: 1, name: "十一月的萧邦", cover: "" },
    isVip: false,
    isSq: true
  },
  {
    id: 1002,
    name: "晴天",
    cover: "https://picsum.photos/seed/liked2/400/400",
    duration: 269000,
    artists: [{ id: 1, name: "周杰�? }],
    album: { id: 2, name: "叶惠�?, cover: "" },
    isVip: false,
    isSq: true
  },
  {
    id: 1003,
    name: "起风�?,
    cover: "https://picsum.photos/seed/liked3/400/400",
    duration: 320000,
    artists: [{ id: 2, name: "买辣椒也用券" }],
    album: { id: 3, name: "起风�?, cover: "" },
    isVip: true,
    isSq: true
  },
  {
    id: 1004,
    name: "平凡之路",
    cover: "https://picsum.photos/seed/liked4/400/400",
    duration: 256000,
    artists: [{ id: 3, name: "朴树" }],
    album: { id: 4, name: "猎户星座", cover: "" },
    isVip: false,
    isSq: true
  },
  {
    id: 1005,
    name: "孤勇�?,
    cover: "https://picsum.photos/seed/liked5/400/400",
    duration: 226000,
    artists: [{ id: 4, name: "陈奕�? }],
    album: { id: 5, name: "孤勇�?, cover: "" },
    isVip: false,
    isSq: true
  },
  {
    id: 1006,
    name: "修炼爱情",
    cover: "https://picsum.photos/seed/liked6/400/400",
    duration: 263000,
    artists: [{ id: 5, name: "林俊�? }],
    album: { id: 6, name: "因你而在", cover: "" },
    isVip: false,
    isSq: true
  },
  {
    id: 1007,
    name: "漂洋过海来看�?,
    cover: "https://picsum.photos/seed/liked7/400/400",
    duration: 255000,
    artists: [{ id: 6, name: "李宗�? }],
    album: { id: 7, name: "理性与感�?, cover: "" },
    isVip: false,
    isSq: false
  },
  {
    id: 1008,
    name: "山海",
    cover: "https://picsum.photos/seed/liked8/400/400",
    duration: 268000,
    artists: [{ id: 7, name: "草东没有派对" }],
    album: { id: 8, name: "丑奴�?, cover: "" },
    isVip: true,
    isSq: true
  }
];

export const recentPlayedData: PlayTimeInfo[] = [
  {
    song: {
      id: 2001,
      name: "最伟大的作�?,
      cover: "https://picsum.photos/seed/recent1/400/400",
      duration: 222000,
      artists: [{ id: 1, name: "周杰�? }],
      album: { id: 9, name: "最伟大的作�?, cover: "" },
      isVip: true,
      isSq: true
    },
    playTime: "今天 19:30"
  },
  {
    song: {
      id: 2002,
      name: "Mojito",
      cover: "https://picsum.photos/seed/recent2/400/400",
      duration: 212000,
      artists: [{ id: 1, name: "周杰�? }],
      album: { id: 10, name: "Mojito", cover: "" },
      isVip: false,
      isSq: true
    },
    playTime: "今天 18:15"
  },
  {
    song: {
      id: 2003,
      name: "告白气球",
      cover: "https://picsum.photos/seed/recent3/400/400",
      duration: 215000,
      artists: [{ id: 1, name: "周杰�? }],
      album: { id: 11, name: "周杰伦的床边故事", cover: "" },
      isVip: false,
      isSq: true
    },
    playTime: "今天 15:45"
  },
  {
    song: {
      id: 2004,
      name: "不为谁而作的歌",
      cover: "https://picsum.photos/seed/recent4/400/400",
      duration: 286000,
      artists: [{ id: 5, name: "林俊�? }],
      album: { id: 12, name: "新地�?, cover: "" },
      isVip: true,
      isSq: true
    },
    playTime: "今天 12:30"
  },
  {
    song: {
      id: 2005,
      name: "稻香",
      cover: "https://picsum.photos/seed/recent5/400/400",
      duration: 233000,
      artists: [{ id: 1, name: "周杰�? }],
      album: { id: 13, name: "魔杰�?, cover: "" },
      isVip: false,
      isSq: true
    },
    playTime: "昨天 20:15"
  },
  {
    song: {
      id: 2006,
      name: "说好不哭",
      cover: "https://picsum.photos/seed/recent6/400/400",
      duration: 215000,
      artists: [{ id: 1, name: "周杰�? }],
      album: { id: 14, name: "说好不哭", cover: "" },
      isVip: false,
      isSq: true
    },
    playTime: "昨天 17:30"
  },
  {
    song: {
      id: 2007,
      name: "那些你很冒险的梦",
      cover: "https://picsum.photos/seed/recent7/400/400",
      duration: 242000,
      artists: [{ id: 5, name: "林俊�? }],
      album: { id: 15, name: "学不�?, cover: "" },
      isVip: false,
      isSq: true
    },
    playTime: "昨天 14:00"
  },
  {
    song: {
      id: 2008,
      name: "后来",
      cover: "https://picsum.photos/seed/recent8/400/400",
      duration: 338000,
      artists: [{ id: 8, name: "刘若�? }],
      album: { id: 16, name: "我等�?, cover: "" },
      isVip: false,
      isSq: false
    },
    playTime: "前天 21:45"
  }
];

export const collectionPlaylistsData: MyPlaylist[] = [
  {
    id: 3001,
    name: "深夜独白",
    cover: "https://picsum.photos/seed/coll1/400/400",
    songCount: 52,
    description: "夜深人静时，陪你度过每一个孤独的夜晚",
    creator: "网易云音�?
  },
  {
    id: 3002,
    name: "欧美热单",
    cover: "https://picsum.photos/seed/coll2/400/400",
    songCount: 38,
    description: "Billboard热门单曲，带你感受全球流�?,
    creator: "QQ音乐"
  },
  {
    id: 3003,
    name: "治愈�?,
    cover: "https://picsum.photos/seed/coll3/400/400",
    songCount: 45,
    description: "放松身心，治愈心灵的温柔旋律",
    creator: "虾米音乐"
  },
  {
    id: 3004,
    name: "经典老歌",
    cover: "https://picsum.photos/seed/coll4/400/400",
    songCount: 68,
    description: "岁月沉淀的经典，永不褪色的旋�?,
    creator: "酷狗音乐"
  },
  {
    id: 3005,
    name: "电影原声",
    cover: "https://picsum.photos/seed/coll5/400/400",
    songCount: 32,
    description: "那些让你感动的电影配�?,
    creator: "�?
  },
  {
    id: 3006,
    name: "民谣故事",
    cover: "https://picsum.photos/seed/coll6/400/400",
    songCount: 28,
    description: "用吉他讲述生活的点点滴滴",
    creator: "�?
  }
];

export const localSongsData: LocalSong[] = [
  {
    id: 4001,
    name: "私人日记",
    cover: "https://picsum.photos/seed/local1/400/400",
    duration: 245000,
    artists: [{ id: 9, name: "原创歌手" }],
    album: { id: 17, name: "个人专辑", cover: "" },
    isVip: false,
    isSq: true,
    size: "3.2 MB"
  },
  {
    id: 4002,
    name: "旅行日记",
    cover: "https://picsum.photos/seed/local2/400/400",
    duration: 289000,
    artists: [{ id: 9, name: "原创歌手" }],
    album: { id: 17, name: "个人专辑", cover: "" },
    isVip: false,
    isSq: true,
    size: "4.5 MB"
  },
  {
    id: 4003,
    name: "清晨阳光",
    cover: "https://picsum.photos/seed/local3/400/400",
    duration: 226000,
    artists: [{ id: 10, name: "独立音乐�? }],
    album: { id: 18, name: "自然之声", cover: "" },
    isVip: false,
    isSq: false,
    size: "2.8 MB"
  },
  {
    id: 4004,
    name: "星空漫步",
    cover: "https://picsum.photos/seed/local4/400/400",
    duration: 312000,
    artists: [{ id: 10, name: "独立音乐�? }],
    album: { id: 18, name: "自然之声", cover: "" },
    isVip: false,
    isSq: true,
    size: "3.6 MB"
  },
  {
    id: 4005,
    name: "咖啡馆的午后",
    cover: "https://picsum.photos/seed/local5/400/400",
    duration: 268000,
    artists: [{ id: 11, name: "爵士乐队" }],
    album: { id: 19, name: "午后时光", cover: "" },
    isVip: false,
    isSq: true,
    size: "4.1 MB"
  },
  {
    id: 4006,
    name: "雨夜心情",
    cover: "https://picsum.photos/seed/local6/400/400",
    duration: 255000,
    artists: [{ id: 12, name: "民谣歌手" }],
    album: { id: 20, name: "雨季", cover: "" },
    isVip: false,
    isSq: false,
    size: "2.9 MB"
  },
  {
    id: 4007,
    name: "山间小路",
    cover: "https://picsum.photos/seed/local7/400/400",
    duration: 295000,
    artists: [{ id: 13, name: "New Age" }],
    album: { id: 21, name: "自然之旅", cover: "" },
    isVip: false,
    isSq: true,
    size: "3.8 MB"
  },
  {
    id: 4008,
    name: "冬日暖阳",
    cover: "https://picsum.photos/seed/local8/400/400",
    duration: 272000,
    artists: [{ id: 13, name: "New Age" }],
    album: { id: 21, name: "自然之旅", cover: "" },
    isVip: false,
    isSq: true,
    size: "3.4 MB"
  }
];

export const localFoldersData: LocalFolder[] = [
  { id: 5001, name: "我的音乐", songCount: 128, path: "/Users/Music" },
  { id: 5002, name: "下载音乐", songCount: 45, path: "/Users/Downloads/Music" },
  { id: 5003, name: "导入音乐", songCount: 23, path: "/Users/Imported" },
  { id: 5004, name: "录音文件", songCount: 8, path: "/Users/Recordings" },
  { id: 5005, name: "翻唱作品", songCount: 15, path: "/Users/Covers" }
];

export const recentPlaylistsData: (MyPlaylist & { lastPlayed: string })[] = [
  { id: 6001, name: "每日推荐", cover: "https://picsum.photos/seed/rp1/400/400", songCount: 30, lastPlayed: "今天 19:00" },
  { id: 6002, name: "华语热歌", cover: "https://picsum.photos/seed/rp2/400/400", songCount: 50, lastPlayed: "今天 16:30" },
  { id: 6003, name: "英文金曲", cover: "https://picsum.photos/seed/rp3/400/400", songCount: 40, lastPlayed: "昨天 20:45" },
  { id: 6004, name: "轻音�?, cover: "https://picsum.photos/seed/rp4/400/400", songCount: 25, lastPlayed: "前天 18:30" }
];

export const collectionSongsData: Song[] = [
  { id: 7001, name: "爱如潮水", cover: "https://picsum.photos/seed/cs1/400/400", duration: 267000, artists: [{ id: 14, name: "张信哲" }], album: { id: 22, name: "心事", cover: "" }, isVip: false, isSq: true },
  { id: 7002, name: "甜蜜�?, cover: "https://picsum.photos/seed/cs2/400/400", duration: 234000, artists: [{ id: 15, name: "邓丽�? }], album: { id: 23, name: "甜蜜�?, cover: "" }, isVip: false, isSq: false },
  { id: 7003, name: "月亮代表我的�?, cover: "https://picsum.photos/seed/cs3/400/400", duration: 230000, artists: [{ id: 15, name: "邓丽�? }], album: { id: 24, name: "岛国之情�?, cover: "" }, isVip: false, isSq: false },
  { id: 7004, name: "用心良苦", cover: "https://picsum.photos/seed/cs4/400/400", duration: 260000, artists: [{ id: 16, name: "张宇" }], album: { id: 25, name: "用心良苦", cover: "" }, isVip: false, isSq: true },
  { id: 7005, name: "忘情�?, cover: "https://picsum.photos/seed/cs5/400/400", duration: 266000, artists: [{ id: 17, name: "刘德�? }], album: { id: 26, name: "忘情�?, cover: "" }, isVip: false, isSq: true },
  { id: 7006, name: "吻别", cover: "https://picsum.photos/seed/cs6/400/400", duration: 295000, artists: [{ id: 18, name: "张学友" }], album: { id: 27, name: "吻别", cover: "" }, isVip: false, isSq: true },
  { id: 7007, name: "朋友", cover: "https://picsum.photos/seed/cs7/400/400", duration: 253000, artists: [{ id: 19, name: "周华健" }], album: { id: 28, name: "朋友", cover: "" }, isVip: false, isSq: true },
  { id: 7008, name: "一生有�?, cover: "https://picsum.photos/seed/cs8/400/400", duration: 257000, artists: [{ id: 20, name: "水木年华" }], album: { id: 29, name: "一生有�?, cover: "" }, isVip: false, isSq: false }
];

export const downloadedSongsData: DownloadedSong[] = [
  { id: 8001, name: "夜曲", cover: "https://picsum.photos/seed/dl1/400/400", duration: 245000, artists: [{ id: 1, name: "周杰伦" }], album: { id: 1, name: "十一月的萧邦", cover: "" }, isVip: false, isSq: true, downloadedAt: "2024-01-15", size: "8.5MB", quality: "SQ" },
  { id: 8002, name: "晴天", cover: "https://picsum.photos/seed/dl2/400/400", duration: 269000, artists: [{ id: 1, name: "周杰伦" }], album: { id: 2, name: "叶惠美", cover: "" }, isVip: false, isSq: true, downloadedAt: "2024-01-14", size: "9.2MB", quality: "SQ" },
  { id: 8003, name: "起风�?, cover: "https://picsum.photos/seed/dl3/400/400", duration: 320000, artists: [{ id: 2, name: "买辣椒也用券" }], album: { id: 3, name: "起风�?, cover: "" }, isVip: true, isSq: true, downloadedAt: "2024-01-13", size: "10.8MB", quality: "SQ" },
  { id: 8004, name: "平凡之路", cover: "https://picsum.photos/seed/dl4/400/400", duration: 256000, artists: [{ id: 3, name: "朴树" }], album: { id: 4, name: "猎户星座", cover: "" }, isVip: false, isSq: true, downloadedAt: "2024-01-12", size: "8.9MB", quality: "SQ" },
  { id: 8005, name: "孤勇�?, cover: "https://picsum.photos/seed/dl5/400/400", duration: 226000, artists: [{ id: 4, name: "陈奕�? }], album: { id: 5, name: "孤勇�?, cover: "" }, isVip: false, isSq: true, downloadedAt: "2024-01-11", size: "7.8MB", quality: "SQ" }
];
