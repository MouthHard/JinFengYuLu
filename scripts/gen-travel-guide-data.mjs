/**
 * 一次性脚本：将 TravelGuide 静态 TS 数据转换为 SQL INSERT 语句
 * 运行方式：node scripts/gen-travel-guide-data.mjs
 * 输出：server/database/data/08-travel-guide-data.sql
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outfile = path.join(root, 'temp', 'travel-guide-data.cjs');
const outSql = path.join(root, 'server', 'database', 'data', '08-travel-guide-data.sql');
const entryFile = path.join(root, 'temp', 'travel-guide-entry.mjs');

// 34 个省份（与 provinces.ts 一致）
const PROVINCES = [
  'beijing', 'tianjin', 'hebei', 'shanxi', 'neimenggu',
  'liaoning', 'jilin', 'heilongjiang', 'shanghai', 'jiangsu',
  'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong',
  'henan', 'hubei', 'hunan', 'guangdong', 'guangxi',
  'hainan', 'chongqing', 'sichuan', 'guizhou', 'yunnan',
  'xizang', 'shaanxi', 'gansu', 'qinghai', 'ningxia',
  'xinjiang', 'hongkong', 'macau', 'taiwan',
];

// 临时聚合入口：导入 provinces + 每省 5 个导出 + food 数据
fs.mkdirSync(path.join(root, 'temp'), { recursive: true });
const entryLines = [
  "import { provinces } from '../src/pages/TravelGuide/data/provinces';",
  "import { foodLocations } from '../src/pages/TravelGuide/data/food/food';",
  "import { foodData1 } from '../src/pages/TravelGuide/data/food/foodData1';",
  "import { foodData2 } from '../src/pages/TravelGuide/data/food/foodData2';",
  "import { foodData3 } from '../src/pages/TravelGuide/data/food/foodData3';",
  "import { foodData4 } from '../src/pages/TravelGuide/data/food/foodData4';",
  "import { foodData5 } from '../src/pages/TravelGuide/data/food/foodData5';",
  "import { foodData6 } from '../src/pages/TravelGuide/data/food/foodData6';",
  ...PROVINCES.map(
    (id) =>
      `import { ${id}Data, ${id}CustomsData, ${id}IntangibleHeritage, ${id}FolkCustomsElements, ${id}Festivals } from '../src/pages/TravelGuide/data/scenery/${id}';`
  ),
  'export { provinces, foodLocations, foodData1, foodData2, foodData3, foodData4, foodData5, foodData6',
  ...PROVINCES.map(
    (id) =>
      `, ${id}Data, ${id}CustomsData, ${id}IntangibleHeritage, ${id}FolkCustomsElements, ${id}Festivals`
  ),
  '};',
];
fs.writeFileSync(entryFile, entryLines.join('\n'), 'utf8');

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
if (!data.provinces) {
  console.error('导出解析失败，模块键：', Object.keys(mod));
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
lines.push('-- 旅游指南模块初始数据 (08-travel-guide-data.sql)');
lines.push('-- 由 scripts/gen-travel-guide-data.mjs 从静态 TS 数据自动生成');
lines.push('-- ============================================');
lines.push('SET NAMES utf8mb4;');
lines.push('');

// 2. 省份
lines.push('-- 省份');
const foodChunks = [
  data.foodData1, data.foodData2, data.foodData3,
  data.foodData4, data.foodData5, data.foodData6,
];
for (const p of data.provinces) {
  lines.push(
    `INSERT INTO \`travel_guide_province\` (\`id\`, \`name\`, \`region\`, \`data\`) VALUES (${escStr(p.id)}, ${escStr(p.name)}, ${escStr(p.region)}, ${esc(p)});`
  );
}
lines.push('');

// 3. 各省风光数据（合并 5 个导出）
lines.push('-- 各省风光数据');
for (const id of PROVINCES) {
  const scenery = {
    ...(data[`${id}Data`] || {}),
    customs: data[`${id}CustomsData`] || {},
    intangibleHeritage: data[`${id}IntangibleHeritage`] || [],
    folkCustomsElements: data[`${id}FolkCustomsElements`] || [],
    festivals: data[`${id}Festivals`] || [],
  };
  lines.push(
    `INSERT INTO \`travel_guide_scenery\` (\`province_id\`, \`name\`, \`data\`) VALUES (${escStr(id)}, ${escStr(scenery.name || id)}, ${esc(scenery)});`
  );
}
lines.push('');

// 4. 各省美食数据（items + locations）
lines.push('-- 各省美食数据');
const foodAll = Object.assign({}, ...foodChunks);
for (const id of PROVINCES) {
  const entry = {
    items: foodAll[id] || [],
    locations: data.foodLocations[id] || [],
  };
  lines.push(
    `INSERT INTO \`travel_guide_food\` (\`province_id\`, \`name\`, \`data\`) VALUES (${escStr(id)}, ${escStr(entry.items[0]?.province || '')}, ${esc(entry)});`
  );
}

fs.mkdirSync(path.dirname(outSql), { recursive: true });
fs.writeFileSync(outSql, lines.join('\n'), 'utf8');
console.log(`✅ 已生成 ${outSql}`);
console.log(
  `   provinces: ${data.provinces.length}, scenery: ${PROVINCES.length}, food: ${PROVINCES.length}`
);
