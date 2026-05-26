/**
 * 更新图片引用路径脚本
 * 功能：将代码中的 .png/.jpg/.jpeg 引用改为 .webp
 * 
 * 使用方法：node scripts/update-image-references.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置项
const config = {
  // 源代码目录
  srcDir: path.join(__dirname, '../src'),
  // 需要处理的文件扩展名
  fileExtensions: ['.vue', '.ts', '.js', '.scss', '.css'],
  // 图片扩展名映射
  imageExtensionMap: {
    '.png': '.webp',
    '.jpg': '.webp',
    '.jpeg': '.webp',
  },
  // 排除的目录
  excludeDirs: ['node_modules', 'dist', 'image-backup'],
};

// 统计信息
const stats = {
  totalFiles: 0,
  modifiedFiles: 0,
  totalReplacements: 0,
  details: [],
};

/**
 * 递归获取所有需要处理的文件
 */
async function getAllFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      // 排除特定目录
      if (!config.excludeDirs.includes(item.name)) {
        const subFiles = await getAllFiles(fullPath);
        files.push(...subFiles);
      }
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (config.fileExtensions.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

/**
 * 更新文件中的图片引用
 */
async function updateImageReferences(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  const originalContent = content;
  let replacementCount = 0;

  // 替换图片扩展名
  for (const [oldExt, newExt] of Object.entries(config.imageExtensionMap)) {
    // 匹配各种引用模式
    const patterns = [
      // import/require 引用
      new RegExp(`(from\\s+['"][^'"]*)${oldExt.replace('.', '\\.')}(['"])`, 'g'),
      // img src 引用
      new RegExp(`(src\\s*=\\s*['"][^'"]*)${oldExt.replace('.', '\\.')}(['"])`, 'g'),
      // CSS url 引用
      new RegExp(`(url\\(['"]?[^'")\\s]*)${oldExt.replace('.', '\\.')}(['"]?\\))`, 'g'),
      // 字符串中的路径
      new RegExp(`(['"][^'"]*)${oldExt.replace('.', '\\.')}(['"])`, 'g'),
    ];

    for (const pattern of patterns) {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, `$1${newExt}$2`);
        replacementCount += matches.length;
      }
    }
  }

  // 如果有修改，写回文件
  if (content !== originalContent) {
    await fs.writeFile(filePath, content, 'utf-8');
    stats.modifiedFiles++;
    stats.totalReplacements += replacementCount;
    
    const relativePath = path.relative(config.srcDir, filePath);
    stats.details.push({
      file: relativePath,
      replacements: replacementCount,
    });

    console.log(`✅ ${relativePath} (${replacementCount} 处替换)`);
    return true;
  }

  return false;
}

/**
 * 生成更新报告
 */
async function generateReport() {
  const reportPath = path.join(__dirname, 'image-references-update-report.json');
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFiles: stats.totalFiles,
      modifiedFiles: stats.modifiedFiles,
      totalReplacements: stats.totalReplacements,
    },
    details: stats.details,
  };

  await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\n📊 报告已生成: ${reportPath}`);
}

/**
 * 主函数
 */
async function main() {
  console.log('🔄 开始更新图片引用路径...\n');
  console.log(`📁 源代码目录: ${config.srcDir}`);
  console.log(`🎯 文件类型: ${config.fileExtensions.join(', ')}\n`);

  // 获取所有文件
  const files = await getAllFiles(config.srcDir);
  stats.totalFiles = files.length;

  console.log(`📄 找到 ${files.length} 个文件待处理\n`);
  console.log('='.repeat(60));

  // 逐个处理文件
  for (let i = 0; i < files.length; i++) {
    const relativePath = path.relative(config.srcDir, files[i]);
    process.stdout.write(`\r[${i + 1}/${files.length}] 处理: ${relativePath}`);
    await updateImageReferences(files[i]);
  }

  // 输出统计信息
  console.log('\n\n' + '='.repeat(60));
  console.log('\n📈 更新完成统计:');
  console.log(`   总文件数: ${stats.totalFiles}`);
  console.log(`   修改文件数: ${stats.modifiedFiles}`);
  console.log(`   总替换次数: ${stats.totalReplacements}`);

  // 生成报告
  await generateReport();

  console.log('\n✨ 全部完成！');
}

// 执行
main().catch((error) => {
  console.error('❌ 执行出错:', error);
  process.exit(1);
});
