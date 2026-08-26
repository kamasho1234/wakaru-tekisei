import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '陸上競技に向いている子の特徴|小学生の適性を新体力テストで判断',
  description:
    '陸上競技に向いている子の特徴を、学習指導要領と新体力テストのデータから解説。すべての子が体育で経験する競技です。記録が数値で出る個人種目の特性と、向いている子の見極め方をまとめました。',
  openGraph: {
    title: '陸上競技に向いている子の特徴|小学生の適性を新体力テストで判断',
    description:
      '陸上競技に向いている子の特徴を、学習指導要領と新体力テストのデータから解説。すべての子が体育で経験する競技です。',
    images: [{ url: '/images/articles/track-and-field-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/track-and-field-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/track-and-field-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '陸上競技に向いている子の特徴|小学生の適性を新体力テストで判断',
    images: ['/images/articles/track-and-field-aptitude.jpg'],
  },
};

export default function TrackAndFieldAptitudePage() {
  return (
    <ArticleLayout
      title="陸上競技に向いている子の特徴|小学生の適性を新体力テストで判断"
      heroImage="/images/articles/track-and-field-aptitude.jpg"
      heroAlt="運動会で走る小学生"
      publishDate="2026年8月"
      slug="track-and-field-aptitude"
      description="陸上競技に向いている子の特徴を、学習指導要領と新体力テストのデータから解説。すべての子が体育で経験する競技です。記録が数値で出る個人種目の特性と、向いている子の見極め方をまとめました。"
      tags={['陸上競技', '適性診断', '体力テスト', '学校体育']}
      shareText="陸上競技に向いている子の特徴を体力データと学習指導要領から解説。記録が数値で出る競技だからこそ見えてくることがあります。 #子育て #スポーツ適性"
      citations={[
        '日本陸上競技連盟「日清食品カップ 第40回全国小学生陸上競技交流大会 大会要項」 https://www.jaaf.or.jp/files/competition/document/1878-1.pdf',
        '文部科学省「中学校学習指導要領（平成29年告示）解説 保健体育編」 https://www.mext.go.jp/content/20250213-mxt_kyoiku01-100002608_2.pdf',
        '文部科学省「小学校学習指導要領（平成29年告示）解説 体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          陸上競技は「走る」「跳ぶ」「投げる」などの運動で構成されている基本的なスポーツです。小学校から中学校へと段階を踏みながら学習を深めていく中で、全ての子どもが経験する競技でもあります。この記事では、陸上競技に向いている子の特徴を、新体力テストのデータと学習指導要領の内容から解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          陸上競技は学校体育の中で特別な位置づけ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          陸上競技は、習い事として習うことも多いスポーツですが、同時に学校の体育の授業でも必ず学びます。小学校から段階的に経験を重ねていくからこそ、適性を見極めやすい競技です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">学校体育での学習段階</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">低学年:</span>
              <span>「走・跳の運動遊び」で基本的な動きを習得</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">中学年:</span>
              <span>「走・跳の運動」で動きの質を高める</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">高学年:</span>
              <span>「陸上運動」（短距離走・リレー、ハードル走、走り幅跳び、走り高跳び）で技能と記録に挑戦</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">中学校:</span>
              <span>「陸上競技」として技術を発展させ、効率よい動きを身につける</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、陸上競技に「向いている・向いていない」は、学年が上がるにつれて自然と見えてくるものです。お子さんが新体力テストでどの種目の記録が良いかを確認することで、陸上のどの領域が適性に合っているかがわかります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          新体力テストと陸上競技の3つの要素は対応している
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストの8種目のうち、3つの種目が陸上競技の基本要素（「走」「跳」「投」）にそのまま対応しています。これらの記録を見ることで、陸上のどの領域が得意かが判断できます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">陸上の要素</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対応するテスト項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">具体的な競技</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">走</td>
                <td className="px-3 py-2 text-gray-600">50m走・20mシャトルラン</td>
                <td className="px-3 py-2 text-gray-600">短距離走・長距離走・リレー・ハードル走</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">跳</td>
                <td className="px-3 py-2 text-gray-600">立ち幅とび</td>
                <td className="px-3 py-2 text-gray-600">走り幅跳び・走り高跳び</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">投</td>
                <td className="px-3 py-2 text-gray-600">ソフトボール投げ</td>
                <td className="px-3 py-2 text-gray-600">ハンマー投げ・砲丸投げ・やり投げ等</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんがこの3つのテストでどのような記録を出しているかを確認することで、陸上のどの領域が適性に合っているかがわかります。例えば、50m走は速いけれど立ち幅とびは得意でない場合、短距離走に向いているかもしれません。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">全国平均と比べてみましょう</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            <Link href="/articles/speed-running" className="text-blue-600 font-bold hover:underline">50m走の全国平均</Link>、<Link href="/articles/standing-long-jump-kids" className="text-blue-600 font-bold hover:underline">立ち幅とびの全国平均</Link>、<Link href="/articles/ball-throwing-kids" className="text-blue-600 font-bold hover:underline">ソフトボール投げの全国平均</Link>と比べることで、得意分野が明確になります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          全国大会で学べる、陸上競技の実際
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校高学年になると、全国規模の大会に出場するチャンスが生まれます。全国小学生陸上競技交流大会は、公式な全国大会として実施されており、参加には一定の条件があります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">全国小学生陸上競技交流大会の実施種目</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>・小学5年生100m走（男・女）</li>
            <li>・小学6年生100m走（男・女）</li>
            <li>・コンバインドA：80mハードル・走高跳（男・女）</li>
            <li>・コンバインドB：走幅跳・ジャベリックボール投（男・女）</li>
            <li>・男女混合4×100mリレー</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">出典: 日本陸上競技連盟「全国小学生陸上競技交流大会 大会要項」</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">参加資格</p>
          <ul className="space-y-1 text-sm text-amber-800">
            <li>・小学5・6年生であること</li>
            <li>・日本陸上競技連盟への登録が必須</li>
            <li>・1人が出られるのは1種目のみ（コンバインドやリレーも1種目として扱われます）</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          全国大会への参加を目指すことで、お子さんの適性がより明確になります。また、「コンバインド」という複数の種目を組み合わせた競技形式も、陸上の多様性を学べるポイントです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          陸上競技に向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">記録が数値で出ることが好き</h3>
              <p className="text-sm text-gray-600">
                陸上競技は秒数や距離で記録が明確に出る競技です。自分の進歩が数字でわかる喜びを感じられる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">個人で自己記録に挑戦したい</h3>
              <p className="text-sm text-gray-600">
                陸上は個人種目が基本です。チームスポーツではなく、自分のペースで目標に向かって努力する環境を好む子が伸びやすい傾向があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">新体力テストで50m走または立ち幅とびが得意</h3>
              <p className="text-sm text-gray-600">
                これらの項目の記録が全国平均より良い子は、陸上の基本的な運動能力が高い可能性があります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">重要な但し書き</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            上記の特徴は、競技の特性から整理したものであり、公式に定められた基準ではありません。お子さんの興味や努力により、適性は大きく変わります。記録が平均より低くても、陸上が大好きなお子さんは十分に上達できます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          陸上の各領域について詳しく知る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          陸上競技は「走」「跳」「投」に分かれています。各領域について詳しく学ぶことで、お子さんの適性がより明確になります。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/speed-running" className="bg-amber-50 rounded-2xl p-4 border border-amber-100 hover:bg-amber-100 transition-colors block">
            <p className="font-bold text-amber-900 text-sm mb-1">50m走の全国平均と得点表</p>
            <p className="text-xs text-amber-800">短距離走に必要な瞬発力について</p>
          </Link>
          <Link href="/articles/standing-long-jump-kids" className="bg-amber-50 rounded-2xl p-4 border border-amber-100 hover:bg-amber-100 transition-colors block">
            <p className="font-bold text-amber-900 text-sm mb-1">立ち幅とびの全国平均と得点表</p>
            <p className="text-xs text-amber-800">跳躍力と下肢の瞬発力について</p>
          </Link>
          <Link href="/articles/ball-throwing-kids" className="bg-amber-50 rounded-2xl p-4 border border-amber-100 hover:bg-amber-100 transition-colors block">
            <p className="font-bold text-amber-900 text-sm mb-1">ソフトボール投げの全国平均と得点表</p>
            <p className="text-xs text-amber-800">投げる力と上半身の筋力について</p>
          </Link>
          <Link href="/articles/shuttle-run-kids" className="bg-amber-50 rounded-2xl p-4 border border-amber-100 hover:bg-amber-100 transition-colors block">
            <p className="font-bold text-amber-900 text-sm mb-1">20mシャトルランの全国平均</p>
            <p className="text-xs text-amber-800">長距離走に必要な持久力について</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          また、
          <Link href="/articles/fitness-test-guide" className="text-blue-600 font-bold hover:underline">新体力テストの完全ガイド</Link>
          では、8種目すべての記録から総合的な体力評価を確認できます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          兄弟姉妹や年齢による違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同じ学年でも、4月生まれと3月生まれでは発達段階に大きな差があります。陸上競技は記録が明確に出るため、この差が特に見えやすい競技です。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">発達段階の違いを踏まえよう</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-2">
            お子さんが「陸上に向いていない」と判断する前に、月齢による発達の差を考慮してください。特に小学3～4年生までは、成長のペースが大きく異なります。同じ学年でも、3～4ヶ月の身体的成熟度の違いが記録に影響することは珍しくありません。
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            何年も続けることで、適性は変わる可能性があります。1つの時点での記録だけで判断せず、長期的な成長を見守ることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          陸上競技に向いている子の見極め方は、新体力テストのデータと、お子さん自身の「記録に挑戦したい気持ち」の両方を大切にすることです。すべての子が学校体育で経験する競技だからこそ、成長の過程で適性は変わっていきます。数値で見える進歩が喜びになる子にとって、陸上競技は最高のプラットフォームになるでしょう。
        </p>

        <div className="mt-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-amber-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-amber-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-amber-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
