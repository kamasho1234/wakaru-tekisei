import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツ少年団とは？組織構造・指導者資格・掛金・活動内容を解説',
  description:
    'スポーツ少年団は、昭和37年に創設された全国組織。スポーツだけでなく、学習活動・野外活動・社会活動なども行う子ども向けの団体。入団に必要な人数・指導者資格・会費などを、公式情報で詳しく解説します。',
  openGraph: {
    title: 'スポーツ少年団とは？組織構造・指導者資格・掛金・活動内容を解説',
    description:
      'スポーツ少年団は、昭和37年創設の全国組織。指導者にはJSPO公認スポーツ指導者資格が必須。会費は各団が決める。スポーツだけでなく学習活動・野外活動も行う団体です。',
    images: [{ url: '/images/articles/sports-shonendan.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sports-shonendan',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/sports-shonendan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツ少年団とは？組織構造・指導者資格・掛金・活動内容を解説',
    images: ['/images/articles/sports-shonendan.jpg'],
  },
};

export default function SportsShonendanPage() {
  return (
    <ArticleLayout
      title="スポーツ少年団とは？組織構造・指導者資格・掛金・活動内容を解説"
      heroImage="/images/articles/sports-shonendan.jpg"
      heroAlt="野球のスポーツ少年団の集合写真"
      publishDate="2026年8月"
      slug="sports-shonendan"
      description="スポーツ少年団は、昭和37年に創設された全国組織。スポーツだけでなく、学習活動・野外活動・社会活動なども行う子ども向けの団体。入団に必要な人数・指導者資格・会費などを、公式情報で詳しく解説します。"
      tags={['スポーツ少年団', '地域スポーツ', '組織構造', '子育て']}
      shareText="スポーツ少年団は、昭和37年創設の全国組織。指導者にはJSPO公認スポーツ指導者資格が必須。会費は各団が決めます。 #子育て #スポーツ"
      citations={[
        'ガイドブック「スポーツ少年団とは」令和8年度版（PDF） https://www.japan-sports.or.jp/Portals/0/data/syonendan/2026/R8_guidebook.pdf',
        'スポーツ少年団とは（日本スポーツ協会） https://www.japan-sports.or.jp/club/tabid265.html',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          地域の「スポーツ少年団」に入ると、どんな活動をするのか、どんな団体なのか、よく分からないまま始めるお子さんも多いのではないでしょうか。スポーツ少年団は、民間のスポーツクラブとは異なり、**全国に統一された組織構造を持つ団体**です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、スポーツ少年団の成り立ち、組織の仕組み、入団に必要な条件、指導者の資格要件などを、公式情報から詳しく解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ少年団の歴史と成り立ち
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本スポーツ少年団は、**昭和37年（1962年）に日本体育協会（当時）の創立50周年の記念事業として創設**されました。つまり、かなり歴史のある全国組織です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">全国規模で統一された組織</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            スポーツ少年団は、地域ごとに勝手に活動しているわけではなく、日本全体で統一された理念と組織構造を持つ団体です。だからこそ、転勤などで別の地域に引っ越しても、スポーツ少年団の活動はどの都道府県でも同じ基準で行われています。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          創設から60年以上が経ち、今では全国の多くの地域でスポーツ少年団の活動が行われています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          4段階の組織構造
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団の組織は、4段階に分かれています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <ol className="space-y-3">
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-900">1. 単位スポーツ少年団（最小単位）</p>
              <p className="text-gray-600 mt-1">野球チーム、サッカークラブ、ダンス教室など、地元で活動する個別の団体</p>
            </li>
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-900">2. 市区町村スポーツ少年団</p>
              <p className="text-gray-600 mt-1">その市区町村にある複数の単位団を統括する組織</p>
            </li>
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-900">3. 都道府県スポーツ少年団</p>
              <p className="text-gray-600 mt-1">その都道府県にある複数の市区町村を統括する組織</p>
            </li>
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-900">4. 日本スポーツ少年団（全国組織）</p>
              <p className="text-gray-600 mt-1">全国の統一された理念と方針を定める最上位の組織</p>
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">出典: 日本スポーツ協会ガイドブック</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、お子さんが所属する野球チームなどの「単位団」は、市区町村 → 都道府県 → 全国という階層組織の一部として位置づけられているわけです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          単位団を作るのに必要な条件
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団として活動するには、何名以上いればいいのか、指導者にはどんな資格が必要なのか、という条件が決まっています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3">単位団の登録要件</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・スポーツ少年団の理念に賛同する団員</li>
            <li className="text-sm text-gray-700">・団員は10名以上</li>
            <li className="text-sm text-gray-700">・理念を学んだ指導者2名以上</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 日本スポーツ協会ガイドブック</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          ただし、10名以上という要件は「年度ごとの登録」であり、その年度の団員がずっと10名以上を保つ必要があるということです。月ごとに人数が変わることもあります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          指導者の資格が必須：これが他のスポーツクラブとの大きな違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団と、民間のスポーツクラブ（例えば個人が経営している体操教室など）の最も大きな違いが、**指導者に公認資格が必須**という点です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">JSPO公認スポーツ指導者資格が必須</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            スポーツ少年団の指導者として登録するには、JSPO公認スポーツ指導者資格を保有していることが必須です。これは、指導者の質を確保するための重要な制度です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          指導者が資格を取るには、どうすればいいのでしょうか。公式には、「**JSPO公認スタートコーチ（ジュニア・ユース）資格の取得が推奨**されている」と記載されています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">JSPO公認スタートコーチ資格の取り方</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・各都道府県で開催される養成講習会に参加する</li>
            <li className="text-sm text-gray-700">・講習会を修了すると、「スポーツ少年団の理念を学んだ指導者」として登録できる</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 日本スポーツ協会ガイドブック</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">資格なしで「コーチ」と名乗れる時代は終わった</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            昨今、「スポーツコーチなら誰でもできる」という時代ではなくなりました。スポーツ少年団は、指導者に公認資格を求めることで、指導の質と子どもの安全を確保しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          入団に必要な費用：登録料と会費は別
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団に入団するときの費用について、保護者が払う額の構成を正確に理解しておきましょう。実は、複数の層の費用が組み合わさっています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">保護者が払う費用の構成</p>
          <ul className="space-y-3">
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-600">1. 日本スポーツ少年団への登録料</p>
              <p className="text-gray-600 mt-1">令和8年度：団員1人あたり年間300円</p>
              <p className="text-xs text-gray-500 mt-1">（指導者・役員・スタッフは700円）</p>
            </li>
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-600">2. 市区町村スポーツ少年団の登録料</p>
              <p className="text-gray-600 mt-1">各市区町村で額が異なる</p>
            </li>
            <li className="text-sm text-gray-700">
              <p className="font-bold text-gray-600">3. 所属する団の会費</p>
              <p className="text-gray-600 mt-1">各団が自分たちで決める額</p>
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 日本スポーツ協会ガイドブック</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">「スポーツ少年団は年300円で入れる」は間違い</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            インターネットで「スポーツ少年団の会費は300円」と記載されているサイトもありますが、これは間違いです。年300円は「全国組織へ納める登録料」であり、実際に保護者が払う額は、市区町村の登録料＋団の会費の総額になります。会費は団によって大きく異なるため、所属する団に直接確認が必要です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「うちの団の会費はいくらですか？」と聞くことが、入団前には最も重要です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツだけではない活動内容
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団という名前から「スポーツだけの活動」と思いがちですが、実は異なります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">スポーツ少年団が行う活動</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800">・スポーツ活動</li>
            <li className="text-sm text-blue-800">・学習活動</li>
            <li className="text-sm text-blue-800">・野外活動</li>
            <li className="text-sm text-blue-800">・レクリエーション活動</li>
            <li className="text-sm text-blue-800">・社会活動</li>
            <li className="text-sm text-blue-800">・文化活動</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 日本スポーツ協会ガイドブック</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、スポーツ少年団は「スポーツを通じて子どもを育成する」という理念の下で、スポーツ以外の多様な経験も提供している組織です。
        </p>

        <p className="text-gray-700 leading-relaxed">
          ただし、実際にどんな活動を行うかは、各団によって異なります。スポーツがメインで、他の活動はほぼ行わない団もあれば、学習や野外活動に力を入れる団もあります。入団前に、その団が「どんな活動を計画しているのか」確認することが大切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          団員の構成：小学生が中心
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団は、「小学生を中心として構成されている」とされています。ただし、中学生や高校生が入団できないわけではなく、多くの団が小学生をメインとしているということです。
        </p>

        <p className="text-gray-700 leading-relaxed">
          実際の団員の年齢構成は、団によって異なります。野球やサッカーなど人気競技の団は小学生が多く、マイナー競技の団は複数学年が混在していることもあります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          保護者の関わり
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団に入団したとき、保護者にはどのような負担や役割があるのか、これは多くの保護者が気になる点です。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          実際のところ、保護者の関わり方は団によって大きく異なります。当番制度、寄付金の有無、親の参加義務など、団ごとに独立した運営方針を決めています。入団前に確認すべき重要な項目です。
        </p>

        <p className="text-gray-700 leading-relaxed">
          保護者当番について詳しく知りたい方は、
          <Link href="/articles/parent-duty-sports" className="text-blue-600 font-bold hover:underline">スポーツ活動と保護者当番</Link>
          も参考にしてください。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ少年団と民間クラブの違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          地域にはスポーツ少年団以外にも、民間のスポーツクラブ（個人経営の体操教室、商業的なスポーツスクール等）があります。主な違いを整理しておきましょう。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">スポーツ少年団</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">民間スポーツクラブ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">組織</td>
                <td className="px-3 py-2 text-gray-600">全国統一された組織</td>
                <td className="px-3 py-2 text-gray-600">各クラブが独立して運営</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">指導者資格</td>
                <td className="px-3 py-2 text-gray-600">JSPO公認必須</td>
                <td className="px-3 py-2 text-gray-600">必須でない場合も多い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">活動内容</td>
                <td className="px-3 py-2 text-gray-600">スポーツ以外の活動も含む</td>
                <td className="px-3 py-2 text-gray-600">スポーツ技能習得がメイン</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">費用体系</td>
                <td className="px-3 py-2 text-gray-600">複数層の登録料＋会費</td>
                <td className="px-3 py-2 text-gray-600">月謝制など様々</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600 font-bold">競技の統一性</td>
                <td className="px-3 py-2 text-gray-600">全国大会に向けた統一ルール</td>
                <td className="px-3 py-2 text-gray-600">クラブごとに独自の方針</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          どちらが優れているわけではなく、スポーツをしたい子どもと家族のニーズに合わせて選ぶべきものです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ安全保険と一緒に確認を
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団に入団するときは、
          <Link href="/articles/sports-insurance-kids" className="text-blue-600 font-bold hover:underline">スポーツ安全保険</Link>
          への加入も同時に勧められることがほとんどです。これは団体向けのけがの保険で、別途費用がかかります。保険の掛金も確認した上で、入団を決めるといいでしょう。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          入団前に確認すべきポイント
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団への入団を検討するときは、以下の点を確認してから決めることをお勧めします。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・その団の会費はいくらか</li>
            <li className="text-sm text-gray-700">・指導者は JSPO公認資格を持っているか</li>
            <li className="text-sm text-gray-700">・市区町村スポーツ少年団への登録料はいくらか</li>
            <li className="text-sm text-gray-700">・保護者の当番制度はあるか、どのくらいの頻度か</li>
            <li className="text-sm text-gray-700">・年間の活動予定は何か（試合・大会の数など）</li>
            <li className="text-sm text-gray-700">・スポーツ安全保険への加入は必須か、掛金は誰が払うか</li>
            <li className="text-sm text-gray-700">・その団は小学生だけか、複数学年が入団しているか</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ選びと習い事の決め方
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ少年団か民間クラブか、どの種目を選ぶか、という判断は、お子さんの体力や性質も関係してきます。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトでは、新体力テストの記録を入力すると、お子さんの体力の特徴と向いているスポーツを診断できます。スポーツ選びの参考にしてみてください。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/sports-club-choosing" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">スポーツクラブの選び方</p>
            <p className="text-xs text-green-800">子どもに合った習い事の見つけ方</p>
          </Link>
          <Link href="/articles/sports-cost-comparison" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">スポーツ習い事の費用比較</p>
            <p className="text-xs text-green-800">各競技の平均的な費用</p>
          </Link>
          <Link href="/articles/working-parents-sports" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">働く保護者とスポーツ</p>
            <p className="text-xs text-green-800">当番制度との付き合い方</p>
          </Link>
          <Link href="/articles/sport-selection" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">子どもに合ったスポーツの見つけ方</p>
            <p className="text-xs text-green-800">体力と性格から考える</p>
          </Link>
        </div>

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
