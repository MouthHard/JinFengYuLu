/**
 * Aphorism 模块常量统一导出
 *
 * 包含子模块：
 * - categories.ts → 诗歌分类（朝代、形式、题材等）
 * - poems.ts → 诗词数据
 */

export {
  dynastyCategories,
  formCategories,
  subjectCategories,
  emotionCategories,
  schoolCategories,
  usageCategories,
  mainCategories,
  hotTags,
} from './categories';

export { poems } from './poems/index';
