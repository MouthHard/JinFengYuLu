#!/usr/bin/env node
import { execSync } from 'child_process';

try {
  const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  
  if (branch !== 'main' && branch !== 'master') {
    console.error('❌ ERROR: 必须在 main 或 master 分支上部署！当前分支:', branch);
    process.exit(1);
  }
  
  console.log('✅ 当前分支:', branch);
  console.log('开始构建...');
  
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('构建完成，开始部署到 gh-pages...');
  execSync('npx gh-pages -d dist -r https://github.com/MouthHard/Personal-Website.git -b gh-pages', { stdio: 'inherit' });
  
  console.log('🎉 部署成功！');
} catch (error) {
  console.error('❌ 部署失败:', error.message);
  process.exit(1);
}
