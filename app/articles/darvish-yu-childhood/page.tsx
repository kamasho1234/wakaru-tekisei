import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ダルビッシュ有の子供時代|大阪で始めた野球でMLBを代表する投手へ',
  description:
    '日本・MLB通算200勝を誇るダルビッシュ有選手の子供時代。大阪府羽曳野市で育ち、中学から本格的に野球を始めた幼少期のエピソードと成長の軌跡を紹介。',
  openGraph: {
    title: 'ダルビッシュ有の子供時代|大阪で始めた野球でMLBを代表する投手へ',
    description:
      '日本・MLB通算200勝を誇るダルビッシュ有選手の子供時代。大阪府羽曳野市で育ち、中学から本格的に野球を始めた幼少期のエピソードと成長の軌跡を紹介。',
    images: [{ url: '/images/articles/darvish-yu-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/darvish-yu-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/darvish-yu-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ダルビッシュ有の子供時代|大阪で始めた野球でMLBを代表する投手へ',
    images: ['/images/articles/darvish-yu-childhood.jpg'],
  },
};

export default function DarvishYuChildhoodPage() {
  return (
    <ArticleLayout
      title="ダルビッシュ有の子供時代|大阪で始めた野球でMLBを代表する投手へ"
      heroImage="/images/articles/darvish-yu-childhood.jpg"
      heroAlt="ピッチング練習をする子ども"
      publishDate="2025年4月"
      slug="darvish-yu-childhood"
      description="日本・MLB通算200勝を誇るダルビッシュ有選手の子供時代。大阪府羽曳野市で育ち、中学から本格的に野球を始めた幼少期のエピソードと成長の軌跡を紹介。"
      tags={['ダルビッシュ有', '野球', '幼少期']}
      shareText="ダルビッシュ有選手が大阪で野球を始め、世界最多クラスの球種を武器にMLBで活躍した話を紹介 #ダルビッシュ有 #野球"
      citations={['https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%AB%E3%83%93%E3%83%83%E3%82%B7%E3%83%A5%E6%9C%89']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          ダルビッシュ有の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ダルビッシュ有選手は1986年8月16日、大阪府羽曳野市で生まれました。日本人の母とイラン人の父を持つハーフとして生まれ、その恵まれた体格と多彩な球種を武器に、日本のエースからMLBを代表する投手へと成長しました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">1986年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">大阪府</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">MLB</p>
            <p className="text-xs text-gray-600 mt-1">サンディエゴ・パドレス</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1986年8月16日</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>大阪府羽曳野市</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">NPB:</span>
              <span>北海道日本ハムファイターズ（2005〜2011年）</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">MLB:</span>
              <span>テキサス、ドジャース、カブス、パドレス等</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          大阪育ちの少年が野球の道へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ダルビッシュ有選手は大阪府羽曳野市で育ち、子供の頃は様々なスポーツに親しんでいました。野球に本格的に取り組み始めたのは中学時代で、恵まれた体格を活かしてピッチャーとして頭角を現しました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">恵まれた体格と運動神経</h3>
              <p className="text-sm text-gray-600">
                日本人の母とイラン人の父を持つダルビッシュ選手は、子供の頃から体格に恵まれていました。長身と長い腕のリーチは、後の多彩な変化球を生み出す土台となりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">東北高校での急成長</h3>
              <p className="text-sm text-gray-600">
                宮城県の強豪・東北高校に進学し、甲子園に出場。投手として急成長し、高校卒業時には既にプロ注目の存在となっていました。高校時代の徹底した投球フォームの習得が、プロ入り後の礎になりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">球種研究への飽くなき探究心</h3>
              <p className="text-sm text-gray-600">
                ダルビッシュ選手の最大の特徴は、常に新しい球種を研究し習得する探究心です。この姿勢はプロ入り後も続き、現在は10種類以上の変化球を投げる「球種の魔術師」として知られています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          日本エースからMLBの頂点へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ダルビッシュ有選手は日本ハムで6度の最多勝を経験した後、2012年にMLBへ渡り、テキサス・レンジャーズをはじめ複数球団で活躍。2020年サイ・ヤング賞投票2位に輝くなど、世界最高峰の舞台でもトップ投手として認められています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学生</td>
                <td className="px-3 py-2 text-gray-600">野球に本格的に取り組み始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">東北高校で甲子園出場、投手として台頭</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2005年</td>
                <td className="px-3 py-2 text-gray-600">北海道日本ハム入団（ドラフト1位）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2012年</td>
                <td className="px-3 py-2 text-gray-600">MLBテキサス・レンジャーズへ移籍</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2020年</td>
                <td className="px-3 py-2 text-gray-600">サイ・ヤング賞投票2位（パドレス）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">10種類以上の変化球を操る「球種の魔術師」</p>
          <p className="text-sm text-purple-800">
            ダルビッシュ選手が世界のバッターを翻弄するのは、常に新しい球種を研究し続けてきたからです。「学び続ける姿勢」こそが、30代後半になっても第一線で活躍し続ける原動力です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ：探究心と体格が生んだ世界最高峰の投手
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ダルビッシュ有選手の幼少期が教えてくれることは、「恵まれた素質を持っていても、それだけでは足りない——飽くなき探究心が才能を何倍にも引き上げる」ということです。体格に恵まれていた彼が世界最高峰の投手になれたのは、球種研究を怠らず常に進化し続けたからです。お子さんが投球に興味を持ったなら、一つの型にこだわらず、様々な変化球や投球術に好奇心を持つことを大切にしてみてください。その探究心こそが、ダルビッシュ選手を世界一の投手へと育てた原動力でした。
        </p>
      </div>
    </ArticleLayout>
  );
}
