import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '人見知り・内向的な子に向いているスポーツ｜個人競技で自信をつける',
  description:
    '人見知りや内向的な性格の子どもに向いているスポーツを解説。チームスポーツが苦手でも、個人競技・少人数競技であれば自分のペースで伸びられます。水泳・体操・陸上・テニス・武道など向いている種目とその理由を紹介。',
  openGraph: {
    title: '人見知り・内向的な子に向いているスポーツ｜個人競技で自信をつける',
    description:
      '人見知りや内向的な性格の子どもに向いているスポーツを解説。個人競技・少人数競技であれば自分のペースで伸びられます。水泳・体操・陸上・テニス・武道などを紹介。',
    images: [{ url: '/images/articles/introverted-kids-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/introverted-kids-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/introverted-kids-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '人見知り・内向的な子に向いているスポーツ｜個人競技で自信をつける',
    images: ['/images/articles/introverted-kids-sports.jpg'],
  },
};

export default function IntrovertedKidsSportsPage() {
  return (
    <ArticleLayout
      title="人見知り・内向的な子に向いているスポーツ｜個人競技で自信をつける"
      heroImage="/images/articles/introverted-kids-sports.jpg"
      heroAlt="一人で集中して練習する子ども"
      publishDate="2025年5月"
      slug="introverted-kids-sports"
      description="人見知りや内向的な性格の子どもに向いているスポーツを解説。チームスポーツが苦手でも、個人競技・少人数競技であれば自分のペースで伸びられます。水泳・体操・陸上・テニス・武道など向いている種目とその理由を紹介。"
      tags={['人見知り', '内向的', '個人競技', 'スポーツ選び']}
      shareText="人見知りな子・内向的な子に向いているスポーツを解説。チームスポーツが苦手でも個人競技なら自分のペースで伸びられます！ #子育て #スポーツ選び"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          内向的な子どもはスポーツが苦手？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子は人見知りだから、スポーツは向いていないかもしれない」と感じている親御さんは少なくありません。しかし実際には、内向的な性格の子どもが不向きなのはチームスポーツの「集団行動」や「大声でのコミュニケーション」であって、スポーツそのものではありません。
        </p>
        <p className="text-gray-700 leading-relaxed">
          内向的な子どもは、集中力・忍耐力・細部への注意力が高い傾向があります。これらの特性は、個人競技や精密な技術が求められるスポーツで大きな武器になります。性格に合ったスポーツを選ぶことで、子どもはみるみる輝きます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          内向的な子どもに向いているスポーツ6選
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">水泳</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              水中では自分の世界に集中でき、チームメイトとの会話が必要ありません。タイムという明確な自己目標を持ちやすく、「昨日の自分より速くなる」達成感を積み上げられます。集団レッスンでも各自がレーンで練習するため、プレッシャーが少ないです。
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="font-bold text-amber-900 mb-2">体操・新体操</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              一人で技を磨く集中した練習が中心です。前転・側転から始まり、段階的に難易度が上がる明確な成長ラインがモチベーションを維持しやすくしています。繊細な感覚と集中力が得点につながるため、内向的な子どもが活躍しやすい競技です。
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2">陸上競技（短距離・長距離・跳躍）</p>
            <p className="text-sm text-green-800 leading-relaxed">
              「自分の記録を超える」ことがゴールなため、他者と直接競わない練習スタイルを取れます。特に長距離走は自分のペースで走り続ける精神力が鍵で、内向的な子どもが持つ忍耐力が活かされます。
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <p className="font-bold text-purple-900 mb-2">テニス・卓球（個人戦）</p>
            <p className="text-sm text-purple-800 leading-relaxed">
              1対1の競技は大人数のチーム行動がなく、試合中も自分の内側に集中しやすい環境です。戦術思考が勝負を左右するため、じっくり考える内向的な子の強みが活きます。
            </p>
          </div>

          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-2">柔道・空手・剣道（武道）</p>
            <p className="text-sm text-red-800 leading-relaxed">
              礼儀・規律を重んじる文化が、内向的な子どもに合った落ち着いた環境を提供します。一人の稽古（型の練習）が多く、静かに集中して技術を磨くスタイルが内向的な性格とマッチします。
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <p className="font-bold text-gray-900 mb-2">ゴルフ・アーチェリー</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              自分のペースで集中する競技の代表格。周囲の声や状況に影響されず、自分の内側に集中する力が最も求められます。習い始めの年齢を問わず取り組みやすい点も魅力です。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          チームスポーツでもうまくいく方法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子ども本人がサッカーや野球などチームスポーツをやりたいと言っている場合は、性格を理由に止める必要はありません。内向的な子どもがチームスポーツで活躍している例はたくさんあります。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">チームスポーツで内向的な子が活きる役割</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-amber-800">ゴールキーパー（集中力・判断力が鍵）</li>
            <li className="text-sm text-amber-800">ピッチャー・バッテリー（相手を読む戦術思考）</li>
            <li className="text-sm text-amber-800">セッター（状況を冷静に把握してトス判断）</li>
            <li className="text-sm text-amber-800">控えのアナリスト的役割（データや観察力）</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          人見知りや内向的な性格は、スポーツの才能を邪魔するものではありません。スポーツの種目を正しく選べば、集中力・忍耐力・戦術思考力など内向的な子どもが持つ強みが最大限に発揮されます。まず子ども自身が「やってみたい」と思える種目を体験させ、楽しさを見つけることを最優先にしてください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">スポーツで人見知りは改善されますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">スポーツを通じて共通の目標を持つ仲間と関わることで、コミュニケーションへの抵抗感が少しずつ和らぐ場合があります。ただし、人見知りは性格の一部であり、無理に「直す」ものではありません。子どもが安心できる環境でスポーツを楽しむことが、自信とコミュニケーション力を自然に育てます。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">内向的な子どもに習い事を無理に始めさせても大丈夫ですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">強制は逆効果になることが多いです。まず体験レッスンに参加して雰囲気を見てから決める、少人数クラスから始めるなど、安心感を優先した段階的なアプローチが効果的です。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">子どもが「やりたくない」と言ったら？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">「やりたくない理由」を丁寧に聞いてみましょう。「怖い・緊張する・失敗したくない」という内向的な子どもが感じやすい感情が隠れていることがあります。理由によっては種目を変える、クラスを変える、しばらく休むという選択肢も有効です。</p>
          </details>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'スポーツで人見知りは改善されますか？',
                acceptedAnswer: { '@type': 'Answer', text: '共通の目標を持つ仲間と関わることでコミュニケーションへの抵抗感が和らぐ場合があります。人見知りは性格の一部であり、子どもが安心できる環境でスポーツを楽しむことが自信を育てます。' },
              },
              {
                '@type': 'Question',
                name: '内向的な子どもに習い事を無理に始めさせても大丈夫ですか？',
                acceptedAnswer: { '@type': 'Answer', text: '強制は逆効果になることが多いです。体験レッスンから始める、少人数クラスを選ぶなど、安心感を優先した段階的なアプローチが効果的です。' },
              },
              {
                '@type': 'Question',
                name: '子どもが「やりたくない」と言ったら？',
                acceptedAnswer: { '@type': 'Answer', text: '「やりたくない理由」を丁寧に聞いてみましょう。種目を変える、クラスを変える、しばらく休むという選択肢も有効です。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
