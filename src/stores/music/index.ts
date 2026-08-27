import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { 
  Song, Artist, Album, Playlist, MV, LyricLine, 
  Toplist, SearchHot, RecommendPlaylist, NewSong, BannerImage,
  ArtistDetail, MyPlaylist, LocalFolder, PlayTimeInfo, LocalSong 
} from '@/types/music'
import { 
  artists, albums, songs, mvs, 
  playlists, 
  toplists, searchHots, recommendPlaylists, newSongs, bannerImages,
  lyrics,
  artistDetails,
  likedSongsData, recentPlayedData, collectionPlaylistsData, 
  localSongsData, localFoldersData, recentPlaylistsData, collectionSongsData
} from './data'

export type { 
  Song, Artist, Album, Playlist, MV, LyricLine,
  Toplist, SearchHot, RecommendPlaylist, NewSong, BannerImage,
  ArtistDetail, MyPlaylist, LocalFolder, PlayTimeInfo, LocalSong
}

export { 
  artists, albums, songs, mvs, 
  playlists, 
  toplists, searchHots, recommendPlaylists, newSongs, bannerImages,
  lyrics,
  artistDetails,
  likedSongsData, recentPlayedData, collectionPlaylistsData, 
  localSongsData, localFoldersData, recentPlaylistsData, collectionSongsData
}

export const useMusicDataStore = defineStore('musicData', () => {
  const artistMap = computed(() => {
    const map = new Map<number, Artist>()
    for (const a of artists) {
      map.set(a.id, a)
    }
    return map
  })

  const albumMap = computed(() => {
    const map = new Map<number, Album>()
    for (const a of albums) {
      map.set(a.id, a)
    }
    return map
  })

  const songMap = computed(() => {
    const map = new Map<number, Song>()
    for (const s of songs) {
      map.set(s.id, s)
    }
    return map
  })

  const playlistMap = computed(() => {
    const map = new Map<number, Playlist>()
    for (const p of playlists) {
      map.set(p.id, p)
    }
    return map
  })

  const mvMap = computed(() => {
    const map = new Map<number, MV>()
    for (const m of mvs) {
      map.set(m.id, m)
    }
    return map
  })

  const artistDetailMap = computed(() => {
    const map = new Map<number, ArtistDetail>()
    for (const a of artistDetails) {
      map.set(a.id, a)
    }
    return map
  })

  const getArtist = (id: number): Artist | undefined => artistMap.value.get(id)
  const getAlbum = (id: number): Album | undefined => albumMap.value.get(id)
  const getSong = (id: number): Song | undefined => songMap.value.get(id)
  const getPlaylist = (id: number): Playlist | undefined => playlistMap.value.get(id)
  const getMV = (id: number): MV | undefined => mvMap.value.get(id)
  const getArtistDetail = (id: number): ArtistDetail | undefined => {
    const detail = artistDetailMap.value.get(id)
    if (detail) return detail
    const artist = getArtist(id)
    if (!artist) return undefined
    return {
      id: artist.id,
      name: artist.name,
      avatar: artist.avatar || '',
      alias: artist.alias,
      description: `${artist.name}，一位才华横溢的音乐人。`,
      songCount: Math.floor(Math.random() * 200) + 50,
      albumCount: Math.floor(Math.random() * 15) + 3,
      fanCount: Math.floor(Math.random() * 50000000) + 1000000,
      tags: ['华语', '流行'],
      hotSongs: getSongsByArtist(id).slice(0, 5),
      albums: []
    }
  }

  const getLyricsBySongId = (songId: number): LyricLine[] => {
    return lyrics[songId] || [{ time: 0, text: '暂无歌词' }]
  }

  const getSongsByArtist = (artistId: number): Song[] => {
    return songs.filter(s => s.artists.some(a => a.id === artistId))
  }

  const getAllArtists = (): Artist[] => artists
  const getAllAlbums = (): Album[] => albums
  const getAllSongs = (): Song[] => songs
  const getAllPlaylists = (): Playlist[] => playlists
  const getAllMVs = (): MV[] => mvs
  const getAllToplists = (): Toplist[] => toplists
  const getAllSearchHots = (): SearchHot[] => searchHots
  const getAllRecommendPlaylists = (): RecommendPlaylist[] => recommendPlaylists
  const getAllNewSongs = (): NewSong[] => newSongs
  const getAllBannerImages = (): BannerImage[] => bannerImages

  const getLikedSongs = (): Song[] => likedSongsData
  const getRecentPlayed = (): PlayTimeInfo[] => recentPlayedData
  const getCollectionPlaylists = (): MyPlaylist[] => collectionPlaylistsData
  const getLocalSongs = (): LocalSong[] => localSongsData
  const getLocalFolders = (): LocalFolder[] => localFoldersData
  const getRecentPlaylists = (): (MyPlaylist & { lastPlayed: string })[] => recentPlaylistsData
  const getCollectionSongs = (): Song[] => collectionSongsData

  const searchSongs = (keyword: string): Song[] => {
    const lowerKeyword = keyword.toLowerCase()
    return songs.filter(s => 
      s.name.toLowerCase().includes(lowerKeyword) ||
      s.artists.some(a => a.name.toLowerCase().includes(lowerKeyword))
    )
  }

  const searchPlaylists = (keyword: string): Playlist[] => {
    const lowerKeyword = keyword.toLowerCase()
    return playlists.filter(p => 
      p.name.toLowerCase().includes(lowerKeyword) ||
      p.tags.some(t => t.toLowerCase().includes(lowerKeyword))
    )
  }

  const searchArtists = (keyword: string): Artist[] => {
    const lowerKeyword = keyword.toLowerCase()
    return artists.filter(a => 
      a.name.toLowerCase().includes(lowerKeyword) ||
      (a.alias && a.alias.toLowerCase().includes(lowerKeyword))
    )
  }

  return {
    artistMap,
    albumMap,
    songMap,
    playlistMap,
    mvMap,
    artistDetailMap,
    getArtist,
    getAlbum,
    getSong,
    getPlaylist,
    getMV,
    getArtistDetail,
    getLyricsBySongId,
    getSongsByArtist,
    getAllArtists,
    getAllAlbums,
    getAllSongs,
    getAllPlaylists,
    getAllMVs,
    getAllToplists,
    getAllSearchHots,
    getAllRecommendPlaylists,
    getAllNewSongs,
    getAllBannerImages,
    getLikedSongs,
    getRecentPlayed,
    getCollectionPlaylists,
    getLocalSongs,
    getLocalFolders,
    getRecentPlaylists,
    getCollectionSongs,
    searchSongs,
    searchPlaylists,
    searchArtists
  }
})
