import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'バレーボールに向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもがバレーボールに向いているかどうかの見極め方を、新体力テストデータを使って解説。ジャンプ力・持久力・敏捷性の目安値も紹介します。',
  openGraph: {
    title: 'バレーボールに向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもがバレーボールに向いているかどうかの見極め方を、新体力テストデータを使って解説。ジャンプ力・持久力・敏捷性の目安値も紹介します。',
    images: [{ url: '/images/articles/volleyball-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/volleyball-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/volleyball-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バレーボールに向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/images/articles/volleyball-aptitude.jpg'],
  },
};

export default function VolleyballAptitudePage() {
  return (
    <ArticleLayout
      title="バレーボールに向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/volleyball-aptitude.jpg"
      heroAlt="バレーボールをしている子どもたち"
      publishDate="2025年4月"
      slug="volleyball-aptitude"
      description="子どもがバレーボールに向いているかどうかの見極め方を、新体力テストデータを使って解説。ジャンプ力・持久力・敏捷性の目安値も紹介します。"
      tags={['バレーボール', '適性診断', '体力テスト']}
      shareText="バレーボールに向いている子の特徴を体力データで解説。 #子育て #バレーボール"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          バレーボールに必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          バレーボールは「高さ」と「瞬発力」が勝負を決めるスポーツです。スパイクやブロックのジャンプ力、レシーブ時の素早い反応が求められます。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">35%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">身長・ジャンプ力</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">持久力</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">15%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>スパイク・ブロック・レシーブなど瞬間の爆発的な動き</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">身長・ジャンプ力:</span>
              <span>ネット越しの攻防で有利になる高さ</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">持久力:</span>
              <span>長いセットを通じて動き続けるための体力</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>レシーブのためにコートを素早くカバーする力</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する能力</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">ジャンプ力（スパイク・ブロック）</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">レシーブの敏捷性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">長いゲームへの持久力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">スパイクの威力</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">ボールへの反応速度</td>
                <td className="px-3 py-2 text-gray-600">全国平均以内</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                身長が高くジャンプ力がある子がスパイカー・ブロッカーとして有利です。小柄な子はリベロ（守備専門）として活躍できます。将来的に背が伸びる可能性がある子は積極的に挑戦してみましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                バレーボールは6人制のチームスポーツです。声を出してコミュニケーションを取れる子、仲間と連携するのが好きな子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                声が大きい、チームワーク重視、瞬時の判断が得意、俯瞰的に状況を見られる、コミュニケーションが得意なタイプ。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">立ち幅跳び</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">反復横とび</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">シャトルラン</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">130cm以上</td>
                <td className="px-2 py-2 text-gray-600">37回以上</td>
                <td className="px-2 py-2 text-gray-600">35回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">118cm以上</td>
                <td className="px-2 py-2 text-gray-600">35回以上</td>
                <td className="px-2 py-2 text-gray-600">27回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">152cm以上</td>
                <td className="px-2 py-2 text-gray-600">45回以上</td>
                <td className="px-2 py-2 text-gray-600">51回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">143cm以上</td>
                <td className="px-2 py-2 text-gray-600">43回以上</td>
                <td className="px-2 py-2 text-gray-600">41回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">175cm以上</td>
                <td className="px-2 py-2 text-gray-600">52回以上</td>
                <td className="px-2 py-2 text-gray-600">70回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">162cm以上</td>
                <td className="px-2 py-2 text-gray-600">49回以上</td>
                <td className="px-2 py-2 text-gray-600">54回以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          バレーボールを始める適切な年齢
        </h2>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">年齢別バレーボール開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">6〜7歳:</span>
              <span>風船やビーチボールでボール感覚を養う段階</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">8〜9歳:</span>
              <span>パス・サーブの基礎を習得。ミニバレーからスタートが理想的</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">10〜12歳:</span>
              <span>身長が伸び始める時期。スパイクやブロックに取り組む最適期</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">中学生以降:</span>
              <span>本格的な6人制。ポジション適性が明確になる時期</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          バレーボールに向いている子は、瞬発力・ジャンプ力・持久力がバランスよく発達しており、チームワークを大切にできる子です。身長が高い子はスパイカーとして、敏捷性が高い小柄な子はリベロとして活躍できます。お子さんの体力特性と興味を見ながら、適切な時期にスタートしてみてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
