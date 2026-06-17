import type { ProvinceData } from '@/typesOfPages/museum/index';

// 重庆省份数据
export const chongqingData: ProvinceData = {
  code: 'Chongqing',
  name: '重庆',
  museums: [
    {
      id: 14,
      name: '重庆中国三峡博物馆',
      province: '重庆',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '重庆中国三峡博物馆是集保护、研究、展示重庆和三峡地区历史文化遗产功能的综合性博物馆，馆藏文物18万余件。',
      artifacts: 180000,
      exhibitions: 22,
      visitors: 2600000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    14: {
      museumId: 14,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00（16:30停止入场）',
          stopEntryTime: '16:30',
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
          forbidden: [
            '禁止携带宠物',
            '禁止触摸展品',
            '环幕电影放映时禁止使用电子设备',
          ],
        },
        transportation: {
          address: '重庆市渝中区人民路236号',
          metro: '地铁2、3号线牛角沱站转公交到大礼堂站；或地铁10号线大礼堂站',
          bus: '公交114、132、181、215、262、421、868、881路大礼堂站',
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
          phone: '023-63670222',
          email: 'cqsxsbwg@163.com',
          complaintPhone: '023-63869687',
          website: 'http://www.3gmuseum.cn',
        },
      },
      history:
        '重庆中国三峡博物馆（重庆博物馆）的前身是1951年成立的西南博物院，2005年新馆正式对外开放，是首批国家一级博物馆。与重庆市人民大礼堂隔广场相望。馆藏文物18万余件（套），珍贵文物约1.2万件，以巴渝文化文物、三峡地区出行程行程程土文物、近现代革命文物为特色。新馆建筑面积约4.2万平方米。',
      architecture:
        "新馆建筑外观以弧形坡屋顶和大面积玻璃幕墙为主要特征，寓意三峡大坝截流后的平静水面。馆内设有'壮丽三峡'、'远古巴渝'、'重庆·城市之路'、'抗战岁月'等常设展厅，另设有环幕电影《大三峡》放映厅。",
      highlights:
        "代表性藏品：乌杨石阙（东汉，重庆忠县出行程行程程土，保存最完整的汉阙之一，高5.44米）、说唱俑（东汉，重庆巫山出行程行程程土）、偏将军印章（汉代金质官印）、巴族柳叶剑（战国）。抗战时期文物收藏丰富，记录了重庆作为'战时首都'的光辉历史。",
      education:
        "打造'三峡讲坛''巴渝文化研学''城市记忆'三大公教品牌。环幕电影《大三峡》每日定时放映。开设'三峡移民口述史采集''巴人文字拓片体验'等特色课程。与长江沿线博物馆联盟合作开展'长江文明对话'活动。",
    },
  },
  artifacts: [
    {
      id: 29,
      museumId: 14,
      name: '乌杨石阙',
      period: '东汉',
      category: '雕塑',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '重庆忠县乌杨镇出行程土的汉代石阙，是东汉时期陵墓建筑的标志性构件，造型雄伟，雕刻精美，是研究汉代建筑艺术和丧葬制度的重要实物资料。',
      basicInfo: {
        periodDetail: '公元25年–220年',
        material: '传统手工具材质',
        dimensions: '40×10×14厘米',
        collection: '重庆中国三峡博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元25年–220年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 30,
      museumId: 14,
      name: '说唱俑',
      period: '东汉',
      category: '陶器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '重庆出行程土的东汉陶俑，塑造了一位正在表演的说唱艺人形象，袒胸露腹，笑容可掬，神态生动传神，是汉代雕塑艺术的杰作，被誉为"汉代雕塑第一品"。',
      basicInfo: {
        periodDetail: '公元25年–220年',
        material: '传统手工具材质',
        dimensions: '40×9×8厘米',
        collection: '重庆中国三峡博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元25年–220年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 40,
      museumId: 14,
      title: '三峡文化展',
      description: '展示三峡地区的历史文化和自然风光',
      date: '2024-03-15 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 41,
      museumId: 14,
      title: '巴蜀文化研讨会',
      description: '探讨巴蜀地区的历史文化',
      date: '2024-06-15 至 2024-06-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 42,
      museumId: 14,
      title: '抗战文化讲座',
      description: '讲述重庆抗战时期的历史故事',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 40,
      museumId: 14,
      name: '三峡石画',
      description: '以三峡风光为题材的石头画艺术品',
      price: 138,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 41,
      museumId: 14,
      name: '巴蜀文化书签',
      description: '以巴蜀文化为设计元素的金属书签套装',
      price: 42,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 42,
      museumId: 14,
      name: '抗战文化主题笔记本',
      description: '以重庆抗战历史为主题的笔记本',
      price: 55,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 125,
      museumId: 14,
      name: '乌杨石阙模型',
      description: '东汉乌杨石阙1:20比例树脂复制模型，附考古发现背景介绍',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [
    {
      id: 16,
      museumId: 14,
      title: '三峡工具程与移民文化展',
      description: '展示三峡工具程建设的历史和库区移民的文化变迁',
      date: '2024-05-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '重庆中国三峡博物馆壮丽三峡厅',
      status: '热门',
      category: '历史文化',
      curator: '重庆中国三峡博物馆',
      scale: '1000余件（套）文物',
      visitors: 420000,
      background: '三峡工具程是世界上最大的水利枢纽工具程，其建设历程凝聚了几代中国人的心血与智慧。工具程实施过程中，百万三峡移民舍小家为国家，书写了人类移民史上的壮丽篇章。库区淹没前的文物抢救性发掘、古建筑的搬迁保护、移民新城的建设，构成了三峡工具程的文化记忆。本次展览展示三峡工具程建设的历史进程、移民安置的感人故事与库区文化的传承保护，呈现三峡工具程的伟大成就与移民精神的时代价值。',
    },
    {
      id: 327,
      museumId: 14,
      title: '三峡文物抢救性发掘成果展',
      description: '展示三峡工具程淹没区出行程土的珍贵文物，见证巴渝大地千年文明',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '重庆中国三峡博物馆三峡展厅',
      status: '热门',
      category: '历史文化',
      curator: '重庆中国三峡博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '三峡工具程蓄水前，国家组织开展了大规模的文物抢救性发掘工具作，在淹没区发现了大量珍贵文物。从旧石器时代的早期人类遗存，到巴国时期的青铜重器，从汉唐墓葬的精美器物，到宋明清的城镇遗址，三峡库区的考古发现极大丰富了巴渝地区的历史认知。乌杨石阙、巴人青铜器、汉晋墓葬群等重大发现，见证了三峡地区悠久的历史文明。本次展览系统展示三峡文物抢救性发掘成果，呈现巴渝大地的千年文明积淀。',
    }
  ],
  news: [
    {
      id: 103,
      museumId: 14,
      title: '博物馆14年度特展开幕',
      description: '博物馆14举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 104,
      museumId: 14,
      title: '博物馆14新数字化服务上线',
      description: '博物馆14推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 105,
      museumId: 14,
      title: '博物馆14举办文化活动',
      description: '博物馆14举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 16,
      museumId: 14,
      title: '三峡历史文化研究',
      author: '重庆中国三峡博物馆研究部',
      date: '2023-11-05',
      type: 'book',
      description: '系统研究三峡地区的历史文化发展历程。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 16,
      museumId: 14,
      title: '三峡虚拟漫游',
      description: 'VR技术重现三峡蓄水前的壮丽峡谷风光，穿越时空感受三峡原貌',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/2.webp',
    },
  ],
  exhibitionHalls: {
    14: [
      {
        id: 'cq-sanxia',
        name: '壮丽三峡展厅',
        icon: '🚢',
        category: '自然人文',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/2.webp',
        introduction:
          '全景式展现三峡地区的自然地理、历史文化和工具程建设，是了解三峡最全面的窗口。',
        stats: {
          artifacts: 600,
          exhibitions: 3,
          visitors: 350000,
        },
        location: '一楼中央大厅',
        openTime: '周二至周日 9:00-17:00（16:30停止入场）',
        duration: '1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '三峡纤夫石刻',
            period: '清代',
            description: '记录三峡纤夫艰辛生活的珍贵石刻资料',
            image: '',
          },
          {
            name: '巴人青铜兵器',
            period: '战国',
            description: '巴国时期青铜剑、戈等军事文物',
            image: '',
          },
          {
            name: '三峡工具程模型',
            period: '当代',
            description: '按比例精确还原的三峡水利枢纽模型',
            image: '',
          },
          {
            name: '川江号子录音档案',
            period: '当代',
            description: '国家级非物质文化遗产——川江号子的原始录音',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '壮丽三峡基本陈列',
            date: '常设展览',
            description: '自然景观、历史人文、工具程建设的综合展示',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['常设', '三峡'],
          },
          {
            title: '三峡移民精神展',
            date: '常设展览',
            description: '记录百万三峡移民的奉献故事',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['移民', '精神'],
          },
        ],
        recommendations: [
          {
            icon: '🔎',
            title: '三峡VR漫游',
            desc: '虚拟现实技术带你穿越三峡全境',
            type: 'VR',
          },
          {
            icon: '🎧',
            title: '巴渝文化导览',
            desc: '专业讲解带你读懂巴渝千年文脉',
            type: '音频',
          },
        ],
      },
      {
        id: 'cq-bayu',
        name: '远山有灵——巴渝文化展厅',
        icon: '🏔',
        category: '地域文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/3.webp',
        introduction:
          '聚焦巴渝地区独特的历史文化，展示从远古巴人到近代重庆的城市记忆。',
        stats: {
          artifacts: 400,
          exhibitions: 2,
          visitors: 180000,
        },
        location: '二楼东侧展厅',
        openTime: '周二至周日 9:00-17:00',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '巴蜀青铜编钟',
            period: '战国',
            description: '巴蜀文化代表性礼乐器',
            image: '',
          },
          {
            name: '钓鱼城出行程土瓷器',
            period: '宋元',
            description: '宋元战争时期钓鱼城遗址出行程土文物',
            image: '',
          },
          {
            name: '湖广填四川契约文书',
            period: '明清',
            description: '记录大规模移民历史的原始文献',
            image: '',
          },
          {
            name: '抗战时期重庆地图',
            period: '1930年代',
            description: '陪都时期的城市布局地图',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '巴渝春秋——重庆古代文明展',
            date: '常设展览',
            description: '从巴国到重庆府的历史脉络',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['巴渝', '历史'],
          },
          {
            title: '抗战岁月——重庆大后方展',
            date: '常设展览',
            description: '抗战时期作为战时首都的历史见证',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['抗战', '历史'],
          },
        ],
        recommendations: [
          {
            icon: '📝',
            title: '拓片体验工具坊',
            desc: '亲手制作巴蜀铭文拓片',
            type: '活动',
          },
          {
            icon: '🎬',
            title: '重庆老街影像馆',
            desc: '百年前重庆的老照片和影像资料',
            type: '视频',
          },
        ],
      },
    ],
  },
};

export default chongqingData;
