import type { ProvinceData } from '@/typesOfPages/museum/index';

// 宁夏省份数据
export const ningxiaData: ProvinceData = {
  code: 'Ningxia',
  name: '宁夏',
  museums: [
    {
      id: 32,
      name: '宁夏回族自治区博物馆',
      province: '宁夏',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '宁夏回族自治区博物馆是宁夏回族自治区综合类博物馆，馆藏文物4万余件，以西夏文物、回族文物为特色。',
      artifacts: 40000,
      exhibitions: 16,
      visitors: 1200000,
      features: ['国家一级博物馆', '宁夏回族自治区爱国主义教育基地'],
    },
  ],
  details: {
    32: {
      museumId: 32,
      visitInfo: {
        openTime: {
          regularTime:
            '周二至周日 10:00-18:00（17:00停止入场，夏季延至18:30闭馆）',
          stopEntryTime: '17:00',
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
          forbidden: ['禁止携带宠物', '禁止触摸展品', '干尸展厅禁止拍照录像'],
        },
        transportation: {
          address: '宁夏回族自治区银川市金凤区人民广场东街6号',
          metro: '无地铁',
          bus: '公交17、20、27、32、33、41、44、106、201路宁夏博物馆站',
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
          phone: '0951-5085093',
          email: 'nxbwg@nx.gov.cn',
          complaintPhone: '0951-5085093',
          website: 'http://www.nxbwg.com',
        },
      },
      history:
        '宁夏博物馆创建于1959年，前身为1950年成立的宁夏省博物馆筹备处，1973年正式成立宁夏回族自治区博物馆，2008年新馆建成开放，是宁夏唯一的省级综合类博物馆和国家一级博物馆。馆藏文物52,384件（套），其中珍贵文物2,768件（套），以西夏文物、回族民俗文物、贺兰山岩画、宁夏近现代历史文物为最具特色的收藏方向。新馆建筑面积约3万平方米，位于银川市中心人民广场东侧。',
      architecture:
        "新馆建筑外观采用具有浓郁伊斯兰建筑风格的穹顶造型与现代简约设计相结合的理念，建筑顶部设计了象征伊斯兰文化的圆顶结构，外立面使用浅色石材和深棕色金属板相间装饰。馆内设有'朔色长天——宁夏通史陈列'、'石刻史书——宁夏岩画展'、'红旗漫卷——宁夏革命文物陈列'、'回乡漫步——宁夏民俗展'等常设展厅。",
      highlights:
        '代表性藏品：鎏金铜牛（西夏，宁夏银川西夏陵区出行程行程程土，重达188公斤）、西夏文佛经《吉祥遍至口和本续》（目前世界上现存最早的木活字印刷品之一）、力士志文支座（西夏，陵区出行程行程程土的雕刻精美的石质构件）等。',
      education:
        "打造'宁博讲堂''西夏文化研学''丝路宁夏'三大公教品牌。定期举办'西夏学与党项文明'学术讲座。",
    },
  },
  artifacts: [
    {
      id: 63,
      museumId: 32,
      name: '鎏金铜牛',
      period: '西夏',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '宁夏西夏王陵出行程土的鎏金青铜牛，重达188公斤，造型逼真，体态健硕，是西夏时期青铜铸造和鎏金工具艺的杰出行程代表，被誉为"西夏国宝"。',
      basicInfo: {
        periodDetail: '公元1038年–1227年',
        material: '纸本设色',
        dimensions: '高69口径40厘米',
        collection: '吉林省博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元1038年–1227年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
  ],
  activities: [
    {
      id: 96,
      museumId: 32,
      title: '西夏文化展',
      description: '展示宁夏出行程土的西夏文物，包括瓷器、乐器等建筑构件',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 97,
      museumId: 32,
      title: '西夏文经卷讲座',
      description: '以西夏文写成的教育经卷，是研究西夏文化的重要资料',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 98,
      museumId: 32,
      title: '回族文化体验',
      description: '了解回族文化，体验少数民族习俗',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 83,
      museumId: 32,
      name: '西夏文书法T恤',
      description: '印有西夏文字书法的文化衫',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 84,
      museumId: 32,
      name: '西夏王陵拼图',
      description: '1000片西夏王陵风景主题拼图',
      price: 88,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 143,
      museumId: 32,
      name: '西夏王陵造型摆件',
      description: '以西夏王陵"东方金字塔"为原型的树脂工具艺摆件',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [
    {
      id: 34,
      museumId: 32,
      title: '西夏王陵与西夏文字展',
      description: '揭开西夏王朝神秘面纱，解读独特的西夏文字系统',
      date: '2024-05-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '宁夏回族自治区博物馆西夏展厅',
      status: '热门',
      category: '历史文化',
      curator: '宁夏回族自治区博物馆',
      scale: '250余件（套）文物',
      visitors: 230000,
      background: '西夏是党项族建立的政权，统治西北地区近两百年，创造了独具特色的西夏文化。西夏王陵是西夏历代帝王的陵墓群，规模宏大，布局严整，被誉为"东方金字塔"。西夏文字是李元昊时期创制的方块文字，共有六千余字，结构复杂，记录了西夏的语言与文化。西夏文佛经、文书等文献是研究西夏历史的重要资料。本次展览以西夏王陵出行程土文物和西夏文文献为核心，揭开这个神秘王朝的历史面貌与文化成就。',
    },
    {
      id: 361,
      museumId: 32,
      title: '西夏陵考古发现展',
      description: '以西夏王陵出行程土文物为核心，揭示西夏王朝的文字、佛教与社会面貌',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '宁夏回族自治区博物馆西夏展厅',
      status: '热门',
      category: '历史文化',
      curator: '宁夏回族自治区博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '西夏陵是西夏王朝的皇家陵寝，位于银川西郊贺兰山东麓，现存帝陵9座、陪葬墓250余座，是中国现存规模最大、地面遗址最完整的帝王陵园之一。1972年以来的考古发掘出行程土了鎏金铜牛、石马、西夏文碑刻等珍贵文物，揭示了西夏的丧葬制度、佛教信仰和工具艺水平。西夏深受汉文化和藏传佛教影响，形成了独特的文化面貌。本次展览以西夏陵考古发现为主线，展现西夏王朝的物质文明与精神世界。',
    }
  ],
  news: [
    {
      id: 157,
      museumId: 32,
      title: '博物馆32年度特展开幕',
      description: '博物馆32举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 158,
      museumId: 32,
      title: '博物馆32新数字化服务上线',
      description: '博物馆32推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 159,
      museumId: 32,
      title: '博物馆32举办文化活动',
      description: '博物馆32举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 34,
      museumId: 32,
      title: '西夏文字的创制与演变',
      author: '宁夏社科院西夏学研究所',
      date: '2023-07-08',
      type: 'video',
      description: '讲解西夏文字的造字规律及其在中国文字史上的地位。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 32,
      museumId: 32,
      title: '西夏王陵日落航拍',
      description: '无人机视角俯瞰西夏王陵群，配合AR信息层解读陵墓布局',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    32: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/7.webp',
        introduction:
          '系统展示宁夏回族自治区博物馆所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 502,
          exhibitions: 2,
          visitors: 145697,
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
            description: '宁夏回族自治区博物馆最具代表性的珍贵文物',
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
            title: '宁夏回族自治区历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/7.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 388,
          exhibitions: 2,
          visitors: 94063,
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

export default ningxiaData;
