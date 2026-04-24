import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '瀬戸大也の子供時代|4歳から始めた水泳で世界選手権金メダリストへ',
  description:
    '世界選手権金メダリストの瀬戸大也選手の子供時代。4歳から水泳を始め、個人メドレーの世界チャンピオンへと成長した軌跡と幼少期のエピソードを紹介。',
  openGraph: {
    title: '瀬戸大也の子供時代|4歳から始めた水泳で世界選手権金メダリストへ',
    description:
      '世界選手権金メダリストの瀬戸大也選手の子供時代。4歳から水泳を始め、個人メドレーの世界チャンピオンへと成長した軌跡と幼少期のエピソードを紹介。',
    images: [{ url: '/images/articles/seto-daiya-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/seto-daiya-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/seto-daiya-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '瀬戸大也の子供時代|4歳から始めた水泳で世界選手権金メダリストへ',
    images: ['/images/articles/seto-daiya-childhood.jpg'],
  },
};

export default function SetoDaiyaChildhoodPage() {
  return (
    <ArticleLayout
      title="瀬戸大也の子供時代|4歳から始めた水泳で世界選手権金メダリストへ"
      heroImage="/images/articles/seto-daiya-childhood.jpg"
      heroAlt="水泳を練習する子ども"
      publishDate="2025年4月"
      slug="seto-daiya-childhood"
      description="世界選手権金メダリストの瀬戸大也選手の子供時代。4歳から水泳を始め、個人メドレーの世界チャンピオンへと成長した軌跡と幼少期のエピソードを紹介。"
      tags={['瀬戸大也', '水泳', '幼少期']}
      shareText="瀬戸大也選手が4歳から水泳を始め、世界選手権で金メダルを獲得した話を紹介 #瀬戸大也 #水泳"
      citations={['https://ja.wikipedia.org/wiki/%E7%80%AC%E6%88%B8%E5%A4%A7%E4%B9%9F']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          瀬戸大也の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          瀬戸大也選手は1994年5月24日、埼玉県川口市で生まれました。400m・200m個人メドレーを専門とし、世界選手権で金メダルを獲得した日本競泳界のトップ選手です。4歳から水泳を始め、才能が開花するまでの積み重ねを紹介します。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">1994年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">埼玉県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">4歳</p>
            <p className="text-xs text-gray-600 mt-1">水泳開始</p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100 mb-6">
          <p className="font-bold text-indigo-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1994年5月24日</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>埼玉県川口市</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">水泳開始:</span>
              <span>4歳</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">専門種目:</span>
              <span>400m・200m個人メドレー</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          4歳から始めた水泳の世界
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          瀬戸大也選手が水泳を始めたのは4歳です。競泳選手として理想的なスタート時期であり、この時期に水中での体の動かし方を習得したことが、後の競技選手としての土台を作りました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">4歳から積み上げた水中感覚</h3>
              <p className="text-sm text-gray-600">
                4歳から水泳を始めた瀬戸選手は、幼少期に水中での「感覚」を徹底的に身につけました。水の抵抗を最小限にして進む感覚、呼吸のリズム、体の回転——これらは幼い頃に学ぶほど自然に身体に定着します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">4泳法すべてを極める個人メドレー</h3>
              <p className="text-sm text-gray-600">
                瀬戸選手が選んだ専門種目は「個人メドレー」です。バタフライ・背泳ぎ・平泳ぎ・自由形を順番に泳ぐこの種目は、4つの泳法すべてをマスターする必要があります。幼少期から4泳法を均等に練習した積み重ねが活きています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ジュニア時代から全国トップ</h3>
              <p className="text-sm text-gray-600">
                中学・高校の頃から全国大会で上位に入り、将来の日本競泳界を担う選手として期待されるようになりました。幼少期からの積み重ねが確実に花開いていました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          世界選手権金メダルとアジア大会4冠
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          瀬戸大也選手は世界選手権や主要国際大会で数多くのメダルを獲得し、日本競泳界の中心選手として活躍してきました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">4歳（1998年頃）</td>
                <td className="px-3 py-2 text-gray-600">水泳を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学・高校</td>
                <td className="px-3 py-2 text-gray-600">全国大会で活躍、競泳エリートとして台頭</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2015年</td>
                <td className="px-3 py-2 text-gray-600">世界選手権 400m個人メドレー 金メダル</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2018年</td>
                <td className="px-3 py-2 text-gray-600">アジア大会4冠達成</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪出場</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
          <p className="font-bold text-indigo-900 mb-2">個人メドレーという究極の総合力</p>
          <p className="text-sm text-indigo-800">
            400m個人メドレーは水泳で最も過酷な種目のひとつです。4泳法すべてに優れていなければ勝てないこの種目で世界一になるには、幼少期から全種目をバランスよく鍛える必要があります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          まとめ：早期開始と全種目習得の力
        </h2>
        <p className="text-gray-700 leading-relaxed">
          瀬戸大也選手の幼少期が教えてくれることは、「4歳という早い段階で水泳を始め、全種目を丁寧に習得することの価値」です。水泳は幼少期に始めるほど水中感覚が自然に身につき、後の競技成績に直結します。また、特定の種目だけでなく全種目を練習することで、運動能力全体が底上げされます。お子さんに水泳をさせるなら、できるだけ早い時期に始め、「4泳法すべてを楽しく覚える」という方針が、長期的な可能性を最大化します。瀬戸選手の世界チャンピオンという結果は、4歳からの積み重ねなしには実現しませんでした。
        </p>
      </div>
    </ArticleLayout>
  );
}
