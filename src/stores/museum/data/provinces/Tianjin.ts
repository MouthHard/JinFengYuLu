import type { ProvinceData } from '@/typesOfPages/museum';

export const tianjinData: ProvinceData = {
  code: 'Tianjin',
  name: '天津',
  museums: [
    {
      id: 13,
      name: '天津博物馆',
      province: '天津',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '天津博物馆是一座历史艺术类综合博物馆，馆藏文物20万余件，其中国家一级文物15万件，以古代青铜器、陶瓷器、书法、绘画为特色。',
      artifacts: 200000,
      exhibitions: 24,
      visitors: 2800000,
      features: ['国家一级博物馆', '全国科普教育基地'],
    },
  ],
  details: {
    13: {
      museumId: 13,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-16:30（16:00停止入场）',
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
          forbidden: ['禁止携带宠物', '禁止触摸展品', '法书馆部分展品禁止拍照'],
        },
        transportation: {
          address: '天津市河西区平江道62号',
          metro: '地铁5、6号线文化中心站K/L口出行程行程程',
          bus: '公交47、48、800、838、845、912、机场专线5路文化中心图书馆站',
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
          phone: '022-23315595',
          email: 'tjbwg@tj.gov.cn',
          complaintPhone: '022-83882354',
          website: 'http://www.tjbwg.com',
        },
      },
      history:
        '天津博物馆前身是1918年成立的天津博物院，2004年由天津市艺术博物馆和天津市历史博物馆合并组建而成，2012年新馆建成开放，是天津市最大的综合性博物馆和国家一级博物馆。馆藏文物20万余件（套），珍贵文物近13万件，以古代青铜器、陶瓷器、书法、绘画、甲骨为特色。位于天津文化中心。',
      architecture:
        "新馆建筑面积5.3万平方米，建筑外观以'天鹅湖'为设计灵感，从空中俯瞰宛如一只优雅的天鹅浮于水面之上。馆内设有'耀世奇珍——馆藏文物精品陈列'、'中华百年看天津'、'砚聚墨香'、'沽上风物'等常设展厅。",
      highlights:
        '五大镇馆之宝：太保鼎（西周早期青铜重器，国家禁止出行程行程程境展览64件国宝之一）、《雪景寒林图》（北宋范宽传世真迹）、清乾隆珐琅彩芍药雉鸡图玉壶春瓶、宋代《洛神赋图卷》（宋人摹顾恺之名作）、翡翠蝈蝈白菜。书法收藏汇集晋唐至明清名家名迹。',
      education:
        "打造'天博讲堂''津派文化体验''运河文化研学'三大公教品牌。开设'泥人张彩塑体验''杨柳青年画手绘''风筝制作'等天津非遗手工具具课程。与南开大学、天津大学合作开展学术研究。",
    },
  },
  artifacts: [
    {
      id: 27,
      museumId: 13,
      name: '雪景寒林图',
      period: '北宋',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '北宋画家范宽传世名作，描绘了秦陇山区雪后寒林的壮美景色，笔墨苍劲，气势雄浑，是中国山水画史上的里程碑式作品。',
      basicInfo: {
        periodDetail: '公元960年–1127年',
        material: '纸本设色',
        dimensions: '49×1178厘米（长卷）',
        collection: '四川博物院',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元960年–1127年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 28,
      museumId: 13,
      name: '太保鼎',
      period: '西周',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西周早期青铜重器，造型庄严厚重，纹饰精美，内壁铸有"太保铸"铭文，是研究西周初期历史和青铜铸造工具艺的重要实物资料。',
      basicInfo: {
        periodDetail: '约公元前1046年–前771年',
        material: '纸本设色',
        dimensions: '高49口径54厘米',
        collection: '四川博物院',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1046年–前771年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
  ],
  activities: [
    {
      id: 37,
      museumId: 13,
      title: '津门文化展',
      description: '展示天津地区的历史文化和民俗风情',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 38,
      museumId: 13,
      title: '近代天津历史展',
      description: '展示天津的历史变迁和社会发展',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 39,
      museumId: 13,
      title: '杨柳青年画体验',
      description: '传统杨柳青年画复制品，非遗文化精品',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 37,
      museumId: 13,
      name: '杨柳青年画',
      description: '传统杨柳青年画复制品，非遗文化精品',
      price: 88,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 38,
      museumId: 13,
      name: '泥人张泥塑',
      description: '天津泥人张传统手工具艺品',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 39,
      museumId: 13,
      name: '津门风情明信片',
      description: '天津历史建筑和民俗明信片套装',
      price: 32,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 124,
      museumId: 13,
      name: '雪景寒林图卷轴复制',
      description: '北宋范宽《雪景寒林图》高仿真艺术微喷复制卷轴，附装裱',
      price: 388,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
  ],
  exhibitions: [
    {
      id: 15,
      museumId: 13,
      title: '天津历史文化展',
      description: '展示天津从漕运重镇到现代都市的发展历程',
      date: '2024-04-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '天津博物馆天津历史展厅',
      status: '热门',
      category: '历史文化',
      curator: '天津博物馆',
      scale: '600余件（套）文物',
      visitors: 350000,
      background: '天津自古为河海交汇之地，金元时期因漕运兴起，明永乐二年（1404年）设天津卫，成为京畿门户和漕运枢纽。清代天津发展为北方重要的商业中心，1860年开埠后迅速成为近代中国北方的经济中心和洋务运动的重要基地。近代天津见证了中国的百年沧桑，九国租界并存，中西文化碰撞交融，留下了丰富的近代建筑和文化遗产。本次展览以天津博物馆馆藏文物为基础，系统展示天津从古代漕运重镇到近代通商口岸再到现代国际都市的发展历程。',
    },
    {
      id: 326,
      museumId: 13,
      title: '天津近代工具业遗产展',
      description: '以洋务运动为起点，展示天津作为中国近代工具业摇篮的发展历程与珍贵遗存',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '天津博物馆近代展厅',
      status: '最新',
      category: '历史文化',
      curator: '天津博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '天津是中国近代工具业的重要发源地之一。洋务运动时期，李鸿章在天津创办了天津机器局、轮船招商局等近代企业，开启了中国北方工具业化的进程。此后天津相继建立了开平矿务局、启新洋灰公司、永利碱厂等著名企业，在军事工具业、采矿冶金、化工具纺织等领域走在全国前列。本次展览以天津近代工具业遗产为主题，展示洋务运动以来天津工具业发展的珍贵文物、档案资料和历史影像，回顾天津作为中国近代工具业摇篮的光辉历程。',
    }
  ],
  news: [
    {
      id: 37,
      museumId: 13,
      title: '博物馆13年度特展开幕',
      description: '博物馆13举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 38,
      museumId: 13,
      title: '博物馆13新数字化服务上线',
      description: '博物馆13推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 39,
      museumId: 13,
      title: '博物馆13举办文化活动',
      description: '博物馆13举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 15,
      museumId: 13,
      title: '天津历史文化研究',
      author: '天津博物馆研究部',
      date: '2023-09-05',
      type: 'article',
      description: '对天津地区的历史文化进行程深入研究。',
      link: '#',
    },
  ],
  immersiveExperiences: [],
  exhibitionHalls: {
    13: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/12.webp',
        introduction:
          '天津博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 394,
          exhibitions: 2,
          visitors: 242252,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '天津博物馆最具代表性的珍贵藏品',
            image: '',
          },
          {
            name: '特色藏品一',
            period: '',
            description: '体现本馆特色的精品文物',
            image: '',
          },
          {
            name: '特色藏品二',
            period: '',
            description: '具有重要历史或艺术价值的藏品',
            image: '',
          },
          {
            name: '专题藏品',
            period: '',
            description: '围绕特定主题的系列藏品',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '基本陈列展',
            date: '常设展览',
            description: '系统展示天津博物馆的核心馆藏与历史脉络',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['常设', '基本陈列'],
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
        id: 'tese',
        name: '特色专题厅',
        icon: '✨',
        category: '专题展览',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/18.webp',
        introduction:
          '天津博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 453,
          exhibitions: 2,
          visitors: 220143,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '专题文物一',
            period: '',
            description: '专题方向的核心文物',
            image: '',
          },
          {
            name: '专题文物二',
            period: '',
            description: '专题方向的助展品',
            image: '',
          },
          {
            name: '研究资料',
            period: '',
            description: '相关学术研究的图文资料',
            image: '',
          },
          {
            name: '多媒体展示',
            period: '',
            description: '数字化呈现专题内容的互动设施',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '特色专题展',
            date: '常设展览',
            description: '天津博物馆独有的特色主题展览',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['特色', '专题'],
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
