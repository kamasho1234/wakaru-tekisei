import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '八村塁の子供時代|富山からNBAへ、日本人初の快挙の原点',
  description:
    'NBAで活躍する八村塁選手の子供時代。富山県出身で中学からバスケを始め、日本人初のNBAドラフト1巡目指名という快挙を成し遂げた軌跡を紹介。',
  openGraph: {
    title: '八村塁の子供時代|富山からNBAへ、日本人初の快挙の原点',
    description:
      'NBAで活躍する八村塁選手の子供時代。富山県出身で中学からバスケを始め、日本人初のNBAドラフト1巡目指名という快挙を成し遂げた軌跡を紹介。',
    images: [{ url: '/images/articles/hachimura-rui-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/hachimura-rui-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/hachimura-rui-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '八村塁の子供時代|富山からNBAへ、日本人初の快挙の原点',
    images: ['/images/articles/hachimura-rui-childhood.jpg'],
  },
};

export default function HachimuraRuiChildhoodPage() {
  return (
    <ArticleLayout
      title="八村塁の子供時代|富山からNBAへ、日本人初の快挙の原点"
      heroImage="/images/articles/hachimura-rui-childhood.jpg"
      heroAlt="バスケットボールを練習する子ども"
      publishDate="2025年4月"
      slug="hachimura-rui-childhood"
      description="NBAで活躍する八村塁選手の子供時代。富山県出身で中学からバスケを始め、日本人初のNBAドラフト1巡目指名という快挙を成し遂げた軌跡を紹介。"
      tags={['八村塁', 'バスケットボール', '幼少期']}
      shareText="八村塁選手が中学からバスケを始め、日本人初のNBA1巡目指名を達成した話を知っていますか？ #八村塁 #バスケ"
      citations={['https://ja.wikipedia.org/wiki/%E5%85%AB%E6%9D%91%E5%A1%81']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          八村塁の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          八村塁選手は1998年2月8日、富山県富山市で生まれました。父はアフリカ出身、母は日本人という家庭に育ち、現在はLAレイカーズでNBA選手として活躍しています。「遅いスタート」から世界最高峰のリーグへたどり着いた、逆転の成功物語です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">1998年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">富山県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">中学生</p>
            <p className="text-xs text-gray-600 mt-1">バスケ開始</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1998年2月8日</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>富山県富山市</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">バスケ開始:</span>
              <span>中学生頃（比較的遅いスタート）</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">NBA:</span>
              <span>2019年ドラフト1巡目9位指名（日本人初）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          「遅いスタート」から世界最高峰へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          八村塁選手がバスケットボールを本格的に始めたのは中学生の頃です。多くのNBAプレイヤーが幼少期からバスケを始めるのとは異なり、八村選手は「遅いスタート」でした。それでも、持って生まれた身体的な才能と圧倒的な成長力で、世界最高峰へと駆け上がりました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格という天賦の才</h3>
              <p className="text-sm text-gray-600">
                父のアフリカ系の血を受け継ぎ、中学生の頃から突出した体格と身体能力を持っていた八村選手。バスケに必要な「高さ」と「パワー」という物理的な条件において、最初から大きなアドバンテージがありました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">富山県での中学バスケ</h3>
              <p className="text-sm text-gray-600">
                富山第一高校でバスケットボールに本格取り組み、高校バスケ界で全国的に注目されるようになりました。地方の高校から全国、そして世界へという異例のルートでした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">アメリカ留学という選択</h3>
              <p className="text-sm text-gray-600">
                高校卒業後、ゴンザガ大学（米国）に進学し、NCAAという最高水準のカレッジバスケで活躍。この大きな挑戦が、NBAドラフトへの道を切り開きました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          日本人初のNBAドラフト1巡目指名
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2019年のNBAドラフトで、八村塁選手はワシントン・ウィザーズから1巡目9位で指名されました。これは日本人として史上初の快挙でした。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学生</td>
                <td className="px-3 py-2 text-gray-600">バスケットボールを始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">富山第一高校でバスケ、全国大会で活躍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">大学</td>
                <td className="px-3 py-2 text-gray-600">ゴンザガ大学（米国）でNCAA活躍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">NBAドラフト1巡目9位指名（日本人初）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">現在</td>
                <td className="px-3 py-2 text-gray-600">LAレイカーズで現役活躍中</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">遅いスタートでも世界一になれる</p>
          <p className="text-sm text-orange-800">
            八村塁選手は「中学からのスタート」という、バスケ界では決して早くない出発点でNBAに辿り着きました。才能の開花には、必ずしも「幼少期」が必要なわけではないことを証明しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：遅いスタートが教えてくれること
        </h2>
        <p className="text-gray-700 leading-relaxed">
          八村塁選手の軌跡が示す最大のメッセージは、「スポーツを始める年齢は才能の限界ではない」ということです。中学からバスケを始め、地方の富山県からアメリカのゴンザガ大学を経てNBAへ——このルートは、スポーツの世界では決して「理想的」とは言えないものでした。しかし、本人の身体的才能と強い意志、そして「より高いレベルに挑戦し続ける姿勢」が、最終的に世界最高峰への道を切り開きました。子どもがスポーツを始めるのが「遅かった」と感じても、焦る必要はありません。大切なのは続ける環境と、上を目指す意志です。
        </p>
      </div>
    </ArticleLayout>
  );
}
