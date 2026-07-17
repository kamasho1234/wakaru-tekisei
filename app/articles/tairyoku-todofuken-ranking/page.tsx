import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの体力が高い都道府県は？｜令和7年度の全国ランキング',
  description:
    'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」から、都道府県別の体力ランキングを紹介。小学5年生の全国平均と比較したうえで、上位県と下位県をデータで解説します。',
  openGraph: {
    title: '子どもの体力が高い都道府県は？｜令和7年度の全国ランキング',
    description:
      '令和7年度の全国体力テスト、都道府県別ランキング。福井・石川・秋田・大分などが上位。データから見えることと、見えないことを分けて解説します。',
    images: [{ url: '/images/articles/tairyoku-todofuken-ranking.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/tairyoku-todofuken-ranking',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/tairyoku-todofuken-ranking',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの体力が高い都道府県は？｜令和7年度の全国ランキング',
    images: ['/images/articles/tairyoku-todofuken-ranking.jpg'],
  },
};

export default function TairyokuTodofukenRankingPage() {
  return (
    <ArticleLayout
      title="子どもの体力が高い都道府県は？｜令和7年度の全国ランキング"
      heroImage="/images/articles/tairyoku-todofuken-ranking.jpg"
      heroAlt="体力テストで跳躍する小学生"
      publishDate="2026年7月"
      slug="tairyoku-todofuken-ranking"
      description="スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」から、都道府県別の体力ランキングを紹介。小学5年生の全国平均と比較したうえで、上位県と下位県をデータで解説します。"
      tags={['体力テスト', '都道府県別', '全国ランキング', '令和7年度']}
      shareText="令和7年度の全国体力テスト、都道府県別ランキング。子どもの体力は地域でこんなに違う。スポーツ庁公開データから見えることと、見えないことを分けて解説しました。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 都道府県別集計 https://www.mext.go.jp/sports/content/20260113-spt_sseisaku02-000046317_0000001.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁が公表した「令和7年度 全国体力・運動能力、運動習慣等調査」には、都道府県別の体力合計点のデータが含まれています。小学5年生の全国平均は男子53.03点、女子53.98点ですが、実際には都道府県によって大きな差があります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、体力合計点が高い県と低い県をランキング形式で紹介し、その差についてデータそのものから何が読み取れるのか、そして調査からは分からないことが何かを分けて解説します。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">都道府県別ランキングについて</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>小学校5年生（公立校）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">評価方法:</span>
              <span>体力合計点（8種目を10点満点換算、合計80点満点）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">全国平均:</span>
              <span>男子53.03点、女子53.98点</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          男子の上位県と下位県
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学5年生男子の体力合計点を都道府県別に見ると、最高が大分県56.14点、最低が愛知県51.70点です。その差は4.44点に上ります。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-3">上位7県（男子）</p>
            <ol className="space-y-2">
              <li className="text-sm text-green-800 flex justify-between">
                <span>1. 大分県</span>
                <span className="font-bold">56.14</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>2. 石川県</span>
                <span className="font-bold">56.03</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>3. 福井県</span>
                <span className="font-bold">55.78</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>4. 秋田県</span>
                <span className="font-bold">55.31</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>5. 茨城県</span>
                <span className="font-bold">54.99</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>6. 新潟県</span>
                <span className="font-bold">54.95</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>7. 埼玉県</span>
                <span className="font-bold">54.86</span>
              </li>
            </ol>
            <p className="text-xs text-green-700 mt-3 border-t border-green-200 pt-3">
              全国平均53.03点を超える県の筆頭が大分県です。
            </p>
          </div>

          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-3">下位5県（男子）</p>
            <ol className="space-y-2">
              <li className="text-sm text-red-800 flex justify-between">
                <span>47. 愛知県</span>
                <span className="font-bold">51.70</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>46. 山梨県</span>
                <span className="font-bold">51.92</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>45. 神奈川県</span>
                <span className="font-bold">51.98</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>44. 大阪府</span>
                <span className="font-bold">52.00</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>43. 滋賀県</span>
                <span className="font-bold">52.07</span>
              </li>
            </ol>
            <p className="text-xs text-red-700 mt-3 border-t border-red-200 pt-3">
              全国平均より1.3点〜3.3点低い県が下位を占めます。
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          上位7県すべてが全国平均を上回り、下位5県はすべて下回ります。特に差が大きいのが上位と下位の間で、わずか47都道府県の順列なのに4点以上の開きが存在する点です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          女子の上位県と下位県
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          女子の場合、上位が福井県57.62点、下位が神奈川県52.04点です。男子より差がやや小さく、その差は5.58点です。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-3">上位6県（女子）</p>
            <ol className="space-y-2">
              <li className="text-sm text-green-800 flex justify-between">
                <span>1. 福井県</span>
                <span className="font-bold">57.62</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>2. 石川県</span>
                <span className="font-bold">57.25</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>3. 秋田県</span>
                <span className="font-bold">57.00</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>4. 大分県</span>
                <span className="font-bold">56.84</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>5. 茨城県</span>
                <span className="font-bold">56.78</span>
              </li>
              <li className="text-sm text-green-800 flex justify-between">
                <span>6. 埼玉県</span>
                <span className="font-bold">56.59</span>
              </li>
            </ol>
            <p className="text-xs text-green-700 mt-3 border-t border-green-200 pt-3">
              全国平均53.98点に対し、上位6県は全て54点以上です。
            </p>
          </div>

          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-3">下位5県（女子）</p>
            <ol className="space-y-2">
              <li className="text-sm text-red-800 flex justify-between">
                <span>47. 神奈川県</span>
                <span className="font-bold">52.04</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>46. 愛知県</span>
                <span className="font-bold">52.56</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>45. 滋賀県</span>
                <span className="font-bold">52.58</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>44. 京都府</span>
                <span className="font-bold">52.75</span>
              </li>
              <li className="text-sm text-red-800 flex justify-between">
                <span>43. 大阪府</span>
                <span className="font-bold">52.77</span>
              </li>
            </ol>
            <p className="text-xs text-red-700 mt-3 border-t border-red-200 pt-3">
              女子でも大阪・愛知・神奈川が下位を占めます。
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          男女を比べると、上位に顔をそろえるのが福井・石川・秋田・大分・茨城の5県です。これらの県は男女ともに全国平均を大きく上回っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          都道府県差の原因は、この調査からは分かりません
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ランキングが公表されると、必ず「なぜこの差があるのか」という質問が出ます。ネット上では「雪国だから」「都市部だから」といった説明が見かけられますが、これらはこの調査では調べられていません。大切なのは、データから何が言えるのか、そして言えないのかを区別することです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">この調査が示すこと</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800">・各県の体力合計点がいくらか（数値の事実）</li>
            <li className="text-sm text-amber-800">・全国平均との比較（相対的な位置）</li>
            <li className="text-sm text-amber-800">・昨年度からの変化（前年比）</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2">この調査では調べられていないこと</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・差の原因（気候、教育方針、スポーツ環境など）</li>
            <li className="text-sm text-gray-700">・各県内のばらつき（県内でも地域差がある可能性）</li>
            <li className="text-sm text-gray-700">・他の要因とのクロス集計（経済状況、学校の施設など）</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">つまり、「福井県の子どもが体力高いのはなぜ」という問いには、この調査のデータだけでは答えられません。</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「〜だから高い」という説明は、別の調査・別の根拠に基づいているはずです。一つのデータの意味を過大解釈しないことが、データリテラシーの第一歩です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          上位県と下位県の特徴を見る（データから読める範囲で）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          理由は分かりませんが、データから見えるパターンはあります。それは「誰が上位なのか」という事実です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">上位県の傾向</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男女共に上位:</span>
              <span>福井・石川・秋田・大分・茨城</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男女とも全国平均超過:</span>
              <span>新潟・埼玉も同じパターン</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">地域的な偏り:</span>
              <span>北陸・東北・九州勢が目立つ傾向は見える</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-3">下位県の傾向</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男女共に下位:</span>
              <span>愛知・大阪・滋賀・神奈川</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男女とも全国平均以下:</span>
              <span>これらの県は両性とも下位に位置</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">地域的な偏り:</span>
              <span>太平洋沿岸・都市部勢が目立つ傾向</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          しかし「都市部だから」「太平洋側だから」という説明は、この調査の範囲を超えています。そこから先は、別の調査や別の視点が必要です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          自分の県との比較方法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんが受けた体力テストの結果と全国平均を比べるなら、単純に点数で見ればよいです。ただし気を付けたいのは、平均は県全体のもので、個人差と成長段階の差が大きいという点です。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="font-bold text-gray-900 mb-2">平均を見るときのポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・全国平均より低い = 問題があるわけではない（4月生まれと3月生まれの1年差を考慮）</li>
            <li className="text-sm text-gray-700">・都道府県平均を上回る = その県内では体力が高めという相対的な位置付け</li>
            <li className="text-sm text-gray-700">・重要なのは「今年と来年の伸び」（個人の成長トレンド）</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          記事のまとめ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          令和7年度の都道府県別ランキングは、福井・石川・秋田・大分・茨城が上位を占め、愛知・大阪・滋賀・神奈川が下位です。その差は数点ですが、統計的には有意な差です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          ただし、この差がなぜ生じるのかは、この調査からは分かりません。各地域の教育・運動環境・社会経済的条件など、多くの要因が関係する可能性があります。当サイトの診断では、お子さんの個別の記録から全国平均との比較と適性判定ができます。都道府県の平均より、本人の伸びの方が大切です。
        </p>
      </div>
    </ArticleLayout>
  );
}
