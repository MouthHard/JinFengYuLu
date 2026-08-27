import type { ExhibitionHall } from "@/types/museum";

// 博物馆专馆数据映�?// 每个博物馆可以有1-5个专�?export const museumExhibitionHalls: Record<number, ExhibitionHall[]> = {
  // 1. 故宫博物�?- 5个专�?  1: [
    {
      id: "palace-clock",
      name: "钟表�?,
      icon: "🕰�?,
      category: "宫廷钟表",
      coverImage:
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=500&fit=crop",
      introduction:
        "钟表馆收藏了清宫旧藏的各类钟�?00余件，包括中国自制钟表和英国、法国、瑞士等国制造的精美钟表，展现了18世纪中西方钟表艺术的最高水平�?,
      stats: { artifacts: 200, exhibitions: 2, visitors: 85 },
      location: "奉先�?,
      openTime: "周二至周�?8:30-17:00",
      duration: "1小时",
      ticket: "需单独购票",
      artifacts: [
        {
          name: "铜镀金写字人�?,
          period: "清代",
          description: '英国制造，机械人可书写"八方向化九土来王"八字',
          image:
            "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "清宫钟表精品�?,
          date: "常设展览",
          description: "展示清宫收藏的中外钟表精�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=300&h=200&fit=crop",
          tags: ["清宫珍藏", "钟表艺术"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "钟表机械原理讲座",
          desc: "了解古代钟表机械原理",
          type: "讲座",
        },
      ],
    },
    {
      id: "palace-treasure",
      name: "珍宝�?,
      icon: "💎",
      category: "宫廷珍宝",
      coverImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
      introduction:
        "珍宝馆展出故宫博物院收藏的各类珍贵文物，包括金银器、玉器、珠宝、珐琅器等，体现了清代宫廷生活的奢华与精致�?,
      stats: { artifacts: 400, exhibitions: 3, visitors: 120 },
      location: "皇极殿、宁寿宫",
      openTime: "周二至周�?8:30-17:00",
      duration: "1.5小时",
      ticket: "需单独购票",
      artifacts: [
        {
          name: "金瓯永固�?,
          period: "清代",
          description: "乾隆皇帝元旦开笔仪式专用金�?,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "宫廷珍宝�?,
          date: "常设展览",
          description: "展示清代宫廷珍贵文物",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
          tags: ["宫廷珍藏", "珍宝"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "宫廷珍宝鉴赏",
          desc: "专家讲解宫廷珍宝",
          type: "讲座",
        },
      ],
    },
    {
      id: "palace-painting",
      name: "书画�?,
      icon: "🎨",
      category: "书画艺术",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction:
        "故宫博物院书画收藏丰富，包括晋唐宋元明清各代名家作品，是中国古代书画艺术的重要宝库�?,
      stats: { artifacts: 1500, exhibitions: 8, visitors: 200 },
      location: "武英�?,
      openTime: "周二至周�?8:30-17:00",
      duration: "1.5小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "清明上河�?,
          period: "北宋",
          description: "张择端绘，描绘汴京繁华景�?,
          image:
            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "故宫藏画精品�?,
          date: "2024.03.15 - 2024.06.15",
          description: "展示故宫珍藏绘画精品",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=200&fit=crop",
          tags: ["书画", "故宫珍藏"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "书画鉴赏讲座",
          desc: "专家讲解书画艺术",
          type: "讲座",
        },
      ],
    },
    {
      id: "palace-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction:
        "故宫陶瓷馆藏有中国历代陶瓷精品，从原始陶器到明清瓷器，全面展现中国陶瓷艺术的发展历程�?,
      stats: { artifacts: 3500, exhibitions: 5, visitors: 180 },
      location: "延禧�?,
      openTime: "周二至周�?8:30-17:00",
      duration: "1.5小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "各色釉大�?,
          period: "清代",
          description: "乾隆年间烧制，集17种釉彩于一�?,
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "明清御窑瓷器�?,
          date: "常设展览",
          description: "展示明清御窑瓷器精品",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["瓷器", "御窑"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "陶瓷鉴赏讲座",
          desc: "学习陶瓷鉴定知识",
          type: "讲座",
        },
      ],
    },
    {
      id: "palace-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "故宫青铜器馆藏有商周至汉代青铜器精品，展现中国古代青铜文明的辉煌成就�?,
      stats: { artifacts: 800, exhibitions: 3, visitors: 150 },
      location: "承乾�?,
      openTime: "周二至周�?8:30-17:00",
      duration: "1小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "亚丑�?,
          period: "商代",
          description: "商代青铜钺，造型独特",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "商周青铜器精品展",
          date: "常设展览",
          description: "展示商周青铜器精�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "商周"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
  ],

  // 2. 中国科学技术馆 - 3个专�?  2: [
    {
      id: "tech-space",
      name: "航天�?,
      icon: "🚀",
      category: "航天科技",
      coverImage:
        "https://images.unsplash.com/photo-1446776877080-d3615c8e0ed8?w=800&h=500&fit=crop",
      introduction:
        "航天馆展示中国航天事业的发展历程，包括火箭、卫星、载人航天等实物和模型，让观众了解中国航天的辉煌成就�?,
      stats: { artifacts: 150, exhibitions: 4, visitors: 200 },
      location: "主展厅二�?,
      openTime: "周二至周�?9:30-17:00",
      duration: "1.5小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "长征系列火箭模型",
          period: "现代",
          description: "展示长征系列运载火箭的发�?,
          image:
            "https://images.unsplash.com/photo-1446776877080-d3615c8e0ed8?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "中国航天成就�?,
          date: "常设展览",
          description: "展示中国航天事业发展历程",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1446776877080-d3615c8e0ed8?w=300&h=200&fit=crop",
          tags: ["航天", "科技"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "航天科普讲座",
          desc: "了解航天知识",
          type: "讲座",
        },
      ],
    },
    {
      id: "tech-life",
      name: "生命科学�?,
      icon: "🧬",
      category: "生命科学",
      coverImage:
        "https://images.unsplash.com/photo-1530026187047-4b66e0c3a899?w=800&h=500&fit=crop",
      introduction:
        "生命科学馆展示生命的奥秘，从基因到生态系统，让观众了解生命的起源、进化和多样性�?,
      stats: { artifacts: 200, exhibitions: 5, visitors: 180 },
      location: "主展厅三�?,
      openTime: "周二至周�?9:30-17:00",
      duration: "1.5小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "DNA双螺旋模�?,
          period: "现代",
          description: "展示DNA分子结构",
          image:
            "https://images.unsplash.com/photo-1530026187047-4b66e0c3a899?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "生命奥秘探索�?,
          date: "常设展览",
          description: "探索生命的奥�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1530026187047-4b66e0c3a899?w=300&h=200&fit=crop",
          tags: ["生命科学", "生物"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "基因科学讲座",
          desc: "了解基因技�?,
          type: "讲座",
        },
      ],
    },
    {
      id: "tech-robot",
      name: "机器人馆",
      icon: "🤖",
      category: "人工智能",
      coverImage:
        "https://images.unsplash.com/photo-1485827404703-4b8acab8a391?w=800&h=500&fit=crop",
      introduction:
        "机器人馆展示人工智能和机器人技术的发展，包括工业机器人、服务机器人、特种机器人等�?,
      stats: { artifacts: 80, exhibitions: 3, visitors: 220 },
      location: "主展厅一�?,
      openTime: "周二至周�?9:30-17:00",
      duration: "1小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "工业机械�?,
          period: "现代",
          description: "展示工业机器人技�?,
          image:
            "https://images.unsplash.com/photo-1485827404703-4b8acab8a391?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "人工智能与机器人�?,
          date: "常设展览",
          description: "展示AI和机器人技�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1485827404703-4b8acab8a391?w=300&h=200&fit=crop",
          tags: ["人工智能", "机器�?],
        },
      ],
      recommendations: [
        { icon: "📚", title: "AI科普讲座", desc: "了解人工智能", type: "讲座" },
      ],
    },
  ],

  // 3. 上海博物�?- 4个专�?  3: [
    {
      id: "shanghai-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "上海博物馆青铜器馆藏有商周青铜器精品，以造型优美、纹饰精美著称，是中国青铜器收藏的重要机构�?,
      stats: { artifacts: 700, exhibitions: 4, visitors: 180 },
      location: "一楼展�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "大克�?,
          period: "西周",
          description: "西周晚期青铜重器，铭�?90�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "吉金铸华——青铜器精品�?,
          date: "常设展览",
          description: "展示馆藏青铜器精�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "商周"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴赏讲�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
    {
      id: "shanghai-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction:
        "上海博物馆陶瓷馆藏有历代陶瓷精品，从原始陶器到明清瓷器，系统展现中国陶瓷艺术的发展脉络�?,
      stats: { artifacts: 500, exhibitions: 3, visitors: 160 },
      location: "二楼展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "汝窑�?,
          period: "北宋",
          description: "汝窑天青釉精�?,
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "瓷韵——中国陶瓷艺术展",
          date: "常设展览",
          description: "展示中国陶瓷艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["陶瓷", "瓷器"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "陶瓷鉴赏讲座",
          desc: "学习陶瓷知识",
          type: "讲座",
        },
      ],
    },
    {
      id: "shanghai-painting",
      name: "书画�?,
      icon: "🎨",
      category: "书画艺术",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction:
        "上海博物馆书画馆藏有晋唐宋元明清各代书画精品，是中国书画艺术的重要收藏机构�?,
      stats: { artifacts: 1200, exhibitions: 6, visitors: 200 },
      location: "三楼展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "高逸图",
          period: "唐代",
          description: "孙位绘，描绘竹林七贤",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "翰墨荟萃——书画精品展",
          date: "2024.01.15 - 2024.06.15",
          description: "展示馆藏书画精品",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
          tags: ["书画", "艺术"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "书画鉴赏讲座",
          desc: "学习书画鉴赏",
          type: "讲座",
        },
      ],
    },
    {
      id: "shanghai-jade",
      name: "玉器�?,
      icon: "💎",
      category: "玉器艺术",
      coverImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
      introduction:
        "上海博物馆玉器馆藏有历代玉器精品，展现中国玉文化的深厚底蕴�?,
      stats: { artifacts: 300, exhibitions: 2, visitors: 120 },
      location: "四楼展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "神人兽面纹玉�?,
          period: "良渚文化",
          description: "良渚文化玉器精品",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "玉润中华——玉器精品展",
          date: "常设展览",
          description: "展示中国玉器艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
          tags: ["玉器", "玉文�?],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "玉器鉴赏讲座",
          desc: "学习玉器知识",
          type: "讲座",
        },
      ],
    },
  ],

  // 4. 秦始皇兵马俑博物�?- 3个专�?  4: [
    {
      id: "terracotta-pit1",
      name: "一号坑展厅",
      icon: "🏛�?,
      category: "兵马俑坑",
      coverImage:
        "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=500&fit=crop",
      introduction:
        "一号坑是兵马俑群中最大的坑，面积�?4000平方米，出土兵马�?000余件，是秦始皇陵军阵的主体�?,
      stats: { artifacts: 6000, exhibitions: 1, visitors: 300 },
      location: "主展�?,
      openTime: "全年开�?8:30-18:00",
      duration: "1.5小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "将军�?,
          period: "秦代",
          description: "秦军高级将领形象",
          image:
            "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "秦始皇兵马俑常设�?,
          date: "常设展览",
          description: "展示秦始皇帝陵兵马俑",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=300&h=200&fit=crop",
          tags: ["兵马�?, "秦代"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "秦史讲座", desc: "了解秦代历史", type: "讲座" },
      ],
    },
    {
      id: "terracotta-pit2",
      name: "二号坑展�?,
      icon: "🏛�?,
      category: "兵马俑坑",
      coverImage:
        "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=500&fit=crop",
      introduction:
        "二号坑面积约6000平方米，是秦军阵的精华所在，出土骑兵、车兵、步兵等不同兵种�?,
      stats: { artifacts: 1400, exhibitions: 1, visitors: 200 },
      location: "二号坑展�?,
      openTime: "全年开�?8:30-18:00",
      duration: "1小时",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "骑兵方阵",
          period: "秦代",
          description: "秦军骑兵部队",
          image:
            "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "二号坑发掘现�?,
          date: "常设展览",
          description: "展示二号坑发掘成�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=300&h=200&fit=crop",
          tags: ["兵马�?, "考古"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "考古知识讲座",
          desc: "了解考古发掘",
          type: "讲座",
        },
      ],
    },
    {
      id: "terracotta-bronze",
      name: "铜车马展�?,
      icon: "🐴",
      category: "青铜�?,
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "铜车马展厅展示秦始皇陵出土的铜车马，是目前发现体量最大、结构最复杂的古代青铜器�?,
      stats: { artifacts: 2, exhibitions: 1, visitors: 250 },
      location: "铜车马展�?,
      openTime: "全年开�?8:30-18:00",
      duration: "45分钟",
      ticket: "包含在门票内",
      artifacts: [
        {
          name: "一号铜车马",
          period: "秦代",
          description: "立车，秦始皇出行仪仗",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "秦陵铜车马展",
          date: "常设展览",
          description: "展示秦陵铜车�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["铜车�?, "青铜�?],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜工艺讲座",
          desc: "了解秦代青铜工艺",
          type: "讲座",
        },
      ],
    },
  ],

  // 5. 陕西历史博物�?- 3个专�?  5: [
    {
      id: "shaanxi-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "陕西历史博物馆青铜器馆藏有商周至秦汉青铜器精品，展现陕西地区青铜文明的辉煌�?,
      stats: { artifacts: 800, exhibitions: 3, visitors: 180 },
      location: "二楼展厅",
      openTime: "周二至周�?9:00-17:30",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "何尊",
          period: "西周",
          description: '铭文中有最早的"中国"二字',
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "青铜铸文�?,
          date: "常设展览",
          description: "展示陕西青铜文明",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "陕西"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
    {
      id: "shaanxi-tang",
      name: "唐代壁画�?,
      icon: "🎨",
      category: "壁画艺术",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction:
        "唐代壁画馆展示陕西地区出土的唐代墓葬壁画，是研究唐代社会生活的重要资料�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 150 },
      location: "地下一�?,
      openTime: "周二至周�?9:00-17:30",
      duration: "1小时",
      ticket: "需单独购票",
      artifacts: [
        {
          name: "章怀太子墓壁�?,
          period: "唐代",
          description: "描绘唐代宫廷生活",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "唐代壁画珍品�?,
          date: "常设展览",
          description: "展示唐代墓葬壁画",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop",
          tags: ["壁画", "唐代"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "唐代壁画讲座",
          desc: "了解唐代壁画艺术",
          type: "讲座",
        },
      ],
    },
    {
      id: "shaanxi-gold",
      name: "金银器馆",
      icon: "�?,
      category: "金银�?,
      coverImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
      introduction:
        "金银器馆展示唐代金银器精品，体现唐代金银器工艺的最高水平�?,
      stats: { artifacts: 300, exhibitions: 2, visitors: 140 },
      location: "二楼展厅",
      openTime: "周二至周�?9:00-17:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "兽首玛瑙�?,
          period: "唐代",
          description: "何家村窖藏出土，国宝级文�?,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "大唐金银器展",
          date: "常设展览",
          description: "展示唐代金银�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
          tags: ["金银�?, "唐代"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "金银器鉴�?,
          desc: "学习金银器知�?,
          type: "讲座",
        },
      ],
    },
  ],

  // 6. 南京博物�?- 3个专�?  6: [
    {
      id: "nanjing-history",
      name: "历史�?,
      icon: "🏛�?,
      category: "历史文物",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "历史馆展示江苏地区从远古到明清的历史发展，是了解江苏历史的重要窗口�?,
      stats: { artifacts: 2000, exhibitions: 5, visitors: 200 },
      location: "历史�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "2小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "金兽",
          period: "战国",
          description: "战国时期金器，重�?00�?,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "江苏古代文明�?,
          date: "常设展览",
          description: "展示江苏古代历史",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["历史", "江苏"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "江苏历史讲座",
          desc: "了解江苏历史",
          type: "讲座",
        },
      ],
    },
    {
      id: "nanjing-art",
      name: "艺术�?,
      icon: "🎨",
      category: "艺术精品",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction:
        "艺术馆展示馆藏书画、陶瓷、玉器等艺术精品，体现中国传统艺术的魅力�?,
      stats: { artifacts: 1500, exhibitions: 4, visitors: 180 },
      location: "艺术�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "竹林七贤砖画",
          period: "南朝",
          description: "南朝墓葬砖画",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "艺术精品�?,
          date: "常设展览",
          description: "展示馆藏艺术精品",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop",
          tags: ["艺术", "精品"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "艺术鉴赏讲座",
          desc: "学习艺术鉴赏",
          type: "讲座",
        },
      ],
    },
    {
      id: "nanjing-minzhu",
      name: "民国�?,
      icon: "🏘�?,
      category: "民国风情",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "民国馆通过场景复原，再现民国时期南京的社会风貌，是沉浸式体验民国风情的好去处�?,
      stats: { artifacts: 500, exhibitions: 1, visitors: 250 },
      location: "地下一�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "老南京街�?,
          period: "民国",
          description: "复原民国时期南京街道",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "民国风情�?,
          date: "常设展览",
          description: "体验民国风情",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["民国", "沉浸体验"],
        },
      ],
      recommendations: [
        {
          icon: "📸",
          title: "民国风情拍照",
          desc: "体验民国风情",
          type: "活动",
        },
      ],
    },
  ],

  // 7. 河南博物�?- 3个专�?  7: [
    {
      id: "henan-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "河南博物院青铜器馆藏有商周青铜器精品，展现中原地区青铜文明的辉煌�?,
      stats: { artifacts: 600, exhibitions: 3, visitors: 180 },
      location: "二楼展厅",
      openTime: "周二至周�?9:00-17:30",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "莲鹤方壶",
          period: "春秋",
          description: "春秋时期青铜器精品，造型优美",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "鼎盛中华——青铜器�?,
          date: "常设展览",
          description: "展示中原青铜文明",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "中原"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
    {
      id: "henan-jade",
      name: "玉器�?,
      icon: "💎",
      category: "玉器艺术",
      coverImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
      introduction:
        "玉器馆展示河南地区出土的历代玉器精品，展现中原玉文化的深厚底蕴�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 140 },
      location: "三楼展厅",
      openTime: "周二至周�?9:00-17:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "玉龙",
          period: "红山文化",
          description: "红山文化玉龙",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "玉润中华——玉器展",
          date: "常设展览",
          description: "展示中原玉文�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
          tags: ["玉器", "玉文�?],
        },
      ],
      recommendations: [
        { icon: "📚", title: "玉器鉴赏", desc: "学习玉器知识", type: "讲座" },
      ],
    },
    {
      id: "henan-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction:
        "陶瓷馆展示河南地区出土的历代陶瓷精品，包括唐三彩、汝瓷等名窑精品�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 150 },
      location: "四楼展厅",
      openTime: "周二至周�?9:00-17:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "唐三彩骆�?,
          period: "唐代",
          description: "唐三彩精�?,
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "瓷韵中华——陶瓷展",
          date: "常设展览",
          description: "展示河南陶瓷艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["陶瓷", "瓷器"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "陶瓷鉴赏", desc: "学习陶瓷知识", type: "讲座" },
      ],
    },
  ],

  // 8. 浙江省博物馆 - 2个专�?  8: [
    {
      id: "zhejiang-celadon",
      name: "青瓷�?,
      icon: "🏺",
      category: "青瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction:
        "青瓷馆展示浙江地区青瓷艺术的发展历程，包括越窑、龙泉窑等名窑精品�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 150 },
      location: "主展�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "越窑秘色�?,
          period: "唐代",
          description: "越窑青瓷精品",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "青瓷之美",
          date: "常设展览",
          description: "展示浙江青瓷艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["青瓷", "浙江"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "青瓷鉴赏", desc: "学习青瓷知识", type: "讲座" },
      ],
    },
    {
      id: "zhejiang-painting",
      name: "书画�?,
      icon: "🎨",
      category: "书画艺术",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction:
        "书画馆展示浙江地区书画艺术精品，包括浙派绘画、江南书法等�?,
      stats: { artifacts: 800, exhibitions: 3, visitors: 160 },
      location: "书画展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "富春山居�?,
          period: "元代",
          description: "黄公望代表作",
          image:
            "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "江南书画�?,
          date: "常设展览",
          description: "展示江南书画艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop",
          tags: ["书画", "江南"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "书画鉴赏", desc: "学习书画知识", type: "讲座" },
      ],
    },
  ],

  // 9. 湖北省博物馆 - 2个专�?  9: [
    {
      id: "hubei-chime",
      name: "编钟�?,
      icon: "🎵",
      category: "音乐文物",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "编钟馆展示曾侯乙编钟等音乐文物，是了解中国古代音乐文化的重要窗口�?,
      stats: { artifacts: 100, exhibitions: 1, visitors: 250 },
      location: "编钟展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "曾侯乙编�?,
          period: "战国",
          description: "战国早期编钟，共65�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "曾侯乙编钟展",
          date: "常设展览",
          description: "展示曾侯乙编�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["编钟", "音乐"],
        },
      ],
      recommendations: [
        { icon: "🎵", title: "编钟演奏", desc: "聆听编钟演奏", type: "活动" },
      ],
    },
    {
      id: "hubei-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "青铜器馆展示湖北地区出土的青铜器精品，展现楚文化的独特魅力�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 180 },
      location: "青铜展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "曾侯乙尊�?,
          period: "战国",
          description: "战国青铜器精�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "楚文化青铜器�?,
          date: "常设展览",
          description: "展示楚文化青铜器",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "楚文�?],
        },
      ],
      recommendations: [
        { icon: "📚", title: "楚文化讲�?, desc: "了解楚文�?, type: "讲座" },
      ],
    },
  ],

  // 10. 湖南省博物馆 - 2个专�?  10: [
    {
      id: "hunan-mawangdui",
      name: "马王堆汉墓馆",
      icon: "🏛�?,
      category: "汉代文物",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "马王堆汉墓馆展示马王堆汉墓出土文物，包括辛追夫人遗体、帛画、漆器等珍贵文物�?,
      stats: { artifacts: 3000, exhibitions: 1, visitors: 300 },
      location: "马王堆展�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "2小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "素纱单衣",
          period: "汉代",
          description: "仅重49克的丝织�?,
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "马王堆汉墓文物展",
          date: "常设展览",
          description: "展示马王堆汉墓文�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["马王�?, "汉代"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "汉代文化讲座",
          desc: "了解汉代文化",
          type: "讲座",
        },
      ],
    },
    {
      id: "hunan-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "青铜器馆展示湖南地区出土的青铜器精品，展现商周时期湖南地区的青铜文明�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 160 },
      location: "青铜展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "四羊方尊",
          period: "商代",
          description: "商代青铜器精�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "湖南青铜器展",
          date: "常设展览",
          description: "展示湖南青铜�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "湖南"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
  ],

  // 11. 四川博物�?- 2个专�?  11: [
    {
      id: "sichuan-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "青铜器馆展示四川地区出土的青铜器精品，展现巴蜀文化的独特魅力�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 160 },
      location: "青铜展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "三星堆青铜人�?,
          period: "商代",
          description: "三星堆出土青铜人�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "巴蜀青铜器展",
          date: "常设展览",
          description: "展示巴蜀青铜文明",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "巴蜀"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "巴蜀文化讲座",
          desc: "了解巴蜀文化",
          type: "讲座",
        },
      ],
    },
    {
      id: "sichuan-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction:
        "陶瓷馆展示四川地区陶瓷艺术精品，包括邛窑、彭州窑等地方窑口精品�?,
      stats: { artifacts: 300, exhibitions: 2, visitors: 140 },
      location: "陶瓷展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "邛窑彩瓷",
          period: "唐代",
          description: "邛窑彩绘�?,
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "四川陶瓷�?,
          date: "常设展览",
          description: "展示四川陶瓷艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["陶瓷", "四川"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "陶瓷鉴赏", desc: "学习陶瓷知识", type: "讲座" },
      ],
    },
  ],

  // 12. 广东省博物馆 - 2个专�?  12: [
    {
      id: "guangdong-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction:
        "陶瓷馆展示广东地区陶瓷艺术精品，包括广彩、石湾陶等岭南特色陶瓷�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 150 },
      location: "陶瓷展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "广彩瓷器",
          period: "清代",
          description: "广州织金彩瓷",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "岭南陶瓷�?,
          date: "常设展览",
          description: "展示岭南陶瓷艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["陶瓷", "岭南"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "陶瓷鉴赏", desc: "学习陶瓷知识", type: "讲座" },
      ],
    },
    {
      id: "guangdong-duan",
      name: "端砚�?,
      icon: "📝",
      category: "文房四宝",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "端砚馆展示广东端砚精品，端砚是中国四大名砚之首，具有极高的艺术价值�?,
      stats: { artifacts: 200, exhibitions: 1, visitors: 120 },
      location: "端砚展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "45分钟",
      ticket: "免费参观",
      artifacts: [
        {
          name: "老坑端砚",
          period: "清代",
          description: "端砚老坑精品",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "端砚艺术�?,
          date: "常设展览",
          description: "展示端砚艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["端砚", "文房"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "端砚鉴赏", desc: "学习端砚知识", type: "讲座" },
      ],
    },
  ],

  // 13. 天津博物�?- 2个专�?  13: [
    {
      id: "tianjin-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction: "青铜器馆展示天津博物馆馆藏青铜器精品，以商周青铜器为主�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 140 },
      location: "青铜展厅",
      openTime: "周二至周�?9:00-16:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "太保�?,
          period: "西周",
          description: "西周青铜重器",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "青铜器精品展",
          date: "常设展览",
          description: "展示馆藏青铜�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "商周"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
    {
      id: "tianjin-painting",
      name: "书画�?,
      icon: "🎨",
      category: "书画艺术",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction: "书画馆展示天津博物馆馆藏书画精品，以宋元明清绘画为主�?,
      stats: { artifacts: 600, exhibitions: 3, visitors: 160 },
      location: "书画展厅",
      openTime: "周二至周�?9:00-16:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "雪景寒林�?,
          period: "宋代",
          description: "范宽绘，山水画精�?,
          image:
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "书画精品�?,
          date: "常设展览",
          description: "展示馆藏书画",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop",
          tags: ["书画", "艺术"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "书画鉴赏", desc: "学习书画知识", type: "讲座" },
      ],
    },
  ],

  // 14. 重庆中国三峡博物�?- 2个专�?  14: [
    {
      id: "chongqing-threegorges",
      name: "三峡�?,
      icon: "🌊",
      category: "三峡文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "三峡馆展示三峡地区的自然风光和人文历史，是了解三峡文化的重要窗口�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 180 },
      location: "三峡展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1.5小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "三峡石刻",
          period: "历代",
          description: "三峡地区石刻",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "壮丽三峡�?,
          date: "常设展览",
          description: "展示三峡文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["三峡", "文化"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "三峡文化讲座",
          desc: "了解三峡文化",
          type: "讲座",
        },
      ],
    },
    {
      id: "chongqing-bashu",
      name: "巴蜀�?,
      icon: "🏛�?,
      category: "巴蜀文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "巴蜀馆展示重庆地区的历史文化，展现巴渝文化的独特魅力�?,
      stats: { artifacts: 600, exhibitions: 2, visitors: 160 },
      location: "巴蜀展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "巴人青铜�?,
          period: "战国",
          description: "巴人青铜兵器",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "巴蜀文化�?,
          date: "常设展览",
          description: "展示巴蜀文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["巴蜀", "文化"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "巴蜀文化讲座",
          desc: "了解巴蜀文化",
          type: "讲座",
        },
      ],
    },
  ],

  // 15. 山东博物�?- 2个专�?  15: [
    {
      id: "shandong-prehistory",
      name: "史前�?,
      icon: "🦴",
      category: "史前文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "史前馆展示山东地区史前文化，包括大汶口文化、龙山文化等重要考古发现�?,
      stats: { artifacts: 800, exhibitions: 2, visitors: 180 },
      location: "史前展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "蛋壳黑陶�?,
          period: "龙山文化",
          description: "龙山文化黑陶精品",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "山东史前文化�?,
          date: "常设展览",
          description: "展示山东史前文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["史前", "山东"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "史前文化讲座",
          desc: "了解史前文化",
          type: "讲座",
        },
      ],
    },
    {
      id: "shandong-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction:
        "青铜器馆展示山东地区出土的青铜器精品，展现齐鲁文化的深厚底蕴�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 160 },
      location: "青铜展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "颂簋",
          period: "西周",
          description: "西周青铜礼器",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "齐鲁青铜器展",
          date: "常设展览",
          description: "展示齐鲁青铜文明",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "齐鲁"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
  ],

  // 16. 辽宁省博物馆 - 2个专�?  16: [
    {
      id: "liaoning-jade",
      name: "玉器�?,
      icon: "💎",
      category: "玉器艺术",
      coverImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
      introduction:
        "玉器馆展示红山文化玉器精品，红山文化玉器是中国新石器时代玉器的代表�?,
      stats: { artifacts: 300, exhibitions: 2, visitors: 140 },
      location: "玉器展厅",
      openTime: "周二至周�?9:00-16:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "玉猪�?,
          period: "红山文化",
          description: "红山文化典型玉器",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "红山玉器�?,
          date: "常设展览",
          description: "展示红山文化玉器",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
          tags: ["玉器", "红山"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "玉器鉴赏", desc: "学习玉器知识", type: "讲座" },
      ],
    },
    {
      id: "liaoning-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction: "陶瓷馆展示辽代瓷器精品，辽瓷具有独特的民族风格�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 130 },
      location: "陶瓷展厅",
      openTime: "周二至周�?9:00-16:30",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "辽三�?,
          period: "辽代",
          description: "辽代三彩釉陶",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "辽瓷艺术�?,
          date: "常设展览",
          description: "展示辽代瓷器",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["陶瓷", "辽代"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "陶瓷鉴赏", desc: "学习陶瓷知识", type: "讲座" },
      ],
    },
  ],

  // 17-38号博物馆（每�?-2个专馆）
  17: [
    {
      id: "jilin-gaogouli",
      name: "高句丽馆",
      icon: "🏛�?,
      category: "高句丽文�?,
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "高句丽馆展示高句丽时期文物，高句丽是中国东北古代民族政权�?,
      stats: { artifacts: 300, exhibitions: 1, visitors: 120 },
      location: "高句丽展�?,
      openTime: "周二至周�?9:00-16:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "高句丽壁�?,
          period: "高句�?,
          description: "高句丽墓葬壁�?,
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "高句丽文化展",
          date: "常设展览",
          description: "展示高句丽文�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["高句�?, "东北"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "高句丽文化讲�?,
          desc: "了解高句丽文�?,
          type: "讲座",
        },
      ],
    },
  ],

  18: [
    {
      id: "heilongjiang-bohai",
      name: "渤海�?,
      icon: "🏛�?,
      category: "渤海文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "渤海馆展示渤海国时期文物，渤海国是中国东北古代民族政权�?,
      stats: { artifacts: 200, exhibitions: 1, visitors: 100 },
      location: "渤海展厅",
      openTime: "周二至周�?9:00-16:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "渤海陶器",
          period: "渤海�?,
          description: "渤海国陶�?,
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "渤海文化�?,
          date: "常设展览",
          description: "展示渤海文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["渤海", "东北"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "渤海文化讲座",
          desc: "了解渤海文化",
          type: "讲座",
        },
      ],
    },
  ],

  19: [
    {
      id: "fujian-maritime",
      name: "海上丝绸之路�?,
      icon: "�?,
      category: "海丝文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "海上丝绸之路馆展示福建海上丝绸之路的历史，展现福建在中外交流中的重要地位�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 160 },
      location: "海丝展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "宋代海船",
          period: "宋代",
          description: "泉州湾宋代海�?,
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "海上丝绸之路�?,
          date: "常设展览",
          description: "展示海丝文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["海丝", "福建"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "海丝文化讲座",
          desc: "了解海丝文化",
          type: "讲座",
        },
      ],
    },
  ],

  20: [
    {
      id: "anhui-huizhou",
      name: "徽州�?,
      icon: "🏘�?,
      category: "徽州文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "徽州馆展示徽州文化，包括徽商、徽派建筑、新安画派等徽州文化精髓�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 150 },
      location: "徽州展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "徽派建筑构件",
          period: "明清",
          description: "徽派建筑木雕",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "徽州文化�?,
          date: "常设展览",
          description: "展示徽州文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["徽州", "文化"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "徽州文化讲座",
          desc: "了解徽州文化",
          type: "讲座",
        },
      ],
    },
  ],

  21: [
    {
      id: "hebei-han",
      name: "汉代�?,
      icon: "🏛�?,
      category: "汉代文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "汉代馆展示满城汉墓出土文物，展现汉代诸侯王的生活�?,
      stats: { artifacts: 600, exhibitions: 2, visitors: 180 },
      location: "汉代展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "长信宫灯",
          period: "汉代",
          description: "汉代青铜灯具精品",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "满城汉墓文物�?,
          date: "常设展览",
          description: "展示满城汉墓文物",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["汉代", "河北"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "汉代文化讲座",
          desc: "了解汉代文化",
          type: "讲座",
        },
      ],
    },
  ],

  22: [
    {
      id: "shanxi-jin",
      name: "晋国�?,
      icon: "🏛�?,
      category: "晋国文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "晋国馆展示晋国时期文物，展现三晋文化的深厚底蕴�?,
      stats: { artifacts: 700, exhibitions: 2, visitors: 180 },
      location: "晋国展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "晋侯鸟尊",
          period: "西周",
          description: "晋国青铜器精�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "晋国文化�?,
          date: "常设展览",
          description: "展示晋国文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["晋国", "山西"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "晋国文化讲座",
          desc: "了解晋国文化",
          type: "讲座",
        },
      ],
    },
  ],

  23: [
    {
      id: "jiangxi-ceramic",
      name: "景德镇瓷器馆",
      icon: "🏺",
      category: "瓷器艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction: '景德镇瓷器馆展示景德镇瓷器精品，景德镇是中国�?瓷都"�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 160 },
      location: "瓷器展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "青花�?,
          period: "明清",
          description: "景德镇青花瓷",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "景德镇瓷器展",
          date: "常设展览",
          description: "展示景德镇瓷�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["瓷器", "景德�?],
        },
      ],
      recommendations: [
        { icon: "📚", title: "瓷器鉴赏", desc: "学习瓷器知识", type: "讲座" },
      ],
    },
  ],

  24: [
    {
      id: "guangxi-drum",
      name: "铜鼓�?,
      icon: "🥁",
      category: "铜鼓文化",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction: "铜鼓馆展示广西铜鼓文化，铜鼓是壮族文化的重要象征�?,
      stats: { artifacts: 300, exhibitions: 1, visitors: 140 },
      location: "铜鼓展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "北流型铜�?,
          period: "汉代",
          description: "广西铜鼓精品",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "广西铜鼓�?,
          date: "常设展览",
          description: "展示广西铜鼓文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["铜鼓", "壮族"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "铜鼓文化讲座",
          desc: "了解铜鼓文化",
          type: "讲座",
        },
      ],
    },
  ],

  25: [
    {
      id: "hainan-maritime",
      name: "南海�?,
      icon: "🌊",
      category: "南海文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "南海馆展示南海水下文化遗产，展现南海航海历史�?,
      stats: { artifacts: 200, exhibitions: 1, visitors: 120 },
      location: "南海展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "华光礁沉�?,
          period: "宋代",
          description: "南海沉船文物",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "南海文化�?,
          date: "常设展览",
          description: "展示南海文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["南海", "海丝"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "南海文化讲座",
          desc: "了解南海文化",
          type: "讲座",
        },
      ],
    },
  ],

  26: [
    {
      id: "guizhou-ethnic",
      name: "民族�?,
      icon: "🎭",
      category: "民族文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "民族馆展示贵州少数民族文化，展现多彩贵州的民族风情�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 140 },
      location: "民族展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "苗族银饰",
          period: "现代",
          description: "苗族银饰精品",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "贵州民族文化�?,
          date: "常设展览",
          description: "展示贵州民族文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["民族", "贵州"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "民族文化讲座",
          desc: "了解民族文化",
          type: "讲座",
        },
      ],
    },
  ],

  27: [
    {
      id: "yunnan-dian",
      name: "滇文化馆",
      icon: "🏛�?,
      category: "滇文�?,
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "滇文化馆展示古滇国文物，古滇国是云南古代文明的重要代表�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 160 },
      location: "滇文化展�?,
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "牛虎铜案",
          period: "战国",
          description: "古滇国青铜器精品",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "古滇国文化展",
          date: "常设展览",
          description: "展示古滇国文�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["滇文�?, "云南"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "滇文化讲�?, desc: "了解滇文�?, type: "讲座" },
      ],
    },
  ],

  28: [
    {
      id: "xizang-tibetan",
      name: "藏族文化�?,
      icon: "🏔�?,
      category: "藏族文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "藏族文化馆展示藏族历史文化，展现雪域高原的独特文明�?,
      stats: { artifacts: 300, exhibitions: 2, visitors: 120 },
      location: "藏族文化展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "唐卡",
          period: "清代",
          description: "藏族唐卡艺术",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "藏族文化�?,
          date: "常设展览",
          description: "展示藏族文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["藏族", "西藏"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "藏族文化讲座",
          desc: "了解藏族文化",
          type: "讲座",
        },
      ],
    },
  ],

  29: [
    {
      id: "gansu-silkroad",
      name: "丝绸之路�?,
      icon: "🐪",
      category: "丝路文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "丝绸之路馆展示甘肃丝绸之路文物，甘肃是丝绸之路的黄金段�?,
      stats: { artifacts: 600, exhibitions: 2, visitors: 180 },
      location: "丝路展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "铜奔�?,
          period: "东汉",
          description: "马踏飞燕，中国旅游标�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "丝绸之路文明�?,
          date: "常设展览",
          description: "展示丝路文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["丝路", "甘肃"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "丝路文化讲座",
          desc: "了解丝路文化",
          type: "讲座",
        },
      ],
    },
  ],

  30: [
    {
      id: "qinghai-ethnic",
      name: "民族�?,
      icon: "🎭",
      category: "民族文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "民族馆展示青海多民族文化，展现青海多元文化的魅力�?,
      stats: { artifacts: 300, exhibitions: 1, visitors: 100 },
      location: "民族展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "藏族服饰",
          period: "现代",
          description: "青海藏族服饰",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "青海民族文化�?,
          date: "常设展览",
          description: "展示青海民族文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["民族", "青海"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "民族文化讲座",
          desc: "了解民族文化",
          type: "讲座",
        },
      ],
    },
  ],

  31: [
    {
      id: "neimenggu-nomadic",
      name: "草原�?,
      icon: "🐎",
      category: "草原文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "草原馆展示北方草原民族文物，展现草原文明的独特魅力�?,
      stats: { artifacts: 500, exhibitions: 2, visitors: 160 },
      location: "草原展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "匈奴金冠",
          period: "战国",
          description: "匈奴金冠�?,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "草原文明�?,
          date: "常设展览",
          description: "展示草原文明",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["草原", "内蒙�?],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "草原文化讲座",
          desc: "了解草原文化",
          type: "讲座",
        },
      ],
    },
  ],

  32: [
    {
      id: "ningxia-xixia",
      name: "西夏�?,
      icon: "🏛�?,
      category: "西夏文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction: "西夏馆展示西夏王朝文物，西夏是中国西北古代民族政权�?,
      stats: { artifacts: 300, exhibitions: 1, visitors: 120 },
      location: "西夏展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "西夏文碑",
          period: "西夏",
          description: "西夏文字碑刻",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "西夏文化�?,
          date: "常设展览",
          description: "展示西夏文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["西夏", "宁夏"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "西夏文化讲座",
          desc: "了解西夏文化",
          type: "讲座",
        },
      ],
    },
  ],

  33: [
    {
      id: "xinjiang-silkroad",
      name: "丝绸之路�?,
      icon: "🐪",
      category: "丝路文化",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "丝绸之路馆展示新疆丝绸之路文物，新疆是丝绸之路的核心区域�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 150 },
      location: "丝路展厅",
      openTime: "周二至周�?10:00-18:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "楼兰美女",
          period: "汉代",
          description: "楼兰古尸",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "新疆丝路文化�?,
          date: "常设展览",
          description: "展示新疆丝路文化",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["丝路", "新疆"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "丝路文化讲座",
          desc: "了解丝路文化",
          type: "讲座",
        },
      ],
    },
  ],

  34: [
    {
      id: "taipei-bronze",
      name: "青铜器馆",
      icon: "⚱️",
      category: "青铜文明",
      coverImage:
        "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop",
      introduction: "青铜器馆展示台北故宫馆藏青铜器精品，以商周青铜器为主�?,
      stats: { artifacts: 600, exhibitions: 2, visitors: 180 },
      location: "青铜展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "需购票",
      artifacts: [
        {
          name: "毛公�?,
          period: "西周",
          description: "铭文最长的青铜�?,
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "青铜器精品展",
          date: "常设展览",
          description: "展示馆藏青铜�?,
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop",
          tags: ["青铜�?, "商周"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "青铜器鉴�?,
          desc: "学习青铜器知�?,
          type: "讲座",
        },
      ],
    },
    {
      id: "taipei-ceramic",
      name: "陶瓷�?,
      icon: "🏺",
      category: "陶瓷艺术",
      coverImage:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      introduction: "陶瓷馆展示台北故宫馆藏陶瓷精品，以宋元明清瓷器为主�?,
      stats: { artifacts: 800, exhibitions: 2, visitors: 200 },
      location: "陶瓷展厅",
      openTime: "周二至周�?9:00-17:00",
      duration: "1小时",
      ticket: "需购票",
      artifacts: [
        {
          name: "汝窑瓷器",
          period: "北宋",
          description: "汝窑天青釉瓷�?,
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "陶瓷精品�?,
          date: "常设展览",
          description: "展示馆藏陶瓷",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop",
          tags: ["陶瓷", "瓷器"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "陶瓷鉴赏", desc: "学习陶瓷知识", type: "讲座" },
      ],
    },
  ],

  35: [
    {
      id: "hongkong-history",
      name: "香港故事�?,
      icon: "🏛�?,
      category: "香港历史",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "香港故事馆展示香港从远古到现代的历史发展，是了解香港历史的重要窗口�?,
      stats: { artifacts: 800, exhibitions: 1, visitors: 180 },
      location: "常设展厅",
      openTime: "周一至周三、周五至周日 10:00-18:00",
      duration: "2小时",
      ticket: "需购票",
      artifacts: [
        {
          name: "香港考古文物",
          period: "史前",
          description: "香港出土文物",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "香港故事",
          date: "常设展览",
          description: "展示香港历史",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["香港", "历史"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "香港历史讲座",
          desc: "了解香港历史",
          type: "讲座",
        },
      ],
    },
  ],

  36: [
    {
      id: "hongkong-art",
      name: "中国书画�?,
      icon: "🎨",
      category: "书画艺术",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction: "中国书画馆展示香港艺术馆藏中国书画精品�?,
      stats: { artifacts: 400, exhibitions: 2, visitors: 140 },
      location: "书画展厅",
      openTime: "周一至周三、周五至周日 10:00-18:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "岭南画派",
          period: "现代",
          description: "岭南画派作品",
          image:
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "中国书画�?,
          date: "常设展览",
          description: "展示中国书画",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop",
          tags: ["书画", "艺术"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "书画鉴赏", desc: "学习书画知识", type: "讲座" },
      ],
    },
  ],

  37: [
    {
      id: "macau-history",
      name: "澳门历史�?,
      icon: "🏛�?,
      category: "澳门历史",
      coverImage:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop",
      introduction:
        "澳门历史馆展示澳门数百年的历史变迁，包括中西文化交融的独特历史�?,
      stats: { artifacts: 300, exhibitions: 1, visitors: 100 },
      location: "历史展厅",
      openTime: "周二至周�?10:00-18:00",
      duration: "1.5小时",
      ticket: "需购票",
      artifacts: [
        {
          name: "澳门历史文物",
          period: "明清",
          description: "澳门历史文物",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "澳门历史�?,
          date: "常设展览",
          description: "展示澳门历史",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop",
          tags: ["澳门", "历史"],
        },
      ],
      recommendations: [
        {
          icon: "📚",
          title: "澳门历史讲座",
          desc: "了解澳门历史",
          type: "讲座",
        },
      ],
    },
  ],

  38: [
    {
      id: "macau-art",
      name: "澳门艺术�?,
      icon: "🎨",
      category: "艺术精品",
      coverImage:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop",
      introduction: "澳门艺术馆展示澳门本土艺术作品，包括中西艺术精品�?,
      stats: { artifacts: 200, exhibitions: 2, visitors: 80 },
      location: "艺术展厅",
      openTime: "周二至周�?10:00-18:00",
      duration: "1小时",
      ticket: "免费参观",
      artifacts: [
        {
          name: "澳门艺术作品",
          period: "现代",
          description: "澳门本土艺术",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop",
        },
      ],
      exhibitions: [
        {
          title: "澳门艺术�?,
          date: "常设展览",
          description: "展示澳门艺术",
          status: "ongoing",
          statusText: "正在展出",
          image:
            "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop",
          tags: ["艺术", "澳门"],
        },
      ],
      recommendations: [
        { icon: "📚", title: "艺术鉴赏", desc: "学习艺术知识", type: "讲座" },
      ],
    },
  ],
};

// 根据博物馆ID获取专馆列表
export function getExhibitionHallsByMuseumId(
  museumId: number,
): ExhibitionHall[] {
  return museumExhibitionHalls[museumId] || [];
}

// 获取所有专�?export function getAllExhibitionHalls(): ExhibitionHall[] {
  return Object.values(museumExhibitionHalls).flat();
}

// 根据专馆ID获取专馆详情
export function getExhibitionHallById(
  hallId: string,
): ExhibitionHall | undefined {
  const allHalls = getAllExhibitionHalls();
  return allHalls.find((hall) => hall.id === hallId);
}

// 根据分类获取专馆列表
export function getExhibitionHallsByCategory(
  category: string,
): ExhibitionHall[] {
  const allHalls = getAllExhibitionHalls();
  return allHalls.filter((hall) => hall.category === category);
}
