import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '朝食を食べない子は体力が低い？｜全国調査データで確認できること',
  description:
    'スポーツ庁の令和7年度調査から、朝食を「毎日食べる」割合と体力の関連性を分析。小5男子82.5%・女子80.4%、中2男子82.0%・中2女子74.6%。データから分かることと分からないことを明確に解説。',
  openGraph: {
    title: '朝食を食べない子は体力が低い？｜全国調査データで確認できること',
    description:
      '朝食の習慣は体力とどう関わるのか。スポーツ庁の原典データから、「毎日食べる」割合と、公式が示唆する関連性を正確に解説します。',
    images: [{ url: '/images/articles/asagohan-tairyoku.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/asagohan-tairyoku',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/asagohan-tairyoku',
  },
  twitter: {
    card: 'summary_large_image',
    title: '朝食を食べない子は体力が低い？｜全国調査データで確認できること',
    images: ['/images/articles/asagohan-tairyoku.jpg'],
  },
};

export default function AsgohantTairyoku() {
  return (
    <ArticleLayout
      title="朝食を食べない子は体力が低い？｜全国調査データで確認できること"
      heroImage="/images/articles/asagohan-tairyoku.jpg"
      heroAlt="朝食を食べる子ども"
      publishDate="2026年7月"
      slug="asagohan-tairyoku"
      description="スポーツ庁の令和7年度調査から、朝食の習慣と体力の関連性を分析。小5男子82.5%が「毎日食べる」。データから分かることと分からないことを解説。"
      tags={['朝食', '生活習慣', '体力', '食習慣']}
      shareText="朝食を「毎日食べる」小5男子82.5%・女子80.4%。スポーツ庁データから、朝食と体力の関連性を正確に読み解きます。 #子育て #体力テスト #朝食"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 小学校児童質問紙 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_001002.xlsx',
        '同 中学校生徒質問紙 https://www.mext.go.jp/sports/content/20260113-spt_sseisaku02-000046317_0000102.xlsx',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「朝食を食べないと、体力が低くなる」という話を聞いたことはありますか。確かに、栄養学の観点からは、朝食は重要だとされています。しかし、スポーツ庁の調査データから本当に「朝食の習慣と体力に関連性がある」のかを、データが示すもの・示さないものの区別をしながら、正確に読み解いてみましょう。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、推測や一般的な知識ではなく、原典のデータだけから言えることをお伝えします。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「毎日食べる」割合：小学5年生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁の調査では、「朝食を毎日食べていますか」という質問に、子どもたちがどのように答えたかを記録しています。令和7年度の小学5年生の回答は次のとおりです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">朝食の習慣</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">毎日食べる</td>
                <td className="px-3 py-2 text-center text-blue-600 font-bold">82.5%</td>
                <td className="px-3 py-2 text-center text-blue-600 font-bold">80.4%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">食べない日もある</td>
                <td className="px-3 py-2 text-center text-gray-600">13.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">15.8%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">食べない日が多い</td>
                <td className="px-3 py-2 text-center text-gray-600">2.8%</td>
                <td className="px-3 py-2 text-center text-gray-600">3.1%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">食べない</td>
                <td className="px-3 py-2 text-center text-gray-600">1.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">0.7%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">全体像の把握</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            小学5年生のうち、男子82.5%・女子80.4%が「毎日食べる」と答えています。逆に「食べない日が多い」「食べない」という層は男子3.8%、女子3.8%です。朝食習慣について言えば、圧倒的多数派が「毎日食べている」という状況が明らかです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「毎日食べる」割合：中学2年生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ質問を中学2年生に対しても行っています。小学5年生から中学2年生にかけて、どのような変化があるのでしょうか。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">朝食の習慣</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">毎日食べる</td>
                <td className="px-3 py-2 text-center text-blue-600 font-bold">82.0%</td>
                <td className="px-3 py-2 text-center text-orange-600 font-bold">74.6%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">食べない日もある</td>
                <td className="px-3 py-2 text-center text-gray-600">12.1%</td>
                <td className="px-3 py-2 text-center text-gray-600">18.5%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">食べない日が多い</td>
                <td className="px-3 py-2 text-center text-gray-600">3.9%</td>
                <td className="px-3 py-2 text-center text-gray-600">5.0%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">食べない</td>
                <td className="px-3 py-2 text-center text-gray-600">2.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">1.9%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">学年による差に注目</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            中学2年生では、男子の「毎日食べる」は82.0%と、小学5年生の82.5%からほぼ変わりません。しかし女子は80.4%から74.6%へ低下しています。5.8ポイントの低下は、「食べない日もある」「食べない日が多い」という層の増加に反映されています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、中学生、特に女子の間では、朝食を毎日食べない傾向が小学生より強まっている可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ庁の公式見解：増加傾向
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          朝食習慣についての長期的な変化について、スポーツ庁は次のように述べています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            「朝食を『毎日食べる』割合は、小中学校男女ともに直近3年では増加傾向である。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          つまり、過去3年間で「毎日食べる」という回答が増えてきているということです。これは良い傾向だと言えるかもしれません。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          朝食と体力：原典から言えることと言えないこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここが最も重要な部分です。「朝食を食べない子は体力が低い」という説は、本当なのでしょうか。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">クロス集計の数値は取得できていません</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            スポーツ庁の報告書では、朝食の習慣と体力合計点の関係がグラフで示されています。ですが、その具体的な数値（「毎日食べる子は何点高い」等）は、グラフ画像の形式であり、テキスト化されていません。つまり、原典から機械抽出することができないのです。
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            「朝食を毎日食べる子の体力合計点は◯点で、そうでない子は◯点」という具体的な比較は、当サイトではお伝えできません。これが、多くのサイトで見かける「根拠のない数値」の源となっています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          では、原典から言えることは何でしょうか。それは次の2つだけです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">原典から確実に言えることだけ</p>
          <ol className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">1.</span>
              <span>「毎日食べる」という回答が小中学校男女ともに直近3年で増加傾向にあること</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">2.</span>
              <span>女子は中学生になると朝食を毎日食べない層が増えること（小5 80.4% → 中2 74.6%）</span>
            </li>
          </ol>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「朝食と体力の関連性がある」という仮説は、栄養学的には妥当かもしれません。しかし、スポーツ庁のこの調査データからは、その具体的な関連性の大きさを示すことができないのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          相関は示唆されているが、因果は不明
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          仮に、朝食を毎日食べる子の方が体力が高いという相関が存在するとしましょう。それでも、その因果関係は不明です。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-700 mb-2">複数の可能性が考えられます：</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-gray-700">1. 朝食が栄養を補給し、それが体力向上につながっている</li>
            <li className="text-sm text-gray-700">2. 朝食を毎日食べる規則正しい生活習慣が、全体的な健康につながっている</li>
            <li className="text-sm text-gray-700">3. もともと健康で活動的な子ほど、朝食を食べやすい生活をしている</li>
            <li className="text-sm text-gray-700">4. 親が子どもの健康に気を配る家庭では、朝食も与えるし、運動機会も作っている</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          この調査だけからは、どれが本当の原因なのかは分かりません。当サイトでは、複数の可能性のうち、根拠なく一つを選んで「朝食が原因だ」と言うことはしません。それが、当サイトが大切にしている姿勢です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          では、親として何ができるか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「朝食と体力の因果関係は不明である」という結論は、朝食が無意味ということを意味しません。むしろ、以下のようなことが考えられます。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">データが示唆すること</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">規則正しさ:</span>
              <span>朝食を毎日食べることは、規則正しい生活リズムを作る一部です。規則正しい生活が全体的な健康につながるということは、栄養学的な常識です。</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">総合的アプローチ:</span>
              <span>朝食だけに注目するのではなく、睡眠・運動・食事・学習のバランスが重要ではないでしょうか。</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          スポーツ庁のデータから言えることは「運動時間が長い児童ほど体力が高い傾向にある」ということです。朝食の習慣を整えつつ、同時に運動する機会を増やすことが、総合的には重要だと思われます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学女子の低下に注目
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          注視すべき点として、中学2年生女子の「毎日食べる」が74.6%に低下していることは、単なる統計値ではなく、一つの現象を示しています。思春期に入ると、朝食を抜くという傾向が強まるのです。
        </p>

        <p className="text-gray-700 leading-relaxed">
          「なぜ女子がそうなるのか」という原因は、この調査からは分かりません。ですが、朝食を毎日食べる習慣を失うことが、体力や学習成績に何らかの影響を及ぼす可能性は、注視する価値があります。中学生の娘さんがいるご家庭では、朝食習慣がどうなっているか、一度確認してみるのも良いかもしれません。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          お子さんの適性と総合的な健康
        </h2>
        <p className="text-gray-700 leading-relaxed">
          朝食・睡眠・運動・学習—これらはすべて、お子さんの健康と発達に関係しています。当サイトの「わかる適性」では、新体力テストの記録から、お子さんの強みとなる運動能力を診断できます。朝食習慣を整えつつ、その得意な能力を活かせるスポーツをしていく—そうした総合的なアプローチが、真の意味でお子さんの健康につながるのではないでしょうか。
        </p>
      </div>
    </ArticleLayout>
  );
}
