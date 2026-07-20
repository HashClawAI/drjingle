export type Locale = 'zh' | 'en';

export type NavKey = 'home' | 'events' | 'insights' | 'research' | 'ecosystem';

const zh = {
  siteName: 'Dr.Jingle',
  siteDesc: '区块链协议与 AI 智能体研究 · GEO 知识流',
  siteKeywords: 'Dr.Jingle, 金狗博士, AI, RWA, Web3, Canton',
  brand: { legalName: 'Michael Cheung', cnName: '金狗博士' },
  nav: { home: 'Home', events: '活动', insights: '洞察', research: '研究', ecosystem: '生态', primary: '主导航' },
  home: {
    kicker: 'GEO Flow · AI / RWA / Web3 知识流',
    tagline: '超级个体进化中',
    bio: '区块链协议与 AI 智能体研究',
    picksEyebrow: 'Dr.Jingle Picks',
    picksTitle: '推荐阅读',
    insightsEyebrow: 'Insight Stream',
    insightsTitle: '最新洞察',
    insightsMore: '查看全部洞察 →',
    researchEyebrow: 'Research',
    researchTitle: '研究精选',
    researchMore: '查看全部研究 →',
    seriesEyebrow: '专题阅读',
    seriesTitle: '系列专题',
    followX: 'Follow on X',
    paragraph: 'Paragraph 文集',
    builder: 'Builder',
    builderSub: 'on Canton Network',
    frontier: 'AI × Blockchain',
    frontierSub: 'Research frontier',
  },
  category: {
    insightsKicker: 'Insight layer',
    insightsDesc: '区块链、AI 与商业观察的长文知识流，持续从噪音里提取可复用判断。',
    researchKicker: 'Research layer',
    researchDesc: '学术论文与深度研究的长期容器，更系统的输出将在这里汇合。',
    eventsKicker: 'Events layer',
    eventsDesc: '线下分享、线上 AMA、工作坊与社区活动记录。',
    ecosystemKicker: 'Ecosystem layer',
    ecosystemDesc: 'Dr.Jingle 生态下的站点与项目入口，个人 IP、组织品牌与教育垂直各归其位。',
    insightsCount: (n: number) => `${n} 篇洞察`,
    researchCount: (n: number) => `${n} 篇研究`,
    eventsCount: (n: number) => `${n} 场活动`,
    ecosystemVisit: '访问站点',
    emptyTitle: '暂无内容',
    emptyHome: '返回 Home',
    paginationLabel: '栏目分页',
    paginationPrev: '向后',
    paginationNext: '向前',
    paginationPage: (n: number, total: number) => `第 ${n} 页，共 ${total} 页`,
    paginationStatus: (current: number, total: number) => `第 ${current} / ${total} 页`,
  },
  article: {
    overline: 'Dr.Jingle Intelligence Note',
    relatedEyebrow: 'Continue the thread',
    relatedTitle: '更多阅读',
  },
  author: {
    kicker: 'Signal source',
    displayName: 'Dr.Jingle™ · 金狗博士',
    tagline: '超级个体进化中',
    bio: 'Canton Network Validator，FA · RWA 研究与内容，聚焦 RWA、AI Agent、BTC、Canpay、DAO 与 blockchain 商业策略，把复杂系统翻译成可行动的判断。',
    avatarAlt: 'Dr.Jingle · 金狗博士',
  },
  share: {
    label: '分享',
    x: '分享到 X',
    linkedin: '分享到 LinkedIn',
    wechat: '微信',
    wechatHint: '扫码或复制链接，在微信中分享。',
    wechatQrAlt: '文章链接二维码',
    copy: '复制链接',
    copied: '链接已复制',
  },
  series: {
    parts: (n: number) => `${n} 篇`,
    readSeries: '开始阅读',
    pageEyebrow: 'Series',
    articleCount: (n: number) => `共 ${n} 篇`,
  },
  footer: {
    brand: 'Dr.Jingle™ · 金狗博士',
    desc: '区块链协议与 AI 智能体研究 · Meta Strategy 创始人',
    copy: (year: number) => `© ${year} Dr.Jingle · drjingle.com · X @drjingle`,
  },
  localeSwitch: { toEn: 'English', toZh: '中文', aria: '切换语言' },
  card: { read: '阅读全文' },
  ecosystem: {
    drjingle: { tag: '个人 IP', desc: '观点长文、GEO 知识流与 Dr.Jingle 个人品牌主站。' },
    hashclaw: { tag: '组织品牌', desc: 'HashClaw AI — 智能体与区块链 builder 生态。' },
    canton: { tag: '教育垂直', desc: 'Canton Network 双语教育站，教程、新闻与生态索引。' },
  },
} as const;

const en: typeof zh = {
  siteName: 'Dr.Jingle',
  siteDesc: 'Blockchain protocols & AI agents · GEO knowledge stream',
  siteKeywords: 'Dr.Jingle, AI, RWA, Web3, Canton',
  brand: { legalName: 'Michael Cheung', cnName: '金狗博士' },
  nav: { home: 'Home', events: 'Events', insights: 'Insights', research: 'Research', ecosystem: 'Ecosystem', primary: 'Main' },
  home: {
    kicker: 'GEO Flow · AI / RWA / Web3',
    tagline: 'Evolving as a super individual',
    bio: 'Blockchain protocols & AI agent research',
    picksEyebrow: 'Dr.Jingle Picks',
    picksTitle: 'Recommended',
    insightsEyebrow: 'Insight Stream',
    insightsTitle: 'Latest insights',
    insightsMore: 'All insights →',
    researchEyebrow: 'Research',
    researchTitle: 'Research picks',
    researchMore: 'All research →',
    seriesEyebrow: 'Series',
    seriesTitle: 'Series reading',
    followX: 'Follow on X',
    paragraph: 'Paragraph',
    builder: 'Builder',
    builderSub: 'on Canton Network',
    frontier: 'AI × Blockchain',
    frontierSub: 'Research frontier',
  },
  category: {
    insightsKicker: 'Insight layer',
    insightsDesc: 'Long-form takes on blockchain, AI, and business.',
    researchKicker: 'Research layer',
    researchDesc: 'Papers and deep research over longer horizons.',
    eventsKicker: 'Events layer',
    eventsDesc: 'Talks, AMAs, workshops, and community notes.',
    ecosystemKicker: 'Ecosystem layer',
    ecosystemDesc: 'Sites and projects in the Dr.Jingle ecosystem.',
    insightsCount: (n: number) => `${n} insights`,
    researchCount: (n: number) => `${n} research`,
    eventsCount: (n: number) => `${n} events`,
    ecosystemVisit: 'Visit',
    emptyTitle: 'Nothing here yet',
    emptyHome: 'Back to Home',
    paginationLabel: 'Category pagination',
    paginationPrev: 'Previous',
    paginationNext: 'Next',
    paginationPage: (n: number, total: number) => `Page ${n} of ${total}`,
    paginationStatus: (current: number, total: number) => `Page ${current} of ${total}`,
  },
  article: {
    overline: 'Dr.Jingle Intelligence Note',
    relatedEyebrow: 'Continue the thread',
    relatedTitle: 'Continue reading',
  },
  author: {
    kicker: 'Signal source',
    displayName: 'Dr.Jingle™ · Michael Cheung',
    tagline: 'Evolving as a super individual',
    bio: 'Canton Network Validator · RWA & AI agent research · actionable takes on complex systems.',
    avatarAlt: 'Dr.Jingle',
  },
  share: {
    label: 'Share',
    x: 'Share on X',
    linkedin: 'Share on LinkedIn',
    wechat: 'WeChat',
    wechatHint: 'Scan or copy the link to share in WeChat.',
    wechatQrAlt: 'Article QR code',
    copy: 'Copy link',
    copied: 'Link copied',
  },
  series: {
    parts: (n: number) => `${n} parts`,
    readSeries: 'Start reading',
    pageEyebrow: 'Series',
    articleCount: (n: number) => `${n} articles`,
  },
  footer: {
    brand: 'Dr.Jingle™',
    desc: 'Blockchain protocols & AI agents · Meta Strategy',
    copy: (year: number) => `© ${year} Dr.Jingle · drjingle.com · X @drjingle`,
  },
  localeSwitch: { toEn: 'English', toZh: '中文', aria: 'Switch language' },
  card: { read: 'Read' },
  ecosystem: {
    drjingle: { tag: 'Personal IP', desc: 'Long-form views and GEO-friendly knowledge stream.' },
    hashclaw: { tag: 'Org brand', desc: 'HashClaw AI — agents & blockchain builders.' },
    canton: { tag: 'Education', desc: 'Bilingual Canton Network education hub.' },
  },
};

export function t(locale: Locale) {
  return locale === 'en' ? en : zh;
}

export function localePath(locale: Locale, path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return p === '/' ? '/' : p;
  return p === '/' ? '/zh/' : `/zh${p}`;
}

export function localeSwitchPath(locale: Locale, pathname: string): string {
  const p = pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  if (locale === 'en') return p === '/' ? '/zh/' : `/zh${p}`;
  return p === '/' ? '/' : p;
}
