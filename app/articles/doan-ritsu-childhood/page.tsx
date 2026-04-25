import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '堂安律の子供時代|ガンバ大阪の名門アカデミーからブンデスリーガへ',
  description:
    'ブンデスリーガ・フライブルクで活躍する堂安律選手の子供時代。兵庫県伊丹市出身でガンバ大阪アカデミー仕込みの左足シュートが生まれた幼少期を紹介。',
  openGraph: {
    title: '堂安律の子供時代|ガンバ大阪の名門アカデミーからブンデスリーガへ',
    description:
      'ブンデスリーガ・フライブルクで活躍する堂安律選手の子供時代。兵庫県伊丹市出身でガンバ大阪アカデミー仕込みの左足シュートが生まれた幼少期を紹介。',
    images: [{ url: '/images/articles/doan-ritsu-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/doan-ritsu-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/doan-ritsu-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '堂安律の子供時代|ガンバ大阪の名門アカデミーからブンデスリーガへ',
    images: ['/images/articles/doan-ritsu-childhood.jpg'],
  },
};

export default function DoanRitsuChildhoodPage() {
  return (
    <ArticleLayout
      title="堂安律の子供時代|ガンバ大阪の名門アカデミーからブンデスリーガへ"
      heroImage="/images/articles/doan-ritsu-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="doan-ritsu-childhood"
      description="ブンデスリーガ・フライブルクで活躍する堂安律選手の子供時代。兵庫県伊丹市出身でガンバ大阪アカデミー仕込みの左足シュートが生まれた幼少期を紹介。"
      tags={['堂安律', 'サッカー', '幼少期']}
      shareText="堂安律選手がガンバ大阪アカデミーで左足シュートを磨き、W杯でドイツ・スペインを撃破した話を紹介 #堂安律 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E5%A0%82%E5%AE%89%E5%BE%8B']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          堂安律の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堂安律選手は1998年6月16日、兵庫県伊丹市で生まれました。ガンバ大阪のアカデミー出身で、2022年W杯ではドイツ戦・スペイン戦でいずれも同点ゴールを決める活躍。左足の強烈なシュートを武器に、欧州でキャリアを築いています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">1998年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">兵庫県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-2xl font-black text-orange-600">ガンバ大阪</p>
            <p className="text-xs text-gray-600 mt-1">育成クラブ</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 mb-6">
          <p className="font-bold text-orange-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1998年6月16日</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>兵庫県伊丹市</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">育成:</span>
              <span>ガンバ大阪アカデミー</span>
            </li>
            <li className="text-sm text-orange-800 flex gap-2">
              <span className="font-bold">現所属:</span>
              <span>フライブルク（ブンデスリーガ）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          ガンバ大阪アカデミーで鍛えた左足シュート
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          堂安選手は幼少期からガンバ大阪のアカデミーに所属し、Jリーグ屈指の育成環境でサッカーを学びました。特に左足のシュート精度と強さは、幼少期から徹底的に磨いた武器です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">名門ガンバ大阪アカデミーの洗礼</h3>
              <p className="text-sm text-gray-600">
                ガンバ大阪のアカデミーは宇佐美貴史など多くのJリーガー・代表選手を輩出した名門。堂安選手はその環境で高い競争の中サッカーを覚え、技術と精神力を同時に鍛えました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">左足への徹底したこだわり</h3>
              <p className="text-sm text-gray-600">
                堂安選手は右利きでありながら、左足のシュートを武器にしています。幼少期から意識的に左足を鍛え、現在ではプロでも通用する強烈な左足シュートを身につけました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">W杯でのドイツ・スペイン撃破ゴール</h3>
              <p className="text-sm text-gray-600">
                2022年カタールW杯でドイツ戦・スペイン戦いずれも同点ゴールを決めた堂安選手。「ジャイアントキリング」の立役者となったこの活躍は、幼少期から磨いてきたシュート力の結晶です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          欧州での挑戦と成長
        </h2>
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
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">ガンバ大阪アカデミー入団</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2017年</td>
                <td className="px-3 py-2 text-gray-600">オランダ・フローニンゲンへ移籍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">PSV、ビーレフェルト等を経てドイツへ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年</td>
                <td className="px-3 py-2 text-gray-600">W杯ドイツ・スペイン戦でゴール</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">名門アカデミーが生む「本物の選手」</p>
          <p className="text-sm text-orange-800">
            ガンバ大阪アカデミーは多くの代表選手を輩出してきました。堂安選手もその系譜に連なる一人です。良質な育成環境に早期に入ることが、世界で戦える選手への最短ルートです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ：利き足以外の武器を磨くことが差別化につながる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          堂安律選手の幼少期が教えてくれることは、「利き足以外の足も武器にすることが、選手としての可能性を大きく広げる」ということです。右利きでありながら左足シュートを徹底的に鍛えた結果、W杯の大舞台で世界を相手にゴールを決める選手になりました。お子さんにサッカーをさせるなら、利き足だけでなく、苦手な足も練習する習慣をつけることが将来の大きな武器になります。
        </p>
      </div>
    </ArticleLayout>
  );
}
