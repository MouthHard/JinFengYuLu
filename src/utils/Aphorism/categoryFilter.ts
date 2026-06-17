/**
 * 诗词分类筛选工具
 * 负责根据分类条件筛选诗词
 */

import type { Poem } from '@/typesOfPages/aphorism/poem';

/**
 * 朝代映射表
 */
const DYNASTY_MAP: Record<string, string[]> = {
  'pre-qin': ['先秦'],
  'qin-han': ['秦', '汉', '秦末', '汉代', '东汉末年'],
  'wei-jin': ['魏晋', '东晋', '三国'],
  'nanbei-chao': ['南北朝', '北朝'],
  'sui-tang': ['隋', '唐', '唐代'],
  'wudai-shiguo': ['五代十国'],
  'song-liao-jin': ['宋', '北宋', '南宋', '辽金'],
  'yuan-ming-qing': ['元', '明代', '明', '清', '清代'],
};

/**
 * 体裁映射表
 */
const FORM_MAP: Record<string, string[]> = {
  shi: ['五绝', '七绝', '五律', '七律', '五言古诗', '七言古诗', '古体诗'],
  ci: ['词'],
  qu: ['散曲'],
  'other-rhyme': ['铭', '箴', '颂'],
  'special-forms': ['回文诗', '藏头诗'],
};

/**
 * 题材映射表
 */
const SUBJECT_TAG_MAP: Record<string, string[]> = {
  landscape: ['山水', '田园', '隐逸', '记游', '写景'],
  yongwu: ['咏物', '花', '鸟', '草木', '虫鱼'],
  history: ['咏史', '怀古', '古迹', '旧事'],
  border: ['边塞', '战争', '从军', '出塞'],
  farewell: ['离别', '相思', '闺怨', '寄赠', '送别', '赠友', '思乡', '怀人'],
  fishing: ['垂钓', '闲适', '隐居', '归隐'],
  gongyuan: ['宫怨', '失宠', '幽禁'],
  jilv: ['羁旅', '漂泊', '行役', '游子'],
  romance: ['爱情', '定情', '相思', '闺情'],
  philosophy: ['哲理', '禅理', '悟道', '人生', '感怀'],
  inspiration: ['励志', '壮志', '抒怀', '自勉'],
  drinking: ['饮酒', '宴饮', '对酒', '独酌'],
  festival: ['节日', '元宵', '端午', '中秋', '重阳', '时令'],
};

/**
 * 情感映射表
 */
const EMOTION_TAG_MAP: Record<string, string[]> = {
  joy: ['喜悦', '欢乐', '快乐', '幽默'],
  sadness: ['悲伤', '凄婉', '苍凉', '凄凉', '忧愁'],
  nostalgia: ['思乡', '怀人', '羁旅', '漂泊'],
  worry: ['忧虑', '忧国', '忧民', '忧愁'],
  anger: ['愤懑', '愤慨'],
  admiration: ['赞美', '敬仰', '雄浑'],
  heroic: ['豪放', '豪迈', '悲壮', '壮烈'],
  tranquil: ['闲适', '旷达', '冲淡', '淡泊', '恬淡', '清丽', '典雅'],
  lonely: ['孤独', '寂寞'],
  melancholy: ['惆怅', '伤感'],
};

/**
 * 用途映射表
 */
const USAGE_MAP: Record<string, string[]> = {
  reading: ['劝学', '修身', '哲理', '启蒙'],
  examination: ['励志', '祝寿', '壮志', '自勉'],
  friendship: ['赠友', '送别', '离别', '思念', '祝福', '酬唱'],
  commemoration: ['哀悼', '咏史纪念', '纪念'],
  yingzhi: ['应制', '酬唱', '宴饮'],
  folk: ['民歌', '民谣', '叙事'],
};

/**
 * 根据朝代筛选诗词
 */
function filterByDynasty(poem: Poem, subCategoryId: string): boolean {
  const dynasties = DYNASTY_MAP[subCategoryId];
  return dynasties ? dynasties.includes(poem.dynasty) : false;
}

/**
 * 根据体裁筛选诗词
 */
function filterByForm(poem: Poem, subCategoryId: string): boolean {
  const forms = FORM_MAP[subCategoryId];
  return forms && poem.form ? forms.some((f) => poem.form?.includes(f)) : false;
}

/**
 * 根据题材筛选诗词
 */
function filterBySubject(poem: Poem, subCategoryId: string): boolean {
  const mappedTags = SUBJECT_TAG_MAP[subCategoryId];
  if (mappedTags) {
    return mappedTags.some((tag) => poem.tags?.includes(tag));
  }
  return poem.tags?.includes(subCategoryId) || false;
}

/**
 * 根据情感筛选诗词
 */
function filterByEmotion(poem: Poem, subCategoryId: string): boolean {
  const mappedTags = EMOTION_TAG_MAP[subCategoryId];
  if (mappedTags) {
    return mappedTags.some((tag) => poem.tags?.includes(tag));
  }
  return poem.tags?.includes(subCategoryId) || false;
}

/**
 * 流派映射表
 */
const SCHOOL_TAG_MAP: Record<string, string[]> = {
  tianlu: ['婉约', '婉约派', '花间', '温李诗派'],
  haofang: ['豪放', '豪放派', '豪迈', '阳羡词派'],
  qingkuang: ['闲适旷', '闲适旷达', '冲淡', '恬淡', '清旷'],
  gelian: ['格调派', '格律派', '肌理派'],
  tianyuan: ['山水田园诗派', '田园', '田园派'],
  biansai: ['边塞诗派', '边塞', '边塞战争'],
  jiangxi: ['江西诗派', '韩孟诗派', '元白诗派', '江湖诗派', '四灵派', '中兴四大家', '前后七子', '公安派', '竟陵派', '性灵派', '浙西词派'],
};

/**
 * 根据流派筛选诗词
 */
function filterBySchool(poem: Poem, subCategoryId: string): boolean {
  const mappedTags = SCHOOL_TAG_MAP[subCategoryId];
  if (mappedTags) {
    return mappedTags.some((tag) => poem.tags?.includes(tag));
  }
  return poem.tags?.includes(subCategoryId) || false;
}

/**
 * 根据场景筛选诗词
 */
function filterByUsage(poem: Poem, subCategoryId: string): boolean {
  return USAGE_MAP[subCategoryId]?.some((tag) => poem.tags?.includes(tag)) || false;
}

/**
 * 根据分类筛选诗词
 * @param poems 诗词列表
 * @param categoryId 主分类ID
 * @param subCategoryId 子分类ID
 * @returns 符合条件的诗词列表
 */
export function filterPoemsByCategory(
  poems: Poem[],
  params: { categoryId?: string; subCategoryId?: string },
): Poem[] {
  const { categoryId, subCategoryId } = params;

  // 没有主分类或主分类是 'all'，返回所有诗词
  if (!categoryId || categoryId === 'all') {
    return poems;
  }

  // 子分类是 'all' 或没有子分类，返回所有诗词
  if (!subCategoryId || subCategoryId === 'all') {
    return poems;
  }

  return poems.filter((poem) => {
    switch (categoryId) {
      case 'dynasty':
        return filterByDynasty(poem, subCategoryId);
      case 'form':
        return filterByForm(poem, subCategoryId);
      case 'subject':
        return filterBySubject(poem, subCategoryId);
      case 'emotion':
        return filterByEmotion(poem, subCategoryId);
      case 'school':
        return filterBySchool(poem, subCategoryId);
      case 'usage':
        return filterByUsage(poem, subCategoryId);
      default:
        return false;
    }
  });
}

/**
 * 搜索诗词
 * @param poems 诗词列表
 * @param query 搜索关键词
 * @returns 符合条件的诗词列表
 */
export function searchPoems(poems: Poem[], query: string): Poem[] {
  if (!query.trim()) return poems;

  const lowerQuery = query.toLowerCase();

  return poems.filter((poem) => {
    return (
      poem.title.toLowerCase().includes(lowerQuery) ||
      poem.author.toLowerCase().includes(lowerQuery) ||
      poem.dynasty.toLowerCase().includes(lowerQuery) ||
      poem.content.some((line) => line.toLowerCase().includes(lowerQuery)) ||
      poem.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}