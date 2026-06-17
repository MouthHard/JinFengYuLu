import type { ProvinceData } from '@/typesOfPages/museum/index';

// 西藏省份数据
export const xizangData: ProvinceData = {
  code: 'Xizang',
  name: '西藏',
  museums: [
    {
      id: 28,
      name: '西藏博物馆',
      province: '西藏',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西藏博物馆是西藏自治区综合类博物馆，馆藏文物5万余件，以藏族历史文物、宗教文物为特色。',
      artifacts: 50000,
      exhibitions: 16,
      visitors: 800000,
      features: ['国家一级博物馆', '西藏自治区爱国主义教育基地'],
    },
  ],
  details: {
    28: {
      museumId: 28,
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
          address: '西藏自治区拉萨市城关区罗布林卡路19号',
          metro: '无地铁',
          bus: '公交2、8、13、24路西藏博物馆站',
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
          phone: '0891-6835244',
          email: 'tibet_museum@163.com',
          complaintPhone: '0891-6812210',
          website: 'https://www.tibetmuseum.com.cn',
        },
      },
      history:
        '西藏博物馆创建于1999年，是中国第一座具有现代化功能的省级综合性博物馆，也是西藏规模最大、藏品最丰富的博物馆。2022年完成改扩建工具具程后重新开放，是国家一级博物馆。馆藏文物71,121件（套），其中珍贵文物43,282件（套），以藏传佛教文物、藏族民俗文物、历史档案文献、唐卡绘画为特色收藏体系。新馆建筑面积约6.3万平方米，坐落于拉萨市罗布林卡东南侧。',
      architecture:
        "新馆建筑设计融合了藏族传统建筑元素与现代博物馆功能需求，外观采用藏式碉楼的梯形墙体和坡屋顶造型，外墙使用白色涂料和暗红色窗框装饰，色彩明快而庄重。建筑内部空间高大开阔，采光设计充分考虑了高原地区的日照特点。馆内设有'雪域长歌——西藏历史文化展'、'离太阳最近的人——西藏民俗文化展'等常设展厅。",
      highlights:
        '代表性藏品：双体陶罐（新石器时代卡若文化遗物，距今约4000-5000年）、金贲巴瓶（清代乾隆皇帝颁赐给达赖喇嘛和班禅额尔德尼的金瓶掣签专用器物）、《大藏经·甘珠尔》手抄本（明代，用金汁书写在特制藏纸上）、八思巴肖像唐卡（元代萨迦派高僧画像）等。',
      education:
        "打造'藏博讲堂''雪域文明研学''藏文化深度体验'三大公教品牌。定期举办'藏传佛教艺术与汉藏文化交流'学术研讨会。开设'唐卡绘制入门''藏香制作体验''藏族天文历算基础'等特色课程。",
    },
  },
  artifacts: [
    {
      id: 58,
      museumId: 28,
      name: '双体陶罐',
      period: '卡若文化',
      category: '陶器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西藏昌都卡若遗址出行程土的新石器时代陶器，造型为双体连体结构，工具艺独特，是研究西藏早期文明和制陶技术的重要实物资料。',
      basicInfo: {
        periodDetail: '约公元前3000年–前1500年',
        material: '传统手工具材质',
        dimensions: '高24口径6厘米',
        collection: '宁夏回族自治区博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是约公元前3000年–前1500年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 59,
      museumId: 28,
      name: '八思巴文虎符金牌',
      period: '元代',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '元代西藏地方政权使用的金牌信物，铸有八思巴文字，是研究元朝对西藏管辖和西藏地方行程政制度的重要实物见证。',
      basicInfo: {
        periodDetail: '公元1271年–1368年',
        material: '纸本设色',
        dimensions: '高14重216克',
        collection: '宁夏回族自治区博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元1271年–1368年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 82,
      museumId: 28,
      title: '藏文化特展',
      description: '展示西藏地区的历史文化和宗教艺术',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 83,
      museumId: 28,
      title: '唐卡艺术展',
      description: '展示唐卡艺术的精美工具艺和宗教内涵',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 84,
      museumId: 28,
      title: '藏族文化体验',
      description: '了解藏族文化，体验传统习俗',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 75,
      museumId: 28,
      name: '唐卡风格帆布包',
      description: '以藏族唐卡艺术为设计元素的环保帆布包',
      price: 78,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 76,
      museumId: 28,
      name: '藏式转经筒钥匙扣',
      description: '迷你藏式转经筒造型金属钥匙扣',
      price: 35,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 139,
      museumId: 28,
      name: '藏式吉祥八宝纹样围巾',
      description: '以藏族传统吉祥八宝图案为设计元素的羊绒围巾',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
  ],
  exhibitions: [
    {
      id: 30,
      museumId: 28,
      title: '唐卡艺术精品展',
      description: '汇集历代唐卡大师作品，展现藏传佛教艺术的深邃内涵',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '西藏博物馆唐卡艺术厅',
      status: '热门',
      category: '艺术精品',
      curator: '西藏博物馆',
      scale: '200余幅唐卡作品',
      visitors: 150000,
      background: '唐卡是藏族文化中独具特色的绘画艺术形式，以彩缎装裱的卷轴画为主，题材涵盖佛像、菩萨、护法神、历史人物、宗教故事等。唐卡绘制严格遵循《造像量度经》等经典规范，采用天然矿物颜料，色彩鲜艳持久，构图严谨对称。勉唐、钦泽、噶玛嘎孜等画派各具特色，形成了唐卡艺术的不同流派。本次展览汇集西藏博物馆珍藏的历代唐卡精品，从元代至近代，展现唐卡艺术的传承脉络与深邃的宗教内涵，揭示藏传佛教绘画艺术的独特魅力。',
    },
    {
      id: 349,
      museumId: 28,
      title: '西藏唐卡艺术精品展',
      description: '汇集各画派传世唐卡杰作，展示藏传佛教绘画艺术的深邃内涵与精湛技法',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '西藏博物馆唐卡展厅',
      status: '热门',
      category: '艺术精品',
      curator: '西藏博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '唐卡是藏传佛教特有的宗教艺术形式，具有便携、庄严、神圣的特点，在藏区宗教修行程和传播中发挥重要作用。唐卡绘制需经过复杂的宗教仪轨和精湛的绘画技艺，使用金、银、朱砂、石绿等珍贵矿物颜料，作品可保存数百年不褪色。本次展览精选勉唐、钦泽、噶玛嘎孜等各大画派的代表作，涵盖佛像、菩萨、坛城、历史人物等题材，展示唐卡艺术从构图起稿、着色晕染到开眼装裱的完整工具艺流程，让观众深入了解这门神圣艺术的深邃内涵。',
    }
  ],
  news: [
    {
      id: 145,
      museumId: 28,
      title: '博物馆28年度特展开幕',
      description: '博物馆28举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 146,
      museumId: 28,
      title: '博物馆28新数字化服务上线',
      description: '博物馆28推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 147,
      museumId: 28,
      title: '博物馆28举办文化活动',
      description: '博物馆28举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 30,
      museumId: 28,
      title: '西藏唐卡绘画技法传承',
      author: '西藏大学艺术学院',
      date: '2023-10-01',
      type: 'video',
      description: '记录唐卡绘制全过程，介绍不同流派的艺术特点。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 28,
      museumId: 28,
      title: '布达拉宫内部探秘',
      description: 'VR全景导览布达拉宫内部殿堂，欣赏壁画与佛像艺术',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    28: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/14.webp',
        introduction:
          '西藏博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 475,
          exhibitions: 2,
          visitors: 196826,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '西藏博物馆最具代表性的珍贵藏品',
            image: '',
          },
          {
            name: '特色藏品一',
            period: '',
            description: '体现本馆特色的精品文物',
            image: '',
          },
          {
            name: '特色藏品二',
            period: '',
            description: '具有重要历史或艺术价值的藏品',
            image: '',
          },
          {
            name: '专题藏品',
            period: '',
            description: '围绕特定主题的系列藏品',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '基本陈列展',
            date: '常设展览',
            description: '系统展示西藏博物馆的核心馆藏与历史脉络',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['常设', '基本陈列'],
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
        id: 'tese',
        name: '特色专题厅',
        icon: '✨',
        category: '专题展览',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/9.webp',
        introduction:
          '西藏博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 485,
          exhibitions: 2,
          visitors: 300967,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '专题文物一',
            period: '',
            description: '专题方向的核心文物',
            image: '',
          },
          {
            name: '专题文物二',
            period: '',
            description: '专题方向的助展品',
            image: '',
          },
          {
            name: '研究资料',
            period: '',
            description: '相关学术研究的图文资料',
            image: '',
          },
          {
            name: '多媒体展示',
            period: '',
            description: '数字化呈现专题内容的互动设施',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '特色专题展',
            date: '常设展览',
            description: '西藏博物馆独有的特色主题展览',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['特色', '专题'],
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

export default xizangData;
