#!/bin/bash
set -e

WWW_ROOT="/var/www/personal-website"
UPLOAD_DIR="/home/ubuntu"

echo "=========================================="
echo "  Personal Website Full Deploy Update"
echo "=========================================="

# Step 1: Backup
echo ""
echo "[1/8] Backup current version..."
BACKUP_DIR="$WWW_ROOT-backup-$(date +%Y%m%d-%H%M%S)"
sudo cp -r $WWW_ROOT $BACKUP_DIR
echo "OK: Backup saved to $BACKUP_DIR"

# Step 2: Update frontend dist
echo ""
echo "[2/8] Update frontend dist..."
cd $UPLOAD_DIR
rm -rf dist nginx.conf ecosystem.config.cjs
tar -xzf deploy-update.tar.gz
sudo rm -rf $WWW_ROOT/dist
sudo mv dist $WWW_ROOT/dist
sudo chown -R ubuntu:ubuntu $WWW_ROOT/dist
echo "OK: Frontend dist updated"

# Step 3: Update backend dist
echo ""
echo "[3/8] Update backend dist..."
cd $UPLOAD_DIR
mkdir -p /tmp/server-update
tar -xzf server-dist-update.tar.gz -C /tmp/server-update
sudo rm -rf $WWW_ROOT/server/dist
sudo cp -r /tmp/server-update/dist $WWW_ROOT/server/dist
sudo chown -R ubuntu:ubuntu $WWW_ROOT/server/dist
rm -rf /tmp/server-update
echo "OK: Backend dist updated"

# Step 4: Update backend package.json and install dependencies
echo ""
echo "[4/8] Update backend dependencies..."
cd $UPLOAD_DIR
tar -xzf server-extra-update.tar.gz -C /tmp/
sudo cp /tmp/server-extra/package.json $WWW_ROOT/server/package.json
sudo cp /tmp/server-extra/package-lock.json $WWW_ROOT/server/package-lock.json 2>/dev/null || true
cd $WWW_ROOT/server
sudo npm install --production
echo "OK: Backend dependencies installed"

# Step 5: Update database schema files and run indexes
echo ""
echo "[5/8] Update database schema..."
sudo cp /tmp/server-extra/09-performance-indexes.sql $WWW_ROOT/server/database/schema/ 2>/dev/null || true
echo "OK: Schema files updated"

# Step 6: Update Nginx config
echo ""
echo "[6/8] Update Nginx config..."
sudo cp $UPLOAD_DIR/nginx.conf /etc/nginx/sites-available/personal-website
sudo ln -sf /etc/nginx/sites-available/personal-website /etc/nginx/sites-enabled/personal-website
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && echo "OK: Nginx config validated" || { echo "ERROR: Nginx config failed"; exit 1; }

# Step 7: Restart backend
echo ""
echo "[7/8] Restart backend service..."
sudo mkdir -p $WWW_ROOT/logs
sudo cp $UPLOAD_DIR/ecosystem.config.cjs $WWW_ROOT/ecosystem.config.cjs
cd $WWW_ROOT
pm2 delete personal-website-api 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
echo "OK: Backend service restarted"

# Step 8: Reload Nginx
echo ""
echo "[8/8] Reload Nginx..."
sudo systemctl reload nginx
echo "OK: Nginx reloaded"

# Cleanup
cd $UPLOAD_DIR
rm -rf dist nginx.conf ecosystem.config.cjs
rm -rf /tmp/server-extra

# Done
echo ""
echo "=========================================="
echo "  Deployment Complete!"
echo "=========================================="
echo ""
echo "  Next: Run the database index SQL:"
echo "    mysql -u root -p personal_website < $WWW_ROOT/server/database/schema/09-performance-indexes.sql"
echo ""
echo "  pm2 logs personal-website-api   # backend logs"
echo "  pm2 status                      # service status"
echo ""
echo "  Rollback: sudo rm -rf $WWW_ROOT && sudo mv $BACKUP_DIR $WWW_ROOT"