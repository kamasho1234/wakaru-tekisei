import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '運動が好きな子は何割？｜「運動嫌い」のデータと体力の関係',
  description:
    'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」から、運動が好きな子・嫌いな子の割合を学年別・男女別で紹介。体力が高い子との関係も解説します。',
  openGraph: {
    title: '運動が好きな子は何割？｜「運動嫌い」のデータと体力の関係',
    description:
      '小5の72.8%は運動が好き。でも女子は54.1%。中学で運動嫌いが増える傾向も明らかに。スポーツ庁データから見える子どもの運動意欲の実態。',
    images: [{ url: '/images/articles/undo-suki-kirai-data.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/undo-suki-kirai-data',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/undo-suki-kirai-data',
  },
  twitter: {
    card: 'summary_large_image',
    title: '運動が好きな子は何割？｜「運動嫌い」のデータと体力の関係',
    images: ['/images/articles/undo-suki-kirai-data.jpg'],
  },
};

export default function UndoSukiKiraiDataPage() {
  return (
    <ArticleLayout
      title="運動が好きな子は何割？｜「運動嫌い」のデータと体力の関係"
      heroImage="/images/articles/undo-suki-kirai-data.jpg"
      heroAlt="スポーツをしている子どもたち"
      publishDate="2026年7月"
      slug="undo-suki-kirai-data"
      description="スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」から、運動が好きな子・嫌いな子の割合を学年別・男女別で紹介。体力が高い子との関係も解説します。"
      tags={['運動意欲', 'アンケート', '子どもの意識', '令和7年度']}
      shareText="小5の72.8%は『運動が好き』。でも女子は54.1%で、男女で20ポイント差。中2では運動嫌いが増える傾向も。スポーツ庁データから見える子どもの運動意欲。 #子育て #運動"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 児童生徒質問紙調査 Excel（小学校）https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_001002.xlsx',
        '同 児童生徒質問紙調査 Excel（中学校）https://www.mext.go.jp/sports/content/20260113-spt_sseisaku02-000046317_0000102.xlsx',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「運動が好きですか？」という単純な質問に、子どもたちはどう答えるか。スポーツ庁の調査では、児童生徒の運動に対する意識を「好き」「やや好き」「ややきらい」「きらい」の4段階で尋ねています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          結果は学年と性別で大きく異なります。小学5年生の男子では70%以上が「運動が好き」と答える一方、女子では54%に止まります。そして、その好嫌と体力の関連についても、公式データが語っています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">この調査について</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">調査項目:</span>
              <span>「運動やスポーツをすることは好きですか」（質問紙調査Q1）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">回答選肢:</span>
              <span>好き、やや好き、ややきらい、きらいの4段階</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>小学5年生と中学2年生（全国調査）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          小学5年生：男女で20ポイント差
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学5年生の「運動が好き」という回答を見ると、男子72.8%に対し女子54.1%です。20ポイント以上の差があります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">回答</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">小5男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">小5女子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">男女差</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">好き</td>
                <td className="px-3 py-2 text-center text-green-700 font-bold">72.8%</td>
                <td className="px-3 py-2 text-center text-green-700 font-bold">54.1%</td>
                <td className="px-3 py-2 text-center text-red-600 font-bold">-18.7pp</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">やや好き</td>
                <td className="px-3 py-2 text-center text-gray-600">20.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">31.7%</td>
                <td className="px-3 py-2 text-center text-blue-600">+11.0pp</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ややきらい</td>
                <td className="px-3 py-2 text-center text-gray-600">4.5%</td>
                <td className="px-3 py-2 text-center text-gray-600">10.0%</td>
                <td className="px-3 py-2 text-center text-blue-600">+5.5pp</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">きらい</td>
                <td className="px-3 py-2 text-center text-gray-600">2.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">4.2%</td>
                <td className="px-3 py-2 text-center text-blue-600">+2.2pp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">小5男子</p>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">好き+やや好き</span>
                </p>
                <p className="text-lg font-bold text-blue-700">93.5%</p>
              </div>
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">ややきらい+きらい</span>
                </p>
                <p className="text-lg font-bold text-red-600">6.5%</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">小5女子</p>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">好き+やや好き</span>
                </p>
                <p className="text-lg font-bold text-blue-700">85.8%</p>
              </div>
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">ややきらい+きらい</span>
                </p>
                <p className="text-lg font-bold text-red-600">14.2%</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          「好き」と「やや好き」を合わせると、小5男子93.5%、女子85.8%が運動に前向きです。ただし女子では1割以上が「ややきらい」「きらい」と答えており、この比率が課題です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">小5では運動嫌いはまだ少ない</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            「きらい」と答えたのは男子2.0%、女子4.2%。多くの子どもがまだ運動に興味を持つ段階です。ただし女子は男子の2倍以上が「きらい」と回答している点が注視されます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学2年生：思春期の変化が明らか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学2年生になると、運動に対する意識が変わります。特に女子で「ややきらい」と「きらい」が増えるのが目立ちます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">回答</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中2男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中2女子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">男女差</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">好き</td>
                <td className="px-3 py-2 text-center text-green-700 font-bold">66.0%</td>
                <td className="px-3 py-2 text-center text-green-700 font-bold">43.0%</td>
                <td className="px-3 py-2 text-center text-red-600 font-bold">-23.0pp</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">やや好き</td>
                <td className="px-3 py-2 text-center text-gray-600">24.9%</td>
                <td className="px-3 py-2 text-center text-gray-600">34.2%</td>
                <td className="px-3 py-2 text-center text-blue-600">+9.3pp</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">ややきらい</td>
                <td className="px-3 py-2 text-center text-gray-600">6.1%</td>
                <td className="px-3 py-2 text-center text-red-600">15.4%</td>
                <td className="px-3 py-2 text-center text-red-600">+9.3pp</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">きらい</td>
                <td className="px-3 py-2 text-center text-gray-600">2.9%</td>
                <td className="px-3 py-2 text-center text-red-600">7.4%</td>
                <td className="px-3 py-2 text-center text-red-600">+4.5pp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">中2男子</p>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">好き+やや好き</span>
                </p>
                <p className="text-lg font-bold text-blue-700">90.9%</p>
              </div>
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">ややきらい+きらい</span>
                </p>
                <p className="text-lg font-bold text-red-600">9.0%</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-3">中2女子</p>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">好き+やや好き</span>
                </p>
                <p className="text-lg font-bold text-blue-700">77.2%</p>
              </div>
              <div>
                <p className="text-sm text-blue-800 flex gap-2">
                  <span className="font-bold">ややきらい+きらい</span>
                </p>
                <p className="text-lg font-bold text-red-600">22.8%</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          中2女子で特に注目すべき点は、「ややきらい」が15.4%、「きらい」が7.4%で、合わせて22.8%が運動に対し否定的です。小5女子の14.2%から8.6ポイント増加しており、思春期の女子で運動離れが顕著です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">男女差が中学で広がる</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-2">
            小5では「好き」で18.7ポイント差でしたが、中2では23.0ポイントに広がります。男子は66.0%がまだ「好き」と答える一方、女子は43.0%まで低下。中学の思春期が、特に女子の運動意欲に影響を与えている可能性があります。
          </p>
          <p className="text-sm text-amber-800">
            スポーツ庁は「『運動は好き』と答えた児童生徒は、小中学校男子で増加傾向、小中学校女子で減少傾向である」と指摘しており、この低下はトレンドとして認識されています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動好きな子は体力が高いのか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁の公式コメントは明確です。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「『運動は好き』と回答した児童生徒は、それ以外の児童生徒と比べ体力合計点が高い。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          ただし、ここで大切なのは「相関がある」ことと「因果関係がある」ことは異なるという点です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">データから読める2つの可能性</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">可能性1:</span>
              <span>運動が好きだから、自分から練習したり、試合に出たりして体力が高くなる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">可能性2:</span>
              <span>体力が高い子ほど、学校の体育や運動で成功体験を得て、運動が好きになる</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          この調査では「好きだから上手い」なのか「上手いから好きになる」のか、そのどちらが先なのかは分かりません。ただし、運動に対する肯定的な態度と体力が関連していることは確実です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動嫌いの子どもをどう見るか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          運動が「ややきらい」「きらい」と答えた子は、全体ではまだ少数派です。しかし重要なのは、その割合が学年と性別によって変わるという点です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">グループ</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">ややきらい+きらい</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小5男子</td>
                <td className="px-3 py-2 text-center text-gray-600">6.5%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小5女子</td>
                <td className="px-3 py-2 text-center text-red-600">14.2%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中2男子</td>
                <td className="px-3 py-2 text-center text-gray-600">9.0%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中2女子</td>
                <td className="px-3 py-2 text-center text-red-600">22.8%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2">読み取れるパターン</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">小5女子の14.2%が「ややきらい」「きらい」。小5男子の6.5%より高い</li>
            <li className="text-sm text-gray-700">中2女子の22.8%が「ややきらい」「きらい」。5人に1人以上が運動に否定的</li>
            <li className="text-sm text-gray-700">男子は小5から中2への変化が小さい（6.5% → 9.0%）が、女子は大幅に増加（14.2% → 22.8%）</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          運動嫌いが「すべて悪い」わけではありません。ただし、女子が学年と共に運動から離れていく傾向は、スポーツ環境や指導法に改善の余地があることを示唆しています。当サイトの診断では、お子さんが「自分に向いているスポーツ」を見つけるお手伝いができます。運動全般が嫌いでも、自分に合ったスポーツなら好きになる可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          意識と現実のギャップ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          興味深いのは、「運動は好き」と答える子の割合（意識）と、実際に体力テストで高い記録を残す子の割合（現実）のギャップです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">例えば小5男子の場合</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800">・「運動が好き」と答える子：72.8%</li>
            <li className="text-sm text-blue-800">・体力合計点がA評価（65点以上）の子：11.6%</li>
            <li className="text-sm text-blue-800">・つまり、6人に1人は「好きだけど成績は平均以下」という可能性</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「好きだから体力がある」わけではなく、「好きな子の中でも、体力差は大きい」ということです。好きなだけでなく、その子の適性に合ったトレーニングやスポーツ選択が体力向上につながります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：運動意識と体力の実態
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          令和7年度のデータから分かること：
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-4">
          <p className="font-bold text-green-900 mb-2">小学5年生の段階では</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-green-800">・男子72.8%、女子54.1%が「運動が好き」</li>
            <li className="text-sm text-green-800">・大多数は運動に前向き（90%前後が好き以上）</li>
            <li className="text-sm text-green-800">・ただし女子は既に運動嫌いが1割強</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">中学2年生で変わる</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-red-800">・男子66.0%、女子43.0%が「運動が好き」</li>
            <li className="text-sm text-red-800">・特に女子で運動嫌いが急増（22.8%が否定的）</li>
            <li className="text-sm text-red-800">・思春期の性差が顕著になる段階</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          当サイトの診断ツールは、こうした意識や一般的な体力データだけでなく、お子さんの個別の8種目の成績から、本人の強みと向いているスポーツを特定します。「運動が好きか嫌いか」ではなく、「自分に合ったスポーツが何か」を知ることが、運動人生の充実につながります。
        </p>
      </div>
    </ArticleLayout>
  );
}
