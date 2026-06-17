import type { ProvinceData } from '@/typesOfPages/museum';

export const jiangsuData: ProvinceData = {
  code: 'Jiangsu',
  name: '江苏',
  museums: [
    {
      id: 6,
      name: '南京博物院',
      province: '江苏',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '南京博物院是中国三大博物馆之一，其前身是1933年蔡元培等倡建的国立中央博物院，是中国创建最早的博物馆。',
      artifacts: 420000,
      exhibitions: 40,
      visitors: 6000000,
      features: ['国家AAAAA级旅游景区', '首批国家一级博物馆'],
    },
  ],
  details: {
    6: {
      museumId: 6,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00',
          stopEntryTime: '16:00',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '除夕全天闭馆',
        },
        ticket: {
          price: '免费（需预约）',
          isFree: true,
          needReservation: true,
          idRequired: '有效证件预约入馆',
          discountPolicy: ['未成年人免费', '老年人优先进馆', '团体需提前预约'],
        },
        rules: {
          allowed: ['展厅内可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品', '民国馆部分场景禁止拍照'],
        },
        transportation: {
          address: '江苏省南京市玄武区中山东路321号',
          metro: '地铁2号线明故宫站1号出行程行程程口',
          bus: '公交5、9、34、59、93路南京博物院站',
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
          phone: '025-84806189',
          email: 'service@njmuseum.com',
          complaintPhone: '025-84807931',
          website: 'http://www.njmuseum.com',
        },
      },
      history:
        '南京博物院是中国三大博物馆之一，其前身是1933年由蔡元培先生倡导成立的国立中央博物院筹备处，是中国创建最早的博物馆之一。1950年更名为南京博物院。2009年新院区建成开放，占地13万平方米，是全国重要的历史文化展示窗口和首批国家一级博物馆。',
      architecture:
        "南京博物院建筑群由历史馆、艺术馆、特展馆、数字馆、民国馆、非遗馆六大展馆组成，呈'一院六馆'格局。历史馆主体建筑仿辽代风格，古朴大气。民国馆是国内首创的全景式还原民国风貌的特色展馆。",
      highlights:
        '馆藏文物43万余件，其中一级文物超过2000件。镇馆之宝有竹林七贤与荣启期模印砖画（南朝国宝级文物）、错银铜牛灯（东汉）、金兽形压镇（西汉，重达9公斤纯金铸件）、青花寿山福海纹香炉（明代永乐年间御窑珍品）等。',
      education:
        "打造'南博讲坛''南博课堂''南博研学'三大公教品牌。定期邀请国内外知名学者举办学术讲座。开设'小小策展人''文物修复体验'等实践课程。",
    },
  },
  artifacts: [
    {
      id: 10,
      museumId: 6,
      name: '竹林七贤与荣启期砖画',
      period: '南朝',
      category: '砖画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '江苏南京西善桥南朝大墓出行程土的模印砖画，描绘了魏晋名士"竹林七贤"和隐士荣启期的形象，线条流畅，神态生动，是研究南朝绘画艺术和士人文化的珍贵实物资料。',
      basicInfo: {
        periodDetail: '公元420年–589年（宋齐梁陈）',
        material: '传统手工具材质',
        dimensions: '11×20×10厘米',
        collection: '上海博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元420年–589年（宋齐梁陈）历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 95,
      museumId: 6,
      name: '金兽',
      period: '西汉',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '江苏盱眙南窑庄出行程土的西汉金兽，重达9100克，含金量高达99%，呈豹形伏卧状，造型生动，工具艺精湛，是目前发现的最重的汉代金器。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '高7重122克',
        collection: '上海博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元前202年–公元8年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 96,
      museumId: 6,
      name: '银缕玉衣',
      period: '东汉',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '江苏徐州东汉楚王墓出行程土的银缕玉衣，由2600余片玉片和银丝编缀而成，是仅次于金缕玉衣的高等级丧葬殓服，代表了汉代玉器加工具工具艺的最高水平。',
      basicInfo: {
        periodDetail: '公元25年–220年',
        material: '纸本设色',
        dimensions: '高10宽5厚4厘米',
        collection: '上海博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了公元25年–220年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
  ],
  activities: [
    {
      id: 16,
      museumId: 6,
      title: '江南文化展',
      description: '展示江苏地区的历史文化和艺术特色',
      date: '2024-03-15 至 2024-09-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 17,
      museumId: 6,
      title: '民国风情展',
      description: '展示民国时期的社会生活和文化风貌',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 18,
      museumId: 6,
      title: '非遗传承体验活动',
      description: '体验南京云锦、金陵刻经等非遗技艺',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 17,
      museumId: 6,
      name: '云锦织锦画',
      description: '南京云锦传统工具艺织锦画',
      price: 388,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 18,
      museumId: 6,
      name: '金陵刻经体验包',
      description: '金陵刻经技艺体验套装，非遗传承',
      price: 128,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 117,
      museumId: 6,
      name: '金兽造型储蓄罐',
      description: '以西汉金兽为原型的金色树脂储蓄罐，造型憨态可掬',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 8,
      museumId: 6,
      title: '江苏古代文明展',
      description: '展示江苏地区从远古到近代的历史发展脉络',
      date: '2024-04-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '南京博物院历史馆',
      status: '热门',
      category: '历史文化',
      curator: '南京博物院',
      scale: '1000余件（套）文物',
      visitors: 520000,
      background: '江苏自古便是吴文化的发源地，从春秋吴国的崛起，到六朝金陵的繁华，再到明清江南的鼎盛，这片土地孕育了灿烂的古代文明。本次展览以考古发现为主线，系统呈现江苏地区从史前文明到近代社会的历史演进，重点展示吴越文化、六朝艺术、明清工具艺等地域特色，让观众领略江苏深厚的历史底蕴与文化魅力。',
    },
    {
      id: 319,
      museumId: 6,
      title: '江苏古代文明序列展',
      description: '系统展示从史前到明清江苏地区的重要考古发现，突出行程吴文化的形成与发展',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '南京博物院历史馆',
      status: '热门',
      category: '历史文化',
      curator: '南京博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '江苏地处长江下游，是中华文明的重要发祥地之一。从马家浜文化的史前遗存，到吴国争霸的青铜重器，从六朝墓葬的精美玉器，到明清江南的繁华见证，江苏考古成果丰硕。本展览以时间为轴，以考古发现为证，系统梳理江苏古代文明的发展脉络，重点揭示吴文化的形成过程与独特价值。',
    }
  ],
  news: [
    {
      id: 16,
      museumId: 6,
      title: '博物馆6年度特展开幕',
      description: '博物馆6举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 17,
      museumId: 6,
      title: '博物馆6新数字化服务上线',
      description: '博物馆6推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 18,
      museumId: 6,
      title: '博物馆6举办文化活动',
      description: '博物馆6举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 8,
      museumId: 6,
      title: '江苏历史文化研究',
      author: '南京博物院研究部',
      date: '2023-08-10',
      type: 'book',
      description: '系统研究江苏地区的历史文化发展历程。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 10,
      museumId: 6,
      title: '民国馆穿越时空之旅',
      description: '全景还原民国南京街头风貌，沉浸感受那个时代的市井生活',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    6: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
        introduction:
          '系统展示南京博物院所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 413,
          exhibitions: 2,
          visitors: 253599,
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
            description: '南京博物院最具代表性的珍贵文物',
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
            title: '南京博物院历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/4.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 339,
          exhibitions: 2,
          visitors: 125689,
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

export default jiangsuData;
