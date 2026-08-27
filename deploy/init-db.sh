#!/bin/bash
# ============================================
# 数据库一键导入脚本 - 服务器端使用
# 使用方法: DB_USER=xxx DB_PASS=xxx bash deploy/init-db.sh
# 环境变量:
#   DB_USER   - 数据库用户名 (必填)
#   DB_PASS   - 数据库密码   (必填)
#   DB_NAME   - 数据库名     (可选, 默认 personal_website)
# ============================================

set -e

if [ -z "$DB_USER" ] || [ -z "$DB_PASS" ]; then
  echo "❌ 请通过环境变量提供数据库凭据:"
  echo "   DB_USER=<用户名> DB_PASS=<密码> bash deploy/init-db.sh"
  exit 1
fi

DB_NAME="${DB_NAME:-personal_website}"
SQL_DIR="$(cd "$(dirname "$0")/.." && pwd)/server/database"

echo "🗄️  开始导入数据库..."

# 1. 创建数据库
echo "创建数据库 $DB_NAME..."
mysql -u "$DB_USER" -p"$DB_PASS" -e "
  CREATE DATABASE IF NOT EXISTS \`$DB_NAME\` 
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_unicode_ci;
"

# 2. 导入建表脚本
echo "导入表结构..."
for schema_file in "$SQL_DIR"/schema/*.sql; do
  echo "  导入 schema/$(basename "$schema_file")..."
  mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$schema_file"
done

# 3. 导入数据
echo "导入初始数据..."
for sql_file in "$SQL_DIR"/data/*.sql; do
  echo "  导入 $(basename "$sql_file")..."
  mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$sql_file"
done

# 4. 导入风景首页数据
if [ -f "$SQL_DIR/landscape/data/landscape_home_data.sql" ]; then
  echo "导入风景首页数据..."
  mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$SQL_DIR/landscape/data/landscape_home_data.sql"
fi

echo ""
echo "✅ 数据库导入完成！"
echo "数据库: $DB_NAME"
mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" -e "SELECT COUNT(*) AS '诗词总数' FROM aphorism WHERE is_active = 1;"
