import type { ProvinceData } from '@/typesOfPages/museum/index';

// 广西壮族自治区份数据
export const guangxiData: ProvinceData = {
  code: 'Guangxi',
  name: '广西',
  museums: [
    {
      id: 24,
      name: '广西壮族自治区博物馆',
      province: '广西',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '广西壮族自治区博物馆是广西最大的综合性博物馆，馆藏文物5万余件，以铜鼓、民族文物为特色。',
      artifacts: 50000,
      exhibitions: 18,
      visitors: 1500000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    24: {
      museumId: 24,
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
          address: '广西南宁市青秀区民族大道34号',
          metro: '地铁1、2号线民族广场站B口出行程行程程',
          bus: '公交6、30、34、39、205、704、B23、B63路民族古城路口站下',
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
          phone: '0771-2707027',
          email: 'gxbwg@wlt.gxzf.gov.cn',
          complaintPhone: '0771-2707025',
          website: 'https://www.gxmuseum.cn/',
        },
      },
      history:
        '广西壮族自治区博物馆创建于1934年，前身为广西省立博物馆，是省级历史艺术类综合性博物馆和全国首批国家一级博物馆。馆藏文物近10万件（套），其中一级文物148件（套）、二级文物1980件（套）。馆藏文物涵盖旧石器时代至近现代各个时期，具有浓郁的地方民族特色。2019年开始改扩建，2022年11月底建成开放，新馆舍建筑面积约3.3万平方米。',
      architecture:
        "新馆建筑采用具有壮族干栏式建筑特点的陈列大楼与具有浓郁民族风情的文物苑相结合的设计理念，集经典怀旧景观、休闲文化空间与现代科技设计于一体。馆内设有'广西古代文明陈列''烽火南疆——广西近现代革命史陈列''合浦启航——广西汉代海上丝绸之路''釉彩斑斓——馆藏瓷器陈列'等基本陈列和专题展览。",
      highlights:
        "代表性藏品：翔鹭纹铜鼓（西汉，目前世界上现存最大的古代铜鼓之一，直径达165厘米，被誉为'铜鼓之王'）、羽纹铜凤灯（西汉，合浦汉墓出行程行程程土，兼具实用性与审美价值的环保灯具）、人面纹羊角钮铜钟（战国）、清道光'慎德堂制'款粉彩梅瓶（清代官窑瓷器精品）等。铜鼓收藏量居全国首位。",
      education:
        "打造'桂博讲堂''铜鼓文化研学''壮锦织绣体验'三大公教品牌。定期举办'骆越文化与海上丝绸之路'学术讲座。开设'铜鼓纹样绘制''壮锦编织''绣球制作'等广西非遗手工具具课程。",
    },
  },
  artifacts: [
    {
      id: 50,
      museumId: 24,
      name: '翔鹭纹铜鼓',
      period: '汉代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '广西出行程土的古代铜鼓精品，鼓面铸有翔鹭纹饰，造型优美，工具艺精湛，是研究岭南地区青铜文化和古代少数民族社会生活的重要实物资料。',
      basicInfo: {
        periodDetail: '公元前202年–公元220年',
        material: '纸本设色',
        dimensions: '高30口径50厘米',
        collection: '云南省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前202年–公元220年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 51,
      museumId: 24,
      name: '壮锦',
      period: '当代',
      category: '织绣',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '广西壮族传统手工具织锦，图案精美，色彩艳丽，以几何纹样和动植物图案为主，体现了壮族人民独特的审美情趣和高超的手工具技艺，是中国四大名锦之一。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '传统手工具材质',
        dimensions: '19×3×10厘米',
        collection: '云南省博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是1949年至今历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 70,
      museumId: 24,
      title: '草原文化展',
      description: '展示内蒙古地区的历史文化和民俗风情',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 71,
      museumId: 24,
      title: '蒙古族织锦',
      description: '蒙古族传统织锦，图案精美，色彩绚丽',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 72,
      museumId: 24,
      title: '蒙古族文化体验',
      description: '了解蒙古族文化，体验少数民族习俗',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [],
  exhibitions: [
    {
      id: 26,
      museumId: 24,
      title: '铜鼓与壮族文化展',
      description: '展示广西各民族特别是壮族的传统铜鼓及民族服饰文化',
      date: '2024-04-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '广西壮族自治区博物馆铜鼓文化展厅',
      status: '热门',
      category: '民族民俗',
      curator: '广西壮族自治区博物馆',
      scale: '300余件（套）文物',
      visitors: 240000,
      background: '广西是世界上铜鼓出行程土数量最多、类型最全的地区，铜鼓文化是壮族等民族的精神象征。铜鼓不仅是权力与财富的标志，更是祭祀、节庆等重要场合的礼乐器，承载着深厚的文化内涵。壮族是广西人口最多的少数民族，其传统服饰、壮锦织绣、歌圩文化等构成了独特的民族文化景观。本次展览以铜鼓为核心，结合壮族传统服饰、织锦等民族文物，展现广西铜鼓文化的深厚底蕴与壮族文化的独特魅力。',
    },
    {
      id: 337,
      museumId: 24,
      title: '铜鼓文化与壮族文明展',
      description: '以广西出行程土铜鼓为核心，展示壮侗语族民族的古老文明与艺术成就',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '广西民族博物馆铜鼓展厅',
      status: '热门',
      category: '历史文化',
      curator: '广西民族博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '铜鼓是壮侗语族民族最重要的文化符号之一，从战国时期至今，铜鼓的铸造与使用从未间断，形成了独特的铜鼓文化体系。广西出行程土的翔鹭纹铜鼓、冷水冲型铜鼓等，以其宏大的体型、精美的纹饰、精湛的工具艺著称于世。铜鼓上的翔鹭纹、羽人纹、云雷纹等纹饰，记录了古代骆越人的信仰与生活。本次展览以广西出行程土铜鼓为核心，系统展示壮侗语族民族的古老文明、艺术成就与文化传承。',
    }
  ],
  news: [
    {
      id: 133,
      museumId: 24,
      title: '博物馆24年度特展开幕',
      description: '博物馆24举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 134,
      museumId: 24,
      title: '博物馆24新数字化服务上线',
      description: '博物馆24推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 135,
      museumId: 24,
      title: '博物馆24举办文化活动',
      description: '博物馆24举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 26,
      museumId: 24,
      title: '广西铜鼓的类型学研究',
      author: '广西民族大学',
      date: '2023-04-18',
      type: 'book',
      description: '对广西境内各类铜鼓的系统分类与文化阐释。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 20,
      museumId: 24,
      title: '铜鼓节庆仪式体验',
      description: '参与虚拟壮族三月三节庆，敲击铜鼓感受民族节日氛围',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 24,
      museumId: 24,
      title: '骆越铜鼓铸造工具坊',
      description: '互动体验古代骆越人铸造铜鼓的全流程工具艺技术',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    24: [
      {
        id: 'gx-guangxi',
        name: '广西历史文化陈列',
        icon: '🏛️',
        category: '民族文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/10.webp',
        introduction:
          '展示广西从远古到现代的历史发展，重点呈现壮族、瑶族、苗族等少数民族文化与铜鼓文化。',
        stats: {
          artifacts: 500,
          exhibitions: 2,
          visitors: 150000,
        },
        location: '主展馆一至二层',
        openTime: '周二至周日 9:30-17:00（16:15停止入场）',
        duration: '1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '翔鹭纹铜鼓',
            period: '汉代',
            description: '世界上最大的古代铜鼓之一',
            image: '',
          },
          {
            name: '羽纹铜凤灯',
            period: '西汉',
            description: '合浦汉墓出行程土的环保灯具设计杰作',
            image: '',
          },
          {
            name: '壮锦织锦机',
            period: '清代',
            description: '展示壮族传统纺织技艺的工具具',
            image: '',
          },
          {
            name: '花山岩画复制件',
            period: '战国至东汉',
            description: '世界文化遗产花山岩画的精确复制',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '广西历史文化陈列',
            date: '常设展览',
            description: '八桂大地的文明足迹',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['广西', '常设'],
          },
          {
            title: '铜鼓文化专题展',
            date: '常设展览',
            description: '世界铜鼓之乡的独特文化',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['铜鼓', '民族'],
          },
        ],
        recommendations: [
          {
            icon: '🎭',
            title: '壮族织锦体验',
            desc: '学习壮锦的基本编织技法',
            type: '活动',
          },
          {
            icon: '🎧',
            title: '民族风情导览',
            desc: '聆听广西多民族的故事',
            type: '音频',
          },
        ],
      },
      {
        id: 'gx-tonggu',
        name: '铜鼓文化展厅',
        icon: '🔑',
        category: '民族文物',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/11.webp',
        introduction:
          '广西是世界上收藏铜鼓最多的地区，本展厅汇集各时代铜鼓精品，揭示铜鼓在民族生活中的重要地位。',
        stats: {
          artifacts: 200,
          exhibitions: 1,
          visitors: 90000,
        },
        location: '主展馆三层',
        openTime: '周二至周日 9:30-17:00',
        duration: '45分钟',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '冷水冲型铜鼓',
            period: '宋代',
            description: '体型硕大的宋代铜鼓代表',
            image: '',
          },
          {
            name: '北流型铜鼓',
            period: '汉代',
            description: '广西北流出行程土的大型铜鼓',
            image: '',
          },
          {
            name: '麻江型铜鼓',
            period: '明清',
            description: '仍在使用的活态传承铜鼓',
            image: '',
          },
          {
            name: '铜鼓铸造模具',
            period: '当代',
            description: '展示传统铜鼓铸造工具艺',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '穿越时空的鼓声——铜鼓文化展',
            date: '常设展览',
            description: '两千余年铜鼓文化的完整谱系',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['铜鼓', '常设'],
          },
        ],
        recommendations: [
          {
            icon: '🕐',
            title: '击鼓体验区',
            desc: '亲自敲响千年铜鼓',
            type: '互动',
          },
          {
            icon: '📖',
            title: '铜鼓纹饰解密',
            desc: '解读铜鼓上的神秘符号',
            type: '导览',
          },
        ],
      },
    ],
  },
};

export default guangxiData;
