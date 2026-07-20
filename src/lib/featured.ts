import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@/lib/i18n';
import { getPublishedArticles, articleSlug } from '@/lib/articles';

export const FEATURED_SLUGS = [
  'ai-agent玩家的自嗨陷阱-95-的项目没赚到钱',
  '人类历史上第一个万亿美元富翁',
  '大压缩时代-人的核心竞争力在哪',
  'web2-5春秋-usdc下场做arc-rwa公链群雄逐鹿',
  '我是怎么既当董事长又当总经理的',
] as const;

export async function getFeaturedArticles(locale: Locale = 'en') {
  const all = await getPublishedArticles(locale);
  const bySlug = new Map(all.map((a) => [articleSlug(a), a]));
  return FEATURED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (a): a is CollectionEntry<'articles'> => Boolean(a),
  );
}
