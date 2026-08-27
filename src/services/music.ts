/**
 * ============================================================================
 * 音乐模块 API 请求�?- music.ts
 * ============================================================================
 * 【前端同学必读�? * 本文件封装了"音乐"模块所有与后端通信的函数�? *
 * 【后�?API 基础路径�?/api/music/
 * 所有请求自动加�?/api 前缀（由 request.ts �?BASE_URL 控制）�? *
 * 【本模块�?6 �?API 端点�? * 1. GET /api/music/songs          �?获取歌曲列表（支持分�?筛选）
 * 2. GET /api/music/songs/:id      �?获取单曲详情
 * 3. GET /api/music/artists        �?获取歌手列表
 * 4. GET /api/music/artists/:id    �?获取歌手详情
 * 5. GET /api/music/albums         �?获取专辑列表
 * 6. GET /api/music/albums/:id     �?获取专辑详情
 * 7. GET /api/music/playlists      �?获取歌单列表
 * 8. GET /api/music/playlists/:id  �?获取歌单详情
 * 9. GET /api/music/bundles        �?获取首页聚合数据（一次请求返回多种数据）
 *
 * 【bundles 接口说明�? * /api/music/bundles 是一个特殊的聚合接口，后端在单次请求中返回音乐首页所需�? * 所有数据（MV、排行榜、热搜、新歌、轮播图等），避免前端发起多个请求�? * 响应结构�?MusicBundles 接口定义�? *
 * ============================================================================
 */
import { httpClient } from './request';
import type {
  Song,
  Artist,
  Album,
  Playlist,
  MV,
  LyricLine,
  Toplist,
  SearchHot,
  NewSong,
  BannerImage,
  ArtistDetail,
  MyPlaylist,
  LocalFolder,
  PlayTimeInfo,
  LocalSong,
  DownloadedSong,
} from '@/types/music';

/**
 * 分页列表响应结构 �?后端所有列表接口统一返回此格�? *
 * @template T - 列表项的具体类型（如 Song、Artist、Album、Playlist�? *
 * 【字段说明�? * - items: 当前页的数据数组
 * - total: 满足筛选条件的总记录数
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页�? */
export interface MusicListResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 列表查询参数 �?音乐模块列表接口共用的筛选条�? *
 * 【字段说明�? * - keyword: 搜索关键词，后端模糊匹配歌曲�?歌手�?专辑�? * - category: 分类标识（如 "流行"�?摇滚"�?古典"�? * - page: 页码（默�?1�? * - limit: 每页条数（本模块默认 200�? */
export interface MusicQueryParams {
  keyword?: string;
  category?: string;
  page?: number;
  limit?: number;
}

/**
 * 首页聚合数据 �?/api/music/bundles 接口的响应结�? *
 * 【为什么需�?bundles？�? * 音乐首页需要展示多种数据（MV、排行榜、热搜、新歌、轮播图等）�? * 如果每种数据各发一个请求，首页加载会发�?10+ 个请求�? * 后端提供 bundles 聚合接口，一次请求返回所有首页数据，减少网络开销�? *
 * 【字段说明�? * - mvs: MV 列表（音乐视频，�?MV 播放区的数据�? * - toplists: 排行榜列表（�?飙升�?�?新歌�?等）
 * - searchHots: 搜索热词列表（搜索框下方的热门搜索）
 * - newSongs: 新歌速递列�? * - bannerImages: 轮播图列表（首页顶部�?Banner�? * - lyrics: 歌词数据，key 为歌�?ID，value 为歌词行数组
 * - artistDetails: 歌手详情列表（首页推荐的歌手�? * - likedSongs: 我喜欢的歌曲列表（用户收藏的歌曲�? * - recentPlayed: 最近播放记录（包含播放时间�? * - collectionPlaylists: 收藏的歌单列�? * - localSongs: 本地歌曲列表（用户设备上的音乐文件）
 * - localFolders: 本地文件夹列表（用户设备上的音乐文件夹）
 * - recentPlaylists: 最近播放的歌单（含最后播放时间）
 * - collectionSongs: 收藏的歌曲列�? * - downloadedSongs: 已下载的歌曲列表
 */
export interface MusicBundles {
  mvs: MV[];
  toplists: Toplist[];
  searchHots: SearchHot[];
  newSongs: NewSong[];
  bannerImages: BannerImage[];
  lyrics: Record<number, LyricLine[]>; // key: 歌曲ID, value: 歌词行数�?  artistDetails: ArtistDetail[];
  likedSongs: Song[];
  recentPlayed: PlayTimeInfo[];
  collectionPlaylists: MyPlaylist[];
  localSongs: LocalSong[];
  localFolders: LocalFolder[];
  recentPlaylists: (MyPlaylist & { lastPlayed: string })[];
  collectionSongs: Song[];
  downloadedSongs: DownloadedSong[];
}

/**
 * 构建查询字符�?�?将参数对象转�?URL 查询参数
 *
 * 【工作原理�? * 遍历参数对象，过滤掉 undefined/null/空值，
 * 拼接�?'keyword=xxx&category=yyy' 格式的查询字符串�? *
 * @param params - 查询参数对象
 * @returns URL 查询字符�? */
function buildQuery(params: MusicQueryParams = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  return query.toString();
}

/**
 * 获取歌曲列表
 *
 * 【API 端点�?GET /api/music/songs
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?MusicListResponse<Song>
 * 【后端逻辑�?�?songs 表查询，支持 keyword 模糊搜索�?category 分类筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的歌曲列�? */
export function fetchMusicSongs(params: MusicQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<MusicListResponse<Song>>(
    `/music/songs${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单曲详情
 *
 * 【API 端点�?GET /api/music/songs/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?歌曲唯一标识（数字型�? * 【响应类型�?Song（包含歌名、歌手、专辑、时长、封面等�? * 【后端逻辑�?根据 id �?songs 表查询单条记�? *
 * @param id - 歌曲 ID
 * @returns 歌曲详细信息
 */
export function fetchMusicSongById(id: number) {
  return httpClient.get<Song>(`/music/songs/${id}`);
}

/**
 * 获取歌手列表
 *
 * 【API 端点�?GET /api/music/artists
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?MusicListResponse<Artist>
 * 【后端逻辑�?�?artists 表查询，支持 keyword 模糊搜索
 *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的歌手列�? */
export function fetchMusicArtists(params: MusicQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<MusicListResponse<Artist>>(
    `/music/artists${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取歌手详情
 *
 * 【API 端点�?GET /api/music/artists/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?歌手唯一标识（数字型�? * 【响应类型�?Artist（包含头像、别名等基本信息�? * 【后端逻辑�?根据 id �?artists 表查询单条记�? *
 * @param id - 歌手 ID
 * @returns 歌手详细信息
 */
export function fetchMusicArtistById(id: number) {
  return httpClient.get<Artist>(`/music/artists/${id}`);
}

/**
 * 获取专辑列表
 *
 * 【API 端点�?GET /api/music/albums
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?MusicListResponse<Album>
 * 【后端逻辑�?�?albums 表查询，支持 keyword 模糊搜索
 *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的专辑列�? */
export function fetchMusicAlbums(params: MusicQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<MusicListResponse<Album>>(
    `/music/albums${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取专辑详情
 *
 * 【API 端点�?GET /api/music/albums/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?专辑唯一标识（数字型�? * 【响应类型�?Album（包含封面、发行时间等�? * 【后端逻辑�?根据 id �?albums 表查询单条记�? *
 * @param id - 专辑 ID
 * @returns 专辑详细信息
 */
export function fetchMusicAlbumById(id: number) {
  return httpClient.get<Album>(`/music/albums/${id}`);
}

/**
 * 获取歌单列表
 *
 * 【API 端点�?GET /api/music/playlists
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?MusicListResponse<Playlist>
 * 【后端逻辑�?�?playlists 表查询，支持 keyword 模糊搜索
 *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的歌单列�? */
export function fetchMusicPlaylists(params: MusicQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<MusicListResponse<Playlist>>(
    `/music/playlists${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取歌单详情
 *
 * 【API 端点�?GET /api/music/playlists/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?歌单唯一标识（数字型�? * 【响应类型�?Playlist（包含歌曲列表、创建者、标签等完整信息�? * 【后端逻辑�?根据 id �?playlists 表查询单条记录，关联查询歌曲列表
 *
 * @param id - 歌单 ID
 * @returns 歌单详细信息
 */
export function fetchMusicPlaylistById(id: number) {
  return httpClient.get<Playlist>(`/music/playlists/${id}`);
}

/**
 * 获取首页聚合数据
 *
 * 【API 端点�?GET /api/music/bundles
 * 【请求方法�?GET
 * 【无参数�?此接口不需要任何查询参�? * 【响应类型�?MusicBundles（包�?MV、排行榜、热搜、新歌、轮播图等所有首页数据）
 * 【后端逻辑�? *   一次查询多张数据表，将结果聚合到一个对象中返回�? *   - mvs �?�?mvs 字段
 *   - toplists �?�?toplists 字段
 *   - search_hots �?�?searchHots 字段
 *   - ...以此类推
 * 【设计原因�?减少首页加载时的请求数量，提升性能
 *
 * @returns 音乐首页所有聚合数�? */
export function fetchMusicBundles() {
  return httpClient.get<MusicBundles>('/music/bundles');
}
