import type { ExhibitionCategory } from "@/types/museum";

// 展览分类数据
export const exhibitionCategories: ExhibitionCategory[] = [
  {
    id: 1,
    name: "历史文化",
    count: 12,
    icon: "🏛�?,
  },
  {
    id: 2,
    name: "艺术精品",
    count: 8,
    icon: "🎨",
  },
  {
    id: 3,
    name: "科技考古",
    count: 5,
    icon: "🔬",
  },
  {
    id: 4,
    name: "民俗风情",
    count: 7,
    icon: "🎭",
  },
];

// 静态展览数�?export const staticExhibitions = [
  {
    id: 1,
    title: "紫禁城建�?00年展",
    date: "2020�?�?2021�?�?,
    location: "故宫博物院午门展�?,
    description: "庆祝紫禁城建�?00周年，展示故宫的历史与文化�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Forbidden%20City%20600th%20anniversary%20exhibition%20ancient%20Chinese%20palace%20culture&image_size=square_hd",
    category: "历史文化",
    status: "热门",
  },
  {
    id: 2,
    title: "清代宫廷生活�?,
    date: "2021�?�?2021�?�?,
    location: "故宫博物院东六宫",
    description: "展示清代宫廷的日常生活、礼仪制度和文化艺术�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qing%20Dynasty%20imperial%20court%20life%20exhibition%20ancient%20Chinese%20royal%20culture&image_size=square_hd",
    category: "历史文化",
    status: "热门",
  },
  {
    id: 3,
    title: "中国古代陶瓷�?,
    date: "2021�?�?2021�?0�?,
    location: "故宫博物院陶瓷馆",
    description: "展示中国古代陶瓷的发展历程和艺术成就�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20ceramics%20exhibition%20traditional%20pottery%20art&image_size=square_hd",
    category: "艺术精品",
    status: "热门",
  },
  {
    id: 4,
    title: "丝绸之路文物�?,
    date: "2024�?�?2024�?�?,
    location: "博物馆东�?,
    description:
      "展示丝绸之路沿线的文物精品，再现古代东西方文化交流的辉煌历史�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Silk%20Road%20cultural%20relics%20exhibition%20ancient%20trade%20route%20artifacts&image_size=square_hd",
    category: "历史文化",
    status: "最�?,
  },
  {
    id: 5,
    title: "唐宋书画�?,
    date: "2024�?�?2024�?�?,
    location: "博物馆西�?,
    description: "展出唐宋时期的书画精品，展现中国古代书画艺术的巅峰成就�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tang%20and%20Song%20Dynasty%20calligraphy%20and%20painting%20exhibition%20ancient%20Chinese%20art&image_size=square_hd",
    category: "艺术精品",
    status: "最�?,
  },
  {
    id: 6,
    title: "明清家具�?,
    date: "2023�?1�?2024�?�?,
    location: "博物馆中�?,
    description: "展示明清时期的家具精品，展现中国传统家具的工艺和美学�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20furniture%20exhibition%20Ming%20Qing%20dynasty%20wooden%20furniture&image_size=square_hd",
    category: "艺术精品",
    status: "即将结束",
  },
  {
    id: 7,
    title: "青铜器特�?,
    date: "2023�?2�?2024�?�?,
    location: "博物馆东�?,
    description: "展示中国古代青铜器的精品，展现青铜时代的文明成就�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20bronze%20vessels%20exhibition%20ritual%20objects&image_size=square_hd",
    category: "历史文化",
    status: "即将结束",
  },
  {
    id: 8,
    title: "古埃及文明展",
    date: "2024�?�?2024�?�?,
    location: "博物馆东�?,
    description: "展示古埃及文明的珍贵文物，包括木乃伊、金字塔模型等�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Egyptian%20civilization%20exhibition%20mummies%20pyramids%20artifacts&image_size=square_hd",
    category: "科技考古",
    status: "筹备�?,
  },
  {
    id: 9,
    title: "文艺复兴艺术�?,
    date: "2024�?�?2024�?�?,
    location: "博物馆西�?,
    description:
      "展出文艺复兴时期的艺术精品，包括达芬奇、米开朗基罗等大师的作品�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Renaissance%20art%20exhibition%20Da%20Vinci%20Michelangelo%20masterpieces&image_size=square_hd",
    category: "艺术精品",
    status: "筹备�?,
  },
  {
    id: 10,
    title: "中国古代服饰�?,
    date: "2023�?�?2023�?�?,
    location: "博物馆中�?,
    description: "展示中国古代各个朝代的服饰精品，展现中国传统服饰的演变历程�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20costumes%20traditional%20clothing%20exhibition&image_size=square_hd",
    category: "历史文化",
    status: "已结�?,
  },
  {
    id: 11,
    title: "丝绸之路�?,
    date: "2022�?�?2022�?0�?,
    location: "博物馆东�?,
    description:
      "展示丝绸之路沿线的文物精品，再现古代东西方文化交流的辉煌历史�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Silk%20Road%20exhibition%20ancient%20trade%20route%20cultural%20exchange&image_size=square_hd",
    category: "历史文化",
    status: "已结�?,
  },
  {
    id: 12,
    title: "清代宫廷文物�?,
    date: "2021�?1�?2022�?�?,
    location: "博物馆西�?,
    description: "展示清代宫廷的珍贵文物，包括御用器物、书画、服饰等�?,
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qing%20Dynasty%20imperial%20court%20artifacts%20royal%20treasures&image_size=square_hd",
    category: "历史文化",
    status: "已结�?,
  },
];
