import type { Artifact } from "@/types/museum";

// 文物列表数据 - 38个博物馆，每个博物馆3-5件真实文物
export const artifacts: Artifact[] = [
  // 1. 故宫博物院
  {
    id: 1,
    museumId: 1,
    name: "清明上河图",
    period: "北宋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "中国十大传世名画之一，描绘了北宋都城汴京的繁华景象。",
    category: "painting",
  },
  {
    id: 2,
    museumId: 1,
    name: "千里江山图",
    period: "北宋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "北宋王希孟创作的青绿山水画，是中国十大传世名画之一。",
    category: "painting",
  },
  {
    id: 3,
    museumId: 1,
    name: "翠玉白菜",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "清代玉雕作品，以翠玉雕刻成白菜形状，栩栩如生。",
    category: "jade",
  },
  {
    id: 4,
    museumId: 1,
    name: "毛公鼎",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description:
      "西周晚期青铜重器，内壁铸有497字铭文，是现存铭文最长的青铜器。",
    category: "bronze",
  },
  {
    id: 5,
    museumId: 1,
    name: "散氏盘",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西周晚期青铜器，铭文记载了散国与矢国的土地契约。",
    category: "bronze",
  },

  // 2. 中国科学技术馆
  {
    id: 6,
    museumId: 2,
    name: "地动仪模型",
    period: "东汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "张衡发明的地动仪复原模型，世界上第一台地震仪器。",
    category: "scientific",
  },
  {
    id: 7,
    museumId: 2,
    name: "水运仪象台模型",
    period: "北宋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "苏颂设计的天文钟楼复原模型，集天文观测、计时报时于一体。",
    category: "scientific",
  },
  {
    id: 8,
    museumId: 2,
    name: "指南车模型",
    period: "三国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "三国时期马钧发明的指南车复原模型，古代导航工具。",
    category: "scientific",
  },
  {
    id: 9,
    museumId: 2,
    name: "浑仪模型",
    period: "明代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "古代天文观测仪器模型，用于测量天体位置。",
    category: "scientific",
  },

  // 3. 上海博物馆
  {
    id: 10,
    museumId: 3,
    name: "大克鼎",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西周孝王时期青铜重器，内壁铸有290字铭文。",
    category: "bronze",
  },
  {
    id: 11,
    museumId: 3,
    name: "大盂鼎",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西周康王时期青铜重器，铭文记载了康王对盂的册命。",
    category: "bronze",
  },
  {
    id: 12,
    museumId: 3,
    name: "越王勾践剑",
    period: "春秋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "春秋时期越王勾践的佩剑，千年不锈，锋利如初。",
    category: "bronze",
  },
  {
    id: 13,
    museumId: 3,
    name: "商鞅方升",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "战国时期秦国标准量器，铭文记载了商鞅变法统一度量衡。",
    category: "bronze",
  },
  {
    id: 14,
    museumId: 3,
    name: "淳化阁帖",
    period: "北宋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "北宋淳化年间刻制的法帖，收录了历代名家书法。",
    category: "ancient_book",
  },

  // 4. 秦始皇兵马俑博物馆
  {
    id: 15,
    museumId: 4,
    name: "兵马俑",
    period: "秦代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "秦始皇陵陪葬坑出土的陶质武士俑，被誉为世界第八大奇迹。",
    category: "terracotta",
  },
  {
    id: 16,
    museumId: 4,
    name: "铜车马",
    period: "秦代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "秦始皇陵出土的青铜车马模型，工艺精湛，造型逼真。",
    category: "bronze",
  },
  {
    id: 17,
    museumId: 4,
    name: "石铠甲",
    period: "秦代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "秦始皇陵出土的石质铠甲，用于陪葬的防护装备。",
    category: "stone",
  },
  {
    id: 18,
    museumId: 4,
    name: "青铜鹤",
    period: "秦代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "秦始皇陵出土的青铜水禽，展现了秦代青铜铸造工艺。",
    category: "bronze",
  },

  // 5. 陕西历史博物馆
  {
    id: 19,
    museumId: 5,
    name: "镶金兽首玛瑙杯",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "唐代何家村窖藏出土，海内外孤品，国之重宝。",
    category: "gem",
  },
  {
    id: 20,
    museumId: 5,
    name: "舞马衔杯纹银壶",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "唐代金银器精品，壶身饰有舞马衔杯图案。",
    category: "gold_silver",
  },
  {
    id: 21,
    museumId: 5,
    name: "三彩载乐骆驼俑",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "唐三彩精品，骆驼背上载有乐舞人物，生动传神。",
    category: "ceramic",
  },
  {
    id: 22,
    museumId: 5,
    name: "何家村窖藏",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "唐代重要考古发现，出土大量金银器、玉器等珍贵文物。",
    category: "gold_silver",
  },

  // 6. 南京博物院
  {
    id: 23,
    museumId: 6,
    name: "竹林七贤砖画",
    period: "南朝",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "南朝墓葬出土的模印砖画，描绘竹林七贤与荣启期。",
    category: "brick",
  },
  {
    id: 24,
    museumId: 6,
    name: "错金银铜牛灯",
    period: "东汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "东汉青铜灯具，采用错金银工艺，设计精巧。",
    category: "bronze",
  },
  {
    id: 25,
    museumId: 6,
    name: "金兽首形饰件",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西汉金器精品，以黄金铸造的兽首形装饰件。",
    category: "gold_silver",
  },
  {
    id: 26,
    museumId: 6,
    name: "青花瓷瓶",
    period: "明代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "明代永乐年间青花瓷精品，造型优美，纹饰典雅。",
    category: "ceramic",
  },

  // 7. 河南博物院
  {
    id: 27,
    museumId: 7,
    name: "贾湖骨笛",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "距今约8000年的骨笛，是中国最早的乐器实物。",
    category: "bone",
  },
  {
    id: 28,
    museumId: 7,
    name: "妇好鸮尊",
    period: "商代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "商代晚期青铜器，造型为鸮形，是商王武丁配偶妇好的陪葬品。",
    category: "bronze",
  },
  {
    id: 29,
    museumId: 7,
    name: "莲鹤方壶",
    period: "春秋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "春秋时期青铜器，壶盖立有莲花与仙鹤，造型优美。",
    category: "bronze",
  },
  {
    id: 30,
    museumId: 7,
    name: "云纹铜禁",
    period: "春秋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "春秋时期青铜禁，饰有精美云纹，是失蜡法铸造的代表。",
    category: "bronze",
  },

  // 8. 浙江省博物馆
  {
    id: 31,
    museumId: 8,
    name: "河姆渡双鸟朝阳纹牙雕",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "河姆渡文化牙雕精品，刻有双鸟朝阳图案。",
    category: "ivory",
  },
  {
    id: 32,
    museumId: 8,
    name: "良渚玉琮王",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "良渚文化玉器精品，是目前发现的最大的玉琮。",
    category: "jade",
  },
  {
    id: 33,
    museumId: 8,
    name: "越窑青瓷",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "唐代越窑青瓷精品，釉色青翠，如冰似玉。",
    category: "ceramic",
  },
  {
    id: 34,
    museumId: 8,
    name: "雷峰塔出土文物",
    period: "五代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "雷峰塔地宫出土的佛教文物，包括阿育王塔等。",
    category: "gold_silver",
  },

  // 9. 湖北省博物馆
  {
    id: 35,
    museumId: 9,
    name: "曾侯乙编钟",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "战国时期曾国编钟，全套65件，是中国古代音乐文化的瑰宝。",
    category: "bronze",
  },
  {
    id: 36,
    museumId: 9,
    name: "越王勾践剑",
    period: "春秋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "春秋时期越王勾践的佩剑，出土于湖北江陵楚墓。",
    category: "bronze",
  },
  {
    id: 37,
    museumId: 9,
    name: "郢爰",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "战国时期楚国金币，是中国最早的黄金货币之一。",
    category: "gold_silver",
  },
  {
    id: 38,
    museumId: 9,
    name: "编磬",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "曾侯乙墓出土的石质打击乐器，与编钟配套使用。",
    category: "stone",
  },

  // 10. 湖南省博物馆
  {
    id: 39,
    museumId: 10,
    name: "素纱单衣",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "马王堆汉墓出土的丝织品，重量仅49克，薄如蝉翼。",
    category: "textile",
  },
  {
    id: 40,
    museumId: 10,
    name: "T型帛画",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "马王堆汉墓出土的帛画，描绘了天上、人间、地下的景象。",
    category: "painting",
  },
  {
    id: 41,
    museumId: 10,
    name: "辛追夫人遗体",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "马王堆汉墓出土的女尸，保存完好，是世界防腐史上的奇迹。",
    category: "other",
  },
  {
    id: 42,
    museumId: 10,
    name: "马王堆漆器",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "马王堆汉墓出土的漆器，工艺精湛，纹饰华美。",
    category: "lacquer",
  },

  // 11. 四川博物院
  {
    id: 43,
    museumId: 11,
    name: "三星堆青铜面具",
    period: "商代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "三星堆遗址出土的青铜面具，造型奇特，神秘莫测。",
    category: "bronze",
  },
  {
    id: 44,
    museumId: 11,
    name: "金沙太阳神鸟",
    period: "商代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "金沙遗址出土的金饰，图案为四只神鸟围绕太阳飞翔。",
    category: "gold_silver",
  },
  {
    id: 45,
    museumId: 11,
    name: "东汉说唱俑",
    period: "东汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "东汉陶俑，刻画说唱艺人神态，生动传神。",
    category: "terracotta",
  },
  {
    id: 46,
    museumId: 11,
    name: "巴蜀青铜器",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "巴蜀文化青铜器，具有浓郁的地方特色。",
    category: "bronze",
  },

  // 12. 广东省博物馆
  {
    id: 47,
    museumId: 12,
    name: "潮州金漆木雕大神龛",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "潮州木雕精品，采用多层镂雕技法，金碧辉煌。",
    category: "wood",
  },
  {
    id: 48,
    museumId: 12,
    name: "广彩开光人物瓶",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "广州织金彩瓷精品，色彩艳丽，纹饰繁复。",
    category: "ceramic",
  },
  {
    id: 49,
    museumId: 12,
    name: "南越王墓文物",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "南越王墓出土的青铜器、玉器等珍贵文物。",
    category: "bronze",
  },
  {
    id: 50,
    museumId: 12,
    name: "端砚",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "中国四大名砚之首，石质细腻，发墨优良。",
    category: "stone",
  },

  // 13. 天津博物馆
  {
    id: 51,
    museumId: 13,
    name: "太保鼎",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西周早期青铜重器，内壁铸有太保字样铭文。",
    category: "bronze",
  },
  {
    id: 52,
    museumId: 13,
    name: "乾隆款珐琅彩芙蓉锦鸡图瓶",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "清代宫廷珐琅彩瓷精品，色彩艳丽，画工精细。",
    category: "ceramic",
  },
  {
    id: 53,
    museumId: 13,
    name: "雪景寒林图",
    period: "北宋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "北宋范宽创作的山水画，气势磅礴。",
    category: "painting",
  },

  // 14. 重庆中国三峡博物馆
  {
    id: 54,
    museumId: 14,
    name: "战国青铜编钟",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "巴人文化青铜编钟，展现了巴国的音乐文化。",
    category: "bronze",
  },
  {
    id: 55,
    museumId: 14,
    name: "汉代画像石",
    period: "东汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "东汉墓葬画像石，刻画了汉代社会生活场景。",
    category: "stone",
  },
  {
    id: 56,
    museumId: 14,
    name: "三峡移民文物",
    period: "现代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "三峡工程移民搬迁中抢救性保护的文物。",
    category: "other",
  },

  // 15. 山东博物馆
  {
    id: 57,
    museumId: 15,
    name: "龙山文化黑陶蛋壳杯",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "龙山文化黑陶精品，器壁薄如蛋壳，工艺精湛。",
    category: "ceramic",
  },
  {
    id: 58,
    museumId: 15,
    name: "大汶口文化彩陶",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "大汶口文化彩陶器，纹饰古朴，色彩鲜艳。",
    category: "ceramic",
  },
  {
    id: 59,
    museumId: 15,
    name: "鲁国青铜器",
    period: "春秋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "鲁国故城出土的青铜礼器，反映了鲁国的礼制文化。",
    category: "bronze",
  },

  // 16. 辽宁省博物馆
  {
    id: 60,
    museumId: 16,
    name: "红山文化玉猪龙",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "红山文化玉器代表作，造型为猪首龙身，是龙的起源之一。",
    category: "jade",
  },
  {
    id: 61,
    museumId: 16,
    name: "辽代瓷器",
    period: "辽代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "辽代白瓷、辽三彩等，具有浓郁的游牧民族特色。",
    category: "ceramic",
  },
  {
    id: 62,
    museumId: 16,
    name: "清代书画",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "清代名家书画作品，包括郎世宁等宫廷画师作品。",
    category: "painting",
  },

  // 17. 吉林省博物院
  {
    id: 63,
    museumId: 17,
    name: "高句丽壁画墓",
    period: "高句丽",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "高句丽墓葬壁画，描绘了高句丽的社会生活与神话传说。",
    category: "painting",
  },
  {
    id: 64,
    museumId: 17,
    name: "渤海国文物",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "渤海国时期的文物，展现了海东盛国的文化风貌。",
    category: "other",
  },
  {
    id: 65,
    museumId: 17,
    name: "辽金文物",
    period: "辽金",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "辽金时期的文物，反映了东北地区的民族融合。",
    category: "other",
  },

  // 18. 黑龙江省博物馆
  {
    id: 66,
    museumId: 18,
    name: "渤海国上京龙泉府遗址文物",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "渤海国都城遗址出土的文物，包括建筑构件、生活用具等。",
    category: "other",
  },
  {
    id: 67,
    museumId: 18,
    name: "金代铜坐龙",
    period: "金代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "金代青铜坐龙，造型独特，是金代皇室的象征。",
    category: "bronze",
  },
  {
    id: 68,
    museumId: 18,
    name: "赫哲族鱼皮服饰",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "赫哲族传统鱼皮制作技艺的服饰，是民族文化的瑰宝。",
    category: "textile",
  },

  // 19. 福建博物院
  {
    id: 69,
    museumId: 19,
    name: "德化白瓷",
    period: "明代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "德化窑白瓷精品，釉色温润如玉，被誉为中国白。",
    category: "ceramic",
  },
  {
    id: 70,
    museumId: 19,
    name: "海上丝绸之路文物",
    period: "宋元",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "泉州港出土的外销瓷、香料等海上丝绸之路文物。",
    category: "ceramic",
  },
  {
    id: 71,
    museumId: 19,
    name: "福州脱胎漆器",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "福州脱胎漆器，工艺独特，轻巧美观。",
    category: "lacquer",
  },

  // 20. 安徽博物院
  {
    id: 72,
    museumId: 20,
    name: "徽州三雕",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "徽州木雕、石雕、砖雕，工艺精湛，题材丰富。",
    category: "wood",
  },
  {
    id: 73,
    museumId: 20,
    name: "文房四宝",
    period: "历代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "安徽是宣纸、宣笔、徽墨、歙砚的故乡，文房四宝精品荟萃。",
    category: "other",
  },
  {
    id: 74,
    museumId: 20,
    name: "楚大鼎",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "战国时期楚国青铜大鼎，是楚国青铜器的代表作。",
    category: "bronze",
  },

  // 21. 河北博物院
  {
    id: 75,
    museumId: 21,
    name: "长信宫灯",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "满城汉墓出土的青铜灯，设计精巧，可调节光照方向。",
    category: "bronze",
  },
  {
    id: 76,
    museumId: 21,
    name: "金缕玉衣",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "满城汉墓出土的金缕玉衣，由2498片玉片和金丝编缀而成。",
    category: "jade",
  },
  {
    id: 77,
    museumId: 21,
    name: "错金银鸟篆文壶",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "满城汉墓出土的青铜壶，采用错金银工艺，纹饰华美。",
    category: "bronze",
  },

  // 22. 山西博物院
  {
    id: 78,
    museumId: 22,
    name: "晋侯鸟尊",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西周晋国青铜器，造型为鸟形，是晋国青铜器的代表作。",
    category: "bronze",
  },
  {
    id: 79,
    museumId: 22,
    name: "北朝壁画",
    period: "北朝",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "北朝墓葬壁画，描绘了墓主人生前生活与死后世界。",
    category: "painting",
  },
  {
    id: 80,
    museumId: 22,
    name: "山西古建筑模型",
    period: "历代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "山西现存古建筑的精美模型，展现了山西古建筑的魅力。",
    category: "other",
  },

  // 23. 江西省博物馆
  {
    id: 81,
    museumId: 23,
    name: "海昏侯墓金器",
    period: "西汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "海昏侯墓出土的大量金器，包括金饼、马蹄金等。",
    category: "gold_silver",
  },
  {
    id: 82,
    museumId: 23,
    name: "景德镇瓷器",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "景德镇御窑厂出土的瓷器精品，代表了明清官窑的最高水平。",
    category: "ceramic",
  },
  {
    id: 83,
    museumId: 23,
    name: "赣南客家文物",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "赣南客家地区的民俗文物，展现了客家文化特色。",
    category: "other",
  },

  // 24. 广西壮族自治区博物馆
  {
    id: 84,
    museumId: 24,
    name: "翔鹭纹铜鼓",
    period: "汉代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "广西出土的铜鼓，饰有翔鹭纹，是壮族文化的象征。",
    category: "bronze",
  },
  {
    id: 85,
    museumId: 24,
    name: "壮族织锦",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "壮族传统织锦，图案精美，色彩艳丽。",
    category: "textile",
  },
  {
    id: 86,
    museumId: 24,
    name: "花山岩画",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "广西花山岩画的拓片，记录了古代骆越人的祭祀场景。",
    category: "painting",
  },

  // 25. 海南省博物馆
  {
    id: 87,
    museumId: 25,
    name: "南海一号沉船文物",
    period: "宋代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "南海一号宋代沉船出土的瓷器、铜钱等文物。",
    category: "ceramic",
  },
  {
    id: 88,
    museumId: 25,
    name: "黎族织锦",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "黎族传统织锦技艺，是世界非物质文化遗产。",
    category: "textile",
  },
  {
    id: 89,
    museumId: 25,
    name: "海南黄花梨家具",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "海南黄花梨制作的古典家具，木纹优美，价值连城。",
    category: "wood",
  },

  // 26. 贵州省博物馆
  {
    id: 90,
    museumId: 26,
    name: "夜郎青铜器",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "夜郎国时期的青铜器，展现了神秘的夜郎文化。",
    category: "bronze",
  },
  {
    id: 91,
    museumId: 26,
    name: "苗族银饰",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "苗族传统银饰，工艺精湛，造型独特。",
    category: "gold_silver",
  },
  {
    id: 92,
    museumId: 26,
    name: "侗族鼓楼模型",
    period: "现代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "侗族鼓楼的精美模型，展现了侗族建筑艺术。",
    category: "wood",
  },

  // 27. 云南省博物馆
  {
    id: 93,
    museumId: 27,
    name: "古滇国青铜器",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "古滇国青铜器，包括贮贝器、铜鼓等，造型独特。",
    category: "bronze",
  },
  {
    id: 94,
    museumId: 27,
    name: "大理国经卷",
    period: "宋代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "大理国时期的佛教经卷，是研究大理国历史的重要资料。",
    category: "ancient_book",
  },
  {
    id: 95,
    museumId: 27,
    name: "纳西族东巴文经书",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "纳西族东巴文写成的经书，是世界上唯一存活的象形文字。",
    category: "ancient_book",
  },

  // 28. 西藏博物馆
  {
    id: 96,
    museumId: 28,
    name: "唐卡",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "藏族传统绘画艺术，绘制精美，色彩艳丽。",
    category: "painting",
  },
  {
    id: 97,
    museumId: 28,
    name: "藏文大藏经",
    period: "明代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "藏文佛教大藏经，是藏族文化的宝库。",
    category: "ancient_book",
  },
  {
    id: 98,
    museumId: 28,
    name: "藏族服饰",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "藏族传统服饰，色彩鲜艳，装饰华美。",
    category: "textile",
  },

  // 29. 甘肃省博物馆
  {
    id: 99,
    museumId: 29,
    name: "马踏飞燕",
    period: "东汉",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "东汉青铜雕塑，骏马三足腾空，一足踏飞燕，是中国旅游标志。",
    category: "bronze",
  },
  {
    id: 100,
    museumId: 29,
    name: "彩陶",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "甘肃出土的彩陶，纹饰精美，是中国彩陶的故乡。",
    category: "ceramic",
  },
  {
    id: 101,
    museumId: 29,
    name: "敦煌经卷",
    period: "唐代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "敦煌藏经洞出土的经卷，是研究古代文化的珍贵资料。",
    category: "ancient_book",
  },

  // 30. 青海省博物馆
  {
    id: 102,
    museumId: 30,
    name: "彩陶罐",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "青海出土的马家窑文化彩陶，纹饰优美。",
    category: "ceramic",
  },
  {
    id: 103,
    museumId: 30,
    name: "藏族银器",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "藏族传统银器，工艺精湛，造型独特。",
    category: "gold_silver",
  },
  {
    id: 104,
    museumId: 30,
    name: "青海湖祭海碑",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "清代祭海碑，记录了清政府对青海湖的祭祀活动。",
    category: "stone",
  },

  // 31. 内蒙古博物院
  {
    id: 105,
    museumId: 31,
    name: "匈奴鹰顶金冠饰",
    period: "战国",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "匈奴贵族金冠饰，造型为鹰顶，展现了草原文化。",
    category: "gold_silver",
  },
  {
    id: 106,
    museumId: 31,
    name: "鲜卑金饰",
    period: "魏晋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "鲜卑族金饰，工艺精湛，具有浓郁的草原特色。",
    category: "gold_silver",
  },
  {
    id: 107,
    museumId: 31,
    name: "蒙古族服饰",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "蒙古族传统服饰，色彩鲜艳，装饰华美。",
    category: "textile",
  },

  // 32. 宁夏博物馆
  {
    id: 108,
    museumId: 32,
    name: "贺兰山岩画",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "贺兰山岩画拓片，记录了远古人类的生活场景。",
    category: "stone",
  },
  {
    id: 109,
    museumId: 32,
    name: "西夏王陵出土文物",
    period: "西夏",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西夏王陵出土的文物，包括瓦当、鸱吻等建筑构件。",
    category: "ceramic",
  },
  {
    id: 110,
    museumId: 32,
    name: "西夏文经卷",
    period: "西夏",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西夏文写成的佛教经卷，是研究西夏文化的重要资料。",
    category: "ancient_book",
  },

  // 33. 新疆维吾尔自治区博物馆
  {
    id: 111,
    museumId: 33,
    name: "楼兰美女干尸",
    period: "青铜时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "楼兰遗址出土的古代干尸，保存完好，被誉为楼兰美女。",
    category: "other",
  },
  {
    id: 112,
    museumId: 33,
    name: "丝绸之路织物",
    period: "汉唐",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "丝绸之路出土的丝织品，展现了中西文化交流。",
    category: "textile",
  },
  {
    id: 113,
    museumId: 33,
    name: "克孜尔石窟壁画",
    period: "魏晋",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "克孜尔石窟壁画临摹品，展现了龟兹佛教艺术。",
    category: "painting",
  },

  // 34. 台北故宫博物院
  {
    id: 114,
    museumId: 34,
    name: "毛公鼎",
    period: "西周",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西周晚期青铜重器，铭文长达497字，是台北故宫镇馆之宝。",
    category: "bronze",
  },
  {
    id: 115,
    museumId: 34,
    name: "翠玉白菜",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "清代玉雕作品，以翠玉雕刻成白菜形状，是台北故宫明星文物。",
    category: "jade",
  },
  {
    id: 116,
    museumId: 34,
    name: "肉形石",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "天然玉石，形似红烧肉，惟妙惟肖。",
    category: "jade",
  },
  {
    id: 117,
    museumId: 34,
    name: "快雪时晴帖",
    period: "晋代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "王羲之书法作品，是古代书法的巅峰之作。",
    category: "ancient_book",
  },

  // 35. 香港历史博物馆
  {
    id: 118,
    museumId: 35,
    name: "香港考古出土文物",
    period: "新石器时代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "香港地区出土的史前文物，包括陶器、石器等。",
    category: "ceramic",
  },
  {
    id: 119,
    museumId: 35,
    name: "香港民俗文物",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "香港传统民俗文物，展现了香港的民间生活。",
    category: "other",
  },
  {
    id: 120,
    museumId: 35,
    name: "香港历史文献",
    period: "近代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "香港历史文献资料，记录了香港的发展历程。",
    category: "ancient_book",
  },

  // 36. 香港艺术馆
  {
    id: 121,
    museumId: 36,
    name: "岭南画派作品",
    period: "近代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "岭南画派名家作品，包括高剑父、关山月等人的画作。",
    category: "painting",
  },
  {
    id: 122,
    museumId: 36,
    name: "香港当代艺术",
    period: "现代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "香港当代艺术家的作品，展现了香港的艺术创新。",
    category: "painting",
  },
  {
    id: 123,
    museumId: 36,
    name: "中国古代书画",
    period: "历代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "中国古代书画精品，包括山水、花鸟、人物等题材。",
    category: "painting",
  },

  // 37. 澳门博物馆
  {
    id: 124,
    museumId: 37,
    name: "澳门历史文献",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "澳门历史文献，记录了澳门的中西文化交流史。",
    category: "ancient_book",
  },
  {
    id: 125,
    museumId: 37,
    name: "澳门民俗文物",
    period: "清代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "澳门传统民俗文物，展现了澳门的民间生活。",
    category: "other",
  },
  {
    id: 126,
    museumId: 37,
    name: "澳门宗教文物",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "澳门宗教文物，包括天主教、佛教等相关文物。",
    category: "religious",
  },

  // 38. 澳门艺术博物馆
  {
    id: 127,
    museumId: 38,
    name: "澳门历史绘画",
    period: "近代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "描绘澳门历史风貌的绘画作品，记录了澳门的变迁。",
    category: "painting",
  },
  {
    id: 128,
    museumId: 38,
    name: "西方绘画",
    period: "近代",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "西方绘画作品，展现了西方艺术在澳门的传播。",
    category: "painting",
  },
  {
    id: 129,
    museumId: 38,
    name: "中国书画",
    period: "明清",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    description: "中国明清书画作品，展现了传统艺术的魅力。",
    category: "painting",
  },
];
