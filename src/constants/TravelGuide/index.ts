/**
 * TravelGuide 模块常量统一导出
 *
 * 包含子模块：
 * - provinces.ts → 中国省份信息
 * - scenery.ts   → 风光分类体系（标签页/文化主题/景观类型/季节等）
 */

export { provincesData } from './provinces'
export { default as defaultProvincesData } from './provinces'
export type { Province } from './provinces'

export {
  sceneryTabs,
  cultureThemes,
  landscapeTypes,
  bestTimes,
  seasons,
} from './scenery'
