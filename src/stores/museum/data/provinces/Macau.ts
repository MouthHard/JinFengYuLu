import type { ProvinceData } from '@/typesOfPages/museum/index';

// 澳门省份数据
export const macauData: ProvinceData = {
  code: 'Macau',
  name: '澳门',
  museums: [
    {
      id: 37,
      name: '澳门博物馆',
      province: '澳门',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '澳门博物馆位于澳门历史城区的中心，展示了澳门数百年的历史变迁，包括中西文化交流的独特历史。',
      artifacts: 3000,
      exhibitions: 15,
      visitors: 500000,
      features: ['世界文化遗产地', '展示中西文化交流'],
    },
    {
      id: 38,
      name: '澳门艺术博物馆',
      province: '澳门',
      type: '艺术博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '澳门艺术博物馆是澳门最大的艺术博物馆，展示中国画、西洋绘画、民间工具艺品等。',
      artifacts: 10000,
      exhibitions: 18,
      visitors: 350000,
      features: ['澳门最大艺术博物馆', '中西艺术精品荟萃'],
    },
  ],
  details: {
    37: {
      museumId: 37,
      visitInfo: {
        openTime: {
          regularTime: '每日 10:00-18:00（17:30停止入场）',
          stopEntryTime: '17:30',
          closeDay: '周一闭馆（公众假期照常开放）',
          holidayNotice: '公众假期开放时间可能调整，请关注官网公告',
        },
        ticket: {
          price: '澳门币15元/人',
          isFree: false,
          needReservation: false,
          idRequired: '有效证件购票',
          discountPolicy: [
            '12岁以下儿童及65岁以上长者免费',
            '学生团体优惠价澳门币8元/人',
            '每月15日向公众免费开放',
          ],
        },
        rules: {
          allowed: ['展厅内可拍照（禁闪光灯、禁自拍杆）', '可携带饮用水'],
          forbidden: [
            '禁止携带大型背包或行程程李',
            '禁止在展厅内饮食',
            '禁止触摸展品',
            '禁止使用三脚架',
          ],
        },
        transportation: {
          address: '澳门特别行程程政区大炮台马路112号（大炮台上）',
          metro: '无地铁',
          bus: '公交2、3、3A、4、6A、7、8A、10、10A、11、18、18A、19、21A、26、26A、33、71路大炮台/澳门博物馆站',
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
          phone: '+853-2835-7911',
          email: 'museum@icm.gov.mo',
          complaintPhone: '+853-2835-7911',
          website: 'https://www.macaumuseum.gov.mo',
        },
      },
      history:
        "澳门博物馆创建于1998年，由澳门市政署管理运营，坐落在澳门半岛最高点——大炮台之上，毗邻大三巴牌坊，是澳门最具代表性的文化地标之一。博物馆全面展示了澳门自史前时代以来的历史发展进程，重点突出行程行程程澳门作为中西文化交流桥梁的独特地位和'一国两制'的成功实践。馆藏文物约3000余件，以澳门本土出行程行程程土文物、中西交流文物、澳门近现代历史文物、民间工具具艺收藏为主要特色。建筑面积约2800平方米，共三层展厅。",
      architecture:
        '澳门博物馆建筑巧妙地利用了大炮台的地下空间进行程程建设，外观与大炮台的历史风貌融为一体，不破坏原有景观的整体性。建筑入口设在炮台平台下方，观众进入展厅仿佛穿越时空隧道回到过去的澳门。三层展厅分别对应不同的历史主题：一楼展示澳门早期历史（原始居民、葡萄牙人来澳之前），二楼展示澳门黄金时代（葡萄牙殖民时期的繁荣景象），三楼展示澳门今日风采（城市发展与市民生活）。展厅设计大量运用多媒体互动技术增强参观体验。',
      highlights:
        "代表性藏品：澳门地形模型（详细复原了19世纪末澳门的城市面貌和地理环境）、清代'澳门纪略'刻本（记录了清代澳门的社会状况）、西洋火炮实物（原属大炮台防御体系的组成部分）、澳门民间信仰相关文物（如妈祖像、哪吒神龛等）、近代中西贸易文物（如广彩瓷器、银器、外销画等）、澳门回归祖国相关纪念文物（如1999年12月20日升旗仪式使用的国旗和区旗等）。此外还收藏有丰富的澳门老照片、地图、契约文书等反映城市变迁的一手资料。",
      education:
        "打造'澳博讲堂''澳门历史研学''世遗保护教育'三大公教品牌。定期举办'澳门与海上丝绸之路''中西文化交流史'等专题学术讲座。开设'葡式蛋挞制作体验''澳门历史城区寻踪导览''广府话与葡语词汇比较'等特色社教课程。与澳门本地学校合作开发'我爱澳门'校本课程，培养青少年对家乡文化的认同感和自豪感。",
    },
    38: {
      museumId: 38,
      visitInfo: {
        openTime: {
          regularTime: '每日 10:00-18:00（17:30停止入场）',
          stopEntryTime: '17:30',
          closeDay: '周一闭馆（公众假期照常开放）',
          holidayNotice: '公众假期开放时间可能调整，请关注官网公告',
        },
        ticket: {
          price: '澳门币15元/人',
          isFree: false,
          needReservation: false,
          idRequired: '有效证件购票',
          discountPolicy: [
            '12岁以下儿童及65岁以上长者免费',
            '学生团体优惠价澳门币8元/人',
            '每月15日向公众免费开放',
          ],
        },
        rules: {
          allowed: ['展厅内可拍照（禁闪光灯、禁自拍杆）', '可携带饮用水'],
          forbidden: [
            '禁止携带大型背包或行程程李',
            '禁止在展厅内饮食',
            '禁止触摸展品',
            '禁止使用三脚架',
          ],
        },
        transportation: {
          address: '澳门特别行程程政区大炮台马路112号（大炮台上）',
          metro: '无地铁',
          bus: '公交2、3、3A、4、6A、7、8A、10、10A、11、18、18A、19、21A、26、26A、33、71路大炮台/澳门博物馆站',
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
          phone: '+853-2835-7911',
          email: 'museum@icm.gov.mo',
          complaintPhone: '+853-2835-7911',
          website: 'https://www.macaumuseum.gov.mo',
        },
      },
      history:
        "澳门博物馆创建于1998年，由澳门市政署管理运营，坐落在澳门半岛最高点——大炮台之上，毗邻大三巴牌坊，是澳门最具代表性的文化地标之一。博物馆全面展示了澳门自史前时代以来的历史发展进程，重点突出行程行程程澳门作为中西文化交流桥梁的独特地位和'一国两制'的成功实践。馆藏文物约3000余件，以澳门本土出行程行程程土文物、中西交流文物、澳门近现代历史文物、民间工具具艺收藏为主要特色。建筑面积约2800平方米，共三层展厅。",
      architecture:
        '澳门博物馆建筑巧妙地利用了大炮台的地下空间进行程程建设，外观与大炮台的历史风貌融为一体，不破坏原有景观的整体性。建筑入口设在炮台平台下方，观众进入展厅仿佛穿越时空隧道回到过去的澳门。三层展厅分别对应不同的历史主题：一楼展示澳门早期历史（原始居民、葡萄牙人来澳之前），二楼展示澳门黄金时代（葡萄牙殖民时期的繁荣景象），三楼展示澳门今日风采（城市发展与市民生活）。展厅设计大量运用多媒体互动技术增强参观体验。',
      highlights:
        "代表性藏品：澳门地形模型（详细复原了19世纪末澳门的城市面貌和地理环境）、清代'澳门纪略'刻本（记录了清代澳门的社会状况）、西洋火炮实物（原属大炮台防御体系的组成部分）、澳门民间信仰相关文物（如妈祖像、哪吒神龛等）、近代中西贸易文物（如广彩瓷器、银器、外销画等）、澳门回归祖国相关纪念文物（如1999年12月20日升旗仪式使用的国旗和区旗等）。此外还收藏有丰富的澳门老照片、地图、契约文书等反映城市变迁的一手资料。",
      education:
        "打造'澳博讲堂''澳门历史研学''世遗保护教育'三大公教品牌。定期举办'澳门与海上丝绸之路''中西文化交流史'等专题学术讲座。开设'葡式蛋挞制作体验''澳门历史城区寻踪导览''广府话与葡语词汇比较'等特色社教课程。与澳门本地学校合作开发'我爱澳门'校本课程，培养青少年对家乡文化的认同感和自豪感。",
    },
  },
  artifacts: [
    {
      id: 79,
      museumId: 37,
      name: '澳门炮台火炮',
      period: '明清',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '澳门大炮台遗存的明清时期火炮，见证了澳门四百多年的历史变迁和中西文化交流，是研究明清火器技术和海防历史的重要实物。',
      basicInfo: {
        periodDetail: '公元1368年–1912年（跨明清两代）',
        material: '传统手工具材质',
        dimensions: '35×25×3厘米',
        collection: '三星堆博物馆',
        excavation: '1986年出行程土于四川广汉三星堆遗址',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元1368年–1912年（跨明清两代）历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 80,
      museumId: 37,
      name: '中西式航海罗盘',
      period: '清代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '清代融合中西技术制造的航海罗盘，体现了澳门作为东西方贸易港口的特殊地位，对于研究古代航海技术和中外科技交流具有重要价值。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '传统手工具材质',
        dimensions: '15×5×16厘米',
        collection: '三星堆博物馆',
        excavation: '1986年出行程土于四川广汉三星堆遗址',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元1636年–1912年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 81,
      museumId: 38,
      name: '郎世宁百骏图',
      period: '清代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '意大利传教士郎世宁为清廷绘制的百匹骏图长卷，融合中西绘画技法，造型准确生动，色彩富丽堂皇，是宫廷绘画的杰作。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '纸本设色',
        dimensions: '72×1139厘米（长卷）',
        collection: '国家级博物馆',
        excavation: '传世品，历经数代收藏传承',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元1636年–1912年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 82,
      museumId: 38,
      name: '澳门风景油画',
      period: '当代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '描绘澳门城市风光和历史建筑的油画作品，展现了澳门独特的东西方文化交融风貌和城市魅力。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '纸本设色',
        dimensions: '60×723厘米（长卷）',
        collection: '国家级博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为1949年至今的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
  ],
  activities: [
    {
      id: 115,
      museumId: 37,
      title: '澳门历史城区模型',
      description: '以澳门历史城区为原型的复制模型，世界文化遗产',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 116,
      museumId: 37,
      title: '中西文化讲座',
      description: '专家学者讲解澳门的中西文化交流',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 117,
      museumId: 37,
      title: '澳门文化体验',
      description: '了解澳门文化，体验中葡交融',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 118,
      museumId: 37,
      title: '澳门文创包装',
      description: '以澳门建筑为灵感的文化创意包装',
      date: '2024-09-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 119,
      museumId: 38,
      title: '澳门历史绘画展',
      description: '描绘澳门历史风貌的绘画作品，记录澳门的变迁',
      date: '2024-04-15 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 120,
      museumId: 38,
      title: '西方绘画展',
      description: '西方绘画作品，展现西方艺术在澳门的传播',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 121,
      museumId: 38,
      title: '中国画展',
      description: '展示中国传统绘画艺术的传承力',
      date: '2024-06-15 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 122,
      museumId: 38,
      title: '中西融合艺术展',
      description: '展示澳门特色的中西方融合艺术复制品',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 93,
      museumId: 37,
      name: '大三巴牌坊模型',
      description: '澳门大三巴牌坊精细树脂建筑模型',
      price: 138,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 94,
      museumId: 37,
      name: '葡式瓷砖纹样杯垫',
      description: '仿澳门葡式建筑蓝白瓷砖图案陶瓷杯垫套装',
      price: 48,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '茶具器皿',
    },
    {
      id: 148,
      museumId: 37,
      name: '澳门炮台火炮模型',
      description: '以澳门大炮台古炮为原型的1:20比例金属模型摆件',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 95,
      museumId: 38,
      name: '中国画水墨书签套装',
      description: '以馆藏中国水墨画为素材的木质书签礼盒',
      price: 58,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 96,
      museumId: 38,
      name: '澳门本土艺术家版画',
      description: '澳门当代艺术家原创限量版画作品',
      price: 288,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 149,
      museumId: 38,
      name: '郎世宁百骏图卷轴复制',
      description: '清代郎世宁《百骏图》高仿真艺术微喷复制长卷，附装裱',
      price: 588,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
  ],
  exhibitions: [
    {
      id: 39,
      museumId: 37,
      title: '澳门：中西贸易四百年',
      description: '以大三巴遗址为核心，讲述澳门在中西方贸易史上的重要角色',
      date: '2024-07-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '澳门博物馆澳门历史展厅',
      status: '热门',
      category: '历史文化',
      curator: '澳门博物馆',
      scale: '350余件（套）文物',
      visitors: 160000,
      background: '澳门自1557年葡萄牙人入居以来,成为东西方贸易的重要枢纽。本次展览以大三巴牌坊遗址为核心,通过外销瓷器、丝绸、茶叶贸易文物,以及葡萄牙航海仪器、地图等文物,展现澳门四百年来在中西贸易中的独特地位。从澳门出行程发的商船连接了欧洲、美洲和亚洲,促进了全球贸易网络的形成。',
    },
    {
      id: 40,
      museumId: 38,
      title: '澳门本土艺术与中国画珍藏展',
      description: '展示澳门本土艺术家作品及馆藏中国画精品',
      date: '2024-12-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '澳门艺术博物馆四楼展厅',
      status: '筹备中',
      category: '艺术精品',
      curator: '澳门艺术博物馆',
      scale: '150余件（套）艺术品',
      visitors: 0,
      background: '澳门艺术博物馆珍藏了大量中国画精品和澳门本土艺术家作品。本次展览将展出行程岭南画派名家作品、澳门土生葡人艺术家的创作,以及反映澳门历史风貌的绘画作品。这些作品既传承了中国传统绘画的精髓,又融入了西方艺术元素,展现了澳门作为中西文化交汇点的独特艺术风貌。',
    },
    {
      id: 377,
      museumId: 37,
      title: '澳门中西文化交流四百年',
      description: '通过绘画、文献和实物，展现澳门作为东西方文化交汇点的独特历史地位',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '澳门博物馆历史展厅',
      status: '热门',
      category: '历史文化',
      curator: '澳门博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '澳门是中西文化交流的重要桥梁,四百多年来西方宗教、科学、艺术通过澳门传入中国,中国的丝绸、瓷器、茶叶也经由澳门销往世界。本次展览通过传教士绘画、西式仪器、中文古籍、外销工具艺品等文物,展现澳门在中西文化交流中的独特地位,以及多元文化在此碰撞融合的历史进程。',
    },
    {
      id: 378,
      museumId: 38,
      title: '澳门当代艺术邀请展',
      description: '邀请澳门本地及葡语系国家艺术家参展，呈现多元文化背景下的当代创作',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '澳门艺术博物馆当代厅',
      status: '最新',
      category: '艺术精品',
      curator: '澳门艺术博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '澳门作为中西文化交汇点,孕育了独特的当代艺术生态。本次展览邀请澳门本土艺术家、葡萄牙及葡语系国家艺术家参展,展出行程绘画、雕塑、装置、影像等多种形式的作品。这些作品反映了艺术家对澳门历史、文化身份、都市变迁等主题的思考,展现了多元文化背景下的当代艺术创作活力。',
    }
  ],
  news: [
    {
      id: 169,
      museumId: 37,
      title: '博物馆37年度特展开幕',
      description: '博物馆37举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 170,
      museumId: 37,
      title: '博物馆37新数字化服务上线',
      description: '博物馆37推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 171,
      museumId: 37,
      title: '博物馆37举办文化活动',
      description: '博物馆37举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 172,
      museumId: 38,
      title: '博物馆38年度特展开幕',
      description: '博物馆38举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 173,
      museumId: 38,
      title: '博物馆38新数字化服务上线',
      description: '博物馆38推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 174,
      museumId: 38,
      title: '博物馆38举办文化活动',
      description: '博物馆38举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 39,
      museumId: 37,
      title: '澳门葡式建筑遗产保护研究',
      author: '澳门理工具学院',
      date: '2023-04-12',
      type: 'book',
      description: '探讨澳门世界遗产建筑的修缮技术与保护策略。',
      link: '#',
    },
    {
      id: 40,
      museumId: 38,
      title: '澳门本土绘画艺术评析',
      author: '澳门艺术博物馆研究部',
      date: '2023-08-30',
      type: 'article',
      description: '评述澳门本土画家群体及其代表作品的艺术成就。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 37,
      museumId: 37,
      title: '大三巴前炮台回望',
      description: '站在虚拟大三巴炮台上回望澳门半岛，重温四百年沧桑巨变',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 38,
      museumId: 38,
      title: '澳门艺文空间漫游',
      description: '漫步虚拟澳门艺术博物馆展厅，欣赏中西合璧的艺术典藏',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    37: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/18.webp',
        introduction:
          '澳门博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 328,
          exhibitions: 2,
          visitors: 92790,
        },

        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '澳门博物馆最具代表性的珍贵藏品',
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
            description: '系统展示澳门博物馆的核心馆藏与历史脉络',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/6.webp',
        introduction:
          '澳门博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 519,
          exhibitions: 2,
          visitors: 335677,
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
            description: '澳门博物馆独有的特色主题展览',
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
    38: [
      {
        id: 'meishu',
        name: '美术精品展厅',
        icon: '🎨',
        category: '美术收藏',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/5.webp',
        introduction:
          '展示澳门艺术博物馆收藏的中外美术精品，涵盖中国画、油画、雕塑、装置等多种艺术形式。',
        stats: {
          artifacts: 359,
          exhibitions: 2,
          visitors: 196691,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '国画大师作品',
            period: '近现代',
            description: '近现代国画大师的代表作',
            image: '',
          },
          {
            name: '油画经典收藏',
            period: '近现代',
            description: '中外油画经典作品收藏',
            image: '',
          },
          {
            name: '雕塑艺术精品',
            period: '当代',
            description: '古今中外雕塑艺术精品',
            image: '',
          },
          {
            name: '当代艺术新作',
            period: '当代',
            description: '当代艺术家的新锐创作',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '馆藏精品展',
            date: '常设展览',
            description: '澳门艺术博物馆核心藏品的定期展示',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['美术', '常设'],
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
        id: 'zhanlan',
        name: '临时展览厅',
        icon: '🎯',
        category: '专题特展',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/19.webp',
        introduction:
          '不定期举办国内外艺术交流展览，引入前沿艺术理念与创作实践。',
        stats: {
          artifacts: 94,
          exhibitions: 2,
          visitors: 342566,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [],
        exhibitions: [
          {
            title: '年度特邀展',
            date: '当前展览',
            description: '本期特别策划的艺术展览',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['特展', '邀请展'],
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

export default macauData;
