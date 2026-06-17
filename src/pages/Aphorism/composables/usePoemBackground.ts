/**
 * 诗词卡片背景图 composable
 * PoemCard 与 StudyRoomCard 共用同一套背景图选择逻辑
 *
 * 性能优化：图片 URL 列表为模块级常量，所有卡片实例共享，避免重复计算
 */
import type { Poem } from '@/typesOfPages/aphorism/poem';

const IMAGE_NAMES = [
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
  'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z', 'image',
];

/** 模块级缓存：所有卡片实例共享同一份 URL 列表 */
const ALL_IMAGE_URLS: string[] = IMAGE_NAMES.map(
  (name) =>
    new URL(`../../../assets/image/PoemPic/${name}.webp`, import.meta.url).href,
);

/** 根据字符串 id 计算哈希值 */
const hashCode = (id: string): number => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
};

/**
 * 获取诗词对应的背景图 URL
 * 使用 id 哈希值确保相同诗词始终使用相同背景
 */
export function usePoemBackground(poem: Poem) {
  const backgroundImage = getBackgroundUrl(poem.id);
  return { backgroundImage };
}

/** 轻量版：仅根据 id 字符串获取背景图（无需完整 Poem 对象） */
export function getBackgroundUrl(id: string): string {
  if (ALL_IMAGE_URLS.length === 0) return '';
  const index = hashCode(id) % ALL_IMAGE_URLS.length;
  return ALL_IMAGE_URLS[index];
}
