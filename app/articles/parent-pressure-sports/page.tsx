import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '親の期待がプレッシャーになっていないか？スポーツ心理学で考える',
  description:
    '応援のつもりが子どものプレッシャーに。親の言動が子どものスポーツパフォーマンスに与える影響を、心理学の知見で解説します。',
  openGraph: {
    title: '親の期待がプレッシャーになっていないか？スポーツ心理学で考える',
    description:
      '応援のつもりが子どものプレッシャーに。親の言動が子どものスポーツパフォーマンスに与える影響を、心理学の知見で解説します。',
    images: [{ url: '/images/articles/parent-pressure-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/parent-pressure-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '親の期待がプレッシャーになっていないか？スポーツ心理学で考える',
    images: ['/images/articles/parent-pressure-sports.jpg'],
  },
};

export default function ParentPressureSportsPage() {
  return (
    <ArticleLayout
      title="親の期待がプレッシャーになっていないか？スポーツ心理学で考える"
      heroImage="/images/articles/parent-pressure-sports.jpg"
      heroAlt="試合を観戦している親と緊張している子ども"
      publishDate="2025年4月"
      slug="parent-pressure-sports"
      description="応援のつもりが子どものプレッシャーに。親の言動が子どものスポーツパフォーマンスに与える影響を、心理学の知見で解説します。"
      tags={['親のプレッシャー', 'スポーツ心理学', '子育て']}
      shareText="応援のつもりが子どもへのプレッシャーに。スポーツ心理学が教える正しい親の関わり方。 #子育て #スポーツ心理"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          子どものスポーツと親のプレッシャーの関係
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ心理学の研究によると、親からの過度な期待は、子どものスポーツ離れの主要因になることがわかっています（Gould et al., 2006）。応援のつもりでも、子どもは親の期待をプレッシャーとして感じてしまう場合があります。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">45%</p>
            <p className="text-xs text-gray-600 mt-1">スポーツを辞めたい理由が親のプレッシャー</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">チョーキング</p>
            <p className="text-xs text-gray-600 mt-1">プレッシャー下でのパフォーマンス低下</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">親のプレッシャーがもたらす影響</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">心理的負荷:</span>
              <span>試合で本来の力を発揮できなくなる「チョーキング」現象</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">スポーツ離れ:</span>
              <span>スポーツそのものが嫌になる。成績低迷時に顕著</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">親子関係悪化:</span>
              <span>試合後の親の反応が厳しいと、親への信頼感が低下</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">不安増加:</span>
              <span>失敗への恐怖が強くなり、正常なプレーができない</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          プレッシャーを感じている子どものサイン
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもがプレッシャーを感じているかどうか、親が見極められるサインがあります。早期に気づくことが大切です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">試合前夜の行動変化</h3>
              <p className="text-sm text-gray-600">
                眠れなくなる、おなかが痛くなる、食欲がなくなるなど、身体的な反応が見られる
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">試合参加への消極性</h3>
              <p className="text-sm text-gray-600">
                「試合に出たくない」「今週は休みたい」と急に言い出す
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親への反応の変化</h3>
              <p className="text-sm text-gray-600">
                親に結果を報告したくない、試合後に親と話したくない姿勢が見られる
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自信の喪失</h3>
              <p className="text-sm text-gray-600">
                「どうせ失敗する」「自分にはできない」と自信を失ったことばが増える
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          試合後に言ってはいけない言葉
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          試合後の親の一言が、子どものプレッシャーを更に強めてしまう場合があります。NGな言葉と背景にある心理メカニズムを理解しましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">言ってはいけない言葉</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">なぜダメなのか</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「なんで負けたの？」</td>
                <td className="px-3 py-2 text-gray-600">失敗を責めると、失敗への恐怖が増す</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「ミスしたね」</td>
                <td className="px-3 py-2 text-gray-600">子どもは既に気づいている。指摘は自己肯定感を低下させる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「頑張りが足りなかった」</td>
                <td className="px-3 py-2 text-gray-600">努力不足を示唆すると、内発的動機付けが低下</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「〇〇だったら勝てたのに」</td>
                <td className="px-3 py-2 text-gray-600">後悔を植え付け、プレッシャーが増す</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">「他の子はできてるのに」</td>
                <td className="px-3 py-2 text-gray-600">比較は最も自尊心を傷つける。スポーツ離れにつながる</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          子どもを伸ばす正しい声掛け
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ心理学では、子どもの内発的動機付けを高める声掛けが重要だとされています。結果ではなくプロセスを褒める親の子どもは、プレッシャーに強くなります。
        </p>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-3">試合後のOK声掛け</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">「楽しかった？」</span>
              <span>→ 結果より体験を大切にする親の姿勢</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">「頑張ってたね」</span>
              <span>→ 努力を認める（結果と関係なく）</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">「次はどうしたい？」</span>
              <span>→ 自律性を支援し、内発的動機付けを高める</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">「いい経験になったね」</span>
              <span>→ 失敗を成長の機会として再フレーミング</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">「応援してたよ」</span>
              <span>→ 無条件の愛情を示す</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">内発的動機付けを高める親の3つの支援</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">自律性の支援:</span>
              <span>「どうしたい？」と選択を尊重し、子どもの主体性を尊重する</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">有能感の支援:</span>
              <span>小さな成功を丁寧に認める。失敗から何を学んだかに焦点</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">関係性の支援:</span>
              <span>成績に関わらず、無条件の愛情を示し、親子の信頼を築く</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          親がグランドで守るべきルール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          グランドサイドでの親の行動も、子どもへのプレッシャーに大きく影響します。応援の質が変わると、子どものパフォーマンスが改善します。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">沈黙の応援を心がける</h3>
              <p className="text-sm text-gray-600">
                声を出さず見守るだけのほうが、子どものパフォーマンスが高まる場合があります。試合中の指示は、子どもの判断を奪います。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">審判に文句を言わない</h3>
              <p className="text-sm text-gray-600">
                親の審判批判は、子どもに不安をもたらします。「親も審判を信頼していない」というメッセージになります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">相手チームの悪口を言わない</h3>
              <p className="text-sm text-gray-600">
                スポーツマンシップが欠ける親の行動は、子どもの情動発達に悪影響を与えます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：最高の応援は「信じて見守ること」
        </h2>
        <p className="text-gray-700 leading-relaxed">
          子どもを伸ばすスポーツの経験は、プレッシャーのない環境でこそ生まれます。親の期待よりも、子どもが「楽しい」と感じられることが最優先です。試合後は結果ではなく「頑張ってたね」と努力を認め、子どもの主体性と自尊心を育てましょう。親の最高の応援は、言葉ではなく「無条件に信じて、見守る姿勢」なのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
