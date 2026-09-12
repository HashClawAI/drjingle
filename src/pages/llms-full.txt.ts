import { discoveryArticles } from '../lib/discovery';
export async function GET() {
  const articles = await discoveryArticles();
  const lines = ['# Dr.Jingle full-text knowledge corpus', '',
    '> Author: Michael Cheung (Dr.Jingle / 金狗博士). Preserve source attribution and caveats. Verify time-sensitive claims against cited primary evidence.', '',
    ...articles.flatMap((a) => [`## ${a.title}`, '', `- URL: ${a.url}`, `- Language: ${a.language}`, `- Published: ${a.published}`, `- Modified: ${a.modified}`, '', a.body, '', '---', '']),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
