import type { ProvinceData } from '@/typesOfPages/museum/index';

// 安徽省份数据
export const anhuiData: ProvinceData = {
  code: 'Anhui',
  name: '安徽',
  museums: [
    {
      id: 20,
      name: '安徽博物院',
      province: '安徽',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '安徽博物院是安徽省唯一的省级综合类博物馆，馆藏文物22万余件，以徽州文化、文房四宝为特色。',
      artifacts: 220000,
      exhibitions: 24,
      visitors: 2400000,
      features: ['国家一级博物馆', '安徽省爱国主义教育基地'],
    },
  ],
  details: {
    20: {
      museumId: 20,
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
          address: '安徽省合肥市怀宁路268号（新馆）；合肥市安庆路268号（老馆）',
          metro: '地铁3号线安徽博物院站',
          bus: '公交13、41、128、129、162、166、501路安徽博物院站',
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
          phone: '0551-63736658',
          email: 'ahmuseum@126.com',
          complaintPhone: '0551-63736659',
          website: 'http://www.ahm.cn',
        },
      },
      history:
        '安徽博物院成立于1956年，前身为安徽省科学馆、皖北人民文化馆等，2011年新馆建成开放，形成新老两馆并行程程的格局，是国家一级博物馆。馆藏文物22万余件（套），珍贵文物近9000件，以徽州古建构件、徽商文物、新安画派作品、安徽出行程行程程土青铜器、文房四宝为特色。新馆位于合肥政务文化新区，建筑面积约6.2万平方米。',
      architecture:
        "新馆建筑由著名建筑师崔恺设计，外观灵感源自安徽传统民居的'四水归堂'天井式布局和徽派建筑的粉墙黛瓦元素，整体造型如同一枚巨大的'印章'，寓意'徽风皖韵'的文化底蕴。馆内设有'安徽文明史'通史展、'徽州古建筑'专题展、'文房四宝'专题展、'新安画派'专题展等常设展厅。",
      highlights:
        '八大镇馆之宝：铸客大鼎（战国晚期楚国王室重器，重达400公斤）、鄂君启金节（战国时期楚国免税通行程程凭证）、龙虎纹铜尊盘（春秋精密铸造杰作）、张成造剔犀云纹漆盒（元代雕漆极品）、景德镇窑影青釉注子注碗（北宋）、金釭花银烛台（清代乾隆御制）、吴昌硕设色牡丹轴（近代海派绘画代表）、象牙圆雕说书艺人（近代牙雕精品）。',
      education:
        "打造'徽博讲堂''徽文化研学''徽商精神传承'三大公教品牌。定期举办'徽州文化与徽商精神'学术论坛。开设'徽墨制作''歙砚雕刻''宣纸制作'等安徽非遗手工具具课程。推出行程行程程'跟着文物游安徽'主题研学路线。",
    },
  },
  artifacts: [
    {
      id: 41,
      museumId: 20,
      name: '楚大鼎（铸客大鼎）',
      period: '战国',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '安徽寿县楚王墓出行程土的青铜重器，高113厘米，重达400公斤，是目前发现的春秋战国时期最大的青铜圆鼎，内壁铸有"铸客"铭文，是楚国青铜冶铸技术的杰出行程代表。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '纸本设色',
        dimensions: '高35口径44厘米',
        collection: '安徽博物院',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前475年–前221年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 42,
      museumId: 20,
      name: '徽墨',
      period: '清代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '安徽歙县传统徽墨精品，以松烟、桐油等为原料，经过多道工具序精制而成，色泽黑润，香气浓郁，是中国传统文房四宝之一，被誉为"落纸如云烟"。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '传统手工具材质',
        dimensions: '20×4×6厘米',
        collection: '安徽博物院',
        excavation: '传世品，历经数代收藏传承',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元1636年–1912年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 58,
      museumId: 20,
      title: '徽文化特展',
      description: '展示安徽地区的历史文化和艺术成就',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 59,
      museumId: 20,
      title: '徽商文化讲座',
      description: '专家学者讲解徽商历史和文化',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 60,
      museumId: 20,
      title: '徽派建筑体验',
      description: '了解徽派建筑特色，体验传统工具艺',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 58,
      museumId: 20,
      name: '青花瓷茶具',
      description: '景德镇青花瓷手工具茶具套装',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 59,
      museumId: 20,
      name: '海昏侯文创书签',
      description: '以南昌海昏侯墓出行程土文物为设计元素的书签套装',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 60,
      museumId: 20,
      name: '赣鄱文化丝巾',
      description: '以江西赣鄱文化符号为设计元素的真丝丝巾',
      price: 188,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 131,
      museumId: 20,
      name: '元青花鬼谷子下山图纹茶盘',
      description: '以元青花名品《鬼谷子下山图》为纹饰的景德镇手工具陶瓷茶盘',
      price: 358,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
  ],
  exhibitions: [
    {
      id: 22,
      museumId: 20,
      title: '徽州文化展',
      description: '展示安徽徽州地区的建筑、雕刻、绘画等传统文化',
      date: '2024-05-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '安徽博物院徽州古建筑展厅',
      status: '热门',
      category: '艺术精品',
      curator: '安徽博物院',
      scale: '350余件（套）文物',
      visitors: 260000,
      background: '徽州文化是安徽最具特色的地域文化,以徽派建筑、徽商、新安画派、徽菜等为代表。本次展览通过徽州古建筑构件、砖木石"三雕"艺术品、新安画派书画作品、徽商文物等,全方位展现徽州文化的深厚底蕴。徽派建筑的马头墙、天井、雕花门窗,体现了徽州人的审美情趣和建筑智慧。',
    },
    {
      id: 333,
      museumId: 20,
      title: '徽州文化精品展',
      description: '展示徽州古建筑、徽商文化、新安画派等安徽地域特色文化遗产',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '安徽省博物馆徽州文化展厅',
      status: '最新',
      category: '历史文化',
      curator: '安徽省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '徽州文化源远流长,明清时期徽商称雄商界,创造了灿烂的徽州文明。本次精品展精选徽州古建筑模型、徽商账册契约、新安画派名家作品、文房四宝珍品等文物,展现徽州人在建筑、商业、艺术、教育等方面的卓越成就。徽州文化不仅是安徽的骄傲,也是中华优秀传统文化的重要组成部分。',
    },
  ],
  news: [
    {
      id: 121,
      museumId: 20,
      title: '博物馆20年度特展开幕',
      description: '博物馆20举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 122,
      museumId: 20,
      title: '博物馆20新数字化服务上线',
      description: '博物馆20推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 123,
      museumId: 20,
      title: '博物馆20举办文化活动',
      description: '博物馆20举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 22,
      museumId: 20,
      title: '徽州文化研究',
      author: '安徽博物院研究部',
      date: '2023-10-25',
      type: 'book',
      description: '系统研究徽州文化的特点和历史渊源。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 12,
      museumId: 20,
      title: '徽派建筑漫游空间',
      description: '走进虚拟徽州古村落，感受粉墙黛瓦马头墙的建筑美学',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    20: [
      {
        id: 'ah-wenwu',
        name: '安徽文明史陈列',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/0.webp',
        introduction:
          '系统展示安徽从远古到近现代的文明发展历程，涵盖凌家滩文化、徽州文化、新安医学等安徽特色文化板块。',
        stats: {
          artifacts: 800,
          exhibitions: 4,
          visitors: 200000,
        },
        location: '主展馆一至三层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '2小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '铸客大鼎',
            period: '战国·楚',
            description: '中国现存最大的春秋战国圆鼎之一，重达400公斤',
            image: '',
          },
          {
            name: '龙虎纹四环铜鼓座',
            period: '春秋',
            description: '造型独特的青铜鼓座，龙虎纹饰精美绝伦',
            image: '',
          },
          {
            name: '金扣玛瑙碗',
            period: '宋代',
            description: '宋代金银镶嵌工具艺精品，出行程土于合肥',
            image: '',
          },
          {
            name: '张择端《清明上河图》摹本',
            period: '清代',
            description: '清宫旧藏摹本，描绘北宋汴京繁华景象',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '安徽文明史基本陈列',
            date: '常设展览',
            description: '完整呈现安徽百万年人类活动与文明演进历程',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['常设', '文明史'],
          },
          {
            title: '徽州古建筑专题展',
            date: '常设展览',
            description: '展示徽派建筑的艺术特色与文化内涵',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['建筑', '徽州'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '徽州文化语音导览',
            desc: '深度解读徽州文化的独特魅力',
            type: '音频',
          },
          {
            icon: '📖',
            title: '安徽通史导览手册',
            desc: '图文并茂的参观指南',
            type: '导览',
          },
        ],
      },
      {
        id: 'ah-huizhou',
        name: '徽州古建筑展厅',
        icon: '🏘️',
        category: '建筑艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
        introduction:
          '以实物和场景复原的方式展示徽州古建筑的精湛工具艺，包括砖雕、木雕、石雕"三雕"艺术。',
        stats: {
          artifacts: 150,
          exhibitions: 2,
          visitors: 120000,
        },
        location: '主展馆三层西侧',
        openTime: '周二至周日 9:00-17:00',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '徽州砖雕照壁',
            period: '明代',
            description: '精美的徽州传统砖雕艺术品',
            image: '',
          },
          {
            name: '木雕梁架构件',
            period: '清代',
            description: '徽州民居中常见的装饰性木雕构件',
            image: '',
          },
          {
            name: '石雕抱鼓石',
            period: '明清',
            description: '徽州宅门前的标志性石雕装饰',
            image: '',
          },
          {
            name: '徽墨制作工具具组',
            period: '清代',
            description: '展示徽墨制作的完整工具艺流程',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '徽州三雕艺术展',
            date: '常设展览',
            description: '砖雕、木雕、石雕的工具艺之美',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['三雕', '工具艺'],
          },
          {
            title: '徽商与徽州建筑',
            date: '2024年度特展',
            description: '探索徽商兴衰与建筑风格演变的关系',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['徽商', '特展'],
          },
        ],
        recommendations: [
          {
            icon: '✍️',
            title: '徽州版画体验',
            desc: '亲手体验徽派版画制作技艺',
            type: '活动',
          },
          {
            icon: '🧩',
            title: '徽派建筑摄影角',
            desc: '在复原场景中拍摄古风大片',
            type: '互动',
          },
        ],
      },
    ],
  },
};

export default anhuiData;
