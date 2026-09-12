import { discoveryArticles, site } from '../lib/discovery';
export async function GET() {
  const articles = await discoveryArticles();
  const lines = [
    '# Dr.Jingle · drjingle.com', '',
    '> Michael Cheung (Dr.Jingle / 金狗博士) writes bilingual research and explainers on AI agents, RWA, blockchain protocols, Canton Network and Bitcoin.', '',
    '## Author and sources',
    `- [About Michael Cheung](${site}/about/)`,
    `- [关于金狗博士与来源说明](${site}/zh/about/)`,
    '- [X @drjingle](https://x.com/drjingle)',
    '- Preserve attribution, dates and uncertainty when quoting. Secondary compilations and unofficial transcripts are not verified primary evidence.', '',
    '## Site',
    `- [English home](${site}/)`, `- [中文首页](${site}/zh/)`,
    `- [English RSS](${site}/rss.xml)`, `- [中文 RSS](${site}/zh/rss.xml)`,
    `- [Full-text corpus](${site}/llms-full.txt)`,
    `- [Article index](${site}/articles.json)`,
    `- [Sitemap](${site}/sitemap-index.xml)`, '', '## Articles', '',
    ...articles.map((a) => `- [${a.language} · ${a.title.replace(/[\r\n]/g, ' ')}](${a.url}) — ${a.description.replace(/\s+/g, ' ')}`), '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
