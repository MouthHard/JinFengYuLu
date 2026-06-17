import type { ProvinceData } from '@/typesOfPages/museum';

export const hubeiData: ProvinceData = {
  code: 'Hubei',
  name: '湖北',
  museums: [
    {
      id: 9,
      name: '湖北省博物馆',
      province: '湖北',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '湖北省博物馆坐落于湖北省武汉市武昌区东湖路，是国家一级博物馆，馆藏文物20万余件，其中国家一级文物945件。',
      artifacts: 200000,
      exhibitions: 30,
      visitors: 4500000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    9: {
      museumId: 9,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00（16:00停止入场）',
          stopEntryTime: '16:00',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '除夕全天闭馆',
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
            '编钟演奏厅内禁止拍照录像',
          ],
        },
        transportation: {
          address: '湖北省武汉市武昌区东湖路160号',
          metro: '地铁4号线楚河汉街站D口出行程行程程；或地铁8号线湖北日报站',
          bus: '公交14、108、402、411、552、578、701、709路东湖路站',
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
          phone: '027-86794127',
          email: 'hbsbwg@126.com',
          complaintPhone: '027-86783163',
          website: 'http://www.hbww.org',
        },
      },
      history:
        '湖北省博物馆筹建于1953年，1963年正式成立并对外开放，是国家一级博物馆和中央地方共建国家级博物馆。坐落在武汉东湖之滨，馆藏文物24万余件（套），其中国家一级文物近千件，以商周青铜器、战国秦汉漆器、曾侯乙墓出行程行程程土文物为最大特色。2021年三期扩容工具具程建成开放，总建筑面积达11.3万平方米。',
      architecture:
        "博物馆建筑群由主馆（北馆）、综合陈列馆（南馆）组成，总体布局呈'鼎'字形，寓意'问鼎中原'的楚文化精神。建筑外墙采用楚文化特色的红色为主色调。编钟演奏厅每日定时演出行程行程程曾侯乙编钟古曲。",
      highlights:
        "四大镇馆之宝：曾侯乙编钟（战国早期，全套65件，总重2500余公斤）、越王勾践剑（春秋晚期，被誉为'天下第一剑'）、曾侯乙外棺（战国，重约7吨的大型漆木棺具）、元青花四爱图梅瓶（元代青花极品）。其他重要藏品还包括郧县人头骨化石、云梦睡虎地秦简、楚国丝绸等。",
      education:
        "打造'鄂博讲堂''编钟乐舞''楚文化研学'三大公教品牌。曾侯乙编钟乐团每日定时演出行程行程程古曲。开设'小小考古家''楚风拓印'等青少年体验课程。",
    },
  },
  artifacts: [
    {
      id: 16,
      museumId: 9,
      name: '曾侯乙编钟',
      period: '战国',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '战国早期曾国国君曾侯乙墓出行程土的大型打击乐器，共65件，总重2500公斤，音域跨五个半八度，是世界音乐史上的奇迹，被誉为"古代世界的第八大奇迹"。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '纸本设色',
        dimensions: '高86口径27厘米',
        collection: '湖南省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前475年–前221年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 17,
      museumId: 9,
      name: '越王勾践剑',
      period: '春秋',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '春秋时期越王勾践的佩剑，剑身刻有"越王鸠浅（勾践）自作用剑"铭文，历经两千多年仍锋利无比，是春秋青铜铸造技术的巅峰之作。',
      basicInfo: {
        periodDetail: '公元前770年–前476年',
        material: '纸本设色',
        dimensions: '高32口径58厘米',
        collection: '湖南省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前770年–前476年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 18,
      museumId: 9,
      name: '曾侯乙外棺',
      period: '战国',
      category: '漆器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '曾侯乙墓的主棺，由内棺和外棺组成，外棺以青铜框架和木板构成，内壁绘有神秘漆画，展现了战国时期高超的漆木工具艺和丧葬文化。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '传统手工具材质',
        dimensions: '35×8×12厘米',
        collection: '湖南省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前475年–前221年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 99,
      museumId: 9,
      name: '曾侯乙编磬',
      period: '战国',
      category: '石器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '曾侯乙墓出行程土的石制打击乐器，共32件，与编钟配套使用，音色清脆悠扬，是研究古代礼乐制度和石雕艺术的重要实物资料。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '传统手工具材质',
        dimensions: '34×13×15厘米',
        collection: '湖南省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前475年–前221年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 25,
      museumId: 9,
      title: '楚文化特展',
      description: '展示楚国的历史文化和艺术成就',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 26,
      museumId: 9,
      title: '曾侯乙编钟演奏会',
      description: '聆听曾侯乙编钟的千年之音',
      date: '2024-05-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 27,
      museumId: 9,
      title: '楚文化讲座',
      description: '专家学者讲解楚历史文化',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 26,
      museumId: 9,
      name: '楚文化丝巾',
      description: '以楚文化漆器纹样为设计元素的真丝丝巾',
      price: 208,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 27,
      museumId: 9,
      name: '编钟演奏CD',
      description: '曾侯乙编钟原声演奏录音专辑',
      price: 98,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
    {
      id: 120,
      museumId: 9,
      name: '越王勾践剑造型U盘',
      description: '以越王勾践剑为造型的32GB金属质感U盘，附文物介绍卡片',
      price: 158,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 11,
      museumId: 9,
      title: '曾侯乙墓出行程土文物展',
      description: '展示曾侯乙墓出行程土的编钟、兵器、漆器等珍贵文物',
      date: '2024-03-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '湖北省博物馆曾侯乙展厅',
      status: '热门',
      category: '历史文化',
      curator: '湖北省博物馆',
      scale: '10000余件文物',
      visitors: 920000,
      background: '1978年，湖北随州擂鼓墩曾侯乙墓的发现，揭开了战国早期曾国文明的神秘面纱。墓主曾侯乙是战国早期曾国国君，墓葬出行程土文物总数达15000余件，其中曾侯乙编钟以其宏大的规模、精湛的工具艺和完备的音律震惊世界，被誉为"古代世界的第八大奇迹"。本次展览全面展示墓葬出行程土的青铜礼器、编钟乐器、兵器车马器、漆木器等珍贵文物，展现曾国高度发达的物质文明与精神文化。',
    },
    {
      id: 322,
      museumId: 9,
      title: '曾侯乙编钟与礼乐文明展',
      description: '以曾侯乙墓出行程土编钟为核心，展现先秦时期礼乐制度与音乐艺术的巅峰',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '湖北省博物馆曾侯乙展厅',
      status: '热门',
      category: '历史文化',
      curator: '湖北省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '曾侯乙编钟是先秦礼乐文明的巅峰之作，全套65件，总重2500余公斤，音域跨五个半八度，能够演奏复杂的乐曲。编钟的发现不仅证明了中国在战国时期已具备先进的音乐理论与铸造技术，更为研究先秦礼乐制度提供了实物证据。本次展览以编钟为核心，结合编磬、琴瑟等乐器，系统展现先秦时期礼乐制度的完备与音乐艺术的高度发展，让观众聆听两千年前的金石之音。',
    }
  ],
  news: [
    {
      id: 25,
      museumId: 9,
      title: '博物馆9年度特展开幕',
      description: '博物馆9举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 26,
      museumId: 9,
      title: '博物馆9新数字化服务上线',
      description: '博物馆9推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 27,
      museumId: 9,
      title: '博物馆9举办文化活动',
      description: '博物馆9举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 11,
      museumId: 9,
      title: '曾侯乙编钟研究',
      author: '湖北省博物馆研究部',
      date: '2023-11-10',
      type: 'article',
      description: '对曾侯乙编钟的发现、研究和保护进行程深入探讨。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 17,
      museumId: 9,
      title: '曾侯乙编钟演奏会',
      description: '虚拟编钟演奏厅，可亲自敲击曾侯乙编钟感受千古乐音',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    9: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/15.webp',
        introduction:
          '系统展示湖北省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 346,
          exhibitions: 2,
          visitors: 88243,
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
            description: '湖北省博物馆最具代表性的珍贵文物',
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
            title: '湖北省历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/17.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 331,
          exhibitions: 2,
          visitors: 72226,
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

export default hubeiData;
