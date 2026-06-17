import type { ProvinceData } from '@/typesOfPages/museum/index';

// 内蒙古省份数据
export const neimengguData: ProvinceData = {
  code: 'Neimenggu',
  name: '内蒙古',
  museums: [
    {
      id: 31,
      name: '内蒙古博物院',
      province: '内蒙古',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '内蒙古博物院是内蒙古自治区综合类博物馆，馆藏文物15万余件，以匈奴、契丹、蒙古、辽等北方民族文物为特色。',
      artifacts: 150000,
      exhibitions: 22,
      visitors: 2200000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    31: {
      museumId: 31,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 10:00-17:30（16:30停止入场）',
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
          forbidden: [
            '禁止携带宠物',
            '禁止触摸展品',
            '部分宗教文物展厅禁止拍照',
          ],
        },
        transportation: {
          address: '内蒙古自治区呼和浩特市新城区新华东街27号',
          metro: '地铁1号线内蒙古博物院站',
          bus: '公交2、3、16、23、27、51、66、67、73、75、89、92、93、95、97路内蒙古博物院站',
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
          phone: '0471-4614000',
          email: '83172299@qq.com',
          complaintPhone: '0471-4608429',
          website: 'http://www.nmgbwy.cn',
        },
      },
      history:
        '内蒙古博物院的前身是1957年成立的内蒙古博物馆，2008年改称内蒙古博物院并更为今名，是内蒙古自治区最大的综合性博物馆和国家一级博物馆。馆藏文物150,685件（套），其中珍贵文物5,480件（套），以北方草原民族文物（特别是匈奴、鲜卑、契丹、蒙古等民族文物）、古生物化石、航天科技模型为特色。新馆建筑面积约6.4万平方米，外观造型独特，已成为呼和浩特市的城市地标。',
      architecture:
        "新馆建筑由上海建筑设计研究院设计，外观以'辽阔草原上的蒙古包'为设计灵感，建筑主体呈不规则的曲面造型，象征着内蒙古广袤起伏的草原地貌和游牧民族的毡帐文化。建筑外墙采用乳白色和浅灰色金属板材，线条流畅优美。馆内设有'远古世界'、'高原壮阔'、'地下宝藏'、'飞天神舟'、'大风起兮'五大基本陈列展厅。",
      highlights:
        "代表性藏品：匈奴王金冠（战国晚期，内蒙古杭锦旗阿鲁柴登匈奴墓出行程行程程土）、钧窑'小宋自造'香炉（元代，呼和浩特市郊出行程行程程土）、查干诺尔龙化石（早白垩世）、辽代彩绘木棺及棺床（契丹贵族墓葬出行程行程程土）、元青花缠枝牡丹纹罐等。",
      education:
        "打造'内博讲堂''草原文化研学''航天科普教育'三大公教品牌。定期举办'北方民族与草原丝绸之路'学术讲座。开设'蒙古族摔跤体验''马头琴演奏入门''契丹文字识读'等特色课程。",
    },
  },
  artifacts: [
    {
      id: 62,
      museumId: 31,
      name: '匈奴王金冠',
      period: '战国',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '内蒙古出行程土的匈奴贵族金冠饰，由鹰形金冠顶和金冠带组成，工具艺精湛，造型威武，是研究匈奴文化和北方草原民族金银工具艺的珍贵实物。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '纸本设色',
        dimensions: '高17重136克',
        collection: '海南省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元前475年–前221年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 92,
      museumId: 31,
      title: '草原文化展',
      description: '展示内蒙古地区的历史文化和草原文物',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 93,
      museumId: 31,
      title: '契丹文物讲座',
      description: '专家学者讲解契丹民族的历史文化',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 94,
      museumId: 31,
      title: '那达慕大会体验',
      description: '了解那达慕大会，体验草原习俗',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 95,
      museumId: 31,
      title: '匈奴弓箭模型',
      description: '以匈奴弓箭为原型的复制模型，草原游牧文物',
      date: '2024-09-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 81,
      museumId: 31,
      name: '辽代金银器复刻胸针',
      description: '仿辽代契丹贵族金银器造型的精美胸针',
      price: 128,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 82,
      museumId: 31,
      name: '蒙古族花纹围巾',
      description: '融入蒙古族传统纹样的羊毛围巾',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 142,
      museumId: 31,
      name: '契丹纹样皮具套装',
      description: '以辽代契丹族传统纹样为设计元素的真皮卡包和钥匙扣套装',
      price: 298,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 33,
      museumId: 31,
      title: '辽代文物与契丹文化展',
      description: '展示辽代契丹族留下的金银器、陶瓷及草原游牧文化遗产',
      date: '2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '内蒙古博物院辽代风情展厅',
      status: '热门',
      category: '历史文化',
      curator: '内蒙古博物院',
      scale: '450余件（套）文物',
      visitors: 270000,
      background: '辽代是契丹族建立的政权,统治中国北方近两百年,创造了独具特色的辽文化。契丹族原为游牧民族,建国后吸收汉文化,形成了兼容并蓄的文化体系。辽代金银器工具艺精湛,造型独特,既有草原游牧文化特征,又融合中原工具艺传统。辽代陶瓷以辽三彩为代表,色彩艳丽,纹饰独特。契丹文字是辽代创制的民族文字,记录了契丹的历史与文化。本次展览系统展示辽代文物,揭示契丹族的历史贡献与文化成就。',
    },
    {
      id: 358,
      museumId: 31,
      title: '北方草原游牧文明展',
      description: '展示匈奴、鲜卑、契丹、蒙古等草原民族留下的金银器、武器与生活用具',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '内蒙古博物院草原文明展厅',
      status: '热门',
      category: '历史文化',
      curator: '内蒙古博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '北方草原是游牧文明的摇篮,匈奴、鲜卑、契丹、蒙古等民族先后在此崛起,创造了灿烂的草原文化。这些民族以游牧为生,发展出行程独特的骑射文化、穹庐建筑、金银工具艺和动物纹饰艺术。匈奴金冠、鲜卑金饰、契丹金银器、蒙古族文物等,展现了草原民族高超的工具艺水平和独特的审美观念。草原丝绸之路是东西方文化交流的重要通道,促进了草原文明与农耕文明的互动交融。本次展览系统展示北方草原民族的文物精品,揭示游牧文明的独特魅力。',
    }
  ],
  news: [
    {
      id: 154,
      museumId: 31,
      title: '博物馆31年度特展开幕',
      description: '博物馆31举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 155,
      museumId: 31,
      title: '博物馆31新数字化服务上线',
      description: '博物馆31推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 156,
      museumId: 31,
      title: '博物馆31举办文化活动',
      description: '博物馆31举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 33,
      museumId: 31,
      title: '辽代契丹墓葬制度研究',
      author: '内蒙古大学蒙古学研究中心',
      date: '2023-12-10',
      type: 'book',
      description: '基于辽代契丹贵族墓葬材料探讨其丧葬习俗。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 31,
      museumId: 31,
      title: '草原帝国巡游',
      description: '骑乘虚拟战马驰骋辽阔草原，体验契丹与蒙古族的游牧生活',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    31: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/11.webp',
        introduction:
          '系统展示内蒙古博物院所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 344,
          exhibitions: 2,
          visitors: 136434,
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
            description: '内蒙古博物院最具代表性的珍贵文物',
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
            title: '内蒙古博物院历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/15.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 359,
          exhibitions: 2,
          visitors: 177901,
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

export default neimengguData;
