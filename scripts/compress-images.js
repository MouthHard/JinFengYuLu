/**
 * 图片压缩转换脚本
 * 功能：将PNG/JPG图片转换为WebP格式，并压缩体积
 * 
 * 使用方法：node scripts/compress-images.js
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置项
const config = {
  // 图片目录
  imageDir: path.join(__dirname, '../src/assets/image'),
  // 支持的输入格式
  inputFormats: ['.png', '.jpg', '.jpeg'],
  // WebP质量（0-100）
  quality: 85,
  // 是否保留原文件（建议保留，以便回退）
  keepOriginal: true,
  // 原文件备份目录
  backupDir: path.join(__dirname, '../src/assets/image-backup'),
  // 大文件阈值（2MB以上使用更激进的压缩）
  largeFileThreshold: 2 * 1024 * 1024,
  // 是否生成转换报告
  generateReport: true,
};

// 统计信息
const stats = {
  total: 0,
  success: 0,
  failed: 0,
  skipped: 0,
  totalOriginalSize: 0,
  totalCompressedSize: 0,
  details: [],
};

/**
 * 递归获取所有图片文件
 */
async function getAllImages(dir) {
  const images = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      const subImages = await getAllImages(fullPath);
      images.push(...subImages);
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (config.inputFormats.includes(ext)) {
        images.push(fullPath);
      }
    }
  }

  return images;
}

/**
 * 获取文件大小
 */
async function getFileSize(filePath) {
  const stat = await fs.stat(filePath);
  return stat.size;
}

/**
 * 格式化文件大小
 */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * 压缩单张图片
 */
async function compressImage(inputPath) {
  const startTime = Date.now();
  const originalSize = await getFileSize(inputPath);
  const fileName = path.basename(inputPath);
  const dirName = path.dirname(inputPath);
  const outputFileName = fileName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const outputPath = path.join(dirName, outputFileName);

  // 检查是否已存在WebP文件
  try {
    await fs.access(outputPath);
    console.log(`⏭️  跳过（已存在）: ${fileName}`);
    stats.skipped++;
    return { skipped: true };
  } catch {
    // 文件不存在，继续处理
  }

  try {
    // 根据文件大小选择压缩策略
    const isLargeFile = originalSize > config.largeFileThreshold;
    const quality = isLargeFile ? 80 : config.quality;

    // 获取图片信息
    const imageInfo = await sharp(inputPath).metadata();
    
    // 压缩选项
    const options = {
      quality,
      effort: 6, // 压缩努力程度（0-6，6最慢但压缩率最高）
      lossless: false,
      nearLossless: false,
    };

    // 对于超大图片，限制尺寸
    let sharpInstance = sharp(inputPath);
    if (isLargeFile && imageInfo.width > 2000) {
      sharpInstance = sharpInstance.resize(2000, null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
      console.log(`📐 大图缩放: ${fileName} (${imageInfo.width}x${imageInfo.height} → 2000px宽)`);
    }

    // 执行转换
    await sharpInstance.webp(options).toFile(outputPath);

    const compressedSize = await getFileSize(outputPath);
    const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(2);
    const duration = Date.now() - startTime;

    // 记录统计信息
    stats.success++;
    stats.totalOriginalSize += originalSize;
    stats.totalCompressedSize += compressedSize;

    const detail = {
      file: fileName,
      path: inputPath,
      originalSize,
      compressedSize,
      reduction: `${reduction}%`,
      duration: `${duration}ms`,
    };
    stats.details.push(detail);

    console.log(
      `✅ 成功: ${fileName}\n` +
      `   原始: ${formatSize(originalSize)} → 压缩后: ${formatSize(compressedSize)}\n` +
      `   减少: ${reduction}% | 耗时: ${duration}ms`
    );

    // 备份原文件
    if (config.keepOriginal) {
      const relativePath = path.relative(config.imageDir, inputPath);
      const backupPath = path.join(config.backupDir, relativePath);
      const backupDir = path.dirname(backupPath);
      
      await fs.mkdir(backupDir, { recursive: true });
      await fs.copyFile(inputPath, backupPath);
    }

    return { success: true, detail };
  } catch (error) {
    stats.failed++;
    console.error(`❌ 失败: ${fileName}\n   错误: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * 生成转换报告
 */
async function generateReport() {
  if (!config.generateReport) return;

  const reportPath = path.join(__dirname, 'image-compression-report.json');
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: stats.total,
      success: stats.success,
      failed: stats.failed,
      skipped: stats.skipped,
      totalOriginalSize: formatSize(stats.totalOriginalSize),
      totalCompressedSize: formatSize(stats.totalCompressedSize),
      totalReduction: `${((1 - stats.totalCompressedSize / stats.totalOriginalSize) * 100).toFixed(2)}%`,
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
  console.log('🚀 开始图片压缩转换...\n');
  console.log(`📁 图片目录: ${config.imageDir}`);
  console.log(`🎯 目标格式: WebP (质量: ${config.quality})`);
  console.log(`💾 备份原文件: ${config.keepOriginal ? '是' : '否'}\n`);

  // 创建备份目录
  if (config.keepOriginal) {
    await fs.mkdir(config.backupDir, { recursive: true });
  }

  // 获取所有图片
  const images = await getAllImages(config.imageDir);
  stats.total = images.length;

  console.log(`📷 找到 ${images.length} 张图片待处理\n`);
  console.log('='.repeat(60));

  // 逐个处理图片
  for (let i = 0; i < images.length; i++) {
    console.log(`\n[${i + 1}/${images.length}]`);
    await compressImage(images[i]);
  }

  // 输出统计信息
  console.log('\n' + '='.repeat(60));
  console.log('\n📈 转换完成统计:');
  console.log(`   总计: ${stats.total} 张`);
  console.log(`   成功: ${stats.success} 张`);
  console.log(`   失败: ${stats.failed} 张`);
  console.log(`   跳过: ${stats.skipped} 张`);
  console.log(`\n💾 体积变化:`);
  console.log(`   原始总体积: ${formatSize(stats.totalOriginalSize)}`);
  console.log(`   压缩后体积: ${formatSize(stats.totalCompressedSize)}`);
  console.log(`   总共减少: ${formatSize(stats.totalOriginalSize - stats.totalCompressedSize)}`);
  console.log(`   压缩率: ${((1 - stats.totalCompressedSize / stats.totalOriginalSize) * 100).toFixed(2)}%`);

  // 生成报告
  await generateReport();

  console.log('\n✨ 全部完成！');
}

// 执行
main().catch((error) => {
  console.error('❌ 执行出错:', error);
  process.exit(1);
});
