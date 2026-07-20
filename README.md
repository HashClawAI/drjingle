# drjingle.com · GitHub Pages

Dr.Jingle 个人品牌主站（Astro 静态站）。替代本地 GEOFlow + Cloudflare Tunnel，**关电脑仍可访问**。

- 线上：https://drjingle.com
- 仓库：[HashClawAI/drjingle](https://github.com/HashClawAI/drjingle)（独立 repo）

## 本地开发

```bash
cd drjingledotcom
npm ci
npm run dev
```

## 从 GEOFlow 一次性导入历史文章

GEOFlow 仍在运行时：

```bash
# 使用 monorepo 内 wechat-mp-auto-publish/.env 中的 GEOFLOW_BASE_URL / GEOFLOW_API_TOKEN
npm run export:geoflow
# 预览不写文件
DRY_RUN=1 npm run export:geoflow
```

产出：`src/content/articles/<slug>.md`。图片若仍指向 `https://drjingle.com/storage/...`，需后续批量下载到 `public/images/` 并改链接（可另开任务）。

## 发布新文章（GEOFlow 退役后）

1. 微信 / Cursor 成稿 → `yao-geo` 结构化 Markdown  
2. 保存为 `src/content/articles/<slug>.md`（frontmatter 见现有示例）  
3. `git push` → GitHub Actions 自动部署 Pages  

URL 与旧站一致：`/article/<slug>`、`/category/insights` 等。

## GitHub 仓库与 Pages 设置

1. 远程仓库 **[HashClawAI/drjingle](https://github.com/HashClawAI/drjingle)**（本目录为独立 git root）  
2. **Settings → Pages → Build and deployment**：Source = **GitHub Actions**  
3. **Settings → Pages → Custom domain**：`drjingle.com`（仓库内已有 `public/CNAME`）  
4. 等待 DNS 检查通过（HTTPS）

## DNS（Cloudflare 示例）

停用指向本机的 **Named Tunnel** 后，为 apex 配置 GitHub Pages：

| 类型 | 名称 | 值 |
|------|------|-----|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<user>.github.io`（若使用 www） |

（IP 以 [GitHub 文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) 为准。）

## 与 canton-edu 的关系

同一套模式：Astro + `@astrojs/sitemap` + Actions deploy-pages + `PUBLIC_SITE_URL` + `CNAME`。  
Canton 站：`ccprivacy.club`；本站：`drjingle.com`。

## 可关闭的本地服务

Pages 稳定后：Colima、GEOFlow `docker compose`、`cloudflared tunnel run drjingle-geoflow`。
