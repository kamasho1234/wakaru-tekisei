import { MetadataRoute } from 'next';

const siteUrl = 'https://tekisei-sport.com';

const ages = [6, 7, 8, 9, 10, 11, 12];
const genders = ['male', 'female'];

const articles = [
  'golden-age',
  'soccer-aptitude',
  'swimming-aptitude',
  'fitness-test-guide',
  'sport-selection',
  'basketball-aptitude',
  'speed-running',
  'motor-development',
  'gymnastics-aptitude',
  'martial-arts-aptitude',
  'child-slow-runner',
  'child-not-interested',
  'child-quit-sports',
  'child-clumsy',
  'late-bloomer-sports',
  'sport-start-timing',
  'multiple-sports-ok',
  'elite-vs-enjoy',
  'sport-vs-study',
  'overtraining-kids',
  'height-and-sports',
  'injury-prevention-kids',
  'growth-plate-injury',
  'weight-and-sports',
  'girls-sports-puberty',
  'parent-pressure-sports',
  'how-to-cheer-kids',
  'coach-trouble',
  'team-bullying-sports',
  'parent-not-sporty',
  'ohtani-shohei-childhood',
  'hanyu-yuzuru-childhood',
  'asada-mao-childhood',
  'nishikori-kei-childhood',
  'uchimura-kohei-childhood',
  'yoshida-saori-childhood',
  'ito-mima-childhood',
  'ikee-rikako-childhood',
  'nishiya-momiji-childhood',
  'horigome-yuto-childhood',
  'age-3-sports',
  'age-4-sports',
  'age-5-sports',
  'age-6-sports',
  'age-7-sports',
  'age-8-sports',
  'age-9-sports',
  'age-10-sports',
  'age-11-sports',
  'age-12-sports',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const heikinPages = ages.flatMap((age) =>
    genders.map((gender) => ({
      url: `${siteUrl}/heikin/${age}sai-${gender}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const articlePages = articles.map((article) => ({
    url: `${siteUrl}/articles/${article}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

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
    ...articlePages,
    ...heikinPages,
  ];
}
