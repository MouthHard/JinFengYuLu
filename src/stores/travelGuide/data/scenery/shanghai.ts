import type { SceneryData } from '@/typesOfPages/travelGuide';

export const shanghaiData: SceneryData = {
  overview: {
    totalSpots: 150,
    natureSpots: 40,
    cultureSpots: 110,
    topAttractions: [
      {
        name: '外滩',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '上海标志性景观，万国建筑博览群与陆家嘴天际线交相辉映'
      },
      {
        name: '东方明珠广播电视塔',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '上海地标性建筑，亚洲第三高塔，俯瞰上海全景的最佳地点'
      },
      {
        name: '豫园及城隍庙',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '江南古典园林代表，明代私人花园，小商品市场聚集地'
      },
      {
        name: '上海迪士尼乐园',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '中国大陆首座迪士尼主题乐园，梦幻童话世界'
      },
      {
        name: '南京路步行街',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '中华商业第一街，购物天堂，百年老字号云集'
      },
      {
        name: '田子坊',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '上海弄堂改造的艺术创意园区，文艺青年打卡地'
      },
      {
        name: '新天地',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '石库门建筑群改造的时尚休闲区，中西合璧的典范'
      },
      {
        name: '朱家角古镇',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '上海最大的古镇，典型的江南水乡风貌'
      }
    ]
  },
  spots: [
    {
      id: 'theBund',
      name: '外滩',
      description: '上海外滩是上海最著名的地标，52幢风格迥异的古典复兴大楼被称为万国建筑博览群',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市黄浦区中山东一路',
      type: 'culture',
      cultureType: 'modern',
      bestTime: '夜晚',
      tags: ['夜景', '建筑', '历史', '黄浦江'],
      rating: 4.7
    },
    {
      id: 'orientalPearlTower',
      name: '东方明珠塔',
      description: '上海的标志性文化景观之一，塔高约468米，是亚洲第四、世界第六高塔',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市浦东新区世纪大道1号',
      type: 'culture',
      cultureType: 'modern',
      bestTime: '傍晚至夜晚',
      tags: ['电视塔', '观景', '现代建筑', '浦东'],
      rating: 4.5,
      landscapeType: 'urban_nature',
      landscapeCategory: ['人文景观'],
      landformTags: ['城市景观']
    },
    {
      id: 'yuGarden',
      name: '豫园',
      description: '始建于明嘉靖年间，是江南古典园林的代表，素有城市山林之美誉',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市黄浦区福佑路168号',
      type: 'culture',
      cultureType: 'garden_arch',
      bestTime: '春季',
      tags: ['园林', '明代', '江南风格', '古典'],
      rating: 4.4,
      landscapeType: 'urban_nature',
      landscapeCategory: ['人文景观'],
      landformTags: ['园林景观']
    },
    {
      id: 'shanghaiDisneyland',
      name: '上海迪士尼乐园',
      description: '中国大陆首座迪士尼主题乐园，拥有全球最大的奇幻童话城堡',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市浦东新区川沙新镇',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全年',
      tags: ['主题乐园', '亲子', '娱乐', '童话'],
      rating: 4.6
    },
    {
      id: 'nanjingRoad',
      name: '南京路步行街',
      description: '被誉为中华商业第一街，全长5.5公里，是上海最繁华的商业街',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市黄浦区南京东路',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全天',
      tags: ['购物', '商业', '步行街', '繁华'],
      rating: 4.3
    },
    {
      id: 'tianzifang',
      name: '田子坊',
      description: '由上海特有的石库门里弄改建而成，充满艺术气息的小资聚集地',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市黄浦区泰康路210弄',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '下午',
      tags: ['艺术', '文创', '弄堂', '小资'],
      rating: 4.2
    },
    {
      id: 'xintiandi',
      name: '新天地',
      description: '以上海独特的石库门建筑旧区为基础改造成的时尚休闲步行街',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市黄浦区马当路119号',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '傍晚',
      tags: ['石库门', '时尚', '餐饮', '夜生活'],
      rating: 4.4
    },
    {
      id: 'zhujiajiao',
      name: '朱家角古镇',
      description: '上海保存最完整的江南水乡古镇，有上海威尼斯之称',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市青浦区朱家角镇',
      type: 'culture',
      cultureType: 'historical_site',
      bestTime: '春秋两季',
      tags: ['古镇', '水乡', '历史', '桥梁'],
      rating: 4.3,
      landscapeType: 'urban_nature',
      landscapeCategory: ['人文景观'],
      landformTags: ['水乡景观']
    },
    {
      id: 'sheshanPark',
      name: '佘山国家森林公园',
      description: '上海唯一的自然山林胜地，拥有天主教堂和天文台',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市松江区佘山镇',
      type: 'nature',
      bestTime: '春秋两季',
      tags: ['森林公园', '登山', '教堂', '天文台'],
      rating: 4.2,
      landscapeType: 'mountain'
    },
    {
      id: 'dishuiLake',
      name: '滴水湖',
      description: '上海临港新城的人工湖泊，环湖景观优美适合骑行',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '上海市浦东新区南汇新城镇',
      type: 'nature',
      bestTime: '全年',
      tags: ['湖泊', '人工湖', '骑行', '观鸟'],
      rating: 4.0,
      landscapeType: 'water'
    }
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开，气温宜人，是游览豫园、逛南京路的最佳时节',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['豫园赏花', '顾村公园樱花节', '滨江骑行', '城隍庙品尝小吃']
    },
    {
      name: '夏季',
      description: '炎热潮湿，适合室内活动和夜游，外滩夜景迷人',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['上海博物馆参观', '迪士尼游玩', '外滩夜游', '商场购物']
    },
    {
      name: '秋季',
      description: '金桂飘香，秋高气爽，是上海最美的季节',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['共青森林公园赏桂花', '佘山登高', '武康路漫步', '新天地品咖啡']
    },
    {
      name: '冬季',
      description: '湿冷阴沉，但圣诞节新年期间气氛热烈，商场促销活动多',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['圣诞集市', '跨年倒计时', '室内展览', '温泉度假']
    }
  ],
  activities: [
    {
      id: '1',
      name: '外滩夜游',
      description: '乘坐浦江游船欣赏两岸璀璨夜景，感受魔都魅力',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      category: 'nightlife',
      location: '外滩十六铺码头',
      duration: '1小时',
      difficulty: '简单',
      type: '观光体验'
    },
    {
      id: '2',
      name: '迪士尼一日游',
      description: '畅玩上海迪士尼乐园，体验童话世界的欢乐',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      category: 'entertainment',
      location: '上海迪士尼乐园',
      duration: '全天',
      difficulty: '简单',
      type: '主题乐园体验'
    }
  ],
  routes: [
    {
      id: '1',
      name: '上海经典二日游',
      title: '上海经典二日游',
      description: '涵盖上海必游景点，感受中西合璧的海派文化',
      duration: '2天',
      difficulty: '简单',
      highlights: ['外滩', '东方明珠', '豫园', '南京路'],
      spots: ['外滩', '东方明珠广播电视塔', '豫园及城隍庙', '南京路步行街'],
      tags: ['都市', '海派文化', '购物', '夜景'],
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      rating: 4.7,
      bestTime: '春秋两季',
      traffic: '地铁',
      suitableFor: '所有游客'
    }
  ],
  intangibleHeritage: [
    {
      id: '1',
      name: '沪剧',
      description: '上海地方戏曲，流行于上海及江浙吴语地区',
      level: 'national',
      category: '传统戏剧',
      protectionUnit: '上海沪剧院',
      features: ['地方戏曲', '国家级非遗', '吴语文化', '海派艺术'],
      icon: '🎭',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`
    }
  ],
  festivals: [
    {
      id: '1',
      name: '上海国际电影节',
      description: '中国第一个国际A类电影节，每年六月举办',
      month: '6月',
      day: '15-20日左右',
      location: '上海各大影院',
      isUnique: true
    }
  ],
  folkCustomsElements: [
    {
      name: '海派文化',
      description: '中西文化交融形成的独特地域文化，开放包容、精致时尚',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      tags: ['海派', '中西合璧', '时尚', '包容']
    },
    {
      name: '石库门文化',
      description: '上海独特的民居形式，融合了西方联排建筑和中国传统合院式建筑的特点',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      tags: ['石库门', '民居', '中西融合', '历史建筑']
    }
  ]
};

export default shanghaiData;