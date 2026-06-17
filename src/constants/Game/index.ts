/**
 * Game 模块常量
 * 包含：游戏分类、Banner 配置等
 */

import type {
  GameBanner,
  GameCategoryInfo,
} from '@/typesOfPages/game';

const P = (id: number) =>
  `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${id % 40}.webp`;

export const gameBanners: GameBanner[] = [
  {
    id: 'b1',
    gameId: 'cyber-nexus-2088',
    image: P(1015),
    title: '赛博元 2088',
    subtitle: '暗影之下的最终决战',
    tag: 'hot',
  },
  {
    id: 'b2',
    gameId: 'stardew-valley-remake',
    image: P(1018),
    title: '星露谷物语·重制版',
    subtitle: '回归田园的不朽时光',
    tag: 'new',
  },
  {
    id: 'b3',
    gameId: 'shadow-strider',
    image: P(1020),
    title: '影行者',
    subtitle: '限时特惠 5 折起',
    tag: 'sale',
  },
];

export const gameCategories: GameCategoryInfo[] = [
  { key: 'action', label: '动作', icon: '⚔️' },
  { key: 'rpg', label: '角色扮演', icon: '🎭️' },
  { key: 'strategy', label: '策略', icon: '♟️' },
  { key: 'adventure', label: '冒险', icon: '🧭️' },
  { key: 'fps', label: '射击', icon: '🔫' },
  { key: 'simulation', label: '模拟', icon: '🎮️' },
  { key: 'sports', label: '体育', icon: '⚽' },
  { key: 'puzzle', label: '解谜', icon: '🧩' },
  { key: 'horror', label: '恐怖', icon: '👻' },
  { key: 'indie', label: '独立', icon: '🎵' },
];

export const categoryLabelMap: Record<string, string> = Object.fromEntries(
  gameCategories.map((c) => [c.key, c.label]),
);
