import type { ProvinceData } from '@/typesOfPages/museum';

export const henanData: ProvinceData = {
  code: 'Henan',
  name: '河南',
  museums: [
    {
      id: 7,
      name: '河南博物院',
      province: '河南',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '河南博物院是中国建立最早的博物馆之一，也是国家一级博物馆。馆藏文物17万余件，以史前文物、商周青铜器、历代陶瓷器、玉器及书画最具特色。',
      artifacts: 170000,
      exhibitions: 35,
      visitors: 4000000,
      features: ['国家AAAAA级旅游景区', '首批国家一级博物馆'],
    },
  ],
  details: {
    7: {
      museumId: 7,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00',
          stopEntryTime: '16:30',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '节假日开放时间以官网公告为准',
        },
        ticket: {
          price: '免费（需预约）',
          isFree: true,
          needReservation: true,
          idRequired: '有效证件预约入馆',
          discountPolicy: [
            '未成年人免费',
            '老年人优先进馆',
            '团体参观需提前预约',
          ],
        },
        rules: {
          allowed: ['基本陈列可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品', '禁止使用自拍杆'],
        },
        transportation: {
          address: '河南省郑州市金水区农业路8号',
          metro: '地铁2号线关虎屯站C口出行程行程程，向东步行程约800米',
          bus: '公交B1、B11、B18、6、28、64、83、93、916路河南博物院站',
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
          phone: '0371-63511082',
          email: 'hnbowuguan@126.com',
          complaintPhone: '0371-63511237',
          website: 'http://www.chnmus.net',
        },
      },
      history:
        '河南博物院创建于1927年，原名河南省博物馆，1997年新馆落成并更名为河南博物院，是中国建立最早、影响较大的博物馆之一。河南地处中原腹地，是中华文明的重要发源地，历史上先后有夏、商、周等二十多个王朝在此建都。馆藏文物17万余件（套），珍贵文物近6万件。',
      architecture:
        "河南博物院主展馆由齐康院士主持设计，以'中原之气'为核心理念，主体建筑呈金字塔形（覆斗形）。2020年完成历时五年的主展馆提升改造工具具程。馆内设有16个展厅，展览面积约1万平方米。",
      highlights:
        '九大镇院之宝：贾湖骨笛（距今约9000年，中国最早的乐器实物）、杜岭方尊（商代早期青铜重器）、妇好鸮尊（商晚期）、莲鹤方壶（春秋青铜杰作）、云纹铜禁（春秋失蜡法铸造代表）、玉柄铁剑（西周晚期）、汝窑天青釉洗（宋代五大名窑之首）、北宋天蓝釉刻花鹅颈瓶（传世孤品）、武则天金简（中国现存唯一帝王金简）。',
      education:
        "打造'豫博讲堂''豫博学堂''中原古乐演奏会'三大公教品牌。'中原古乐演奏会'利用馆藏贾湖骨笛等复制品再现上古雅乐之美。开设'考古盲盒'等趣味体验活动。",
    },
  },
  artifacts: [
    {
      id: 11,
      museumId: 7,
      name: '莲鹤方壶',
      period: '春秋',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '春秋时期青铜礼器的巅峰之作，壶盖立鹤造型独特，代表了春秋时代青铜艺术从庄重向灵动的转变，被誉为"东方最美的青铜器"。',
      basicInfo: {
        periodDetail: '公元前770年–前476年',
        material: '纸本设色',
        dimensions: '高44口径29厘米',
        collection: '河南博物院',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前770年–前476年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 12,
      museumId: 7,
      name: '妇好鸮尊',
      period: '商代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '商代晚期青铜酒店器，以猫头鹰（鸮）为原型铸造，是商王武丁配偶妇好的随葬品，展现了商代高超的青铜铸造技术和神秘的宗教文化。',
      basicInfo: {
        periodDetail: '约公元前1600年–前1046年',
        material: '纸本设色',
        dimensions: '高23口径62厘米',
        collection: '河南博物院',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1600年–前1046年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 13,
      museumId: 7,
      name: '汝窑天青釉洗',
      period: '北宋',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '北宋汝窑瓷器精品，以"雨过天青云破处"的天青色釉著称，釉面温润如玉，是宋代五大名窑之首的传世珍品，极为罕见。',
      basicInfo: {
        periodDetail: '公元960年–1127年',
        material: '纸本设色',
        dimensions: '高27口径7厘米',
        collection: '河南博物院',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元960年–1127年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
    {
      id: 97,
      museumId: 7,
      name: '贾湖骨笛',
      period: '新石器时代',
      category: '乐器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '距今约8000年的新石器时代吹奏乐器，用丹顶鹤尺骨制成，是中国目前发现的最早的乐器实物，改写了世界音乐史。',
      basicInfo: {
        periodDetail: '约公元前10000年–前2000年',
        material: '传统手工具材质',
        dimensions: '长25厘米，直径3厘米',
        collection: '河南博物院',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是约公元前10000年–前2000年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 19,
      museumId: 7,
      title: '中原文明展',
      description: '展示中原地区悠久的历史文明',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 20,
      museumId: 7,
      title: '商周青铜器研讨会',
      description: '探讨商周青铜器的制作工具艺和文化内涵',
      date: '2024-05-15 至 2024-05-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 21,
      museumId: 7,
      title: '考古发掘成果展',
      description: '展示河南最新的考古发掘成果',
      date: '2024-08-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 20,
      museumId: 7,
      name: '莲鹤方壶摆件',
      description: '春秋莲鹤方壶缩小版模型',
      price: 298,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 21,
      museumId: 7,
      name: '中原文明主题文具',
      description: '以河南出行程土文物为主题的文具套装',
      price: 78,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 118,
      museumId: 7,
      name: '贾湖骨笛音乐盒',
      description: '以贾湖骨笛为造型的木质音乐盒，可播放古曲《高山流水》',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
  ],
  exhibitions: [
    {
      id: 9,
      museumId: 7,
      title: '中原文明展',
      description: '展示中原地区夏商周至宋金元的历史文物',
      date: '2024-02-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '河南博物院主展馆',
      status: '热门',
      category: '历史文化',
      curator: '河南博物院',
      scale: '1500余件文物',
      visitors: 750000,
      background: '中原大地是中华文明的核心区域，夏商周三代在此建都，二十余个王朝在此兴衰。从二里头文化的夏都遗存，到殷墟商代的甲骨青铜，从两周的礼乐文明，到汉唐宋金的都城繁华，中原积淀了五千年的文明记忆。本次展览以时间为序，系统展示中原地区从夏商周到宋金元的历史文物，重点呈现中原作为中华文明发源地的核心地位与深远影响。',
    },
    {
      id: 320,
      museumId: 7,
      title: '中原青铜器精华展',
      description: '以妇好墓出行程土文物为代表，系统展示河南作为中华文明发源地的青铜文明成就',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '河南省博物院青铜馆',
      status: '热门',
      category: '历史文化',
      curator: '河南省博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '河南是商周青铜文明的核心区域，安阳殷墟、郑州商城、洛阳周都等地出行程土了大量青铜重器。其中妇好墓出行程土的青铜器数量众多、品类齐全、工具艺精湛，是商代晚期青铜艺术的集中体现。妇好是商王武丁的王后兼女将军，其墓出行程土的妇好鸮尊、三联甗等青铜器，不仅展现了商代高超的铸造工具艺，更揭示了商代王室女性的地位与生活。本次展览以妇好墓文物为代表，系统展示中原青铜文明的辉煌成就。',
    }
  ],
  news: [
    {
      id: 19,
      museumId: 7,
      title: '博物馆7年度特展开幕',
      description: '博物馆7举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 20,
      museumId: 7,
      title: '博物馆7新数字化服务上线',
      description: '博物馆7推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 21,
      museumId: 7,
      title: '博物馆7举办文化活动',
      description: '博物馆7举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 9,
      museumId: 7,
      title: '中原历史文化研究',
      author: '河南博物院研究部',
      date: '2023-10-05',
      type: 'article',
      description: '对中原地区的历史文化进行程深入研究。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 16,
      museumId: 7,
      title: '中原文明起源之路',
      description: '时间轴式交互体验，从仰韶文化到商周文明的中原史诗',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    7: [
      {
        id: 'hn-henan',
        name: '中原古代文明展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/5.webp',
        introduction:
          '河南是中华民族与华夏文明史的主要发祥地。本展厅按历史顺序展示从史前到明清的中原文明，九大镇院之宝贯穿始终。',
        stats: {
          artifacts: 1400,
          exhibitions: 5,
          visitors: 380000,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆，周一闭馆）',
        duration: '2.5-3小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '贾湖骨笛',
            period: '新石器时代',
            description: '距今8000多年的吹奏乐器，改写音乐史',
            image: '',
          },
          {
            name: '杜岭方鼎',
            period: '商代',
            description: '商代早期青铜重器',
            image: '',
          },
          {
            name: '妇好鸮尊',
            period: '商代',
            description: '商代女将军妇好的酒店器',
            image: '',
          },
          {
            name: '莲鹤方壶',
            period: '春秋',
            description: '春秋时期青铜器的巅峰之作',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '中原古代文明之光',
            date: '常设展览',
            description: '十六朝古都的文明积淀',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['中原', '常设'],
          },
          {
            title: '河南博物院九大镇院之宝展',
            date: '常设展览',
            description: '九件国宝级文物的集中展示',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['镇馆之宝', '常设'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '中原文明深度导览',
            desc: '五千年文明史的浓缩之旅',
            type: '音频',
          },
          {
            icon: '📖',
            title: '九大镇馆之宝攻略略',
            desc: '不可错过的国宝清单',
            type: '导览',
          },
        ],
      },
      {
        id: 'hn-qingtong',
        name: '中原楚系青铜艺术展厅',
        icon: '🟦',
        category: '青铜艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/6.webp',
        introduction:
          '河南南部曾是楚国疆域，出行程土了大量精美绝伦的楚式青铜器。本展厅集中展示淅川下寺楚墓等地的重大考古发现。',
        stats: {
          artifacts: 500,
          exhibitions: 2,
          visitors: 200000,
        },
        location: '主展馆西侧专题厅',
        openTime: '周二至周日 9:00-17:00',
        duration: '1-1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '云纹铜禁',
            period: '春秋',
            description: '失蜡法铸造的精密青铜器',
            image: '',
          },
          {
            name: '王子午鼎',
            period: '春秋',
            description: '带有长篇铭文的楚国王室重器',
            image: '',
          },
          {
            name: '王孙诰编钟',
            period: '春秋',
            description: '26件一套的大型编钟',
            image: '',
          },
          {
            name: '蟠螭纹铜鉴缶',
            period: '战国',
            description: '楚式青铜器的华丽典范',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '中原楚系青铜艺术展',
            date: '常设展览',
            description: '楚式青铜器的浪漫与精致',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['楚系青铜', '常设'],
          },
          {
            title: '淅川楚墓考古发现展',
            date: '年度特展',
            description: '楚国贵族墓葬的最新研究成果',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['考古', '特展'],
          },
        ],
        recommendations: [
          {
            icon: '🎵',
            title: '编钟演奏体验',
            desc: '聆听仿制的楚编钟演奏',
            type: '体验',
          },
          {
            icon: '🧑‍🏫',
            title: '青铜铸造讲座',
            desc: '失蜡法 vs 范铸法的技术解析',
            type: '讲座',
          },
        ],
      },
    ],
  },
};

export default henanData;
