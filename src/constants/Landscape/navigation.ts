/**
 * 导航相关常量
 * 包含：主导航菜单、内容标签页、媒体类型筛选等
 */

// ====== 主导航菜单 ======
export const mainNavs = [
  { path: '/landscape/home', name: '首页', icon: '🏠', iconComponent: 'HomeNavIcon' },
  { path: '/landscape/category', name: '分类', icon: '📑', iconComponent: 'CategoryIcon' },
  { path: '/landscape/guides', name: '指南攻略', icon: '📝', iconComponent: 'BookmarkIcon' },
  { path: '/landscape/photographers', name: '摄影师', icon: '👤', iconComponent: 'UsersIcon' },
  { path: '/landscape/profile', name: '我的', icon: '👤', iconComponent: 'UserIcon' },
] as const

// ====== 内容标签页 ======
export const contentTabs = [
  { key: 'all', label: '全部', icon: '📋' },
  { key: 'photo', label: '图片', icon: '📷' },
  { key: 'video', label: '视频', icon: '🎬' },
  { key: 'guide', label: '攻略', icon: '📘' },
]

// ====== 媒体类型筛选 ======
export const mediaTypes: Array<{ id: 'all' | 'image' | 'video'; label: string; icon: string }> = [
  { id: 'all', label: '全部', icon: '📱' },
  { id: 'image', label: '图片', icon: '🖼️' },
  { id: 'video', label: '视频', icon: '🎥' },
]
