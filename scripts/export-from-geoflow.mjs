/**
 * Export published GEOFlow articles → src/content/articles/*.md
 *
 * Prerequisites: GEOFlow running + wechat-mp-auto-publish/.env with API token
 *
 *   cd drjingledotcom
 *   npm run export:geoflow
 *
 * Optional: GEOFLOW_ENV=/path/to/.env  DRY_RUN=1
 */

import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const contentDir = resolve(root, 'src/content/articles');
const envPath =
  process.env.GEOFLOW_ENV ||
  resolve(root, '../wechat-mp-auto-publish/.env');

function loadEnv() {
  if (!existsSync(envPath)) {
    throw new Error(`Missing env file: ${envPath}`);
  }
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

function apiConfig() {
  loadEnv();
  const base = process.env.GEOFLOW_BASE_URL?.replace(/\/$/, '');
  const token = process.env.GEOFLOW_API_TOKEN?.trim();
  if (!base || !token) throw new Error('Set GEOFLOW_BASE_URL and GEOFLOW_API_TOKEN');
  return { base, headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } };
}

function stripInternalGeoSections(markdown) {
  const marker = '## GEO 优化度评分';
  if (!markdown.includes(marker)) return markdown.trim();
  const publicPart = markdown.split(marker)[0].trimEnd();
  const disclaimer =
    markdown.match(/本文为框架性观察与评论[\s\S]*$/)?.[0] ??
    markdown.match(/本文为公开论文[\s\S]*$/)?.[0] ??
    '本文为作者观点，不构成投资建议。';
  return `${publicPart}\n\n---\n\n${disclaimer.trim()}\n`;
}

function mapCategory(slug) {
  if (slug === 'research' || slug === 'papers') return 'research';
  if (slug === 'events') return 'events';
  return 'insights';
}

function yamlEscape(s) {
  return String(s).replace(/"/g, '\\"');
}

async function fetchAllArticles() {
  const { base, headers } = apiConfig();
  const items = [];
  let page = 1;
  let totalPages = 1;
  while (page <= totalPages) {
    const res = await fetch(`${base}/api/v1/articles?per_page=100&page=${page}&status=published`, { headers });
    const body = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(body));
    const data = body?.data ?? {};
    items.push(...(data.items ?? []));
    totalPages = data.pagination?.total_pages ?? 1;
    page += 1;
  }
  return items;
}

async function fetchArticle(id) {
  const { base, headers } = apiConfig();
  const res = await fetch(`${base}/api/v1/articles/${id}`, { headers });
  const body = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(body));
  return body?.data ?? body;
}

async function main() {
  const dryRun = process.env.DRY_RUN === '1';
  const list = await fetchAllArticles();
  mkdirSync(contentDir, { recursive: true });

  let written = 0;
  for (const row of list) {
    const full = await fetchArticle(row.id);
    const slug = full.slug || row.slug;
    if (!slug) continue;
    const categorySlug = full.category?.slug ?? row.category?.slug ?? 'insights';
    const category = mapCategory(categorySlug);
    const title = full.title?.trim() || row.title;
    const pubRaw = full.published_at || full.created_at || row.published_at;
    const pubDate = pubRaw ? String(pubRaw).slice(0, 10) : new Date().toISOString().slice(0, 10);
    const description = (full.meta_description || full.excerpt || '').slice(0, 160);
    let content = stripInternalGeoSections(String(full.content || '').trim());
    if (!content.startsWith('#')) {
      content = `# ${title}\n\n${content}`;
    }

    const frontmatter = [
      '---',
      `title: "${yamlEscape(title)}"`,
      description ? `description: "${yamlEscape(description)}"` : null,
      `pubDate: ${pubDate}`,
      `category: ${category}`,
      'locale: zh',
      'draft: false',
      '---',
      '',
    ]
      .filter(Boolean)
      .join('\n');

    const outPath = resolve(contentDir, `${slug}.md`);
    const file = `${frontmatter}${content}\n`;
    if (dryRun) {
      console.log('would write', outPath);
    } else {
      writeFileSync(outPath, file, 'utf8');
      written += 1;
    }
  }

  console.log(`Export done: ${written} articles → ${contentDir}`);
  if (!dryRun) {
    console.log('Review diffs, then commit and push to trigger Pages deploy.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
