/**
 * Generate server/database/data/04-museum-data.sql from frontend Museum static data.
 * Usage: node scripts/gen-museum-sql.mjs
 *
 * Import note (Windows): use cmd, not PowerShell pipe:
 *   cmd /c "mysql -u root personal_website --default-character-set=utf8mb4 < server\database\schema\04-museum.sql"
 *   cmd /c "mysql -u root personal_website --default-character-set=utf8mb4 < server\database\data\04-museum-data.sql"
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'src/pages/Museum/data');
const outPath = path.join(root, 'server/database/data/04-museum-data.sql');

function stripTs(src) {
  // Strip imports / re-exports (including multi-line)
  src = src.replace(/import\s+(?:type\s+)?[\s\S]*?from\s+['"][^'"]+['"];?/g, '');
  src = src.replace(/export\s+(?:type\s+)?\{[\s\S]*?\}\s+from\s+['"][^'"]+['"];?/g, '');
  src = src.replace(/export\s+interface\s+\w+[^{]*\{[\s\S]*?\n\}/g, '');
  src = src.replace(/export\s+type\s+\w+\s*=[\s\S]*?;/g, '');
  // Strip type annotations on const / let / var
  src = src.replace(/\b(export\s+)?(const|let|var)\s+(\w+)\s*:\s*[^=]+=/g, '$1$2 $3 =');
  // Strip function return + param types: function name(...): Type {
  src = src.replace(
    /\b(export\s+)?function\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*[^{]+)?\{/g,
    (_, _exp, name, params) => {
      const cleanParams = params.replace(/(\w+)\s*:\s*[^,)=]+/g, '$1');
      return `function ${name}(${cleanParams}) {`;
    },
  );
  // Arrow functions with typed params / return
  src = src.replace(
    /\b(export\s+)?const\s+(\w+)\s*=\s*\(([^)]*)\)\s*(?::\s*[^=]+)?=>/g,
    (_, _exp, name, params) => {
      const cleanParams = params.replace(/(\w+)\s*:\s*[^,)=]+/g, '$1');
      return `const ${name} = (${cleanParams}) =>`;
    },
  );
  // Remaining export keywords
  src = src.replace(/export\s+function\s+/g, 'function ');
  src = src.replace(/export\s+const\s+/g, 'const ');
  src = src.replace(/export\s+\{[\s\S]*?\};?/g, '');
  // as const / satisfies
  src = src.replace(/\s+as\s+const\b/g, '');
  src = src.replace(/\s+satisfies\s+[^;,\n]+/g, '');
  return src;
}

function loadExport(relPath, exportName) {
  let src = fs.readFileSync(path.join(dataDir, relPath), 'utf8');
  src = stripTs(src);
  const sandbox = { console, Object, Array, Math, JSON, Number, String, Boolean };
  vm.createContext(sandbox);
  vm.runInContext(`${src}\n; this.__result = ${exportName};`, sandbox);
  return sandbox.__result;
}

const museums = loadExport('museums/index.ts', 'museums');
const allMuseumDetails = loadExport('museum-details/index.ts', 'allMuseumDetails');
const artifacts = loadExport('artifacts/artifactData.ts', 'artifacts');
const artifactDetails = loadExport('artifacts/artifactDetailData.ts', 'artifactDetails');
const exhibitions = loadExport('exhibitions/index.ts', 'exhibitions');
const activities = loadExport('activities/index.ts', 'activities');
const news = loadExport('news/index.ts', 'news');
const immersiveExperiences = loadExport(
  'immersive-experiences/index.ts',
  'immersiveExperiences',
);
const creativeProducts = loadExport('creative-products/index.ts', 'creativeProducts');
const academicResources = loadExport('academic-resources/index.ts', 'academicResources');
const museumExhibitionHalls = loadExport(
  'special-exhibitions/museumHallData.ts',
  'museumExhibitionHalls',
);

const exhibitionHalls = Object.entries(museumExhibitionHalls || {}).flatMap(
  ([museumId, halls]) =>
    (halls || []).map((h) => ({
      ...h,
      museumId: Number(museumId),
    })),
);

function esc(value) {
  if (value === null || value === undefined) return 'NULL';
  if (typeof value === 'boolean') return value ? '1' : '0';
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return 'NULL';
    return String(value);
  }
  const s = String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `'${s}'`;
}

function jsonVal(value) {
  if (value === null || value === undefined) return 'NULL';
  return esc(JSON.stringify(value));
}

function buildInsert(table, columns, rows, comment) {
  if (!rows.length) {
    return [
      `-- ============================================`,
      `-- ${comment}`,
      `-- 共 0 条`,
      `-- ============================================`,
      `DELETE FROM \`${table}\`;`,
      '',
    ].join('\n');
  }
  return [
    `-- ============================================`,
    `-- ${comment}`,
    `-- 共 ${rows.length} 条`,
    `-- ============================================`,
    `DELETE FROM \`${table}\`;`,
    `INSERT INTO \`${table}\` (`,
    `  ${columns.map((c) => `\`${c}\``).join(', ')}`,
    `) VALUES`,
    rows.join(',\n') + ';',
    '',
  ].join('\n');
}

function buildMuseumInserts() {
  const rows = museums.map((m) => {
    const cols = [
      esc(m.id),
      esc(m.name),
      esc(m.province ?? null),
      esc(m.type ?? null),
      esc(m.image ?? null),
      esc(m.description ?? null),
      esc(m.artifacts ?? 0),
      esc(m.exhibitions ?? 0),
      esc(m.visitors ?? 0),
      jsonVal(m.features ?? []),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum',
    [
      'id',
      'name',
      'province',
      'type',
      'image',
      'description',
      'artifacts_count',
      'exhibitions_count',
      'visitors',
      'features',
      'is_active',
    ],
    rows,
    '博物馆主表数据',
  );
}

function buildDetailInserts() {
  const rows = allMuseumDetails.map((d) => {
    const cols = [
      esc(d.museumId),
      jsonVal(d.visitInfo ?? null),
      esc(d.history ?? null),
      esc(d.architecture ?? null),
      jsonVal(d.highlights ?? null),
      esc(d.education ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_detail',
    [
      'museum_id',
      'visit_info',
      'history',
      'architecture',
      'highlights',
      'education',
      'is_active',
    ],
    rows,
    '博物馆详情表数据',
  );
}

function buildArtifactInserts() {
  const rows = artifacts.map((a) => {
    const cols = [
      esc(a.id),
      esc(a.museumId),
      esc(a.name),
      esc(a.period ?? null),
      esc(a.image ?? null),
      esc(a.description ?? null),
      esc(a.category ?? null),
      jsonVal(a.basicInfo ?? null),
      esc(a.appearance ?? null),
      esc(a.historicalValue ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_artifact',
    [
      'id',
      'museum_id',
      'name',
      'period',
      'image',
      'description',
      'category',
      'basic_info',
      'appearance',
      'historical_value',
      'is_active',
    ],
    rows,
    '博物馆文物表数据',
  );
}

function buildArtifactDetailInserts() {
  const rows = artifactDetails.map((a) => {
    const cols = [
      esc(a.id),
      esc(a.name),
      esc(a.period ?? null),
      esc(a.description ?? null),
      esc(a.image ?? null),
      esc(a.type ?? null),
      jsonVal(a.basicInfo ?? null),
      esc(a.appearance ?? null),
      esc(a.historicalValue ?? null),
      esc(a.artifactLevel ?? null),
      esc(a.relatedStory ?? null),
      esc(a.protectionStatus ?? null),
      esc(a.culturalSignificance ?? null),
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_artifact_detail',
    [
      'id',
      'name',
      'period',
      'description',
      'image',
      'type',
      'basic_info',
      'appearance',
      'historical_value',
      'artifact_level',
      'related_story',
      'protection_status',
      'cultural_significance',
    ],
    rows,
    '博物馆文物详情表数据',
  );
}

function buildExhibitionInserts() {
  const rows = exhibitions.map((e) => {
    const cols = [
      esc(e.id),
      esc(e.museumId),
      esc(e.title),
      esc(e.description ?? null),
      esc(e.date ?? null),
      esc(e.image ?? null),
      esc(e.location ?? null),
      esc(e.category ?? null),
      esc(e.status ?? null),
      esc(e.statusText ?? null),
      jsonVal(e.tags ?? null),
      esc(e.curator ?? null),
      esc(e.scale ?? null),
      e.visitors === undefined || e.visitors === null ? 'NULL' : esc(e.visitors),
      esc(e.background ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_exhibition',
    [
      'id',
      'museum_id',
      'title',
      'description',
      'date',
      'image',
      'location',
      'category',
      'status',
      'status_text',
      'tags',
      'curator',
      'scale',
      'visitors',
      'background',
      'is_active',
    ],
    rows,
    '博物馆展览表数据',
  );
}

function buildActivityInserts() {
  const rows = activities.map((a) => {
    const cols = [
      esc(a.id),
      esc(a.museumId),
      esc(a.title),
      esc(a.description ?? null),
      esc(a.date ?? null),
      esc(a.time ?? null),
      esc(a.location ?? null),
      esc(a.image ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_activity',
    [
      'id',
      'museum_id',
      'title',
      'description',
      'date',
      'time',
      'location',
      'image',
      'is_active',
    ],
    rows,
    '博物馆活动表数据',
  );
}

function buildNewsInserts() {
  const rows = news.map((n) => {
    const cols = [
      esc(n.id),
      esc(n.museumId),
      esc(n.title),
      esc(n.description ?? null),
      esc(n.date ?? null),
      esc(n.image ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_news',
    ['id', 'museum_id', 'title', 'description', 'date', 'image', 'is_active'],
    rows,
    '博物馆新闻表数据',
  );
}

function buildImmersiveInserts() {
  const rows = immersiveExperiences.map((i) => {
    const cols = [
      esc(i.id),
      esc(i.museumId),
      esc(i.title),
      esc(i.description ?? null),
      esc(i.image ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_immersive',
    ['id', 'museum_id', 'title', 'description', 'image', 'is_active'],
    rows,
    '博物馆沉浸式体验表数据',
  );
}

function buildCreativeInserts() {
  const rows = creativeProducts.map((p) => {
    const cols = [
      esc(p.id),
      esc(p.museumId),
      esc(p.name),
      esc(p.description ?? null),
      esc(p.price ?? 0),
      esc(p.image ?? null),
      esc(p.category ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_creative_product',
    [
      'id',
      'museum_id',
      'name',
      'description',
      'price',
      'image',
      'category',
      'is_active',
    ],
    rows,
    '博物馆文创产品表数据',
  );
}

function buildAcademicInserts() {
  const rows = academicResources.map((r) => {
    const cols = [
      esc(r.id),
      esc(r.museumId),
      esc(r.title),
      esc(r.author ?? null),
      esc(r.date ?? null),
      esc(r.type ?? null),
      esc(r.description ?? null),
      esc(r.link ?? null),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_academic_resource',
    [
      'id',
      'museum_id',
      'title',
      'author',
      'date',
      'type',
      'description',
      'link',
      'is_active',
    ],
    rows,
    '博物馆学术资源表数据',
  );
}

function buildHallInserts() {
  const rows = exhibitionHalls.map((h) => {
    const cols = [
      esc(h.id),
      esc(h.museumId),
      esc(h.name),
      esc(h.icon ?? null),
      esc(h.category ?? null),
      esc(h.coverImage ?? null),
      esc(h.introduction ?? null),
      jsonVal(h.stats ?? null),
      esc(h.location ?? null),
      esc(h.openTime ?? null),
      esc(h.duration ?? null),
      esc(h.ticket ?? null),
      jsonVal(h.artifacts ?? []),
      jsonVal(h.exhibitions ?? []),
      jsonVal(h.recommendations ?? []),
      '1',
    ];
    return `(${cols.join(', ')})`;
  });
  return buildInsert(
    'museum_exhibition_hall',
    [
      'hall_id',
      'museum_id',
      'name',
      'icon',
      'category',
      'cover_image',
      'introduction',
      'stats',
      'location',
      'open_time',
      'duration',
      'ticket',
      'artifacts',
      'exhibitions',
      'recommendations',
      'is_active',
    ],
    rows,
    '博物馆专馆表数据',
  );
}

const counts = {
  museum: museums.length,
  museum_detail: allMuseumDetails.length,
  museum_artifact: artifacts.length,
  museum_artifact_detail: artifactDetails.length,
  museum_exhibition: exhibitions.length,
  museum_activity: activities.length,
  museum_news: news.length,
  museum_immersive: immersiveExperiences.length,
  museum_creative_product: creativeProducts.length,
  museum_academic_resource: academicResources.length,
  museum_exhibition_hall: exhibitionHalls.length,
};

const sql = [
  '-- ============================================',
  '-- 博物馆模块初始数据 (04-museum-data.sql)',
  '-- 从 src/pages/Museum/data/* 静态数据自动生成',
  `-- 生成时间: ${new Date().toISOString()}`,
  ...Object.entries(counts).map(([k, v]) => `-- ${k}: ${v}`),
  '--',
  '-- 导入说明 (Windows 编码):',
  '--   请使用 cmd，不要用 PowerShell 管道重定向，避免中文乱码：',
  '--   cmd /c "mysql -u root personal_website --default-character-set=utf8mb4 < server\\database\\schema\\04-museum.sql"',
  '--   cmd /c "mysql -u root personal_website --default-character-set=utf8mb4 < server\\database\\data\\04-museum-data.sql"',
  '-- ============================================',
  '',
  'SET NAMES utf8mb4;',
  '',
  buildMuseumInserts(),
  buildDetailInserts(),
  buildArtifactInserts(),
  buildArtifactDetailInserts(),
  buildExhibitionInserts(),
  buildActivityInserts(),
  buildNewsInserts(),
  buildImmersiveInserts(),
  buildCreativeInserts(),
  buildAcademicInserts(),
  buildHallInserts(),
].join('\n');

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sql, 'utf8');

console.log('Wrote', outPath);
console.log(counts);
