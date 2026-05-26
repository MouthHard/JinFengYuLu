import type { Museum } from "@/typesOfPages/museum/index";

// 按省份分组的博物馆数据 - 便于管理和批量添加
export const museumsByProvince: Record<string, Museum[]> = {
  Beijing: [
    {
      id: 1,
      name: "故宫博物院",
      province: "北京",
      type: "历史博物馆",
      image:
        "https://ts2.tc.mm.bing.net/th/id/OIP-C.4gY8qfCoUR9xHYvKN21VJgHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "故宫博物院是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。是中国古代宫廷建筑之精华，无与伦比的艺术宝库，世界上现存规模最大、保存最为完整的木质结构古建筑之一。",
      artifacts: 1863404,
      exhibitions: 50,
      visitors: 19000000,
      features: [
        "世界文化遗产",
        "国家AAAAA级旅游景区",
        "首批全国重点文物保护单位",
      ],
    },
    {
      id: 2,
      name: "中国科学技术馆",
      province: "北京",
      type: "科技博物馆",
      image:
        "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
      description:
        "中国科学技术馆是中国唯一的国家级综合性科技馆，是实施科教兴国战略和人才强国战略、提高全民科学素质的大型科普基础设施。",
      artifacts: 20000,
      exhibitions: 30,
      visitors: 5000000,
      features: ["国家AAAAA级旅游景区", "全国科普教育基地"],
    },
  ],
  Shanghai: [
    {
      id: 3,
      name: "上海博物馆",
      province: "上海",
      type: "艺术博物馆",
      image:
        "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
      description:
        "上海博物馆是一座大型的中国古代艺术博物馆，馆藏文物近百万件，其中精品文物12万件，尤以青铜器、陶瓷器、书法、绘画为特色。",
      artifacts: 1000000,
      exhibitions: 40,
      visitors: 8000000,
      features: ["国家AAAAA级旅游景区", "首批国家一级博物馆"],
    },
  ],
  Shaanxi: [
    {
      id: 4,
      name: "秦始皇兵马俑博物馆",
      province: "陕西",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop",
      description:
        '秦始皇兵马俑博物馆位于陕西省西安市临潼区，是中国第一个封建皇帝秦始皇嬴政的陵园中一处大型从葬坑，被誉为"世界第八大奇迹"。',
      artifacts: 8000,
      exhibitions: 10,
      visitors: 7000000,
      features: [
        "世界文化遗产",
        "国家AAAAA级旅游景区",
        "首批全国重点文物保护单位",
      ],
    },
    {
      id: 5,
      name: "陕西历史博物馆",
      province: "陕西",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "陕西历史博物馆是中国第一座大型现代化国家级博物馆，馆藏文物171万余件，上起远古人类初始阶段，下至近代社会。",
      artifacts: 1710000,
      exhibitions: 45,
      visitors: 5500000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Jiangsu: [
    {
      id: 6,
      name: "南京博物院",
      province: "江苏",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "南京博物院是中国三大博物馆之一，其前身是1933年蔡元培等倡建的国立中央博物院，是中国创建最早的博物馆。",
      artifacts: 420000,
      exhibitions: 40,
      visitors: 6000000,
      features: ["国家AAAAA级旅游景区", "首批国家一级博物馆"],
    },
  ],
  Henan: [
    {
      id: 7,
      name: "河南博物院",
      province: "河南",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "河南博物院是中国建立较早的博物馆之一，也是首批国家一级博物馆。馆藏文物17万余件，以史前文物、商周青铜器、历代陶瓷器、玉器及石刻最具特色。",
      artifacts: 170000,
      exhibitions: 35,
      visitors: 4000000,
      features: ["国家AAAA级旅游景区", "首批国家一级博物馆"],
    },
  ],
  Zhejiang: [
    {
      id: 8,
      name: "浙江省博物馆",
      province: "浙江",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "浙江省博物馆是浙江省内最大的集收藏、陈列、研究于一体的综合性人文科学博物馆，馆藏文物及标本十万余件。",
      artifacts: 100000,
      exhibitions: 25,
      visitors: 3500000,
      features: ["国家一级博物馆", "浙江省爱国主义教育基地"],
    },
  ],
  Hubei: [
    {
      id: 9,
      name: "湖北省博物馆",
      province: "湖北",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "湖北省博物馆坐落于湖北省武汉市武昌区东湖风景区，是国家一级博物馆，馆藏文物20万余件，其中国家一级文物945件。",
      artifacts: 200000,
      exhibitions: 30,
      visitors: 4500000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Hunan: [
    {
      id: 10,
      name: "湖南省博物馆",
      province: "湖南",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "湖南省博物馆是湖南省最大的历史艺术类博物馆，馆藏文物18万余件，尤以马王堆汉墓文物最具特色。",
      artifacts: 180000,
      exhibitions: 28,
      visitors: 3800000,
      features: ["国家一级博物馆", "全国科普教育基地"],
    },
  ],
  Sichuan: [
    {
      id: 11,
      name: "四川博物院",
      province: "四川",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "四川博物院是西南地区最大的综合性博物馆，馆藏文物26万余件，其中珍贵文物5万余件，以巴蜀青铜器、汉代画像砖最具特色。",
      artifacts: 260000,
      exhibitions: 32,
      visitors: 3200000,
      features: ["国家一级博物馆", "四川省爱国主义教育基地"],
    },
  ],
  Guangdong: [
    {
      id: 12,
      name: "广东省博物馆",
      province: "广东",
      type: "艺术博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "广东省博物馆是广东省唯一的省级综合博物馆，也是国家一级博物馆，馆藏文物16万余件，以岭南文化为特色。",
      artifacts: 160000,
      exhibitions: 26,
      visitors: 4200000,
      features: ["国家一级博物馆", "广东省爱国主义教育基地"],
    },
  ],
  Tianjin: [
    {
      id: 13,
      name: "天津博物馆",
      province: "天津",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "天津博物馆是一座历史艺术类综合性博物馆，馆藏文物20万余件，其中国家一级文物815件，以古代青铜器、玉器、书画为特色。",
      artifacts: 200000,
      exhibitions: 24,
      visitors: 2800000,
      features: ["国家一级博物馆", "全国科普教育基地"],
    },
  ],
  Chongqing: [
    {
      id: 14,
      name: "重庆中国三峡博物馆",
      province: "重庆",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "重庆中国三峡博物馆是保护、研究、展示重庆和三峡地区历史文化遗产的综合性博物馆，馆藏文物18万余件。",
      artifacts: 180000,
      exhibitions: 22,
      visitors: 2600000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Shandong: [
    {
      id: 15,
      name: "山东博物馆",
      province: "山东",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "山东博物馆是新中国成立后建立的第一座省级综合性地志博物馆，馆藏文物28万余件，以大汶口文化、龙山文化为特色。",
      artifacts: 280000,
      exhibitions: 30,
      visitors: 3600000,
      features: ["国家一级博物馆", "全国科普教育基地"],
    },
  ],
  Liaoning: [
    {
      id: 16,
      name: "辽宁省博物馆",
      province: "辽宁",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "辽宁省博物馆是一座综合性博物馆，馆藏文物12万余件，以红山文化玉器、辽代瓷器、清代书画最具特色。",
      artifacts: 120000,
      exhibitions: 20,
      visitors: 2200000,
      features: ["国家一级博物馆", "辽宁省爱国主义教育基地"],
    },
  ],
  Jilin: [
    {
      id: 17,
      name: "吉林省博物院",
      province: "吉林",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "吉林省博物院是一座历史与艺术博物馆，馆藏文物近10万件，以高句丽文物、渤海国文物、辽金文物为特色。",
      artifacts: 100000,
      exhibitions: 18,
      visitors: 1800000,
      features: ["国家一级博物馆", "吉林省爱国主义教育基地"],
    },
  ],
  Heilongjiang: [
    {
      id: 18,
      name: "黑龙江省博物馆",
      province: "黑龙江",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "黑龙江省博物馆是省级综合性博物馆，馆藏文物11万余件，以渤海国文物、金代文物、赫哲族文物为特色。",
      artifacts: 110000,
      exhibitions: 16,
      visitors: 1600000,
      features: ["国家一级博物馆", "黑龙江省爱国主义教育基地"],
    },
  ],
  Fujian: [
    {
      id: 19,
      name: "福建博物院",
      province: "福建",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "福建博物院是福建省最大的综合性博物馆，馆藏文物25万余件，以福建历史文物、海上丝绸之路文物为特色。",
      artifacts: 250000,
      exhibitions: 28,
      visitors: 3000000,
      features: ["国家一级博物馆", "全国科普教育基地"],
    },
  ],
  Anhui: [
    {
      id: 20,
      name: "安徽博物院",
      province: "安徽",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "安徽博物院是安徽省唯一的省级综合性博物馆，馆藏文物22万余件，以徽州文化、文房四宝为特色。",
      artifacts: 220000,
      exhibitions: 24,
      visitors: 2400000,
      features: ["国家一级博物馆", "安徽省爱国主义教育基地"],
    },
  ],
  Hebei: [
    {
      id: 21,
      name: "河北博物院",
      province: "河北",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "河北博物院是河北省省级综合性博物馆，馆藏文物24万余件，以满城汉墓出土文物、河北古代壁画为特色。",
      artifacts: 240000,
      exhibitions: 26,
      visitors: 2800000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Shanxi: [
    {
      id: 22,
      name: "山西博物院",
      province: "山西",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "山西博物院是山西省最大的综合性博物馆，馆藏文物50余万件，以晋国青铜器、北朝壁画、山西古建筑为特色。",
      artifacts: 500000,
      exhibitions: 32,
      visitors: 3200000,
      features: ["国家一级博物馆", "全国科普教育基地"],
    },
  ],
  Jiangxi: [
    {
      id: 23,
      name: "江西省博物馆",
      province: "江西",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "江西省博物馆是江西省最大的综合性博物馆，馆藏文物6万余件，以江西古代历史文物、革命文物为特色。",
      artifacts: 60000,
      exhibitions: 20,
      visitors: 1800000,
      features: ["国家一级博物馆", "江西省爱国主义教育基地"],
    },
  ],
  Guangxi: [
    {
      id: 24,
      name: "广西壮族自治区博物馆",
      province: "广西",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "广西壮族自治区博物馆是广西最大的综合性博物馆，馆藏文物5万余件，以铜鼓、壮族文物为特色。",
      artifacts: 50000,
      exhibitions: 18,
      visitors: 1500000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Hainan: [
    {
      id: 25,
      name: "海南省博物馆",
      province: "海南",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "海南省博物馆是海南省综合性博物馆，馆藏文物2万余件，以海南历史文物、南海水下文化遗产为特色。",
      artifacts: 20000,
      exhibitions: 15,
      visitors: 1200000,
      features: ["国家一级博物馆", "海南省爱国主义教育基地"],
    },
  ],
  Guizhou: [
    {
      id: 26,
      name: "贵州省博物馆",
      province: "贵州",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "贵州省博物馆是贵州省综合性博物馆，馆藏文物7万余件，以夜郎文化、贵州少数民族文物为特色。",
      artifacts: 70000,
      exhibitions: 18,
      visitors: 1400000,
      features: ["国家一级博物馆", "贵州省爱国主义教育基地"],
    },
  ],
  Yunnan: [
    {
      id: 27,
      name: "云南省博物馆",
      province: "云南",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "云南省博物馆是云南省最大的综合性博物馆，馆藏文物23万余件，以古滇国青铜器、南诏大理国文物、云南少数民族文物为特色。",
      artifacts: 230000,
      exhibitions: 25,
      visitors: 2000000,
      features: ["国家一级博物馆", "全国科普教育基地"],
    },
  ],
  Xizang: [
    {
      id: 28,
      name: "西藏博物馆",
      province: "西藏",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "西藏博物馆是西藏自治区综合性博物馆，馆藏文物5万余件，以藏族历史文物、宗教文物为特色。",
      artifacts: 50000,
      exhibitions: 16,
      visitors: 800000,
      features: ["国家一级博物馆", "西藏自治区爱国主义教育基地"],
    },
  ],
  Gansu: [
    {
      id: 29,
      name: "甘肃省博物馆",
      province: "甘肃",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "甘肃省博物馆是甘肃省综合性博物馆，馆藏文物35万余件，以丝绸之路文物、彩陶、汉简为特色。",
      artifacts: 350000,
      exhibitions: 28,
      visitors: 2500000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Qinghai: [
    {
      id: 30,
      name: "青海省博物馆",
      province: "青海",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "青海省博物馆是青海省综合性博物馆，馆藏文物4万余件，以青海历史文物、民族文物为特色。",
      artifacts: 40000,
      exhibitions: 14,
      visitors: 1000000,
      features: ["国家一级博物馆", "青海省爱国主义教育基地"],
    },
  ],
  Neimenggu: [
    {
      id: 31,
      name: "内蒙古博物院",
      province: "内蒙古",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "内蒙古博物院是内蒙古自治区综合性博物馆，馆藏文物15万余件，以匈奴、鲜卑、契丹、蒙古等北方民族文物为特色。",
      artifacts: 150000,
      exhibitions: 22,
      visitors: 2200000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Ningxia: [
    {
      id: 32,
      name: "宁夏博物馆",
      province: "宁夏",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "宁夏博物馆是宁夏回族自治区综合性博物馆，馆藏文物4万余件，以贺兰山岩画、西夏文物为特色。",
      artifacts: 40000,
      exhibitions: 16,
      visitors: 1200000,
      features: ["国家一级博物馆", "宁夏回族自治区爱国主义教育基地"],
    },
  ],
  Xinjiang: [
    {
      id: 33,
      name: "新疆维吾尔自治区博物馆",
      province: "新疆",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "新疆维吾尔自治区博物馆是新疆综合性博物馆，馆藏文物5万余件，以丝绸之路文物、新疆古代干尸为特色。",
      artifacts: 50000,
      exhibitions: 18,
      visitors: 1500000,
      features: ["国家一级博物馆", "全国爱国主义教育示范基地"],
    },
  ],
  Taiwan: [
    {
      id: 34,
      name: "台北故宫博物院",
      province: "台湾",
      type: "艺术博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "台北故宫博物院是台湾规模最大的博物馆，馆藏文物近70万件，以中国古代书画、陶瓷、青铜器为特色。",
      artifacts: 700000,
      exhibitions: 35,
      visitors: 5000000,
      features: ["世界知名博物馆", "中国古代艺术宝库"],
    },
  ],
  HongKong: [
    {
      id: 35,
      name: "香港历史博物馆",
      province: "香港",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "香港历史博物馆是香港最大的历史博物馆，展示了香港从远古到现代的历史发展，包括考古发现、民俗文化、自然历史等内容。",
      artifacts: 90000,
      exhibitions: 20,
      visitors: 1200000,
      features: ["香港最大历史博物馆", "常设展览「香港故事」"],
    },
    {
      id: 36,
      name: "香港艺术馆",
      province: "香港",
      type: "艺术博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "香港艺术馆是香港第一所公营艺术博物馆，馆藏包括中国书画、古代文物、香港艺术及当代艺术作品。",
      artifacts: 17000,
      exhibitions: 25,
      visitors: 800000,
      features: ["香港第一所公营艺术博物馆", "藏品涵盖古今中外"],
    },
  ],
  Macau: [
    {
      id: 37,
      name: "澳门博物馆",
      province: "澳门",
      type: "历史博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "澳门博物馆位于澳门历史城区的中心，展示了澳门数百年的历史变迁，包括中西文化交融的独特历史。",
      artifacts: 3000,
      exhibitions: 15,
      visitors: 500000,
      features: ["世界文化遗产地", "展示中西文化交融"],
    },
    {
      id: 38,
      name: "澳门艺术博物馆",
      province: "澳门",
      type: "艺术博物馆",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
      description:
        "澳门艺术博物馆是澳门最大的艺术博物馆，展示中国书画、西方绘画、澳门本土艺术作品等。",
      artifacts: 10000,
      exhibitions: 18,
      visitors: 350000,
      features: ["澳门最大艺术博物馆", "中西艺术精品荟萃"],
    },
  ],
};

// 扁平化数组 - 用于搜索、过滤等现有功能
export const museums: Museum[] = Object.values(museumsByProvince).flat();
