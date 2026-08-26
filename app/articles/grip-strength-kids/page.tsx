import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '小学生の握力の平均は？全国平均と得点表',
  description:
    '小学生の握力の平均値を、スポーツ庁の令和7年度調査の原典データで解説。小5男子15.97kg・女子15.61kg、中2男子28.91kg・女子23.12kg。握力は男女とも一貫して低下している種目です。何kgで何点かの得点表と、実施要項に基づく正しいやり方もまとめました。',
  openGraph: {
    title: '小学生の握力の平均は？全国平均と得点表',
    description:
      '小学生の握力の平均値を原典データで解説。小5男子15.97kg・女子15.61kg。握力は男女とも一貫して低下傾向。何kgで何点かの得点表と、実施要項に基づく正しいやり方。',
    images: [{ url: '/images/articles/grip-strength-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/grip-strength-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/grip-strength-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小学生の握力の平均は？全国平均と得点表',
    images: ['/images/articles/grip-strength-kids.jpg'],
  },
};

export default function GripStrengthKidsPage() {
  return (
    <ArticleLayout
      title="小学生の握力の平均は？全国平均と得点表"
      heroImage="/images/articles/grip-strength-kids.jpg"
      heroAlt="握力計を握っている小学生の手"
      publishDate="2026年8月"
      slug="grip-strength-kids"
      description="小学生の握力の平均値を、スポーツ庁の令和7年度調査の原典データで解説。小5男子15.97kg・女子15.61kg、中2男子28.91kg・女子23.12kg。握力は男女とも一貫して低下している種目です。何kgで何点かの得点表と、実施要項に基づく正しいやり方もまとめました。"
      tags={['握力', '体力テスト', '全国平均', '筋力']}
      shareText="小学生の握力の平均は小5男子15.97kg・女子15.61kg。握力は男女とも一貫して低下している唯一の種目です。何kgで何点かの得点表と正しいやり方をまとめました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項（6歳〜11歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/001.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          握力は、新体力テストの8種目のうち「筋力」を測る種目です。スメドレー式握力計を握って、力いっぱい握り込むだけ。時間もかかりませんが、その子の握力（握る力）をそのまま測ります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データと、文部科学省の実施要項から、全国平均・得点の基準・正しいやり方をまとめます。数値はすべて原典の値をそのまま使っています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          重要：握力は、ここ17年間で男女ともに一貫して低下している唯一の新体力テスト種目です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          握力の全国平均（令和7年度）
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
                <td className="px-3 py-2 text-right text-gray-600">15.97 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">15.61 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学2年生</td>
                <td className="px-3 py-2 text-right text-gray-600">28.91 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">23.12 kg</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女の数値を比べる意味はありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            新体力テストの得点表は男女別に作られています。同じkgでも男女で得点が変わるため、男女の握力を並べて優劣を語ることはできません。比べるなら、同じ性別・同じ学年の平均と比べてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          何kgで何点？ 項目別得点表
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、各種目の記録を10点満点に換算して合計します（8種目で80点満点）。握力の換算表は次のとおりです。
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
                <td className="px-3 py-2 text-right text-gray-600">26kg以上</td>
                <td className="px-3 py-2 text-right text-gray-600">25kg以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">23～25</td>
                <td className="px-3 py-2 text-right text-gray-600">22～24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">20～22</td>
                <td className="px-3 py-2 text-right text-gray-600">19～21</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">17～19</td>
                <td className="px-3 py-2 text-right text-gray-600">16～18</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">14～16</td>
                <td className="px-3 py-2 text-right text-gray-600">13～15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">11～13</td>
                <td className="px-3 py-2 text-right text-gray-600">11～12</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">9～10</td>
                <td className="px-3 py-2 text-right text-gray-600">9～10</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">7～8</td>
                <td className="px-3 py-2 text-right text-gray-600">7～8</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">5～6</td>
                <td className="px-3 py-2 text-right text-gray-600">4～6</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">4kg以下</td>
                <td className="px-3 py-2 text-right text-gray-600">3kg以下</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（小学校）</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">中学校での握力の急激な成長</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            中学校の得点表では、10点は男子56kg以上・女子36kg以上です。小学校の10点ライン（男子26kg以上・女子25kg以上）から大きく上がります。思春期の成長に伴い、握力は劇的に発達する時期です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          全国平均の小5男子15.97kg、女子15.61kgは、どちらも得点表では6点にあたります。8種目の合計点と総合評価の見方は
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
          文部科学省の「新体力テスト実施要項」には、握力計の持ち方と握り方が細かく決められています。ルールを正しく知っているだけで、記録が変わる子は珍しくありません。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">方法（実施要項より）</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・握力計の指針が外側になるように持つ</li>
            <li className="text-sm text-gray-700">・人差し指の第2関節がほぼ直角になるように握りの幅を調節する</li>
            <li className="text-sm text-gray-700">・直立姿勢で両足を左右に自然に開く</li>
            <li className="text-sm text-gray-700">・腕を自然に下げ、握力計を身体や衣服に触れないようにして力いっぱい握る</li>
            <li className="text-sm text-gray-700">・握力計を振り回さない</li>
            <li className="text-sm text-gray-700">・右左交互に2回ずつ実施する</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「新体力テスト実施要項（6歳〜11歳対象）」</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">握りの幅調整がカギ</p>
          <p className="text-sm text-green-800 leading-relaxed">
            握力計の握りの幅は、人差し指の第2関節がほぼ直角になるように調節する必要があります。握りが広すぎると、または狭すぎると、力を入れにくくなり、記録が低くなります。測定前に握りの幅を確認することが重要です。児童用の握力計を使用することが望ましいとも書かれています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          記録の取り方の注意点：記録はキログラム未満は切り捨てられ、左右それぞれのよい方の記録を平均し、キログラム未満は四捨五入されます。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">1回では測定できません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            握力は右左交互に2回ずつ実施します。同じ手を2回続けて測定することはなく、右、左、右、左の順で測定します。また、同一被測定者に対して2回続けて測定を行わないようにとも定められています。体力テストのスケジュールでしっかり手を休める時間をとることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          握力の記録は17年でどう変わったか
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
                <td className="px-3 py-2 text-right text-gray-600">17.01 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">16.45 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600">16.54 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">16.14 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">16.37 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">16.09 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">16.22 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">16.09 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">16.21 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">16.10 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">16.13 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">16.02 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">16.02 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">15.78 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和7年度</td>
                <td className="px-3 py-2 text-right text-gray-600">15.97 kg</td>
                <td className="px-3 py-2 text-right text-gray-600">15.61 kg</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">※令和2年度は新型コロナのため調査中止。出典: 同調査</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男子は平成20年度の17.01kgから令和7年度の15.97kgへ、女子は16.45kgから15.61kgへ、一貫して低下しています。この17年間で、握力は唯一、男女とも継続的に低下している新体力テストの種目です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">握力は男女とも一貫して低下</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁の報告書では、「握力は小中男女とも低下傾向」と明記されています。ただし、この低下の原因については、調査からは特定されていません。運動時間の減少、スクリーンタイムの増加など複数の関連が指摘されていますが、握力低下の直接的な原因を特定した分析は報告書に記載されていません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          握力が活きるスポーツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          握力が強い子は、物をしっかり掴む・保持する必要がある競技で力を発揮しやすい傾向があります。ただし、どの競技も複数の体力要素の組み合わせで成り立っているため、握力の記録だけで適性は決まりません。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/judo-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">柔道</p>
            <p className="text-xs text-green-800">相手をつかむ握力が必須</p>
          </Link>
          <Link href="/articles/martial-arts-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">格闘技</p>
            <p className="text-xs text-green-800">掴む力が基本要素</p>
          </Link>
          <Link href="/articles/gymnastics-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">体操</p>
            <p className="text-xs text-green-800">鉄棒での握力が重要</p>
          </Link>
          <Link href="/articles/baseball-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">野球・ソフトボール</p>
            <p className="text-xs text-green-800">バット・グローブの握力</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          握力の記録と実際のスポーツ適性の関連についてはこちらで診断できます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均と比べるときに知っておきたいこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ小学5年生でも、4月生まれと3月生まれではほぼ1年の発達差があります。握力は体格や成長のペースに大きく左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、握力は「握力計の握りの幅を正しく調節しているかどうか」で記録が大きく変わる種目でもあります。握りが広すぎたり狭すぎたりすると、本来の力が発揮できません。測定前に握りの幅を何度か確認し、人差し指の第2関節がほぼ直角になる状態を見つけることが大切です。
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
