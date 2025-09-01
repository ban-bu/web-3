# 部署检查清单

## 部署前检查

- [x] 项目依赖安装成功
- [x] TypeScript 配置正确
- [x] 项目构建成功
- [x] 没有 lint 错误
- [x] Railway 配置文件存在
- [x] .gitignore 文件配置
- [x] package.json 包含所有必要脚本

## 部署到 Railway

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "配置 Railway 部署"
   git push origin main
   ```

2. **在 Railway 创建项目**
   - 访问 https://railway.app
   - 连接 GitHub 仓库
   - Railway 会自动检测配置并部署

3. **验证部署**
   - 检查部署日志
   - 访问提供的 URL
   - 确认所有功能正常

## 本地测试命令

```bash
# 开发模式
npm run dev

# 构建项目
npm run build

# 预览生产版本
npm run preview

# TypeScript 类型检查
npm run type-check
```

## 文件说明

- `railway.toml` - Railway 部署配置
- `package.json` - 项目依赖和脚本
- `vite.config.ts` - Vite 构建配置
- `tsconfig.json` - TypeScript 配置
- `.gitignore` - Git 忽略文件
- `DEPLOYMENT.md` - 详细部署指南
