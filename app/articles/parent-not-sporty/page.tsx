import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '親が運動オンチでも子どもは運動できる？遺伝と環境を解説',
  description:
    '運動が苦手な親から生まれた子どもは運動が苦手になるの？遺伝と環境の影響を科学的に解説し、運動オンチな親でもできることを紹介します。',
  openGraph: {
    title: '親が運動オンチでも子どもは運動できる？遺伝と環境を解説',
    description:
      '運動が苦手な親から生まれた子どもは運動が苦手になるの？遺伝と環境の影響を科学的に解説し、運動オンチな親でもできることを紹介します。',
    images: [{ url: '/images/articles/parent-not-sporty.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/parent-not-sporty',
  },
  twitter: {
    card: 'summary_large_image',
    title: '親が運動オンチでも子どもは運動できる？遺伝と環境を解説',
    images: ['/images/articles/parent-not-sporty.jpg'],
  },
};

export default function ParentNotSportyPage() {
  return (
    <ArticleLayout
      title="親が運動オンチでも子どもは運動できる？遺伝と環境を解説"
      heroImage="/images/articles/parent-not-sporty.jpg"
      heroAlt="一緒に体を動かす親子"
      publishDate="2025年4月"
      slug="parent-not-sporty"
      description="運動が苦手な親から生まれた子どもは運動が苦手になるの？遺伝と環境の影響を科学的に解説し、運動オンチな親でもできることを紹介します。"
      tags={['遺伝', '運動能力', '子育て']}
      shareText="親が運動オンチでも子どもは運動できる？遺伝と環境の影響を科学的に解説。 #子育て #運動神経"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          運動能力はどのくらい遺伝するのか？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「親が運動オンチだと、子どもも運動オンチになるのか？」という質問をよく聞きます。実は、この質問には科学的な答えがあります。双子研究によると、運動能力の遺伝率は約50%。つまり、遺伝は半分しか影響しないということです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">50%</p>
            <p className="text-xs text-gray-600 mt-1">遺伝の影響</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-2xl font-black text-amber-600">50%</p>
            <p className="text-xs text-gray-600 mt-1">環境の影響</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-lg font-black text-amber-600">15～20時間</p>
            <p className="text-xs text-gray-600 mt-1">週の外遊び時間が理想</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
            <p className="text-lg font-black text-amber-600">幼少期</p>
            <p className="text-xs text-gray-600 mt-1">運動能力発達が最も進む時期</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">運動能力に影響する要因</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">遺伝（50%）:</span>
              <span>親から受け継ぐ筋肉量、骨の大きさ、反射神経</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">環境（50%）:</span>
              <span>外遊び、スポーツ経験、親の励まし、食育</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">臨界期:</span>
              <span>3～12歳のゴールデンエイジが最も発達する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">努力:</span>
              <span>遺伝に関わらず、トレーニングで大幅に向上する</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          遺伝子研究が示すこと
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「スポーツ遺伝子」という言葉を聞いたことはありますか？近年の遺伝子研究から、運動能力に関連する遺伝子が特定されていますが、それでも全てが決まるわけではありません。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">遺伝子名</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">影響</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ACTN3遺伝子</td>
                <td className="px-3 py-2 text-gray-600">瞬発力・スプリント能力に有利</td>
                <td className="px-3 py-2 text-gray-600">この遺伝子がないと運動が苦手？ → 環境・トレーニングで補える</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">PPARデルタ</td>
                <td className="px-3 py-2 text-gray-600">持久力に影響</td>
                <td className="px-3 py-2 text-gray-600">マラソン向きの体質。だが訓練で誰でも持久力は伸びる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">その他多数</td>
                <td className="px-3 py-2 text-gray-600">筋力、身長、体脂肪率など</td>
                <td className="px-3 py-2 text-gray-600">遺伝的素因は存在するが、それだけでは運動能力は決まらない</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          重要なのは、これらの遺伝子は「素因」に過ぎず、発現するかどうかは環境と生活習慣次第だということです。遺伝子があっても、運動経験がなければ発現しません。逆に、遺伝的に不利でも、訓練と経験で大幅に能力を伸ばすことができます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          環境の影響が50%ということの意味
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          運動能力の50%が環境要因で決まるということは、親の行動が子どもの運動能力を大きく左右することを意味します。親が運動オンチでも、子どもに正しい環境を与えることで、子どもは運動能力を高めることができるということです。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">幼少期の外遊び経験</h3>
              <p className="text-sm text-gray-600">
                3～6歳で公園での遊び、ボール遊び、走る経験が豊富な子どもほど、運動能力が高いという研究結果がある。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">多様な運動経験</h3>
              <p className="text-sm text-gray-600">
                一つのスポーツだけでなく、水泳、体操、野球、サッカーなど複数のスポーツを経験することで、運動神経が発達する。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">親の励ましと肯定的フィードバック</h3>
              <p className="text-sm text-gray-600">
                親が「頑張ってたね」と努力を認めることで、子どもは運動へのモチベーションが高まる。失敗を責めずに挑戦を応援する。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">栄養と睡眠</h3>
              <p className="text-sm text-gray-600">
                成長期の子どもには、良好な栄養状態と十分な睡眠が必須。筋肉や骨の発達が運動能力に直結する。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          運動が苦手な親でもできること
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          親が運動オンチだからといって、子どもの運動環境を整えられないわけではありません。むしろ、親の行動が子どもの人生を変えることができるのです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">運動オンチな親が子どもにしてあげられることリスト</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">公園に連れていく：</span>
              <span>週3日以上、30分以上の外遊び時間を作る。自分で遊ぶより、親が環境を用意することが大切</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">スポーツスクール入会：</span>
              <span>専門の指導者に任せる。親の運動能力は関係なく、質の高い指導が受けられる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">複数のスポーツを勧める：</span>
              <span>一つに限らず、様々な運動経験をさせる。多様性が運動神経を発達させる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">努力を褒める：</span>
              <span>結果ではなくプロセスを褒める。「頑張ってたね」の言葉で、子どもの内発的動機付けが高まる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">一緒に運動する：</span>
              <span>親が運動オンチでも、親子で軽く体を動かすこと自体が子どもの価値観を形成する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">栄養と睡眠の管理：</span>
              <span>親の重要な役割。良好な食事と十分な睡眠が、子どもの運動能力を支える基盤</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          親が見せる「楽しむ姿」の効果
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          心理学の「モデリング効果」によると、子どもは親の行動を見てそれを真似します。親が運動オンチでも、親が運動を楽しむ姿を見せることが、子どもの運動への関心を高めるのです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">親が見せるべき「楽しむ姿」</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">一緒にスポーツ観戦に行く：</span>
              <span>親がスポーツを楽しむ姿を見せる。子どもも同じようにスポーツに興味を持つようになる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">親自身がウォーキングやストレッチをする：</span>
              <span>運動が上手でなくても、親が日常的に体を動かす習慣を見せることが重要</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">「身体を動かすことって楽しいな」という言葉：</span>
              <span>親が楽しさを言葉で伝えることで、子どもは運動に対する肯定的なイメージを持つ</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">失敗を楽しむ親の姿：</span>
              <span>「ここで転んじゃった。でも楽しい！」という親の態度が、子どもの失敗への恐怖を軽減する</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          大切なのは、親が「完璧である」ことではなく、「努力する姿勢」と「楽しむ姿勢」を子どもに見せることなのです。親が運動オンチでも、親が運動に前向きに取り組む姿を見れば、子どもも同じように行動するようになります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ：遺伝よりも、今日の経験が大切
        </h2>
        <p className="text-gray-700 leading-relaxed">
          「親が運動オンチだから、子どもも運動オンチ」というのは迷信です。運動能力は遺伝と環境が半々の影響を持つため、親の環境づくりと励ましが、子どもの人生を大きく変えることができるのです。親が運動が苦手でも、子どもに外遊びの機会を作り、スポーツスクールに入会させ、努力を褒め、親自身が運動を楽しむ姿を見せること。これらの環境づくりが、子どもの運動能力を引き出す最大の力になるのです。親の遺伝子よりも、親の行動が子どもの未来を作ります。
        </p>
      </div>
    </ArticleLayout>
  );
}
