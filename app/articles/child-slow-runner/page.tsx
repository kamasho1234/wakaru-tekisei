import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '足が遅い子は運動神経が悪いの？親が知っておくべき本当のこと',
  description:
    '子どもの足が遅くて心配な親御さんへ。「運動神経」の科学的な意味と、足の速さだけでは判断できない運動能力の本質を解説します。',
  openGraph: {
    title: '足が遅い子は運動神経が悪いの？親が知っておくべき本当のこと',
    description:
      '子どもの足が遅くて心配な親御さんへ。「運動神経」の科学的な意味と、足の速さだけでは判断できない運動能力の本質を解説します。',
    images: [{ url: '/images/articles/child-slow-runner.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/child-slow-runner',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/child-slow-runner',
  },
  twitter: {
    card: 'summary_large_image',
    title: '足が遅い子は運動神経が悪いの？親が知っておくべき本当のこと',
    images: ['/images/articles/child-slow-runner.jpg'],
  },
};

export default function ChildSlowRunnerPage() {
  return (
    <ArticleLayout
      title="足が遅い子は運動神経が悪いの？親が知っておくべき本当のこと"
      heroImage="/images/articles/child-slow-runner.jpg"
      heroAlt="走る練習をしている子どもと見守る親"
      publishDate="2025年4月"
      slug="child-slow-runner"
      description="子どもの足が遅くて心配な親御さんへ。「運動神経」の科学的な意味と、足の速さだけでは判断できない運動能力の本質を解説します。"
      tags={['運動神経', '足の速さ', '子育て']}
      shareText="「足が遅い=運動神経が悪い」は誤解かも。子どもの運動能力の本当の見方を解説。 #子育て #運動神経"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「運動神経が悪い」は科学的に正しい表現ではない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          多くの親が「うちの子は運動神経が悪い」と言いますが、医学的・解剖学的に「運動神経」という器官は実在しません。正確には「神経-筋協調能力」や「コーディネーション能力」の高さを表しています。つまり「運動神経が悪い」という表現は、正確ではなく、子どもの運動能力を正しく評価できていない可能性があります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">7つ</p>
            <p className="text-xs text-gray-600 mt-1">コーディネーション能力</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">相関</p>
            <p className="text-xs text-gray-600 mt-1">0.3〜0.5程度</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">9〜12歳</p>
            <p className="text-xs text-gray-600 mt-1">ゴールデンエイジ</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">運動神経の正体</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">医学的実体:</span>
              <span>脳と筋肉の連携能力。神経-筋協調能力とも呼ぶ</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">訓練可能:</span>
              <span>生まれつきではなく、動き作業を通じて発達する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">スポーツ別差:</span>
              <span>足が遅くても別分野では優秀な子は多い</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          足の速さと総合的な運動能力の違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文科省の新体力テストでは、50m走・シャトルラン・反復横とび・立ち幅跳び・握力など複数の項目で測定します。研究によると、50m走（足の速さ）とこれらの他の項目の相関は0.3〜0.5程度であり、完全には連動しません。つまり、足が遅い子でも他の運動能力は十分に高い可能性があります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">体力要素</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">説明</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">足が遅くても得意な可能性</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">敏捷性</td>
                <td className="px-3 py-2 text-gray-600">素早く方向を変える能力</td>
                <td className="px-3 py-2 text-gray-600">有（体操・バスケに向く）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">持久力</td>
                <td className="px-3 py-2 text-gray-600">長時間動き続ける能力</td>
                <td className="px-3 py-2 text-gray-600">有（長距離走に向く）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">柔軟性</td>
                <td className="px-3 py-2 text-gray-600">体を柔らかく動かせる</td>
                <td className="px-3 py-2 text-gray-600">有（体操・ダンスに向く）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">筋力</td>
                <td className="px-3 py-2 text-gray-600">力強さ</td>
                <td className="px-3 py-2 text-gray-600">有（柔道・スイムに向く）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          文科省データで見る50m走の全国平均
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">男子</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳</td>
                <td className="px-2 py-2 text-gray-600">9.83秒</td>
                <td className="px-2 py-2 text-gray-600">10.14秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳</td>
                <td className="px-2 py-2 text-gray-600">8.99秒</td>
                <td className="px-2 py-2 text-gray-600">9.31秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳</td>
                <td className="px-2 py-2 text-gray-600">8.36秒</td>
                <td className="px-2 py-2 text-gray-600">8.78秒</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          （データ出典：文科省 令和4年度新体力テスト）お子さんの記録と全国平均を比較して、足の速さを客観的に評価することができます。ただし重要なのは「平均より遅い=運動神経が悪い」ではなく、他の運動能力を総合的に見ることです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          足が遅い子が得意な可能性があるスポーツ
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体操・新体操</h3>
              <p className="text-sm text-gray-600">
                足の速さより敏捷性・柔軟性・バランス感覚が重要。足が遅い子でも活躍する可能性が高い
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">水泳</h3>
              <p className="text-sm text-gray-600">
                足の速さではなく、持久力・筋力・フォーム技術が必要。走るより水を動かす方が得意な子もいる
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">武道（柔道・空手・剣道）</h3>
              <p className="text-sm text-gray-600">
                足の速さより力・集中力・技術が評価される。体の小さい子でも活躍できる
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バスケットボール</h3>
              <p className="text-sm text-gray-600">
                足の速さより敏捷性・ボール感覚が重要。ステップワークで速さをカバー可能
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親ができること：コーディネーショントレーニング
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「運動神経が悪い」と思われる子でも、適切なトレーニングで改善します。特に9～12歳のゴールデンエイジは、様々な動きを習得しやすい時期です。コーディネーショントレーニングは7つの能力を高めます。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">7つのコーディネーション能力</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">リズム能力:</span>
              <span>音やリズムに合わせて動く（ダンス・ラダートレーニング）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">バランス能力:</span>
              <span>体を安定させる（一本足で立つ、綱渡し）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">変換能力:</span>
              <span>素早く動きを変える（ジグザグ走）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">反応能力:</span>
              <span>信号に素早く応じる（音に応じて動く）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">連結能力:</span>
              <span>体の各部分を協調させる（複雑な動き）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">定位能力:</span>
              <span>空間や物を認識する（ボール操作）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">識別能力:</span>
              <span>力加減を調整する（ボール投げの強さ）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：足の速さより大切なこと
        </h2>
        <p className="text-gray-700 leading-relaxed">
          「運動神経が悪い」と決めつけるのではなく、子どもの総合的な運動能力を見ることが大切です。足が遅くても敏捷性が高い、持久力がある、バランス感覚が優れているなど、別の強みがある可能性があります。また、ゴールデンエイジのトレーニングで改善することもできます。今は足が遅くても、お子さんに最適なスポーツを見つけることで、運動の楽しさと自信を引き出すことができます。
        </p>
      </div>
    </ArticleLayout>
  );
}
