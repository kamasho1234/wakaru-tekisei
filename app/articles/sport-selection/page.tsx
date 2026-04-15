import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの習い事でスポーツを選ぶ5つのポイント|後悔しない選び方',
  description:
    '子どもに合ったスポーツの習い事の選び方を5つのポイントで解説。適性・興味・体力・時期・環境を考慮した後悔しない選び方をご紹介します。',
  openGraph: {
    title: '子どもの習い事でスポーツを選ぶ5つのポイント|後悔しない選び方',
    description:
      '子どもに合ったスポーツの習い事の選び方を5つのポイントで解説。適性・興味・体力・時期・環境を考慮した後悔しない選び方をご紹介します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sport-selection',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの習い事でスポーツを選ぶ5つのポイント|後悔しない選び方',
    images: ['/og-image.png'],
  },
};

export default function SportSelectionPage() {
  return (
    <ArticleLayout
      title="子どもの習い事でスポーツを選ぶ5つのポイント|後悔しない選び方"
      heroImage="/images/kids-coach.jpg"
      heroAlt="子どもにスポーツを指導するコーチ"
      publishDate="2025年4月"
      tags={['習い事', 'スポーツ選び', '子育て']}
      shareText="子どものスポーツ習い事で後悔しない選び方5つのポイント。適性診断も活用しよう! #子育て #習い事"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          子どものスポーツ習い事選びが難しい理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子に向いているスポーツは何?」親なら一度は考える質問です。でも、正解はなく、複数の視点から判断する必要があります。後悔しないスポーツ選びのために、押さえるべき5つのポイントを解説します。
        </p>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">スポーツ選びの3つの誤解</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">誤解1:</span>
              <span>「体力テストの結果が良い = そのスポーツに向いている」わけではない</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">誤解2:</span>
              <span>「有名なスポーツ = 子どもに合ったスポーツ」ではない</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">誤解3:</span>
              <span>「親が得意なスポーツ = 子どもが好きなスポーツ」ではない</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          スポーツ選びの5つのポイント
        </h2>

        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">子ども自身の興味を優先する</h3>
              <p className="text-sm text-gray-600 mb-3">
                最も大切なのは「本人がやりたいかどうか」です。親が良かれと思ってすすめたスポーツでも、本人が興味なければ続きません。
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-purple-800 border border-purple-100">
                <p className="font-bold mb-1">実践的なアプローチ:</p>
                <ul className="space-y-1">
                  <li>複数のスポーツを「試す機会」を作る</li>
                  <li>「やってみたい」という子どもの一言を大切にする</li>
                  <li>無理強いは絶対に避ける</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">体力的な適性を把握する</h3>
              <p className="text-sm text-gray-600 mb-3">
                新体力テストの結果は、スポーツ選びの参考情報として活用できます。得意な能力が活かせるスポーツを見つけることで、子どもは自信をつけやすくなります。
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-purple-800 border border-purple-100">
                <p className="font-bold mb-1">活かし方:</p>
                <ul className="space-y-1">
                  <li>50m走が速い → サッカー、陸上、バスケ</li>
                  <li>持久力がある → 水泳、マラソン、サッカー</li>
                  <li>柔軟性が高い → 体操、ダンス、新体操</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">年齢・発達段階に合わせる</h3>
              <p className="text-sm text-gray-600 mb-3">
                子どもの発達段階によって、適したスポーツが変わります。早すぎる専門化よりも、多様な運動経験が大切です。
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-purple-800 border border-purple-100">
                <p className="font-bold mb-1">発達段階別のアプローチ:</p>
                <ul className="space-y-1">
                  <li>3～5歳: 複数のスポーツで多様な動作を学ぶ</li>
                  <li>6～8歳: 興味のあるスポーツを試す時期</li>
                  <li>9～12歳: ゴールデンエイジ。技術習得の最適時期</li>
                  <li>13歳以上: 興味と得意さで本格化を検討</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">通いやすさ・継続しやすさを確認</h3>
              <p className="text-sm text-gray-600 mb-3">
                どんなに適性のあるスポーツでも、通えなければ意味がありません。実務的な側面も必ず確認します。
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-purple-800 border border-purple-100">
                <p className="font-bold mb-1">確認すべき項目:</p>
                <ul className="space-y-1">
                  <li>教室の場所・移動時間は妥当か</li>
                  <li>月謝・費用は家計に負担がないか</li>
                  <li>開催曜日・時間は家族のスケジュールに合うか</li>
                  <li>コーチの質・教室の雰囲気は良いか</li>
                  <li>兄弟姉妹の習い事との両立は可能か</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">短期間試してから決める</h3>
              <p className="text-sm text-gray-600 mb-3">
                「習う前に試す」ことが、最も失敗を防ぐ方法です。多くの教室では、体験入会やお試し期間を設けています。
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-purple-800 border border-purple-100">
                <p className="font-bold mb-1">実践的なステップ:</p>
                <ul className="space-y-1">
                  <li>1. 複数の教室に体験申し込み(通常は無料)</li>
                  <li>2. 実際に参加して、本人の反応を見る</li>
                  <li>3. 「また行きたい！」という言葉を確認</li>
                  <li>4. 4週間～1ヶ月試して、続ける判断をする</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          年齢別おすすめスポーツ
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-3 px-4 py-2 bg-purple-100 rounded-lg">3～5歳(幼児期)</h3>
            <div className="grid grid-cols-2 gap-2 px-4 py-3">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>体操・ダンス</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>親子スイミング</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>ボール遊び</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>かけっこ教室</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 px-4 py-2 bg-purple-100 rounded-lg">6～8歳(低学年)</h3>
            <div className="grid grid-cols-2 gap-2 px-4 py-3">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>水泳スクール</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>サッカースクール</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>体操教室</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>ダンス</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>武道(柔道・空手)</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>テニス</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 px-4 py-2 bg-purple-100 rounded-lg">9～12歳(高学年・ゴールデンエイジ)</h3>
            <div className="grid grid-cols-2 gap-2 px-4 py-3">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>チームスポーツ本格化</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>陸上・短距離走</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>バスケットボール</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>卓球・バドミントン</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>新体操・バレーボール</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>専門技術の習得開始</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          習い事を辞めたいと言った時の対応
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「辞めたい」という言葉は、親にとって悩ましいものです。しかし、それは大切な判断のきっかけになります。
        </p>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-3">「辞めたい」と言った時の確認</p>
          <ul className="space-y-3">
            <li className="text-sm text-purple-800">
              <span className="font-bold">1. 理由を聞く:</span> 「友達がいない」「コーチが怖い」「体がきつい」など、理由によって対応が変わります
            </li>
            <li className="text-sm text-purple-800">
              <span className="font-bold">2. 一時的 vs 本質的:</span> 一時的な気分なのか、根本的な理由があるのかを見極めます
            </li>
            <li className="text-sm text-purple-800">
              <span className="font-bold">3. 無理強いしない:</span> 本人が「続けたくない」ならば、それを尊重することも大切です
            </li>
            <li className="text-sm text-purple-800">
              <span className="font-bold">4. 「次のステップ」を考える:</span> 別のスポーツに切り替えるなど、前向きな選択肢を一緒に探します
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          子どものスポーツ選びに正解はありません。ですが、この5つのポイントを押さえることで、失敗を大きく減らせます。最も大切なのは「本人の気持ち」です。親のエゴではなく、子ども自身が「やりたい！」と感じるスポーツを、一緒に探す姿勢を大切にしてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
