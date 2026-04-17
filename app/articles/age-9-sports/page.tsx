import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '9歳の子どもに向いているスポーツ｜ゴールデンエイジ開始と最高の運動習得期',
  description:
    '9歳（小学4年生）はゴールデンエイジの始まり。この時期に最も効率よく習得できるスポーツと、親がすべきサポートを解説します。',
  openGraph: {
    title: '9歳の子どもに向いているスポーツ｜ゴールデンエイジ開始と最高の運動習得期',
    description:
      '9歳（小学4年生）はゴールデンエイジの始まり。この時期に最も効率よく習得できるスポーツと、親がすべきサポートを解説します。',
    images: [{ url: '/images/articles/age-9-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-9-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '9歳の子どもに向いているスポーツ｜ゴールデンエイジ開始と最高の運動習得期',
    images: ['/images/articles/age-9-sports.jpg'],
  },
};

export default function Age9SportsPage() {
  return (
    <ArticleLayout
      title="9歳の子どもに向いているスポーツ｜ゴールデンエイジ開始と最高の運動習得期"
      heroImage="/images/articles/age-9-sports.jpg"
      heroAlt="9歳の子どもがさまざまなスポーツに取り組んでいる様子"
      publishDate="2025年4月"
      slug="age-9-sports"
      description="9歳（小学4年生）はゴールデンエイジの始まり。この時期に最も効率よく習得できるスポーツと、親がすべきサポートを解説します。"
      tags={['9歳', '小学4年生', 'ゴールデンエイジ', 'スポーツ適性']}
      shareText="9歳はゴールデンエイジの始まり。この時期に向いているスポーツと親のサポートを解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          9歳がゴールデンエイジの始まりである理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ科学では、9〜12歳を「ゴールデンエイジ」と呼びます。この時期は神経系の発達がほぼ完成に向かう段階で、新しい動きを見ただけで習得できる「即座の習得」と呼ばれる現象が起きやすくなります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="font-bold text-amber-900 mb-3">ゴールデンエイジの特徴</p>
            <ul className="space-y-2">
              <li className="text-sm text-amber-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>見た動きをすぐに再現できる「即座の習得」</span>
              </li>
              <li className="text-sm text-amber-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>技術習得のスピードが最高潮になる</span>
              </li>
              <li className="text-sm text-amber-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>複雑な動きのパターンを記憶・再現できる</span>
              </li>
              <li className="text-sm text-amber-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>この時期に習得した技術は「体に染みつく」</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">この時期を逃すと？</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>13歳以降も技術習得は可能だが時間がかかる</span>
              </li>
              <li className="text-sm text-blue-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>「即座の習得」は起きにくくなる</span>
              </li>
              <li className="text-sm text-blue-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>基礎なしで筋力だけ先に発達してしまう場合も</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          9歳に向いているスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ゴールデンエイジの最大の特徴は「多様な運動経験が将来の運動能力を高める」こと。特定の1種目より、複数のスポーツを経験させることが理想的です。
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">球技全般（サッカー・野球・バスケ・テニスなど）</h3>
            <p className="text-sm text-gray-600">
              9歳になると戦術理解が深まり、どの球技でも楽しめるようになります。この時期に2〜3種目の球技を経験することで、互いの技術が相乗効果をもたらします。例えばサッカーと野球を両方やることで、走力と投力が均等に鍛えられます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操・新体操</h3>
            <p className="text-sm text-gray-600">
              倒立・側転・ハンドスプリングなどの高度な技が習得できる時期です。体操の基礎技術はゴールデンエイジ中に習得するのが最も効率的で、プロやオリンピック選手の多くもこの年齢で技術を確立しています。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳（競技志向）</h3>
            <p className="text-sm text-gray-600">
              4泳法を習得したうえでタイムを縮めていく段階に入ります。水泳の技術（ターン・スタート・ストローク効率）はゴールデンエイジ中に磨くことで定着しやすく、後からの修正が難しい技術が多いため、この時期の指導の質が重要です。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          この時期に親ができる最善のサポート
        </h2>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <ul className="space-y-3">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span><strong>多様なスポーツ体験の機会を作る</strong> — 1つのスポーツに固執せず、複数の種目を体験させましょう。スポーツ体験イベントや地域の教室を積極的に活用してください。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span><strong>良質な指導者のもとで練習させる</strong> — ゴールデンエイジに身につく技術は「一生もの」です。正しいフォームと技術を教えてくれる指導者かどうかを見極めましょう。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span><strong>結果より「チャレンジ」を褒める</strong> — ゴールデンエイジは試合の勝敗より技術習得が最優先。失敗を恐れずに挑戦できる環境を作りましょう。</span>
            </li>
          </ul>
        </div>
      </div>
    </ArticleLayout>
  );
}
