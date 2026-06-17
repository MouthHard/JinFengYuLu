/**
 * Aphorism 诗歌分类常量
 * 包含：朝代、形式、题材、情感、流派、用途等分类
 */

import type { Category } from '@/typesOfPages/aphorism/category';

export const dynastyCategories: Category[] = Object.freeze([
  {
    id: 'all',
    name: '全部诗词',
    icon: '📚',
    count: 93000,
  },
  {
    id: 'pre-qin',
    name: '先秦',
    icon: '🏺',
    count: 800,
  },
  {
    id: 'qin-han',
    name: '秦汉',
    icon: '🏛️',
    count: 1700,
  },
  {
    id: 'wei-jin',
    name: '魏晋',
    icon: '🎋',
    count: 1200,
  },
  {
    id: 'nanbei-chao',
    name: '南北朝',
    icon: '🏯',
    count: 900,
  },
  {
    id: 'sui-tang',
    name: '隋唐',
    icon: '🏮🌸',
    count: 49200,
  },
  {
    id: 'wudai-shiguo',
    name: '五代十国',
    icon: '⚔️',
    count: 600,
  },
  {
    id: 'song-liao-jin',
    name: '宋辽金',
    icon: '🏯',
    count: 21400,
  },
  {
    id: 'yuan-ming-qing',
    name: '元明清',
    icon: '👑',
    count: 15600,
  },
  {
    id: 'modern',
    name: '近现代',
    icon: '📷',
    count: 3000,
  },
]) as Category[];

export const formCategories: Category[] = Object.freeze([
  {
    id: 'all',
    name: '全部诗词',
    icon: '📚',
    count: 93000,
  },
  {
    id: 'shi',
    name: '诗',
    icon: '📜',
    count: 65000,
    subCategories: [
      '五绝',
      '七绝',
      '五律',
      '七律',
      '五言古诗',
      '七言古诗',
      '古体诗',
    ],
  },
  {
    id: 'ci',
    name: '词',
    icon: '🎋',
    count: 21000,
    subCategories: ['小令', '中调', '长调'],
  },
  {
    id: 'qu',
    name: '曲',
    icon: '🎵',
    count: 5000,
    subCategories: ['散曲', '杂剧'],
  },
  {
    id: 'other-rhyme',
    name: '其他韵文',
    icon: '📚',
    count: 3000,
    subCategories: ['赋', '歌', '骚', '楚辞'],
  },
  {
    id: 'special-forms',
    name: '特殊形式',
    icon: '✨',
    count: 500,
    subCategories: ['回文诗', '藏头诗', '宝塔诗'],
  },
]) as Category[];

export const subjectCategories: Category[] = Object.freeze([
  {
    id: 'all',
    name: '全部诗词',
    icon: '📚',
    count: 93000,
  },
  {
    id: 'landscape',
    name: '山水田园',
    icon: '🏞️',
    count: 15000,
    subCategories: ['山水', '田园', '隐逸', '记游', '写景'],
  },
  {
    id: 'yongwu',
    name: '咏物',
    icon: '🌸',
    count: 12000,
    subCategories: ['咏物', '花', '鸟', '草木', '虫鱼'],
  },
  {
    id: 'history',
    name: '咏史怀古',
    icon: '🏛️',
    count: 8000,
    subCategories: ['咏史', '怀古', '古迹', '旧事'],
  },
  {
    id: 'border',
    name: '边塞征战',
    icon: '⚔️',
    count: 6000,
    subCategories: ['边塞', '战争', '从军', '出塞'],
  },
  {
    id: 'farewell',
    name: '离别相思',
    icon: '🌙',
    count: 10000,
    subCategories: ['离别', '相思', '闺怨', '寄赠'],
  },
  {
    id: 'fishing',
    name: '垂钓闲适',
    icon: '🎣',
    count: 5000,
    subCategories: ['垂钓', '闲适', '隐居', '归隐'],
  },
  {
    id: 'gongyuan',
    name: '宫怨',
    icon: '👸',
    count: 2000,
    subCategories: ['宫怨', '失宠', '幽禁'],
  },
  {
    id: 'jilv',
    name: '羁旅',
    icon: '🧳',
    count: 4000,
    subCategories: ['羁旅', '漂泊', '行役', '游子'],
  },
  {
    id: 'romance',
    name: '爱情言情',
    icon: '💕',
    count: 7000,
    subCategories: ['爱情', '定情', '相思', '闺情'],
  },
  {
    id: 'philosophy',
    name: '哲理',
    icon: '🔮',
    count: 3500,
    subCategories: ['哲理', '禅理', '悟道', '人生'],
  },
  {
    id: 'inspiration',
    name: '励志',
    icon: '💪',
    count: 4500,
    subCategories: ['励志', '壮志', '抒怀', '自勉'],
  },
  {
    id: 'drinking',
    name: '饮酒',
    icon: '🍶',
    count: 5500,
    subCategories: ['饮酒', '宴饮', '对酒', '独酌'],
  },
  {
    id: 'festival',
    name: '节日',
    icon: '🎊',
    count: 2500,
    subCategories: ['节日', '元宵', '端午', '中秋', '重阳'],
  },
]) as Category[];

export const emotionCategories: Category[] = Object.freeze([
  {
    id: 'all',
    name: '全部诗词',
    icon: '📚',
    count: 93000,
  },
  {
    id: 'joy',
    name: '欢乐',
    icon: '😊',
    count: 8000,
  },
  {
    id: 'sadness',
    name: '悲伤',
    icon: '😢',
    count: 10000,
  },
  {
    id: 'nostalgia',
    name: '思乡',
    icon: '🏠',
    count: 7000,
  },
  {
    id: 'worry',
    name: '忧愁',
    icon: '😔',
    count: 9000,
  },
  {
    id: 'anger',
    name: '愤怒',
    icon: '😠',
    count: 3000,
  },
  {
    id: 'admiration',
    name: '仰慕',
    icon: '🌟',
    count: 5000,
  },
  {
    id: 'heroic',
    name: '豪迈',
    icon: '🦁',
    count: 4000,
  },
  {
    id: 'tranquil',
    name: '恬淡',
    icon: '🍃',
    count: 3500,
  },
  {
    id: 'lonely',
    name: '孤独',
    icon: '🌑',
    count: 4200,
  },
  {
    id: 'melancholy',
    name: '惆怅',
    icon: '🌫️',
    count: 3800,
  },
]) as Category[];

export const schoolCategories: Category[] = Object.freeze([
  {
    id: 'all',
    name: '全部诗词',
    icon: '📚',
    count: 93000,
  },
  {
    id: 'tianlu',
    name: '婉约派',
    icon: '🌸',
    count: 12000,
  },
  {
    id: 'haofang',
    name: '豪放派',
    icon: '🔥',
    count: 8000,
  },
  {
    id: 'qingkuang',
    name: '清旷派',
    icon: '💧',
    count: 5000,
  },
  {
    id: 'gelian',
    name: '格律派',
    icon: '📏',
    count: 10000,
  },
  {
    id: 'tianyuan',
    name: '田园派',
    icon: '🌾',
    count: 4000,
  },
  {
    id: 'biansai',
    name: '边塞派',
    icon: '⛰️',
    count: 3000,
  },
  {
    id: 'jiangxi',
    name: '江西诗派',
    icon: '🖌️',
    count: 2500,
  },
]) as Category[];

export const usageCategories: Category[] = Object.freeze([
  {
    id: 'all',
    name: '全部诗词',
    icon: '📚',
    count: 93000,
  },
  {
    id: 'reading',
    name: '启蒙读物',
    icon: '📖',
    count: 2000,
  },
  {
    id: 'examination',
    name: '科举应试',
    icon: '🎓',
    count: 5000,
  },
  {
    id: 'friendship',
    name: '酬唱赠答',
    icon: '🤝',
    count: 8000,
  },
  {
    id: 'commemoration',
    name: '咏史纪念',
    icon: '🕯️',
    count: 6000,
  },
  {
    id: 'yingzhi',
    name: '应制',
    icon: '📜',
    count: 1500,
  },
  {
    id: 'folk',
    name: '民歌',
    icon: '🎵',
    count: 2800,
  },
]) as Category[];

export const mainCategories: Category[] = Object.freeze([
  {
    id: 'dynasty',
    name: '朝代',
    icon: '👑',
    children: dynastyCategories,
  },
  {
    id: 'form',
    name: '形式',
    icon: '📜',
    children: formCategories,
  },
  {
    id: 'subject',
    name: '题材',
    icon: '📝',
    children: subjectCategories,
  },
  {
    id: 'emotion',
    name: '情感',
    icon: '❤️',
    children: emotionCategories,
  },
  {
    id: 'school',
    name: '流派',
    icon: '🎭',
    children: schoolCategories,
  },
  {
    id: 'usage',
    name: '用途',
    icon: '💡',
    children: usageCategories,
  },
]) as Category[];

export const hotTags: string[] = Object.freeze([
  '思念',
  '孤独',
  '爱国',
  '山水',
  '田园',
  '边塞',
  '战争',
  '送别',
  '怀古',
  '闺怨',
  '羁旅',
  '友情',
  '爱情',
  '亲情',
  '励志',
  '哲理',
  '饮酒',
  '归隐',
  '闲适',
  '隐居',
]) as string[];
