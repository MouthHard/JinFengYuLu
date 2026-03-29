// History 页面工具函数统一导出

export {
  chineseToNumber,
  getStartYear,
  getEndYear,
  getDurationYears,
  getCacheStats,
  clearYearCache,
  formatPeriod,
  isAncientPeriod,
  getCentury,
} from "./dateUtils";

export {
  DYNASTY_CATEGORIES,
  sortDynastiesByTime,
  filterDynastiesByCategory,
  getDynastyDurationRanking,
  findDynastyById,
  getDynastyStats,
  getDynastyTimelineData,
} from "./dynastyUtils";
