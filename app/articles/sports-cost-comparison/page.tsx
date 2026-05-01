import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスポーツ習い事の費用・月謝比較｜種目別コストと選び方',
  description:
    '子どものスポーツ習い事にかかる費用を種目別に比較。水泳・サッカー・体操・テニス・武道など人気種目の月謝相場・道具代・遠征費の目安を解説。費用対効果の高いスポーツの選び方のポイントも紹介します。',
  openGraph: {
    title: '子どものスポーツ習い事の費用・月謝比較｜種目別コストと選び方',
    description:
      '子どものスポーツ習い事にかかる費用を種目別に比較。水泳・サッカー・体操・テニス・武道など人気種目の月謝相場と道具代・遠征費の目安を解説します。',
    images: [{ url: '/images/articles/sports-cost-comparison.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sports-cost-comparison',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sports-cost-comparison',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスポーツ習い事の費用・月謝比較｜種目別コストと選び方',
    images: ['/images/articles/sports-cost-comparison.jpg'],
  },
};

export default function SportsCostComparisonPage() {
  return (
    <ArticleLayout
      title="子どものスポーツ習い事の費用・月謝比較｜種目別コストと選び方"
      heroImage="/images/articles/sports-cost-comparison.jpg"
      heroAlt="スポーツ習い事の費用を考える親子"
      publishDate="2025年5月"
      slug="sports-cost-comparison"
      description="子どものスポーツ習い事にかかる費用を種目別に比較。水泳・サッカー・体操・テニス・武道など人気種目の月謝相場・道具代・遠征費の目安を解説。費用対効果の高いスポーツの選び方のポイントも紹介します。"
      tags={['費用', '月謝', '習い事', 'スポーツ選び']}
      shareText="子どものスポーツ習い事の費用・月謝を種目別に比較！水泳・サッカー・体操・テニス・武道の相場と道具代・遠征費の目安を解説。 #子育て #習い事 #費用"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          スポーツ習い事の費用構成
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ習い事の費用は「月謝」だけではありません。入会金・用具代・ユニフォーム代・大会参加費・遠征費など、種目によっては月謝の数倍の費用がかかることもあります。始める前に年間の総コストをおおよそ把握しておきましょう。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">費用の主な内訳</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-amber-800">月謝（レッスン料）</li>
            <li className="text-sm text-amber-800">入会金・登録料（初回のみ）</li>
            <li className="text-sm text-amber-800">用具・道具代（ボール・ラケット・シューズ等）</li>
            <li className="text-sm text-amber-800">ユニフォーム・ウェア代</li>
            <li className="text-sm text-amber-800">大会・試合の参加費</li>
            <li className="text-sm text-amber-800">遠征費（宿泊・交通費）</li>
            <li className="text-sm text-amber-800">保険料（スポーツ保険）</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          種目別の費用相場（月謝・初期費用）
        </h2>
        <p className="text-xs text-gray-500 mb-4">※ 地域・施設・クラスレベルによって大きく異なります。あくまで参考の目安です。</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">月謝目安</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">初期費用目安</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">費用の特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">水泳</td>
                <td className="px-3 py-2 text-gray-600">5,000〜9,000円</td>
                <td className="px-3 py-2 text-gray-600">5,000〜15,000円</td>
                <td className="px-3 py-2 text-gray-600">道具代が安い。施設内で完結するため遠征費が少ない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">体操</td>
                <td className="px-3 py-2 text-gray-600">6,000〜12,000円</td>
                <td className="px-3 py-2 text-gray-600">5,000〜20,000円</td>
                <td className="px-3 py-2 text-gray-600">道具代は比較的安い。大会参加で費用増加</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">サッカー（クラブ）</td>
                <td className="px-3 py-2 text-gray-600">5,000〜15,000円</td>
                <td className="px-3 py-2 text-gray-600">15,000〜40,000円</td>
                <td className="px-3 py-2 text-gray-600">スパイク・ウェア・バッグなど初期費用がかかる。遠征費も発生</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">野球（少年団）</td>
                <td className="px-3 py-2 text-gray-600">2,000〜5,000円</td>
                <td className="px-3 py-2 text-gray-600">30,000〜80,000円</td>
                <td className="px-3 py-2 text-gray-600">月謝は安いがグローブ・バット等の道具代が高い。遠征費も多い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">テニス</td>
                <td className="px-3 py-2 text-gray-600">6,000〜15,000円</td>
                <td className="px-3 py-2 text-gray-600">15,000〜50,000円</td>
                <td className="px-3 py-2 text-gray-600">ラケット・ウェアが必要。コート使用料が別途かかる場合も</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">柔道・空手</td>
                <td className="px-3 py-2 text-gray-600">3,000〜8,000円</td>
                <td className="px-3 py-2 text-gray-600">10,000〜30,000円</td>
                <td className="px-3 py-2 text-gray-600">道着代が初期に必要。道場系は月謝が比較的安め</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">バスケットボール</td>
                <td className="px-3 py-2 text-gray-600">5,000〜12,000円</td>
                <td className="px-3 py-2 text-gray-600">10,000〜30,000円</td>
                <td className="px-3 py-2 text-gray-600">シューズが重要。学校のクラブ活動なら費用を大幅に抑えられる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">卓球</td>
                <td className="px-3 py-2 text-gray-600">3,000〜8,000円</td>
                <td className="px-3 py-2 text-gray-600">5,000〜20,000円</td>
                <td className="px-3 py-2 text-gray-600">入門ラケットは比較的安価。競技レベルが上がるとラバー代が増える</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          費用を抑えながら良い環境を選ぶポイント
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">地域の少年団・クラブを活用する</h3>
              <p className="text-sm text-gray-600">地域密着の少年団は月謝が安いケースが多いです。ただし保護者の役員・当番参加が求められることが多い点を考慮しましょう。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">道具は最初は中古・レンタルを活用</h3>
              <p className="text-sm text-gray-600">「続けられるか分からない」段階では、フリマアプリやリサイクルショップの中古品を活用するのも賢い選択です。本格的に続けることが決まってから新品に切り替えましょう。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">学校のクラブ活動・部活動を活用する</h3>
              <p className="text-sm text-gray-600">中学校以上の部活動は学校の施設・道具を使えるため費用が大幅に抑えられます。技術力より幅広い経験を積みたい時期には最適です。</p>
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
          スポーツ習い事の費用は種目・施設・レベルによって大きく異なります。月謝だけでなく年間の総コストで比較し、家計への影響をシミュレーションしてから始めることが重要です。最も大切なのはコストよりも「子どもが楽しく続けられる環境かどうか」です。費用を抑えながらも子どもの意欲が続く場所を見つけることを最優先に考えましょう。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">費用が安いスポーツでも本格的に強くなれますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">費用と強さは必ずしも比例しません。水泳・柔道・陸上など比較的コストが低い種目でもトップ選手を多数輩出しています。重要なのは指導の質・練習環境・子どもの意欲です。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">兄弟割引や市の補助金はありますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">スポーツクラブによっては兄弟割引を設けているところがあります。また、一部の自治体では子どもの習い事に対する補助金制度（子育て支援の一環）を実施している場合があります。お住まいの市区町村の子育て支援窓口でご確認ください。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">始める前に費用の上限を決めておくべきですか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">月謝の上限だけでなく「年間の総予算」を事前に家族で決めておくことをおすすめします。強くなるにつれて大会参加・遠征が増え費用が膨らむ傾向があるため、子どもが「もっとやりたい」となった場合の追加投資ラインも話し合っておくと安心です。</p>
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
                name: '費用が安いスポーツでも本格的に強くなれますか？',
                acceptedAnswer: { '@type': 'Answer', text: '費用と強さは必ずしも比例しません。水泳・柔道・陸上など比較的コストが低い種目でもトップ選手を多数輩出しています。指導の質・練習環境・子どもの意欲が重要です。' },
              },
              {
                '@type': 'Question',
                name: '兄弟割引や市の補助金はありますか？',
                acceptedAnswer: { '@type': 'Answer', text: 'クラブによっては兄弟割引を設けているところがあります。また一部の自治体では習い事の補助金制度を実施している場合があります。お住まいの市区町村の子育て支援窓口でご確認ください。' },
              },
              {
                '@type': 'Question',
                name: '始める前に費用の上限を決めておくべきですか？',
                acceptedAnswer: { '@type': 'Answer', text: '月謝の上限だけでなく「年間の総予算」を事前に家族で決めておくことをおすすめします。大会参加・遠征で費用が膨らむ傾向があるため、追加投資のラインも話し合っておくと安心です。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
