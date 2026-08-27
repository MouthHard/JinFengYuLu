#!/bin/bash
set -e

WWW_ROOT="/var/www/personal-website"
UPLOAD_DIR="/home/ubuntu"

echo "=========================================="
echo "  Personal Website Deploy Update"
echo "=========================================="

# Check frontend package (required)
if [ ! -f "$UPLOAD_DIR/deploy-update.tar.gz" ]; then
    echo "ERROR: $UPLOAD_DIR/deploy-update.tar.gz not found"
    exit 1
fi

# Check backend package (optional - only when updating backend)
HAS_BACKEND_UPDATE=false
if [ -f "$UPLOAD_DIR/server-dist-update.tar.gz" ]; then
    HAS_BACKEND_UPDATE=true
fi

# Step 1: Backup
echo ""
echo "[1/7] Backup current version..."
BACKUP_DIR="$WWW_ROOT-backup-$(date +%Y%m%d-%H%M%S)"
sudo cp -r $WWW_ROOT $BACKUP_DIR
echo "OK: Backup saved to $BACKUP_DIR"

# Step 2: Update frontend dist (强制清除旧文件)
echo ""
echo "[2/7] Update frontend dist..."
cd $UPLOAD_DIR
rm -rf dist nginx.conf ecosystem.config.cjs update.sh
tar -xzf deploy-update.tar.gz
sudo rm -rf $WWW_ROOT/dist
sudo mv dist $WWW_ROOT/dist
sudo chown -R ubuntu:ubuntu $WWW_ROOT/dist
echo "OK: Frontend dist updated"

# Step 3: Update backend dist (optional)
if [ "$HAS_BACKEND_UPDATE" = true ]; then
  echo ""
  echo "[3/7] Update backend dist..."
  cd $UPLOAD_DIR
  mkdir -p /tmp/server-update
  tar -xzf server-dist-update.tar.gz -C /tmp/server-update
  sudo rm -rf $WWW_ROOT/server/dist
  sudo cp -r /tmp/server-update/dist $WWW_ROOT/server/dist
  sudo chown -R ubuntu:ubuntu $WWW_ROOT/server/dist
  rm -rf /tmp/server-update
  echo "OK: Backend dist updated"
else
  echo ""
  echo "[3/7] Skip backend update (no server-dist-update.tar.gz)"
fi

# Step 4: Update Nginx config
echo ""
echo "[4/7] Update Nginx config..."
sudo cp $UPLOAD_DIR/nginx.conf /etc/nginx/sites-available/personal-website
sudo ln -sf /etc/nginx/sites-available/personal-website /etc/nginx/sites-enabled/personal-website
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && echo "OK: Nginx config validated" || { echo "ERROR: Nginx config failed"; exit 1; }

# Step 5: Restart backend (optional)
if [ "$HAS_BACKEND_UPDATE" = true ]; then
  echo ""
  echo "[5/7] Restart backend service..."
  sudo mkdir -p $WWW_ROOT/logs
  sudo cp $UPLOAD_DIR/ecosystem.config.cjs $WWW_ROOT/ecosystem.config.cjs
  cd $WWW_ROOT
  pm2 delete personal-website-api 2>/dev/null || true
  pm2 start ecosystem.config.cjs
  pm2 save
  echo "OK: Backend service restarted"
else
  echo ""
  echo "[5/7] Skip backend restart (no backend update)"
fi

# Step 6: Reload Nginx
echo ""
echo "[6/7] Reload Nginx..."
sudo systemctl reload nginx
echo "OK: Nginx reloaded"

# Step 7: Verify deployment
echo ""
echo "[7/7] Verify deployment..."
FRONT_URL="http://$(curl -s ifconfig.me)"

# Check index.html
echo ""
echo "--- Frontend Check ---"
HTTP_CODE=$(curl -sI "$FRONT_URL" | head -1)
echo "Status: $HTTP_CODE"
PRELOAD_PATH=$(curl -s "$FRONT_URL" | grep -o 'preload.*href="\([^"]*\)"' | head -1)
echo "Preload: $PRELOAD_PATH"

# Check API
echo ""
echo "--- API Check ---"
API_CODE=$(curl -sI "$FRONT_URL/api/aphorism?page=1&limit=1" | head -1)
echo "Status: $API_CODE"

# Check static resources
echo ""
echo "--- Static Resources Check ---"
IMG_CODE=$(curl -sI "$FRONT_URL/App/Sun.webp" | head -1)
echo "Sun.webp: $IMG_CODE"
CSS_FILE=$(curl -s "$FRONT_URL" | grep -o 'assets/css/index-[^"]*' | head -1)
if [ -n "$CSS_FILE" ]; then
    CSS_CODE=$(curl -sI "$FRONT_URL/assets/css/$CSS_FILE" | head -1)
    echo "Main CSS: $CSS_CODE"
fi

# Check JS content (verify new code is deployed)
echo ""
echo "--- Code Content Check ---"
JS_FILE=$(curl -s "$FRONT_URL" | grep -o 'assets/js/index-[^"]*' | head -1)
if [ -n "$JS_FILE" ]; then
    JS_URL="$FRONT_URL/assets/js/$JS_FILE"
    # 验证新代码（pickFirstChild 应该返回 children[0]）
    if curl -s "$JS_URL" | grep -q "children\[0\]"; then
        echo "Code verified: pickFirstChild returns children[0] (latest fix)"
    else
        echo "WARNING: Code may not be updated, please check!"
    fi
fi

# Cleanup
cd $UPLOAD_DIR
rm -rf dist nginx.conf ecosystem.config.cjs update.sh

# Done
echo ""
echo "=========================================="
echo "  Deployment Complete!"
echo "=========================================="
echo ""
echo "  Frontend: $FRONT_URL"
echo "  API:       $FRONT_URL/api/aphorism?page=1&limit=5"
echo ""
echo "  pm2 logs personal-website-api   # backend logs"
echo "  pm2 status                      # service status"
echo "  sudo tail -f /var/log/nginx/error.log  # nginx logs"
echo ""
echo "  Rollback: sudo rm -rf $WWW_ROOT && sudo mv $BACKUP_DIR $WWW_ROOT"
