import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'テニスに向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもがテニスに向いているかどうかの見極め方を、新体力テストデータを使って解説。敏捷性・持久力・瞬発力の目安値も紹介します。',
  openGraph: {
    title: 'テニスに向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもがテニスに向いているかどうかの見極め方を、新体力テストデータを使って解説。敏捷性・持久力・瞬発力の目安値も紹介します。',
    images: [{ url: '/images/articles/tennis-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/tennis-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/tennis-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'テニスに向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/images/articles/tennis-aptitude.jpg'],
  },
};

export default function TennisAptitudePage() {
  return (
    <ArticleLayout
      title="テニスに向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/tennis-aptitude.jpg"
      heroAlt="テニスをしている子どもたち"
      publishDate="2025年4月"
      slug="tennis-aptitude"
      description="子どもがテニスに向いているかどうかの見極め方を、新体力テストデータを使って解説。敏捷性・持久力・瞬発力の目安値も紹介します。"
      tags={['テニス', '適性診断', '体力テスト']}
      shareText="テニスに向いている子の特徴を体力データで解説。新体力テストとの関連も。 #子育て #テニス"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          テニスに必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          テニスは「コート全面を素早くカバーする」スポーツです。長いラリーに耐える持久力と、ボールに反応する敏捷性・瞬発力がバランスよく求められます。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">35%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">持久力</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">15%</p>
            <p className="text-xs text-gray-600 mt-1">上半身筋力</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100 mb-6">
          <p className="font-bold text-yellow-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>コートの端から端まで素早く移動してボールを追う力</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">持久力:</span>
              <span>長いラリーや複数セットの試合を通じて動き続ける力</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>ボールが来た瞬間に素早く反応してラケットを振る力</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">上半身筋力:</span>
              <span>サーブの威力やスマッシュに必要な肩・腕の力</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する能力</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">コートカバーの敏捷性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">長いラリーへの持久力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">スプリント能力</td>
                <td className="px-3 py-2 text-gray-600">全国平均より速い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ソフトボール投げ</td>
                <td className="px-3 py-2 text-gray-600">サーブ・スマッシュ威力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">長座体前屈</td>
                <td className="px-3 py-2 text-gray-600">フォームの安定・怪我予防</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                身長が高いとサーブで有利ですが、テニスは小柄でも俊敏性でカバーできます。腕が長いと届く範囲が広がります。体格よりもフットワークと動体視力が勝負を左右します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                テニスは個人競技のため、精神的な強さが重要です。ミスをすぐに切り替えられる子、一人で集中して練習を続けられる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                集中力が高い、メンタルが強い、一人での勝負が好き、戦略を考えるのが楽しい、粘り強く練習できるなど。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">反復横とび</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">シャトルラン</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">50m走</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">37回以上</td>
                <td className="px-2 py-2 text-gray-600">35回以上</td>
                <td className="px-2 py-2 text-gray-600">10.5秒以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">35回以上</td>
                <td className="px-2 py-2 text-gray-600">27回以上</td>
                <td className="px-2 py-2 text-gray-600">11.0秒以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">45回以上</td>
                <td className="px-2 py-2 text-gray-600">51回以上</td>
                <td className="px-2 py-2 text-gray-600">9.6秒以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">43回以上</td>
                <td className="px-2 py-2 text-gray-600">41回以上</td>
                <td className="px-2 py-2 text-gray-600">10.2秒以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">52回以上</td>
                <td className="px-2 py-2 text-gray-600">70回以上</td>
                <td className="px-2 py-2 text-gray-600">8.9秒以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">49回以上</td>
                <td className="px-2 py-2 text-gray-600">54回以上</td>
                <td className="px-2 py-2 text-gray-600">9.6秒以内</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          テニスを始める適切な年齢
        </h2>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-2">年齢別テニス開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">4〜5歳:</span>
              <span>スポンジボールやミニラケットで感覚を養う</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">6〜7歳:</span>
              <span>ジュニア用ラケット・短いコートでラリーの基礎を習得</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">8〜10歳:</span>
              <span>ゴールデンエイジ。フォームとフットワークを固める最適期</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">11歳以上:</span>
              <span>本格的なフォームで戦術を磨く時期。メンタル強化も重要</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          テニスに向いている子は、敏捷性・持久力・瞬発力がバランスよく発達している子です。個人競技のため精神的な強さも重要な要素です。新体力テストのデータを参考にしながら、お子さんが「テニスが好き」と感じているかどうかを最優先にスポーツ選びをしてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
