import type { ProvinceData } from '@/typesOfPages/museum';

export const beijingData: ProvinceData = {
  code: 'Beijing',
  name: '北京',
  museums: [
    {
      id: 1,
      name: '故宫博物院',
      province: '北京',
      type: '历史博物馆',
      image:
        'https://ts2.tc.mm.bing.net/th/id/OIP-C.4gY8qfCoUR9xHYvKN21VJgHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3',
      description:
        '故宫博物院是中国明清两代的皇宫，旧称紫禁城，位于北京中轴线的中心。是中国古代宫廷建筑之精华，无与伦比的建筑杰作，世界上现存规模最大、保存最完整的木质结构古建筑群之一。',
      artifacts: 1863404,
      exhibitions: 50,
      visitors: 19000000,
      features: [
        '世界文化遗产',
        '国家AAAAA级旅游景区',
        '首批全国重点文物保护单位',
      ],
    },
    {
      id: 2,
      name: '中国科学技术馆',
      province: '北京',
      type: '科技博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '中国科学技术馆是中国唯一的国家级综合科技馆，是实施科教兴国战略和提高全民科学素质的大型科普基础设施。',
      artifacts: 20000,
      exhibitions: 30,
      visitors: 5000000,
      features: ['国家AAAAA级旅游景区', '全国科普教育基地'],
    },
  ],
  details: {
    1: {
      museumId: 1,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 8:30-17:00',
          stopEntryTime: '16:10',
          closeDay: '周一（法定节假日除外）',
          holidayNotice: '节假开放时间请关注公告',
        },
        ticket: {
          price: '免费',
          isFree: true,
          needReservation: true,
          idRequired: '身份证原件入馆',
          discountPolicy: ['未成年人、学生、老年人免费', '残疾人凭残疾证免票'],
        },
        rules: {
          allowed: ['拍照时请关闭闪光灯', '可携带饮用水'],
          forbidden: ['禁止携带宠物入馆', '禁止触摸展品', '禁止大声喧哗'],
        },
        transportation: {
          address: '北京市东城区景山前街4号',
          metro: '地铁1号线天安门东站、天安门西站',
          bus: '公交1、2、10、20、22、82、120、126、203、205、210、228路等',
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
          phone: '010-85007421',
          email: 'gugong@dpm.org.cn',
          complaintPhone: '010-85007420',
          website: 'https://www.dpm.org.cn',
        },
      },
      history:
        '故宫博物院建立于1925年，是在明、清两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆。故宫始建于明永乐四年（1406年），至永乐十八年（1420年）建成，是明清两朝二十四位皇帝的皇宫。1911年溥仪退位后，1914年政府将外朝部分辟为古物陈列所，1925年10月10日内廷部分正式命名为故宫博物院。',
      architecture:
        '故宫占地面积72万平方米，建筑面积约15万平方米，现有建筑980余座，房屋8700余间。故宫四周环有高10米的城墙和宽52米的护城河。城墙四面各设城门一座，南名午门，北称神武门，左右为东华门、西华门。故宫建筑沿着一条南北向的中轴线排列，左右对称，气势宏伟，规划严谨，极为壮观。',
      highlights:
        '故宫博物院馆藏文物总数达186万余件（套），其中一级文物8000余件。藏品分为25大类，包括书画、陶瓷、铜器、玉器、钟表、织绣、宫廷文物等。著名藏品有《清明上河图》、翠玉白菜、金瓯永固杯、散氏盘等。故宫还收藏有大量宫廷文物，如宫廷服饰、宫廷膳食、宫廷家具等。',
      education:
        "故宫博物院开展多种教育活动，包括专题讲座、亲子活动、文物体验课程等。定期举办'故宫讲坛'，邀请专家学者讲解故宫历史文化。开设'故宫课堂'，面向中小学生开展传统文化教育。举办'故宫文化季'活动，让更多人了解故宫文化。",
    },
    2: {
      museumId: 2,
      visitInfo: {
        openTime: {
          regularTime: '周二至周日 9:30-17:00',
          stopEntryTime: '16:30',
          closeDay: '周一闭馆（法定节假日除外）',
          holidayNotice: '节假日开放时间以官网公告为准',
        },
        ticket: {
          price: '主展厅30元/人，儿童科学乐园30元/人',
          isFree: false,
          needReservation: true,
          idRequired: '身份证原件入馆',
          discountPolicy: ['学生半价', '60岁以上老人免费', '残疾人免费'],
        },
        rules: {
          allowed: ['馆内可拍照', '可携带饮用水'],
          forbidden: [
            '禁止携带易燃易爆物品',
            '禁止在展厅内饮食',
            '禁止使用闪光灯拍摄展品',
          ],
        },
        transportation: {
          address: '北京市朝阳区北辰东路5号',
          metro: '地铁8号线奥林匹克公园站G口出行程行程程',
          bus: '公交82、83、85、86、466、484、510、538、607、617、645、673、观光3线等',
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
          phone: '010-59041000',
          email: 'service@cstm.org.cn',
          complaintPhone: '010-59041000',
          website: 'https://www.cstm.org.cn',
        },
      },
      history:
        "中国科学技术馆于1988年建成开放，是中国唯一的国家级综合科技博物馆。2009年新馆在北京奥林匹克公园内建成开放，占地面积约5.8公顷，建筑面积约10万平方米，是目前中国规模最大、功能最完善的综合性科技场馆。馆内设有'科学乐园'、'华夏之光'、'探索与发现'、'科技与生活'、'挑战与未来'五大主题展厅。",
      architecture:
        "新馆建筑设计融合了中国传统建筑元素与现代科技理念，外观呈不对称的'拼图'造型，寓意科学的严谨与探索精神。建筑体量宏大，由若干个相互咬合的块体组成，象征着不同学科领域的交叉融合。建筑采用绿色环保设计，获得国家绿色建筑三星认证。",
      highlights:
        "馆藏涵盖自然科学、工具具程技术、生命科学等多个领域，拥有大量互动式科普展品。常设展览包括中国古代科技发明展示区（四大发明、天文仪器等）、航空航天展区（神舟飞船模型、空间站模型）、机器人展区等。'华夏之光'展厅系统展示了中国古代在数学、天文、医学、农学等方面的卓越成就。",
      education:
        "定期举办'中科馆大讲堂'科普讲座，邀请院士专家面向公众开展科学教育。开设'科学体验营'、'小小科学家'等青少年品牌活动。每年举办'全国科技活动周'主场活动、'科普日'大型主题活动，年接待观众超过500万人次。",
    },
  },
  artifacts: [
    {
      id: 1,
      museumId: 1,
      name: '清明上河图',
      period: '北宋',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '北宋画家张择端创作的风俗画，描绘了汴京（今开封）的繁华景象，是中国十大传世名画之一，具有极高的艺术价值和历史研究价值。',
      basicInfo: {
        periodDetail: '公元960年–1127年',
        material: '纸本设色',
        dimensions: '70×471厘米（长卷）',
        collection: '故宫博物院',
        excavation: '原为清宫旧藏',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元960年–1127年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 2,
      museumId: 1,
      name: '翠玉白菜',
      period: '清代',
      category: '玉器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '清代巧雕玉器精品，工具匠巧妙利用玉石天然色泽雕刻成白菜造型，寓意清白廉洁，是清代玉雕艺术的杰出行程代表。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '纸本设色',
        dimensions: '高7宽6厚3厘米',
        collection: '故宫博物院',
        excavation: '原为清宫旧藏',
      },
      appearance: `整器造型精美别致，选料上乘，质地温润细腻。工具匠巧妙利用玉石天然色泽进行程设计雕刻，整体造型逼真自然。表面抛光莹润，光泽柔和含蓄，展现出行程高超的玉雕技艺和独特的审美情趣。`,
      historicalValue: `此玉器代表了公元1636年–1912年玉雕艺术的最高水平，体现了中华民族数千年来对玉文化的崇尚与追求。`,
    },
    {
      id: 3,
      museumId: 1,
      name: '金瓯永固杯',
      period: '清代',
      category: '金银器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '清代皇帝元旦开笔仪式专用酒店杯，以黄金錾刻花纹并镶嵌珠宝，象征江山永固，是清代金银工具艺的巅峰之作。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '纸本设色',
        dimensions: '高6重159克',
        collection: '故宫博物院',
        excavation: '原为清宫旧藏',
      },
      appearance: `器物金光灿灿，工具艺精湛绝伦。通体以贵金属打造，錾刻花纹细密精美，镶嵌珍珠宝石光彩夺目。尽显皇家气派与奢华风范。`,
      historicalValue: `此文物是公元1636年–1912年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 4,
      museumId: 1,
      name: '散氏盘',
      period: '西周',
      category: '青铜器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '西周晚期青铜礼器，盘内铸有长篇铭文，记载了散国与矢国的土地割让契约，是研究西周土地制度和金文书法的重要实物资料。',
      basicInfo: {
        periodDetail: '约公元前1046年–前771年',
        material: '纸本设色',
        dimensions: '高37口径30厘米',
        collection: '故宫博物院',
        excavation: '原为清宫旧藏',
      },
      appearance: `器身厚重庄严，造型雄伟壮观。通体满布精美的兽面纹、夔龙纹等装饰图案，纹饰层次分明，立体感强烈。铸造工具艺极为精湛，范线清晰可见，显示出行程当时高超的青铜冶铸技术。`,
      historicalValue: `此器是约公元前1046年–前771年青铜文明的杰出行程代表，对于研究当时的礼乐制度、宗教信仰、冶金技术等方面具有不可替代的重要价值。`,
    },
    {
      id: 83,
      museumId: 1,
      name: '千里江山图',
      period: '北宋',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '北宋青年画家王希孟传世孤品，以青绿山水技法描绘壮丽河山，是中国绘画史上最杰出行程的山水画作品之一，艺术价值极高。',
      basicInfo: {
        periodDetail: '公元960年–1127年',
        material: '纸本设色',
        dimensions: '65×845厘米（长卷）',
        collection: '故宫博物院',
        excavation: '原为清宫旧藏',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为公元960年–1127年的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 84,
      museumId: 1,
      name: '各种釉彩大瓶',
      period: '清代',
      category: '陶瓷器',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '清代乾隆时期集多种釉彩于一器的瓷器杰作，汇集了釉下彩、釉上彩等多种装饰技法，被誉为"瓷母"，代表了中国古代制瓷技术的最高水平。',
      basicInfo: {
        periodDetail: '公元1636年–1912年',
        material: '纸本设色',
        dimensions: '高19口径13厘米',
        collection: '故宫博物院',
        excavation: '原为清宫旧藏',
      },
      appearance: `器形端正秀美，胎体轻薄坚致。釉面莹润光滑，色泽纯正明亮。通体施以精美釉彩，纹饰绘制精细生动，色彩搭配协调雅致，是同类瓷器中的精品之作。`,
      historicalValue: `此瓷器是公元1636年–1912年陶瓷工具艺集大成者的杰作，代表了中国古代制瓷技术的最高成就。`,
    },
    {
      id: 5,
      museumId: 2,
      name: '神舟飞船模型',
      period: '当代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/1.webp',
      description:
        '中国载人航天工具程"神舟"飞船的仿真模型，展示了中国航天事业的辉煌成就和航天科技的最新发展。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '传统手工具材质',
        dimensions: '34×11×15厘米',
        collection: '国家级博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是1949年至今历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 6,
      museumId: 2,
      name: '天宫空间站模型',
      period: '当代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '中国"天宫"空间站的精密模型，展示了中国载人航天工具程的重大突破和中国在太空探索领域的科技实力。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '传统手工具材质',
        dimensions: '35×17×9厘米',
        collection: '国家级博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是1949年至今历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 85,
      museumId: 2,
      name: '嫦娥五号月球样品',
      period: '当代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '嫦娥五号探测器从月球带回的月壤样品，是中国首次实现月球采样返回任务的重要成果，具有极高的科学研究价值。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '传统手工具材质',
        dimensions: '16×5×5厘米',
        collection: '国家级博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是1949年至今历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 86,
      museumId: 2,
      name: '蛟龙号载人潜水器模型',
      period: '当代',
      category: '科技文物',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '中国自主研制的"蛟龙号"载人潜水器模型，创造了深潜纪录，展示了中国深海探测技术的重大成就。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '传统手工具材质',
        dimensions: '8×8×11厘米',
        collection: '国家级博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是1949年至今历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
  ],
  activities: [
    {
      id: 1,
      museumId: 1,
      title: '故宫博物院年度特展',
      description: '探索故宫珍藏的国家级文物，了解中国古代文化的博大精深',
      date: '2024-05-01 至 2024-08-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 2,
      museumId: 1,
      title: '故宫建筑建成600周年纪念活动',
      description: '庆祝故宫建筑建成600周年，举办系列文化活动和学术论坛',
      date: '2024-09-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 3,
      museumId: 1,
      title: '故宫夜游活动',
      description: '夜间开放故宫，体验不一样的故宫夜景风情',
      date: '2024-10-01 至 2024-10-07',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 4,
      museumId: 2,
      title: '中国科学技术馆科技节',
      description: '主办科技节活动，展示前沿科技成果和互动体验',
      date: '2024-07-15 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 5,
      museumId: 2,
      title: '青少年科技创新大赛',
      description: '面向全国青少年的科技创新竞赛活动',
      date: '2024-11-01 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 6,
      museumId: 2,
      title: '机器人编程体验营',
      description: '青少年机器人编程和人工具智能体验活动',
      date: '2024-08-01 至 2024-08-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 1,
      museumId: 1,
      name: '故宫文创笔记本',
      description: '以故宫建筑为设计元素的精美笔记本',
      price: 68,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 2,
      museumId: 1,
      name: '宫廷御扇',
      description: '仿清代宫廷折扇，工具艺精美',
      price: 128,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '工具艺饰品',
    },
    {
      id: 3,
      museumId: 1,
      name: '故宫猫系列玩偶',
      description: '以故宫御猫为原型的可爱玩偶',
      price: 88,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 108,
      museumId: 1,
      name: '千里江山图丝巾',
      description:
        '以《千里江山图》青绿山水为主题的长款真丝丝巾，采用数码印花技术还原原作色彩',
      price: 298,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '服饰配饰',
    },
    {
      id: 109,
      museumId: 1,
      name: '故宫脊兽书签套装',
      description: '以太和殿屋顶十只脊兽为造型的金属书签礼盒套装',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 4,
      museumId: 2,
      name: '航天模型套装',
      description: '中国航天器模型，科普教育精品',
      price: 168,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
    {
      id: 5,
      museumId: 2,
      name: '科学实验盒',
      description: '青少年科学实验套装，寓教于乐',
      price: 98,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 6,
      museumId: 2,
      name: '机器人拼装玩具',
      description: '智能机器人DIY拼装套件',
      price: 238,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '玩具益智',
    },
    {
      id: 110,
      museumId: 2,
      name: '嫦娥五号月球模型',
      description: '嫦娥五号探测器1:20比例仿真模型，附详细科普说明手册',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '模型摆件',
    },
  ],
  exhibitions: [

    {
      id: 1,
      museumId: 1,
      title: '故宫珍宝馆常设展',
      description: '展示故宫珍藏的金银器、玉器、珐琅等珍贵文物',
      date: '2024-01-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '故宫博物院珍宝馆',
      status: '热门',
      category: '综合',
      curator: '故宫博物院',
      scale: '300余件珍品',
      visitors: 500000,
      background:
        '故宫珍宝馆位于宁寿宫皇极殿东西庑房，是故宫博物院的重要常设展馆之一。馆内珍藏的金银器、玉器、珐琅、盆景等珍品，均为清代宫廷御用器物，代表了清代工具艺的最高水平。这些珍宝大多出行程自清宫造办处，由全国最优秀的工具匠精心制作，体现了皇家的审美趣味与奢华生活。',
    },

    {
      id: 2,
      museumId: 1,
      title: '清代宫廷书画展',
      description: '展示清代宫廷收藏的历代书画精品',
      date: '2024-03-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '故宫博物院文华殿',
      status: '热门',
      category: '艺术精品',
      curator: '故宫博物院书画部',
      scale: '120余幅书画作品',
      visitors: 320000,
      background:
        '清代宫廷书画收藏是中国历史上最重要的皇家收藏之一。乾隆皇帝尤其喜爱书画，不仅大量收藏历代名迹，还组织宫廷画家临摹复制，并亲自题跋鉴赏。本次展出行程的书画作品涵盖了山水、花鸟、人物等多个题材，既有历代名家真迹，也有清代宫廷画家的精品力作，展现了清代宫廷书画艺术的辉煌成就。',
    },

    {
      id: 102,
      museumId: 1,
      title: '千里江山图——青绿山水特展',
      description:
        '展出行程北宋王希孟《千里江山图》及历代青绿山水画精品，解读青绿山水画的传承与发展',
      date: '2024-06-01 - 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '故宫博物院午门展厅',
      status: '即将结束',
      category: '历史文化',
      curator: '故宫博物院古书画研究中心',
      scale: '86件（套）文物',
      visitors: 680000,
      background:
        '《千里江山图》是北宋画家王希孟的传世名作，也是中国青绿山水画的巅峰之作。该画以青绿重彩描绘千里江山，气势恢宏，细节精致。本次特展以《千里江山图》为核心，汇集历代青绿山水画精品，展现青绿山水画从唐宋至明清的传承与发展，揭示这一独特绘画形式的艺术魅力与文化内涵。',
    },

    {
      id: 3,
      museumId: 2,
      title: '中国古代科技发明展',
      description: '系统展示中国古代四大发明及其他重要科技成就',
      date: '2024-04-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '中国科学技术馆主展厅',
      status: '热门',
      category: '科技考古',
      curator: '中国科学技术馆',
      scale: '200余件（套）展品',
      visitors: 450000,
      background: '中国古代科技文明灿烂辉煌,造纸术、印刷术、火药、指南针四大发明对世界文明进程产生了深远影响。本次展览通过实物模型、互动装置和多媒体演示,系统展示中国古代在天文历法、数学、医学、农学、冶金、建筑等领域的卓越成就。从张衡地动仪到郭守敬授时历,展现中华民族的智慧和创造力。',
    },

    {
      id: 4,
      museumId: 2,
      title: '航天科技展',
      description: '展示中国航天事业的发展历程和最新成就',
      date: '2024-06-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '中国科学技术馆航天展厅',
      status: '最新',
      category: '科技考古',
      curator: '中国航天科技集团',
      scale: '150余件（套）展品',
      visitors: 380000,
      background:
        '中国航天事业始于20世纪50年代，经过几代航天人的不懈努力，已跻身世界航天强国之列。从东方红一号卫星的成功发射，到载人航天工具程的突破性进展，再到探月工具程的顺利实施，中国航天不断创造新的辉煌。本次展览通过大量实物模型、珍贵影像，展现中国航天事业的发展历程与伟大成就。',
    },

    {
      id: 103,
      museumId: 2,
      title: '深海探索——蛟龙号成就展',
      description: "展示中国载人潜水器'蛟龙号'的研发历程和深海科考成果",
      date: '2024-09-01 - 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '中国科学技术馆海洋展区',
      status: '热门',
      category: '科技考古',
      curator: '国家深海基地管理中心',
      scale: '80余件（套）展品',
      visitors: 290000,
      background:
        '蛟龙号载人潜水器是中国自主研发的深海探测设备，最大下潜深度达7062米，标志着中国深海探测技术跻身世界前列。本次展览展示了蛟龙号的研发历程、技术特点及科考成果，包括在深海发现的奇特生物、地质样本等珍贵资料，展现了中国深海探索事业的伟大成就。',
    },

  ],
  news: [
    {
      id: 1,
      museumId: 1,
      title: '故宫博物院新馆开馆',
      description: '故宫博物院新馆正式开放，展示更多珍贵文物',
      date: '2024-04-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 2,
      museumId: 1,
      title: '故宫文物数字化工具程启动',
      description: '故宫博物院启动大规模文物数字化工具程，让更多人在线欣赏国宝',
      date: '2024-05-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 3,
      museumId: 1,
      title: '故宫博物院获赠珍贵文物',
      description: '故宫博物院接受社会捐赠，新获多件珍贵文物',
      date: '2024-06-10',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 4,
      museumId: 2,
      title: '中国科学技术馆人工具智能展厅升级',
      description: '中国科学技术馆人工具智能主题展厅升级，展示AI技术的最新发展',
      date: '2024-07-05',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 5,
      museumId: 2,
      title: '科技馆新增互动体验区',
      description: '中国科学技术馆新增多个互动体验区域，提升参观体验',
      date: '2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 6,
      museumId: 2,
      title: '科技馆荣获科普教育基地称号',
      description: '中国科学技术馆荣获全国科普教育基地称号',
      date: '2024-09-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 1,
      museumId: 1,
      title: '故宫建筑历史研究',
      author: '故宫博物院研究部',
      date: '2023-10-15',
      type: 'book',
      description: '系统研究故宫宫殿的建造历史、设计理念和保护技术。',
      link: '#',
    },
    {
      id: 2,
      museumId: 1,
      title: '清代宫廷文物研究',
      author: '故宫博物院文物部',
      date: '2023-08-20',
      type: 'article',
      description: '对清代宫廷文物的分类、年代和工具艺进行程深入研究。',
      link: '#',
    },
    {
      id: 3,
      museumId: 2,
      title: '中国古代科技发明展览',
      author: '中国科学技术馆研究部',
      date: '2023-12-01',
      type: 'book',
      description: '系统介绍中国古代科技发明的历史和影响。',
      link: '#',
    },
    {
      id: 4,
      museumId: 2,
      title: '现代科技发展趋势',
      author: '中国科学技术馆发展部',
      date: '2024-03-15',
      type: 'video',
      description: '专家讲解现代科技的发展趋势和未来展望。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 1,
      museumId: 1,
      title: 'VR故宫全景漫游',
      description: '通过虚拟现实技术，身临其境游览故宫三大殿和御花园',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 2,
      museumId: 2,
      title: '太空探索VR体验',
      description: '模拟宇航员进入太空站，体验失重状态和太空行程走',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    1: [
      {
        id: 'bj-gugong-treasure',
        name: '珍宝馆',
        icon: '💎',
        category: '宫廷珍宝',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/8.webp',
        introduction:
          '展示故宫珍藏的金银器、玉器、珐琅等宫廷珍品，尽显皇家奢华风范与清代工具艺的巅峰水平。',
        stats: {
          artifacts: 300,
          exhibitions: 2,
          visitors: 500000,
        },
        location: '宁寿宫皇极殿东西庑房',
        openTime: '周二至周日 8:30-17:00（16:10停止入馆）',
        duration: '1-1.5小时',
        ticket: '包含在故宫大门票内',
        artifacts: [
          {
            name: '金瓯永固杯',
            period: '清代',
            description: '乾隆皇帝元旦开笔专用酒店杯，镶嵌珠宝，象征江山永固',
            image: '',
          },
          {
            name: '大禹治水玉山',
            period: '清代',
            description: '重达5000余公斤的巨型玉雕，刻画大禹治水场景',
            image: '',
          },
          {
            name: '金嵌珠石金瓯永固杯',
            period: '清代',
            description: '以黄金錾刻花纹并镶嵌珍珠宝石的皇家珍品',
            image: '',
          },
          {
            name: '铜镀金写字人钟',
            period: '清代',
            description: '西洋钟表精品，机械人可书写汉字',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '宫廷珍宝常设展',
            date: '常设展览',
            description: '清代宫廷金银器、玉器、珐琅精品',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['珍宝', '常设'],
          },
          {
            title: '皇家钟表珍藏展',
            date: '常设展览',
            description: '清宫收藏的中外钟表精品',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['钟表', '宫廷'],
          },
        ],
        recommendations: [
          {
            icon: '🎧',
            title: '珍宝馆语音导览',
            desc: '专业讲解员深度解读宫廷珍品',
            type: '音频',
          },
          {
            icon: '📸',
            title: '珍宝高清图集',
            desc: '近距离欣赏宫廷瑰宝细节',
            type: '数字',
          },
        ],
      },
      {
        id: 'bj-gugong-painting',
        name: '书画馆',
        icon: '🎨',
        category: '书画艺术',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/9.webp',
        introduction:
          '典藏中国历代书画精品，从晋唐宋元到明清，涵盖山水、花鸟、人物各流派，展现中华书画艺术的博大精深。',
        stats: {
          artifacts: 450,
          exhibitions: 3,
          visitors: 420000,
        },
        location: '武英殿、文华殿',
        openTime: '周二至周日 8:30-17:00',
        duration: '1.5-2小时',
        ticket: '包含在故宫大门票内',
        artifacts: [
          {
            name: '清明上河图',
            period: '北宋',
            description: '张择端传世名作，描绘汴京繁华景象',
            image: '',
          },
          {
            name: '千里江山图',
            period: '北宋',
            description: '王希孟青绿山水画巅峰之作',
            image: '',
          },
          {
            name: '韩熙载夜宴图',
            period: '五代',
            description: '顾闳中传世名迹，刻画南唐贵族生活',
            image: '',
          },
          {
            name: '洛神赋图',
            period: '东晋',
            description: '顾恺之根据曹植《洛神赋》创作',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '千里江山图特展',
            date: '2024-06-01 - 2024-09-30',
            description: '青绿山水画专题展览',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['书画', '特展'],
          },
        ],
        recommendations: [
          {
            icon: '🔍',
            title: '书画高清鉴赏',
            desc: '放大细节欣赏笔墨神韵',
            type: '互动',
          },
          {
            icon: '📖',
            title: '书画艺术讲座',
            desc: '专家解读历代书画流派',
            type: '活动',
          },
        ],
      },
    ],
    2: [
      {
        id: 'bj-cstm-space',
        name: '航天探索馆',
        icon: '🚀',
        category: '航天科技',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/8.webp',
        introduction:
          '展示中国航天事业从无到有、从弱到强的辉煌历程，从东方红一号到天宫空间站，见证中国航天的伟大征程。',
        stats: {
          artifacts: 200,
          exhibitions: 2,
          visitors: 380000,
        },
        location: '挑战与未来展厅',
        openTime: '周二至周日 9:30-17:00（16:30停止入馆）',
        duration: '1-1.5小时',
        ticket: '主展厅30元/人',
        artifacts: [
          {
            name: '神舟飞船模型',
            period: '当代',
            description: '中国载人飞船1:10精密模型',
            image: '',
          },
          {
            name: '天宫空间站模型',
            period: '当代',
            description: '中国空间站组合体仿真模型',
            image: '',
          },
          {
            name: '嫦娥五号月球样品',
            period: '当代',
            description: '中国首次月球采样返回样品',
            image: '',
          },
          {
            name: '长征系列火箭模型',
            period: '当代',
            description: '中国运载火箭家族完整展示',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '中国载人航天成就展',
            date: '常设展览',
            description: '从神舟到天宫的航天征程',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['航天', '常设'],
          },
          {
            title: '探月工具程成果展',
            date: '常设展览',
            description: '嫦娥工具程的科学发现与技术突破',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['探月', '科技'],
          },
        ],
        recommendations: [
          {
            icon: '🥽',
            title: 'VR太空漫步',
            desc: '虚拟现实体验宇航员太空行程走',
            type: '互动',
          },
          {
            icon: '🎮',
            title: '航天器驾驶模拟',
            desc: '模拟飞船对接与空间站操作',
            type: '互动',
          },
        ],
      },
      {
        id: 'bj-cstm-ancient',
        name: '华夏之光馆',
        icon: '📜',
        category: '古代科技',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/9.webp',
        introduction:
          '系统展示中国古代科技文明的辉煌成就，四大发明、天文历法、医学农学、冶金建筑，彰显中华民族的智慧与创造力。',
        stats: {
          artifacts: 350,
          exhibitions: 3,
          visitors: 450000,
        },
        location: '华夏之光展厅',
        openTime: '周二至周日 9:30-17:00',
        duration: '1.5-2小时',
        ticket: '主展厅30元/人',
        artifacts: [
          {
            name: '地动仪复原模型',
            period: '东汉',
            description: '张衡发明的候风地动仪复原',
            image: '',
          },
          {
            name: '水运仪象台模型',
            period: '北宋',
            description: '苏颂创制的天文钟楼',
            image: '',
          },
          {
            name: '指南针演变展示',
            period: '战国至宋',
            description: '从司南到罗盘的发展历程',
            image: '',
          },
          {
            name: '活字印刷术演示',
            period: '北宋',
            description: '毕昇活字印刷互动体验',
            image: '',
          },
        ],
        exhibitions: [
          {
            title: '中国古代四大发明',
            date: '常设展览',
            description: '造纸、印刷、火药、指南针的伟大创造',
            status: 'ongoing',
            statusText: '正在展出行程',
            image: '',
            tags: ['四大发明', '常设'],
          },
        ],
        recommendations: [
          {
            icon: '🔧',
            title: '古代机械互动',
            desc: '亲手操作古代科技装置',
            type: '互动',
          },
          {
            icon: '📚',
            title: '科技史讲座',
            desc: '专家讲解中国古代科技成就',
            type: '活动',
          },
        ],
      },
    ],
  },
};