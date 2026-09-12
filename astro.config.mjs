import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import articleHeadings from './scripts/remark-article-headings.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = process.env.BASE_PATH || '/';
const site = process.env.PUBLIC_SITE_URL || 'https://drjingle.com';

function legacyEnRedirects() {
  const articlesDir = path.join(__dirname, 'src/content/articles');
  const redirects = {
    '/article/one-token-llm-behavioral-fingerprinting':
      '/article/问ai一个简单问题-一篇论文发现了大模型的行为指纹',
    '/category/sites': '/category/ecosystem',
    '/category/papers': '/category/research',
    '/zh/category/papers': '/zh/category/research',
    '/zh/category/sites': '/zh/category/ecosystem',
    '/en': '/',
  };

  for (const file of readdirSync(articlesDir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    redirects[`/en/article/${slug}`] = `/article/${slug}`;
  }

  for (const cat of ['insights', 'research', 'events', 'ecosystem', 'papers', 'sites']) {
    const target =
      cat === 'papers' ? '/category/research' : cat === 'sites' ? '/category/ecosystem' : `/category/${cat}`;
    redirects[`/en/category/${cat}`] = target;
  }

  for (const series of ['ai-agent-pitfalls', 'stablecoin-2026']) {
    redirects[`/en/series/${series}`] = `/series/${series}`;
  }

  return redirects;
}

export default defineConfig({
  site,
  base,
  markdown: { remarkPlugins: [articleHeadings] },
  integrations: [sitemap({
    serialize(item) {
      // Use the rendered article's editorial date, never the deployment date.
      const pathname = decodeURIComponent(new URL(item.url).pathname);
      if (pathname.includes('/article/')) {
        const html = readFileSync(path.join(__dirname, 'dist', pathname, 'index.html'), 'utf8');
        const modified = html.match(/"dateModified":"([^"]+)"/);
        if (modified) item.lastmod = new Date(modified[1]);
      }
      return item;
    },
  })],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: legacyEnRedirects(),
});
