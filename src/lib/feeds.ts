import type { Locale } from '@/lib/i18n';
import { articleHref, articleSlug, getPublishedArticles } from '@/lib/articles';

const SITE_URL = 'https://drjingle.com';

function xml(value: string): string {
  return value.replace(/[<>&'"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char]!);
}

export async function rssFeed(locale: Locale): Promise<Response> {
  const articles = await getPublishedArticles(locale);
  const title = locale === 'zh' ? 'Dr.Jingle 中文' : 'Dr.Jingle';
  const description = locale === 'zh' ? 'AI、RWA、区块链协议与商业研究' : 'AI agents, RWA, blockchain protocols, and business research';
  const items = articles.slice(0, 50).map((entry) => {
    const url = new URL(articleHref(articleSlug(entry), locale), SITE_URL).href;
    return `<item><title>${xml(entry.data.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${xml(entry.data.description ?? entry.data.title)}</description><pubDate>${entry.data.pubDate.toUTCString()}</pubDate><dc:creator>Michael Cheung (Dr.Jingle)</dc:creator></item>`;
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>${title}</title><link>${SITE_URL}${locale === 'zh' ? '/zh/' : '/'}</link><description>${description}</description><language>${locale === 'zh' ? 'zh-CN' : 'en'}</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items.join('')}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

export async function jsonFeed(locale: Locale): Promise<Response> {
  const articles = await getPublishedArticles(locale);
  const home = `${SITE_URL}${locale === 'zh' ? '/zh/' : '/'}`;
  const items = articles.slice(0, 50).map((entry) => {
    const url = new URL(articleHref(articleSlug(entry), locale), SITE_URL).href;
    return {
      id: url,
      url,
      title: entry.data.title,
      summary: entry.data.description ?? entry.data.title,
      date_published: entry.data.pubDate.toISOString(),
      date_modified: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
      authors: [{ name: 'Michael Cheung (Dr.Jingle)', url: SITE_URL }],
      tags: entry.data.tags ?? [entry.data.category],
      language: locale === 'zh' ? 'zh-Hans' : 'en',
    };
  });
  return new Response(JSON.stringify({
    version: 'https://jsonfeed.org/version/1.1',
    title: locale === 'zh' ? 'Dr.Jingle 中文' : 'Dr.Jingle',
    home_page_url: home,
    feed_url: `${SITE_URL}${locale === 'zh' ? '/zh/feed.json' : '/feed.json'}`,
    description: locale === 'zh' ? 'AI、RWA、区块链协议与商业研究' : 'AI agents, RWA, blockchain protocols, and business research',
    authors: [{ name: 'Michael Cheung (Dr.Jingle)', url: SITE_URL }],
    language: locale === 'zh' ? 'zh-Hans' : 'en',
    items,
  }), { headers: { 'Content-Type': 'application/feed+json; charset=utf-8' } });
}
