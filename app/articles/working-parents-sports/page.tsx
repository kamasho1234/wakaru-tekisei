import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '共働きで子どもの習い事送迎ができない｜親の現実と現代的な課題',
  description:
    '共働き世帯の母親は80.9%の時代。習い事は子どもの70%が参加する中、送迎をどう実現するのか。厚生労働省・総務省の最新統計から、親たちが抱える課題と対策を解説します。',
  openGraph: {
    title: '共働きで子どもの習い事送迎ができない｜親の現実と現代的な課題',
    description:
      '共働き世帯の母親就業率80.9%。習い事送迎の時間的負担、夫婦の家事時間の不均等、実現可能な親のあり方について、統計から解説。',
    images: [{ url: '/images/articles/working-parents-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/working-parents-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/working-parents-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '共働きで子どもの習い事送迎ができない｜親の現実と現代的な課題',
    images: ['/images/articles/working-parents-sports.jpg'],
  },
};

export default function WorkingParentsSportsPage() {
  return (
    <ArticleLayout
      title="共働きで子どもの習い事送迎ができない｜親の現実と現代的な課題"
      heroImage="/images/articles/working-parents-sports.jpg"
      heroAlt="働く親と習い事をする子ども"
      publishDate="2026年7月"
      slug="working-parents-sports"
      description="共働き世帯の母親は80.9%の時代。習い事は子どもの70%が参加する中、送迎をどう実現するのか。厚生労働省・総務省の最新統計から、親たちが抱える課題と対策を解説します。"
      tags={['共働き', '習い事', '送迎', '働く親']}
      shareText="共働き世帯で子どもの習い事送迎ができない問題。厚生労働省・総務省のデータから、現代の親の現実をまとめました。 #子育て #共働き #働く親"
      citations={[
        '2024年国民生活基礎調査（厚生労働省） https://www.mhlw.go.jp/toukei/saikin/hw/k-tyosa/k-tyosa24/index.html',
        '共働き世帯の状況（労働政策研究・研修機構） https://www.jil.go.jp/kokunai/blt/backnumber/2025/04/c_01.html',
        '令和3年社会生活基本調査（総務省統計局） https://www.stat.go.jp/data/shakai/2021/index.html',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「仕事が終わる時間に、子どもの習い事の送迎に間に合わない」「送迎の時間を作るために、どうしても仕事を調整せざるを得ない」——こうした悩みを抱える親は、今、大多数派です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          実は、これは「親の努力不足」ではなく、日本の社会構造そのものが抱える課題なのです。統計データが示す現実を見れば、その理由が明確に見えてきます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、公開されている最新統計をもとに、働く親たちが直面する課題の実態と、その中で親ができることについて解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          共働きが「標準」になった日本の現実
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          20年前、専業主婦世帯は珍しくありませんでした。しかし、今は全く異なります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">最新統計が示す共働きの実態（2024年）</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">共働き世帯:</span>
              <span>1,300万世帯（前年比で22万世帯増）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">児童がいる世帯の母親就業率:</span>
              <span>80.9%（過去最高）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">20年前との比較:</span>
              <span>2004年は56.7%→2024年は80.9%（24.2ポイント増）</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、子どものいる世帯の8割以上で、母親が働いているのです。「子どもがいるから仕事をセーブする」という選択肢を持つ親は、もはや少数派なのです。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            出典：厚生労働省「2024年国民生活基礎調査」
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">働く親たちの就業パターン</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">正規雇用:</span>
              <span>41%</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">非正規雇用:</span>
              <span>36.7%</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">その他:</span>
              <span>10.1%</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          習い事は「当たり前」な時代
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          働く親たちが抱える悩みの背景にあるのは、子どもの習い事が、もはや「選択肢」ではなく「標準」になっているという事実です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">小学生の習い事参加率と内容</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">有料習い事参加率:</span>
              <span>約70%</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">複数習い事実施:</span>
              <span>54.7%が2つ以上</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">月額平均費用:</span>
              <span>16,676円</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、小学生のほぼ3人に2人が習い事をしており、その半数以上が複数の習い事に参加しています。となると、親の側も「どうしても送迎が必要」という状況が生まれるわけです。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            人気の習い事TOP3（いわゆる「新３S」）
          </p>
          <ul className="space-y-1">
            <li className="text-sm text-gray-700">・水泳 31%</li>
            <li className="text-sm text-gray-700">・英会話など語学 21%</li>
            <li className="text-sm text-gray-700">・学校の予習・復習補習 20%</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">
            ※親世代の「３S」（水泳・習字・そろばん）から大きく変化
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          親世代と異なり、現代の習い事は「複数実施が当たり前」という時代認識も存在します。その結果、親は必然的に送迎ネットワークを必要とします。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          家事・育児時間から見えるジェンダー格差
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          共働き世帯で子どもの習い事送迎が成立しない理由は、実は「女性に家事・育児負担が集中している」という構造的な問題なのです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">共働き世帯の家事・育児時間（平日1日当たり）</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">妻:</span>
              <span>3時間24分</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">夫:</span>
              <span>51分</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">差:</span>
              <span>2時間33分（夫は妻の1/4以下）</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          妻が平日毎日3時間以上を家事・育児に費やしている一方、夫は51分に過ぎません。こうした時間的アンバランスは、何を意味するのか。つまり、妻が「フルタイム仕事」をしながら、同時に「家事・育児の主責任者」という二重役割を担っているのです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">幼い子どもがいる場合はさらに深刻</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            6歳未満の子どもがいる世帯では、妻の家事関連時間は7時間28分に達します。一方、夫は1時間54分です。この時点で、妻が実質的に「子育ての全責任」を負わされているという現実が明確です。
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            ただし、改善傾向はある
          </p>
          <p className="text-sm text-gray-700">
            1996年には夫の家事・育児時間は20分だったのに対し、2021年には51分に増加しました。20年間で約2.5倍増となっています。ゆっくりではありますが、改善は進んでいるのです。
          </p>
          <p className="text-xs text-gray-500 mt-2">出典：総務省統計局「令和3年社会生活基本調査」</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          経済的には豊かになったが、時間は奪われた
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          共働きが増えた結果、世帯所得は増加しています。一方、失ったものは何か。それは、親の「自由な時間」です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">児童のいる世帯の所得推移</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">2024年平均所得:</span>
              <span>1世帯当たり820万5千円（過去最高）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">要因:</span>
              <span>共働き世帯の増加が主</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          経済的には豊かになりました。しかし、その見返りに、親（特に母親）が払った代償は何か。それは「習い事の送迎」「家事・育児の時間」「自分のための時間」の喪失です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「豊かさ」の定義を問い直す</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            家計の豊かさは増えても、親たち（特に母親）の心身の余裕は失われている。習い事の送迎に追われ、仕事と家事と育児に疲弊する。これが「豊かな人生」と言えるのか、という問いが生じます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親ができること：現実的な対策
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          構造的な問題があるからこそ、親として「できることの限界」を認識しながらも、現実的な工夫をする必要があります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">現実的な対策の選択肢</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span>習い事の数を厳選する（「複数参加が当たり前」の呪縛から解放される）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span>送迎を必要としない習い事を優先（オンライン、通園・通学先での提供など）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span>親同士で送迎をシェアする仕組みを作る</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">4.</span>
              <span>夫に家事・育児の明確な分担を求める（統計では改善傾向があるが、実現にはコミュニケーション必須）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold shrink-0">5.</span>
              <span>完璧を目指さない：「親ができないことがある」と子どもに伝える</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          最後の点は、心理的なものですが重要です。親が「できない」ことを子どもに素直に伝えることは、子どもに「親も完全ではない」「人間は限界を持っている」という大切な学習機会を与えます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親の心身の健康が、子どもの幸福につながる
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「子どものために習い事をさせなければ」という親の使命感は理解できます。しかし、その使命感が親を疲弊させれば、結果として子どもにも悪影響が出ます。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          共働き世帯の母親が80.9%の時代に、「習い事の送迎を親が担う」という前提それ自体が、もはや持続不可能なのかもしれません。送迎代行サービス、オンライン習い事、学校での放課後プログラムなど、社会が提供する選択肢も増えています。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">子どもの適性を知ることの価値</p>
          <p className="text-sm text-green-800 leading-relaxed">
            複数の習い事に手を広げるのではなく、その子にとって「本当に向いている」ものを絞ることで、送迎負担も削減でき、子どもの集中度も高まります。当サイトの診断を活用することで、親子で「本当に必要な習い事」を見つめ直す機会が生まれます。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          働く親たちが直面している課題は、単なる「個人の工夫」では解決しない、社会構造的な問題です。だからこそ、親が「完璧を求めない」「できるだけのことをする」という柔軟さを持つことが、親自身の幸福、そして最終的には子どもの幸福につながるのではないでしょうか。
        </p>
      </div>
    </ArticleLayout>
  );
}
