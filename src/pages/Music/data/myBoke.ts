export interface BokeItem {
  id: number;
  subImgsrc: string;
  bokeName: string;
  updated?: string;
  description: string;
  playNum: string;
  soundNum?: string;
  time?: string;
  _showPlayIcon: boolean;
  _originalId: number;
}

export interface BokeRecommend {
  id: number;
  playNum: string;
  playName: string;
  bg: string;
  bgColor: string;
  _isHovered: boolean;
}

export const COLLECT_BOKE_ARR: BokeItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    bokeName: "巫师3",
    updated: "05-20 更新",
    description: "巫师3  合辑",
    playNum: "630万",
    soundNum: "346期",
    _showPlayIcon: false,
    _originalId: 0,
  },
];

export const COLLECT_RECOMMEND: BokeRecommend[] = [
  {
    id: 0,
    playNum: "▶ 1.1亿",
    playName: "每日推荐，从漫漫长夜听起",
    bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
    bgColor: "#009895",
    _isHovered: false,
  },
  {
    id: 1,
    playNum: "▶ 1.23亿",
    playName: "今天从《Mystery of Love》听起|私人雷达",
    bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
    bgColor: "#998E7C",
    _isHovered: false,
  },
  {
    id: 2,
    playNum: "▶ 851.6万",
    playName: "也许我们应该去更远的地方看看",
    bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
    bgColor: "#FDD56C",
    _isHovered: false,
  },
  {
    id: 3,
    playNum: "▶ 70万",
    playName: "纯音乐 | 星空之下，绿草至上",
    bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
    bgColor: "#27416A",
    _isHovered: false,
  },
  {
    id: 4,
    playNum: "▶ 5401",
    playName: "秋日之歌",
    bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
    bgColor: "#B8653D",
    _isHovered: false,
  },
  {
    id: 5,
    playNum: "▶ 139.22万",
    playName: "大自然的声音",
    bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g2/M00/0A/03/ChMlWl0d6aSIYm9KADKqlKvl4gIAALiYQCilvAAMqqs077.jpg",
    bgColor: "#D4DED5",
    _isHovered: false,
  },
];

export const LIKE_BOKE_ARR: BokeItem[] = [
  {
    id: 0,
    subImgsrc:
      "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0",
    bokeName: "巫师3",
    description: "巫师3  合辑",
    playNum: "630万",
    time: "03:46",
    _showPlayIcon: false,
    _originalId: 0,
  },
];
