import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '相撲に向いている子の特徴｜文部科学省の公式資料から見る武道としての特性',
  description:
    '相撲に向いている子の特徴を文部科学省の公式資料から解説。柔道・剣道との体力要素の違い、わんぱく相撲の安全設計、土俵規格、子どもが「安心して始められる競技」としての相撲の魅力を紹介。',
  openGraph: {
    title: '相撲に向いている子の特徴｜文部科学省の公式資料から見る武道としての特性',
    description:
      '相撲に向いている子の特徴を文部科学省の公式資料から解説。柔道・剣道との体力要素の違い、わんぱく相撲の安全設計、土俵規格、子どもが「安心して始められる競技」としての相撲の魅力を紹介。',
    images: [{ url: '/images/articles/sumo-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sumo-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sumo-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '相撲に向いている子の特徴｜文部科学省の公式資料から見る武道としての特性',
    images: ['/images/articles/sumo-aptitude.jpg'],
  },
};

export default function SumoAptitudePage() {
  return (
    <ArticleLayout
      title="相撲に向いている子の特徴｜文部科学省の公式資料から見る武道としての特性"
      heroImage="/images/articles/sumo-aptitude.jpg"
      heroAlt="相撲をしている子どもたち"
      publishDate="2026年8月"
      slug="sumo-aptitude"
      description="相撲に向いている子の特徴を文部科学省の公式資料から解説。柔道・剣道との体力要素の違い、わんぱく相撲の安全設計、土俵規格、子どもが「安心して始められる競技」としての相撲の魅力を紹介。"
      tags={['相撲', '武道', '適性診断']}
      shareText="相撲は柔軟性が高まる武道。中学校の武道選択肢の一つで、わんぱく相撲は小学4-6年対象の最大規模大会。 #子育て #相撲"
      citations={[
        '文部科学省「中学校学習指導要領（平成29年告示）解説 保健体育編」 https://www.mext.go.jp/content/20250213-mxt_kyoiku01-100002608_2.pdf',
        '公益財団法人 日本相撲連盟「規程集（2021年7月1日現在）」 https://www.nihonsumo-renmei.jp/about/pdf/kitei.pdf',
        'わんぱく相撲全国大会「ルール」 https://www.wanpaku.or.jp/tournament/rule',
        'わんぱく相撲全国大会「参加方法」 https://www.wanpaku.or.jp/process',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          相撲とは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          相撲は、日本固有の伝統と文化を代表する武道です。中学校の学習指導要領では、柔道・剣道と並ぶ武道の選択肢の一つとして位置づけられています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          小学生年代では「わんぱく相撲全国大会」が全国規模で開催されており、全国200地区の予選大会から勝ち上がった選手が、両国国技館での全国大会に出場します。相撲は子どもから大人まで、安心して学べる競技として組織されています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          相撲で高まる体力要素 — 柔道・剣道との違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文部科学省の学習指導要領では、各武道種目で高まる体力要素が異なることを明示しています。相撲の最大の特徴は、他の武道と比べて「柔軟性」が公式に高まる体力要素として挙げられていることです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">武道種目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">主として高まる体力要素</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">柔道</td>
                <td className="px-3 py-2 text-gray-600">瞬発力、筋持久力、巧緻性など</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">剣道</td>
                <td className="px-3 py-2 text-gray-600">瞬発力、敏捷性、巧緻性など</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">相撲</td>
                <td className="px-3 py-2 text-gray-600">瞬発力、巧緻性、柔軟性など</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 文部科学省「中学校学習指導要領（平成29年告示）解説 保健体育編」</p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">相撲が他の武道と異なるポイント</p>
          <p className="text-sm text-orange-800 leading-relaxed">
            柔道は「筋持久力」を、剣道は「敏捷性」を高める武道として特徴づけられているのに対して、相撲は「柔軟性」が公式に認識されている競技です。体全体を使った相手との接触、身体を柔軟に動かす技の多様性が、相撲特有の体力要素につながっています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          わんぱく相撲 — 小学生が安心して参加できる競技設計
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          わんぱく相撲全国大会は、小学4年生から6年生が対象の「日本国内最大規模の小学生相撲大会」です。地区によっては小学1年生から3年生のクラスも設けられており、全国200地区で予選が行われています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">内容</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">全国大会対象学年</td>
                <td className="px-3 py-2 text-gray-600">小学4年生〜6年生（男子）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">予選対象（地区による）</td>
                <td className="px-3 py-2 text-gray-600">小学1〜3年生男子、女子のクラスもあり</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">開催規模</td>
                <td className="px-3 py-2 text-gray-600">全国200地区の予選大会</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">全国大会会場</td>
                <td className="px-3 py-2 text-gray-600">両国国技館（東京）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">取組時間</td>
                <td className="px-3 py-2 text-gray-600">約3分。勝負がつかないときは取直し</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: わんぱく相撲全国大会「参加方法」「ルール」</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2 text-sm">子どもの安全のための特別な規則設計</p>
          <p className="text-sm text-green-800 leading-relaxed mb-3">
            わんぱく相撲では、禁じ手が大相撲とは別に定められています。また、大相撲では立合いに「待った」がありますが、わんぱく相撲では「待った」がなく、主審の指示で試合が始まる仕組みになっています。
          </p>
          <p className="text-sm text-green-800">
            これらの規則設定は、子どもの身体的安全と競技の円滑な進行を最優先にした設計です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          大相撲でも、土俵の規格が厳格に定められています。土俵の勝負俵は直径455cmの円で設計され、その外側に24個の小俵（そのうち4個が徳俵）が埋められています。このように相撲は、競技として正確に規定された環境で行われる競技です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          相撲に向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">身体をしっかり使える子</h3>
              <p className="text-sm text-gray-600">
                相撲は全身を使って相手と対峙する競技です。両脚、腰、腕、背中の連携が必要になります。身体全体を柔軟に、そして力強く使える子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">対人競技が好きな子</h3>
              <p className="text-sm text-gray-600">
                相撲は1対1の直接対峙が基本です。相手を尊重しながら全力を尽くし、勝負に向き合うことが好きな子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">日本の伝統文化に興味がある子</h3>
              <p className="text-sm text-gray-600">
                相撲は単なるスポーツではなく、日本の伝統と文化の継承を担う競技です。歴史や文化的背景を学びながら競技を続けたいと考える子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">基礎から段階的に学びたい子</h3>
              <p className="text-sm text-gray-600">
                相撲の技術体系は、基本となる姿勢や足の運び方から積み上げられます。短期的な結果よりも、着実に技術を磨く過程を楽しめる子が向いています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、文部科学省の公式ガイドと相撲の競技特性から整理したものです。実際には、小学校の低学年から始めてみて、子ども自身が相撲に興味を持ち、どのような適性を発揮できるかを見守ることが最も大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          他の武道との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校では複数の武道から選択できます。相撲と他の武道の特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/judo-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">柔道</p>
            <p className="text-xs text-blue-800">瞬発力・筋持久力が高まる武道</p>
          </Link>
          <Link href="/articles/kendo-aptitude" className="bg-purple-50 rounded-2xl p-4 border border-purple-100 hover:bg-purple-100 transition-colors block">
            <p className="font-bold text-purple-900 text-sm mb-1">剣道</p>
            <p className="text-xs text-purple-800">敏捷性・集中力が高まる武道</p>
          </Link>
          <Link href="/articles/martial-arts-aptitude" className="bg-red-50 rounded-2xl p-4 border border-red-100 hover:bg-red-100 transition-colors block">
            <p className="font-bold text-red-900 text-sm mb-1">武道全般</p>
            <p className="text-xs text-red-800">武道の選び方・特性を総合的に解説</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          相撲と体格
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          相撲は体格の大小にかかわらず活躍できる競技です。小ぶりな子でも機敏な身のこなし、低い姿勢、正確な足運びで相手と対峙することができます。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="font-bold text-gray-900 mb-2 text-sm">相撲における体格と技術のバランス</p>
          <p className="text-sm text-gray-600 mb-3">
            相撲は出し投げなど、相手の力を利用する技法が多くあります。体格の大きさだけではなく、バランス感覚、柔軟性、瞬発力、技術の精度といった複数の要素で競技が成り立っており、子ども一人ひとりが自分の身体特性を活かして成長できる環境になっています。
          </p>
          <p className="text-xs text-gray-500">出典: 文部科学省「中学校学習指導要領解説 保健体育編」</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          相撲は日本相撲連盟が公式に支える競技
        </h2>
        <p className="text-gray-700 leading-relaxed">
          日本相撲連盟は、小学生を「選手会員」として正式に登録する制度を持っています。つまり、子どもが始める段階から、公的に認識された競技として位置づけられており、組織的な安全管理と指導体制の下で学べる環境があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          相撲に向いている子は、全身で対人競技に向き合い、段階的に技術を積み上げることを楽しめる子です。文部科学省の公式資料では、柔軟性が高まる武道として相撲が位置づけられており、他の武道では得られない体力要素を発達させることができます。わんぱく相撲は小学4年生から全国大会への出場が可能であり、親子で日本の伝統文化に触れ、成長する喜びを感じられる競技です。
        </p>
      </div>

      <div>
        <div className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-orange-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-orange-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-orange-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
