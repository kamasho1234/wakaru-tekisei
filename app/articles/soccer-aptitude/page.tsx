import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'サッカーに向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもがサッカーに向いているかどうかの見極め方を、新体力テストデータを使って解説。持久力・敏捷性・瞬発力の目安値も紹介します。',
  openGraph: {
    title: 'サッカーに向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもがサッカーに向いているかどうかの見極め方を、新体力テストデータを使って解説。持久力・敏捷性・瞬発力の目安値も紹介します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/soccer-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サッカーに向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/og-image.png'],
  },
};

export default function SoccerAptitudePage() {
  return (
    <ArticleLayout
      title="サッカーに向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/soccer-aptitude.jpg"
      heroAlt="サッカーをしている子どもたち"
      publishDate="2025年4月"
      tags={['サッカー', '適性診断', '体力テスト']}
      shareText="サッカーに向いている子の特徴を体力データで解説。新体力テストとの関連も。 #子育て #サッカー少年団"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          サッカーに必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          サッカーは「フィールド全体を動き回る」スポーツです。単なる足の速さだけでなく、様々な体力要素がバランスよく必要になります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">35%</p>
            <p className="text-xs text-gray-600 mt-1">持久力</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">15%</p>
            <p className="text-xs text-gray-600 mt-1">筋力</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">持久力:</span>
              <span>試合全体(90分)を走り続けるために必須</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>相手との動きの中で素早く方向を変える</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>ボールを奪う瞬間のスピード</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">筋力:</span>
              <span>シュートの威力やヘッドの強さ</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          サッカーに向いている子の体力データには、いくつかの共通パターンがあります。新体力テストの各項目でどのような値が目安になるかを見てみましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する能力</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">持久力・敏捷性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">瞬発力</td>
                <td className="px-3 py-2 text-gray-600">全国平均より速い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">敏捷性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">下肢の瞬発力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">全身の筋力</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                サッカーは身長よりもスピードと俊敏性が重要です。小柄な子でも活躍できるスポーツです。ただし、足が長いと動きの効率が良い傾向にあります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                サッカーはチームスポーツ。コミュニケーション能力が高い子、周囲を見て判断できる子に向いています。個人プレーより連携プレーが好きな子が活躍します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                判断力が早い、走るのが好き、チームを大切にする、負けず嫌い、コミュニケーション好きなど。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">シャトルラン</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">50m走</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">反復横とび</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">35回以上</td>
                <td className="px-2 py-2 text-gray-600">10.5秒以内</td>
                <td className="px-2 py-2 text-gray-600">37.5回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">27.5回以上</td>
                <td className="px-2 py-2 text-gray-600">11.0秒以内</td>
                <td className="px-2 py-2 text-gray-600">35.5回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">51回以上</td>
                <td className="px-2 py-2 text-gray-600">9.6秒以内</td>
                <td className="px-2 py-2 text-gray-600">45回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">41.5回以上</td>
                <td className="px-2 py-2 text-gray-600">10.2秒以内</td>
                <td className="px-2 py-2 text-gray-600">43回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">70回以上</td>
                <td className="px-2 py-2 text-gray-600">8.9秒以内</td>
                <td className="px-2 py-2 text-gray-600">52回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">54.5回以上</td>
                <td className="px-2 py-2 text-gray-600">9.6秒以内</td>
                <td className="px-2 py-2 text-gray-600">49.5回以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          サッカーを始める適切な年齢
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          サッカーは、年長さん(5～6歳)から始めることができます。ただし、本格的にサッカーの技術を習得する適切な年齢は「8～10歳」です。この時期から入会することで、ゴールデンエイジを最大限に活かすことができます。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2">年齢別サッカー開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">3～5歳:</span>
              <span>親子でボール遊びを楽しむ程度。本格的な指導は不要</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">6～7歳:</span>
              <span>スクール入会も可能。ボール感覚の習得期</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">8～10歳:</span>
              <span>ゴールデンエイジ。チーム入会の最適時期。技術習得が効率的</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">11歳以上:</span>
              <span>既に基本技術を持つ子が活躍。初心者でも努力で上達可能</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          サッカーに向いている子は、持久力・敏捷性・瞬発力がバランスよく発達している子です。新体力テストのデータから、お子さんがサッカーに向いているかどうかを判断する手がかりが得られます。ただし、最も大切なのは「サッカーが好きかどうか」。データで適性を判断しつつ、お子さんの興味と意思を尊重して、スポーツ選びをしてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
