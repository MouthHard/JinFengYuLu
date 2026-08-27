import type { SceneryData } from '@/types/travelGuide';

export const hongkongData: SceneryData = {
  overview: {
    totalSpots: 100,
    natureSpots: 30,
    cultureSpots: 70,
    topAttractions: [
      {
        name: '维多利亚�?,
        image: 'https://picsum.photos/id/1740/600/400',
        description: '世界三大天然良港之一,香港的标志性景�?,
      },
      {
        name: '太平山顶',
        image: 'https://picsum.photos/id/1741/600/400',
        description: '香港最高点,俯瞰香港全景的最佳地�?,
      },
      {
        name: '迪士尼乐�?,
        image: 'https://picsum.photos/id/1742/600/400',
        description: '世界著名主题乐园,家庭旅游的首�?,
      },
      {
        name: '海洋公园',
        image: 'https://picsum.photos/id/1743/600/400',
        description: '亚洲著名主题公园,集海洋动物与机动游戏于一�?,
      },
      {
        name: '中环',
        image: 'https://picsum.photos/id/1744/600/400',
        description: '香港的商业金融中�?繁华的都市景�?,
      },
      {
        name: '尖沙咀',
        image: 'https://picsum.photos/id/1745/600/400',
        description: '香港著名的购物和旅游�?,
      },
      {
        name: '浅水�?,
        image: 'https://picsum.photos/id/1746/600/400',
        description: '香港最著名的海�?富人�?,
      },
      {
        name: '赤柱',
        image: 'https://picsum.photos/id/1747/600/400',
        description: '香港著名的海滩小�?充满欧陆风情',
      },
    ],
  },
  spots: [
    {
      id: 'victoriaHarbor',
      name: '维多利亚�?,
      description: '世界三大天然良港之一,香港的标志性景�?,
      image: 'https://picsum.photos/id/1740/600/400',
      location: '香港特别行政�?,
      type: 'nature',
      bestTime: '全年',
      tags: ['港口', '夜景', '地标', '风光'],
      rating: 4.8,
    },
    {
      id: 'victoriaPeak',
      name: '太平山顶',
      description: '香港最高点,俯瞰香港全景的最佳地�?,
      image: 'https://picsum.photos/id/1741/600/400',
      location: '香港特别行政区中西区',
      type: 'nature',
      bestTime: '全年',
      tags: ['山顶', '观景', '夜景', '风光'],
      rating: 4.7,
    },
    {
      id: 'hongkongDisneyland',
      name: '迪士尼乐�?,
      description: '世界著名主题乐园,家庭旅游的首�?,
      image: 'https://picsum.photos/id/1742/600/400',
      location: '香港特别行政区大屿山',
      type: 'culture',
      bestTime: '全年',
      tags: ['主题公园', '亲子', '娱乐', '梦幻'],
      rating: 4.6,
    },
    {
      id: 'oceanPark',
      name: '海洋公园',
      description: '亚洲著名主题公园,集海洋动物与机动游戏于一�?,
      image: 'https://picsum.photos/id/1743/600/400',
      location: '香港特别行政区南�?,
      type: 'culture',
      bestTime: '全年',
      tags: ['主题公园', '海洋', '娱乐', '亲子'],
      rating: 4.5,
    },
    {
      id: 'central',
      name: '中环',
      description: '香港的商业金融中�?繁华的都市景�?,
      image: 'https://picsum.photos/id/1744/600/400',
      location: '香港特别行政区中西区',
      type: 'culture',
      bestTime: '全年',
      tags: ['商业', '金融', '都市', '购物'],
      rating: 4.5,
    },
    {
      id: 'tsimShaTsui',
      name: '尖沙咀',
      description: '香港著名的购物和旅游�?,
      image: 'https://picsum.photos/id/1745/600/400',
      location: '香港特别行政区油尖旺�?,
      type: 'culture',
      bestTime: '全年',
      tags: ['购物', '旅游', '商业', '美食'],
      rating: 4.6,
    },
    {
      id: 'repulseBay',
      name: '浅水�?,
      description: '香港最著名的海�?富人�?,
      image: 'https://picsum.photos/id/1746/600/400',
      location: '香港特别行政区南�?,
      type: 'nature',
      bestTime: '夏季',
      tags: ['海滩', '度假', '富人�?, '风光'],
      rating: 4.4,
    },
    {
      id: 'stanley',
      name: '赤柱',
      description: '香港著名的海滩小�?充满欧陆风情',
      image: 'https://picsum.photos/id/1747/600/400',
      location: '香港特别行政区南�?,
      type: 'culture',
      bestTime: '全年',
      tags: ['海滩', '小镇', '欧陆', '风情'],
      rating: 4.4,
    },
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开,是游览香港的好时�?,
      image: 'https://picsum.photos/id/1740/600/400',
      activities: ['维多利亚港游�?, '太平山顶观光', '迪士尼乐园游�?, '中环购物'],
    },
    {
      name: '夏季',
      description: '热带风情,是避暑纳凉的好去�?,
      image: 'https://picsum.photos/id/1746/600/400',
      activities: ['浅水湾海�?, '海洋公园游玩', '迪士尼乐园游�?, '尖沙咀购物'],
    },
    {
      name: '秋季',
      description: '秋高气爽,是游览香港的好时�?,
      image: 'https://picsum.photos/id/1740/600/400',
      activities: ['维多利亚港游�?, '太平山顶观光', '中环购物', '赤柱游览'],
    },
    {
      name: '冬季',
      description: '温暖如春,是旅游的好时�?,
      image: 'https://picsum.photos/id/1740/600/400',
      activities: ['维多利亚港游�?, '太平山顶观光', '迪士尼乐园游�?, '尖沙咀购物'],
    },
  ],
  activities: [
    {
      id: '1',
      name: '维多利亚港夜�?,
      description: '夜游维多利亚�?欣赏香港夜景',
      image: 'https://picsum.photos/id/1740/600/400',
      category: 'nature',
      location: '维多利亚�?,
      duration: '1-2小时',
      difficulty: '简�?,
      type: '自然体验',
    },
    {
      id: '2',
      name: '迪士尼乐园游�?,
      description: '在香港迪士尼乐园享受梦幻的一�?,
      image: 'https://picsum.photos/id/1742/600/400',
      category: 'culture',
      location: '香港迪士尼乐�?,
      duration: '1�?,
      difficulty: '简�?,
      type: '娱乐体验',
    },
  ],
  routes: [
    {
      id: '1',
      name: '香港经典之旅',
      title: '香港经典之旅',
      description: '游览香港最著名的景�?,
      duration: '3�?,
      difficulty: '简�?,
      highlights: ['维多利亚�?, '太平山顶', '迪士尼乐�?],
      spots: ['维多利亚�?, '太平山顶', '迪士尼乐�?],
      tags: ['城市', '文化', '娱乐'],
      image: 'https://picsum.photos/id/1740/600/400',
      rating: 4.8,
      bestTime: '全年',
      traffic: '地铁',
      suitableFor: '所有游�?,
    },
  ],
};

export const hongkongCustomsData = {
  activities: [
    {
      id: '1',
      name: '香港美食体验',
      description: '品尝香港特色美食',
      image: 'https://picsum.photos/id/1744/600/400',
      category: 'culture',
      location: '香港',
      duration: '1-2小时',
      difficulty: '简�?,
      type: '美食体验',
    },
  ],
};

export const hongkongIntangibleHeritage: never[] = [];

export const hongkongFolkCustomsElements: never[] = [];

export const hongkongFestivals: never[] = [];

export default hongkongData;
