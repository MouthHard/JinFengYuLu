// 省份地势高度数据（单位：米）- 精确平均海拔
export const provinceElevation: Record<string, number> = {
  西藏自治区: 4737, // 最高海拔
  青海省: 4049,
  四川省: 2560,
  甘肃省: 2158,
  新疆维吾尔自治区: 1904,
  云南省: 1892,
  宁夏回族自治区: 1559,
  山西省: 1160,
  陕西省: 1130,
  贵州省: 1108,
  内蒙古自治区: 999,
  台湾省: 778,
  重庆市: 730,
  河北省: 509,
  福建省: 482,
  湖北省: 431,
  吉林省: 404,
  广西壮族自治区: 395,
  北京市: 365,
  湖南省: 357,
  黑龙江省: 313,
  浙江省: 303,
  江西省: 246,
  河南省: 246,
  辽宁省: 224,
  广东省: 218,
  安徽省: 195,
  海南省: 191,
  香港特别行政区: 121,
  山东省: 90,
  澳门特别行政区: 27,
  天津市: 22,
  江苏省: 15,
  上海市: 4,
  台湾: 778,
  南海诸岛: 0,
};

// 省份名称映射
export const provinceNameMap: Record<string, string> = {
  北京市: "北京",
  天津市: "天津",
  河北省: "河北",
  山西省: "山西",
  内蒙古自治区: "内蒙古",
  辽宁省: "辽宁",
  吉林省: "吉林",
  黑龙江省: "黑龙江",
  上海市: "上海",
  江苏省: "江苏",
  浙江省: "浙江",
  安徽省: "安徽",
  福建省: "福建",
  江西省: "江西",
  山东省: "山东",
  河南省: "河南",
  湖北省: "湖北",
  湖南省: "湖南",
  广东省: "广东",
  广西壮族自治区: "广西",
  海南省: "海南",
  重庆市: "重庆",
  四川省: "四川",
  贵州省: "贵州",
  云南省: "云南",
  西藏自治区: "西藏",
  陕西省: "陕西",
  甘肃省: "甘肃",
  青海省: "青海",
  宁夏回族自治区: "宁夏",
  新疆维吾尔自治区: "新疆",
  台湾省: "台湾",
  香港特别行政区: "香港",
  澳门特别行政区: "澳门",
  南海诸岛: "海南", // 南海诸岛归属海南省
};

// 省份颜色定义
export const provinceColors: Record<string, any> = {
  北京: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFD700" },
      { offset: 1, color: "#FF4500" },
    ],
  },
  台湾: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FF6B6B" },
      { offset: 1, color: "#EE5A24" },
    ],
  },
  天津: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#87CEEB" },
      { offset: 1, color: "#0000FF" },
    ],
  },
  河北: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#98FB98" },
      { offset: 1, color: "#008000" },
    ],
  },
  山西: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFB6C1" },
      { offset: 1, color: "#FF0066" },
    ],
  },
  内蒙古: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#DDA0DD" },
      { offset: 1, color: "#6600CC" },
    ],
  },
  辽宁: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFDAB9" },
      { offset: 1, color: "#FF4500" },
    ],
  },
  吉林: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#87CEFA" },
      { offset: 1, color: "#000080" },
    ],
  },
  黑龙江: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#E0FFFF" },
      { offset: 1, color: "#006666" },
    ],
  },
  上海: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#F0E68C" },
      { offset: 1, color: "#FF8C00" },
    ],
  },
  江苏: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#90EE90" },
      { offset: 1, color: "#006400" },
    ],
  },
  浙江: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFA07A" },
      { offset: 1, color: "#FF4500" },
    ],
  },
  安徽: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#E6E6FA" },
      { offset: 1, color: "#330066" },
    ],
  },
  福建: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFF0F5" },
      { offset: 1, color: "#FF0066" },
    ],
  },
  江西: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#F0FFF0" },
      { offset: 1, color: "#006400" },
    ],
  },
  山东: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFE4E1" },
      { offset: 1, color: "#DC143C" },
    ],
  },
  河南: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFEBCD" },
      { offset: 1, color: "#CD853F" },
    ],
  },
  湖北: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#D8BFD8" },
      { offset: 1, color: "#660066" },
    ],
  },
  湖南: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#98D8C8" },
      { offset: 1, color: "#006666" },
    ],
  },
  广东: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFB6C1" },
      { offset: 1, color: "#FF1493" },
    ],
  },
  广西: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#9370DB" },
      { offset: 1, color: "#330099" },
    ],
  },
  海南: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFDEAD" },
      { offset: 1, color: "#FF6347" },
    ],
  },
  重庆: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#87CEFA" },
      { offset: 1, color: "#000066" },
    ],
  },
  四川: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#20B2AA" },
      { offset: 1, color: "#004444" },
    ],
  },
  贵州: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#98FB98" },
      { offset: 1, color: "#004400" },
    ],
  },
  云南: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#DA70D6" },
      { offset: 1, color: "#660066" },
    ],
  },
  西藏: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FF4500" },
      { offset: 1, color: "#8B0000" },
    ],
  },
  陕西: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#F0E68C" },
      { offset: 1, color: "#B8860B" },
    ],
  },
  甘肃: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#D2B48C" },
      { offset: 1, color: "#8B4513" },
    ],
  },
  青海: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#87CEEB" },
      { offset: 1, color: "#00008B" },
    ],
  },
  宁夏: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#F5DEB3" },
      { offset: 1, color: "#D2691E" },
    ],
  },
  新疆: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#90EE90" },
      { offset: 1, color: "#006400" },
    ],
  },
  香港: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#FFD700" },
      { offset: 1, color: "#FF6347" },
    ],
  },
  澳门: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#00CED1" },
      { offset: 1, color: "#008B8B" },
    ],
  },
};

// 计算地势等级
export const getElevationTier = (provinceName: string): number => {
  // 第一梯队（4000 米以上）：西藏、青海
  const tier4Provinces = ["西藏自治区", "青海省"];
  if (tier4Provinces.includes(provinceName)) return 4;

  // 第二梯队（1000-2500 米）：四川、甘肃、新疆、云南、宁夏、山西、陕西、贵州、内蒙古
  const tier3Provinces = [
    "四川省",
    "甘肃省",
    "新疆维吾尔自治区",
    "云南省",
    "宁夏回族自治区",
    "山西省",
    "陕西省",
    "贵州省",
    "内蒙古自治区",
  ];
  if (tier3Provinces.includes(provinceName)) return 3;

  // 第三梯队（500-1000 米）：台湾、重庆、河北、福建、湖北、吉林、广西、北京、湖南、黑龙江、浙江
  const tier2Provinces = [
    "台湾省",
    "重庆市",
    "河北省",
    "福建省",
    "湖北省",
    "吉林省",
    "广西壮族自治区",
    "北京市",
    "湖南省",
    "黑龙江省",
    "浙江省",
  ];
  if (tier2Provinces.includes(provinceName)) return 2;

  // 第四梯队（500 米以下）：其余省份
  return 1;
};
