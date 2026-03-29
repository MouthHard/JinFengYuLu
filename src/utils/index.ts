// 通用工具函数统一导出

// 颜色工具（跨页面通用）
export {
  COLOR_SCHEMES,
  getColorByString,
  clearColorCache,
  getCacheSize,
} from "./colorUtils";

// 通用工具
export * from "./common";

// History 页面工具（通过命名空间导出）
export * as HistoryUtils from "./history";

// TravelGuide 页面工具（通过命名空间导出）
export * as TravelGuideUtils from "./travelGuide";
