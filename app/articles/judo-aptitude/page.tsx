import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '柔道に向いている子の特徴|体力データから見る適性の見極め方',
  description:
    '子どもが柔道に向いているかどうかの見極め方を、新体力テストデータを使って解説。筋力・瞬発力・柔軟性の目安値も紹介します。',
  openGraph: {
    title: '柔道に向いている子の特徴|体力データから見る適性の見極め方',
    description:
      '子どもが柔道に向いているかどうかの見極め方を、新体力テストデータを使って解説。筋力・瞬発力・柔軟性の目安値も紹介します。',
    images: [{ url: '/images/articles/judo-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/judo-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/judo-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '柔道に向いている子の特徴|体力データから見る適性の見極め方',
    images: ['/images/articles/judo-aptitude.jpg'],
  },
};

export default function JudoAptitudePage() {
  return (
    <ArticleLayout
      title="柔道に向いている子の特徴|体力データから見る適性の見極め方"
      heroImage="/images/articles/judo-aptitude.jpg"
      heroAlt="柔道をしている子どもたち"
      publishDate="2025年4月"
      slug="judo-aptitude"
      description="子どもが柔道に向いているかどうかの見極め方を、新体力テストデータを使って解説。筋力・瞬発力・柔軟性の目安値も紹介します。"
      tags={['柔道', '適性診断', '体力テスト']}
      shareText="柔道に向いている子の特徴を体力データで解説。 #子育て #柔道"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          柔道に必要な体力要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          柔道は「相手を制する」スポーツです。組み合って投げ技・関節技・抑え込みを駆使するため、全身の筋力と瞬発力、そして受け身のための柔軟性が重要です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">40%</p>
            <p className="text-xs text-gray-600 mt-1">筋力</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">25%</p>
            <p className="text-xs text-gray-600 mt-1">瞬発力</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">20%</p>
            <p className="text-xs text-gray-600 mt-1">柔軟性</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100">
            <p className="text-2xl font-black text-indigo-600">15%</p>
            <p className="text-xs text-gray-600 mt-1">バランス感覚</p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100 mb-6">
          <p className="font-bold text-indigo-900 mb-2">各要素の役割</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">筋力:</span>
              <span>相手を崩す・投げる・押さえ込む際に必要な全身の力</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">瞬発力:</span>
              <span>相手の隙を突いて一瞬で投げ技を決める爆発的な力</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">柔軟性:</span>
              <span>受け身を安全に取るための体の柔らかさ。怪我予防にも直結</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">バランス感覚:</span>
              <span>相手に崩されても体勢を立て直す能力</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          向いている子の体力的な特徴
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">テスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">関連する能力</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">道着を掴む力・投げ技の威力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">上体起こし</td>
                <td className="px-3 py-2 text-gray-600">体幹・腹筋の力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">投げ技の爆発的瞬発力</td>
                <td className="px-3 py-2 text-gray-600">全国平均以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">長座体前屈</td>
                <td className="px-3 py-2 text-gray-600">受け身の柔軟性・怪我予防</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">組み手時の足さばき</td>
                <td className="px-3 py-2 text-gray-600">平均レベル以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          体格や性格的な向き不向き
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格</h3>
              <p className="text-sm text-gray-600">
                柔道は体重別階級制のため、体格を選びません。がっしりした子は力で押すスタイル、細身の子はスピードで投げるスタイルと、体型を活かした戦い方ができます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">性格</h3>
              <p className="text-sm text-gray-600">
                柔道は礼儀・礼節を重んじる武道です。真面目にコツコツ練習を続けられる子、1対1の真剣勝負が好きな子に向いています。精神的な鍛錬も求められます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">向いている性格タイプ</h3>
              <p className="text-sm text-gray-600">
                粘り強い、礼儀正しい、1対1の勝負が好き、体を使うのが好き、チームよりも個人で戦いたいタイプ。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          年齢別の体力目安
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-2 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">握力</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">上体起こし</th>
                <th className="px-2 py-2 text-left font-bold text-gray-700">立ち幅跳び</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(男)</td>
                <td className="px-2 py-2 text-gray-600">11kg以上</td>
                <td className="px-2 py-2 text-gray-600">18回以上</td>
                <td className="px-2 py-2 text-gray-600">130cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">8歳(女)</td>
                <td className="px-2 py-2 text-gray-600">10kg以上</td>
                <td className="px-2 py-2 text-gray-600">16回以上</td>
                <td className="px-2 py-2 text-gray-600">118cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(男)</td>
                <td className="px-2 py-2 text-gray-600">15kg以上</td>
                <td className="px-2 py-2 text-gray-600">22回以上</td>
                <td className="px-2 py-2 text-gray-600">152cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">10歳(女)</td>
                <td className="px-2 py-2 text-gray-600">13kg以上</td>
                <td className="px-2 py-2 text-gray-600">19回以上</td>
                <td className="px-2 py-2 text-gray-600">143cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(男)</td>
                <td className="px-2 py-2 text-gray-600">20kg以上</td>
                <td className="px-2 py-2 text-gray-600">26回以上</td>
                <td className="px-2 py-2 text-gray-600">175cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-2 py-2 font-bold text-gray-900">12歳(女)</td>
                <td className="px-2 py-2 text-gray-600">17kg以上</td>
                <td className="px-2 py-2 text-gray-600">22回以上</td>
                <td className="px-2 py-2 text-gray-600">162cm以上</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          柔道を始める適切な年齢
        </h2>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
          <p className="font-bold text-indigo-900 mb-2">年齢別柔道開始のポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">6〜7歳:</span>
              <span>受け身の基礎を習得する段階。安全な道場選びが重要</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">8〜9歳:</span>
              <span>受け身が安定したら簡単な投げ技・固め技を習得</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">10〜12歳:</span>
              <span>ゴールデンエイジで技術の吸収が速い。試合経験を積む最適期</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">中学生以降:</span>
              <span>本格的な体重別試合。戦術の幅が広がる時期</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          柔道に向いている子は、筋力・瞬発力が発達しており、礼節を大切にできる子です。体格を問わず活躍できる武道で、精神面の成長にも大きく貢献します。新体力テストのデータを参考にしながら、お子さんの特性に合った道場を選んでみてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
