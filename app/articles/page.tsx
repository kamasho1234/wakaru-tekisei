import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  articles,
  articlesByCategory,
  articleImage,
  categoryLabels,
  categoryOrder,
  type ArticleCategory,
} from '@/lib/articles';

const siteUrl = 'https://tekisei-sport.com';
const title = '記事一覧｜わかる！子どものスポーツ適性';
const description = `子どものスポーツ適性・運動発達・体力データに関する記事${articles.length}本の一覧。種目別の適性、年齢別に向いているスポーツ、子育ての悩み、公的データの解説、アスリートの子供時代まで。`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/images/articles/golden-age.jpg', width: 1200, height: 630 }],
    type: 'website',
    url: `${siteUrl}/articles`,
  },
  alternates: {
    canonical: `${siteUrl}/articles`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    images: ['/images/articles/golden-age.jpg'],
  },
};

const accent: Record<ArticleCategory, { label: string; text: string; badge: string; bar: string }> = {
  guide: { label: 'Articles', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', bar: 'bg-blue-500' },
  aptitude: { label: 'Aptitude', text: 'text-green-600', badge: 'bg-green-100 text-green-700', bar: 'bg-green-500' },
  age: { label: 'By Age', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', bar: 'bg-purple-500' },
  athlete: { label: 'Athletes', text: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-700', bar: 'bg-yellow-500' },
};

export default function ArticlesIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${siteUrl}/articles`,
    inLanguage: 'ja',
    hasPart: articles.map((a) => ({
      '@type': 'Article',
      headline: a.title,
      url: `${siteUrl}/articles/${a.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: `${siteUrl}/articles` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F9FF]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* パンくずリスト */}
      <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">記事一覧</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-2">記事一覧</h1>
          <p className="text-sm text-gray-600">
            子どものスポーツ適性・運動発達・体力データに関する記事を{articles.length}本掲載しています。
          </p>
        </div>

        {/* カテゴリ内リンク */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categoryOrder.map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-gray-700 hover:border-gray-400 transition-colors"
            >
              {categoryLabels[category]}
              <span className="text-gray-400 ml-1.5">{articlesByCategory(category).length}</span>
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {categoryOrder.map((category) => {
            const items = articlesByCategory(category);
            if (!items.length) return null;
            const style = accent[category];

            return (
              <section key={category} id={category} className="scroll-mt-4">
                <div className="mb-4">
                  <p className={`${style.text} font-semibold text-xs uppercase tracking-widest mb-1`}>{style.label}</p>
                  <h2 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
                    <span className={`w-1 h-6 ${style.bar} rounded-full inline-block`}></span>
                    {categoryLabels[category]}
                    <span className="text-gray-400 text-sm font-bold">{items.length}本</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {items.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all group overflow-hidden"
                    >
                      <div className="relative w-20 h-14 shrink-0 overflow-hidden">
                        <Image
                          src={articleImage(article.slug)}
                          alt={article.title}
                          fill
                          sizes="80px"
                          className={`object-cover ${
                            category === 'athlete' ? 'object-top' : ''
                          } group-hover:scale-105 transition-transform duration-500`}
                        />
                      </div>
                      <div className="flex-1 py-2 pr-3 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`${style.text} text-xs font-bold`}>{article.tags[0]}</span>
                          {article.tags[1] && (
                            <span className={`${style.badge} text-xs font-bold px-1.5 py-0.5 rounded-full`}>
                              {article.tags[1]}
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug">{article.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* 診断CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-blue-100 text-xs mb-4">
            新体力テストのデータを入力するだけで、向いているスポーツがすぐわかります
          </p>
          <Link
            href="/shindan/sports"
            className="inline-block bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
          >
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </div>
  );
}
