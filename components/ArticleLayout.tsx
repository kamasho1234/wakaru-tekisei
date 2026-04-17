'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import ShareButtons from '@/components/ShareButtons';

interface ArticleLayoutProps {
  title: string;
  heroImage: string;
  heroAlt: string;
  publishDate: string;
  tags: string[];
  shareText: string;
  citations?: string[];
  slug?: string;
  description?: string;
  children: ReactNode;
}

const siteUrl = 'https://tekisei-sport.com';

export default function ArticleLayout({
  title,
  heroImage,
  heroAlt,
  publishDate,
  tags,
  shareText,
  citations,
  slug,
  description,
  children,
}: ArticleLayoutProps) {
  const articleUrl = slug ? `${siteUrl}/articles/${slug}` : siteUrl;
  const imageUrl = `${siteUrl}${heroImage}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description ?? title,
    image: imageUrl,
    url: articleUrl,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@type': 'Organization',
      name: 'わかる！子どものスポーツ適性',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'わかる！子どものスポーツ適性',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/icon.png` },
    },
    keywords: tags.join(', '),
    inLanguage: 'ja',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'トップ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: `${siteUrl}/articles` },
      { '@type': 'ListItem', position: 3, name: title, item: articleUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F9FF]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* パンくずリスト */}
      <div className="max-w-3xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/articles" className="hover:text-gray-900">
          記事一覧
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 line-clamp-1">{title}</span>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16">
        {/* ヒーロー画像 */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-md">
          <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
        </div>

        {/* タイトルエリア */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-2">{title}</h1>
          <p className="text-xs text-gray-400">{publishDate}更新</p>
        </div>

        {/* 記事本文 */}
        <div className="space-y-8">{children}</div>

        {/* 出典 */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-xs font-bold text-gray-500 mb-2">出典・参考資料</p>
          <ul className="space-y-1.5">
            <li className="text-xs text-gray-500 leading-relaxed">
              文部科学省（スポーツ庁委託）「体力・運動能力調査報告書」— 新体力テスト8種目の全国平均値データ
            </li>
            {citations && citations.map((cite, i) => (
              <li key={i} className="text-xs text-gray-500 leading-relaxed">{cite}</li>
            ))}
            <li className="text-xs text-gray-500 leading-relaxed">
              ※ 運動発達・スポーツ科学に関する内容は、スポーツ科学分野で広く知られた知見をもとに当サイトが解説したものです。
            </li>
          </ul>
        </div>

        {/* シェアボタン */}
        <div className="mt-8">
          <ShareButtons text={shareText} />
        </div>

        {/* 診断CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-blue-100 text-xs mb-4">新体力テストのデータを入力するだけで、向いているスポーツがすぐわかります</p>
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
