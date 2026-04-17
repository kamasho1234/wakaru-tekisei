import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツのコーチに不信感…親はどう対処すべき？',
  description:
    '指導が厳しすぎる、怒鳴る、えこひいきがある。子どものコーチに不満を持ったとき、親としての正しい対処法を解説します。',
  openGraph: {
    title: 'スポーツのコーチに不信感…親はどう対処すべき？',
    description:
      '指導が厳しすぎる、怒鳴る、えこひいきがある。子どものコーチに不満を持ったとき、親としての正しい対処法を解説します。',
    images: [{ url: '/images/articles/coach-trouble.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/coach-trouble',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツのコーチに不信感…親はどう対処すべき？',
    images: ['/images/articles/coach-trouble.jpg'],
  },
};

export default function CoachTroublePage() {
  return (
    <ArticleLayout
      title="スポーツのコーチに不信感…親はどう対処すべき？"
      heroImage="/images/articles/coach-trouble.jpg"
      heroAlt="子どもとコーチが話し合っている様子"
      publishDate="2025年4月"
      slug="coach-trouble"
      description="指導が厳しすぎる、怒鳴る、えこひいきがある。子どものコーチに不満を持ったとき、親としての正しい対処法を解説します。"
      tags={['コーチ', 'スポーツ', '保護者']}
      shareText="子どもを怒鳴るコーチ、えこひいきするコーチ。保護者としての正しい対処法を解説。 #子育て #スポーツ"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          「厳しい指導」と「ハラスメント」の違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツにおける良い指導と問題のある指導を区別することが、親が最初にやるべきことです。日本スポーツ協会は「スポーツ指導者に求められる資質・能力」として、暴力・暴言は指導ではないと明確に定義しています（2013年の大阪市立桜宮高校事件以降）。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">厳しい指導</p>
            <p className="text-xs text-gray-600 mt-2">技術向上のための高い要求、失敗時に改善方法を教える、全員に公平な機会を与える</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-lg font-black text-green-600">ハラスメント</p>
            <p className="text-xs text-gray-600 mt-2">暴言・暴力、人格否定、えこひいき、セクシャルハラスメント</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">スポーツ庁の「ハラスメント」定義</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">身体的：</span>
              <span>殴る、蹴る、無理な練習で怪我をさせるなど</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">精神的：</span>
              <span>大声で怒鳴る、人格否定の言葉（「お前はダメだ」など）</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">セクシャル：</span>
              <span>不適切な身体接触、セクシャルハラスメント</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">パワーハラスメント：</span>
              <span>職務上の権限を使った不当な扱い（えこひいきなど）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          問題のある指導を見極める5つのポイント
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          コーチの指導に不安を感じたときは、以下のポイントをチェックしましょう。複数が当てはまる場合は、問題の可能性があります。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">特定の子だけを怒る</h3>
              <p className="text-sm text-gray-600">
                全員が同じレベルのミスをしているのに、特定の子どもだけを責めることがないか。えこひいきの可能性がある。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">人格否定の言葉を使う</h3>
              <p className="text-sm text-gray-600">
                「お前はダメだ」「センスがない」「デブ」など、人格を否定する言葉は厳禁。技術指導ではなくハラスメント。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">怪我をしても練習を続けさせる</h3>
              <p className="text-sm text-gray-600">
                子どもが「痛い」と訴えても、練習を強要する。子どもの安全より練習を優先させる姿勢は危険。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親の意見や質問に耳を貸さない</h3>
              <p className="text-sm text-gray-600">
                保護者からの不安や質問に対して、一方的に遮ったり、説明を拒否する。透明性がない指導は要注意。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">子どもがスポーツを嫌がり始めた</h3>
              <p className="text-sm text-gray-600">
                「行きたくない」と言い出す、体調不良を訴える。子どもの心身に明らかな悪影響が出ている場合は危険信号。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          良いコーチが実践していること
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          対照的に、良いコーチがどのような指導をしているのかを知ることで、コーチの質を見分けやすくなります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">良いコーチの特徴</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">具体的な行動</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">子どもの意見を聞く</td>
                <td className="px-3 py-2 text-gray-600">練習内容や出場機会について、子どもの意思を尊重する。一方的ではない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">失敗を叱らずに教える</td>
                <td className="px-3 py-2 text-gray-600">ミスが起きたとき、改善方法を教える。人格否定はしない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">全員に公平な機会を与える</td>
                <td className="px-3 py-2 text-gray-600">全ての子どもに試合出場や練習の機会を与える。えこひいきがない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">安全を最優先にする</td>
                <td className="px-3 py-2 text-gray-600">怪我をしている子どもに無理させない。安全装備を確認する</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">保護者と透明性のある関係</td>
                <td className="px-3 py-2 text-gray-600">保護者からの質問に丁寧に答える。練習内容や指導方針を説明する</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          不満がある場合の対処ステップ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          コーチの指導に不安を感じたときは、段階的に対処することが重要です。いきなり大きな行動を起こすのではなく、適切なプロセスを踏みましょう。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">まず子どもに聞く</h3>
              <p className="text-sm text-gray-600">
                「コーチとの関係はどう？」と開かれた質問をする。子どもの本当の気持ちを聞くことが最優先。親の思い込みで判断しない。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">コーチに個別に相談</h3>
              <p className="text-sm text-gray-600">
                他の保護者の前ではなく、個別にコーチと話す。冷静に事実を伝える。例「息子が練習に行きたくないと言っているが…」
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">改善されないなら上部機関へ</h3>
              <p className="text-sm text-gray-600">
                問題が改善されない場合は、チーム責任者や地域のスポーツ協会に報告。個人での対処では限界がある場合がある。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">相談窓口に連絡</h3>
              <p className="text-sm text-gray-600">
                深刻な場合は、各都道府県のスポーツ協会やスポーツ庁の相談窓口に連絡。専門家の判断を仰ぐ。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          相談できる窓口・機関
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          問題がある場合、親は決して一人ではありません。相談できる公式な窓口があります。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-3">相談窓口一覧</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">日本スポーツ仲裁機構：</span>
              <span>スポーツに関するハラスメント・パワハラの中立的な仲裁・調停</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">スポーツ庁ハラスメント相談窓口：</span>
              <span>スポーツ中の各種ハラスメントについての専門的相談</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">都道府県スポーツ協会：</span>
              <span>地域レベルでのハラスメント相談・報告</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">学校体育部・教育委員会：</span>
              <span>学校スポーツに関する問題がある場合</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">児童虐待防止センター：</span>
              <span>身体的虐待や極端なハラスメント（体罰など）の報告</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：子どもの「楽しい」を守ることが最優先
        </h2>
        <p className="text-gray-700 leading-relaxed">
          スポーツは子どもの成長を育むものですが、不当な指導を受けると、逆に心身にダメージを与えてしまいます。親の責任は、子どもが安全で健全なスポーツ環境にいるかを守ることです。コーチに不信感を持ったら、決して我慢しないこと。子どもの「楽しい」という気持ちを守り、必要があれば適切な対処をしましょう。スポーツを続けるか辞めるかは、子どもの意思を最優先に決めることが大切です。
        </p>
      </div>
    </ArticleLayout>
  );
}
