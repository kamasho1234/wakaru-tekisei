import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '20mシャトルランの平均回数は？小学生・中学生の全国平均と得点表',
  description:
    '20mシャトルラン（往復持久走）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子47.95回・女子36.87回、中2男子78.59回・女子50.44回。何回で何点になるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。',
  openGraph: {
    title: '20mシャトルランの平均回数は？小学生・中学生の全国平均と得点表',
    description:
      '20mシャトルランの全国平均を原典データで解説。小5男子47.95回・女子36.87回。何回で何点かの得点表と、実施要項に基づく正しいやり方。',
    images: [{ url: '/images/articles/shuttle-run-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/shuttle-run-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/shuttle-run-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '20mシャトルランの平均回数は？小学生・中学生の全国平均と得点表',
    images: ['/images/articles/shuttle-run-kids.jpg'],
  },
};

export default function ShuttleRunKidsPage() {
  return (
    <ArticleLayout
      title="20mシャトルランの平均回数は？小学生・中学生の全国平均と得点表"
      heroImage="/images/articles/shuttle-run-kids.jpg"
      heroAlt="体育館で20mシャトルランに取り組む小学生"
      publishDate="2026年8月"
      slug="shuttle-run-kids"
      description="20mシャトルラン（往復持久走）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子47.95回・女子36.87回、中2男子78.59回・女子50.44回。何回で何点になるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。"
      tags={['シャトルラン', '体力テスト', '全国平均', '持久力']}
      shareText="20mシャトルランの全国平均は小5男子47.95回・女子36.87回。何回で何点かの得点表と、実施要項に基づく正しいやり方をまとめました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項（6歳〜11歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/001.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          20mシャトルランは、新体力テストの8種目のうち「全身持久力」を測る種目です。電子音に合わせて20mの区間を往復し、音についていけなくなるまで続けます。正式には「20mシャトルラン（往復持久走）」といいます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データと、文部科学省の実施要項から、全国平均・得点の基準・正しいやり方をまとめます。数値はすべて原典の値をそのまま使っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          シャトルランの全国平均（令和7年度）
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
                <td className="px-3 py-2 text-right text-gray-600">47.95 回</td>
                <td className="px-3 py-2 text-right text-gray-600">36.87 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学2年生</td>
                <td className="px-3 py-2 text-right text-gray-600">78.59 回</td>
                <td className="px-3 py-2 text-right text-gray-600">50.44 回</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女の数値を比べる意味はありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            新体力テストの得点表は男女別に作られています。同じ回数でも男女で得点が変わるため、男女の回数を並べて優劣を語ることはできません。比べるなら、同じ性別・同じ学年の平均と比べてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何回で何点？ 項目別得点表
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、各種目の記録を10点満点に換算して合計します（8種目で80点満点）。シャトルランの換算表は次のとおりです。
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
                <td className="px-3 py-2 text-right text-gray-600">80回以上</td>
                <td className="px-3 py-2 text-right text-gray-600">64回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">69〜79</td>
                <td className="px-3 py-2 text-right text-gray-600">54〜63</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">57〜68</td>
                <td className="px-3 py-2 text-right text-gray-600">44〜53</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">45〜56</td>
                <td className="px-3 py-2 text-right text-gray-600">35〜43</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">33〜44</td>
                <td className="px-3 py-2 text-right text-gray-600">26〜34</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">23〜32</td>
                <td className="px-3 py-2 text-right text-gray-600">19〜25</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">15〜22</td>
                <td className="px-3 py-2 text-right text-gray-600">14〜18</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">10〜14</td>
                <td className="px-3 py-2 text-right text-gray-600">10〜13</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">8〜9</td>
                <td className="px-3 py-2 text-right text-gray-600">8〜9</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">7回以下</td>
                <td className="px-3 py-2 text-right text-gray-600">7回以下</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（小学校）</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">中学校の10点ライン</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            中学校の得点表では、10点は男子125回以上・女子88回以上です。小学校の10点ライン（男子80回以上・女子64回以上）から一気に上がります。中学生になると全身持久力が大きく伸びるため、基準もそれに合わせて設定されています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          全国平均の小5男子47.95回、女子36.87回は、どちらも得点表では7点にあたります。8種目の合計点と総合評価の見方は
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
          文部科学省の「新体力テスト実施要項」には、測定の手順が細かく決められています。学校で説明を受けても細部まで覚えている子は多くありません。ルールを正しく知っているだけで、損をせずに済みます。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">方法（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・一方の線上に立ち、テストの開始を告げる5秒間のカウントダウンの後の電子音によりスタートする</li>
            <li className="text-sm text-gray-700">・電子音が次に鳴るまでに20m先の線に達し、その場で向きを変える。この動作を繰り返す</li>
            <li className="text-sm text-gray-700">・電子音の前に線に達してしまった場合は、向きを変え、電子音を待ち、電子音が鳴った後に走り始める</li>
            <li className="text-sm text-gray-700">・電子音の間隔は初めはゆっくりだが、約1分ごとに短くなる（＝走る速さが約1分ごとに上がっていく）</li>
            <li className="text-sm text-gray-700">・2回続けてどちらかの足で線に触れることができなくなったときにテストを終了する</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「新体力テスト実施要項（6歳〜11歳対象）」</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">見落とされがちなルール: 遅れは1回まで取り返せる</p>
          <p className="text-sm text-green-800 leading-relaxed">
            実施要項には「電子音からの遅れが1回の場合、次の電子音に間に合い、遅れを解消できれば、テストを継続することができる」と書かれています。1回間に合わなかった時点で終わりだと思って自分から止まってしまう子がいますが、そこで諦める必要はありません。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          記録は「テスト終了時（電子音についていけなくなった直前）の折り返しの総回数」です。ペースを守って走ることが記録に直結します。実施要項も「ランニングスピードのコントロールに十分注意し、電子音の鳴る時には、必ずどちらかの線上にいるようにする」と注意しています。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">最初から全力で走ると損をします</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            序盤の電子音の間隔はゆっくりです。早く着きすぎても回数は増えず、線の上で電子音を待つことになります。実施要項が「電子音の前に線に達してしまった場合は、向きを変え、電子音を待つ」と定めているのはこのためです。序盤に飛ばした分の体力は、記録につながりません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          テストの前後に必要なこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          シャトルランは新体力テストの中で最も心肺に負荷がかかる種目です。実施要項でも、ほかの種目にはない注意が並んでいます。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・テスト実施前のウォーミングアップでは、足首、アキレス腱、膝などの柔軟運動（ストレッチングなどを含む）を十分に行う</li>
            <li className="text-sm text-gray-700">・テスト終了後は、ゆっくりとした運動等によるクーリングダウンをする</li>
            <li className="text-sm text-gray-700">・被測定者の健康状態に十分注意し、疾病及び傷害の有無を確かめ、医師の治療を受けている者や実施が困難と認められる者については、このテストを実施しない</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 同実施要項「実施上の注意」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          体調がすぐれない日や、持病がある場合に無理をさせる種目ではありません。ぜんそくのあるお子さんについては
          <Link href="/articles/asthma-kids-sports" className="text-blue-600 font-bold hover:underline">喘息・アレルギーのある子どもとスポーツ</Link>
          もあわせてご覧ください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          シャトルランの記録は17年でどう変わったか
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
                <td className="px-3 py-2 text-right text-gray-600">49.39 回</td>
                <td className="px-3 py-2 text-right text-gray-600">38.72 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600">52.15 回</td>
                <td className="px-3 py-2 text-right text-gray-600">41.89 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">46.85 回</td>
                <td className="px-3 py-2 text-right text-gray-600">38.16 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">45.93 回</td>
                <td className="px-3 py-2 text-right text-gray-600">36.98 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">46.91 回</td>
                <td className="px-3 py-2 text-right text-gray-600">36.81 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">46.90 回</td>
                <td className="px-3 py-2 text-right text-gray-600">36.60 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和7年度</td>
                <td className="px-3 py-2 text-right text-gray-600">47.95 回</td>
                <td className="px-3 py-2 text-right text-gray-600">36.87 回</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">※令和2年度は新型コロナのため調査中止。出典: 同調査</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男子は平成30年度の52.15回がピークで、令和4年度の45.93回まで下がり、令和7年度は47.95回まで戻しました。女子は平成30年度の41.89回から下がり続け、令和6年度の36.60回が最も低い値です。どちらもピーク時の水準には戻っていません。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「なぜ下がったのか」は調査では特定されていません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁は「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である」「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である」と報告しています。ただしこれは関連の指摘であり、シャトルランの回数が下がった原因を特定したものではありません。当サイトでは根拠のない理由付けはしません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          持久力が活きるスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          シャトルランが得意な子は、動き続ける時間が長い競技で力を発揮しやすい傾向があります。ただし、どの競技も持久力だけで決まるものではなく、瞬発力・巧緻性・柔軟性など複数の要素の組み合わせで成り立っています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/soccer-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">サッカー</p>
            <p className="text-xs text-green-800">走り続ける時間が長い代表的な競技</p>
          </Link>
          <Link href="/articles/swimming-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">水泳</p>
            <p className="text-xs text-green-800">持久力と柔軟性の両方を使う</p>
          </Link>
          <Link href="/articles/basketball-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">バスケットボール</p>
            <p className="text-xs text-green-800">加速と減速を繰り返し続ける</p>
          </Link>
          <Link href="/articles/tennis-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">テニス</p>
            <p className="text-xs text-green-800">試合時間が長く、粘りが必要</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          逆に、シャトルランが苦手でも短距離が速い子は、瞬発力を活かせる競技が向いているかもしれません。
          <Link href="/articles/speed-running" className="text-blue-600 font-bold hover:underline">50m走が速い子の特徴</Link>
          もあわせてご覧ください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均と比べるときに知っておきたいこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ小学5年生でも、4月生まれと3月生まれではほぼ1年の発達差があります。全身持久力は体格や成長のペースにも左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、シャトルランは「やり方を知っているかどうか」で回数が変わる種目でもあります。ペース配分と折り返しのルールを理解するだけで記録が変わる子は珍しくありません。回数だけを見て「持久力がない」と判断する前に、走り方を確認してみてください。
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
