import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '50m走が速い子の特徴と走力を伸ばす方法|新体力テストから読み解く瞬発力',
  description:
    '50m走のタイムと子どもの運動適性の関係を解説。走力を伸ばすためのポイントと、走ることが得意な子に向いているスポーツを紹介します。',
  openGraph: {
    title: '50m走が速い子の特徴と走力を伸ばす方法|新体力テストから読み解く瞬発力',
    description:
      '50m走のタイムと子どもの運動適性の関係を解説。走力を伸ばすためのポイントと、走ることが得意な子に向いているスポーツを紹介します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/speed-running',
  },
  twitter: {
    card: 'summary_large_image',
    title: '50m走が速い子の特徴と走力を伸ばす方法|新体力テストから読み解く瞬発力',
    images: ['/og-image.png'],
  },
};

export default function SpeedRunningPage() {
  return (
    <ArticleLayout
      title="50m走が速い子の特徴と走力を伸ばす方法|新体力テストから読み解く瞬発力"
      heroImage="/images/hero-running.jpg"
      heroAlt="走っている子ども"
      publishDate="2025年4月"
      tags={['50m走', '瞬発力', '体力テスト']}
      shareText="50m走が速い子どもの特徴と、走力をさらに伸ばすポイントを解説! #陸上 #子育て #新体力テスト"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          50m走と新体力テストにおける位置づけ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          50m走は、新体力テスト8種目の中でも最もシンプルで、運動適性がわかりやすく出る種目です。この一つのテストから、子どもの瞬発力と、向いているスポーツが見えてきます。
        </p>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100 mb-6">
          <p className="font-bold text-yellow-900 mb-2">50m走が測定する能力</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>最初の数秒で全力を出すパワー</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">走行技術:</span>
              <span>腕振り、足の接地、バランスの効率性</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">下肢の筋力:</span>
              <span>足を前に進める力</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">神経系の発達:</span>
              <span>脳から脚への素早い指令</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          全国平均タイム一覧
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんのタイムが平均と比べてどの位置にいるか、確認してみましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">男子平均</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">女子平均</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">6歳</td>
                <td className="px-2 py-2 text-gray-600">11.7秒</td>
                <td className="px-2 py-2 text-gray-600">12.0秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">7歳</td>
                <td className="px-2 py-2 text-gray-600">11.1秒</td>
                <td className="px-2 py-2 text-gray-600">11.5秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳</td>
                <td className="px-2 py-2 text-gray-600">10.5秒</td>
                <td className="px-2 py-2 text-gray-600">11.0秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">9歳</td>
                <td className="px-2 py-2 text-gray-600">10.0秒</td>
                <td className="px-2 py-2 text-gray-600">10.6秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳</td>
                <td className="px-2 py-2 text-gray-600">9.6秒</td>
                <td className="px-2 py-2 text-gray-600">10.2秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">11歳</td>
                <td className="px-2 py-2 text-gray-600">9.2秒</td>
                <td className="px-2 py-2 text-gray-600">9.8秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳</td>
                <td className="px-2 py-2 text-gray-600">8.9秒</td>
                <td className="px-2 py-2 text-gray-600">9.6秒</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-2">タイムの見方</p>
          <p className="text-sm text-yellow-800">
            平均より0.5秒速い子は、その年代の中で上位15%程度の走力があります。1秒以上速い子は、陸上競技への適性が高い可能性があります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          速い子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">立ち幅跳びも高い</h3>
              <p className="text-sm text-gray-600">
                50m走が速い子は、立ち幅跳びでも高い成績を出す傾向があります。これは下肢の瞬発力が優れているから。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">反復横とびでも良い成績</h3>
              <p className="text-sm text-gray-600">
                敏捷性と瞬発力は相関があります。50m走が速い子は、反復横とびでも平均以上のことが多いです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">走る姿勢が良い</h3>
              <p className="text-sm text-gray-600">
                体幹がしっかりしており、腕振りがスムーズ。効率的に力を前に伝える動作ができています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">神経系の発達が進んでいる</h3>
              <p className="text-sm text-gray-600">
                脳から脚への指令が正確で素早い。この能力はゴールデンエイジに発達が加速します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          走力が高い子に向いているスポーツ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
            <h3 className="font-bold text-yellow-900 mb-2">最適なスポーツ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>陸上競技(短距離)</span>
              </li>
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>サッカー</span>
              </li>
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>バスケットボール</span>
              </li>
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>ラグビー</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
            <h3 className="font-bold text-yellow-900 mb-2">相性の良いスポーツ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>テニス</span>
              </li>
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>バドミントン</span>
              </li>
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>卓球</span>
              </li>
              <li className="text-sm text-yellow-800 flex gap-2">
                <span className="font-bold">-</span>
                <span>ダンス</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          走力を伸ばすためのポイント3つ
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">正しい姿勢を意識させる</h3>
              <p className="text-sm text-gray-600">
                背筋をまっすぐに保ち、視線は遠く、肩の力を抜く。正しい姿勢は、効率的な走りを可能にします。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">腕振りを意識させる</h3>
              <p className="text-sm text-gray-600">
                腕振りが速いと脚の回転も速くなります。肘を後ろに強く引く動作が重要。肩からの大きな腕振りを心がけさせましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">足の接地を意識させる</h3>
              <p className="text-sm text-gray-600">
                かかとからの接地よりも、足の中心(中足部)で接地する方が効率的です。正しい接地パターンを習得すれば、タイムは大幅に短縮します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          50m走のタイムは、子どもの瞬発力と走力を測定する優れた指標です。走力が高い子には、様々なスポーツの選択肢があります。新体力テストの結果を参考にしながら、お子さんの興味と適性に合ったスポーツを見つけることが大切です。
        </p>
      </div>
    </ArticleLayout>
  );
}
