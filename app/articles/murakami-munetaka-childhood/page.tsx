import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '村上宗隆の子供時代|小学校から始めた野球で三冠王・ホームラン王への道',
  description:
    '2022年にNPB史上最年少で三冠王を達成した村上宗隆選手の子供時代。熊本で野球を始めた幼少期から、日本最高の打者へと成長した軌跡を紹介。',
  openGraph: {
    title: '村上宗隆の子供時代|小学校から始めた野球で三冠王・ホームラン王への道',
    description:
      '2022年にNPB史上最年少で三冠王を達成した村上宗隆選手の子供時代。熊本で野球を始めた幼少期から、日本最高の打者へと成長した軌跡を紹介。',
    images: [{ url: '/images/articles/murakami-munetaka-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/murakami-munetaka-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/murakami-munetaka-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '村上宗隆の子供時代|小学校から始めた野球で三冠王・ホームラン王への道',
    images: ['/images/articles/murakami-munetaka-childhood.jpg'],
  },
};

export default function MurakamiMunetakaChildhoodPage() {
  return (
    <ArticleLayout
      title="村上宗隆の子供時代|小学校から始めた野球で三冠王・ホームラン王への道"
      heroImage="/images/articles/murakami-munetaka-childhood.jpg"
      heroAlt="バッティング練習をする子ども"
      publishDate="2025年4月"
      slug="murakami-munetaka-childhood"
      description="2022年にNPB史上最年少で三冠王を達成した村上宗隆選手の子供時代。熊本で野球を始めた幼少期から、日本最高の打者へと成長した軌跡を紹介。"
      tags={['村上宗隆', '野球', '幼少期']}
      shareText="村上宗隆選手が熊本で野球を始め、22歳でNPB史上最年少三冠王を達成した話を紹介 #村上宗隆 #野球"
      citations={['https://ja.wikipedia.org/wiki/%E6%9D%91%E4%B8%8A%E5%AE%97%E9%9A%86']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          村上宗隆の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          村上宗隆選手は2000年2月2日、熊本県熊本市で生まれました。東京ヤクルトスワローズに所属し、2022年にはNPB史上最年少（22歳）で三冠王を達成。「令和の三冠王」として日本野球界の頂点に立つ強打者です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">2000年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">熊本県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">22歳</p>
            <p className="text-xs text-gray-600 mt-1">最年少三冠王</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2000年2月2日</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>熊本県熊本市</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">所属:</span>
              <span>東京ヤクルトスワローズ</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">主な実績:</span>
              <span>NPB最年少三冠王（2022年）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          熊本から始まった野球人生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          村上宗隆選手は小学校から地元の少年野球チームで野球を始めました。熊本という地方都市で育ちながらも、その才能は早くから際立っており、中学・高校と着実にステップアップしていきました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">少年野球での豪快なスイング</h3>
              <p className="text-sm text-gray-600">
                幼少期から体格に恵まれた村上選手は、少年野球の頃から豪快なフルスイングが持ち味でした。「強く振る」という感覚を幼い頃から体に刻んだことが、プロでのホームラン量産につながっています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">九州学院高校での全国制覇</h3>
              <p className="text-sm text-gray-600">
                熊本の名門・九州学院高校に進学し、高校3年時に甲子園に出場。捕手として守備でも貢献しながら、打者としての才能も磨きました。高校時代の経験が、プロ入り後の早期活躍の土台となりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ドラフト1位でヤクルト入団</h3>
              <p className="text-sm text-gray-600">
                2018年ドラフトでヤクルトからドラフト1位指名を受け、高校卒業後すぐにプロの世界へ。捕手から一塁手へコンバートされ、打撃に専念できる環境で才能が一気に開花しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          NPB史上最年少三冠王と56本塁打
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          村上宗隆選手は2022年シーズン、打率・本塁打・打点の3部門でリーグトップを独占し、22歳でNPB史上最年少三冠王を達成。同年56本の本塁打は日本人選手最多記録（当時）に並ぶ快挙でした。
        </p>

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
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">熊本の少年野球チームで野球を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">九州学院高校で甲子園出場</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2019年</td>
                <td className="px-3 py-2 text-gray-600">ヤクルト入団（ドラフト1位）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">ヤクルト日本一・リーグMVP</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2022年</td>
                <td className="px-3 py-2 text-gray-600">NPB最年少三冠王・56本塁打</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2">「令和の三冠王」の打撃哲学</p>
          <p className="text-sm text-green-800">
            村上選手の打撃の特徴はフルスイングへの徹底したこだわりです。三振を恐れず常に最大限のスイングをする姿勢は、幼少期から「強く振る」ことを最優先してきた積み重ねから生まれています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：フルスイングへの信念が生んだ最強打者
        </h2>
        <p className="text-gray-700 leading-relaxed">
          村上宗隆選手の幼少期が教えてくれることは、「打撃は思い切りよく振ることから始まる」という原点の大切さです。熊本という地方から始まった野球人生で、一貫して「強く振る」ことへのこだわりを持ち続けた結果が22歳での三冠王です。お子さんが野球に取り組む際は、打率よりもまず「思い切りよくスイングする」という感覚を大切にすることが、長期的な成長につながります。村上選手の豪快なバッティングは、幼少期から培われたフルスイングへの信念なしには生まれませんでした。
        </p>
      </div>
    </ArticleLayout>
  );
}
