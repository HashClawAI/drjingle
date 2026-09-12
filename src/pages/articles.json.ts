import { discoveryArticles, site } from '../lib/discovery';
export async function GET() {
  const articles = (await discoveryArticles()).map(({ body, ...metadata }) => metadata);
  return new Response(JSON.stringify({
    schemaVersion: 2, site,
    author: { name: 'Michael Cheung', alternateNames: ['Dr.Jingle', '金狗博士'], url: `${site}/about/` },
    topics: ['AI agents', 'RWA tokenization', 'blockchain protocols', 'Canton Network', 'Bitcoin'],
    articles,
  }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
