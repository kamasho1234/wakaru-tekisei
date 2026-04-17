import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもがスポーツに興味がない…無理に始めさせるべき？',
  description:
    '習い事にスポーツを考えているけれど、子どもが乗り気でない。無理強いすべき？待つべき？親の悩みに答えます。',
  openGraph: {
    title: '子どもがスポーツに興味がない…無理に始めさせるべき？',
    description:
      '習い事にスポーツを考えているけれど、子どもが乗り気でない。無理強いすべき？待つべき？親の悩みに答えます。',
    images: [{ url: '/images/articles/child-not-interested.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/child-not-interested',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもがスポーツに興味がない…無理に始めさせるべき？',
    images: ['/images/articles/child-not-interested.jpg'],
  },
};

export default function ChildNotInterestedPage() {
  return (
    <ArticleLayout
      title="子どもがスポーツに興味がない…無理に始めさせるべき？"
      heroImage="/images/articles/child-not-interested.jpg"
      heroAlt="スポーツよりも読書が好きな子ども"
      publishDate="2025年4月"
      slug="child-not-interested"
      description="習い事にスポーツを考えているけれど、子どもが乗り気でない。無理強いすべき？待つべき？親の悩みに答えます。"
      tags={['習い事', 'スポーツ嫌い', '子育て']}
      shareText="スポーツに興味がない子どもへの接し方。強制はNGな理由と自然な引き出し方。 #子育て #習い事"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          「やりたくない」には必ず理由がある
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもがスポーツに興味を示さないとき、親は不安を感じるかもしれません。しかし「うちの子はスポーツに興味がない」と判断する前に、その背景にある本当の理由を探ることが大切です。単に「スポーツ全般が嫌い」というわけではなく、特定の理由があることがほとんどです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">2.3倍</p>
            <p className="text-xs text-gray-600 mt-1">中退率の差</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">4つ</p>
            <p className="text-xs text-gray-600 mt-1">主な理由</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">3回</p>
            <p className="text-xs text-gray-600 mt-1">体験目安</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">嫌う主な理由（日本スポーツ振興センター調査）</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">①怒られる・怖い:</span>
              <span>コーチの厳しさが原因</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">②楽しくない:</span>
              <span>練習内容が退屈で面白くない</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">③勝てない:</span>
              <span>失敗経験で自信がなくなった</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">④友人関係:</span>
              <span>人間関係のトラブル</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          強制するとどうなる？心理学が示す答え
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          心理学の「自己決定理論」（Deci & Ryanが提唱）によると、外発的な強制や報酬は、子どもの内発的動機付け（自分でやりたい気持ち）を破壊します。これを「アンダーマイニング効果」と呼びます。スポーツを無理に強制された子どもは、むしろスポーツが嫌いになる可能性があります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">参加方式</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">1年以内中退率</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">自主参加</td>
                <td className="px-3 py-2 text-gray-600">約15%</td>
                <td className="px-3 py-2 text-gray-600">継続率が高い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">親が勧める</td>
                <td className="px-3 py-2 text-gray-600">約30%</td>
                <td className="px-3 py-2 text-gray-600">中程度</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">親が強制</td>
                <td className="px-3 py-2 text-gray-600">約35%</td>
                <td className="px-3 py-2 text-gray-600">最も高い中退率</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          強制参加した子どもの中退率は自主参加の約2.3倍です。これは「親に言われたからやる」という動機では、本当の満足感が得られないことを示しています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          興味がない本当の原因を探る方法
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">質問する前に観察する</h3>
              <p className="text-sm text-gray-600">
                「スポーツ好き？」と聞く前に、子どもの行動を観察します。外で遊ぶとき何をしているか、何に夢中か、どんな遊びで喜ぶか。その中にスポーツが関連する要素があるか探します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">オープンな質問をする</h3>
              <p className="text-sm text-gray-600">
                「スポーツ習いたい？」ではなく「最近、何が楽しい？」「得意なことは？」と聞きます。子どもの本当の興味が見えてきます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体験から学ぶ</h3>
              <p className="text-sm text-gray-600">
                複数のスポーツを「試して見る」経験をさせます。友人がやってるから、親がやって欲しいからではなく、本人が選ぶプロセスが重要です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          子どもが動き始めるきっかけの作り方
        </h2>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">動機付けの工夫</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">友人と一緒:</span>
              <span>信頼できる友人が同じスポーツをしていると、参加しやすくなる</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">楽しさ優先:</span>
              <span>成績や上達よりも「楽しい」という体験を大事にする</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">親も一緒に:</span>
              <span>親が一緒にやると、子どもは安心感を持つ</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">自分で選ぶ:</span>
              <span>親が「これやってみたら？」ではなく「何がやってみたい？」と聞く</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          向いているスポーツの種類を変えてみる
        </h2>

        <div className="space-y-3 mb-6">
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange-900">競争が嫌いな子:</span> 競争のない体操・水泳・武道がおすすめ。個人のペースで上達できます
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange-900">団体活動が嫌いな子:</span> 個人スポーツの水泳・体操・ダンスを試す
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange-900">静かに集中したい子:</span> 射撃・アーチェリー・卓球など、静かで集中力が必要なものが向いている
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange-900">体を動かす事自体が嫌いな子:</span> 無理に始めず、本人の興味（学習・創作・音楽など）を尊重する
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：焦らずに「好き」を一緒に探そう
        </h2>
        <p className="text-gray-700 leading-relaxed">
          スポーツに興味がない子どもを無理に習い事に入れることは、むしろスポーツ嫌いを深める可能性があります。大切なのは、子どもの本当の気持ちを聞き、一緒に「好きなこと」を探すプロセスです。体験入学を通じて複数のスポーツを試し、子ども自身が選ぶ機会を与えることで、本当の「好き」が生まれます。
        </p>
      </div>
    </ArticleLayout>
  );
}
