import type { ProvinceData } from '@/typesOfPages/museum/index';

// 青海省份数据
export const qinghaiData: ProvinceData = {
  code: 'Qinghai',
  name: '青海',
  museums: [
    {
      id: 30,
      name: '青海省博物馆',
      province: '青海',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '青海省博物馆是青海省综合类博物馆，馆藏文物4万余件，以青海历史文物、民族文物为特色。',
      artifacts: 40000,
      exhibitions: 14,
      visitors: 1000000,
      features: ['国家一级博物馆', '青海省爱国主义教育基地'],
    },
  ],
  details: {
    30: {
      museumId: 30,
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
          address: '青海省西宁市城西区西关大街58号',
          metro: '无地铁',
          bus: '公交12、18、22、35、38、41路等至新宁广场南，步行程100米到达',
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
          phone: '0971-6111326',
          email: 'qhmuseum@163.com',
          complaintPhone: '0971-6111164',
          website: 'http://www.qhmuseum.cn',
        },
      },
      history:
        '青海省博物馆筹建于1957年，1986年9月正式对外开放，是青海省唯一一座省级综合性博物馆，2017年被评为国家一级博物馆。馆藏文物15,458件（套），其中珍贵文物2,112件（套），以新石器时代彩陶和民族宗教类文物为特色。2021年完成陈展升级改造，形成以《青海历史文物展》为主的主题展览体系。',
      architecture:
        "新馆建筑采用传统的中轴对称手法，具有浓厚的民族、地方特色，散发着强烈的时代气息。馆内设有'青海历史文物展''青海考古成果展''青海非物质文化遗产精品展''百年青海革命文物目录展'等常设展厅。",
      highlights:
        "代表性藏品：舞蹈纹彩陶盆（马家窑文化，出行程土于青海大通上孙家寨，被誉为'中国美术史上的里程碑'）、彩陶靴（齐家文化，目前国内发现的最早的彩陶鞋具）、三老赵掾碑（东汉时期的重要碑刻）等。",
      education:
        "打造'青博讲堂''高原丝路研学''民族非遗体验'三大公教品牌。定期举办'唐蕃古道与丝绸之路'学术讲座。开设'彩陶绘制体验''藏绣制作''热贡艺术鉴赏'等特色课程。",
    },
  },
  artifacts: [
    {
      id: 61,
      museumId: 30,
      name: '舞蹈纹彩陶盆',
      period: '新石器时代',
      category: '陶器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '青海大通上孙家寨出行程土的马家窑文化彩陶盆，内壁绘有三组手拉手舞蹈的人物纹饰，是研究史前舞蹈艺术和社会生活的珍贵实物资料。',
      basicInfo: {
        periodDetail: '约公元前10000年–前2000年',
        material: '传统手工具材质',
        dimensions: '28×14×20厘米',
        collection: '西藏博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是约公元前10000年–前2000年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 89,
      museumId: 30,
      title: '唐卡展品',
      description: '青海出行程土的马家窑文化唐卡，纹饰优美',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 90,
      museumId: 30,
      title: '藏族金属器书签',
      description: '以藏族金属为设计元素的金属书签',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 91,
      museumId: 30,
      title: '热熔艺术藏卡',
      description: '热熔艺术藏卡复制品，国家一级保护文物',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 79,
      museumId: 30,
      name: '彩陶纹样马克杯',
      description: '马家窑彩陶漩涡纹陶瓷马克杯',
      price: 45,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 80,
      museumId: 30,
      name: '藏族吉祥八宝书签',
      description: '刻有藏族传统吉祥八宝图案的黄铜书签',
      price: 28,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 141,
      museumId: 30,
      name: '马家窑彩陶纹样丝巾',
      description: '以马家窑文化漩涡纹为设计元素的真丝丝巾',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
  ],
  exhibitions: [
    {
      id: 32,
      museumId: 30,
      title: '青海彩陶文化展',
      description: '展示马家窑等彩陶文化的代表性器物，追溯黄河上游文明源头',
      date: '2024-04-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '青海省博物馆彩陶文化展厅',
      status: '热门',
      category: '历史文化',
      curator: '青海省博物馆',
      scale: '300余件彩陶器物',
      visitors: 190000,
      background: '青海是马家窑文化的重要分布区，马家窑文化距今约5300-4000年，是黄河上游地区新石器时代晚期的代表性文化，以精美的彩陶闻名于世。马家窑彩陶纹饰以漩涡纹、水波纹、网格纹等几何图案为主，线条流畅，构图严谨，被誉为"彩陶之冠"。青海大通上孙家寨出行程土的舞蹈纹彩陶盆，记录了史前先民的舞蹈场景，是中国美术史上的里程碑。本次展览系统展示青海出行程土的马家窑、半山、马厂等类型的彩陶精品，追溯黄河上游文明的源头。',
    },
    {
      id: 355,
      museumId: 30,
      title: '唐蕃古道与青海吐蕃文化展',
      description: '展示唐蕃古道沿线的考古发现，重现汉藏文化交流的历史图景',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '青海省博物馆历史展厅',
      status: '最新',
      category: '历史文化',
      curator: '青海省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '唐蕃古道是唐代长安通往吐蕃拉萨的交通要道，青海段是古道的重要组成部分，见证了唐朝与吐蕃的政治往来与文化交流。唐蕃和亲、金城公主入藏等重大历史事件均经由此道。青海都兰等地出行程土的大量吐蕃时期文物，包括丝绸、金银器、木简等，展现了吐蕃文化的独特面貌与汉藏文化交融的历史图景。本次展览以唐蕃古道沿线的考古发现为核心，重现这条古代国际通道的历史风貌与文化意义。',
    }
  ],
  news: [
    {
      id: 151,
      museumId: 30,
      title: '博物馆30年度特展开幕',
      description: '博物馆30举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 152,
      museumId: 30,
      title: '博物馆30新数字化服务上线',
      description: '博物馆30推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 153,
      museumId: 30,
      title: '博物馆30举办文化活动',
      description: '博物馆30举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 32,
      museumId: 30,
      title: '马家窑彩陶的艺术特征分析',
      author: '青海省考古研究所',
      date: '2023-02-28',
      type: 'article',
      description: '深入解析马家窑彩陶的纹饰演变与美学价值。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 30,
      museumId: 30,
      title: '彩陶村落生活体验',
      description: '还原马家窑文化时期先民的制陶与日常生活场景',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    30: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/7.webp',
        introduction:
          '系统展示青海省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 411,
          exhibitions: 2,
          visitors: 94253,
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
            description: '青海省博物馆最具代表性的珍贵文物',
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
            title: '青海省历史文化展',
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
          artifacts: 323,
          exhibitions: 2,
          visitors: 112092,
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

export default qinghaiData;
