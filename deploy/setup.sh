#!/bin/bash
# ============================================
# 服务器环境一键安装脚本
# 适用系统: Ubuntu 20.04+ / Debian 11+
# 使用方法: sudo bash setup.sh
# ============================================

set -e

echo "=========================================="
echo "  个人网站 - 服务器环境安装"
echo "=========================================="

# 检查是否为 root
if [ "$EUID" -ne 0 ]; then
  echo "❌ 请使用 sudo 运行此脚本"
  exit 1
fi

# 1. 更新系统
echo "📦 更新系统包..."
apt update && apt upgrade -y

# 2. 安装 MySQL 8.0
echo "🗄️  安装 MySQL 8.0..."
if ! command -v mysql &> /dev/null; then
  apt install -y mysql-server mysql-client
  systemctl start mysql
  systemctl enable mysql
  echo "✅ MySQL 已安装"
else
  echo "✅ MySQL 已存在，跳过"
fi

# 3. 安装 Node.js 20.x LTS
echo "🟢 安装 Node.js 20.x..."
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
  echo "✅ Node.js 已安装: $(node -v)"
else
  echo "✅ Node.js 已存在: $(node -v)"
fi

# 4. 安装 PM2
echo "📦 安装 PM2..."
if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
  echo "✅ PM2 已安装"
else
  echo "✅ PM2 已存在"
fi

# 5. 安装 Nginx
echo "🌐 安装 Nginx..."
if ! command -v nginx &> /dev/null; then
  apt install -y nginx
  systemctl start nginx
  systemctl enable nginx
  echo "✅ Nginx 已安装"
else
  echo "✅ Nginx 已存在"
fi

# 6. 安装 Git
echo "📋 安装 Git..."
apt install -y git

# 7. 创建项目目录
echo "📁 创建项目目录..."
mkdir -p /var/www/personal-website
mkdir -p /var/www/personal-website/frontend
mkdir -p /var/www/personal-website/backend
mkdir -p /var/www/personal-website/logs

echo ""
echo "=========================================="
echo "  ✅ 环境安装完成！"
echo "=========================================="
echo ""
echo "接下来请执行以下步骤："
echo ""
echo "1. 配置 MySQL:"
echo "   sudo mysql_secure_installation"
echo "   sudo mysql -u root -p"
echo "   CREATE DATABASE personal_website CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
echo "   CREATE USER 'website'@'localhost' IDENTIFIED BY '你的密码';"
echo "   GRANT ALL ON personal_website.* TO 'website'@'localhost';"
echo "   FLUSH PRIVILEGES;"
echo ""
echo "2. 导入数据库数据:"
echo "   cd /var/www/personal-website/backend"
echo "   mysql -u website -p personal_website < database/init.sql"
echo ""
echo "3. 配置后端 .env:"
echo "   cp .env.example .env"
echo "   nano .env  # 修改数据库密码等配置"
echo ""
echo "4. 启动后端服务:"
echo "   npm install && npm run build"
echo "   pm2 start ecosystem.config.js"
echo "   pm2 save"
echo "   pm2 startup"
echo ""
echo "5. 配置 Nginx:"
echo "   cp deploy/nginx.conf /etc/nginx/sites-available/personal-website"
echo "   ln -s /etc/nginx/sites-available/personal-website /etc/nginx/sites-enabled/"
echo "   nginx -t && systemctl reload nginx"
echo ""
