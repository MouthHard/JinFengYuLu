import type { ProvinceData } from '@/typesOfPages/museum/index';

// 福建省份数据
export const fujianData: ProvinceData = {
  code: 'Fujian',
  name: '福建',
  museums: [
    {
      id: 19,
      name: '福建博物院',
      province: '福建',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '福建博物院是福建省内最大的综合性博物馆，馆藏文物15万余件，以海上丝绸之路文物、闽南文化遗存为特色。',
      artifacts: 250000,
      exhibitions: 28,
      visitors: 3000000,
      features: ['国家一级博物馆', '全国科普教育基地'],
    },
  ],
  details: {
    19: {
      museumId: 19,
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
          forbidden: ['禁止携带宠物', '禁止触摸展品'],
        },
        transportation: {
          address: '福建省福州市鼓楼区湖头街96号',
          metro: '无直达地铁',
          bus: '公交4、8、10、23、42、66、87、101、105、112、308路福建博物院站',
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
          phone: '0591-87556666',
          email: 'fjbwg@fjbm.com',
          complaintPhone: '0591-87556667',
          website: 'http://www.fjmuseum.com',
        },
      },
      history:
        '福建博物院前身是1933年成立的福建省立科学馆，1972年正式成立福建省博物馆，2002年新馆落成并更为现名，是福建省唯一的省级综合类博物馆和国家一级博物馆。馆藏文物17万余件（套），珍贵文物近3万件，以闽越文化文物、海上丝绸之路文物、福建古代书画、寿山石雕、德化白瓷为特色收藏方向。新馆建筑面积约3.6万平方米。',
      architecture:
        "新馆建筑外观融合了福建土楼的圆形元素和闽南传统建筑的燕尾脊造型，整体呈'三坊七巷'的布局意象。馆内设有'福建古代文明之光'通史展、'丝路帆远——海上丝绸之路文物精品展'、'德化白瓷展'等常设展厅。",
      highlights:
        "代表性藏品：西周云纹青铜大铙（福建出行程行程程土最大最完整的西周青铜乐器）、南宋沉船'南海一号'出行程行程程水文物、明德化窑何朝宗款观音像（明代瓷塑大师代表作）、林则徐书法手迹、郑成功佩剑等。海上丝绸之路文物收藏尤为丰富系统。",
      education:
        "打造'闽博讲堂''海丝文化研学''福船技艺体验'三大公教品牌。定期举办'海上丝绸之路与福建'学术研讨。开设'德化瓷塑制作''寿山石雕刻''福州脱胎漆器'等福建传统工具具艺体验课程。",
    },
  },
  artifacts: [
    {
      id: 39,
      museumId: 19,
      name: '德化窑白釉观音像',
      period: '明代',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/ landscape/1.webp',
      description:
        '福建德化窑烧制的白瓷观音像，釉色洁白如玉，造型端庄优美，神态慈祥，是明代德化窑瓷器中的精品，被誉为"中国白"的代表作品。',
      basicInfo: {
        periodDetail: '公元1368年–1644年',
        material: '纸本设色',
        dimensions: '高36口径5厘米',
        collection: '河北博物院',
        excavation: '传世品，历经数代收藏传承',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1368年–1644年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
    {
      id: 40,
      museumId: 19,
      name: '南宋沉船出行程行程程水瓷器',
      period: '南宋',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '福建泉州湾南宋沉船出行程土的外销瓷器，包括青瓷、白瓷等多种类型，是研究宋代海上丝绸之路和中外贸易交流的重要实物资料。',
      basicInfo: {
        periodDetail: '公元1127年–1279年',
        material: '纸本设色',
        dimensions: '高13口径11厘米',
        collection: '河北博物院',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1127年–1279年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
  ],
  activities: [
    {
      id: 55,
      museumId: 19,
      title: '闽台文化展',
      description: '展示福建与台湾的历史文化联系',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 56,
      museumId: 19,
      title: '海上丝绸之路研讨会',
      description: '探讨海上丝绸之路的历史和文化',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 57,
      museumId: 19,
      title: '闽南文化体验',
      description: '了解闽南文化，体验传统习俗',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 55,
      museumId: 19,
      name: '德化白瓷茶具',
      description: '福建德化白瓷手工具茶具套装',
      price: 298,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 56,
      museumId: 19,
      name: '福建土楼模型',
      description: '福建客家土楼建筑模型',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 57,
      museumId: 19,
      name: '闽南风情明信片',
      description: '福建闽南地区传统文化明信片套装',
      price: 35,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 130,
      museumId: 19,
      name: '德化白瓷观音像摆件',
      description: '以明代何朝宗风格为参考的德化白瓷观音立像，手工具捏制',
      price: 468,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [
    {
      id: 21,
      museumId: 19,
      title: '福建海上贸易展',
      description: '展示福建在古代海上贸易中的地位和文物遗存',
      date: '2024-04-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '福建博物院海上丝绸之路展厅',
      status: '热门',
      category: '历史文化',
      curator: '福建博物院',
      scale: '400余件（套）文物',
      visitors: 300000,
      background: '福建是中国古代海上丝绸之路的重要起点，泉州港、福州港在宋元时期达到鼎盛，成为世界性的贸易大港。大量外销瓷器、茶叶、丝绸从福建港口启航，远销东南亚、中东、欧洲等地。福建出行程土的海上丝绸之路文物丰富多样，包括外销瓷器、航海仪器、外来金银币等，见证了福建在古代海上贸易中的核心地位。本次展览系统展示福建海上贸易文物，呈现福建作为海上丝绸之路起点的历史贡献。',
    },
    {
      id: 332,
      museumId: 19,
      title: '海上丝绸之路与福建',
      description: '以泉州港、福州港为中心，展现福建在古代海上贸易中的核心地位',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '福建省博物馆海丝展厅',
      status: '热门',
      category: '历史文化',
      curator: '福建省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '福建地处中国东南沿海，是古代海上丝绸之路的重要起点与枢纽。泉州港在宋元时期被誉为"东方第一大港"，福州港、漳州月港等也曾在不同历史时期发挥重要作用。福建的德化白瓷、建窑黑釉瓷、福船造船技艺等，都与海上丝绸之路密切相关。大量外销瓷器、香料、珠宝等文物的出行程土，见证了福建与世界的贸易往来。本次展览以泉州港、福州港为中心，系统展现福建在古代海上贸易中的核心地位与深远影响。',
    }
  ],
  news: [
    {
      id: 118,
      museumId: 19,
      title: '博物馆19年度特展开幕',
      description: '博物馆19举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 119,
      museumId: 19,
      title: '博物馆19新数字化服务上线',
      description: '博物馆19推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 120,
      museumId: 19,
      title: '博物馆19举办文化活动',
      description: '博物馆19举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 21,
      museumId: 19,
      title: '海上丝绸之路研究',
      author: '福建博物院研究部',
      date: '2023-11-15',
      type: 'article',
      description: '对福建在海上丝绸之路中的地位和作用进行程深入研究。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 13,
      museumId: 19,
      title: '海上丝绸之路航海模拟',
      description: '驾驶古代福船航行程于海上丝绸之路航线，见证中外文化交流',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    19: [
      {
        id: 'fj-minyue',
        name: '福建古代文明之光展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/4.webp',
        introduction:
          '系统展示福建从史前时期到明清时代的文明进程，突出行程闽越文化、海上丝绸之路、妈祖信仰等地域特色。',
        stats: {
          artifacts: 700,
          exhibitions: 3,
          visitors: 180000,
        },
        location: '主展馆一至二层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1.5-2小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '昙石山文化陶器群',
            period: '新石器时代',
            description: '福建新石器时代文化的典型代表',
            image: '',
          },
          {
            name: '闽越王城瓦当',
            period: '汉代',
            description: '武夷山闽越王城遗址出行程土的建筑构件',
            image: '',
          },
          {
            name: '德化窑白釉观音像',
            period: '明代',
            description: '"中国白"德化瓷的代表作品',
            image: '',
          },
          {
            name: '福船船模',
            period: '明代',
            description: '还原郑和下西洋所用的福船形制',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '福建古代文明之光',
            date: '常设展览',
            description: '从史前到明清的福建文明演进',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['常设', '文明史'],
          },
          {
            title: '海上丝绸之路与福建',
            date: '常设展览',
            description: '福建在古代海上贸易中的核心地位',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['海丝', '贸易'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '闽都文化语音导览',
            desc: '深入了解福建多元文化交融',
            type: '音频',
          },
          {
            icon: '📖',
            title: '海丝之路导览手册',
            desc: '追溯海上丝绸之路的福建印记',
            type: '导览',
          },
        ],
      },
      {
        id: 'fj-dehua',
        name: '德化瓷艺展厅',
        icon: '🏺',
        category: '陶瓷艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/5.webp',
        introduction:
          '集中展示享誉世界的德化白瓷，从宋代至今的制瓷技艺传承与创新，被誉为"世界白瓷之母"。',
        stats: {
          artifacts: 300,
          exhibitions: 2,
          visitors: 100000,
        },
        location: '主展馆三层',
        openTime: '周二至周日 9:00-17:00',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '何朝宗款观音立像',
            period: '明代',
            description: '明代瓷塑大师何朝宗代表作',
            image: '',
          },
          {
            name: '象牙白釉梅花杯',
            period: '明代',
            description: '德化窑经典器型，釉色如凝脂',
            image: '',
          },
          {
            name: '青花山水纹瓶',
            period: '清代',
            description: '德化青花瓷成熟期作品',
            image: '',
          },
          {
            name: '现代何朝宗复刻系列',
            period: '当代',
            description: '当代匠人对传统技艺的传承之作',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '德化白瓷艺术展',
            date: '常设展览',
            description: '跨越千年的德化瓷艺精华',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['德化瓷', '常设'],
          },
          {
            title: '瓷塑大师作品展',
            date: '年度轮换',
            description: '历代德化瓷塑名家作品专题',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['大师', '轮换'],
          },
        ],
        recommendations: [
          {
            icon: '🎨',
            title: '瓷塑手绘体验',
            desc: '在素坯上绘制德化白瓷图案',
            type: '活动',
          },
          {
            icon: '🔍',
            title: '瓷器鉴定入门',
            desc: '学习鉴别德化瓷真伪的方法',
            type: '讲座',
          },
        ],
      },
    ],
  },
};

export default fujianData;
