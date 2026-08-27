# 个人网站部署指南

## 方案概述

| 组件 | 方案 | 说明 |
|------|------|------|
| 服务器 | 腾讯云轻量应用服务器 | 2核2G，约50-90元/年（新人价） |
| 操作系统 | Ubuntu 22.04 LTS | 稳定、社区支持好 |
| 数据库 | MySQL 8.0 | 服务器自建 |
| 后端 | NestJS + PM2 | 守护进程，自动重启 |
| 前端 | Vue3 静态文件 + Nginx | 构建后静态托管 |
| 反向代理 | Nginx | 前端静态 + 后端API代理 |

---

## 第一步：购买服务器

1. 打开 [腾讯云轻量应用服务器](https://cloud.tencent.com/product/lighthouse)
2. 选择 **2核2G3M** 套餐（新人优惠约50-90元/年）
3. 镜像选择 **Ubuntu 22.04 LTS**
4. 地域选择离你最近的（如广州、上海、北京）
5. 购买后记录 **服务器公网 IP**

> 也可选阿里云 ECS / 京东云，操作类似

---

## 第二步：连接服务器

购买后在控制台找到服务器公网 IP，用 SSH 连接：

```bash
# Windows 用 PowerShell
ssh root@你的服务器IP

# 首次连接输入 yes，然后输入密码（控制台可重置）
```

---

## 第三步：安装环境

```bash
# 上传部署文件到服务器（在本地 PowerShell 执行）
scp -r deploy/ root@你的服务器IP:/var/www/personal-website/

# SSH 登录服务器
ssh root@你的服务器IP

# 运行安装脚本
cd /var/www/personal-website
sudo bash deploy/setup.sh
```

安装完成后会显示后续步骤提示。

---

## 第四步：配置 MySQL

```bash
# 安全初始化
sudo mysql_secure_installation

# 登录 MySQL 创建数据库和用户
sudo mysql -u root -p
```

在 MySQL 中执行：

```sql
CREATE DATABASE personal_website CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'website'@'localhost' IDENTIFIED BY '设置一个强密码';
GRANT ALL ON personal_website.* TO 'website'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## 第五步：导入数据库

```bash
# 修改脚本中的数据库密码
nano /var/www/personal-website/deploy/init-db.sh
# 修改 DB_PASS="你的数据库密码"

# 执行导入
bash /var/www/personal-website/deploy/init-db.sh
```

---

## 第六步：拉取代码并配置后端

```bash
# 克隆代码
cd /var/www/personal-website
git clone https://github.com/MouthHard/Personal-Website.git repo

# 配置后端环境
cd repo/server
cp .env.example .env
nano .env
```

修改 `.env` 文件：

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=website
DB_PASSWORD=你刚才设置的密码
DB_DATABASE=personal_website
PORT=3000
NODE_ENV=production
CORS_ORIGIN=http://你的服务器IP
```

```bash
# 构建后端
npm install
npm run build

# 用 PM2 启动
cd /var/www/personal-website
cp repo/deploy/ecosystem.config.cjs .
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup  # 按提示执行返回的命令
```

---

## 第七步：构建前端

```bash
cd /var/www/personal-website/repo
npm install
npm run build

# 复制到 Nginx 目录
mkdir -p /var/www/personal-website/frontend
cp -r dist /var/www/personal-website/frontend/dist
```

---

## 第八步：配置 Nginx

```bash
# 复制配置
cp /var/www/personal-website/repo/deploy/nginx.conf /etc/nginx/sites-available/personal-website
ln -s /etc/nginx/sites-available/personal-website /etc/nginx/sites-enabled/

# 删除默认站点（避免冲突）
rm -f /etc/nginx/sites-enabled/default

# 测试配置
nginx -t

# 重载
systemctl reload nginx
```

---

## 第九步：开放防火墙端口

在腾讯云控制台 → 防火墙，开放 **80 端口（HTTP）**。

---

## 验证部署

浏览器访问 `http://你的服务器IP`，应该能看到网站首页。

测试 API：访问 `http://你的服务器IP/api/aphorism?page=1&limit=5`，应返回诗词 JSON 数据。

---

## 后续更新代码

每次在本地 push 代码到 GitHub 后，在服务器执行：

```bash
bash /var/www/personal-website/deploy/deploy.sh
```

即可自动拉取最新代码、重新构建前后端、重启服务。

---

## 常见问题

### Q: 访问不了网站？
1. 检查防火墙是否开放 80 端口
2. 检查 Nginx 是否运行：`systemctl status nginx`
3. 检查后端是否运行：`pm2 status`

### Q: API 返回 502？
后端服务未运行，执行 `pm2 restart personal-website-api`

### Q: 数据库连接失败？
检查 `.env` 中的数据库配置是否正确，`mysql -u website -p` 能否登录

### Q: 如何查看日志？
```bash
pm2 logs personal-website-api  # 后端日志
tail -f /var/log/nginx/error.log  # Nginx 错误日志
```
