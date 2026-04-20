import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスポーツ障害を防ぐために親ができること',
  description:
    '成長期の子どもはスポーツ障害のリスクが高い。親が知っておくべき予防法と、注意すべき痛みのサインを解説します。',
  openGraph: {
    title: '子どものスポーツ障害を防ぐために親ができること',
    description:
      '成長期の子どもはスポーツ障害のリスクが高い。親が知っておくべき予防法と、注意すべき痛みのサインを解説します。',
    images: [{ url: '/images/articles/injury-prevention-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/injury-prevention-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/injury-prevention-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスポーツ障害を防ぐために親ができること',
    images: ['/images/articles/injury-prevention-kids.jpg'],
  },
};

export default function InjuryPreventionKidsPage() {
  return (
    <ArticleLayout
      title="子どものスポーツ障害を防ぐために親ができること"
      heroImage="/images/articles/injury-prevention-kids.jpg"
      heroAlt="ウォームアップをしている子ども"
      publishDate="2025年4月"
      slug="injury-prevention-kids"
      description="成長期の子どもはスポーツ障害のリスクが高い。親が知っておくべき予防法と、注意すべき痛みのサインを解説します。"
      tags={['スポーツ障害', '怪我予防', '子育て']}
      shareText="子どものスポーツ障害を防ぐために親が知っておくべきこと。 #子育て #スポーツ障害"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          成長期の子どもが怪我しやすい理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どものスポーツ障害は、大人とは異なるメカニズムで発生します。成長期特有の身体の変化が、怪我のリスクを高めています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">9-14歳</p>
            <p className="text-xs text-gray-600 mt-1">最も怪我しやすい年代</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">15-20%</p>
            <p className="text-xs text-gray-600 mt-1">スポーツ障害の発生率</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">4倍</p>
            <p className="text-xs text-gray-600 mt-1">骨と筋肉の不調和リスク</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">成長期に怪我しやすい理由</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">骨の成長に筋肉が追いつかない：</span>
              <span>骨は筋肉より速く成長するため、筋肉が硬くなり柔軟性が低下します（成長期スパート）</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">骨端線がまだ軟骨：</span>
              <span>完全に骨化していない骨端線は、大人の骨よりも脆く、損傷しやすいです</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">靭帯の発達が遅れる：</span>
              <span>骨や筋肉の成長に比べ、靭帯の発達が遅れるため、関節が不安定になります</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          多い子どものスポーツ障害5種類
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          成長期の子どもに見られるスポーツ障害には、特定のパターンがあります。親が認識することで、早期発見が可能になります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">オスグッド・シュラッター病（膝）</h3>
              <p className="text-sm text-gray-600">
                膝の皿の下が痛む、最も一般的な成長期スポーツ障害。10～14歳の男子に多い。サッカー、バスケ、バレーなどのジャンプスポーツで発症。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">セーバー病（踵）</h3>
              <p className="text-sm text-gray-600">
                踵が痛む。8～12歳の男子に多い。ランニング、ジャンプスポーツで発症。成長スパート期に増加。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">野球肘（リトルリーグ肘）</h3>
              <p className="text-sm text-gray-600">
                肘の内側が痛む、投球動作による障害。野球で最も多い。10～12歳ころから発症。過度な投球が原因。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">腰椎分離症（腰）</h3>
              <p className="text-sm text-gray-600">
                腰椎の一部が分離する状態。体操、バレー、野球など反り返る動きが多いスポーツで発症。11～15歳の男子に多い。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ジャンパー膝（膝）</h3>
              <p className="text-sm text-gray-600">
                膝の下部靭帯部の痛み。バレー、バスケなどジャンプの多いスポーツで発症。13歳以上で増加。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          親が気づくべき痛みのサイン
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもは大人ほど痛みを訴えないことが多いため、親の観察が重要です。以下の兆候が見られたら、医師の診察を受けてください。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">症状</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">緊急度</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">親の対応</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">特定部位の痛みが1週間以上続く</td>
                <td className="px-3 py-2 text-gray-600">高</td>
                <td className="px-3 py-2 text-gray-600">整形外科受診</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">腫れや熱感がある</td>
                <td className="px-3 py-2 text-gray-600">高</td>
                <td className="px-3 py-2 text-gray-600">冷却・医師相談</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">朝の動き始めが痛い</td>
                <td className="px-3 py-2 text-gray-600">中</td>
                <td className="px-3 py-2 text-gray-600">ストレッチ強化・医師相談</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">運動後だけ痛い（安静で改善）</td>
                <td className="px-3 py-2 text-gray-600">低</td>
                <td className="px-3 py-2 text-gray-600">様子見・無理させない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">痛みをかばう動きをしている</td>
                <td className="px-3 py-2 text-gray-600">高</td>
                <td className="px-3 py-2 text-gray-600">別部位への負荷増大のため医師相談</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">重要：「痛いけど頑張る」は絶対NG</p>
          <p className="text-sm text-red-800">子どもは親や指導者を喜ばせたいという気持ちから、痛みを隠すことがあります。親が「大丈夫？」と定期的に確認し、「痛いなら言ってね」という環境づくりが大切です。一時的な我慢が慢性的な障害につながります。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          効果的な予防法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          適切なウォームアップとクールダウンが、スポーツ障害予防に最も効果的です。これらは親が家庭でも支援できます。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ウォームアップ（10～15分）</h3>
              <p className="text-sm text-gray-600">
                軽いランニング → 動的ストレッチ → 競技動作の練習。いきなり激しい運動は避ける。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">クールダウン（5～10分）</h3>
              <p className="text-sm text-gray-600">
                軽いストレッチ → 静的ストレッチ。筋肉の緊張をほぐし、回復を促進。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">毎日のストレッチ（10～15分）</h3>
              <p className="text-sm text-gray-600">
                成長期は特に柔軟性が低下します。毎日、特にふくらはぎ・太ももの裏を伸ばすことが重要。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">十分な栄養と水分補給</h3>
              <p className="text-sm text-gray-600">
                スポーツ中は定期的な水分補給。スポーツ後1時間以内に栄養補給（特にたんぱく質）。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">適切な休息（週1～2日）</h3>
              <p className="text-sm text-gray-600">
                毎日の激しい練習は避け、週に1～2日の完全休息を設ける。成長と回復に必要。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          定期的な医学的チェック
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          症状がなくても、成長期の子どもは定期的なスポーツ医学的チェックを受けることが重要です。
        </p>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">推奨される医学的チェック</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">年1～2回:</span>
              <span>スポーツ医学を専門とする整形外科受診（成長板の状態・身体バランスの確認）</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">成長スパート期:</span>
              <span>特に注意が必要。骨の成長速度が最大になる時期（平均的には男子14-15歳、女子12-13歳）</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">痛みが出た時:</span>
              <span>自己判断で治すのではなく、速やかに医師に相談。放置が慢性化につながります</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ：怪我を防ぐ親の関わり方
        </h2>
        <p className="text-gray-700 leading-relaxed">
          成長期のスポーツ障害は、適切な予防と早期発見で大半は防ぐことができます。親が心がけるべきは、子どもに「頑張れ」と応援するだけでなく、「痛いことはない？」と定期的に確認し、痛みを訴えやすい環境をつくることです。適切なウォームアップ・クールダウン・栄養・休息を家庭でもサポートし、子どもがスポーツを安全に楽しめるようにしてあげてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
