import type { ProvinceData } from '@/typesOfPages/museum';

export const hunanData: ProvinceData = {
  code: 'Hunan',
  name: '湖南',
  museums: [
    {
      id: 10,
      name: '湖南省博物馆',
      province: '湖南',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '湖南省博物馆是湖南省最大的历史艺术类博物馆，馆藏文物18万余件，以马王堆汉墓出行程土文物最具特色。',
      artifacts: 180000,
      exhibitions: 28,
      visitors: 3800000,
      features: ['国家一级博物馆', '全国科普教育基地'],
    },
  ],
  details: {
    10: {
      museumId: 10,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00（16:00停止入场）',
          stopEntryTime: '16:00',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '除夕闭馆',
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
          forbidden: ['禁止携带宠物', '禁止触摸展品', '马王堆汉墓展厅禁止拍照'],
        },
        transportation: {
          address: '湖南省长沙市开福区东风路50号',
          metro: '地铁3、6号线烈士公园南站2号出行程行程程口',
          bus: '公交112、131、136、146、150、358、901路湖南省博物馆站',
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
          phone: '0731-84415833',
          email: 'hnsxbwg@126.com',
          complaintPhone: '0731-84414400',
          website: 'http://www.hnmuseum.com',
        },
      },
      history:
        '湖南省博物馆筹建于1897年，前身可追溯至清末的湖南宝物保存所，1956年正式对外开放，是湖南省最大的历史艺术类博物馆和国家一级博物馆。馆藏文物18万余件，尤以马王堆汉墓出行程行程程土文物为最负盛名的收藏。2017年新馆建成开放，建筑面积约9.1万平方米。',
      architecture:
        "新馆由日本建筑师矶崎新主持设计，建筑外观灵感源自汉代画像石中的'阙'意象，以黑红灰为主色调。馆内设有'湖南人——三湘历史文化陈列'和'马王堆汉墓陈列'等核心展厅，通过沉浸式多媒体技术呈现西汉长沙国丞相利苍一家人的生活图景。",
      highlights:
        '马王堆汉墓出行程行程程土文物最为著名：素纱单衣（重量仅49克，薄如蝉翼，代表汉代纺织技术巅峰）、T型帛画（全长205厘米，描绘天上人间地下三界）、朱地彩绘棺（绘有110多个神仙怪兽图像）、帛书《老子》甲乙本等。此外还收藏有商代人面纹方鼎、唐摹《兰亭序》黄绢本等重要文物。',
      education:
        "打造'湘博讲坛''马王堆研学''湖湘文化体验'三大公教品牌。定期举办'马王堆汉墓学术报告会'。开设'素纱单衣织造体验''汉代礼仪体验'等特色课程。推出行程行程程'博物馆奇妙夜'夜场活动。",
    },
  },
  artifacts: [
    {
      id: 19,
      museumId: 10,
      name: '素纱单衣',
      period: '西汉',
      category: '织绣',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '马王堆汉墓出行程土的稀世珍宝，重量仅49克，薄如蝉翼，折叠后可装入火柴盒，代表了汉代丝绸纺织技术的最高水平，是世界上最轻的服装之一。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '传统手工具材质',
        dimensions: '34×16×18厘米',
        collection: '湖北省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前202年–公元8年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 20,
      museumId: 10,
      name: 'T型帛画',
      period: '西汉',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '马王堆汉墓出行程土的丧葬绘画精品，呈T字形，描绘了天上、人间、地下三界景象，色彩艳丽，构图宏大，是中国早期绘画艺术的杰出行程代表。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '44×606厘米（长卷）',
        collection: '湖北省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元前202年–公元8年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 21,
      museumId: 10,
      name: '朱地彩绘棺',
      period: '西汉',
      category: '漆器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '马王堆汉墓出行程土的漆棺精品，通体以朱红为地，彩绘云气纹和神兽图案，色彩鲜艳夺目，工具艺精湛复杂，展现了汉代漆器艺术的高超水平。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '传统手工具材质',
        dimensions: '13×11×19厘米',
        collection: '湖北省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前202年–公元8年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 100,
      museumId: 10,
      name: '马王堆帛书《老子》甲本',
      period: '西汉',
      category: '书法',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '马王堆汉墓出行程土的帛书珍品，抄写的是《老子》德经在前、道经在后的版本，与今传本顺序不同，对于研究老子思想的演变具有重要学术价值。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '传统手工具材质',
        dimensions: '9×3×16厘米',
        collection: '湖北省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前202年–公元8年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 28,
      museumId: 10,
      title: '马王堆汉墓特展',
      description: '展示马王堆汉墓的珍贵文物和考古发现',
      date: '2024-03-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 29,
      museumId: 10,
      title: '湖湘文化研讨会',
      description: '探讨湖南地区的历史文化',
      date: '2024-06-15 至 2024-06-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 30,
      museumId: 10,
      title: '汉代礼仪体验',
      description: '穿汉服、学汉礼，体验汉代文化',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 29,
      museumId: 10,
      name: 'T形帛画书签',
      description: '以马王堆T形帛画为设计元素的金属书签',
      price: 45,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 30,
      museumId: 10,
      name: '汉代文化主题笔记本',
      description: '以汉代文物为主题的精美笔记本',
      price: 58,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 121,
      museumId: 10,
      name: '马王堆养生香囊',
      description: '根据马王堆汉墓出行程土《五十二病方》配方研发的中药养生香囊',
      price: 88,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 12,
      museumId: 10,
      title: '马王堆汉墓展',
      description: '展示马王堆汉墓出行程土的帛书、漆器、丝织品等稀世珍宝',
      date: '2024-04-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '湖南省博物馆马王堆展厅',
      status: '热门',
      category: '历史文化',
      curator: '湖南省博物馆',
      scale: '3000余件文物',
      visitors: 1100000,
      background: '1972年至1974年，长沙马王堆三座汉墓的考古发掘震惊世界，出行程土文物数量众多、保存完好，被誉为二十世纪最重大的考古发现之一。墓主为西汉长沙国丞相利苍及其夫人辛追，墓葬出行程土的素纱单衣、T型帛画、漆器、帛书等文物，完整展现了西汉初期贵族阶层的生活方式、丧葬观念与艺术成就，是研究汉代历史文化的珍贵宝库。',
    },
    {
      id: 323,
      museumId: 10,
      title: '马王堆汉墓文物精华展',
      description: '展示马王堆汉墓出行程土的素纱单衣、T型帛画等国宝级文物，再现汉代贵族生活',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '湖南省博物馆马王堆展厅',
      status: '热门',
      category: '历史文化',
      curator: '湖南省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '马王堆汉墓是西汉初期长沙国丞相利苍家族的墓葬，出行程土文物以其惊人的保存状态和极高的艺术价值闻名于世。素纱单衣仅重49克，薄如蝉翼，代表汉代纺织技术的巅峰；T型帛画描绘天上人间地下三界，是早期绘画艺术的杰作；朱地彩绘棺色彩鲜艳，展现漆器工具艺的高超水平。本次展览精选墓中出行程土的国宝级文物，再现两千年前汉代贵族的奢华生活与精神世界。',
    }
  ],
  news: [
    {
      id: 28,
      museumId: 10,
      title: '博物馆10年度特展开幕',
      description: '博物馆10举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 29,
      museumId: 10,
      title: '博物馆10新数字化服务上线',
      description: '博物馆10推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 30,
      museumId: 10,
      title: '博物馆10举办文化活动',
      description: '博物馆10举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 12,
      museumId: 10,
      title: '马王堆汉墓研究',
      author: '湖南省博物馆研究部',
      date: '2023-12-05',
      type: 'book',
      description: '系统介绍马王堆汉墓的考古发现和研究成果。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 18,
      museumId: 10,
      title: '马王堆汉墓探秘',
      description: '进入辛追夫人墓室的三维复原场景，了解汉代丧葬文化',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    10: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/5.webp',
        introduction:
          '系统展示湖南省博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 391,
          exhibitions: 2,
          visitors: 245238,
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
            description: '湖南省博物馆最具代表性的珍贵文物',
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
            title: '湖南省历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/11.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 492,
          exhibitions: 2,
          visitors: 251220,
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

export default hunanData;
