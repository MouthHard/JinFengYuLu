/**
 * 诗词分类筛选工具
 * 负责根据分类条件筛选诗词
 */

import type { Poem } from '@/types/aphorism/poem';

/**
 * 朝代映射表
 * 
 * 【朝代分类说明】
 * 按照中国历史朝代顺序分类，使用标准朝代名称，避免重复。
 * 
 * 【分类规则】
 * 1. 需要分开的朝代保留（如"西汉"和"东汉"、"北宋"和"南宋"）
 * 2. 删除过于细分的时期（如"东汉末年"、"秦末"等）
 * 3. 使用标准朝代名称（如"唐"而非"唐代"）
 * 4. 为未来数据预留空间（如"春秋"、"战国"等）
 * 
 * 【注意】key 使用中文名称，与后端 category 表的 name 字段保持一致
 */
const DYNASTY_MAP: Record<string, string[]> = {
  // 先秦：夏、商、西周、东周（春秋、战国）
  '先秦': ['先秦', '夏', '商', '西周', '东周', '春秋', '战国', '诗经'],
  
  // 秦汉：秦、西汉、东汉
  '秦汉': ['秦', '西汉', '东汉'],
  
  // 魏晋：三国（魏、蜀、吴）、西晋、东晋
  '魏晋': ['魏晋', '西晋', '东晋', '三国', '魏', '蜀', '吴'],
  
  // 南北朝：南朝（宋、齐、梁、陈）、北朝（北魏、东魏、西魏、北齐、北周）
  '南北朝': ['南北朝', '南朝', '北朝', '宋', '齐', '梁', '陈', '北魏', '东魏', '西魏', '北齐', '北周'],
  
  // 隋唐：隋、唐
  '隋唐': ['隋', '唐'],
  
  // 五代十国：五代（后梁、后唐、后晋、后汉、后周）、十国
  '五代十国': ['五代十国', '后梁', '后唐', '后晋', '后汉', '后周'],
  
  // 宋辽金西夏：北宋、南宋、辽、西夏、金
  '宋辽金': ['北宋', '南宋', '辽', '西夏', '金'],
  
  // 元明清：元、明、清
  '元明清': ['元', '明', '清'],
  
  // 近现代：民国、现代
  '近现代': ['民国', '现代'],
};

/**
 * 体裁映射表
 */
const FORM_MAP: Record<string, string[]> = {
  '诗': ['五绝', '七绝', '五律', '七律', '五言古诗', '七言古诗', '古体诗'],
  '词': ['词', '小令', '中调', '长调'],
  '曲': ['散曲', '杂剧'],
  '其他韵文': ['赋', '曲', '歌', '骚', '楚辞', '铭'],
  '特殊形式': ['回文诗', '藏头诗', '宝塔'],
};

/**
 * 题材映射表
 */
const SUBJECT_TAG_MAP: Record<string, string[]> = {
  '山水田园': ['山水', '田园', '隐逸', '记游', '写景', '山水田园'],
  '咏物': ['咏物', '花鸟', '风物', '草木', '虫鱼'],
  '咏史怀古': ['咏史', '怀古', '古迹', '旧事', '咏史怀古'],
  '边塞征战': ['边塞', '战争', '从军', '出塞', '边塞战争'],
  '离别相思': ['送别', '赠友', '思乡', '怀人', '离别', '相思', '闺怨', '寄赠'],
  '垂钓闲适': ['垂钓', '闲适', '隐居', '归隐'],
  '宫怨': ['宫怨', '失宠', '幽禁'],
  '羁旅': ['羁旅', '漂泊', '行役', '游子'],
  '爱情言情': ['爱情', '定情', '相思', '闺情'],
  '哲理': ['哲理', '禅理', '悟道', '人生', '感怀'],
  '励志': ['励志', '壮志', '抒怀', '自勉'],
  '饮酒': ['饮酒', '宴饮', '对酒', '独酌'],
  '节日': ['节日', '元宵', '端午', '中秋', '重阳', '时令'],
};

/**
 * 情感映射表
 */
const EMOTION_TAG_MAP: Record<string, string[]> = {
  '欢乐': ['喜悦', '欢乐', '快乐', '幽默'],
  '悲伤': ['悲伤', '凄婉', '苍凉', '凄凉', '忧愁'],
  '思乡': ['思乡', '怀远', '羁旅', '漂泊'],
  '忧愁': ['忧虑', '忧国', '忧民', '忧愁'],
  '愤怒': ['愤懑', '愤慨'],
  '仰慕': ['赞美', '敬仰', '雄浑'],
  '豪迈': ['豪放', '豪迈', '悲壮', '壮烈'],
  '恬淡': ['闲适', '旷达', '冲淡', '淡泊', '恬淡', '清丽', '典雅'],
  '孤独': ['孤独', '寂寞'],
  '惆怅': ['惆怅', '伤感'],
};

/**
 * 流派映射表
 */
const SCHOOL_TAG_MAP: Record<string, string[]> = {
  '婉约派': ['婉约', '婉约派', '花间', '温李诗派'],
  '豪放派': ['豪放', '豪放派', '豪迈', '阳羡词派'],
  '清旷派': ['闲适旷', '闲适旷达', '冲淡', '恬淡', '清旷'],
  '格律派': ['格调派', '格律派', '肌理派'],
  '田园派': ['山水田园诗派', '田园', '田园派'],
  '边塞派': ['边塞诗派', '边塞', '边塞战争'],
  '江西诗派': ['江西诗派', '韩孟诗派', '元白诗派', '江湖诗派', '四灵派', '中兴四大家', '前后七子', '公安派', '竟陵派', '性灵派', '浙西词派'],
};

/**
 * 用途映射表
 */
const USAGE_MAP: Record<string, string[]> = {
  '启蒙读物': ['劝学', '修身', '哲理', '启蒙'],
  '科举应试': ['励志', '祝寿', '壮志', '自勉'],
  '酬唱赠答': ['赠友', '送别', '离别', '思念', '祝福', '酬唱'],
  '咏史纪念': ['哀悼', '咏史纪念', '纪念'],
  '应制': ['应制', '酬唱', '宴饮'],
  '民歌': ['民歌', '民谣', '叙事'],
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
      (poem.form?.toLowerCase().includes(lowerQuery) ?? false) ||
      poem.content.some((line) => line.toLowerCase().includes(lowerQuery)) ||
      poem.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      (poem.annotation?.toLowerCase().includes(lowerQuery) ?? false) ||
      (poem.translation?.toLowerCase().includes(lowerQuery) ?? false) ||
      (poem.background?.toLowerCase().includes(lowerQuery) ?? false) ||
      (poem.appreciation?.toLowerCase().includes(lowerQuery) ?? false) ||
      (poem.poetIntroduction?.toLowerCase().includes(lowerQuery) ?? false)
    );
  });
}