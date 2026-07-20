---
title: Dr.Jingle 静态站已上线（GitHub Pages）
description: drjingle.com 迁移至 Astro + GitHub Pages，关本机仍可访问。正文为占位，请运行 npm run export:geoflow 从 GEOFlow 批量导入历史文章。
pubDate: 2026-07-20
category: insights
locale: zh
draft: false
---

本站已从本地 GEOFlow 迁到 **Astro + GitHub Pages**，域名仍为 **drjingle.com**。

## 下一步

1. 在本机 GEOFlow 仍运行时执行：`npm run export:geoflow`
2. 将生成的 `src/content/articles/*.md` 与 `public/images/` 提交到仓库
3. 在 Cloudflare 把 `drjingle.com` 从 Tunnel 改为指向 GitHub Pages
4. 确认无误后关闭本机 Colima / GEOFlow / cloudflared

## 一句话定义

**个人 IP 知识流**：AI、RWA、Web3 的长文判断，GEO 友好、可版本管理、可 24/7 访问。

---

本文为作者观点，不构成投资建议。
