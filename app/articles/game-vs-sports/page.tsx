import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものゲーム時間は平均どれくらい？｜体力との関係を公的データで見る',
  description:
    '「子どもがゲームばかりしている」という悩みは多いですが、実態はどうなのか。スポーツ庁とこども家庭庁の公的データから、スクリーンタイムと体力の関係を解説します。相関と因果の違いも重要です。',
  openGraph: {
    title: '子どものゲーム時間は平均どれくらい？｜体力との関係を公的データで見る',
    description:
      'スクリーンタイムの実態と、体力との関係を公的調査から解説。「ゲームのせいで体力が低い」という表現が正確でない理由を示します。',
    images: [{ url: '/images/articles/game-vs-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/game-vs-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/game-vs-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものゲーム時間は平均どれくらい？｜体力との関係を公的データで見る',
    images: ['/images/articles/game-vs-sports.jpg'],
  },
};

export default function GameVsSportsPage() {
  return (
    <ArticleLayout
      title="子どものゲーム時間は平均どれくらい？｜体力との関係を公的データで見る"
      heroImage="/images/articles/game-vs-sports.jpg"
      heroAlt="ゲームをする子どもと外で遊ぶ子どもの対比"
      publishDate="2026年7月"
      slug="game-vs-sports"
      description="「子どもがゲームばかりしている」という悩みは多いですが、実態はどうなのか。スポーツ庁とこども家庭庁の公的データから、スクリーンタイムと体力の関係を解説します。相関と因果の違いも重要です。"
      tags={['ゲーム時間', 'スクリーンタイム', '体力', '公的データ']}
      shareText="小学5年生の42.5%が平日3時間以上のスクリーンタイム。でも「ゲームのせいで体力が低い」とは言い切れません。相関と因果は別です。 #子育て #ゲーム"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        'こども家庭庁「青少年のインターネット利用環境実態調査 令和7年度版」 https://www.cfa.go.jp/policies/youth-kankyou/internet_research/results-etc/r07',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子、ゲームばかりしていて、運動しないんです」という悩みを聞くことは多いです。たしかにスマートフォンやゲーム機の普及で、子どもがスクリーンに接する時間は増えています。では、実際にどのくらいの子どもがどのくらいの時間、ゲームやテレビを見ているのでしょうか。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁とこども家庭庁の公的データから、スクリーンタイムの実態と、体力との関係について解説します。特に重要なのは「相関」と「因果」の違いです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">このページについて</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">情報源:</span>
              <span>スポーツ庁・こども家庭庁の公的調査</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>小学5年生・中学2年生</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">重要:</span>
              <span>「関連がある」と「原因である」は別</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スクリーンタイムの実態
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁の調査では、平日の学習以外のスクリーンタイム（テレビ・DVD・ゲーム機・スマートフォン・パソコン等の画面視聴）について質問しています。令和7年度の結果は、以下の通りです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時間帯</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">小5男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">小5女子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中2男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中2女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5時間以上</td>
                <td className="px-3 py-2 text-center text-gray-600">16.8%</td>
                <td className="px-3 py-2 text-center text-gray-600">13.0%</td>
                <td className="px-3 py-2 text-center text-gray-600">17.2%</td>
                <td className="px-3 py-2 text-center text-gray-600">16.1%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4～5時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">10.3%</td>
                <td className="px-3 py-2 text-center text-gray-600">9.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">12.2%</td>
                <td className="px-3 py-2 text-center text-gray-600">12.4%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3～4時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">15.4%</td>
                <td className="px-3 py-2 text-center text-gray-600">14.5%</td>
                <td className="px-3 py-2 text-center text-gray-600">20.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">20.8%</td>
              </tr>
              <tr className="border-b bg-amber-50">
                <td className="px-3 py-2 text-gray-800 font-bold">3時間以上（合算）</td>
                <td className="px-3 py-2 text-center text-amber-700 font-bold">42.5%</td>
                <td className="px-3 py-2 text-center text-amber-700 font-bold">37.2%</td>
                <td className="px-3 py-2 text-center text-amber-700 font-bold">50.0%</td>
                <td className="px-3 py-2 text-center text-amber-700 font-bold">49.3%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2～3時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">20.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">19.9%</td>
                <td className="px-3 py-2 text-center text-gray-600">26.5%</td>
                <td className="px-3 py-2 text-center text-gray-600">26.4%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1～2時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">22.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">24.1%</td>
                <td className="px-3 py-2 text-center text-gray-600">18.3%</td>
                <td className="px-3 py-2 text-center text-gray-600">18.5%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">12.3%</td>
                <td className="px-3 py-2 text-center text-gray-600">16.5%</td>
                <td className="px-3 py-2 text-center text-gray-600">4.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">5.4%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">まったく見ない</td>
                <td className="px-3 py-2 text-center text-gray-600">1.9%</td>
                <td className="px-3 py-2 text-center text-gray-600">2.4%</td>
                <td className="px-3 py-2 text-center text-gray-600">0.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">0.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">重要な数値</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">小学5年生:</span>
              <span>男子の42.5%、女子の37.2%が平日3時間以上</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">中学2年生:</span>
              <span>男子の50.0%、女子の49.3%が平日3時間以上</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">傾向:</span>
              <span>「3時間以上」の割合は増加傾向（スポーツ庁公式コメント）</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、小学5年生の約4割が、平日3時間以上のスクリーンタイムをしています。中学生になるとその割合はさらに増えて5割に達します。これは決して少なくない数字です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          インターネット利用全体の実態
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          こども家庭庁の「青少年のインターネット利用環境実態調査」では、スマートフォンゲームなども含むインターネット利用全体について調査しています。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">こども家庭庁調査（令和7年度版）</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            小学生の61.7%が3時間以上のインターネット利用。平均は233.6分（約3時間54分）
          </p>
          <p className="text-xs text-gray-600">
            注: スポーツ庁調査の「スクリーンタイム」とこども家庭庁調査の「インターネット利用」は定義が異なります。後者はスマートフォンゲームなども含みます。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          スポーツ庁調査よりも高い数字が出ているのは、調査の対象範囲が異なるためです。どちらにせよ、子どもたちのスクリーンタイムは無視できない実態を示しています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体力との関連性
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          では、スクリーンタイムが長い子は、体力が低いのでしょうか。スポーツ庁は、この関連について次のように述べています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              「『運動時間が長い』児童生徒ほど、体力合計点が高くなる傾向にある。」
            </li>
            <li className="text-sm text-gray-700">
              「1週間の総運動時間が60分未満の割合は、小中学校男女ともに増加傾向である。」
            </li>
            <li className="text-sm text-gray-700">
              「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である。」
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」概要</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          ここで注目すべき表現は「傾向にある」です。運動時間が長い子は体力が高い傾向があり、スクリーンタイムが長い子は運動時間が少ない傾向にあるということです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">相関と因果は異なります</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            「スクリーンタイムが長いから体力が低い」という因果関係が証明されているわけではありません。むしろ逆方向の可能性も考えられます。
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            たとえば、「体力が高い子ほど、もともと外遊びを選ぶ傾向があり、結果的にスクリーンタイムが少ない」という説明も可能です。調査が示すのは「関連がある」ということまでで、「ゲームをするから体力が低くなる」という因果を証明したものではないのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親が知っておきたい視点
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スクリーンタイムと体力の関係を理解する上で、以下の視点が重要です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">スクリーンタイム増加は事実</p>
            <p className="text-sm text-blue-800">令和7年度「3時間以上」42.5%（小5男子）は、決して無視できない数字です。</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">運動時間の減少も事実</p>
            <p className="text-sm text-blue-800">スポーツ庁は「1週間60分未満」の割合が増加傾向と報告しています。</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">ただし因果は不明</p>
            <p className="text-sm text-blue-800">「ゲームが原因だから禁止する」という判断は、調査データからは導き出せません。</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">バランスが大切</p>
            <p className="text-sm text-blue-800">スクリーンタイムと運動時間の双方のバランスを、お子さんの個性に合わせて調整することが大切です。</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「ゲームばかりしているから、運動をさせなくちゃ」という焦りも理解できますが、その焦りが「ゲーム禁止」という極端な判断につながるなら、それは別の問題を生むかもしれません。むしろ重要なのは、お子さんとのコミュニケーションの中で、スクリーンタイムと運動時間のバランスについて一緒に考えることです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          個人差が大きいことを忘れずに
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここまで平均値や傾向について述べてきましたが、最も重要なのは、お子さんの個人差です。スクリーンタイムが3時間という子もいれば、30分の子もいます。その子の発達段階、興味関心、生活環境は様々です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトの診断では、新体力テストの8種目から、お子さんの体力の特徴を分析し、向いているスポーツの傾向を見ることができます。全国平均との比較も可能ですが、最も大切なのは「お子さん自身の特性を知ること」と「その特性を活かす運動活動を見つけること」です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          スクリーンタイムが多めでも、定期的に運動を習っている子もいれば、スクリーンタイムが少なくても運動習慣がない子もいます。平均値だけで判断せず、お子さんの個性と実態に基づいた対話が大切です。
        </p>
      </div>
    </ArticleLayout>
  );
}
