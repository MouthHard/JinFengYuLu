export interface ChoiceItem {
  id: number;
  playNum: string;
  playName: string;
  songArr: string[];
  bgColor: string;
  src: string;
  _isHovered?: boolean;
}

export interface FifthItem {
  id: number;
  h4Text: string;
  h5Text: string;
  h6Text: string;
  h6OtherText: string;
  imgSrc: string;
}

export interface PartItem {
  partId: number;
  title: string;
  _translateX?: number;
  fifthArr: FifthItem[];
}

export interface CarouselItem {
  id: number;
  src: string;
}

export const imgArr: CarouselItem[] = [
  {
    id: 0,
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/carousel/0.webp",
  },
  {
    id: 1,
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/carousel/1.webp",
  },
  {
    id: 2,
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/carousel/2.webp",
  },
  {
    id: 3,
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/carousel/3.webp",
  },
];

export interface SceneItem {
  id: number;
  h5Text: string;
  src: string;
}

export const sceneArr: SceneItem[] = [
  {
    id: 0,
    h5Text: "夜晚",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/scene/0.webp",
  },
  {
    id: 1,
    h5Text: "工作",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/scene/1.webp",
  },
  {
    id: 2,
    h5Text: "学习",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/scene/2.webp",
  },
  {
    id: 3,
    h5Text: "运动",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/scene/3.webp",
  },
];

export interface SongListItem {
  id: number;
  text: string;
  src: string;
}

export const recSongList: SongListItem[] = [
  {
    id: 0,
    text: "轻音乐",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/songlist/0.webp",
  },
  {
    id: 1,
    text: "纯音乐",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/songlist/1.webp",
  },
  {
    id: 2,
    text: "古典音乐",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/songlist/2.webp",
  },
  {
    id: 3,
    text: "治愈系",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/recommend/songlist/3.webp",
  },
];

export const CHOICE_SEC_ARR: ChoiceItem[] = [
  {
    id: 0,
    playNum: "▶ 1.1亿",
    playName: "深度睡眠 |重度失眠者专用歌单",
    songArr: ["漫漫长夜", "xxx", "xxx"],
    bgColor: "#21353c",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/0.webp",
  },
  {
    id: 1,
    playNum: "▶ 1.23亿",
    playName: "纯音 | 静淌时隙悄然掠过 | 助眠",
    songArr: ["Mystery of Love", "xxx", "xxx"],
    bgColor: "#fff4e6",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/1.webp",
  },
  {
    id: 2,
    playNum: "▶ 851.6万",
    playName: "那些你熟悉却又不知道名字的轻音乐",
    songArr: ["xxx", "xxx", "xxx"],
    bgColor: "#f2c86d",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/2.webp",
  },
  {
    id: 3,
    playNum: "▶ 70万",
    playName: "背景音乐珍藏，总有一天你会用上的",
    songArr: ["xxx", "xxx", "xxx"],
    bgColor: "#ffe7c6",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/3.webp",
  },
  {
    id: 4,
    playNum: "▶ 5401",
    playName: "「纯音乐」温暖治愈丨沉浸于慵懒的下午时光",
    songArr: ["xxx", "xxx", "xxx"],
    bgColor: "#420002",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/4.webp",
  },
  {
    id: 5,
    playNum: "▶ 139.22万",
    playName: "治愈系 | 愿每天的坏心情都能在睡前清零",
    songArr: ["xxx", "xxx", "xxx"],
    bgColor: "#85816f",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/5.webp",
  },
  {
    id: 6,
    playNum: "▶ 139.22万",
    playName: "寂静鸣远：治愈纯音 抚慰心绪 净化心灵",
    songArr: ["xxx", "xxx", "xxx"],
    bgColor: "#D4DED5",
    src: "https://images-pc.oss-cn-hongkong.aliyuncs.com/music/choice/R-C/6.webp",
  },
];

export const recSecLineFooterArr = CHOICE_SEC_ARR;
export const songRank = CHOICE_SEC_ARR;
export const radarRank = CHOICE_SEC_ARR;

export const PART_ARR: PartItem[] = [
  {
    partId: 0,
    title: "最新音乐 ▶",
    fifthArr: [
      {
        id: 0,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 1,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 2,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 3,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 4,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 5,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
    ],
  },
  {
    partId: 1,
    title: "精选有声书 ▶",
    fifthArr: [
      {
        id: 0,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 1,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 2,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 3,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 4,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 5,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
    ],
  },
  {
    partId: 2,
    title: "热门播客 ▶",
    fifthArr: [
      {
        id: 0,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 1,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 2,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 3,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 4,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
      {
        id: 5,
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
        imgSrc:
          "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=180y180",
      },
    ],
  },
];

export const partArr = PART_ARR;
