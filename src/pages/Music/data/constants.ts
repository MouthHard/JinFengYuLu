// UI 常量
export const SLIDER_WIDTH_PERCENTAGE = 110;
export const SLIDER_WIDTH_PERCENTAGE_PART = 100;
export const TRANSITION_DURATION = "0.5s";
export const FM_SLIDER_WIDTH = 50;
export const CAROUSEL_INTERVAL = 3000;

// 图片 URL 常量
export const IMAGE_BASE_URL =
  "https://images-pc.oss-cn-hongkong.aliyuncs.com/music";
export const DEFAULT_IMAGE_URL =
  "https://ts1.cn.mm.bing.net/th/id/R-C.f332076b5297d2c9d23d9c9c098386a8?rik=H90anFcwH5tptw&riu=http%3a%2f%2fimg1.gamersky.com%2fimage2015%2f05%2f20150512xjn_18%2fgamersky_01origin_01_20155122247407.jpg&ehk=4Og9xNghhN3YtecfhVk%2ft9eW0BMIZq1gk8MsizuQnAo%3d&risl=&pid=ImgRaw&r=0";

// 排序选项常量
export const SORT_OPTIONS = {
  SONG: [
    " 默认排序 ⇅",
    " 主题升序 ⇧ ",
    " 主题降序 ⇩ ",
    " 歌手升序 ⇧ ",
    " 歌手降序 ⇩ ",
  ],
  ALBUM: [" 默认⇅", " 升序 ⇧ ", " 降序 ⇩ "],
  TIME: [" ⇅", "  ⇧ ", "  ⇩ "],
} as const;

// 标签颜色类
export const TAG_COLOR_CLASSES = [
  "tag-color-1",
  "tag-color-2",
  "tag-color-3",
] as const;
