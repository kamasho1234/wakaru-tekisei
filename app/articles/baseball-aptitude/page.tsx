import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '野球に向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもが野球に向いているかどうかの見極め方を、新体力テストデータを使って解説。瞬発力・敏捷性・上半身筋力の目安値も紹介します。',
  openGraph: {
    title: '野球に向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもが野球に向いているかどうかの見極め方を、新体力テストデータを使って解説。瞬発力・敏捷性・上半身筋力の目安値も紹介します。',
    images: [{ url: '/images/articles/baseball-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/baseball-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/baseball-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '野球に向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/images/articles/baseball-aptitude.jpg'],
  },
};

export default function BaseballAptitudePage() {
  return (
    <ArticleLayout
      title="野球に向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/baseball-aptitude.jpg"
      heroAlt="野球をしている子どもたち"
      publishDate="2025年4月"
      slug="baseball-aptitude"
      description="子どもが野球に向いているかどうかの見極め方を、新体力テストデータを使って解説。瞬発力・敏捷性・上半身筋力の目安値も紹介します。"
      tags={['野球', '適性診断', '体力テスト']}
      shareText="野球に向いている子の特徴を体力データで解説。新体力テストとの関連も。 #子育て #少年野球"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          野球に必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          野球は「瞬間の爆発力」と「集中力の持続」が求められるスポーツです。打つ・投げる・走るという全身を使う動作が組み合わさっています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">40%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">20%</p>
            <p className="text-xs text-gray-600 mt-1">上半身筋力</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">15%</p>
            <p className="text-xs text-gray-600 mt-1">柔軟性</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>打撃・送球・スタートダッシュに必要な爆発的な力</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>打球への反応、盗塁のスタート判断、守備の動き出し</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">上半身筋力:</span>
              <span>投球スピード、打球の飛距離に直結する肩・腕の力</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">柔軟性:</span>
              <span>フォームの安定と怪我予防に必要な可動域</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          野球に向いている子の体力データには、いくつかの共通パターンがあります。新体力テストの各項目でどのような値が目安になるかを見てみましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する能力</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ソフトボール投げ</td>
                <td className="px-3 py-2 text-gray-600">肩の強さ・上半身筋力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">走塁・守備のスプリント</td>
                <td className="px-3 py-2 text-gray-600">全国平均より速い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">守備の敏捷性</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">打撃の爆発的下肢力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">バットグリップ・捕球力</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                野球はポジションによって求められる体格が異なります。投手・外野は長身が有利ですが、内野は俊敏さが重要で小柄でも活躍できます。体格よりも技術と瞬発力が重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                野球は「待つ」場面が多いスポーツ。集中力を長時間維持できる子が向いています。チームスポーツでありながら、打席や投球など一対一の場面が多く、個人の責任感も重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                集中力が高い、粘り強い、練習を積み重ねるのが好き、チームを大切にしつつ個人としても勝負できる、負けず嫌いなど。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">ソフトボール投げ</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">50m走</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">握力</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">16m以上</td>
                <td className="px-2 py-2 text-gray-600">10.5秒以内</td>
                <td className="px-2 py-2 text-gray-600">11kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">9m以上</td>
                <td className="px-2 py-2 text-gray-600">11.0秒以内</td>
                <td className="px-2 py-2 text-gray-600">10kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">22m以上</td>
                <td className="px-2 py-2 text-gray-600">9.6秒以内</td>
                <td className="px-2 py-2 text-gray-600">15kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">13m以上</td>
                <td className="px-2 py-2 text-gray-600">10.2秒以内</td>
                <td className="px-2 py-2 text-gray-600">13kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">28m以上</td>
                <td className="px-2 py-2 text-gray-600">8.9秒以内</td>
                <td className="px-2 py-2 text-gray-600">20kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">16m以上</td>
                <td className="px-2 py-2 text-gray-600">9.6秒以内</td>
                <td className="px-2 py-2 text-gray-600">17kg以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          野球を始める適切な年齢
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          野球は5〜6歳からキャッチボールなどの基礎を楽しめます。少年野球チームへの本格入団は小学1〜2年生から可能ですが、8〜10歳がゴールデンエイジを活かした技術習得の最適期です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">年齢別野球開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">3〜5歳:</span>
              <span>ボール遊びで動体視力と手と目の協調性を養う</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">6〜7歳:</span>
              <span>キャッチボール・ティーバッティングで基礎動作を習得</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">8〜10歳:</span>
              <span>ゴールデンエイジ。フォームの基礎を固める最適期</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">11歳以上:</span>
              <span>体力が上がり戦術理解も深まる。技術の上積みの時期</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          野球に向いている子は、瞬発力・敏捷性・上半身筋力が発達している子です。体格よりも技術と集中力が重視されるため、体型を問わず活躍できる魅力があります。新体力テストのデータを参考にしながら、お子さんの「野球が好き」という気持ちを最優先にスポーツ選びをしてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
