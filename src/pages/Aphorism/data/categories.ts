import type { Category } from "../../../types/poetry/category";
import type { Poem } from "../../../types/poetry/poem";
import { poems } from "./poems-refactored";

/**
 * 朝代/时代分类
 */
export const dynastyCategories: Category[] = [
  {
    id: "pre-qin",
    name: "先秦",
    icon: "🏺",
    count: 800,
  },
  {
    id: "qin-han",
    name: "秦汉",
    icon: "📜",
    count: 1700,
  },
  {
    id: "wei-jin",
    name: "魏晋",
    icon: "🌸",
    count: 1200,
  },
  {
    id: "nanbei-chao",
    name: "南北朝",
    icon: "🎭",
    count: 900,
  },
  {
    id: "sui-tang",
    name: "隋唐",
    icon: "🏛️",
    count: 49200,
  },
  {
    id: "wudai-shiguo",
    name: "五代十国",
    icon: "🎪",
    count: 600,
  },
  {
    id: "song-liao-jin",
    name: "宋辽金",
    icon: "🎭",
    count: 21400,
  },
  {
    id: "yuan-ming-qing",
    name: "元明清",
    icon: "📚",
    count: 15600,
  },
];

/**
 * 体裁/形式分类
 */
export const formCategories: Category[] = [
  {
    id: "shi",
    name: "诗",
    icon: "📖",
    count: 45000,
  },
  {
    id: "ci",
    name: "词",
    icon: "🎵",
    count: 21000,
  },
  {
    id: "qu",
    name: "曲",
    icon: "🎶",
    count: 3200,
  },

  {
    id: "other-rhyme",
    name: "其他韵文",
    icon: "✍️",
    count: 1200,
  },
  {
    id: "special-forms",
    name: "特殊形式",
    icon: "✨",
    count: 800,
  },
];

/**
 * 题材/内容分类
 */
export const subjectCategories: Category[] = [
  {
    id: "landscape",
    name: "山水田园",
    icon: "🏔️",
    count: 13000,
  },
  {
    id: "yongwu",
    name: "咏物",
    icon: "🌸",
    count: 7200,
  },
  {
    id: "history",
    name: "咏史怀古",
    icon: "📚",
    count: 4100,
  },
  {
    id: "border",
    name: "边塞战争",
    icon: "⚔️",
    count: 3800,
  },
  {
    id: "farewell",
    name: "离别怀乡",
    icon: "👋",
    count: 14200,
  },
  {
    id: "love",
    name: "爱情闺怨",
    icon: "❤️",
    count: 9600,
  },
  {
    id: "social",
    name: "忧国讽喻",
    icon: "👥",
    count: 6500,
  },
  {
    id: "life",
    name: "人生哲理",
    icon: "🧘",
    count: 7900,
  },
  {
    id: "banquet",
    name: "宴饮酬唱",
    icon: "🍷",
    count: 2800,
  },
  {
    id: "festival",
    name: "节日时令",
    icon: "🎊",
    count: 3600,
  },
  {
    id: "religious",
    name: "方外题材",
    icon: "🙏",
    count: 1500,
  },
];

/**
 * 情感/意境分类
 */
export const emotionCategories: Category[] = [
  {
    id: "bold-style",
    name: "豪放雄浑",
    icon: "🦁",
    count: 10400,
  },
  {
    id: "graceful-style",
    name: "婉约典雅",
    icon: "🌸",
    count: 10400,
  },
  {
    id: "sorrow-style",
    name: "凄婉忧愁",
    icon: "😢",
    count: 12900,
  },
  {
    id: "leisure-style",
    name: "闲适旷达",
    icon: "🍃",
    count: 7200,
  },
  {
    id: "humorous",
    name: "幽默",
    icon: "😄",
    count: 900,
  },
  {
    id: "resentful",
    name: "愤懑",
    icon: "😠",
    count: 2100,
  },
  {
    id: "joy",
    name: "喜悦",
    icon: "😊",
    count: 3800,
  },
];

/**
 * 流派分类
 */
export const schoolCategories: Category[] = [
  {
    id: "landscape-tang",
    name: "山水田园诗派",
    icon: "🏔️",
    count: 1500,
  },
  {
    id: "border-tang",
    name: "边塞诗派",
    icon: "⚔️",
    count: 1200,
  },
  {
    id: "han-meng",
    name: "韩孟诗派",
    icon: "📚",
    count: 800,
  },
  {
    id: "yuan-bai",
    name: "元白诗派",
    icon: "📝",
    count: 1000,
  },
  {
    id: "dali-ten",
    name: "大历十才子",
    icon: "🎭",
    count: 500,
  },
  {
    id: "huajian",
    name: "花间派",
    icon: "🌸",
    count: 600,
  },
  {
    id: "jiangxi",
    name: "江西诗派",
    icon: "📚",
    count: 700,
  },
  {
    id: "jianghu",
    name: "江湖诗派",
    icon: "🌊",
    count: 500,
  },
  {
    id: "siling",
    name: "四灵派",
    icon: "🎋",
    count: 300,
  },
  {
    id: "zhongxing",
    name: "中兴四大家",
    icon: "🏆",
    count: 800,
  },
  {
    id: "xin-school",
    name: "辛派词人",
    icon: "⚔️",
    count: 600,
  },
  {
    id: "haofang-pai",
    name: "豪放派",
    icon: "🦁",
    count: 900,
  },
  {
    id: "wanyue-pai",
    name: "婉约派",
    icon: "🌸",
    count: 1200,
  },
  {
    id: "qian-hou-qizi",
    name: "前后七子",
    icon: "📚",
    count: 400,
  },
  {
    id: "gong-an",
    name: "公安派",
    icon: "🏛️",
    count: 300,
  },
  {
    id: "jing-ling",
    name: "竟陵派",
    icon: "🎭",
    count: 200,
  },
  {
    id: "ge-diao",
    name: "格调派",
    icon: "🎵",
    count: 300,
  },
  {
    id: "xing-ling",
    name: "性灵派",
    icon: "💭",
    count: 400,
  },
  {
    id: "ji-li",
    name: "肌理派",
    icon: "🧩",
    count: 200,
  },
  {
    id: "zhe-xi",
    name: "浙西词派",
    icon: "🌊",
    count: 300,
  },
  {
    id: "chang-zhou",
    name: "常州词派",
    icon: "🏮",
    count: 200,
  },
  {
    id: "yang-xian",
    name: "阳羡词派",
    icon: "🏞️",
    count: 200,
  },
];

/**
 * 使用场景/功能分类
 */
export const usageCategories: Category[] = [
  {
    id: "festivals",
    name: "节日",
    icon: "🎊",
    count: 3600,
  },
  {
    id: "solar-terms",
    name: "节气",
    icon: "🌱",
    count: 2400,
  },
  {
    id: "seasons",
    name: "季节",
    icon: "🍃",
    count: 8500,
  },
  {
    id: "weather",
    name: "天气景物",
    icon: "🌤️",
    count: 7200,
  },
  {
    id: "life-scenes",
    name: "人生场景",
    icon: "👥",
    count: 5800,
  },
];

/**
 * 主分类
 */
export const mainCategories: Category[] = [
  {
    id: "dynasty",
    name: "按朝代",
    icon: "⏳",
    children: dynastyCategories,
  },
  {
    id: "form",
    name: "按体裁",
    icon: "📝",
    children: formCategories,
  },
  {
    id: "subject",
    name: "按题材",
    icon: "🎯",
    children: subjectCategories,
  },
  {
    id: "emotion",
    name: "按情感",
    icon: "💭",
    children: emotionCategories,
  },
  {
    id: "school",
    name: "按流派",
    icon: "🎭",
    children: schoolCategories,
  },
  {
    id: "usage",
    name: "按场景",
    icon: "🎬",
    children: usageCategories,
  },
];

/**
 * 获取分类总数
 */
export const getTotalCategories = (): number => {
  return mainCategories.reduce((total, category) => {
    return total + (category.children?.length || 0);
  }, 0);
};

/**
 * 获取诗词总数
 */
export const getTotalPoems = (): number => {
  let total = 0;
  dynastyCategories.forEach((cat) => {
    total += cat.count || 0;
  });
  return total;
};

/**
 * 热门搜索标签
 */
export const hotTags = [
  "李白",
  "杜甫",
  "苏轼",
  "李清照",
  "春晓",
  "静夜思",
  "相思",
  "山水",
  "边塞",
  "田园",
];

/**
 * 根据分类获取诗词
 * @param categoryId 分类ID
 * @param subCategoryId 子分类ID
 * @returns 符合条件的诗词列表
 */
export const getPoemsByCategory = (
  categoryId?: string,
  subCategoryId?: string,
): Poem[] => {
  if (!categoryId || categoryId === "all") {
    return poems;
  }

  return poems.filter((poem) => {
    // 根据朝代筛选
    if (categoryId === "dynasty") {
      if (subCategoryId) {
        // 直接通过朝代匹配，包含原第三层分类下的所有诗词
        const dynastyMap: Record<string, string[]> = {
          "pre-qin": ["先秦"],
          "qin-han": ["秦", "汉", "秦末", "汉代", "东汉末年"],
          "wei-jin": ["魏晋", "东晋", "三国"],
          "nanbei-chao": ["南北朝", "北朝"],
          "sui-tang": ["隋", "唐", "唐代"],
          "wudai-shiguo": ["五代十国"],
          "song-liao-jin": ["宋", "北宋", "南宋", "辽金"],
          "yuan-ming-qing": ["元", "明代", "明", "清", "清代"],
        };
        const dynasties = dynastyMap[subCategoryId];
        if (dynasties) {
          return dynasties.includes(poem.dynasty);
        }
      }
      return false;
    }

    // 根据体裁筛选
    if (categoryId === "form") {
      if (subCategoryId) {
        // 直接根据二级分类ID匹配对应的标签
        const formMap: Record<string, string[]> = {
          shi: [
            "五绝",
            "七绝",
            "五律",
            "七律",
            "五言古诗",
            "七言古诗",
            "古体诗",
          ],
          ci: ["词"],
          qu: ["散曲"],
          "other-rhyme": ["铭", "箴", "颂"],
          "special-forms": ["回文诗", "藏头诗"],
        };
        const forms = formMap[subCategoryId];
        if (forms && poem.form) {
          return forms.some((f) => poem.form?.includes(f));
        }
      }
      return false;
    }

    // 根据题材筛选
    if (categoryId === "subject") {
      if (subCategoryId) {
        const subjectTagMap: Record<string, string[]> = {
          landscape: ["山水", "田园", "隐逸", "记游", "写景"],
          yongwu: ["咏物", "花", "鸟"],
          history: ["咏史", "怀古"],
          border: ["边塞", "战争"],
          farewell: ["送别", "赠友", "思乡", "怀人", "羁旅", "漂泊"],
          love: ["爱情", "相思", "闺怨", "宫词", "宫怨"],
          social: ["忧国", "忧民", "讽喻", "劝诫", "民生"],
          life: ["人生", "感怀", "哲理", "禅意", "方外", "游仙"],
          banquet: ["宴饮", "酬唱"],
          festival: ["节日", "时令"],
        };

        // 检查是否有映射
        const mappedTags = subjectTagMap[subCategoryId];
        if (mappedTags) {
          return mappedTags.some((tag) => poem.tags?.includes(tag));
        }

        // 如果没有映射，直接匹配
        return poem.tags?.includes(subCategoryId) || false;
      }
      return false;
    }

    // 根据情感筛选
    if (categoryId === "emotion") {
      if (subCategoryId) {
        // 直接根据二级分类ID匹配对应的标签，包含原第三层分类下的所有诗词
        const emotionTagMap: Record<string, string[]> = {
          "bold-style": ["豪放", "豪迈", "雄浑", "悲壮", "壮烈"],
          "graceful-style": ["婉约", "清丽", "典雅", "优雅"],
          "sorrow-style": ["凄婉", "忧愁", "悲伤", "苍凉", "凄凉"],
          "leisure-style": ["闲适", "旷达", "冲淡", "淡泊", "恬淡"],
          humorous: ["幽默"],
          resentful: ["愤懑", "愤慨"],
          joy: ["喜悦", "欢乐", "快乐"],
        };

        // 检查是否有映射
        const mappedTags = emotionTagMap[subCategoryId];
        if (mappedTags) {
          return mappedTags.some((tag) => poem.tags?.includes(tag));
        }

        // 如果没有映射，直接匹配
        return poem.tags?.includes(subCategoryId) || false;
      }
      return false;
    }

    // 根据流派筛选
    if (categoryId === "school") {
      if (subCategoryId) {
        // 直接按流派筛选，暂时返回所有（因为没有流派标签）
        // 后续可以根据需要添加流派标签匹配逻辑
        return true;
      }
      return false;
    }

    // 根据场景筛选
    if (categoryId === "usage") {
      if (subCategoryId) {
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
          ],
          "solar-terms": ["节气"],
          seasons: ["春", "夏", "秋", "冬"],
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
          ],
        };

        return (
          usageMap[subCategoryId]?.some((tag) => poem.tags?.includes(tag)) ||
          false
        );
      }
      return false;
    }

    return false;
  });
};
