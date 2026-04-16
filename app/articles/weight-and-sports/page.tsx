import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '体が大きい子・小さい子に向いているスポーツはどれ？',
  description:
    '体格はスポーツ適性に関係する？体が大きい子・小さい子それぞれに向いているスポーツを、データと特性から解説します。',
  openGraph: {
    title: '体が大きい子・小さい子に向いているスポーツはどれ？',
    description:
      '体格はスポーツ適性に関係する？体が大きい子・小さい子それぞれに向いているスポーツを、データと特性から解説します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/weight-and-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '体が大きい子・小さい子に向いているスポーツはどれ？',
    images: ['/og-image.png'],
  },
};

export default function WeightAndSportsPage() {
  return (
    <ArticleLayout
      title="体が大きい子・小さい子に向いているスポーツはどれ？"
      heroImage="/images/articles/weight-and-sports.jpg"
      heroAlt="様々な体格の子どもたちがスポーツをしている様子"
      publishDate="2025年4月"
      tags={['体格', 'スポーツ適性', '子育て']}
      shareText="体が大きい子・小さい子、それぞれに向いているスポーツを解説。 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体格はスポーツ適性にどう影響する？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもの体格とスポーツ適性には確実な関連があります。ただし「今の体格」と「最終的な体格」は別物。親は現在の適性を活かしつつ、将来の可能性も見据える必要があります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">186cm</p>
            <p className="text-xs text-gray-600 mt-1">男子バレーボール平均身長</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">173cm</p>
            <p className="text-xs text-gray-600 mt-1">女子バレーボール平均身長</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">複数</p>
            <p className="text-xs text-gray-600 mt-1">体格に合うスポーツ</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">体格の影響を受けやすいスポーツ</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">大きく影響：</span>
              <span>バレーボール（身長優位）、体操（体が小さい方が有利）、相撲（体重で階級分け）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">中程度の影響：</span>
              <span>バスケ（身長有利だが技術で補える）、野球（位置による適性差）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">影響が少ない：</span>
              <span>卓球（技術が最重要）、サッカー（多様な体格で活躍可能）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体が大きい子に向いているスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          高身長、体重のある子どもには、身体サイズが有利に働くスポーツがあります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バレーボール</h3>
              <p className="text-sm text-gray-600">
                ネットの高さ（女子2.24m、男子2.43m）を超えてスパイクを打つために、身長が直接的に有利。男子平均186cm、女子平均173cmと、一般より大きい。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バスケットボール</h3>
              <p className="text-sm text-gray-600">
                ゴールの高さ（3.05m）に到達しやすい身長が有利。男子平均191cm、女子平均175cm。ただし、ガード（1番）ポジションなら小柄でも活躍可能。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">水泳</h3>
              <p className="text-sm text-gray-600">
                リーチ（腕の長さ）が長いほど水をかく距離が増え、効率的。身長より「上半身のリーチ」が重要。長身の子に有利。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔道・相撲</h3>
              <p className="text-sm text-gray-600">
                体重階級制があるため、同じ階級内では体が大きく筋肉量のある子が有利。ただし、全ての階級で活躍できるスポーツ。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ラグビー</h3>
              <p className="text-sm text-gray-600">
                フォワード（前列）ポジションでは体が大きいほど有利。タックル力、スクラムでの力が物を言う。ただし、バック（後列）では小柄でも活躍可能。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">体が大きい子のチェックポイント</p>
          <p className="text-sm text-blue-800">「身長が高い＝その競技に向いている」とは限りません。バレーボールに向く子は、身長以外にジャンプ力・敏捷性・判断力も備えている必要があります。体が大きいという利点を活かせるかは、本人の努力と指導次第です。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体が小さい子に向いているスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小柄な子どもにも、その身体特性を活かすスポーツが多くあります。むしろ、小さいことが大きな利点になる競技もあります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体操</h3>
              <p className="text-sm text-gray-600">
                体が小さく軽いほど、回転力が高く、着地の衝撃が小さい。重心が低いため、バランス感覚に有利。小柄な子の最大の適性競技。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">陸上短距離（100m～400m）</h3>
              <p className="text-sm text-gray-600">
                体が小さく軽いほど、体重に対する出力比が高い（パワー・ウエイト・レシオ）。実際、男子100m世界記録保持者の体重は約78kg。小柄でも活躍可能。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">サッカー</h3>
              <p className="text-sm text-gray-600">
                重心が低く、重心移動が小さいため敏捷性が高い。身長よりボール扱いの上手さが重要。多くのサッカー選手が平均身長より小柄。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">卓球・バドミントン</h3>
              <p className="text-sm text-gray-600">
                素早い反応と細かい動きが重要。体の大小より技術が全て。身長はほぼ影響しない。才能と努力が活躍を左右する競技。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バスケットボール（ガード）</h3>
              <p className="text-sm text-gray-600">
                ポイントガード（1番）は判断力とドリブル技術が最重要。身長が関係する競技でも、小柄でも活躍できるポジションがある。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">体が小さい子のメリット</p>
          <p className="text-sm text-blue-800">小柄な子どもは、身長が大きな要因にならないスポーツでは、むしろ有利な場合が多い。怪我のリスクも低く、長くスポーツを続けられる傾向がある。「体が小さい＝スポーツに向かない」は誤り。むしろ、その子に最適なスポーツを見つけることが大切です。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          今の体格だけで判断しないほうがいい理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもの体格は、成長に伴って劇的に変わります。現在の体格で「このスポーツは向かない」と判断することは危険です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">考え方</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">理由</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対策</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">成長速度は個人差が大きい</td>
                <td className="px-3 py-2 text-gray-600">同じ年齢でも身長が30cm以上違うことも</td>
                <td className="px-3 py-2 text-gray-600">現在の体格より「伸びしろ」を見る</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">骨年齢で予測可能</td>
                <td className="px-3 py-2 text-gray-600">最終身長は親の身長と骨年齢である程度予測可能</td>
                <td className="px-3 py-2 text-gray-600">骨密度検査で最終身長の目安を確認</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">今の苦手が将来の得意に</td>
                <td className="px-3 py-2 text-gray-600">バスケは小さいが、成長後に有利なポジションで活躍</td>
                <td className="px-3 py-2 text-gray-600">本人が続けたいなら、成長を見守る</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">技術で体格をカバー</td>
                <td className="px-3 py-2 text-gray-600">サッカーのドリブル、卓球の技術は体格に依存しない</td>
                <td className="px-3 py-2 text-gray-600">スポーツ選びで本人の努力を信じる</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体格より大切な「向いているか」の判断基準
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ適性を判断する際、体格よりも大切な要素があります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">本人が好きか</h3>
              <p className="text-sm text-gray-600">
                体格的に向いていても、興味がなければ続きません。逆に、体格的に向かなくても、情熱があれば工夫と努力で上達します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">基本的な体力がある</h3>
              <p className="text-sm text-gray-600">
                柔軟性、筋力、持久力などの基礎体力があれば、どのスポーツでも上達可能。体格より、これらの基礎の方が重要。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">協調性・判断力</h3>
              <p className="text-sm text-gray-600">
                チームスポーツでは、他者との関係構築能力が重要。個人スポーツでも、自己管理能力や判断力が成功を左右します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">長く続ける意思</h3>
              <p className="text-sm text-gray-600">
                才能より努力。初心者から始めて、数年の継続で上達する子も多い。短期的な適性判断は避けるべき。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：様々な体格に合ったスポーツがある
        </h2>
        <p className="text-gray-700 leading-relaxed">
          体の大きい子、小さい子、それぞれにぴったり合ったスポーツがあります。大切なのは「今の体格が向いているか」ではなく、「本人がそのスポーツを好きか」「長く続けたいか」です。体格的な制約がある競技でも、ポジションの工夫や技術の習得で活躍の道は開かれます。親として大事なのは、子どもの現在の体格を受け入れつつ、様々なスポーツを試す機会を与え、本人が心から楽しめるスポーツを一緒に探していくことです。
        </p>
      </div>
    </ArticleLayout>
  );
}
