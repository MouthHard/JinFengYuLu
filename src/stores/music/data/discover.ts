import type { Toplist, SearchHot, RecommendPlaylist, NewSong, BannerImage } from "@/types/music";
import { songs, artists, albums } from "./artists";
import { playlists } from "./playlists";

export const toplists: Toplist[] = [
  {
    id: 1,
    name: "飙升�?,
    cover: "https://picsum.photos/seed/top1/400/400",
    description: "每日更新，实时反映歌曲热度变�?,
    updateFrequency: "每日更新",
    songs: [songs[0], songs[10], songs[13], songs[25], songs[5]],
  },
  {
    id: 2,
    name: "新歌�?,
    cover: "https://picsum.photos/seed/top2/400/400",
    description: "最新发行的歌曲排行",
    updateFrequency: "每日更新",
    songs: [songs[0], songs[5], songs[12], songs[15], songs[22]],
  },
  {
    id: 3,
    name: "原创�?,
    cover: "https://picsum.photos/seed/top3/400/400",
    description: "原创音乐人的优秀作品",
    updateFrequency: "每周更新",
    songs: [songs[17], songs[23], songs[24], songs[18], songs[20]],
  },
];

export const searchHots: SearchHot[] = [
  { id: 1, text: "周杰伦新专辑", heat: 9999, icon: "🔥" },
  { id: 2, text: "孤勇�?, heat: 8567 },
  { id: 3, text: "Taylor Swift", heat: 7890 },
  { id: 4, text: "林俊杰幸存�?, heat: 6754 },
  { id: 5, text: "邓紫棋启示录", heat: 5678 },
  { id: 6, text: "华晨宇新�?, heat: 4567 },
  { id: 7, text: "五月天演唱会", heat: 3456 },
  { id: 8, text: "薛之谦天外来�?, heat: 2345 },
  { id: 9, text: "毛不易消�?, heat: 1234 },
  { id: 10, text: "许嵩雅俗共赏", heat: 987 },
];

export const recommendPlaylists: RecommendPlaylist[] = playlists.map((p) => ({
  id: p.id,
  name: p.name,
  cover: p.cover,
  playCount: p.playCount,
  songCount: p.songCount,
}));

export const newSongs: NewSong[] = [
  { id: 1, name: "最伟大的作�?, artists: [artists[0]], album: albums[0], duration: 234, cover: albums[0].cover },
  { id: 6, name: "幸存�?, artists: [artists[1]], album: albums[1], duration: 245, cover: albums[1].cover },
  { id: 13, name: "光年之外", artists: [artists[3]], album: albums[3], duration: 235, cover: albums[3].cover },
  { id: 16, name: "天外来物", artists: [artists[4]], album: albums[4], duration: 276, cover: albums[4].cover },
  { id: 22, name: "烟火里的尘埃", artists: [artists[7]], album: albums[7], duration: 316, cover: albums[7].cover },
  { id: 26, name: "Anti-Hero", artists: [artists[9]], album: albums[9], duration: 200, cover: albums[9].cover },
  { id: 28, name: "Eyes Closed", artists: [artists[10]], album: albums[10], duration: 234, cover: albums[10].cover },
  { id: 15, name: "句号", artists: [artists[3]], album: albums[3], duration: 243, cover: albums[3].cover },
  { id: 9, name: "可惜没如�?, artists: [artists[1]], album: albums[1], duration: 318, cover: albums[1].cover },
  { id: 23, name: "好想爱这个世界啊", artists: [artists[7]], album: albums[7], duration: 326, cover: albums[7].cover },
];

export const bannerImages: BannerImage[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/banner1/1200/400",
    title: "周杰伦嘉年华世界巡演",
    subtitle: "2024全新巡演震撼启程",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/banner2/1200/400",
    title: "邓紫棋启示录",
    subtitle: "全新专辑重磅上线",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/banner3/1200/400",
    title: "夏日音乐�?,
    subtitle: "用音乐点燃整个夏�?,
  },
];
