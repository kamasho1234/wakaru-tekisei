import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '卓球に向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもが卓球に向いているかどうかの見極め方を、新体力テストデータを使って解説。反応速度・敏捷性・眼と手の協調の目安値も紹介します。',
  openGraph: {
    title: '卓球に向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもが卓球に向いているかどうかの見極め方を、新体力テストデータを使って解説。反応速度・敏捷性・眼と手の協調の目安値も紹介します。',
    images: [{ url: '/images/articles/table-tennis-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/table-tennis-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/table-tennis-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '卓球に向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/images/articles/table-tennis-aptitude.jpg'],
  },
};

export default function TableTennisAptitudePage() {
  return (
    <ArticleLayout
      title="卓球に向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/table-tennis-aptitude.jpg"
      heroAlt="卓球をしている子どもたち"
      publishDate="2025年4月"
      slug="table-tennis-aptitude"
      description="子どもが卓球に向いているかどうかの見極め方を、新体力テストデータを使って解説。反応速度・敏捷性・眼と手の協調の目安値も紹介します。"
      tags={['卓球', '適性診断', '体力テスト']}
      shareText="卓球に向いている子の特徴を体力データで解説。 #子育て #卓球"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          卓球に必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          卓球は「世界最速の球技」とも呼ばれます。秒速で飛んでくるボールに反応する瞬間的な判断力と、素早いフットワークが最も重要なスポーツです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">40%</p>
            <p className="text-xs text-gray-600 mt-1">反応速度</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">30%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">20%</p>
            <p className="text-xs text-gray-600 mt-1">眼と手の協調</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">10%</p>
            <p className="text-xs text-gray-600 mt-1">持久力</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">反応速度:</span>
              <span>0.1秒以下で飛んでくるボールへの瞬間的な判断と動き出し</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>フットワークでボールに正確に体を合わせる素早い動き</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">眼と手の協調:</span>
              <span>動体視力と手の動きを一致させてボールをコントロールする能力</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">持久力:</span>
              <span>長い試合・多球練習を続けるための体力</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する能力</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">フットワークの敏捷性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">瞬発力・スタートダッシュ</td>
                <td className="px-3 py-2 text-gray-600">全国平均より速い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">ラケットコントロール</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">上体起こし</td>
                <td className="px-3 py-2 text-gray-600">体幹の安定・回転動作</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">長座体前屈</td>
                <td className="px-3 py-2 text-gray-600">低い姿勢での動作の柔軟性</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                卓球は体格に関係なく活躍できるスポーツです。伊藤美誠選手や平野美宇選手のように小柄でも世界トップで活躍できます。むしろ重心が低い小柄な選手は安定したフットワークが取りやすい面があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                反応が速い子、細かな技術の習得が好きな子に向いています。1ポイントごとに考えながら戦う頭脳戦が得意な子も活躍しやすいスポーツです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                反応が速い、集中力が高い、細かな技術を磨くのが好き、一人での練習を続けられる、頭脳的な駆け引きが楽しいと感じるタイプ。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">反復横とび</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">50m走</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">握力</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">38回以上</td>
                <td className="px-2 py-2 text-gray-600">10.3秒以内</td>
                <td className="px-2 py-2 text-gray-600">11kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">36回以上</td>
                <td className="px-2 py-2 text-gray-600">10.8秒以内</td>
                <td className="px-2 py-2 text-gray-600">10kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">46回以上</td>
                <td className="px-2 py-2 text-gray-600">9.4秒以内</td>
                <td className="px-2 py-2 text-gray-600">15kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">44回以上</td>
                <td className="px-2 py-2 text-gray-600">10.0秒以内</td>
                <td className="px-2 py-2 text-gray-600">13kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">53回以上</td>
                <td className="px-2 py-2 text-gray-600">8.7秒以内</td>
                <td className="px-2 py-2 text-gray-600">20kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">50回以上</td>
                <td className="px-2 py-2 text-gray-600">9.4秒以内</td>
                <td className="px-2 py-2 text-gray-600">17kg以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          卓球を始める適切な年齢
        </h2>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">年齢別卓球開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">5〜6歳:</span>
              <span>風船・スポンジボールで反応速度と手と目の協調を養う</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">7〜8歳:</span>
              <span>ラケットを持ち始める時期。フォームの基礎を習得</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">9〜10歳:</span>
              <span>ゴールデンエイジ。サーブ・フットワーク・技術を体得しやすい最適期</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">11歳以上:</span>
              <span>戦術理解が深まり試合での駆け引きを学ぶ時期</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          卓球に向いている子は、反応速度・敏捷性が高く、細かな技術の習得を楽しめる子です。体格を問わず活躍できるため、体が小さくて他のスポーツで悩んでいる子にもぜひ試してほしいスポーツです。お子さんの「速い動きが好き」「頭を使うのが楽しい」という特性を活かしてみてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
