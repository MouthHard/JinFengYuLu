import type { ProvinceData } from '@/typesOfPages/museum/index';

// 贵州省份数据
export const guizhouData: ProvinceData = {
  code: 'Guizhou',
  name: '贵州',
  museums: [
    {
      id: 26,
      name: '贵州省博物馆',
      province: '贵州',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '贵州省博物馆是贵州省综合类博物馆，馆藏文物7万余件，以贵州文物、贵州少数民族文物为特色。',
      artifacts: 70000,
      exhibitions: 18,
      visitors: 1400000,
      features: ['国家一级博物馆', '贵州省爱国主义教育基地'],
    },
  ],
  details: {
    26: {
      museumId: 26,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00（16:30停止入场）',
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
          forbidden: ['禁止携带宠物', '禁止触摸展品'],
        },
        transportation: {
          address: '贵州省贵阳市观山湖区云潭南路7号',
          metro: '地铁2号线兴筑西路站转公交',
          bus: '公交48、58、208、209、218、220、237、280、281、290路贵州省博物馆站',
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
          phone: '0851-86822222',
          email: 'gzsbwg@163.com',
          complaintPhone: '0851-86822221',
          website: 'http://www.gzmuseum.com',
        },
      },
      history:
        '贵州省博物馆创建于1957年，2017年新馆建成开放，是贵州省最大的综合性博物馆和国家一级博物馆。馆藏文物8万余件（套），其中珍贵文物近5000件，以贵州少数民族文物、贵州古生物化石、贵州近现代历史文物、黔贵地区出行程行程程土文物为特色。新馆建筑面积约4.7万平方米，位于贵阳观山湖区城市文化核心地带。',
      architecture:
        "新馆建筑外观以'菱石'为设计概念，寓意贵州喀斯特地貌中的层叠岩石形态。馆内设有'记忆与传承——贵州世居民族历史文化展'、'古生物王国'、'历史贵州'、'黔山红迹'（革命历史）等常设展厅。",
      highlights:
        '代表性藏品：东汉铜车马（贵州兴义出行程行程程土，是目前国内发现的最完整的车马模型之一）、苗族银饰（包括全套苗族嫁妆银饰，工具具艺精湛繁复）、侗族大歌相关文物资料（人类非物质文化遗产代表作）、贵州龙化石（三叠纪中期）、遵义会议相关革命文物等。民族文物收藏涵盖贵州全部世居民族，体系最为完整。',
      education:
        "打造'贵博讲堂''多彩贵州研学''民族非遗体验'三大公教品牌。定期举办'夜郎文化与西南夷'学术讲座。开设'苗族蜡染制作''侗族大歌学唱''水书识读'等特色体验课程。",
    },
  },
  artifacts: [
    {
      id: 54,
      museumId: 26,
      name: '东汉铜车马',
      period: '东汉',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '贵州兴义东汉墓出行程土的青铜车马模型，由一马一车组成，造型生动，工具艺精湛，是研究汉代交通工具具和西南地区青铜文化的重要实物资料。',
      basicInfo: {
        periodDetail: '公元25年–220年',
        material: '纸本设色',
        dimensions: '高34口径23厘米',
        collection: '青海省博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元25年–220年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 55,
      museumId: 26,
      name: '苗族蜡染百褶裙',
      period: '当代',
      category: '织绣',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '贵州苗族传统蜡染工具艺制作的百褶裙，图案精美，色彩鲜艳，体现了苗族人民独特的审美情趣和精湛的手工具技艺，是国家级非物质文化遗产的代表作品。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '传统手工具材质',
        dimensions: '18×7×16厘米',
        collection: '青海省博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是1949年至今历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 76,
      museumId: 26,
      title: '黔文化特展',
      description: '展示贵州地区的历史文化和民俗风情',
      date: '2024-03-15 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
    },
    {
      id: 77,
      museumId: 26,
      title: '夜郎文化讲座',
      description: '专家学者讲解夜郎古国的历史',
      date: '2024-06-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 78,
      museumId: 26,
      title: '苗族文化体验',
      description: '了解苗族文化，体验少数民族习俗',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 71,
      museumId: 26,
      name: '苗族银饰耳环',
      description: '仿苗族传统银饰花纹的925银耳环',
      price: 188,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 72,
      museumId: 26,
      name: '夜郎文化明信片套装',
      description: '以夜郎文化为主题的精美明信片合集',
      price: 25,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 137,
      museumId: 26,
      name: '苗族银饰项链',
      description: '仿苗族传统银饰花纹的925银锁骨链，民族风时尚饰品',
      price: 288,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
  ],
  exhibitions: [
    {
      id: 28,
      museumId: 26,
      title: '夜郎文化与苗族银饰展',
      description: '探索神秘夜郎古国，欣赏苗族银饰的精湛工具艺之美',
      date: '2024-03-10',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '贵州省博物馆民族文化展厅',
      status: '热门',
      category: '民族民俗',
      curator: '贵州省博物馆',
      scale: '400余件（套）文物',
      visitors: 210000,
      background: '夜郎是战国至西汉时期活跃于西南地区的神秘古国，"夜郎自大"的典故使其闻名遐迩。贵州作为夜郎文化的核心区域，出行程土了大量与夜郎相关的青铜器、陶器等文物，为探索夜郎文明提供了重要线索。苗族银饰是贵州民族文化的重要组成部分，其工具艺精湛、纹饰繁复，承载着苗族人民的审美情趣与文化记忆。本次展览结合夜郎考古发现与苗族银饰精品，展现贵州从古至今的文化魅力。',
    },
    {
      id: 343,
      museumId: 26,
      title: '多彩贵州民族文化展',
      description: '展示苗、布依、侗、水等贵州世居少数民族的传统服饰、银饰与节庆文化',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '贵州省博物馆民族展厅',
      status: '热门',
      category: '民俗风情',
      curator: '贵州省博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '贵州是全国世居少数民族最多的省份之一，苗、布依、侗、水、彝等18个世居民族在此繁衍生息，创造了丰富多彩的民族文化。苗族银饰工具艺精湛，侗族大歌蜚声世界，水族水书神秘独特，各民族的传统服饰、节庆习俗、手工具技艺构成了贵州独特的文化景观。本次展览系统展示贵州各世居民族的传统服饰、银饰、乐器、节庆道具等，呈现多彩贵州的民族文化魅力与非遗传承活力。',
    }
  ],
  news: [
    {
      id: 139,
      museumId: 26,
      title: '博物馆26年度特展开幕',
      description: '博物馆26举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 140,
      museumId: 26,
      title: '博物馆26新数字化服务上线',
      description: '博物馆26推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 141,
      museumId: 26,
      title: '博物馆26举办文化活动',
      description: '博物馆26举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 28,
      museumId: 26,
      title: '夜郎古国考古新探',
      author: '贵州省考古研究所',
      date: '2023-03-22',
      type: 'book',
      description: '综合考古资料探讨夜郎古国的地望与文化面貌。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 26,
      museumId: 26,
      title: '苗寨银饰工具坊之旅',
      description: '走进虚拟苗族银匠作坊，学习银饰锻制技艺与纹饰寓意',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    26: [
      {
        id: 'gz-guizhou',
        name: '多彩贵州——民族贵州展厅',
        icon: '🎭',
        category: '民族文化',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/12.webp',
        introduction:
          '贵州是全国世居少数民族最多的省份之一，本展厅集中展示苗、布依、侗、土家等18个民族的文化瑰宝。',
        stats: {
          artifacts: 600,
          exhibitions: 2,
          visitors: 160000,
        },
        location: '一楼基本陈列厅',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '苗族银饰盛装全套',
            period: '当代',
            description: '包含银角、银项圈等数十件银饰',
            image: '',
          },
          {
            name: '侗族大歌乐谱手抄本',
            period: '清代',
            description: '无文字民族的口传音乐记录',
            image: '',
          },
          {
            name: '水书水历文献',
            period: '清代',
            description: '中国唯一仍在使用的象形文字系统',
            image: '',
          },
          {
            name: '苗族蜡染百鸟衣',
            period: '当代',
            description: '国家级非遗蜡染工具艺的最高水平',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '民族贵州基本陈列',
            date: '常设展览',
            description: '18个世居民族的文化多样性展示',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['民族', '常设'],
          },
          {
            title: '苗族银饰艺术展',
            date: '年度特展',
            description: '苗族银饰的工具艺与象征意义',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['银饰', '特展'],
          },
        ],
        recommendations: [
          {
            icon: '🎭',
            title: '蜡染体验课',
            desc: '亲手制作一幅蜡染作品',
            type: '活动',
          },
          {
            icon: '🎧',
            title: '民族音乐导览',
            desc: '聆听侗族大歌、苗族飞歌',
            type: '音频',
          },
        ],
      },
      {
        id: 'gz-gukeng',
        name: '古生物王国展厅',
        icon: '🦍',
        category: '自然科学',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/13.webp',
        introduction:
          '贵州拥有丰富的古生物化石资源，包括关岭生物群、盘县动物群等世界级化石宝库。',
        stats: {
          artifacts: 400,
          exhibitions: 2,
          visitors: 130000,
        },
        location: '二楼自然展厅',
        openTime: '周二至周日 9:00-17:00',
        duration: '1小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '胡氏贵州龙化石',
            period: '三叠纪',
            description: '贵州特有的小型爬行程动物化石',
            image: '',
          },
          {
            name: '海百合化石标本',
            period: '三叠纪',
            description: '关岭生物群的明星化石物种',
            image: '',
          },
          {
            name: '鱼龙化石骨架',
            period: '三叠纪',
            description: '完整的海生爬行程动物化石',
            image: '',
          },
          {
            name: '古植物化石群',
            period: '二叠纪-三叠纪',
            description: '记录古环境变迁的植物化石',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '古生物王国——贵州化石展',
            date: '常设展览',
            description: '从寒武纪到新生代的生命演化',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['古生物', '化石'],
          },
          {
            title: '关岭生物群特别展',
            date: '常设展览',
            description: '世界级的古生物化石库',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['关岭', '特展'],
          },
        ],
        recommendations: [
          {
            icon: '🔍',
            title: '化石修复观摩',
            desc: '观看技术人员修复化石的过程',
            type: '体验',
          },
          {
            icon: '🧑‍🏫',
            title: '古生物科普讲座',
            desc: '专家解读贵州古生物之谜',
            type: '讲座',
          },
        ],
      },
    ],
  },
};

export default guizhouData;
