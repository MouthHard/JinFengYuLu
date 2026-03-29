/**
 * 诗词分类工具类
 * 提供诗词分类相关的工具函数
 */

import type {
  Category,
  CategoryFilterParams,
} from "../../types/poetry/category";
import type { Poem } from "../../types/poetry/poem";

// 标签映射表

// 朝代映射表
const DYNASTY_MAP: Record<string, string[]> = {
  "pre-qin": ["先秦"],
  "qin-han": ["秦", "汉", "秦末", "汉代", "东汉末年"],
  "wei-jin": ["魏", "晋", "魏晋", "东晋", "三国"],
  "nanbei-chao": ["南北朝", "北朝"],
  "sui-tang": ["隋", "唐", "唐代"],
  "wudai-shiguo": ["五代十国"],
  "song-liao-jin": ["宋", "辽", "金", "北宋", "南宋", "辽金"],
  "yuan-ming-qing": ["元", "明", "清", "元代", "明代", "清代"],
};

// 体裁映射表
const FORM_MAP: Record<string, string[]> = {
  shi: [
    "五绝",
    "七绝",
    "五律",
    "七律",
    "五言古诗",
    "七言古诗",
    "古体诗",
    "五言",
    "七言",
    "古体",
    "歌行",
    "乐府",
  ],
  ci: ["词"],
  qu: ["散曲"],
  "other-rhyme": ["铭", "箴", "颂", "诗经", "楚辞", "歌谣", "民歌"],
  "special-forms": ["回文诗", "藏头诗", "回文"],
};

/**
 * 根据分类筛选诗词
 */
export const filterPoemsByCategory = (
  poems: Poem[],
  params: CategoryFilterParams,
): Poem[] => {
  const { categoryId, subCategoryId } = params;

  if (!categoryId || categoryId === "all") {
    return poems;
  }

  return poems.filter((poem) => {
    switch (categoryId) {
      case "dynasty": {
        if (subCategoryId) {
          const dynasties = DYNASTY_MAP[subCategoryId];
          return dynasties ? dynasties.includes(poem.dynasty) : false;
        }
        return false;
      }

      case "form": {
        if (subCategoryId) {
          const forms = FORM_MAP[subCategoryId];
          return forms && poem.form
            ? forms.some((f) => poem.form?.includes(f))
            : false;
        }
        return false;
      }

      case "subject": {
        if (!subCategoryId) return false;

        const subjectMap: Record<string, string[]> = {
          landscape: ["山水", "田园", "隐逸", "记游", "写景", "山水田园"],
          yongwu: ["咏物", "花", "鸟"],
          history: ["咏史", "怀古", "咏史怀古"],
          border: ["边塞", "战争", "边塞战争"],
          farewell: [
            "送别",
            "赠友",
            "思乡",
            "怀人",
            "羁旅",
            "漂泊",
            "离别怀乡",
            "离别",
          ],
          love: [
            "爱情",
            "相思",
            "闺怨",
            "宫词",
            "宫怨",
            "爱情闺怨",
            "宫词宫怨",
          ],
          social: [
            "忧国",
            "忧民",
            "讽喻",
            "劝诫",
            "民生",
            "忧国讽喻",
            "讽喻劝诫",
          ],
          life: ["人生", "感怀", "人生感怀", "哲理", "禅意", "哲理禅意"],
          religious: ["方外", "游仙", "方外题材", "禅意"],
          banquet: ["宴饮", "酬唱", "宴饮酬唱"],
          festival: ["节日", "时令", "节日时令"],
        };

        return (
          subjectMap[subCategoryId]?.some((tag) => poem.tags?.includes(tag)) ||
          false
        );
      }

      case "emotion": {
        if (!subCategoryId) return false;
        // 第二层分类映射
        const emotionMap: Record<string, string[]> = {
          "bold-style": ["豪放", "豪迈", "雄浑", "悲壮", "壮烈"],
          "graceful-style": ["婉约", "清丽", "典雅", "优雅"],
          "sorrow-style": ["凄婉", "忧愁", "悲伤", "苍凉", "凄凉"],
          "leisure-style": ["闲适", "旷达", "冲淡", "淡泊", "恬淡"],
          humorous: ["幽默"],
          resentful: ["愤懑", "愤慨"],
          joy: ["喜悦", "欢乐", "快乐"],
        };

        return (
          emotionMap[subCategoryId]?.some((tag) => poem.tags?.includes(tag)) ||
          false
        );
      }

      case "school": {
        if (subCategoryId) {
          // 流派映射表 - 根据诗词标签和作者关联流派
          const schoolMap: Record<string, string[]> = {
            "landscape-tang": ["山水", "田园", "隐逸", "生活", "山水田园诗派"],
            "border-tang": ["边塞", "战争", "长城", "边塞诗派"],
            "han-meng": ["韩愈", "孟郊", "韩孟诗派"],
            "yuan-bai": ["元稹", "白居易", "元白诗派"],
            "dali-ten": ["大历", "大历十才子"],
            huajian: ["花间", "花间派"],
            jiangxi: ["江西", "江西诗派"],
            jianghu: ["江湖", "江湖诗派"],
            siling: ["四灵", "四灵派"],
            zhongxing: ["中兴", "中兴四大家"],
            "xin-school": ["辛弃疾", "辛派词人"],
            "haofang-pai": ["豪放", "豪迈", "爱国", "豪放派"],
            "wanyue-pai": ["婉约", "爱情", "婉约派"],
            "qian-hou-qizi": ["七子", "前后七子"],
            "gong-an": ["公安", "公安派"],
            "jing-ling": ["竟陵", "竟陵派"],
            "ge-diao": ["格调", "格调派"],
            "xing-ling": ["性灵", "性灵派"],
            "ji-li": ["肌理", "肌理派"],
            "zhe-xi": ["浙西", "浙西词派"],
            "chang-zhou": ["常州", "常州词派"],
            "yang-xian": ["阳羡", "阳羡词派"],
          };

          if (schoolMap[subCategoryId]) {
            const tags = schoolMap[subCategoryId];
            // 检查诗词标签或作者是否匹配流派
            return tags.some(
              (tag) => poem.tags?.includes(tag) || poem.author?.includes(tag),
            );
          }
        }
        return false;
      }

      case "usage": {
        if (!subCategoryId) return false;
        // 第二层分类映射
        const usageMap: Record<string, string[]> = {
          festivals: [
            "节日",
            "春节",
            "元宵",
            "清明",
            "端午",
            "七夕",
            "中秋",
            "重阳",
            "节日时令",
          ],
          "solar-terms": ["节气"],
          seasons: ["春", "夏", "秋", "冬", "季节"],
          weather: [
            "风",
            "花",
            "雪",
            "月",
            "山",
            "水",
            "云",
            "雨",
            "雾",
            "霜",
            "露",
            "冰",
            "天气景物",
          ],
          "life-scenes": [
            "励志",
            "离别",
            "思念",
            "祝福",
            "祝寿",
            "劝学",
            "修身",
            "哀悼",
            "人生场景",
          ],
        };

        return (
          usageMap[subCategoryId]?.some((tag) => poem.tags?.includes(tag)) ||
          false
        );
      }

      default:
        return false;
    }
  });
};

/**
 * 获取分类的子分类
 */
export const getSubCategories = (
  category: Category,
  level: number,
): Category[] | string[] => {
  if (level === 1) {
    return category.children || category.subCategories || [];
  }

  if (category.children) {
    for (const child of category.children) {
      const result = getSubCategories(child, level - 1);
      if (result.length > 0) {
        return result;
      }
    }
  }

  return category.subCategories || [];
};

/**
 * 获取分类路径
 */
export const getCategoryPath = (
  categories: Category[],
  categoryId: string,
): Category[] => {
  for (const category of categories) {
    if (category.id === categoryId) {
      return [category];
    }

    if (category.children) {
      const childPath = getCategoryPath(category.children, categoryId);
      if (childPath.length > 0) {
        return [category, ...childPath];
      }
    }
  }

  return [];
};

/**
 * 计算分类总数
 */
export const countCategories = (category: Category): number => {
  let count = 1;

  if (category.children) {
    category.children.forEach((child) => {
      count += countCategories(child);
    });
  }

  if (category.subCategories) {
    count += category.subCategories.length;
  }

  return count;
};
