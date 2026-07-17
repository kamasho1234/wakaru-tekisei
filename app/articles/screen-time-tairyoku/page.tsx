import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どものスクリーンタイムは平均どれくらい？｜体力との関係を公的データで解説',
  description:
    'スポーツ庁の令和7年度調査から、平日の学習以外のスクリーンタイム（ゲーム・スマートフォン・テレビ）の実態を分析。小5男子の42.5%が3時間以上。体力との関連性を公的データで解説します。',
  openGraph: {
    title: '子どものスクリーンタイムは平均どれくらい？｜体力との関係を公的データで解説',
    description:
      'スマートフォンやゲームの時間はどう子どもの体力に影響するのか。スポーツ庁の最新データから、3時間以上のスクリーンタイムと体力の関連性を読み解きます。',
    images: [{ url: '/images/articles/screen-time-tairyoku.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/screen-time-tairyoku',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/screen-time-tairyoku',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものスクリーンタイムは平均どれくらい？｜体力との関係を公的データで解説',
    images: ['/images/articles/screen-time-tairyoku.jpg'],
  },
};

export default function ScreenTimeTairyoku() {
  return (
    <ArticleLayout
      title="子どものスクリーンタイムは平均どれくらい？｜体力との関係を公的データで解説"
      heroImage="/images/articles/screen-time-tairyoku.jpg"
      heroAlt="スマートフォンを見る子ども"
      publishDate="2026年7月"
      slug="screen-time-tairyoku"
      description="スポーツ庁の令和7年度調査から、平日のスクリーンタイムの実態を分析。小5男子42.5%が3時間以上。体力との関連性を解説します。"
      tags={['スクリーンタイム', 'スマートフォン', '体力', '生活習慣']}
      shareText="小学生の平日スクリーンタイムは？男子42.5%が3時間以上。スポーツ庁データから、体力との関連性を読み解きます。 #子育て #スマホ #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '同 調査結果の概要（令和7年12月） https://www.mext.go.jp/sports/content/20251217-spt_sseisaku02-000046317_000101.pdf',
        '同 小学校児童質問紙 https://www.mext.go.jp/sports/content/20251216-spt_sseisaku02-000046317_001002.xlsx',
        '同 中学校生徒質問紙 https://www.mext.go.jp/sports/content/20260113-spt_sseisaku02-000046317_0000102.xlsx',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「最近の子どもたちはゲームやスマートフォンばかりしている」という大人の話を聞いたことがあるかもしれません。それは本当なのでしょうか。スポーツ庁の調査では、平日の学習以外のスクリーンタイム（テレビやDVD、ゲーム機、スマートフォン、パソコンなど画面を見ている時間）について、具体的に調べています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、その実態と、スクリーンタイムが体力とどのような関連性を持つのか、公的データに基づいて解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          平日のスクリーンタイム分布（小学5年生）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          調査では、「平日の学習以外のスクリーンタイム」を7つの区分に分けて尋ねています。令和7年度の小学5年生の回答は以下のとおりです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">スクリーンタイム</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5時間以上</td>
                <td className="px-3 py-2 text-center text-gray-600">16.8%</td>
                <td className="px-3 py-2 text-center text-gray-600">13.0%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4〜5時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">10.3%</td>
                <td className="px-3 py-2 text-center text-gray-600">9.7%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3〜4時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">15.4%</td>
                <td className="px-3 py-2 text-center text-gray-600">14.5%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2〜3時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">20.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">19.9%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1〜2時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">22.7%</td>
                <td className="px-3 py-2 text-center text-gray-600">24.1%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">12.3%</td>
                <td className="px-3 py-2 text-center text-gray-600">16.5%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">まったく見ない</td>
                <td className="px-3 py-2 text-center text-gray-600">1.9%</td>
                <td className="px-3 py-2 text-center text-gray-600">2.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">「3時間以上」の割合に注目</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            小学5年生が平日のスクリーンタイムで3時間以上という子どもの割合は、男子42.5%（5時間以上＋4〜5時間未満＋3〜4時間未満）、女子37.2%です。この層が相対的に多いのが、現代の子どもたちの特徴です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          一方で、「1時間未満」から「まったく見ない」という層（男子14.2%、女子18.9%）も無視できません。スクリーンタイムに関しては、かなり大きな個人差があるということが分かります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学2年生ではさらに増加
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学5年生と中学2年生を比べると、どのような変化があるのでしょうか。同じデータを中学生で見てみます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">スクリーンタイム</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中2男子</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">中2女子</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">5時間以上</td>
                <td className="px-3 py-2 text-center text-gray-600">17.2%</td>
                <td className="px-3 py-2 text-center text-gray-600">16.1%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">4〜5時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">12.2%</td>
                <td className="px-3 py-2 text-center text-gray-600">12.4%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">3〜4時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">20.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">20.8%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">2〜3時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">26.5%</td>
                <td className="px-3 py-2 text-center text-gray-600">26.4%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1〜2時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">18.3%</td>
                <td className="px-3 py-2 text-center text-gray-600">18.5%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">1時間未満</td>
                <td className="px-3 py-2 text-center text-gray-600">4.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">5.4%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">まったく見ない</td>
                <td className="px-3 py-2 text-center text-gray-600">0.6%</td>
                <td className="px-3 py-2 text-center text-gray-600">0.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">中学生での大きな変化</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            中学2年生で「3時間以上」という層は、男子50.0%、女子49.3%に達します。小学5年生の時点で42.5%・37.2%だったのに比べて、中学生では男女ともに約10ポイント以上増加しています。一方で「1時間未満」という層は、小学生の時点では14〜19%いたのに対し、中学生ではわずか5%程度に減少します。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スクリーンタイムの増加傾向
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁は、スクリーンタイムの長期的なトレンドについて以下のように述べています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            「平日の学習以外のスクリーンタイムが『3時間以上』の割合は、小中学校男女ともに増加傾向である。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          これは、この調査が始まった当初と比べて、スクリーンに向かう時間が増えているということを意味しています。スマートフォンの普及やコンテンツの豊富化により、子どもたちの生活環境が変わってきたのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スクリーンタイムと体力の関連性
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          では、スクリーンタイムが長い子どもたちの体力は、どうなっているのでしょうか。その前に、大事な前置きをします。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">「関連性」と「因果関係」は違う</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            この調査からは「スクリーンタイムが長い子は体力が低い傾向にある」ということは分かります。ですが、それは「スクリーンタイムが長いから体力が低い」という因果関係を証明するものではありません。逆に「体力が高い子ほど外遊びを選び、スクリーンタイムが短い」という逆方向の可能性もあります。当サイトでは、この区別を大切にしています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          そのうえで、スポーツ庁のデータは次を示しています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            「『運動時間が長い』児童生徒ほど、体力合計点が高くなる傾向にある。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6 mb-4">
          これは直接的には「スクリーンタイムが短い」ことではなく「運動時間が長い」ことが体力と関連しているということです。生活の中で「スクリーンを見ている時間」と「運動している時間」は、限られた24時間の中で競い合う関係にあります。スクリーンタイムが増えれば、その分だけ外で活動する時間が減る可能性があるということです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">重要な指摘</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            この調査は「ゲームやスマートフォンが体力を奪う悪者」という単純な結論は示していません。むしろ「運動する時間があるかないか」という、より根本的な生活の時間配分が重要であるということを示唆しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スクリーンタイムの「適正値」は存在するか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「子どもはスクリーンを1日1時間まで」といった推奨値を聞いたことがあるかもしれません。しかし、この調査だけからは「これ以上はダメ」という境界線を引くことはできません。スクリーンタイムの長さそのものより、その時間によって失われるもの（運動時間、睡眠時間、社会交流）が何なのかが重要なのです。
        </p>

        <p className="text-gray-700 leading-relaxed">
          当サイトでは、スポーツ庁のデータが示す「運動時間が長い子ほど体力が高い」という事実だけをお伝えします。その上で、お子さんの生活全体のバランスを、ご家庭で考えていただくことが大切だと考えています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          睡眠との関係も無視できない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スクリーンタイムが体力に影響する経路は、直接的に「運動時間が減る」だけではありません。別のデータとして、睡眠との関連性も報告されています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            「睡眠時間が『8時間以上』の割合は、小中学校男女ともに増加傾向である。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査の結果について（概要）」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          夜間のスクリーンタイム（特にスマートフォン）は睡眠を阻害する可能性があります。十分な睡眠が取れないと、昼間の活動時間に影響が出ます。スクリーンタイムと体力の関係を考える際には、睡眠時間も合わせて検討する必要があるということです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          一つのデータポイントとして
        </h2>
        <p className="text-gray-700 leading-relaxed">
          スクリーンタイムの実態と体力の関連性は、複雑です。この調査が示すのは「男女ともに『3時間以上』が増加傾向にあること」「運動時間が長い子ほど体力が高い傾向にあること」だけです。その情報を踏まえて、お子さんの生活全体—運動、睡眠、スクリーン、学習—のバランスをどう取るかは、ご家庭での判断になります。当サイトでは、そうした判断の参考になる「事実」をお伝えしていきます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          お子さんの適性を活かす
        </h2>
        <p className="text-gray-700 leading-relaxed">
          当サイトの「わかる適性」では、新体力テストの記録から、お子さんの強みとなる運動能力を診断できます。得意な能力を活かせるスポーツが見つかれば、自然と「やってみたい」という気持ちが湧き、スクリーン以外の時間の使い方も変わるかもしれません。
        </p>
      </div>
    </ArticleLayout>
  );
}
