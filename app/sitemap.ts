import { MetadataRoute } from 'next';

const siteUrl = 'https://tekisei-sport.com';

const ages = [6, 7, 8, 9, 10, 11, 12];
const genders = ['male', 'female'];

export default function sitemap(): MetadataRoute.Sitemap {
  const heikinPages = ages.flatMap((age) =>
    genders.map((gender) => ({
      url: `${siteUrl}/heikin/${age}sai-${gender}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/shindan/sports`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/shindan/check`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/shindan/yoji`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...heikinPages,
  ];
}
