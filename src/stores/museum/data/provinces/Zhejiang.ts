import type { ProvinceData } from '@/typesOfPages/museum';

export const zhejiangData: ProvinceData = {
  code: 'Zhejiang',
  name: '浙江',
  museums: [
    {
      id: 8,
      name: '浙江省博物馆',
      province: '浙江',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '浙江省博物馆是浙江省内最大的收藏、保护、研究、展示于一体的综合性人文科学博物馆，馆藏文物及标本十余万件。',
      artifacts: 100000,
      exhibitions: 25,
      visitors: 3500000,
      features: ['国家一级博物馆', '浙江省爱国主义教育基地'],
    },
  ],
  details: {
    8: {
      museumId: 8,
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
          allowed: ['大部分展厅可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品'],
        },
        transportation: {
          address:
            '浙江省杭州市西湖区孤山路25号（孤山馆）；杭州市西湖区文二西路818号（之江馆）',
          metro: '之江馆：地铁6号线枫桦西路站C1口出行程行程程',
          bus: '孤山馆：Y2、7、27、117路岳庙站',
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
          phone: '0571-87002738',
          email: 'zj_museum@163.com',
          complaintPhone: '0571-87002739',
          website: 'https://www.zhejiangmuseum.com',
        },
      },
      history:
        "浙江省博物馆始建于1929年，原名浙江省西湖博物馆，是浙江省内最大的综合性人文科学博物馆和首批国家一级博物馆。2023年之江新馆区正式启用，形成'一馆三区'的发展格局。馆藏文物十余万件，珍贵文物近5万件，以越文化、良渚文化、龙泉青瓷、书画艺术为特色。",
      architecture:
        '之江新馆总建筑面积约10万平方米，建筑灵感源自浙江传统青瓷的流线形态与江南山水意境。孤山馆区坐落于西子湖畔孤山南麓，环境清幽，园林式布局独具一格。展览面积约3.5万平方米。',
      highlights:
        '十大镇馆之宝：五代吴越国鎏金纯银阿育王塔（雷峰塔地宫出行程行程程土）、元代黄公望《富春山居图》（剩卷）、春秋越王者旨於赐剑、龙泉窑青瓷舟形砚滴、朱金木雕宁波花轿（万工具具轿）、良渚文化玉琮等。书画收藏尤为丰富，浙派绘画和近代浙籍艺术家作品见长。',
      education:
        "打造'浙博讲堂''浙博研学''浙博之夜'三大公教品牌。定期举办'越文化论坛''良渚文化研讨会'等学术活动。开设'小小博物家''文物修复师体验'等社教课程。",
    },
  },
  artifacts: [
    {
      id: 14,
      museumId: 8,
      name: '龙泉窑青瓷舟形砚滴',
      period: '元代',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '浙江龙泉窑烧制的青瓷文房用具，造型为小舟形，釉色青翠欲滴，工具艺精湛，是元代龙泉窑瓷器中的精品之作。',
      basicInfo: {
        periodDetail: '公元1271年–1368年',
        material: '纸本设色',
        dimensions: '高35口径21厘米',
        collection: '南京博物院',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1271年–1368年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
    {
      id: 15,
      museumId: 8,
      name: '越王者旨於赐剑',
      period: '战国',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '浙江出行程土的越王勾践之子者旨於使用的青铜剑，剑身铸有鸟篆铭文，铸造精良，锋利无比，是越国青铜兵器中的珍品。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '纸本设色',
        dimensions: '高86口径22厘米',
        collection: '南京博物院',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前475年–前221年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 98,
      museumId: 8,
      name: '富春山居图（剩山图）',
      period: '元代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '元代画家黄公望传世名作《富春山居图》的前半段"剩山图"，以水墨描绘富春江山水景色，与台湾"无用师卷"合璧后为完整画卷，是中国绘画史上的瑰宝。',
      basicInfo: {
        periodDetail: '公元1271年–1368年',
        material: '纸本设色',
        dimensions: '50×587厘米（长卷）',
        collection: '南京博物院',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元1271年–1368年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
  ],
  activities: [
    {
      id: 22,
      museumId: 8,
      title: '越文化特展',
      description: '展示越国的历史文化和艺术成就',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 23,
      museumId: 8,
      title: '龙泉青瓷精品展',
      description: '展示龙泉青瓷的精湛工具艺和艺术价值',
      date: '2024-06-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 24,
      museumId: 8,
      title: '越剧文化体验活动',
      description: '体验越剧文化，学习越剧知识',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 22,
      museumId: 8,
      name: '越王勾践剑模型',
      description: '越王勾践剑复制品，越国文化代表',
      price: 258,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 23,
      museumId: 8,
      name: '龙泉青瓷茶杯',
      description: '龙泉青瓷手工具茶杯，宋代名窑传世工具艺',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 24,
      museumId: 8,
      name: '浙江历史文化绘本',
      description: '介绍浙江历史文化的精美绘本',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
    {
      id: 119,
      museumId: 8,
      name: '富春山居图折扇',
      description: '以《富春山居图》剩山图为扇面的真丝折扇，配以红木扇骨',
      price: 258,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
  ],
  exhibitions: [
    {
      id: 10,
      museumId: 8,
      title: '越文化展',
      description: '展示越国的历史文化和艺术成就',
      date: '2024-05-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '浙江省博物馆武林馆区',
      status: '热门',
      category: '历史文化',
      curator: '浙江省博物馆',
      scale: '400余件（套）文物',
      visitors: 380000,
      background: '越国是春秋战国时期东南地区的重要诸侯国，以浙江绍兴为中心，创造了独具特色的越文化。越人以精湛的青铜铸造技术闻名，尤其是青铜剑的铸造工具艺冠绝当时，越王勾践剑至今仍锋利无比。越国还发展出行程独特的鸟篆文字、原始瓷烧造技术，形成了与中原文化迥异的区域文明。本次展览汇集浙江境内出行程土的越国青铜器、原始瓷器、玉器等珍贵文物，系统展示越国的政治制度、军事力量、工具艺技术和文化成就，揭示这个神秘古国的辉煌历史。',
    },
    {
      id: 321,
      museumId: 8,
      title: '良渚文明与中华五千年',
      description: '以良渚古城遗址出行程土玉琮、玉璧为核心，实证中华五千年文明史的起源',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '浙江省博物馆良渚展厅',
      status: '热门',
      category: '历史文化',
      curator: '浙江省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '良渚文化距今约5300-4300年，是长江下游地区新石器时代晚期的重要考古学文化，2019年良渚古城遗址成功列入世界遗产名录，实证了中华五千年文明史。良渚先民创造了辉煌的物质文明与精神文化，建造了规模宏大的古城和复杂的水利系统，发展出行程高度发达的玉礼器系统，以玉琮、玉璧、玉钺为代表的礼器体现了早期国家的礼制雏形。本次展览以良渚古城遗址出行程土的精美玉器为核心，结合陶器、漆器等文物，全面展示良渚文明的社会组织、宗教信仰和工具艺成就。',
    }
  ],
  news: [
    {
      id: 22,
      museumId: 8,
      title: '博物馆8年度特展开幕',
      description: '博物馆8举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 23,
      museumId: 8,
      title: '博物馆8新数字化服务上线',
      description: '博物馆8推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 24,
      museumId: 8,
      title: '博物馆8举办文化活动',
      description: '博物馆8举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 10,
      museumId: 8,
      title: '浙江历史文化研究',
      author: '浙江省博物馆研究部',
      date: '2023-09-20',
      type: 'book',
      description: '系统研究浙江地区的历史文化发展历程。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 11,
      museumId: 8,
      title: '越王勾践剑光影秀',
      description: '全息投影展示越王勾践剑的传奇故事与精湛工具艺',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    8: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/4.webp',
        introduction:
          '系统展示浙江省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 435,
          exhibitions: 2,
          visitors: 58825,
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
            description: '浙江省博物馆最具代表性的珍贵文物',
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
            title: '浙江省历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/12.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 491,
          exhibitions: 2,
          visitors: 207791,
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

export default zhejiangData;
