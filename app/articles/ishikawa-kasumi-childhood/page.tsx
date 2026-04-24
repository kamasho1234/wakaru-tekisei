import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '石川佳純の子供時代|5歳で卓球を始めた下関っ子が3大会連続五輪へ',
  description:
    '3大会連続オリンピック出場の石川佳純選手の子供時代。卓球指導者の父のもとで5歳から始めた卓球が、どのように世界レベルへ成長したかを紹介。',
  openGraph: {
    title: '石川佳純の子供時代|5歳で卓球を始めた下関っ子が3大会連続五輪へ',
    description:
      '3大会連続オリンピック出場の石川佳純選手の子供時代。卓球指導者の父のもとで5歳から始めた卓球が、どのように世界レベルへ成長したかを紹介。',
    images: [{ url: '/images/articles/ishikawa-kasumi-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ishikawa-kasumi-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/ishikawa-kasumi-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '石川佳純の子供時代|5歳で卓球を始めた下関っ子が3大会連続五輪へ',
    images: ['/images/articles/ishikawa-kasumi-childhood.jpg'],
  },
};

export default function IshikawaKasumiChildhoodPage() {
  return (
    <ArticleLayout
      title="石川佳純の子供時代|5歳で卓球を始めた下関っ子が3大会連続五輪へ"
      heroImage="/images/articles/ishikawa-kasumi-childhood.jpg"
      heroAlt="卓球を練習する子ども"
      publishDate="2025年4月"
      slug="ishikawa-kasumi-childhood"
      description="3大会連続オリンピック出場の石川佳純選手の子供時代。卓球指導者の父のもとで5歳から始めた卓球が、どのように世界レベルへ成長したかを紹介。"
      tags={['石川佳純', '卓球', '幼少期']}
      shareText="石川佳純選手が5歳から卓球を始め、3大会連続でオリンピックに出場した軌跡を紹介 #石川佳純 #卓球"
      citations={['https://ja.wikipedia.org/wiki/%E7%9F%B3%E5%B7%9D%E4%BD%B3%E7%B4%94']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-violet-500 rounded-full inline-block"></span>
          石川佳純の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          石川佳純選手は1993年2月23日、山口県下関市で生まれました。ロンドン・リオ・東京と3大会連続オリンピックに出場した日本女子卓球の看板選手ですが、その始まりは「卓球指導者のお父さんとの練習」でした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-violet-50 rounded-2xl p-4 text-center border border-violet-100">
            <p className="text-2xl font-black text-violet-600">1993年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-violet-50 rounded-2xl p-4 text-center border border-violet-100">
            <p className="text-2xl font-black text-violet-600">山口県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-violet-50 rounded-2xl p-4 text-center border border-violet-100">
            <p className="text-2xl font-black text-violet-600">5歳</p>
            <p className="text-xs text-gray-600 mt-1">卓球開始</p>
          </div>
        </div>

        <div className="bg-violet-50 rounded-2xl p-5 border border-violet-100 mb-6">
          <p className="font-bold text-violet-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1993年2月23日</span>
            </li>
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>山口県下関市</span>
            </li>
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">卓球開始:</span>
              <span>5歳（父・信一さんの指導）</span>
            </li>
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">五輪出場:</span>
              <span>ロンドン2012・リオ2016・東京2020</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-violet-500 rounded-full inline-block"></span>
          卓球指導者の父と始めた5歳の練習
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          石川佳純選手の父・信一さんは卓球の指導者として活動しており、佳純選手は幼い頃からその環境に囲まれて育ちました。5歳で卓球を始めたのは、福原愛選手と同じく「親の専門性が作った環境」がきっかけでした。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">卓球が身近な家庭環境</h3>
              <p className="text-sm text-gray-600">
                父親が卓球指導者だったため、石川選手の自宅や周辺には常に卓球の環境が整っていました。「自然と始めた」という感覚で、5歳からラケットを持ちました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">小学生から頭角を現す</h3>
              <p className="text-sm text-gray-600">
                石川選手は小学生の頃から全国大会レベルで活躍し、卓球の才能が際立っていました。地元・山口県での大会で好成績を収め、全国からも注目されるようになりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">早期からの専門トレーニング</h3>
              <p className="text-sm text-gray-600">
                卓球の才能を伸ばすため、小学生のうちからより高いレベルの環境でのトレーニングを積み始めました。父の指導と本人の努力が重なり、急速に成長しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-violet-500 rounded-full inline-block"></span>
          3大会連続オリンピック出場という軌跡
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          石川佳純選手の最大の業績のひとつは、3大会連続でオリンピックに出場し続けたことです。5歳から積み重ねた卓球人生が、長期にわたる世界レベルの活躍を生み出しました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-violet-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">5歳（1998年頃）</td>
                <td className="px-3 py-2 text-gray-600">卓球を始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小・中学生</td>
                <td className="px-3 py-2 text-gray-600">全国大会で活躍、エリート選手として頭角を現す</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2010年</td>
                <td className="px-3 py-2 text-gray-600">世界卓球選手権団体戦で日本チームの一員として活躍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2012年</td>
                <td className="px-3 py-2 text-gray-600">ロンドン五輪 初出場</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2016年</td>
                <td className="px-3 py-2 text-gray-600">リオ五輪 2回目の出場</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2021年</td>
                <td className="px-3 py-2 text-gray-600">東京五輪 3回目の出場（団体銀メダル）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-violet-50 rounded-2xl p-5 border border-violet-100">
          <p className="font-bold text-violet-900 mb-2">3大会連続出場の意味</p>
          <p className="text-sm text-violet-800">
            オリンピックに1回出場することでも世界トップレベルの証明ですが、3大会連続出場は約10年間にわたって日本卓球界のトップを維持し続けた証です。5歳からの積み重ねなしには成し遂げられない記録です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-violet-500 rounded-full inline-block"></span>
          「いつでも笑顔」の精神力
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          石川佳純選手の大きな特徴のひとつは、試合中も試合後も笑顔を見せる姿です。競技中のプレッシャーの中でも表情を崩さない精神力は、幼少期から培われたものです。
        </p>

        <div className="bg-violet-50 rounded-2xl p-5 border border-violet-100 mb-6">
          <p className="font-bold text-violet-900 mb-2">精神的な強さを育てた環境</p>
          <ul className="space-y-2">
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">父の指導:</span>
              <span>技術だけでなくメンタル面も父から教わり、プレッシャーへの対処法を早期に学んだ</span>
            </li>
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">実戦経験:</span>
              <span>小学生から大会に出場することで、試合のプレッシャーに慣れる機会が多かった</span>
            </li>
            <li className="text-sm text-violet-800 flex gap-2">
              <span className="font-bold">失敗からの学び:</span>
              <span>幼少期の負け経験を次の試合への糧にする習慣が身についた</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-violet-500 rounded-full inline-block"></span>
          まとめ：専門家の親のもとで育つ子どもの力
        </h2>
        <p className="text-gray-700 leading-relaxed">
          石川佳純選手の幼少期が示すのは、「専門家の親を持つ子どもは、早期から質の高い指導を受けられる」という事実です。父親が卓球指導者だったことで、5歳から正しいフォームと練習方法を学べました。これは「親が専門家でなければいけない」という意味ではありません。大切なのは「子どもが始めたスポーツについて、親も学ぼうとする姿勢」です。石川選手の父親のように、子どものスポーツを真剣に支える親の姿勢が、子どもを世界レベルへと押し上げる大きな力になります。3大会連続オリンピック出場という記録の裏には、5歳から積み重ねた父娘の卓球人生がありました。
        </p>
      </div>
    </ArticleLayout>
  );
}
