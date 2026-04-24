import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '中山楓奈の子供時代|2大会連続五輪メダリストの原点',
  description:
    'スケートボード女子ストリートで東京・パリの2大会連続五輪メダルを獲得した中山楓奈選手の子供時代。兄の影響でスケートを始めた幼少期のエピソードを紹介。',
  openGraph: {
    title: '中山楓奈の子供時代|2大会連続五輪メダリストの原点',
    description:
      'スケートボード女子ストリートで東京・パリの2大会連続五輪メダルを獲得した中山楓奈選手の子供時代。兄の影響でスケートを始めた幼少期のエピソードを紹介。',
    images: [{ url: '/images/articles/nakayama-funa-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/nakayama-funa-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/nakayama-funa-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中山楓奈の子供時代|2大会連続五輪メダリストの原点',
    images: ['/images/articles/nakayama-funa-childhood.jpg'],
  },
};

export default function NakayamaFunaChildhoodPage() {
  return (
    <ArticleLayout
      title="中山楓奈の子供時代|2大会連続五輪メダリストの原点"
      heroImage="/images/articles/nakayama-funa-childhood.jpg"
      heroAlt="スケートボードを練習する子ども"
      publishDate="2025年4月"
      slug="nakayama-funa-childhood"
      description="スケートボード女子ストリートで東京・パリの2大会連続五輪メダルを獲得した中山楓奈選手の子供時代。兄の影響でスケートを始めた幼少期のエピソードを紹介。"
      tags={['中山楓奈', 'スケートボード', '幼少期']}
      shareText="中山楓奈選手が兄の影響でスケートを始め、2大会連続五輪メダルを獲得した話を紹介 #中山楓奈 #スケートボード"
      citations={['https://ja.wikipedia.org/wiki/%E4%B8%AD%E5%B1%B1%E6%A5%93%E5%A5%88']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          中山楓奈の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中山楓奈選手は愛知県出身のスケートボード選手です。東京五輪（2021年）とパリ五輪（2024年）で2大会連続メダルを獲得した現役トップ選手であり、日本スケートボード界を牽引する存在です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">愛知県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">幼少期</p>
            <p className="text-xs text-gray-600 mt-1">スケート開始</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">2大会</p>
            <p className="text-xs text-gray-600 mt-1">五輪メダル</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>愛知県</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">スケート開始:</span>
              <span>幼少期（兄の影響）</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">種目:</span>
              <span>スケートボード女子ストリート</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">五輪メダル:</span>
              <span>東京2020（銅）・パリ2024（銀）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          兄の影響でスケートの世界へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中山楓奈選手がスケートボードを始めたのは、兄がスケートをしていたことがきっかけです。これは堀米雄斗選手（父の影響）、高橋藍選手（兄の影響）と同じく、家族の存在がスポーツの入口を作ったケースです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">兄と一緒に始めたスケート</h3>
              <p className="text-sm text-gray-600">
                スケートボードをする兄の姿を見て、中山選手も自然にスケートの世界に引き込まれました。「お兄ちゃんと同じことがしたい」という純粋な気持ちが、後の五輪メダリストを生み出しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ストリートという表現の場</h3>
              <p className="text-sm text-gray-600">
                スケートボードのストリート種目は、階段・ベンチ・手すりといった街中の構造物を使ったトリックを競います。幼少期から街の様々な場所でスケートをする中で、創造性と技術が同時に育まれました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">若いうちからの世界大会経験</h3>
              <p className="text-sm text-gray-600">
                中山選手は10代の頃から世界大会に出場し、国際経験を積みました。この経験が、五輪という最大の舞台での落ち着きを生み出しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          東京からパリへ、進化し続けるメダリスト
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中山楓奈選手は東京五輪で銅メダルを獲得した後も成長を続け、パリ五輪ではさらに上の銀メダルを獲得しました。大会のたびに進化する姿勢が、継続的な成功につながっています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">兄の影響でスケートボードを始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">10代</td>
                <td className="px-3 py-2 text-gray-600">世界大会に出場し、国際経験を積む</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪 銅メダル</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2024年</td>
                <td className="px-3 py-2 text-gray-600">パリ五輪 銀メダル（順位アップ）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">スケートボードが五輪競技になった意義</p>
          <p className="text-sm text-red-800">
            スケートボードは2020東京五輪で初めてオリンピック競技となりました。「遊び」として始めたスポーツが世界最高峰の舞台へ——中山選手の存在は、子どもが好きなことを追い続けることの大切さを示しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ：「遊び」から始まる世界レベルの才能
        </h2>
        <p className="text-gray-700 leading-relaxed">
          中山楓奈選手の幼少期が教えてくれることは、「好きなことを遊びの延長で続けることが、世界レベルの才能を育てる」ということです。スケートボードはもともと「遊び」として始まりましたが、その楽しさを追い続けた結果が2大会連続五輪メダルです。子どもが夢中になっている「遊び」を、無理に辞めさせたり変えたりする必要はありません。その情熱こそが、将来の大きな才能の源かもしれないのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
