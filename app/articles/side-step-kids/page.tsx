import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '反復横跳びの平均は？小学生・中学生の全国平均と得点表',
  description:
    '反復横跳び（反復横とび）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子40.90点・女子38.71点、中2男子51.63点・女子45.77点。記録が何点なら何点に換算されるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。',
  openGraph: {
    title: '反復横跳びの平均は？小学生・中学生の全国平均と得点表',
    description:
      '反復横跳びの全国平均を原典データで解説。小5男子40.90点・女子38.71点。記録から得点への換算表と、実施要項に基づく正しいやり方。',
    images: [{ url: '/images/articles/side-step-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/side-step-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/side-step-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '反復横跳びの平均は？小学生・中学生の全国平均と得点表',
    images: ['/images/articles/side-step-kids.jpg'],
  },
};

export default function SideStepKidsPage() {
  return (
    <ArticleLayout
      title="反復横跳びの平均は？小学生・中学生の全国平均と得点表"
      heroImage="/images/articles/side-step-kids.jpg"
      heroAlt="体育館で反復横跳びに取り組む小学生"
      publishDate="2026年8月"
      slug="side-step-kids"
      description="反復横跳び（反復横とび）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子40.90点・女子38.71点、中2男子51.63点・女子45.77点。記録が何点なら何点に換算されるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。"
      tags={['反復横跳び', '体力テスト', '全国平均', '敏捷性']}
      shareText="反復横跳びの全国平均は小5男子40.90点・女子38.71点。記録から得点への換算表と、実施要項に基づく正しいやり方をまとめました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項（6歳〜11歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/001.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          反復横跳びは、新体力テストの8種目のうち「敏捷性（素早く方向を変える能力）」を測る種目です。中央のラインをまたいで、20秒間の間に左右に素早く移動し、通過したラインの数を数えます。正式には「反復横とび」という名称が使われます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データと、文部科学省の実施要項から、全国平均・得点の基準・正しいやり方をまとめます。数値はすべて原典の値をそのまま使っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          反復横跳びの全国平均（令和7年度）
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
                <td className="px-3 py-2 text-right text-gray-600">40.90 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.71 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学2年生</td>
                <td className="px-3 py-2 text-right text-gray-600">51.63 点</td>
                <td className="px-3 py-2 text-right text-gray-600">45.77 点</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女の数値を比べる意味はありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            新体力テストの得点表は男女別に作られています。同じ回数でも男女で得点が変わるため、男女の点数を並べて優劣を語ることはできません。比べるなら、同じ性別・同じ学年の平均と比べてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何点で何点？ 項目別得点表
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、各種目の記録を10点満点に換算して合計します（8種目で80点満点）。反復横跳びの換算表は次のとおりです。
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
                <td className="px-3 py-2 text-right text-gray-600">50点以上</td>
                <td className="px-3 py-2 text-right text-gray-600">47点以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">46〜49</td>
                <td className="px-3 py-2 text-right text-gray-600">43〜46</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">42〜45</td>
                <td className="px-3 py-2 text-right text-gray-600">40〜42</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">38〜41</td>
                <td className="px-3 py-2 text-right text-gray-600">36〜39</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">34〜37</td>
                <td className="px-3 py-2 text-right text-gray-600">32〜35</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">30〜33</td>
                <td className="px-3 py-2 text-right text-gray-600">28〜31</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">26〜29</td>
                <td className="px-3 py-2 text-right text-gray-600">25〜27</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">22〜25</td>
                <td className="px-3 py-2 text-right text-gray-600">21〜24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">18〜21</td>
                <td className="px-3 py-2 text-right text-gray-600">17〜20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">17点以下</td>
                <td className="px-3 py-2 text-right text-gray-600">16点以下</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（小学校）</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">中学校の点数レンジ</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            中学校の得点表では、1点当たりのスパンが広がります。男子は10点で63点以上、女子は10点で53点以上が基準です。中学生になると敏捷性が大きく伸びるため、小学校よりも高い基準が設定されています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          全国平均の小5男子40.90点、女子38.71点は、どちらも得点表では7点にあたります。8種目の合計点と総合評価の見方は
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
          文部科学省の「新体力テスト実施要項」には、測定の手順が細かく決められています。学校で説明を受けても細部まで覚えている子は多くありません。ルールを正しく知っているだけで、記録が変わることもあります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">測定場所と準備（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・床の上に中央ラインを引き、その両側100cmのところに2本の平行ラインを引く</li>
            <li className="text-sm text-gray-700">・屋内、屋外のいずれで実施してもよいが、屋外で行う場合はよく整地された安全で滑りにくい場所で実施すること</li>
            <li className="text-sm text-gray-700">・屋外で行う場合、コンクリート等の硬い上では実施しない</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「新体力テスト実施要項（6歳〜11歳対象）」</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">跳び方のルール（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・中央ラインをまたいで立つ</li>
            <li className="text-sm text-gray-700">・20秒間、サイドステップで左右に移動する（ジャンプしてはいけない）</li>
            <li className="text-sm text-gray-700">・右側のラインを越すか踏むまでサイドステップし、次に中央ラインに戻り、さらに左側のラインを越すか踏むまでサイドステップする</li>
            <li className="text-sm text-gray-700">・ラインを通過するごとに1点を与える（右・中央・左・中央で4点になる）</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 同実施要項</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">得点にならない動き</p>
          <p className="text-sm text-green-800 leading-relaxed mb-2">
            実施要項では、以下の場合は点数としないと定められています：
          </p>
          <ul className="space-y-1 text-sm text-green-800">
            <li>・外側のラインを踏まなかったり越えなかったとき</li>
            <li>・中央ラインをまたがなかったとき</li>
          </ul>
          <p className="text-sm text-green-800 leading-relaxed mt-2">
            これらのルールを正しく理解していれば、無駄な動きなく効率的に得点できます。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          反復横跳びは「ジャンプしてはいけない」「サイドステップ」というルールが決められているのは、単に難度を下げるためではなく、測定の正確さを保つためです。正しいサイドステップで、確実にラインを踏むことが大事です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          反復横跳びの記録は17年でどう変わったか
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
                <td className="px-3 py-2 text-right text-gray-600">40.99 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.77 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600">42.10 点</td>
                <td className="px-3 py-2 text-right text-gray-600">40.32 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">41.74 点</td>
                <td className="px-3 py-2 text-right text-gray-600">40.14 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">40.36 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.73 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">40.37 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.67 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">40.61 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.74 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">40.67 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.71 点</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和7年度</td>
                <td className="px-3 py-2 text-right text-gray-600">40.90 点</td>
                <td className="px-3 py-2 text-right text-gray-600">38.71 点</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">※令和2年度は新型コロナのため調査中止。出典: 同調査</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男子は平成30年度の42.10点がピークで、その後は低めで推移し、令和7年度は40.90点です。女子も平成30年度の40.32点がピークで、令和7年度は38.71点と低めです。ピーク時から下回っている状態が続いています。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「なぜ下がったのか」は調査では特定されていません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁は「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である」「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である」と報告しています。ただしこれは関連の指摘であり、反復横跳びの記録が下がった原因を特定したものではありません。当サイトでは根拠のない理由付けはしません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          敏捷性が活きるスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          反復横跳びが得意な子は、素早く方向を変える競技で力を発揮しやすい傾向があります。ただし、どの競技も敏捷性だけで決まるものではなく、瞬発力・持久力・巧緻性など複数の要素の組み合わせで成り立っています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/soccer-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">サッカー</p>
            <p className="text-xs text-green-800">素早いターンと反応</p>
          </Link>
          <Link href="/articles/basketball-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">バスケットボール</p>
            <p className="text-xs text-green-800">素早い方向転換が必須</p>
          </Link>
          <Link href="/articles/tennis-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">テニス</p>
            <p className="text-xs text-green-800">コート上での素早い動き</p>
          </Link>
          <Link href="/articles/table-tennis-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">卓球</p>
            <p className="text-xs text-green-800">レディポジションと反応速度</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          逆に、反復横跳びが苦手でも立ち幅跳びが得意な子は、瞬発力を活かせる競技が向いているかもしれません。
          <Link href="/articles/standing-long-jump-kids" className="text-blue-600 font-bold hover:underline">立ち幅跳びが得意な子の特徴</Link>
          もあわせてご覧ください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均と比べるときに知っておきたいこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ小学5年生でも、4月生まれと3月生まれではほぼ1年の発達差があります。敏捷性は神経発達のペースにも左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、反復横跳びは「ルールを正しく理解できているか」「中央ラインを確実に踏めているか」といった正確さで得点が大きく変わる種目です。実施要項の正しい測定方法を確認するだけで、同じ敏捷性の子でも記録が改善することがあります。
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
