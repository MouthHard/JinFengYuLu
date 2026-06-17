import { FoodItem } from '../../../../typesOfPages/travelGuide';
import { foodDataNorth } from './foodDataNorth';
import { foodDataNortheast } from './foodDataNortheast';
import { foodDataEast } from './foodDataEast';
import { foodDataCentral } from './foodDataCentral';
import { foodDataSouth } from './foodDataSouth';
import { foodDataSouthwest } from './foodDataSouthwest';
import { foodDataNorthwest } from './foodDataNorthwest';
import { foodDataSpecial } from './foodDataSpecial';

export const allFoodData: FoodItem[] = [
  ...foodDataNorth,
  ...foodDataNortheast,
  ...foodDataEast,
  ...foodDataCentral,
  ...foodDataSouth,
  ...foodDataSouthwest,
  ...foodDataNorthwest,
  ...foodDataSpecial
];

export const foodDataByProvince: Record<string, FoodItem[]> = {};

allFoodData.forEach(food => {
  const provinceKey = getProvinceKey(food.province || '');
  if (!foodDataByProvince[provinceKey]) {
    foodDataByProvince[provinceKey] = [];
  }
  foodDataByProvince[provinceKey].push({
    ...food,
    isPopular: !!(food.rating && food.rating >= 4.3),
    badgeText: food.rating && food.rating >= 4.7 ? '必吃' : food.rating && food.rating >= 4.5 ? '推荐' : '热门',
    badgeColor: food.rating && food.rating >= 4.7 ? '#ff4444' : food.rating && food.rating >= 4.5 ? '#ffaa00' : '#4ecdc4',
    tags: [food.category, food.taste || '', ...(food.ingredients?.slice(0, 2) || [])],
    recommendations: {
      pairings: food.ingredients?.slice(0, 3) || [],
      eatingMethod: food.cookingMethod || '',
    },
  });
});

function getProvinceKey(provinceName: string): string {
  const provinceMap: Record<string, string> = {
    '北京': 'beijing',
    '上海': 'shanghai',
    '天津': 'tianjin',
    '重庆': 'chongqing',
    '河北': 'hebei',
    '山西': 'shanxi',
    '辽宁': 'liaoning',
    '吉林': 'jilin',
    '黑龙江': 'heilongjiang',
    '江苏': 'jiangsu',
    '浙江': 'zhejiang',
    '安徽': 'anhui',
    '福建': 'fujian',
    '江西': 'jiangxi',
    '山东': 'shandong',
    '河南': 'henan',
    '湖北': 'hubei',
    '湖南': 'hunan',
    '广东': 'guangdong',
    '广西': 'guangxi',
    '海南': 'hainan',
    '四川': 'sichuan',
    '贵州': 'guizhou',
    '云南': 'yunnan',
    '西藏': 'xizang',
    '陕西': 'shaanxi',
    '甘肃': 'gansu',
    '青海': 'qinghai',
    '宁夏': 'ningxia',
    '新疆': 'xinjiang',
    '内蒙古': 'neimenggu',
    '台湾': 'taiwan',
    '香港': 'hongkong',
    '澳门': 'macau',
  };

  return provinceMap[provinceName] || provinceName.toLowerCase();
}

export default allFoodData;
