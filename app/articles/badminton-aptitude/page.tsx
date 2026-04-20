import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'バドミントンに向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもがバドミントンに向いているかどうかの見極め方を、新体力テストデータを使って解説。敏捷性・瞬発力・持久力の目安値も紹介します。',
  openGraph: {
    title: 'バドミントンに向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもがバドミントンに向いているかどうかの見極め方を、新体力テストデータを使って解説。敏捷性・瞬発力・持久力の目安値も紹介します。',
    images: [{ url: '/images/articles/badminton-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/badminton-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/badminton-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バドミントンに向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/images/articles/badminton-aptitude.jpg'],
  },
};

export default function BadmintonAptitudePage() {
  return (
    <ArticleLayout
      title="バドミントンに向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/badminton-aptitude.jpg"
      heroAlt="バドミントンをしている子どもたち"
      publishDate="2025年4月"
      slug="badminton-aptitude"
      description="子どもがバドミントンに向いているかどうかの見極め方を、新体力テストデータを使って解説。敏捷性・瞬発力・持久力の目安値も紹介します。"
      tags={['バドミントン', '適性診断', '体力テスト']}
      shareText="バドミントンに向いている子の特徴を体力データで解説。 #子育て #バドミントン"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          バドミントンに必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          バドミントンのシャトルは最大時速300kmを超える「最速の球技」です。コート全面を素早くカバーする敏捷性と、長いラリーを続ける持久力が求められます。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">40%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">30%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">20%</p>
            <p className="text-xs text-gray-600 mt-1">持久力</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">10%</p>
            <p className="text-xs text-gray-600 mt-1">腕の柔軟性</p>
          </div>
        </div>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 mb-6">
          <p className="font-bold text-sky-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>コートの四隅まで素早く動いてシャトルを追う力</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>スマッシュの踏み込みやネット前への飛び込み動作</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">持久力:</span>
              <span>長いゲームを通じて動き続けるための有酸素能力</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">腕の柔軟性:</span>
              <span>多彩なショットを打つための手首・肘の可動域</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-100">
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
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">爆発的な移動速度</td>
                <td className="px-3 py-2 text-gray-600">全国平均より速い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">長いゲームへの持久力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">ネット前飛び込みの瞬発力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">長座体前屈</td>
                <td className="px-3 py-2 text-gray-600">広い可動域でのショット</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                身長は特に問いません。腕が長いとリーチが広くなりますが、小柄でも素早いフットワークで補えます。桃田賢斗選手のように標準体型でも世界チャンピオンになれるスポーツです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                素早い判断が得意な子、集中力を切らさずに練習を続けられる子に向いています。シングルスは個人戦、ダブルスはパートナーとの連携が求められるため、両方の適性に対応できます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                素早い判断が好き、丁寧に技術を磨ける、連続した動きが苦にならない、パートナーとの連携を楽しめるなど。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">反復横とび</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">50m走</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">シャトルラン</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">38回以上</td>
                <td className="px-2 py-2 text-gray-600">10.3秒以内</td>
                <td className="px-2 py-2 text-gray-600">36回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">36回以上</td>
                <td className="px-2 py-2 text-gray-600">10.8秒以内</td>
                <td className="px-2 py-2 text-gray-600">28回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">46回以上</td>
                <td className="px-2 py-2 text-gray-600">9.4秒以内</td>
                <td className="px-2 py-2 text-gray-600">52回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">44回以上</td>
                <td className="px-2 py-2 text-gray-600">10.0秒以内</td>
                <td className="px-2 py-2 text-gray-600">42回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">53回以上</td>
                <td className="px-2 py-2 text-gray-600">8.7秒以内</td>
                <td className="px-2 py-2 text-gray-600">71回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">50回以上</td>
                <td className="px-2 py-2 text-gray-600">9.4秒以内</td>
                <td className="px-2 py-2 text-gray-600">55回以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          バドミントンを始める適切な年齢
        </h2>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
          <p className="font-bold text-sky-900 mb-2">年齢別バドミントン開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">5〜6歳:</span>
              <span>風船やスポンジシャトルで打つ楽しさを体験</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">7〜8歳:</span>
              <span>ジュニア用ラケットでラリーの基礎とフットワークを習得</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">9〜10歳:</span>
              <span>ゴールデンエイジ。スマッシュ・ドロップなど技術の幅を広げる最適期</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">11歳以上:</span>
              <span>体力が増し本格的な試合形式での強化が可能</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          バドミントンに向いている子は、敏捷性・瞬発力が高く、素早い判断を楽しめる子です。体格を問わず活躍できるため、多くのお子さんに挑戦してほしいスポーツです。新体力テストのデータを参考にしながら、お子さんの「動くのが好き」「速い動きが楽しい」という特性を活かしてみてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
