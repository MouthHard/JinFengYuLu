# 项目 .gitignore 配置指南

> 最后更新: 2026-08-26

---

## 一、不必要上传到 GitHub 的文件/目录

### 1. 依赖目录
```
node_modules/          # npm 依赖包（可通过 npm install 重新生成）
dist/                  # 构建产物（可通过 npm run build 重新生成）
```

### 2. 环境配置文件
```
.env                   # 环境变量（包含敏感信息）
.env.local             # 本地环境变量
.env.*.local           # 本地环境变量变体
```

### 3. 日志文件
```
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
*.log
```

### 4. 临时文件
```
temp/                  # 临时文件目录
tmp-*/                 # 临时目录
*.tmp                  # 临时文件
*.bak                  # 备份文件
*.sql.bak              # 数据库备份
*.dump                 # 数据库导出
*.sql.gz               # 压缩数据库备份
```

### 5. 编辑器/IDE 配置
```
.vscode/               # VS Code 配置（个人偏好）
.idea/                 # WebStorm/IDEA 配置
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### 6. 操作系统文件
```
.DS_Store              # macOS 系统文件
Thumbs.db              # Windows 缩略图
```

### 7. 敏感信息
```
*.pem                  # SSH 私钥
*.key                  # 密钥文件
id_rsa*
id_ed25519*
*.ppk                  # PuTTY 密钥
```

### 8. 部署包
```
*.tar.gz
deploy-*.tar.gz
server-dist-*.tar.gz
```

### 9. 数据库相关
```
backup*/
db-backup*/
```

---

## 二、必须要上传到 GitHub 的文件/目录

### 1. 源代码
```
src/                   # 前端源代码
  ├── assets/          # 静态资源
  ├── components/      # 组件
  ├── composables/     # 组合式函数
  ├── pages/           # 页面
  ├── router/          # 路由配置
  ├── services/        # API 服务
  ├── stores/          # 状态管理
  ├── types/           # 类型定义
  └── utils/           # 工具函数

server/                # 后端源代码
  ├── src/             # 后端源码
  │   ├── modules/     # 业务模块
  │   ├── entities/    # 数据库实体
  │   └── ...
  ├── package.json
  └── tsconfig.json
```

### 2. 配置文件
```
package.json           # 项目配置
package-lock.json      # 依赖锁定（确保一致性）
vite.config.ts         # Vite 配置
tsconfig.json          # TypeScript 配置
tsconfig.node.json     # Node.js TypeScript 配置
.eslintrc.cjs          # ESLint 配置
.prettierrc            # Prettier 配置
.editorconfig          # Editor 配置
index.html             # HTML 入口
```

### 3. 文档
```
README.md              # 项目说明
deploy/docs/           # 部署文档
  └── 服务运行指南.md    # 服务运行指南
```

### 4. 环境配置模板
```
.env.example           # 环境变量模板（必须上传）
```

---

## 三、项目结构逐层检查

### 根目录
| 文件/目录 | 是否上传 | 说明 |
|-----------|----------|------|
| `src/` | ✅ 必须 | 前端源代码 |
| `server/` | ✅ 必须 | 后端源代码 |
| `deploy/` | ✅ 必须 | 部署脚本和文档 |
| `node_modules/` | ❌ 不上传 | 依赖包 |
| `dist/` | ❌ 不上传 | 构建产物 |
| `temp/` | ❌ 不上传 | 临时文件 |
| `.env` | ❌ 不上传 | 环境变量（敏感信息） |
| `.env.example` | ✅ 必须 | 环境变量模板 |
| `package.json` | ✅ 必须 | 项目配置 |
| `package-lock.json` | ✅ 必须 | 依赖锁定 |
| `vite.config.ts` | ✅ 必须 | Vite 配置 |
| `tsconfig.json` | ✅ 必须 | TypeScript 配置 |
| `README.md` | ✅ 必须 | 项目说明 |

### src 目录
| 文件/目录 | 是否上传 | 说明 |
|-----------|----------|------|
| `assets/` | ✅ 必须 | 静态资源 |
| `components/` | ✅ 必须 | 组件 |
| `composables/` | ✅ 必须 | 组合式函数 |
| `pages/` | ✅ 必须 | 页面 |
| `router/` | ✅ 必须 | 路由配置 |
| `services/` | ✅ 必须 | API 服务 |
| `stores/` | ✅ 必须 | 状态管理 |
| `types/` | ✅ 必须 | 类型定义 |
| `utils/` | ✅ 必须 | 工具函数 |

### server 目录
| 文件/目录 | 是否上传 | 说明 |
|-----------|----------|------|
| `src/` | ✅ 必须 | 后端源代码 |
| `dist/` | ❌ 不上传 | 构建产物 |
| `node_modules/` | ❌ 不上传 | 依赖包 |
| `package.json` | ✅ 必须 | 后端配置 |
| `tsconfig.json` | ✅ 必须 | TypeScript 配置 |

### deploy 目录
| 文件/目录 | 是否上传 | 说明 |
|-----------|----------|------|
| `docs/` | ✅ 必须 | 文档 |
| `init-db.sh` | ✅ 必须 | 数据库初始化脚本 |
| `setup.sh` | ✅ 必须 | 部署脚本 |

---

## 四、.gitignore 文件位置

项目包含两个 .gitignore 文件：

1. **根目录 .gitignore** - 前端项目配置
2. **server/.gitignore** - 后端项目配置

### 根目录 .gitignore 内容
```
.DS_Store
node_modules
config.js
.env
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
dist
*.tar.gz
deploy-*.tar.gz
server-dist-*.tar.gz
temp/
tmp-*/
.env.production
.env.gh-pages
*.pem
*.key
id_rsa*
id_ed25519*
*.ppk
*.sql.bak
*.dump
*.sql.gz
backup*/
db-backup*/
logs
*.log
```

### server/.gitignore 内容
```
node_modules
dist
logs
*.log
.DS_Store
.idea
.vscode
.env
.env.*
!.env.example
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## 五、注意事项

1. **敏感信息**：绝不要上传 `.env` 文件、密钥、密码等敏感信息
2. **依赖锁定**：`package-lock.json` 应该上传，确保团队依赖一致
3. **环境模板**：`.env.example` 应该上传，包含所有必需的环境变量名
4. **构建产物**：`dist/` 目录不上传，可通过 `npm run build` 重新生成
5. **日志文件**：所有日志文件不上传
6. **临时文件**：所有临时文件不上传

---

## 六、GitHub 仓库推荐结构

```
PersonalWebsite - 服务器/
├── .gitignore              # 根目录忽略配置
├── .env.example            # 环境变量模板
├── package.json            # 前端项目配置
├── package-lock.json       # 依赖锁定
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.node.json      # Node.js TypeScript 配置
├── eslint.config.cjs       # ESLint 配置
├── .prettierrc             # Prettier 配置
├── .editorconfig           # Editor 配置
├── index.html              # HTML 入口
├── README.md               # 项目说明
├── src/                    # 前端源代码
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── stores/
│   ├── types/
│   └── utils/
├── server/                 # 后端源代码
│   ├── .gitignore          # 后端忽略配置
│   ├── package.json        # 后端配置
│   ├── tsconfig.json       # 后端 TypeScript 配置
│   └── src/
│       ├── modules/
│       └── entities/
└── deploy/                 # 部署脚本
    ├── docs/
    │   └── 服务运行指南.md
    ├── init-db.sh
    └── setup.sh
```

---

**遵循此指南可确保：**
- ✅ 敏感信息不泄露
- ✅ 仓库体积合理
- ✅ 团队协作顺畅
- ✅ 构建过程可复现