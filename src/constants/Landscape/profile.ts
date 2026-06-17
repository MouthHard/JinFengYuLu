/**
 * 个人资料相关常量
 * 包含：用户资料、个人标签页、个人分类等
 */

// ====== 用户资料（默认值） ======
import { OSS } from './core'

export const userProfile = {
  id: 'user-1',
  name: '风光摄影爱好者',
  title: '星空探索者',
  avatar: `${OSS}/1.webp`,
  bio: '用镜头记录世界的普通与大地的壮美，在光影中寻找宁静的瞬间',
  location: '中国·北京',
  joinDate: '2024年加入',
  tags: ['风光', '星空', '城市'],
  verified: false,
  stats: {
    works: 12,
    favorites: 0,
    likes: 0,
    following: 0,
  }
}

// ====== 个人标签页 ======
export const profileTabs = [
  { key: 'favorites', name: '我的收藏', icon: '❤️' },
  { key: 'likes', name: '我的喜欢', icon: '💙' },
  { key: 'uploads', name: '我的上传', icon: '📤' },
  { key: 'following', name: '我的关注', icon: '👤' },
]

// ====== 个人分类筛选 ======
export const profileCategories = [
  { id: 'image', name: '图片', icon: '🖼️' },
  { id: 'video', name: '视频', icon: '🎥' },
  { id: 'guide', name: '攻略', icon: '📝' },
  { id: 'photographer', name: '摄影师', icon: '👤' },
]
