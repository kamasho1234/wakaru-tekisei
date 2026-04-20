import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'スポーツ適性診断 | 新体力テストで向いてるスポーツを診断',
  description: '新体力テストの数値を入力するだけで、お子さんに向いているスポーツが分かります。6〜12歳対応。無料・登録不要。',
  alternates: {
    canonical: 'https://tekisei-sport.com/shindan/sports',
  },
  openGraph: {
    title: 'スポーツ適性診断 | 新体力テストで向いてるスポーツを診断',
    description: '新体力テストの数値を入力するだけで、お子さんに向いているスポーツが分かります。6〜12歳対応。無料・登録不要。',
    url: 'https://tekisei-sport.com/shindan/sports',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
