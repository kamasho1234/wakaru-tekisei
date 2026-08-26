import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '上体起こしの平均は？小学生・中学生の全国平均と得点表',
  description:
    '上体起こし（腹筋）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子19.45回・女子18.36回、中2男子25.99回・女子21.62回。何回で何点になるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。',
  openGraph: {
    title: '上体起こしの平均は？小学生・中学生の全国平均と得点表',
    description:
      '上体起こしの全国平均を原典データで解説。小5男子19.45回・女子18.36回。何回で何点かの得点表と、実施要項に基づく正しいやり方。',
    images: [{ url: '/images/articles/sit-up-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sit-up-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sit-up-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: '上体起こしの平均は？小学生・中学生の全国平均と得点表',
    images: ['/images/articles/sit-up-kids.jpg'],
  },
};

export default function SitUpKidsPage() {
  return (
    <ArticleLayout
      title="上体起こしの平均は？小学生・中学生の全国平均と得点表"
      heroImage="/images/articles/sit-up-kids.jpg"
      heroAlt="マットの上で上体起こしに取り組む小学生"
      publishDate="2026年8月"
      slug="sit-up-kids"
      description="上体起こし（腹筋）の全国平均を、スポーツ庁の令和7年度調査の原典データで解説。小5男子19.45回・女子18.36回、中2男子25.99回・女子21.62回。何回で何点になるかの項目別得点表と、文部科学省の実施要項に基づく正しいやり方もまとめました。"
      tags={['上体起こし', '体力テスト', '全国平均', '筋力']}
      shareText="上体起こしの全国平均は小5男子19.45回・女子18.36回。何回で何点かの得点表と、実施要項に基づく正しいやり方をまとめました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 報告書「項目別得点表・総合評価基準表」 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000905.pdf',
        '文部科学省「新体力テスト実施要項（6歳〜11歳対象）」 https://www.mext.go.jp/a_menu/sports/stamina/05030101/001.pdf',
        '文部科学省「新体力テスト実施要項」ページ https://www.mext.go.jp/a_menu/sports/stamina/03040901.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          上体起こしは、新体力テストの8種目のうち「筋力・筋持久力（腹筋群）」を測る種目です。マットの上で仰臥姿勢から両肘と両大腿部がつくまで上体を起こし、30秒間でできるだけ多く繰り返します。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」の原典データと、文部科学省の実施要項から、全国平均・得点の基準・正しいやり方をまとめます。数値はすべて原典の値をそのまま使っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          上体起こしの全国平均（令和7年度）
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
                <td className="px-3 py-2 text-right text-gray-600">19.45 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.36 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学2年生</td>
                <td className="px-3 py-2 text-right text-gray-600">25.99 回</td>
                <td className="px-3 py-2 text-right text-gray-600">21.62 回</td>
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
          新体力テストは、各種目の記録を10点満点に換算して合計します（8種目で80点満点）。上体起こしの換算表は次のとおりです。
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
                <td className="px-3 py-2 text-right text-gray-600">26回以上</td>
                <td className="px-3 py-2 text-right text-gray-600">23回以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">9点</td>
                <td className="px-3 py-2 text-right text-gray-600">23〜25</td>
                <td className="px-3 py-2 text-right text-gray-600">20〜22</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">8点</td>
                <td className="px-3 py-2 text-right text-gray-600">20〜22</td>
                <td className="px-3 py-2 text-right text-gray-600">18〜19</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">7点</td>
                <td className="px-3 py-2 text-right text-gray-600">18〜19</td>
                <td className="px-3 py-2 text-right text-gray-600">16〜17</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">6点</td>
                <td className="px-3 py-2 text-right text-gray-600">15〜17</td>
                <td className="px-3 py-2 text-right text-gray-600">14〜15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5点</td>
                <td className="px-3 py-2 text-right text-gray-600">12〜14</td>
                <td className="px-3 py-2 text-right text-gray-600">12〜13</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4点</td>
                <td className="px-3 py-2 text-right text-gray-600">9〜11</td>
                <td className="px-3 py-2 text-right text-gray-600">9〜11</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3点</td>
                <td className="px-3 py-2 text-right text-gray-600">6〜8</td>
                <td className="px-3 py-2 text-right text-gray-600">6〜8</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2点</td>
                <td className="px-3 py-2 text-right text-gray-600">3〜5</td>
                <td className="px-3 py-2 text-right text-gray-600">3〜5</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1点</td>
                <td className="px-3 py-2 text-right text-gray-600">2回以下</td>
                <td className="px-3 py-2 text-right text-gray-600">2回以下</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同調査 報告書「項目別得点表」（小学校）</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">中学校の10点ライン</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            中学校の得点表では、10点は男子35回以上・女子29回以上です。小学校の10点ライン（男子26回以上・女子23回以上）から一気に上がります。中学生になると全身の筋力が大きく発達するため、基準もそれに合わせて設定されています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          全国平均の小5男子19.45回、女子18.36回は、どちらも得点表では7点にあたります。8種目の合計点と総合評価の見方は
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
            <li className="text-sm text-gray-700">・マット上で仰臥姿勢をとり、両手を軽く握り、両腕を胸の前で組む</li>
            <li className="text-sm text-gray-700">・両膝の角度を90度に保つ</li>
            <li className="text-sm text-gray-700">・補助者は被測定者の両膝をおさえ、固定する</li>
            <li className="text-sm text-gray-700">・「始め」の合図で、仰臥姿勢から両肘と両大腿部がつくまで上体を起こす</li>
            <li className="text-sm text-gray-700">・すばやく開始時の仰臥姿勢に戻す</li>
            <li className="text-sm text-gray-700">・30秒間、この動作をできるだけ多く繰り返す</li>
            <li className="text-sm text-gray-700">・仰臥姿勢に戻したとき、背中がマットにつかない場合は回数としない</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「新体力テスト実施要項（6歳〜11歳対象）」</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">実施は1回のみ：やり直しがきかない</p>
          <p className="text-sm text-green-800 leading-relaxed">
            上体起こしは、他の種目（長座体前屈や立ち幅とびなど）と異なり、実施は1回だけです。2回実施してよい方の記録をとる種目もありますが、上体起こしはそうではありません。測定前に正しい動きを十分に練習してから臨むことが大切です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          上体起こしの成功のカギは、補助者の役割にあります。補助者は被測定者の両膝をしっかり固定し、下肢が動かないようにしなければ、記録は伸びません。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">背中がマットに付かない動きは無効</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            仰臥姿勢に戻すときに、背中（肩甲骨）がマットに完全に付かない「浮いた状態」での繰り返しは、記録にカウントされません。完全に背中を付ける動作が実施要項の条件です。半端な姿勢で繰り返しても回数は増えません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          測定時の注意事項
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          実施要項に書かれている、実施前後の準備と注意事項です。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・被測定者と補助者の頭がぶつからないように注意する</li>
            <li className="text-sm text-gray-700">・被測定者のメガネは、はずすようにする</li>
            <li className="text-sm text-gray-700">・補助者は被測定者より体格が大きい者が望ましい</li>
            <li className="text-sm text-gray-700">・テスト実施前のウォーミングアップで、腹部周辺のストレッチングを十分に行う</li>
            <li className="text-sm text-gray-700">・テスト終了後は、ゆっくりとした運動等によるクーリングダウンをする</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 同実施要項「実施上の注意」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          体調がすぐれない日や、腰に不安のある場合は無理をさせない種目です。健康状態に十分注意し、医師の治療を受けている者や実施が困難と認められる者については、実施をスキップすることが適切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          上体起こしの記録は17年でどう変わったか
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
                <td className="px-3 py-2 text-right text-gray-600">19.12 回</td>
                <td className="px-3 py-2 text-right text-gray-600">17.63 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600">19.94 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.96 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">19.80 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.95 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">18.89 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.07 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">18.86 回</td>
                <td className="px-3 py-2 text-right text-gray-600">17.97 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">19.00 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.05 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">19.19 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.16 回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和7年度</td>
                <td className="px-3 py-2 text-right text-gray-600">19.45 回</td>
                <td className="px-3 py-2 text-right text-gray-600">18.36 回</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">※令和2年度は新型コロナのため調査中止。出典: 同調査</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男子は平成30年度の19.94回がピークで、令和4年度の18.86回まで下がり、その後わずかに回復しています。女子は平成30年度の18.96回から数値が下がり、令和4年度の17.97回が最も低い値です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">上体起こしの低下傾向を示す公的コメント</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁の報告書では、握力やボール投げなど複数の種目について「低下傾向」と明記されていますが、上体起こしについては低下傾向の種目として記載されていません。平成20年度から令和7年度の数値を見ると変動がありますが、公的には「低下傾向」と断定されていない種目です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体幹を使う競技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          上体起こしが得意な子は、体幹を安定させる必要がある競技で力を発揮しやすい傾向があります。ただし、どの競技も複数の体力要素の組み合わせで成り立っているため、上体起こしの記録だけで適性は決まりません。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/swimming-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">水泳</p>
            <p className="text-xs text-green-800">体幹の安定が重要</p>
          </Link>
          <Link href="/articles/judo-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">柔道</p>
            <p className="text-xs text-green-800">姿勢維持に体幹が必要</p>
          </Link>
          <Link href="/articles/gymnastics-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">体操</p>
            <p className="text-xs text-green-800">高度な体幹コントロール</p>
          </Link>
          <Link href="/articles/martial-arts-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">格闘技</p>
            <p className="text-xs text-green-800">力を伝える体幹が基本</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          上体起こしの記録と、実際のスポーツ適性との関連についてはこちらで診断できます。
          <Link href="/articles/kids-core-training" className="text-blue-600 font-bold hover:underline">子どもの体幹トレーニング</Link>
          も参考になります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平均と比べるときに知っておきたいこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ小学5年生でも、4月生まれと3月生まれではほぼ1年の発達差があります。筋力・筋持久力は体格や成長のペースに大きく左右されるため、平均を下回っていること自体が問題を示すわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、上体起こしは「正しい補助と正しい動きを知っているかどうか」で回数が大きく変わる種目でもあります。腹筋の力がなくても、補助者の固定がしっかりしていれば記録は伸びます。測定前に動作を十分に練習することが大切です。
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
