import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '立ち幅跳びの平均は？小学生・中学生の全国平均と得点表',
  description:
    '立ち幅跳び（立ち幅とび）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子150.96cm・女子142.39cm、中2男子197.50cm・女子166.39cm。何cmで何点になるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。',
  openGraph: {
    title: '立ち幅跳びの平均は？小学生・中学生の全国平均と得点表',
    description:
      '立ち幅跳びの全国平均を原典データで解説。小5男子150.96cm・女子142.39cm。何cmで何点かの得点表と、実施要項に基づく正しいやり方。',
    images: [{ url: '/images/articles/standing-long-jump-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/standing-long-jump-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/standing-long-jump-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '立ち幅跳びの平均は？小学生・中学生の全国平均と得点表',
    images: ['/images/articles/standing-long-jump-kids.jpg'],
  },
};

export default function StandingLongJumpKidsPage() {
  return (
    <ArticleLayout
      title="立ち幅跳びの平均は？小学生・中学生の全国平均と得点表"
      heroImage="/images/articles/standing-long-jump-kids.jpg"
      heroAlt="体育館で立ち幅跳びに取り組む小学生"
      publishDate="2026年8月"
      slug="standing-long-jump-kids"
      description="立ち幅跳び（立ち幅とび）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子150.96cm・女子142.39cm、中2男子197.50cm・女子166.39cm。何cmで何点になるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。"
      tags={['立ち幅跳び', '体力テスト', '全国平均', '跳躍力']}
      shareText="立ち幅跳びの全国平均は小5男子150.96cm・女子142.39cm。何cmで何点かの得点表と、実施要項に基づく正しいやり方をまとめました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項（6歳〜11歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/001.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          立ち幅跳びは、新体力テストの8種目のうち「跳躍力・瞬発力」を測る種目です。両足で踏み切って、前方へできるだけ遠くまでジャンプします。正式には「立ち幅とび」という名称が使われます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データと、文部科学省の実施要項から、全国平均・得点の基準・正しいやり方をまとめます。数値はすべて原典の値をそのまま使っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          立ち幅跳びの全国平均（令和7年度）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全国の小学5年生・中学2年生を対象にした悉皆調査の結果です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小学5年生</td>
                <td className="px-3 py-2 text-right text-gray-600">150.96 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">142.39 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学2年生</td>
                <td className="px-3 py-2 text-right text-gray-600">197.50 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">166.39 cm</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女の数値を比べる意味はありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            新体力テストの得点表は男女別に作られています。同じ距離でも男女で得点が変わるため、男女の距離を並べて優劣を語ることはできません。比べるなら、同じ性別・同じ学年の平均と比べてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何cmで何点？ 項目別得点表
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、各種目の記録を10点満点に換算して合計します（8種目で80点満点）。立ち幅跳びの換算表は次のとおりです。
        </p>

        <p className="font-bold text-gray-900 text-sm mb-2">小学校</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">得点</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">10点</td>
                <td className="px-3 py-2 text-right text-gray-600">192cm以上</td>
                <td className="px-3 py-2 text-right text-gray-600">181cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">180〜191</td>
                <td className="px-3 py-2 text-right text-gray-600">170〜180</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">168〜179</td>
                <td className="px-3 py-2 text-right text-gray-600">160〜169</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">156〜167</td>
                <td className="px-3 py-2 text-right text-gray-600">147〜159</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">143〜155</td>
                <td className="px-3 py-2 text-right text-gray-600">134〜146</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">130〜142</td>
                <td className="px-3 py-2 text-right text-gray-600">121〜133</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">117〜129</td>
                <td className="px-3 py-2 text-right text-gray-600">109〜120</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">105〜116</td>
                <td className="px-3 py-2 text-right text-gray-600">98〜108</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">93〜104</td>
                <td className="px-3 py-2 text-right text-gray-600">85〜97</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">92cm以下</td>
                <td className="px-3 py-2 text-right text-gray-600">84cm以下</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（小学校）</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">中学校の10点ライン</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            中学校の得点表では、10点は男子265cm以上・女子210cm以上です。小学校の10点ライン（男子192cm以上・女子181cm以上）から大きく上がります。中学生になると下肢の筋パワーが大きく伸びるため、基準もそれに合わせて設定されています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          全国平均の小5男子150.96cm、女子142.39cmは、どちらも得点表では6点にあたります。8種目の合計点と総合評価の見方は
          <Link href="/articles/fitness-test-guide" className="text-blue-600 font-bold hover:underline">小学生の新体力テスト完全ガイド</Link>
          で解説しています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          正しいやり方（実施要項より）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文部科学省の「新体力テスト実施要項」には、測定の手順が細かく決められています。学校で説明を受けても細部まで覚えている子は多くありません。ルールを正しく知っているだけで、記録が変わる場合があります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">測定場所と準備（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・屋外で行う場合は砂場。屋内で行う場合はマットを使用する</li>
            <li className="text-sm text-gray-700">・踏み切り線は、測定場所の手前30cm〜1mに引く</li>
            <li className="text-sm text-gray-700">・測定場所は、できるだけ整地する</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「新体力テスト実施要項（6歳〜11歳対象）」</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">跳び方のルール（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・両足を軽く開いて、つま先を踏み切り線の前端にそろえて立つ</li>
            <li className="text-sm text-gray-700">・両足で同時に踏み切って前方へ飛ぶ</li>
            <li className="text-sm text-gray-700">・二重踏み切りにならないようにする（踏み切り線を越えてから、もう一度足をついてから飛んではいけない）</li>
            <li className="text-sm text-gray-700">・記録は、身体が触れた位置のうち最も踏み切り線に近い位置と、踏み切り前の両足の中央位置を結ぶ距離を測る</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 同実施要項</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">2回の機会が活かされていない子が多い</p>
          <p className="text-sm text-green-800 leading-relaxed">
            実施要項には「2回実施してよい方の記録をとる」と書かれています。つまり、1回目より2回目の方が伸びたら、2回目が記録になります。1回目が十分に伸びなかったと感じたら、2回目に別の跳び方を試してみる価値があります。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          立ち幅跳びは「助走なしで自分の力だけで飛ぶ」テストです。踏み切り線の位置や腕の振り方に工夫の余地がありますが、ルール内での工夫にとどめることが大事です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          立ち幅跳びの記録は17年でどう変わったか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学5年生の全国平均の推移です。平成20年度から令和7年度までの原典の数値をそのまま並べています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成20年度</td>
                <td className="px-3 py-2 text-right text-gray-600">153.96 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">145.77 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600">152.26 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">145.97 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">151.47 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">145.70 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">151.43 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">145.22 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">150.86 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">144.59 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">151.16 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">144.34 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">150.46 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">143.18 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和7年度</td>
                <td className="px-3 py-2 text-right text-gray-600">150.96 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">142.39 cm</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">※令和2年度は新型コロナのため調査中止。出典: 同調査</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男子は平成20年度の153.96cmから下がり続け、令和7年度は150.96cmです。女子も平成20年度の145.77cmから下がり、令和7年度は142.39cmで最も低い値になっています。どちらも低下傾向が顕著です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「なぜ下がったのか」は調査では特定されていません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁は「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である」「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である」と報告しています。ただしこれは関連の指摘であり、立ち幅跳びの記録が下がった原因を特定したものではありません。当サイトでは根拠のない理由付けはしません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          瞬発力が活きるスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          立ち幅跳びが得意な子は、瞬間的に力を発揮できる競技で力を発揮しやすい傾向があります。ただし、どの競技も瞬発力だけで決まるものではなく、持久力・巧緻性・柔軟性など複数の要素の組み合わせで成り立っています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/soccer-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">サッカー</p>
            <p className="text-xs text-green-800">瞬発力で素早い動きが必要</p>
          </Link>
          <Link href="/articles/basketball-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">バスケットボール</p>
            <p className="text-xs text-green-800">ジャンプ力と素早いターン</p>
          </Link>
          <Link href="/articles/volleyball-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">バレーボール</p>
            <p className="text-xs text-green-800">ジャンプして打つ瞬発力</p>
          </Link>
          <Link href="/articles/tennis-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">テニス</p>
            <p className="text-xs text-green-800">素早い方向転換と加速</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          逆に、立ち幅跳びが苦手でもシャトルランが得意な子は、持久力を活かせる競技が向いているかもしれません。
          <Link href="/articles/shuttle-run-kids" className="text-blue-600 font-bold hover:underline">20mシャトルランが得意な子の特徴</Link>
          もあわせてご覧ください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均と比べるときに知っておきたいこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ小学5年生でも、4月生まれと3月生まれではほぼ1年の発達差があります。跳躍力は体格や骨の成長のペースにも左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、立ち幅跳びは「踏み切り線の位置を知っているかどうか」「二重踏み切りを避けられるか」といった細かいルールを正しく理解しているかで記録が変わる種目です。実施要項の正しい測定方法を確認するだけで記録が伸びる子も少なくありません。
        </p>
        <p className="text-gray-700 leading-relaxed">
          当サイトでは、新体力テストの記録を入力すると全国平均と比較して、お子さんの体力の特徴と向いているスポーツの傾向を確認できます。学年・性別ごとの平均値は
          <Link href="/heikin/10sai-male" className="text-blue-600 font-bold hover:underline">年齢別の平均ページ</Link>
          に掲載しています。
        </p>

        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-blue-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
