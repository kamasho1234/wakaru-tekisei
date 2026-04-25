import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '伊東純也の子供時代|遅咲きのスプリンターが世界トップへ駆け上がるまで',
  description:
    '欧州で活躍する伊東純也選手の子供時代。神奈川県出身で目立った経歴を持たなかった少年が、スピードという武器で日本代表の絶対的エースへと成長した軌跡を紹介。',
  openGraph: {
    title: '伊東純也の子供時代|遅咲きのスプリンターが世界トップへ駆け上がるまで',
    description:
      '欧州で活躍する伊東純也選手の子供時代。神奈川県出身で目立った経歴を持たなかった少年が、スピードという武器で日本代表の絶対的エースへと成長した軌跡を紹介。',
    images: [{ url: '/images/articles/ito-junya-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ito-junya-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/ito-junya-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '伊東純也の子供時代|遅咲きのスプリンターが世界トップへ駆け上がるまで',
    images: ['/images/articles/ito-junya-childhood.jpg'],
  },
};

export default function ItoJunyaChildhoodPage() {
  return (
    <ArticleLayout
      title="伊東純也の子供時代|遅咲きのスプリンターが世界トップへ駆け上がるまで"
      heroImage="/images/articles/ito-junya-childhood.jpg"
      heroAlt="全力疾走する子ども"
      publishDate="2025年4月"
      slug="ito-junya-childhood"
      description="欧州で活躍する伊東純也選手の子供時代。神奈川県出身で目立った経歴を持たなかった少年が、スピードという武器で日本代表の絶対的エースへと成長した軌跡を紹介。"
      tags={['伊東純也', 'サッカー', '幼少期']}
      shareText="伊東純也選手が遅咲きながらも圧倒的なスピードで世界を相手に活躍した話を紹介 #伊東純也 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E4%BC%8A%E6%9D%B1%E7%B4%94%E4%B9%9F']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          伊東純也の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊東純也選手は1993年3月16日、神奈川県厚木市で生まれました。Jリーグ名門クラブのアカデミー出身ではない「遅咲き」の選手ですが、圧倒的なスピードを武器に日本代表の主力へと成長。フランスのスタッド・ド・ランスなど欧州クラブで活躍しています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">1993年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">神奈川県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
            <p className="text-2xl font-black text-yellow-600">遅咲き</p>
            <p className="text-xs text-gray-600 mt-1">成長タイプ</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100 mb-6">
          <p className="font-bold text-yellow-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1993年3月16日</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>神奈川県厚木市</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">武器:</span>
              <span>圧倒的なスピードとドリブル</span>
            </li>
            <li className="text-sm text-yellow-800 flex gap-2">
              <span className="font-bold">欧州:</span>
              <span>ゲンク（ベルギー）、ランス（フランス）等</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          名門アカデミー外から這い上がった「遅咲き」の道
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          伊東純也選手は大手クラブのアカデミーを経由せず、高校・大学と着実に力をつけてJリーグ入りした「遅咲き型」の選手です。この成長パターンは、エリートコースを歩まなくても世界に届ける可能性があることを示しています。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">高校・大学で磨いたスピード</h3>
              <p className="text-sm text-gray-600">
                幼少期から体が速かった伊東選手。高校・大学サッカーの中でそのスピードをサッカーの文脈で活かす方法を身につけ、Jリーグ参入後も急成長を続けました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柏レイソルでの覚醒</h3>
              <p className="text-sm text-gray-600">
                柏レイソルに加入後、持ち前のスピードを最大限に活かす戦術に出会い急成長。Jリーグでの活躍が評価され、日本代表にも名を連ねるようになりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">欧州でも通用した圧倒的なスピード</h3>
              <p className="text-sm text-gray-600">
                ベルギーリーグのゲンクでも得点を量産し、欧州のスピードに慣れた守備陣をも置き去りにする快足は、世界レベルでも十分通用することを証明しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          日本代表の右サイドを席巻
        </h2>
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
                <td className="px-3 py-2 font-bold text-gray-900">高校・大学</td>
                <td className="px-3 py-2 text-gray-600">サッカー技術とスピードを磨く</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">柏レイソル</td>
                <td className="px-3 py-2 text-gray-600">Jリーグで覚醒・日本代表入り</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">ベルギー・ゲンクへ移籍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年</td>
                <td className="px-3 py-2 text-gray-600">W杯出場・欧州主要リーグで活躍継続</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
          <p className="font-bold text-yellow-900 mb-2">遅咲きでも世界に届く</p>
          <p className="text-sm text-yellow-800">
            伊東選手の成功は「名門アカデミー出身でなくても、自分の武器を磨き続ければ世界に届く」ことを示しています。スピードという天性の才能を丁寧に伸ばし続けた結果が、欧州での活躍です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full inline-block"></span>
          まとめ：エリートコースでなくても世界に届ける
        </h2>
        <p className="text-gray-700 leading-relaxed">
          伊東純也選手の幼少期が教えてくれることは、「スタートラインが違っても、自分の武器を信じて磨き続ければ世界レベルに達することができる」ということです。名門アカデミー出身でなかった伊東選手が欧州で活躍できているのは、スピードという武器を一切妥協せずに伸ばし続けたからです。お子さんに「これだ」という強みが一つでもあれば、それをとことん磨く環境を整えることが、将来の大きな可能性を開きます。
        </p>
      </div>
    </ArticleLayout>
  );
}
