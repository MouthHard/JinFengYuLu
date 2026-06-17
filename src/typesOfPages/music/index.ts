// 歌曲类型定义
export interface Song {
  id: number;
  name: string;
  artists: Artist[];
  album: Album;
  duration: number;
  cover: string;
  isVip?: boolean;
  isSq?: boolean;
}

// 歌手类型定义
export interface Artist {
  id: number;
  name: string;
  avatar?: string;
  alias?: string;
}

// 专辑类型定义
export interface Album {
  id: number;
  name: string;
  cover: string;
  publishTime?: string;
}

// 歌单类型定义
export interface Playlist {
  id: number;
  name: string;
  cover: string;
  creator: string;
  creatorAvatar?: string;
  description?: string;
  tags: string[];
  playCount: number;
  songCount: number;
  songs: Song[];
}

// 歌词行类型定义
export interface LyricLine {
  time: number;
  text: string;
  translation?: string;
}

// 搜索热词类型定义
export interface SearchHot {
  id: number;
  text: string;
  heat: number;
  icon?: string;
}

// 播放模式类型
export type PlayMode = "sequence" | "loop" | "random" | "single";





// 推荐歌单卡片类型定义
export interface RecommendPlaylist {
  id: number;
  name: string;
  cover: string;
  playCount: number;
  songCount: number;
}

// 推荐新歌类型定义
export interface NewSong {
  id: number;
  name: string;
  artists: Artist[];
  album: Album;
  duration: number;
  cover: string;
  isVip?: boolean;
  isSq?: boolean;
}

// 排行榜类型定义
export interface Toplist {
  id: number;
  name: string;
  cover: string;
  description?: string;
  songs: Song[];
  updateFrequency: string;
}



// 歌手详情类型定义
export interface ArtistDetail {
  id: number;
  name: string;
  avatar: string;
  alias?: string;
  description: string;
  songCount: number;
  albumCount: number;
  fanCount: number;
  tags: string[];
  hotSongs: Song[];
  albums: Album[];
}

// MV类型定义
export interface MV {
  id: number;
  name: string;
  artist: string;
  cover: string;
  duration: number;
  playCount?: number;
}

// 轮播图类型定义
export interface BannerImage {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

// 我的歌单类型定义（简化版，不含歌曲列表）
export interface MyPlaylist {
  id: number;
  name: string;
  cover: string;
  songCount: number;
  description?: string;
  creator?: string;
  lastPlayed?: string;
}

// 本地文件夹类型定义
export interface LocalFolder {
  id: number;
  name: string;
  songCount: number;
  path?: string;
}

// 播放时间信息类型定义
export interface PlayTimeInfo {
  song: Song;
  playTime: string;
}

// 本地歌曲类型定义（带文件大小）
export interface LocalSong extends Song {
  size: string;
}

// 下载歌曲类型定义
export interface DownloadedSong extends Song {
  downloadedAt: string;
  size: string;
  quality: string;
  fileSize?: string;
  downloadTime?: string;
  qualityLabel?: string;
  fileBytes?: number;
}

// 默认歌单类型定义
export interface DefaultPlaylist {
  key: string;
  icon?: any;
  name: string;
  count: string;
  cover: string;
  desc: string;
  songs: string[];
}
