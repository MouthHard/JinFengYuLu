// 中国各省份数�?import type { Province } from "@/types/travelGuide";

export type { Province };

export const provinces: Province[] = [
  // 华北地区
  {
    id: "beijing",
    name: "北京",
    abbreviation: "�?,
    capital: "北京",
    region: "华北",
    description: "中国的首都，历史文化名城",
    tags: ["历史文化名城", "美食之都", "政治中心"],
  },
  {
    id: "tianjin",
    name: "天津",
    abbreviation: "�?,
    capital: "天津",
    region: "华北",
    description: "北方重要的港口城市，直辖�?,
    tags: ["港口城市", "直辖�?, "美食之乡"],
  },
  {
    id: "hebei",
    name: "河北",
    abbreviation: "冀",
    capital: "石家�?,
    region: "华北",
    description: "环绕京津，历史悠�?,
    tags: ["历史悠久", "文化名城", "工业基地"],
  },
  {
    id: "shanxi",
    name: "山西",
    abbreviation: "�?,
    capital: "太原",
    region: "华北",
    description: "煤炭资源丰富，晋商文化发源地",
    tags: ["煤炭资源", "晋商文化", "历史文化"],
  },
  {
    id: "neimenggu",
    name: "内蒙�?,
    abbreviation: "�?,
    capital: "呼和浩特",
    region: "华北",
    description: "草原风光，蒙古族文化",
    tags: ["草原风光", "蒙古族文�?, "边疆地区"],
  },

  // 东北地区
  {
    id: "liaoning",
    name: "辽宁",
    abbreviation: "�?,
    capital: "沈阳",
    region: "东北",
    description: "东北老工业基地，沿海省份",
    tags: ["老工业基�?, "沿海省份", "历史文化"],
  },
  {
    id: "jilin",
    name: "吉林",
    abbreviation: "�?,
    capital: "长春",
    region: "东北",
    description: "汽车工业基地，长白山风光",
    tags: ["汽车工业", "长白�?, "冰雪旅游"],
  },
  {
    id: "heilongjiang",
    name: "黑龙�?,
    abbreviation: "�?,
    capital: "哈尔�?,
    region: "东北",
    description: "中国最北端，冰雪之�?,
    tags: ["冰雪之乡", "边境城市", "森林资源"],
  },

  // 华东地区
  {
    id: "shanghai",
    name: "上海",
    abbreviation: "�?,
    capital: "上海",
    region: "华东",
    description: "中国的经济中心，国际化大都市",
    tags: ["经济中心", "国际化都�?, "金融中心"],
  },
  {
    id: "jiangsu",
    name: "江苏",
    abbreviation: "�?,
    capital: "南京",
    region: "华东",
    description: "鱼米之乡，经济发�?,
    tags: ["鱼米之乡", "经济发达", "文化名城"],
  },
  {
    id: "zhejiang",
    name: "浙江",
    abbreviation: "�?,
    capital: "杭州",
    region: "华东",
    description: "丝绸之府，民营经济活�?,
    tags: ["丝绸之府", "民营经济活跃", "电商之都"],
  },
  {
    id: "anhui",
    name: "安徽",
    abbreviation: "�?,
    capital: "合肥",
    region: "华东",
    description: "徽文化发源地，自然风光优�?,
    tags: ["徽文�?, "自然风光", "历史名城"],
  },
  {
    id: "fujian",
    name: "福建",
    abbreviation: "�?,
    capital: "福州",
    region: "华东",
    description: "海上丝绸之路起点，闽南文�?,
    tags: ["海上丝绸之路", "闽南文化", "沿海省份"],
  },
  {
    id: "jiangxi",
    name: "江西",
    abbreviation: "�?,
    capital: "南昌",
    region: "华东",
    description: "红色革命根据地，山水风光",
    tags: ["红色革命", "山水风光", "历史文化"],
  },
  {
    id: "shandong",
    name: "山东",
    abbreviation: "�?,
    capital: "济南",
    region: "华东",
    description: "齐鲁文化发源地，沿海经济大省",
    tags: ["齐鲁文化", "沿海经济", "历史名城"],
  },

  // 华中地区
  {
    id: "henan",
    name: "河南",
    abbreviation: "�?,
    capital: "郑州",
    region: "华中",
    description: "中原文化发源地，历史悠久",
    tags: ["中原文化", "历史悠久", "交通枢�?],
  },
  {
    id: "hubei",
    name: "湖北",
    abbreviation: "�?,
    capital: "武汉",
    region: "华中",
    description: "九省通衢，楚文化发源�?,
    tags: ["九省通衢", "楚文化发源地", "工业重镇"],
  },
  {
    id: "hunan",
    name: "湖南",
    abbreviation: "�?,
    capital: "长沙",
    region: "华中",
    description: "芙蓉国里尽朝�?,
    tags: ["芙蓉国里", "文化大省", "美食之乡"],
  },

  // 华南地区
  {
    id: "guangdong",
    name: "广东",
    abbreviation: "�?,
    capital: "广州",
    region: "华南",
    description: "中国经济第一大省，改革开放前�?,
    tags: ["美食天堂", "改革开放前�?, "经济强省"],
  },
  {
    id: "guangxi",
    name: "广西",
    abbreviation: "�?,
    capital: "南宁",
    region: "华南",
    description: "壮族自治区，山水甲天�?,
    tags: ["壮族文化", "山水风光", "边境地区"],
  },
  {
    id: "hainan",
    name: "海南",
    abbreviation: "�?,
    capital: "海口",
    region: "华南",
    description: "中国最南端，热带海岛风�?,
    tags: ["热带海岛", "旅游胜地", "自贸�?],
  },
  {
    id: "hongkong",
    name: "香港",
    abbreviation: "�?,
    capital: "香港",
    region: "华南",
    description: "国际化大都市，金融中�?,
    tags: ["国际化都�?, "金融中心", "购物天堂"],
  },
  {
    id: "macau",
    name: "澳门",
    abbreviation: "�?,
    capital: "澳门",
    region: "华南",
    description: "博彩业发达，中西文化交融",
    tags: ["博彩�?, "中西文化", "旅游胜地"],
  },
  {
    id: "taiwan",
    name: "台湾",
    abbreviation: "�?,
    capital: "台北",
    region: "华南",
    description: "中国的宝岛，自然风光优美",
    tags: ["宝岛风光", "历史文化", "美食天堂"],
  },

  // 西南地区
  {
    id: "chongqing",
    name: "重庆",
    abbreviation: "�?,
    capital: "重庆",
    region: "西南",
    description: "山城，直辖市，火锅之�?,
    tags: ["山城", "直辖�?, "火锅之乡"],
  },
  {
    id: "sichuan",
    name: "四川",
    abbreviation: "�?,
    capital: "成都",
    region: "西南",
    description: "天府之国，美食天�?,
    tags: ["天府之国", "美食天堂", "熊猫之乡"],
  },
  {
    id: "guizhou",
    name: "贵州",
    abbreviation: "�?,
    capital: "贵阳",
    region: "西南",
    description: "喀斯特地貌，少数民族文�?,
    tags: ["喀斯特地貌", "少数民族文化", "自然风光"],
  },
  {
    id: "yunnan",
    name: "云南",
    abbreviation: "�?,
    capital: "昆明",
    region: "西南",
    description: "彩云之南，少数民族众�?,
    tags: ["彩云之南", "少数民族", "旅游胜地"],
  },
  {
    id: "xizang",
    name: "西藏",
    abbreviation: "�?,
    capital: "拉萨",
    region: "西南",
    description: "世界屋脊，藏传佛教文�?,
    tags: ["世界屋脊", "藏传佛教", "自然风光"],
  },

  // 西北地区
  {
    id: "shaanxi",
    name: "陕西",
    abbreviation: "�?,
    capital: "西安",
    region: "西北",
    description: "十三朝古都，历史厚重",
    tags: ["十三朝古�?, "历史厚重", "文化圣地"],
  },
  {
    id: "gansu",
    name: "甘肃",
    abbreviation: "�?,
    capital: "兰州",
    region: "西北",
    description: "丝绸之路重镇，自然风光多�?,
    tags: ["丝绸之路", "自然风光", "历史文化"],
  },
  {
    id: "qinghai",
    name: "青海",
    abbreviation: "�?,
    capital: "西宁",
    region: "西北",
    description: "青藏高原，青海湖风光",
    tags: ["青藏高原", "青海�?, "少数民族文化"],
  },
  {
    id: "ningxia",
    name: "宁夏",
    abbreviation: "�?,
    capital: "银川",
    region: "西北",
    description: "回族自治区，塞上江南",
    tags: ["回族文化", "塞上江南", "历史文化"],
  },
  {
    id: "xinjiang",
    name: "新疆",
    abbreviation: "�?,
    capital: "乌鲁木齐",
    region: "西北",
    description: "西域文化，自然风光壮�?,
    tags: ["西域文化", "自然风光", "少数民族文化"],
  },
];

// 获取所有地�?export const getRegions = (): string[] => {
  const regions = new Set(provinces.map((province) => province.region));
  return Array.from(regions);
};

// 根据地区筛选省�?export const getProvincesByRegion = (region: string): Province[] => {
  return provinces.filter((province) => province.region === region);
};

// 根据ID获取省份
export const getProvinceById = (id: string): Province | undefined => {
  return provinces.find((province) => province.id === id);
};
