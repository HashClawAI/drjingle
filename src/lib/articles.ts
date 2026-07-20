import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/lib/i18n';

export type ArticleEntry = CollectionEntry<'articles'>;

export async function getPublishedArticles(locale: Locale = 'en'): Promise<ArticleEntry[]> {
  const all = await getCollection('articles');
  let items = all.filter((a) => !a.data.draft && a.data.locale === locale);
  if (items.length === 0 && locale === 'en') {
    items = all.filter((a) => !a.data.draft && a.data.locale === 'zh');
  }
  return items.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getArticlesByCategory(
  category: ArticleEntry['data']['category'],
  locale: Locale = 'zh',
): Promise<ArticleEntry[]> {
  const items = await getPublishedArticles(locale);
  return items.filter((a) => a.data.category === category);
}

export function articleHref(slug: string, locale: Locale): string {
  const base = `/article/${slug}`;
  return locale === 'zh' ? `/zh${base}` : base;
}

export function categoryHref(slug: string, locale: Locale): string {
  const base = `/category/${slug}`;
  return locale === 'zh' ? `/zh${base}` : base;
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function excerpt(entry: ArticleEntry, max = 140): string {
  if (entry.data.description) return entry.data.description.slice(0, max);
  const body = entry.body.replace(/^#.+$/m, '').replace(/\*\*/g, '').trim();
  return body.slice(0, max);
}
