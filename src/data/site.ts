const siteOrigin = (import.meta.env.SITE_URL ?? 'https://example.org').replace(/\/$/, '');
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteUrl = `${siteOrigin}${basePath}`;

export const site = {
  name: '禾愿辞屿',
  title: '禾愿辞屿 - He Yuan Isle Verses',
  description: '栖于屿上，拾尽人间辞章...',
  url: siteUrl,
  author: {
    name: 'Fhy',
    bio: '收集、记录和分享美好的短句、散文片段与诗行。',
    email: '',
  },
  locale: 'zh-cn',
  locales: ['zh-cn', 'en'] as const,
  writingPageSize: 8,
  tagIndexThreshold: 1,
  license: {
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  social: [
    { label: '投稿邮箱', href: 'mailto:imfhy1234@outlook.com' },
    { label: '站长博客', href: 'https://fhy-1234.github.io' },
  ] as Array<{ label: string; href: string }>,
  features: {
    search: true,
    favorites: true,
    theme: true,
    rss: true,
    share: true,
    tips: false,
    newsletter: false,
    comments: true,
  },
} as const;

export type Locale = (typeof site.locales)[number];
