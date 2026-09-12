import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve('dist');
const read = (path) => readFileSync(join(root, path), 'utf8');
const localFile = (url) => {
  const pathname = decodeURIComponent(new URL(url, 'https://drjingle.com').pathname);
  return join(root, pathname, pathname.endsWith('/') ? 'index.html' : '');
};
const index = JSON.parse(read('articles.json'));
const sitemap = read('sitemap-0.xml');
const llms = read('llms.txt');
const full = read('llms-full.txt');
assert.equal(new Set(index.articles.map((a) => a.url)).size, index.articles.length);
for (const article of index.articles) {
  assert.ok(existsSync(localFile(article.url)), `Missing article: ${article.url}`);
  const html = readFileSync(localFile(article.url), 'utf8');
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(decodeURI(canonical), decodeURI(article.url));
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `H1 count: ${article.url}`);
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const posting = graph.find((node) => node['@type'] === 'BlogPosting');
  assert.equal(posting.dateModified, article.modified);
  const sitemapEntry = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find((m) => decodeURI(m[1]).includes(`<loc>${decodeURI(article.url)}</loc>`));
  assert.ok(sitemapEntry, `Not in sitemap: ${article.url}`);
  assert.ok(sitemapEntry[1].includes(`<lastmod>${article.modified}</lastmod>`));
  assert.ok(llms.includes(article.url));
  assert.ok(full.includes(article.url));
  for (const alternate of html.matchAll(/rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)) {
    assert.ok(existsSync(localFile(alternate[1])), `Broken alternate: ${alternate[1]}`);
    const other = readFileSync(localFile(alternate[1]), 'utf8');
    const backLinks = [...other.matchAll(/rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)].map((m) => decodeURI(m[1]));
    assert.ok(backLinks.includes(decodeURI(canonical)), `Missing reciprocal alternate: ${canonical}`);
  }
  const image = new URL(posting.image);
  if (image.hostname === 'drjingle.com') assert.ok(existsSync(localFile(image.href)), `Missing image ${image.href}`);
}
for (const prefix of ['', 'zh/']) {
  const feed = JSON.parse(read(`${prefix}feed.json`));
  assert.ok(feed.items.every((item) => item.content_text || item.content_html));
  assert.ok(existsSync(join(root, prefix, 'about/index.html')));
  for (const series of ['ai-agent-pitfalls', 'stablecoin-2026']) {
    const html = read(`${prefix}series/${series}/index.html`);
    assert.ok(html.includes(`href="/${prefix}article/`), `Empty series ${prefix}${series}`);
  }
  const html = read(`${prefix}article/liang-wenfeng-52-views/index.html`);
  assert.ok(!html.includes('Primary source: elsewhere'));
  assert.ok(html.includes('2026-09-12'));
  assert.ok(html.includes('liang-wenfeng-meeting-essentials/cover.png'));
}
console.log(`SEO checks passed: ${index.articles.length} articles, canonical URLs, reciprocal hreflang, images, dates, discovery indexes, feeds, author pages and series.`);
