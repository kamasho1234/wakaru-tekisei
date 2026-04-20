import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツの「晩成型」とは？子どもの成長を焦らなくていい理由',
  description:
    '小学生のうちに活躍できなくても大丈夫。晩成型アスリートの例と、子どもの成長を長期的に見守るための親の心構えを解説します。',
  openGraph: {
    title: 'スポーツの「晩成型」とは？子どもの成長を焦らなくていい理由',
    description:
      '小学生のうちに活躍できなくても大丈夫。晩成型アスリートの例と、子どもの成長を長期的に見守るための親の心構えを解説します。',
    images: [{ url: '/images/articles/late-bloomer-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/late-bloomer-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/late-bloomer-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツの「晩成型」とは？子どもの成長を焦らなくていい理由',
    images: ['/images/articles/late-bloomer-sports.jpg'],
  },
};

export default function LateBloomerSportsPage() {
  return (
    <ArticleLayout
      title="スポーツの「晩成型」とは？子どもの成長を焦らなくていい理由"
      heroImage="/images/articles/late-bloomer-sports.jpg"
      heroAlt="様々な年齢の子どもたちがスポーツを楽しんでいる様子"
      publishDate="2025年4月"
      slug="late-bloomer-sports"
      description="小学生のうちに活躍できなくても大丈夫。晩成型アスリートの例と、子どもの成長を長期的に見守るための親の心構えを解説します。"
      tags={['晩成型', 'スポーツ', '子育て']}
      shareText="子どものスポーツ、小学生で活躍できなくても大丈夫な理由。晩成型の力を解説。 #子育て #スポーツ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          晩成型アスリートとは？有名な例
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「晩成型アスリート」とは、子どもの頃は目立たない成績だったのに、中学～高校以降に急速に成長し、一流選手になる人のことです。多くの有名選手が、実は小学生の頃は活躍していません。子どものうちの活躍が全てではないのです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">12歳</p>
            <p className="text-xs text-gray-600 mt-1">フェデラー転機</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">落選</p>
            <p className="text-xs text-gray-600 mt-1">ジョーダン高2</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">40%+</p>
            <p className="text-xs text-gray-600 mt-1">別スポーツへ</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">有名な晩成型アスリート</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">ロジャー・フェデラー（テニス）:</span>
              <span>12歳まで普通の選手。18歳でプロ転向後、20代で世界トップに</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">マイケル・ジョーダン（バスケ）:</span>
              <span>高校2年時にバーシティチームの選考から落選。その後NBA最高選手に</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">本田圭佑（サッカー）:</span>
              <span>小学時代は特に目立たず。中学以降に急速に成長</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          「相対年齢効果」が生む誤解
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ学年でも、生まれ月によって体の大きさ・発達段階が異なります。特に4～6月生まれ（学年の早生まれ）の子どもは、身体が大きく発達が進んでいるため、幼少期のスポーツで有利になります。一方、1～3月生まれの子どもは、同じ学年でも最大12ヶ月の発達差があります。これが「相対年齢効果」です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">生まれ月</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">小学1年時の発達差</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">スポーツでの優位性</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">4月～6月（早生まれ）</td>
                <td className="px-3 py-2 text-gray-600">最も発達進行</td>
                <td className="px-3 py-2 text-gray-600">小学低学年で有利</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">1月～3月（遅生まれ）</td>
                <td className="px-3 py-2 text-gray-600">最も発達遅行</td>
                <td className="px-3 py-2 text-gray-600">小学低学年で不利</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">発達差</td>
                <td className="px-3 py-2 text-gray-600">最大12ヶ月</td>
                <td className="px-3 py-2 text-gray-600">中学以降は消滅</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          重要なのは、この相対年齢効果は小学生のうちだけです。中学以降は消滅します。つまり、小学生のうちに活躍できなかった遅生まれの子どもが、中学以降に大きく伸びることはよくあるのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          ゴールデンエイジだけが全てではない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「ゴールデンエイジ（9～12歳）は技術習得の黄金期」という話をよく聞きます。確かに、この時期は技術を習得しやすいのですが、それが「全てではない」ということが重要です。Long-Term Athlete Development（LTAD）理論では、子どもの発達段階は複数あります。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">LTADモデル（Balyi理論）</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">9～12歳（ゴールデンエイジ）:</span>
              <span>技術習得の黄金期。基本技術を身につけやすい</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">13～15歳（ポスト・ゴールデンエイジ）:</span>
              <span>体力・戦術理解が大きく伸びる。この時期の成長が決定的</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">16歳以上（専門化段階）:</span>
              <span>特定のスポーツに特化。身体の完成度が上がる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">推奨方針:</span>
              <span>14歳までの本格的な専門化は避け、複数スポーツの経験を推奨</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、9～12歳で活躍できなかったからといって、その子どもの運動人生が終わりではなく、むしろ13～15歳での成長の方が、長期的な競技成績に関係しているのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          晩成型の子どもが持つ強み
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">精神的な成熟</h3>
              <p className="text-sm text-gray-600">
                小学生のうちに活躍できず、努力を続けた経験は、精神的なタフネスを育てる。失敗から学ぶ力が強い
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">複数スポーツの経験</h3>
              <p className="text-sm text-gray-600">
                一つのスポーツで活躍できない期間に、複数のスポーツを試す。これが多角的な身体能力を育てる
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">驚異的な成長率</h3>
              <p className="text-sm text-gray-600">
                13～15歳での成長段階で、一気に追い上げることができる。爆発的な成長の可能性
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">怪我が少ない</h3>
              <p className="text-sm text-gray-600">
                幼少期の過度な専門化を避けているため、オーバーユース症候群のリスクが低い
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          親が長期的に見守るための心構え
        </h2>

        <div className="space-y-3 mb-6">
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-amber-900">今の成績で判断しない:</span> 小学生の成績は、相対年齢効果や発達段階による差が大きい。長期的な見方をする
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-amber-900">焦って専門化させない:</span> 14歳までは複数スポーツの経験を推奨。一つのスポーツだけは、後の怪我リスクになる
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-amber-900">努力の過程を褒める:</span> 結果より「頑張ってる姿勢」を褒める。内発的動機付けが、後の成長を支える
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-amber-900">中学～高校の成長に期待:</span> この時期の発達が、長期的な適性を決める。焦らず見守る
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ：今できないことを焦る必要はない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学生で活躍できなくても大丈夫です。多くの一流アスリートが、子どもの頃は平凡でした。重要なのは「スポーツが好きか」「努力を続けられるか」という姿勢です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          相対年齢効果は中学以降に消滅し、ゴールデンエイジ後の成長（13～15歳）の方が重要です。複数のスポーツを試しながら、お子さんの本当の「好き」と「適性」を一緒に探してください。晩成型が逆転する瞬間は、驚くほど劇的です。
        </p>
      </div>
    </ArticleLayout>
  );
}
