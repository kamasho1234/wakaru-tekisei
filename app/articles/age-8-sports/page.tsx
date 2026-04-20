import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '8歳の子どもに向いているスポーツ｜小学3年生の巧緻性発達とスポーツ適性',
  description:
    '8歳（小学3年生）の運動発達の特徴を解説。巧緻性が高まりテニス・バスケ・体操などが上達しやすいこの時期に向いているスポーツを紹介します。',
  openGraph: {
    title: '8歳の子どもに向いているスポーツ｜小学3年生の巧緻性発達とスポーツ適性',
    description:
      '8歳（小学3年生）の運動発達の特徴を解説。巧緻性が高まりテニス・バスケ・体操などが上達しやすいこの時期に向いているスポーツを紹介します。',
    images: [{ url: '/images/articles/age-8-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-8-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/age-8-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '8歳の子どもに向いているスポーツ｜小学3年生の巧緻性発達とスポーツ適性',
    images: ['/images/articles/age-8-sports.jpg'],
  },
};

export default function Age8SportsPage() {
  return (
    <ArticleLayout
      title="8歳の子どもに向いているスポーツ｜小学3年生の巧緻性発達とスポーツ適性"
      heroImage="/images/articles/age-8-sports.jpg"
      heroAlt="8歳の子どもがテニスや体操をしている様子"
      publishDate="2025年4月"
      slug="age-8-sports"
      description="8歳（小学3年生）の運動発達の特徴を解説。巧緻性が高まりテニス・バスケ・体操などが上達しやすいこの時期に向いているスポーツを紹介します。"
      tags={['8歳', '小学3年生', '巧緻性', 'スポーツ適性']}
      shareText="8歳（小学3年生）に向いているスポーツは？巧緻性が高まるこの時期の適性を解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          8歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          8歳（小学3年生）は「プレゴールデンエイジ」の中でも特に「巧緻性（こうちせい）」が発達する時期です。巧緻性とは、細かく精密な動きを正確に行う能力のことで、ラケット競技・球技・体操など多くのスポーツで必要とされます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">向上する能力</p>
            <p className="text-xs text-blue-800">細かい動作の精度が増す。ラケットでボールを狙った場所に打てるようになる</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-2">反応速度</p>
            <p className="text-xs text-green-800">動くものへの反応が速くなる。バスケのドリブルやサッカーの1対1で成長が見える</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">集中力</p>
            <p className="text-xs text-amber-800">1時間以上の練習に集中して取り組めるようになる</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          8歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">テニス</h3>
            <p className="text-sm text-gray-600">
              8歳はテニスの技術習得が加速する時期です。フォアハンド・バックハンドの安定したストロークを習得でき、ラリーが続けられるようになります。錦織圭選手はこの年代で全国大会に出場しています。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">バスケットボール</h3>
            <p className="text-sm text-gray-600">
              ドリブルしながら顔を上げてコートを見渡す「ヘッドアップドリブル」が習得できるのが8歳前後です。チームの動きを理解し、パスのタイミングや味方との連携が面白くなってくる時期です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操（器械体操）</h3>
            <p className="text-sm text-gray-600">
              側転・ロンダート・倒立前転など中級技に挑戦できる年齢です。柔軟性は年々失われていくため、体操は早い時期に始めるほど有利です。8歳から始めても十分間に合います。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳</h3>
            <p className="text-sm text-gray-600">
              8歳でスイミングを続けている子どもは、4泳法の習得が視野に入ります。平泳ぎのカエル足・バタフライのドルフィンキックなど、コツが必要な技術も8歳前後から習得しやすくなります。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          8歳で新しいスポーツを始めても遅くない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「もう8歳だから始めるのが遅い」と思う必要はありません。プレゴールデンエイジ（3〜8歳）の最終期にあたる8歳は、神経系の発達がまだ活発で、新しいスポーツを始めても習得が速い時期です。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">8歳スタートが有利なスポーツの例</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>陸上競技（短距離・跳躍）— 学校の体育が入口になりやすい</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>バドミントン・卓球 — 小学校低学年クラブで始める子が多い</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>剣道 — 小学3年生から入門が増える武道</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">
          ゴールデンエイジ（9〜12歳）を前に、多様なスポーツを経験しておくことがその後の運動能力の伸びを最大化します。まだ始めていない種目への挑戦を、8歳のうちに検討するのもよいタイミングです。
        </p>
      </div>
    </ArticleLayout>
  );
}
