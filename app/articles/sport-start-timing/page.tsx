import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '何歳からスポーツを始めるべき？年齢別の適切なタイミング',
  description:
    '子どものスポーツはいつ始めるのがベスト？文科省の運動能力発達データとスポーツ別の開始推奨年齢を詳しく解説します。',
  openGraph: {
    title: '何歳からスポーツを始めるべき？年齢別の適切なタイミング',
    description:
      '子どものスポーツはいつ始めるのがベスト？文科省の運動能力発達データとスポーツ別の開始推奨年齢を詳しく解説します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sport-start-timing',
  },
  twitter: {
    card: 'summary_large_image',
    title: '何歳からスポーツを始めるべき？年齢別の適切なタイミング',
    images: ['/og-image.png'],
  },
};

export default function SportStartTimingPage() {
  return (
    <ArticleLayout
      title="何歳からスポーツを始めるべき？年齢別の適切なタイミング"
      heroImage="/images/articles/sport-start-timing.jpg"
      heroAlt="様々な年齢の子どもたちがスポーツを楽しむ様子"
      publishDate="2025年4月"
      tags={['スポーツ開始年齢', '習い事', '子育て']}
      shareText="子どものスポーツ、何歳から始めるのがベスト？年齢別の適切なタイミングを解説。 #子育て #習い事"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          子どもの運動能力発達の4段階
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文科省の研究により、子どもの運動能力発達は4つの段階に分かれることが明らかになっています。スポーツ開始時期を判断するには、この発達段階を理解することが重要です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">神経系発達期（0～5歳）</h3>
              <p className="text-sm text-gray-600">
                神経系が急速に発達する時期。この時期に神経系の基礎が形成されます。具体的な動きより、多様な動き体験が重要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">基本動作習得期（5～8歳）</h3>
              <p className="text-sm text-gray-600">
                走る・跳ぶ・投げるなど、基本的な動作を習得する時期。複数のスポーツを経験することで、基礎体力が形成されます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ゴールデンエイジ（9～12歳）</h3>
              <p className="text-sm text-gray-600">
                神経系が90%完成し、技術習得が最も効率的な時期。この時期に習得した動きは、一生の財産になります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">専門化期（13歳以降）</h3>
              <p className="text-sm text-gray-600">
                本格的な競技スポーツへの専門化が可能な時期。既に習得した基礎動作を応用し、より高度な技術を学びます。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">重要なデータ</p>
          <p className="text-sm text-green-800">
            スキャモンの発育曲線によると、神経系は12歳までに成人の90%まで発達します。この時期に多様な運動経験をすることで、その後のスポーツ習得が飛躍的に効率化します。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          年齢別：何をすべきか（0歳～12歳）
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">発達段階</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">推奨活動</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">0～3歳</td>
                <td className="px-3 py-2 text-gray-600">神経系発達期</td>
                <td className="px-3 py-2 text-gray-600">親子で遊ぶ、ボール遊び</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3～5歳</td>
                <td className="px-3 py-2 text-gray-600">神経系発達期～基本動作習得期</td>
                <td className="px-3 py-2 text-gray-600">多様な動き体験（走る・跳ぶ・投げる・泳ぐ等）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5～8歳</td>
                <td className="px-3 py-2 text-gray-600">基本動作習得期</td>
                <td className="px-3 py-2 text-gray-600">複数スポーツ経験（1つに絞らない）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">9～12歳</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジ</td>
                <td className="px-3 py-2 text-gray-600">得意なスポーツの技術習得、複数経験も継続</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          スポーツ種目別の開始推奨年齢一覧
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">スポーツ</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">推奨開始年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">水泳</td>
                <td className="px-2 py-2 text-gray-600">3歳～</td>
                <td className="px-2 py-2 text-gray-600">溺水防止、神経系発達に効果的</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">体操</td>
                <td className="px-2 py-2 text-gray-600">4歳～</td>
                <td className="px-2 py-2 text-gray-600">基本動作習得、柔軟性向上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">サッカー</td>
                <td className="px-2 py-2 text-gray-600">5歳～</td>
                <td className="px-2 py-2 text-gray-600">ボール感覚、基本動作習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">テニス</td>
                <td className="px-2 py-2 text-gray-600">5歳～</td>
                <td className="px-2 py-2 text-gray-600">手眼協調性、敏捷性</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">野球</td>
                <td className="px-2 py-2 text-gray-600">6歳～</td>
                <td className="px-2 py-2 text-gray-600">投げる・打つ動作習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">バスケットボール</td>
                <td className="px-2 py-2 text-gray-600">6歳～</td>
                <td className="px-2 py-2 text-gray-600">敏捷性、判断力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">柔道</td>
                <td className="px-2 py-2 text-gray-600">6歳～</td>
                <td className="px-2 py-2 text-gray-600">礼儀、バランス感覚</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          「早く始めれば有利」は本当か？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「早く始めれば上手くなる」という考えは、必ずしも正しくありません。むしろ、発達段階に合わせた適切なタイミングで始めることが重要です。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-4">
          <p className="font-bold text-green-900 mb-3">早期開始のメリット</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>基本技術の習得が早い</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>競技経験が豊富になる</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>同年代より上達が早い可能性</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-3">早期開始のリスク</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>成長板への過度な負荷</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>燃え尽き症候群のリスク</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>他のスポーツ適性の見落とし</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          早期専門化のリスクとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          3～5歳の段階で特定スポーツに専門化することは、多くの弊害をもたらします。この時期は「多様な動き体験」が最優先です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">燃え尽き症候群</h3>
              <p className="text-sm text-gray-600">
                幼い頃からの過度な練習と競争プレッシャーで、スポーツ嫌いになるリスク
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">オーバーユース障害</h3>
              <p className="text-sm text-gray-600">
                同じ部位を使い続けることによる慢性的な怪我や炎症
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">社会性の発達阻害</h3>
              <p className="text-sm text-gray-600">
                スポーツだけに時間を使い、他の友人関係や経験の機会を失う
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：子どもの発達段階を信じよう
        </h2>
        <p className="text-gray-700 leading-relaxed">
          子どもの運動能力発達には、決まったタイムラインがあります。3～5歳は特定スポーツより「走る・跳ぶ・投げる・泳ぐ」など多様な動き体験が最重要。6～8歳で複数スポーツを経験し、9～12歳のゴールデンエイジで得意な競技を本格化させるという流れが、科学的に証明された最適な道です。「早く始めたから有利」ではなく、発達段階に合わせた適切なタイミングが、結果的に最も上手くなる道なのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
