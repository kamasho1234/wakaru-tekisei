import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '小学生は1週間にどれくらい運動している？｜全国データで見る運動時間',
  description:
    'スポーツ庁の令和7年度調査から、小学5年生の週間運動時間を分析。男子平均522分、女子315分。曜日別データと、「60分未満」「420分以上」の割合推移から見える課題を解説。',
  openGraph: {
    title: '小学生は1週間にどれくらい運動している？｜全国データで見る運動時間',
    description:
      '小学5年生の平均週間運動時間は男子522分・女子315分。土日の過ごし方に大きな差。スポーツ庁データで、日本の子どもの運動習慣の実態を解説します。',
    images: [{ url: '/images/articles/undo-jikan-nikyokka.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/undo-jikan-nikyokka',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/undo-jikan-nikyokka',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小学生は1週間にどれくらい運動している？｜全国データで見る運動時間',
    images: ['/images/articles/undo-jikan-nikyokka.jpg'],
  },
};

export default function UndoJikanNikyokka() {
  return (
    <ArticleLayout
      title="小学生は1週間にどれくらい運動している？｜全国データで見る運動時間"
      heroImage="/images/articles/undo-jikan-nikyokka.jpg"
      heroAlt="運動する子どもたち"
      publishDate="2026年7月"
      slug="undo-jikan-nikyokka"
      description="スポーツ庁の令和7年度調査から、小学5年生の週間運動時間を分析。男子平均522分、女子315分。曜日別データと課題を解説します。"
      tags={['運動時間', '小学生', '生活習慣', '公的データ']}
      shareText="小学5年生の平均週間運動時間は男子522分・女子315分。休日に大きな差。スポーツ庁の最新データで日本の子どもの運動習慣を見直す。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 小学校児童質問紙 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_001002.xlsx',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「お子さんは1週間でどのくらい運動していると思いますか？」と聞かれて、すぐに答えられる親は多くありません。体育の授業は週2時間程度ですが、学校以外での運動時間についても知ることは、お子さんの健康管理に欠かせません。
        </p>
        <p className="text-gray-700 leading-relaxed">
          スポーツ庁の令和7年度調査では、小学5年生が体育の授業を除いて「1週間でどのくらい運動しているか」を尋ねています。その答えから、日本の子どもたちの運動習慣の実態が浮かび上がります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均週間運動時間：男子 vs 女子
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          まず全体像を見てみましょう。小学5年生（令和7年度）が、学校の体育の授業を除いて1週間に運動する平均時間は次のとおりです。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="text-xs text-blue-600 font-bold uppercase mb-2">男子</p>
            <p className="text-3xl font-black text-blue-700 mb-1">522.93分</p>
            <p className="text-sm text-blue-800">1週間の合計</p>
            <p className="text-xs text-blue-600 mt-2">＝ 約8時間43分</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="text-xs text-blue-600 font-bold uppercase mb-2">女子</p>
            <p className="text-3xl font-black text-blue-700 mb-1">315.17分</p>
            <p className="text-sm text-blue-800">1週間の合計</p>
            <p className="text-xs text-blue-600 mt-2">＝ 約5時間15分</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">この差は何を意味するのか</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            女子の運動時間は男子の60%にとどまっています。週あたり約207分（3時間28分）の開きがあります。これは、1年間では約10,700分、つまり178時間以上の差になります。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          では、この差はどの曜日に大きいのでしょうか。曜日別に見ると、より詳しい実態が見えてきます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          曜日別で見える「休日」の差
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          平日と休日では、子どもたちの時間の使い方に大きな違いがあります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">曜日</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子（分）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子（分）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男女差（分）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">月曜日</td>
                <td className="px-3 py-2 text-right text-gray-600">52.13</td>
                <td className="px-3 py-2 text-right text-gray-600">34.98</td>
                <td className="px-3 py-2 text-right text-gray-600">17.15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">火曜日</td>
                <td className="px-3 py-2 text-right text-gray-600">55.27</td>
                <td className="px-3 py-2 text-right text-gray-600">36.03</td>
                <td className="px-3 py-2 text-right text-gray-600">19.24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">水曜日</td>
                <td className="px-3 py-2 text-right text-gray-600">61.44</td>
                <td className="px-3 py-2 text-right text-gray-600">41.82</td>
                <td className="px-3 py-2 text-right text-gray-600">19.62</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">木曜日</td>
                <td className="px-3 py-2 text-right text-gray-600">57.13</td>
                <td className="px-3 py-2 text-right text-gray-600">37.98</td>
                <td className="px-3 py-2 text-right text-gray-600">19.15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">金曜日</td>
                <td className="px-3 py-2 text-right text-gray-600">56.20</td>
                <td className="px-3 py-2 text-right text-gray-600">38.96</td>
                <td className="px-3 py-2 text-right text-gray-600">17.24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">土曜日</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">125.52</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">68.05</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">57.47</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">日曜日</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">120.11</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">58.91</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">61.20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">平日と休日の過ごし方の差</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">平日（月〜金）:</span>
              <span>男女差は17〜20分程度。体育の授業や部活で時間が決まっているため、差が小さい</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">土曜日:</span>
              <span>男女差は57分。男子は平均125分、女子は68分</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">日曜日:</span>
              <span>男女差は61分。男子は平均120分、女子は59分</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          休日の差が60分を超えることは、両親による差別的な時間配分を意味するわけではありません。むしろ「自分が好きなことをする時間」を自由に選べるようになる時間帯だからこそ、男女の選好の違いが顕著に表れているのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「60分未満」と「420分以上」の割合推移
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一方で、1週間の運動時間がどの程度の子どもたちが多いのかについても、調査では捉えています。厚生労働省や世界保健機関（WHO）は、子どもの週間運動時間として「420分以上（1週間で7時間以上）」を推奨しています。そして「60分未満」は、極めて少ない層です。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁は、この両層の割合の長期的な変化について、次のように報告しています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である。」</li>
            <li className="text-sm text-gray-700 mt-3">・「1週間の総運動時間が420分以上の割合は、小中学校男女ともに減少傾向である。」</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、「ほぼ運動しない子」が増える一方で、「かなり積極的に運動する子」が減っているということです。日本の子どもたちの運動習慣が、二極化しつつあるのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動習慣と体力の関係
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          では、運動時間と実際の体力には、どのような関係があるのでしょうか。スポーツ庁は、以下の傾向を指摘しています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「『運動時間が長い』児童生徒ほど、体力合計点が高くなる傾向にある。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">これが意味すること</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            週間運動時間が長いほど、体力テストで高い点数を獲得する傾向にあります。逆に言えば、週間運動時間が短い子どもほど、体力合計点が低い傾向にあるということです。当然の結果のように聞こえるかもしれませんが、この「傾向」は公式データに基づいた強い相関性を示しています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          小学5年生の現在の平均運動時間（男子522分・女子315分）が、今後どうなるかは不確実です。しかし、もし現在の「60分未満が増加」「420分以上が減少」という傾向が続けば、体力合計点全体の低下もあらためて懸念されます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何が原因なのか——調査からは分かりません
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「60分未満が増加傾向」であることが分かっても、その原因はこの調査からは直接的には分かりません。ゲームやスマートフォンが増えたから、という説明もありますが、それはあくまで推測です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">データは「現象」を示すが、「原因」は特定しない</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            この調査からは「60分未満の子が増えた」ことは分かります。しかし「なぜ増えたのか」については、別の研究や調査が必要になります。当サイトでは、推測を避け、原典のデータが明らかにしたことだけをお伝えしています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          休日の過ごし方を見直す
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          平日の運動時間は、学校の体育の授業や部活動である程度決まっています。そこで差をつけられるのは、休日の過ごし方です。土日の時間配分を変えるだけで、週間運動時間に大きな影響を与えることができます。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          例えば、日曜日の運動時間が現在60分だとしたら、これを90分に増やすだけで、週間運動時間は30分増加します。1年続けば1,560分、つまり26時間の差になります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">重要な指摘</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            スポーツ庁のデータは「『運動は好き』と回答した児童生徒は、それ以外の児童生徒と比べ体力合計点が高い」と述べています。つまり、無理矢理運動させるのではなく、お子さんが「やってみたい」と思えるスポーツや運動を見つけることが、習慣化の第一歩になるかもしれません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          お子さんの適性から運動を選ぶ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          当サイトの「わかる適性」では、新体力テストの記録から、お子さんがどのような運動能力に優れているかを診断できます。得意な能力が活かせるスポーツを見つけることで、「やってみたい」という気持ちが自然と湧いてくるかもしれません。休日の過ごし方を工夫する際の参考になれば幸いです。
        </p>
      </div>
    </ArticleLayout>
  );
}
