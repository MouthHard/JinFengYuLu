import type { ExhibitionHall } from "@/types/museum";

// 专馆数据
export const exhibitionHalls: ExhibitionHall[] = [
  {
    id: "digital",
    name: "数字�?,
    icon: "💻",
    category: "数字科技",
    coverImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    introduction:
      "数字馆是博物馆数字化转型的核心展示区，运用虚拟现实、增强现实、全息投影等前沿技术，将珍贵文物以数字化形式呈现。观众可以通过沉浸式体验，穿越时空，感受历史与科技的完美融合�?,
    stats: { artifacts: 500, exhibitions: 12, visitors: 85 },
    location: "博物馆东�?数字展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1.5-2小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "数字复原·清明上河�?,
        period: "北宋",
        description: "通过数字技术复原的动态清明上河图，展现汴京繁华盛�?,
        image:
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop",
      },
      {
        name: "VR敦煌石窟",
        period: "北魏-�?,
        description: "虚拟现实技术还原敦煌莫高窟，身临其境感受壁画艺�?,
        image:
          "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&h=300&fit=crop",
      },
      {
        name: "全息青铜�?,
        period: "商周",
        description: "全息投影展示青铜器铸造工艺，360度观赏细�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "AR陶瓷互动",
        period: "唐宋元明�?,
        description: 'AR技术让观众亲手"修复"古代陶瓷',
        image:
          "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "数字故宫·穿越时空的宫�?,
        date: "2024.01.15 - 2024.12.31",
        description: "通过VR技术，让观众身临其境游览紫禁城，感受皇家气�?,
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=200&fit=crop",
        tags: ["VR体验", "常设展览"],
      },
      {
        title: "数字复原·流失海外文物",
        date: "2024.03.01 - 2024.06.30",
        description: '数字化复原流失海外的珍贵文物，让国宝"回家"',
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=300&h=200&fit=crop",
        tags: ["数字复原", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "数字文物保护讲座",
        desc: "了解最新数字化保护技�?,
        type: "讲座",
      },
      {
        icon: "🎮",
        title: "文物修复体验�?,
        desc: "亲手体验数字化文物修�?,
        type: "活动",
      },
      {
        icon: "📖",
        title: "《数字博物馆�?,
        desc: "探索博物馆数字化发展之路",
        type: "图书",
      },
    ],
  },
  {
    id: "ancient",
    name: "古建�?,
    icon: "🏯",
    category: "建筑艺术",
    coverImage:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=500&fit=crop",
    introduction:
      "古建馆集中展示中国古代建筑的精华，从宫殿、园林到寺庙、民居，全方位呈现中国传统建筑艺术的魅力。通过建筑模型、构件展示和多媒体互动，让观众深入了解中国古代建筑的营造技艺�?,
    stats: { artifacts: 320, exhibitions: 8, visitors: 120 },
    location: "博物馆西�?古建展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "2-3小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "太和殿模�?,
        period: "清代",
        description: "按照1:50比例制作的太和殿模型，展现皇家建筑规�?,
        image:
          "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400&h=300&fit=crop",
      },
      {
        name: "应县木塔构件",
        period: "辽代",
        description: "世界现存最高木塔的结构构件展示",
        image:
          "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400&h=300&fit=crop",
      },
      {
        name: "苏州园林模型",
        period: "明清",
        description: "精致的苏州园林微缩模型，展现江南园林之美",
        image:
          "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      },
      {
        name: "斗拱结构",
        period: "历代",
        description: "展示不同朝代斗拱的演变，解读中国建筑密码",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "营造法式·中国古代建筑技�?,
        date: "2024.02.01 - 2024.08.31",
        description: "深入解读《营造法式》，揭秘古代建筑工艺",
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=200&fit=crop",
        tags: ["建筑技�?, "常设展览"],
      },
      {
        title: "宫殿建筑艺术�?,
        date: "2024.05.01 - 2024.10.31",
        description: "聚焦中国宫殿建筑，从秦汉到明清的演变历程",
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=200&fit=crop",
        tags: ["宫殿建筑", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "古建营造技艺讲�?,
        desc: "非遗传承人现场演�?,
        type: "讲座",
      },
      {
        icon: "🎨",
        title: "斗拱搭建工作�?,
        desc: "亲手搭建古建筑斗�?,
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国古建筑史�?,
        desc: "系统了解中国古建筑发�?,
        type: "图书",
      },
    ],
  },
  {
    id: "calligraphy",
    name: "书画�?,
    icon: "🎨",
    category: "书画艺术",
    coverImage:
      "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
    introduction:
      "书画馆珍藏历代书画精品，涵盖书法、绘画两大门类。从晋唐风韵到宋元意境，从明清流派到近现代创新，全面展现中国书画艺术的发展脉络和独特魅力�?,
    stats: { artifacts: 850, exhibitions: 15, visitors: 200 },
    location: "博物馆中�?书画展厅",
    openTime: "周二至周�?9:00-17:00（轮换展出）",
    duration: "1.5-2小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "兰亭序摹�?,
        period: "唐代",
        description: '冯承素摹兰亭序，被誉�?天下第一行书"',
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      },
      {
        name: "千里江山�?,
        period: "北宋",
        description: "王希孟传世名作，青绿山水巅峰之作",
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
      },
      {
        name: "富春山居�?,
        period: "元代",
        description: "黄公望代表作，中国山水画之瑰�?,
        image:
          "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=400&h=300&fit=crop",
      },
      {
        name: "清明上河�?,
        period: "北宋",
        description: "张择端名作，描绘汴京繁华市井生活",
        image:
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "晋唐风韵·书法名迹�?,
        date: "2024.01.01 - 2024.04.30",
        description: "汇集晋唐书法名作，领略书法艺术的巅峰",
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        tags: ["书法", "轮换展出"],
      },
      {
        title: "宋元绘画精品�?,
        date: "2024.05.01 - 2024.08.31",
        description: "展示宋元时期绘画精品，感受文人画意境",
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=200&fit=crop",
        tags: ["绘画", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "书画鉴赏入门",
        desc: "专家带你读懂书画之美",
        type: "讲座",
      },
      {
        icon: "✍️",
        title: "书法体验�?,
        desc: "零基础学习传统书法",
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国书画史�?,
        desc: "系统了解书画艺术发展",
        type: "图书",
      },
    ],
  },
  {
    id: "ceramic",
    name: "陶瓷�?,
    icon: "🏺",
    category: "陶瓷艺术",
    coverImage:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
    introduction:
      '陶瓷馆系统展示中国陶瓷艺术的发展历程，从原始陶器到精美瓷器，从单色釉到五彩纷呈，全面呈现中国作为"瓷国"的辉煌成就�?,
    stats: { artifacts: 1200, exhibitions: 10, visitors: 180 },
    location: "博物馆南�?陶瓷展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1.5-2小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "汝窑天青釉洗",
        period: "北宋",
        description: "汝窑传世珍品，天青色釉温润如�?,
        image:
          "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
      },
      {
        name: "元青花鬼谷子下山图罐",
        period: "元代",
        description: "元青花代表作，描绘鬼谷子下山故事",
        image:
          "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
      },
      {
        name: "明成化斗彩鸡缸杯",
        period: "明代",
        description: "成化斗彩精品，色彩艳丽，工艺精湛",
        image:
          "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
      },
      {
        name: "清雍正粉彩过枝桃纹盘",
        period: "清代",
        description: "雍正粉彩代表作，画面生动，色彩雅�?,
        image:
          "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "宋瓷之美·五大名窑�?,
        date: "2024.01.15 - 2024.06.30",
        description: "集中展示汝、官、哥、钧、定五大名窑精品",
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
        tags: ["宋瓷", "名窑"],
      },
      {
        title: "明清彩瓷艺术�?,
        date: "2024.07.01 - 2024.12.31",
        description: "展示明清时期彩瓷艺术的发展与成就",
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=200&fit=crop",
        tags: ["彩瓷", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "陶瓷鉴定入门",
        desc: "学习陶瓷鉴赏与鉴定知�?,
        type: "讲座",
      },
      {
        icon: "🏺",
        title: "陶艺制作体验",
        desc: "亲手制作属于自己的陶�?,
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国陶瓷史�?,
        desc: "全面了解中国陶瓷发展历程",
        type: "图书",
      },
    ],
  },
  {
    id: "sculpture",
    name: "雕塑�?,
    icon: "🗿",
    category: "雕塑艺术",
    coverImage:
      "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
    introduction:
      "雕塑馆收藏了中国古代雕塑艺术的精品，从佛教造像到世俗雕塑，从陵墓石刻到建筑装饰，展现了中国雕塑艺术的独特魅力和深厚底蕴�?,
    stats: { artifacts: 680, exhibitions: 6, visitors: 95 },
    location: "博物馆北�?雕塑展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1-1.5小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "卢舍那大�?,
        period: "唐代",
        description: "龙门石窟奉先寺主佛，唐代雕塑艺术巅峰",
        image:
          "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&h=300&fit=crop",
      },
      {
        name: "击鼓说唱�?,
        period: "东汉",
        description: "生动形象的陶俑，展现汉代民间艺术",
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "昭陵六骏",
        period: "唐代",
        description: "唐太宗李世民陵墓石刻，展现唐代雕刻技�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "云冈石窟菩萨�?,
        period: "北魏",
        description: "云冈石窟早期造像，融合中西艺术风�?,
        image:
          "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "佛教造像艺术�?,
        date: "2024.01.01 - 2024.12.31",
        description: "系统展示中国佛教造像艺术的发展演�?,
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=300&h=200&fit=crop",
        tags: ["佛教艺术", "常设展览"],
      },
      {
        title: "汉唐陶俑精品�?,
        date: "2024.04.01 - 2024.09.30",
        description: "展示汉唐时期陶俑艺术的独特魅�?,
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
        tags: ["陶俑", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "佛教艺术讲座",
        desc: "深入了解佛教造像艺术",
        type: "讲座",
      },
      {
        icon: "🎨",
        title: "泥塑体验�?,
        desc: "学习传统泥塑技�?,
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国雕塑史�?,
        desc: "系统了解中国雕塑艺术",
        type: "图书",
      },
    ],
  },
  {
    id: "bronze",
    name: "青铜器馆",
    icon: "⚱️",
    category: "青铜文明",
    coverImage:
      "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
    introduction:
      "青铜器馆展示了中国古代青铜文明的辉煌成就，从礼器、乐器到兵器、工具，全面呈现青铜器在中国古代社会中的重要地位和独特价值�?,
    stats: { artifacts: 950, exhibitions: 8, visitors: 150 },
    location: "博物馆东�?青铜展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1.5-2小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "后母戊鼎",
        period: "商代",
        description: "中国现存最大的青铜礼器，重�?32.84公斤",
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "四羊方尊",
        period: "商代",
        description: "商代青铜器精品，造型独特，工艺精�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "毛公�?,
        period: "西周",
        description: "西周晚期青铜器，内壁铸有497字铭�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "曾侯乙编�?,
        period: "战国",
        description: "战国早期大型礼乐重器，共65�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "青铜时代·夏商周文明展",
        date: "2024.01.01 - 2024.12.31",
        description: "系统展示夏商周三代青铜文明的发展历程",
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
        tags: ["青铜时代", "常设展览"],
      },
      {
        title: "青铜礼器与古代礼�?,
        date: "2024.06.01 - 2024.11.30",
        description: "深入解读青铜礼器与古代礼制文�?,
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
        tags: ["礼器", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "青铜器鉴赏讲�?,
        desc: "学习青铜器鉴定与欣赏",
        type: "讲座",
      },
      {
        icon: "⚒️",
        title: "青铜器铸造体�?,
        desc: "了解古代青铜铸造工�?,
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国青铜器全集�?,
        desc: "全面了解中国青铜器艺�?,
        type: "图书",
      },
    ],
  },
  {
    id: "clock",
    name: "钟表�?,
    icon: "🕰�?,
    category: "钟表艺术",
    coverImage:
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=500&fit=crop",
    introduction:
      "钟表馆收藏了中西方的珍贵钟表，特别是清宫收藏的西洋钟表，展现了古代计时技术的发展和中西方文化交流的成果�?,
    stats: { artifacts: 280, exhibitions: 4, visitors: 75 },
    location: "博物馆西�?钟表展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "铜壶滴漏",
        period: "元代",
        description: "中国古代计时器，利用水滴原理计时",
        image:
          "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
      },
      {
        name: "硬木雕花楼式时刻更钟",
        period: "清代",
        description: "清宫旧藏，可报时、报刻、报�?,
        image:
          "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
      },
      {
        name: "铜镀金写字人�?,
        period: "清代",
        description: "英国制造，机械人可书写汉字",
        image:
          "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
      },
      {
        name: "日晷",
        period: "明代",
        description: "利用太阳投影计时的古代仪�?,
        image:
          "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "清宫钟表精品�?,
        date: "2024.01.01 - 2024.12.31",
        description: "展示清宫收藏的珍贵西洋钟�?,
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=300&h=200&fit=crop",
        tags: ["清宫钟表", "常设展览"],
      },
      {
        title: "古代计时器演变展",
        date: "2024.05.01 - 2024.10.31",
        description: "展示从日晷到机械钟的计时技术发�?,
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=300&h=200&fit=crop",
        tags: ["计时技�?, "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "钟表机械原理讲座",
        desc: "了解钟表内部机械结构",
        type: "讲座",
      },
      {
        icon: "⚙️",
        title: "钟表拆装体验",
        desc: "亲手拆装机械钟表",
        type: "活动",
      },
      {
        icon: "📖",
        title: "《清宫钟表�?,
        desc: "深入了解清宫钟表收藏",
        type: "图书",
      },
    ],
  },
  {
    id: "treasure",
    name: "珍宝�?,
    icon: "💎",
    category: "宫廷珍宝",
    coverImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
    introduction:
      "珍宝馆展示了宫廷收藏的珍贵文物，包括金银器、玉器、珠宝、象牙雕刻等，体现了中国古代工艺的最高水平和皇家的奢华生活�?,
    stats: { artifacts: 520, exhibitions: 6, visitors: 220 },
    location: "博物馆中�?珍宝展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1-1.5小时",
    ticket: "需单独预约",
    artifacts: [
      {
        name: "金缕玉衣",
        period: "西汉",
        description: "汉代皇帝和高级贵族的葬服，用金丝连接玉片",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      },
      {
        name: "翠玉白菜",
        period: "清代",
        description: "利用翡翠天然色泽雕刻的白菜，栩栩如生",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      },
      {
        name: "金瓯永固�?,
        period: "清代",
        description: "清代皇帝元旦开笔仪式用金杯",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      },
      {
        name: "东坡肉形�?,
        period: "清代",
        description: "天然玛瑙石，形似红烧肉，巧夺天工",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "皇家珍宝·宫廷文物�?,
        date: "2024.01.01 - 2024.12.31",
        description: "展示宫廷收藏的珍贵文物精�?,
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
        tags: ["宫廷珍宝", "常设展览"],
      },
      {
        title: "玉器之美·中华玉文化展",
        date: "2024.04.01 - 2024.09.30",
        description: "展示中国玉器艺术的发展历�?,
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
        tags: ["玉器", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "珠宝鉴赏讲座",
        desc: "学习珠宝玉石鉴定知识",
        type: "讲座",
      },
      {
        icon: "💍",
        title: "首饰制作体验",
        desc: "亲手制作传统首饰",
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国玉器�?,
        desc: "全面了解中国玉文�?,
        type: "图书",
      },
    ],
  },
  {
    id: "opera",
    name: "戏曲�?,
    icon: "🎭",
    category: "戏曲艺术",
    coverImage:
      "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=800&h=500&fit=crop",
    introduction:
      "戏曲馆展示了中国传统戏曲艺术的服饰、道具、乐器、脸谱等，通过实物展示和多媒体互动，让观众深入了解戏曲艺术的魅力�?,
    stats: { artifacts: 450, exhibitions: 5, visitors: 88 },
    location: "博物馆南�?戏曲展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1-1.5小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "京剧脸谱",
        period: "清代-现代",
        description: "各种角色的脸谱，展现戏曲化妆艺术",
        image:
          "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=400&h=300&fit=crop",
      },
      {
        name: "蟒袍",
        period: "清代",
        description: "戏曲中帝王将相的礼服，绣工精�?,
        image:
          "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=400&h=300&fit=crop",
      },
      {
        name: "月琴",
        period: "清代",
        description: "戏曲伴奏乐器，音色清脆悦�?,
        image:
          "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=400&h=300&fit=crop",
      },
      {
        name: "凤冠",
        period: "清代",
        description: "戏曲中皇后、贵妃的头饰，华丽精�?,
        image:
          "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "京剧艺术大展",
        date: "2024.01.01 - 2024.12.31",
        description: "全面展示京剧艺术的服饰、道具、乐器等",
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=300&h=200&fit=crop",
        tags: ["京剧", "常设展览"],
      },
      {
        title: "地方戏曲精品�?,
        date: "2024.06.01 - 2024.11.30",
        description: "展示昆曲、越剧、豫剧等地方戏曲艺术",
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1514306191717-45224512c2d0?w=300&h=200&fit=crop",
        tags: ["地方戏曲", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "京剧艺术讲座",
        desc: "深入了解京剧艺术魅力",
        type: "讲座",
      },
      {
        icon: "🎭",
        title: "脸谱绘制体验",
        desc: "亲手绘制戏曲脸谱",
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国戏曲史�?,
        desc: "系统了解中国戏曲发展",
        type: "图书",
      },
    ],
  },
  {
    id: "stone",
    name: "石鼓�?,
    icon: "🪨",
    category: "石刻艺术",
    coverImage:
      "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
    introduction:
      '石鼓馆收藏了古代石鼓、碑刻等石刻文物，是中国文字和雕刻艺术的重要展示窗口。石鼓文被誉�?石刻之祖"，具有极高的历史和艺术价值�?,
    stats: { artifacts: 180, exhibitions: 3, visitors: 45 },
    location: "博物馆北�?石鼓展厅",
    openTime: "周二至周�?9:00-17:00",
    duration: "1小时",
    ticket: "包含在通票�?,
    artifacts: [
      {
        name: "石鼓�?,
        period: "先秦",
        description: '中国最早的石刻文字，被誉为"石刻之祖"',
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "熹平石经",
        period: "东汉",
        description: "东汉熹平年间刻制的儒家经典石�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "昭陵六骏石刻",
        period: "唐代",
        description: "唐太宗陵墓前的六匹战马浮�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
      {
        name: "龙门二十�?,
        period: "北魏",
        description: "龙门石窟中的二十方精品造像题记",
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
      },
    ],
    exhibitions: [
      {
        title: "石鼓文与先秦文字",
        date: "2024.01.01 - 2024.12.31",
        description: "深入解读石鼓文的历史价值和艺术特色",
        status: "ongoing",
        statusText: "正在展出",
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
        tags: ["石鼓�?, "常设展览"],
      },
      {
        title: "中国碑刻艺术�?,
        date: "2024.07.01 - 2024.12.31",
        description: "展示历代名碑名刻，领略书法石刻之�?,
        status: "upcoming",
        statusText: "即将开�?,
        image:
          "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
        tags: ["碑刻", "特别展览"],
      },
    ],
    recommendations: [
      {
        icon: "📚",
        title: "碑刻鉴赏讲座",
        desc: "学习碑刻鉴赏与拓片制�?,
        type: "讲座",
      },
      {
        icon: "🖌�?,
        title: "拓片制作体验",
        desc: "亲手制作碑刻拓片",
        type: "活动",
      },
      {
        icon: "📖",
        title: "《中国石刻艺术�?,
        desc: "全面了解中国石刻艺术",
        type: "图书",
      },
    ],
  },
];
