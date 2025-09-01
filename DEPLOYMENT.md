# 部署指南

## Railway 部署

本项目已经配置为可以直接通过 GitHub 部署到 Railway。

### 前置要求

1. GitHub 账户
2. Railway 账户 (https://railway.app)
3. 将代码推送到 GitHub 仓库

### 部署步骤

1. **准备代码**
   ```bash
   git add .
   git commit -m "准备Railway部署"
   git push origin main
   ```

2. **连接 Railway**
   - 登录 Railway (https://railway.app)
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择您的项目仓库
   - Railway 会自动检测项目类型并开始部署

3. **配置环境变量**（如果需要）
   - 在 Railway 项目设置中添加环境变量
   - `NODE_ENV=production` （已在 railway.toml 中配置）

4. **自动部署**
   - 每次推送到 main 分支时，Railway 会自动重新部署
   - 部署完成后，您会获得一个公共 URL

### 本地测试生产版本

在部署前，您可以本地测试生产版本：

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 预览生产版本
npm run preview
```

### 项目配置说明

- **package.json**: 包含部署所需的脚本和依赖
- **railway.toml**: Railway 部署配置
- **vite.config.ts**: 优化了生产环境构建
- **tsconfig.json**: TypeScript 配置

### 故障排除

1. **构建失败**
   - 检查 TypeScript 错误：`npm run type-check`
   - 确保所有依赖都已安装

2. **部署后页面空白**
   - 检查浏览器控制台错误
   - 确认构建输出正确

3. **端口问题**
   - Railway 会自动设置 PORT 环境变量
   - 项目已配置为使用动态端口

### 性能优化

项目已经包含以下优化：

- 代码分包（Code Splitting）
- 生产环境关闭 Source Maps
- 静态资源优化
- TypeScript 类型检查

### 支持

如果遇到部署问题，请检查：
1. Railway 部署日志
2. 项目的 package.json 配置
3. TypeScript 编译错误
