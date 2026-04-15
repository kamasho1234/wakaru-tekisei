import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://tekisei-sport.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'わかる！子どものスポーツ適性 | 新体力テストで向いてるスポーツが分かる無料診断',
    template: '%s | わかる！子どものスポーツ適性',
  },
  description:
    '新体力テストの数値を入力するだけで、お子さんに向いているスポーツと運動発達が今すぐ分かります。3〜12歳対応・無料・登録不要。文部科学省データ準拠。',
  keywords: ['スポーツ適性', '子供', '新体力テスト', 'スポーツ診断', '運動発達', '向いてるスポーツ', '小学生', '幼児'],
  authors: [{ name: 'わかる！子どものスポーツ適性' }],
  creator: 'わかる！子どものスポーツ適性',
  openGraph: {
    title: 'わかる！子どものスポーツ適性 | 新体力テストで向いてるスポーツが分かる無料診断',
    description:
      '新体力テストの数値を入力するだけで、お子さんに向いているスポーツと運動発達が今すぐ分かります。3〜12歳対応・無料・登録不要。文部科学省データ準拠。',
    url: siteUrl,
    siteName: 'わかる！子どものスポーツ適性',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'わかる！子どものスポーツ適性' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'わかる！子どものスポーツ適性',
    description: '新体力テストの数値を入力するだけで、向いているスポーツと運動発達が今すぐ分かります。無料・登録不要。',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'X2Ajgv0g6yydnTNxGx-y0yi7J8U49iM4YoEqxADRQO4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.GA_ID;

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'わかる！子どものスポーツ適性',
              url: 'https://tekisei-sport.com',
              description: '新体力テストの数値を入力するだけで、お子さんに向いているスポーツと運動発達が今すぐ分かります。3〜12歳対応・無料・登録不要。',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
              inLanguage: 'ja',
              author: { '@type': 'Organization', name: 'わかる！子どものスポーツ適性', url: 'https://tekisei-sport.com' },
            }),
          }}
        />
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
