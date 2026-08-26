import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '長座体前屈の平均値は？小学生の全国平均と柔軟性測定方法',
  description:
    '長座体前屈の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子33.88cm・女子38.17cm。柔軟性測定の方法と実施要項に基づく正しいやり方、得点の基準をまとめました。',
  openGraph: {
    title: '長座体前屈の平均値は？小学生の全国平均と柔軟性測定方法',
    description:
      '長座体前屈の全国平均を原典データで解説。小5男子33.88cm・女子38.17cm。柔軟性測定の方法と得点基準。',
    images: [{ url: '/images/articles/sit-and-reach-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sit-and-reach-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sit-and-reach-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '長座体前屈の平均値は？小学生の全国平均と柔軟性測定方法',
    images: ['/images/articles/sit-and-reach-kids.jpg'],
  },
};

export default function SitAndReachKidsPage() {
  return (
    <ArticleLayout
      title="長座体前屈の平均値は？小学生の全国平均と柔軟性測定方法"
      heroImage="/images/articles/sit-and-reach-kids.jpg"
      heroAlt="体育館で長座体前屈に取り組む小学生"
      publishDate="2026年8月"
      slug="sit-and-reach-kids"
      description="長座体前屈の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子33.88cm・女子38.17cm。柔軟性測定の方法と実施要項に基づく正しいやり方、得点の基準をまとめました。"
      tags={['長座体前屈', '体力テスト', '全国平均', '柔軟性']}
      shareText="長座体前屈の全国平均は小5男子33.88cm・女子38.17cm。柔軟性測定の方法と得点基準をまとめました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項（6歳〜11歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/001.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          長座体前屈は、新体力テストの8種目のうち「柔軟性」を測る種目です。床に座って足を伸ばし、前に屈んで指が到達した距離を測ります。この種目は17年間でほぼ唯一、小中学生の平均値が上がり続けている特徴があります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データと、文部科学省の実施要項から、全国平均・得点の基準・正しい測定方法をまとめます。数値はすべて原典の値をそのまま使っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          長座体前屈の全国平均（令和7年度）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全国の小学5年生を対象にした悉皆調査の結果です。
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
                <td className="px-3 py-2 text-right text-gray-600">33.88 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.17 cm</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女の数値を比べる意味はありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            新体力テストの得点表は男女別に作られています。同じセンチメートルでも男女で得点が変わるため、男女の距離を並べて優劣を語ることはできません。比べるなら、同じ性別・同じ学年の平均と比べてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何センチで何点？ 項目別得点表
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、各種目の記録を10点満点に換算して合計します（8種目で80点満点）。長座体前屈の換算表は次のとおりです。
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
                <td className="px-3 py-2 text-right text-gray-600">49cm以上</td>
                <td className="px-3 py-2 text-right text-gray-600">52cm以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">43～48</td>
                <td className="px-3 py-2 text-right text-gray-600">46～51</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">38～42</td>
                <td className="px-3 py-2 text-right text-gray-600">41～45</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">34～37</td>
                <td className="px-3 py-2 text-right text-gray-600">37～40</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">30～33</td>
                <td className="px-3 py-2 text-right text-gray-600">33～36</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">27～29</td>
                <td className="px-3 py-2 text-right text-gray-600">29～32</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">23～26</td>
                <td className="px-3 py-2 text-right text-gray-600">25～28</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">19～22</td>
                <td className="px-3 py-2 text-right text-gray-600">21～24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">15～18</td>
                <td className="px-3 py-2 text-right text-gray-600">18～20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">14cm以下</td>
                <td className="px-3 py-2 text-right text-gray-600">17cm以下</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（小学校）</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          全国平均の小5男子33.88cm、女子38.17cmは、どちらも得点表では6点にあたります。8種目の合計点と総合評価の見方は
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
          文部科学省の「新体力テスト実施要項」には、測定の準備と方法が細かく決められています。学校で説明を受けても細部まで覚えている子は多くありません。ルールを正しく知っているだけで、記録が伸びることもあります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">準備（実施要項より）</p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm text-gray-700">・幅22cm、高さ24cmの箱2個を左右約40cm離して平行に置く</li>
            <li className="text-sm text-gray-700">・その上に段ボール厚紙（横75～80cm、縦約31cm）をのせ、ガムテープで固定する</li>
            <li className="text-sm text-gray-700">・床から厚紙の上面までの高さは25cm（±1cm）にする</li>
            <li className="text-sm text-gray-700">・箱の横にスケール（メジャー）を置き、零点を合わせる</li>
          </ul>

          <p className="font-bold text-gray-900 mb-3 text-sm">方法（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・被測定者は両脚を両箱の間に入れ、長座姿勢をとる。壁に背・尻をぴったりつける</li>
            <li className="text-sm text-gray-700">・肩幅の広さで両手のひらを下にして、手のひらの中央付近が厚紙の手前端にかかるように置く</li>
            <li className="text-sm text-gray-700">・胸を張って両肘を伸ばしたまま、両手で箱を手前に十分引きつけ、背筋を伸ばす（初期姿勢）</li>
            <li className="text-sm text-gray-700">・両手を厚紙から離さずにゆっくり前屈し、箱全体を真っ直ぐ前方にできるだけ遠くまで滑らせる</li>
            <li className="text-sm text-gray-700">・膝が曲がらないように注意する</li>
            <li className="text-sm text-gray-700">・初期姿勢から最大前屈時の箱の移動距離をスケールから読み取る。記録はセンチメートル未満切り捨て</li>
            <li className="text-sm text-gray-700">・2回実施してよい方の記録をとる</li>
            <li className="text-sm text-gray-700">・靴を脱いで実施する</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「新体力テスト実施要項（6歳〜11歳対象）」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">膝を曲げるとやり直し</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            長座体前屈は「膝が曲がらないように」が絶対の条件です。胸を張ったまま、足を真っ直ぐ保つ意識が大切です。前屈の深さよりも、膝を伸ばす姿勢を優先してください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          長座体前屈の記録は17年でどう変わったか
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
                <td className="px-3 py-2 text-right text-gray-600">32.68 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">36.64 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.31 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">37.63 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.24 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">37.62 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.49 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">37.92 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.80 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.20 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.99 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.47 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.79 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.21 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和7年度</td>
                <td className="px-3 py-2 text-right text-gray-600">33.88 cm</td>
                <td className="px-3 py-2 text-right text-gray-600">38.17 cm</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">※令和2年度は新型コロナのため調査中止。出典: 同調査</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男子は平成20年度の32.68cmから令和7年度の33.88cmへ、女子は36.64cmから38.17cmへと上がっています。長座体前屈は握力・50m走・ソフトボール投げなど他の種目が低下傾向にある中で、小中学校男女ともに向上傾向を続けている数少ない種目です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「なぜ向上しているのか」は調査では特定されていません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁の調査には向上の原因に関する記述がありません。柔軟性が改善している事実は明確ですが、その理由を推測することはできません。当サイトでは根拠のない理由付けはしません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          柔軟性が活きるスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          長座体前屈が得意な子は、柔軟性を求める競技で力を発揮しやすい傾向があります。ただし、どの競技も柔軟性だけで決まるものではなく、瞬発力・バランス・筋力など複数の要素の組み合わせで成り立っています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/gymnastics-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">体操</p>
            <p className="text-xs text-green-800">柔軟性が最も重要な競技</p>
          </Link>
          <Link href="/articles/swimming-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">水泳</p>
            <p className="text-xs text-green-800">柔軟性と持久力の両方が必要</p>
          </Link>
          <Link href="/articles/judo-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">柔道・剣道</p>
            <p className="text-xs text-green-800">関節の可動域が重要</p>
          </Link>
          <Link href="/articles/gymnastics-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">ダンス・バレエ</p>
            <p className="text-xs text-green-800">表現力を高める基本的素養</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          一方、長座体前屈が苦手でも速く走れる子は、瞬発力を活かせる競技が向いているかもしれません。
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
          同じ小学5年生でも、4月生まれと3月生まれではほぼ1年の発達差があります。柔軟性は年齢・体格・成長のペースにも左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、長座体前屈は「やり方を知っているかどうか」で記録が変わる種目でもあります。初期姿勢をしっかり作り、膝を伸ばす意識を持つだけで記録が伸びる子は珍しくありません。記録だけを見て「柔軟性がない」と判断する前に、測定方法を確認してみてください。
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
