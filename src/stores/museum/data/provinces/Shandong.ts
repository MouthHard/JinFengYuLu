import type { ProvinceData } from '@/typesOfPages/museum/index';

// 山东省份数据
export const shandongData: ProvinceData = {
  code: 'Shandong',
  name: '山东',
  museums: [
    {
      id: 15,
      name: '山东博物馆',
      province: '山东',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '山东博物馆是新中国成立后建立的第一座省级综合性地志博物馆，馆藏文物28万余件，以齐鲁文化、儒家文化为特色。',
      artifacts: 280000,
      exhibitions: 30,
      visitors: 3600000,
      features: ['国家一级博物馆', '全国科普教育基地'],
    },
  ],
  details: {
    15: {
      museumId: 15,
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
          address: '山东省济南市历下区经十路11899号',
          metro: '无直达地铁',
          bus: '公交BRT5、115、119、K139、K152、K160、K202路省博物馆站',
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
          phone: '0531-85058201',
          email: 'sdbwg@shandong.cn',
          complaintPhone: '0531-85058202',
          website: 'http://www.sdmuseum.com',
        },
      },
      history:
        '山东博物馆前身是1954年成立的山东省地志博物馆筹备处，1956年正式命名，2010年新馆建成开放，是新中国成立后建立的第一座省级综合性地志类博物馆，也是首批国家一级博物馆。馆藏文物28万余件（套），珍贵文物近2万件，以齐鲁文化文物、龙山文化陶器、商周青铜器、汉画像石、甲骨为特色。新馆建筑面积8.3万平方米。',
      architecture:
        "新馆建筑外观以'天圆地方'理念和泰山岩石肌理为设计灵感，主体结构如一块巨大的'裂石'。馆内设有'山东历史文化展'、'考古山东'、'汉代画像艺术展'等常设展厅，展览面积约2.1万平方米。",
      highlights:
        "十大镇馆之宝：蛋壳黑陶杯（龙山文化，壁厚仅0.2毫米，被誉为'四千年前地球文明最精致之作'）、鲁国大玉璧（战国）、亚丑钺（商代）、《孙子兵法》《孙膑兵法》竹简（西汉，临沂银雀山汉墓出行程行程程土）、九旒冕（明代唯一存世的明初亲王冕冠）、郑燮《双松图轴》等。甲骨收藏量居全国前列。",
      education:
        "打造'齐鲁讲堂''孔子文化研学''考古体验营'三大公教品牌。定期举办'儒家文化与当代价值'学术论坛。开设'金石传拓''画像石拓印''汉服礼仪'等传统文化体验课程。",
    },
  },
  artifacts: [
    {
      id: 31,
      museumId: 15,
      name: '蛋壳黑陶杯',
      period: '龙山文化',
      category: '陶器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '山东龙山文化遗址出行程土的黑陶精品，器壁薄如蛋壳，最薄处仅0.2毫米，代表了新石器时代制陶技术的最高成就，被誉为"黑如漆、亮如镜、薄如纸"。',
      basicInfo: {
        periodDetail: '约公元前2500年–前2000年',
        material: '传统手工具材质',
        dimensions: '高9重422克',
        collection: '甘肃省博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是约公元前2500年–前2000年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 32,
      museumId: 15,
      name: '鲁国大玉璧',
      period: '战国',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '山东曲阜鲁国故城出行程土的大型玉璧，直径超过30厘米，纹饰精美，是战国时期玉器中的巨制，代表了当时玉雕工具艺的最高水平，具有极高的历史和艺术价值。',
      basicInfo: {
        periodDetail: '公元前475年–前221年',
        material: '纸本设色',
        dimensions: '高15宽3厚5厘米',
        collection: '甘肃省博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了公元前475年–前221年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
  ],
  activities: [
    {
      id: 43,
      museumId: 15,
      title: '齐鲁文化展',
      description: '展示山东地区的历史文化和儒家思想',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 44,
      museumId: 15,
      title: '儒家文化讲座',
      description: '专家学者讲解儒家思想和儒家文化',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 45,
      museumId: 15,
      title: '大汶口文化体验',
      description: '了解史前文化，体验原始生活',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 43,
      museumId: 15,
      name: '孔子像摆件',
      description: '儒家文化孔子像工具艺摆件',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 44,
      museumId: 15,
      name: '论语精选书签',
      description: '《论语》经典语录金属书签',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 45,
      museumId: 15,
      name: '齐鲁文化丝巾',
      description: '以齐鲁文化为设计元素的真丝丝巾',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 126,
      museumId: 15,
      name: '蛋壳黑陶杯复制品',
      description:
        '龙山文化蛋壳黑陶杯工具艺仿制品，采用现代制陶技术还原薄如蛋壳效果',
      price: 328,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
  ],
  exhibitions: [
    {
      id: 17,
      museumId: 15,
      title: '齐鲁文化展',
      description: '展示山东地区的齐鲁文化和孔孟思想传承',
      date: '2024-03-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '山东博物馆历史文化展厅',
      status: '热门',
      category: '历史文化',
      curator: '山东博物馆',
      scale: '700余件（套）文物',
      visitors: 480000,
      background: '齐鲁文化是先秦时期齐国与鲁国文化的合称，是中华文明的重要组成部分。鲁国是周公旦的封国，保存了完整的周礼制度，是儒家文化的发源地；齐国是姜子牙的封国，崇尚功利与变革，形成了开放务实的齐文化。孔子在鲁国创立儒家学说，孟子、荀子等儒家大师继承发扬，使齐鲁成为中华文化的精神高地。本次展览以山东出行程土的齐鲁文物为基础，结合孔孟文化遗产，系统展示齐鲁文化的深厚底蕴与历史贡献。',
    },
    {
      id: 328,
      museumId: 15,
      title: '齐鲁文化礼乐文明展',
      description: '以山东出行程土青铜礼器和玉器为载体，展现周代齐鲁两国的礼乐制度与文化成就',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '山东博物馆齐鲁文化展厅',
      status: '热门',
      category: '历史文化',
      curator: '山东博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '礼乐文明是周代文化的核心，以青铜礼器和玉礼器为物质载体，体现了等级秩序与道德规范。鲁国作为周公封地，完整继承了西周礼乐制度，被誉为"周礼尽在鲁矣"。齐国则发展出行程独特的礼制体系，既有周礼传统又融入了东夷文化因素。山东出行程土的青铜鼎、簋、编钟等礼器，以及玉璧、玉璜等玉礼器，是研究周代礼乐制度的珍贵资料。本次展览以齐鲁两国出行程土礼器为核心，揭示礼乐文明在齐鲁地区的传承与发展。',
    }
  ],
  news: [
    {
      id: 106,
      museumId: 15,
      title: '博物馆15年度特展开幕',
      description: '博物馆15举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 107,
      museumId: 15,
      title: '博物馆15新数字化服务上线',
      description: '博物馆15推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 108,
      museumId: 15,
      title: '博物馆15举办文化活动',
      description: '博物馆15举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 17,
      museumId: 15,
      title: '齐鲁文化研究',
      author: '山东博物馆研究部',
      date: '2023-07-20',
      type: 'article',
      description: '对齐鲁文化的发现、研究和意义进行程深入探讨。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 15,
      museumId: 15,
      title: '孔庙大成殿全景漫游',
      description: '高精度三维复原曲阜孔庙大成殿，聆听儒家思想讲解',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    15: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/15.webp',
        introduction:
          '山东博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 436,
          exhibitions: 2,
          visitors: 124969,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '山东博物馆最具代表性的珍贵藏品',
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
            description: '系统展示山东博物馆的核心馆藏与历史脉络',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/11.webp',
        introduction:
          '山东博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 373,
          exhibitions: 2,
          visitors: 284013,
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
            description: '山东博物馆独有的特色主题展览',
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

export default shandongData;
