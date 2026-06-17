/**
 * 分类导航图标与颜色映射 composable
 * 将大量静态映射数据从组件中抽离，保持组件精简
 */
import { type Component } from 'vue';
import CrownIcon from '../icons/CategoryNav/CrownIcon.vue';
import ScrollIcon from '../icons/CategoryNav/ScrollIcon.vue';
import PenIcon from '../icons/CategoryNav/PenIcon.vue';
import HeartIcon from '../icons/common/HeartIcon.vue';
import MaskIcon from '../icons/CategoryNav/MaskIcon.vue';
import LightBulbIcon from '../icons/CategoryNav/LightBulbIcon.vue';

// ==================== 图标映射 ====================

/** 主分类ID到图标的映射 */
export const mainCategoryIconMap: Record<string, Component> = {
  dynasty: CrownIcon,
  form: ScrollIcon,
  subject: PenIcon,
  emotion: HeartIcon,
  school: MaskIcon,
  usage: LightBulbIcon,
};

/** 子分类ID到图标的映射 */
export const subCategoryIconMap: Record<string, Component> = {
  // ---- 朝代子分类 ----
  'pre-qin': CrownIcon,
  'qin-han': CrownIcon,
  'wei-jin': CrownIcon,
  'nanbei-chao': CrownIcon,
  'sui-tang': CrownIcon,
  'wudai-shiguo': CrownIcon,
  'song-liao-jin': CrownIcon,
  'yuan-ming-qing': CrownIcon,
  modern: CrownIcon,

  // ---- 形式子分类 ----
  shi: ScrollIcon,
  ci: ScrollIcon,
  qu: ScrollIcon,
  'other-rhyme': ScrollIcon,
  'special-forms': ScrollIcon,

  // ---- 题材子分类 ----
  landscape: PenIcon,
  yongwu: PenIcon,
  history: PenIcon,
  border: PenIcon,
  farewell: PenIcon,
  fishing: PenIcon,
  gongyuan: PenIcon,
  jilv: PenIcon,
  romance: PenIcon,
  philosophy: PenIcon,
  inspiration: PenIcon,
  drinking: PenIcon,
  festival: PenIcon,

  // ---- 情感子分类 ----
  joy: HeartIcon,
  sadness: HeartIcon,
  nostalgia: HeartIcon,
  worry: HeartIcon,
  anger: HeartIcon,
  admiration: HeartIcon,
  heroic: HeartIcon,
  tranquil: HeartIcon,
  lonely: HeartIcon,
  melancholy: HeartIcon,

  // ---- 流派子分类 ----
  tianlu: MaskIcon,
  haofang: MaskIcon,
  qingkuang: MaskIcon,
  gelian: MaskIcon,
  tianyuan: MaskIcon,
  biansai: MaskIcon,
  jiangxi: MaskIcon,

  // ---- 用途子分类 ----
  reading: LightBulbIcon,
  examination: LightBulbIcon,
  friendship: LightBulbIcon,
  commemoration: LightBulbIcon,
  yingzhi: LightBulbIcon,
  folk: LightBulbIcon,
};

/** 获取主分类图标组件 */
export const getCategoryIcon = (categoryId: string): Component => {
  return mainCategoryIconMap[categoryId] || CrownIcon;
};

/** 获取子分类图标组件 */
export const getSubCategoryIcon = (subCategoryId: string): Component => {
  return subCategoryIconMap[subCategoryId] || PenIcon;
};

// ==================== 颜色映射 ====================

/** 主分类颜色（亮色系，避开红色/橙色背景） */
export const mainCategoryColorMap: Record<string, string> = {
  dynasty: '#3DB8AD',
  form: '#40D4A8',
  subject: '#5BA3F5',
  emotion: '#FF8C69',
  school: '#B088F9',
  usage: '#50C878',
};

/** 子分类颜色（亮色系，每个二级分类独立颜色） */
export const subCategoryColorMap: Record<string, string> = {
  // ---- 朝代：金黄暖亮系 ----
  'pre-qin': '#D4A017',
  'qin-han': '#E6B422',
  'wei-jin': '#F0C850',
  'nanbei-chao': '#F5D060',
  'sui-tang': '#FFD700',
  'wudai-shiguo': '#DAA520',
  'song-liao-jin': '#E8C547',
  'yuan-ming-qing': '#F2CC70',
  modern: '#D4AF37',

  // ---- 形式：青碧冷亮系 ----
  shi: '#3DD68C',
  ci: '#42D4C8',
  qu: '#38B2AC',
  'other-rhyme': '#5EC0C8',
  'special-forms': '#B088F9',

  // ---- 题材：天蓝多彩亮系 ----
  landscape: '#45D47E',
  yongwu: '#FF7EB3',
  history: '#B08968',
  border: '#F08080',
  farewell: '#7C9CFF',
  fishing: '#5DADE2',
  gongyuan: '#FF91A4',
  jilv: '#95A5BC',
  romance: '#FF69B4',
  philosophy: '#9966CC',
  inspiration: '#FFA500',
  drinking: '#E74C3C',
  festival: '#FF7F50',

  // ---- 情感：彩虹明亮系 ----
  joy: '#FF6B6B',
  sadness: '#74B9FF',
  nostalgia: '#55EFC4',
  worry: '#A4B0BE',
  anger: '#FF7675',
  admiration: '#FECA57',
  heroic: '#FF9F43',
  tranquil: '#7BED9F',
  lonely: '#7F8FA6',
  melancholy: '#95afc0',

  // ---- 流派：紫粉艺术亮系 ----
  tianlu: '#FD79A8',
  haofang: '#FAB1A0',
  qingkuang: '#81ECEC',
  gelian: '#A29BFE',
  tianyuan: '#BADB58',
  biansai: '#CD9B73',
  jiangxi: '#A29BFE',

  // ---- 用途：翠黄实用亮系 ----
  reading: '#FDCB6E',
  examination: '#B388FF',
  friendship: '#55E6C1',
  commemoration: '#F0C040',
  yingzhi: '#A4B0BE',
  folk: '#F8A5C2',
};

/** 获取主分类颜色 */
export const getMainCategoryColor = (categoryId: string): string => {
  return mainCategoryColorMap[categoryId] || '#5BA3F5';
};

/** 获取子分类颜色 */
export const getSubCategoryColor = (subCategoryId: string): string => {
  return subCategoryColorMap[subCategoryId] || '#74B9FF';
};
