/**
 * ============================================================================
 * 音乐模块 - music.module.ts
 * ============================================================================
 * 【前端同学必读】
 * 音乐模块的 NestJS Module 文件，注册了 5 个 Entity。
 *
 * 【注册的 Entity 列表】
 * - MusicSong：歌曲表
 * - MusicArtist：歌手表
 * - MusicAlbum：专辑表
 * - MusicPlaylist：歌单表
 * - MusicBundle：附加数据表（榜单/热词/歌词等）
 *
 * 【音乐模块的设计特点】
 * 采用"JSON 大对象"存储模式——大部分数据存在 data JSON 列中，
 * 只有 id 和 name 是独立列。这样前端拿到的数据结构和原始 JSON 完全一致。
 * ============================================================================
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import {
  MusicSong,
  MusicArtist,
  MusicAlbum,
  MusicPlaylist,
  MusicBundle,
} from '../../entities/music.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MusicSong, // 歌曲表
      MusicArtist, // 歌手表
      MusicAlbum, // 专辑表
      MusicPlaylist, // 歌单表
      MusicBundle, // 附加数据表
    ]),
  ],
  controllers: [MusicController],
  providers: [MusicService],
  exports: [MusicService],
})
export class MusicModule {}
