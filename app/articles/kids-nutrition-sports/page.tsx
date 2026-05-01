import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスポーツと栄養・食事の基本｜運動能力を引き出す食べ方',
  description:
    'スポーツをする子どもに必要な栄養素と食事のポイントを解説。タンパク質・炭水化物・鉄分・カルシウムの役割、練習前後の食事タイミング、成長期に欠かせない栄養管理をわかりやすく紹介します。',
  openGraph: {
    title: '子どものスポーツと栄養・食事の基本｜運動能力を引き出す食べ方',
    description:
      'スポーツをする子どもに必要な栄養素と食事のポイントを解説。タンパク質・炭水化物・鉄分・カルシウムの役割、練習前後の食事タイミングをわかりやすく紹介します。',
    images: [{ url: '/images/articles/kids-nutrition-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kids-nutrition-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kids-nutrition-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスポーツと栄養・食事の基本｜運動能力を引き出す食べ方',
    images: ['/images/articles/kids-nutrition-sports.jpg'],
  },
};

export default function KidsNutritionSportsPage() {
  return (
    <ArticleLayout
      title="子どものスポーツと栄養・食事の基本｜運動能力を引き出す食べ方"
      heroImage="/images/articles/kids-nutrition-sports.jpg"
      heroAlt="スポーツをする子どもの食事と栄養"
      publishDate="2025年5月"
      slug="kids-nutrition-sports"
      description="スポーツをする子どもに必要な栄養素と食事のポイントを解説。タンパク質・炭水化物・鉄分・カルシウムの役割、練習前後の食事タイミング、成長期に欠かせない栄養管理をわかりやすく紹介します。"
      tags={['栄養', '食事', 'スポーツ', '成長期']}
      shareText="子どものスポーツと栄養の基本を解説。タンパク質・炭水化物・鉄分・カルシウムの役割と、練習前後の食事タイミングをわかりやすく紹介！ #子育て #スポーツ栄養"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          なぜスポーツと栄養が密接に関係するのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツをする子どもの身体は、運動によってエネルギーを消耗するだけでなく、筋肉や骨の修復・成長も同時に進めています。成長期の子どもにとって栄養不足は、パフォーマンスの低下だけでなく、骨の発育不良や貧血、疲労骨折のリスクを高めることにもつながります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          「たくさん食べさせれば良い」というわけではなく、何を・いつ・どれだけ食べるかが重要です。スポーツをする子どもに必要な栄養の基本を理解しておきましょう。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          スポーツをする子どもに必要な4大栄養素
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">タンパク質 — 筋肉の材料</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              運動で傷ついた筋肉を修復し、新しい筋肉を作るのに欠かせません。肉・魚・卵・乳製品・大豆製品などから摂取します。毎食に必ず1種類以上のタンパク源を取り入れることが目安です。
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="font-bold text-amber-900 mb-2">炭水化物 — エネルギーの源</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              運動中に使われる主要なエネルギー源です。ご飯・パン・麺類などから十分に摂ることが重要です。炭水化物を減らしすぎると、練習中にスタミナが切れたり、集中力が落ちる原因になります。
            </p>
          </div>

          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-2">鉄分 — 貧血・疲労を防ぐ</p>
            <p className="text-sm text-red-800 leading-relaxed">
              特に女の子や激しい運動をする子に不足しがちな栄養素です。赤身の肉・レバー・ほうれん草・小松菜・ひじきなどから摂取できます。ビタミンCと一緒に摂ると吸収率が上がります。
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2">カルシウム — 骨を強くする</p>
            <p className="text-sm text-green-800 leading-relaxed">
              成長期の骨形成に必要不可欠です。牛乳・ヨーグルト・チーズ・小魚・豆腐などから摂取します。日光に当たることでビタミンDが生成され、カルシウムの吸収を助けます。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          練習前後の食事タイミング
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              前
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">練習の1〜2時間前</h3>
              <p className="text-sm text-gray-600">
                消化の良い炭水化物（おにぎり・バナナ・食パンなど）を中心に食べましょう。直前の食事は消化不良や腹痛の原因になるため、少なくとも1時間前には済ませます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              中
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">練習中の水分補給</h3>
              <p className="text-sm text-gray-600">
                15〜20分ごとにこまめに水分を補給します。長時間（1時間以上）の運動では、塩分・糖分も含んだスポーツドリンクを活用するのがおすすめです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              後
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">練習後30分以内</h3>
              <p className="text-sm text-gray-600">
                練習後30分以内にタンパク質と炭水化物を補給すると、筋肉の回復が早まります。牛乳・ヨーグルト・おにぎりなどが手軽です。帰宅後すぐに夕食を食べられれば理想的です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          よくある食事の注意点
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">注意点</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">理由・対策</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">朝食を抜かない</td>
                <td className="px-3 py-2 text-gray-600">脳とからだのエネルギー補給に必須。ご飯と卵など簡単でも食べさせましょう</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">偏食に気をつける</td>
                <td className="px-3 py-2 text-gray-600">好き嫌いで鉄分・カルシウムが不足しがち。調理の工夫で食べやすくする</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ジュースの飲みすぎ</td>
                <td className="px-3 py-2 text-gray-600">糖分過多で虫歯・肥満のリスク。水や牛乳を基本にする</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">夜食は睡眠の妨げに</td>
                <td className="px-3 py-2 text-gray-600">就寝2時間前には夕食を済ませる。夕食が遅い場合は軽めに</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          スポーツをする子どもにとって、食事はトレーニングと同じくらい重要です。毎食にタンパク質・炭水化物・野菜をバランスよく取り入れ、練習前後の補食と水分補給を習慣化させましょう。特別なサプリメントよりも、毎日の食事を丁寧に整えることが、子どもの運動能力と健康を支える最大の近道です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">プロテインは子どもに飲ませても良いですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">一般的に、通常の食事でタンパク質が十分に摂れていれば、成長期の子どもへのプロテイン補助食品は必須ではありません。まずは食事から摂ることを優先し、食が細い・偏食が強いなどの場合は医師や管理栄養士に相談するのが安心です。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">スポーツドリンクは毎回飲ませるべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">30分程度の軽い運動であれば水で十分です。1時間以上の激しい運動や、夏場の屋外活動では塩分・糖分補給のためにスポーツドリンクが有効です。ただし糖分が多いため、日常の水分補給は水や麦茶を基本にしましょう。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">食が細い子どもへの対策は？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">1回の食事量を増やすより、補食（間食）を活用して回数を増やす方法が効果的です。練習後においにぎりや牛乳を補食として与えると、無理なくエネルギーを補えます。食事の見た目を明るくしたり、子どもと一緒に作ることも食欲増進につながります。</p>
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
                name: 'プロテインは子どもに飲ませても良いですか？',
                acceptedAnswer: { '@type': 'Answer', text: '通常の食事でタンパク質が十分に摂れていれば、成長期の子どもへのプロテイン補助食品は必須ではありません。まずは食事から摂ることを優先し、食が細い場合は医師や管理栄養士に相談しましょう。' },
              },
              {
                '@type': 'Question',
                name: 'スポーツドリンクは毎回飲ませるべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: '30分程度の軽い運動であれば水で十分です。1時間以上の激しい運動や夏場の屋外活動ではスポーツドリンクが有効ですが、日常の水分補給は水や麦茶を基本にしましょう。' },
              },
              {
                '@type': 'Question',
                name: '食が細い子どもへの対策は？',
                acceptedAnswer: { '@type': 'Answer', text: '1回の食事量を増やすより、補食（間食）を活用して回数を増やす方法が効果的です。練習後におにぎりや牛乳を補食として与えると無理なくエネルギーを補えます。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
