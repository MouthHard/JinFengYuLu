import { computed, type ComputedRef } from 'vue';
import { useLandscapeDataStore } from '@/stores/landscape/data';

const TAG_ICONS: Record<string, string> = {
  '极光': '🌌', '星空': '✨', '雪山': '🏔️', '海浪': '🌊', '日落': '🌅',
  '秋叶': '🍂', '森林': '🌲', '城市': '🏙️', '建筑': '🏛️', '夜景': '🌃',
  '人像': '👤', '风光': '🏞️', '微距': '🔍', '长曝光': '⏱️', '延时': '⏰',
  '航拍': '🚁', '街拍': '📷', '胶片': '🎞️', '黑白': '⚫', '彩色': '🎨',
  '山岳': '⛰️', '高原': '🗺️', '沙漠': '🏜️', '湖泊': '💧', '河流': '🏞️',
  '瀑布': '💦', '花海': '🌸', '冰雪': '❄️', '云海': '☁️', '彩虹': '🌈',
  '野生动物': '🦌', '飞鸟': '🦅', '海底': '🤿', '美食': '🍱', '人文': '📖',
};

function getIconForTag(tag: string): string {
  for (const key in TAG_ICONS) {
    if (tag.includes(key)) return TAG_ICONS[key];
  }
  return '📍';
}

interface HotTag {
  icon: string;
  text: string;
}

let _hotSearchTags: ComputedRef<HotTag[]> | null = null;

export function useHotTags() {
  if (_hotSearchTags) {
    return { hotSearchTags: _hotSearchTags };
  }

  const dataStore = useLandscapeDataStore();

  _hotSearchTags = computed(() => {
    const tagCount = new Map<string, number>();

    const collectTags = (tags: string[]) => {
      for (const t of tags) {
        if (!t || t.length < 2) continue;
        tagCount.set(t, (tagCount.get(t) || 0) + 1);
      }
    };

    const images = dataStore.getAllImages();
    for (const img of images) {
      collectTags(img.tags || []);
    }

    const videos = dataStore.getAllVideos();
    for (const v of videos) {
      collectTags(v.tags || []);
    }

    const guides = dataStore.getAllGuides();
    for (const g of guides) {
      collectTags(g.tags || []);
      if (g.highlights) collectTags(g.highlights);
    }

    const photographers = dataStore.getAllPhotographers();
    for (const p of photographers) {
      collectTags(p.tags || []);
    }

    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => ({ icon: getIconForTag(tag), text: tag }));
  });

  return { hotSearchTags: _hotSearchTags };
}