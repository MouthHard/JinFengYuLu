import type { CreativeProduct } from "@/types/museum/index";

// 文创产品数据 - 38个博物馆真实文创产品
export const creativeProducts: CreativeProduct[] = [
  // 1. 故宫博物院文�?  {
    id: 1,
    museumId: 1,
    name: "故宫日历2024",
    description:
      "故宫博物院官方日历，每日一件故宫珍品，集知识性与艺术性于一体�?,
    price: 96,
    image:
      "https://images.unsplash.com/photo-1544716279-ca0955e2b4c7?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 2,
    museumId: 1,
    name: "千里江山图手账本",
    description: "以北宋王希孟《千里江山图》为设计灵感的精美手账本�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1531343281677-e6796d4c4a2c?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 3,
    museumId: 1,
    name: "故宫口红·郎窑�?,
    description: "以故宫馆藏郎窑红釉观音尊为灵感设计的口红，国潮美妆经典�?,
    price: 199,
    image:
      "https://images.unsplash.com/photo-1586495777749-55f5f7a6c4b5?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 4,
    museumId: 1,
    name: "故宫瑞兽书签套装",
    description: "故宫六大瑞兽金属书签套装，工艺精湛，寓意吉祥�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 5,
    museumId: 1,
    name: "朕知道了纸胶�?,
    description: "以康熙皇帝御笔为设计元素的趣味纸胶带，网红文创经典�?,
    price: 28,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 6,
    museumId: 1,
    name: "故宫茶具套装",
    description: "以故宫馆藏瓷器为灵感设计的茶具套装，品茗赏器两相宜�?,
    price: 368,
    image:
      "https://images.unsplash.com/photo-1558618666-5c3b4c4e5e5e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 2. 中国科学技术馆文创
  {
    id: 7,
    museumId: 2,
    name: "太空探索科普套装",
    description: "包含火箭模型、宇航员手办和太空科普图书的探索套装�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1446776877080-d4d8e8b3c3c3?w=300&h=300&fit=crop",
    category: "图书",
  },
  {
    id: 8,
    museumId: 2,
    name: "科学实验套装",
    description: "适合6-12岁儿童的科学实验套装，包�?0个趣味实验�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1596838135000-6b5d4e5e5e5e?w=300&h=300&fit=crop",
    category: "教育",
  },
  {
    id: 9,
    museumId: 2,
    name: "机器人拼装模�?,
    description: "可编程机器人拼装模型，培养动手能力和编程思维�?,
    price: 258,
    image:
      "https://images.unsplash.com/photo-1485827404703-4b8b8b8b8b8b?w=300&h=300&fit=crop",
    category: "教育",
  },
  {
    id: 10,
    museumId: 2,
    name: "天文望远镜模�?,
    description: "等比例缩放的天文望远镜模型，科普收藏两相宜�?,
    price: 128,
    image:
      "https://images.unsplash.com/photo-1462331323042-3b3b3b3b3b3b?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 3. 上海博物馆文�?  {
    id: 11,
    museumId: 3,
    name: "大克鼎青铜书�?,
    description: "以上海博物馆镇馆之宝大克鼎为原型设计的青铜书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 12,
    museumId: 3,
    name: "董其昌书画丝�?,
    description: "以董其昌山水画作为设计元素的真丝方巾，典雅大气�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 13,
    museumId: 3,
    name: "明清家具冰箱�?,
    description: "以明清家具为造型的系列冰箱贴，展现传统家具之美�?,
    price: 38,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 14,
    museumId: 3,
    name: "上博馆藏图录",
    description: "上海博物馆精选馆藏图录，高清印刷，收藏价值高�?,
    price: 380,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "图书",
  },

  // 4. 秦始皇兵马俑博物馆文�?  {
    id: 15,
    museumId: 4,
    name: "兵马俑将军俑摆件",
    description: "等比例缩放的将军俑摆件，高度还原秦代军阵风采�?,
    price: 298,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 16,
    museumId: 4,
    name: "秦铜车马模型",
    description: "以秦陵铜车马为原型的精致模型，展现秦代工艺之美�?,
    price: 458,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 17,
    museumId: 4,
    name: "秦小篆书�?,
    description: "以秦小篆字体设计的金属书签，感受秦代文字之美�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 18,
    museumId: 4,
    name: "兵马俑T�?,
    description: "印有兵马俑图案的纯棉T恤，国潮设计，舒适透气�?,
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "服装",
  },

  // 5. 陕西历史博物馆文�?  {
    id: 19,
    museumId: 5,
    name: "唐三彩马摆件",
    description: "以馆藏唐三彩马为原型的复刻摆件，色彩绚丽�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 20,
    museumId: 5,
    name: "葡萄花鸟纹银香囊",
    description: "以唐代葡萄花鸟纹银香囊为原型的复刻品，工艺精湛�?,
    price: 188,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 21,
    museumId: 5,
    name: "何家村遗宝笔记本",
    description: "以何家村窖藏珍宝为设计元素的精美笔记本�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 22,
    museumId: 5,
    name: "镶金兽首玛瑙杯模�?,
    description: "以镶金兽首玛瑙杯为原型的精致模型，展现唐代奢华�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 6. 南京博物院文�?  {
    id: 23,
    museumId: 6,
    name: "民国风情手账",
    description: "以南京博物院民国馆为灵感的复古手账本�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 24,
    museumId: 6,
    name: "金兽摆件",
    description: "以西汉金兽为原型的镀金摆件，憨态可掬�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 25,
    museumId: 6,
    name: "明代服饰丝巾",
    description: "以明代服饰纹样为设计元素的真丝方巾�?,
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 26,
    museumId: 6,
    name: "南博馆藏精选图�?,
    description: "南京博物院馆藏精品图录，高清印刷�?,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "图书",
  },

  // 7. 河南博物院文�?  {
    id: 27,
    museumId: 7,
    name: "妇好鸮尊摆件",
    description: "以商代妇好鸮尊为原型的青铜摆件，造型独特�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 28,
    museumId: 7,
    name: "贾湖骨笛模型",
    description: "以贾湖骨笛为原型的复刻模型，见证八千年音乐史�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 29,
    museumId: 7,
    name: "莲鹤方壶书签",
    description: "以莲鹤方壶为设计灵感的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 30,
    museumId: 7,
    name: "杜岭方鼎模型",
    description: "以杜岭方鼎为原型的青铜模型，商代重器缩影�?,
    price: 358,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 8. 浙江省博物馆文创
  {
    id: 31,
    museumId: 8,
    name: "越王勾践剑模�?,
    description: "以越王勾践剑为原型的复刻模型，千年不锈传奇�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 32,
    museumId: 8,
    name: "龙泉青瓷茶具",
    description: "以龙泉青瓷为特色的茶具套装，梅子青釉色温润如玉�?,
    price: 398,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 33,
    museumId: 8,
    name: "富春山居图丝�?,
    description: "以黄公望《富春山居图》为设计元素的真丝方巾�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 34,
    museumId: 8,
    name: "良渚玉琮摆件",
    description: "以良渚玉琮为原型的摆件，见证五千年文明�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 9. 湖北省博物馆文创
  {
    id: 35,
    museumId: 9,
    name: "曾侯乙编钟模�?,
    description: "以曾侯乙编钟为原型的精致模型，可发声演奏�?,
    price: 588,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 36,
    museumId: 9,
    name: "越王勾践剑书�?,
    description: "以越王勾践剑为设计灵感的金属书签�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 37,
    museumId: 9,
    name: "虎座鸟架鼓摆�?,
    description: "以虎座鸟架鼓为原型的摆件，楚文化代表�?,
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 38,
    museumId: 9,
    name: "元青花四爱图梅瓶模型",
    description: "以元青花四爱图梅瓶为原型的精致模型�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 10. 湖南省博物馆文创
  {
    id: 39,
    museumId: 10,
    name: "马王堆T形帛画丝�?,
    description: "以马王堆T形帛画为设计元素的真丝方巾�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 40,
    museumId: 10,
    name: "素纱单衣模型",
    description: "以素纱单衣为原型的展示模型，西汉纺织奇迹�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 41,
    museumId: 10,
    name: "辛追夫人化妆�?,
    description: "以辛追墓出土化妆盒为灵感的复刻品�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 42,
    museumId: 10,
    name: "汉代漆器茶具",
    description: "以汉代漆器为设计灵感的茶具套装�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 11. 四川博物院文�?  {
    id: 43,
    museumId: 11,
    name: "三星堆青铜面具摆�?,
    description: "以三星堆青铜面具为原型的摆件，古蜀文明象征�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 44,
    museumId: 11,
    name: "太阳神鸟饰品",
    description: "以金沙太阳神鸟为设计元素的精美饰品�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 45,
    museumId: 11,
    name: "蜀绣手�?,
    description: "四川特色蜀绣手帕，传统工艺精品�?,
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 46,
    museumId: 11,
    name: "川博馆藏图录",
    description: "四川博物院馆藏精品图录�?,
    price: 280,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "图书",
  },

  // 12. 广东省博物馆文创
  {
    id: 47,
    museumId: 12,
    name: "广彩瓷器茶具",
    description: "以广彩瓷器为特色的茶具套装，岭南工艺代表�?,
    price: 358,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 48,
    museumId: 12,
    name: "海上丝路帆船模型",
    description: "以海上丝绸之路为主题的帆船模型�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 49,
    museumId: 12,
    name: "潮州木雕摆件",
    description: "以潮州木雕为特色的精美摆件�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 50,
    museumId: 12,
    name: "粤博馆藏图录",
    description: "广东省博物馆馆藏精品图录�?,
    price: 298,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "图书",
  },

  // 13. 天津博物馆文�?  {
    id: 51,
    museumId: 13,
    name: "清代珐琅彩茶�?,
    description: "以清代珐琅彩为设计灵感的茶具套装�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 52,
    museumId: 13,
    name: "天津杨柳青年�?,
    description: "传统杨柳青年画复刻品，非遗文化精品�?,
    price: 88,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 53,
    museumId: 13,
    name: "玉壶春瓶模型",
    description: "以馆藏玉壶春瓶为原型的精致模型�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 14. 重庆中国三峡博物馆文�?  {
    id: 54,
    museumId: 14,
    name: "三峡风光丝巾",
    description: "以三峡风光为设计元素的真丝方巾�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 55,
    museumId: 14,
    name: "巴蜀青铜器书�?,
    description: "以巴蜀青铜器为设计灵感的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 56,
    museumId: 14,
    name: "重庆火锅文创套装",
    description: "以重庆火锅为灵感的趣味文创套装�?,
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "食品",
  },

  // 15. 山东博物馆文�?  {
    id: 57,
    museumId: 15,
    name: "龙山黑陶茶具",
    description: "以龙山黑陶为特色的茶具套装，蛋壳陶工艺�?,
    price: 398,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 58,
    museumId: 15,
    name: "孔子文化笔记�?,
    description: "以孔子文化为主题的精美笔记本�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 59,
    museumId: 15,
    name: "鲁王墓出土文物模�?,
    description: "以鲁王墓出土文物为原型的精致模型�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 60,
    museumId: 15,
    name: "山东非遗剪纸",
    description: "山东传统剪纸艺术品，非遗文化传承�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 16. 辽宁省博物馆文创
  {
    id: 61,
    museumId: 16,
    name: "红山玉龙摆件",
    description: "以红山文化玉猪龙为原型的摆件，中华龙图腾象征�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 62,
    museumId: 16,
    name: "辽代金银器饰�?,
    description: "以辽代金银器为设计灵感的精美饰品�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 63,
    museumId: 16,
    name: "清代宫廷服饰丝巾",
    description: "以清代宫廷服饰纹样为设计元素的真丝方巾�?,
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 17. 吉林省博物院文创
  {
    id: 64,
    museumId: 17,
    name: "高句丽壁画复�?,
    description: "以高句丽古墓壁画为原型的复刻品，世界文化遗产�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 65,
    museumId: 17,
    name: "满族服饰书签",
    description: "以满族传统服饰为设计灵感的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 66,
    museumId: 17,
    name: "长白山主题笔记本",
    description: "以长白山自然风光为主题的精美笔记本�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 18. 黑龙江省博物馆文�?  {
    id: 67,
    museumId: 18,
    name: "赫哲族鱼皮画",
    description: "赫哲族传统鱼皮画艺术品，非遗文化精品�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 68,
    museumId: 18,
    name: "鄂伦春族桦树皮盒",
    description: "鄂伦春族传统桦树皮工艺品，民族特色浓郁�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 69,
    museumId: 18,
    name: "冰雪主题丝巾",
    description: "以黑龙江冰雪风光为设计元素的真丝方巾�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 19. 福建博物院文�?  {
    id: 70,
    museumId: 19,
    name: "德化白瓷茶具",
    description: "以德化白瓷为特色的茶具套装，中国白瓷代表�?,
    price: 358,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 71,
    museumId: 19,
    name: "福建土楼模型",
    description: "以福建土楼为原型的精致模型，世界文化遗产�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 72,
    museumId: 19,
    name: "妈祖文化书签",
    description: "以妈祖文化为设计灵感的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 73,
    museumId: 19,
    name: "寿山石印�?,
    description: "福建寿山石印章，传统文房雅器�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 20. 安徽博物院文�?  {
    id: 74,
    museumId: 20,
    name: "徽墨套装",
    description: "传统徽墨套装，文房四宝之一，非遗精品�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 75,
    museumId: 20,
    name: "歙砚摆件",
    description: "安徽歙砚摆件，中国四大名砚之一�?,
    price: 358,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 76,
    museumId: 20,
    name: "徽派建筑模型",
    description: "以徽派建筑为原型的精致模型，粉墙黛瓦马头墙�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 77,
    museumId: 20,
    name: "宣纸笔记�?,
    description: "以宣纸为内页的精美笔记本，书画创作佳品�?,
    price: 88,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 21. 河北博物院文�?  {
    id: 78,
    museumId: 21,
    name: "长信宫灯模型",
    description: "以长信宫灯为原型的精致模型，中华第一灯�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 79,
    museumId: 21,
    name: "中山王墓出土文物模型",
    description: "以中山王墓出土文物为原型的精致模型�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 80,
    museumId: 21,
    name: "金缕玉衣模型",
    description: "以金缕玉衣为原型的展示模型，汉代丧葬文化代表�?,
    price: 398,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 22. 山西博物院文�?  {
    id: 81,
    museumId: 22,
    name: "晋侯鸟尊摆件",
    description: "以晋侯鸟尊为原型的青铜摆件，晋国青铜器代表�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 82,
    museumId: 22,
    name: "山西古建筑模�?,
    description: "以山西古建筑为原型的精致模型，古建博物馆缩影�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 83,
    museumId: 22,
    name: "平遥古城主题笔记�?,
    description: "以平遥古城为主题的精美笔记本�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 84,
    museumId: 22,
    name: "晋商文化书签",
    description: "以晋商文化为设计灵感的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 23. 江西省博物馆文创
  {
    id: 85,
    museumId: 23,
    name: "景德镇青花瓷茶具",
    description: "以景德镇青花瓷为特色的茶具套装，千年瓷都代表�?,
    price: 398,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 86,
    museumId: 23,
    name: "海昏侯墓出土文物模型",
    description: "以海昏侯墓出土文物为原型的精致模型�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 87,
    museumId: 23,
    name: "赣南客家围屋模型",
    description: "以赣南客家围屋为原型的精致模型�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 24. 广西壮族自治区博物馆文创
  {
    id: 88,
    museumId: 24,
    name: "铜鼓摆件",
    description: "以广西铜鼓为原型的摆件，壮族文化象征�?,
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 89,
    museumId: 24,
    name: "壮锦围巾",
    description: "广西壮锦围巾，壮族传统织锦工艺�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 90,
    museumId: 24,
    name: "桂林山水丝巾",
    description: "以桂林山水为设计元素的真丝方巾�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 25. 海南省博物馆文创
  {
    id: 91,
    museumId: 25,
    name: "黎锦手工艺品",
    description: "海南黎锦手工艺品，黎族传统纺织技艺�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 92,
    museumId: 25,
    name: "南海之花椰雕",
    description: "海南特色椰雕工艺品，热带风情浓郁�?,
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 93,
    museumId: 25,
    name: "海南黄花梨手�?,
    description: "海南黄花梨手串，珍贵木材饰品�?,
    price: 398,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 26. 贵州省博物馆文创
  {
    id: 94,
    museumId: 26,
    name: "苗族银饰",
    description: "贵州苗族传统银饰，民族工艺精品�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 95,
    museumId: 26,
    name: "蜡染围巾",
    description: "贵州蜡染围巾，传统印染工艺�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 96,
    museumId: 26,
    name: "侗族大歌主题笔记�?,
    description: "以侗族大歌为主题的精美笔记本，非遗文化传承�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 27. 云南省博物馆文创
  {
    id: 97,
    museumId: 27,
    name: "古滇国青铜器模型",
    description: "以古滇国青铜器为原型的精致模型，古滇文明见证�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 98,
    museumId: 27,
    name: "纳西东巴文书�?,
    description: "以纳西东巴文为设计元素的金属书签，活象形文字�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 99,
    museumId: 27,
    name: "云南普洱茶礼�?,
    description: "云南普洱茶礼盒，茶马古道文化代表�?,
    price: 358,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "食品",
  },
  {
    id: 100,
    museumId: 27,
    name: "白族扎染围巾",
    description: "大理白族扎染围巾，传统印染工艺�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 28. 西藏博物馆文�?  {
    id: 101,
    museumId: 28,
    name: "唐卡复刻�?,
    description: "西藏唐卡复刻品，藏传佛教艺术精品�?,
    price: 488,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 102,
    museumId: 28,
    name: "藏香礼盒",
    description: "西藏传统藏香礼盒，藏式香薰文化�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 103,
    museumId: 28,
    name: "藏族饰品",
    description: "藏族传统饰品，雪域高原风情�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 29. 甘肃省博物馆文创
  {
    id: 104,
    museumId: 29,
    name: "马踏飞燕摆件",
    description: "以马踏飞燕为原型的摆件，中国旅游标志�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 105,
    museumId: 29,
    name: "敦煌飞天丝巾",
    description: "以敦煌飞天为设计元素的真丝方巾�?,
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 106,
    museumId: 29,
    name: "丝绸之路主题笔记�?,
    description: "以丝绸之路为主题的精美笔记本�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 107,
    museumId: 29,
    name: "彩陶纹饰书签",
    description: "以甘肃彩陶纹饰为设计灵感的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 30. 青海省博物馆文创
  {
    id: 108,
    museumId: 30,
    name: "青海湖主题丝�?,
    description: "以青海湖风光为设计元素的真丝方巾�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 109,
    museumId: 30,
    name: "藏族唐卡书签",
    description: "以藏族唐卡为设计元素的金属书签�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 110,
    museumId: 30,
    name: "热贡艺术唐卡",
    description: "热贡艺术唐卡复刻品，国家级非遗�?,
    price: 388,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 31. 内蒙古博物院文创
  {
    id: 111,
    museumId: 31,
    name: "匈奴鹰顶金冠饰模�?,
    description: "以匈奴鹰顶金冠饰为原型的精致模型�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 112,
    museumId: 31,
    name: "蒙古族服饰饰�?,
    description: "蒙古族传统服饰饰品，草原文化风情�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 113,
    museumId: 31,
    name: "蒙古包模�?,
    description: "以蒙古包为原型的精致模型，草原游牧文化象征�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 114,
    museumId: 31,
    name: "马头琴模�?,
    description: "以马头琴为原型的精致模型，蒙古族传统乐器�?,
    price: 238,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },

  // 32. 宁夏博物馆文�?  {
    id: 115,
    museumId: 32,
    name: "西夏王陵模型",
    description: "以西夏王陵为原型的精致模型，神秘西夏王朝见证�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 116,
    museumId: 32,
    name: "贺兰山岩画书�?,
    description: "以贺兰山岩画为设计元素的金属书签�?,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 117,
    museumId: 32,
    name: "宁夏枸杞礼盒",
    description: "宁夏中宁枸杞礼盒，塞上江南特产�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "食品",
  },

  // 33. 新疆维吾尔自治区博物馆文�?  {
    id: 118,
    museumId: 33,
    name: "楼兰美女模型",
    description: "以楼兰美女为原型的展示模型，古楼兰文明见证�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 119,
    museumId: 33,
    name: "维吾尔族艾德莱斯�?,
    description: "维吾尔族传统艾德莱斯绸围巾，丝路风情�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 120,
    museumId: 33,
    name: "新疆地毯",
    description: "新疆传统手工地毯，西域工艺精品�?,
    price: 588,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 121,
    museumId: 33,
    name: "丝绸之路主题笔记�?,
    description: "以丝绸之路新疆段为主题的精美笔记本�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 34. 台北故宫博物院文�?  {
    id: 122,
    museumId: 34,
    name: "翠玉白菜摆件",
    description: "以翠玉白菜为原型的精致摆件，台北故宫镇馆之宝�?,
    price: 388,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 123,
    museumId: 34,
    name: "肉形石摆�?,
    description: "以肉形石为原型的精致摆件，天然奇石艺术�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 124,
    museumId: 34,
    name: "毛公鼎模�?,
    description: "以毛公鼎为原型的青铜模型，铭文最长青铜器�?,
    price: 328,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 125,
    museumId: 34,
    name: "快雪时晴帖复�?,
    description: "王羲之《快雪时晴帖》复刻品，书法艺术珍品�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 126,
    museumId: 34,
    name: "清明上河图丝�?,
    description: "以《清明上河图》为设计元素的真丝方巾�?,
    price: 288,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },

  // 35. 香港历史博物馆文�?  {
    id: 127,
    museumId: 35,
    name: "香港故事笔记�?,
    description: "以香港历史为主题的精美笔记本，香江岁月�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 128,
    museumId: 35,
    name: "维港风光丝巾",
    description: "以维多利亚港风光为设计元素的真丝方巾�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 129,
    museumId: 35,
    name: "港式茶餐厅文创套�?,
    description: "以港式茶餐厅文化为灵感的趣味文创套装�?,
    price: 128,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "食品",
  },

  // 36. 香港艺术馆文�?  {
    id: 130,
    museumId: 36,
    name: "岭南画派复刻�?,
    description: "岭南画派名家作品复刻品，近现代艺术精品�?,
    price: 268,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 131,
    museumId: 36,
    name: "香港当代艺术笔记�?,
    description: "以香港当代艺术为主题的精美笔记本�?,
    price: 78,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 132,
    museumId: 36,
    name: "水墨画书签套�?,
    description: "以水墨画为设计元素的金属书签套装�?,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },

  // 37. 澳门博物馆文�?  {
    id: 133,
    museumId: 37,
    name: "澳门历史城区模型",
    description: "以澳门历史城区为原型的精致模型，世界文化遗产�?,
    price: 198,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 134,
    museumId: 37,
    name: "大三巴牌坊模�?,
    description: "以大三巴牌坊为原型的精致模型，澳门地标�?,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "家居",
  },
  {
    id: 135,
    museumId: 37,
    name: "澳门葡挞文创套装",
    description: "以澳门葡挞为灵感的趣味文创套装�?,
    price: 88,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "食品",
  },

  // 38. 澳门艺术博物馆文�?  {
    id: 136,
    museumId: 38,
    name: "澳门艺术笔记�?,
    description: "以澳门艺术为主题的精美笔记本，中西文化交融�?,
    price: 68,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "文具",
  },
  {
    id: 137,
    museumId: 38,
    name: "澳门风光丝巾",
    description: "以澳门风光为设计元素的真丝方巾�?,
    price: 188,
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop",
    category: "饰品",
  },
  {
    id: 138,
    museumId: 38,
    name: "中西合璧艺术品复�?,
    description: "澳门特色中西合璧艺术品复刻品�?,
    price: 288,
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
