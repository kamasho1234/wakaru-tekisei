import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '福原愛の子供時代|3歳から卓球を始めた天才少女の原点',
  description:
    '卓球の天才少女として知られた福原愛選手。3歳からお母さんの指導で卓球を始め、15歳でオリンピックへ。幼少期の驚くべきエピソードを紹介。',
  openGraph: {
    title: '福原愛の子供時代|3歳から卓球を始めた天才少女の原点',
    description:
      '卓球の天才少女として知られた福原愛選手。3歳からお母さんの指導で卓球を始め、15歳でオリンピックへ。幼少期の驚くべきエピソードを紹介。',
    images: [{ url: '/images/articles/fukuhara-ai-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/fukuhara-ai-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/fukuhara-ai-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '福原愛の子供時代|3歳から卓球を始めた天才少女の原点',
    images: ['/images/articles/fukuhara-ai-childhood.jpg'],
  },
};

export default function FukuharaAiChildhoodPage() {
  return (
    <ArticleLayout
      title="福原愛の子供時代|3歳から卓球を始めた天才少女の原点"
      heroImage="/images/articles/fukuhara-ai-childhood.jpg"
      heroAlt="卓球を練習する子ども"
      publishDate="2025年4月"
      slug="fukuhara-ai-childhood"
      description="卓球の天才少女として知られた福原愛選手。3歳からお母さんの指導で卓球を始め、15歳でオリンピックへ。幼少期の驚くべきエピソードを紹介。"
      tags={['福原愛', '卓球', '幼少期']}
      shareText="福原愛選手が3歳から卓球を始めたエピソード、知っていますか？ #福原愛 #卓球"
      citations={['https://ja.wikipedia.org/wiki/%E7%A6%8F%E5%8E%9F%E6%84%9B']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          福原愛の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          福原愛選手は1988年11月1日、宮城県仙台市で生まれました。「愛ちゃん」の愛称で国民的人気を誇った卓球選手ですが、その原点は「卓球教室を営むお母さんのそば」で過ごした3歳からの日々でした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
            <p className="text-2xl font-black text-rose-600">1988年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
            <p className="text-2xl font-black text-rose-600">宮城県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
            <p className="text-2xl font-black text-rose-600">3歳</p>
            <p className="text-xs text-gray-600 mt-1">卓球開始</p>
          </div>
        </div>

        <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 mb-6">
          <p className="font-bold text-rose-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1988年11月1日</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>宮城県仙台市</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">卓球開始:</span>
              <span>3歳（母親の指導）</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">五輪初出場:</span>
              <span>2004年アテネ五輪（15歳）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          3歳から始まった卓球人生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          福原愛選手の母・千枝子さんは卓球教室を運営しており、愛選手は3歳から自然と卓球に親しむ環境で育ちました。「やらされた」のではなく、「そこにあったから」が出発点です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">卓球が「日常」だった家庭環境</h3>
              <p className="text-sm text-gray-600">
                母親が卓球教室を運営していたため、福原選手にとって卓球は物心ついた頃から「日常の一部」でした。他の子どもがおもちゃで遊ぶ年齢から、卓球のラケットを握っていました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">泣きながら練習した幼少期</h3>
              <p className="text-sm text-gray-600">
                福原選手は幼少期の練習中に泣いている様子がテレビで放映されました。厳しい練習に泣きながらも諦めない姿は、多くの人の心をつかみ、「愛ちゃん」の愛称とともに国民的アイドルとなりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">幼少期から大会で実績を積む</h3>
              <p className="text-sm text-gray-600">
                小学生の頃から各地の大会に出場し、優秀な成績を収めました。「天才少女」としてメディアから注目され、NHKのドキュメンタリー番組でも取り上げられました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          15歳でオリンピック出場という快挙
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          3歳から積み重ねた12年間の練習は、2004年アテネ五輪への出場という形で結実しました。15歳での五輪出場は、当時の日本卓球史上最年少記録でした。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-rose-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">3歳</td>
                <td className="px-3 py-2 text-gray-600">卓球開始（母親の指導）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">NHKドキュメンタリーで「愛ちゃん」として全国的知名度を獲得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">15歳（2004年）</td>
                <td className="px-3 py-2 text-gray-600">アテネ五輪出場（日本卓球史上最年少クラス）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">27歳（2016年）</td>
                <td className="px-3 py-2 text-gray-600">リオ五輪 混合ダブルス銀メダル</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
          <p className="font-bold text-rose-900 mb-2">3大会連続の五輪出場</p>
          <p className="text-sm text-rose-800">
            福原愛選手はアテネ2004・北京2008・ロンドン2012・リオ2016と4大会連続でオリンピックに出場しました。3歳から始めた卓球を、30年近く続けた結果です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          「泣き虫愛ちゃん」が教えてくれること
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          福原愛選手の幼少期で最も印象的なのは、練習中に泣いていた場面です。しかしその涙は「諦め」の涙ではなく、「もっとうまくなりたい」という悔し涙でした。
        </p>

        <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 mb-6">
          <p className="font-bold text-rose-900 mb-2">感情を出せる子どもが伸びる</p>
          <ul className="space-y-2">
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">泣いていい:</span>
              <span>感情を抑えずに表現することは、モチベーションが高い証拠</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">諦めなかった:</span>
              <span>泣きながらも練習を続けた姿勢が、世界レベルの選手を作った</span>
            </li>
            <li className="text-sm text-rose-800 flex gap-2">
              <span className="font-bold">環境の力:</span>
              <span>卓球が「日常」にある家庭環境が、継続の原動力になった</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-500 rounded-full inline-block"></span>
          まとめ：環境と継続が天才を育てる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          福原愛選手の幼少期から学べることは、「天才は生まれるのではなく育てられる」ということです。母親が卓球教室を運営していたという環境が、3歳から卓球に触れる機会を生み出しました。そこで泣きながらも諦めずに練習し続けた結果が、15歳でのオリンピック出場につながりました。お子さんに才能を見つけてあげたいなら、まず「その才能が育つ環境」を作ることが大切です。習い事を始めさせることも大切ですが、続けられる環境と、失敗しても大丈夫という安心感を作ってあげることが、福原愛選手の成功から学べる最大の教訓です。
        </p>
      </div>
    </ArticleLayout>
  );
}
