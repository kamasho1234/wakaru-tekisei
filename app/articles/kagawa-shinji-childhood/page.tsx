import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '香川真司の子供時代|セレッソ大阪の神童がドルトムントとマンUへ',
  description:
  'ボルシア・ドルトムントやマンチェスター・ユナイテッドで活躍した香川真司選手の子供時代。兵庫県神戸市出身でセレッソ大阪アカデミーが育てた技術が欧州を席巻した軌跡を紹介。',
  openGraph: {
    title: '香川真司の子供時代|セレッソ大阪の神童がドルトムントとマンUへ',
    description:
    'ボルシア・ドルトムントやマンチェスター・ユナイテッドで活躍した香川真司選手の子供時代。兵庫県神戸市出身でセレッソ大阪アカデミーが育てた技術が欧州を席巻した軌跡を紹介。',
    images: [{ url: '/images/articles/kagawa-shinji-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kagawa-shinji-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kagawa-shinji-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '香川真司の子供時代|セレッソ大阪の神童がドルトムントとマンUへ',
    images: ['/images/articles/kagawa-shinji-childhood.jpg'],
  },
};

export default function KagawaShinjiChildhoodPage() {
  return (
    <ArticleLayout
      title="香川真司の子供時代|セレッソ大阪の神童がドルトムントとマンUへ"
      heroImage="/images/articles/kagawa-shinji-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="kagawa-shinji-childhood"
      description="ボルシア・ドルトムントやマンチェスター・ユナイテッドで活躍した香川真司選手の子供時代。兵庫県神戸市出身でセレッソ大阪アカデミーが育てた技術が欧州を席巻した軌跡を紹介。"
      tags={['香川真司', 'サッカー', '幼少期']}
      shareText="香川真司選手がセレッソ大阪アカデミーで育ち、ドルトムント・マンUで活躍した話を紹介 #香川真司 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E9%A6%99%E5%B7%9D%E7%9C%9F%E5%8F%B8']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          香川真司の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          香川真司選手は1989年3月17日、兵庫県神戸市で生まれました。セレッソ大阪のアカデミー出身で、ボルシア・ドルトムント（ブンデスリーガ2連覇）、マンチェスター・ユナイテッドで活躍した日本サッカーを代表するMFです。欧州での圧倒的な活躍は、日本人MFの可能性を世界に示しました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">1989年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">兵庫県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">Man U</p>
            <p className="text-xs text-gray-600 mt-1">最高峰クラブ</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1989年3月17日</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>兵庫県神戸市</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">育成:</span>
              <span>セレッソ大阪アカデミー</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">欧州:</span>
              <span>ドルトムント（2連覇）、マンU等</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          セレッソ大阪アカデミーが生んだ技術の神童
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          香川選手はセレッソ大阪のアカデミーで幼少期からサッカーを学びました。後に南野拓実選手も輩出するセレッソアカデミーの技術哲学が、狭いスペースでも輝く香川選手の技術を育てました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">セレッソアカデミーの技術哲学</h3>
              <p className="text-sm text-gray-600">
                セレッソ大阪のアカデミーは「技術と創造性」を最重視します。幼少期からボールを丁寧に扱い、狭いスペースで判断を速める訓練が、香川選手の独特のリズムとドリブルを生み出しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">圧倒的なゴール感覚と突破力</h3>
              <p className="text-sm text-gray-600">
                香川選手の特徴はゴールへの嗅覚と、相手の意表をつく突破力です。この感覚は幼少期から「どこにボールを運べばゴールに近いか」を常に考え続けた積み重ねから生まれています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ドルトムントで証明した世界水準</h3>
              <p className="text-sm text-gray-600">
                ブンデスリーガのボルシア・ドルトムントで2年連続リーグ優勝に貢献した香川選手は、マンチェスター・ユナイテッドへ移籍し、世界最高峰の舞台でも日本人MFの実力を証明しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          ドルトムント2連覇からマンUへ
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
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
                <td className="px-3 py-2 font-bold text-gray-900">2006年</td>
                <td className="px-3 py-2 text-gray-600">セレッソ大阪でプロデビュー</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2010年</td>
                <td className="px-3 py-2 text-gray-600">ドルトムント移籍、ブンデスリーガ2連覇</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2012年</td>
                <td className="px-3 py-2 text-gray-600">マンチェスター・ユナイテッドへ移籍</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">セレッソが生んだ2人の世界級MF</p>
          <p className="text-sm text-purple-800">
            香川真司・南野拓実という2人のセレッソ大阪アカデミー出身選手が欧州のトップクラブで活躍した事実は、育成の質が選手の未来を決める何よりの証拠です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ：技術と創造性を磨く環境が欧州への扉を開く
        </h2>
        <p className="text-gray-700 leading-relaxed">
          香川真司選手の幼少期が教えてくれることは、「技術と創造性を重視した育成環境が、欧州のトップクラブへの道を開く」ということです。セレッソ大阪という技術志向のアカデミーで磨かれた感覚は、ドルトムントとマンUという世界最高峰のクラブでも輝きを放ちました。お子さんにサッカーをさせるなら、「勝利のための組織力」だけでなく「個人の技術と創造性」を伸ばしてくれるクラブを選ぶことが、長期的に大きな差を生みます。
        </p>
      </div>
    </ArticleLayout>
  );
}
