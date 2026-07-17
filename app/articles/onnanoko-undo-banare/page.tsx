import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '女の子の運動離れは本当か｜データで見る「運動が好き」の男女差',
  description:
    'スポーツ庁の令和7年度全国体力調査データから、「運動が好き」と答えた割合の男女差を分析。小5女子54.1%、中2女子43.0%。なぜ差があるのか、その原因と対策を公的データで解説します。',
  openGraph: {
    title: '女の子の運動離れは本当か｜データで見る「運動が好き」の男女差',
    description:
      '「運動が好き」の割合に見る女の子の運動離れ。スポーツ庁の原典データで、小5から中2にかけての変化と、男女の差を分析します。',
    images: [{ url: '/images/articles/onnanoko-undo-banare.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/onnanoko-undo-banare',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/onnanoko-undo-banare',
  },
  twitter: {
    card: 'summary_large_image',
    title: '女の子の運動離れは本当か｜データで見る「運動が好き」の男女差',
    images: ['/images/articles/onnanoko-undo-banare.jpg'],
  },
};

export default function OnnaokoUndoBanare() {
  return (
    <ArticleLayout
      title="女の子の運動離れは本当か｜データで見る「運動が好き」の男女差"
      heroImage="/images/articles/onnanoko-undo-banare.jpg"
      heroAlt="運動する女の子"
      publishDate="2026年7月"
      slug="onnanoko-undo-banare"
      description="スポーツ庁の令和7年度全国体力調査データから、「運動が好き」と答えた割合の男女差を分析。小5女子54.1%、中2女子43.0%。原因と対策を公的データで解説します。"
      tags={['女の子', '運動離れ', '公的データ', '性差']}
      shareText="「運動が好き」という回答に隠れた男女差。小5女子54.1%が、中2では43.0%に低下。スポーツ庁データで読む女の子の運動離れ。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 小学校児童質問紙 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_001002.xlsx',
        '同 中学校生徒質問紙 https://www.mext.go.jp/sports/content/20260113-spt_sseisaku02-000046317_0000102.xlsx',
        '同 小学校実技結果・経年変化 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_000801.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「最近、女の子の運動離れが話題になっている」という言葉を聞いたことがあるかもしれません。本当のところはどうなのでしょうか。スポーツ庁が令和7年12月に公表した「全国体力・運動能力、運動習慣等調査」のデータを見ると、その実態が浮かび上がります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この調査は全国の小学5年生と中学2年生を対象にした悉皆調査です。単なる運動能力の測定ではなく、「運動やスポーツをすることが好きか」という子どもたちの気持ちも調べています。その結果から、女の子の意識の変化が明確に見えてきます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          データで見る「運動が好き」の割合
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「運動やスポーツをすることは好きですか」という質問に、どの程度の子どもたちが「好き」と答えたのか、その数字を見てみましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年・性別</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">好き</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">やや好き</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">ややきらい</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">きらい</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小5男子</td>
                <td className="px-3 py-2 text-center text-gray-600 font-bold">72.8%</td>
                <td className="px-3 py-2 text-center text-gray-600">20.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">4.5%</td>
                <td className="px-3 py-2 text-center text-gray-600">2.0%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小5女子</td>
                <td className="px-3 py-2 text-center text-red-600 font-bold">54.1%</td>
                <td className="px-3 py-2 text-center text-gray-600">31.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">10.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">4.2%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中2男子</td>
                <td className="px-3 py-2 text-center text-gray-600 font-bold">66.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">24.9%</td>
                <td className="px-3 py-2 text-center text-gray-600">6.1%</td>
                <td className="px-3 py-2 text-center text-gray-600">2.9%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中2女子</td>
                <td className="px-3 py-2 text-center text-red-600 font-bold">43.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">34.2%</td>
                <td className="px-3 py-2 text-center text-gray-600">15.4%</td>
                <td className="px-3 py-2 text-center text-gray-600">7.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">注目すべき数字</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男子の変化:</span>
              <span>小5から中2で72.8%→66.0%（6.8ポイント低下）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">女子の変化:</span>
              <span>小5から中2で54.1%→43.0%（11.1ポイント低下）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">中2時点の差:</span>
              <span>女子43.0% vs 男子66.0%で、23ポイントの開き</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          小学5年生時点でも男女の差（18.7ポイント）は顕著ですが、中学2年生になると、その差はさらに広がります。女の子の「運動離れ」は、単なる言い伝えではなく、データにはっきり表れているのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動に費やす時間に見る大きな差
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「好き」と言う気持ちと、実際に運動に使う時間は、どのような関係にあるのでしょうか。体育の授業を除く1週間の総運動時間を見ると、さらに大きな男女差が浮かびます。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">小学5年生の週間運動時間（体育の授業を除く）</p>
          <div className="text-center">
            <div className="text-sm text-blue-800 mb-2">男子 522.93分（1週間）</div>
            <div className="text-sm text-blue-800 mb-3">女子 315.17分（1週間）</div>
            <div className="text-xs text-blue-600 font-bold">差: 週207.76分（約3時間28分）</div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          女子の運動時間は男子の約60%にとどまっています。これは「運動が好き」という気持ちの差だけでなく、実際の行動にも反映されているということです。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          では、どの曜日に差が大きいのでしょうか。曜日別に見ると、特に休日の差が顕著です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">曜日</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">男子（分）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">女子（分）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">差（分）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">月曜</td>
                <td className="px-3 py-2 text-right text-gray-600">52.13</td>
                <td className="px-3 py-2 text-right text-gray-600">34.98</td>
                <td className="px-3 py-2 text-right text-gray-600">17.15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">火曜</td>
                <td className="px-3 py-2 text-right text-gray-600">55.27</td>
                <td className="px-3 py-2 text-right text-gray-600">36.03</td>
                <td className="px-3 py-2 text-right text-gray-600">19.24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">水曜</td>
                <td className="px-3 py-2 text-right text-gray-600">61.44</td>
                <td className="px-3 py-2 text-right text-gray-600">41.82</td>
                <td className="px-3 py-2 text-right text-gray-600">19.62</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">木曜</td>
                <td className="px-3 py-2 text-right text-gray-600">57.13</td>
                <td className="px-3 py-2 text-right text-gray-600">37.98</td>
                <td className="px-3 py-2 text-right text-gray-600">19.15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">金曜</td>
                <td className="px-3 py-2 text-right text-gray-600">56.20</td>
                <td className="px-3 py-2 text-right text-gray-600">38.96</td>
                <td className="px-3 py-2 text-right text-gray-600">17.24</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">土曜</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">125.52</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">68.05</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">57.47</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">日曜</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">120.11</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">58.91</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">61.20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">休日の過ごし方に大きな差</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            平日はどの曜日も男女差は17〜20分程度ですが、土日になると一気に57〜61分の大きな差が開きます。男子が外遊びやスポーツをしている間に、女子は別の時間の使い方をしているということが推測されます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ庁も「女子で減少傾向」と明言
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          このデータの背景にある傾向について、スポーツ庁は調査報告書で以下のように述べています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            「『運動は好き』と答えた児童生徒は、小中学校男子で増加傾向、小中学校女子で減少傾向である。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          さらに、体育の授業そのものについても同じ傾向が見られます。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            「『体育・保健体育の授業は楽しい』と答えた児童生徒は、小中学校男子で増加傾向、小中学校女子で減少傾向である。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          男子では小学生から中学生にかけて「運動が好き」という気持ちが増えているのに対し、女子では減っているのです。授業の楽しさについても、同じ方向性が見られます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体力合計点の推移から見る実態
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          このような気持ちや行動の変化は、実際の体力データにも表れています。小学5年生の女子の体力合計点の長期推移を見てみましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">体力合計点</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度</td>
                <td className="px-3 py-2 text-right text-gray-600 font-bold">55.90（ピーク）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和元年度</td>
                <td className="px-3 py-2 text-right text-gray-600">55.59</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和3年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.66</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.32</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和5年度</td>
                <td className="px-3 py-2 text-right text-gray-600">54.29</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和6年度</td>
                <td className="px-3 py-2 text-right text-gray-600">53.93（最低）</td>
              </tr>
              <tr className="border-b bg-blue-50">
                <td className="px-3 py-2 text-gray-800 font-bold">令和7年度</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">53.98</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          平成30年度の55.90がピークで、以来一度も戻っていません。令和6年度の53.93が最低でしたが、令和7年度はわずかに0.05点上がっただけです。男子が徐々に回復しているのとは対照的に、女子の体力合計点は足踏み状態が続いています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          どの運動能力が落ちているのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          女子の体力が全体的に低下しているのであれば、すべての種目で悪くなっているはずです。しかし、実際には種目によって傾向が異なります。平成20年度と令和7年度を比較してみましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目（小5女子）</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">平成20年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">令和7年度</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">変化</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ソフトボール投げ</td>
                <td className="px-3 py-2 text-right text-gray-600">14.85 m</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">13.10 m</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">↓ 1.75 m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">握力</td>
                <td className="px-3 py-2 text-right text-gray-600">16.45 kg</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">15.61 kg</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">↓ 0.84 kg</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">50m走</td>
                <td className="px-3 py-2 text-right text-gray-600">9.64 秒</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">9.77 秒</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">↓ 0.13秒</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">立ち幅とび</td>
                <td className="px-3 py-2 text-right text-gray-600">145.77 cm</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">142.39 cm</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">↓ 3.38 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">長座体前屈</td>
                <td className="px-3 py-2 text-right text-gray-600">36.64 cm</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">38.17 cm</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">↑ 1.53 cm</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">上体起こし</td>
                <td className="px-3 py-2 text-right text-gray-600">17.63 回</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">18.36 回</td>
                <td className="px-3 py-2 text-right text-green-600 font-bold">↑ 0.73 回</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">二つの傾向</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">低下:</span>
              <span>投げ能力（ソフトボール投げ）、筋力（握力）、瞬発力（50m走・立ち幅とび）が下がった</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">向上:</span>
              <span>柔軟性（長座体前屈）と筋持久力（上体起こし）は上がった</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          スポーツ庁も、種目別の傾向として「『ボール投げ』は女子で横ばい」「『握力』は女子で低下傾向」と述べています。運動離れによる「筋力や瞬発力の低下」と、別の活動（ヨガやダンスなど）による「柔軟性の向上」という、二つの流れが同時に進んでいる可能性が考えられます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          なぜ差が生まれるのか——調査からは分かりません
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここまでのデータから「女の子の運動離れ」が現実であることは明らかです。しかし「なぜそんなことが起きているのか」という原因については、この調査からは直接的な答えは得られません。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">原因の仮説は、この調査からは検証できません</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            「思春期だから」「体育の授業が原因」「社会的プレッシャーがある」といった説明は、ネット上でよく見かけます。ですが、これらはすべて推測です。本調査は「何が起きているのか」を示していますが、「なぜ起きているのか」までは特定していません。
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            原因を知るには、別の調査や研究が必要になります。当サイトでは、根拠のない理由付けは避け、原典のデータが示すものだけをお伝えしています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          ただ、データから一つ推測できることがあります。「運動時間が長い子ほど、体力合計点が高くなる傾向にある」というのが、スポーツ庁の報告です。であれば、休日の運動時間を増やすことが、体力向上の第一歩になる可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親ができることは何か
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          調査データだけからは答えが出ませんが、スポーツ庁は次のような関連性を指摘しています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「『運動時間が長い』児童生徒ほど、体力合計点が高くなる傾向にある。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          また、別の重要な指摘もあります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            「『運動は好き』と回答した児童生徒は、それ以外の児童生徒と比べ体力合計点が高い。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          つまり、「運動をする」だけでなく「運動を好きになる」ことが、体力向上につながるということです。だからこそ、「勉強だから」という理由で運動を強制するのではなく、本人が「やってみたい」と思えるスポーツを見つけることが大切かもしれません。小学5年生から中学2年生のあいだに、女の子が運動から離れていく流れを変えるには、本人の気持ちに寄り添うことが第一歩なのではないでしょうか。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          お子さんの適性を知る
        </h2>
        <p className="text-gray-700 leading-relaxed">
          当サイトの「わかる適性」では、新体力テストの記録を入力するだけで、全国平均との比較はもちろん、お子さんの運動能力の特徴と、向いているスポーツの傾向を診断できます。「やってみたい」という気持ちはどこから始まるのか。それは「自分がどんなことに向いているのか」を知ることから、かもしれません。
        </p>
      </div>
    </ArticleLayout>
  );
}
