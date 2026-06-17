/**
 * Museum 文创产品分类常量
 *
 * 从各省份数据中提取的唯一分类列表
 */

/** 文创产品标准分类（固定8个核心分类） */
export const CREATIVE_CATEGORIES = [
  '艺术精品',
  '历史文化',
  '模型摆件',
  '生活日用',
  '文具办公',
  '茶具器皿',
  '图书音像',
  '工艺饰品',
] as const;

export type CreativeCategory = (typeof CREATIVE_CATEGORIES)[number];
