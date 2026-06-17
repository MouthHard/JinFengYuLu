/**
 * Landscape 模块常量统一导出
 *
 * 包含子模块：
 * - core.ts        → 核心常量（OSS、Hero数据等）
 * - navigation.ts  → 导航相关常量
 * - filters.ts     → 筛选排序常量
 * - profile.ts     → 个人资料常量
 * - guides.ts      → 指南模块常量
 * - form.ts        → 表单选项常量
 * - categories.ts  → 分类体系常量
 */

// 核心常量
export {
  OSS,
  dimensions,
  heroStats,
  heroTitle,
  heroSubtitleWords,
  hotTopics,
  popularDestinations,
  seasonMap,
  difficultyMap,
  MIN_LOAD_TIME,
  cachedViews,
  masonryCardHeights,
} from './core'

// 导航相关常量
export {
  mainNavs,
  contentTabs,
  mediaTypes,
} from './navigation'

// 筛选排序常量
export {
  filterTags,
  sortOptions,
  guideSortOptions,
  quickFilters,
  typeFilters,
  rankingTabs,
  hotTags,
} from './filters'

// 个人资料常量
export {
  userProfile,
  profileTabs,
  profileCategories,
} from './profile'

// 指南模块常量
export {
  travelModeMap,
  travelModes,
  naturalScenery,
  weatherScenery,
  seasonalScenery,
  culturalScenery,
  wildlifeScenery,
  locations,
  seasons,
  durations,
  budgetRanges,
  difficultyLevels,
  groupTypes,
  photographyThemes,
  specialExperiences,
  guideTypes,
  ratingFilters,
  contentStyles,
  seasonalEvents,
  detailedLocations,
  photographyTechniques,
  guideModeMap,
  guideSeasonMap,
  guideDurationMap,
  guideThemeMap,
  travelModeToFilterId,
} from './guides'

// 表单选项常量
export {
  workTypes,
  workTypeConfigs,
  workTypeIcons,
  workTypeLabels,
  typeToTravelMode,
  ProfileSpecialtyOptions,
  CopyrightOptions,
  PhotographyQualityOptions,
  WatermarkPositionOptions,
  UploadQualityOptions,
  UploadPrivacyOptions,
  chinaRegions,
  photographerLevels,
  SearchPhotographerSortOptions,
  SearchContentSortOptions,
} from './form'

// 分类体系常量
export {
  themeCategories,
  locationCategories,
  timeCategories,
  weatherCategories,
  techniqueCategories,
  styleCategories,
  elementCategories,
  allCategories,
  categoryGroups,
} from './categories'

export type { CategoryGroup, Category } from './categories'
