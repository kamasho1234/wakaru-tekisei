import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '菊池雄星の子供時代|大谷翔平と同じ花巻東から世界へ羽ばたいた左腕',
  description:
    '岩手県花巻市出身で大谷翔平の先輩でもある菊池雄星選手の子供時代。花巻東高校で全国制覇を目指した幼少期から、MLBで活躍する世界的左腕への道のりを紹介。',
  openGraph: {
    title: '菊池雄星の子供時代|大谷翔平と同じ花巻東から世界へ羽ばたいた左腕',
    description:
      '岩手県花巻市出身で大谷翔平の先輩でもある菊池雄星選手の子供時代。花巻東高校で全国制覇を目指した幼少期から、MLBで活躍する世界的左腕への道のりを紹介。',
    images: [{ url: '/images/articles/kikuchi-yusei-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kikuchi-yusei-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kikuchi-yusei-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '菊池雄星の子供時代|大谷翔平と同じ花巻東から世界へ羽ばたいた左腕',
    images: ['/images/articles/kikuchi-yusei-childhood.jpg'],
  },
};

export default function KikuchiYuseiChildhoodPage() {
  return (
    <ArticleLayout
      title="菊池雄星の子供時代|大谷翔平と同じ花巻東から世界へ羽ばたいた左腕"
      heroImage="/images/articles/kikuchi-yusei-childhood.jpg"
      heroAlt="ピッチング練習をする子ども"
      publishDate="2025年4月"
      slug="kikuchi-yusei-childhood"
      description="岩手県花巻市出身で大谷翔平の先輩でもある菊池雄星選手の子供時代。花巻東高校で全国制覇を目指した幼少期から、MLBで活躍する世界的左腕への道のりを紹介。"
      tags={['菊池雄星', '野球', '幼少期']}
      shareText="菊池雄星選手が花巻東高校から西武・MLBへと世界で活躍する左腕に成長した話を紹介 #菊池雄星 #野球"
      citations={['https://ja.wikipedia.org/wiki/%E8%8F%8A%E6%B1%A0%E9%9B%84%E6%98%9F']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          菊池雄星の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          菊池雄星選手は1991年6月17日、岩手県花巻市で生まれました。大谷翔平選手の先輩として知られる花巻東高校出身で、埼玉西武ライオンズのエースを経て、MLBシアトル・マリナーズ、トロント・ブルージェイズ、ロサンゼルス・エンゼルスと渡り歩く世界的左腕です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100">
            <p className="text-2xl font-black text-teal-600">1991年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100">
            <p className="text-2xl font-black text-teal-600">岩手県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100">
            <p className="text-2xl font-black text-teal-600">花巻東</p>
            <p className="text-xs text-gray-600 mt-1">出身高校</p>
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-5 border border-teal-100 mb-6">
          <p className="font-bold text-teal-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1991年6月17日</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>岩手県花巻市</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">NPB:</span>
              <span>埼玉西武ライオンズ（2010〜2018年）</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">MLB:</span>
              <span>マリナーズ、ブルージェイズ、エンゼルス</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          岩手・花巻で始まった野球人生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          菊池雄星選手は岩手県花巻市という野球の名産地で育ちました。子供の頃から野球に親しみ、花巻東高校では名将・佐々木洋監督の指導のもと、左腕エースとして甲子園で活躍しました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">岩手の自然の中で育んだ体力</h3>
              <p className="text-sm text-gray-600">
                自然豊かな岩手県花巻市で育った菊池選手は、幼い頃から活発に体を動かしていました。のびのびとした環境での成長が、投手としての大きなスケール感を育てました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">花巻東高校での修行</h3>
              <p className="text-sm text-gray-600">
                花巻東高校に進学し、佐々木洋監督の指導を受けました。2度の甲子園準優勝を経験し、その後に進学した大谷翔平選手に「花巻東のエースの背中を見て育った」と語らせるほどの実力者でした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">高い知性と向上心</h3>
              <p className="text-sm text-gray-600">
                菊池選手は野球の技術だけでなく、メンタル面や自己管理にも高い意識を持っています。英語学習にも取り組み、MLB移籍後も積極的に現地文化に溶け込もうとする姿勢が、世界での活躍につながっています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          西武のエースからMLBへの挑戦
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          菊池雄星選手は西武ライオンズで最多勝・沢村賞を獲得したエースとして活躍した後、2019年にMLBへ渡りました。シアトル・マリナーズ、トロント・ブルージェイズ、ロサンゼルス・エンゼルスと渡り歩き、世界の一流打者と対戦しています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-teal-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">岩手県花巻市で野球を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">花巻東高校で2度の甲子園準優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2010年</td>
                <td className="px-3 py-2 text-gray-600">西武ライオンズ入団（ドラフト1位）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2018年</td>
                <td className="px-3 py-2 text-gray-600">沢村賞受賞、最多勝獲得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">MLBシアトル・マリナーズへ移籍</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 rounded-2xl p-5 border border-teal-100">
          <p className="font-bold text-teal-900 mb-2">大谷翔平の先輩が切り開いた「花巻東ルート」</p>
          <p className="text-sm text-teal-800">
            菊池雄星選手がMLBで活躍した姿は、後輩の大谷翔平選手に「自分も世界に挑戦できる」という確信を与えました。先輩が道を切り開くことで、後輩の夢が現実になる——菊池選手の存在は「花巻東ルート」を作り上げました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          まとめ：地方出身でも世界で戦える投手になれる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          菊池雄星選手の幼少期が教えてくれることは、「地方の自然豊かな環境で育つことも、世界トップの投手になる土台になる」ということです。岩手県花巻市という地方都市から、NPBのエースを経てMLBの舞台へ——その道のりは、どこで生まれても夢を追い続けられることを示しています。また、後輩の大谷翔平選手に影響を与えた存在として、「先輩の背中が後輩の夢を広げる」という野球チームの文化的な力も体現しています。お子さんが投手を目指すなら、技術と同時に知性と向上心を育てることが、世界で通用する選手への近道です。
        </p>
      </div>
    </ArticleLayout>
  );
}
