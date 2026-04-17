import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '内村航平の子供時代｜体操一家で育った「遅咲きの天才」の原点',
  description:
    '体操界の王者・内村航平選手の子供時代。両親が体操教室を経営する中で3歳から始めた体操。最初は妹よりも上達が遅かった意外な事実も。',
  openGraph: {
    title: '内村航平の子供時代｜体操一家で育った「遅咲きの天才」の原点',
    description:
      '体操界の王者・内村航平選手の子供時代。両親が体操教室を経営する中で3歳から始めた体操。最初は妹よりも上達が遅かった意外な事実も。',
    images: [{ url: '/images/articles/uchimura-kohei-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/uchimura-kohei-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '内村航平の子供時代｜体操一家で育った「遅咲きの天才」の原点',
    images: ['/images/articles/uchimura-kohei-childhood.jpg'],
  },
};

export default function UchimuraKoheiChildhoodPage() {
  return (
    <ArticleLayout
      title="内村航平の子供時代｜体操一家で育った「遅咲きの天才」の原点"
      heroImage="/images/articles/uchimura-kohei-childhood.jpg"
      heroAlt="体操の練習をしている子ども"
      publishDate="2025年4月"
      slug="uchimura-kohei-childhood"
      description="体操界の王者・内村航平選手の子供時代。両親が体操教室を経営する中で3歳から始めた体操。最初は妹よりも上達が遅かった意外な事実も。"
      tags={['内村航平', '体操', '幼少期']}
      shareText="内村航平選手が体操を始めた3歳から。最初は妹より下手だった？意外な幼少期エピソード。 #内村航平 #体操"
      citations={['https://ja.wikipedia.org/wiki/%E5%86%85%E6%9D%91%E8%88%AA%E5%B9%B3']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          内村航平の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          内村航平（うちむら こうへい）は1989年1月3日に福岡県北九州市で生まれ、長崎県諫早市で育った体操選手です。オリンピック個人総合金メダル、世界体操選手権6連覇という輝かしい成績を持つ「体操界の王者」。しかし、その成功の背景には、意外で興味深い幼少期の物語があります。それは「最初から上手くなかった」という事実です。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">3歳</p>
            <p className="text-xs text-gray-600 mt-1">体操開始</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">6連覇</p>
            <p className="text-xs text-gray-600 mt-1">世界選手権</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">2012年</p>
            <p className="text-xs text-gray-600 mt-1">ロンドン五輪金</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">弱体質</p>
            <p className="text-xs text-gray-600 mt-1">幼少期の状態</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">基本情報</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1989年1月3日</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>福岡県北九州市（育った場所：長崎県諫早市）</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">親の背景:</span>
              <span>父・内村和久（元体操選手）、母・周子（元体操選手）</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">家族経営:</span>
              <span>「スポーツクラブ内村」を両親が運営</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          体操一家に生まれた必然と、3歳での開始
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          内村航平は、「体操一家」に生まれました。父親は元体操選手、母親も元体操選手。1992年に両親が「スポーツクラブ内村」を開設した時点で、まだ2歳だった航平は、自宅と同じ建物にある道場で、自然に体操の環境に包まれていたのです。3歳の時に正式に体操を開始しますが、これは「親の強制」というより「環境から自然に始まった」という側面が大きかったのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体操一家の環境</h3>
              <p className="text-sm text-gray-600">
                両親が体操教室を経営していたため、毎日が体操に囲まれた環境。親の背中を見て、体操に親しむようになりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自宅が道場</h3>
              <p className="text-sm text-gray-600">
                スポーツクラブと自宅が同じ建物に。遊ぶように体操に触れる環境が、他の子どもとは大きく異なっていました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">「自然な開始」の重要性</h3>
              <p className="text-sm text-gray-600">
                親の強制ではなく、環境から「やってみたい」という気持ちが生まれる。これが長く続くモチベーションの秘密かもしれません。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          「妹より下手だった」意外な事実
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          内村航平の幼少期には、意外な事実があります。それは「兄の航平よりも、妹の方が上達が早かった」ということです。多くの親や指導者が「身体が大きい男の子の方が有利」と思い込みますが、現実はそうではありません。幼少期は女の子の方が身体の発達が早く、細かい動きもすぐに習得することが多いのです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">航平</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">妹</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">成長速度</td>
                <td className="px-3 py-2 text-gray-600">遅い</td>
                <td className="px-3 py-2 text-gray-600">早い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">細かい動き</td>
                <td className="px-3 py-2 text-gray-600">習得に時間</td>
                <td className="px-3 py-2 text-gray-600">すぐに習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">初期段階での上達</td>
                <td className="px-3 py-2 text-gray-600">妹に後れを取る</td>
                <td className="px-3 py-2 text-gray-600">兄より上手</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">黙々と練習する姿勢</td>
                <td className="px-3 py-2 text-gray-600">確立</td>
                <td className="px-3 py-2 text-gray-600">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">「遅咲き」は才能の証ではなく、粘り強さの証</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">初期段階での遅さ:</span>
              <span>妹に比べて習得が遅かったが、それが諦めずに練習を続ける力につながった</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">「蹴上がり」の習得:</span>
              <span>妹よりも習得に時間がかかったが、その分「自分で工夫する力」が身についた</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">後年の成功:</span>
              <span>幼少期に「努力で乗り越える」経験が、世界6連覇の土台になった</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          アトピーと戦いながら黙々と練習した日々
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          内村航平の幼少期を語るうえで、絶対に見落とせない事実があります。それは「体が弱かった」ということです。アトピーとアレルギーが多く、一般的な子どもより身体的に不利な状態から、体操を始めたのです。この環境の中で、親がしたことは「無理に訓練を課する」ことではなく、「その中で本人が出来ることを見守る」ことでした。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体の弱さ</h3>
              <p className="text-sm text-gray-600">
                アトピーと複数のアレルギーを抱えていた。体操のような「肌と器具が直接触れる」スポーツは、多くの子どもにとって負担が大きい環境です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">内向的な性格</h3>
              <p className="text-sm text-gray-600">
                体が弱く、他の子どもとの違いを感じていたであろう航平は、内向的な性格傾向を持っていました。無理にやる気を引き出すのではなく、本人のペースを尊重した指導が行われました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">黙々と続ける</h3>
              <p className="text-sm text-gray-600">
                妹よりも習得が遅い中で、黙々と練習を続ける。この「続ける力」が、後年の大きな成功につながったのです。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          遅咲きから世界6連覇へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「最初から上手くなかった」「妹より下手だった」という幼少期から、内村航平はどのように世界的なチャンピオンになったのでしょうか。その答えは「成長の過程での爆発力」と「完成度の高さ」にあります。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">基礎力</p>
            <p className="text-xs text-gray-600 mt-1">地道な反復練習</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">応用力</p>
            <p className="text-xs text-gray-600 mt-1">自分で工夫する力</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">芸術性</p>
            <p className="text-xs text-gray-600 mt-1">床運動での評価</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">6種目</p>
            <p className="text-xs text-gray-600 mt-1">全種目でバランス</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">メンタル</p>
            <p className="text-xs text-gray-600 mt-1">プレッシャーに強い</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-lg font-black text-purple-600">経験</p>
            <p className="text-xs text-gray-600 mt-1">国際大会での積み重ね</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">世界的成功への軌跡</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">2004年～:</span>
              <span>国際大会での活躍開始</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">2009～2015年:</span>
              <span>世界体操選手権個人総合6連覇</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">2012年ロンドン:</span>
              <span>オリンピック個人総合金メダル</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">2016年リオ:</span>
              <span>オリンピック個人総合銀メダル</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ：最初から上手い子だけが伸びるわけではない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          内村航平の人生は、スポーツ教育における一つの大きな「学び」を私たちに教えてくれます。それは「最初から上手い子が最後まで上手いわけではない」「むしろ、初期段階で困難に直面した子どもの方が、後に大きく伸びることがある」ということです。妹より習得が遅く、アトピーと戦いながら、黙々と練習を続けた航平。その経験の中に「努力で乗り越える力」が育まれていたのです。
        </p>
        <p className="text-gray-700 leading-relaxed">
          お子さんの成長を見守る親の皆さんへ：もしお子さんが「最初は上達が遅い」「他の子より体が弱い」と感じることがあっても、それは劣っていることではなく、むしろ「工夫する力」「続ける力」を身につける機会かもしれません。内村航平が世界6連覇を成し遂げたのは、最初から「才能に恵まれていたから」ではなく、「困難の中で何度も立ち上がった」からなのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
