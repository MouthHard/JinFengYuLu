/**
 * ============================================================================
 * 音乐模块服务 - music.service.ts
 * ============================================================================
 * 【前端同学必读】
 * 音乐模块的业务逻辑层，采用"JSON 大对象透传"模式，代码非常简洁。
 *
 * 【核心设计：toObject() 方法】
 * 音乐模块的数据大部分存在 data JSON 列中，toObject() 方法的作用是：
 * 将 { id: 1, name: 'xxx', data: { title: 'xxx', artist: 'xxx', ... } }
 * 转换为 { id: 1, title: 'xxx', artist: 'xxx', ... }
 * 即把 data 中的字段展开到顶层，并合并 id。
 *
 * 【类比前端】
 * 类似前端的"对象展开"操作：{ ...row.data, id: row.id }
 *
 * 【通用分页方法 paginate()】
 * 音乐模块的 4 种资源（歌曲/歌手/专辑/歌单）结构相同，
 * 所以共用一个 paginate 方法，通过传入不同的 Repository 实现泛型分页。
 *
 * 【bundles 接口的 keyMap】
 * 数据库中 bundle_key 是下划线格式（如 'search_hots'），
 * Service 层通过 keyMap 映射为前端友好的驼峰格式（如 'searchHots'）。
 * 类似前端的"数据格式化/字段重命名"。
 * ============================================================================
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  MusicSong,
  MusicArtist,
  MusicAlbum,
  MusicPlaylist,
  MusicBundle,
} from '../../entities/music.entity';
import { QueryMusicDto } from './dto/music.dto';

@Injectable()
export class MusicService {
  constructor(
    // 注入 5 个 Repository
    @InjectRepository(MusicSong)
    private songRepository: Repository<MusicSong>,
    @InjectRepository(MusicArtist)
    private artistRepository: Repository<MusicArtist>,
    @InjectRepository(MusicAlbum)
    private albumRepository: Repository<MusicAlbum>,
    @InjectRepository(MusicPlaylist)
    private playlistRepository: Repository<MusicPlaylist>,
    @InjectRepository(MusicBundle)
    private bundleRepository: Repository<MusicBundle>,
  ) {}

  /**
   * 将数据库行转换为前端友好的对象
   * data 列存放完整对象（含 id），直接透出给前端即可还原原数据结构
   * 类似前端的 { ...row.data, id: row.id }
   */
  private toObject<T>(row: { id: number; data: Record<string, unknown> }): T {
    return { ...(row.data as object), id: row.id } as T;
  }

  /**
   * 通用分页方法
   * 歌曲/歌手/专辑/歌单共用此方法，只需传入不同的 Repository
   * @param repo 数据仓库
   * @param query 查询参数
   * @returns 分页结果
   */
  private async paginate<T>(
    repo: Repository<T & { id: number }>,
    query: QueryMusicDto,
  ) {
    const { keyword, page = 1, limit = 200 } = query;
    const qb = repo.createQueryBuilder('t');

    // 关键词搜索（只匹配 name 列）
    if (keyword) {
      qb.andWhere('t.name LIKE :keyword', { keyword: `%${keyword}%` });
    }

    qb.orderBy('t.id', 'ASC');
    const [rows, total] = await qb.getManyAndCount();
    return {
      items: rows.map((r) => this.toObject(r as any)), // 每行数据都通过 toObject 转换
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  /** 获取歌曲列表 */
  async findSongs(query: QueryMusicDto) {
    return this.paginate(this.songRepository, query);
  }

  /** 获取单首歌曲 */
  async findSongById(id: number) {
    const row = await this.songRepository.findOne({ where: { id } });
    if (!row) {
      throw new NotFoundException(`歌曲 ${id} 不存在`);
    }
    return this.toObject(row);
  }

  /** 获取歌手列表 */
  async findArtists(query: QueryMusicDto) {
    return this.paginate(this.artistRepository, query);
  }

  /** 获取单个歌手 */
  async findArtistById(id: number) {
    const row = await this.artistRepository.findOne({ where: { id } });
    if (!row) {
      throw new NotFoundException(`歌手 ${id} 不存在`);
    }
    return this.toObject(row);
  }

  /** 获取专辑列表 */
  async findAlbums(query: QueryMusicDto) {
    return this.paginate(this.albumRepository, query);
  }

  /** 获取单个专辑 */
  async findAlbumById(id: number) {
    const row = await this.albumRepository.findOne({ where: { id } });
    if (!row) {
      throw new NotFoundException(`专辑 ${id} 不存在`);
    }
    return this.toObject(row);
  }

  /** 获取歌单列表 */
  async findPlaylists(query: QueryMusicDto) {
    return this.paginate(this.playlistRepository, query);
  }

  /** 获取单个歌单 */
  async findPlaylistById(id: number) {
    const row = await this.playlistRepository.findOne({ where: { id } });
    if (!row) {
      throw new NotFoundException(`歌单 ${id} 不存在`);
    }
    return this.toObject(row);
  }

  /**
   * 获取附加数据
   * 按 bundle_key 映射为前端友好键名
   * 返回格式：{ searchHots: [...], newSongs: [...], bannerImages: [...], ... }
   */
  async getBundles() {
    const rows = await this.bundleRepository.find();
    const result: Record<string, unknown> = {};
    // bundle_key（下划线格式）→ 前端键名（驼峰格式）的映射表
    const keyMap: Record<string, string> = {
      search_hots: 'searchHots',           // 搜索热词
      new_songs: 'newSongs',               // 新歌推荐
      banner_images: 'bannerImages',       // Banner 图片
      artist_details: 'artistDetails',     // 歌手详情
      liked_songs: 'likedSongs',           // 喜欢的歌曲
      recent_played: 'recentPlayed',       // 最近播放
      collection_playlists: 'collectionPlaylists', // 收藏的歌单
      local_songs: 'localSongs',           // 本地歌曲
      local_folders: 'localFolders',       // 本地文件夹
      recent_playlists: 'recentPlaylists', // 最近歌单
      collection_songs: 'collectionSongs', // 收藏的歌曲
      downloaded_songs: 'downloadedSongs', // 已下载歌曲
    };
    for (const row of rows) {
      // 优先使用映射表中的驼峰键名，没有则使用原始 bundle_key
      const key = keyMap[row.bundleKey] ?? row.bundleKey;
      result[key] = row.data;
    }
    return result;
  }
}
