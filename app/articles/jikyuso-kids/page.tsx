import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '中学生の持久走の平均記録は？中2の全国平均と得点表',
  description:
    '持久走（男子1500m・女子1000m）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。中2男子410.24秒・女子310.35秒。何秒で何点かの項目別得点表と、実施ルールをまとめました。',
  openGraph: {
    title: '中学生の持久走の平均記録は？中2の全国平均と得点表',
    description:
      '持久走の全国平均を原典データで解説。中2男子410.24秒・女子310.35秒。何秒で何点かの得点表。',
    images: [{ url: '/images/articles/jikyuso-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/jikyuso-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/jikyuso-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中学生の持久走の平均記録は？中2の全国平均と得点表',
    images: ['/images/articles/jikyuso-kids.jpg'],
  },
};

export default function JikyusoKidsPage() {
  return (
    <ArticleLayout
      title="中学生の持久走の平均記録は？中2の全国平均と得点表"
      heroImage="/images/articles/jikyuso-kids.jpg"
      heroAlt="体育館で持久走に取り組む中学生"
      publishDate="2026年8月"
      slug="jikyuso-kids"
      description="持久走（男子1500m・女子1000m）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。中2男子410.24秒・女子310.35秒。何秒で何点かの項目別得点表と、実施ルールをまとめました。"
      tags={['持久走', '体力テスト', '全国平均', '持久力']}
      shareText="中学生の持久走平均は中2男子410.24秒・女子310.35秒。得点基準と実施ルールをまとめました。 #中学生 #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
        '文部科学省「新体力テスト実施要項（12歳〜15歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/003.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          持久走は、新体力テストの実技8種目のうち「全身持久力」を測る種目です。中学校では、持久走と20mシャトルランのどちらかを選択して実施します。男子は1500m、女子は1000mを走り、かかった時間を記録します。持久走は長距離を一定のペースで走る力を測る種目であり、17年間で男女ともに低下傾向が続いています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データから、全国平均・得点の基準・実施ルールをまとめます。小学生と異なり、小学生には持久走の種目がないため、別の種目で全身持久力を測ることもあわせて説明します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          持久走の全国平均（令和7年度）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全国の中学2年生を対象にした悉皆調査の結果です。持久走を選択した学校での集計となります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">種目</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学2年生</td>
                <td className="px-3 py-2 text-center text-gray-600">持久走</td>
                <td className="px-3 py-2 text-right text-gray-600">410.24 秒</td>
                <td className="px-3 py-2 text-right text-gray-600">310.35 秒</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女の数値を比べる意味はありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            新体力テストの得点表は男女別に作られています。同じ秒数でも男女で得点が変わるため、男女の記録を並べて優劣を語ることはできません。比べるなら、同じ性別・同じ学年の平均と比べてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何秒で何点？ 項目別得点表
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、各種目の記録を10点満点に換算して合計します。中学校では8種目で80点満点です（持久走と20mシャトルランは選択）。持久走の得点換算表は次のとおりです。
        </p>

        <p className="font-bold text-gray-900 text-sm mb-2">中学校</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">得点</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子（1500m）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子（1000m）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">10点</td>
                <td className="px-3 py-2 text-right text-gray-600">4'59"以下</td>
                <td className="px-3 py-2 text-right text-gray-600">3'49"以下</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">5'00"～5'16"</td>
                <td className="px-3 py-2 text-right text-gray-600">3'50"～4'02"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">5'17"～5'33"</td>
                <td className="px-3 py-2 text-right text-gray-600">4'03"～4'19"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">5'34"～5'55"</td>
                <td className="px-3 py-2 text-right text-gray-600">4'20"～4'37"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">5'56"～6'22"</td>
                <td className="px-3 py-2 text-right text-gray-600">4'38"～4'56"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">6'23"～6'50"</td>
                <td className="px-3 py-2 text-right text-gray-600">4'57"～5'18"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">6'51"～7'30"</td>
                <td className="px-3 py-2 text-right text-gray-600">5'19"～5'42"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">7'31"～8'19"</td>
                <td className="px-3 py-2 text-right text-gray-600">5'43"～6'14"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">8'20"～9'20"</td>
                <td className="px-3 py-2 text-right text-gray-600">6'15"～6'57"</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">9'21"以上</td>
                <td className="px-3 py-2 text-right text-gray-600">6'58"以上</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（中学校）</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          全国平均の中2男子410.24秒は得点表では5点にあたり、女子310.35秒も得点表では5点にあたります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">小学生には持久走がありません</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            新体力テストの実技8種目のうち、持久走は中学校から登場します。小学生の全身持久力は20mシャトルランで測られます。小5の全国平均と傾向について詳しくは
            <Link href="/articles/shuttle-run-kids" className="font-bold hover:underline">20mシャトルランの解説記事</Link>
            をご覧ください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          実施ルール（実施要項より）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文部科学省の実施要項では、持久走は以下のように行うことが定められています。シャトルランとは異なり、決められた距離を走り切ることが目標です。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">方法（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・走路は、トラック（陸上競技用が望ましい）またはその他適切な場所で実施する</li>
            <li className="text-sm text-gray-700">・被測定者は走路上に一列に並び、スタート地点に立つ</li>
            <li className="text-sm text-gray-700">・笛の合図で走り始める。ペースは被測定者の判断で自由に決めてよい</li>
            <li className="text-sm text-gray-700">・男子は1500m、女子は1000mを走る</li>
            <li className="text-sm text-gray-700">・ゴールラインを通過した際の時間を計測する</li>
            <li className="text-sm text-gray-700">・歩いてもよいが、できるだけ走り続けるよう指導する</li>
            <li className="text-sm text-gray-700">・記録は分秒で記録する</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省 新体力テスト実施要項</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">ペース配分が重要</p>
          <p className="text-sm text-green-800 leading-relaxed">
            持久走は自分でペース配分を決めます。最初から全力で走ると途中で息が上がってしまいます。自分の力に合わせて、最後まで走り続けられるペースを保つことが記録に大きく影響します。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          シャトルランとは異なり、持久走は音に合わせる必要がなく、自分のペースで走ります。一定のペースを保ち、最後まで走り切ることが得点向上のポイントです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          持久走は低下傾向
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全国的な傾向として、持久走は男女ともに低下傾向が続いています。スポーツ庁の調査では「持久走は男女とも低下傾向」と報告されており、中学生の全身持久力が低下していることが指摘されています。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「なぜ低下しているのか」は調査では特定されていません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁は「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である」「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である」と報告しています。ただし、これは関連する指摘であり、持久走の記録が低下した原因を特定したものではありません。当サイトでは根拠のない理由付けはしません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          持久走と20mシャトルラン、どちらを選ぶ？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校では、全身持久力を測る種目として「持久走」と「20mシャトルラン」のどちらかを選択して実施します。学校によって異なるため、確認する必要があります。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">持久走</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>・男子1500m、女子1000m</li>
              <li>・自分でペース調整できる</li>
              <li>・天候による影響を受けやすい</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="font-bold text-green-900 text-sm mb-2">20mシャトルラン</p>
            <ul className="text-xs text-green-800 space-y-1">
              <li>・音に合わせて往復走</li>
              <li>・屋内で実施できる</li>
              <li>・ペース配分が難しい</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          シャトルランについて詳しくは
          <Link href="/articles/shuttle-run-kids" className="text-blue-600 font-bold hover:underline">20mシャトルランの解説記事</Link>
          をご覧ください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均と比べるときに知っておきたいこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学2年生は第二次成長の時期であり、身体の発育スピードに個人差が大きくあります。全身持久力は体格・心肺機能・成長のペースに大きく左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、持久走は「ペース配分を知っているかどうか」で記録が大きく変わる種目です。最初のペースを落とし、最後まで走り続ける戦略を立てるだけで、記録が改善する生徒は珍しくありません。テストの前に、適切なペース配分について考えてみてください。
        </p>
        <p className="text-gray-700 leading-relaxed">
          当サイトでは、新体力テストの記録を入力すると全国平均と比較して、お子さんの体力の特徴と向いているスポーツの傾向を確認できます。学年・性別ごとの平均値は
          <Link href="/heikin/12sai-male" className="text-blue-600 font-bold hover:underline">年齢別の平均ページ</Link>
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
