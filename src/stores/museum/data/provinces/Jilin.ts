import type { ProvinceData } from '@/typesOfPages/museum/index';

// 吉林省份数据
export const jilinData: ProvinceData = {
  code: 'Jilin',
  name: '吉林',
  museums: [
    {
      id: 17,
      name: '吉林省博物院',
      province: '吉林',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '吉林省博物院是一座历史艺术类博物馆，馆藏文物10余万件，以高句丽文物、渤海国文物、近现代革命文物为特色。',
      artifacts: 100000,
      exhibitions: 18,
      visitors: 1800000,
      features: ['国家一级博物馆', '吉林省爱国主义教育基地'],
    },
  ],
  details: {
    17: {
      museumId: 17,
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
          forbidden: ['禁止携带宠物', '禁止触摸展品', '高句丽文物展厅禁止拍照'],
        },
        transportation: {
          address: '吉林省长春市南关区永顺路1666号',
          metro: '无直达地铁',
          bus: '公交102、Z210、270路吉林省博物院站',
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
          phone: '0431-88088997',
          email: 'jlsm@jlsm.cn',
          complaintPhone: '0431-88917587',
          website: 'http://www.jlmuseum.org',
        },
      },
      history:
        '吉林省博物院前身是1951年成立的吉林省博物馆，2003年与近现代史研究所合并重组，2016年新馆建成开放，是吉林省最大的综合性博物馆和国家一级博物馆。馆藏文物12万余件（套），其中珍贵文物近4万件，以高句丽文物、渤海国文物、辽金文物、近现代革命文物、朝鲜族民族文物为特色。新馆建筑面积3.5万平方米，位于长春净月高新技术产业开发区。',
      architecture:
        "新馆建筑外观以'鼎'字为基础造型，融入了吉林地域文化中的冰雪元素和森林元素，外观简洁大气。建筑主体白色为主色调，局部点缀深灰色。馆内设有'白山松水的记忆——吉林省历史文化陈列'（通史展）、'破晓——吉林人民革命斗争史陈列'、'朝鲜族民俗展'、'满族民俗展'等常设展厅，展览面积约2万平方米。",
      highlights:
        '代表性藏品包括：好太王碑拓片（高句丽第十九代王的记功碑，立于公元414年，研究高句丽历史的第一手史料）、渤海国贞孝公主墓壁画（受唐代绘画风格影响）、汉白玉神兽（高句丽时期）、金代铜坐龙（女真族皇权象征）、抗日名将杨靖宇将军使用过的物品等。高句丽文物收藏量居全国前列，是研究东北亚古代历史文化的宝贵资料库。',
      education:
        "打造'吉博讲堂''高句丽文化研学''东北抗联精神传承'三大公教品牌。定期举办'渤海国与高句丽'学术研讨会。开设'朝鲜族农乐舞体验''满语基础入门''抗联故事宣讲'等特色课程。推出行程行程程'白山黑水间的文明'研学路线。",
    },
  },
  artifacts: [
    {
      id: 35,
      museumId: 17,
      name: '好太王碑拓片',
      period: '高句丽',
      category: '书法',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '吉林集安高句丽好太王碑的拓片，碑文记载了高句丽第十九代王的好太王功绩，是研究高句丽历史和东北亚古代历史的珍贵文字资料，书法雄浑有力。',
      basicInfo: {
        periodDetail: '公元前37年–公元668年',
        material: '传统手工具材质',
        dimensions: '23×8×8厘米',
        collection: '山东博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前37年–公元668年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 36,
      museumId: 17,
      name: '渤海国贞孝公主墓壁画',
      period: '渤海国',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '吉林和龙渤海国贞孝公主墓出行程土的壁画，描绘了侍从、乐伎等人物形象，线条流畅，色彩鲜艳，是研究渤海国艺术和社会生活的珍贵实物资料。',
      basicInfo: {
        periodDetail: '公元698年–926年',
        material: '纸本设色',
        dimensions: '77×930厘米（长卷）',
        collection: '山东博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元698年–926年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
  ],
  activities: [
    {
      id: 49,
      museumId: 17,
      title: '八桂文化展',
      description: '展示广西地区的历史文化和民俗风情',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 50,
      museumId: 17,
      title: '高句丽文化讲座',
      description: '专家学者讲解高句丽历史文化',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 51,
      museumId: 17,
      title: '壮族文化体验',
      description: '了解壮族文化，体验传统习俗',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 49,
      museumId: 17,
      name: '铜鼓模型',
      description: '广西少数民族铜鼓复制品',
      price: 188,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 50,
      museumId: 17,
      name: '壮锦织锦画',
      description: '壮族传统壮锦工具艺织锦画',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 51,
      museumId: 17,
      name: '广西民族文化绘本',
      description: '介绍广西少数民族文化的精美绘本',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
    {
      id: 128,
      museumId: 17,
      name: '壮锦纹样帆布袋',
      description: '融合广西壮锦传统图案的时尚环保帆布袋，民族风与现代设计结合',
      price: 58,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 19,
      museumId: 17,
      title: '广西民族文化展',
      description: '展示广西壮、瑶、苗、侗等少数民族的传统文化',
      date: '2024-05-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '广西壮族自治区博物馆民族文物苑',
      status: '热门',
      category: '民族民俗',
      curator: '广西壮族自治区博物馆',
      scale: '500余件（套）文物',
      visitors: 280000,
      background: '广西是多民族聚居地区,壮族、瑶族、苗族、侗族等少数民族在此创造了丰富多彩的民族文化。壮族是中国人口最多的少数民族,壮锦、铜鼓、干栏建筑等是其文化代表。瑶族、苗族擅长蜡染、刺绣等工具艺,服饰绚丽多彩。侗族大歌、风雨桥等体现了侗族独特的音乐文化和建筑智慧。本次展览系统展示广西各少数民族的传统服饰、生活器具、宗教用品和艺术作品,呈现八桂大地上多元共生的民族文化图景。',
    },
    {
      id: 330,
      museumId: 17,
      title: '高句丽文物专题展',
      description: '展示集安高句丽遗址群出行程土文物，揭示东北亚古代王国的高超文明',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '吉林省博物院高句丽展厅',
      status: '热门',
      category: '历史文化',
      curator: '吉林省博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '高句丽是公元前1世纪至公元7世纪存在于中国东北和朝鲜半岛北部的古代王国,以吉林集安和辽宁桓仁为中心。高句丽政权延续700余年,创造了辉煌的物质文明,留下了将军坟、太王陵、好太王碑等珍贵遗迹。好太王碑是研究高句丽历史的第一手史料,碑文记载了高句丽的疆域扩张和王位继承。高句丽壁画墓内容丰富,展现了当时的社会生活与宗教信仰。2004年高句丽王城、王陵及贵族墓葬列入世界遗产名录。本次展览揭示高句丽文明的独特面貌。',
    }
  ],
  news: [
    {
      id: 112,
      museumId: 17,
      title: '博物馆17年度特展开幕',
      description: '博物馆17举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 113,
      museumId: 17,
      title: '博物馆17新数字化服务上线',
      description: '博物馆17推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 114,
      museumId: 17,
      title: '博物馆17举办文化活动',
      description: '博物馆17举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 19,
      museumId: 17,
      title: '高句丽文化研究',
      author: '广西壮族自治区博物馆研究部',
      date: '2023-08-15',
      type: 'article',
      description: '对高句丽文化的发现、研究和意义进行程深入探讨。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 7,
      museumId: 17,
      title: '高句丽古城复原之旅',
      description: '三维还原高句丽都城遗址，漫步千年前的东北边陲古城',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    17: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/4.webp',
        introduction:
          '系统展示吉林省博物院所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 445,
          exhibitions: 2,
          visitors: 341321,
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
            description: '吉林省博物院最具代表性的珍贵文物',
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
            title: '吉林省博物院历史文化展',
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
          artifacts: 432,
          exhibitions: 2,
          visitors: 306430,
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

export default jilinData;
