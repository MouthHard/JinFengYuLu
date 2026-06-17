import type { ProvinceData } from '@/typesOfPages/museum/index';

// 黑龙江省份数据
export const heilongjiangData: ProvinceData = {
  code: 'Heilongjiang',
  name: '黑龙江',
  museums: [
    {
      id: 18,
      name: '黑龙江省博物馆',
      province: '黑龙江',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '黑龙江省博物馆是省级综合性博物馆，馆藏文物11万余件，以两汉时期文物、金代文物、少数民族民俗文物为特色。',
      artifacts: 110000,
      exhibitions: 16,
      visitors: 1600000,
      features: ['国家一级博物馆', '黑龙江省爱国主义教育基地'],
    },
  ],
  details: {
    18: {
      museumId: 18,
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
          forbidden: ['禁止携带宠物', '禁止触摸展品'],
        },
        transportation: {
          address: '黑龙江省哈尔滨市南岗区莫斯科街2号',
          metro: '无直达地铁',
          bus: '公交7、10、14、16、21、28、64、81、92、94、101、103路黑龙江省博物馆站',
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
          phone: '0451-53644151',
          email: 'hlj_museum@163.com',
          complaintPhone: '0451-53655746',
          website: 'http://www.hljmuseum.com',
        },
      },
      history:
        '黑龙江省博物馆始建于1923年，原名东省文物研究会陈列所，1954年正式定名黑龙江省博物馆，是黑龙江省最大的综合性博物馆和国家一级博物馆。馆藏文物11万余件（套），以黑龙江地区历史文物、自然标本、俄侨文物为特色。主馆位于哈尔滨市南岗区，建筑本身为原俄罗斯商场旧址，属俄罗斯风格建筑，是全国重点文物保护单位。',
      architecture:
        '主馆建筑建于1906年，为典型的俄罗斯折衷主义风格砖木结构建筑，红砖外墙、绿色穹顶，具有浓郁的异域风情，被列为全国重点文物保护单位。2015年新馆建成后形成新旧两馆格局。展览面积约1.2万平方米。',
      highlights:
        '代表性藏品：金代铜坐龙（金代皇室御用器物，黑龙江出行程行程程土）、披毛犀化石骨架（更新世晚期，黑龙江地区出行程行程程土最完整的披毛犀化石）、鄂伦春族狍皮服饰（北方渔猎民族文化代表）、中东铁路相关历史文物等。',
      education:
        "打造'龙博讲堂''黑土文明研学''冰雪文化体验'三大公教品牌。定期举办'渤海国与女真文化'学术讲座。开设'赫哲族鱼皮画制作''鄂伦春族桦树皮工具具艺'等东北少数民族非遗体验课程。",
    },
  },
  artifacts: [
    {
      id: 37,
      museumId: 18,
      name: '金代铜坐龙',
      period: '金代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '金代皇家御用器物，龙呈坐姿，造型威武雄壮，体现了女真族对龙的崇拜和独特的审美观念，是研究金代历史文化的重要实物。',
      basicInfo: {
        periodDetail: '公元1115年–1234年',
        material: '纸本设色',
        dimensions: '高70口径18厘米',
        collection: '山西博物院',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元1115年–1234年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 38,
      museumId: 18,
      name: '夫余青铜短剑',
      period: '汉代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '黑龙江地区夫余文化遗存的青铜兵器，造型独特，反映了东北地区古代少数民族的青铜铸造技术和军事文化。',
      basicInfo: {
        periodDetail: '公元前202年–公元220年',
        material: '纸本设色',
        dimensions: '高96口径32厘米',
        collection: '山西博物院',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前202年–公元220年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
  ],
  activities: [
    {
      id: 52,
      museumId: 18,
      title: '黑土文化展',
      description: '展示黑龙江地区的历史文化和自然资源',
      date: '2024-03-15 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 53,
      museumId: 18,
      title: '渤海国文化展',
      description: '展示黑龙江的渤海国文化和冬季运动',
      date: '2024-06-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 54,
      museumId: 18,
      title: '渤海国文化体验',
      description: '了解渤海国文化，体验北方生活',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 52,
      museumId: 18,
      name: '渤海国文物模型',
      description: '黑龙江的渤海国文物复制品',
      price: 148,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 53,
      museumId: 18,
      name: '冰雪文化明信片',
      description: '以黑龙江冰雪文化为题材的明信片套装',
      price: 32,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 54,
      museumId: 18,
      name: '北方民族风丝巾',
      description: '以北方民族图案为设计元素的丝巾',
      price: 178,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 129,
      museumId: 18,
      name: '金代铜坐龙造型摆件',
      description: '以金代铜坐龙为原型的树脂工具艺摆件，展现金源文化特色',
      price: 188,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [
    {
      id: 20,
      museumId: 18,
      title: '黑龙江流域文明展',
      description: '展示黑龙江流域从远古到近现代的历史文化',
      date: '2024-03-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '黑龙江省博物馆历史展厅',
      status: '热门',
      category: '历史文化',
      curator: '黑龙江省博物馆',
      scale: '600余件（套）文物',
      visitors: 220000,
      background: '黑龙江流域是中华文明的重要组成部分，从远古肃慎、挹娄，到渤海国的海东盛国，再到金源文化的崛起，这片黑土地孕育了独特的边疆文明。清代以来，闯关东移民潮、中东铁路建设、抗日战争等重大历史事件在此发生，形成了多元融合的地域文化。本次展览系统展示黑龙江流域从远古到近现代的历史进程，重点呈现北方少数民族文化、边疆开发历史与近现代革命记忆。',
    },
    {
      id: 331,
      museumId: 18,
      title: '黑龙江流域渔猎文明展',
      description: '展示黑龙江流域从远古到近现代的渔猎文化、冰雪文明与边疆历史',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '黑龙江省博物馆历史展厅',
      status: '最新',
      category: '历史文化',
      curator: '黑龙江省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '黑龙江流域地处中国最北端，严寒的气候孕育了独特的渔猎文明。赫哲族的鱼皮技艺、鄂伦春族的桦树皮文化、满族的冰雪习俗，构成了丰富多彩的北方民族文化。从远古肃慎人的渔猎生活，到渤海国的海东盛国，再到金代女真的崛起，黑龙江流域始终保持着独特的文化传统。本次展览聚焦渔猎文化与冰雪文明，展现白山黑水间独特的边疆历史与民族风情。',
    }
  ],
  news: [
    {
      id: 115,
      museumId: 18,
      title: '博物馆18年度特展开幕',
      description: '博物馆18举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 116,
      museumId: 18,
      title: '博物馆18新数字化服务上线',
      description: '博物馆18推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 117,
      museumId: 18,
      title: '博物馆18举办文化活动',
      description: '博物馆18举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 20,
      museumId: 18,
      title: '渤海国文化研究',
      author: '黑龙江省博物馆研究部',
      date: '2023-09-15',
      type: 'book',
      description: '系统研究渤海国的传统文化和生活方式。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 8,
      museumId: 18,
      title: '渤海国上京龙泉府漫游',
      description: '数字重建渤海国上京城，体验唐代东北藩属国的繁华盛景',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    18: [
      {
        id: 'hlj-heilongjiang',
        name: '黑龙江历史文物陈列',
        icon: '🏛️',
        category: '历史文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/3.webp',
        introduction:
          '展示黑龙江从远古肃慎到近现代的历史进程，突出行程北方少数民族文化、中俄边境文化、冰雪文化特色。',
        stats: {
          artifacts: 550,
          exhibitions: 2,
          visitors: 120000,
        },
        location: '主展馆一至二层',
        openTime: '周二至周日 9:00-16:30（16:00停止入馆，周一闭馆）',
        duration: '1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '金代铜坐龙',
            period: '金代',
            description: '黑龙江省博物馆镇馆之宝',
            image: '',
          },
          {
            name: '渤海国贞孝公主墓碑',
            period: '唐代',
            description: '渤海国历史的珍贵文字记录',
            image: '',
          },
          {
            name: '披毛犀化石骨架',
            period: '更新世晚期',
            description: '黑龙江地区出行程土的大型哺乳动物化石',
            image: '',
          },
          {
            name: '鄂伦春族桦皮船',
            period: '近代',
            description: '北方狩猎民族的独特交通工具具',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '黑龙江历史文物陈列',
            date: '常设展览',
            description: '从远古到近代的黑龙江文明',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['黑龙江', '常设'],
          },
          {
            title: '北方民族文物展',
            date: '常设展览',
            description: '满、赫哲、鄂伦春等民族文化',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['民族', '北方'],
          },
        ],
        recommendations: [
          {
            icon: '🎭',
            title: '桦皮画制作',
            desc: '学习鄂伦春族桦皮画技艺',
            type: '活动',
          },
          {
            icon: '🎧',
            title: '黑土文化导览',
            desc: '了解北大荒的开发历程',
            type: '音频',
          },
        ],
      },
      {
        id: 'hlj-dongbei',
        name: '东北自然与民俗展厅',
        icon: '❄️',
        category: '自然民俗',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/4.webp',
        introduction:
          '展示东北地区独特的自然生态与多民族民俗文化，涵盖森林生态、冰雪文化、渔猎文化等内容。',
        stats: {
          artifacts: 300,
          exhibitions: 1,
          visitors: 90000,
        },
        location: '主展馆三层',
        openTime: '周二至周日 9:00-16:30',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '东北虎标本',
            period: '当代',
            description: '濒危物种东北虎的完整标本',
            image: '',
          },
          {
            name: '赫哲族鱼皮服',
            period: '近代',
            description: '用鱼皮制作的独特民族服装',
            image: '',
          },
          {
            name: '满族萨满法器',
            period: '清代',
            description: '满族萨满教仪式用具',
            image: '',
          },
          {
            name: '大兴安岭动植物标本群',
            period: '当代',
            description: '寒温带针叶林生态系统标本',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '黑土英魂——东北自然与民俗展',
            date: '常设展览',
            description: '白山黑水间的自然与人文',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['自然', '民俗'],
          },
        ],
        recommendations: [
          {
            icon: '🦍',
            title: '冰雪文化体验',
            desc: '了解冰灯、雪雕的制作工具艺',
            type: '互动',
          },
          {
            icon: '📱',
            title: '东北虎保护科普',
            desc: '东北虎保护的现状与挑战',
            type: '科普',
          },
        ],
      },
    ],
  },
};

export default heilongjiangData;
