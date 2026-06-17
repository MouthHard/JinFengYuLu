import type { ProvinceData } from '@/typesOfPages/museum/index';

// 香港省份数据
export const hongkongData: ProvinceData = {
  code: 'HongKong',
  name: '香港',
  museums: [
    {
      id: 35,
      name: '香港历史博物馆',
      province: '香港',
      type: '历史博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '香港历史博物馆是香港最大的历史博物馆，展示了香港从远古到现代的历史发展，包括自然史、民俗史、本地史等内容。',
      artifacts: 90000,
      exhibitions: 20,
      visitors: 1200000,
      features: ['香港最大历史博物馆', '免费开放、适合亲子游'],
    },
    {
      id: 36,
      name: '香港艺术馆',
      province: '香港',
      type: '艺术博物馆',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '香港艺术馆是香港第一所公营美术馆，馆藏包括中国画、当代文物及现当代艺术品。',
      artifacts: 17000,
      exhibitions: 25,
      visitors: 800000,
      features: ['香港第一所公营美术馆', '定期举办中外展览'],
    },
  ],
  details: {
    35: {
      museumId: 35,
      visitInfo: {
        openTime: {
          regularTime: '星期一、三、四、日 10:00-18:00；星期五、六 10:00-20:00',
          stopEntryTime: '闭馆前一小时停止入场',
          closeDay: '星期二闭馆（公众假期除外）',
          holidayNotice: '公众假期开放时间请关注官网公告',
        },
        ticket: {
          price: '标准票HK$50；特别展览另购门票',
          isFree: false,
          needReservation: true,
          idRequired: '有效身份证件购票入场',
          discountPolicy: [
            '全日制学生/60岁及以上长者/残疾人士/综合社会保障援助受惠人士HK$25',
            '12岁以下儿童免票（须成人陪同）',
          ],
        },
        rules: {
          allowed: [
            '大部分展厅允许拍照（禁闪光灯、禁自拍杆、禁三脚架）',
            '可携带饮用水',
          ],
          forbidden: [
            '禁止携带大型行程程李',
            '禁止饮食（指定区域除外）',
            '禁止触摸展品玻璃',
            '部分借展文物禁止拍照',
          ],
        },
        transportation: {
          address: '香港九龙西九龙文化区博物馆道8号',
          metro: '港铁九龙站/柯士甸站C/D出行程行程程口，步行程程约5分钟',
          bus: '多条巴士路线直达西九龙文化区；中环/湾仔码头搭乘渡轮至西九龙文化区码头',
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
          phone: '+852-2205-0002',
          email: 'info@hkpalacemuseum.org.hk',
          complaintPhone: '+852-2205-0018',
          website: 'https://www.hkpalacemuseum.org.hk',
        },
      },
      history:
        "香港故宫文化博物馆于2022年7月3日正式对外开放，是由北京故宫博物院与香港特别行程程政区政府合作建立的文化设施，是庆祝香港回归祖国二十五周年的重点献礼项目。博物馆致力于展示中国文化艺术瑰宝，促进中外文化交流互鉴，同时立足香港、辐射粤港澳大湾区、面向国际社会讲述中国故事。开馆以来已举办多场高水平特展，包括'紫禁城与凡尔赛宫''凝视三星堆'等引起广泛关注的展览。",
      architecture:
        "香港故宫文化博物馆由著名建筑师严迅奇主持设计，建筑面积约3万平方米。建筑外观灵感源自中国传统建筑'上宽下窄'的造型特点，同时融入了现代建筑的空间组织手法。外立面采用金色铝质饰面，在不同光线下呈现丰富的色彩变化，寓意'金色殿堂'。建筑共七层，地面以上五层、地下两层，设有九个展厅（其中五个用于常设展览、四个用于特别展览），以及演讲厅、活动室、餐厅、商店等配套设施。",
      highlights:
        "常设展览'紫禁万象——建筑、典藏与文化传承'系统展示了北京故宫的建筑格局、典藏体系和宫廷生活；'紫禁一日——清代宫廷生活'通过精选文物还原了清代皇帝一天的生活场景；'凝土为器——故宫珍藏陶瓷'展出行程行程程故宫藏各朝代陶瓷精品；'龙姿凤韵——清代帝后饰品'展示清宫后妃的首饰珠宝；'同赏共乐——跨越香港收藏史'追溯香港私人收藏中国艺术品的历史脉络。开幕首展曾展出行程行程程166件来自北京故宫的国宝级文物，其中21件为国家一级文物。",
      education:
        "打造'香港故宫讲堂''中华文化研学''大湾区青少年交流'三大公教品牌。定期邀请海内外学者举办'故宫学'系列高端学术讲座。开设'清代宫廷礼仪体验''中国古代书画鉴赏''非遗工具具艺工具具作坊'等特色教育课程。与香港本地学校、社区机构紧密合作，推动中华文化在香港的传承与传播。每年举办'博物馆之夜''故宫文化季'等大型公共文化活动。",
    },
    36: {
      museumId: 36,
      visitInfo: {
        openTime: {
          regularTime:
            '每日 08:30-18:30（夜间延长开放至21:00，周五、周六限特定展区）',
          stopEntryTime: '闭馆前30分钟停止入场',
          closeDay: '全年开放（除夕下午闭馆）',
          holidayNotice: '夜间开放期间部分展厅可能关闭，详情请见官网公告',
        },
        ticket: {
          price: '普通新台币350元/人；学生新台币150元/人',
          isFree: false,
          needReservation: true,
          idRequired: '有效证件购票入场',
          discountPolicy: [
            '每月第一周的周六免费开放（需提前网络预约）',
            '65岁以上长者、身心障碍者及陪同者、军警人员免费',
            '持观光护照之外籍游客享优惠票价',
          ],
        },
        rules: {
          allowed: [
            '大部分展厅允许拍照（禁闪光灯、禁自拍杆、禁三脚架）',
            '可携带饮用水',
          ],
          forbidden: [
            '禁止携带大型行程程李或背包',
            '禁止饮食（指定餐饮区除外）',
            '禁止触摸展品玻璃',
            '特展区域以现场规定为准',
          ],
        },
        transportation: {
          address: '台湾台北市士林区至善路二段221号',
          metro: '台北捷运淡水信义线士林站，转乘红30路公交车至故宫博物院站',
          bus: '公交红13、红30、255、304、小18、小19路台北故宫博物院站',
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
          phone: '+886-2-2881-2021',
          email: 'service@npm.gov.tw',
          complaintPhone: '+886-2-2881-2021',
          website: 'https://www.npm.gov.tw',
        },
      },
      history:
        "台北故宫博物院成立于1965年，其前身是1925年在北京成立的故宫博物院古物陈列所。1933年为避日军战火，故宫文物南迁上海、南京，抗战期间辗转西南各省，1948年底至1949年初分三批运抵台湾。1962年开始在台北外双溪兴建馆舍，1965年建成开放。馆藏文物近70万件（套），其中绝大多数为原北京故宫的南迁文物，涵盖了中国五千年的文明精华，尤以商周青铜器、历代书画、宋代瓷器、古籍善本、玉器等为最负盛名的收藏领域，是世界四大博物馆之一。南部院区（嘉义太保）于2015年建成开放，形成'一院两区'格局。",
      architecture:
        "台北故宫博物院主院区建筑由中国传统宫殿式建筑风格演变而来，外观仿效北京故宫的样式，采用黄色琉璃瓦屋顶、朱红色门窗和米白色墙面，气势恢宏又不失典雅。主楼地上四层、地下一层，建筑面积约4.2万平方米。2018年至2021年完成了为期三年的'正馆扩建及整建工具具程'，新增了现代化的展览空间和公共服务设施。南部院区位于嘉义县太保市，建筑风格更为现代前卫，以'龙形'为设计概念，专注于亚洲艺术文化的展示与交流。",
      highlights:
        "镇馆之宝享誉全球：翠玉白菜（清代，利用翡翠天然色泽雕琢而成，菜叶上还停留着两只昆虫，巧夺天工具具）、肉形石（清代，一块天然形成的玛瑙石，色泽纹理酷似一块红烧东坡肉，令人叹为观止）、毛公鼎（西周晚期，铭文长达497字，是目前发现的铭文最长的青铜器）、《快雪时晴帖》（东晋王羲之行程程书法帖，被誉为'天下第一法书'）、《自叙帖》（唐代怀素草书狂草代表作）、《寒食帖》（苏轼行程程书代表作）、《华子冈图》（五代巨然山水画）、《溪山行程程旅图》（北宋范宽山水画巅峰之作）、《万壑松风图》（南宋李唐山水杰作）、《早春图》（郭熙北宋山水画代表作）。此外还收藏有大量宋代五大名窑瓷器、商周青铜礼器、历代玺印、古籍善本等稀世珍宝。",
      education:
        "打造'故宫讲坛''国宝赏析''故宫学研习营'三大公教品牌。常年举办'故宫系列讲座'，邀请两岸学者讲解文物背后的历史文化故事。开设'古画临摹''青铜器拓印''宋代茶道体验''清代宫廷服饰试穿'等沉浸式教育课程。推出行程行程程'夜游故宫''故宫奇幻夜'等特色参访项目。与台湾本地高校和研究机构密切合作，共同推进'故宫学'研究的发展。",
    },
  },
  artifacts: [
    {
      id: 75,
      museumId: 35,
      name: '李郑屋汉墓砖刻',
      period: '东汉',
      category: '砖画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '香港李郑屋汉墓出行程土的砖刻画像，刻有几何纹和吉祥图案，是研究汉代岭南地区建筑艺术和丧葬制度的重要实物资料。',
      basicInfo: {
        periodDetail: '公元25年–220年',
        material: '传统手工具材质',
        dimensions: '26×16×11厘米',
        collection: '首都博物馆',
        excavation: '出行程土于帝王陵墓或高级贵族墓葬',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元25年–220年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 76,
      museumId: 35,
      name: '宋皇台石刻拓片',
      period: '宋代',
      category: '书法',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '香港宋皇台遗址出行程土的宋代石刻拓片，记载了南宋末年历史事件，对于研究宋元之际的历史变迁和香港地方史具有重要价值。',
      basicInfo: {
        periodDetail: '公元960年–1279年',
        material: '传统手工具材质',
        dimensions: '29×7×15厘米',
        collection: '首都博物馆',
        excavation: '出行程土于古代都城遗址或寺院地宫',
      },
      appearance: `此件文物造型独特，工具艺精湛，保存状况良好。整体设计构思巧妙，制作工具艺细致入微，每一处细节都体现出行程匠人的用心与智慧。`,
      historicalValue: `此文物是公元960年–1279年历史文化的重要载体，对于研究当时的政治、经济、文化、科技、艺术等各方面都具有重要的参考价值。它见证了特定历史时期的社会发展和文明进程，是不可再生的文化遗产。`,
    },
    {
      id: 77,
      museumId: 36,
      name: '张大千泼彩山水图',
      period: '当代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '国画大师张大千晚年创作的泼彩山水画代表作，以泼墨泼彩技法融合传统与现代，气势磅礴，意境深远，展现了大师的艺术创新精神。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '纸本设色',
        dimensions: '63×475厘米（长卷）',
        collection: '苏州博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为1949年至今的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
    {
      id: 78,
      museumId: 36,
      name: '吴冠中江南水乡系列油画',
      period: '当代',
      category: '绘画',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      description:
        '著名画家吴冠中以江南水乡为题材创作的油画作品，将西方油画技法与中国传统美学完美结合，黑白灰的运用极具东方韵味，是现代中国画的经典之作。',
      basicInfo: {
        periodDetail: '1949年至今',
        material: '纸本设色',
        dimensions: '73×592厘米（长卷）',
        collection: '苏州博物馆',
        excavation: '经考古发掘或征集入库',
      },
      appearance: `此作构图严谨宏大，笔墨精妙绝伦。画面层次分明，远山近水错落有致，人物神态各异栩栩如生。用笔细腻而不失力度，敷色典雅而富有变化，充分展现了作者深厚的艺术功底。`,
      historicalValue: `此作为1949年至今的代表性艺术珍品，不仅具有极高的艺术价值，更是研究当时社会生活、城市风貌的第一手珍贵资料。其独特的艺术风格对后世产生了深远影响，被誉为"国之瑰宝"。`,
    },
  ],
  activities: [
    {
      id: 108,
      museumId: 35,
      title: '香港历史展览',
      description: '展示香港从远古到现代的历史发展',
      date: '2024-04-01 至 2024-10-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 109,
      museumId: 35,
      title: '香港文化讲座',
      description: '专家学者讲解香港的历史文化',
      date: '2024-05-15 至 2024-11-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 110,
      museumId: 35,
      title: '香港民俗文化体验',
      description: '展示香港传统民俗文化，展现香港的民间生活',
      date: '2024-08-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 111,
      museumId: 35,
      title: '港式奶茶文创包装',
      description: '以香港特色茶餐厅文化为灵感的港式文创产品包装',
      date: '2024-09-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 112,
      museumId: 36,
      title: '香港当代艺术展',
      description: '展示香港当代艺术家的作品，展现香港的艺术创新力',
      date: '2024-03-01 至 2024-09-30',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 113,
      museumId: 36,
      title: '当代艺术讲座',
      description: '以香港当代艺术为主题的精美笔记本',
      date: '2024-06-01 至 2024-12-31',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 114,
      museumId: 36,
      title: '水墨画书签套装',
      description: '以水墨画为设计元素的金属书签套装',
      date: '2024-07-01 至 2024-08-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  creativeProducts: [
    {
      id: 89,
      museumId: 35,
      name: '香港老街景立体贺卡',
      description: '复古香港街景3D立体纸雕贺卡',
      price: 38,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
    {
      id: 90,
      museumId: 35,
      name: '电车造型笔筒',
      description: '经典香港叮叮车造型桌面收纳笔筒',
      price: 48,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 146,
      museumId: 35,
      name: '香港电车造型储蓄罐',
      description: '以香港标志性叮叮车为造型的金属质感储蓄罐',
      price: 158,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 91,
      museumId: 36,
      name: '中西融合艺术画册',
      description: '收录香港艺术馆馆藏当代艺术作品的精装画册',
      price: 198,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '图书音像',
    },
    {
      id: 92,
      museumId: 36,
      name: '维港夜景帆布袋',
      description: '以香港维多利亚港夜景为设计元素的帆布袋',
      price: 55,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '生活日用',
    },
    {
      id: 147,
      museumId: 36,
      name: '维多利亚港风景油画明信片',
      description: '以香港维多利亚港为题材的手绘风格油画明信片套装',
      price: 45,
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      category: '文具办公',
    },
  ],
  exhibitions: [
    {
      id: 37,
      museumId: 35,
      title: '香港故事：从开埠到现代',
      description: '回顾香港从鸦片战争到回归的百年历史变迁',
      date: '2024-06-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '香港历史博物馆香港故事展厅',
      status: '热门',
      category: '历史文化',
      curator: '香港历史博物馆',
      scale: '900余件（套）展品',
      visitors: 420000,
      background: '香港自1841年开埠以来,经历了从小渔村到国际大都市的沧桑巨变。本次展览通过历史照片、文献档案、生活用品等实物,展现香港从鸦片战争、日占时期、战后重建到回归祖国的百年历程。展览特别关注香港市民的日常生活变迁,从茶楼文化、公共房屋到流行程文化,呈现香港独特的历史记忆和文化身份。',
    },
    {
      id: 38,
      museumId: 36,
      title: '中西艺术对话展',
      description: '呈现香港作为东西方艺术交流枢纽的独特地位与当代创作',
      date: '2024-11-01',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '香港艺术馆专题展厅',
      status: '筹备中',
      category: '艺术精品',
      curator: '香港艺术馆',
      scale: '180余件（套）艺术品',
      visitors: 0,
      background: '香港是东西方艺术交流的重要枢纽,20世纪以来吸引了众多中外艺术家在此创作。本次展览将展出行程张大千、林风眠等大师融合中西的作品,以及香港本土艺术家的当代创作。这些作品既传承了中国传统艺术的精髓,又吸收了西方现代艺术的理念,展现了香港独特的艺术生态和多元文化背景下的创作实践。',
    },
    {
      id: 371,
      museumId: 35,
      title: '香港故事：从渔村到大都会',
      description: '通过实物与多媒体，讲述香港从小渔村发展为国际大都市的历史变迁',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '香港历史博物馆主展厅',
      status: '热门',
      category: '历史文化',
      curator: '香港历史博物馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '香港从一个小渔村发展成为举世瞩目的国际大都市,这段历史充满了传奇色彩。本次展览通过考古出行程土文物、历史文献、老照片、生活实物等,配合多媒体互动技术,生动再现香港从史前时期、明清海防、开埠初期、战后腾飞到回归祖国的历史进程,展现香港人的拼搏精神和独特文化。',
    },
    {
      id: 372,
      museumId: 36,
      title: '香港当代艺术双年展精选',
      description: '汇集香港及国际当代艺术家作品，探讨都市生活与身份认同主题',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
      location: '香港艺术馆当代展厅',
      status: '最新',
      category: '艺术精品',
      curator: '香港艺术馆',
      scale: '200余件（套）文物',
      visitors: 150000,
      background: '香港当代艺术双年展是香港最重要的艺术盛事之一。本次精选展汇集香港本土及国际当代艺术家的优秀作品,涵盖绘画、雕塑、装置、影像等多种媒介。艺术家们以独特的视角探讨都市生活、文化身份、历史记忆等主题,反映了香港作为国际都市的多元文化特质和当代艺术的前沿探索。',
    }
  ],
  news: [
    {
      id: 163,
      museumId: 35,
      title: '博物馆35年度特展开幕',
      description: '博物馆35举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 164,
      museumId: 35,
      title: '博物馆35新数字化服务上线',
      description: '博物馆35推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 165,
      museumId: 35,
      title: '博物馆35举办文化活动',
      description: '博物馆35举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 166,
      museumId: 36,
      title: '博物馆36年度特展开幕',
      description: '博物馆36举办年度特展，展出行程珍贵文物和历史资料',
      date: '2024-06-15',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 167,
      museumId: 36,
      title: '博物馆36新数字化服务上线',
      description: '博物馆36推出行程数字化服务，提升参观体验',
      date: '2024-07-20',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 168,
      museumId: 36,
      title: '博物馆36举办文化活动',
      description: '博物馆36举办系列文化活动，传播历史文化知识',
      date: '2024-08-25',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  academicResources: [
    {
      id: 37,
      museumId: 35,
      title: '鸦片战争与香港开埠史料汇编',
      author: '香港中文大学历史系',
      date: '2023-06-01',
      type: 'book',
      description: '整理中英档案中关于香港早期历史的原始文献。',
      link: '#',
    },
    {
      id: 38,
      museumId: 36,
      title: '香港当代艺术发展脉络',
      author: '香港艺术馆策展部',
      date: '2023-10-20',
      type: 'article',
      description: '梳理二战以来香港视觉艺术的演进历程。',
      link: '#',
    },
  ],
  immersiveExperiences: [
    {
      id: 35,
      museumId: 35,
      title: '维港百年变迁时光隧道',
      description: '沉浸式穿越香港维多利亚港从渔村到国际大都市的百年历程',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
    {
      id: 36,
      museumId: 36,
      title: '中西艺术交融画廊',
      description: '虚拟画廊展示香港作为东西方艺术交汇点的代表性作品',
      image:
        'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/1.webp',
    },
  ],
  exhibitionHalls: {
    35: [
      {
        id: 'jiben',
        name: '基本陈列厅',
        icon: '🏛️',
        category: '综合陈列',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/0.webp',
        introduction:
          '香港历史博物馆的基本陈列展厅，系统展示本馆的核心馆藏与历史脉络，是了解该馆收藏的最佳起点。',
        stats: {
          artifacts: 428,
          exhibitions: 2,
          visitors: 317617,
        },

        location: '主展馆一层',
        openTime: '周二至周日 9:00-17:00（16:00停止入馆）',
        duration: '1-2小时',
        ticket: '免费（需提前网上预约）',
        artifacts: [
          {
            name: '镇馆之宝',
            period: '',
            description: '香港历史博物馆最具代表性的珍贵藏品',
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
            description: '系统展示香港历史博物馆的核心馆藏与历史脉络',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/0.webp',
        introduction:
          '香港历史博物馆的特色专题展厅，聚焦某一特定领域进行程深度展示，体现本馆的研究方向与收藏特色。',
        stats: {
          artifacts: 467,
          exhibitions: 2,
          visitors: 298324,
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
            description: '香港历史博物馆独有的特色主题展览',
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
    36: [
      {
        id: 'meishu',
        name: '美术精品展厅',
        icon: '🎨',
        category: '美术收藏',
        coverImage:
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/6.webp',
        introduction:
          '展示香港艺术馆收藏的中外美术精品，涵盖中国画、油画、雕塑、装置等多种艺术形式。',
        stats: {
          artifacts: 332,
          exhibitions: 2,
          visitors: 93264,
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
            description: '香港艺术馆核心藏品的定期展示',
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
          'https://mouthhard-website.oss-cn-hangzhoualiyuncs.com/landscape/8.webp',
        introduction:
          '不定期举办国内外艺术交流展览，引入前沿艺术理念与创作实践。',
        stats: {
          artifacts: 156,
          exhibitions: 2,
          visitors: 104104,
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

export default hongkongData;
