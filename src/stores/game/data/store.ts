import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { GameItem, GameBanner, GameCategoryInfo } from '@/typesOfPages/game'
// 业务数据从 data/index 导入（data/index 会从 @/constants/Game 转发常量）
import { games, gameBanners, gameCategories } from './index'

export type { GameItem, GameBanner, GameCategoryInfo }

export const useGameDataStore = defineStore('gameData', () => {
  const gameMap = computed(() => {
    const map = new Map<string, GameItem>()
    for (const game of games) {
      map.set(game.id, game)
    }
    return map
  })

  const getGame = (id: string): GameItem | undefined => {
    return gameMap.value.get(id)
  }

  const getAllGames = (): GameItem[] => games

  const getAllBanners = (): GameBanner[] => gameBanners

  const getAllCategories = (): GameCategoryInfo[] => gameCategories

  const getGamesByCategory = (category: string): GameItem[] => {
    if (category === 'all' || !category) return games
    return games.filter(game => game.category === category)
  }

  const getGamesByTag = (tag: string): GameItem[] => {
    return games.filter(game => game.tags?.includes(tag as GameItem['tags'][number]))
  }

  const getOnSaleGames = (): GameItem[] => {
    return games.filter(game => game.discount && game.discount > 0)
  }

  const getNewGames = (): GameItem[] => {
    return games.filter(game => game.tags?.includes('new'))
  }

  const getHotGames = (): GameItem[] => {
    return games.filter(game => game.tags?.includes('hot'))
  }

  const searchGames = (keyword: string): GameItem[] => {
    if (!keyword) return games
    const lowerKeyword = keyword.toLowerCase()
    return games.filter(game =>
      game.title.toLowerCase().includes(lowerKeyword) ||
      game.subtitle?.toLowerCase().includes(lowerKeyword) ||
      game.developer?.toLowerCase().includes(lowerKeyword) ||
      game.tags?.some(tag => tag.toLowerCase().includes(lowerKeyword))
    )
  }

  return {
    gameMap,
    getGame,
    getAllGames,
    getAllBanners,
    getAllCategories,
    getGamesByCategory,
    getGamesByTag,
    getOnSaleGames,
    getNewGames,
    getHotGames,
    searchGames,
    gameBanners,
    gameCategories
  }
})
