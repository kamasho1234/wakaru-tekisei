import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '10歳の子どもに向いているスポーツ｜ゴールデンエイジ中期の技術習得と専門化',
  description:
    '10歳（小学5年生）はゴールデンエイジの中心期。技術習得が最も速い今、向いているスポーツと専門化を考え始めるタイミングを解説します。',
  openGraph: {
    title: '10歳の子どもに向いているスポーツ｜ゴールデンエイジ中期の技術習得と専門化',
    description:
      '10歳（小学5年生）はゴールデンエイジの中心期。技術習得が最も速い今、向いているスポーツと専門化を考え始めるタイミングを解説します。',
    images: [{ url: '/images/articles/age-10-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-10-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/age-10-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10歳の子どもに向いているスポーツ｜ゴールデンエイジ中期の技術習得と専門化',
    images: ['/images/articles/age-10-sports.jpg'],
  },
};

export default function Age10SportsPage() {
  return (
    <ArticleLayout
      title="10歳の子どもに向いているスポーツ｜ゴールデンエイジ中期の技術習得と専門化"
      heroImage="/images/articles/age-10-sports.jpg"
      heroAlt="10歳の子どもが真剣にスポーツの練習をしている様子"
      publishDate="2025年4月"
      slug="age-10-sports"
      description="10歳（小学5年生）はゴールデンエイジの中心期。技術習得が最も速い今、向いているスポーツと専門化を考え始めるタイミングを解説します。"
      tags={['10歳', '小学5年生', 'ゴールデンエイジ', 'スポーツ専門化']}
      shareText="10歳はゴールデンエイジの中心期。技術習得が最も速いこの時期に向いているスポーツを解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          10歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          10歳（小学5年生）はゴールデンエイジ（9〜12歳）の中心にあたります。神経系がほぼ完成に向かい、複雑な技術を短時間で習得できる「黄金の時期」です。また体格も安定してきて、スポーツの競技力が急速に伸びる子が多くなります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">新体力テスト（10歳・男子平均）</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>50m走：9.5秒</li>
              <li>立ち幅跳び：148cm</li>
              <li>ソフトボール投げ：25.2m</li>
              <li>握力：18.2kg</li>
            </ul>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="text-sm font-bold text-pink-900 mb-2">新体力テスト（10歳・女子平均）</p>
            <ul className="text-xs text-pink-800 space-y-1">
              <li>50m走：9.9秒</li>
              <li>立ち幅跳び：140cm</li>
              <li>ソフトボール投げ：16.0m</li>
              <li>握力：16.3kg</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">※文部科学省「令和4年度体力・運動能力調査」より</p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          10歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">球技（本格化の時期）</h3>
            <p className="text-sm text-gray-600">
              10歳はサッカー・野球・バスケ・バレーなどの球技でポジションの役割が明確になる時期です。「自分はどのポジションに向いているか」「何が得意か」を実感でき、競技への本気度が高まります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">テニス・バドミントン・卓球</h3>
            <p className="text-sm text-gray-600">
              ラケット競技は10歳前後から急速に上手くなります。スピンをかける・コースを狙うといった高度な技術も習得できるようになり、試合での戦術選択も楽しめます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳（タイム向上期）</h3>
            <p className="text-sm text-gray-600">
              10歳は4泳法のタイムが急速に伸びる時期です。スタート・ターンの技術を磨くことで記録が大幅に向上し、大会出場への動機づけにもなります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">陸上競技</h3>
            <p className="text-sm text-gray-600">
              短距離・中距離・跳躍・投擲など、陸上の各種目でフォームを磨くのに最適な時期です。学校の陸上記録会や市の大会に出場することで、自分の強みがわかります。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          10歳で専門化を考え始めるべきか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「そろそろ1つに絞るべきか」と悩む親御さんが増える年齢です。スポーツ科学の観点からは、10歳時点での早期専門化は必ずしも有利ではありません。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">専門化を急ぐ前に確認したいこと</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>子どもが自分から「このスポーツを本気でやりたい」と言っているか</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>週3〜4回の練習に疲弊せず取り組めているか</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>中学進学後の部活動との連続性があるか</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>他のスポーツを続けることで相乗効果が出ていないか</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">
          プロや代表選手の多くは、10歳時点で複数のスポーツを経験していることが多く、専門化は11〜13歳以降が推奨されます。焦らず、ゴールデンエイジの残り時間を「多様な経験」に使うことが長期的に有利です。
        </p>
      </div>
    </ArticleLayout>
  );
}
