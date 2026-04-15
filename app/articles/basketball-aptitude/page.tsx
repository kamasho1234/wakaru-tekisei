import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'バスケットボールに向いている子の特徴|敏捷性と瞬発力で見る適性',
  description:
    '子どもがバスケットボールに向いているかどうかを、反復横とびや50m走のデータから解説。身長以外の重要な要素も紹介します。',
  openGraph: {
    title: 'バスケットボールに向いている子の特徴|敏捷性と瞬発力で見る適性',
    description:
      '子どもがバスケットボールに向いているかどうかを、反復横とびや50m走のデータから解説。身長以外の重要な要素も紹介します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/basketball-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バスケットボールに向いている子の特徴|敏捷性と瞬発力で見る適性',
    images: ['/og-image.png'],
  },
};

export default function BasketballAptitudePage() {
  return (
    <ArticleLayout
      title="バスケットボールに向いている子の特徴|敏捷性と瞬発力で見る適性"
      heroImage="/images/articles/basketball-aptitude.jpg"
      heroAlt="バスケットボールをしている子どもたち"
      publishDate="2025年4月"
      tags={['バスケットボール', '適性診断', '習い事']}
      shareText="バスケに向いている子の特徴は身長だけじゃない!敏捷性・瞬発力データで徹底解説。 #バスケ #子育て"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          バスケットボールに必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「バスケは背の高い子がやるもの」と思っていませんか？実は、バスケットボールに最も必要なのは身長ではなく、敏捷性と瞬発力です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">30%</p>
            <p className="text-xs text-gray-600 mt-1">敏捷性</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">持久力</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">20%</p>
            <p className="text-xs text-gray-600 mt-1">筋力</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">バスケに必要な動きの特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">敏捷性:</span>
              <span>相手ディフェンダーをかわしながら素早く方向転換</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>ジャンプ力でシュート、ディフェンスをかいくぐる</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">持久力:</span>
              <span>試合全体(40分)を全力で動き続ける</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          「身長が高い子が有利」は本当か?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          確かに、身長があるとシューティングやリバウンドで有利です。しかし、プロバスケで活躍する選手には、身長よりもスピードと敏捷性に優れた選手が多いです。
        </p>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-3">身長の影響の現実</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">小柄でも活躍:</span>
              <span>敏捷性が高い選手は、身長が低くても相手を翻弄できる</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">身長は武器:</span>
              <span>身長があっても動きが遅いと、バスケの適性は低い</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">ポジション別:</span>
              <span>ガード(小さい/速い) vs センター(大きい/強い)と役割が異なる</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          向いている子の体力データ目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">バスケとの関連</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">敏捷性(最も重要)</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">ジャンプ力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">瞬発力・スピード</td>
                <td className="px-3 py-2 text-gray-600">全国平均より速い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">持久力</td>
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

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">バスケ適性の判定ポイント</p>
          <p className="text-sm text-orange-800">
            反復横とびの成績が全国平均以上なら、敏捷性に優れています。加えて、50m走が速く、立ち幅跳びが高ければ、バスケに向いている可能性が高いです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          バスケ技術習得に向いているタイプ
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格タイプ</h3>
              <p className="text-sm text-gray-600">
                小柄でもいい。スピード感のある子、ジャンプ力のある子が有利。身長よりも「動きの質」が重要。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格タイプ</h3>
              <p className="text-sm text-gray-600">
                判断が早い、反応が速い、チームプレーを楽しめる、負けず嫌い。個人プレーより、チーム内での連携を重視する子。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ポジション別の向き</h3>
              <p className="text-sm text-gray-600">
                ガード(小さくて速い) → 敏捷性重視。フォワード(中くらい) → バランス重視。センター(大きい) → 身長とパワー重視。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          バスケを始める年齢のポイント
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          バスケットボール教室は、年長さん(5～6歳)から受け付けているところが多いです。ただし、本格的にスキルを習得する適切な年齢は「8～10歳」です。
        </p>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">年齢別バスケ開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">5～7歳:</span>
              <span>ドリブルなど基本のボール扱いを習得</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">8～10歳:</span>
              <span>ゴールデンエイジ。ドリブル、シュート、ディフェンスの技術習得が最速</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">11歳以上:</span>
              <span>試合経験を増やし、チーム戦術の理解を深める</span>
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
          バスケットボールに向いている子の第一条件は「敏捷性と瞬発力がある子」です。身長は補助的な要素に過ぎません。新体力テストのデータから、お子さんがバスケに向いているかどうかを判断する参考にしてください。ただし、最も大切なのは「本人がバスケをやりたいという気持ち」です。
        </p>
      </div>
    </ArticleLayout>
  );
}
