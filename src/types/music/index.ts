/**
 * ============================================================================
 * 音乐模块 - 数据类型定义 - music/index.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了音乐模块所有后端 API 响应的数据类型。
 * 每个接口对应后端数据库中的一张表，字段名与后端返回的 JSON 键名一一对应。
 *
 * 【类型与 API 的对应关系】
 * - Song          ← GET /api/music/songs 响应中的 items 元素
 * - Artist        ← GET /api/music/artists 响应中的 items 元素
 * - Album         ← GET /api/music/albums 响应中的 items 元素
 * - Playlist      ← GET /api/music/playlists 响应中的 items 元素
 * - MusicBundles  ← GET /api/music/bundles 响应（聚合多种数据）
 *
 * 【数据关系】
 * - Song 嵌套 Artist[] 和 Album（冗余存储，避免额外查询）
 * - Playlist 包含 Song[]（歌单的歌曲列表）
 * - ArtistDetail 包含 Song[] 和 Album[]（歌手的热门歌曲和专辑）
 * - LyricLine 是歌词的行级数据，按时间轴排列
 *
 * 【数据库表对应】
 * - Song          → songs 表
 * - Artist        → artists 表
 * - Album         → albums 表
 * - Playlist      → playlists 表
 * - MV            → mvs 表
 * - Toplist       → toplists 表
 *
 * ============================================================================
 */

/**
 * 歌曲 — 对应后端 GET /api/music/songs 返回的单条数据
 *
 * 【数据库表】songs
 *
 * @property id       - 歌曲唯一标识（来自后端，数字型）
 * @property name     - 歌曲名称（来自后端）
 * @property artists  - 歌手列表（来自后端，嵌套 Artist 数组，冗余存储避免额外查询）
 * @property album    - 所属专辑（来自后端，嵌套 Album 对象）
 * @property duration - 时长（来自后端，单位：秒）
 * @property cover    - 封面图 URL（来自后端）
 * @property isVip    - 是否 VIP 专属（可选，来自后端标记）
 * @property isSq     - 是否有无损音质（可选，来自后端标记，Sq = Super Quality）
 */
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

/**
 * 歌手 — 对应后端 GET /api/music/artists 返回的单条数据
 *
 * 【数据库表】artists
 *
 * @property id     - 歌手唯一标识（来自后端，数字型）
 * @property name   - 歌手名称（来自后端）
 * @property avatar - 头像 URL（可选，来自后端）
 * @property alias  - 别名（可选，来自后端，如英文名、艺名）
 */
export interface Artist {
  id: number;
  name: string;
  avatar?: string;
  alias?: string;
}

/**
 * 专辑 — 对应后端 GET /api/music/albums 返回的单条数据
 *
 * 【数据库表】albums
 *
 * @property id           - 专辑唯一标识（来自后端，数字型）
 * @property name         - 专辑名称（来自后端）
 * @property cover        - 封面图 URL（来自后端）
 * @property publishTime  - 发行时间（可选，来自后端，ISO 格式字符串）
 */
export interface Album {
  id: number;
  name: string;
  cover: string;
  publishTime?: string;
}

/**
 * 歌单 — 对应后端 GET /api/music/playlists 返回的单条数据
 *
 * 【数据库表】playlists
 *
 * @property id             - 歌单唯一标识（来自后端，数字型）
 * @property name           - 歌单名称（来自后端）
 * @property cover          - 封面图 URL（来自后端）
 * @property creator        - 创建者名称（来自后端）
 * @property creatorAvatar  - 创建者头像（可选，来自后端）
 * @property description    - 歌单描述（可选，来自后端）
 * @property tags           - 标签列表（来自后端，如 ["流行", "安静"]）
 * @property playCount      - 播放次数（来自后端统计）
 * @property songCount      - 歌曲数量（来自后端统计）
 * @property songs          - 歌曲列表（来自后端，嵌套 Song 数组）
 */
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

/**
 * 歌词行 — 歌词的行级数据，按时间轴排列
 *
 * 【数据库表】lyrics
 *
 * @property time        - 该行歌词的开始时间（来自后端，单位：秒，如 12.5 表示 00:12.5）
 * @property text        - 歌词文本（来自后端）
 * @property translation - 翻译文本（可选，来自后端，如英文歌的中文翻译）
 *
 * 【使用方式】
 * 前端播放器根据当前播放时间，找到 time <= currentTime 的最后一行，
 * 高亮显示该行歌词，实现歌词同步滚动效果。
 */
export interface LyricLine {
  time: number;
  text: string;
  translation?: string;
}

/**
 * 搜索热词 — 搜索框下方的热门搜索词
 *
 * 【数据库表】search_hots
 *
 * @property id   - 热词唯一标识（来自后端）
 * @property text - 热词文本（来自后端，如 "周杰伦"）
 * @property heat - 热度值（来自后端统计，数值越大越热门）
 * @property icon - 图标（可选，来自后端，如火焰图标表示爆搜）
 */
export interface SearchHot {
  id: number;
  text: string;
  heat: number;
  icon?: string;
}

/**
 * 播放模式 — 前端播放器的播放顺序控制
 *
 * 【注意】此类型不来自后端，由前端播放器状态管理
 * - "sequence": 顺序播放（按列表顺序依次播放）
 * - "loop": 列表循环（播放到最后一首后回到第一首）
 * - "random": 随机播放（随机选择下一首）
 * - "single": 单曲循环（重复播放当前歌曲）
 */
export type PlayMode = "sequence" | "loop" | "random" | "single";

/**
 * 推荐歌单卡片 — 首页推荐歌单的简化数据
 *
 * 【注意】与 Playlist 的区别：不包含歌曲列表和创建者信息，仅用于首页卡片展示
 *
 * @property id        - 歌单唯一标识（来自后端）
 * @property name      - 歌单名称（来自后端）
 * @property cover     - 封面图 URL（来自后端）
 * @property playCount - 播放次数（来自后端统计）
 * @property songCount - 歌曲数量（来自后端统计）
 */
export interface RecommendPlaylist {
  id: number;
  name: string;
  cover: string;
  playCount: number;
  songCount: number;
}

/**
 * 新歌推荐 — 首页新歌速递的数据
 *
 * 【注意】与 Song 结构相同，用于区分"新歌推荐"场景
 *
 * @property id       - 歌曲唯一标识（来自后端）
 * @property name     - 歌曲名称（来自后端）
 * @property artists  - 歌手列表（来自后端）
 * @property album    - 所属专辑（来自后端）
 * @property duration - 时长（来自后端，单位：秒）
 * @property cover    - 封面图 URL（来自后端）
 * @property isVip    - 是否 VIP 专属（可选）
 * @property isSq     - 是否无损音质（可选）
 */
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

/**
 * 排行榜 — 音乐排行榜数据
 *
 * 【数据库表】toplists
 *
 * @property id              - 排行榜唯一标识（来自后端）
 * @property name            - 排行榜名称（来自后端，如 "飙升榜"、"新歌榜"）
 * @property cover           - 排行榜封面 URL（来自后端）
 * @property description     - 排行榜描述（可选，来自后端）
 * @property songs           - 榜单歌曲列表（来自后端，嵌套 Song 数组）
 * @property updateFrequency - 更新频率（来自后端，如 "每日更新"、"每周更新"）
 */
export interface Toplist {
  id: number;
  name: string;
  cover: string;
  description?: string;
  songs: Song[];
  updateFrequency: string;
}

/**
 * 歌手详情 — 歌手详情页的完整数据
 *
 * 【数据库表】artists（关联 songs 和 albums 表）
 * 【与 Artist 的区别】Artist 是列表展示的基本信息，ArtistDetail 是详情页的完整信息
 *
 * @property id         - 歌手唯一标识（来自后端）
 * @property name       - 歌手名称（来自后端）
 * @property avatar     - 头像 URL（来自后端）
 * @property alias      - 别名（可选，来自后端）
 * @property description - 歌手简介（来自后端）
 * @property songCount  - 歌曲总数（来自后端统计）
 * @property albumCount - 专辑总数（来自后端统计）
 * @property fanCount   - 粉丝数（来自后端统计）
 * @property tags       - 标签列表（来自后端，如 ["华语", "流行"]）
 * @property hotSongs   - 热门歌曲列表（来自后端，嵌套 Song 数组）
 * @property albums     - 专辑列表（来自后端，嵌套 Album 数组）
 */
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

/**
 * MV — 音乐视频数据
 *
 * 【数据库表】mvs
 *
 * @property id        - MV 唯一标识（来自后端）
 * @property name      - MV 名称（来自后端）
 * @property artist    - 歌手名称（来自后端）
 * @property cover     - 封面图 URL（来自后端）
 * @property duration  - 时长（来自后端，单位：秒）
 * @property playCount - 播放次数（可选，来自后端统计）
 */
export interface MV {
  id: number;
  name: string;
  artist: string;
  cover: string;
  duration: number;
  playCount?: number;
}

/**
 * 轮播图 — 首页 Banner 图片数据
 *
 * 【数据库表】banner_images
 *
 * @property id       - 轮播图唯一标识（来自后端）
 * @property image    - 图片 URL（来自后端）
 * @property title    - 标题（来自后端）
 * @property subtitle - 副标题（来自后端）
 */
export interface BannerImage {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

/**
 * 我的歌单 — 用户个人歌单的简化数据
 *
 * 【注意】与 Playlist 的区别：不包含歌曲列表，仅用于歌单列表展示
 *
 * @property id         - 歌单唯一标识（来自后端）
 * @property name       - 歌单名称（来自后端）
 * @property cover      - 封面图 URL（来自后端）
 * @property songCount  - 歌曲数量（来自后端统计）
 * @property description - 歌单描述（可选，来自后端）
 * @property creator    - 创建者（可选，来自后端）
 * @property lastPlayed - 最后播放时间（可选，来自后端，ISO 格式字符串）
 */
export interface MyPlaylist {
  id: number;
  name: string;
  cover: string;
  songCount: number;
  description?: string;
  creator?: string;
  lastPlayed?: string;
}

/**
 * 本地文件夹 — 用户设备上的音乐文件夹
 *
 * 【注意】此数据来自前端本地扫描，不来自后端 API
 *
 * @property id        - 文件夹唯一标识
 * @property name      - 文件夹名称
 * @property songCount - 文件夹中的歌曲数量
 * @property path      - 文件夹路径（可选，如 "D:/Music/周杰伦"）
 */
export interface LocalFolder {
  id: number;
  name: string;
  songCount: number;
  path?: string;
}

/**
 * 播放时间信息 — 最近播放记录
 *
 * @property song     - 歌曲信息（来自后端）
 * @property playTime - 播放时间（来自后端，ISO 格式字符串）
 */
export interface PlayTimeInfo {
  song: Song;
  playTime: string;
}

/**
 * 本地歌曲 — 带文件大小的歌曲扩展类型
 *
 * 【注意】继承 Song，额外添加文件大小字段
 * 此数据来自前端本地扫描，不来自后端 API
 *
 * @property size - 文件大小（如 "5.2MB"）
 */
export interface LocalSong extends Song {
  size: string;
}

/**
 * 已下载歌曲 — 带下载信息的歌曲扩展类型
 *
 * 【注意】继承 Song，额外添加下载相关字段
 *
 * @property downloadedAt  - 下载时间（来自前端本地记录）
 * @property size          - 文件大小（如 "5.2MB"）
 * @property quality       - 音质标识（如 "standard"、"high"、"lossless"）
 * @property fileSize      - 文件大小（可选，与 size 类似）
 * @property downloadTime  - 下载时间（可选，与 downloadedAt 类似）
 * @property qualityLabel  - 音质显示标签（可选，如 "标准"、"高品质"、"无损"）
 * @property fileBytes     - 文件字节数（可选，用于精确计算大小）
 */
export interface DownloadedSong extends Song {
  downloadedAt: string;
  size: string;
  quality: string;
  fileSize?: string;
  downloadTime?: string;
  qualityLabel?: string;
  fileBytes?: number;
}

/**
 * 默认歌单 — 前端预置的歌单数据
 *
 * 【注意】此类型不来自后端，由前端静态定义
 * 用于展示"我喜欢的音乐"、"最近播放"等系统歌单
 *
 * @property key   - 歌单标识（如 "liked"、"recent"）
 * @property icon  - 歌单图标（可选）
 * @property name  - 歌单名称
 * @property count - 歌曲数量描述（字符串，如 "128首"）
 * @property cover - 封面图 URL
 * @property desc  - 歌单描述
 * @property songs - 歌曲 ID 列表
 */
export interface DefaultPlaylist {
  key: string;
  icon?: any;
  name: string;
  count: string;
  cover: string;
  desc: string;
  songs: string[];
}
