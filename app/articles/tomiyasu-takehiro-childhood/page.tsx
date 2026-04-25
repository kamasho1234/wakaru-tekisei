import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '冨安健洋の子供時代|福岡育ちの万能DFがアーセナルの主力へ至るまで',
  description:
    'プレミアリーグ・アーセナルで活躍する冨安健洋選手の子供時代。福岡県出身でアビスパ福岡のアカデミーで守備の基礎を磨き、世界トップレベルのDFへと成長した軌跡を紹介。',
  openGraph: {
    title: '冨安健洋の子供時代|福岡育ちの万能DFがアーセナルの主力へ至るまで',
    description:
      'プレミアリーグ・アーセナルで活躍する冨安健洋選手の子供時代。福岡県出身でアビスパ福岡のアカデミーで守備の基礎を磨き、世界トップレベルのDFへと成長した軌跡を紹介。',
    images: [{ url: '/images/articles/tomiyasu-takehiro-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/tomiyasu-takehiro-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/tomiyasu-takehiro-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '冨安健洋の子供時代|福岡育ちの万能DFがアーセナルの主力へ至るまで',
    images: ['/images/articles/tomiyasu-takehiro-childhood.jpg'],
  },
};

export default function TomiyasuTakehiroChildhoodPage() {
  return (
    <ArticleLayout
      title="冨安健洋の子供時代|福岡育ちの万能DFがアーセナルの主力へ至るまで"
      heroImage="/images/articles/tomiyasu-takehiro-childhood.jpg"
      heroAlt="ディフェンス練習をする子ども"
      publishDate="2025年4月"
      slug="tomiyasu-takehiro-childhood"
      description="プレミアリーグ・アーセナルで活躍する冨安健洋選手の子供時代。福岡県出身でアビスパ福岡のアカデミーで守備の基礎を磨き、世界トップレベルのDFへと成長した軌跡を紹介。"
      tags={['冨安健洋', 'サッカー', '幼少期']}
      shareText="冨安健洋選手が福岡でサッカーを始め、アーセナルの主力DFへ成長した話を紹介 #冨安健洋 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E5%86%A8%E5%AE%89%E5%81%A5%E6%B4%8B']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          冨安健洋の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          冨安健洋選手は1998年11月5日、福岡県福岡市で生まれました。アビスパ福岡のアカデミー出身で、センターバック・右サイドバックどちらもこなす万能DF。プレミアリーグのアーセナルで主力を担い、日本人屈指の守備の名手として知られています。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">1998年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">福岡県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">Arsenal</p>
            <p className="text-xs text-gray-600 mt-1">所属クラブ</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1998年11月5日</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>福岡県福岡市</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">育成:</span>
              <span>アビスパ福岡アカデミー</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">現所属:</span>
              <span>アーセナル（プレミアリーグ）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          福岡で育んだ守備の才能
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          冨安選手はアビスパ福岡のアカデミーで守備の基礎を徹底的に学びました。センターバックとしての1対1の強さと、サイドバックとしての攻撃参加——両方をこなせる万能性は幼少期から培われました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">アビスパ福岡アカデミーでの守備教育</h3>
              <p className="text-sm text-gray-600">
                九州の名門・アビスパ福岡のアカデミーで守備の基本を徹底的に叩き込まれた冨安選手。ポジショニングの感覚と1対1の対応力は、この時期に形成されました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">複数ポジションをこなす万能性</h3>
              <p className="text-sm text-gray-600">
                センターバックと右サイドバックをハイレベルでこなせる万能性が冨安選手の強みです。この柔軟性は幼少期からさまざまなポジションを経験したことで培われた適応力です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ボローニャからアーセナルへの飛躍</h3>
              <p className="text-sm text-gray-600">
                イタリア・ボローニャで評価を高めた後、プレミアリーグの名門アーセナルへ移籍。「日本人DFが世界最高峰のリーグで通用する」ことを体現しています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          アーセナルの主力DFとして
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">アビスパ福岡アカデミーで守備を学ぶ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2017年</td>
                <td className="px-3 py-2 text-gray-600">アビスパ福岡でプロデビュー</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">イタリア・ボローニャへ移籍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">アーセナルへ移籍（プレミアリーグ）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">守備専門の道が日本人の壁を破った</p>
          <p className="text-sm text-red-800">
            日本人選手は攻撃的なポジションで欧州に渡ることが多い中、冨安選手はDFとして世界最高峰クラブのスタメンを掴みました。守備力を極めることでも世界最高峰に届けることを証明しました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ：守備を極めることも世界への道になる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          冨安健洋選手の幼少期が教えてくれることは、「攻撃だけでなく守備を本気で磨くことも、世界トップクラブへの道になる」ということです。日本人選手は攻撃的なポジションで注目されがちですが、冨安選手はDFとしてアーセナルという世界屈指のクラブの主力を担っています。お子さんがディフェンスを担当するなら、それを誇りに思ってください。守備の専門家として極めることが、世界への最短ルートになる可能性を冨安選手が示してくれています。
        </p>
      </div>
    </ArticleLayout>
  );
}
