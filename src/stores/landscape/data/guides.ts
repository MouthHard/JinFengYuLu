import type { GlobalGuide } from '@/typesOfPages/landscape/data'
import { guidesPart1 } from './guides-part1'
import { guidesPart2 } from './guides-part2'
import { guidesPart3 } from './guides-part3'

export const allGuides: GlobalGuide[] = [
  ...guidesPart1,
  ...guidesPart2,
  ...guidesPart3,
]
