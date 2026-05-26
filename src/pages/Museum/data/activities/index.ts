// 活动数据
import type { Activity } from "@/typesOfPages/museum/index";

// 活动数据数组
export const activities: Activity[] = [
  // 故宫博物院 (ID: 1)
  {
    id: 1,
    museumId: 1,
    title: "故宫博物院年度特展",
    description: "探索故宫珍藏的国宝级文物，了解中国古代文化的博大精深",
    date: "2024-05-01 至 2024-08-01",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    museumId: 1,
    title: "紫禁城建成600周年纪念活动",
    description: "庆祝紫禁城建成600周年，举办系列文化活动和学术讲座",
    date: "2024-09-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    museumId: 1,
    title: "故宫夜游活动",
    description: "夜间开放故宫，体验不一样的紫禁城夜景",
    date: "2024-10-01 至 2024-10-07",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 中国科学技术馆 (ID: 2)
  {
    id: 4,
    museumId: 2,
    title: "中国科学技术馆科技节",
    description: "举办科技节活动，展示前沿科技成果和互动体验",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    museumId: 2,
    title: "青少年科技创新大赛",
    description: "面向全国青少年的科技创新竞赛活动",
    date: "2024-11-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    museumId: 2,
    title: "机器人编程体验营",
    description: "青少年机器人编程和人工智能体验活动",
    date: "2024-08-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  // 上海博物馆 (ID: 3)
  {
    id: 7,
    museumId: 3,
    title: "上海博物馆青铜器特展",
    description: "展示中国古代青铜器的艺术魅力和历史价值",
    date: "2024-06-01 至 2024-09-01",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    museumId: 3,
    title: "书画鉴赏讲座",
    description: "邀请知名专家讲解中国古代书画艺术",
    date: "2024-10-15 至 2024-12-15",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    museumId: 3,
    title: "文物修复体验活动",
    description: "让公众了解文物修复过程，体验传统修复技艺",
    date: "2024-09-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  // 秦始皇兵马俑博物馆 (ID: 4)
  {
    id: 10,
    museumId: 4,
    title: "兵马俑发现50周年纪念展",
    description: "纪念兵马俑发现50周年，展示最新考古成果",
    date: "2024-03-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop",
  },
  {
    id: 11,
    museumId: 4,
    title: "秦文化学术研讨会",
    description: "国内外专家学者共同探讨秦代历史文化",
    date: "2024-06-15 至 2024-06-20",
    image:
      "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop",
  },
  {
    id: 12,
    museumId: 4,
    title: "考古体验活动",
    description: "模拟考古发掘体验，了解考古工作流程",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop",
  },
  // 陕西历史博物馆 (ID: 5)
  {
    id: 13,
    museumId: 5,
    title: "大唐文化主题展",
    description: "展示唐代文化艺术的辉煌成就",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 14,
    museumId: 5,
    title: "丝绸之路文物展",
    description: "展示丝绸之路沿线的历史文物和文化交流",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 15,
    museumId: 5,
    title: "唐代服饰体验活动",
    description: "穿唐装、学唐礼，体验唐代文化生活",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 南京博物院 (ID: 6)
  {
    id: 16,
    museumId: 6,
    title: "江南文化特展",
    description: "展示江南地区的历史文化和艺术特色",
    date: "2024-03-15 至 2024-09-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 17,
    museumId: 6,
    title: "民国风情展",
    description: "展示民国时期的社会生活和文化风貌",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 18,
    museumId: 6,
    title: "非遗传承体验活动",
    description: "体验南京云锦、金陵刻经等非遗技艺",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 河南博物院 (ID: 7)
  {
    id: 19,
    museumId: 7,
    title: "中原文明特展",
    description: "展示中原地区悠久的历史文明",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 20,
    museumId: 7,
    title: "商周青铜器研讨会",
    description: "探讨商周青铜器的制作工艺和文化内涵",
    date: "2024-05-15 至 2024-05-20",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 21,
    museumId: 7,
    title: "考古发掘成果展",
    description: "展示河南最新的考古发掘成果",
    date: "2024-08-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 浙江省博物馆 (ID: 8)
  {
    id: 22,
    museumId: 8,
    title: "越文化特展",
    description: "展示越国的历史文化和艺术成就",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 23,
    museumId: 8,
    title: "龙泉青瓷精品展",
    description: "展示龙泉青瓷的精美工艺和艺术价值",
    date: "2024-06-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 24,
    museumId: 8,
    title: "茶文化体验活动",
    description: "体验浙江茶文化，学习茶艺知识",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 湖北省博物馆 (ID: 9)
  {
    id: 25,
    museumId: 9,
    title: "楚文化特展",
    description: "展示楚国的历史文化和艺术成就",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 26,
    museumId: 9,
    title: "曾侯乙编钟演奏会",
    description: "聆听曾侯乙编钟的千年之音",
    date: "2024-05-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 27,
    museumId: 9,
    title: "荆楚文化讲座",
    description: "专家学者讲解荆楚历史文化",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 湖南省博物馆 (ID: 10)
  {
    id: 28,
    museumId: 10,
    title: "马王堆汉墓特展",
    description: "展示马王堆汉墓的珍贵文物和考古发现",
    date: "2024-03-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 29,
    museumId: 10,
    title: "湘楚文化研讨会",
    description: "探讨湘楚地区的历史文化",
    date: "2024-06-15 至 2024-06-20",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 30,
    museumId: 10,
    title: "汉代服饰体验",
    description: "穿汉服、学汉礼，体验汉代文化",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 四川博物院 (ID: 11)
  {
    id: 31,
    museumId: 11,
    title: "巴蜀文化特展",
    description: "展示巴蜀地区的历史文化和艺术成就",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 32,
    museumId: 11,
    title: "三星堆文化讲座",
    description: "专家学者讲解三星堆文化的奥秘",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 33,
    museumId: 11,
    title: "川剧变脸体验",
    description: "了解川剧变脸艺术，体验传统文化",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 广东省博物馆 (ID: 12)
  {
    id: 34,
    museumId: 12,
    title: "岭南文化特展",
    description: "展示岭南地区的历史文化和艺术特色",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 35,
    museumId: 12,
    title: "海上丝绸之路展",
    description: "展示海上丝绸之路的历史和文化交流",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 36,
    museumId: 12,
    title: "广彩瓷器体验活动",
    description: "了解广彩瓷器工艺，体验传统技艺",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 天津博物馆 (ID: 13)
  {
    id: 37,
    museumId: 13,
    title: "津门文化特展",
    description: "展示天津地区的历史文化和民俗风情",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 38,
    museumId: 13,
    title: "近代天津历史展",
    description: "展示近代天津的历史变迁和社会发展",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 39,
    museumId: 13,
    title: "杨柳青年画体验",
    description: "了解杨柳青年画工艺，体验传统艺术",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 重庆中国三峡博物馆 (ID: 14)
  {
    id: 40,
    museumId: 14,
    title: "三峡文化特展",
    description: "展示三峡地区的历史文化和自然风光",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 41,
    museumId: 14,
    title: "巴渝文化研讨会",
    description: "探讨巴渝地区的历史文化",
    date: "2024-06-15 至 2024-06-20",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 42,
    museumId: 14,
    title: "抗战文化讲座",
    description: "讲述重庆抗战时期的历史故事",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 山东博物馆 (ID: 15)
  {
    id: 43,
    museumId: 15,
    title: "齐鲁文化特展",
    description: "展示齐鲁地区的历史文化和儒家思想",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 44,
    museumId: 15,
    title: "孔子文化讲座",
    description: "专家学者讲解孔子思想和儒家文化",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 45,
    museumId: 15,
    title: "大汶口文化体验",
    description: "了解史前文化，体验原始生活",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 辽宁省博物馆 (ID: 16)
  {
    id: 46,
    museumId: 16,
    title: "辽沈文化特展",
    description: "展示辽宁地区的历史文化和民族风情",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 47,
    museumId: 16,
    title: "红山文化研讨会",
    description: "探讨红山文化的考古发现和文化内涵",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 48,
    museumId: 16,
    title: "清代宫廷文化展",
    description: "展示清代宫廷文化和沈阳故宫文物",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 吉林省博物院 (ID: 17)
  {
    id: 49,
    museumId: 17,
    title: "关东文化特展",
    description: "展示吉林地区的历史文化和民俗风情",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 50,
    museumId: 17,
    title: "高句丽文化讲座",
    description: "专家学者讲解高句丽历史文化",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 51,
    museumId: 17,
    title: "满族文化体验",
    description: "了解满族文化，体验传统习俗",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 黑龙江省博物馆 (ID: 18)
  {
    id: 52,
    museumId: 18,
    title: "黑土文化特展",
    description: "展示黑龙江地区的历史文化和自然资源",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 53,
    museumId: 18,
    title: "冰雪文化展",
    description: "展示黑龙江的冰雪文化和冬季运动",
    date: "2024-06-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 54,
    museumId: 18,
    title: "赫哲族文化体验",
    description: "了解赫哲族文化，体验渔猎生活",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 福建博物院 (ID: 19)
  {
    id: 55,
    museumId: 19,
    title: "闽台文化特展",
    description: "展示福建与台湾的历史文化联系",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 56,
    museumId: 19,
    title: "海上丝绸之路研讨会",
    description: "探讨海上丝绸之路的历史和文化",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 57,
    museumId: 19,
    title: "闽南文化体验",
    description: "了解闽南文化，体验传统习俗",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 安徽博物院 (ID: 20)
  {
    id: 58,
    museumId: 20,
    title: "徽文化特展",
    description: "展示徽州地区的历史文化和艺术成就",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 59,
    museumId: 20,
    title: "徽商文化讲座",
    description: "专家学者讲解徽商历史和文化",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 60,
    museumId: 20,
    title: "徽派建筑体验",
    description: "了解徽派建筑特色，体验传统工艺",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 河北博物院 (ID: 21)
  {
    id: 61,
    museumId: 21,
    title: "燕赵文化特展",
    description: "展示燕赵地区的历史文化和英雄故事",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 62,
    museumId: 21,
    title: "中山国文化展",
    description: "展示中山国的历史文化和考古发现",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 63,
    museumId: 21,
    title: "满城汉墓讲座",
    description: "专家学者讲解满城汉墓的考古发现",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 山西博物院 (ID: 22)
  {
    id: 64,
    museumId: 22,
    title: "晋文化特展",
    description: "展示山西地区的历史文化和晋商文化",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 65,
    museumId: 22,
    title: "晋商文化研讨会",
    description: "探讨晋商的历史和文化贡献",
    date: "2024-06-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 66,
    museumId: 22,
    title: "山西古建筑体验",
    description: "了解山西古建筑特色，参观古建遗存",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 江西省博物馆 (ID: 23)
  {
    id: 67,
    museumId: 23,
    title: "赣文化特展",
    description: "展示江西地区的历史文化和红色文化",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 68,
    museumId: 23,
    title: "红色文化讲座",
    description: "讲述江西的革命历史和红色故事",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 69,
    museumId: 23,
    title: "景德镇瓷器体验",
    description: "了解景德镇瓷器工艺，体验制瓷过程",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 广西壮族自治区博物馆 (ID: 24)
  {
    id: 70,
    museumId: 24,
    title: "壮乡文化特展",
    description: "展示广西地区的历史文化和民族风情",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 71,
    museumId: 24,
    title: "铜鼓文化讲座",
    description: "专家学者讲解铜鼓的历史和文化",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 72,
    museumId: 24,
    title: "壮族文化体验",
    description: "了解壮族文化，体验民族习俗",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 海南省博物馆 (ID: 25)
  {
    id: 73,
    museumId: 25,
    title: "南海文化特展",
    description: "展示南海地区的历史文化和海洋文明",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 74,
    museumId: 25,
    title: "水下考古成果展",
    description: "展示南海水下考古的重要发现",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 75,
    museumId: 25,
    title: "黎族文化体验",
    description: "了解黎族文化，体验传统技艺",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 贵州省博物馆 (ID: 26)
  {
    id: 76,
    museumId: 26,
    title: "黔文化特展",
    description: "展示贵州地区的历史文化和民族风情",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 77,
    museumId: 26,
    title: "夜郎文化讲座",
    description: "专家学者讲解夜郎古国的历史",
    date: "2024-06-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 78,
    museumId: 26,
    title: "苗族文化体验",
    description: "了解苗族文化，体验民族习俗",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 云南省博物馆 (ID: 27)
  {
    id: 79,
    museumId: 27,
    title: "滇文化特展",
    description: "展示云南地区的历史文化和民族风情",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 80,
    museumId: 27,
    title: "古滇国文化讲座",
    description: "专家学者讲解古滇国的历史文化",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 81,
    museumId: 27,
    title: "少数民族文化体验",
    description: "了解云南少数民族文化，体验民族习俗",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 西藏博物馆 (ID: 28)
  {
    id: 82,
    museumId: 28,
    title: "藏文化特展",
    description: "展示西藏地区的历史文化和宗教艺术",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 83,
    museumId: 28,
    title: "唐卡艺术展",
    description: "展示唐卡艺术的精美工艺和宗教内涵",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 84,
    museumId: 28,
    title: "藏族文化体验",
    description: "了解藏族文化，体验传统习俗",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 甘肃省博物馆 (ID: 29)
  {
    id: 85,
    museumId: 29,
    title: "陇原文化特展",
    description: "展示甘肃地区的历史文化和丝绸之路文明",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 86,
    museumId: 29,
    title: "敦煌文化讲座",
    description: "专家学者讲解敦煌艺术和文化",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 87,
    museumId: 29,
    title: "彩陶文化体验",
    description: "了解彩陶文化，体验制陶工艺",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 青海省博物馆 (ID: 30)
  {
    id: 88,
    museumId: 30,
    title: "青藏文化特展",
    description: "展示青海地区的历史文化和民族风情",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 89,
    museumId: 30,
    title: "青海湖文化讲座",
    description: "专家学者讲解青海湖的自然和文化",
    date: "2024-06-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 90,
    museumId: 30,
    title: "土族文化体验",
    description: "了解土族文化，体验民族习俗",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 内蒙古博物院 (ID: 31)
  {
    id: 91,
    museumId: 31,
    title: "草原文化特展",
    description: "展示内蒙古地区的历史文化和草原文明",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 92,
    museumId: 31,
    title: "蒙古族文化讲座",
    description: "专家学者讲解蒙古族的历史文化",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 93,
    museumId: 31,
    title: "那达慕文化体验",
    description: "了解那达慕大会，体验蒙古族习俗",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 宁夏博物馆 (ID: 32)
  {
    id: 94,
    museumId: 32,
    title: "塞上文化特展",
    description: "展示宁夏地区的历史文化和民族风情",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 95,
    museumId: 32,
    title: "西夏文化讲座",
    description: "专家学者讲解西夏王朝的历史",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 96,
    museumId: 32,
    title: "回族文化体验",
    description: "了解回族文化，体验民族习俗",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 新疆维吾尔自治区博物馆 (ID: 33)
  {
    id: 97,
    museumId: 33,
    title: "西域文化特展",
    description: "展示新疆地区的历史文化和丝绸之路文明",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 98,
    museumId: 33,
    title: "楼兰文化讲座",
    description: "专家学者讲解楼兰古国的历史",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 99,
    museumId: 33,
    title: "维吾尔族文化体验",
    description: "了解维吾尔族文化，体验民族习俗",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 台北故宫博物院 (ID: 34)
  {
    id: 100,
    museumId: 34,
    title: "故宫文物特展",
    description: "展示台北故宫珍藏的中国古代文物",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 101,
    museumId: 34,
    title: "书画艺术讲座",
    description: "专家学者讲解中国古代书画艺术",
    date: "2024-06-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 102,
    museumId: 34,
    title: "文物修复体验",
    description: "了解文物修复过程，体验传统技艺",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 香港历史博物馆 (ID: 35)
  {
    id: 103,
    museumId: 35,
    title: "香港故事特展",
    description: "展示香港从远古到现代的历史发展",
    date: "2024-04-01 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 104,
    museumId: 35,
    title: "香港文化讲座",
    description: "专家学者讲解香港的历史文化",
    date: "2024-05-15 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 105,
    museumId: 35,
    title: "民俗文化体验",
    description: "了解香港民俗文化，体验传统习俗",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 香港艺术馆 (ID: 36)
  {
    id: 106,
    museumId: 36,
    title: "香港艺术特展",
    description: "展示香港本土艺术和国际艺术作品",
    date: "2024-03-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 107,
    museumId: 36,
    title: "当代艺术讲座",
    description: "专家学者讲解当代艺术发展",
    date: "2024-06-01 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 108,
    museumId: 36,
    title: "艺术创作体验",
    description: "参与艺术创作，体验艺术魅力",
    date: "2024-07-15 至 2024-08-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 澳门博物馆 (ID: 37)
  {
    id: 109,
    museumId: 37,
    title: "澳门历史特展",
    description: "展示澳门数百年的历史变迁",
    date: "2024-04-15 至 2024-10-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 110,
    museumId: 37,
    title: "中西文化讲座",
    description: "专家学者讲解澳门的中西文化交融",
    date: "2024-05-01 至 2024-11-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 111,
    museumId: 37,
    title: "澳门文化体验",
    description: "了解澳门文化，体验中西交融",
    date: "2024-08-01 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 澳门艺术博物馆 (ID: 38)
  {
    id: 112,
    museumId: 38,
    title: "澳门艺术特展",
    description: "展示澳门本土艺术和国际艺术作品",
    date: "2024-03-15 至 2024-09-30",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 113,
    museumId: 38,
    title: "中西艺术讲座",
    description: "专家学者讲解中西艺术交流",
    date: "2024-06-15 至 2024-12-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 114,
    museumId: 38,
    title: "艺术创作体验",
    description: "参与艺术创作，体验艺术魅力",
    date: "2024-07-01 至 2024-08-31",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
];

// 根据博物馆ID获取活动
export const getActivitiesByMuseumId = (museumId: number): Activity[] => {
  return activities.filter((activity) => activity.museumId === museumId);
};
