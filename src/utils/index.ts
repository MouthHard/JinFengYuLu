// 通用工具函数统一导出

// 通用工具
export * from "./common";

// History 页面工具（通过命名空间导出）
export * as HistoryUtils from "./history";

// Museum 页面工具（按需导入）
export { formatNumber, generateMuseumRoute } from "./museum";

// TravelGuide 页面工具（通过命名空间导出）
export * as TravelGuideUtils from "./travelGuide";

// Music 页面工具（按需导入）
export {
  formatDuration,
  formatPlayCount,
  getNextIndex,
  getPrevIndex,
  parseLyric,
  getCurrentLyricIndex,
  searchSongs as searchMusic,
  getTagColor,
} from "./music";
