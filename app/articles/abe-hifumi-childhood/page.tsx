import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '阿部一二三の子供時代|3歳から始めた柔道で東京・パリ連覇の道',
  description:
    '柔道男子73kg級でオリンピック2連覇を達成した阿部一二三選手の子供時代。妹・詩と共に3歳から柔道を始めた兄弟の物語と、幼少期のエピソードを紹介。',
  openGraph: {
    title: '阿部一二三の子供時代|3歳から始めた柔道で東京・パリ連覇の道',
    description:
      '柔道男子73kg級でオリンピック2連覇を達成した阿部一二三選手の子供時代。妹・詩と共に3歳から柔道を始めた兄弟の物語と、幼少期のエピソードを紹介。',
    images: [{ url: '/images/articles/abe-hifumi-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/abe-hifumi-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/abe-hifumi-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '阿部一二三の子供時代|3歳から始めた柔道で東京・パリ連覇の道',
    images: ['/images/articles/abe-hifumi-childhood.jpg'],
  },
};

export default function AbeHifumiChildhoodPage() {
  return (
    <ArticleLayout
      title="阿部一二三の子供時代|3歳から始めた柔道で東京・パリ連覇の道"
      heroImage="/images/articles/abe-hifumi-childhood.jpg"
      heroAlt="柔道を練習する子ども"
      publishDate="2025年4月"
      slug="abe-hifumi-childhood"
      description="柔道男子73kg級でオリンピック2連覇を達成した阿部一二三選手の子供時代。妹・詩と共に3歳から柔道を始めた兄弟の物語と、幼少期のエピソードを紹介。"
      tags={['阿部一二三', '柔道', '幼少期']}
      shareText="阿部一二三選手が3歳から妹・詩と共に柔道を始めた話、知っていますか？ #阿部一二三 #柔道"
      citations={['https://ja.wikipedia.org/wiki/%E9%98%BF%E9%83%A8%E4%B8%80%E4%BA%8C%E4%B8%89']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          阿部一二三の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          阿部一二三選手は2000年1月6日、兵庫県神戸市で生まれました。東京五輪・パリ五輪と柔道男子73kg級で2連覇を達成した現役最強クラスの選手ですが、その出発点は3歳から妹・詩と共に始めた柔道でした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-black text-slate-600">2000年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-black text-slate-600">兵庫県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-black text-slate-600">3歳</p>
            <p className="text-xs text-gray-600 mt-1">柔道開始</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
          <p className="font-bold text-slate-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>2000年1月6日</span>
            </li>
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>兵庫県神戸市</span>
            </li>
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">柔道開始:</span>
              <span>3歳</span>
            </li>
            <li className="text-sm text-slate-800 flex gap-2">
              <span className="font-bold">五輪金メダル:</span>
              <span>東京2020・パリ2024（2連覇）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          兄妹で3歳から始めた柔道
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          阿部家は柔道が身近にある環境で育ちました。一二三選手と妹・詩選手は、幼い頃から柔道の世界に触れ、ほぼ同時期に柔道を始めました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔道が身近な家庭環境</h3>
              <p className="text-sm text-gray-600">
                阿部家では柔道が日常的に行われており、一二三選手は3歳から自然な流れで柔道を始めました。「やらされた」ではなく「そこにあったから」という、内発的なスタートでした。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">妹・詩との切磋琢磨</h3>
              <p className="text-sm text-gray-600">
                一二三選手（1月生まれ）と詩選手（7月生まれ）は同い年の兄妹です。共に練習する中で自然と競争心が育まれ、互いを高め合う関係が生まれました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">勝負への強いこだわり</h3>
              <p className="text-sm text-gray-600">
                幼い頃から「勝つこと」に強いこだわりを持っていた一二三選手。小学生の頃から全国レベルで活躍し、全日本ジュニアや世界ジュニアで次々と優勝を重ねました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          兄妹同日金メダルという歴史的瞬間
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2021年7月25日、東京五輪で起きた出来事は、日本スポーツ史に永遠に刻まれています。一二三選手と詩選手が同じ日に金メダルを獲得するという、前代未聞の快挙でした。
        </p>

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
                <td className="px-3 py-2 font-bold text-gray-900">3歳</td>
                <td className="px-3 py-2 text-gray-600">柔道を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学生</td>
                <td className="px-3 py-2 text-gray-600">全国大会で上位入賞、才能が開花</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校生</td>
                <td className="px-3 py-2 text-gray-600">世界ジュニア選手権で優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪金メダル（妹・詩と同日金メダル）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2024年</td>
                <td className="px-3 py-2 text-gray-600">パリ五輪金メダル（2連覇）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <p className="font-bold text-slate-900 mb-2">兄妹同日金メダルの奇跡</p>
          <p className="text-sm text-slate-800">
            3歳から共に練習してきた兄妹が、同じ日にオリンピックの頂点に立つ——このドラマチックな結末は、幼少期から積み重ねてきた時間があってこそのものです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-slate-500 rounded-full inline-block"></span>
          まとめ：同じ環境で育った兄妹が共に世界一へ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          阿部一二三選手の幼少期が示す最大の教訓は、「環境の共有が最強の動機を生む」ということです。妹と同じスポーツを同じ環境でやり続けた結果、互いを高め合いながら世界一になりました。兄弟姉妹に同じスポーツをさせることは、孤独な練習を防ぎ、自然な競争心を育てる最高の環境づくりです。「一緒にやろう」という家族のスポーツ共有が、オリンピック金メダリストを兄妹で2人同時に生み出したのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
