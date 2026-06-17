import type { ProvinceData } from '@/typesOfPages/museum';

export const shaanxiData: ProvinceData = {
  code: 'Shaanxi',
  name: '陕西',
  museums: [
    {
      id: 4,
      name: '秦始皇陵附近博物馆',
      province: '陕西',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '秦始皇陵附近博物馆位于陕西省西安市临潼区，是中国第一个以帝王陵寝遗址为核心建立的大型遗址类博物馆，被誉为"世界第八大奇迹"。',
      artifacts: 8000,
      exhibitions: 10,
      visitors: 7000000,
      features: [
        '世界文化遗产',
        '国家AAAAA级旅游景区',
        '首批全国重点文物保护单位',
      ],
    },
    {
      id: 5,
      name: '陕西历史博物馆',
      province: '陕西',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '陕西历史博物馆是中国第一座大型现代化国家级博物馆，馆藏文物171万余件，上起远古人类初始阶段，下至近代社会。',
      artifacts: 1710000,
      exhibitions: 45,
      visitors: 5500000,
      features: ['国家一级博物馆', '全国爱国主义教育示范基地'],
    },
  ],
  details: {
    4: {
      museumId: 4,
      visitInfo: {
        openTime: {
          regularTime:
            '3月16日-11月15日 8:30-18:00；11月16日-次年3月15日 8:30-17:30',
          stopEntryTime: '17:00（旺季）/ 16:30（淡季）',
          closeDay: '全年开放',
          holidayNotice: '除夕闭馆一天',
        },
        ticket: {
          price: '120元/人（旺季3-11月），60元/人（淡季12-次年2月）',
          isFree: false,
          needReservation: false,
          idRequired: '有效证件购票',
          discountPolicy: ['学生票半价', '65岁以上老人免票', '残疾人免票'],
        },
        rules: {
          allowed: ['一号坑区域可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: [
            '禁止吸烟',
            '禁止携带打火机',
            '禁止触摸俑坑围栏',
            '禁止使用无人机航拍',
          ],
        },
        transportation: {
          address: '陕西省西安市临潼区秦陵北路',
          metro: '地铁9号线秦陵西站，换乘临潼游613路',
          bus: '西安火车站乘游5（306路）、307路至兵马俑站',
        },
        services: {
          hasGuide: true,
          hasStorage: true,
          hasRestaurant: true,
          hasAccessibility: true,
          hasRestArea: true,
          hasWiFi: false,
        },
        contact: {
          phone: '029-81399127',
          email: 'bmyoffice@163.com',
          complaintPhone: '029-81399174',
          website: 'http://www.bmy.com.cn',
        },
      },
      history:
        "秦始皇帝陵博物院成立于1975年，是以秦始皇陵园遗址为基础建立的大型遗址类博物馆。秦始皇陵始建于公元前246年，历时39年建成。1974年3月当地农民杨志发等人在打井时意外发现了兵马俑坑，被誉为'世界第八大奇迹'和'二十世纪考古史上的伟大发现之一'。",
      architecture:
        '博物院以秦始皇陵园遗址为核心，总面积56.25平方公里。一号坑展厅为拱形钢结构建筑，跨度达70米，长230米，面积14260平方米，是目前国内最大的遗址保护展厅。二号坑、三号坑展厅同样采用现代化设计。',
      highlights:
        "一号坑出行程行程程土陶俑陶马6000余件，排列成庞大的军阵。二号坑出行程行程程土有骑兵俑、跪射俑、立射俑等多种兵种俑。三号坑被认为是军幕（指挥部）。此外还出行程行程程土有青铜兵器数万件。铜车马被誉为'青铜之冠'，制作工具具艺精湛绝伦。",
      education:
        "开设'秦陵讲堂'系列讲座，邀请考古学家讲解秦代历史与考古发现。推出行程行程程'小小考古家'研学课程。每年举办'国际秦始皇陵保护论坛'，汇聚全球文物保护专家。",
    },
    5: {
      museumId: 5,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:00-17:30（冬季17:00停止入场）',
          stopEntryTime: '16:30（夏季）/ 16:00（冬季）',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '除夕闭馆',
        },
        ticket: {
          price: '免费（需预约），基本陈列免费，大唐遗宝展30元/人',
          isFree: true,
          needReservation: true,
          idRequired: '有效证件预约入馆',
          discountPolicy: [
            '未成年人免费',
            '老年人优先通道',
            '残疾人免预约快速入馆',
          ],
        },
        rules: {
          allowed: ['基本陈列可拍照（禁闪光灯）', '可携带饮用水'],
          forbidden: ['禁止携带宠物', '禁止触摸展品', '大唐遗宝展禁止拍照'],
        },
        transportation: {
          address: '陕西省西安市雁塔区小寨东路91号',
          metro: '地铁2、3号线小寨站向东步行程800米',
          bus: '公交19、24、26、27、401、521、527、701、710路陕历博站',
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
          phone: '029-85253806',
          email: 'sxhbbg@126.com',
          complaintPhone: '029-85253806',
          website: 'http://www.sxhm.com',
        },
      },
      history:
        "陕西历史博物馆是中国第一座大型现代化国家级博物馆，1991年6月20日正式对外开放。陕西是中华文明的重要发源地之一，历史上先后有周、秦、汉、隋、唐等十四个王朝在此建都，被誉为'天然历史博物馆'。馆藏文物171万余件，时间跨度长达一百多万年。",
      architecture:
        "博物馆建筑由著名建筑师张锦秋主持设计，采用唐代建筑风格，整体布局为'中央殿堂、四隅崇楼'的格局。主馆建筑面积55600平方米，设有7个基本展厅，展览面积约11600平方米。",
      highlights:
        '馆藏文物以商周青铜器、历代陶俑、唐代金银器和壁画最具特色。著名藏品有西周多友鼎、皇后之玺玉印（西汉吕后玉玺）、鎏金舞马衔杯纹银壶（唐代）、兽首玛瑙杯（唐代）、三彩载乐骆驼俑（唐代）等。唐代壁画馆藏量居全国之首。',
      education:
        "常年举办'陕博讲坛'公益讲座，邀请考古学、历史学专家学者面向公众普及文博知识。开设'陕博课堂'中小学生研学课程。推出行程行程程'博物馆之夜''非遗体验日'等特色公教活动。",
    },
  },
  artifacts: [
    {
      id: 8,
      museumId: 4,
      name: '秦始皇陵兵马俑一号坑军阵',
      period: '秦代',
      category: '陶器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '秦始皇陵陪葬坑中的陶制军阵，由数千个与真人等大的陶俑组成，展现了秦代强大的军事力量和高超的雕塑艺术，被誉为"世界第八大奇迹"。',
      basicInfo: {
        periodDetail: '公元前221年–前207年',
        material: '传统手工具材质',
        dimensions: '15×11×14厘米',
        collection: '陕西历史博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前221年–前207年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 90,
      museumId: 4,
      name: '秦始皇陵铜车马',
      period: '秦代',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '秦始皇陵出行程土的青铜马车模型，按真实车辆比例缩小制作，由数千个零件组成，工具艺精湛复杂，被誉为"青铜之冠"，代表了秦代青铜铸造的最高水平。',
      basicInfo: {
        periodDetail: '公元前221年–前207年',
        material: '纸本设色',
        dimensions: '高36口径54厘米',
        collection: '陕西历史博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是公元前221年–前207年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 91,
      museumId: 4,
      name: '跪射俑',
      period: '秦代',
      category: '陶器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '秦始皇兵马俑中的精品，武士呈跪射姿态，神情专注，发丝清晰可见，是秦代写实主义雕塑艺术的杰出行程代表，保存最为完整的兵马俑之一。',
      basicInfo: {
        periodDetail: '公元前221年–前207年',
        material: '传统手工具材质',
        dimensions: '5×4×19厘米',
        collection: '陕西历史博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前221年–前207年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 92,
      museumId: 4,
      name: '石铠甲',
      period: '秦代',
      category: '石器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '秦始皇陵出行程土的石质铠甲，由数百片石甲片编缀而成，工具艺精细逼真，展现了秦代高超的石材加工具技术，为研究古代甲胄制度提供了珍贵实物资料。',
      basicInfo: {
        periodDetail: '公元前221年–前207年',
        material: '传统手工具材质',
        dimensions: '16×19×9厘米',
        collection: '陕西历史博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元前221年–前207年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 9,
      museumId: 5,
      name: '皇后之玺玉印',
      period: '西汉',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西汉时期皇后专用玉玺，以和田羊脂白玉雕琢而成，螭虎钮，刻有"皇后之玺"四字，是迄今发现的唯一汉代皇后玉玺，具有极高的历史和艺术价值。',
      basicInfo: {
        periodDetail: '公元前202年–公元8年',
        material: '纸本设色',
        dimensions: '高17宽9厚3厘米',
        collection: '秦始皇兵马俑博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了公元前202年–公元8年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
    {
      id: 93,
      museumId: 5,
      name: '镶金兽首玛瑙杯',
      period: '唐代',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '唐代金银器精品，以红色玛瑙雕琢成兽首形状，口沿镶金，造型源于西方来通杯，体现了唐代中西文化交流的繁荣，是唐代玉器工具艺的巅峰之作。',
      basicInfo: {
        periodDetail: '公元618年–907年',
        material: '纸本设色',
        dimensions: '高10宽12厚5厘米',
        collection: '秦始皇兵马俑博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了公元618年–907年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
    {
      id: 94,
      museumId: 5,
      name: '舞马衔杯纹银壶',
      period: '唐代',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '唐代金银器珍品，壶身錾刻一匹口衔酒店杯的舞马形象，再现了唐玄宗时期宫廷舞马祝寿的盛况，工具艺精湛，是唐代金银工具艺的杰出行程代表。',
      basicInfo: {
        periodDetail: '公元618年–907年',
        material: '纸本设色',
        dimensions: '高14重910克',
        collection: '秦始皇兵马俑博物馆',
        excavation: '出行程土于陕西省考古发掘现场',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元618年–907年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 10,
      museumId: 4,
      title: '兵马俑发现50周年纪念展',
      description: '纪念兵马俑发现50周年，展示最新考古成果',
      date: '2024-03-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 11,
      museumId: 4,
      title: '秦文化学术研讨会',
      description: '国内外专家学者共同探讨秦代历史文化',
      date: '2024-06-15 至 2024-06-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 12,
      museumId: 4,
      title: '考古体验活动',
      description: '模拟考古发掘体验，了解考古工具作流程',
      date: '2024-07-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 13,
      museumId: 5,
      title: '大唐文化主题展',
      description: '展示唐代文化艺术的不凡成就',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 14,
      museumId: 5,
      title: '丝绸之路文物展',
      description: '展示丝绸之路沿线的历史文物和文化交流',
      date: '2024-05-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 15,
      museumId: 5,
      title: '唐代礼仪体验活动',
      description: '穿唐装、学唐礼，体验唐代文化生活',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 11,
      museumId: 4,
      name: '秦文化书签',
      description: '以秦代文物为设计元素的金属书签套装',
      price: 48,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 12,
      museumId: 4,
      name: '秦简书法字帖',
      description: '秦简文字临摹字帖，传统文化学习用品',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 113,
      museumId: 4,
      name: '铜车马模型摆件',
      description: '秦始皇陵铜车马1:15比例精工具复制摆件，附文物背景介绍',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 114,
      museumId: 4,
      name: '跪射俑造型笔架',
      description: '以兵马俑跪射俑为原型的创意树脂笔架，兼具实用与观赏价值',
      price: 128,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 13,
      museumId: 5,
      name: '唐代仕女图丝巾',
      description: '以唐代仕女图为设计元素的真丝丝巾',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 14,
      museumId: 5,
      name: '唐三彩摆件',
      description: '唐三彩骆驼载乐俑复制品',
      price: 268,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 15,
      museumId: 5,
      name: '丝绸之路主题笔记本',
      description: '以丝绸之路文物为主题的精美笔记本',
      price: 58,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 115,
      museumId: 5,
      name: '镶金兽首玛瑙杯复制品',
      description: '1:1比例仿制镶金兽首玛瑙杯工具艺品，采用树脂材质手工具制作',
      price: 468,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 116,
      museumId: 5,
      name: '舞马衔杯纹银壶冰箱贴',
      description: '以唐代舞马衔杯纹银壶为造型的立体珐琅彩冰箱贴',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
  ],
  exhibitions: [
    {
      id: 6,
      museumId: 4,
      title: '秦兵马俑一号坑复原展',
      description: '展示秦始皇陵兵马俑一号坑的考古发掘成果和军阵排列',
      date: '2024-01-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '秦始皇帝陵博物院一号坑展厅',
      status: '热门',
      category: '历史文化',
      curator: '秦始皇帝陵博物院',
      scale: '6000余件兵马俑',
      visitors: 1200000,
      background: '秦始皇陵兵马俑一号坑是1974年当地农民打井时意外发现的,经过考古发掘揭示出行程这支埋藏地下两千余年的庞大地下军阵。一号坑面积约14260平方米,呈长方形,内含兵马俑约6000件,包括步兵、车兵组成的主体军阵,展现了秦代强大的军事力量和高超的雕塑艺术水平,被誉为"世界第八大奇迹"。',
    },
    {
      id: 106,
      museumId: 4,
      title: '秦始皇陵铜车马展',
      description:
        '展示秦始皇陵出行程土的两乘青铜车马，解读秦代青铜铸造工具艺和车舆制度',
      date: '2024-03-01 - 长期展出行程',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '秦始皇帝陵博物院铜车马展厅',
      status: '热门',
      category: '历史文化',
      curator: '秦始皇帝陵博物院',
      scale: '2乘铜车马及配件',
      visitors: 850000,
      background: '秦始皇陵铜车马于1980年在封土西侧出行程土,是秦始皇陵陪葬坑中的重要发现。两乘铜车马按真车真马二分之一比例制作,一号车为立车,二号车为安车,由数千个零部件组装而成。铜车马制作工具艺精湛绝伦,集铸造、焊接、镶嵌、销接等多种工具艺于一身,被誉为"青铜之冠",代表了秦代青铜铸造技术的最高成就。',
    },
    {
      id: 107,
      museumId: 4,
      title: '秦代考古发现成果展',
      description:
        '系统展示近年来秦始皇陵及周边遗址的最新考古发掘成果和研究进展',
      date: '2024-06-15 - 2025-03-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '秦始皇帝陵博物院综合陈列厅',
      status: '最新',
      category: '科技考古',
      curator: '秦始皇帝陵博物院考古部',
      scale: '300余件（套）文物',
      visitors: 280000,
      background: '近年来秦始皇陵考古工具作取得重大突破,运用现代科技手段对陵园进行程全面勘探,发现了新的陪葬坑、建筑遗址及大量珍贵文物。本次展览集中展示百戏俑坑、青铜水禽坑等新发现,以及运用遥感、探地雷达等科技手段取得的考古成果,让观众了解秦陵考古的最新进展和科技考古的魅力。',
    },
    {
      id: 7,
      museumId: 5,
      title: '陕西出行程土文物精华展',
      description: '展示陕西地区从史前到明清的代表性文物',
      date: '2024-03-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '陕西历史博物馆基本陈列厅',
      status: '热门',
      category: '历史文化',
      curator: '陕西历史博物馆',
      scale: '2000余件文物',
      visitors: 680000,
      background: '陕西是中华文明的重要发祥地,历史上先后有周、秦、汉、隋、唐等十四个王朝在此建都,留下了丰富的文化遗产。本次展览精选陕西地区出行程土的史前陶器、商周青铜器、秦汉瓦当、唐代金银器等代表性文物,系统展现了陕西从远古到明清的历史脉络,让观众领略三秦大地的深厚文化底蕴。',
    },
    {
      id: 321,
      museumId: 5,
      title: '秦始皇陵兵马俑专题展',
      description: '以兵马俑军阵为核心，以青铜车马，全面展示秦代军事制度与雕塑艺术',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '陕西历史博物馆秦汉展厅',
      status: '热门',
      category: '历史文化',
      curator: '陕西历史博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '秦始皇陵兵马俑是世界文化遗产的杰出行程代表,本次专题展精选兵马俑军阵中的典型俑像,包括将军俑、跪射俑、立射俑等不同兵种,配合青铜车马、兵器等文物,全方位展示秦代军事制度的严密组织和雕塑艺术的写实风格。每件兵马俑都神态各异、栩栩如生,体现了秦代工具匠高超的雕塑技艺。',
    }
  ],
  news: [
    {
      id: 10,
      museumId: 4,
      title: '博物馆4年度特展开幕',
      description: '博物馆4举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 11,
      museumId: 4,
      title: '博物馆4新数字化服务上线',
      description: '博物馆4推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 12,
      museumId: 4,
      title: '博物馆4举办文化活动',
      description: '博物馆4举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 13,
      museumId: 5,
      title: '博物馆5年度特展开幕',
      description: '博物馆5举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 14,
      museumId: 5,
      title: '博物馆5新数字化服务上线',
      description: '博物馆5推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 15,
      museumId: 5,
      title: '博物馆5举办文化活动',
      description: '博物馆5举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 6,
      museumId: 4,
      title: '秦兵马俑考古研究',
      author: '秦始皇陵附近博物馆考古部',
      date: '2023-11-20',
      type: 'book',
      description: '系统介绍秦兵马俑的考古发现和研究成果。',
      link: '#',
    },
    {
      id: 7,
      museumId: 5,
      title: '陕西历史文化研究',
      author: '陕西历史博物馆研究部',
      date: '2023-07-15',
      type: 'article',
      description: '对关中地区的历史文化进行程深入研究。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 4,
      museumId: 4,
      title: '兵马俑坑360度全景',
      description: '全方位展示兵马俑一号坑的壮观军阵，感受秦军威武',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 5,
      museumId: 5,
      title: '大唐长安城复原',
      description: '通过三维技术还原唐代长安城的繁华景象',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    4: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/9.webp',
        introduction:
          '秦始皇陵附近博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 372,
          exhibitions: 2,
          visitors: 65589,
        },

        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '秦始皇陵附近博物馆最具代表性的珍贵藏品',
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
            description: '系统展示秦始皇陵附近博物馆的核心馆藏与历史脉络',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/4.webp',
        introduction:
          '秦始皇陵附近博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 421,
          exhibitions: 2,
          visitors: 287883,
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
            description: '秦始皇陵附近博物馆独有的特色主题展览',
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
    5: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/6.webp',
        introduction:
          '陕西历史博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 441,
          exhibitions: 2,
          visitors: 87302,
        },
        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '陕西历史博物馆最具代表性的珍贵藏品',
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
            description: '系统展示陕西历史博物馆的核心馆藏与历史脉络',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/13.webp',
        introduction:
          '陕西历史博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 429,
          exhibitions: 2,
          visitors: 333273,
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
            description: '陕西历史博物馆独有的特色主题展览',
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
