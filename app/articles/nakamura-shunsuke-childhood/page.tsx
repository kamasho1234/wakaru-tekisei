import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '中村俊輔の子供時代|セレクション落ちから世界トップへの逆転劇',
  description:
    'マリノスのジュニアセレクションに落ちながらも世界的サッカー選手になった中村俊輔選手。逆境を乗り越えた幼少期のエピソードと、あきらめない心の作り方を紹介。',
  openGraph: {
    title: '中村俊輔の子供時代|セレクション落ちから世界トップへの逆転劇',
    description:
      'マリノスのジュニアセレクションに落ちながらも世界的サッカー選手になった中村俊輔選手。逆境を乗り越えた幼少期のエピソードと、あきらめない心の作り方を紹介。',
    images: [{ url: '/images/articles/nakamura-shunsuke-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/nakamura-shunsuke-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/nakamura-shunsuke-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中村俊輔の子供時代|セレクション落ちから世界トップへの逆転劇',
    images: ['/images/articles/nakamura-shunsuke-childhood.jpg'],
  },
};

export default function NakamuraShunsukePage() {
  return (
    <ArticleLayout
      title="中村俊輔の子供時代|セレクション落ちから世界トップへの逆転劇"
      heroImage="/images/articles/nakamura-shunsuke-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="nakamura-shunsuke-childhood"
      description="マリノスのジュニアセレクションに落ちながらも世界的サッカー選手になった中村俊輔選手。逆境を乗り越えた幼少期のエピソードと、あきらめない心の作り方を紹介。"
      tags={['中村俊輔', 'サッカー', '幼少期']}
      shareText="中村俊輔選手が子供の頃にセレクションで落とされていたって知っていますか？ #中村俊輔 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E4%B8%AD%E6%9D%91%E4%BF%8A%E8%BC%94']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          中村俊輔の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中村俊輔選手は1978年6月24日、神奈川県横浜市で生まれました。セルティック（スコットランド）でのUEFAチャンピオンズリーグでの活躍や、日本代表の司令塔として知られる中村選手ですが、幼少期は「体が小さすぎる」という理由でエリート街道から外れていました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-emerald-50 rounded-2xl p-4 text-center border border-emerald-100">
            <p className="text-2xl font-black text-emerald-600">1978年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-4 text-center border border-emerald-100">
            <p className="text-2xl font-black text-emerald-600">神奈川県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-4 text-center border border-emerald-100">
            <p className="text-2xl font-black text-emerald-600">小学生</p>
            <p className="text-xs text-gray-600 mt-1">サッカー開始</p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 mb-6">
          <p className="font-bold text-emerald-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1978年6月24日</span>
            </li>
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>神奈川県横浜市</span>
            </li>
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">幼少期の挫折:</span>
              <span>横浜マリノスジュニアユースのセレクションに不合格</span>
            </li>
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">得意技:</span>
              <span>精度の高いフリーキック・左足のドリブル</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          エリートへの扉が閉ざされた日
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中村俊輔選手の幼少期で最も有名なエピソードは、横浜マリノスのジュニアユース（育成組織）のセレクションに不合格になったことです。理由は「体が小さすぎる」というものでした。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">セレクション不合格の衝撃</h3>
              <p className="text-sm text-gray-600">
                小学生の中村俊輔選手は、地元横浜のサッカー少年なら誰もが憧れる横浜マリノスのジュニアユースセレクションを受験しました。しかし、体格面を理由に不合格。夢への道が突然閉ざされた瞬間でした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">諦めず練習を続ける</h3>
              <p className="text-sm text-gray-600">
                セレクションに落ちた後も、中村選手はサッカーをやめませんでした。壁に向かってひたすらドリブルやボールコントロールの練習を繰り返し、体格の差を技術で補おうとしました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">フリーキックへの執念</h3>
              <p className="text-sm text-gray-600">
                中村選手は子供の頃から「フリーキックを誰よりも上手くなろう」と決意し、毎日のように練習を重ねました。この執念が、後に世界を驚かせるフリーキックの名手を生み出しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          体格ではなく技術で勝つ道を選ぶ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「体が大きくなければエリートになれない」という現実に直面した中村選手は、体格ではなく技術で勝負するという道を選びました。これが後の「テクニシャン」中村俊輔を生み出した原点です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">横浜マリノスジュニアユースセレクションで不合格</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中高生</td>
                <td className="px-3 py-2 text-gray-600">技術を磨き続け、頭角を現す</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">1997年</td>
                <td className="px-3 py-2 text-gray-600">横浜マリノスにプロ入り（セレクションで落とされたクラブへ）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2005-2007年</td>
                <td className="px-3 py-2 text-gray-600">セルティック（スコットランド）でCLでも活躍</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
          <p className="font-bold text-emerald-900 mb-2">逆境が最強の動機になった</p>
          <p className="text-sm text-emerald-800">
            セレクションで落とされた経験は、中村選手にとって「もっと上手くなってやる」という強烈な動機になりました。「落とされた悔しさ」が、世界トップレベルの選手を生み出したのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          世界を驚かせたフリーキック
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中村俊輔選手が世界的に有名になったのは、2006-07シーズンのUEFAチャンピオンズリーグでのフリーキックです。幼少期から壁に向かって練習し続けたフリーキックが、世界最高の舞台で輝きました。
        </p>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 mb-6">
          <p className="font-bold text-emerald-900 mb-2">フリーキックの名手が生まれた背景</p>
          <ul className="space-y-2">
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">幼少期の練習:</span>
              <span>体格に自信がなかった分、技術に特化して毎日練習</span>
            </li>
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">左足への集中:</span>
              <span>得意な左足を徹底的に鍛え、独自のキックフォームを確立</span>
            </li>
            <li className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">イメージトレーニング:</span>
              <span>成功体験をイメージしながら練習するメンタル面の工夫</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「セレクションに落ちた」という経験は失敗ではなく、「別の道で勝負しよう」という方向転換のきっかけでした。子どもがどこかで選ばれなかったとき、それは終わりではなく「別の才能を伸ばす機会」かもしれません。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          まとめ：落選は終わりではない
        </h2>
        <p className="text-gray-700 leading-relaxed">
          中村俊輔選手の幼少期は、「エリートに選ばれなかった子どもでも世界一になれる」という希望を示しています。体格という物理的な制限を、技術という圧倒的な強みで乗り越えた選手です。子どもが何かのセレクションや試験で落とされたとき、それは能力の否定ではありません。「今の自分には向いていないかもしれないが、別の強みで勝負できる」と教えてあげることが、親としての大切な役割です。中村俊輔選手のように、諦めずに続けた先に、想像を超えた結果が待っているかもしれないのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
