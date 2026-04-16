import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '吉田沙保里の子供時代｜金メダルを見て泣いた5歳の女の子',
  description:
    '霊長類最強女子・吉田沙保里選手の子供時代。5歳の初試合で敗れ、金メダルを見て泣いたことが原点。レスリング一家での幼少期を紹介。',
  openGraph: {
    title: '吉田沙保里の子供時代｜金メダルを見て泣いた5歳の女の子',
    description:
      '霊長類最強女子・吉田沙保里選手の子供時代。5歳の初試合で敗れ、金メダルを見て泣いたことが原点。レスリング一家での幼少期を紹介。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/yoshida-saori-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '吉田沙保里の子供時代｜金メダルを見て泣いた5歳の女の子',
    images: ['/og-image.png'],
  },
};

export default function YoshidaSaoriChildhoodPage() {
  return (
    <ArticleLayout
      title="吉田沙保里の子供時代｜金メダルを見て泣いた5歳の女の子"
      heroImage="/images/sport-judo.jpg"
      heroAlt="レスリングの練習をする子ども"
      publishDate="2025年4月"
      tags={['吉田沙保里', 'レスリング', '幼少期']}
      shareText="吉田沙保里選手が5歳で試合に負けて「金メダルがほしい」と泣いた話。 #吉田沙保里 #レスリング"
      citations={['https://ja.wikipedia.org/wiki/%E5%90%89%E7%94%B0%E6%B2%99%E4%BF%9D%E9%87%8C']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          吉田沙保里の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          吉田沙保里（よしだ さおり）は1982年10月5日に三重県一志郡一志町（現・津市）で生まれました。女子レスリング界の「霊長類最強女子」として知られる彼女は、オリンピック3連覇、世界選手権16連覇という、スポーツ史上稀有な成績を打ち立てました。しかし、その栄光の物語は、5歳の小さな女の子が、初めての試合で「金メダルが欲しい」と泣いたあの瞬間から始まったのです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">3歳</p>
            <p className="text-xs text-gray-600 mt-1">レスリング開始</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">5歳</p>
            <p className="text-xs text-gray-600 mt-1">初試合で涙</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">3度</p>
            <p className="text-xs text-gray-600 mt-1">オリンピック金</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-2xl font-black text-red-600">16連覇</p>
            <p className="text-xs text-gray-600 mt-1">世界選手権</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6">
          <p className="font-bold text-red-900 mb-2">基本情報</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1982年10月5日</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>三重県一志郡一志町（現・津市）</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>一志町立一志西小学校</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">家族背景:</span>
              <span>父が元レスリング選手で自宅に道場を開設</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          レスリング一家に育った3歳の女の子
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          吉田沙保里がレスリングを始めたのは3歳。これは「親の期待」というより「環境から自然に」という側面が大きかったのです。父親の吉田栄勝は元レスリング選手で、自宅にレスリング道場を開設していました。母親は元テニス国体選手。こうしたアスレティックな家庭環境の中で、沙保里は育ったのです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">レスリング一家の環境</h3>
              <p className="text-sm text-gray-600">
                父親が自宅にレスリング道場を開設していたため、毎日がレスリング環境。本来、父親の期待は息子たちに向いていました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">「女の子だから」ではなく、才能で選ばれる</h3>
              <p className="text-sm text-gray-600">
                父親は息子を主眼に指導していましたが、道場で一緒に練習するうちに、娘の才能に気づきました。性別ではなく「その子の可能性」を見ることが、親の大切な役割なのです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親の両立する才能</h3>
              <p className="text-sm text-gray-600">
                父がレスリング、母がテニア。スポーツ教育に対する親の深い理解が、子どもの環境をより豊かにしました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          5歳の初試合で負けて大泣きした日
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          吉田沙保里の人生で最も大切な瞬間は、おそらく5歳の初試合だったでしょう。男の子に混ざって初めて試合に出場した彼女は、敗れました。そして、その時の彼女の反応は「悔しい」というより「悔しくて泣いた」のです。それは、単なる敗北の涙ではなく「勝ちたいという強い願い」の表れでした。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">初試合の出場</td>
                <td className="px-3 py-2 text-gray-600">5歳で男の子に混ざって初めて試合に出場</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">敗北</td>
                <td className="px-3 py-2 text-gray-600">試合に負ける</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">勝者の金メダル</td>
                <td className="px-3 py-2 text-gray-600">勝った相手が金メダルをもらうのを目撃</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">涙と願い</td>
                <td className="px-3 py-2 text-gray-600">「金メダルが欲しい」と泣く</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">この瞬間の重要性</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">勝敗への理解:</span>
              <span>5歳という幼さで「勝つ」「負ける」「金メダル」の価値を理解できた</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">強い願望:</span>
              <span>「金メダルが欲しい」という純粋で強い動機が生まれた</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">親の役割:</span>
              <span>父親がこの涙に応える形で、本格的な指導を開始</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          「金メダルはスーパーで売っていない」父の言葉
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          泣いている5歳の娘に、父親・吉田栄勝が言った言葉があります。「金メダルはスーパーでは売っていない。勝った子しかもらえない。」この一言が、吉田沙保里の人生を決定付けたのです。これは「無理にやる気を出させる」ものではなく、シンプルに「事実」を告げるものでした。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">シンプルな事実</h3>
              <p className="text-sm text-gray-600">
                親の役割は「励ます」ことではなく、時には「現実を伝えること」。金メダルは「勝つことでしか手に入らない」という事実は、5歳の娘にも理解できました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">本気のスイッチが入る</h3>
              <p className="text-sm text-gray-600">
                この言葉をきっかけに、沙保里は「本気でレスリングに向き合う」ようになります。子どもが「本当にやりたい」と思うまで待つことの大切さが、ここに現れています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親の言葉の重み</h3>
              <p className="text-sm text-gray-600">
                「頑張れば誰でもできる」ではなく「勝つことでしかもらえない」という現実的な言葉が、子どもの心に深く刻まれました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          毎日の猛練習が生んだ16連覇
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          5歳の初試合の涙から、吉田沙保里の毎日が変わります。父親の言葉に応える形で、彼女は本気で練習を開始したのです。小学入学後は、休みはお盆とお正月のみ。毎日、毎日、同じ動きを繰り返す。この「地道さ」が、やがて世界的な成績につながったのです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-lg font-black text-red-600">年360日</p>
            <p className="text-xs text-gray-600 mt-1">練習日数</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-lg font-black text-red-600">毎日</p>
            <p className="text-xs text-gray-600 mt-1">同じ動き</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-lg font-black text-red-600">学校帰り</p>
            <p className="text-xs text-gray-600 mt-1">道場へ直行</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-lg font-black text-red-600">休み</p>
            <p className="text-xs text-gray-600 mt-1">お盆とお正月のみ</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-lg font-black text-red-600">友人関係</p>
            <p className="text-xs text-gray-600 mt-1">限定的</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
            <p className="text-lg font-black text-red-600">報酬</p>
            <p className="text-xs text-gray-600 mt-1">試合での勝利</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">猛練習の果実</p>
          <ul className="space-y-2">
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">2004年アテネ:</span>
              <span>オリンピック金メダル獲得</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">2008年北京:</span>
              <span>オリンピック2連覇</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">2012年ロンドン:</span>
              <span>オリンピック3連覇</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">世界選手権:</span>
              <span>16連覇という驚異的な記録</span>
            </li>
            <li className="text-sm text-red-800 flex gap-2">
              <span className="font-bold">総獲得メダル:</span>
              <span>国際舞台での圧倒的強さ</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ：「悔しさ」が子どもを本当に強くする
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          吉田沙保里の人生から学べる最も大切な教訓は、「悔しさ」の価値です。5歳で敗北を味わい、金メダルを見て泣いた。その経験から「本気で勝ちたい」という動機が生まれました。多くの親は「子どもを傷つけたくない」と思い、敗北から守ろうとします。しかし、吉田沙保里の父親は違いました。敗北を「成長の機会」と捉え、シンプルに「現実」を伝えたのです。
        </p>
        <p className="text-gray-700 leading-relaxed">
          親の皆さんへ：お子さんが試合で負けたとき、つまずいたとき、「大丈夫、頑張れば誰でもできる」と言うのは簡単です。しかし時には、吉田沙保里の父のように「この経験から何を学ぶのか」を一緒に考えることが大切です。「悔しさ」は、最強の教育材料。それを受け入れた子どもは、必ず成長します。オリンピック3連覇、世界選手権16連覇という記録は、5歳で泣いた小さな女の子の「悔しさ」から生まれたのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
