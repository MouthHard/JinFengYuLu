import { useMusicDataStore } from '@/stores/music'
import type { Song, Artist, Playlist } from '@/types/music'

export function useMusicSearch() {
  const musicStore = useMusicDataStore()
  
  const search = (keyword: string) => {
    if (!keyword.trim()) {
      return {
        songs: [],
        artists: [],
        playlists: []
      }
    }
    
    return {
      songs: musicStore.searchSongs(keyword),
      artists: musicStore.searchArtists(keyword),
      playlists: musicStore.searchPlaylists(keyword)
    }
  }
  
  return { search }
}

export function useMusicPlayer() {
  const musicStore = useMusicDataStore()
  
  const getSongDetail = (id: number): Song | undefined => {
    return musicStore.getSong(id)
  }
  
  const getArtistInfo = (id: number): Artist | undefined => {
    return musicStore.getArtist(id)
  }
  
  const getPlaylistInfo = (id: number): Playlist | undefined => {
    return musicStore.getPlaylist(id)
  }
  
  return {
    getSongDetail,
    getArtistInfo,
    getPlaylistInfo
  }
}

export function useMyMusic() {
  const musicStore = useMusicDataStore()
  
  const likedSongs = () => musicStore.getLikedSongs()
  const recentPlayed = () => musicStore.getRecentPlayed()
  const collectionPlaylists = () => musicStore.getCollectionPlaylists()
  const collectionSongs = () => musicStore.getCollectionSongs()
  const localSongs = () => musicStore.getLocalSongs()
  const localFolders = () => musicStore.getLocalFolders()
  const recentPlaylists = () => musicStore.getRecentPlaylists()
  
  return {
    likedSongs,
    recentPlayed,
    collectionPlaylists,
    collectionSongs,
    localSongs,
    localFolders,
    recentPlaylists
  }
}

export { useMusicDataStore }
