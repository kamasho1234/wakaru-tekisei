import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'チアリーディングに向いている子の特徴｜安全規則から見る年代別の成長段階',
  description:
    'チアリーディングに向いている子の特徴を日本チアリーディング協会の公式規則から解説。チアダンスとの違い、年代別の安全規則、応援の言葉が競技要素となる独特の特性を紹介。',
  openGraph: {
    title: 'チアリーディングに向いている子の特徴｜安全規則から見る年代別の成長段階',
    description:
      'チアリーディングに向いている子の特徴を日本チアリーディング協会の公式規則から解説。チアダンスとの違い、年代別の安全規則、応援の言葉が競技要素となる独特の特性を紹介。',
    images: [{ url: '/images/articles/cheerleading-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/cheerleading-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/cheerleading-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'チアリーディングに向いている子の特徴｜安全規則から見る年代別の成長段階',
    images: ['/images/articles/cheerleading-aptitude.jpg'],
  },
};

export default function CheerleadingAptitudePage() {
  return (
    <ArticleLayout
      title="チアリーディングに向いている子の特徴｜安全規則から見る年代別の成長段階"
      heroImage="/images/articles/cheerleading-aptitude.jpg"
      heroAlt="チアリーディングをしている子どもたち"
      publishDate="2026年8月"
      slug="cheerleading-aptitude"
      description="チアリーディングに向いている子の特徴を日本チアリーディング協会の公式規則から解説。チアダンスとの違い、年代別の安全規則、応援の言葉が競技要素となる独特の特性を紹介。"
      tags={['チアリーディング', '表現運動', '適性診断']}
      shareText="チアリーディングは応援の言葉が競技要素。年代別に安全規則が段階的に変わる設計になっている。 #子育て #チアリーディング"
      citations={[
        'チアリーディング競技規則（競技種目・部門／競技規則概要／安全規則概要） https://www.fjca.jp/cheerleading/contents_4.php',
        '公益社団法人 日本チアリーディング協会 https://www.fjca.jp/',
        '文部科学省「小学校学習指導要領解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          チアリーディングとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本チアリーディング協会（FJCA）の公式規則では、チアリーディングは「アームモーション、スタンツ、ピラミッド、タンブリング、ジャンプ、ダンスなどの要素を、チア（応援の言葉）やサイドラインと組み合わせて、自由に創作する競技」と定義されています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          チアリーディングの最大の特徴は、応援の言葉を全員で発声する「言葉のパート」が競技の重要な要素として組み込まれていることです。単なるダンスやアクロバットではなく、チームが一体となって応援を表現する競技なのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          チアリーディングとチアダンスの違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          競技規則上、チアリーディングとチアダンスは別の種目として分かれています。習い事を選ぶ際に、この違いを理解することが重要です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">チアリーディング</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">チアダンス</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">スタンツ／ピラミッド</td>
                <td className="px-3 py-2 text-gray-600">必須要素（含まれる）</td>
                <td className="px-3 py-2 text-gray-600">含まれない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">タンブリング（アクロバット）</td>
                <td className="px-3 py-2 text-gray-600">含まれる</td>
                <td className="px-3 py-2 text-gray-600">含まれない</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">応援の言葉（チア）</td>
                <td className="px-3 py-2 text-gray-600">必須・40秒以上</td>
                <td className="px-3 py-2 text-gray-600">禁止</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">手具</td>
                <td className="px-3 py-2 text-gray-600">複数種類使用可</td>
                <td className="px-3 py-2 text-gray-600">ポンポン以外は禁止</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">演技スタイル</td>
                <td className="px-3 py-2 text-gray-600">自由演技</td>
                <td className="px-3 py-2 text-gray-600">ダンス中心</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 公益社団法人 日本チアリーディング協会「チアリーディング競技規則」</p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
          <p className="font-bold text-pink-900 mb-2">習い事選びの判断基準</p>
          <p className="text-sm text-pink-800 leading-relaxed">
            スタンツやピラミッドなどの人間タワー技術を習いたいなら「チアリーディング」、ポンポンを持ってダンスを学びたいなら「チアダンス」という選択になります。安全規則の強度も異なるため、お子さんの興味と体力に合わせて選ぶことが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          年代別の部門と編成人数
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          チアリーディングは、子どもの年代に応じて細かく部門が分かれています。チーム編成の人数も年代によって異なります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">部門</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対象学年</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">チーム編成</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学校低学年</td>
                <td className="px-3 py-2 text-gray-600">1～2年生</td>
                <td className="px-3 py-2 text-center text-gray-600">10～20名</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学校高学年</td>
                <td className="px-3 py-2 text-gray-600">3～6年生</td>
                <td className="px-3 py-2 text-center text-gray-600">10～20名</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学校</td>
                <td className="px-3 py-2 text-gray-600">中学生</td>
                <td className="px-3 py-2 text-center text-gray-600">8～16名</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高等学校</td>
                <td className="px-3 py-2 text-gray-600">高校生</td>
                <td className="px-3 py-2 text-center text-gray-600">8～16名以上</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          小学生部門は中学生以上よりも人数が多く設定されています。これは、低学年のうちはチーム全体での協調性を重視し、より多くの子どもが活躍できる設計になっているためです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          競技規則 — 応援の言葉が競技要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          チアリーディングの規則で特に注目すべき点は、応援の言葉が単なる掛け声ではなく、競技の重要な要素として組み込まれていることです。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">チアリーディング</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">競技エリア</td>
                <td className="px-3 py-2 text-gray-600">12メートル四方（全面使用可能）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">演技時間</td>
                <td className="px-3 py-2 text-gray-600">2分20秒以上2分30秒以内</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">応援の言葉のパート</td>
                <td className="px-3 py-2 text-gray-600">40秒以上（音楽を使用しない）</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2 text-sm">「言葉のパート」が競技の独特性</p>
          <p className="text-sm text-purple-800 leading-relaxed">
            チアリーディングでは、全員で応援の言葉を発声する「チア」が、演技時間の40秒以上を占める必須要素です。つまり、ダンスやアクロバットだけでなく、チーム全体で「応援する声」を大切にする競技という特性が、規則で明確に定義されているのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          年代別の安全規則 — 発育・発達を考慮した段階設計
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          チアリーディングの最大の特徴は、年代が上がるにつれて許される技の難度が段階的に変わることです。子どもの身体発達に合わせた安全設計になっています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">部門</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">スタンツの高さ</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">投げ技（トス）</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">タンブリング</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学校低学年</td>
                <td className="px-3 py-2 text-center text-gray-600">2層2段</td>
                <td className="px-3 py-2 text-center text-gray-600">全面禁止</td>
                <td className="px-3 py-2 text-center text-gray-600">宙返りは禁止</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学校高学年（アドバンス）</td>
                <td className="px-3 py-2 text-center text-gray-600">2層2.5段</td>
                <td className="px-3 py-2 text-center text-gray-600">ツイスト1回転</td>
                <td className="px-3 py-2 text-center text-gray-600">宙返り1回まで</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学校</td>
                <td className="px-3 py-2 text-center text-gray-600">2層2.5段</td>
                <td className="px-3 py-2 text-center text-gray-600">ツイスト2回転</td>
                <td className="px-3 py-2 text-center text-gray-600">宙返り・ツイスト各1回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高等学校</td>
                <td className="px-3 py-2 text-center text-gray-600">3層2.5段</td>
                <td className="px-3 py-2 text-center text-gray-600">ツイスト3回転</td>
                <td className="px-3 py-2 text-center text-gray-600">宙返り・ツイスト各2回</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2 text-sm">小学校低学年の安全対策</p>
            <p className="text-sm text-green-800 leading-relaxed">
              投げる技（トス）は全面禁止され、すべてのスタンツの上にいる選手に対して、最低1名のハンズオン（手で触れている）補助者が必須です。これが、安全性を最優先にした設計の証です。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2 text-sm">段階的な難度解禁</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              小学校高学年で初めてツイスト（回転を伴う投げ技）が許可され、1回転まで。中学校で2回転、高等学校で3回転というように、学年が上がるにつれて段階的に難度が上がります。
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">安全規則が「危なくない」根拠</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            親御さんが「スタンツなんて大丈夫か？」と心配するのは自然ですが、この段階的な安全規則設計こそが、チアリーディングが長年研究されてきた競技である証です。年代に応じた基準が決まっているため、それに従う限り、子どもの成長段階に適切なチャレンジができます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校・中学校の学習指導要領に、チアリーディングやチアダンスは正式な単元として記載されていません。学校体育では「表現運動」「ダンス」の領域で、リズムダンスや創作ダンスが扱われています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">学校体育と習い事の違い</p>
          <p className="text-sm text-gray-600 mb-3">
            チアリーディングは、学校体育の必修単元ではなく、民間のチアリーディングクラブやスクールで習う「習い事」として成り立っています。そのため、チアリーディング協会の公式規則に基づいた指導を受けることになります。
          </p>
          <p className="text-xs text-gray-500">出典: 文部科学省「小学校学習指導要領解説 体育編」</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          チアリーディングは、学校では経験しない「チーム競技」として、放課後や週末の習い事で本格的に学ぶ競技です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          チアリーディングに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">チーム競技で活躍したい子</h3>
              <p className="text-sm text-gray-600">
                チアリーディングは、ソロではなく「チーム全体」で演技する競技です。複数の人が息を合わせて、スタンツやピラミッドを成功させることに喜びを感じられる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">応援や掛け声が好きな子</h3>
              <p className="text-sm text-gray-600">
                チアリーディングの「言葉のパート」では、全員で応援の言葉を発声します。大きな声を出し、エネルギッシュに表現することが得意な子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ダンスとアクロバットの両方が好きな子</h3>
              <p className="text-sm text-gray-600">
                ダンスの表現力とスタンツのアクロバット技の両方が必要です。リズム感があり、かつ身体を動かす全般的な運動能力がある子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">段階的な成長を楽しめる子</h3>
              <p className="text-sm text-gray-600">
                低学年では難しい技が、学年が上がるにつれて習得できるようになります。長期的な目標に向かって練習を重ね、小さな達成を積み重ねる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">仲間との関係構築を大切にできる子</h3>
              <p className="text-sm text-gray-600">
                スタンツでは、他の選手を支える「ベース」や「スポッター（補助者）」の役割も重要です。自分の役割を果たしながら、仲間を支えられる子が向いています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、日本チアリーディング協会の公式規則から見える競技の特性を整理したものです。実際には、体験レッスンに参加して、お子さんが実際に楽しんでいるか、コーチの指導方針が安全に配慮しているか、チーム全体の雰囲気が合っているか、を確認することが最も大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          他のダンス・表現運動との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          表現系の習い事は複数ありますが、チアリーディングはアクロバットとチーム応援という独自の要素を持つ競技です。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/dance-aptitude" className="bg-purple-50 rounded-2xl p-4 border border-purple-100 hover:bg-purple-100 transition-colors block">
            <p className="font-bold text-purple-900 text-sm mb-1">ダンス</p>
            <p className="text-xs text-purple-800">リズムと表現力を中心にした競技</p>
          </Link>
          <Link href="/articles/rhythmic-gymnastics-aptitude" className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:bg-orange-100 transition-colors block">
            <p className="font-bold text-orange-900 text-sm mb-1">新体操</p>
            <p className="text-xs text-orange-800">ボール・リボンなどの手具とアクロバット</p>
          </Link>
          <Link href="/articles/gymnastics-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">体操</p>
            <p className="text-xs text-blue-800">床・鉄棒などの器械を使った技</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          チーム選びのポイント
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2 text-sm">年代別の安全規則が守られているか</p>
            <p className="text-sm text-green-800 leading-relaxed">
              実施しているチームが、お子さんの学年に対応した安全規則を厳守しているか確認してください。「低学年だからトスはまだやらない」「補助者がいるスタンツだけ」といった対応ができているかが重要です。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2 text-sm">指導者が公式資格を持っているか</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              日本チアリーディング協会の公認資格制度があります。チームのコーチが協会公認の資格を持っているか確認することで、安全で正しい指導が受けられるか判断できます。
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
            <p className="font-bold text-purple-900 mb-2 text-sm">体験レッスンで雰囲気を確認</p>
            <p className="text-sm text-purple-800 leading-relaxed">
              チーム全体の雰囲気、先輩後輩の関係、コーチの子どもへの接し方など、実際に見学・体験することが大切です。アクロバットの安全性だけでなく、心理的に「安心できる環境か」を感じることが重要です。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          チアリーディングに向いている子は、チーム全体で応援を表現し、段階的な技の習得を楽しめる子です。年代別に安全規則が細かく分かれているのは、子どもの身体発達を最優先にしている証です。スタンツやピラミッドは「危ない」のではなく、「年代に応じた段階的な安全設計がされている」という点を理解することが大切です。仲間との協力を通じて、責任感と達成感を味わえる競技です。
        </p>
      </div>

      <div>
        <div className="mt-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-pink-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-pink-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-pink-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
