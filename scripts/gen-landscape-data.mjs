/**
 * 一次性脚本：将 Landscape 静态 TS 数据转换为 SQL INSERT 语句
 * 运行方式：node scripts/gen-landscape-data.mjs
 * 输出：server/database/data/06-landscape-data.sql
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outfile = path.join(root, 'temp', 'landscape-data.cjs');
const outSql = path.join(root, 'server', 'database', 'data', '06-landscape-data.sql');
const entryFile = path.join(root, 'temp', 'landscape-entry.mjs');

// 临时聚合入口：直接导入 4 个数据模块（store 未导出原始数组）
fs.mkdirSync(path.join(root, 'temp'), { recursive: true });
fs.writeFileSync(
  entryFile,
  [
    "import { allPhotographers } from '../src/stores/landscape/data/photographers';",
    "import { allImages } from '../src/stores/landscape/data/images';",
    "import { allVideos } from '../src/stores/landscape/data/videos';",
    "import { allGuides } from '../src/stores/landscape/data/guides';",
    'export { allPhotographers, allImages, allVideos, allGuides };',
  ].join('\n'),
  'utf8',
);

// 1. 用 esbuild 打包数据模块（解析 @ 别名与 OSS 常量）
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
const { allImages, allVideos, allGuides, allPhotographers } = mod.default ?? mod;
if (!allPhotographers) {
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
lines.push('-- 风景模块初始数据 (06-landscape-data.sql)');
lines.push('-- 由 scripts/gen-landscape-data.mjs 从静态 TS 数据自动生成');
lines.push('-- ============================================');
lines.push('SET NAMES utf8mb4;');
lines.push('');

// 2. 摄影师
lines.push('-- 摄影师');
for (const p of allPhotographers) {
  lines.push(
    `INSERT INTO \`landscape_photographer\` (\`id\`, \`name\`, \`category\`, \`location\`, \`verified\`, \`data\`) VALUES (${escStr(p.id)}, ${escStr(p.name)}, ${escStr(p.category || '')}, ${escStr(p.location || '')}, ${p.verified ? 1 : 0}, ${esc(p)});`
  );
}
lines.push('');

// 3. 图片
lines.push('-- 图片');
for (const img of allImages) {
  lines.push(
    `INSERT INTO \`landscape_image\` (\`id\`, \`category\`, \`location\`, \`author_id\`, \`data\`) VALUES (${escStr(img.id)}, ${escStr(img.category || '')}, ${escStr(img.location || '')}, ${escStr(img.authorId || '')}, ${esc(img)});`
  );
}
lines.push('');

// 4. 视频
lines.push('-- 视频');
for (const v of allVideos) {
  lines.push(
    `INSERT INTO \`landscape_video\` (\`id\`, \`category\`, \`location\`, \`author_id\`, \`data\`) VALUES (${escStr(v.id)}, ${escStr(v.category || '')}, ${escStr(v.location || '')}, ${escStr(v.authorId || '')}, ${esc(v)});`
  );
}
lines.push('');

// 5. 攻略
lines.push('-- 攻略');
for (const g of allGuides) {
  lines.push(
    `INSERT INTO \`landscape_guide\` (\`id\`, \`title\`, \`category\`, \`location\`, \`author_id\`, \`difficulty\`, \`data\`) VALUES (${escStr(g.id)}, ${escStr(g.title || '')}, ${escStr(g.category || '')}, ${escStr(g.location || '')}, ${escStr(g.authorId || '')}, ${escStr(g.difficulty || '')}, ${esc(g)});`
  );
}

fs.mkdirSync(path.dirname(outSql), { recursive: true });
fs.writeFileSync(outSql, lines.join('\n'), 'utf8');
console.log(`✅ 已生成 ${outSql}`);
console.log(`   photographers: ${allPhotographers.length}, images: ${allImages.length}, videos: ${allVideos.length}, guides: ${allGuides.length}`);
