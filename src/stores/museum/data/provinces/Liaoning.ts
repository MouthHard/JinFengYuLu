import type { ProvinceData } from '@/typesOfPages/museum/index';

// 辽宁省份数据
export const liaoningData: ProvinceData = {
  code: 'Liaoning',
  name: '辽宁',
  museums: [
    {
      id: 16,
      name: '辽宁省博物馆',
      province: '辽宁',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '辽宁省博物馆是一座综合性博物馆，馆藏文物12万余件，以红山文化玉器、辽代瓷器、清代书画最具特色。',
      artifacts: 120000,
      exhibitions: 20,
      visitors: 2200000,
      features: ['国家一级博物馆', '辽宁省爱国主义教育基地'],
    },
  ],
  details: {
    16: {
      museumId: 16,
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
          forbidden: ['禁止携带宠物', '禁止触摸展品', '书画馆部分展品禁止拍照'],
        },
        transportation: {
          address: '辽宁省沈阳市浑南区智慧三街157号',
          metro: '地铁2号线白塔河路站转有轨电车1号线至省博物馆站',
          bus: '公交108、130、146、214、228、238、334路省博物馆站',
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
          phone: '024-23205102',
          email: 'lnmuseum@126.com',
          complaintPhone: '024-23205102',
          website: 'http://www.lnmuseum.com.cn',
        },
      },
      history:
        '辽宁省博物馆前身是1949年成立的东北博物馆，是新中国建立的第一座博物馆，1959年更名为辽宁省博物馆，2019年新馆建成开放，是首批国家一级博物馆。馆藏文物12万余件（套），珍贵文物近4万件，以红山文化玉器、辽代瓷器、宋元明清书画、碑刻为最具特色的收藏体系，尤其是书画收藏在全国公立博物馆中名列前茅。新馆建筑面积约10万平方米。',
      architecture:
        "新馆建筑外观采用'鼎'字造型，寓意辽宁作为中国工具具业摇篮和历史文明重镇的稳固地位。馆内设有'古代辽宁'通史陈列、'满族民俗展'、'中国古代铜镜展'、'中国古代佛教造像展'、'中国古代缂丝刺绣展'、'中国古代书画展'等常设展厅。",
      highlights:
        "书画收藏是其最引以为傲的领域，包括：宋徽宗赵佶《瑞鹤图卷》、《虢国夫人游春图》（唐代张萱画作，宋徽宗摹本）、欧阳询《行程程书千字文》、赵佶《草书千字文》、周昉《簪花仕女图》。此外还有C形玉龙（红山文化，被誉为'中华第一龙'）、辽代彩绘木棺及棺床、鸭形玻璃注（十六世纪进口波斯玻璃器）等国宝级文物。",
      education:
        "打造'辽博讲堂''红山文化研学''辽金历史文化'三大公教品牌。定期举办'辽代考古新发现'学术报告会。开设'红山玉器鉴赏''契丹文字识读''满族剪纸'等特色体验课程。",
    },
  },
  artifacts: [
    {
      id: 33,
      museumId: 16,
      name: 'C形玉龙',
      period: '红山文化',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '辽宁牛河梁红山文化遗址出行程土的玉龙，呈C形卷曲，造型简洁抽象，被誉为"中华第一龙"，是红山文化玉器的代表作，对研究龙文化的起源具有重要意义。',
      basicInfo: {
        periodDetail: '约公元前4700年–前2900年',
        material: '纸本设色',
        dimensions: '高5宽10厚3厘米',
        collection: '辽宁省博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了约公元前4700年–前2900年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
    {
      id: 34,
      museumId: 16,
      name: '宋徽宗瑞鹤图卷',
      period: '北宋',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '北宋徽宗赵佶亲笔绘制的绢本设色画，描绘了二十只白鹤盘旋于宫殿上空的祥瑞景象，笔墨精妙，是宋代院体画的代表作，展现了皇帝的艺术才华。',
      basicInfo: {
        periodDetail: '公元960年–1127年',
        material: '纸本设色',
        dimensions: '39×1158厘米（长卷）',
        collection: '辽宁省博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元960年–1127年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
  ],
  activities: [
    {
      id: 46,
      museumId: 16,
      title: '红山文化展',
      description: '展示辽宁地区的历史文化和民俗风情',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 47,
      museumId: 16,
      title: '红山文化研讨会',
      description: '探讨红山文化的考古发现和文化内涵',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 48,
      museumId: 16,
      title: '清代宫廷文化展',
      description: '展示清代宫廷文化和盛京故宫文物',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 46,
      museumId: 16,
      name: '红山玉龙模型',
      description: '红山文化C型玉龙复制品',
      price: 228,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 47,
      museumId: 16,
      name: '辽代绘画复制品',
      description: '辽宁省博物馆藏辽代绘画复制品',
      price: 158,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
    {
      id: 48,
      museumId: 16,
      name: '东北民俗明信片',
      description: '东北地区传统民俗明信片套装',
      price: 35,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 127,
      museumId: 16,
      name: '瑞鹤图卷轴复制',
      description: '宋徽宗《瑞鹤图》高仿真艺术微喷复制卷轴，附装裱和画作赏析',
      price: 328,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
  ],
  exhibitions: [
    {
      id: 18,
      museumId: 16,
      title: '红山文化展',
      description: '展示辽宁红山文化的玉器和陶器等代表性文物',
      date: '2024-04-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '辽宁省博物馆红山文化展厅',
      status: '热门',
      category: '考古发现',
      curator: '辽宁省博物馆',
      scale: '300余件（套）文物',
      visitors: 320000,
      background: '红山文化是中国北方地区新石器时代晚期的重要考古学文化,距今约5500-5000年,以辽宁牛河梁遗址为代表。红山文化先民建造了中国最早的大型祭坛和女神庙,发展出行程成熟的玉礼器系统。C形玉龙、玉猪龙等玉器造型抽象神秘,被视为龙文化的起源之一。红山文化的发现将中华文明史向前推进了1000年,对研究中华文明起源具有重大意义。本次展览系统展示红山文化的玉器、陶器等文物,揭示辽西地区史前文明的辉煌成就。',
    },
    {
      id: 329,
      museumId: 16,
      title: '红山文化玉器精品展',
      description: '以玉猪龙、C形龙为代表，展示红山文化玉器的独特魅力与宗教信仰内涵',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '辽宁省博物馆红山文化展厅',
      status: '热门',
      category: '历史文化',
      curator: '辽宁省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '红山文化玉器是中国史前玉文化的杰出行程代表,以独特的造型和神秘的内涵著称。玉猪龙、C形玉龙等器物将动物形象抽象化,体现了红山先民的宗教信仰和艺术创造力。红山玉器主要用于祭祀活动,与女神庙、祭坛等遗迹共同构成了完整的原始宗教体系。玉器的使用可能已形成等级制度,暗示了早期国家的萌芽。本次展览精选红山文化玉器精品,深入解读其造型语言、制作工具艺和宗教内涵,揭示红山玉文化的独特魅力。',
    }
  ],
  news: [
    {
      id: 109,
      museumId: 16,
      title: '博物馆16年度特展开幕',
      description: '博物馆16举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 110,
      museumId: 16,
      title: '博物馆16新数字化服务上线',
      description: '博物馆16推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 111,
      museumId: 16,
      title: '博物馆16举办文化活动',
      description: '博物馆16举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 18,
      museumId: 16,
      title: '红山文化研究',
      author: '辽宁省博物馆研究部',
      date: '2023-10-10',
      type: 'book',
      description: '系统研究红山文化的发现、研究和意义。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 6,
      museumId: 16,
      title: '辽代帝后像虚拟展厅',
      description: '通过VR技术沉浸式欣赏辽代帝后画像的细节与色彩',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    16: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/3.webp',
        introduction:
          '系统展示辽宁省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 346,
          exhibitions: 2,
          visitors: 67391,
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
            description: '辽宁省博物馆最具代表性的珍贵文物',
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
            title: '辽宁省历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/8.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 398,
          exhibitions: 2,
          visitors: 51116,
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

export default liaoningData;
