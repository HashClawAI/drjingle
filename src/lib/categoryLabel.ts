import type { Locale } from '@/lib/i18n';

const labels: Record<string, { zh: string; en: string }> = {
  insights: { zh: '洞察', en: 'Insights' },
  research: { zh: '研究', en: 'Research' },
  papers: { zh: '研究', en: 'Research' },
  events: { zh: '活动', en: 'Events' },
  ecosystem: { zh: '生态', en: 'Ecosystem' },
};

export function categoryLabel(slug: string, locale: Locale): string {
  const row = labels[slug];
  if (row) return locale === 'en' ? row.en : row.zh;
  return slug;
}

export function categorySignal(slug: string, locale: Locale): string {
  if (slug === 'research' || slug === 'papers') return locale === 'en' ? 'Research' : '研究';
  if (slug === 'insights') return locale === 'en' ? 'Insight' : '洞察';
  return categoryLabel(slug, locale);
}
