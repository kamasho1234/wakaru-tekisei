import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'うちの子大丈夫？診断 | 3〜12歳の運動発達チェック',
  description: 'お子さんの運動発達が年齢相応かどうかをチェックリストで確認できます。3〜12歳対応。無料・登録不要。',
  alternates: {
    canonical: 'https://tekisei-sport.com/shindan/check',
  },
  openGraph: {
    title: 'うちの子大丈夫？診断 | 3〜12歳の運動発達チェック',
    description: 'お子さんの運動発達が年齢相応かどうかをチェックリストで確認できます。3〜12歳対応。無料・登録不要。',
    url: 'https://tekisei-sport.com/shindan/check',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
