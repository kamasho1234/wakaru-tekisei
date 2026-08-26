import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '剣道に向いている子の特徴｜反復と型を積み重ねる武道の適性',
  description:
    '剣道に向いている子の特徴を、競技の公式な特性から解説。段位は中学生から取得可能など、学習指導要領と全日本剣道連盟の規則から、型の習得と対人競技の適性を紹介。',
  openGraph: {
    title: '剣道に向いている子の特徴｜反復と型を積み重ねる武道の適性',
    description:
      '剣道に向いている子の特徴を、競技の公式な特性から解説。段位は中学生から取得可能など、学習指導要領と全日本剣道連盟の規則から、型の習得と対人競技の適性を紹介。',
    images: [{ url: '/images/articles/kendo-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kendo-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kendo-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '剣道に向いている子の特徴｜反復と型を積み重ねる武道の適性',
    images: ['/images/articles/kendo-aptitude.jpg'],
  },
};

export default function KendoAptitudePage() {
  return (
    <ArticleLayout
      title="剣道に向いている子の特徴｜反復と型を積み重ねる武道の適性"
      heroImage="/images/articles/kendo-aptitude.jpg"
      heroAlt="剣道をしている子どもたち"
      publishDate="2026年8月"
      slug="kendo-aptitude"
      description="剣道に向いている子の特徴を、競技の公式な特性から解説。段位は中学生から取得可能など、学習指導要領と全日本剣道連盟の規則から、型の習得と対人競技の適性を紹介。"
      tags={['剣道', '武道', '適性診断']}
      shareText="剣道に向いている子は反復と型を積み重ねられる子。段位は中学生から。 #子育て #剣道"
      citations={[
        '全日本剣道連盟「剣道称号・段級位審査規則」 https://www.kendo.or.jp/wp/wp-content/themes/kendo/assets/library/pdf/shogo-dani-shinsa_regulations.pdf',
        '文部科学省「中学校学習指導要領（平成29年告示）解説 保健体育編」 https://www.mext.go.jp/content/20250213-mxt_kyoiku01-100002608_2.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          剣道とは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学習指導要領では、剣道は「竹刀を使って、基本動作や基本となる技を用いて、互いに『一本（有効打突）』を目指して、相手と攻防しながら勝敗を競い合う運動である」と定義されています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          剣道は対人競技であり、相手の動きに応じて自らの技術を組み立てる必要があります。また、武道の中でも特に「型」と呼ばれる基本動作の習得を重視する競技です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          段級位のしくみ — 時間をかけて積み上げる武道
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          剣道の最大の特徴は、段級位制度が明確に定められていることです。全日本剣道連盟の「剣道称号・段級位審査規則」には、各段位を受審するための条件が細かく規定されています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">段位</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">受審資格</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">初段</td>
                <td className="px-3 py-2 text-gray-600">一級を取得し、満13歳以上の者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">二段</td>
                <td className="px-3 py-2 text-gray-600">初段受有後1年以上修業した者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">三段</td>
                <td className="px-3 py-2 text-gray-600">二段受有後2年以上修業した者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">四段</td>
                <td className="px-3 py-2 text-gray-600">三段受有後3年以上修業した者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">五段</td>
                <td className="px-3 py-2 text-gray-600">四段受有後4年以上修業した者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">六段</td>
                <td className="px-3 py-2 text-gray-600">五段受有後5年以上修業した者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">七段</td>
                <td className="px-3 py-2 text-gray-600">六段受有後6年以上修業した者</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">八段</td>
                <td className="px-3 py-2 text-gray-600">七段受有後10年以上修業し、かつ満46歳以上の者</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 全日本剣道連盟「剣道称号・段級位審査規則」</p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">小学生のうちは級位まで</p>
          <p className="text-sm text-purple-800 leading-relaxed">
            初段を取得するには「満13歳以上」という条件があります。つまり、小学生のうちは級位（一級〜三級）の取得が目安となり、段位は中学生以降の取得となります。剣道は長期間にわたって修業を続ける競技であることが、この規則から明らかです。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          段位が上がるほど必要な修業年限が長くなります。八段に至っては、七段受有後10年以上の修業と満46歳以上という条件が付いており、数十年単位で技術を磨き続ける競技であることがわかります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          段位審査の内容
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          段位の審査は実技試験だけではありません。全日本剣道連盟の規則では、「実技」と「日本剣道形（以下『形』という）」の両方が課されると定められています。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">実技試験</h3>
              <p className="text-sm text-gray-600">
                対人での攻防を通じて、技の正確性と応用力を評価します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">日本剣道形</h3>
              <p className="text-sm text-gray-600">
                定められた型を正確に演武する試験。基本動作の完成度が問われます。
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「形」の審査が含まれることは、剣道が型の習得と継続を何より重視する競技であることを示しています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校では、武道が必修領域に指定されており、第1・2学年で全領域が必修となります。剣道は武道の選択肢の一つとして、柔道や相撲とともに指導されています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">中学校で学ぶ剣道の基本動作</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・構えと体さばき（自然体、中段の構え、足さばき）</li>
            <li className="text-sm text-gray-700">・正面打ちとその受け方</li>
            <li className="text-sm text-gray-700">・胴（右）の打ちとその受け方</li>
            <li className="text-sm text-gray-700">・小手（右）の打ちとその受け方</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 文部科学省「中学校学習指導要領解説 保健体育編」</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          学校体育では、相手の動きに応じた基本動作と基本となる技を習得することが目標となります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          剣道に向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">反復と型の積み重ねが好きな子</h3>
              <p className="text-sm text-gray-600">
                剣道は「日本剣道形」をはじめ、基本動作の習得と継続が競技の中心です。同じ動きを何度も繰り返し、その中で完成度を高めていくプロセスを楽しめる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">対人競技が好きな子</h3>
              <p className="text-sm text-gray-600">
                相手の動きに応じて攻防を展開する競技です。1対1の真剣勝負を通じて、相手との技量差や戦術の違いを感じながら上達する過程を好める子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">長期的な目標設定ができる子</h3>
              <p className="text-sm text-gray-600">
                段級位が明確に定められており、小学生から中学生、さらに生涯にわたって修業を続けることができます。数年単位での目標設定と、その達成に向けて努力できる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">礼儀を大切にできる子</h3>
              <p className="text-sm text-gray-600">
                武道の中でも剣道は特に礼儀・礼節を重んじます。相手への敬意を表す姿勢、道場での作法、試合後の挨拶など、武道の伝統的な行動の仕方を理解し実践できる子に適しています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、学習指導要領と全日本剣道連盟の規則から見える競技の特性を整理したものです。実際の適性は個人差が大きく、始めてから適性に気づくことも多くあります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          他の武道との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学校体育では複数の武道から選択できます。剣道と他の武道の特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/martial-arts-aptitude" className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100 hover:bg-indigo-100 transition-colors block">
            <p className="font-bold text-indigo-900 text-sm mb-1">空手・柔道・剣道の特徴比較</p>
            <p className="text-xs text-indigo-800">3つの武道のそれぞれの特徴と向き不向きをまとめました</p>
          </Link>
          <Link href="/articles/judo-aptitude" className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100 hover:bg-indigo-100 transition-colors block">
            <p className="font-bold text-indigo-900 text-sm mb-1">柔道に向いている子の特徴</p>
            <p className="text-xs text-indigo-800">体重別階級制で体格を活かせる武道</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          剣道に向いている子は、反復と型の習得を通じて長期的に成長できる子です。段級位制度が明確に定められており、小学生から生涯にわたって修業を続けることができます。礼儀を大切にし、対人競技の中での自己鍛錬を求める子にとって、剣道はこれ以上ない教育の場になるでしょう。
        </p>
      </div>

      <div>
        <div className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-purple-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-purple-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-purple-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
