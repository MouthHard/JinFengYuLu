/**
 * 筛选和排序相关常量
 * 包含：筛选标签、排序选项、快速过滤、类型过滤器等
 */

// ====== 筛选标签 ======
export const filterTags = [
  { id: 'all', name: '全部', icon: '📸', count: 8 },
  { id: '风光', name: '风光', icon: '🏔️', count: 3 },
  { id: '星空', name: '星空', icon: '🌟', count: 2 },
  { id: '城市', name: '城市', icon: '🏙️', count: 2 },
  { id: '夜景', name: '夜景', icon: '🌃', count: 1 },
  { id: '自然', name: '自然', icon: '🌿', count: 2 }
]

// ====== 排序选项 ======
export const sortOptions = [
  { value: 'default', label: '默认排序' },
  { value: 'works', label: '作品数最多' },
  { value: 'views', label: '浏览量最多' },
  { value: 'likes', label: '点赞数最多' },
  { value: 'followers', label: '粉丝数最多' },
  { value: 'active', label: '最近活跃' }
]

export const guideSortOptions = [
  { value: 'latest', label: '最新' },
  { value: 'views', label: '最多浏览' },
  { value: 'likes', label: '最多点赞' },
  { value: 'loves', label: '最多喜爱' },
  { value: 'bookmarks', label: '最多收藏' },
  { value: 'shares', label: '最多分享' },
]

// ====== 快速过滤器 ======
export const quickFilters: Array<{ id: string; label: string; icon: string }> = [
  { id: 'latest', label: '最新', icon: '⭐' },
  { id: 'most-views', label: '最多浏览', icon: '👁️' },
  { id: 'most-likes', label: '最多点赞', icon: '👍' },
  { id: 'most-loves', label: '最多喜爱', icon: '❤️' },
  { id: 'most-favorites', label: '最多收藏', icon: '🔖' },
  { id: 'most-shares', label: '最多分享', icon: '🔗' },
]

// ====== 类型过滤器 ======
export const typeFilters = [
  { value: 'image', label: '图片', icon: '🖼️' },
  { value: 'video', label: '视频', icon: '🎥' },
  { value: 'guide', label: '攻略', icon: '📝' },
  { value: 'photographer', label: '摄影师', icon: '👤' }
]

// ====== 排行榜标签 ======
export const rankingTabs = [
  { value: 'works', label: '作品数', icon: '📷' },
  { value: 'followers', label: '粉丝数', icon: '👥' },
  { value: 'likes', label: '点赞数', icon: '❤️' },
  { value: 'views', label: '浏览量', icon: '👁️' }
]

// ====== 热门标签 ======
export const hotTags = [
  { id: 'aurora', name: '极光', count: 1234 },
  { id: 'mountain', name: '山岳', count: 987 },
  { id: 'city', name: '城市', count: 876 },
  { id: 'beach', name: '海滩', count: 765 },
]
