import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスポーツ中の熱中症対策｜症状の見分け方・予防・応急処置',
  description:
    '夏のスポーツ中に起こりやすい子どもの熱中症を徹底解説。熱中症の症状の重さの見分け方（熱けいれん・熱疲労・熱射病）、水分補給のタイミング、WBGTの目安、応急処置の手順を親が知っておくべき情報としてまとめました。',
  openGraph: {
    title: '子どものスポーツ中の熱中症対策｜症状の見分け方・予防・応急処置',
    description:
      '夏のスポーツ中に起こりやすい子どもの熱中症を徹底解説。症状の見分け方・水分補給のタイミング・応急処置の手順を親が知っておくべき情報としてまとめました。',
    images: [{ url: '/images/articles/heat-stroke-sports-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/heat-stroke-sports-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/heat-stroke-sports-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスポーツ中の熱中症対策｜症状の見分け方・予防・応急処置',
    images: ['/images/articles/heat-stroke-sports-kids.jpg'],
  },
};

export default function HeatStrokeSportsKidsPage() {
  return (
    <ArticleLayout
      title="子どものスポーツ中の熱中症対策｜症状の見分け方・予防・応急処置"
      heroImage="/images/articles/heat-stroke-sports-kids.jpg"
      heroAlt="夏の炎天下でスポーツをする子ども"
      publishDate="2025年5月"
      slug="heat-stroke-sports-kids"
      description="夏のスポーツ中に起こりやすい子どもの熱中症を徹底解説。熱中症の症状の重さの見分け方（熱けいれん・熱疲労・熱射病）、水分補給のタイミング、WBGTの目安、応急処置の手順を親が知っておくべき情報としてまとめました。"
      tags={['熱中症', '夏', '水分補給', '予防']}
      shareText="子どものスポーツ中の熱中症対策を徹底解説！症状の見分け方・水分補給のタイミング・応急処置の手順を確認しておきましょう。 #子育て #熱中症対策 #スポーツ"
      citations={[
        '環境省「熱中症予防情報サイト」— WBGT指数の基準値・熱中症の症状分類',
        '日本スポーツ協会「スポーツ活動中の熱中症予防ガイドブック」',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          子どもが熱中症になりやすい理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          子どもは大人に比べて体温調節機能が未発達であり、同じ気温・同じ運動量でも熱中症になりやすい状態にあります。また、身長が低いため地面に近い層の熱気（照り返し）の影響を強く受けます。
        </p>
        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-4">
          <p className="font-bold text-red-900 mb-2">子どもが特に注意すべき理由</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-red-800">汗をかく機能（汗腺）が大人より少ない</li>
            <li className="text-sm text-red-800">体重当たりの体表面積が大きく、外気温の影響を受けやすい</li>
            <li className="text-sm text-red-800">「のどが渇いた」と感じる前にすでに脱水が始まっていることが多い</li>
            <li className="text-sm text-red-800">熱中症の危険を自分で判断・訴えられないケースがある</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          熱中症の症状と重症度の見分け方
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">重症度</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">主な症状</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対応</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-green-700">軽度（I度）</td>
                <td className="px-3 py-2 text-gray-600">めまい・立ちくらみ・筋肉のこむら返り・大量の汗</td>
                <td className="px-3 py-2 text-gray-600">涼しい場所に移動・水分・塩分補給</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-yellow-700">中度（II度）</td>
                <td className="px-3 py-2 text-gray-600">頭痛・気分の悪さ・嘔吐・倦怠感・体のだるさ</td>
                <td className="px-3 py-2 text-gray-600">医療機関への受診を検討。自力で水分補給できれば補給</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-red-700">重度（III度）</td>
                <td className="px-3 py-2 text-gray-600">意識障害・けいれん・まっすぐ歩けない・高体温（40度以上）</td>
                <td className="px-3 py-2 text-gray-600">すぐに119番。体を冷やしながら救急車を待つ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-4">※ 日本救急医学会の熱中症分類を参考に作成</p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          WBGT指数と運動の目安
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WBGT（湿球黒球温度）は気温・湿度・輻射熱を総合的に考慮した指数です。環境省や日本スポーツ協会では、WBGT値に応じた運動の指針を定めています。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">WBGT値</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">危険度</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">運動の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">28度未満</td>
                <td className="px-3 py-2 text-yellow-700 font-bold">注意</td>
                <td className="px-3 py-2 text-gray-600">積極的な水分補給を行いながら実施可</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">28〜31度</td>
                <td className="px-3 py-2 text-orange-700 font-bold">警戒</td>
                <td className="px-3 py-2 text-gray-600">積極的な休憩・水分補給。激しい運動は控え目に</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">31〜35度</td>
                <td className="px-3 py-2 text-red-700 font-bold">厳重警戒</td>
                <td className="px-3 py-2 text-gray-600">激しい運動は原則中止。短時間のみ実施する場合は万全の対策を</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">35度以上</td>
                <td className="px-3 py-2 text-red-900 font-bold">危険</td>
                <td className="px-3 py-2 text-gray-600">屋外での運動は原則中止</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          熱中症を防ぐ水分補給のポイント
        </h2>
        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">喉が渇く前に飲む</h3>
              <p className="text-sm text-gray-600">15〜20分ごとに、喉が渇いていなくても一口〜コップ半分の水分を補給します。「飲みなさい」と声をかけ、子ども自身が習慣づくよう促しましょう。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">運動前から水分を摂る</h3>
              <p className="text-sm text-gray-600">練習・試合の1〜2時間前から水分をしっかり摂る習慣をつけます。練習直前だけではすでに遅い場合があります。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">長時間運動にはスポーツドリンク</h3>
              <p className="text-sm text-gray-600">1時間以上の運動では、塩分（ナトリウム）と糖分を含むスポーツドリンクが水だけより効果的です。ただし糖分の過剰摂取に注意し、薄めて使用するのも選択肢です。</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          熱中症は予防できる病気です。WBGT指数を事前に確認し、こまめな水分補給と適切な休憩を徹底することで大部分のリスクを避けられます。子ども自身が「暑い・だるい・気分が悪い」と訴えたときは必ず活動を止め、涼しい場所での休憩と水分補給を優先してください。重症サインがある場合は迷わず119番です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">熱中症と夏風邪はどう見分ければ良いですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">熱中症は暑い環境・運動後に急に発症し、涼しい場所で安静にすると改善することが多いです。夏風邪は発症がゆっくりで、くしゃみ・鼻水・のどの痛みなどが伴います。判断が難しい場合や意識がおかしい場合はすぐに医師に相談してください。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">子どもが「暑くても平気」と言って水を飲まない場合は？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">子どもは熱中症になっていても「大丈夫」と言い続けることがあります。親・指導者側が定期的に休憩時間を設け、水分補給を強制的に組み込むことが重要です。「飲みなさい」ではなく「いまみんなで休憩するよ」と声をかけると飲みやすくなります。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">保冷剤や冷却タオルはどこに当てると効果的ですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">首の後ろ・脇の下・足の付け根（鼠径部）は太い血管が皮膚に近いため、これらを冷やすと全身の体温を効率よく下げられます。冷水につけたタオルを絞って当てるだけでも効果があります。</p>
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
                name: '熱中症と夏風邪はどう見分ければ良いですか？',
                acceptedAnswer: { '@type': 'Answer', text: '熱中症は暑い環境・運動後に急に発症し、涼しい場所で安静にすると改善することが多いです。判断が難しい場合や意識がおかしい場合はすぐに医師に相談してください。' },
              },
              {
                '@type': 'Question',
                name: '子どもが「暑くても平気」と言って水を飲まない場合は？',
                acceptedAnswer: { '@type': 'Answer', text: '親・指導者側が定期的に休憩時間を設け、水分補給を強制的に組み込むことが重要です。「いまみんなで休憩するよ」と声をかけると飲みやすくなります。' },
              },
              {
                '@type': 'Question',
                name: '保冷剤や冷却タオルはどこに当てると効果的ですか？',
                acceptedAnswer: { '@type': 'Answer', text: '首の後ろ・脇の下・足の付け根（鼠径部）は太い血管が皮膚に近いため、これらを冷やすと全身の体温を効率よく下げられます。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
