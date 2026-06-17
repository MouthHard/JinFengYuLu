interface Region {
  id: string;
  name: string;
  country: string;
  continent: string;
  parentRegion: string;
  level: number;
  image: string;
  description: string;
}

export const regions: Region[] = [
  // 中国 - 西部
  { id: 'xizang', name: '西藏', country: '中国', continent: '亚洲', parentRegion: 'china-west', level: 2, image: '', description: '世界屋脊，雪域高原' },
  { id: 'xinjiang', name: '新疆', country: '中国', continent: '亚洲', parentRegion: 'china-west', level: 2, image: '', description: '西域风情，大漠孤烟' },
  { id: 'qinghai', name: '青海', country: '中国', continent: '亚洲', parentRegion: 'china-west', level: 2, image: '', description: '高原湖泊，天空之镜' },
  { id: 'neimenggu', name: '内蒙古', country: '中国', continent: '亚洲', parentRegion: 'china-west', level: 2, image: '', description: '草原牧歌，风吹草低' },
  // 中国 - 南方
  { id: 'yunnan', name: '云南', country: '中国', continent: '亚洲', parentRegion: 'china-south', level: 2, image: '', description: '彩云之南，四季如春' },
  { id: 'guangdong', name: '广东', country: '中国', continent: '亚洲', parentRegion: 'china-south', level: 2, image: '', description: '岭南文化，改革开放前沿' },
  { id: 'guangxi', name: '广西', country: '中国', continent: '亚洲', parentRegion: 'china-south', level: 2, image: '', description: '山水甲天下，桂林漓江' },
  { id: 'hainan', name: '海南', country: '中国', continent: '亚洲', parentRegion: 'china-south', level: 2, image: '', description: '热带海岛，椰风海韵' },
  // 中国 - 北方
  { id: 'heilongjiang', name: '黑龙江', country: '中国', continent: '亚洲', parentRegion: 'china-north', level: 2, image: '', description: '冰雪王国，北国风光' },
  { id: 'jilin', name: '吉林', country: '中国', continent: '亚洲', parentRegion: 'china-north', level: 2, image: '', description: '雾凇奇观，长白山天池' },
  { id: 'liaoning', name: '辽宁', country: '中国', continent: '亚洲', parentRegion: 'china-north', level: 2, image: '', description: '工业重镇，东北门户' },
  { id: 'beijing', name: '北京', country: '中国', continent: '亚洲', parentRegion: 'china-north', level: 2, image: '', description: '首都，历史文化名城' },
  // 中国 - 东部
  { id: 'zhejiang', name: '浙江', country: '中国', continent: '亚洲', parentRegion: 'china-east', level: 2, image: '', description: '江南水乡，鱼米之乡' },
  { id: 'jiangsu', name: '江苏', country: '中国', continent: '亚洲', parentRegion: 'china-east', level: 2, image: '', description: '园林水乡，吴韵汉风' },
  { id: 'anhui', name: '安徽', country: '中国', continent: '亚洲', parentRegion: 'china-east', level: 2, image: '', description: '徽派建筑，黄山云海' },
  { id: 'shandong', name: '山东', country: '中国', continent: '亚洲', parentRegion: 'china-east', level: 2, image: '', description: '孔孟之乡，泰山之巅' },
  // 中国 - 中部
  { id: 'sichuan', name: '四川', country: '中国', continent: '亚洲', parentRegion: 'china-central', level: 2, image: '', description: '天府之国，熊猫故乡' },
  { id: 'chongqing', name: '重庆', country: '中国', continent: '亚洲', parentRegion: 'china-central', level: 2, image: '', description: '山城雾都，火锅之都' },
  { id: 'hubei', name: '湖北', country: '中国', continent: '亚洲', parentRegion: 'china-central', level: 2, image: '', description: '千湖之省，荆楚大地' },
  { id: 'hunan', name: '湖南', country: '中国', continent: '亚洲', parentRegion: 'china-central', level: 2, image: '', description: '潇湘山水，张家界峰林' },
  // 中国 - 海岛
  { id: 'taiwan', name: '台湾', country: '中国', continent: '亚洲', parentRegion: 'china-island', level: 2, image: '', description: '宝岛台湾，阿里山日月潭' },
  { id: 'hainan-island', name: '海南岛', country: '中国', continent: '亚洲', parentRegion: 'china-island', level: 2, image: '', description: '热带天堂，三亚风光' },
  { id: 'chongming', name: '崇明岛', country: '中国', continent: '亚洲', parentRegion: 'china-island', level: 2, image: '', description: '长江入海口，生态绿洲' },
  // 中国 - 港澳
  { id: 'hongkong', name: '香港', country: '中国', continent: '亚洲', parentRegion: 'china-hk-mo', level: 2, image: '', description: '东方之珠，国际都会' },
  { id: 'macau', name: '澳门', country: '中国', continent: '亚洲', parentRegion: 'china-hk-mo', level: 2, image: '', description: '中西交融，赌城风采' },

  // 日本
  { id: 'tokyo', name: '东京', country: '日本', continent: '亚洲', parentRegion: 'japan', level: 2, image: '', description: '日本首都，现代与传统交融' },
  { id: 'kyoto', name: '京都', country: '日本', continent: '亚洲', parentRegion: 'japan', level: 2, image: '', description: '千年古都，和风古韵' },
  { id: 'fuji', name: '富士山', country: '日本', continent: '亚洲', parentRegion: 'japan', level: 2, image: '', description: '日本象征，圣洁雪山' },
  { id: 'osaka', name: '大阪', country: '日本', continent: '亚洲', parentRegion: 'japan', level: 2, image: '', description: '美食之都，商业中心' },
  { id: 'hokkaido', name: '北海道', country: '日本', continent: '亚洲', parentRegion: 'japan', level: 2, image: '', description: '雪国之境，温泉之乡' },
  { id: 'okinawa', name: '冲绳', country: '日本', continent: '亚洲', parentRegion: 'japan', level: 2, image: '', description: '热带海岛，琉球王国' },
  // 韩国
  { id: 'seoul', name: '首尔', country: '韩国', continent: '亚洲', parentRegion: 'korea', level: 2, image: '', description: '韩国首都，时尚之都' },
  { id: 'jeju', name: '济州岛', country: '韩国', continent: '亚洲', parentRegion: 'korea', level: 2, image: '', description: '蜜月圣地，火山岛屿' },
  // 东南亚
  { id: 'bangkok', name: '曼谷', country: '泰国', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '天使之城，佛庙之都' },
  { id: 'chiangmai', name: '清迈', country: '泰国', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '玫瑰之都，慢生活' },
  { id: 'phuket', name: '普吉岛', country: '泰国', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '安达曼海明珠，度假天堂' },
  { id: 'hanoi', name: '河内', country: '越南', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '千年古城，法式风情' },
  { id: 'hochiminh', name: '胡志明市', country: '越南', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '东方巴黎，活力都市' },
  { id: 'angkor', name: '吴哥窟', country: '柬埔寨', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '高棉帝国遗迹，世界奇迹' },
  { id: 'bali', name: '巴厘岛', country: '印度尼西亚', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '神明之岛，度假胜地' },
  { id: 'jakarta', name: '雅加达', country: '印度尼西亚', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '东南亚最大城市' },
  { id: 'singapore', name: '新加坡', country: '新加坡', continent: '亚洲', parentRegion: 'southeast', level: 2, image: '', description: '花园城市，金融中心' },
  // 印度
  { id: 'delhi', name: '德里', country: '印度', continent: '亚洲', parentRegion: 'india', level: 2, image: '', description: '古老文明与现代交汇' },
  { id: 'taj-mahal', name: '泰姬陵', country: '印度', continent: '亚洲', parentRegion: 'india', level: 2, image: '', description: '永恒泪珠，爱情丰碑' },
  { id: 'varanasi', name: '瓦拉纳西', country: '印度', continent: '亚洲', parentRegion: 'india', level: 2, image: '', description: '圣城之光，恒河之畔' },
  // 中东
  { id: 'cairo', name: '开罗', country: '埃及', continent: '非洲', parentRegion: 'middle-east', level: 2, image: '', description: '千年古城，金字塔旁' },
  { id: 'pyramids', name: '金字塔', country: '埃及', continent: '非洲', parentRegion: 'middle-east', level: 2, image: '', description: '世界七大奇迹之一' },
  { id: 'jerusalem', name: '耶路撒冷', country: '以色列', continent: '亚洲', parentRegion: 'middle-east', level: 2, image: '', description: '三教圣城，历史名城' },
  { id: 'tehran', name: '德黑兰', country: '伊朗', continent: '亚洲', parentRegion: 'middle-east', level: 2, image: '', description: '波斯古都，伊斯兰艺术' },

  // 西欧
  { id: 'paris', name: '巴黎', country: '法国', continent: '欧洲', parentRegion: 'western-europe', level: 2, image: '', description: '浪漫之都，艺术殿堂' },
  { id: 'london', name: '伦敦', country: '英国', continent: '欧洲', parentRegion: 'western-europe', level: 2, image: '', description: '日不落帝国首都，绅士之都' },
  { id: 'swiss-alps', name: '瑞士阿尔卑斯', country: '瑞士', continent: '欧洲', parentRegion: 'western-europe', level: 2, image: '', description: '欧洲屋脊，滑雪天堂' },
  { id: 'amsterdam', name: '阿姆斯特丹', country: '荷兰', continent: '欧洲', parentRegion: 'western-europe', level: 2, image: '', description: '运河之城，自由之都' },
  // 南欧
  { id: 'rome', name: '罗马', country: '意大利', continent: '欧洲', parentRegion: 'southern-europe', level: 2, image: '', description: '永恒之城，古罗马帝国心脏' },
  { id: 'venice', name: '威尼斯', country: '意大利', continent: '欧洲', parentRegion: 'southern-europe', level: 2, image: '', description: '水上之城，浪漫之都' },
  { id: 'athens', name: '雅典', country: '希腊', continent: '欧洲', parentRegion: 'southern-europe', level: 2, image: '', description: '西方文明摇篮，众神之城' },
  { id: 'santorini', name: '圣托里尼', country: '希腊', continent: '欧洲', parentRegion: 'southern-europe', level: 2, image: '', description: '爱琴海明珠，蓝白世界' },
  { id: 'barcelona', name: '巴塞罗那', country: '西班牙', continent: '欧洲', parentRegion: 'southern-europe', level: 2, image: '', description: '高迪之城，地中海明珠' },
  // 北欧
  { id: 'iceland', name: '冰岛', country: '冰岛', continent: '欧洲', parentRegion: 'northern-europe', level: 2, image: '', description: '冰与火之国，极光圣地' },
  { id: 'norway-fjord', name: '挪威峡湾', country: '挪威', continent: '欧洲', parentRegion: 'northern-europe', level: 2, image: '', description: '万岛之国，峡湾奇观' },
  { id: 'stockholm', name: '斯德哥尔摩', country: '瑞典', continent: '欧洲', parentRegion: 'northern-europe', level: 2, image: '', description: '北方威尼斯，北欧设计之都' },
  { id: 'helsinki', name: '赫尔辛基', country: '芬兰', continent: '欧洲', parentRegion: 'northern-europe', level: 2, image: '', description: '千湖之国，圣诞老人故乡' },
  // 东欧
  { id: 'prague', name: '布拉格', country: '捷克', continent: '欧洲', parentRegion: 'eastern-europe', level: 2, image: '', description: '百塔之城，童话世界' },
  { id: 'budapest', name: '布达佩斯', country: '匈牙利', continent: '欧洲', parentRegion: 'eastern-europe', level: 2, image: '', description: '多瑙河明珠，双子城' },
  { id: 'krakow', name: '克拉科夫', country: '波兰', continent: '欧洲', parentRegion: 'eastern-europe', level: 2, image: '', description: '龙之城，中世纪古城' },

  // 北美
  { id: 'new-york', name: '纽约', country: '美国', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '世界之都，不夜城' },
  { id: 'grand-canyon', name: '大峡谷', country: '美国', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '地球伤痕，自然奇迹' },
  { id: 'yellowstone', name: '黄石国家公园', country: '美国', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '地热奇观，野生动物乐园' },
  { id: 'yosemite', name: '优胜美地', country: '美国', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '花岗岩峡谷，瀑布群' },
  { id: 'niagara', name: '尼亚加拉大瀑布', country: '加拿大/美国', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '世界三大跨国瀑布之一' },
  { id: 'toronto', name: '多伦多', country: '加拿大', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '多元文化之都，CN塔' },
  { id: 'banff', name: '班夫国家公园', country: '加拿大', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '落基山脉明珠，翡翠湖' },
  { id: 'mexico-city', name: '墨西哥城', country: '墨西哥', continent: '北美洲', parentRegion: 'north-america', level: 2, image: '', description: '阿兹特克文明，玛雅遗址' },
  // 南美
  { id: 'rio', name: '里约热内卢', country: '巴西', continent: '南美洲', parentRegion: 'south-america', level: 2, image: '', description: '上帝之城，基督像' },
  { id: 'amazon', name: '亚马逊雨林', country: '巴西/秘鲁等', continent: '南美洲', parentRegion: 'south-america', level: 2, image: '', description: '地球之肺，生命王国' },
  { id: 'machu-picchu', name: '马丘比丘', country: '秘鲁', continent: '南美洲', parentRegion: 'south-america', level: 2, image: '', description: '失落的天空之城，印加帝国遗迹' },
  { id: 'patagonia', name: '巴塔哥尼亚', country: '阿根廷/智利', continent: '南美洲', parentRegion: 'south-america', level: 2, image: '', description: '世界尽头，冰川荒原' },
  { id: 'iguassu', name: '伊瓜苏瀑布', country: '巴西/阿根廷', continent: '南美洲', parentRegion: 'south-america', level: 2, image: '', description: '世界最宽瀑布系统' },
  // 中美
  { id: 'costa-rica', name: '哥斯达黎加', country: '哥斯达黎加', continent: '北美洲', parentRegion: 'central-america', level: 2, image: '', description: '生态天堂，生物多样性宝库' },
  { id: 'guatemala', name: '危地马拉', country: '危地马拉', continent: '北美洲', parentRegion: 'central-america', level: 2, image: '', description: '玛雅文明发源地' },

  // 北非
  { id: 'marrakech', name: '马拉喀什', country: '摩洛哥', continent: '非洲', parentRegion: 'north-africa', level: 2, image: '', description: '红色之城，一千零一夜' },
  { id: 'sahara', name: '撒哈拉沙漠', country: '摩洛哥/阿尔及利亚等', continent: '非洲', parentRegion: 'north-africa', level: 2, image: '', description: '世界最大沙漠，三毛的流浪之地' },
  // 东非
  { id: 'serengeti', name: '塞伦盖蒂', country: '坦桑尼亚', continent: '非洲', parentRegion: 'east-africa', level: 2, image: '', description: '动物大迁徙，非洲Safari圣地' },
  { id: 'kilimanjaro', name: '乞力马扎罗山', country: '坦桑尼亚', continent: '非洲', parentRegion: 'east-africa', level: 2, image: '', description: '非洲之巅，赤道雪山' },
  { id: 'masai-mara', name: '马赛马拉', country: '肯尼亚', continent: '非洲', parentRegion: 'east-africa', level: 2, image: '', description: '狮子王国，野生动物天堂' },
  // 南非
  { id: 'cape-town', name: '开普敦', country: '南非', continent: '非洲', parentRegion: 'south-africa', level: 2, image: '', description: '母亲之城，好望角' },
  { id: 'victoria-falls', name: '维多利亚瀑布', country: '赞比亚/津巴布韦', continent: '非洲', parentRegion: 'south-africa', level: 2, image: '', description: '魔鬼烟池，世界三大瀑布之一' },
  { id: 'namibia', name: '纳米比亚', country: '纳米比亚', continent: '非洲', parentRegion: 'south-africa', level: 2, image: '', description: '死亡谷，红沙漠' },

  // 澳大利亚
  { id: 'sydney', name: '悉尼', country: '澳大利亚', continent: '大洋洲', parentRegion: 'australia', level: 2, image: '', description: '歌剧院港湾大桥，阳光海岸' },
  { id: 'great-barrier-reef', name: '大堡礁', country: '澳大利亚', continent: '大洋洲', parentRegion: 'australia', level: 2, image: '', description: '世界最大珊瑚礁系统，海洋之心' },
  { id: 'ayers-rock', name: '艾尔斯岩(乌鲁鲁)', country: '澳大利亚', continent: '大洋洲', parentRegion: 'australia', level: 2, image: '', description: '澳洲红心，原住民圣地' },
  // 新西兰
  { id: 'queenstown', name: '皇后镇', country: '新西兰', continent: '大洋洲', parentRegion: 'new-zealand', level: 2, image: '', description: '冒险之都，中土世界' },
  { id: 'milford-sound', name: '米尔福德峡湾', country: '新西兰', continent: '大洋洲', parentRegion: 'new-zealand', level: 2, image: '', description: '世界第八大奇迹，峡湾之王' },
  // 太平洋岛屿
  { id: 'fiji', name: '斐济', country: '斐济', continent: '大洋洲', parentRegion: 'pacific', level: 2, image: '', description: '南太平洋十字路口，蜜月天堂' },
  { id: 'tahiti', name: '大溪地', country: '法属波利尼西亚', continent: '大洋洲', parentRegion: 'pacific', level: 2, image: '', description: '海岛中的爱马仕，波利尼西亚之心' },

  // 极地 - 北极
  { id: 'greenland', name: '格陵兰', country: '丹麦', continent: '北极', parentRegion: 'arctic', level: 2, image: '', description: '世界最大岛屿，冰盖王国' },
  { id: 'svalbard', name: '斯瓦尔巴群岛', country: '挪威', continent: '北极', parentRegion: 'arctic', level: 2, image: '', description: '北极熊王国，午夜太阳' },
  { id: 'alaska-arctic', name: '阿拉斯加北极', country: '美国', continent: '北极', parentRegion: 'arctic', level: 2, image: '', description: '最后的边疆，极光观测点' },
  // 极地 - 南极
  { id: 'antarctic-peninsula', name: '南极半岛', country: '南极洲', continent: '南极', parentRegion: 'antarctic', level: 2, image: '', description: '白色大陆入口，企鹅家园' },
  { id: 'south-pole', name: '南极点', country: '南极洲', continent: '南极', parentRegion: 'antarctic', level: 2, image: '', description: '地球最南端，极地科考站' },
]
