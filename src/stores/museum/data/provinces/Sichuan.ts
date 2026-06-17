import type { ProvinceData } from '@/typesOfPages/museum';

export const sichuanData: ProvinceData = {
  code: 'Sichuan',
  name: '四川',
  museums: [
    {
      id: 11,
      name: '四川博物院',
      province: '四川',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '四川博物院是西南地区最大的综合性博物馆，馆藏文物26万余件，其中珍贵文物5万余件，以青铜器、书画最具特色。',
      artifacts: 260000,
      exhibitions: 32,
      visitors: 3200000,
      features: ['国家一级博物馆', '四川省爱国主义教育基地'],
    },
  ],
  details: {
    11: {
      museumId: 11,
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
          forbidden: ['禁止携带宠物', '禁止触摸展品', '张大千书画馆禁止拍照'],
        },
        transportation: {
          address: '四川省成都市青羊区青华路5号',
          metro: '地铁4号线草堂北路站B口出行程行程程，向北步行程约600米',
          bus: '公交19、35、47、58、82、151、165、170、309、901路四川博物院站',
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
          phone: '028-65521882',
          email: 'sc-museum@163.com',
          complaintPhone: '028-65521669',
          website: 'http://www.scmuseum.cn',
        },
      },
      history:
        '四川博物院前身是1941年成立的四川博物馆，1965年更名四川省博物馆，2009年新馆落成，是西南地区最大的综合性博物馆和国家一级博物馆。毗邻杜甫草堂，坐拥浣花溪畔优美的自然环境。馆藏文物26万余件，珍贵文物5万余件，以巴蜀青铜器、张大千书画、汉代陶石艺术、民族文物为特色。',
      architecture:
        "新馆建筑面积约3.2万平方米，建筑造型借鉴汉代石刻和三星堆青铜面具的艺术元素，外观粗犷有力又富有地域文化特色。馆内设有'远古四川'（含三星堆专馆）、'青铜时代'、'书画馆（张大千书画馆）'、'汉代陶石艺术馆'、'民族文物馆'等常设展厅，展览面积约1.2万平方米。",
      highlights:
        '代表性藏品：三星堆青铜大立人像（高262厘米，世界最高最完整的青铜立人像）、三星堆青铜神树（复原高度约5米）、三星堆金面具（含金量85%）、象首耳兽面纹铜罍（西周）、张大千临摹敦煌壁画（183幅，国内唯一完整收藏）、东汉说唱俑、宋代赵昌《写生蛱蝶图》。张大千书画收藏量居全国公立博物馆首位。',
      education:
        "打造'川博讲堂''巴蜀文化研学''张大千艺术赏析'三大公教品牌。定期举办'三星堆与古蜀文明'学术讲座。开设'川剧变脸体验''藏族唐卡绘制'等民族文化工具具作坊。与成都杜甫草堂、武侯祠联动打造'天府文化走廊'。",
    },
  },
  artifacts: [
    {
      id: 22,
      museumId: 11,
      name: '三星堆青铜纵目面具',
      period: '商代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '三星堆遗址出行程土的神秘青铜面具，双眼呈圆柱状向前凸出行程，造型奇特夸张，代表了古蜀文明独特的宗教信仰和审美观念，是世界青铜艺术史上的孤品。',
      basicInfo: {
        periodDetail: '约公元前1600年–前1046年',
        material: '纸本设色',
        dimensions: '高51口径61厘米',
        collection: '浙江省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1600年–前1046年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 23,
      museumId: 11,
      name: '青铜神树',
      period: '商代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '三星堆遗址出行程土的大型青铜神树，高近4米，分三层枝叶，立有神鸟，是古蜀文明祭祀天地、沟通神灵的重要礼器，展现了惊人的铸造技艺。',
      basicInfo: {
        periodDetail: '约公元前1600年–前1046年',
        material: '纸本设色',
        dimensions: '高34口径54厘米',
        collection: '浙江省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1600年–前1046年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
  ],
  activities: [
    {
      id: 31,
      museumId: 11,
      title: '巴蜀文化展',
      description: '展示四川地区的历史文化和艺术成就',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 32,
      museumId: 11,
      title: '三星堆文化讲座',
      description: '专家学者讲解三星堆文化的奥秘',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 33,
      museumId: 11,
      title: '川剧变脸体验',
      description: '了解川剧变脸艺术，体验传统文化',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 32,
      museumId: 11,
      name: '巴蜀文化丝巾',
      description: '以巴蜀文化符号为设计元素的真丝丝巾',
      price: 188,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 33,
      museumId: 11,
      name: '川剧变脸玩偶',
      description: '可以手动变脸的川剧玩偶',
      price: 128,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 122,
      museumId: 11,
      name: '青铜神树造型书立',
      description: '以三星堆青铜神树为原型的创意金属书立，兼具实用与艺术价值',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 13,
      museumId: 11,
      title: '巴蜀青铜器展',
      description: '展示四川地区出行程土的巴蜀文化青铜器',
      date: '2024-05-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '四川博物院巴蜀青铜馆',
      status: '热门',
      category: '历史文化',
      curator: '四川博物院',
      scale: '500余件青铜器',
      visitors: 450000,
      background: '巴蜀文化是商周至战国时期四川盆地及周边地区的区域文化，以巴国和蜀国为代表。巴蜀青铜器具有鲜明的地方特色，器形包括兵器、容器、工具具等，纹饰以虎纹、鸟纹等动物纹样为主，与中原青铜文化既有联系又保持独立。巴蜀符号文字至今未能完全破译，增添了神秘色彩。战国时期秦灭巴蜀后，巴蜀文化逐渐融入华夏文明史。本次展览系统展示四川地区出行程土的巴蜀青铜器，揭示巴蜀先民的社会生活、军事活动和工具艺成就，展现长江上游青铜文明的独特魅力。',
    },
    {
      id: 324,
      museumId: 11,
      title: '三星堆与古蜀文明探秘',
      description: '以三星堆祭祀坑出行程土的青铜神树、面具、大立人为核心，揭开古蜀文明的神秘面纱',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '四川博物院巴蜀展厅',
      status: '热门',
      category: '历史文化',
      curator: '四川博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '三星堆遗址是古蜀文明的重要遗存，距今约3000-5000年，1986年发现的一、二号祭祀坑震惊世界，出行程土了青铜大立人、青铜神树、金面具等前所未见的珍贵文物。这些文物造型奇特、工具艺精湛，展现了与中原文明迥异的古蜀文明面貌。青铜纵目面具、金杖等器物暗示了古蜀独特的宗教信仰和王权观念。2019-2022年新发现的祭祀坑进一步丰富了三星堆的文化内涵。本次展览以三星堆出行程土文物为核心，揭示古蜀文明的神秘面貌与辉煌成就。',
    }
  ],
  news: [
    {
      id: 31,
      museumId: 11,
      title: '博物馆11年度特展开幕',
      description: '博物馆11举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 32,
      museumId: 11,
      title: '博物馆11新数字化服务上线',
      description: '博物馆11推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 33,
      museumId: 11,
      title: '博物馆11举办文化活动',
      description: '博物馆11举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 13,
      museumId: 11,
      title: '三星堆文化研究',
      author: '四川博物院研究部',
      date: '2023-08-25',
      type: 'article',
      description: '对三星堆文化的发现、研究和意义进行程深入探讨。',
      link: '#',
    },
  ],
  immersiveExperiences: [],
  exhibitionHalls: {
    11: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/8.webp',
        introduction:
          '系统展示四川博物院所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 434,
          exhibitions: 2,
          visitors: 62469,
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
            description: '四川博物院最具代表性的珍贵文物',
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
            title: '四川博物院历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/9.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 352,
          exhibitions: 2,
          visitors: 193435,
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
