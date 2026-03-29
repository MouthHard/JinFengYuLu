export const SINGER_AREA_ARR = ["全部", "华语", "欧美", "日本", "韩国", "其他"];

export const SINGER_MAN_ARR = ["全部", "男歌手", "女歌手", "乐队组合"];

export const SINGER_CHARACTER_ARR = [
  "热门",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#",
];

export const DEFAULT_SINGERS = Array.from({ length: 15 }, (_, i) => ({
  singerId: i,
  name: "陈奕迅",
  num: "1000",
  pigSrc:
    "http://p1.music.126.net/ODuFZql3x08Q4AaW7y20Aw==/109951169014571694.jpg?param=130y130",
}));
