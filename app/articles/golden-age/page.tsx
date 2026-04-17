import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ゴールデンエイジとは？9～12歳が「運動神経の黄金期」と呼ばれる理由',
  description:
    '子どもの運動神経発達において最も重要な時期「ゴールデンエイジ」を解説。9～12歳にできることと、この時期を最大限に活かす方法をご紹介します。',
  openGraph: {
    title: 'ゴールデンエイジとは？9～12歳が「運動神経の黄金期」と呼ばれる理由',
    description:
      '子どもの運動神経発達において最も重要な時期「ゴールデンエイジ」を解説。9～12歳にできることと、この時期を最大限に活かす方法をご紹介します。',
    images: [{ url: '/images/articles/golden-age.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/golden-age',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ゴールデンエイジとは？9～12歳が「運動神経の黄金期」と呼ばれる理由',
    images: ['/images/articles/golden-age.jpg'],
  },
};

export default function GoldenAgePage() {
  return (
    <ArticleLayout
      title="ゴールデンエイジとは？9～12歳が「運動神経の黄金期」と呼ばれる理由"
      heroImage="/images/articles/golden-age.jpg"
      heroAlt="子どもにスポーツを教えるコーチ"
      publishDate="2025年4月"
      slug="golden-age"
      description="子どもの運動神経発達において最も重要な時期「ゴールデンエイジ」を解説。9～12歳にできることと、この時期を最大限に活かす方法をご紹介します。"
      tags={['運動発達', 'ゴールデンエイジ', '小学生']}
      shareText="「ゴールデンエイジ」9～12歳が運動神経の黄金期と呼ばれる理由を解説。お子さんの適性を見逃さないで！ #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          ゴールデンエイジとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「ゴールデンエイジ」という言葉を聞いたことはありますか？これは、子どもの運動神経発達において最も重要な時期のことです。スポーツ科学の分野では、神経系の発達を3つのステージに分けています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">プレゴールデンエイジ</p>
            <p className="text-xs text-blue-800">3～8歳 神経系が急速に発達する時期</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">ゴールデンエイジ</p>
            <p className="text-xs text-amber-800">9～12歳 神経系がほぼ完成する時期</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-2">ポストゴールデンエイジ</p>
            <p className="text-xs text-green-800">13～15歳 筋力が発達する時期</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          特に9～12歳は「ゴールデンエイジ」と呼ばれ、この時期にどのような運動経験をするかが、その後の運動能力の発達に大きな影響を与えるのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          なぜ9～12歳が特別なのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもの神経系は、生まれてから12歳までにほぼ90%以上が完成するとされています。特に9～12歳の4年間は、様々な動きを習得する「黄金の時間」です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">神経系発達の特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">1.</span>
              <span>複雑な動作を短期間で習得できる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">2.</span>
              <span>バランス感覚と空間認識能力が急速に発達</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">3.</span>
              <span>様々なスポーツの基礎技術を効率よく習得</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          この時期に多様な運動経験をすると、その後の運動学習が格段に効率化されます。逆に、この時期に特定のスポーツしか経験していなくても、後からでも他のスポーツを習い始めることはできますが、習得の速度は落ちる傾向にあります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          この時期にできることと親の役割
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">多様な運動経験をさせる</h3>
              <p className="text-sm text-gray-600">
                1つのスポーツに絞るのではなく、複数のスポーツを経験させることが重要です。ボール運動、走る・跳ぶなどの基礎動作、バランス運動など、様々な動きを習得させましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">スポーツの基礎技術を習得させる</h3>
              <p className="text-sm text-gray-600">
                専門的な指導者から、正しい姿勢・フォーム・基本技術を学ぶことが大切です。正しい基礎ができていると、後の上達が格段に早くなります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽しむことを優先する</h3>
              <p className="text-sm text-gray-600">
                本当に大切なのは「楽しむ」こと。無理に続けさせたり、成績にこだわりすぎると、運動嫌いになる可能性があります。子どもが「やりたい！」と思う環境づくりが最優先です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">チャレンジの機会を作る</h3>
              <p className="text-sm text-gray-600">
                できなかったことができるようになる経験は、子どもの自信と意欲につながります。適度な難易度のチャレンジを用意しましょう。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          年齢別の発達目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">発達の特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6歳</td>
                <td className="px-3 py-2 text-gray-600">基本的な動きの習得期。走る・跳ぶ・投げるなどの基礎が形成される</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">8歳</td>
                <td className="px-3 py-2 text-gray-600">巧緻性が高まる。複雑な動作がスムーズになり始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">9歳</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジ開始。神経系がほぼ完成に向かう。新しい技術を素早く習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">10歳</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジのピーク。最も習得が早い時期</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">11歳</td>
                <td className="px-3 py-2 text-gray-600">技術の洗練期。習得した動作がより正確で効率的になる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">12歳</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジ終盤。神経系の発達がほぼ完成。思春期に向けて変化が始まる</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          大切なのは「楽しむこと」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ゴールデンエイジは、確かに重要な時期です。しかし、だからこそ焦りは禁物です。成績や勝利にこだわるあまり、子どもから「スポーツを楽しむ気持ち」を奪ってしまっては本末転倒です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">覚えておきたい3つのポイント</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            ゴールデンエイジを活かすためには、「子どもが楽しい」という感情が最優先です。楽しければ、自分から進んで練習し、失敗も学びに変えることができます。親の役割は、子どもが様々なスポーツを「試す」環境を作り、子ども自身が「これがやりたい！」と感じるものを見つけるのをサポートすることです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          9～12歳のゴールデンエイジは、子どもの運動神経発達において本当に大切な時期です。この時期にどのような運動経験をするかで、その後の可能性は大きく変わります。ですが、焦らず、楽しく、多様な経験をさせることが最も効果的です。お子さんの個性と適性に合わせて、最高の環境を整えてあげてください。
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">ゴールデンエイジはいつからいつまでですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">ゴールデンエイジは9歳から12歳の時期を指します。この前の3〜8歳は「プレゴールデンエイジ」、後の13〜15歳は「ポストゴールデンエイジ」と呼ばれます。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">ゴールデンエイジを過ぎたらスポーツは上達しませんか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">そんなことはありません。ゴールデンエイジを過ぎても、スポーツの習得は十分可能です。ただし、12歳以降は神経系の発達が落ち着くため、技術習得のスピードは若干落ちる傾向があります。筋力は13歳以降に大きく発達するため、競技によっては後から伸びるものもあります。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">ゴールデンエイジに1つのスポーツに絞るべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">スポーツ科学的には、ゴールデンエイジは複数のスポーツを経験する「多様な運動経験」が推奨されています。1つに絞ると特定の動作は上達しますが、総合的な運動能力の発達が偏る可能性があります。まずは色々なスポーツを試してから、子どもが「好き」と感じるものを見つけるのが理想的です。</p>
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
                name: 'ゴールデンエイジはいつからいつまでですか？',
                acceptedAnswer: { '@type': 'Answer', text: 'ゴールデンエイジは9歳から12歳の時期を指します。この前の3〜8歳は「プレゴールデンエイジ」、後の13〜15歳は「ポストゴールデンエイジ」と呼ばれます。' },
              },
              {
                '@type': 'Question',
                name: 'ゴールデンエイジを過ぎたらスポーツは上達しませんか？',
                acceptedAnswer: { '@type': 'Answer', text: 'そんなことはありません。12歳以降も技術習得は可能です。筋力は13歳以降に大きく発達するため、競技によっては後から伸びるものもあります。' },
              },
              {
                '@type': 'Question',
                name: 'ゴールデンエイジに1つのスポーツに絞るべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: 'スポーツ科学的には複数のスポーツを経験する「多様な運動経験」が推奨されています。まず色々なスポーツを試してから子どもが好きなものを見つけるのが理想的です。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
