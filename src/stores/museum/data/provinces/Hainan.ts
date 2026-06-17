import type { ProvinceData } from '@/typesOfPages/museum/index';

// 海南省份数据
export const hainanData: ProvinceData = {
  code: 'Hainan',
  name: '海南',
  museums: [
    {
      id: 25,
      name: '海南省博物馆',
      province: '海南',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '海南省博物馆是海南省综合类博物馆，馆藏文物2万余件，以海南历史文物、南海水下文物为特色。',
      artifacts: 20000,
      exhibitions: 15,
      visitors: 1200000,
      features: ['国家一级博物馆', '海南省爱国主义教育基地'],
    },
  ],
  details: {
    25: {
      museumId: 25,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00（16:00停止入场）',
          stopEntryTime: '16:00',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '节假日安排以公告为准',
        },
        ticket: {
          price: '免费（需预约）',
          isFree: true,
          needReservation: true,
          idRequired: '有效证件预约入馆',
          discountPolicy: ['未成年人免费', '老年人优先进馆'],
        },
        rules: {
          allowed: ['基本陈列可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品'],
        },
        transportation: {
          address: '海南省海口市琼山区国兴大道76号',
          metro: '无地铁',
          bus: '公交12、13、14、27、28、33、38、39、43、51、52、56、67、73、76路海南省博物馆站',
        },
        services: {
          hasGuide: true,
          hasStorage: true,
          hasRestaurant: true,
          hasAccessibility: true,
          hasRestArea: true,
          hasWiFi: true,
        },
        contact: {
          phone: '0898-65238891',
          email: 'hnbwg@VIP.163.com',
          complaintPhone: '0898-65238880',
          website: 'http://www.hainanmuseum.org',
        },
      },
      history:
        '海南省博物馆创建于1984年，前身为海南黎族苗族自治州民族博物馆，2008年新馆建成开放，是海南省最大的综合性博物馆和国家一级博物馆。馆藏文物约28,364件（套），其中珍贵文物近1345件，以海南岛历史文物、黎族苗族等少数民族文物、华侨华人文物、南海水下考古文物为特色。新馆建筑面积约4.5万平方米，位于海口市国兴大道城市中心区域。',
      architecture:
        "新馆建筑由华南理工具具大学何镜堂院士团队设计，外观以'大海之南的宝盒'为核心理念，建筑造型如同两艘停泊在海港的巨轮，寓意海南作为海上丝绸之路重要节点的历史地位。馆内设有'南溟泛舸——南海海洋文明陈列'、'方外封疆——海南历史陈列'、'仙凡之间——海南民俗陈列'等常设展厅。",
      highlights:
        "代表性藏品：'华光礁I号'南宋沉船出行程行程程水文物（包括大量龙泉青瓷、景德镇青白瓷等）、黎族龙被（国家级非物质文化遗产，被誉为'黎族织锦的活化石'）、黄花梨家具（海南特产降香黄檀制作的明清古典家具）、宋代青白釉花口凤首壶（南海一号沉船出行程行程程水）等。南海水下考古文物收藏在全国独具优势。",
      education:
        "打造'海博讲堂''南海文化研学''黎苗风情体验'三大公教品牌。定期举办'海上丝绸之路与南海考古'学术讲座。开设'黎锦织绣体验''椰雕制作''海南黄花梨鉴赏'等特色课程。",
    },
  },
  artifacts: [
    {
      id: 52,
      museumId: 25,
      name: '南海一号沉船文物',
      period: '南宋',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '"南海一号"宋代沉船出行程水的外销瓷器，保存完好，品种丰富，是研究古代海上丝绸之路和宋代海外贸易的重要实物证据。',
      basicInfo: {
        periodDetail: '公元1127年–1279年',
        material: '纸本设色',
        dimensions: '高31口径21厘米',
        collection: '贵州省博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1127年–1279年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
    {
      id: 53,
      museumId: 25,
      name: '黎族龙被',
      period: '清代',
      category: '织绣',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '海南黎族传统织锦精品，图案以龙纹为主，色彩鲜艳，工具艺复杂，是黎族人民智慧和文化的结晶，被誉为"黎锦之冠"。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '传统手工具材质',
        dimensions: '25×13×6厘米',
        collection: '贵州省博物馆',
        excavation: '传世品，历经数代收藏传承',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元1636年–1912年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 73,
      museumId: 25,
      title: '南海文化展',
      description: '展示海南地区的历史文化和海洋文明',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 74,
      museumId: 25,
      title: '水下考古成果展',
      description: '展示南海水下考古的重要发现',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 75,
      museumId: 25,
      title: '黎族文化体验',
      description: '了解黎族文化，体验传统技艺',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 67,
      museumId: 23,
      name: '黎族织锦手提袋',
      description: '海南黎族传统织锦工具艺手提袋',
      price: 78,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 68,
      museumId: 23,
      name: '南海一号沉船模型',
      description: '南宋南海一号沉船考古发现纪念模型',
      price: 248,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 69,
      museumId: 23,
      name: '海南热带植物明信片',
      description: '以海南特有热带植物为主题的明信片套装',
      price: 28,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 135,
      museumId: 23,
      name: '黄花梨木雕摆件',
      description: '以海南黄花梨为材质的传统吉祥纹样木雕摆件',
      price: 588,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 70,
      museumId: 25,
      name: '黎族织锦笔记本',
      description: '封面采用黎族传统织锦工具艺的文创笔记本',
      price: 48,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 136,
      museumId: 25,
      name: '南海一号船模摆件',
      description: '南宋"南海一号"沉船1:400比例木质模型，附考古发现介绍',
      price: 298,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [

    {
      id: 27,
      museumId: 25,
      title: '南海水下考古成果展',
      description: '展示南海海域出行程水瓷器、沉船遗迹等珍贵水下考古发现',
      date: '2024-08-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '海南省博物馆南海考古展厅',
      status: '最新',
      category: '科技考古',
      curator: '海南省博物馆',
      scale: '500余件（套）出行程水文物',
      visitors: 180000,
      background: '南海是古代海上丝绸之路的重要通道，千百年来无数商船在此往来，留下了丰富的水下文化遗产。1987年以来，中国水下考古工具作者在南海海域开展了系统的水下考古工具作，发现了"南海一号""华光礁一号"等重要沉船遗址，出行程水了大量宋代至清代的瓷器、铜钱等文物。这些水下考古成果，不仅填补了中国水下考古的空白，更为研究古代海上丝绸之路、中外贸易交流提供了珍贵的实物证据。',
    }
  ]
  ,
  news: [
    {
      id: 136,
      museumId: 25,
      title: '博物馆25年度特展开幕',
      description: '博物馆25举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 137,
      museumId: 25,
      title: '博物馆25新数字化服务上线',
      description: '博物馆25推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 138,
      museumId: 25,
      title: '博物馆25举办文化活动',
      description: '博物馆25举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 27,
      museumId: 25,
      title: '南海一号沉船考古发现综述',
      author: '海南省博物馆考古部',
      date: '2023-11-05',
      type: 'article',
      description: '总结南海一号南宋沉船的考古发现与学术意义。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 25,
      museumId: 25,
      title: '南海水下考古潜水体验',
      description: '以第一人称视角潜入南海沉船遗址，打捞珍贵出行程水文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    25: [
      {
        id: 'hn-hainan',
        name: '南溟奇甸——海南历史文化陈列',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/14.webp',
        introduction:
          '展示海南岛从孤悬海外到融入中华文明体系的历史轨迹，突出行程黎族文化、华侨文化、热带海洋文化特色。',
        stats: {
          artifacts: 450,
          exhibitions: 2,
          visitors: 140000,
        },
        location: '一楼南溟奇甸展厅',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '黎族龙被',
            period: '清代',
            description: '黎族织锦艺术的最高成就，被称为"黎锦之魂"',
            image: '',
          },
          {
            name: '黄花梨家具一套',
            period: '明清',
            description: '海南特产黄花梨木制成的古典家具',
            image: '',
          },
          {
            name: '沉香雕刻摆件',
            period: '当代',
            description: '海南沉香雕刻艺术精品',
            image: '',
          },
          {
            name: '下南洋侨批文书',
            period: '民国',
            description: '海南华侨下南洋的家书与汇款凭证',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '南溟奇甸——海南历史文化陈列',
            date: '常设展览',
            description: '从孤岛到国际旅游岛的历史变迁',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['海南', '常设'],
          },
          {
            title: '黎族传统文化展',
            date: '常设展览',
            description: '黎族服饰、文身、船型屋等文化元素',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['黎族', '非遗'],
          },
        ],
        recommendations: [
          {
            icon: '🎭',
            title: '黎锦编织体验',
            desc: '学习黎族传统的踞腰织机操作',
            type: '活动',
          },
          {
            icon: '🎧',
            title: '琼州文化导览',
            desc: '感受独特的海岛文化魅力',
            type: '音频',
          },
        ],
      },
      {
        id: 'hn-haiyang',
        name: '方外封疆——海南海洋文明陈列',
        icon: '🌊',
        category: '海洋文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/0.webp',
        introduction:
          '以"华光礁一号"沉船为核心，展示海南作为海上丝绸之路重要节点的海洋文化遗产。',
        stats: {
          artifacts: 300,
          exhibitions: 1,
          visitors: 110000,
        },
        location: '二楼海洋文明展厅',
        openTime: '周二至周日 9:00-17:00',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '华光礁一号出行程水土瓷器',
            period: '南宋',
            description: '西沙群岛水下考古的重要成果',
            image: '',
          },
          {
            name: '古代航海罗盘',
            period: '明清',
            description: '中国古代航海导航仪器',
            image: '',
          },
          {
            name: '珊瑚石雕刻工具艺品',
            period: '当代',
            description: '利用西沙珊瑚石创作的艺术品',
            image: '',
          },
          {
            name: '南海渔民渔具套装',
            period: '当代',
            description: '疍家人传统捕鱼工具具',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '方外封疆——海南海洋文明陈列',
            date: '常设展览',
            description: '从南海诸岛到远洋航行程的海洋文明',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['海洋', '常设'],
          },
        ],
        recommendations: [
          {
            icon: '🏭️',
            title: '水下考古体验',
            desc: '虚拟现实体验水下考古作业',
            type: 'VR',
          },
          {
            icon: '📱',
            title: '南海岛礁AR导览',
            desc: 'AR技术展示南海诸岛风貌',
            type: '互动',
          },
        ],
      },
    ],
  },
};

export default hainanData;
