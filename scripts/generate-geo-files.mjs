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
  const files = [
    ...readdirSync(articlesDir).filter((f) => f.endsWith('.md')).map((file) => ({ file, locale: 'zh' })),
    ...readdirSync(resolve(articlesDir, 'en')).filter((f) => f.endsWith('.md')).map((file) => ({ file, locale: 'en' })),
  ];
  return files.map(({ file, locale }) => {
    const raw = readFileSync(resolve(articlesDir, locale === 'en' ? 'en' : '', file), 'utf8');
    const fm = parseFrontmatter(raw);
    const slug = fm.articleSlug || file.replace(/\.md$/, '');
    const body = raw.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();
    return { slug, title: fm.title || slug, description: fm.description || '', category: fm.category || 'insights', locale, body, pubDate: fm.pubDate || '' };
  }).sort((a, b) => b.pubDate.localeCompare(a.pubDate));
}

function buildLlmsTxt(articles) {
  const lines = [
    '# Dr.Jingle · drjingle.com',
    '',
    '> Michael Cheung（Dr.Jingle / 金狗博士）的双语知识站，聚焦 AI Agent、RWA、区块链协议、Canton Network 与 Bitcoin。',
    '',
    '## 作者实体',
    '- 姓名: Michael Cheung',
    '- 别名: Dr.Jingle, 金狗博士',
    '- 主题专长: AI agents, RWA tokenization, blockchain protocols, Canton Network, Bitcoin',
    '- X: https://x.com/drjingle',
    '- GitHub: https://github.com/HashClawAI',
    '',
    '## 站点',
    `- English home: ${SITE_URL}/`,
    `- 中文首页: ${SITE_URL}/zh/`,
    `- English RSS: ${SITE_URL}/rss.xml`,
    `- 中文 RSS: ${SITE_URL}/zh/rss.xml`,
    `- Full-text corpus: ${SITE_URL}/llms-full.txt`,
    `- Machine-readable article index: ${SITE_URL}/articles.json`,
    `- Sitemap: ${SITE_URL}/sitemap-index.xml`,
    '',
    '## 文章索引',
    '',
  ];
  for (const a of articles) {
    const prefix = a.locale === 'zh' ? '/zh' : '';
    const desc = (a.description || a.category).replace(/\s+/g, ' ').slice(0, 320);
    lines.push(`- [${a.locale.toUpperCase()} · ${a.title}](${SITE_URL}${prefix}/article/${encodeURIComponent(a.slug)}) — ${desc}`);
  }
  lines.push('');
  return lines.join('\n');
}

function buildLlmsFullTxt(articles) {
  const lines = [
    '# Dr.Jingle full-text knowledge corpus',
    '',
    '> Canonical source: https://drjingle.com · Author: Michael Cheung (Dr.Jingle / 金狗博士)',
    '> Content may be quoted with attribution and a canonical link. Verify time-sensitive claims against cited primary sources.',
    '',
  ];
  for (const a of articles) {
    const prefix = a.locale === 'zh' ? '/zh' : '';
    lines.push(`## ${a.title}`, '', `- URL: ${SITE_URL}${prefix}/article/${encodeURIComponent(a.slug)}`, `- Language: ${a.locale === 'zh' ? 'zh-Hans' : 'en'}`, `- Published: ${a.pubDate}`, '', a.body, '', '---', '');
  }
  return lines.join('\n');
}

function buildArticleIndex(articles) {
  return JSON.stringify({
    schemaVersion: 1,
    site: SITE_URL,
    author: { name: 'Michael Cheung', alternateNames: ['Dr.Jingle', '金狗博士'], url: SITE_URL },
    topics: ['AI agents', 'RWA tokenization', 'blockchain protocols', 'Canton Network', 'Bitcoin'],
    generatedAt: new Date().toISOString(),
    articles: articles.map((a) => ({
      title: a.title,
      description: a.description,
      category: a.category,
      language: a.locale === 'zh' ? 'zh-Hans' : 'en',
      published: a.pubDate,
      url: `${SITE_URL}${a.locale === 'zh' ? '/zh' : ''}/article/${encodeURIComponent(a.slug)}`,
    })),
  }, null, 2);
}

function buildRobots() {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    `Sitemap: ${SITE_URL}/sitemap-index.xml`,
    `Host: ${new URL(SITE_URL).host}`,
    '',
  ].join('\n');
}

const articles = loadArticles();
writeFileSync(resolve(publicDir, 'llms.txt'), buildLlmsTxt(articles));
writeFileSync(resolve(publicDir, 'llms-full.txt'), buildLlmsFullTxt(articles));
writeFileSync(resolve(publicDir, 'articles.json'), buildArticleIndex(articles));
writeFileSync(resolve(publicDir, 'robots.txt'), buildRobots());
console.log(`GEO files written (${articles.length} localized articles)`);
