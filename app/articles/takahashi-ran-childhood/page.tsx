import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '高橋藍の子供時代|兄の背中を追ってバレー界の新星へ',
  description:
    'イタリアプロリーグで活躍するバレーボール選手・高橋藍選手の子供時代。京都生まれで兄の影響からバレーを始め、世界トップレベルの選手になるまでの軌跡を紹介。',
  openGraph: {
    title: '高橋藍の子供時代|兄の背中を追ってバレー界の新星へ',
    description:
      'イタリアプロリーグで活躍するバレーボール選手・高橋藍選手の子供時代。京都生まれで兄の影響からバレーを始め、世界トップレベルの選手になるまでの軌跡を紹介。',
    images: [{ url: '/images/articles/takahashi-ran-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/takahashi-ran-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/takahashi-ran-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '高橋藍の子供時代|兄の背中を追ってバレー界の新星へ',
    images: ['/images/articles/takahashi-ran-childhood.jpg'],
  },
};

export default function TakahashiRanChildhoodPage() {
  return (
    <ArticleLayout
      title="高橋藍の子供時代|兄の背中を追ってバレー界の新星へ"
      heroImage="/images/articles/takahashi-ran-childhood.jpg"
      heroAlt="バレーボールを練習する子ども"
      publishDate="2025年4月"
      slug="takahashi-ran-childhood"
      description="イタリアプロリーグで活躍するバレーボール選手・高橋藍選手の子供時代。京都生まれで兄の影響からバレーを始め、世界トップレベルの選手になるまでの軌跡を紹介。"
      tags={['高橋藍', 'バレーボール', '幼少期']}
      shareText="高橋藍選手が兄の影響でバレーを始め、イタリアプロリーグで活躍するまでの話を紹介 #高橋藍 #バレーボール"
      citations={['https://ja.wikipedia.org/wiki/%E9%AB%98%E6%A9%8B%E8%97%8D']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          高橋藍の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          高橋藍選手は2002年3月2日、京都府京都市で生まれました。イタリアプロリーグで活躍し、日本代表のエース的存在として知られるバレーボール選手です。その原点は、兄の影響を受けてバレーボールを始めた幼少期にあります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">2002年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">京都府</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">小学生</p>
            <p className="text-xs text-gray-600 mt-1">バレー開始</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2002年3月2日</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>京都府京都市</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">バレー開始:</span>
              <span>小学生（兄の影響）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">所属:</span>
              <span>ペルージャ（イタリア）ほか</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          兄の背中を追ってバレーへ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          高橋藍選手がバレーボールを始めたきっかけは、兄・高橋大輔選手（バレーボール選手）の影響です。兄がバレーをしている姿を見て、「同じようにやりたい」という気持ちから自然とバレーの世界に入りました。これは阿部一二三・詩兄妹や宮里藍選手と同じ「兄弟・家族からの影響」というパターンです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">兄・大輔選手という存在</h3>
              <p className="text-sm text-gray-600">
                兄の高橋大輔選手もバレーボール選手として活躍しており、高橋家にとってバレーボールは身近なスポーツでした。藍選手は兄の練習を見て育ち、自然にバレーの世界へ入りました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">京都での成長と全国へ</h3>
              <p className="text-sm text-gray-600">
                京都での小中学生時代にバレーの基礎を身につけ、高校では強豪校でさらに力をつけました。日本高校バスケ... ではなくバレーボールの中で頭角を現し、日本代表候補として名前が上がるようになりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">レセプション（サーブレシーブ）という強み</h3>
              <p className="text-sm text-gray-600">
                高橋藍選手は、バレーボールの中でもレセプション（サーブを正確に受ける技術）の精度に定評があります。幼少期から地道に繰り返した基礎練習が、世界トップレベルのレシーブ力を生み出しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          イタリアプロリーグという世界最高峰へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          高橋藍選手は日本のVリーグを経て、世界最高水準のバレーボールリーグとして知られるイタリア・セリエAに挑戦しました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">兄の影響でバレーボールを始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">強豪校でバレーを鍛え、全国レベルへ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">大学・Vリーグ</td>
                <td className="px-3 py-2 text-gray-600">日本国内で活躍し、代表に選出</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">イタリア移籍</td>
                <td className="px-3 py-2 text-gray-600">世界最高峰のセリエAでプレー（Padova→Modena→Perugia）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">高橋兄弟がバレー界に残した影響</p>
          <p className="text-sm text-blue-800">
            兄・大輔選手と弟・藍選手の高橋兄弟は、日本バレーボール界を代表する兄弟選手です。兄の背中を見て育った弟が、兄を超える活躍を見せている——これもまた「兄弟スポーツ」の力です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：兄の存在が世界への扉を開く
        </h2>
        <p className="text-gray-700 leading-relaxed">
          高橋藍選手の幼少期が示すのは、「兄・姉の存在が最強のロールモデルになる」ということです。バレーボールをする兄の姿を見て育ち、自然にバレーの世界に入った藍選手は、今では世界最高峰のイタリアリーグでプレーしています。子どもにスポーツをさせたいなら、上の兄弟姉妹が楽しそうにスポーツをしている環境を作ることが、最も効果的な導入になるかもしれません。「やらせる」より「見せる」——高橋藍選手の幼少期からの学びです。
        </p>
      </div>
    </ArticleLayout>
  );
}
