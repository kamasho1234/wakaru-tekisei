import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ソフトボール投げの全国平均は？｜投げるのが苦手な子に親ができること',
  description:
    'ボール投げが苦手な子どもの現状を、スポーツ庁の全国体力テスト実績値で解説。16年間で何が変わったのか、発達段階での個人差、親の工夫について、公式ガイドラインに基づいて紹介します。',
  openGraph: {
    title: 'ソフトボール投げの全国平均は？｜投げるのが苦手な子に親ができること',
    description:
      'スポーツ庁「全国体力・運動能力調査」から見た、ボール投げ能力の実態と16年の推移。投げる動作が苦手な児童への文科省公式ガイドラインを紹介します。',
    images: [{ url: '/images/articles/ball-throwing-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/ball-throwing-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/ball-throwing-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ソフトボール投げの全国平均は？｜投げるのが苦手な子に親ができること',
    images: ['/images/articles/ball-throwing-kids.jpg'],
  },
};

export default function BallThrowingKidsPage() {
  return (
    <ArticleLayout
      title="ソフトボール投げの全国平均は？｜投げるのが苦手な子に親ができること"
      heroImage="/images/articles/ball-throwing-kids.jpg"
      heroAlt="ボール投げの練習に取り組む小学生"
      publishDate="2026年7月"
      slug="ball-throwing-kids"
      description="ボール投げが苦手な子どもの現状を、スポーツ庁の全国体力テスト実績値で解説。16年間で何が変わったのか、発達段階での個人差、親の工夫について、公式ガイドラインに基づいて紹介します。"
      tags={['ボール投げ', '体力テスト', '投能力', '発達段階']}
      shareText="小学生のボール投げ能力は過去16年で低下しましたが、最近は回復傾向。発達段階の個人差を知ることが大切です。 #子育て #体力テスト"
      citations={[
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」結果 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
        '文部科学省「幼児期運動指針」 https://www.mext.go.jp/a_menu/sports/undousisin/1319771.htm',
        '同「小学校学習指導要領 体育編」 https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/tai.htm',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子、ボール投げが得意じゃないんです」という相談は多く聞かれます。スポーツ庁の全国体力・運動能力、運動習慣等調査を見ると、投げる能力は確かに過去16年間で低下しています。しかし、最近の傾向は異なります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ庁の実績値から見た投げる能力の現状と、発達段階における個人差の正常性、そして親にできることを紹介します。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-6">
          <p className="font-bold text-blue-900 mb-2">このページについて</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">対象:</span>
              <span>小学5年生のソフトボール投げ</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">令和7年度全国平均:</span>
              <span>男子21.06m、女子13.10m</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">重要:</span>
              <span>個人差が大きい発達段階。「この距離を投げるべき」という基準はない</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          16年間で何が変わったか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁の全国体力調査から見ると、小学5年生のソフトボール投げの記録は、長期的には低下しています。
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
                <td className="px-3 py-2 text-gray-600">平成20年度（2008年）</td>
                <td className="px-3 py-2 text-right text-gray-600">25.39 m</td>
                <td className="px-3 py-2 text-right text-gray-600">14.85 m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">平成30年度（2018年）</td>
                <td className="px-3 py-2 text-right text-gray-600">22.14 m</td>
                <td className="px-3 py-2 text-right text-gray-600">13.76 m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">令和4年度（2022年）</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">20.31 m</td>
                <td className="px-3 py-2 text-right text-red-600 font-bold">13.16 m</td>
              </tr>
              <tr className="border-b bg-blue-50">
                <td className="px-3 py-2 text-gray-800 font-bold">令和7年度（2026年）</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">21.06 m</td>
                <td className="px-3 py-2 text-right text-blue-700 font-bold">13.10 m</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">16年間の変化</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">男子:</span>
              <span>平成20年度25.39m → 令和7年度21.06m（4.33m低下）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">女子:</span>
              <span>平成20年度14.85m → 令和7年度13.10m（1.75m低下）</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          ただし、令和4年度が最低で、令和7年度は令和6年度（男子20.74m、女子13.15m）から回復しています。スポーツ庁も「ボール投げは小中学校男子で直近向上傾向」とコメントしており、最近の数年間では改善が見られます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          投げるという動作は、発達段階で個人差が大きい
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「ボール投げが苦手」というお子さんは少なくありませんが、これは珍しいことではなく、発達の正常な範囲内です。投げる動作の習得には、強い個人差があります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-800 mb-2">文部科学省「幼児期運動指針」より</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            「4～5歳から投げるなどの用具操作の経験が望ましい」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 文部科学省「幼児期運動指針」</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          文部科学省が示す発達段階では、4～5歳から投げ経験が始まり、小学低学年で片手投げの習得、中高学年で段階的に技術向上が図られるという設計です。つまり、小学5年生の時点で「◯メートル投げるべき」という目標値は存在しません。令和7年度の全国平均21.06m（男子）は、あくまで「現在の平均値」であり「目指すべき値」ではないのです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">重要な区別</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            体力テストの値は「実績値」です。「◯年生は◯メートル投げられなければいけない」という発達目標ではなく、全国の子どもたちがどのくらい投げられているかを示した統計値に過ぎません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          低下の原因は複合的
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「なぜ16年で4メートルも低下したのか」という質問をよく受けます。このような低下が見られるとき、その背景にはしばしば複数の要因が関わっていると考えられています。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">1. 幼少期の外遊び・スポーツ活動時間の減少</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">2. 遊び場（河原・公園など自由に投げられる空間）の減少</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">3. スクリーンタイム（ゲーム・スマートフォン）増加による活動時間減</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">4. 少子化による仲間の数の減少</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-1">5. 幼少期の神経発達期における投げ動作経験の不足</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">原因の特定は難しい</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            スポーツ庁の調査は「1週間の総運動時間が60分未満の割合は増加傾向」という相関データを提供していますが、「運動時間が減ったから投げが下手になった」という因果関係を特定しているわけではありません。上記の複数要因が、複合的に関わっていると考えられます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親にできることは段階的な指導
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文部科学省「小学校体育指導の手引」では、投げ能力の習得について、以下の段階が示されています。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="font-bold text-green-900 text-sm mb-1">段階1. 軽く小さいボールを使用</p>
            <p className="text-sm text-green-800">動きやすく、恐怖心が少ないボールから始める</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="font-bold text-green-900 text-sm mb-1">段階2. ゲーム的な学習活動</p>
            <p className="text-sm text-green-800">「的当て」など遊び感覚で投げ経験を積む</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="font-bold text-green-900 text-sm mb-1">段階3. 片手投げから始める</p>
            <p className="text-sm text-green-800">基本となる片手投げの動作を習得</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="font-bold text-green-900 text-sm mb-1">段階4. 段階的に技術を高める</p>
            <p className="text-sm text-green-800">投げの角度、腕の振り方など、段階的に改善</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          家庭でできることとしては、安全な場所で軽いボールを使って、楽しみながら投げの経験を増やすことが効果的です。公園で的当てのゲームをしたり、段階的に距離を伸ばしたりするなど、無理のない範囲で続けることが大切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          投げるのが得意でなくても、別の動きが得意かもしれない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストの8種目（握力・上体起こし・長座体前屈・反復横とび・シャトルラン・50m走・立ち幅とび・ソフトボール投げ）を見ると、お子さんの体力の特徴は多様です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          「ボール投げが苦手＝運動が苦手」ではなく、走力や瞬発力、柔軟性など、得意な動きがあるかもしれません。当サイトの診断では、8種目から体力の特徴を分析し、向いているスポーツの傾向を見ることができます。お子さんの個性に合った運動活動を見つけることが、体育学習をより豊かにします。
        </p>
      </div>
    </ArticleLayout>
  );
}
