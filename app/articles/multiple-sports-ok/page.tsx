import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもが複数のスポーツを掛け持ちしても大丈夫？メリットと注意点',
  description:
    'サッカーと水泳を両方やりたい、体操と体育クラブを掛け持ちしたい。複数スポーツ習い事の科学的なメリットと注意点を解説。',
  openGraph: {
    title: '子どもが複数のスポーツを掛け持ちしても大丈夫？メリットと注意点',
    description:
      'サッカーと水泳を両方やりたい、体操と体育クラブを掛け持ちしたい。複数スポーツ習い事の科学的なメリットと注意点を解説。',
    images: [{ url: '/images/articles/multiple-sports-ok.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/multiple-sports-ok',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/multiple-sports-ok',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもが複数のスポーツを掛け持ちしても大丈夫？メリットと注意点',
    images: ['/images/articles/multiple-sports-ok.jpg'],
  },
};

export default function MultipleSportsOkPage() {
  return (
    <ArticleLayout
      title="子どもが複数のスポーツを掛け持ちしても大丈夫？メリットと注意点"
      heroImage="/images/articles/multiple-sports-ok.jpg"
      heroAlt="複数のスポーツ用具を持った子ども"
      publishDate="2025年4月"
      slug="multiple-sports-ok"
      description="サッカーと水泳を両方やりたい、体操と体育クラブを掛け持ちしたい。複数スポーツ習い事の科学的なメリットと注意点を解説。"
      tags={['掛け持ち', '習い事', 'マルチスポーツ']}
      shareText="子どもの習い事スポーツ掛け持ちはOK？科学的なメリットと注意点。 #子育て #習い事"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          マルチスポーツとは何か？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          マルチスポーツとは、1つのスポーツに特化するのではなく、複数のスポーツを同時期に経験することを指します。例えば、サッカーと水泳を両方習う、野球と体操を並行するなどです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">マルチスポーツと単一スポーツの違い</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">マルチスポーツ:</span>
              <span>複数のスポーツから学べる多様な動き、技術、視点を獲得</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">単一スポーツ:</span>
              <span>1つのスポーツに特化し、高度な技術を習得</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「子どもが複数やりたいなら、どちらを選ばせるべき？」と悩む親も多いでしょう。実は、科学的証拠が示す答えは「マルチスポーツは良い選択肢」です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          科学が証明する複数スポーツのメリット
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">70%</p>
            <p className="text-xs text-gray-600 mt-1">プロになった選手が経験</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">多様な</p>
            <p className="text-xs text-gray-600 mt-1">動き習得</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">怪我</p>
            <p className="text-xs text-gray-600 mt-1">予防効果</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">多様な動き習得</h3>
              <p className="text-sm text-gray-600">
                複数のスポーツから、それぞれ異なる動きパターンを習得。これが全身の運動神経発達につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">怪我予防</h3>
              <p className="text-sm text-gray-600">
                特定部位のオーバーユース（使いすぎ）が避けられます。野球肘、テニス肘などの慢性障害リスクが低減。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バーンアウト防止</h3>
              <p className="text-sm text-gray-600">
                1つのスポーツに絞ると、プレッシャーや練習の単調さで「スポーツ嫌い」になることがあります。複数経験することで、飽きや疲弊が緩和されます。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">プロ選手の実例</p>
          <p className="text-sm text-blue-800">
            MLB・NBA・NFL選手を調査した研究（Côté et al., 2009）によると、プロになった選手の70%以上が15歳までに複数のスポーツを経験していました。これは「1つに絞った方が上手くなる」という通説を覆す結果です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何種目まで大丈夫？練習時間の目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">推奨種目数</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">週間総練習時間</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">8歳以下</td>
                <td className="px-3 py-2 text-gray-600">2～3種目でOK</td>
                <td className="px-3 py-2 text-gray-600">週6時間以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">10歳</td>
                <td className="px-3 py-2 text-gray-600">2種目推奨</td>
                <td className="px-3 py-2 text-gray-600">週8～10時間</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">12歳</td>
                <td className="px-3 py-2 text-gray-600">2種目または1種目へ絞り始め</td>
                <td className="px-3 py-2 text-gray-600">週12時間</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">大切なポイント</p>
          <p className="text-sm text-blue-800">
            時間の合計が目安です。例えば10歳で週8～10時間なら、サッカー週5時間+水泳週3～5時間といった具合。「何種目か」より「合計時間」が重要な指標です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          掛け持ちで注意すべきサイン
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">!</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">疲労が蓄積している</span><br/>
              帰宅後すぐに寝てしまう、朝起きられなくなった
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">!</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">睡眠時間が減少</span><br/>
              小学生は9～11時間の睡眠が必要。習い事で確保できていないと成長に支障
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">!</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">怪我が増えている</span><br/>
              疲労骨折や捻挫が頻発する場合は、練習量が多すぎる可能性
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">!</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">本人が「やりたくない」と言い始めた</span><br/>
              バーンアウト兆候。強要は禁物です
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          うまく両立させるための3つのコツ
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">曜日を分ける</h3>
              <p className="text-sm text-gray-600">
                月・水・金はサッカー、火・木は水泳というように、スポーツごとに曜日を分けることで、疲労を分散させます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">1日に2スポーツは避ける</h3>
              <p className="text-sm text-gray-600">
                同じ日に複数スポーツの練習をするのは避けましょう。短期的には時間効率がいいように見えますが、回復が追いつきません。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">シーズン制（オフがある）を選ぶ</h3>
              <p className="text-sm text-gray-600">
                通年競技と季節競技を組み合わせると、どちらかがオフシーズンになり、休養と別スポーツへの集中が両立します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：子どもの「やりたい」を尊重しよう
        </h2>
        <p className="text-gray-700 leading-relaxed">
          複数のスポーツに取り組むことは、科学的には「正しい選択」です。プロ選手の大多数がマルチスポーツ経験者であり、怪我予防やバーンアウト防止にも効果的。ただし、週間練習時間と睡眠時間をしっかり管理することが、成功の鍵です。「1つに絞るべき」というプレッシャーに縛られず、子ども本人の「やりたい」という気持ちを最優先に、複数スポーツの掛け持ちを検討してみてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
