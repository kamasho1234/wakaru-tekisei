import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '習い事のスポーツを「辞めたい」と言ったときの正しい対応',
  description:
    '子どもがスポーツの習い事を辞めたいと言い出した。続けさせるべき？辞めさせるべき？状況別の判断基準を解説します。',
  openGraph: {
    title: '習い事のスポーツを「辞めたい」と言ったときの正しい対応',
    description:
      '子どもがスポーツの習い事を辞めたいと言い出した。続けさせるべき？辞めさせるべき？状況別の判断基準を解説します。',
    images: [{ url: '/images/articles/child-quit-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/child-quit-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '習い事のスポーツを「辞めたい」と言ったときの正しい対応',
    images: ['/images/articles/child-quit-sports.jpg'],
  },
};

export default function ChildQuitSportsPage() {
  return (
    <ArticleLayout
      title="習い事のスポーツを「辞めたい」と言ったときの正しい対応"
      heroImage="/images/articles/child-quit-sports.jpg"
      heroAlt="悩んでいる子どもと話し合う親"
      publishDate="2025年4月"
      slug="child-quit-sports"
      description="子どもがスポーツの習い事を辞めたいと言い出した。続けさせるべき？辞めさせるべき？状況別の判断基準を解説します。"
      tags={['習い事', 'スポーツを辞める', '子育て']}
      shareText="子どもが「スポーツ辞めたい」と言ったとき。続けさせるべき？正しい判断基準を解説。 #子育て #習い事"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          「辞めたい」には4つのパターンがある
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもが「スポーツを辞めたい」と言ったとき、親の判断は重要です。しかし、その発言の背景には異なる4つのパターンがあります。それぞれの対応方法は全く異なるため、まず「なぜ辞めたいのか」を理解することが大切です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">①</p>
            <p className="text-xs text-gray-600 mt-1">一時的な感情</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">②</p>
            <p className="text-xs text-gray-600 mt-1">慢性的な問題</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">③</p>
            <p className="text-xs text-gray-600 mt-1">他にやりたいこと</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">④</p>
            <p className="text-xs text-gray-600 mt-1">本当に合っていない</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">4つのパターンと特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">①一時的な感情:</span>
              <span>試合に負けた直後、友人関係で何かあった直後に「辞めたい」と言う</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">②慢性的な問題:</span>
              <span>「コーチが怖い」「毎週つらい」など、継続的な悩みがある</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">③他にやりたい:</span>
              <span>別のスポーツ・習い事に時間を使いたい</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">④本当に合わない:</span>
              <span>体格・性格・能力が、そのスポーツの適性と合致していない</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          一時的な感情か・本当の意思かを見極める方法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもの発言が「一時的な感情」か「本当の意思」かを判断するには、「3ヶ月ルール」が有効です。スポーツを始めて3ヶ月以内の辞めたい発言は、上達の過程で生じる一時的な感情であることが多いです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">期間</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">判断基準</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対応</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">0～3ヶ月</td>
                <td className="px-3 py-2 text-gray-600">一時的・感情的</td>
                <td className="px-3 py-2 text-gray-600">様子見・励ます</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3～6ヶ月</td>
                <td className="px-3 py-2 text-gray-600">判断の転換期</td>
                <td className="px-3 py-2 text-gray-600">原因追求・対策</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6ヶ月以上</td>
                <td className="px-3 py-2 text-gray-600">本当の意思</td>
                <td className="px-3 py-2 text-gray-600">本人の希望を尊重</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          また、「いつから言い始めたか」も重要です。試合直後に「辞めたい」と言う場合は感情的な可能性が高い一方で、「最近ずっと言っている」場合は本当の問題がある可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          状況別：続けさせたほうがいいケース
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">試合に負けて直後に言っている</h3>
              <p className="text-sm text-gray-600">
                これは一時的な落ち込みです。1週間待って、冷静に話し合う。応援メッセージと「失敗は誰にもある」という励ましが有効
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">始めて3ヶ月以内の「辞めたい」</h3>
              <p className="text-sm text-gray-600">
                上達の段階で誰もが感じる感情です。コーチと面談して、本人の悩みを共有。練習方法や励まし方を工夫する
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">「友人が一緒だったら続けたい」と言う</h3>
              <p className="text-sm text-gray-600">
                人間関係が原因なら、別の友人がいるクラスに変更したり、グループレッスンにしたりして、環境を改善
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          状況別：辞めさせたほうがいいケース
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">6ヶ月以上、継続的に「辞めたい」と言っている</h3>
              <p className="text-sm text-gray-600">
                これは本当の意思です。本人の希望を尊重して、辞めさせる。その後別のスポーツを試す余地を残す
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">心身に悪影響が出ている</h3>
              <p className="text-sm text-gray-600">
                不眠・食欲不振・ストレス症状が見られたら、すぐに辞めさせるべき。スポーツより健康が優先
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">明らかに才能や適性がない、本人も気づいている</h3>
              <p className="text-sm text-gray-600">
                努力で補えない身体的制限（身長が必要なスポーツが向かない等）があれば、別の道を一緒に探す
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          「辞める」前に試せる3つの選択肢
        </h2>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">中止と辞めるの間にある選択肢</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">①休止する:</span>
              <span>1～3ヶ月、スポーツを休む。気持ちがリセットされて、また再開したくなることもある</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">②環境を変える:</span>
              <span>別のチーム・コーチ・時間帯に変更。人間関係やコーチが原因なら、これで解決することもある</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">③並行してやる:</span>
              <span>今のスポーツは続けながら、別のスポーツも試してみる。本当に好きなものが見つかる可能性</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：大切なのは子どもの長期的な成長
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもが「スポーツを辞めたい」と言ったとき、大切なのは「今この瞬間に辞めるべきか」という判断ではなく、「子どもの長期的な幸福」を考えることです。一時的な感情なら励ます、本当の問題なら環境を改善する、本当の意思なら尊重する。
        </p>
        <p className="text-gray-700 leading-relaxed">
          実は、スポーツを辞めた子どもの40%以上が1年以内に別のスポーツを始めています。「辞める=失敗」ではなく「自分に合ったものを見つけるプロセス」です。多くのプロアスリートも複数のスポーツを経験してから専門を決めています。今辞めても、お子さんの運動人生は続きます。
        </p>
      </div>
    </ArticleLayout>
  );
}
