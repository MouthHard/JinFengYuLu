#!/bin/bash
# ============================================
# 自动部署脚本 - 在服务器上执行
# 拉取最新代码 → 构建前后端 → 重启服务
# 使用方法: bash /var/www/personal-website/deploy.sh
# ============================================

set -e

PROJECT_DIR="/var/www/personal-website"
REPO_DIR="$PROJECT_DIR/repo"
FRONTEND_DIR="$PROJECT_DIR/frontend"
BACKEND_DIR="$PROJECT_DIR/backend"

echo "🚀 开始部署..."

# 1. 拉取最新代码
echo "📦 拉取最新代码..."
if [ ! -d "$REPO_DIR/.git" ]; then
  git clone https://github.com/MouthHard/Personal-Website.git "$REPO_DIR"
else
  cd "$REPO_DIR"
  git pull origin main
fi

# 2. 构建前端
echo "🎨 构建前端..."
cd "$REPO_DIR"
npm install
npm run build
# 复制构建产物
rm -rf "$FRONTEND_DIR/dist"
cp -r "$REPO_DIR/dist" "$FRONTEND_DIR/dist"

# 3. 构建后端
echo "⚙️  构建后端..."
cd "$REPO_DIR/server"
npm install
npm run build
# 复制构建产物和配置
rm -rf "$BACKEND_DIR/dist"
cp -r "$REPO_DIR/server/dist" "$BACKEND_DIR/dist"
cp -n "$REPO_DIR/server/.env" "$BACKEND_DIR/.env" 2>/dev/null || true
cp -r "$REPO_DIR/server/database" "$BACKEND_DIR/database" 2>/dev/null || true

# 4. 重启后端服务
echo "🔄 重启后端服务..."
cd "$PROJECT_DIR"
cp "$REPO_DIR/deploy/ecosystem.config.cjs" "$PROJECT_DIR/ecosystem.config.cjs"
pm2 reload ecosystem.config.cjs --update-env
pm2 save

# 5. 重载 Nginx
echo "🌐 重载 Nginx..."
nginx -t && systemctl reload nginx

echo ""
echo "✅ 部署完成！"
echo "网站地址: http://$(curl -s ifconfig.me)"
