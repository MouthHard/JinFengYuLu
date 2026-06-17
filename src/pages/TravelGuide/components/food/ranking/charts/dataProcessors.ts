import type { Food } from '@/typesOfPages/travelGuide';

/**
 * 计算价格分布范围
 * @param foods 美食数据数组
 * @returns 价格分布统计
 */
export const calculatePriceRanges = (foods: Food[]) => {
  const priceRanges: Record<string, number> = {
    '¥0-50': 0,
    '¥51-100': 0,
    '¥101-150': 0,
    '¥151-200': 0,
    '¥200+': 0,
  };

  foods.forEach((food: Food) => {
    const price = food.price;
    if (price !== undefined) {
      const numPrice = Number(price);
      if (numPrice <= 50) priceRanges['¥0-50']++;
      else if (numPrice <= 100) priceRanges['¥51-100']++;
      else if (numPrice <= 150) priceRanges['¥101-150']++;
      else if (numPrice <= 200) priceRanges['¥151-200']++;
      else priceRanges['¥200+']++;
    }
  });

  return priceRanges;
};

/**
 * 计算分类数量
 * @param foods 美食数据数组
 * @returns 分类数量统计
 */
export const calculateCategoryCounts = (foods: Food[]) => {
  const categoryCounts: Record<string, number> = {};
  foods.forEach((food: Food) => {
    if (food.category) {
      categoryCounts[food.category] = (categoryCounts[food.category] || 0) + 1;
    }
  });
  return categoryCounts;
};

/**
 * 按价格和评分分组数据
 * @param foods 美食数据数组
 * @returns 分组后的数据
 */
export const groupPriceRatingData = (foods: Food[]) => {
  const priceRatingGroups: Record<
    string,
    { price: number; rating: number; count: number; foods: Food[] }
  > = {};

  foods.forEach((food: Food) => {
    if (food.price !== undefined) {
      const numPrice = Number(food.price);
      const priceRange = Math.floor(numPrice / 20) * 20;
      const ratingRange = Math.floor(food.rating / 0.5) * 0.5;
      const key = `${priceRange}-${ratingRange}`;

      if (!priceRatingGroups[key]) {
        priceRatingGroups[key] = {
          price: priceRange,
          rating: ratingRange,
          count: 0,
          foods: [],
        };
      }

      priceRatingGroups[key].count++;
      priceRatingGroups[key].foods.push(food);
    }
  });

  return priceRatingGroups;
};
