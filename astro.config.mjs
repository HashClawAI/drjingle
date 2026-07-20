import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = process.env.BASE_PATH || '/';
const site = process.env.PUBLIC_SITE_URL || 'https://drjingle.com';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/category/sites': '/category/ecosystem',
  },
});
