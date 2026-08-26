import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツ安全保険とは？子どもの習い事のけがの補償内容・掛金・加入の流れ',
  description:
    'スポーツ安全保険は、団体でスポーツをする子どもが対象の保険。掛金は年800円で、けがの入院・通院、相手にけがをさせたときの賠償責任まで補償。団体活動への往復中も対象。令和8年度の補償額と加入方法を公式情報で解説します。',
  openGraph: {
    title: 'スポーツ安全保険とは？子どもの習い事のけがの補償内容・掛金・加入の流れ',
    description:
      'スポーツ安全保険は、団体でスポーツをする子どもが対象の保険。掛金は年800円で、けがの入院・通院、相手にけがをさせたときの賠償責任まで補償。令和8年度の補償内容と加入方法。',
    images: [{ url: '/images/articles/sports-insurance-kids.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sports-insurance-kids',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sports-insurance-kids',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツ安全保険とは？子どもの習い事のけがの補償内容・掛金・加入の流れ',
    images: ['/images/articles/sports-insurance-kids.jpg'],
  },
};

export default function SportsInsuranceKidsPage() {
  return (
    <ArticleLayout
      title="スポーツ安全保険とは？子どもの習い事のけがの補償内容・掛金・加入の流れ"
      heroImage="/images/articles/sports-insurance-kids.jpg"
      heroAlt="野球のバッティング練習中に転ぶ小学生"
      publishDate="2026年8月"
      slug="sports-insurance-kids"
      description="スポーツ安全保険は、団体でスポーツをする子どもが対象の保険。掛金は年800円で、けがの入院・通院、相手にけがをさせたときの賠償責任まで補償。団体活動への往復中も対象。令和8年度の補償額と加入方法を公式情報で解説します。"
      tags={['スポーツ保険', '習い事', 'けが', '保護者向け']}
      shareText="スポーツ安全保険は子どもの習い事での保険。年800円でけがの入院・通院・賠償責任まで補償。団体活動への往復中も対象です。 #子育て #スポーツ"
      citations={[
        'スポーツ安全協会「加入区分・掛金・補償額」 https://www.sportsanzen.org/hoken/kubun.html',
        'スポーツ安全協会「スポーツ安全保険 トップ」 https://www.sportsanzen.org/hoken/index.html',
        'スポーツ安全協会「2026年度（令和8年度）スポーツ安全保険の改定について」 https://www.sportsanzen.org/Info/2025/2026kaitei.html',
        'スポーツ安全協会「スポーツ安全保険 よくあるご質問」 https://www.sportsanzen.org/hoken/faq_span/kubun.html',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんがスポーツの習い事をしていると、「スポーツ安全保険に入ってください」と団体から案内されることがあります。このスポーツ安全保険とは、スポーツをしている間のけがや、相手にけがをさせたときの責任まで補償する保険です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ安全協会の公式情報から、保険の対象・補償内容・掛金・加入方法をまとめます。「本当に入る必要があるのか」「保険料はいくらなのか」という疑問にお答えします。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ安全保険は「団体で加入する保険」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ安全保険の大事なポイントが、ここです。これは個人で自由に加入する保険ではなく、**4名以上のアマチュアの団体・グループが対象**です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">個人では加入できません</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            お子さん1人だけで習いたいという場合は、スポーツ安全保険には加入できません。野球チーム、サッカークラブ、ダンス教室など、3名以上の仲間がいる団体や、学校の部活動の単位で加入する保険です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          補償が対象になるのは、「団体での活動中」と「団体活動への往復中」の事故です。スポーツの活動そのものはもちろん、**練習場所への往復中も対象になる**という点は、保護者にとって重要です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          令和8年度の掛金：子どもは年800円
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ安全保険の掛金は、加入する人の年齢や活動内容によって区分が決まります。お子さんが習い事でスポーツをしている場合、どの区分に該当するのか見ておきましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">区分</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">活動内容</th>
                <th className="px-3 py-2 text-right font-bold text-gray-700">掛金（年間）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">A1</td>
                <td className="px-3 py-2 text-gray-600">スポーツ・文化・ボランティア・地域活動</td>
                <td className="px-3 py-2 text-right text-gray-600">800円</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">AW</td>
                <td className="px-3 py-2 text-gray-600">A1に加えて個人活動も対象</td>
                <td className="px-3 py-2 text-right text-gray-600">1,450円</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">D</td>
                <td className="px-3 py-2 text-gray-600">危険度の高いスポーツ活動</td>
                <td className="px-3 py-2 text-right text-gray-600">11,000円</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: スポーツ安全協会「加入区分・掛金・補償額」（令和8年度）</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          ほとんどのお子さんが対象になるのは、**A1区分の年800円**です。この金額には、制度の運営費も含まれています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          令和8年度の補償内容：A1区分
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          年800円でどこまで補償されるのか、具体的な金額を見ておきましょう。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-4 text-sm">傷害保険（けがの補償）</p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm text-gray-700">・死亡: 3,000万円</li>
            <li className="text-sm text-gray-700">・後遺障害（最高）: 4,500万円</li>
            <li className="text-sm text-gray-700">・入院: 4,000円／日</li>
            <li className="text-sm text-gray-700">・通院: 1,500円／日</li>
          </ul>

          <p className="font-bold text-gray-900 mb-2 text-sm">賠償責任保険（相手にけがをさせた場合）</p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm text-gray-700">・対人・対物合算: 1事故5億円</li>
            <li className="text-sm text-gray-700">・対人は1人あたり最高2億円</li>
          </ul>

          <p className="font-bold text-gray-900 mb-2 text-sm">突然死葬祭費用保険</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・葬祭費用: 180万円</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 同公式情報</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">熱中症も補償の対象です</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            令和8年度の改定で、スポーツ活動中の熱中症が補償対象に追加されました。夏場の運動時の体調変化が補償される保険です。
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">細菌性・ウイルス性食中毒も対象</p>
          <p className="text-sm text-green-800 leading-relaxed">
            けがだけでなく、団体活動中の食中毒も傷害保険で補償されます。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          補償の詳しい内容や、手術費用・その他の保険の対象範囲については、スポーツ安全協会の公式サイトで確認するか、所属している団体に問い合わせることをお勧めします。保険の適用条件や計算方法は複雑な場合があるため、「何が対象になるか」を加入前に確認しておくと、後のトラブル防止につながります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          加入と請求の手続き
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ安全保険に加入したい場合、直接スポーツ安全協会に申し込むわけではありません。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">加入の流れ</p>
          <ol className="space-y-2">
            <li className="text-sm text-gray-700">1. お子さんが所属している団体（野球チーム、サッカークラブなど）に「スポーツ安全保険に加入したい」と伝える</li>
            <li className="text-sm text-gray-700">2. 団体が団員の掛金をまとめてスポーツ安全協会に支払う</li>
            <li className="text-sm text-gray-700">3. 個人への証書は団体が配布（または団体が管理）</li>
          </ol>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          保険を使う必要が生じた場合も、個人で請求するのではなく、団体を通じて手続きをすることが一般的です。けがをした場合の報告は、まず所属している団体に伝え、どう対応するか相談してください。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">補償の適用について</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            この記事は一般的な補償内容をまとめたものです。実際に保険が適用されるかどうかは、けがの内容・状況・団体の活動の種類によって異なります。加入の条件や補償の対象外のケースについては、スポーツ安全協会の公式サイトで確認するか、団体の担当者に詳しく問い合わせてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          他の保険との違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学校のスポーツ活動に関わる保険として、「独立行政法人日本スポーツ振興センター（JSC）の災害共済給付」があります。こちらは学校の部活動に加入する保険で、スポーツ安全保険とは別です。加入している保険が何かは、学校や所属団体に確認してください。
        </p>

        <p className="text-gray-700 leading-relaxed">
          スポーツ安全保険は、スポーツ少年団やクラブチーム、地域のスポーツ団体など、民間の団体が主に利用しています。学校の部活動で参加する大会も、学校経由でなく民間団体を通じて参加する場合は、スポーツ安全保険に加入していることが多いです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ少年団との関係
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団に所属する場合、スポーツ安全保険への加入を勧められることがほとんどです。スポーツ少年団自体は保険を提供する組織ではなく、団員がこの保険に加入することで、活動中のけがに対応するという仕組みです。
        </p>

        <p className="text-gray-700 leading-relaxed">
          スポーツ少年団について詳しく知りたい方は、
          <Link href="/articles/sports-shonendan" className="text-blue-600 font-bold hover:underline">スポーツ少年団とは</Link>
          も参考にしてください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          けがのリスクと予防
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ安全保険は、けがをしたときの経済的サポートです。ただし、できればけがをしないようにすることが大事です。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/injury-prevention-kids" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">スポーツでのけが予防</p>
            <p className="text-xs text-green-800">けがを減らすための対策</p>
          </Link>
          <Link href="/articles/growth-plate-injury" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">成長期のけが</p>
            <p className="text-xs text-green-800">子どもの骨の特性と注意点</p>
          </Link>
          <Link href="/articles/heat-stroke-sports-kids" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">熱中症対策</p>
            <p className="text-xs text-green-800">夏場のスポーツ活動の安全</p>
          </Link>
          <Link href="/articles/coach-trouble" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">コーチとのトラブル</p>
            <p className="text-xs text-green-800">指導方法についての相談</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          お子さんの体と心の安全が一番大事です。スポーツ安全保険は、万が一のときの強い味方になってくれます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          保険と並ぶ、スポーツ選びの大事なポイント
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ選びのときは、保険の有無だけでなく、コーチの質、練習環境、練習の強度など、複数の視点で判断することが大切です。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトでは、新体力テストの記録を入力すると、お子さんの体力の特徴と向いているスポーツを診断できます。どんなスポーツを始めるか迷ったときの参考にしてください。
        </p>

        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんに合ったスポーツを診断してみませんか?</p>
          <p className="text-blue-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
