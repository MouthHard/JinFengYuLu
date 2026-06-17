/**
 * Museum 模块常量统一导出
 *
 * 包含子模块：
 * - artifacts.ts → 文物类型、朝代等常量
 * - creative.ts  → 文创产品分类常量
 */

export {
  ARTIFACT_TYPES,
  DYNASTIES,
  ARTIFACT_TYPE_MAP,
  DYNASTY_MAP,
} from './artifacts'

export {
  CREATIVE_CATEGORIES,
} from './creative'

export type { CreativeCategory } from './creative'
