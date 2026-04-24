import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '橋本大輝の子供時代|東京五輪個人総合金メダリストの原点',
  description:
    '東京五輪体操個人総合で金メダルを獲得した橋本大輝選手の子供時代。幼少期から体操の才能を見せ、日本体操界の歴史を変えた選手の軌跡を紹介。',
  openGraph: {
    title: '橋本大輝の子供時代|東京五輪個人総合金メダリストの原点',
    description:
      '東京五輪体操個人総合で金メダルを獲得した橋本大輝選手の子供時代。幼少期から体操の才能を見せ、日本体操界の歴史を変えた選手の軌跡を紹介。',
    images: [{ url: '/images/articles/hashimoto-daiki-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/hashimoto-daiki-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/hashimoto-daiki-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '橋本大輝の子供時代|東京五輪個人総合金メダリストの原点',
    images: ['/images/articles/hashimoto-daiki-childhood.jpg'],
  },
};

export default function HashimotoDaikiChildhoodPage() {
  return (
    <ArticleLayout
      title="橋本大輝の子供時代|東京五輪個人総合金メダリストの原点"
      heroImage="/images/articles/hashimoto-daiki-childhood.jpg"
      heroAlt="体操を練習する子ども"
      publishDate="2025年4月"
      slug="hashimoto-daiki-childhood"
      description="東京五輪体操個人総合で金メダルを獲得した橋本大輝選手の子供時代。幼少期から体操の才能を見せ、日本体操界の歴史を変えた選手の軌跡を紹介。"
      tags={['橋本大輝', '体操', '幼少期']}
      shareText="橋本大輝選手が幼少期から体操の才能を見せていた話、知っていますか？ #橋本大輝 #体操"
      citations={['https://ja.wikipedia.org/wiki/%E6%A9%8B%E6%9C%AC%E5%A4%A7%E8%BC%9D_(%E4%BD%93%E6%93%8D%E9%81%B8%E6%89%8B)']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          橋本大輝の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          橋本大輝選手は2001年8月16日、千葉県木更津市で生まれました。東京五輪で体操個人総合・鉄棒の2冠を達成した現役のトップ体操選手です。その出発点は幼い頃から始めた体操にあります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">2001年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">千葉県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">幼少期</p>
            <p className="text-xs text-gray-600 mt-1">体操開始</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100 mb-6">
          <p className="font-bold text-yellow-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2001年8月16日</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>千葉県木更津市</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">得意種目:</span>
              <span>鉄棒・個人総合</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">五輪金メダル:</span>
              <span>東京2020（個人総合・鉄棒）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          幼少期から始まった体操の世界
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          橋本大輝選手は幼い頃から体操の才能を見せていました。体操は他の競技と異なり、幼少期に基礎的な体の動かし方を学ぶことが非常に重要です。橋本選手はその最も大切な時期に、しっかりと基礎を積み上げました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">幼少期の体の使い方が土台になる</h3>
              <p className="text-sm text-gray-600">
                体操は幼少期に基本的な動作—逆立ち、前転、側転、懸垂—を身につけることが重要です。橋本選手は早い段階でこれらを習得し、競技体操の基礎を作りました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">鉄棒への特別な適性</h3>
              <p className="text-sm text-gray-600">
                橋本選手が特に才能を見せたのは鉄棒です。体の回転感覚と握力のバランスが求められる鉄棒において、幼少期から際立つ感覚を持っていました。この才能が後に世界を驚かせる演技につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ジュニア時代から全国レベル</h3>
              <p className="text-sm text-gray-600">
                中学・高校では全国規模のジュニア大会で上位入賞を重ね、将来の日本体操界を担う選手として期待されるようになりました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          東京五輪で日本体操界に新時代
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2021年の東京五輪で、橋本大輝選手は体操個人総合と鉄棒の2冠という偉業を達成しました。日本男子体操の個人総合金メダルは数十年ぶりという歴史的な快挙でした。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">体操を始め、基礎動作を習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学・高校</td>
                <td className="px-3 py-2 text-gray-600">全国ジュニア大会で活躍、トップ選手として台頭</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪 個人総合・鉄棒 2冠達成</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-2">体操は早く始めるほど有利</p>
          <p className="text-sm text-yellow-800">
            体操競技は幼少期の神経系発達の時期に始めることで、体の使い方・回転感覚・空間認識能力を効率よく伸ばせます。橋本選手の成功は、早期からの体操教育の有効性を示しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          まとめ：幼少期の体操が世界一を生む
        </h2>
        <p className="text-gray-700 leading-relaxed">
          橋本大輝選手の幼少期が示すのは、「体操は幼いうちに始めるほど、体の可能性が広がる」という事実です。逆立ち・前転・懸垂といった基本的な動作を幼少期に習得することは、単に体操競技のためだけでなく、あらゆるスポーツに活きる「体の土台」を作ります。子どもに体操教室や体を使う遊びをさせることは、将来どんなスポーツに進んでも必ず役立つ投資です。橋本選手の東京五輪2冠という結果は、幼少期の体の動かし方の積み重ねから生まれました。
        </p>
      </div>
    </ArticleLayout>
  );
}
