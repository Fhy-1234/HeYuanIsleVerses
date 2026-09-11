import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://fhy-1234.github.io/HeYuanIsleVerses/',
  base: basePath,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
