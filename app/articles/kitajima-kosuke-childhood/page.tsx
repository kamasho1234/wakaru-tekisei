import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '北島康介の子供時代|太っていた少年が世界最速の平泳ぎ王者へ',
  description:
    'オリンピック2大会4冠の北島康介選手の子供時代。太っていたから水泳を始めた？幼少期のエピソードと、世界一への道のりを紹介。',
  openGraph: {
    title: '北島康介の子供時代|太っていた少年が世界最速の平泳ぎ王者へ',
    description:
      'オリンピック2大会4冠の北島康介選手の子供時代。太っていたから水泳を始めた？幼少期のエピソードと、世界一への道のりを紹介。',
    images: [{ url: '/images/articles/kitajima-kosuke-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kitajima-kosuke-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kitajima-kosuke-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '北島康介の子供時代|太っていた少年が世界最速の平泳ぎ王者へ',
    images: ['/images/articles/kitajima-kosuke-childhood.jpg'],
  },
};

export default function KitajimaKosukeChildhoodPage() {
  return (
    <ArticleLayout
      title="北島康介の子供時代|太っていた少年が世界最速の平泳ぎ王者へ"
      heroImage="/images/articles/kitajima-kosuke-childhood.jpg"
      heroAlt="水泳を練習する子ども"
      publishDate="2025年4月"
      slug="kitajima-kosuke-childhood"
      description="オリンピック2大会4冠の北島康介選手の子供時代。太っていたから水泳を始めた？幼少期のエピソードと、世界一への道のりを紹介。"
      tags={['北島康介', '水泳', '幼少期']}
      shareText="北島康介選手が太っていたから水泳を始めたって知っていますか？ #北島康介 #水泳"
      citations={['https://ja.wikipedia.org/wiki/%E5%8C%97%E5%B3%B6%E5%BA%B7%E4%BB%8B']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          北島康介の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          北島康介選手は1982年9月22日、東京都葛飾区で生まれました。オリンピック2大会連続で100m・200m平泳ぎの2冠を達成した「世界最速の平泳ぎ王者」ですが、その出発点は意外にも「体重を落とすための水泳教室」でした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100">
            <p className="text-2xl font-black text-teal-600">1982年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100">
            <p className="text-2xl font-black text-teal-600">東京都</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100">
            <p className="text-2xl font-black text-teal-600">6歳</p>
            <p className="text-xs text-gray-600 mt-1">水泳開始</p>
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-5 border border-teal-100 mb-6">
          <p className="font-bold text-teal-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1982年9月22日</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>東京都葛飾区</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">水泳開始:</span>
              <span>6歳（近所の水泳教室）</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">主な種目:</span>
              <span>平泳ぎ（100m・200m）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          水泳を始めたきっかけは「太っていたから」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          北島康介選手が水泳を始めたのは6歳のときです。「もともと泳ぎたかった」ではなく、体を動かすために母親が水泳教室に通わせたのがきっかけです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体を動かす習慣をつけるために</h3>
              <p className="text-sm text-gray-600">
                幼少期の北島選手は体格がよく、母親が運動習慣をつけさせようと近所の水泳教室に通わせました。「特別な目標があったわけではない」という、どこにでもいる子どものスタートでした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">水中での才能が開花</h3>
              <p className="text-sm text-gray-600">
                水泳を始めると、北島選手には平泳ぎの特別な適性があることがすぐに判明しました。コーチから認められ、本格的な競技練習がスタートします。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">中学から頭角を現す</h3>
              <p className="text-sm text-gray-600">
                中学生の頃には全国レベルの選手として認知され、競泳エリートの道を歩み始めます。もともと「健康のための水泳」が、競技の世界へと変わっていきました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          平泳ぎに特化した練習で世界一へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          北島康介選手の強みは、平泳ぎの技術を徹底的に磨き上げたことです。「4泳法すべてをこなす」のではなく、平泳ぎだけに集中した専門家として成長しました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-teal-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">1982年</td>
                <td className="px-3 py-2 text-gray-600">東京都葛飾区で誕生</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">1988年（6歳）</td>
                <td className="px-3 py-2 text-gray-600">水泳教室に通い始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学生</td>
                <td className="px-3 py-2 text-gray-600">全国大会で入賞、競泳エリートとして注目される</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2004年</td>
                <td className="px-3 py-2 text-gray-600">アテネ五輪 100m・200m平泳ぎ2冠</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2008年</td>
                <td className="px-3 py-2 text-gray-600">北京五輪 100m・200m平泳ぎ2冠（史上初の2大会連続2種目制覇）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 rounded-2xl p-5 border border-teal-100">
          <p className="font-bold text-teal-900 mb-2">「チョー気持ちいい！」が生まれた瞬間</p>
          <p className="text-sm text-teal-800">
            2004年アテネ五輪で金メダルを獲得後、北島康介選手は「チョー気持ちいい！」という言葉を発し、日本中を沸かせました。この言葉は、幼少期から積み重ねてきた努力が花開いた瞬間の、純粋な喜びの表現でした。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          2大会4冠という前人未踏の記録
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          北島康介選手が成し遂げた「オリンピック2大会連続で100m・200m平泳ぎ2冠」という記録は、水泳競技の歴史において他に類を見ない偉業です。
        </p>

        <div className="bg-teal-50 rounded-2xl p-5 border border-teal-100 mb-6">
          <p className="font-bold text-teal-900 mb-2">前人未踏の偉業</p>
          <ul className="space-y-2">
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">アテネ2004:</span>
              <span>100m平泳ぎ・200m平泳ぎ 両種目金メダル</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">北京2008:</span>
              <span>100m平泳ぎ・200m平泳ぎ 両種目金メダル（2大会連続）</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">意義:</span>
              <span>複数種目での連続五輪金メダルは水泳史上極めて稀な記録</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「太っていたから」という、ネガティブな理由で始めた水泳が、最終的に世界一という結果をもたらしました。子どもの頃のきっかけがどんなものであっても、続けることで才能は開花するのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          まとめ：「やむを得ない理由」が世界一を生む
        </h2>
        <p className="text-gray-700 leading-relaxed">
          北島康介選手の幼少期は、特別な才能を持って生まれた子どもの話ではありません。体を動かすために水泳教室に通い始め、続けていくうちに才能が見つかり、世界一への道が開けたのです。親が「運動させなければ」と思って始めた習い事が、子どもの人生を変えることがあります。大切なのは、始めるきっかけではなく「続けること」と「才能を見出す目」です。お子さんに何か習い事をさせるとき、「向いているかどうか」よりも「まず続けさせてみる」という姿勢が、北島康介選手の例から学べる最大の教訓です。
        </p>
      </div>
    </ArticleLayout>
  );
}
