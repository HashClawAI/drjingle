import { getPublishedArticles, articleHref, articleSlug } from './articles';

export const site = 'https://drjingle.com';

/** Use the same validated collection and slugs as the public article routes. */
export async function discoveryArticles() {
  const all = [...await getPublishedArticles('zh'), ...await getPublishedArticles('en')];
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      category: entry.data.category,
      language: entry.data.locale === 'zh' ? 'zh-Hans' : 'en',
      published: entry.data.pubDate.toISOString(),
      modified: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
      url: new URL(articleHref(articleSlug(entry), entry.data.locale), site).href,
      body: entry.body,
    }));
}
