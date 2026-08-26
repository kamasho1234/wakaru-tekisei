import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ラグビーに向いている子の特徴｜学年別規則で見る発育発達への配慮',
  description:
    'ラグビーに向いている子の特徴を日本ラグビー協会の公式ガイドから解説。学年別に競技規則が変わる仕組み、安心安全な環境づくり、体格の大小にかかわらずポジションがある特徴を紹介。',
  openGraph: {
    title: 'ラグビーに向いている子の特徴｜学年別規則で見る発育発達への配慮',
    description:
      'ラグビーに向いている子の特徴を日本ラグビー協会の公式ガイドから解説。学年別に競技規則が変わる仕組み、安心安全な環境づくり、体格の大小にかかわらずポジションがある特徴を紹介。',
    images: [{ url: '/images/articles/rugby-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/rugby-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/rugby-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ラグビーに向いている子の特徴｜学年別規則で見る発育発達への配慮',
    images: ['/images/articles/rugby-aptitude.jpg'],
  },
};

export default function RugbyAptitudePage() {
  return (
    <ArticleLayout
      title="ラグビーに向いている子の特徴｜学年別規則で見る発育発達への配慮"
      heroImage="/images/articles/rugby-aptitude.jpg"
      heroAlt="ラグビーをしている子どもたち"
      publishDate="2026年8月"
      slug="rugby-aptitude"
      description="ラグビーに向いている子の特徴を日本ラグビー協会の公式ガイドから解説。学年別に競技規則が変わる仕組み、安心安全な環境づくり、体格の大小にかかわらずポジションがある特徴を紹介。"
      tags={['ラグビー', 'ボール運動', '適性診断']}
      shareText="ラグビーは学年別に規則が段階的に変わる。U-8から始められる安全な競技。 #子育て #ラグビー"
      citations={[
        '日本ラグビーフットボール協会「幼児・小学生（U12ミニラグビー）」 https://minnaderugby.jp/age_grade/?u12',
        '日本ラグビーフットボール協会「ミニラグビー大会に必要な3つの視点」 https://www.rugby-japan.jp/RugbyFamilyGuide/wp-content/uploads/2024/03/JRFU-minirugby.pdf',
        '文部科学省「小学校学習指導要領解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          ラグビーとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本ラグビーフットボール協会の公式説明では、ミニラグビーは「ラグビーフットボールの魅力を感じてもらうために幼児、小学生を対象につくられた子どもたちのラグビー型ボールゲーム」と定義されています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          ラグビーの特徴は、プレーヤーの発育・発達を考慮して、学年ごとに競技規則が段階的に制定されていることです。子どもの身体的発達に合わせた設計になっており、安全性が優先されています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          学年別に変わる競技規則 — 発育・発達を考慮した設計
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ラグビーの最大の特徴は、低学年（U-8）、中学年（U-10）、高学年（U-12）で、人数、ボール、コート、試合時間がすべて異なる規則になっていることです。これは子どもの身体的・精神的発達に合わせた設計です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">区分</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対象学年</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">人数</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">ボール</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">低学年（U-8）</td>
                <td className="px-3 py-2 text-gray-600">1・2年生</td>
                <td className="px-3 py-2 text-center text-gray-600">5人</td>
                <td className="px-3 py-2 text-center text-gray-600">3号球</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学年（U-10）</td>
                <td className="px-3 py-2 text-gray-600">3・4年生</td>
                <td className="px-3 py-2 text-center text-gray-600">7人</td>
                <td className="px-3 py-2 text-center text-gray-600">3or4号球</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高学年（U-12）</td>
                <td className="px-3 py-2 text-gray-600">5・6年生</td>
                <td className="px-3 py-2 text-center text-gray-600">9人</td>
                <td className="px-3 py-2 text-center text-gray-600">4号球</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 日本ラグビーフットボール協会「幼児・小学生（U12ミニラグビー）」</p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">区分</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">コート（目安）</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">試合時間</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">低学年（U-8）</td>
                <td className="px-3 py-2 text-gray-600">14m×24m</td>
                <td className="px-3 py-2 text-gray-600">5〜7分</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学年（U-10）</td>
                <td className="px-3 py-2 text-gray-600">35m×70m</td>
                <td className="px-3 py-2 text-gray-600">最大15+15分（1日上限50分）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高学年（U-12）</td>
                <td className="px-3 py-2 text-gray-600">40m×70m</td>
                <td className="px-3 py-2 text-gray-600">最大20+20分（1日上限60分）</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <p className="font-bold text-orange-900 mb-2">段階的な規則設計の意図</p>
          <p className="text-sm text-orange-800 leading-relaxed">
            低学年は小さなコートと短い試合時間で、ボール保持者の扱い方を学びます。学年が上がるにつれて、コートが大きくなり、人数が増え、試合時間が長くなります。この段階的な設計により、子どもの身体的・精神的発達に無理のない形で競技を学ぶことができます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          安全への配慮
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本ラグビーフットボール協会の普及育成委員会は、ミニラグビーの大会運営で重視すべき3つの視点を示しています。親御さんが最も気にする「安全」について、公式ガイドから引用します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2 text-sm">視点1: 安心安全な環境</p>
            <p className="text-sm text-green-800 leading-relaxed">
              「選手にとって安心安全な環境が準備されていること」。コーチや保護者、チーム関係者が知識や情報を正しく理解することが基本とされています。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2 text-sm">視点2: 楽しみと成長</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              「成功より成長を優先して、ポジティブな学びが得られる機会をつくること」。1試合での勝ち負けよりも、長期的な成長を重視する運営方針です。
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <p className="font-bold text-purple-900 mb-2 text-sm">視点3: コンディションと身体発達への配慮</p>
            <p className="text-sm text-purple-800 leading-relaxed">
              「選手のコンディションや身体的発達に配慮し、大きな負荷がかからないように注意をすること」。試合時間の上限が学年ごとに設定されているのは、このためです。
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">子どもが「安全に続けられる環境か」を確認する</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            道場やチーム選びの際は、上記3つの視点に基づいた運営がされているか、コーチや保護者が正しい知識を持っているか、が重要なポイントになります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校の体育では、いきなりコンタクトのあるラグビーから入るわけではありません。中学年の「ゲーム」と高学年の「ボール運動」では、タックルのない「タグラグビー」が例示されています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">タグラグビーとは</p>
          <p className="text-sm text-gray-600 mb-3">
            タグラグビーは、フラッグフットボールとともに小学校の体育で例示されている運動です。タックルのかわりにタグ（腰に付けたひも）を取り合うゲームで、ラグビーのルールと特性を学びながら、安全に実践できます。
          </p>
          <p className="text-xs text-gray-500">出典: 文部科学省「小学校学習指導要領解説 体育編」</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          小学校段階ではタグラグビーで基本を学び、その後にミニラグビーへ進むという流れが一般的です。コンタクト要素は発達段階に応じて、段階的に導入されます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          ラグビーに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格の大小にかかわらず活躍できる子</h3>
              <p className="text-sm text-gray-600">
                ラグビーには、フォワード（前列）とバックス（後列）の異なるポジションがあります。体格の大きい子はフォワードで力を活かし、小ぶりな子はバックスでスピードを活かすなど、体型を活かした役割分担ができます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">チーム競技が好きな子</h3>
              <p className="text-sm text-gray-600">
                ラグビーは集団で攻防を展開するチームスポーツです。個人の力とともに、チーム全体の連携と作戦を重視する子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ボール操作や空間認識が好きな子</h3>
              <p className="text-sm text-gray-600">
                ラグビーでは後ろへのパスと走り込みが基本です。3次元的な空間で、複数の味方の位置を認識しながらプレーする能力が求められます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">長期的な成長を重視できる子</h3>
              <p className="text-sm text-gray-600">
                JRFU の方針では「成功より成長」を優先します。一つの試合での勝ち負けよりも、季節を通じて技術を磨き、チームとして成長する過程を楽しめる子が向いています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、日本ラグビーフットボール協会の公式ガイドと学習指導要領から見える競技の特性を整理したものです。実際には、小学校の低学年から始めてみて、子どもの適性や興味を見守ることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          他のボール運動との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校の体育では複数のボール運動から選択できます。ラグビーと他の競技の特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/soccer-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">サッカー</p>
            <p className="text-xs text-green-800">足でボールを操作し、走る時間が長い競技</p>
          </Link>
          <Link href="/articles/basketball-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">バスケットボール</p>
            <p className="text-xs text-blue-800">加速と減速を繰り返し、瞬発力が活きる</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ラグビーに向いている子は、チーム競技の中で自分の役割を果たし、長期的な成長を楽しめる子です。学年別に規則が段階的に変わる設計は、子どもの発育・発達を何より重視している証です。タグラグビーから始めることで、安全に競技の基礎を学ぶことができます。チーム全体で目標に向かって努力する喜びを感じさせてくれる競技です。
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
