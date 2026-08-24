/**
 * 一次性脚本：将 Music 静态 TS 数据转换为 SQL INSERT 语句
 * 运行方式：node scripts/gen-music-data.mjs
 * 输出：server/database/data/07-music-data.sql
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outfile = path.join(root, 'temp', 'music-data.cjs');
const outSql = path.join(root, 'server', 'database', 'data', '07-music-data.sql');
const entryFile = path.join(root, 'temp', 'music-entry.mjs');

// 临时聚合入口：直接导入 music 数据模块
fs.mkdirSync(path.join(root, 'temp'), { recursive: true });
fs.writeFileSync(
  entryFile,
  [
    "import { artists, albums, songs, mvs } from '../src/stores/music/data/artists';",
    "import { playlists } from '../src/stores/music/data/playlists';",
    "import { toplists, searchHots, newSongs, bannerImages } from '../src/stores/music/data/discover';",
    "import { lyrics } from '../src/stores/music/data/lyrics';",
    "import { artistDetails } from '../src/stores/music/data/artistDetails';",
    "import { likedSongsData, recentPlayedData, collectionPlaylistsData, localSongsData, localFoldersData, recentPlaylistsData, collectionSongsData, downloadedSongsData } from '../src/stores/music/data/myMusic';",
    'export { artists, albums, songs, mvs, playlists, toplists, searchHots, newSongs, bannerImages, lyrics, artistDetails, likedSongsData, recentPlayedData, collectionPlaylistsData, localSongsData, localFoldersData, recentPlaylistsData, collectionSongsData, downloadedSongsData };',
  ].join('\n'),
  'utf8',
);

// 1. 用 esbuild 打包数据模块（解析 @ 别名）
await build({
  entryPoints: [entryFile],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  outfile,
  alias: { '@': path.join(root, 'src') },
  logLevel: 'error',
});

const mod = await import(pathToFileURL(outfile).href);
const data = mod.default ?? mod;
if (!data.songs) {
  console.error('导出解析失败，模块键：', Object.keys(mod), 'default:', mod.default ? Object.keys(mod.default) : '无');
  process.exit(1);
}

const esc = (v) => {
  const s = JSON.stringify(v);
  return s === undefined ? 'NULL' : `'${s.replace(/'/g, "''")}'`;
};
const escStr = (v) => {
  if (v === undefined || v === null) return 'NULL';
  return `'${String(v).replace(/'/g, "''")}'`;
};

const lines = [];
lines.push('-- ============================================');
lines.push('-- 音乐模块初始数据 (07-music-data.sql)');
lines.push('-- 由 scripts/gen-music-data.mjs 从静态 TS 数据自动生成');
lines.push('-- ============================================');
lines.push('SET NAMES utf8mb4;');
lines.push('');

// 2. 歌手
lines.push('-- 歌手');
for (const a of data.artists) {
  lines.push(
    `INSERT INTO \`music_artist\` (\`id\`, \`name\`, \`data\`) VALUES (${a.id}, ${escStr(a.name)}, ${esc(a)});`
  );
}
lines.push('');

// 3. 专辑
lines.push('-- 专辑');
for (const al of data.albums) {
  lines.push(
    `INSERT INTO \`music_album\` (\`id\`, \`name\`, \`data\`) VALUES (${al.id}, ${escStr(al.name)}, ${esc(al)});`
  );
}
lines.push('');

// 4. 歌曲
lines.push('-- 歌曲');
for (const s of data.songs) {
  lines.push(
    `INSERT INTO \`music_song\` (\`id\`, \`name\`, \`data\`) VALUES (${s.id}, ${escStr(s.name)}, ${esc(s)});`
  );
}
lines.push('');

// 5. 歌单
lines.push('-- 歌单');
for (const p of data.playlists) {
  lines.push(
    `INSERT INTO \`music_playlist\` (\`id\`, \`name\`, \`data\`) VALUES (${p.id}, ${escStr(p.name)}, ${esc(p)});`
  );
}
lines.push('');

// 6. 附加数据 bundle
lines.push('-- 附加数据（榜单/热词/新歌/轮播/歌词/歌手详情/我的音乐）');
const bundles = {
  mvs: data.mvs,
  toplists: data.toplists,
  search_hots: data.searchHots,
  new_songs: data.newSongs,
  banner_images: data.bannerImages,
  lyrics: data.lyrics,
  artist_details: data.artistDetails,
  liked_songs: data.likedSongsData,
  recent_played: data.recentPlayedData,
  collection_playlists: data.collectionPlaylistsData,
  local_songs: data.localSongsData,
  local_folders: data.localFoldersData,
  recent_playlists: data.recentPlaylistsData,
  collection_songs: data.collectionSongsData,
  downloaded_songs: data.downloadedSongsData,
};
for (const [key, value] of Object.entries(bundles)) {
  lines.push(
    `INSERT INTO \`music_bundle\` (\`bundle_key\`, \`data\`) VALUES (${escStr(key)}, ${esc(value)});`
  );
}

fs.mkdirSync(path.dirname(outSql), { recursive: true });
fs.writeFileSync(outSql, lines.join('\n'), 'utf8');
console.log(`✅ 已生成 ${outSql}`);
console.log(`   artists: ${data.artists.length}, albums: ${data.albums.length}, songs: ${data.songs.length}, playlists: ${data.playlists.length}`);
