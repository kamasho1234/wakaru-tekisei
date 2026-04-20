import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '幼児スポーツ適性診断 | 3〜5歳向けスポーツタイプ診断',
  description: '3〜5歳のお子さんの行動・性格からスポーツタイプを診断します。active・rhythm・focus・socialの4タイプ。無料・登録不要。',
  alternates: {
    canonical: 'https://tekisei-sport.com/shindan/yoji',
  },
  openGraph: {
    title: '幼児スポーツ適性診断 | 3〜5歳向けスポーツタイプ診断',
    description: '3〜5歳のお子さんの行動・性格からスポーツタイプを診断します。active・rhythm・focus・socialの4タイプ。無料・登録不要。',
    url: 'https://tekisei-sport.com/shindan/yoji',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
