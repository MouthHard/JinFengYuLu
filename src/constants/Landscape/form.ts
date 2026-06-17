/**
 * 表单选项常量
 * 包含：作品类型、版权、上传质量、水印位置、地区选择、摄影师等级等
 */

// ====== 作品类型配置 ======
export const workTypes = ['photo', 'video', 'guide', 'panorama', 'timelapse', 'aerial', 'longexp', 'startrail', 'hdr']

export const workTypeConfigs: Record<string, { icon: string; name: string; format: string }> = {
  photo: { icon: '📸', name: '照片', format: 'JPG' },
  video: { icon: '🎥', name: '视频', format: 'MP4' },
  guide: { icon: '📝', name: '攻略', format: 'PDF' },
  panorama: { icon: '🗺️', name: '全景', format: 'JPG' },
  timelapse: { icon: '⏱️', name: '延时', format: 'MP4' },
  aerial: { icon: '🚁', name: '航拍', format: 'JPG' },
  longexp: { icon: '💫', name: '长曝光', format: 'JPG' },
  startrail: { icon: '✨', name: '星轨', format: 'JPG' },
  hdr: { icon: '🌟', name: 'HDR', format: 'JPG' },
}

export const workTypeIcons: Record<string, string> = Object.fromEntries(
  Object.entries(workTypeConfigs).map(([k, v]) => [k, v.icon])
) as Record<string, string>

export const workTypeLabels: Record<string, string> = Object.fromEntries(
  Object.entries(workTypeConfigs).map(([k, v]) => [k, v.name])
) as Record<string, string>

// ====== 类型到旅行模式映射 ======
export const typeToTravelMode: Record<string, string> = {
  'deep-tour': 'guided',
  'photo-tour': 'photography-tour',
  'self-drive': 'self-drive',
  'hiking': 'hiking',
  'free-travel': 'self-drive',
  'group-tour': 'group-tour',
  'camping': 'rv-camping',
  'cruise': 'cruise',
  'cycling': 'cycling',
}

// ====== 个人资料表单选项 ======
export const ProfileSpecialtyOptions = [
  '风光',
  '人像',
  '纪实',
  '商业',
  '建筑',
  '美食',
  '婚礼',
  '体育',
  '动物',
  '微距',
] as const

// ====== 版权选项 ======
export const CopyrightOptions = [
  { label: '保留所有权利', value: '保留所有权利' },
  { label: 'CC BY', value: 'CC BY' },
  { label: 'CC BY-SA', value: 'CC BY-SA' },
  { label: 'CC BY-NC', value: 'CC BY-NC' },
  { label: 'CC0', value: 'CC0' },
] as const

// ====== 摄影质量选项 ======
export const PhotographyQualityOptions = [
  { label: '原图', value: '原图' },
  { label: '高清', value: '高清' },
  { label: '标清', value: '标清' },
] as const

// ====== 水印位置选项 ======
export const WatermarkPositionOptions = [
  { label: '右下角', value: '右下角' },
  { label: '左下角', value: '左下角' },
  { label: '右上角', value: '右上角' },
  { label: '左上角', value: '左上角' },
  { label: '居中', value: '居中' },
] as const

// ====== 上传质量选项 ======
export const UploadQualityOptions = [
  { label: '高质量', value: '高质量' },
  { label: '普通', value: '普通' },
  { label: '节省空间', value: '节省空间' },
] as const

// ====== 上传隐私选项 ======
export const UploadPrivacyOptions = [
  { label: '公开', value: 'public' },
  { label: '仅关注者', value: 'followers' },
  { label: '私有', value: 'private' },
] as const

// ====== 中国地区列表 ======
export const chinaRegions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangdong', label: '广东' },
  { value: 'zhejiang', label: '浙江' },
  { value: 'jiangsu', label: '江苏' },
  { value: 'sichuan', label: '四川' },
  { value: 'hubei', label: '湖北' },
  { value: 'hunan', label: '湖南' },
  { value: 'shandong', label: '山东' },
  { value: 'henan', label: '河南' },
  { value: 'fujian', label: '福建' },
  { value: 'anhui', label: '安徽' },
  { value: 'hebei', label: '河北' },
  { value: 'shanxi', label: '山西' },
  { value: 'shaanxi', label: '陕西' },
  { value: 'yunnan', label: '云南' },
  { value: 'guizhou', label: '贵州' },
  { value: 'guangxi', label: '广西' },
  { value: 'hainan', label: '海南' },
  { value: 'liaoning', label: '辽宁' },
  { value: 'jilin', label: '吉林' },
  { value: 'heilongjiang', label: '黑龙江' },
  { value: 'gansu', label: '甘肃' },
  { value: 'qinghai', label: '青海' },
  { value: 'ningxia', label: '宁夏' },
  { value: 'xinjiang', label: '新疆' },
  { value: 'xizang', label: '西藏' },
  { value: 'neimenggu', label: '内蒙古' },
  { value: 'chongqing', label: '重庆' },
  { value: 'tianjin', label: '天津' },
  { value: 'hongkong', label: '香港' },
  { value: 'macau', label: '澳门' },
  { value: 'taiwan', label: '台湾' },
]

// ====== 摄影师等级选项 ======
export const photographerLevels = [
  { value: 'beginner', label: '初级摄影师' },
  { value: 'intermediate', label: '中级摄影师' },
  { value: 'advanced', label: '高级摄影师' },
  { value: 'master', label: '大师级摄影师' },
  { value: 'professional', label: '专业摄影师' },
]

// ====== 搜索排序选项 ======
export const SearchPhotographerSortOptions = [
  { value: 'relevance', label: '综合推荐' },
  { value: 'latest', label: '最新发布' },
  { value: 'followers', label: '最多关注' },
  { value: 'works', label: '最多作品' },
  { value: 'likes', label: '最多点赞' },
  { value: 'bookmarks', label: '最多收藏' },
] as const

export const SearchContentSortOptions = [
  { value: 'relevance', label: '综合推荐' },
  { value: 'latest', label: '最新发布' },
  { value: 'views', label: '最多浏览' },
  { value: 'likes', label: '最多点赞' },
  { value: 'bookmarks', label: '最多收藏' },
  { value: 'shares', label: '最多分享' },
] as const
