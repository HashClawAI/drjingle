/**
 * Build-time llms.txt + robots.txt for drjingle.com
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');
const articlesDir = resolve(root, 'src/content/articles');

const SITE_URL = (process.env.PUBLIC_SITE_URL || 'https://drjingle.com').replace(/\/$/, '');

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    fm[key] = val;
  }
  return fm;
}

function loadArticles() {
  const files = readdirSync(articlesDir).filter((f) => f.endsWith('.md'));
  return files.map((file) => {
    const raw = readFileSync(resolve(articlesDir, file), 'utf8');
    const fm = parseFrontmatter(raw);
    const slug = file.replace(/\.md$/, '');
    return { slug, title: fm.title || slug, description: fm.description || '', category: fm.category || 'insights' };
  });
}

function buildLlmsTxt(articles) {
  const lines = [
    '# Dr.Jingle · drjingle.com',
    '',
    '> AI / RWA / Web3 知识流 · 金狗博士 · GitHub Pages 静态站',
    '',
    '## 站点',
    `- 首页: ${SITE_URL}/`,
    `- 洞察: ${SITE_URL}/category/insights`,
    `- 研究: ${SITE_URL}/category/research`,
    `- Sitemap: ${SITE_URL}/sitemap-index.xml`,
    '',
    '## 文章',
    '',
  ];
  for (const a of articles) {
    lines.push(`- [${a.title}](${SITE_URL}/article/${encodeURIComponent(a.slug)}) — ${a.description || a.category}`);
  }
  lines.push('');
  return lines.join('\n');
}

function buildRobots() {
  return [`User-agent: *`, `Allow: /`, `Sitemap: ${SITE_URL}/sitemap-index.xml`, ''].join('\n');
}

const articles = loadArticles();
writeFileSync(resolve(publicDir, 'llms.txt'), buildLlmsTxt(articles));
writeFileSync(resolve(publicDir, 'robots.txt'), buildRobots());
console.log(`GEO files written (${articles.length} articles)`);
