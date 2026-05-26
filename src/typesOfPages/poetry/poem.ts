/**
 * 诗词实体类型定义
 */

/** 诗词接口 */
export interface Poem {
  id: string;
  title: string;
  author: string;
  dynasty: string;
  content: string[];
  form?: string;
  tags?: string[];
  imageUrl?: string;
  annotation?: string;
  translation?: string;
  background?: string;
  appreciation?: string;
  poetIntroduction?: string;
}
