import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '南野拓実の子供時代|セレッソ大阪の英才教育からリバプールへ',
  description:
    'リバプールにも所属した南野拓実選手の子供時代。大阪府高槻市出身でセレッソ大阪のアカデミーが育てた技術と判断力が、欧州トップクラブへの道を開いた軌跡を紹介。',
  openGraph: {
    title: '南野拓実の子供時代|セレッソ大阪の英才教育からリバプールへ',
    description:
      'リバプールにも所属した南野拓実選手の子供時代。大阪府高槻市出身でセレッソ大阪のアカデミーが育てた技術と判断力が、欧州トップクラブへの道を開いた軌跡を紹介。',
    images: [{ url: '/images/articles/minamino-takumi-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/minamino-takumi-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/minamino-takumi-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '南野拓実の子供時代|セレッソ大阪の英才教育からリバプールへ',
    images: ['/images/articles/minamino-takumi-childhood.jpg'],
  },
};

export default function MinaminoTakumiChildhoodPage() {
  return (
    <ArticleLayout
      title="南野拓実の子供時代|セレッソ大阪の英才教育からリバプールへ"
      heroImage="/images/articles/minamino-takumi-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="minamino-takumi-childhood"
      description="リバプールにも所属した南野拓実選手の子供時代。大阪府高槻市出身でセレッソ大阪のアカデミーが育てた技術と判断力が、欧州トップクラブへの道を開いた軌跡を紹介。"
      tags={['南野拓実', 'サッカー', '幼少期']}
      shareText="南野拓実選手がセレッソ大阪アカデミーで育ち、リバプールに移籍するまでの話を紹介 #南野拓実 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E5%8D%97%E9%87%8E%E6%8B%93%E5%AE%9F']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          南野拓実の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          南野拓実選手は1995年1月16日、大阪府高槻市で生まれました。セレッソ大阪のアカデミーから才能を開花させ、オーストリアのレッドブル・ザルツブルクを経てリバプール（プレミアリーグ）に移籍。現在はモナコ（フランス）で活躍しています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">1995年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">大阪府</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">セレッソ</p>
            <p className="text-xs text-gray-600 mt-1">育成クラブ</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1995年1月16日</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>大阪府高槻市</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">育成:</span>
              <span>セレッソ大阪アカデミー</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">主な所属:</span>
              <span>RBザルツブルク、リバプール、モナコ</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          セレッソ大阪アカデミーが育てた技術と判断力
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          南野選手はセレッソ大阪のアカデミーで、技術と判断力を同時に磨きました。セレッソのアカデミーは香川真司選手も輩出した名門で、高い技術水準の中で競い合う環境が南野選手を鍛えました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">セレッソ大阪アカデミーの技術哲学</h3>
              <p className="text-sm text-gray-600">
                香川真司選手も卒業したセレッソ大阪のアカデミーは、技術と創造性を重視した育成で知られています。南野選手はこの環境で、狭いスペースでもボールを失わない技術と素早い判断力を習得しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">RBザルツブルクでの覚醒</h3>
              <p className="text-sm text-gray-600">
                オーストリアのレッドブル・ザルツブルクに移籍後、激しいプレッシングサッカーの中で戦術理解度と運動量が急成長。チャンピオンズリーグでの活躍がリバプールの目に留まりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">リバプール移籍という夢の実現</h3>
              <p className="text-sm text-gray-600">
                2020年にリバプールへ移籍し、世界最高クラスの選手たちと同じピッチに立ちました。セレッソのアカデミーで培った技術の土台があったからこそ、その舞台に立てました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          欧州のトップクラブを渡り歩いた挑戦者
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">セレッソ大阪アカデミー入団</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2015年</td>
                <td className="px-3 py-2 text-gray-600">RBザルツブルク（オーストリア）へ移籍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2020年</td>
                <td className="px-3 py-2 text-gray-600">リバプール（プレミアリーグ）移籍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年〜</td>
                <td className="px-3 py-2 text-gray-600">モナコ（フランス）等で活躍継続</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2">セレッソが生んだ二人の世界級選手</p>
          <p className="text-sm text-green-800">
            香川真司選手と南野拓実選手は共にセレッソ大阪アカデミー出身です。同じアカデミーから複数の世界レベル選手が生まれることは、育成環境の質の高さを証明しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：良質な育成アカデミーが世界クラスの選手を量産する
        </h2>
        <p className="text-gray-700 leading-relaxed">
          南野拓実選手の幼少期が教えてくれることは、「良質な育成アカデミーに早くから入ることが、欧州トップクラブへの道を大きく拓く」ということです。セレッソ大阪アカデミーは香川真司・南野拓実という2人の世界クラス選手を輩出しました。お子さんにサッカーをさせるなら、クラブの育成理念と指導の質にこだわることが、長期的な成長を左右します。技術と判断力の両方を磨く環境が、世界への扉を開きます。
        </p>
      </div>
    </ArticleLayout>
  );
}
