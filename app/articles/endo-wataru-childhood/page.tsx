import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '遠藤航の子供時代|横浜生まれの闘将がリバプールの主将へ至るまで',
  description:
  'リバプールでキャプテンも務めた遠藤航選手の子供時代。横浜市出身でデュエル王として知られる闘将が、幼少期から培った強さとリーダーシップの原点を紹介。',
  openGraph: {
    title: '遠藤航の子供時代|横浜生まれの闘将がリバプールの主将へ至るまで',
    description:
    'リバプールでキャプテンも務めた遠藤航選手の子供時代。横浜市出身でデュエル王として知られる闘将が、幼少期から培った強さとリーダーシップの原点を紹介。',
    images: [{ url: '/images/articles/endo-wataru-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/endo-wataru-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/endo-wataru-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '遠藤航の子供時代|横浜生まれの闘将がリバプールの主将へ至るまで',
    images: ['/images/articles/endo-wataru-childhood.jpg'],
  },
};

export default function EndoWataruChildhoodPage() {
  return (
    <ArticleLayout
      title="遠藤航の子供時代|横浜生まれの闘将がリバプールの主将へ至るまで"
      heroImage="/images/articles/endo-wataru-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="endo-wataru-childhood"
      description="リバプールでキャプテンも務めた遠藤航選手の子供時代。横浜市出身でデュエル王として知られる闘将が、幼少期から培った強さとリーダーシップの原点を紹介。"
      tags={['遠藤航', 'サッカー', '幼少期']}
      shareText="遠藤航選手が横浜でサッカーを始め、ブンデスリーガのデュエル王としてリバプールへ渡った話を紹介 #遠藤航 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E9%81%A0%E8%97%A4%E8%88%AA']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          遠藤航の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          遠藤航選手は1993年2月9日、神奈川県横浜市で生まれました。ブンデスリーガ（シュトゥットガルト）で「デュエル勝利数」リーグトップを記録した守備の闘将で、2023年にリバプールへ移籍。日本代表キャプテンも務める現代日本サッカーを代表するMFです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-black text-slate-600">1993年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-black text-slate-600">横浜市</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-black text-slate-600">Liverpool</p>
            <p className="text-xs text-gray-600 mt-1">所属クラブ</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
          <p className="font-bold text-slate-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1993年2月9日</span>
            </li>
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>神奈川県横浜市</span>
            </li>
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">武器:</span>
              <span>デュエル（ボール奪取）の強さ</span>
            </li>
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">現所属:</span>
              <span>リバプール（プレミアリーグ）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          横浜から磨いた「戦う力」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          遠藤選手は横浜市でサッカーを始め、地道にキャリアを積み上げました。湘南ベルマーレからSBV横浜、そして浦和レッズへ。欧州移籍は20代後半と決して早くはありませんでしたが、圧倒的なデュエルの強さが世界に認められました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">負けん気の強さで磨いたデュエル力</h3>
              <p className="text-sm text-gray-600">
                幼少期から「当たり負けしない」強さを持っていた遠藤選手。体幹の強さと闘争心を武器に、ボール際の争いで相手に勝つことを徹底的に鍛えました。この積み重ねがブンデスリーガでのデュエル王につながりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">段階的なキャリアアップ</h3>
              <p className="text-sm text-gray-600">
                湘南ベルマーレ→浦和レッズと着実にJリーグでキャリアを積んだ後、シュトゥットガルトへ移籍。一段一段確実に力をつけていく姿勢が、最終的にリバプールへの道を開きました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">日本代表とリバプールのキャプテンシー</h3>
              <p className="text-sm text-gray-600">
                日本代表のキャプテンを務め、リバプールでもキャプテンマークを巻いた遠藤選手。幼少期から培ったリーダーとしての強さと責任感が、世界最高峰の舞台でも仲間を引っ張る力になっています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          ブンデスリーガのデュエル王からリバプールへ
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">横浜市でサッカーを始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">Jリーグ</td>
                <td className="px-3 py-2 text-gray-600">湘南ベルマーレ・浦和レッズで実績を積む</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2020年</td>
                <td className="px-3 py-2 text-gray-600">シュトゥットガルト移籍、デュエル王に</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2023年</td>
                <td className="px-3 py-2 text-gray-600">リバプール移籍（プレミアリーグ）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <p className="font-bold text-slate-900 mb-2">「デュエル」という統計が証明した世界水準の守備力</p>
          <p className="text-sm text-slate-800">
            ブンデスリーガでデュエル勝利数トップを何度も記録した遠藤選手の守備力は数字でも証明されています。「どれだけ戦えるか」という指標で世界に認められました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          まとめ：戦う姿勢こそが世界への扉を開く
        </h2>
        <p className="text-gray-700 leading-relaxed">
          遠藤航選手の幼少期が教えてくれることは、「技術だけでなく、戦う姿勢と強さが世界の舞台への扉を開く」ということです。派手な技術よりも「デュエルで勝つ」という地味ながら本質的な能力を磨き続けた結果が、リバプールというクラブへの移籍です。お子さんにサッカーをさせるなら、ドリブルやシュートだけでなく、球際の争いや切り替えの速さなど、「戦う姿勢」も大切にしてください。その積み重ねが、世界水準の選手を生み出します。
        </p>
      </div>
    </ArticleLayout>
  );
}
