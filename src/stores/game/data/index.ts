/**
 * @deprecated 此文件已迁移至 src/constants/Game/index.ts
 * 为保持向后兼容，此处保留 re-export
 * 新代码请直接从 '@/constants/Game' 导入
 *
 * 注意：games（游戏列表数据）保留在此处，因为它是 Mock 业务数据
 */

export {
  gameBanners,
  gameCategories,
  categoryLabelMap,
} from '@/constants/Game'

// 游戏列表数据（Mock 数据，保留在 data 目录）
export { games } from './games'
