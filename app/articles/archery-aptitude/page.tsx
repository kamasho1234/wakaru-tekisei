import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'アーチェリーに向いている子の特徴｜年齢や性別を問わずできるスポーツ',
  description:
    'アーチェリーに向いている子の特徴を全日本アーチェリー連盟の公式説明から解説。集中力と戦略的思考が活きる競技。小学生から始められ、自分の体格に合った道具選びで誰でも楽しめるスポーツ。',
  openGraph: {
    title: 'アーチェリーに向いている子の特徴｜年齢や性別を問わずできるスポーツ',
    description:
      'アーチェリーに向いている子の特徴を全日本アーチェリー連盟の公式説明から解説。集中力と戦略的思考が活きる競技。小学生から始められ、自分の体格に合った道具選びで誰でも楽しめるスポーツ。',
    images: [{ url: '/images/articles/archery-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/archery-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/archery-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アーチェリーに向いている子の特徴｜年齢や性別を問わずできるスポーツ',
    images: ['/images/articles/archery-aptitude.jpg'],
  },
};

export default function ArcheryAptitudePage() {
  return (
    <ArticleLayout
      title="アーチェリーに向いている子の特徴｜年齢や性別を問わずできるスポーツ"
      heroImage="/images/articles/archery-aptitude.jpg"
      heroAlt="アーチェリーをしている子ども"
      publishDate="2026年8月"
      slug="archery-aptitude"
      description="アーチェリーに向いている子の特徴を全日本アーチェリー連盟の公式説明から解説。集中力と戦略的思考が活きる競技。小学生から始められ、自分の体格に合った道具選びで誰でも楽しめるスポーツ。"
      tags={['アーチェリー', '個人競技', '適性診断']}
      shareText="アーチェリーは集中力と戦略的思考が活きるスポーツ。年齢や性別を問わず始められます。 #子育て #アーチェリー"
      citations={[
        '公益社団法人全日本アーチェリー連盟 公式サイト https://www.archery.or.jp/',
        '公益社団法人全日本アーチェリー連盟「アーチェリーってどんなスポーツ？」 https://www.archery.or.jp/start/overview.html',
        '公益社団法人全日本アーチェリー連盟「初心者（小・中学生）アーチェリー教室のご案内」 https://www.archery.or.jp/information/details/_1120_1.html',
        '公益社団法人全日本アーチェリー連盟「2025年全日本小中学生アーチェリー大会」 https://www.archery.or.jp/tournament/details/2025_1.html',
        '文部科学省「小学校学習指導要領（平成29年告示）解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          アーチェリーとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全日本アーチェリー連盟の公式説明では、アーチェリーは「シンプルなスポーツ」でありながら「様々な知的作業が含まれる」特徴があります。弓で矢を放つシンプルな動作に見えますが、風の影響計算や距離判断など、戦略的思考が求められます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          最大の特徴は、年齢や性別を問わず始められることです。全日本アーチェリー連盟は、このスポーツを「だれでも気楽に楽しめる」競技として位置づけており、「自分の体格や腕力に合った道具を使用すれば、子どもやお年寄りでも」参加可能です。体格や体力で決まらない競技を探している親御さんにとって、選択肢になり得るスポーツです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          小学生・中学生の年代別規定
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全日本アーチェリー連盟の大会では、子どもの年代と技術レベルに応じて、複数の競技部門が設けられています。小学生から中学生になると、使用する弓の種類が変わり、距離や標的面が段階的に大きくなります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">部門</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">種別</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">距離</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">標的面</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">リカーブ部門</td>
                <td className="px-3 py-2 text-gray-600">小学生</td>
                <td className="px-3 py-2 text-center text-gray-600">18ｍ</td>
                <td className="px-3 py-2 text-center text-gray-600">80cm6リング標的面</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">リカーブ部門</td>
                <td className="px-3 py-2 text-gray-600">中学生</td>
                <td className="px-3 py-2 text-center text-gray-600">60ｍ</td>
                <td className="px-3 py-2 text-center text-gray-600">122cm標的面</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">リカーブ部門</td>
                <td className="px-3 py-2 text-gray-600">中学生</td>
                <td className="px-3 py-2 text-center text-gray-600">30ｍ</td>
                <td className="px-3 py-2 text-center text-gray-600">80cm6リング標的面</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">コンパウンド部門</td>
                <td className="px-3 py-2 text-gray-600">小中学生</td>
                <td className="px-3 py-2 text-center text-gray-600">30ｍ</td>
                <td className="px-3 py-2 text-center text-gray-600">80cm6リング標的面</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ベアボウ部門</td>
                <td className="px-3 py-2 text-gray-600">小中学生</td>
                <td className="px-3 py-2 text-center text-gray-600">18ｍ</td>
                <td className="px-3 py-2 text-center text-gray-600">80cm標的面</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 公益社団法人全日本アーチェリー連盟「2025年全日本小中学生アーチェリー大会」</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">段階的な距離設定の意図</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            小学生のリカーブ部門は18ｍから始まり、中学生になると最大60ｍまで距離が伸びます。標的面も小学生は80cm6リング標的面から始まり、中学生の主流種目では122cm標的面という大きなものになります。この段階的な設定により、子どもの身体的・精神的発達に無理のない形で競技を深めることができます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          安全への配慮
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          アーチェリーは静的なスポーツに見えますが、矢は高速で飛行します。全日本アーチェリー連盟の公式説明から、安全面の情報を引用します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-2 text-sm">矢のスピード</p>
            <p className="text-sm text-red-800 leading-relaxed">
              矢は「時速200～230㎞くらい」に達します。「厚さ5ミリの鉄板を打ち抜くほど」の衝撃力を持つため、安全管理は極めて重要です。
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <p className="font-bold text-green-900 mb-2 text-sm">指導者のもとでの開始</p>
            <p className="text-sm text-green-800 leading-relaxed">
              このため、アーチェリーは指導者のもとで正しい安全知識を学びながら始める競技です。全日本アーチェリー連盟は、小学校3年生以上から中学校3年生までの初心者・未経験者向けに教室を開いており、実射練習やミニ競技会を通じて安全に習得できます。
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">教室選びのポイント</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            アーチェリーを始めさせたい場合は、全日本アーチェリー連盟の初心者教室や、正式な指導者資格を持つコーチがいる道場での開始をお勧めします。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          文部科学省の「小学校学習指導要領」を確認したところ、アーチェリーについての記載がありません。小学校の体育では、タグラグビーやフラッグフットボールなど、安全性が高いゲーム・ボール運動が例示されています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">学校体育では選択肢にない</p>
          <p className="text-sm text-gray-600 mb-3">
            アーチェリーは学校体育の必修科目には含まれないため、学びたければクラブ活動か、地域の教室に参加する必要があります。
          </p>
          <p className="text-xs text-gray-500">出典: 文部科学省「小学校学習指導要領」</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          代わりに、集中力や目的達成への訓練を重視する家庭では、放課後やクラブ活動として選手育成型の教室に入ることで、系統的なアーチェリー教育を受けさせることができます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          アーチェリーに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">集中力が高い子</h3>
              <p className="text-sm text-gray-600">
                アーチェリーは、数秒間の集中力と一連の動作を繰り返す競技です。同じ動作を精密に反復し、わずかなズレを修正する集中力が求められます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">戦略的思考ができる子</h3>
              <p className="text-sm text-gray-600">
                風の影響や距離の見極め、試合での得点配分など、アーチェリーには工学的・戦略的な思考が組み込まれています。データ分析や計画立案を楽しめる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">内向的で落ち着きのある子</h3>
              <p className="text-sm text-gray-600">
                アーチェリーは個人競技であり、自分のペースで練習・改善を重ねることが重視されます。大勢の中で目立つことより、自分の成長を実感したい子に適しています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体格や体力で劣っていると感じている子</h3>
              <p className="text-sm text-gray-600">
                アーチェリーは「自分の体格や腕力に合った道具を使用すれば」始められます。走力や体の大きさが要件にならないため、他のスポーツで活躍できなかった子が活躍する場になり得ます。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、全日本アーチェリー連盟の公式説明と小学校学習指導要領から見える競技の特性を整理したものです。実際には、小学3年生から初心者教室で実際に体験してみて、子どもの適性や興味を見守ることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          他のスポーツとの比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          アーチェリーは個人競技ですが、他のスポーツとどう違うか比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/table-tennis-aptitude" className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:bg-orange-100 transition-colors block">
            <p className="font-bold text-orange-900 text-sm mb-1">卓球</p>
            <p className="text-xs text-orange-800">瞬発力と反応速度が活きる個人競技</p>
          </Link>
          <Link href="/articles/kendo-aptitude" className="bg-purple-50 rounded-2xl p-4 border border-purple-100 hover:bg-purple-100 transition-colors block">
            <p className="font-bold text-purple-900 text-sm mb-1">剣道</p>
            <p className="text-xs text-purple-800">精神鍛錬と技術習得を重視する武道</p>
          </Link>
          <Link href="/articles/introverted-kids-sports" className="bg-teal-50 rounded-2xl p-4 border border-teal-100 hover:bg-teal-100 transition-colors block">
            <p className="font-bold text-teal-900 text-sm mb-1">内向的な子のためのスポーツ</p>
            <p className="text-xs text-teal-800">グループ活動が苦手な子に適した競技選び</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          アーチェリーに向いている子は、集中力と戦略的思考を活かしたい子です。年齢や性別、体格を問わず始められるため、他のスポーツで活躍できなかった子が能力を発揮する機会になり得ます。安全管理は指導者のもとで行われるため、全日本アーチェリー連盟の初心者教室で実際に体験してみることをお勧めします。わずかなズレを修正する喜び、的に中てた時の達成感を重ねることで、子どもは自信と集中力を身につけていくでしょう。
        </p>
      </div>

      <div>
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-blue-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
