import type { SceneryData } from '@/types/travelGuide';

export const macauData: SceneryData = {
  overview: {
    totalSpots: 60,
    natureSpots: 20,
    cultureSpots: 40,
    topAttractions: [
      {
        name: '大三巴牌�?,
        image: 'https://picsum.photos/id/1760/600/400',
        description: '澳门的标志性建�?世界文化遗产',
      },
      {
        name: '威尼斯人',
        image: 'https://picsum.photos/id/1761/600/400',
        description: '亚洲著名的综合性度假村',
      },
      {
        name: '妈阁�?,
        image: 'https://picsum.photos/id/1762/600/400',
        description: '澳门最古老的庙宇,供奉妈祖',
      },
      {
        name: '澳门�?,
        image: 'https://picsum.photos/id/1763/600/400',
        description: '澳门新的地标性建�?世界第十高塔',
      },
      {
        name: '议事亭前�?,
        image: 'https://picsum.photos/id/1764/600/400',
        description: '澳门的历史文化中�?,
      },
      {
        name: '葡京酒店',
        image: 'https://picsum.photos/id/1765/600/400',
        description: '澳门最著名的酒店和赌场',
      },
      {
        name: '路环�?,
        image: 'https://picsum.photos/id/1766/600/400',
        description: '澳门最大的岛屿,保留着自然风光',
      },
      {
        name: '黑沙海滩',
        image: 'https://picsum.photos/id/1767/600/400',
        description: '澳门最著名的海�?以黑沙著�?,
      },
    ],
  },
  spots: [
    {
      id: 'ruinsOfStPauls',
      name: '大三巴牌�?,
      description: '澳门的标志性建�?世界文化遗产',
      image: 'https://picsum.photos/id/1760/600/400',
      location: '澳门特别行政区花地玛堂区',
      type: 'culture',
      bestTime: '全年',
      tags: ['建筑', '世界遗产', '历史', '文化'],
      rating: 4.7,
    },
    {
      id: 'venetianMacao',
      name: '威尼斯人',
      description: '亚洲著名的综合性度假村',
      image: 'https://picsum.photos/id/1761/600/400',
      location: '澳门特别行政区路氹城',
      type: 'culture',
      bestTime: '全年',
      tags: ['度假�?, '娱乐', '购物', '酒店'],
      rating: 4.6,
    },
    {
      id: 'amaTemple',
      name: '妈阁�?,
      description: '澳门最古老的庙宇,供奉妈祖',
      image: 'https://picsum.photos/id/1762/600/400',
      location: '澳门特别行政区风顺堂�?,
      type: 'culture',
      bestTime: '全年',
      tags: ['庙宇', '妈祖', '宗教', '文化'],
      rating: 4.5,
    },
    {
      id: 'macauTower',
      name: '澳门�?,
      description: '澳门新的地标性建�?世界第十高塔',
      image: 'https://picsum.photos/id/1763/600/400',
      location: '澳门特别行政区大堂区',
      type: 'culture',
      bestTime: '全年',
      tags: ['�?, '地标', '观光', '娱乐'],
      rating: 4.6,
    },
    {
      id: 'senadoSquare',
      name: '议事亭前�?,
      description: '澳门的历史文化中�?,
      image: 'https://picsum.photos/id/1764/600/400',
      location: '澳门特别行政区风顺堂�?,
      type: 'culture',
      bestTime: '全年',
      tags: ['广场', '历史', '文化', '建筑'],
      rating: 4.5,
    },
    {
      id: 'grandLisboa',
      name: '葡京酒店',
      description: '澳门最著名的酒店和赌场',
      image: 'https://picsum.photos/id/1765/600/400',
      location: '澳门特别行政区大堂区',
      type: 'culture',
      bestTime: '全年',
      tags: ['酒店', '赌场', '娱乐', '建筑'],
      rating: 4.5,
    },
    {
      id: 'coloane',
      name: '路环�?,
      description: '澳门最大的岛屿,保留着自然风光',
      image: 'https://picsum.photos/id/1766/600/400',
      location: '澳门特别行政区路�?,
      type: 'nature',
      bestTime: '全年',
      tags: ['海岛', '自然', '风光', '休闲'],
      rating: 4.4,
    },
    {
      id: 'hacSaBeach',
      name: '黑沙海滩',
      description: '澳门最著名的海�?以黑沙著�?,
      image: 'https://picsum.photos/id/1767/600/400',
      location: '澳门特别行政区路�?,
      type: 'nature',
      bestTime: '夏季',
      tags: ['海滩', '自然', '风光', '休闲'],
      rating: 4.4,
    },
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开,是游览澳门的好时�?,
      image: 'https://picsum.photos/id/1760/600/400',
      activities: ['大三巴牌坊游�?, '议事亭前地漫�?, '妈阁庙参�?, '威尼斯人游览'],
    },
    {
      name: '夏季',
      description: '热带风情,是避暑纳凉的好去�?,
      image: 'https://picsum.photos/id/1761/600/400',
      activities: ['威尼斯人游览', '黑沙海滩游泳', '澳门塔观�?, '路环岛游�?],
    },
    {
      name: '秋季',
      description: '秋高气爽,是游览澳门的好时�?,
      image: 'https://picsum.photos/id/1760/600/400',
      activities: ['大三巴牌坊游�?, '议事亭前地漫�?, '澳门塔观�?, '葡京酒店游览'],
    },
    {
      name: '冬季',
      description: '温暖如春,是旅游的好时�?,
      image: 'https://picsum.photos/id/1760/600/400',
      activities: ['大三巴牌坊游�?, '威尼斯人游览', '妈阁庙参�?, '澳门塔观�?],
    },
  ],
  activities: [
    {
      id: '1',
      name: '大三巴牌坊游�?,
      description: '游览澳门标志性建筑大三巴牌坊',
      image: 'https://picsum.photos/id/1760/600/400',
      category: 'culture',
      location: '大三巴牌�?,
      duration: '1-2小时',
      difficulty: '简�?,
      type: '文化体验',
    },
    {
      id: '2',
      name: '威尼斯人游览',
      description: '游览亚洲著名的综合性度假村威尼斯人',
      image: 'https://picsum.photos/id/1761/600/400',
      category: 'culture',
      location: '威尼斯人',
      duration: '1�?,
      difficulty: '简�?,
      type: '娱乐体验',
    },
  ],
  routes: [
    {
      id: '1',
      name: '澳门经典之旅',
      title: '澳门经典之旅',
      description: '游览澳门最著名的景�?,
      duration: '2�?,
      difficulty: '简�?,
      highlights: ['大三巴牌�?, '威尼斯人', '妈阁�?],
      spots: ['大三巴牌�?, '威尼斯人', '妈阁�?],
      tags: ['文化', '历史', '娱乐'],
      image: 'https://picsum.photos/id/1760/600/400',
      rating: 4.7,
      bestTime: '全年',
      traffic: '公交',
      suitableFor: '所有游�?,
    },
  ],
};

export const macauCustomsData = {
  activities: [
    {
      id: '1',
      name: '澳门美食体验',
      description: '品尝澳门特色美食',
      image: 'https://picsum.photos/id/1764/600/400',
      category: 'culture',
      location: '澳门',
      duration: '1-2小时',
      difficulty: '简�?,
      type: '美食体验',
    },
  ],
};

export const macauIntangibleHeritage: never[] = [];

export const macauFolkCustomsElements: never[] = [];

export const macauFestivals: never[] = [];

export default macauData;
