import type { ProvinceData } from '@/typesOfPages/museum/index';

// 台湾省份数据
export const taiwanData: ProvinceData = {
  code: 'Taiwan',
  name: '台湾',
  museums: [
    {
      id: 34,
      name: '台北故宫博物院',
      province: '台湾',
      type: '艺术博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '台北故宫博物院是台湾规模最大的博物馆，馆藏文物近70万件，以中国古代书画、陶瓷器、青铜器为特色。',
      artifacts: 700000,
      exhibitions: 35,
      visitors: 5000000,
      features: ['世界著名博物馆', '中国古代艺术宝库'],
    },
  ],
  details: {
    34: {
      museumId: 34,
      visitInfo: {
        openTime: {
          regularTime:
            '每日 08:30-18:30（夜间延长开放至21:00，周五、周六限特定展区）',
          stopEntryTime: '闭馆前30分钟停止入场',
          closeDay: '全年开放（除夕下午闭馆）',
          holidayNotice: '夜间开放期间部分展厅可能关闭，详情请见官网公告',
        },
        ticket: {
          price: '普通新台币350元/人；学生新台币150元/人',
          isFree: false,
          needReservation: true,
          idRequired: '有效证件购票入场',
          discountPolicy: [
            '每月第一周的周六免费开放（需提前网络预约）',
            '65岁以上长者、身心障碍者及陪同者、军警人员免费',
            '持观光护照之外籍游客享优惠票价',
          ],
        },
        rules: {
          allowed: [
            '大部分展厅允许拍照（禁闪光灯、禁自拍杆、禁三脚架）',
            '可携带饮用水',
          ],
          forbidden: [
            '禁止携带大型行程程李或背包',
            '禁止饮食（指定餐饮区除外）',
            '禁止触摸展品玻璃',
            '特展区域以现场规定为准',
          ],
        },
        transportation: {
          address: '台湾台北市士林区至善路二段221号',
          metro: '台北捷运淡水信义线士林站，转乘红30路公交车至故宫博物院站',
          bus: '公交红13、红30、255、304、小18、小19路台北故宫博物院站',
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
          phone: '+886-2-2881-2021',
          email: 'service@npm.gov.tw',
          complaintPhone: '+886-2-2881-2021',
          website: 'https://www.npm.gov.tw',
        },
      },
      history:
        "台北故宫博物院成立于1965年，其前身是1925年在北京成立的故宫博物院古物陈列所。1933年为避日军战火，故宫文物南迁上海、南京，抗战期间辗转西南各省，1948年底至1949年初分三批运抵台湾。1962年开始在台北外双溪兴建馆舍，1965年建成开放。馆藏文物近70万件（套），其中绝大多数为原北京故宫的南迁文物，涵盖了中国五千年的文明精华，尤以商周青铜器、历代书画、宋代瓷器、古籍善本、玉器等为最负盛名的收藏领域，是世界四大博物馆之一。南部院区（嘉义太保）于2015年建成开放，形成'一院两区'格局。",
      architecture:
        "台北故宫博物院主院区建筑由中国传统宫殿式建筑风格演变而来，外观仿效北京故宫的样式，采用黄色琉璃瓦屋顶、朱红色门窗和米白色墙面，气势恢宏又不失典雅。主楼地上四层、地下一层，建筑面积约4.2万平方米。2018年至2021年完成了为期三年的'正馆扩建及整建工具具程'，新增了现代化的展览空间和公共服务设施。南部院区位于嘉义县太保市，建筑风格更为现代前卫，以'龙形'为设计概念，专注于亚洲艺术文化的展示与交流。",
      highlights:
        "镇馆之宝享誉全球：翠玉白菜（清代，利用翡翠天然色泽雕琢而成，菜叶上还停留着两只昆虫，巧夺天工具具）、肉形石（清代，一块天然形成的玛瑙石，色泽纹理酷似一块红烧东坡肉，令人叹为观止）、毛公鼎（西周晚期，铭文长达497字，是目前发现的铭文最长的青铜器）、《快雪时晴帖》（东晋王羲之行程程书法帖，被誉为'天下第一法书'）、《自叙帖》（唐代怀素草书狂草代表作）、《寒食帖》（苏轼行程程书代表作）、《华子冈图》（五代巨然山水画）、《溪山行程程旅图》（北宋范宽山水画巅峰之作）、《万壑松风图》（南宋李唐山水杰作）、《早春图》（郭熙北宋山水画代表作）。此外还收藏有大量宋代五大名窑瓷器、商周青铜礼器、历代玺印、古籍善本等稀世珍宝。",
      education:
        "打造'故宫讲坛''国宝赏析''故宫学研习营'三大公教品牌。常年举办'故宫系列讲座'，邀请两岸学者讲解文物背后的历史文化故事。开设'古画临摹''青铜器拓印''宋代茶道体验''清代宫廷服饰试穿'等沉浸式教育课程。推出行程行程程'夜游故宫''故宫奇幻夜'等特色参访项目。与台湾本地高校和研究机构密切合作，共同推进'故宫学'研究的发展。",
    },
  },
  artifacts: [
    {
      id: 71,
      museumId: 34,
      name: '肉形石',
      period: '清代',
      category: '雕塑',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '天然玛瑙石，色泽纹理酷似东坡肉，是台北故宫博物院最著名的藏品之一，巧夺天工具，被誉为"人间至宝"。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '传统手工具材质',
        dimensions: '15×16×13厘米',
        collection: '天津博物馆',
        excavation: '传世品，历经数代收藏传承',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元1636年–1912年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 72,
      museumId: 34,
      name: '毛公鼎',
      period: '西周',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西周晚期青铜重器，内壁铸有499字铭文，是现存铭文最长的青铜器，记载了周王册命毛公的史实，具有极高的历史和书法价值。',
      basicInfo: {
        periodDetail: '约公元前1046年–前771年',
        material: '纸本设色',
        dimensions: '高53口径59厘米',
        collection: '天津博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1046年–前771年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 73,
      museumId: 34,
      name: '富春山居图（无用师卷）',
      period: '元代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '元代画家黄公望传世名作《富春山居图》的后半段"无用师卷"，以水墨描绘富春江两岸景色，是中国山水画的巅峰之作，被誉为"画中兰亭"。',
      basicInfo: {
        periodDetail: '公元1271年–1368年',
        material: '纸本设色',
        dimensions: '63×596厘米（长卷）',
        collection: '天津博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元1271年–1368年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 74,
      museumId: 34,
      name: '北宋汝窑天青无纹椭圆水仙盆',
      period: '北宋',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '北宋汝窑瓷器精品，通体施天青色釉，无开片纹饰，造型优雅，釉色温润如玉，是汝窑传世品中的极品，极为罕见珍贵。',
      basicInfo: {
        periodDetail: '公元960年–1127年',
        material: '纸本设色',
        dimensions: '高26口径16厘米',
        collection: '天津博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元960年–1127年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
  ],
  activities: [
    {
      id: 104,
      museumId: 34,
      title: '故宫文物特展',
      description: '展示台北故宫珍藏的中国古代文物',
      date: '2024-03-15 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 105,
      museumId: 34,
      title: '书画艺术讲座',
      description: '专家学者讲解中国古代书画艺术',
      date: '2024-06-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 106,
      museumId: 34,
      title: '文物修复体验',
      description: '了解文物修复过程，体验传统技艺',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 107,
      museumId: 34,
      title: '清明上河图真迹展',
      description: '以《清明上河图》为设计元素的期方巾',
      date: '2024-09-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 87,
      museumId: 34,
      name: '翠玉白菜造型摆件',
      description: '台北故宫镇馆之宝翠玉白菜Q版树脂摆件',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 88,
      museumId: 34,
      name: '肉形石造型U盘',
      description: '以肉形石为外形的创意USB闪存盘',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 145,
      museumId: 34,
      name: '肉形石造型茶宠',
      description: '以肉形石为原型的创意紫砂茶宠，可养可玩',
      price: 188,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
  ],
  exhibitions: [
    {
      id: 36,
      museumId: 34,
      title: '故宫国宝精选展',
      description: '翠玉白菜、肉形石、毛公鼎等镇馆之宝集中亮相',
      date: '2024-10-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '台北故宫博物院正馆',
      status: '热门',
      category: '艺术精品',
      curator: '台北故宫博物院',
      scale: '200余件国宝级文物',
      visitors: 850000,
      background: '台北故宫博物院珍藏近70万件中华文物瑰宝,其中翠玉白菜、肉形石、毛公鼎被誉为镇馆三宝。翠玉白菜利用翡翠天然色泽巧雕而成,寓意清白;肉形石为天然玛瑙,纹理酷似东坡肉;毛公鼎铭文长达497字,是现存铭文最长的青铜器。本次展览汇聚这些国宝级文物,让观众领略中华文明的璀璨光辉。',
    },
    {
      id: 364,
      museumId: 34,
      title: '台湾原住民文化特展',
      description: '展示台湾16个原住民族的传统服饰、工具艺品与生活器具，呈现多元族群的文化风貌',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '台湾故宫博物院原住民文化厅',
      status: '热门',
      category: '民俗风情',
      curator: '台湾故宫博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '台湾原住民是台湾最早的居民,包括阿美、泰雅、排湾、布农等16个族群,每个族群都有独特的语言、服饰、工具艺和祭典文化。本次展览通过传统织布、琉璃珠、木雕、陶器等文物,展现原住民与自然和谐共生的生活智慧,以及丰富的口传文学和祭仪传统,呈现台湾多元族群文化的独特魅力。',
    }
  ],
  news: [
    {
      id: 160,
      museumId: 34,
      title: '博物馆34年度特展开幕',
      description: '博物馆34举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 161,
      museumId: 34,
      title: '博物馆34新数字化服务上线',
      description: '博物馆34推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 162,
      museumId: 34,
      title: '博物馆34举办文化活动',
      description: '博物馆34举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 36,
      museumId: 34,
      title: '故宫书画鉴定方法论',
      author: '台北故宫博物院书画处',
      date: '2023-11-15',
      type: 'book',
      description: '总结历代书画鉴定的方法体系与实践经验。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 34,
      museumId: 34,
      title: '故宫国宝微距鉴赏',
      description: '超高分辨率放大翠玉白菜、肉形石等国宝的微观细节',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    34: [
      {
        id: 'zhencang',
        name: '珍藏展厅',
        icon: '💎',
        category: '宫廷珍宝',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/12.webp',
        introduction:
          '台北故宫博物院珍藏展厅，集中展示最具代表性的宫廷御用文物与皇家珍品。',
        stats: {
          artifacts: 401,
          exhibitions: 2,
          visitors: 286944,
        },

        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '御用金器',
            period: '明清',
            description: '皇室专用的精美金器',
            image: '',
          },
          {
            name: '宫廷珐琅器',
            period: '清代',
            description: '掐丝珐琅工具艺的宫廷杰作',
            image: '',
          },
          {
            name: '皇家玉器',
            period: '明清',
            description: '帝王把玩的高贵玉器',
            image: '',
          },
          {
            name: '宫廷书画',
            period: '历代',
            description: '历代帝后御笔与宫廷画作',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '宫廷珍品大展',
            date: '常设展览',
            description: '精选台北故宫博物院最珍贵的宫廷藏品',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['珍品', '常设'],
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
        id: 'shuhua',
        name: '书画艺术展厅',
        icon: '🏥',
        category: '书画艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/19.webp',
        introduction:
          '台北故宫博物院书画展厅，轮换展示历代书法绘画珍品，涵盖晋唐宋元至明清的名家佳作。',
        stats: {
          artifacts: 418,
          exhibitions: 2,
          visitors: 178060,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '历代法书名迹',
            period: '历代',
            description: '中国书法史上的里程碑作品',
            image: '',
          },
          {
            name: '宋元绘画精品',
            period: '宋元',
            description: '宋元时期院体画与文人画代表作',
            image: '',
          },
          {
            name: '明清书画',
            period: '明清',
            description: '明清两代书画大家的传世之作',
            image: '',
          },
          {
            name: '皇帝御笔',
            period: '明清',
            description: '历代皇帝亲笔题写的书法作品',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '历代书画精品展',
            date: '轮换展出行程',
            description: '定期更换展品，每次不同主题',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['书画', '轮换'],
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

export default taiwanData;
