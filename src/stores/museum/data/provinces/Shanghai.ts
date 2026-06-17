import type { ProvinceData } from '@/typesOfPages/museum';

export const shanghaiData: ProvinceData = {
  code: 'Shanghai',
  name: '上海',
  museums: [
    {
      id: 3,
      name: '上海博物馆',
      province: '上海',
      type: '艺术博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '上海博物馆是一座大型的中国古代艺术博物馆，馆藏文物近百万件，其中珍品文物12万件，以青铜器、陶瓷器、书法、绘画为特色。',
      artifacts: 1000000,
      exhibitions: 40,
      visitors: 8000000,
      features: ['国家AAAAA级旅游景区', '首批国家一级博物馆'],
    },
  ],
  details: {
    3: {
      museumId: 3,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:00',
          stopEntryTime: '16:00',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '国定假日开放时间以公告为准',
        },
        ticket: {
          price: '免费',
          isFree: true,
          needReservation: true,
          idRequired: '身份证件入馆',
          discountPolicy: ['未成年人免费', '老年人优先入馆'],
        },
        rules: {
          allowed: ['一般展览允许拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品玻璃', '禁止使用自拍杆'],
        },
        transportation: {
          address: '上海市黄浦区人民大道201号',
          metro: '地铁1、2、8号线人民广场站',
          bus: '公交46、112、123、145、934、隧道六线等',
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
          phone: '021-63723500',
          email: 'info@shanghaimuseum.net',
          complaintPhone: '021-63723500',
          website: 'https://www.shanghaimuseum.net',
        },
      },
      history:
        "上海博物馆创建于1952年，原址位于南京西路原跑马厅大厦。1996年10月新馆在人民广场正式对外开放。上海博物馆是首批国家一级博物馆和中央地方共建国家级重点博物馆，馆藏文物102万余件，其中珍贵文物14万余件，以青铜器、陶瓷器、书法、绘画为四大特色收藏，在国际上享有盛誉。2024年上海博物馆东馆已建成开放，形成'一体两翼'的新格局。",
      architecture:
        "上海新馆建筑面积约39200平方米，建筑高度29.5米。建筑造型取意'天圆地方'——上部为直径50米的圆形屋顶象征天；下部为方形基座象征地。外立面采用花岗岩饰面，庄重典雅。馆内设11个专题展厅，展览面积约12000平方米。",
      highlights:
        '青铜器收藏堪称海内第一，商周时期精品荟萃，包括大克鼎、大盂鼎等国宝级重器。陶瓷器收藏体系完整，从史前陶器到清代官窑一应俱全。书法绘画收藏涵盖晋唐宋元明清各代名家名作，如王羲之《上虞帖》、孙位《高逸图》等。',
      education:
        "常年举办'上博讲坛'学术讲座，邀请海内外学者讲解艺术史与考古学前沿成果。开设'上博学堂'系列课程，面向中小学生开展美育教育。推出行程行程程'博物馆之夜''夜间特展'等特色参观项目。",
    },
  },
  artifacts: [
    {
      id: 7,
      museumId: 3,
      name: '大克鼎',
      period: '西周',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西周晚期青铜重器，内壁铸有长篇铭文，记载了周天子对贵族克的赏赐，是研究西周土地制度和金文书法的重要实物，与 大盂鼎并称"海内三宝"。',
      basicInfo: {
        periodDetail: '约公元前1046年–前771年',
        material: '纸本设色',
        dimensions: '高68口径19厘米',
        collection: '中国国家博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1046年–前771年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 87,
      museumId: 3,
      name: '王羲之上虞帖',
      period: '唐代',
      category: '书法',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '唐代摹刻的王羲之法书精品，笔法精妙传神，展现了"书圣"王羲之书法艺术的精髓，是研究魏晋书法和唐代摹写技术的珍贵资料。',
      basicInfo: {
        periodDetail: '公元618年–907年',
        material: '传统手工具材质',
        dimensions: '36×10×14厘米',
        collection: '中国国家博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元618年–907年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 88,
      museumId: 3,
      name: '景德镇窑青花缠枝莲纹瓶',
      period: '元代',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '元代青花瓷器代表作，以进口钴料绘制缠枝莲纹，青花发色浓艳青翠，造型端庄秀丽，代表了元代景德镇制瓷工具艺的最高水平。',
      basicInfo: {
        periodDetail: '公元1271年–1368年',
        material: '纸本设色',
        dimensions: '高32口径23厘米',
        collection: '中国国家博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1271年–1368年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
    {
      id: 89,
      museumId: 3,
      name: '子仲姜盘',
      period: '春秋',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '春秋时期青铜水器精品，盘内底铸有众多圆雕动物，可在盘中转动，设计巧妙独特，铸造工具艺精湛，是青铜艺术史上的杰作。',
      basicInfo: {
        periodDetail: '公元前770年–前476年',
        material: '纸本设色',
        dimensions: '高47口径33厘米',
        collection: '中国国家博物馆',
        excavation: '出行程土于中原地区贵族墓葬或窖藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前770年–前476年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
  ],
  activities: [
    {
      id: 7,
      museumId: 3,
      title: '上海博物馆青铜器展',
      description: '展示中国古代青铜器的艺术魅力和历史价值',
      date: '2024-06-01 至 2024-09-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
    },
    {
      id: 8,
      museumId: 3,
      title: '书画鉴赏讲座',
      description: '邀请知名专家解读中国古代书画艺术',
      date: '2024-10-15 至 2024-12-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
    },
    {
      id: 9,
      museumId: 3,
      title: '文物修复体验活动',
      description: '让公众了解文物修复过程，体验传统修复技艺',
      date: '2024-09-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 8,
      museumId: 3,
      name: '书画复制明信片',
      description: '上海博物馆藏书画作品复刻明信片套装',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 9,
      museumId: 3,
      name: '陶瓷茶具套装',
      description: '仿宋代瓷器风格的精美茶具',
      price: 298,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 111,
      museumId: 3,
      name: '大克鼎造型茶具',
      description: '以西周大克鼎为原型的紫砂壶套装，融合青铜纹饰与现代茶道美学',
      price: 388,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 112,
      museumId: 3,
      name: '上虞帖书法临摹本',
      description: '王羲之《上虞帖》高清复制书法临摹练习册，附笔法解析',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
  ],
  exhibitions: [

    {
      id: 5,
      museumId: 3,
      title: '中国古代青铜器展',
      description: '展示商周时期精美的青铜礼器和兵器',
      date: '2024-02-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '上海博物馆一楼青铜馆',
      status: '热门',
      category: '历史文化',
      curator: '上海博物馆',
      scale: '500余件青铜器',
      visitors: 420000,
      background:
        '青铜器是中国古代文明的重要标志，商周时期是青铜文化的鼎盛时期。上海博物馆收藏的青铜器以其精美的造型、精湛的工具艺和丰富的铭文著称于世。本次展览精选商代至战国的青铜礼器、兵器、乐器等，展现了古代青铜铸造工具艺的高超水平与礼制文化的深厚内涵。',
    },

    {
      id: 104,
      museumId: 3,
      title: '江南文化艺术展',
      description:
        '展示江南地区从吴越到明清的艺术瑰宝，涵盖书画、陶瓷、青铜器等门类',
      date: '2024-07-01 - 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '上海博物馆二楼绘画馆',
      status: '最新',
      category: '艺术精品',
      curator: '上海博物馆书画部',
      scale: '200余件（套）文物',
      visitors: 350000,
      background:
        '江南地区自古便是人文荟萃之地，孕育了独特的江南文化。从吴越文化的古朴厚重，到宋元文人画的清雅脱俗，再到明清工具艺的精巧细腻，江南艺术形成了独特的美学风格。本次展览汇集书画、陶瓷、玉器等艺术精品，展现江南文化的深厚底蕴与艺术魅力。',
    },

    {
      id: 105,
      museumId: 3,
      title: '元明清青花瓷器展',
      description: '系统展示元代至清代青花瓷器的演变历程和艺术成就',
      date: '2024-11-15 - 2025-02-28',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      location: '上海博物馆陶瓷馆',
      status: '筹备中',
      category: '艺术精品',
      curator: '上海博物馆陶瓷部',
      scale: '150余件瓷器',
      visitors: 0,
      background:
        '青花瓷是中国陶瓷史上最重要的品种之一，以钴料在瓷胎上绘画，施透明釉后高温烧成。元代青花瓷以其浓艳的色泽和豪放的画风著称，明清时期青花瓷工具艺更趋成熟，纹饰题材丰富多样。本次展览系统梳理青花瓷的发展脉络，展现这一独特瓷艺的艺术成就与文化价值。',
    },
  ],
  news: [
    {
      id: 7,
      museumId: 3,
      title: '上海博物馆与国外博物馆达成合作',
      description: '上海博物馆与多个国外博物馆达成合作，将联合举办国际展览',
      date: '2024-06-10',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 8,
      museumId: 3,
      title: '上海博物馆东馆建设完成',
      description: '上海博物馆东馆建设完成改造，预计2025年开放',
      date: '2024-07-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 9,
      museumId: 3,
      title: '上海博物馆举办国际学术研讨会',
      description: '上海博物馆举办国际博物馆学术研讨会',
      date: '2024-08-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 5,
      museumId: 3,
      title: '中国古代青铜器研究',
      author: '上海博物馆研究部',
      date: '2023-09-10',
      type: 'book',
      description: '系统研究中国古代青铜器的发展历程和艺术成就。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 3,
      museumId: 3,
      title: '青铜器铸造AR互动',
      description: '通过增强现实技术，观看青铜器从制模到成型的全过程',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 9,
      museumId: 3,
      title: '青铜器铸造工具坊体验',
      description: '互动演示古代青铜器范铸法全过程，亲手体验虚拟铸造',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    3: [
      {
        id: 'sh-bronze',
        name: '青铜器馆',
        icon: '🏺',
        category: '青铜艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/8.webp',
        introduction:
          '典藏商周至战国青铜器精品，以造型庄重、纹饰精美、铭文丰富著称，堪称海内青铜器收藏第一。',
        stats: {
          artifacts: 500,
          exhibitions: 2,
          visitors: 420000,
        },
        location: '一楼青铜馆',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1.5-2小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '大克鼎',
            period: '西周',
            description: '海内三宝之一，铸有长篇铭文',
            image: '',
          },
          {
            name: '大盂鼎',
            period: '西周',
            description: '与大克鼎并称海内重器',
            image: '',
          },
          {
            name: '子仲姜盘',
            period: '春秋',
            description: '盘底圆雕动物可转动，设计巧妙',
            image: '',
          },
          {
            name: '商代饕餮纹尊',
            period: '商代',
            description: '商代青铜礼器典型代表',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '中国古代青铜器展',
            date: '常设展览',
            description: '商周青铜礼器与艺术精品',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['青铜', '常设'],
          },
          {
            title: '青铜器铭文专题展',
            date: '常设展览',
            description: '解读青铜铭文的历史价值',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['铭文', '金文'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '青铜器导览',
            desc: '专家讲解青铜艺术与礼制文化',
            type: '音频',
          },
          {
            icon: '🔍',
            title: '铭文识读互动',
            desc: '学习识别古代金文',
            type: '互动',
          },
        ],
      },
      {
        id: 'sh-ceramic',
        name: '陶瓷馆',
        icon: '🫖',
        category: '陶瓷艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/9.webp',
        introduction:
          '系统展示中国陶瓷发展史，从史前陶器到明清官窑，涵盖各大窑系，呈现千年陶瓷艺术的演变与辉煌。',
        stats: {
          artifacts: 400,
          exhibitions: 2,
          visitors: 350000,
        },
        location: '二楼陶瓷馆',
        openTime: '周二至周日 9:00-17:00',
        duration: '1-1.5小时',
        ticket: '免费（需预约）',
        artifacts: [
          {
            name: '景德镇窑青花缠枝莲纹瓶',
            period: '元代',
            description: '元代青花瓷代表作',
            image: '',
          },
          {
            name: '宋官窑青釉贯耳瓶',
            period: '宋代',
            description: '宋代官窑青瓷精品',
            image: '',
          },
          {
            name: '唐三彩骆驼载乐俑',
            period: '唐代',
            description: '唐三彩艺术典型代表',
            image: '',
          },
          {
            name: '清乾隆各色釉大瓶',
            period: '清代',
            description: '集多种釉彩于一器的瓷母',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '元明清青花瓷器展',
            date: '2024-11-15 - 2025-02-28',
            description: '青花瓷发展历程与艺术成就',
            status: 'upcoming',
            statusText: '即将开展',
            image: '',
            tags: ['青花', '陶瓷'],
          },
        ],
        recommendations: [
          {
            icon: '🎨',
            title: '陶瓷彩绘体验',
            desc: '亲手体验釉上彩绘工具艺',
            type: '活动',
          },
          {
            icon: '📖',
            title: '陶瓷史讲座',
            desc: '系统了解中国陶瓷发展',
            type: '活动',
          },
        ],
      },
    ],
  },
};