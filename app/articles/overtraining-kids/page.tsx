import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの練習しすぎ（オーバートレーニング）のサインと対処法',
  description:
    '頑張りすぎの子どもは危険信号が出ています。オーバートレーニング症候群の症状と、親が気づくべきサインを解説します。',
  openGraph: {
    title: '子どもの練習しすぎ（オーバートレーニング）のサインと対処法',
    description:
      '頑張りすぎの子どもは危険信号が出ています。オーバートレーニング症候群の症状と、親が気づくべきサインを解説します。',
    images: [{ url: '/images/articles/overtraining-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/overtraining-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/overtraining-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの練習しすぎ（オーバートレーニング）のサインと対処法',
    images: ['/images/articles/overtraining-kids.jpg'],
  },
};

export default function OvertainingKidsPage() {
  return (
    <ArticleLayout
      title="子どもの練習しすぎ（オーバートレーニング）のサインと対処法"
      heroImage="/images/articles/overtraining-kids.jpg"
      heroAlt="疲れた様子で休んでいる子ども"
      publishDate="2025年4月"
      slug="overtraining-kids"
      description="頑張りすぎの子どもは危険信号が出ています。オーバートレーニング症候群の症状と、親が気づくべきサインを解説します。"
      tags={['オーバートレーニング', 'スポーツ障害', '子育て']}
      shareText="子どもの練習しすぎのサインを見逃さないで。オーバートレーニング症候群を解説。 #子育て #スポーツ障害"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          オーバートレーニング症候群とは？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          オーバートレーニング症候群（OTS）は、練習量や強度が回復能力を超えた状態が続くことで、パフォーマンスが低下する状態です。単なる「疲れ」ではなく、医学的に定義された症候群です。
        </p>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">重要な特徴</p>
          <p className="text-sm text-red-800 mb-3">
            オーバートレーニング症候群の最大の特徴は「パフォーマンス低下」です。子どもが「もっと練習したい」と思っているのに、成績が上がらない、むしろ低下する状態が続きます。
          </p>
          <div className="space-y-2">
            <p className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>パフォーマンス低下が2週間以上続く</span>
            </p>
            <p className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>休養や軽い練習では回復しない</span>
            </p>
            <p className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>医学的な原因（病気など）がない</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          子どもに特有のリスクとは
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          大人よりも子どもがオーバートレーニング症候群になりやすい理由があります。それは「成長中の体」という独特の特性です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">成長板が脆弱</h3>
              <p className="text-sm text-gray-600">
                子どもの骨の成長板（骨端線）は、成人の骨より軟らかく、損傷しやすい状態です。過度な繰り返し動作で、成長に支障をきたすリスクがあります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">回復能力がまだ発達途上</h3>
              <p className="text-sm text-gray-600">
                筋肉や骨の修復機能が、成人ほど効率的ではありません。そのため、過度な練習からの回復に時間がかかります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">心理的プレッシャーに弱い</h3>
              <p className="text-sm text-gray-600">
                大人より精神的にストレスに弱く、親からの期待やコーチの指導が心身に大きな負荷となります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">結果として</p>
          <p className="text-sm text-red-800">
            子どもが大人と同じ練習量をこなすと、オーバートレーニング症候群に陥りやすいのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          親が気づくべき7つのサイン
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">1</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">パフォーマンス低下</span><br/>
              以前より遅くなった、点が入らなくなった、成績が伸びない状態が2週間以上続く
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">2</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">慢性的な疲労</span><br/>
              朝起きられない、帰宅後すぐに寝てしまう、常にだるそう
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">3</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">睡眠障害</span><br/>
              夜寝付けない、夜中に目覚める、朝まで続かない
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">4</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">情緒不安定</span><br/>
              イライラ、気分の落ち込み、無気力さ、ちょっとしたことで怒る
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">5</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">食欲低下</span><br/>
              食事をあまり食べない、好物でも食べたくない
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">6</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">怪我が増えている</span><br/>
              疲労骨折、肉離れ、捻挫など、小さな怪我が頻発
            </p>
          </div>
          <div className="flex gap-3 bg-red-50 rounded-2xl p-4 border border-red-100">
            <span className="text-xl font-black text-red-600 shrink-0">7</span>
            <p className="text-sm text-red-800">
              <span className="font-bold">スポーツへの意欲喪失</span><br/>
              以前は嬉しそうに練習に行ったのに、今は行きたくないと言う
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          週何時間まで大丈夫？年齢別の目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">推奨週間練習時間</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">指針</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6～8歳</td>
                <td className="px-3 py-2 text-gray-600">週6時間以内</td>
                <td className="px-3 py-2 text-gray-600">楽しさ重視</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">9～10歳</td>
                <td className="px-3 py-2 text-gray-600">週10時間以内</td>
                <td className="px-3 py-2 text-gray-600">American Academy of Pediatrics推奨</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">11～12歳</td>
                <td className="px-3 py-2 text-gray-600">週12時間以内</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジでも無理は禁物</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">13歳以上</td>
                <td className="px-3 py-2 text-gray-600">週15時間以内</td>
                <td className="px-3 py-2 text-gray-600">本人の希望に応じて調整</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">大事なポイント</p>
          <p className="text-sm text-red-800">
            「年齢 × 時間」という計算式を使う目安もあります。例えば10歳なら、週の練習時間は10時間程度が目安。これを超えると、オーバートレーニングのリスクが高まります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          回復のためにできること
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">週1日の完全休養</h3>
              <p className="text-sm text-gray-600">
                スポーツは週に1日は完全に休むことが重要。軽い練習でも避け、体と心を完全に休ませることが回復につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">シーズンオフの導入</h3>
              <p className="text-sm text-gray-600">
                年間を通して同じ強度で練習するのではなく、シーズンオフ（年間3ヶ月程度）を設けることが必須。この期間に完全に休養し、心身をリセットします。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">睡眠時間の確保</h3>
              <p className="text-sm text-gray-600">
                小学生は9～11時間、中学生は8～10時間の睡眠が必要。勉強や習い事で睡眠が不足しないように、親が管理することが重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">栄養と水分補給</h3>
              <p className="text-sm text-gray-600">
                練習量が多いほど、栄養と水分の必要性が高まります。タンパク質・炭水化物・ビタミンをバランスよく、練習前後にしっかり摂取させましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">医学的な評価</h3>
              <p className="text-sm text-gray-600">
                症状が続く場合は、小児科医やスポーツドクターに相談し、医学的な原因（甲状腺機能低下など）がないか確認することが重要です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          「もっとやりたい」という子どもへの対応
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          子どもが「もっと練習がしたい」「毎日やりたい」と言うことがあります。その時、親はどう対応すべきでしょうか？
        </p>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-4">
          <p className="font-bold text-red-900 mb-3">重要な心構え</p>
          <p className="text-sm text-red-800">
            子どもの気持ちを尊重することは大切ですが、「親が管理してあげること」も同じくらい重要です。特に小学生までは、自分の体の限界を判断する力が不十分です。
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">練習量より質を重視</h3>
              <p className="text-sm text-gray-600">
                「毎日2時間」より「週3日1時間で集中する」方が、技術習得効果は高い。この違いを子どもに丁寧に説明しましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">休養の意義を伝える</h3>
              <p className="text-sm text-gray-600">
                「休むことも練習の一部」「一流選手も休養を大切にしている」という事実を、年齢に合わせて説明することが有効です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ：休むことも練習のうち
        </h2>
        <p className="text-gray-700 leading-relaxed">
          オーバートレーニング症候群は、親や子ども本人が気づきにくい障害です。パフォーマンス低下、疲労、情緒不安定といった7つのサインに敏感に反応することが予防の鍵です。「もっと練習したら上手くなる」という誤信念を捨て、年齢に合わせた適切な練習量と確実な休養を組み合わせることが、結果的に最も上手くなる道です。子どもの「頑張りたい気持ち」を尊重しながらも、親が「科学的な管理」をしてあげることが、長期的な成長につながるのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
