/**
 * 诗词分类相关类型定义
 */

/** 诗词分类接口 */
export interface Category {
  id: string;
  name: string;
  icon?: string;
  count?: number;
  children?: Category[];
  subCategories?: string[];
}

/** 分类筛选参数 */
export interface CategoryFilterParams {
  categoryId?: string;
  subCategoryId?: string;
}
