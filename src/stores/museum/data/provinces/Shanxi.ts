import type { ProvinceData } from '@/typesOfPages/museum/index';

// 山西省份数据
export const shanxiData: ProvinceData = {
  code: 'Shanxi',
  name: '山西',
  museums: [
    {
      id: 22,
      name: '山西博物院',
      province: '山西',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '山西博物院是山西省内最大的综合性博物馆，馆藏文物50余万件，以晋侯墓铜器、佛像、北朝壁画最具特色。',
      artifacts: 500000,
      exhibitions: 32,
      visitors: 3200000,
      features: ['国家一级博物馆', '全国科普教育基地'],
    },
  ],
  details: {
    22: {
      museumId: 22,
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
          forbidden: ['禁止携带宠物', '禁止触摸展品'],
        },
        transportation: {
          address: '山西省太原市万柏林区滨河西路北段13号',
          metro: '无直达地铁',
          bus: '公交6、611、618、831、845、865、866路山西博物院站',
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
          phone: '0351-8789188',
          email: 'shanximuseum@163.com',
          complaintPhone: '0351-8789999',
          website: 'http://www.shanximuseum.com',
        },
      },
      history:
        '山西博物院前身为1919年成立的山西教育图书博物馆，历经多次更名改制，2005年新馆建成开放，是山西省最大的综合性博物馆和国家一级博物馆。馆藏文物40万余件（套），其中珍贵文物近4万件，以晋国青铜器、北齐壁画、明清晋商文物、山西地方戏曲文物为最具特色的收藏体系，尤以青铜器收藏享誉海内外。新馆建筑面积约5.1万平方米。',
      architecture:
        "新馆由建筑师崔恺主持设计，建筑造型灵感源自山西传统的'斗拱'结构元素，外观似一只展翅欲飞的'翔鸟'，又像一尊古朴厚重的'鼎'，寓意'晋地文明之源远流长'。馆内设有'晋魂'大型通史展（含七个专题）等常设展厅。",
      highlights:
        "代表性藏品：晋侯鸟尊（西周早期，山西曲沃晋侯墓地出行程行程程土，被誉为'晋国之瑞'）、侯马盟书（春秋晚期，用朱砂书写于玉石片上的春秋晋国盟誓文献，共5000余件）、司马金龙墓木板漆画（北魏，代表了南北朝时期漆画艺术的最高成就）、龙形觥（商代晚期，山西石楼县出行程行程程土）、胡傅酒店店樽（西汉）、永乐宫壁画临摹本（元代道教壁画艺术巅峰之作）等。",
      education:
        "打造'晋博讲堂''晋国文化研学''晋商精神传承'三大公教品牌。定期举办'晋文化与华夏文明史史'高端学术论坛。开设'青铜器铸造模拟''侯马盟书拓印''晋商票号体验'等特色社教课程。",
    },
  },
  artifacts: [
    {
      id: 46,
      museumId: 22,
      name: '晋侯鸟尊',
      period: '西周',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '山西曲沃晋侯墓地出行程土的青铜礼器，以凤鸟为主体造型，构思奇特，工具艺精湛，是西周青铜艺术的杰作，被誉为"晋国之宝"。',
      basicInfo: {
        periodDetail: '约公元前1046年–前771年',
        material: '纸本设色',
        dimensions: '高38口径40厘米',
        collection: '江西博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1046年–前771年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 47,
      museumId: 22,
      name: '司马金龙墓木板漆画',
      period: '北魏',
      category: '漆器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '山西大同司马金龙墓出行程土的北魏漆画屏风板，描绘了古代孝子故事，色彩鲜艳，线条流畅，是研究北魏绘画艺术和社会生活的珍贵实物资料。',
      basicInfo: {
        periodDetail: '公元386年–534年',
        material: '传统手工具材质',
        dimensions: '8×9×11厘米',
        collection: '江西博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元386年–534年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 64,
      museumId: 22,
      title: '雪域文化特展',
      description: '展示西藏地区的历史文化和商贸文化',
      date: '2024-03-15 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 65,
      museumId: 22,
      title: '西藏古建筑模型展',
      description: '展示西藏现存古建筑的精美模型',
      date: '2024-06-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 66,
      museumId: 22,
      title: '西藏古建筑体验',
      description: '了解西藏古建筑特色，参观保存完好的建筑',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 64,
      museumId: 22,
      name: '晋商文化算盘',
      description: '山西晋商文化主题复古木质算盘摆件',
      price: 98,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 65,
      museumId: 22,
      name: '晋祠侍女像模型',
      description: '太原晋祠宋代彩塑侍女缩小版模型',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 66,
      museumId: 22,
      name: '山西面食文化绘本',
      description: '介绍山西特色面食制作技艺的文化绘本',
      price: 58,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
    {
      id: 133,
      museumId: 22,
      name: '鸟尊造型酒店具套装',
      description: '以西周晋侯鸟尊为原型的创意分酒店器和酒店杯组合套装',
      price: 398,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
  ],
  exhibitions: [
    {
      id: 24,
      museumId: 22,
      title: '晋国青铜器大展',
      description: '展示晋侯鸟尊等晋国时期精美青铜器，再现三晋文明辉煌',
      date: '2024-05-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '山西博物院晋国霸业展厅',
      status: '热门',
      category: '历史文化',
      curator: '山西博物院',
      scale: '400余件（套）文物',
      visitors: 430000,
      background: '晋国是周代重要诸侯国，始祖为周武王之子唐叔虞，春秋时期晋文公称霸，战国初年三分晋国，开启战国七雄时代。晋国青铜器以造型庄重、纹饰精美、铸造精良著称，晋侯鸟尊、晋侯稣钟等器物代表了西周青铜艺术的最高水平。侯马晋国遗址出行程土的盟书、铸铜遗址等，见证了晋国的政治制度和工具艺技术。本次展览以山西博物院珍藏的晋国青铜器为核心，系统展示晋国从立国到分裂的六百年历史，再现三晋文明的辉煌成就。',
    },
    {
      id: 335,
      museumId: 22,
      title: '晋国青铜艺术大展',
      description: '以侯马晋国遗址出行程土文物为核心，展示晋国六百年的霸业兴衰与青铜铸造巅峰',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '山西博物院晋国展厅',
      status: '热门',
      category: '历史文化',
      curator: '山西博物院',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '晋国青铜器是中国青铜艺术的重要代表，从西周早期到战国中期，经历了从模仿周王室风格到形成独特晋式风格的演变过程。晋国青铜器以礼器、兵器、乐器为主，纹饰包括兽面纹、龙纹、鸟纹等，铸造工具艺精湛，范铸技术发达。侯马铸铜遗址发现了大量陶范，揭示了晋国青铜铸造的工具艺流程。本次展览精选晋侯墓地、侯马晋国遗址等地出行程土的青铜器精品，展现晋国青铜艺术从形成到鼎盛的发展脉络。',
    }
  ],
  news: [
    {
      id: 127,
      museumId: 22,
      title: '博物馆22年度特展开幕',
      description: '博物馆22举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 128,
      museumId: 22,
      title: '博物馆22新数字化服务上线',
      description: '博物馆22推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 129,
      museumId: 22,
      title: '博物馆22举办文化活动',
      description: '博物馆22举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 24,
      museumId: 22,
      title: '晋国青铜器的分期与断代研究',
      author: '山西大学考古系',
      date: '2023-07-20',
      type: 'article',
      description: '基于晋侯墓地出行程土青铜器进行程系统的分期研究。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 22,
      museumId: 22,
      title: '晋国宗庙祭祀大典',
      description: '沉浸式还原晋国宗庙祭祀场景，体验先秦礼乐文明',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    22: [
      {
        id: 'lishi',
        name: '历史文化展厅',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/18.webp',
        introduction:
          '系统展示山西博物院所在地区从史前到近现代的历史文明进程，突出行程地域文化特色与重大考古发现。',
        stats: {
          artifacts: 495,
          exhibitions: 2,
          visitors: 266646,
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
            description: '山西博物院最具代表性的珍贵文物',
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
            title: '山西博物院历史文化展',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/2.webp',
        introduction:
          '展示该地区丰富多彩的民族文化遗产，包括传统服饰、节庆习俗、民间工具艺等非物质文化遗产。',
        stats: {
          artifacts: 389,
          exhibitions: 2,
          visitors: 304781,
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

export default shanxiData;
