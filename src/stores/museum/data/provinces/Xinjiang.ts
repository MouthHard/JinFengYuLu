import type { ProvinceData } from '@/typesOfPages/museum';

export const xinjiangData: ProvinceData = {
  code: 'Xinjiang',
  name: '新疆',
  museums: [
    {
      id: 33,
      name: '新疆维吾尔自治区博物馆',
      province: '新疆',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '新疆维吾尔自治区博物馆是新疆综合类博物馆，馆藏文物5万余件，以丝绸之路文物、新疆古代文书为特色。',
      artifacts: 50000,
      exhibitions: 18,
      visitors: 1500000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    33: {
      museumId: 33,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 10:00-18:00（16:30停止入场）',
          stopEntryTime: '16:30',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '节假日安排以公告为准',
        },
        ticket: {
          price: '免费（需预约）',
          isFree: true,
          needReservation: true,
          idRequired: '有效证件预约入馆',
          discountPolicy: ['未成年人免费', '老年人、残疾人优先进馆'],
        },
        rules: {
          allowed: ['基本陈列可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品', '禁止使用自拍杆'],
        },
        transportation: {
          address: '新疆乌鲁木齐市沙依巴克区西北路581号',
          metro: '无地铁',
          bus: '公交7、17、51、52、68、157、303、905、906、912路等至博物馆站',
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
          phone: '0991-4552826',
          email: 'xjbwg@163.com',
          complaintPhone: '0991-4536155',
          website: 'http://www.xjmuseum.com.cn',
        },
      },
      history:
        '新疆维吾尔自治区博物馆成立于1959年8月，是省级综合性历史博物馆。原馆初步设计是农业展览馆，为苏式建筑，后改为博物馆并使用至今。2005年新馆建成，建筑面积17288平方米，地下一层、地上两层，主体高18.5米。该馆基本陈列有"新疆历史文物"、"新疆民族民俗"、"逝而不朽惊天下--新疆古代干尸"、"历史的丰碑--新疆革命史料"展览。',
      architecture:
        "新疆维吾尔自治区博物馆新馆建筑具有浓郁的地方特色和现代风格，外观融合了西域传统建筑元素与现代设计理念。馆内设有'找回西域昨日辉煌——新疆历史文物陈列''新疆民族风情陈列''逝而不朽惊天下——新疆古代干尸陈列''历史的丰碑——新疆革命史料展览'等常设展厅。展厅面积7800平方米，展品涵盖石器时代至近现代各个时期。",
      highlights:
        "馆藏珍贵文物达5万余件（套），其中一级文物400余件（套）。代表性藏品：五星出行程东方利中国织锦护臂（汉代，国家一级文物，被誉为20世纪中国考古学最伟大的发现之一）、彩绘伏羲女娲麻布画（唐代）、楼兰美女干尸（距今3800余年）、'延年益寿大宜子孙'锦鸡鸣枕（汉代）、各种文字文书（汉文、回鹘文、吐蕃文等）。丝路文物收藏在全国具有重要地位，是研究丝绸之路历史文化的宝库。",
      education:
        "打造'新疆文博讲堂''丝路文化研学''民族团结一家亲'三大公教品牌。定期举办'丝绸之路与东西方文明交流'学术讲座。开设'古代纺织技艺体验''少数民族乐器演奏学习''维吾尔族木卡姆艺术欣赏'等特色课程。联合吐鲁番、喀什等地开展'重走丝绸之路'研学项目。开展'流动博物馆'进校园、进社区活动，传播中华优秀传统文化。",
    },
  },
  artifacts: [
    {
      id: 64,
      museumId: 33,
      name: '五星出行程东方利中国织锦',
      period: '汉代',
      category: '织绣',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '新疆尼雅遗址出行程土的汉代织锦护臂，织有"五星出行程东方利中国"吉祥语，色彩鲜艳，工具艺精湛，是研究汉代纺织技术和丝绸之路文化交流的珍贵实物。',
      basicInfo: {
        periodDetail: '公元前202年–公元220年',
        material: '传统手工具材质',
        dimensions: '38×16×3厘米',
        collection: '黑龙江省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前202年–公元220年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 65,
      museumId: 33,
      name: '彩绘伏羲女娲麻布画',
      period: '唐代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '新疆吐鲁番阿斯塔那古墓出行程土的麻布画，描绘了人首蛇身的伏羲和女娲形象，手持规矩，象征天地阴阳，是研究古代神话和丧葬习俗的重要资料。',
      basicInfo: {
        periodDetail: '公元618年–907年',
        material: '纸本设色',
        dimensions: '64×1120厘米（长卷）',
        collection: '黑龙江省博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元618年–907年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 66,
      museumId: 33,
      name: '高昌古城文书',
      period: '魏晋南北朝',
      category: '书法',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '新疆吐鲁番高昌故城出行程土的古代文书残片，包括契约、账簿、书信等多种类型，是研究魏晋南北朝时期西域地区社会生活、经济贸易的第一手文字资料。',
      basicInfo: {
        periodDetail: '公元220年–589年',
        material: '传统手工具材质',
        dimensions: '21×5×11厘米',
        collection: '黑龙江省博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元220年–589年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 67,
      museumId: 33,
      name: '楼兰美女干尸',
      period: '汉代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '新疆楼兰古墓出行程土的女性干尸，距今约3800年，保存完好，面容清晰可见，是研究古代欧罗巴人种在新疆分布和古代干尸防腐技术的重要实物。',
      basicInfo: {
        periodDetail: '公元前202年–公元220年',
        material: '传统手工具材质',
        dimensions: '11×6×18厘米',
        collection: '黑龙江省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前202年–公元220年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 99,
      museumId: 33,
      title: '西域文化展',
      description: '展示新疆地区的历史文化和丝路文明',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 100,
      museumId: 33,
      title: '丝绸之路文物研讨会',
      description: '探讨丝绸之路新发现的重要地位和历史论断',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 101,
      museumId: 33,
      title: '敦煌飞天壁画复制体验',
      description: '敦煌飞天壁画复制体验品，展示敦煌艺术魅力',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 102,
      museumId: 33,
      title: '新疆地毯',
      description: '新疆传统手工具地毯，西域工具艺精品',
      date: '2024-09-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 103,
      museumId: 33,
      title: '丝绸之路主题笔记本',
      description: '以丝绸之路新发现为主题主线的精美笔记本',
      date: '2024-10-01 至 2025-03-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 85,
      museumId: 33,
      name: '楼兰美女明信片',
      description: '以楼兰美女干尸为题材的收藏级明信片',
      price: 18,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 86,
      museumId: 33,
      name: '丝路骆驼纹样抱枕',
      description: '丝绸之路商队骆驼图案棉麻抱枕套',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 144,
      museumId: 33,
      name: '丝路纹样披肩',
      description: '以丝绸之路沿线民族传统纹样为设计元素的羊绒披肩',
      price: 328,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
  ],
  exhibitions: [
    {
      id: 35,
      museumId: 33,
      title: '丝路遗珍——楼兰干尸与文书展',
      description: '展示楼兰美女干尸及丝绸之路沿线的古代文书和织物',
      date: '2024-09-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '新疆维吾尔自治区博物馆丝路展厅',
      status: '热门',
      category: '历史文化',
      curator: '新疆维吾尔自治区博物馆',
      scale: '380余件（套）文物',
      visitors: 310000,
      background: '楼兰是丝绸之路上的重要绿洲城邦，曾是东西方贸易的枢纽，约公元4世纪后神秘消失。1900年斯文·赫定发现楼兰古城遗址，此后出行程土了大量珍贵文物。楼兰美女干尸距今约3800年，保存完好，具有明显的欧罗巴人种特征，是研究古代西域人群的重要资料。新疆出行程土的古代文书使用汉文、佉卢文、粟特文、于阗文等多种文字，记录了丝路贸易、行程政管理、宗教活动等丰富内容。本次展览以楼兰考古发现为核心，揭示丝绸之路的辉煌历史与多元文明。',
    },
    {
      id: 346,
      museumId: 33,
      title: '丝绸之路西域文明展',
      description: '展示新疆各地出行程土的丝绸、钱币、文书等文物，还原古代西域多元文明的交融图景',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '新疆维吾尔自治区博物馆丝路展厅',
      status: '热门',
      category: '历史文化',
      curator: '新疆维吾尔自治区博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '西域是古代对玉门关、阳关以西地区的统称，包括今天新疆及中亚部分地区。汉武帝派张骞出行程使西域后，丝绸之路正式开通，西域成为东西方文明交汇的十字路口。古代西域分布着楼兰、龟兹、于阗、高昌等众多城邦国家，使用多种语言文字，信仰佛教、祆教、摩尼教等多种宗教。本次展览精选新疆各地出行程土的丝织品、钱币、文书、木器等珍贵文物，展现西域多元文明交融的历史图景，揭示丝绸之路在促进东西方文化交流中的重要作用。',
    }
  ],
  news: [
    {
      id: 100,
      museumId: 33,
      title: '博物馆33年度特展开幕',
      description: '博物馆33举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 101,
      museumId: 33,
      title: '博物馆33新数字化服务上线',
      description: '博物馆33推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 102,
      museumId: 33,
      title: '博物馆33举办文化活动',
      description: '博物馆33举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 35,
      museumId: 33,
      title: '楼兰古城考古调查报告',
      author: '新疆文物考古研究所',
      date: '2023-09-25',
      type: 'article',
      description: '汇总近年来楼兰遗址区的考古调查与发掘成果。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 33,
      museumId: 33,
      title: '楼兰绿洲古城漫游',
      description: '数字复活已消失的楼兰古城，穿梭于千年前的西域绿洲之中',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    33: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/10.webp',
        introduction:
          '系统展示新疆维吾尔自治区博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 325,
          exhibitions: 2,
          visitors: 212646,
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
            description: '新疆维吾尔自治区博物馆最具代表性的珍贵文物',
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
            title: '新疆维吾尔自治区历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/18.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 512,
          exhibitions: 2,
          visitors: 109675,
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
