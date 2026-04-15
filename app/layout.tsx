import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'わかる！子どものスポーツ適性 | 新体力テストで分かるスポーツ向き不向き',
  description:
    'お子さんの体力測定データを入力するだけで、どのスポーツに向いているか・運動発達は順調かが今すぐ分かります。文科省データ準拠。',
  openGraph: {
    title: 'わかる！子どものスポーツ適性 | 新体力テストで分かるスポーツ向き不向き',
    description:
      'お子さんの体力測定データを入力するだけで、どのスポーツに向いているか・運動発達は順調かが今すぐ分かります。文科省データ準拠。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'わかる！子どものスポーツ適性',
    description:
      'お子さんの体力測定データを入力するだけで、どのスポーツに向いているかが今すぐ分かります。',
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
