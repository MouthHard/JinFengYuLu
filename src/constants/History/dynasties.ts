/**
 * History 模块常量
 * 包含：朝代分类体系等静态映射
 */

/** 朝代时间线导航的分类筛选选项 */
export const DYNASTY_CATEGORIES = [
  { label: '全部', value: '' },
  { label: '上古时期', value: 'ancient' },
  { label: '夏商周', value: 'xia-shang-zhou' },
  { label: '秦汉', value: 'qin-han' },
  { label: '三国两晋', value: 'three-kingdoms-jin' },
  { label: '五胡十六国', value: 'five-hus-sixteen-kingdoms' },
  { label: '南北朝', value: 'nanbeichao' },
  { label: '隋唐', value: 'sui-tang' },
  { label: '五代十国', value: 'five-dynasties' },
  { label: '宋辽夏金', value: 'song-liao-xia-jin' },
  { label: '元明清', value: 'yuan-ming-qing' },
] as const;
