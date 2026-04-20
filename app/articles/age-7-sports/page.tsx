import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '7歳の子どもに向いているスポーツ｜小学2年生の運動発達と適性の見極め方',
  description:
    '7歳（小学2年生）の運動発達の特徴を解説。チームスポーツが本格化するこの時期に向いているスポーツと、適性を見極めるポイントを紹介します。',
  openGraph: {
    title: '7歳の子どもに向いているスポーツ｜小学2年生の運動発達と適性の見極め方',
    description:
      '7歳（小学2年生）の運動発達の特徴を解説。チームスポーツが本格化するこの時期に向いているスポーツと、適性を見極めるポイントを紹介します。',
    images: [{ url: '/images/articles/age-7-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-7-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/age-7-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7歳の子どもに向いているスポーツ｜小学2年生の運動発達と適性の見極め方',
    images: ['/images/articles/age-7-sports.jpg'],
  },
};

export default function Age7SportsPage() {
  return (
    <ArticleLayout
      title="7歳の子どもに向いているスポーツ｜小学2年生の運動発達と適性の見極め方"
      heroImage="/images/articles/age-7-sports.jpg"
      heroAlt="7歳の子どもがチームスポーツをしている様子"
      publishDate="2025年4月"
      slug="age-7-sports"
      description="7歳（小学2年生）の運動発達の特徴を解説。チームスポーツが本格化するこの時期に向いているスポーツと、適性を見極めるポイントを紹介します。"
      tags={['7歳', '小学2年生', 'チームスポーツ', 'スポーツ適性']}
      shareText="7歳（小学2年生）に向いているスポーツは？チームスポーツが本格化する時期の適性の見極め方 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          7歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          7歳（小学2年生）は、プレゴールデンエイジの中でも特に神経系の発達が顕著な時期です。動きの「精度」が上がり、スポーツの技術を習得するスピードが加速します。また、ルールの理解力と社会性が高まり、チームスポーツが本格的に楽しめるようになります。
        </p>
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">7歳頃に見られる運動の変化</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>複数の動作を組み合わせてスムーズに行える（走りながらボールを蹴るなど）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>ゲームのルールを理解してチームで動ける</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>縄跳びの二重跳びに挑戦できる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>自転車の補助輪なし走行がスムーズになる</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          7歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">サッカー・フットサル</h3>
            <p className="text-sm text-gray-600">
              7歳はサッカーのミニゲームが本格的にできる年齢です。ポジションの概念を理解し始め、「仲間にパスする」「相手のいないスペースに動く」といった戦術的な動きも少しずつできるようになります。チームワークと個人技の両方を伸ばせます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳</h3>
            <p className="text-sm text-gray-600">
              7歳でスイミングを続けている子どもは、クロール25mの習得が射程に入ります。スクールの進級テストで達成感を味わえる時期で、泳ぎに自信がつくと水への恐怖心がなくなり、海・川での安全意識も高まります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">バドミントン・卓球</h3>
            <p className="text-sm text-gray-600">
              ラケット競技の中でも道具が軽く、スペースも選ばないバドミントン・卓球は7歳から本格的に始められます。反射神経・手と目の協調性が鍛えられ、個人でも取り組みやすい種目です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">空手・柔道</h3>
            <p className="text-sm text-gray-600">
              武道は礼節・集中力・忍耐力を同時に育てます。7歳は型の動作を覚えられる年齢で、試合（組手・乱取り）へのデビューも7〜8歳頃が一般的です。挨拶の習慣がつくことも、スポーツを超えた教育効果です。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          7歳でスポーツの適性を見極めるポイント
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          7歳はスポーツの「向き不向き」が少しずつ見えてくる時期です。ただし、この時期の「苦手」は練習量と環境の違いによるものが大きく、本当の適性判断はもう少し先になります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-2">向いているサインを見極める</p>
            <ul className="text-xs text-green-800 space-y-1">
              <li>・練習が終わっても「もっとやりたい」と言う</li>
              <li>・自分から練習の話題を出す</li>
              <li>・同じ練習を何度も繰り返して上手になろうとする</li>
              <li>・試合や発表を楽しみにしている</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">見守るべきサイン</p>
            <ul className="text-xs text-amber-800 space-y-1">
              <li>・行く前はいやがるが始まると楽しんでいる</li>
              <li>・友達がいるから続けている</li>
              <li>・得意なことは別にあって、そこで輝いている</li>
              <li>・親が好きだから続けている</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          「嫌がる」ことが続く場合は、スポーツ自体が合っていないのか、コーチや環境の問題なのかを切り分けることが重要です。まず環境を変えてみて、それでも続かない場合は別の種目への移行を検討しましょう。
        </p>
      </div>
    </ArticleLayout>
  );
}
