import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '中学の部活選び｜2026年度からの地域移行で何が変わるのか',
  description:
    '2026年度から始まる中学部活の地域移行。親が知っておくべき改革スケジュール、先進地域の事例、子どもにとって何が変わるのかを、スポーツ庁の公式情報から解説します。',
  openGraph: {
    title: '中学の部活選び｜2026年度からの地域移行で何が変わるのか',
    description:
      '中学部活が学校から地域へ移行。2026年度から始まる改革で、部活選びはどう変わるのか。親が知るべき背景と対策。',
    images: [{ url: '/images/articles/junior-high-club.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/junior-high-club',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/junior-high-club',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中学の部活選び｜2026年度からの地域移行で何が変わるのか',
    images: ['/images/articles/junior-high-club.jpg'],
  },
};

export default function JuniorHighClubPage() {
  return (
    <ArticleLayout
      title="中学の部活選び｜2026年度からの地域移行で何が変わるのか"
      heroImage="/images/articles/junior-high-club.jpg"
      heroAlt="中学生が部活を選ぶシーン"
      publishDate="2026年7月"
      slug="junior-high-club"
      description="2026年度から始まる中学部活の地域移行。親が知っておくべき改革スケジュール、先進地域の事例、子どもにとって何が変わるのかを、スポーツ庁の公式情報から解説します。"
      tags={['部活動', '地域移行', '2026年度', '中学進学']}
      shareText="2026年度から中学部活が学校から地域へ移行します。親として知っておくべき改革スケジュールと、先進地域の事例から見える課題をまとめました。 #子育て #部活動"
      citations={[
        '部活動改革のさらなる推進に向けて（スポーツ庁Web広報マガジン） https://sports.go.jp/tag/policy/post-155.html',
        '部活動改革ポータルサイト（文部科学省） https://www.mext.go.jp/sports/b_menu/sports/mcatetop01/list/1372413_00003.htm',
        '中学校における部活動の地域移行（神奈川県ホームページ） https://www.pref.kanagawa.jp/docs/cy3/gkt/chiikiikou.html',
        '調査結果（日本中学校体育連盟） https://nippon-chutairen.or.jp/data/result/',
        '部活動の地域展開（神戸市） https://www.city.kobe.lg.jp/a33992/bukatus/chiikiikou.html',
        '『30年後には運動部活動の生徒は半減する？！』（スポーツ庁Web広報マガジン） https://sports.go.jp/special/value-sports/30.html',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「中学に入ったら、どの部活に入ろう」。子どもにとって、中学進学は人生の大きな節目です。しかし、今、その中学部活の仕組みが大きく変わろうとしています。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          2026年度から、中学校の部活動が学校から地域へ移行される改革が本格化します。これまでのように「学校の部活に入る」という選択肢だけでは済まなくなるのです。親としても、その背景と今後の見通しを理解しておくことが、子どもをサポートするために重要です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁の公式情報をもとに、改革のスケジュール、先進地域の事例、親が知っておくべきポイントを解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          なぜ、今、部活動改革が必要なのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          部活動改革は、何もいきなり始まったわけではありません。その背景には、日本社会の大きな課題があります。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">少子化による競技人口の減少</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            中学の運動部加盟生徒数は、2009年度の約233万人から2018年度の約200万人へと減少しました。さらに、2048年度には約148万人へと、2009年から約36.7%が減少すると推計されています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          この競技人口の減少は、学校の部活だけで完結できなくなるという事態を招きます。野球部に人数が集まらない、複数の競技が統合される、女子の特定競技に入部者がいないといった状況が全国で起こっているのです。
        </p>

        <p className="text-gray-700 leading-relaxed">
          同時に、教員の働き方改革も急務です。部活指導は教員の長時間労働の原因の一つであり、学校外に移行することで、教員の負担を軽減する狙いもあります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          2026年度からの改革スケジュール：実際に何が変わるのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁と文化庁の有識者会議は、部活動改革の最終報告書をまとめました。その計画は、以下のようなものです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">改革実行期間：令和8年度〜令和13年度（2026〜2031年度）</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            スポーツ庁は改革実行期間について「休日の部活動については、改革実行期間内に、原則、全ての学校部活動において地域展開の実現を目指し、平日については各種課題を解決しつつ、更なる改革を推進」としています。つまり<span className="font-bold">まず休日から、平日は段階的に</span>という順序です。
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">休日</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">平日</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">2025年度までの進捗</td>
                <td className="px-3 py-2 text-gray-600">23,308部活（54%）が地域連携・地域移行を予定</td>
                <td className="px-3 py-2 text-gray-600">8,767部活（31%）が地域連携・地域移行を予定</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">2026年度以降</td>
                <td className="px-3 py-2 text-gray-600">原則として全学校で地域展開を実現</td>
                <td className="px-3 py-2 text-gray-600">各種課題を解決しつつ、段階的に推進</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          重要なのは、改革には段階性があり、地域によって進捗速度が異なるということです。全国一律ではなく、「市町村が、その実情に応じて公立中学校における部活動の地域移行を段階的に進めていく」とされています。つまり、お住まいの自治体によって、2026年度以降の具体的な状況は大きく異なる可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          先進地域から学ぶ：神戸市の事例
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          部活動改革の先進自治体として、神戸市の取り組みが参考になります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-800 mb-2">神戸市の地域クラブ活動</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            神戸市では2026年9月から、中学校の部活動を休日・平日ともに完全終了し、生徒が地域の人々とともに活動する地域クラブ活動「KOBE◆KATSU（コベカツ）」を開始します。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          先進自治体で実施された試行では、以下のような意見が寄せられています。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">生徒からの声</p>
          <p className="text-sm text-green-800 leading-relaxed mb-3">
            「専門の指導者から指導を受けることができた」
          </p>
          <p className="font-bold text-green-900 mb-2">教員からの声</p>
          <p className="text-sm text-green-800 leading-relaxed">
            「土日の負担が軽減された」
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、地域移行により、より専門的な指導が期待できる一方、生徒側の時間的・経済的な負担の増加も予想されます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          人気の部活動は何か：中学生の選択の実態
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          部活選びの参考になるよう、現在の中学生がどんな競技を選んでいるのか、統計を見てみましょう。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">男子の人気TOP3</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800">
                <span className="font-bold">1位：</span>サッカー
              </li>
              <li className="text-sm text-blue-800">
                <span className="font-bold">2位：</span>軟式野球
              </li>
              <li className="text-sm text-blue-800">
                <span className="font-bold">3位：</span>バスケットボール
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">女子の人気TOP3</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800">
                <span className="font-bold">1位：</span>ソフトテニス
              </li>
              <li className="text-sm text-blue-800">
                <span className="font-bold">2位：</span>バレーボール
              </li>
              <li className="text-sm text-blue-800">
                <span className="font-bold">3位：</span>バスケットボール
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          出典：日本中学校体育連盟の加盟校調査から、競技別加盟生徒数の多い順にランキングしたものです。こうした人気競技であれば、地域移行後も選択肢として残る可能性が高いでしょう。一方、マイナー競技を望む場合は、地域移行によって選択肢が減る可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親が今から準備できることは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          改革はまだ段階的に進んでいます。2026年度を目前にして、親ができることは何でしょうか。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">準備チェックリスト</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span>お住まいの自治体の部活動改革スケジュールを確認する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span>2026年度時点で、どの競技がどこで活動するのか情報収集する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span>子どもと共に、複数の競技・活動の選択肢を探索する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">4.</span>
              <span>費用面での準備（地域クラブは月謝が発生する可能性がある）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">5.</span>
              <span>送迎の方法を家族で検討する（活動場所が学校外になる可能性）</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          とりわけ重要なのは、自治体による情報です。神奈川県など一部の自治体では、既に部活動改革に関する情報をホームページで公開しています。お住まいの市町村に問い合わせることで、より具体的な情報が得られるかもしれません。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">完全な情報は、まだ揃っていません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            改革はまだ移行期にあります。「2026年度に何が変わるのか」が全国で統一されているわけではなく、地域ごとに大きく異なります。学校や教育委員会からの正式アナウンスを待つ必要があります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          子どもの適性を知ることの大切さ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          地域移行により、子どもたちは学校の部活という限定的な選択肢から解放されます。つまり、より自分の適性に合った競技を選ぶ機会が広がるのです。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          そこで重要になるのが、子ども自身が「自分は何が得意で、何が好きなのか」を理解することです。体力テスト、運動能力、身体の発達段階、心の成長度、興味関心…これらすべてが、最適な競技選びに影響します。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <p className="font-bold text-green-900 mb-2">わかる適性診断で、部活選びの準備を</p>
          <p className="text-sm text-green-800 leading-relaxed">
            当サイトの診断は、体力テストの記録などから、お子さんの運動能力の特徴と向いているスポーツの傾向を確認できます。部活選びの前に、客観的な自分の特性を知ることで、より適切な選択ができるようになります。2026年度の地域移行に向けて、今からその準備を始めることをお勧めします。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          改革を味方に、子どもの可能性を広げよう
        </h2>
        <p className="text-gray-700 leading-relaxed">
          部活動改革は、一見すると親にとって複雑な課題に見えるかもしれません。しかし、その背景には「すべての子どもがスポーツを楽しむ環境を作りたい」という想いがあります。少子化の中で、学校だけでは完結できなくなったからこそ、地域全体で子どもたちのスポーツ機会を支えようとしているのです。

            親としては、この改革を「子どもの適性を発見し、自分に合った競技に出会うチャンス」と捉えることが大切です。2026年度からの新しい時代に向けて、親子で一緒に、その子にとって最適なスポーツとの出会いを準備していってください。
          </p>
      </div>
    </ArticleLayout>
  );
}
