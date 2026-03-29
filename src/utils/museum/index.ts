// 博物馆相关工具函数和静态映射

// 省份名称到英文的映射
export const provinceMap: Record<string, string> = {
  北京: "beijing",
  上海: "shanghai",
  陕西: "shaanxi",
  江苏: "jiangsu",
  河南: "henan",
  浙江: "zhejiang",
  湖北: "hubei",
  湖南: "hunan",
  四川: "sichuan",
  广东: "guangdong",
  天津: "tianjin",
  重庆: "chongqing",
  山东: "shandong",
  辽宁: "liaoning",
  吉林: "jilin",
  黑龙江: "heilongjiang",
  福建: "fujian",
  安徽: "anhui",
  河北: "hebei",
  山西: "shanxi",
  内蒙古: "inner-mongolia",
  江西: "jiangxi",
  广西: "guangxi",
  海南: "hainan",
  贵州: "guizhou",
  云南: "yunnan",
  西藏: "tibet",
  甘肃: "gansu",
  青海: "qinghai",
  宁夏: "ningxia",
  新疆: "xinjiang",
  台湾: "taiwan",
  香港: "hong-kong",
  澳门: "macau",
};

// 博物馆类型的映射
export const museumTypeMap: Record<string, string> = {
  历史博物馆: "history",
  艺术博物馆: "art",
  科技博物馆: "science",
  综合博物馆: "comprehensive",
  专题博物馆: "thematic",
};

// 文物分类的映射
export const artifactCategoryMap: Record<string, string> = {
  绘画: "painting",
  玉器: "jade",
  青铜器: "bronze",
  陶瓷器: "ceramic",
  书法: "calligraphy",
  科技仪器: "scientific_instrument",
};

// 文创产品分类的映射
export const creativeCategoryMap: Record<string, string> = {
  文具: "stationery",
  服装: "clothing",
  教育: "education",
  家居: "home",
  饰品: "accessories",
};

// 学术资源类型的映射
export const academicTypeMap: Record<string, string> = {
  article: "文章",
  book: "书籍",
  video: "视频",
};

// 格式化数字（添加千位分隔符）
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 获取博物馆的省份英文名称
export const getProvinceEn = (province: string): string => {
  return provinceMap[province] || province.toLowerCase();
};

// 获取博物馆类型的英文名称
export const getMuseumTypeEn = (type: string): string => {
  return museumTypeMap[type] || type.toLowerCase();
};

// 生成博物馆详情页的路由路径
export const generateMuseumRoute = (
  province: string,
  museumId: number,
): string => {
  const provinceEn = getProvinceEn(province);
  return `/museum/${provinceEn}/${museumId}`;
};
