import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '早田ひなの子供時代|3歳から始めた卓球でパリ五輪メダリストへ',
  description:
    '卓球日本代表の早田ひな選手の子供時代。3歳から母親の影響で卓球を始め、パリ五輪でメダルを獲得するまでの軌跡と幼少期のエピソードを紹介。',
  openGraph: {
    title: '早田ひなの子供時代|3歳から始めた卓球でパリ五輪メダリストへ',
    description:
      '卓球日本代表の早田ひな選手の子供時代。3歳から母親の影響で卓球を始め、パリ五輪でメダルを獲得するまでの軌跡と幼少期のエピソードを紹介。',
    images: [{ url: '/images/articles/hayata-hina-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/hayata-hina-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/hayata-hina-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '早田ひなの子供時代|3歳から始めた卓球でパリ五輪メダリストへ',
    images: ['/images/articles/hayata-hina-childhood.jpg'],
  },
};

export default function HayataHinaChildhoodPage() {
  return (
    <ArticleLayout
      title="早田ひなの子供時代|3歳から始めた卓球でパリ五輪メダリストへ"
      heroImage="/images/articles/hayata-hina-childhood.jpg"
      heroAlt="卓球を練習する女の子"
      publishDate="2025年4月"
      slug="hayata-hina-childhood"
      description="卓球日本代表の早田ひな選手の子供時代。3歳から母親の影響で卓球を始め、パリ五輪でメダルを獲得するまでの軌跡と幼少期のエピソードを紹介。"
      tags={['早田ひな', '卓球', '幼少期']}
      shareText="早田ひな選手が3歳から卓球を始め、パリ五輪でメダルを獲得した軌跡を紹介 #早田ひな #卓球"
      citations={['https://ja.wikipedia.org/wiki/%E6%97%A9%E7%94%B0%E3%81%B2%E3%81%AA']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          早田ひなの幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          早田ひな選手は2000年4月8日、福岡県飯塚市で生まれました。2024年パリ五輪でメダルを獲得した現役トップ選手ですが、その出発点は3歳から母親の影響で始めた卓球でした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">2000年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">福岡県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 text-center border border-pink-100">
            <p className="text-2xl font-black text-pink-600">3歳</p>
            <p className="text-xs text-gray-600 mt-1">卓球開始</p>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2000年4月8日</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>福岡県飯塚市</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">卓球開始:</span>
              <span>3歳（母親の影響）</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">五輪出場:</span>
              <span>東京2020・パリ2024</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          3歳で始まった卓球との出会い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          早田ひな選手が卓球を始めたのは3歳のときです。母親が卓球をしており、その影響を受けて自然な形でラケットを握りました。福原愛選手と同じく「母親が卓球をしていた」という環境が、早期の卓球開始につながりました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">母親が作った卓球環境</h3>
              <p className="text-sm text-gray-600">
                母親が卓球を楽しんでいたことで、3歳の早田選手は自然に卓球に触れる機会を得ました。「やらせた」ではなく「一緒にやった」という形が、最も効果的なスポーツ導入です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">飯塚という地域での成長</h3>
              <p className="text-sm text-gray-600">
                福岡県飯塚市という地方都市で育った早田選手は、地元のクラブでの練習を積み重ねながら全国レベルへと成長しました。都市部でなくても、才能と環境が揃えば世界一を目指せることを示しています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">中学・高校での急成長</h3>
              <p className="text-sm text-gray-600">
                中学・高校年代から全国大会で上位入賞を重ね、日本代表候補として名前が知られるようになりました。技術面だけでなく、精神的な強さも同時に培われました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          パリ五輪でのメダル獲得
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2024年パリ五輪で早田ひな選手はメダルを獲得し、3歳から始めた卓球人生に大きな輝きを加えました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3歳</td>
                <td className="px-3 py-2 text-gray-600">卓球を始める（母親の影響）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小・中学生</td>
                <td className="px-3 py-2 text-gray-600">全国大会で活躍、エリート選手として頭角を現す</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪出場（初）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2024年</td>
                <td className="px-3 py-2 text-gray-600">パリ五輪でメダル獲得</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
          <p className="font-bold text-pink-900 mb-2">日本女子卓球の黄金世代</p>
          <p className="text-sm text-pink-800">
            早田ひな選手は、伊藤美誠・石川佳純と並ぶ日本女子卓球の「黄金世代」の一人です。いずれも幼少期から卓球に親しんだ選手たちが世界をリードしています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          まとめ：地方出身でも世界一になれる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          早田ひな選手の幼少期から学べる最大の教訓は、「都市部でなくても、世界一を目指せる」ということです。福岡県飯塚市という地方都市で、3歳からお母さんと一緒に始めた卓球が、パリ五輪のメダルへとつながりました。子どもにとって大切なのは、住む場所ではなく「始めるきっかけと続ける環境」です。親が一緒に楽しむことで生まれた「3歳からの卓球」が、20年以上の時間をかけて世界のトップに上り詰めたのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
