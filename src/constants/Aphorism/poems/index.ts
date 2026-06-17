/**
 * 诗词数据导出
 * 合并两部分诗词数据
 */

import { poemsPart1 } from "./part1";
import { poemsPart2 } from "./part2";

export const poems = [...poemsPart1, ...poemsPart2];