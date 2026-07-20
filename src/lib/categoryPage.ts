import type { Locale } from '@/lib/i18n';
import { getArticlesByCategory, type ArticleEntry } from '@/lib/articles';
import { paginate, type Paginated, CATEGORY_PAGE_SIZE } from '@/lib/pagination';

export type CategorySlug = 'insights' | 'research' | 'events' | 'ecosystem';

export function categoryPageHref(slug: CategorySlug, page: number, locale: Locale): string {
  const base =
    page <= 1 ? `/category/${slug}` : `/category/${slug}/page/${page}`;
  return locale === 'zh' ? `/zh${base}` : base;
}

export async function loadCategoryArticles(
  slug: CategorySlug,
  locale: Locale,
  page: number,
): Promise<{ all: ArticleEntry[]; pageData: Paginated<ArticleEntry> }> {
  const all = slug === 'ecosystem' ? [] : await getArticlesByCategory(slug, locale);
  const pageData = paginate(all, page, CATEGORY_PAGE_SIZE);
  return { all, pageData };
}

export async function categoryStaticPagePaths(
  locale: Locale,
): Promise<Array<{ params: { slug: string; page: string } }>> {
  const slugs: CategorySlug[] = ['insights', 'research', 'events'];
  const paths: Array<{ params: { slug: string; page: string } }> = [];

  for (const slug of slugs) {
    const { all } = await loadCategoryArticles(slug, locale, 1);
    const totalPages = Math.ceil(all.length / CATEGORY_PAGE_SIZE);
    for (let p = 2; p <= totalPages; p++) {
      paths.push({ params: { slug, page: String(p) } });
    }
  }

  return paths;
}
