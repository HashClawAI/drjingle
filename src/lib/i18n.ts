export type Locale = 'zh' | 'en';

export type NavKey = 'home' | 'events' | 'insights' | 'research' | 'ecosystem';

const zh = {
  siteName: 'Dr.Jingle',
  siteTagline: '超级个体进化中',
  siteDesc: '区块链协议与 AI 智能体研究 · GEO 知识流',
  siteKeywords: 'Dr.Jingle, 金狗博士, AI, RWA, Web3, Canton',
  nav: {
    home: 'Home',
    events: '活动',
    insights: '洞察',
    research: '研究',
    ecosystem: '生态',
  },
  home: {
    kicker: 'GEO Flow · AI / RWA / Web3 知识流',
    picksTitle: '推荐阅读',
    insightsTitle: '最新洞察',
    researchTitle: '研究精选',
    seriesTitle: '系列专题',
    moreInsights: '查看全部洞察 →',
    moreResearch: '查看全部研究 →',
  },
  category: {
    insightsDesc: '区块链、AI 与商业观察的长文知识流。',
    researchDesc: '学术论文与深度研究的长期容器。',
    eventsDesc: '线下分享、线上 AMA 与社区活动记录。',
    ecosystemDesc: 'Dr.Jingle 生态下的站点与项目入口。',
    empty: '暂无内容',
  },
  article: {
    overline: 'Dr.Jingle Intelligence Note',
    related: '更多阅读',
  },
  author: {
    name: 'Dr.Jingle™ · 金狗博士',
    tagline: '超级个体进化中',
    bio: 'Canton Network Validator，FA · RWA 研究与内容，聚焦 RWA、AI Agent、BTC 与 blockchain 商业策略。',
  },
  footer: {
    brand: 'Dr.Jingle™ · 金狗博士',
    desc: '区块链协议与 AI 智能体研究 · Meta Strategy 创始人',
    copy: '© Dr.Jingle · drjingle.com · X @drjingle',
  },
  localeSwitch: { toEn: 'English', toZh: '中文', aria: '切换语言' },
  card: { read: '阅读全文' },
  ecosystem: {
    drjingle: { tag: '个人 IP', desc: '观点长文与 GEO 知识流主站。' },
    hashclaw: { tag: '组织品牌', desc: 'HashClaw AI — 智能体与区块链 builder 生态。' },
    canton: { tag: '教育垂直', desc: 'Canton Network 双语教育站。' },
    visit: '访问站点',
  },
} as const;

const en: typeof zh = {
  siteName: 'Dr.Jingle',
  siteTagline: 'Evolving as a super individual',
  siteDesc: 'Blockchain protocols & AI agents · GEO knowledge stream',
  siteKeywords: 'Dr.Jingle, AI, RWA, Web3, Canton',
  nav: {
    home: 'Home',
    events: 'Events',
    insights: 'Insights',
    research: 'Research',
    ecosystem: 'Ecosystem',
  },
  home: {
    kicker: 'GEO Flow · AI / RWA / Web3',
    picksTitle: 'Recommended',
    insightsTitle: 'Latest insights',
    researchTitle: 'Research picks',
    seriesTitle: 'Series',
    moreInsights: 'All insights →',
    moreResearch: 'All research →',
  },
  category: {
    insightsDesc: 'Long-form takes on blockchain, AI, and business.',
    researchDesc: 'Papers and deep research over longer horizons.',
    eventsDesc: 'Talks, AMAs, workshops, and community notes.',
    ecosystemDesc: 'Sites and projects in the Dr.Jingle ecosystem.',
    empty: 'Nothing here yet',
  },
  article: {
    overline: 'Dr.Jingle Intelligence Note',
    related: 'Continue reading',
  },
  author: {
    name: 'Dr.Jingle™ · Michael Cheung',
    tagline: 'Evolving as a super individual',
    bio: 'Canton Network Validator · RWA & AI agent research · actionable takes on complex systems.',
  },
  footer: {
    brand: 'Dr.Jingle™',
    desc: 'Blockchain protocols & AI agents · Meta Strategy',
    copy: '© Dr.Jingle · drjingle.com · X @drjingle',
  },
  localeSwitch: { toEn: 'English', toZh: '中文', aria: 'Switch language' },
  card: { read: 'Read' },
  ecosystem: {
    drjingle: { tag: 'Personal IP', desc: 'Long-form views and GEO-friendly knowledge stream.' },
    hashclaw: { tag: 'Org brand', desc: 'HashClaw AI — agents & blockchain builders.' },
    canton: { tag: 'Education', desc: 'Bilingual Canton Network education hub.' },
    visit: 'Visit',
  },
};

export function t(locale: Locale) {
  return locale === 'en' ? en : zh;
}

export function localePath(locale: Locale, path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'zh') return p === '/' ? '/' : p;
  return p === '/' ? '/en/' : `/en${p}`;
}
