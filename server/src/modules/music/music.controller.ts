/**
 * ============================================================================
 * 音乐模块控制器 - music.controller.ts
 * ============================================================================
 * 【前端同学必读】
 * 音乐模块的 API 路由定义，提供歌曲/歌手/专辑/歌单/附加数据的查询端点。
 *
 * 【API 端点一览】
 * - GET /music/songs → 歌曲列表（支持关键词搜索）
 * - GET /music/songs/:id → 单首歌曲（id 是数字）
 * - GET /music/artists → 歌手列表
 * - GET /music/artists/:id → 单个歌手
 * - GET /music/albums → 专辑列表
 * - GET /music/albums/:id → 单个专辑
 * - GET /music/playlists → 歌单列表
 * - GET /music/playlists/:id → 单个歌单
 * - GET /music/bundles → 附加数据（榜单/热词/歌词/我的音乐等）
 *
 * 【bundles 接口说明】
 * bundles 接口返回一个对象，包含多种附加数据：
 * - searchHots：搜索热词
 * - newSongs：新歌推荐
 * - bannerImages：Banner 图片
 * - artistDetails：歌手详情
 * - likedSongs/recentPlayed/collectionPlaylists：用户相关数据
 * - localSongs/localFolders：本地音乐数据
 * ============================================================================
 */
import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MusicService } from './music.service';
import { QueryMusicDto } from './dto/music.dto';

@ApiTags('音乐') // Swagger 文档分组
@Controller('music') // 基础路由：/music
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  // GET /music/songs — 歌曲列表
  @Get('songs')
  @ApiOperation({ summary: '获取歌曲列表' })
  findSongs(@Query() query: QueryMusicDto) {
    return this.musicService.findSongs(query);
  }

  // GET /music/songs/:id — 单首歌曲
  @Get('songs/:id')
  @ApiOperation({ summary: '获取单首歌曲' })
  findSongById(@Param('id', ParseIntPipe) id: number) {
    return this.musicService.findSongById(id);
  }

  // GET /music/artists — 歌手列表
  @Get('artists')
  @ApiOperation({ summary: '获取歌手列表' })
  findArtists(@Query() query: QueryMusicDto) {
    return this.musicService.findArtists(query);
  }

  // GET /music/artists/:id — 单个歌手
  @Get('artists/:id')
  @ApiOperation({ summary: '获取单个歌手' })
  findArtistById(@Param('id', ParseIntPipe) id: number) {
    return this.musicService.findArtistById(id);
  }

  // GET /music/albums — 专辑列表
  @Get('albums')
  @ApiOperation({ summary: '获取专辑列表' })
  findAlbums(@Query() query: QueryMusicDto) {
    return this.musicService.findAlbums(query);
  }

  // GET /music/albums/:id — 单个专辑
  @Get('albums/:id')
  @ApiOperation({ summary: '获取单个专辑' })
  findAlbumById(@Param('id', ParseIntPipe) id: number) {
    return this.musicService.findAlbumById(id);
  }

  // GET /music/playlists — 歌单列表
  @Get('playlists')
  @ApiOperation({ summary: '获取歌单列表' })
  findPlaylists(@Query() query: QueryMusicDto) {
    return this.musicService.findPlaylists(query);
  }

  // GET /music/playlists/:id — 单个歌单
  @Get('playlists/:id')
  @ApiOperation({ summary: '获取单个歌单' })
  findPlaylistById(@Param('id', ParseIntPipe) id: number) {
    return this.musicService.findPlaylistById(id);
  }

  // GET /music/bundles — 附加数据（榜单/热词/歌词/我的音乐等）
  @Get('bundles')
  @ApiOperation({ summary: '获取附加数据(榜单/热词/歌词/我的音乐等)' })
  getBundles() {
    return this.musicService.getBundles();
  }
}
