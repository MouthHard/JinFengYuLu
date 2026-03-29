export interface BokeFM {
  id: number;
  text: string;
  bgcolor: string;
  imgSrc: string;
  title: string;
  list: string;
  num: string;
}

export interface BokeListContent {
  listId: number;
  imgSrcList: string;
  h6Text: string;
  h6Color: string;
}

export interface BokeListTag {
  id: number;
  text: string;
  bg: string;
  content: BokeListContent[];
}

export interface BokeSectionItem {
  id: number;
  playNum: string;
  playName: string;
  bg: string;
  bgColor: string;
}

export interface BokeSection {
  idB: number;
  h3Text: string;
  idBArr: BokeSectionItem[];
}

export interface BokePartItem {
  id: number;
  imgSrc: string;
  h4Text: string;
  h5Text: string;
  h6Text: string;
  h6OtherText: string;
}

export interface BokePart {
  partId: number;
  title: string;
  fifthArr: BokePartItem[];
}

export const BOKE_BTN_ARR = [
  "排行榜",
  "创作翻唱",
  "情感",
  "咨询",
  "人文历史",
  "脱口秀",
  "更多 ▼",
];

export const BOKE_FM_ARR: BokeFM[] = [
  {
    id: 0,
    text: "听见好书",
    bgcolor: "#703d3d",
    imgSrc:
      "https://i0.hdslb.com/bfs/article/86cdd7bfa8a596da0983fa0112c554a0cfaae684.jpg@progressive.webp",
    title: "主播 |《傲慢与偏见》：内心越强大的人，心性越沉稳",
    list: "播单：晚间读书",
    num: "123842次播放",
  },
  {
    id: 1,
    text: "历史揭秘",
    bgcolor: "#8e783c",
    imgSrc:
      "http://p1.music.126.net/aPRt3wBunudMnbKyPXfXAQ==/109951169439997418.jpg?imageView&quality=89",
    title: "诸葛亮，独木难撑益州地",
    list: "播单：历史人文",
    num: "33.1w次播放",
  },
  {
    id: 2,
    text: "情感赫兹",
    bgcolor: "#1c7c5f",
    imgSrc:
      "https://i0.hdslb.com/bfs/article/7959a846e02699f2421fb1f79ef60c620c7f1f9d.png@1256w_708h_!web-article-pic.webp",
    title: "看看你和他/她是否仍然互相喜欢",
    list: "播单：清晨一读",
    num: "2456次播放",
  },
  {
    id: 3,
    text: "英语美文",
    bgcolor: "#5e9b25",
    imgSrc:
      "http://p1.music.126.net/qKWuuYVN2XxJ-ASkOF1zKA==/109951169438953008.jpg?imageView&quality=89",
    title: "雅思托福日常练习",
    list: "播单：每日知识",
    num: "1.3w次播放",
  },
  {
    id: 4,
    text: "真实故事",
    bgcolor: "#571c7c",
    imgSrc:
      "http://p1.music.126.net/ZzzqXVglB-aEIoTku2GBSw==/109951169438946146.jpg?imageView&quality=89",
    title: "深夜故事会 —— 母猪为何排队下水",
    list: "播单：每周选读",
    num: "5900次播放",
  },
];

export const BOKE_LIST_TAGS: BokeListTag[] = [
  {
    id: 0,
    text: "高分必听",
    bg: "#460404",
    content: [
      {
        listId: 1,
        imgSrcList:
          "https://ts1.cn.mm.bing.net/th/id/R-C.b3c68ef9de1109b0d020e22bc2aacf40?rik=H9R9l7dvJP9Kbw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f89%2f8989.jpg&ehk=VyIdtYriq3lSqrO3x0MHd5IyxYaw8jZUCKZbHNtvewU%3d&risl=&pid=ImgRaw&r=0",
        h6Text: "睡前小故事",
        h6Color: "#34872d",
      },
      {
        listId: 2,
        imgSrcList:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.3kYZHISr9w-BGxmo5VKp-wHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "xxx",
        h6Color: "#122c6d",
      },
      {
        listId: 3,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "ABC",
        h6Color: "#7e9040",
      },
      {
        listId: 4,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "DEF",
        h6Color: "#a71f4f",
      },
      {
        listId: 5,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "GHI",
        h6Color: "#3c150c",
      },
      {
        listId: 6,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "JKL",
        h6Color: "#183a53",
      },
    ],
  },
  {
    id: 1,
    text: "相声评书",
    bg: "#3a0446",
    content: [
      {
        listId: 1,
        imgSrcList:
          "https://ts1.cn.mm.bing.net/th/id/R-C.b3c68ef9de1109b0d020e22bc2aacf40?rik=H9R9l7dvJP9Kbw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f89%2f8989.jpg&ehk=VyIdtYriq3lSqrO3x0MHd5IyxYaw8jZUCKZbHNtvewU%3d&risl=&pid=ImgRaw&r=0",
        h6Text: "睡前小故事",
        h6Color: "#34872d",
      },
      {
        listId: 2,
        imgSrcList:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.3kYZHISr9w-BGxmo5VKp-wHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "xxx",
        h6Color: "#122c6d",
      },
      {
        listId: 3,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "ABC",
        h6Color: "#7e9040",
      },
      {
        listId: 4,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "DEF",
        h6Color: "#a71f4f",
      },
      {
        listId: 5,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "GHI",
        h6Color: "#3c150c",
      },
      {
        listId: 6,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "JKL",
        h6Color: "#183a53",
      },
    ],
  },
  {
    id: 2,
    text: "知识干货",
    bg: "#042e46",
    content: [
      {
        listId: 1,
        imgSrcList:
          "https://ts1.cn.mm.bing.net/th/id/R-C.b3c68ef9de1109b0d020e22bc2aacf40?rik=H9R9l7dvJP9Kbw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f89%2f8989.jpg&ehk=VyIdtYriq3lSqrO3x0MHd5IyxYaw8jZUCKZbHNtvewU%3d&risl=&pid=ImgRaw&r=0",
        h6Text: "睡前小故事",
        h6Color: "#34872d",
      },
      {
        listId: 2,
        imgSrcList:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.3kYZHISr9w-BGxmo5VKp-wHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "xxx",
        h6Color: "#122c6d",
      },
      {
        listId: 3,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "ABC",
        h6Color: "#7e9040",
      },
      {
        listId: 4,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "DEF",
        h6Color: "#a71f4f",
      },
      {
        listId: 5,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "GHI",
        h6Color: "#3c150c",
      },
      {
        listId: 6,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "JKL",
        h6Color: "#183a53",
      },
    ],
  },
  {
    id: 3,
    text: "商业财经",
    bg: "#124604",
    content: [
      {
        listId: 1,
        imgSrcList:
          "https://ts1.cn.mm.bing.net/th/id/R-C.b3c68ef9de1109b0d020e22bc2aacf40?rik=H9R9l7dvJP9Kbw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f89%2f8989.jpg&ehk=VyIdtYriq3lSqrO3x0MHd5IyxYaw8jZUCKZbHNtvewU%3d&risl=&pid=ImgRaw&r=0",
        h6Text: "睡前小故事",
        h6Color: "#34872d",
      },
      {
        listId: 2,
        imgSrcList:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.3kYZHISr9w-BGxmo5VKp-wHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "xxx",
        h6Color: "#122c6d",
      },
      {
        listId: 3,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "ABC",
        h6Color: "#7e9040",
      },
      {
        listId: 4,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "DEF",
        h6Color: "#a71f4f",
      },
      {
        listId: 5,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "GHI",
        h6Color: "#3c150c",
      },
      {
        listId: 6,
        imgSrcList:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.BGwUAGiZaZWWyQSf1AHvdAAAAA?w=331&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        h6Text: "JKL",
        h6Color: "#183a53",
      },
    ],
  },
];

export const BOKE_SECTIONS: BokeSection[] = [
  {
    idB: 0,
    h3Text: "猜你喜欢 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 1,
    h3Text: "创作翻唱 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 2,
    h3Text: "相声评书 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 3,
    h3Text: "历史人文 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 4,
    h3Text: "商业财经 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 5,
    h3Text: "生活故事 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 6,
    h3Text: "情感 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 7,
    h3Text: "知识干货 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 8,
    h3Text: "影视 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
  {
    idB: 9,
    h3Text: "娱乐 ◢",
    idBArr: [
      {
        id: 0,
        playNum: "▶ 1.1亿",
        playName: "每日推荐，从漫漫长夜听起",
        bg: "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        bgColor: "#009895",
      },
      {
        id: 1,
        playNum: "▶ 1.23亿",
        playName: "今天从《Mystery of Love》听起|私人雷达",
        bg: "https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg",
        bgColor: "#998E7C",
      },
      {
        id: 2,
        playNum: "▶ 851.6万",
        playName: "也许我们应该去更远的地方看看",
        bg: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJlfJVKaIJ7UkAEC_FYEJoMwAAU9ygMTXtwAQL8t602.jpg",
        bgColor: "#FDD56C",
      },
      {
        id: 3,
        playNum: "▶ 70万",
        playName: "纯音乐 | 星空之下，绿草至上",
        bg: "https://pic4.zhimg.com/v2-b1c287fc4ae0faa5deb36c233230b956_r.jpg?source=1940ef5c",
        bgColor: "#27416A",
      },
      {
        id: 4,
        playNum: "▶ 5401",
        playName: "秋日之歌",
        bg: "https://ts1.cn.mm.bing.net/th/id/R-C.b9f86c9bc2216285a504d16b7085c085?rik=B3z9rRnZUQfqrw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0923%2fqiutianshuye8.jpg&ehk=ASq8pVlhKb6ED%2bNRexj7tJghtsR6EX74XbCcsdccf6Y%3d&risl=&pid=ImgRaw&r=0",
        bgColor: "#B8653D",
      },
    ],
  },
];

export const BOKE_PARTS: BokePart[] = [
  {
    partId: 0,
    title: "◤ 新闻咨询 ",
    fifthArr: [
      {
        id: 0,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 1,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 2,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 3,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 4,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 5,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
    ],
  },
  {
    partId: 1,
    title: "◤ 情感",
    fifthArr: [
      {
        id: 0,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 1,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 2,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 3,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 4,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 5,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
    ],
  },
  {
    partId: 2,
    title: "◤ 本周上新",
    fifthArr: [
      {
        id: 0,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 1,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 2,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 3,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 4,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 5,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
    ],
  },
  {
    partId: 3,
    title: "◤ 生活故事",
    fifthArr: [
      {
        id: 0,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 1,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 2,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 3,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 4,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 5,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
    ],
  },
  {
    partId: 4,
    title: "◤ 情感故事",
    fifthArr: [
      {
        id: 0,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 1,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 2,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 3,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 4,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
      {
        id: 5,
        imgSrc:
          "http://img.netbian.com/file/2015/0731/d70f74c0680a0603dcf5db47e809088f.jpg",
        h4Text: "歌曲名",
        h5Text: "歌手名",
        h6Text: "vip",
        h6OtherText: "10w+评论",
      },
    ],
  },
];
