import type { ProvinceData } from '@/typesOfPages/museum/index';

// 云南省份数据
export const yunnanData: ProvinceData = {
  code: 'Yunnan',
  name: '云南',
  museums: [
    {
      id: 27,
      name: '云南省博物馆',
      province: '云南',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '云南省博物馆是云南省内最大的综合类博物馆，馆藏文物23万余件，以滇国青铜器、南诏大理国文物、云南少数民族文物为特色。',
      artifacts: 230000,
      exhibitions: 25,
      visitors: 2000000,
      features: ['国家一级博物馆', '全国科普教育基地'],
    },
  ],
  details: {
    27: {
      museumId: 27,
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
          address: '云南省昆明市官渡区广福路6393号',
          metro: '无直达地铁',
          bus: '公交169、185、203、207、K15路云南博物院站',
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
          phone: '0871-67286223',
          email: 'admin@ynmuseum.org',
          complaintPhone: '0871-67286299',
          website: 'http://www.ynmuseum.org',
        },
      },
      history:
        '云南省博物馆创建于1911年（前身为云南图书博物馆），1951年正式成立云南省博物馆筹备委员会，2015年新馆建成开放，是云南省最大的综合性博物馆和国家一级博物馆。馆藏文物230,746件（套），其中珍贵文物14,122件，以滇文化青铜器、南诏大理国文物、云南少数民族文物、古生物化石为特色。新馆建筑面积约6万平方米，位于昆明滇池国家旅游度假区。',
      architecture:
        "新馆建筑设计融入了云南地域文化的多元特征，外观采用'方锥体'造型，隐喻云南高原山地地貌；外立面使用铜色金属板装饰，象征云南丰富的有色金属资源。馆内设有六大通史展厅以及多个专题展厅。",
      highlights:
        "代表性藏品：牛虎铜案（战国，江川李家山古墓群出行程行程程土，滇国青铜艺术的巅峰之作）、叠鼓形战争场面铜贮贝器（西汉，记录了滇国战争场景的立体'历史照片'）、大理国银鎏金镶珠金翅鸟（大理国崇圣寺三塔出行程行程程土）、聂耳小提琴（人民音乐家聂耳生前使用的乐器）、《张胜温画卷》（宋代大理国描工具具张胜温绘制的梵像卷，被誉为'南天瑰宝'）、元青花缠枝莲纹罐等。",
      education:
        "打造'云博讲堂''滇文化研学''多彩民族风情'三大公教品牌。定期举办'西南丝绸之路与茶马古道'学术研讨。开设'斑铜工具具艺体验''扎染制作''东巴文识读'等云南非遗手工具具课程。",
    },
  },
  artifacts: [
    {
      id: 56,
      museumId: 27,
      name: '牛虎铜案',
      period: '战国',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '云南江川李家山古墓群出行程土的古滇国青铜器，以一虎二牛为造型，构思奇特，工具艺精湛，是古滇国青铜文化的代表作，被誉为"滇国之宝"。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '纸本设色',
        dimensions: '高63口径56厘米',
        collection: '内蒙古自治区博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前475年–前221年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 57,
      museumId: 27,
      name: '大理国银鎏金镶珠金翅鸟',
      period: '大理国',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '云南大理崇圣寺三塔出行程土的金翅鸟银像，通体鎏金，镶嵌珠宝，造型优美，是大理国佛教艺术的杰作，被誉为"云南国宝"。',
      basicInfo: {
        periodDetail: '公元937年–1254年',
        material: '纸本设色',
        dimensions: '高5重572克',
        collection: '内蒙古自治区博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元937年–1254年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 79,
      museumId: 27,
      title: '滇文化特展',
      description: '展示云南地区的历史文化和民俗风情',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 80,
      museumId: 27,
      title: '南诏大理国经卷讲座',
      description: '以东西文化交流为设计元素的金属书签，活字形文字',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 81,
      museumId: 27,
      title: '云南少数民族文化体验',
      description: '了解云南少数民族文化，体验多彩民族文化',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 73,
      museumId: 27,
      name: '牛虎铜案模型',
      description: '按比例缩小的牛虎铜案青铜器模型',
      price: 238,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 74,
      museumId: 27,
      name: '滇文化纹样手机壳',
      description: '印有滇国青铜器纹样的全包手机保护壳',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 138,
      museumId: 27,
      name: '滇文化青铜纹样丝巾',
      description: '以滇国青铜器动物搏斗纹样为设计元素的真丝丝巾',
      price: 218,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
  ],
  exhibitions: [
    {
      id: 29,
      museumId: 27,
      title: '滇文化青铜器特展',
      description: '以牛虎铜案为代表的滇国青铜文明，展现西南边疆独特魅力',
      date: '2024-09-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '云南省博物馆滇国文明展厅',
      status: '热门',
      category: '历史文化',
      curator: '云南省博物馆',
      scale: '350余件（套）文物',
      visitors: 330000,
      background: '滇国是战国至西汉时期存在于云南滇池周边的古国，由楚将庄蹻入滇建立，创造了独具特色的滇文化。滇国青铜器以写实生动的动物造型和复杂的场面塑造著称，牛虎铜案、贮贝器等器物展现了滇人高超的铸造工具艺和独特的审美观念。滇文化青铜器既有中原青铜文化的影响，又保留了浓厚的地方特色，是西南边疆青铜文明的杰出行程代表。本次展览以云南省博物馆镇馆之宝牛虎铜案为核心，系统展示滇国青铜器的艺术成就与文化内涵。',
    },
    {
      id: 346,
      museumId: 27,
      title: '南诏大理国文物精华展',
      description: '展示南诏大理国时期的金阿嵯耶观音、经卷等珍贵文物，呈现云南古代政权的辉煌',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '云南省博物馆南诏大理展厅',
      status: '最新',
      category: '历史文化',
      curator: '云南省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '南诏（738-902年）和大理国（937-1254年）是唐宋时期云南地区的两个重要政权，以大理为中心统治西南边疆数百年。南诏大理国深受汉文化和佛教影响，创造了辉煌的区域文明，留下了崇圣寺三塔、《张胜温画卷》等珍贵文化遗产。这一时期的佛教艺术独具特色，阿嵯耶观音造像、金翅鸟等文物展现了南诏大理佛教的神秘魅力。本次展览精选南诏大理国时期的佛教造像、金银器、写经等珍贵文物，呈现云南古代政权的辉煌历史与文化成就。',
    }
  ],
  news: [
    {
      id: 142,
      museumId: 27,
      title: '博物馆27年度特展开幕',
      description: '博物馆27举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 143,
      museumId: 27,
      title: '博物馆27新数字化服务上线',
      description: '博物馆27推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 144,
      museumId: 27,
      title: '博物馆27举办文化活动',
      description: '博物馆27举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 29,
      museumId: 27,
      title: '滇池地区青铜文化研究',
      author: '云南省文物考古研究所',
      date: '2023-08-14',
      type: 'article',
      description: '分析滇文化青铜器的地域特色与制作工具艺。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 27,
      museumId: 27,
      title: '滇国祭祀场景重现',
      description: '通过动态影像还原滇国祭祀仪式中牛虎铜案的使用场景',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    27: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/3.webp',
        introduction:
          '系统展示云南省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 466,
          exhibitions: 2,
          visitors: 242967,
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
            description: '云南省博物馆最具代表性的珍贵文物',
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
            title: '云南省历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/14.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 488,
          exhibitions: 2,
          visitors: 248550,
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

export default yunnanData;
