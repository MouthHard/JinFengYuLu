export interface CulturalHeritageItem {
  id: string;
  name: string;
  location: string;
  category: string;
  era: string;
  year: string;
  brief: string;
  description: string;
  history: string;
  culturalSignificance: string;
  features: string[];
  relatedFigures: string[];
  imageUrl: string;
  thumbnailUrl: string;
  images: string[];
  relatedItems: string[];
}

export const culturalHeritage: CulturalHeritageItem[] = [
  {
    id: "great-wall",
    name: "长城",
    location: "中国北部",
    category: "site",
    era: "春秋战国-明清",
    year: "公元前7世纪-公元17世纪",
    brief: "中国古代伟大的防御工具具程，世界文化遗产",
    description:
      "长城是中国古代伟大的防御工具具程，也是世界上最伟大的建筑之一。长城始建于春秋战国时期，秦统一六国后，秦始皇将各国的长城连接起来，形成了万里长城。此后，历代王朝都对长城进行程程了修缮和扩建。长城的主要作用是防御北方游牧民族的入侵，它是中国古代劳动人民智慧和勇气的结晶。1987年，长城被联合国教科文组织列为世界文化遗产。",
    history:
      '长城的修筑历史可上溯到西周时期，发生在首都镐京（今陕西西安）的著名典故"烽火戏诸侯"就源于此。春秋战国时期列国争霸，互相防守，长城修筑进入第一个高潮，但此时修筑的长度都比较短。秦灭六国统一天下后，秦始皇连接和修缮战国长城，始有万里长城之称。',
    culturalSignificance:
      "长城是中华民族的象征，也是人类文明史上最伟大的建筑工具具程之一。它体现了中国古代人民的智慧、勇气和毅力，是中国历史文化的重要载体。",
    features: [
      "世界上最长的防御工具具程",
      "中国古代劳动人民智慧和勇气的结晶",
      "中国古代军事防御体系的重要组成部分",
      "世界文化遗产",
    ],
    relatedFigures: ["秦始皇", "蒙恬", "戚继光"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["forbidden-city", "terracotta-army", "potala-palace"],
  },
  {
    id: "forbidden-city",
    name: "故宫",
    location: "北京市",
    category: "building",
    era: "明清",
    year: "1406年-1420年",
    brief: "中国明清两代的皇家宫殿，世界文化遗产",
    description:
      "故宫又称紫禁城，是中国明清两代的皇家宫殿，位于北京市中心。故宫始建于明永乐四年（1406年），永乐十八年（1420年）建成。故宫是中国古代宫廷建筑的精华，也是世界上现存规模最大、保存最为完整的木质结构古建筑之一。故宫占地面积约72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。",
    history:
      "故宫于明成祖永乐四年（1406年）开始建设，以南京故宫为蓝本营建，到永乐十八年（1420年）建成。它是一座长方形城池，南北长961米，东西宽753米，四面围有10米的城墙，城外有52米的护城河。",
    culturalSignificance:
      "故宫是中国古代宫廷建筑的精华，体现了中国古代皇家建筑的威严和气势。它不仅是明清两代的政治中心，也是中国传统文化的重要载体。",
    features: [
      "世界上现存规模最大、保存最为完整的木质结构古建筑之一",
      "中国古代宫廷建筑的精华",
      "体现了中国古代皇家建筑的威严和气势",
      "世界文化遗产",
    ],
    relatedFigures: ["明成祖", "康熙", "乾隆"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["summer-palace", "potala-palace", "yueyang-tower"],
  },
  {
    id: "terracotta-army",
    name: "兵马俑",
    location: "陕西省西安市",
    category: "artifact",
    era: "秦代",
    year: "公元前246年-公元前208年",
    brief: "秦始皇陵的陪葬坑，世界文化遗产",
    description:
      "兵马俑，即秦始皇陵兵马俑，位于陕西省西安市临潼区秦始皇陵以东1.5公里处的兵马俑坑内。兵马俑是秦始皇陵的陪葬坑，由三个大型兵马俑坑组成，坑内排列着数千个与真人真马大小相同的陶制兵马俑。这些兵马俑形态各异，栩栩如生，是中国古代陶俑艺术的杰作。",
    history:
      "秦始皇陵兵马俑坑是秦始皇陵的陪葬坑，位于陵园东侧1500米处。秦始皇兵马俑陪葬坑坐西向东，三坑呈品字形排列。最早发现的是一号俑坑，呈长方形，东西长230米，南北宽62米，深约5米，总面积14260平方米。",
    culturalSignificance:
      "兵马俑的发现，为研究中国古代军事、政治、经济、文化等提供了重要的实物资料。它是中国古代陶俑艺术的杰作，也是世界考古史上的重大发现。",
    features: [
      "世界上最大的古代军事博物馆",
      "中国古代陶俑艺术的杰作",
      "为研究中国古代军事、政治、经济、文化等提供了重要的实物资料",
      "世界文化遗产",
    ],
    relatedFigures: ["秦始皇", "李斯"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["great-wall", "dujiangyan", "mogao-grottoes"],
  },
  {
    id: "mogao-grottoes",
    name: "莫高窟",
    location: "甘肃省敦煌市",
    category: "site",
    era: "十六国-元代",
    year: "366年-1368年",
    brief: "中国古代佛教艺术宝库，世界文化遗产",
    description:
      "莫高窟，俗称千佛洞，位于甘肃省敦煌市东南25公里处的鸣沙山东麓断崖上。莫高窟始建于前秦建元二年（366年），历经十六国、北朝、隋、唐、五代、西夏、元等历代的兴建，形成了规模宏大的石窟群。",
    history:
      "莫高窟始建于十六国时期，据唐《李克让重修莫高窟佛龛碑》一书的记载，前秦建元二年（366年），僧人乐僔路经此山，忽见金光闪耀，如现万佛，于是便在岩壁上开凿了第一个洞窟。",
    culturalSignificance:
      "莫高窟的壁画和彩塑艺术水平极高，反映了中国古代佛教艺术的发展历程，是中国古代文化艺术的瑰宝。它是中西文化交流的重要见证。",
    features: [
      "世界上现存规模最大、内容最丰富的佛教艺术地",
      "中国古代佛教艺术宝库",
      "反映了中国古代佛教艺术的发展历程",
      "世界文化遗产",
    ],
    relatedFigures: ["乐僔和尚", "王圆箓"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["potala-palace", "jade-buddha-temple", "terracotta-army"],
  },
  {
    id: "potala-palace",
    name: "布达拉宫",
    location: "西藏自治区拉萨市",
    category: "building",
    era: "唐代-清代",
    year: "7世纪-17世纪",
    brief: "藏传佛教圣地，世界文化遗产",
    description:
      "布达拉宫，位于西藏自治区拉萨市城关区北京中路35号，是藏传佛教圣地，也是世界上海拔最高、规模最大的宫堡式建筑群。布达拉宫始建于公元7世纪吐蕃王朝松赞干布时期，是松赞干布为迎娶文成公主而建。",
    history:
      "布达拉宫依山垒砌，群楼重叠，殿宇嵯峨，气势雄伟，有横空出行程行程程世、气贯苍穹之势，坚实墩厚的花岗石墙体，松茸平展的白玛草墙领，金碧辉煌的金顶，具有强烈装饰效果的巨大鎏金宝瓶、经幢和红幡，交相映辉。",
    culturalSignificance:
      "布达拉宫是藏式建筑的杰出行程行程程代表，也是中华民族古建筑的精华之作。它是藏传佛教的重要圣地，也是藏汉文化交流的历史见证。",
    features: [
      "世界上海拔最高、规模最大的宫堡式建筑群",
      "藏传佛教圣地",
      "藏式建筑的杰出行程行程程代表",
      "世界文化遗产",
    ],
    relatedFigures: ["松赞干布", "文成公主", "五世达赖"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["forbidden-city", "mogao-grottoes", "jade-buddha-temple"],
  },
  {
    id: "summer-palace",
    name: "颐和园",
    location: "北京市",
    category: "building",
    era: "清代",
    year: "1750年-1764年",
    brief: "中国古代皇家园林，世界文化遗产",
    description:
      "颐和园，位于北京市海淀区新建宫门路19号，是中国古代皇家园林，也是世界上现存规模最大、保存最完整的皇家园林之一。颐和园始建于清朝乾隆年间，原名清漪园，是乾隆皇帝为庆祝母亲寿辰而建。",
    history:
      '颐和园前身为清漪园，坐落在北京西郊，距城区15公里，占地约290公顷，与圆明园毗邻。它是以昆明湖、万寿山为基址，以杭州西湖为蓝本，汲取江南园林的设计手法而建成的一座大型山水园林，被誉为"皇家园林博物馆"。',
    culturalSignificance:
      "颐和园是中国古典园林艺术的杰作，也是世界文化遗产中的瑰宝。它体现了中国古代园林艺术的最高成就，是中国传统文化的重要载体。",
    features: [
      "世界上现存规模最大、保存最完整的皇家园林之一",
      "中国古典园林艺术的杰作",
      "以昆明湖、万寿山为基址，以杭州西湖为蓝本",
      "世界文化遗产",
    ],
    relatedFigures: ["乾隆", "慈禧"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["forbidden-city", "yueyang-tower", "huangshan"],
  },
  {
    id: "yueyang-tower",
    name: "岳阳楼",
    location: "湖南省岳阳市",
    category: "building",
    era: "东汉-清代",
    year: "东汉末年-清代",
    brief: "中国古代著名楼阁，江南三大名楼之一",
    description:
      "岳阳楼，位于湖南省岳阳市岳阳楼区洞庭北路，是中国古代著名楼阁，江南三大名楼之一。岳阳楼始建于东汉末年，三国时期吴国鲁肃在此建阅兵楼，唐代始称岳阳楼。",
    history:
      '岳阳楼始建于公元220年前后，其前身相传为三国时期东吴大将鲁肃的"阅军楼"，西晋南北朝时称"巴陵城楼"，中唐李白赋诗之后，始称"岳阳楼"。',
    culturalSignificance:
      '岳阳楼因北宋范仲淹的《岳阳楼记》而闻名天下，文中"先天下之忧而忧，后天下之乐而乐"的名句成为中华民族的精神财富。它体现了中国古代文人的精神追求。',
    features: [
      "江南三大名楼之一",
      "因范仲淹的《岳阳楼记》而闻名天下",
      "中国古代建筑艺术的杰作",
      "体现了中国古代文人的精神追求",
    ],
    relatedFigures: ["范仲淹", "滕子京", "李白"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["summer-palace", "jade-buddha-temple", "huangshan"],
  },
  {
    id: "dujiangyan",
    name: "都江堰",
    location: "四川省成都市都江堰市",
    category: "site",
    era: "战国",
    year: "公元前256年-公元前251年",
    brief: "中国古代水利工具具程，世界文化遗产",
    description:
      "都江堰，位于四川省成都市都江堰市城西，是中国古代伟大的水利工具具程，也是世界上现存最古老、至今仍在使用的水利工具具程之一。都江堰始建于战国时期秦昭王末年（约公元前256年-前251年），由秦国蜀郡太守李冰父子主持修建。",
    history:
      "都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年（约公元前256年-前251年），是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工具具程。",
    culturalSignificance:
      '都江堰的修建，解决了岷江水患，灌溉了成都平原，使成都平原成为"天府之国"。它体现了中国古代劳动人民的智慧和勇气。',
    features: [
      "世界上现存最古老、至今仍在使用的水利工具具程之一",
      "解决了岷江水患，灌溉了成都平原",
      "体现了中国古代劳动人民的智慧和勇气",
      "世界文化遗产",
    ],
    relatedFigures: ["李冰", "二郎"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["great-wall", "terracotta-army", "huangshan"],
  },
  {
    id: "huangshan",
    name: "黄山",
    location: "安徽省黄山市",
    category: "site",
    era: "自古以来",
    year: "自古以来",
    brief: "中国著名风景名胜区，世界文化与自然双重遗产",
    description:
      "黄山，位于安徽省南部黄山市境内，有72峰，主峰莲花峰海拔1864米，与光明顶、天都峰并称三大黄山主峰，为36大峰之一。黄山是安徽旅游的标志，是中国十大风景名胜中唯一的山岳风光。",
    history:
      '黄山原名"黟山"，因峰岩青黑，遥望苍黛而名。后因传说轩辕黄帝曾在此炼丹，故改名"黄山"。黄山代表景观有"五绝三瀑"，五绝：奇松、怪石、云海、温泉、冬雪；三瀑：人字瀑、百丈泉、九龙瀑。',
    culturalSignificance:
      '黄山以奇松、怪石、云海、温泉、冬雪"五绝"闻名于世，被誉为"天下第一奇山"。它是中国山水画的重要题材，体现了中国人对自然美的独特理解。',
    features: [
      "世界文化与自然双重遗产",
      '以奇松、怪石、云海、温泉、冬雪"五绝"闻名',
      '被誉为"天下第一奇山"',
      "中国山水画的重要题材",
    ],
    relatedFigures: ["徐霞客", "石涛"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["summer-palace", "yueyang-tower", "dujiangyan"],
  },
  {
    id: "jade-buddha-temple",
    name: "少林寺",
    location: "河南省登封市",
    category: "building",
    era: "北魏-现代",
    year: "495年",
    brief: "中国佛教禅宗祖庭，少林武术发源地",
    description:
      '少林寺，位于河南省郑州市登封市嵩山五乳峰下，因坐落于嵩山腹地少室山的茂密丛林之中，故名"少林寺"。少林寺是中国佛教禅宗祖庭和中国功夫的发源地，现为世界文化遗产。',
    history:
      "少林寺始建于北魏太和十九年（495年），是孝文帝为了安置他所敬仰的印度高僧跋陀尊者，在与都城洛阳相望的嵩山少室山北麓敕建而成。",
    culturalSignificance:
      "少林寺是中国佛教禅宗祖庭，也是少林武术的发源地。它体现了中国佛教文化和武术文化的融合，是中国传统文化的重要代表。",
    features: [
      "中国佛教禅宗祖庭",
      "少林武术发源地",
      "世界文化遗产",
      "体现了佛教文化与武术文化的融合",
    ],
    relatedFigures: ["达摩", "跋陀", "十三棍僧"],
    imageUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    thumbnailUrl:
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    images: [
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    ],
    relatedItems: ["mogao-grottoes", "potala-palace", "great-wall"],
  },
];
