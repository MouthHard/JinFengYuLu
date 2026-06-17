import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { Poem, Category } from '@/typesOfPages/aphorism'
// 业务数据从 constants 导入
import { poems } from '@/constants/Aphorism'
// 常量（分类体系）从 constants 导入
import {
  dynastyCategories,
  formCategories,
  subjectCategories,
  emotionCategories,
  schoolCategories,
  usageCategories,
  mainCategories,
  hotTags
} from '@/constants/Aphorism/categories'

export const useAphorismDataStore = defineStore('aphorismData', () => {
  const poemMap = computed(() => {
    const map = new Map<string, Poem>()
    for (const poem of poems) {
      map.set(poem.id, poem)
    }
    return map
  })

  const getPoem = (id: string): Poem | undefined => {
    return poemMap.value.get(id)
  }

  const getAllPoems = (): Poem[] => poems

  const getTotalCategories = (): number => {
    return mainCategories.reduce((total: number, category: Category) => {
      return total + (category.children?.length || 0)
    }, 0)
  }

  const getTotalPoems = (): number => {
    let total = 0
    dynastyCategories.forEach((cat) => {
      total += cat.count || 0
    })
    return total
  }

  // ==================== 各一级分类的二级筛选函数 ====================

  /** 朝代：根据子分类 ID 筛选 */
  const matchDynasty = (poem: Poem, subId: string): boolean => {
    const dynastyMap: Record<string, string[]> = {
      'pre-qin': ['先秦'],
      'qin-han': ['秦', '西汉', '秦末', '汉代', '东汉末年'],
      'wei-jin': ['魏晋', '东晋', '三国'],
      'nanbei-chao': ['南朝', '北朝'],
      'sui-tang': ['隋', '初唐', '唐代'],
      'wudai-shiguo': ['五代十国'],
      'song-liao-jin': ['宋', '北宋', '南宋', '辽金'],
      'yuan-ming-qing': ['元', '明代', '清', '明', '清代'],
      modern: ['近现代', '现代'],
    };
    return (dynastyMap[subId] ?? []).includes(poem.dynasty);
  };

  /** 形式：根据子分类 ID 筛选（覆盖诗经、楚辞、乐府、散曲等所有形式） */
  const matchForm = (poem: Poem, subId: string): boolean => {
    const formMap: Record<string, string[]> = {
      shi: [
        '五绝', '七绝', '五律', '七律',
        '五言绝句', '七言绝句', '五言律诗', '七言律诗',
        '五言古诗', '七言古诗', '古体诗', '古体',
        '五言', '七言', '四言', '诗经',
        '乐府', '歌行', '歌行程',
      ],
      ci: ['词', '小令', '中调', '长调'],
      qu: ['散曲', '杂剧'],
      'other-rhyme': ['赋', '歌', '骚', '楚辞', '铭', '歌谣'],
      specialForms: ['回文诗', '藏头诗', '宝塔诗', '回文'],
    };
    const forms = formMap[subId];
    if (!forms) return false;
    // form 字段精确匹配 或 包含匹配
    return forms.some((f) => poem.form === f || poem.form?.includes(f));
  };

  /** 题材：根据子分类 ID 的标签映射筛选（13 个子分类全覆盖） */
  const matchSubject = (poem: Poem, subId: string): boolean => {
    const subjectTagMap: Record<string, string[]> = {
      landscape: ['山水', '田园', '隐逸', '记游', '写景', '山水田园'],
      yongwu: ['咏物', '花', '鸟', '草木', '虫鱼'],
      history: ['咏史', '怀古', '咏史怀古', '古迹', '旧事'],
      border: ['边塞', '战争', '从军', '出塞', '边塞战争'],
      farewell: ['送别', '赠友', '思乡', '怀人', '羁旅', '漂泊', '离别', '离别怀', '离别怀远'],
      love: ['爱情', '相思', '闺怨', '宫词', '宫怨', '爱情闺怨', '爱情闺'],
      social: ['忧国', '忧民', '讽喻', '劝诫', '民生', '忧国讽喻', '悯农'],
      life: ['人生', '感怀', '哲理', '禅意', '方外', '游仙', '人生感怀', '哲理禅意', '方外题材'],
      banquet: ['宴饮', '酬唱', '宴饮酬唱', '对酒', '独酌', '饮酒'],
      festival: ['节日', '时令', '节日时令', '元宵', '端午', '中秋', '重阳', '春节', '节气'],
      fishing: ['垂钓', '闲适', '隐居', '归隐', '闲适旷', '闲适旷达'],
      gongyuan: ['宫怨', '失宠', '幽禁', '宫词'],
      jilv: ['羁旅', '漂泊', '行役', '游子'],
      romance: ['爱情', '定情', '相思', '闺情'],
      philosophy: ['哲理', '禅理', '悟道', '人生'],
      inspiration: ['励志', '壮志', '抒怀', '自勉', '劝学'],
      drinking: ['饮酒', '宴饮', '对酒', '独酌'],
    };
    const tags = subjectTagMap[subId];
    if (tags) return tags.some((tag) => poem.tags?.includes(tag));
    return poem.tags?.includes(subId) ?? false;
  };

  /** 情感：根据子分类 ID 的标签映射筛选（10 个子分类全覆盖） */
  const matchEmotion = (poem: Poem, subId: string): boolean => {
    const emotionTagMap: Record<string, string[]> = {
      joy: ['喜悦', '欢乐', '快乐', '幽默'],
      sadness: ['悲伤', '凄婉', '苍凉', '凄凉', '悲凉', '凄婉忧愁'],
      nostalgia: ['思乡', '怀人', '羁旅', '漂泊'],
      worry: ['忧虑', '忧国', '忧民', '忧愁'],
      anger: ['愤懑', '愤慨'],
      admiration: ['赞美', '敬仰', '雄浑'],
      heroic: ['豪放', '豪迈', '悲壮', '壮烈', '豪放雄浑', '悲壮'],
      tranquil: ['闲适', '旷达', '冲淡', '淡泊', '恬淡', '清丽', '典雅'],
      lonely: ['孤独', '寂寞'],
      melancholy: ['惆怅', '伤感'],
    };
    const tags = emotionTagMap[subId];
    if (tags) return tags.some((tag) => poem.tags?.includes(tag));
    return poem.tags?.includes(subId) ?? false;
  };

  /** 流派：根据标签中的流派信息筛选（7 个子分类全覆盖） */
  const matchSchool = (poem: Poem, subId: string): boolean => {
    const schoolTagMap: Record<string, string[]> = {
      tianlu: ['婉约', '婉约典雅', '花间', '温李诗派', '婉约'],
      haofang: ['豪放', '豪放雄浑', '豪迈', '阳羡词派', '豪放'],
      qingkuang: ['闲适旷', '闲适旷达', '冲淡', '恬淡'],
      gelian: ['格调派', '格律派', '肌理派'],
      tianyuan: ['山水田园诗派', '田园'],
      biansai: ['边塞诗派', '边塞战争'],
      jiangxi: [
        '江西诗派', '韩孟诗派', '元白诗派',
        '江湖诗派', '四灵派', '中兴四大家',
        '前后七子', '公安派', '竟陵派',
        '性灵派', '浙西词派',
      ],
    };
    const tags = schoolTagMap[subId];
    if (!tags) return false;
    return tags.some((tag) => poem.tags?.includes(tag));
  };

  /** 用途：根据子分类 ID 的标签映射筛选（6 个子分类全覆盖） */
  const matchUsage = (poem: Poem, subId: string): boolean => {
    const usageTagMap: Record<string, string[]> = {
      reading: ['劝学', '修身', '哲理', '启蒙'],
      examination: ['励志', '祝寿', '壮志', '自勉'],
      friendship: ['赠友', '送别', '离别', '思念', '祝福', '离别怀', '离别怀远'],
      commemoration: ['哀悼', '咏史纪念', '纪念'],
      yingzhi: ['应制', '酬唱', '宴饮酬唱'],
      folk: ['民歌', '民谣', '叙事'],
    };
    const tags = usageTagMap[subId];
    if (!tags) return false;
    return tags.some((tag) => poem.tags?.includes(tag));
  };

  /** 一级分类 ID → 其二级筛选函数 + 子分类 ID 列表 */
  const categoryMatchers: Record<
    string,
    { matcher: (p: Poem, s: string) => boolean; subIds: string[] }
  > = {
    dynasty: { matcher: matchDynasty, subIds: dynastyCategories.map((c) => c.id) },
    form: { matcher: matchForm, subIds: formCategories.map((c) => c.id) },
    subject: { matcher: matchSubject, subIds: subjectCategories.map((c) => c.id) },
    emotion: { matcher: matchEmotion, subIds: emotionCategories.map((c) => c.id) },
    school: { matcher: matchSchool, subIds: schoolCategories.map((c) => c.id) },
    usage: { matcher: matchUsage, subIds: usageCategories.map((c) => c.id) },
  };

  /**
   * 按分类筛选诗词
   * - 仅传 categoryId：返回该一级下所有二级分类的并集
   * - subCategoryId === 'all'：等同于仅传 categoryId（显示该一级下全部诗词）
   * - 有具体 subCategoryId：精确筛选到该二级分类
   */
  const getPoemsByCategory = (
    categoryId?: string,
    subCategoryId?: string,
  ): Poem[] => {
    if (!categoryId || categoryId === 'all') {
      return poems;
    }

    const config = categoryMatchers[categoryId];
    if (!config) return poems;

    // "全部诗词" 或无子分类 → 返回所有二级分类的并集
    if (!subCategoryId || subCategoryId === 'all') {
      return poems.filter((p) => config.subIds.filter((sid) => sid !== 'all').some((sid) => config.matcher(p, sid)));
    }

    // 有具体二级分类 → 精确筛选
    return poems.filter((p) => config.matcher(p, subCategoryId));
  };

  const searchPoems = (keyword: string): Poem[] => {
    if (!keyword) return poems
    const lowerKeyword = keyword.toLowerCase()
    return poems.filter((poem) =>
      poem.title.toLowerCase().includes(lowerKeyword) ||
      poem.author.toLowerCase().includes(lowerKeyword) ||
      poem.dynasty.toLowerCase().includes(lowerKeyword) ||
      poem.content.some(line => line.toLowerCase().includes(lowerKeyword)) ||
      poem.tags?.some(tag => tag.toLowerCase().includes(lowerKeyword))
    )
  }

  return {
    poemMap,
    getPoem,
    getAllPoems,
    getTotalCategories,
    getTotalPoems,
    getPoemsByCategory,
    searchPoems,
    dynastyCategories,
    formCategories,
    subjectCategories,
    emotionCategories,
    schoolCategories,
    usageCategories,
    mainCategories,
    hotTags
  }
})