import type { ProvinceData } from '@/typesOfPages/museum/index';

// 河北省份数据
export const hebeiData: ProvinceData = {
  code: 'Hebei',
  name: '河北',
  museums: [
    {
      id: 21,
      name: '河北博物院',
      province: '河北',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '河北博物院是河北省省级综合类博物馆，馆藏文物14万余件，以满城汉墓出行程行程程土文物、河北地区古代瓷器为特色。',
      artifacts: 240000,
      exhibitions: 26,
      visitors: 2800000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    21: {
      museumId: 21,
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
          address: '河北省石家庄市长安区东大街4号',
          metro: '地铁1号线博物院站B/C口出行程行程程',
          bus: '公交1、5、10、18、28、30、36、41、45、60、69、83、116路河北省博物院站',
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
          phone: '0311-85286688',
          email: 'hbbwg@hebei.net.cn',
          complaintPhone: '0311-966518',
          website: 'http://www.hebeimuseum.org',
        },
      },
      history:
        '河北博物院的前身是1953年成立的河北省博物馆，2014年新院区建成开放并更为今名，是河北省唯一的省级综合类博物馆和国家一级博物馆。馆藏文物34万余件（套），其中一级文物355件（套），以河北地区出行程行程程土的古代文物、满汉蒙回多民族文物、抗日战争革命文物为特色。新馆位于石家庄市中心，建筑面积约7.6万平方米。',
      architecture:
        "河北博物院建筑群由南区（旧馆）和北区（新馆）组成，整体呈现'中轴线对称'的传统布局理念。北区新馆建筑外观采用深灰色石材幕墙，线条简洁庄重。馆内设有'河北古代文明'通史展、'战国雄风——古中山国'专题展、'大汉绝唱——满城汉墓'专题展、'百年掠影——近代河北'专题展等常设展厅。",
      highlights:
        "十大镇馆之宝：长信宫灯（西汉，出行程行程程自满城汉墓窦绾墓，被誉为'中华第一灯'）、错金银博山炉（西汉，满城汉墓出行程行程程土，代表汉代熏炉制作的最高水平）、透雕龙凤纹铜铺首（战国，燕下都遗址出行程行程程土，国内最大的铜铺首）、刘胜金缕玉衣（西汉，满城汉墓出行程行程程土，共用玉片2498片）、错金银四龙四凤铜方案座（战国，中山国遗址出行程行程程土）、文王访贤图（北宋许道宁作）、青花釉里红开光镂花罐（元代）、彩绘散乐浮雕（五代，曲阳王处直墓出行程行程程土）、董源《夏景山口待渡图》（五代南唐）、《神仙起居法》（唐代杨凝式草书）。",
      education:
        "打造'冀博讲堂''中山国文化研学''长城文化探秘'三大公教品牌。定期举办'满城汉墓与中山国文明'学术讲座。开设'长信宫灯复刻体验''中山国文字拓印''定窑瓷制作'等特色课程。",
    },
  },
  artifacts: [
    {
      id: 43,
      museumId: 21,
      name: '长信宫灯',
      period: '西汉',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '河北满城中山靖王刘胜妻窦绾墓出行程土的青铜灯具，以宫女跪坐执灯为造型，设计巧妙，烟尘可通过宫女右臂导入体内，是汉代青铜工具艺和环保理念的杰出行程代表。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '高95口径21厘米',
        collection: '福建博物院',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前202年–公元8年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 44,
      museumId: 21,
      name: '刘胜金缕玉衣',
      period: '西汉',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '河北满城中山靖王刘胜墓出行程土的金缕玉衣，由2498片玉片和金丝编缀而成，是汉代最高等级的丧葬殓服，代表了汉代玉器加工具和金属工具艺的最高水平。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '高10宽4厚3厘米',
        collection: '福建博物院',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了公元前202年–公元8年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
    {
      id: 45,
      museumId: 21,
      name: '错金银博山炉',
      period: '西汉',
      category: '青铜器',
      image:
        'https://mouthhard-hard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '河北满城中山靖王刘胜墓出行程土的青铜香炉，通体错金银装饰，炉盖雕铸层峦叠嶂的山峰造型，设计精巧，工具艺精湛，是汉代青铜铸造艺术的巅峰之作。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '高29口径31厘米',
        collection: '福建博物院',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前202年–公元8年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
  ],
  activities: [
    {
      id: 61,
      museumId: 21,
      title: '青藏文化展',
      description: '展示青海地区的历史文化和藏传佛教',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 62,
      museumId: 21,
      title: '中原与西域文化展',
      description: '展示中国中原与西域的考古发现',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 63,
      museumId: 21,
      title: '满城汉墓讲座',
      description: '专家学者讲解满城汉墓的考古发现',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 61,
      museumId: 21,
      name: '徽派建筑模型',
      description: '安徽徽派建筑马头墙模型摆件',
      price: 228,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 62,
      museumId: 21,
      name: '徽墨砚台套装',
      description: '传统徽墨与歙砚的文房四宝套装',
      price: 158,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 63,
      museumId: 21,
      name: '黄梅戏主题明信片',
      description: '以黄梅戏人物形象为主题的明信片套装',
      price: 32,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 132,
      museumId: 21,
      name: '徽州三雕艺术摆件',
      description: '以徽州木雕、石雕、砖雕为灵感的综合艺术摆件套装',
      price: 288,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [
    {
      id: 23,
      museumId: 21,
      title: '满城汉墓珍宝展',
      description: '展示满城汉墓出行程土的长信宫灯、金缕玉衣等稀世国宝',
      date: '2024-06-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '河北博物院满城汉墓展厅',
      status: '热门',
      category: '考古发现',
      curator: '河北博物院',
      scale: '200余件（套）文物',
      visitors: 560000,
      background: '1968年，河北满城中山靖王刘胜及其妻窦绾墓的发现，是新中国考古工具作的重大收获。两座墓葬依山开凿，规模宏大，出行程土文物数量众多、保存完好，完整展现了西汉诸侯王的生活图景。长信宫灯设计精巧，兼具实用与环保功能；金缕玉衣由2498片玉片编缀而成，是汉代最高等级的丧葬殓服；错金银博山炉工具艺精湛，是汉代青铜艺术的巅峰之作。本次展览集中展示满城汉墓出行程土的国宝级文物，再现西汉诸侯王的奢华生活。',
    },
    {
      id: 334,
      museumId: 21,
      title: '中山国文物特展',
      description: '展示战国时期中山国遗址出行程土的青铜器、玉器等珍贵文物，揭示神秘古国的辉煌',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '河北省博物馆战国展厅',
      status: '热门',
      category: '历史文化',
      curator: '河北省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '中山国是战国时期活跃于河北中部的神秘诸侯国，史称"战国第八雄"。1974年以来，平山三汲中山王墓的考古发掘，揭开了这个神秘古国的面纱。出行程土的错金银四龙四凤铜方案、中山王方壶等青铜器，工具艺精湛、造型独特，展现了中山国高度发达的青铜文明。中山国文字、中山国度量衡等文物，更是研究战国历史的珍贵资料。本次展览系统展示中山国遗址出行程土文物，揭示这个神秘古国的辉煌文明。',
    }
  ],
  news: [
    {
      id: 124,
      museumId: 21,
      title: '博物馆21年度特展开幕',
      description: '博物馆21举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 125,
      museumId: 21,
      title: '博物馆21新数字化服务上线',
      description: '博物馆21推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 126,
      museumId: 21,
      title: '博物馆21举办文化活动',
      description: '博物馆21举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 23,
      museumId: 21,
      title: '满城汉墓发掘报告与研究',
      author: '河北省文物研究所',
      date: '2023-06-15',
      type: 'book',
      description: '全面记录满城汉墓考古发掘过程与研究成果。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 21,
      museumId: 21,
      title: '满城汉墓地下宫殿漫游',
      description: '步入虚拟满城汉墓墓室，近距离观赏长信宫灯等国宝',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    21: [
      {
        id: 'hb-hebei',
        name: '河北古代文明展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
        introduction:
          '河北素有"文物大省"之称，本展厅展示从泥河湾旧石器时代到明清的河北文明，满城汉墓文物为最大亮点。',
        stats: {
          artifacts: 1000,
          exhibitions: 4,
          visitors: 280000,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:30停止入馆）',
        duration: '2-3小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '长信宫灯',
            period: '西汉',
            description: '中国最美青铜灯具，中华第一灯',
            image: '',
          },
          {
            name: '错金银博山炉',
            period: '西汉',
            description: '满城汉墓出行程土的熏香器具极品',
            image: '',
          },
          {
            name: '刘胜金缕玉衣',
            period: '西汉',
            description: '中山靖王刘胜殓服，由2498片玉片组成',
            image: '',
          },
          {
            name: '透雕双龙白玉壁',
            period: '西汉',
            description: '西汉玉器工具艺的巅峰之作',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '河北古代文明展',
            date: '常设展览',
            description: '两百万年的人类活动与文明创造',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['河北', '常设'],
          },
          {
            title: '满城汉墓出行程土文物展',
            date: '常设展览',
            description: '中山靖王夫妇墓的惊世发现',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['汉墓', '常设'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '汉代王室生活导览',
            desc: '走进西汉中山国的奢华生活',
            type: '音频',
          },
          {
            icon: '📖',
            title: '镇馆之宝深度解读',
            desc: '长信宫灯背后的科技智慧',
            type: '图书',
          },
        ],
      },
      {
        id: 'hb-dingzhou',
        name: '定窑瓷器展厅',
        icon: '🏺',
        category: '陶瓷艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/2.webp',
        introduction:
          '定窑为宋代五大名窑之一，以白瓷著称于世。本展厅汇集定窑各时期精品，展示其"白如玉、薄如纸、声如磬"的特色。',
        stats: {
          artifacts: 350,
          exhibitions: 2,
          visitors: 170000,
        },
        location: '北区二层',
        openTime: '周二至周日 9:00-17:00',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '定窑白釉孩儿枕',
            period: '宋代',
            description: '定窑瓷器中的经典器型',
            image: '',
          },
          {
            name: '定窑刻花梅瓶',
            period: '宋代',
            description: '定窑刻花工具艺的杰出行程代表',
            image: '',
          },
          {
            name: '定窑印花盘',
            period: '金代',
            description: '金代定窑印花技术的成熟表现',
            image: '',
          },
          {
            name: '定窑窑具标本组',
            period: '宋金',
            description: '展示定窑烧造工具艺的实物证据',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '名窑名瓷——定窑瓷器展',
            date: '常设展览',
            description: '从唐到元的定窑瓷器艺术',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['定窑', '常设'],
          },
          {
            title: '河北古代陶瓷展',
            date: '常设展览',
            description: '磁州窑、邢窑等河北名窑荟萃',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['陶瓷', '综合'],
          },
        ],
        recommendations: [
          {
            icon: '🎨',
            title: '定窑纹饰临摹',
            desc: '学习定窑经典的刻花、印花技法',
            type: '活动',
          },
          {
            icon: '🔍',
            title: '五大名窑对比讲座',
            desc: '深入比较定窑与其他名窑的特点',
            type: '讲座',
          },
        ],
      },
    ],
  },
};

export default hebeiData;
