/**
 * Generate server/database/data/03-history-data.sql from frontend History static data.
 * Usage: node scripts/gen-history-sql.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'src/pages/History/data');
const outPath = path.join(root, 'server/database/data/03-history-data.sql');

function loadExport(fileName, exportName) {
  let src = fs.readFileSync(path.join(dataDir, fileName), 'utf8');
  // Strip TypeScript interface / type declarations
  src = src.replace(/export\s+interface\s+\w+[^{]*\{[\s\S]*?\n\}/g, '');
  src = src.replace(/export\s+type\s+\w+\s*=[\s\S]*?;/g, '');
  // Strip type annotations on exports: `export const foo: Type =` -> `export const foo =`
  src = src.replace(/export\s+const\s+(\w+)\s*:\s*[^=]+=/g, 'export const $1 =');
  // Convert exports into assignments for vm
  src = src.replace(/export\s+const\s+/g, 'const ');

  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(`${src}\n; this.__result = ${exportName};`, sandbox);
  return sandbox.__result;
}

const dynastiesData = loadExport('dynasties.ts', 'dynastiesData');
const historicalEvents = loadExport('events.ts', 'historicalEvents');
const historicalFigures = loadExport('figures.ts', 'historicalFigures');
const culturalHeritage = loadExport('heritage.ts', 'culturalHeritage');

function esc(value) {
  if (value === null || value === undefined) return 'NULL';
  if (typeof value === 'boolean') return value ? '1' : '0';
  if (typeof value === 'number') return String(value);
  const s = String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `'${s}'`;
}

function jsonVal(value) {
  if (value === null || value === undefined) return 'NULL';
  return esc(JSON.stringify(value));
}

function buildDynastyInserts() {
  const rows = dynastiesData.map((d, i) => {
    const cols = [
      esc(d.id),
      esc(d.name),
      esc(d.period),
      esc(d.era),
      esc(d.periodTag),
      d.isUnified ? '1' : '0',
      esc(d.description),
      jsonVal(d.highlights ?? []),
      esc(d.capital),
      esc(d.location),
      esc(d.ethnicGroup),
      esc(d.founder),
      esc(d.mapUrl),
      esc(d.mapDescription),
      String(i),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });

  return [
    '-- ============================================',
    '-- 朝代表数据',
    `-- 共 ${dynastiesData.length} 条`,
    '-- ============================================',
    'DELETE FROM `dynasty`;',
    'INSERT INTO `dynasty` (',
    '  `dynasty_id`, `name`, `period`, `era`, `period_tag`, `is_unified`,',
    '  `description`, `highlights`, `capital`, `location`, `ethnic_group`,',
    '  `founder`, `map_url`, `map_description`, `sort_order`, `is_active`',
    ') VALUES',
    rows.join(',\n') + ';',
    '',
  ].join('\n');
}

function buildEventInserts() {
  const rows = historicalEvents.map((e, i) => {
    const cols = [
      esc(e.id),
      esc(e.title),
      esc(e.period),
      esc(e.category),
      esc(e.brief),
      esc(e.description),
      esc(e.impact),
      esc(e.imageUrl),
      jsonVal(e.tags ?? []),
      String(i),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });

  return [
    '-- ============================================',
    '-- 历史事件表数据',
    `-- 共 ${historicalEvents.length} 条`,
    '-- ============================================',
    'DELETE FROM `historical_event`;',
    'INSERT INTO `historical_event` (',
    '  `event_id`, `title`, `period`, `category`, `brief`, `description`,',
    '  `impact`, `image_url`, `tags`, `sort_order`, `is_active`',
    ') VALUES',
    rows.join(',\n') + ';',
    '',
  ].join('\n');
}

function buildFigureInserts() {
  const rows = historicalFigures.map((f, i) => {
    const back = f.backContent ?? {};
    const cols = [
      esc(f.id),
      esc(f.name),
      esc(f.dynasty),
      esc(f.category),
      esc(f.title),
      esc(f.brief),
      esc(f.description),
      jsonVal(f.achievements ?? []),
      esc(f.quotes),
      esc(f.portraitUrl),
      jsonVal(f.tags ?? []),
      esc(back.era ?? null),
      esc(back.contribution ?? null),
      esc(back.influence ?? null),
      esc(back.funFact ?? null),
      jsonVal(back.relatedFigures ?? []),
      String(i),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });

  return [
    '-- ============================================',
    '-- 历史人物表数据',
    `-- 共 ${historicalFigures.length} 条`,
    '-- ============================================',
    'DELETE FROM `historical_figure`;',
    'INSERT INTO `historical_figure` (',
    '  `figure_id`, `name`, `dynasty`, `category`, `title`, `brief`, `description`,',
    '  `achievements`, `quotes`, `portrait_url`, `tags`,',
    '  `back_era`, `back_contribution`, `back_influence`, `back_fun_fact`, `back_related_figures`,',
    '  `sort_order`, `is_active`',
    ') VALUES',
    rows.join(',\n') + ';',
    '',
  ].join('\n');
}

function buildHeritageInserts() {
  const rows = culturalHeritage.map((h, i) => {
    const cols = [
      esc(h.id),
      esc(h.name),
      esc(h.location),
      esc(h.category),
      esc(h.era),
      esc(h.year),
      esc(h.brief),
      esc(h.description),
      esc(h.history),
      esc(h.culturalSignificance),
      jsonVal(h.features ?? []),
      jsonVal(h.relatedFigures ?? []),
      esc(h.imageUrl),
      esc(h.thumbnailUrl),
      jsonVal(h.images ?? []),
      jsonVal(h.relatedItems ?? []),
      String(i),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });

  return [
    '-- ============================================',
    '-- 文化遗产表数据',
    `-- 共 ${culturalHeritage.length} 条`,
    '-- ============================================',
    'DELETE FROM `cultural_heritage`;',
    'INSERT INTO `cultural_heritage` (',
    '  `heritage_id`, `name`, `location`, `category`, `era`, `year`, `brief`,',
    '  `description`, `history`, `cultural_significance`, `features`, `related_figures`,',
    '  `image_url`, `thumbnail_url`, `images`, `related_items`, `sort_order`, `is_active`',
    ') VALUES',
    rows.join(',\n') + ';',
    '',
  ].join('\n');
}

const sql = [
  '-- ============================================',
  '-- 历史模块初始数据 (03-history-data.sql)',
  '-- 从 src/pages/History/data/* 静态数据自动生成',
  `-- 生成时间: ${new Date().toISOString()}`,
  `-- dynasty: ${dynastiesData.length}`,
  `-- historical_event: ${historicalEvents.length}`,
  `-- historical_figure: ${historicalFigures.length}`,
  `-- cultural_heritage: ${culturalHeritage.length}`,
  '-- ============================================',
  '',
  'SET NAMES utf8mb4;',
  '',
  buildDynastyInserts(),
  buildEventInserts(),
  buildFigureInserts(),
  buildHeritageInserts(),
].join('\n');

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sql, 'utf8');

console.log('Wrote', outPath);
console.log({
  dynasty: dynastiesData.length,
  historical_event: historicalEvents.length,
  historical_figure: historicalFigures.length,
  cultural_heritage: culturalHeritage.length,
});
