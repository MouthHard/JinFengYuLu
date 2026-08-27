/**
 * ============================================================================
 * 音乐模块实体 - music.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这个文件定义了音乐模块的 5 张数据表（5 个实体类）：
 * 1. MusicSong（歌曲表）—— 存储歌曲信息
 * 2. MusicArtist（歌手表）—— 存储歌手信息
 * 3. MusicAlbum（专辑表）—— 存储专辑信息
 * 4. MusicPlaylist（歌单表）—— 存储歌单信息
 * 5. MusicBundle（附加数据表）—— 存储榜单/热词/歌词等杂项数据
 *
 * 【设计模式：JSON 大对象存储】
 * 音乐模块的数据结构比较复杂且异构（不同歌曲/歌手的字段差异大），
 * 所以采用"主键 + name + JSON data"的简化设计：
 * - id：主键（由外部数据源指定，非自增）
 * - name：名称（用于搜索/展示）
 * - data：完整对象数据（JSON 类型，存储所有其他字段）
 *
 * Service 层的 toObject() 方法会把 data JSON 展开并合并 id，直接返回给前端。
 * 前端拿到的数据结构和原始 JSON 完全一致，不需要额外转换。
 *
 * 【类比前端】
 * 类似前端的"本地 JSON 数据驱动"——数据结构由前端定义，
 * 后端只负责存储和透传，不做字段拆分。
 *
 * 【MusicBundle 的 bundleKey】
 * bundle_key 是字符串标识，如 'search_hots'/'new_songs'/'banner_images'，
 * Service 层会将其映射为前端友好的驼峰键名（如 searchHots/newSongs）。
 * ============================================================================
 */
import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

// ==================== 歌曲表 ====================
@Entity('music_song')
export class MusicSong {
  // 歌曲ID（由外部数据源指定）
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 歌曲名称（用于搜索）
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 歌曲完整数据，JSON 对象，含歌手/专辑/时长/封面/播放URL等所有字段
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 歌手表 ====================
@Entity('music_artist')
export class MusicArtist {
  // 歌手ID（由外部数据源指定）
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 歌手名称（用于搜索）
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 歌手完整数据，JSON 对象，含头像/简介/粉丝数/热门歌曲等
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 专辑表 ====================
@Entity('music_album')
export class MusicAlbum {
  // 专辑ID（由外部数据源指定）
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 专辑名称（用于搜索）
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 专辑完整数据，JSON 对象，含封面/发行日期/歌曲列表等
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 歌单表 ====================
@Entity('music_playlist')
export class MusicPlaylist {
  // 歌单ID（由外部数据源指定）
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 歌单名称（用于搜索）
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 歌单完整数据，JSON 对象，含封面/描述/歌曲列表/播放量等
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 附加数据表 ====================
@Entity('music_bundle')
export class MusicBundle {
  // 附加数据ID（自增主键）
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  // 数据键名，如 'search_hots'/'new_songs'/'banner_images' 等
  // Service 层会映射为驼峰键名返回给前端
  @Column({ name: 'bundle_key', type: 'varchar', length: 50, unique: true })
  bundleKey: string;

  // 完整数据，JSON 对象，结构因 bundleKey 不同而异
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
