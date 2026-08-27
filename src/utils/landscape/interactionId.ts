export const ID_PREFIXES = {
  VIDEO: 'video',
  IMAGE: 'img',
  GUIDE: 'guide',
  PHOTOGRAPHER: 'ph',
  WORK: 'work',
  TOPIC: 'topic',
  DEST: 'dest'
} as const

const INTERACTION_PREFIXES = {
  image: 'img',
  video: 'vid',
  guide: 'guide',
  photographer: 'pho',
} as const

export const createGlobalId = {
  video: (id: number | string) => `${ID_PREFIXES.VIDEO}-${id}`,
  image: (id: number | string) => `${ID_PREFIXES.IMAGE}-${id}`,
  guide: (id: number | string) => `${ID_PREFIXES.GUIDE}-${id}`,
  photographer: (id: number | string) => `${ID_PREFIXES.PHOTOGRAPHER}-${id}`,
  work: (photographerId: string, workIndex: number) =>
    `${ID_PREFIXES.WORK}-${photographerId}-${workIndex}`,
  topic: (id: number | string) => `${ID_PREFIXES.TOPIC}-${id}`,
  destination: (id: number | string) => `${ID_PREFIXES.DEST}-${id}`,
}

export const createInteractionId = {
  image: (id: number | string) => `${INTERACTION_PREFIXES.image}-${id}`,
  video: (id: number | string) => `${INTERACTION_PREFIXES.video}-${id}`,
  guide: (id: number | string) => `${INTERACTION_PREFIXES.guide}-${id}`,
  photographer: (id: number | string) => `${INTERACTION_PREFIXES.photographer}-${id}`,
}

export const parseInteractionId = (id: string) => {
  const [type, ...rest] = id.split('-')
  return { type, originalId: rest.join('-') }
}
