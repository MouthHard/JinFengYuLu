import type { CreativeProduct } from "@/typesOfPages/museum/index";

// 文创产品数据
export const creativeProducts: CreativeProduct[] = [
  // 故宫博物院文创
  {
    id: 1,
    museumId: 1,
    name: "故宫文创笔记本",
    description: "采用故宫元素设计的精美笔记本，适合日常使用和收藏。",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 2,
    museumId: 1,
    name: "故宫文创书签",
    description: "精美的金属书签，上面印有故宫经典图案。",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 中国科学技术馆文创
  {
    id: 3,
    museumId: 2,
    name: "科技主题T恤",
    description: "印有科技元素的时尚T恤，适合青少年和科技爱好者。",
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "服装",
  },
  {
    id: 4,
    museumId: 2,
    name: "科学实验套装",
    description: "适合青少年的科学实验套装，包含多种实验器材。",
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "教育",
  },
  // 上海博物馆文创
  {
    id: 5,
    museumId: 3,
    name: "青铜器主题文创",
    description: "以上海博物馆馆藏青铜器为灵感设计的文创产品。",
    price: 158,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 秦始皇兵马俑博物馆文创
  {
    id: 6,
    museumId: 4,
    name: "兵马俑文创摆件",
    description: "以兵马俑为原型设计的精美摆件，具有收藏价值。",
    price: 298,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  // 陕西历史博物馆文创
  {
    id: 7,
    museumId: 5,
    name: "唐代文物主题文创",
    description: "以陕西历史博物馆唐代文物为灵感设计的文创产品。",
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 南京博物院文创
  {
    id: 8,
    museumId: 6,
    name: "明清艺术主题文创",
    description: "以南京博物院明清艺术藏品为灵感设计的文创产品。",
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 河南博物院文创
  {
    id: 9,
    museumId: 7,
    name: "商周青铜器主题文创",
    description: "以河南博物院商周青铜器为灵感设计的文创产品。",
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 浙江省博物馆文创
  {
    id: 10,
    museumId: 8,
    name: "龙泉青瓷主题文创",
    description: "以浙江省博物馆龙泉青瓷为灵感设计的文创产品。",
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  // 湖北省博物馆文创
  {
    id: 11,
    museumId: 9,
    name: "曾侯乙编钟主题文创",
    description: "以湖北省博物馆曾侯乙编钟为灵感设计的文创产品。",
    price: 188,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 湖南省博物馆文创
  {
    id: 12,
    museumId: 10,
    name: "马王堆汉墓主题文创",
    description: "以湖南省博物馆马王堆汉墓文物为灵感设计的文创产品。",
    price: 158,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 四川博物院文创
  {
    id: 13,
    museumId: 11,
    name: "三星堆主题文创",
    description: "以四川博物院三星堆文物为灵感设计的文创产品。",
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 广东省博物馆文创
  {
    id: 14,
    museumId: 12,
    name: "海上丝绸之路主题文创",
    description: "以广东省博物馆海上丝绸之路文物为灵感设计的文创产品。",
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 天津博物馆文创
  {
    id: 15,
    museumId: 13,
    name: "清代瓷器主题文创",
    description: "以天津博物馆清代瓷器为灵感设计的文创产品。",
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  // 重庆中国三峡博物馆文创
  {
    id: 16,
    museumId: 14,
    name: "三峡主题文创",
    description: "以重庆中国三峡博物馆三峡文物为灵感设计的文创产品。",
    price: 148,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 山东博物馆文创
  {
    id: 17,
    museumId: 15,
    name: "大汶口文化主题文创",
    description: "以山东博物馆大汶口文化文物为灵感设计的文创产品。",
    price: 178,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 辽宁省博物馆文创
  {
    id: 18,
    museumId: 16,
    name: "红山文化主题文创",
    description: "以辽宁省博物馆红山文化文物为灵感设计的文创产品。",
    price: 188,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 吉林省博物院文创
  {
    id: 19,
    museumId: 17,
    name: "高句丽文化主题文创",
    description: "以吉林省博物院高句丽文化文物为灵感设计的文创产品。",
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 黑龙江省博物馆文创
  {
    id: 20,
    museumId: 18,
    name: "赫哲族文化主题文创",
    description: "以黑龙江省博物馆赫哲族文化文物为灵感设计的文创产品。",
    price: 158,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  // 福建博物院文创
  {
    id: 21,
    museumId: 19,
    name: "海上丝绸之路主题文创",
    description: "以福建博物院海上丝绸之路文物为灵感设计的文创产品。",
    price: 178,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  // 安徽博物院文创
  {
    id: 22,
    museumId: 20,
    name: "徽州文化主题文创",
    description: "以安徽博物院徽州文化文物为灵感设计的文创产品。",
    price: 148,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
];

// 根据博物馆ID获取文创产品
export const getCreativeProductsByMuseumId = (
  museumId: number,
): CreativeProduct[] => {
  return creativeProducts.filter((product) => product.museumId === museumId);
};
