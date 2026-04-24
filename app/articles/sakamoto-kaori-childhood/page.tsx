import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '坂本花織の子供時代|神戸育ちの少女が世界選手権3連覇へ',
  description:
    'フィギュアスケート世界選手権3連覇を達成した坂本花織選手の子供時代。神戸で幼少期からスケートを始め、世界一になるまでの道のりを紹介。',
  openGraph: {
    title: '坂本花織の子供時代|神戸育ちの少女が世界選手権3連覇へ',
    description:
      'フィギュアスケート世界選手権3連覇を達成した坂本花織選手の子供時代。神戸で幼少期からスケートを始め、世界一になるまでの道のりを紹介。',
    images: [{ url: '/images/articles/sakamoto-kaori-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sakamoto-kaori-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sakamoto-kaori-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '坂本花織の子供時代|神戸育ちの少女が世界選手権3連覇へ',
    images: ['/images/articles/sakamoto-kaori-childhood.jpg'],
  },
};

export default function SakamotoKaoriChildhoodPage() {
  return (
    <ArticleLayout
      title="坂本花織の子供時代|神戸育ちの少女が世界選手権3連覇へ"
      heroImage="/images/articles/sakamoto-kaori-childhood.jpg"
      heroAlt="フィギュアスケートを練習する子ども"
      publishDate="2025年4月"
      slug="sakamoto-kaori-childhood"
      description="フィギュアスケート世界選手権3連覇を達成した坂本花織選手の子供時代。神戸で幼少期からスケートを始め、世界一になるまでの道のりを紹介。"
      tags={['坂本花織', 'フィギュアスケート', '幼少期']}
      shareText="坂本花織選手が幼少期から神戸でスケートを始め、世界選手権3連覇を達成した話を紹介 #坂本花織 #フィギュアスケート"
      citations={['https://ja.wikipedia.org/wiki/%E5%9D%82%E6%9C%AC%E8%8A%B1%E7%B9%94']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          坂本花織の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          坂本花織選手は2000年4月9日、兵庫県神戸市で生まれました。フィギュアスケート世界選手権を複数回制覇し、現役トップ選手として活躍しています。その始まりは幼い頃に神戸でスケートを始めたことでした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">2000年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">兵庫県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">幼少期</p>
            <p className="text-xs text-gray-600 mt-1">スケート開始</p>
          </div>
        </div>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 mb-6">
          <p className="font-bold text-sky-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2000年4月9日</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>兵庫県神戸市</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">所属:</span>
              <span>シスメックス</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">主な実績:</span>
              <span>世界選手権複数回制覇</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          神戸で始まったスケート人生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          坂本花織選手は幼少期から神戸でフィギュアスケートを始め、地元のリンクで基礎を築きました。同じ神戸出身の阿部一二三・詩兄妹と同じく、神戸という都市が世界チャンピオンを育てた形になっています。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">幼少期から積み重ねたスケーティング</h3>
              <p className="text-sm text-gray-600">
                フィギュアスケートはジャンプだけでなく、スケーティング（氷上での滑走技術）の質が非常に重要です。坂本選手は幼少期から丁寧にスケーティングを磨き、それが後の世界制覇の土台になりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">表現力という独自の強み</h3>
              <p className="text-sm text-gray-600">
                坂本選手の最大の特徴は、音楽に合わせた豊かな表現力です。技術的な難度だけでなく、演技全体の美しさで高い評価を獲得します。この表現力は幼少期から音楽とスケートを組み合わせた練習によって培われました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ジュニア時代から安定した実力</h3>
              <p className="text-sm text-gray-600">
                ジュニア時代から安定したスコアを出す選手として知られ、シニアに昇格後も急成長を続けました。浮き沈みの少ない安定感は、幼少期からの地道な練習の積み重ねを示しています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          世界選手権複数回制覇という偉業
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          坂本花織選手は世界選手権を複数回制覇し、日本女子フィギュアスケートの新たなエースとして確固たる地位を築きました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">神戸でフィギュアスケートを始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ジュニア</td>
                <td className="px-3 py-2 text-gray-600">全日本ジュニア大会で好成績</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年</td>
                <td className="px-3 py-2 text-gray-600">世界選手権 初優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2023年</td>
                <td className="px-3 py-2 text-gray-600">世界選手権 連覇</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2024年</td>
                <td className="px-3 py-2 text-gray-600">世界選手権 3連覇達成</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
          <p className="font-bold text-sky-900 mb-2">スケーティングの質が世界一の源</p>
          <p className="text-sm text-sky-800">
            坂本花織選手の強みは「スケーティングの質」です。幼少期から積み上げた基礎的な滑走技術が、世界トップレベルの評価につながっています。ジャンプだけではない、総合的なスケートの美しさが彼女の世界一の理由です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          まとめ：基礎の積み重ねが世界3連覇を生む
        </h2>
        <p className="text-gray-700 leading-relaxed">
          坂本花織選手の成功から学べる最大の教訓は、「華やかな技術よりも基礎の質が大切」ということです。フィギュアスケートでは、誰もが目を引くジャンプに注目しがちですが、坂本選手が世界を制したのは丁寧なスケーティングと豊かな表現力です。どんなスポーツでも、幼少期に正しい基礎を積み重ねることが、後の圧倒的な強さを生み出します。神戸で幼い頃から地道に積み上げてきた練習が、世界選手権3連覇という結実を生んだのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
