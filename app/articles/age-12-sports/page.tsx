import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '12歳の子どもに向いているスポーツ｜ゴールデンエイジ終期と思春期スポーツ戦略',
  description:
    '12歳（小学6年生〜中学1年生）はゴールデンエイジの終わりと思春期の始まり。この転換期に向いているスポーツと筋力発達を活かした戦略を解説します。',
  openGraph: {
    title: '12歳の子どもに向いているスポーツ｜ゴールデンエイジ終期と思春期スポーツ戦略',
    description:
      '12歳（小学6年生〜中学1年生）はゴールデンエイジの終わりと思春期の始まり。この転換期に向いているスポーツと筋力発達を活かした戦略を解説します。',
    images: [{ url: '/images/articles/age-12-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-12-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '12歳の子どもに向いているスポーツ｜ゴールデンエイジ終期と思春期スポーツ戦略',
    images: ['/images/articles/age-12-sports.jpg'],
  },
};

export default function Age12SportsPage() {
  return (
    <ArticleLayout
      title="12歳の子どもに向いているスポーツ｜ゴールデンエイジ終期と思春期スポーツ戦略"
      heroImage="/images/articles/age-12-sports.jpg"
      heroAlt="12歳の子どもが本格的なスポーツに取り組んでいる様子"
      publishDate="2025年4月"
      slug="age-12-sports"
      description="12歳（小学6年生〜中学1年生）はゴールデンエイジの終わりと思春期の始まり。この転換期に向いているスポーツと筋力発達を活かした戦略を解説します。"
      tags={['12歳', '中学1年生', 'ゴールデンエイジ', '思春期スポーツ']}
      shareText="12歳はゴールデンエイジ終期。思春期の転換点でのスポーツ戦略を解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          12歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          12歳はゴールデンエイジ（9〜12歳）の最終年にあたり、神経系の発達がほぼ完成します。同時に、思春期の到来により体に大きな変化が起きる時期でもあります。特に男子は筋力が急速に発達し始め、「ポストゴールデンエイジ（13〜15歳）」への移行期になります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">ゴールデンエイジ終期</p>
            <p className="text-xs text-amber-800">神経系ほぼ完成。「即座の習得」能力が減衰し始める</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">身体的変化</p>
            <p className="text-xs text-blue-800">男子：筋力急増・身長急伸が始まる。女子：体型変化・月経開始</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-2">心理的変化</p>
            <p className="text-xs text-green-800">自己意識が強まる。仲間との比較・反抗期の始まり</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          12歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">これまでのスポーツを継続・深化させる</h3>
            <p className="text-sm text-gray-600">
              ゴールデンエイジで積み上げた技術の「完成」と「安定」を目指す時期です。中学進学後は部活動でより高いレベルの練習が始まります。12歳のうちに基礎技術を固めておくことが、中学での早期活躍につながります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">筋力が必要なスポーツへの本格移行</h3>
            <p className="text-sm text-gray-600">
              野球・ラグビー・バスケ・バレーなど、身体的接触や瞬発力が求められるスポーツは、12歳以降に筋力がついてくることで競技力が急上昇します。技術の土台があれば、筋力が増すことで記録・実力が大幅に伸びます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳（最後の技術調整期）</h3>
            <p className="text-sm text-gray-600">
              12歳は水泳の技術を最終調整する重要な時期です。フォーム・ターン・スタートの完成度を高めることで、思春期以降に筋力が増した時に大幅な記録更新が期待できます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">新しいスポーツを中学から始める場合</h3>
            <p className="text-sm text-gray-600">
              バレーボール・ハンドボール・ソフトテニスなど、中学から本格始動するスポーツは、これまでの運動経験があれば習得が速いです。ゴールデンエイジで培った「体を動かす感覚」が新しい種目でも活きます。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          思春期のスポーツで注意すべきこと
        </h2>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <ul className="space-y-3">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span><strong>成長痛・オスグッド病に注意</strong> — 急激な身長増加期は腱・骨への負担が増します。膝・かかとの痛みが続く場合は医療機関に相談してください。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span><strong>練習量の急増に注意</strong> — 中学進学で練習量が一気に増えると過負荷になりやすい時期です。疲労骨折・成長板損傷のリスクがあるため、休養の大切さを伝えましょう。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span><strong>本人の意思を尊重する</strong> — 思春期は自己決定欲求が強まります。スポーツを続けるかどうか、どの種目をやるかを子ども自身が選べるよう、選択肢を示しながら見守りましょう。</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          ゴールデンエイジを振り返って
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          9〜12歳のゴールデンエイジを通じて積み上げてきた運動の基礎は、12歳以降に大きな花を開かせます。重要なのは「どのスポーツをやったか」より「どれだけ多様な動きを経験したか」です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          ゴールデンエイジが終わっても、スポーツは中学・高校・大学と続いていきます。「技術の時代（9〜12歳）」から「体力・筋力の時代（13歳〜）」への移行を楽しみに、これからのスポーツライフを応援してあげましょう。
        </p>
      </div>
    </ArticleLayout>
  );
}
