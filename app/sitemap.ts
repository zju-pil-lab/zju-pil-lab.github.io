import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://zju-pil-lab.github.io/',
    lastModified: new Date('2026-09-30'),
    changeFrequency: 'monthly',
    priority: 1,
  }];
}
