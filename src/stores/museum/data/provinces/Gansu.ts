import type { ProvinceData } from '@/typesOfPages/museum/index';

// 甘肃省份数据
export const gansuData: ProvinceData = {
  code: 'Gansu',
  name: '甘肃',
  museums: [
    {
      id: 29,
      name: '甘肃省博物馆',
      province: '甘肃',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '甘肃省博物馆是甘肃省综合类博物馆，馆藏文物35万余件，以丝绸之路文物、敦煌、彩陶独具特色。',
      artifacts: 350000,
      exhibitions: 28,
      visitors: 2500000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    29: {
      museumId: 29,
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
          address: '甘肃省兰州市七里河区西津西路3号',
          metro: '无直达地铁',
          bus: '公交1、6、31、32、50、53、56、58、71、77、118、137路甘肃省博物馆站',
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
          phone: '0931-2339133',
          email: 'gsmuseum@163.com',
          complaintPhone: '0931-2346308',
          website: 'http://www.gansumuseum.com',
        },
      },
      history:
        '甘肃省博物馆创建于1939年，前身为甘肃科学教育馆，1956年正式更名为甘肃省博物馆，是甘肃省最大的综合性博物馆和国家一级博物馆。馆藏文物88,631件（套），其中珍贵文物52,003件（套），以丝绸之路沿线出行程行程程土文物、彩陶、简牍文书、佛教艺术为最具特色的收藏方向，尤其以马踏飞燕（铜奔马）闻名世界。',
      architecture:
        "甘肃省博物馆建筑外观采用现代简约风格，主体建筑分为东西两翼，中部通过连廊连接。馆内设有'甘肃丝绸之路文明'展、'甘肃彩陶'展、'甘肃古生物化石'展、'黄河古象厅'等常设展厅。",
      highlights:
        "镇馆之宝铜奔马（又称'马踏飞燕'，东汉，武威雷台汉墓出行程行程程土，是中国旅游标志的原型）享誉全球。其他重要藏品还包括：驿使图画像砖（魏晋，嘉峪关魏晋墓群出行程行程程土）、人头形器口彩陶瓶（仰韶文化，秦安大地湾出行程行程程土）、《淳化阁帖》刻石（明代）、大云寺五重舍利宝函（唐代泾川大云寺地宫出行程行程程土）等。",
      education:
        "打造'甘博讲堂''丝绸之路研学''彩陶文化体验'三大公教品牌。定期举办'丝绸之路与河西走廊'学术讲座。开设'彩陶绘制体验''简牍书写体验''敦煌壁画临摹'等特色课程。",
    },
  },
  artifacts: [
    {
      id: 60,
      museumId: 29,
      name: '马踏飞燕',
      period: '东汉',
      category: '雕塑',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '甘肃武威雷台汉墓出行程土的青铜奔马，造型为一匹四蹄腾空的骏马，右后蹄踏在一只飞燕上，构思巧妙，动感十足，被誉为"中国旅游标志"，是东汉青铜雕塑艺术的杰作。',
      basicInfo: {
        periodDetail: '公元25年–220年',
        material: '传统手工具材质',
        dimensions: '28×9×12厘米',
        collection: '新疆维吾尔自治区博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元25年–220年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 85,
      museumId: 29,
      title: '高原文化展',
      description: '展示青海地区的历史文化和丝绸之路文明',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 86,
      museumId: 29,
      title: '热贡艺术讲座',
      description: '以热贡艺术为设计元素的期方巾',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 87,
      museumId: 29,
      title: '丝绸之路主题笔记本',
      description: '以丝绸之路为主题的精美笔记本',
      date: '2024-06-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 88,
      museumId: 29,
      title: '唐卡书签套装',
      description: '以唐卡壁画汗为设计元素的金属书签',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 77,
      museumId: 29,
      name: '马踏飞燕毛绒玩具',
      description: '甘肃省博物馆网红爆款马踏飞燕玩偶',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 78,
      museumId: 29,
      name: '敦煌飞天丝巾',
      description: '以敦煌壁画飞天形象为主题的长款真丝丝巾',
      price: 218,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 140,
      museumId: 29,
      name: '马踏飞燕造型U盘',
      description: '以铜奔马为造型的64GB金属质感U盘，附文物介绍',
      price: 128,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 31,
      museumId: 29,
      title: '丝绸之路与敦煌艺术展',
      description: '以马踏飞燕为引，串联丝绸之路沿线文物与敦煌壁画精华',
      date: '2024-07-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '甘肃省博物馆丝绸之路展厅',
      status: '热门',
      category: '历史文化',
      curator: '甘肃省博物馆',
      scale: '800余件（套）文物',
      visitors: 510000,
      background: '丝绸之路是古代东西方文明交流的重要通道，甘肃段作为丝路黄金段，见证了汉唐以来中原与西域的频繁往来。敦煌莫高窟作为丝绸之路上的文化明珠，保存了从十六国到元代连续千年的壁画与彩塑，展现了佛教艺术中国化的完整历程。本次展览以甘肃省博物馆镇馆之宝铜奔马为引，系统展示丝绸之路沿线出行程土的珍贵文物，包括简牍文书、丝织品、金银器等，结合敦煌壁画复制品，全面呈现丝路文明的辉煌成就与多元交融的历史图景。',
    },
    {
      id: 352,
      museumId: 29,
      title: '河西走廊佛教艺术展',
      description: '展示敦煌莫高窟及周边石窟的壁画、造像等佛教艺术珍品',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '甘肃省博物馆丝绸之路展厅',
      status: '热门',
      category: '艺术精品',
      curator: '甘肃省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '河西走廊是佛教东传中原的重要通道，自魏晋至隋唐，沿线开凿了敦煌莫高窟、榆林窟、麦积山石窟、炳灵寺石窟等众多佛教艺术宝库。这些石窟保存了从早期西域风格到盛唐中原风格的完整演变序列，是研究佛教中国化进程的珍贵资料。本次展览精选敦煌莫高窟及周边石窟的壁画临摹品、彩塑复制品、石窟造像原件等，展现河西走廊佛教艺术的独特魅力，揭示丝路佛教艺术从西域传入、在河西本土化、向中原传播的历史脉络。',
    }
  ],
  news: [
    {
      id: 148,
      museumId: 29,
      title: '博物馆29年度特展开幕',
      description: '博物馆29举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 149,
      museumId: 29,
      title: '博物馆29新数字化服务上线',
      description: '博物馆29推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 150,
      museumId: 29,
      title: '博物馆29举办文化活动',
      description: '博物馆29举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 31,
      museumId: 29,
      title: '河西走廊与丝绸之路研究',
      author: '西北师范大学历史文化学院',
      date: '2023-05-18',
      type: 'book',
      description: '多角度论述河西走廊在丝绸之路中的枢纽作用。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 29,
      museumId: 29,
      title: '丝路驼队沙漠行程旅',
      description: '跟随虚拟驼队穿越戈壁沙漠，途经敦煌莫高窟等丝路重镇',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    29: [
      {
        id: 'gs-silkroad',
        name: '丝绸之路文明展厅',
        icon: '🛢️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/6.webp',
        introduction:
          '甘肃是丝绸之路的黄金段，本展厅集中展示丝路沿线出行程土的珍稀文物，再现东西方文明交汇的辉煌景象。',
        stats: {
          artifacts: 900,
          exhibitions: 4,
          visitors: 300000,
        },
        location: '主展馆二至三层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆，周一闭馆）',
        duration: '2-2.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '马踏飞燕（铜奔马）',
            period: '东汉',
            description: '中国旅游标志，甘肃省博镇馆之宝',
            image: '',
          },
          {
            name: '驿使图画砖',
            period: '魏晋',
            description: '中国邮政标志原型，最早的邮递图像',
            image: '',
          },
          {
            name: '莲花形玻璃托盏',
            period: '元代',
            description: '丝绸之路传入的中国早期玻璃制品',
            image: '',
          },
          {
            name: '《仪礼》简牍',
            period: '汉代',
            description: '武威磨嘴子汉墓出行程土的儒家经典简牍',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '丝绸之路甘肃文物展',
            date: '常设展览',
            description: '全面展示甘肃段丝路文明的璀璨成果',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['丝绸之路', '常设'],
          },
          {
            title: '甘肃佛教艺术展',
            date: '常设展览',
            description: '敦煌莫高窟之外的甘肃佛教艺术宝藏',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['佛教', '艺术'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '丝路之旅语音导览',
            desc: '跟随驼铃声重走丝绸之路',
            type: '音频',
          },
          {
            icon: '📖',
            title: '甘肃文物鉴赏指南',
            desc: '马踏飞燕背后的故事',
            type: '图书',
          },
        ],
      },
      {
        id: 'gs-bingmayong',
        name: '甘肃彩陶展厅',
        icon: '📜',
        category: '考古发现',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/7.webp',
        introduction:
          '甘肃是中国彩陶的发祥地之一，馆藏仰韶、马家窑等文化彩陶数量居全国首位。',
        stats: {
          artifacts: 1200,
          exhibitions: 2,
          visitors: 220000,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00',
        duration: '1-1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '人头形器口彩陶瓶',
            period: '仰韶文化',
            description: '国宝级彩陶，将人体造型融入陶器设计',
            image: '',
          },
          {
            name: '旋纹尖底彩陶瓶',
            period: '马家窑文化',
            description: '马家窑类型彩陶的经典代表',
            image: '',
          },
          {
            name: '舞蹈纹彩陶盆',
            period: '马家窑文化',
            description: '记录远古先民舞蹈场景的国宝级文物',
            image: '',
          },
          {
            name: '鲵鱼纹彩陶瓶',
            period: '仰韶文化',
            description: '被认为是最早的龙图腾形象之一',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '甘肃彩陶展',
            date: '常设展览',
            description: '从大地湾到齐家的彩陶艺术长河',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['彩陶', '常设'],
          },
          {
            title: '黄河流域史前文明展',
            date: '年度特展',
            description: '黄河上游史前文化的最新研究成果',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['史前', '特展'],
          },
        ],
        recommendations: [
          {
            icon: '🖐️',
            title: '陶艺制作体验',
            desc: '模仿先民制作彩陶纹饰',
            type: '活动',
          },
          {
            icon: '🧑‍🏫',
            title: '考古专家讲座',
            desc: '解读彩陶纹饰的文化密码',
            type: '讲座',
          },
        ],
      },
    ],
  },
};

export default gansuData;
