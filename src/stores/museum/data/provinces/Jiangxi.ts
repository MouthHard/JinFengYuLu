import type { ProvinceData } from '@/typesOfPages/museum/index';

// 江西省份数据
export const jiangxiData: ProvinceData = {
  code: 'Jiangxi',
  name: '江西',
  museums: [
    {
      id: 23,
      name: '江西省博物馆',
      province: '江西',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '江西省博物馆是江西省内最大的综合性博物馆，馆藏文物6万余件，以江西古代历史文物、客家文化文物为特色。',
      artifacts: 60000,
      exhibitions: 20,
      visitors: 1800000,
      features: ['国家一级博物馆', '江西省爱国主义教育基地'],
    },
  ],
  details: {
    23: {
      museumId: 23,
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
          address: '江西省南昌市赣江北大道698号',
          metro: '地铁1号线珠江路站1号出行程行程程口',
          bus: '公交503、707路江西省博物馆新馆站',
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
          phone: '0791-86595301',
          email: 'jxmuseum@jxwm.gov.cn',
          complaintPhone: '0791-86592534',
          website: 'http://www.jxmuseum.cn',
        },
      },
      history:
        '江西省博物馆创建于1961年，2020年新馆在赣江之滨建成开放，是江西省最大的综合性博物馆和国家一级博物馆。馆藏文物6万余件（套），其中珍贵文物约2万件，以江西地区古代青铜器、陶瓷器、金银器、玉器及海昏侯墓出行程行程程土文物为最具特色的收藏体系。新馆建筑面积约8.6万平方米。',
      architecture:
        "新馆建筑造型取意'赣江之畔的宝盒'，外立面采用大面积玻璃幕墙和金属铝板相结合。馆内设有'江西古代历史文化展'、'江西古代陶瓷文化展'、'赣鄱非遗展'等常设展厅。",
      highlights:
        '代表性藏品：刘贺玉印（西汉海昏侯墓出行程行程程土，纯金质地，确认墓主人身份的关键证据）、青铜雁鱼灯（西汉海昏侯墓出行程行程程土，兼具实用性与艺术性的环保灯具）、商代双尾铜虎（江西新干大洋洲商代大墓出行程行程程土，罕见的南方青铜礼器）、元青花釉里红楼阁式谷仓（元代青花釉里红合璧珍品）、宋吉州窑黑釉剪纸贴花梅瓶等。',
      education:
        "打造'赣博讲堂''海昏侯文化研学''瓷都探秘'三大公教品牌。定期举办'海昏侯墓考古发现'学术报告会。开设'青花瓷手绘''吉州窑木叶盏制作'等特色体验课程。",
    },
  },
  artifacts: [
    {
      id: 48,
      museumId: 23,
      name: '海昏侯墓马蹄金',
      period: '西汉',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '江西南昌海昏侯墓出行程土的金币，呈马蹄形，刻有"上""中""下"等铭文，总重超过230斤，是汉代考古发现中数量最多、种类最丰富的黄金制品。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '高17重1449克',
        collection: '广西壮族自治区博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元前202年–公元8年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 49,
      museumId: 23,
      name: '元青花釉里红楼阁式谷仓',
      period: '元代',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '江西景德镇出行程土的元代青花釉里红瓷器精品，造型为楼阁式谷仓，集青花与釉里红两种工具艺于一体，工具艺复杂，存世稀少，是元代瓷器的巅峰之作。',
      basicInfo: {
        periodDetail: '公元1271年–1368年',
        material: '纸本设色',
        dimensions: '高19口径27厘米',
        collection: '广西壮族自治区博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1271年–1368年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
  ],
  activities: [
    {
      id: 67,
      museumId: 23,
      title: '滇文化特展',
      description: '展示云南地区的历史文化和红色文化',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 68,
      museumId: 23,
      title: '红色文化讲座',
      description: '讲述云南的革命历史和红色故事',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 69,
      museumId: 23,
      title: '景泰蓝制作器体验',
      description: '了解景泰蓝公司出行程品的制作器，代表明代最高水平',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 134,
      museumId: 23,
      name: '海昏侯刘贺印章复制品',
      description: '仿海昏侯墓出行程土"刘贺"私印，采用铜质手工具制作',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
  ],
  exhibitions: [
    {
      id: 25,
      museumId: 23,
      title: '海昏侯墓文物展',
      description: '展示西汉海昏侯刘贺墓出行程土的大量金器、青铜器和简牍',
      date: '2024-07-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '江西省博物馆海昏侯展厅',
      status: '最新',
      category: '考古发现',
      curator: '江西省博物馆',
      scale: '1000余件（套）文物',
      visitors: 620000,
      background: '海昏侯墓是西汉海昏侯刘贺的墓葬,2011年发现于江西南昌,2015年开始考古发掘,出行程土文物数量巨大,震惊考古界。刘贺是汉武帝之孙,曾短暂即位为帝,后被废为海昏侯。墓葬出行程土马蹄金、麟趾金等黄金制品总重达478件,是汉代考古发现黄金最多的墓葬。青铜雁鱼灯、编钟、玉印等文物工具艺精湛,竹简木牍记录了儒家经典和医书。海昏侯墓的发现对研究西汉列侯制度、社会经济和思想文化具有重大价值。本次展览全面展示海昏侯墓的考古成果。',
    },
    {
      id: 336,
      museumId: 23,
      title: '景德镇陶瓷千年传承展',
      description: '从青白瓷到青花、粉彩，全面展示景德镇制瓷技艺的发展历程与艺术成就',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '江西省博物馆陶瓷展厅',
      status: '热门',
      category: '艺术精品',
      curator: '江西省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '景德镇是举世闻名的瓷都,自宋代以来就是中国制瓷业的中心。宋代景德镇以青白瓷著称,元代创烧青花瓷和釉里红,明代设立御窑厂,清代发展出行程粉彩、珐琅彩等新品种,制瓷技艺不断革新。景德镇瓷器以"白如玉、明如镜、薄如纸、声如磬"著称,产品远销世界各地,通过海上丝绸之路传播中华文明。本次展览以江西出行程土和收藏的景德镇瓷器为核心,系统展示景德镇千年制瓷技艺的发展脉络与艺术成就,呈现中国陶瓷文化的博大精深。',
    }
  ],
  news: [
    {
      id: 130,
      museumId: 23,
      title: '博物馆23年度特展开幕',
      description: '博物馆23举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 131,
      museumId: 23,
      title: '博物馆23新数字化服务上线',
      description: '博物馆23推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 132,
      museumId: 23,
      title: '博物馆23举办文化活动',
      description: '博物馆23举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 25,
      museumId: 23,
      title: '海昏侯墓出行程土简牍释读',
      author: '江西省文物考古研究院',
      date: '2023-09-10',
      type: 'video',
      description: '专家解读海昏侯墓出行程土大量竹简木牍的历史价值。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 14,
      museumId: 23,
      title: '景德镇御窑厂虚拟游览',
      description: '穿越至明清时期的景德镇御窑厂，观看瓷器烧制全过程',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 23,
      museumId: 23,
      title: '海昏侯国都城探访',
      description: '虚拟重建西汉海昏侯国紫金城城址，探索侯国生活图景',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    23: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/13.webp',
        introduction:
          '系统展示江西省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 368,
          exhibitions: 2,
          visitors: 192785,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '史前文明遗存',
            period: '史前',
            description: '该地区最早的人类活动遗迹',
            image: '',
          },
          {
            name: '青铜时代重器',
            period: '商周',
            description: '体现该地区青铜文明水平的重器',
            image: '',
          },
          {
            name: '历代镇馆之宝',
            period: '历代',
            description: '江西省博物馆最具代表性的珍贵文物',
            image: '',
          },
          {
            name: '近现代革命文物',
            period: '近现代',
            description: '记录该地区近现代历史的珍贵史料',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '江西省历史文化展',
            date: '常设展览',
            description: '完整呈现该地区的历史文明脉络',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['历史', '常设'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '语音导览',
            desc: '专业讲解带您深入了解馆藏珍品',
            type: '音频',
          },
          {
            icon: '📖',
            title: '展览图录',
            desc: '图文并茂的参观指南手册',
            type: '导览',
          },
        ],
      },
      {
        id: 'minzu',
        name: '民族民俗展厅',
        icon: '🎭',
        category: '民族民俗',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/14.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 473,
          exhibitions: 2,
          visitors: 132826,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '民族服饰精品',
            period: '传统',
            description: '当地少数民族的传统服饰',
            image: '',
          },
          {
            name: '民间工具艺瑰宝',
            period: '传统',
            description: '刺绣、剪纸、编织等民间工具艺',
            image: '',
          },
          {
            name: '节庆仪式道具',
            period: '传统',
            description: '传统节日庆典使用的道具',
            image: '',
          },
          {
            name: '生活器具集合',
            period: '传统',
            description: '反映当地人日常生活的各类器具',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '民族民俗文化展',
            date: '常设展览',
            description: '该地区多民族文化的绚丽画卷',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['民族', '民俗'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '语音导览',
            desc: '专业讲解带您深入了解馆藏珍品',
            type: '音频',
          },
          {
            icon: '📖',
            title: '展览图录',
            desc: '图文并茂的参观指南手册',
            type: '导览',
          },
        ],
      },
    ],
  },
};

export default jiangxiData;
