import type { ProvinceData } from '@/typesOfPages/museum';

export const guangdongData: ProvinceData = {
  code: 'Guangdong',
  name: '广东',
  museums: [
    {
      id: 12,
      name: '广东省博物馆',
      province: '广东',
      type: '艺术博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '广东省博物馆是广东省唯一的省级综合类博物馆，也是国家一级博物馆，馆藏文物16万余件，以岭南文化为特色。',
      artifacts: 160000,
      exhibitions: 26,
      visitors: 4200000,
      features: ['国家一级博物馆', '广东省爱国主义教育基地'],
    },
  ],
  details: {
    12: {
      museumId: 12,
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
          forbidden: [
            '禁止携带宠物',
            '禁止触摸展品',
            '自然馆标本区禁止使用闪光灯',
          ],
        },
        transportation: {
          address: '广东省广州市天河区珠江东路2号',
          metro: '地铁3、5号线珠江新城站B1口出行程行程程；APM线大剧院站E口出行程行程程',
          bus: '公交886、886A、18、40、194、777、778、旅1路广东省博物馆站',
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
          phone: '020-38046886',
          email: 'info@gdmuseum.com',
          complaintPhone: '020-38046880',
          website: 'http://www.gdmuseum.com',
        },
      },
      history:
        "广东省博物馆成立于1959年，2010年新馆建成开放，是广东省唯一的省级综合类博物馆和国家一级博物馆。馆藏文物16万余件（套），珍贵文物近4000件，以岭南历史文化、海上丝绸之路文物、华侨华人文物、自然资源为特色。新馆建筑面积6.7万平方米，外观如镂空'月光宝盒'，成为珠江新城地标。",
      architecture:
        "新馆由何镜堂院士领衔设计，建筑外观酷似一个巨大的镂空'月光宝盒'，外立面采用镂空金属幕墙和玻璃幕墙相结合。馆内设有'广东历史文化陈列'、'广东省自然资源展览'、'土火之艺——历代陶瓷展览'、'紫石凝英——端砚艺术展览'等常设展厅，展览面积约2万平方米。",
      highlights:
        '代表性藏品：北宋西村窑青白釉凤首壶（广州海上丝绸之路贸易见证）、清代广珐琅花卉纹瓶（岭南工具具艺美术杰出行程行程程代表）、信宜铜盉（春秋时期岭南罕见青铜礼器）、元代赵孟頫《陋室铭》行程程书卷、清乾隆广彩人物纹大碗、潮州金漆木雕大神龛、端溪老坑鱼脑冻砚台等。',
      education:
        "打造'粤博讲堂''岭南文化研学''海洋文明探秘'三大公教品牌。开设'广彩瓷绘制''端砚雕刻''潮汕剪纸'等非遗手工具具体验课程。与港澳博物馆合作推进大湾区文博交流。",
    },
  },
  artifacts: [
    {
      id: 24,
      museumId: 12,
      name: '西周铜盉',
      period: '西周',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西周时期青铜酒店器，造型古朴庄重，纹饰精美，是研究西周青铜铸造工具艺和礼酒店文化的珍贵实物资料。',
      basicInfo: {
        periodDetail: '约公元前1046年–前771年',
        material: '纸本设色',
        dimensions: '高51口径53厘米',
        collection: '广东省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1046年–前771年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 25,
      museumId: 12,
      name: '端砚',
      period: '唐代',
      category: '文房器物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '广东肇庆端溪出行程产的优质砚台，石质细腻温润，发墨如油，是中国四大名砚之一，被誉为"文房瑰宝"。',
      basicInfo: {
        periodDetail: '公元618年–907年',
        material: '传统手工具材质',
        dimensions: '17×6×9厘米',
        collection: '广东省博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元618年–907年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 26,
      museumId: 12,
      name: '广珐琅彩瓶',
      period: '清代',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '广州生产的珐琅彩瓷器精品，融合中西绘画技法，色彩艳丽，工具艺精湛，代表了清代广东外销瓷的最高水平。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '纸本设色',
        dimensions: '高14口径27厘米',
        collection: '广东省博物馆',
        excavation: '传世品，历经数代收藏传承',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1636年–1912年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
  ],
  activities: [
    {
      id: 34,
      museumId: 12,
      title: '岭南文化展',
      description: '展示广东地区的历史文化和艺术特色',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 35,
      museumId: 12,
      title: '海上丝绸之路展',
      description: '展示海上丝绸之路的历史和文化交流',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 36,
      museumId: 12,
      title: '广东醒狮体验活动',
      description: '了解广东醒狮工具艺，体验传统技艺',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 35,
      museumId: 12,
      name: '岭南建筑模型',
      description: '岭南传统建筑镬耳屋模型',
      price: 278,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 36,
      museumId: 12,
      name: '广东醒狮摆件',
      description: '广东醒狮工具艺摆件，喜庆吉祥',
      price: 158,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 123,
      museumId: 12,
      name: '广珐琅首饰盒',
      description: '以广珐琅工具艺为设计灵感的金属珐琅彩首饰收纳盒',
      price: 288,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 14,
      museumId: 12,
      title: '海上丝绸之路展',
      description: '展示广东在海上丝绸之路中的重要地位和历史文物',
      date: '2024-03-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '广东省博物馆历史展厅',
      status: '热门',
      category: '历史文化',
      curator: '广东省博物馆',
      scale: '800余件（套）文物',
      visitors: 580000,
      background: '广东是海上丝绸之路的重要起点,广州(番禺)自秦汉以来就是中国最重要的对外贸易港口。本次展览通过南海一号沉船出行程水文物、外销瓷器、香料、丝绸等珍贵文物,展现广东两千年来在中外贸易和文化交流中的重要地位。从唐宋市舶司到清代十三行程,广东见证了海上丝绸之路的繁荣发展。',
    },
    {
      id: 325,
      museumId: 12,
      title: '岭南非遗工具艺大展',
      description: '集中展示广彩、广绣、端砚、潮州木雕等广东非物质文化遗产瑰宝',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '广东省博物馆非遗展厅',
      status: '最新',
      category: '艺术精品',
      curator: '广东省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '岭南工具艺源远流长,广彩瓷器色彩艳丽、构图饱满,是清代外销瓷的重要品种;广绣与苏绣、湘绣、蜀绣并称四大名绣,以构图饱满、色彩富丽著称;端砚位列中国四大名砚之首,石质细腻温润;潮州木雕金漆辉映,雕刻精美。本次展览汇聚这些非遗瑰宝,展现岭南工具匠的精湛技艺和独特审美。',
    },
  ],
  news: [
    {
      id: 34,
      museumId: 12,
      title: '博物馆12年度特展开幕',
      description: '博物馆12举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 35,
      museumId: 12,
      title: '博物馆12新数字化服务上线',
      description: '博物馆12推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 36,
      museumId: 12,
      title: '博物馆12举办文化活动',
      description: '博物馆12举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 14,
      museumId: 12,
      title: '海上丝绸之路研究',
      author: '广东省博物馆研究部',
      date: '2023-10-20',
      type: 'book',
      description: '系统研究海上丝绸之路的历史和文化交流。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 19,
      museumId: 12,
      title: '海上贸易港口重现',
      description: '复原清代广州十三行程港口景象，体验中西贸易繁荣时代',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    12: [
      {
        id: 'gd-guangdong',
        name: '广东历史文化陈列',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/8.webp',
        introduction:
          '展示广东从马坝人到改革开放的历史变迁，突出行程岭南文化、海洋文化、侨乡文化三大特色。',
        stats: {
          artifacts: 800,
          exhibitions: 3,
          visitors: 280000,
        },
        location: '四楼展厅',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1.5-2小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '信宜铜盉',
            period: '西周',
            description: '广东出行程土最早的青铜礼器',
            image: '',
          },
          {
            name: '元代赵孟頫行程书轴',
            period: '元代',
            description: '岭南地区罕见的元代书法真迹',
            image: '',
          },
          {
            name: '潮州金漆木雕大神龛',
            period: '清代',
            description: '潮汕民间工具艺巅峰之作',
            image: '',
          },
          {
            name: '广绣百鸟朝凤屏风',
            period: '清末',
            description: '四大名绣之首广绣的传世精品',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '广东历史文化陈列',
            date: '常设展览',
            description: '从远古到当代的广东文明历程',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['广东', '常设'],
          },
          {
            title: '岭南非遗精品展',
            date: '常设展览',
            description: '粤剧、醒狮、广彩等非遗瑰宝',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['非遗', '岭南'],
          },
        ],
        recommendations: [
          {
            icon: '🤠',
            title: '粤剧脸谱绘制',
            desc: '亲手绘制粤剧角色脸谱',
            type: '活动',
          },
          {
            icon: '🎧',
            title: '岭南文化导览',
            desc: '品味独特的岭南文化魅力',
            type: '音频',
          },
        ],
      },
      {
        id: 'gd-haishang',
        name: '海上丝绸之路展厅',
        icon: '⛵️',
        category: '海洋文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/9.webp',
        introduction:
          '以"南海一号"沉船为核心，展示广东作为海上丝绸之路始发港的悠久历史与丰富遗存。',
        stats: {
          artifacts: 500,
          exhibitions: 2,
          visitors: 250000,
        },
        location: '三楼展厅',
        openTime: '周二至周日 9:00-17:00',
        duration: '1-1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '南海一号出行程水金腰带',
            period: '南宋',
            description: '沉船出行程水的宋代黄金饰品',
            image: '',
          },
          {
            name: '景德镇青白釉葫芦瓶',
            period: '南宋',
            description: '南海一号装载的外销瓷器',
            image: '',
          },
          {
            name: '广州十三行程外销画',
            period: '清代',
            description: '记录清代广州对外贸易的绘画资料',
            image: '',
          },
          {
            name: '西班牙银币',
            period: '明末清初',
            description: '海上贸易流通的国际货币',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '扬帆起航——海上丝绸之路展',
            date: '常设展览',
            description: '从徐闻到广州的海上贸易历程',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['海丝', '常设'],
          },
          {
            title: '南海一号出行程水文物特展',
            date: '常设展览',
            description: '宋代沉船宝藏的精彩呈现',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['南海一号', '水下考古'],
          },
        ],
        recommendations: [
          {
            icon: '🏭️',
            title: '水下考古模拟',
            desc: '体验水下考古发掘的奇妙过程',
            type: '互动',
          },
          {
            icon: '📱',
            title: 'AR海贸航线',
            desc: '增强现实重现古代航海路线',
            type: '互动',
          },
        ],
      },
    ],
  },
};

export default guangdongData;
