import type { Exhibition } from "@/typesOfPages/museum/index";

// 导出展览分类和静态数据
export { exhibitionCategories, staticExhibitions } from "./exhibitionData";

// 展览数据
export const exhibitions: Exhibition[] = [
  // 故宫博物院展览
  {
    id: 1,
    museumId: 1,
    title: "紫禁城建成600年展",
    description: "庆祝紫禁城建成600周年，展示故宫的历史与文化。",
    date: "2020年9月 - 2021年2月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "故宫博物院午门展厅",
    category: "历史文化",
  },
  {
    id: 2,
    museumId: 1,
    title: "清代宫廷生活展",
    description: "展示清代宫廷的日常生活、礼仪制度和文化艺术。",
    date: "2021年3月 - 2021年8月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "故宫博物院东六宫",
    category: "历史文化",
  },
  // 中国科学技术馆展览
  {
    id: 3,
    museumId: 2,
    title: "科技与未来",
    description: "探索前沿科技发展，展望未来生活。",
    date: "2024年1月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "中国科学技术馆主展厅",
    category: "科技考古",
  },
  {
    id: 4,
    museumId: 2,
    title: "古代科技发明",
    description: "了解中国古代科技成就，感受祖先智慧。",
    date: "2024年3月 - 2024年9月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "中国科学技术馆古代科技展厅",
    category: "科技考古",
  },
  // 上海博物馆展览
  {
    id: 5,
    museumId: 3,
    title: "中国古代青铜器展",
    description: "展示中国古代青铜器的发展历程和艺术成就。",
    date: "2024年1月 - 2024年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "上海博物馆青铜器展厅",
    category: "艺术精品",
  },
  {
    id: 6,
    museumId: 3,
    title: "中国古代陶瓷展",
    description: "展示中国古代陶瓷的发展历程和艺术成就。",
    date: "2024年7月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "上海博物馆陶瓷展厅",
    category: "艺术精品",
  },
  // 秦始皇兵马俑博物馆展览
  {
    id: 7,
    museumId: 4,
    title: "秦始皇兵马俑展",
    description: "展示秦始皇兵马俑的发现、发掘和保护过程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "秦始皇兵马俑博物馆一号坑",
    category: "历史文化",
  },
  {
    id: 8,
    museumId: 4,
    title: "秦始皇陵出土文物展",
    description: "展示秦始皇陵出土的各类文物，包括铜车马、兵器等。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "秦始皇兵马俑博物馆文物陈列厅",
    category: "历史文化",
  },
  // 陕西历史博物馆展览
  {
    id: 9,
    museumId: 5,
    title: "陕西历史文化展",
    description: "展示陕西地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "陕西历史博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 10,
    museumId: 5,
    title: "唐代文物精品展",
    description: "展示唐代的精品文物，包括金银器、陶瓷器等。",
    date: "2024年3月 - 2024年9月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "陕西历史博物馆专题展厅",
    category: "艺术精品",
  },
  // 南京博物院展览
  {
    id: 11,
    museumId: 6,
    title: "江苏历史文化展",
    description: "展示江苏地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "南京博物院历史馆",
  },
  {
    id: 12,
    museumId: 6,
    title: "明清艺术展",
    description: "展示明清时期的艺术作品，包括绘画、书法、工艺品等。",
    date: "2024年4月 - 2024年10月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "南京博物院艺术馆",
  },
  // 河南博物院展览
  {
    id: 13,
    museumId: 7,
    title: "中原历史文化展",
    description: "展示中原地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "河南博物院主展厅",
  },
  {
    id: 14,
    museumId: 7,
    title: "商周青铜器展",
    description: "展示商周时期的青铜器，包括礼器、兵器等。",
    date: "2024年5月 - 2024年11月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "河南博物院专题展厅",
  },
  // 浙江省博物馆展览
  {
    id: 15,
    museumId: 8,
    title: "浙江历史文化展",
    description: "展示浙江地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "浙江省博物馆主展厅",
  },
  {
    id: 16,
    museumId: 8,
    title: "龙泉青瓷展",
    description: "展示龙泉青瓷的发展历程和艺术成就。",
    date: "2024年6月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "浙江省博物馆专题展厅",
  },
  // 湖北省博物馆展览
  {
    id: 17,
    museumId: 9,
    title: "湖北历史文化展",
    description: "展示湖北地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "湖北省博物馆主展厅",
  },
  {
    id: 18,
    museumId: 9,
    title: "曾侯乙编钟展",
    description: "展示曾侯乙编钟的发现、发掘和研究成果。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "湖北省博物馆编钟展厅",
  },
  // 湖南省博物馆展览
  {
    id: 19,
    museumId: 10,
    title: "湖南历史文化展",
    description: "展示湖南地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "湖南省博物馆主展厅",
  },
  {
    id: 20,
    museumId: 10,
    title: "马王堆汉墓文物展",
    description: "展示马王堆汉墓出土的文物，包括帛画、丝绸等。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "湖南省博物馆马王堆展厅",
  },
  // 四川博物院展览
  {
    id: 21,
    museumId: 11,
    title: "四川历史文化展",
    description: "展示四川地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "四川博物院主展厅",
  },
  {
    id: 22,
    museumId: 11,
    title: "三星堆文物展",
    description: "展示三星堆遗址出土的文物，包括青铜面具、青铜立人等。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "四川博物院三星堆展厅",
  },
  // 广东省博物馆展览
  {
    id: 23,
    museumId: 12,
    title: "广东历史文化展",
    description: "展示广东地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "广东省博物馆主展厅",
  },
  {
    id: 24,
    museumId: 12,
    title: "海上丝绸之路展",
    description: "展示海上丝绸之路的历史和文化交流。",
    date: "2024年7月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "广东省博物馆专题展厅",
  },
  // 天津博物馆展览
  {
    id: 25,
    museumId: 13,
    title: "天津历史文化展",
    description: "展示天津地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "天津博物馆主展厅",
  },
  {
    id: 26,
    museumId: 13,
    title: "清代瓷器展",
    description: "展示清代的瓷器，包括青花瓷、粉彩瓷等。",
    date: "2024年8月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "天津博物馆专题展厅",
  },
  // 重庆中国三峡博物馆展览
  {
    id: 27,
    museumId: 14,
    title: "三峡历史文化展",
    description: "展示三峡地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "重庆中国三峡博物馆主展厅",
  },
  {
    id: 28,
    museumId: 14,
    title: "巴渝文化展",
    description: "展示巴渝地区的文化特色和历史遗产。",
    date: "2024年9月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "重庆中国三峡博物馆专题展厅",
  },
  // 山东博物馆展览
  {
    id: 29,
    museumId: 15,
    title: "山东历史文化展",
    description: "展示山东地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "山东博物馆主展厅",
  },
  {
    id: 30,
    museumId: 15,
    title: "大汶口文化展",
    description: "展示大汶口文化的发掘成果和文化特色。",
    date: "2024年10月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "山东博物馆专题展厅",
  },
  // 辽宁省博物馆展览
  {
    id: 31,
    museumId: 16,
    title: "辽宁历史文化展",
    description: "展示辽宁地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "辽宁省博物馆主展厅",
  },
  {
    id: 32,
    museumId: 16,
    title: "红山文化展",
    description: "展示红山文化的发掘成果和文化特色。",
    date: "2024年11月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "辽宁省博物馆专题展厅",
  },
  // 吉林省博物院展览
  {
    id: 33,
    museumId: 17,
    title: "吉林历史文化展",
    description: "展示吉林地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "吉林省博物院主展厅",
  },
  {
    id: 34,
    museumId: 17,
    title: "高句丽文化展",
    description: "展示高句丽文化的发掘成果和文化特色。",
    date: "2024年12月 - 2025年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "吉林省博物院专题展厅",
  },
  // 黑龙江省博物馆展览
  {
    id: 35,
    museumId: 18,
    title: "黑龙江历史文化展",
    description: "展示黑龙江地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "黑龙江省博物馆主展厅",
  },
  {
    id: 36,
    museumId: 18,
    title: "赫哲族文化展",
    description: "展示赫哲族的传统文化和生活方式。",
    date: "2024年12月 - 2025年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "黑龙江省博物馆专题展厅",
  },
  // 福建博物院展览
  {
    id: 37,
    museumId: 19,
    title: "福建历史文化展",
    description: "展示福建地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "福建博物院主展厅",
  },
  {
    id: 38,
    museumId: 19,
    title: "海上丝绸之路展",
    description: "展示福建在海上丝绸之路中的重要地位和历史贡献。",
    date: "2024年12月 - 2025年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "福建博物院专题展厅",
  },
  // 安徽博物院展览
  {
    id: 39,
    museumId: 20,
    title: "安徽历史文化展",
    description: "展示安徽地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "安徽博物院主展厅",
  },
  {
    id: 40,
    museumId: 20,
    title: "徽州文化展",
    description: "展示徽州文化的特色和历史遗产，包括徽派建筑、徽商文化等。",
    date: "2024年12月 - 2025年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "安徽博物院专题展厅",
  },
  // 河北博物院展览
  {
    id: 41,
    museumId: 21,
    title: "河北历史文化展",
    description: "展示河北地区从远古到近代的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "河北博物院主展厅",
    category: "历史文化",
  },
  {
    id: 42,
    museumId: 21,
    title: "中山国文化展",
    description: "展示战国时期中山国的考古发现和文化特色。",
    date: "2024年1月 - 2024年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "河北博物院专题展厅",
    category: "历史文化",
  },
  // 山西博物院展览
  {
    id: 43,
    museumId: 22,
    title: "晋魂历史文化展",
    description: "展示山西地区的历史文化发展历程，重点展示晋国文化。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "山西博物院主展厅",
    category: "历史文化",
  },
  {
    id: 44,
    museumId: 22,
    title: "晋商文化展",
    description: "展示晋商的历史发展和商业文化。",
    date: "2024年2月 - 2024年8月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "山西博物院专题展厅",
    category: "历史文化",
  },
  // 江西省博物馆展览
  {
    id: 45,
    museumId: 23,
    title: "江西历史文化展",
    description: "展示江西地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "江西省博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 46,
    museumId: 23,
    title: "海昏侯国考古成果展",
    description: "展示海昏侯墓的考古发现和出土文物。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "江西省博物馆海昏侯展厅",
    category: "科技考古",
  },
  // 广西壮族自治区博物馆展览
  {
    id: 47,
    museumId: 24,
    title: "广西历史文化展",
    description: "展示广西地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "广西壮族自治区博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 48,
    museumId: 24,
    title: "壮族文化展",
    description: "展示壮族的传统文化、民俗风情和艺术特色。",
    date: "2024年3月 - 2024年9月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "广西壮族自治区博物馆专题展厅",
    category: "民俗风情",
  },
  // 海南省博物馆展览
  {
    id: 49,
    museumId: 25,
    title: "海南历史文化展",
    description: "展示海南地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "海南省博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 50,
    museumId: 25,
    title: "南海海洋文化展",
    description: "展示南海海洋文化和海上丝绸之路历史。",
    date: "2024年4月 - 2024年10月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "海南省博物馆专题展厅",
    category: "历史文化",
  },
  // 贵州省博物馆展览
  {
    id: 51,
    museumId: 26,
    title: "贵州历史文化展",
    description: "展示贵州地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "贵州省博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 52,
    museumId: 26,
    title: "少数民族风情展",
    description: "展示贵州各少数民族的传统文化和民俗风情。",
    date: "2024年5月 - 2024年11月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "贵州省博物馆专题展厅",
    category: "民俗风情",
  },
  // 云南省博物馆展览
  {
    id: 53,
    museumId: 27,
    title: "云南历史文化展",
    description: "展示云南地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "云南省博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 54,
    museumId: 27,
    title: "滇国文化展",
    description: "展示古滇国的考古发现和文化特色。",
    date: "2024年6月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "云南省博物馆专题展厅",
    category: "历史文化",
  },
  // 西藏博物馆展览
  {
    id: 55,
    museumId: 28,
    title: "西藏历史文化展",
    description: "展示西藏地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "西藏博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 56,
    museumId: 28,
    title: "藏族文化艺术展",
    description: "展示藏族的传统文化、宗教艺术和民俗风情。",
    date: "2024年7月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "西藏博物馆专题展厅",
    category: "艺术精品",
  },
  // 甘肃省博物馆展览
  {
    id: 57,
    museumId: 29,
    title: "甘肃丝绸之路文明展",
    description: "展示甘肃在丝绸之路中的重要地位和历史贡献。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "甘肃省博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 58,
    museumId: 29,
    title: "彩陶艺术展",
    description: "展示甘肃彩陶的发展历程和艺术成就。",
    date: "2024年8月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "甘肃省博物馆专题展厅",
    category: "艺术精品",
  },
  // 青海省博物馆展览
  {
    id: 59,
    museumId: 30,
    title: "青海历史文化展",
    description: "展示青海地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "青海省博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 60,
    museumId: 30,
    title: "青海湖文化展",
    description: "展示青海湖地区的自然和人文历史。",
    date: "2024年9月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "青海省博物馆专题展厅",
    category: "历史文化",
  },
  // 内蒙古博物院展览
  {
    id: 61,
    museumId: 31,
    title: "内蒙古历史文化展",
    description: "展示内蒙古地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "内蒙古博物院主展厅",
    category: "历史文化",
  },
  {
    id: 62,
    museumId: 31,
    title: "草原文化展",
    description: "展示草原文化和游牧民族的历史。",
    date: "2024年10月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "内蒙古博物院专题展厅",
    category: "民俗风情",
  },
  // 宁夏博物馆展览
  {
    id: 63,
    museumId: 32,
    title: "宁夏历史文化展",
    description: "展示宁夏地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "宁夏博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 64,
    museumId: 32,
    title: "西夏文化展",
    description: "展示西夏王朝的历史和文化。",
    date: "2024年11月 - 2024年12月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "宁夏博物馆专题展厅",
    category: "历史文化",
  },
  // 新疆维吾尔自治区博物馆展览
  {
    id: 65,
    museumId: 33,
    title: "新疆历史文化展",
    description: "展示新疆地区的历史文化发展历程。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "新疆维吾尔自治区博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 66,
    museumId: 33,
    title: "丝绸之路西域文明展",
    description: "展示丝绸之路西域段的历史和文化交流。",
    date: "2024年12月 - 2025年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "新疆维吾尔自治区博物馆专题展厅",
    category: "历史文化",
  },
  // 台北故宫博物院展览
  {
    id: 67,
    museumId: 34,
    title: "故宫文物精华展",
    description: "展示故宫珍藏的文物精华。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "台北故宫博物院主展厅",
    category: "艺术精品",
  },
  {
    id: 68,
    museumId: 34,
    title: "书画艺术展",
    description: "展示中国古代书画艺术精品。",
    date: "2024年1月 - 2024年6月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "台北故宫博物院书画展厅",
    category: "艺术精品",
  },
  // 香港历史博物馆展览
  {
    id: 69,
    museumId: 35,
    title: "香港故事展",
    description: "展示香港从开埠至今的历史发展。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "香港历史博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 70,
    museumId: 35,
    title: "香港民俗文化展",
    description: "展示香港的传统民俗和文化遗产。",
    date: "2024年2月 - 2024年8月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "香港历史博物馆专题展厅",
    category: "民俗风情",
  },
  // 香港艺术馆展览
  {
    id: 71,
    museumId: 36,
    title: "香港艺术展",
    description: "展示香港本土艺术家的作品和艺术发展。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "香港艺术馆主展厅",
    category: "艺术精品",
  },
  {
    id: 72,
    museumId: 36,
    title: "中国书画展",
    description: "展示中国书画艺术精品。",
    date: "2024年3月 - 2024年9月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "香港艺术馆专题展厅",
    category: "艺术精品",
  },
  // 澳门博物馆展览
  {
    id: 73,
    museumId: 37,
    title: "澳门历史展",
    description: "展示澳门从开埠至今的历史发展。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "澳门博物馆主展厅",
    category: "历史文化",
  },
  {
    id: 74,
    museumId: 37,
    title: "澳门文化遗产展",
    description: "展示澳门的世界文化遗产和传统建筑。",
    date: "2024年4月 - 2024年10月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "澳门博物馆专题展厅",
    category: "历史文化",
  },
  // 澳门艺术博物馆展览
  {
    id: 75,
    museumId: 38,
    title: "澳门艺术展",
    description: "展示澳门本土艺术家的作品和艺术发展。",
    date: "常设展览",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "澳门艺术博物馆主展厅",
    category: "艺术精品",
  },
  {
    id: 76,
    museumId: 38,
    title: "中西艺术交流展",
    description: "展示东西方艺术在澳门的交流与融合。",
    date: "2024年5月 - 2024年11月",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop",
    location: "澳门艺术博物馆专题展厅",
    category: "艺术精品",
  },
];

// 根据博物馆ID获取展览
export const getExhibitionsByMuseumId = (museumId: number): Exhibition[] => {
  return exhibitions.filter((exhibition) => exhibition.museumId === museumId);
};
