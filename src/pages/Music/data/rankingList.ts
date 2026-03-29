export interface RankingItem {
  subId: number;
  h3Text: string;
  h6Text: string;
}

export interface RankingSection {
  id: number;
  headerText: string;
  footerArr: RankingItem[];
}

export const RANKING_ARR: RankingSection[] = [
  {
    id: 0,
    headerText: "榜单推荐",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
  {
    id: 1,
    headerText: "官方榜",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
  {
    id: 2,
    headerText: "精选榜",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 4, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
  {
    id: 3,
    headerText: "曲风榜",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 4, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 5, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 6, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 7, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 8, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 9, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 10, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
  {
    id: 4,
    headerText: "全球榜",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
  {
    id: 5,
    headerText: "语种榜",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 4, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 5, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 6, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 7, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 8, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 9, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
  {
    id: 6,
    headerText: "特色榜",
    footerArr: [
      { subId: 0, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 1, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 2, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 3, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 4, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 5, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 6, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 7, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 8, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 9, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 10, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 11, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 12, h3Text: "热歌榜", h6Text: "刚刚更新" },
      { subId: 13, h3Text: "热歌榜", h6Text: "刚刚更新" },
    ],
  },
];
