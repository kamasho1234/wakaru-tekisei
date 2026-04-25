import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '長友佑都の子供時代|愛媛の少年がインテル・ミランの左SBへ這い上がるまで',
  description:
  'インテル・ミランやガラタサライで活躍した長友佑都選手の子供時代。愛媛県出身で高校まで無名だった少年が、不屈の努力でセリエAのトップクラブの正左SBになるまでの軌跡を紹介。',
  openGraph: {
    title: '長友佑都の子供時代|愛媛の少年がインテル・ミランの左SBへ這い上がるまで',
    description:
    'インテル・ミランやガラタサライで活躍した長友佑都選手の子供時代。愛媛県出身で高校まで無名だった少年が、不屈の努力でセリエAのトップクラブの正左SBになるまでの軌跡を紹介。',
    images: [{ url: '/images/articles/nagatomo-yuto-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/nagatomo-yuto-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/nagatomo-yuto-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '長友佑都の子供時代|愛媛の少年がインテル・ミランの左SBへ這い上がるまで',
    images: ['/images/articles/nagatomo-yuto-childhood.jpg'],
  },
};

export default function NagatomoYutoChildhoodPage() {
  return (
    <ArticleLayout
      title="長友佑都の子供時代|愛媛の少年がインテル・ミランの左SBへ這い上がるまで"
      heroImage="/images/articles/nagatomo-yuto-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="nagatomo-yuto-childhood"
      description="インテル・ミランやガラタサライで活躍した長友佑都選手の子供時代。愛媛県出身で高校まで無名だった少年が、不屈の努力でセリエAのトップクラブの正左SBになるまでの軌跡を紹介。"
      tags={['長友佑都', 'サッカー', '幼少期']}
      shareText="長友佑都選手が愛媛の無名選手からインテル・ミランの正左SBへ這い上がった話を紹介 #長友佑都 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E9%95%B7%E5%8F%8B%E4%BD%91%E9%83%BD']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          長友佑都の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          長友佑都選手は1986年9月12日、愛媛県西条市で生まれました。高校まで無名の存在でしたが、明治大学でその才能が開花。FC東京を経てチェゼーナ、インテル・ミラン、ガラタサライ等で活躍し、屈強な肉体と闘争心で欧州の強豪クラブの正レギュラーを勝ち取りました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">1986年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">愛媛県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">Inter</p>
            <p className="text-xs text-gray-600 mt-1">最高峰クラブ</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1986年9月12日</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>愛媛県西条市</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">特徴:</span>
              <span>高校まで無名→大学で開花</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">欧州:</span>
              <span>インテル・ミラン、ガラタサライ等</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          高校まで無名だった少年の逆転劇
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          長友選手は愛媛県出身で、高校まで全国的には無名の存在でした。しかし明治大学進学後、持ち前の運動量と闘争心が爆発的に開花。大学サッカーから日本代表、そして欧州へというシンデレラストーリーを歩みました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">愛媛の自然の中で育んだ体力と根性</h3>
              <p className="text-sm text-gray-600">
                愛媛という自然豊かな環境で育った長友選手は、幼少期から体を動かすことが大好きでした。この環境で培った体力と根性が、後のインテル・ミランでの活躍の土台になりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">明治大学での爆発的な開花</h3>
              <p className="text-sm text-gray-600">
                明治大学進学後、大学サッカーの高い競争の中で才能が一気に開花。圧倒的な運動量と献身的な守備が評価され、卒業時にはFC東京への入団が決まりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">インテルの正レギュラーを勝ち取った闘争心</h3>
              <p className="text-sm text-gray-600">
                インテル・ミランというセリエAの最名門クラブで正左SBを勝ち取った長友選手。欧州の強豪DFを相手に引かない闘争心は、幼少期から育まれた「負けない精神」の結晶です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          地方出身・無名からの大逆転
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期〜高校</td>
                <td className="px-3 py-2 text-gray-600">愛媛で無名選手として成長</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">大学</td>
                <td className="px-3 py-2 text-gray-600">明治大学で才能が爆発的に開花</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2008年</td>
                <td className="px-3 py-2 text-gray-600">FC東京入団・日本代表入り</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2011年</td>
                <td className="px-3 py-2 text-gray-600">インテル・ミラン移籍（セリエA）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「遅咲き」が証明した努力の価値</p>
          <p className="text-sm text-amber-800">
            高校まで無名だった選手がインテル・ミランの正レギュラーになる——長友選手の軌跡は「才能より努力」の価値を体現しています。諦めなかった者だけが辿り着ける場所があります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ：高校まで無名でも世界のトップに立てる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          長友佑都選手の幼少期が教えてくれることは、「高校まで無名であっても、諦めずに努力し続ければインテル・ミランという世界最高峰のクラブの正レギュラーになれる」ということです。エリートコースを歩まなかった長友選手が欧州の頂点に立てたのは、愛媛で育んだ体力と根性、そして絶対に諦めない精神があったからです。お子さんのサッカーの才能が目立たなくても、焦る必要はありません。継続して取り組む力こそが、最終的に最も大きな差を生みます。
        </p>
      </div>
    </ArticleLayout>
  );
}
