import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '学校の水泳授業では何を学ぶ？学習指導要領に基づく学年ごとの内容解説',
  description:
    '学校の水泳授業は「泳げるようになるため」だけではありません。学習指導要領に基づき、低学年の「水遊び」から高学年の「クロール・平泳ぎ」、そして「安全確保につながる運動」まで、学年ごとの学習内容を詳しく解説します。中学校での必修・選択の扱いも含めました。',
  openGraph: {
    title: '学校の水泳授業では何を学ぶ？学習指導要領に基づく学年ごとの内容解説',
    description:
      '学校の水泳授業の学年ごとの学習内容を学習指導要領に基づいて解説。低学年は「水遊び」から始まり、中学年で浮く・もぐる、高学年でクロール・平泳ぎと「安全確保につながる運動」を学びます。',
    images: [{ url: '/images/articles/school-swimming-lesson.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/school-swimming-lesson',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/school-swimming-lesson',
  },
  twitter: {
    card: 'summary_large_image',
    title: '学校の水泳授業では何を学ぶ？',
    images: ['/images/articles/school-swimming-lesson.jpg'],
  },
};

export default function SchoolSwimmingLessonPage() {
  return (
    <ArticleLayout
      title="学校の水泳授業では何を学ぶ？学習指導要領に基づく学年ごとの内容解説"
      heroImage="/images/articles/school-swimming-lesson.jpg"
      heroAlt="学校のプールで水泳授業に取り組む児童"
      publishDate="2026年8月"
      slug="school-swimming-lesson"
      description="学校の水泳授業は『泳げるようになるため』だけではありません。学習指導要領に基づき、低学年の『水遊び』から高学年の『クロール・平泳ぎ』、そして『安全確保につながる運動』まで、学年ごとの学習内容を詳しく解説します。"
      tags={['水泳', '学習指導要領', '体育', '小学校', '中学校', '学習内容']}
      shareText="学校の水泳授業は『泳げるようになる』だけじゃない。学習指導要領では、低学年の水遊びから、安全確保のための背浮きまで、何を学ぶかが明確に決まっています。 #子育て #教育"
      citations={[
        '小学校学習指導要領（平成29年告示）解説 体育編 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
        '中学校学習指導要領（平成29年告示）解説 保健体育編 https://www.mext.go.jp/content/20250213-mxt_kyoiku01-100002608_2.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          学校の水泳授業は「泳げるようになるための時間」だと思われることが多いですが、実は学習指導要領に基づき、学年ごとに何を学ぶかが明確に決まっています。低学年は単に「泳ぐ」のではなく、水の中で呼吸をする・浮くといった基本的な動きを習得することからスタートします。高学年では、クロールや平泳ぎなどの泳ぎ方だけでなく、「安全確保につながる運動」という、万が一の水の事故から身を守るための技能も重視されています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          この記事では、文部科学省の学習指導要領解説に基づき、学年ごとに学校の水泳授業で実際に習うことをまとめています。中学校での必修・選択の扱いもあわせてご紹介します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          水泳運動系は何を学ぶ領域か
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学習指導要領では、水泳運動系について次のように定義されています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">水泳運動系の定義</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            「水の中という特殊な環境での活動におけるその物理的な特性（浮力、水圧、抗力・揚力など）を生かし、浮く、呼吸する、進むなどの課題を達成し、水に親しむ楽しさや喜びを味わうことのできる運動である」
          </p>
          <p className="text-xs text-blue-600 mt-3">出典: 小学校学習指導要領解説 体育編</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、水泳授業は「泳ぐ速さを競う」のではなく、水という特殊な環境で浮く・呼吸する・進むという基本的な課題に取り組む学習です。学年が進むにつれて、この基本的な動きの上に、より高度な泳ぎ方が積み重ねられていきます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学年ごとの学習内容
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          学習指導要領では、小学校を3段階に分けて水泳運動系の学習内容を定めています。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">領域名</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">主な学習内容</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小学1・2年</td>
                <td className="px-3 py-2 text-gray-600">水遊び</td>
                <td className="px-3 py-2 text-gray-600">水の中を移動する運動遊び / もぐる・浮く運動遊び</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小学3・4年</td>
                <td className="px-3 py-2 text-gray-600">水泳運動</td>
                <td className="px-3 py-2 text-gray-600">浮いて進む運動 / もぐる・浮く運動</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小学5・6年</td>
                <td className="px-3 py-2 text-gray-600">水泳運動</td>
                <td className="px-3 py-2 text-gray-600">クロール / 平泳ぎ / 安全確保につながる運動</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 小学校学習指導要領解説 体育編</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          領域名が「水遊び」から「水泳運動」に変わるのは、小学3年生からです。これは低学年で基本的な水の特性を理解したうえで、より体系的に泳ぎ方を習得する段階に進むことを意味します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          低学年（1・2年）：「水遊び」で水に慣れる
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          低学年の「水遊び」は、いきなり泳ぎ方を習うのではなく、水に対する不安感を取り除きながら、水の中での基本的な動きを身に付けることを目的としています。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-3">低学年での学習内容</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800">
              <strong>水の中を移動する運動遊び</strong>：水中を動き回り、水の中での動きに慣れる
            </li>
            <li className="text-sm text-green-800">
              <strong>もぐる・浮く運動遊び</strong>：水にもぐったり、浮いたりする心地よさを楽しむ
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          学習指導要領では、低学年での技能面の重要な課題として「水にもぐることや浮くこと、息を止めたり吐いたりすることを身に付けること」が挙げられています。つまり、いきなり泳ぐのではなく、もぐる・浮く・呼吸することが先に来る順序が公式に示されているのです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">低学年でつまずく子への対応</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            指導要領では「水に対する不安感を取り除く簡単な遊び方を工夫することで学習を進める」と明記されています。プールが苦手な子も、無理に泳がされるのではなく、段階的に水に慣れることが重視されています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学年（3・4年）：「浮いて進む」と「もぐる・浮く」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学3年生からは領域名が「水遊び」から「水泳運動」に変わります。低学年で習った基本的な動きの上に、より体系的な泳ぎ方の習得を目指します。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-3">中学年での学習内容</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800">
              <strong>浮いて進む運動</strong>：安定した呼吸を伴いながら、浮いた状態で前に進む
            </li>
            <li className="text-sm text-green-800">
              <strong>もぐる・浮く運動</strong>：低学年での学習を発展させ、より正確に習得する
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「浮いて進む運動」の重要なポイントは「安定した呼吸を伴うこと」です。これは後に習う本格的な泳ぎ方（クロール・平泳ぎ）の基礎となる技能です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          高学年（5・6年）：クロール・平泳ぎと「安全確保につながる運動」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学5年生から、クロール・平泳ぎなどの本格的な泳法が学習されます。これまで習った浮く・呼吸する技能が、ここで統合されます。
        </p>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-3">高学年での学習内容</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800">
              <strong>クロール</strong>：最も基本的な前泳ぎ
            </li>
            <li className="text-sm text-green-800">
              <strong>平泳ぎ</strong>：腕と脚を同時に動かす泳法
            </li>
            <li className="text-sm text-green-800">
              <strong>安全確保につながる運動</strong>：水の事故から身を守るための技能
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          特に注目すべきは「安全確保につながる運動」です。学習指導要領では、この運動について次のように説明されています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">「安全確保につながる運動」の位置づけ</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            「安全確保につながる運動は、安定した呼吸の獲得を意図した運動である」と定義されており、技能面の重要な課題として「背浮きや浮き沈みをしながら安定した呼吸を伴い浮くこと」が挙げられています。
          </p>
          <p className="text-xs text-blue-600 mt-3">出典: 小学校学習指導要領解説 体育編</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">泳ぐことと同じくらい「浮いて呼吸を確保すること」が重要</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            クロールや平泳ぎなどの泳法は、学習内容の一部に過ぎません。水に落ちたとき、パニックにならず「浮いて呼吸を確保する」という技能が、学習指導要領では同等かそれ以上の重要性を持つように位置づけられています。背浮きができることは、受動的な状態で呼吸を確保する手段として、万が一のときに命を守る可能性がある技能なのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          中学校での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校では、水泳がいつまで必修か、という点で小学校と大きく異なります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">水泳の扱い</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学1・2年</td>
                <td className="px-3 py-2 text-gray-600">必修（全8領域を全て履修）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学3年</td>
                <td className="px-3 py-2 text-gray-600">選択制（4つのまとまりから1領域以上を選択）</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 中学校学習指導要領解説 保健体育編</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、中学3年生では水泳が必修ではなくなります。「器械運動」「陸上競技」「水泳」「ダンス」のうち、1領域以上を選んで履修するという形になり、学校によっては全員が水泳を履修しない可能性もあります。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">「水泳が必ず全員必修なのは中学2年生まで」</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            多くの保護者が「中学の3年間すべてで水泳がある」と思いがちですが、実際には第1・2学年で全員が学ぶ必修領域です。第3学年での選択によっては、中学で水泳を習わない生徒も出てくる仕組みになっています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学校の水泳授業と習い事のスイミングの違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学校の水泳授業では、学年ごとに学習指導要領で定められた内容を、全員が習得することを目指します。一方、習い事のスイミングスクールは、個人のペースや目標に合わせて、より高度な泳法や記録を目指すことが多いです。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんが学校の授業で習ったことを活かして、さらに上の技術を身に付けたいと考えている場合、スイミングスクールは良い選択肢になるでしょう。ただし、スイミングの適性は、単に「泳ぐ速さ」だけでは判断できません。当サイトでは、新体力テストの記録をもとに、お子さんの体力的な特徴からスポーツの適性を診断しています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">スポーツ適性診断について</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            <Link href="/articles/swimming-aptitude" className="text-blue-600 font-bold hover:underline">水泳に向いている子の特徴</Link>
            では、水泳の適性に関連する体力要素をまとめています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/swimming-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">水泳の適性診断</p>
            <p className="text-xs text-green-800">お子さんの体力から向き・不向きを判定</p>
          </Link>
          <Link href="/shindan/sports" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">総合スポーツ適性診断</p>
            <p className="text-xs text-green-800">複数のスポーツから向いているものを検索</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学年別の関連記事
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体力テストや学習内容に関する他の記事も合わせてご覧ください。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/fitness-test-guide" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">新体力テスト完全ガイド</p>
            <p className="text-xs text-blue-800">8種目の内容と評価基準</p>
          </Link>
          <Link href="/articles/tairyoku-chosa-r7" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">令和7年度体力調査結果</p>
            <p className="text-xs text-blue-800">全国平均と学年別データ</p>
          </Link>
          <Link href="/articles/shuttle-run-kids" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">20mシャトルランの全国平均</p>
            <p className="text-xs text-blue-800">持久力テストの得点換算表</p>
          </Link>
          <Link href="/articles/kids-nutrition-sports" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">スポーツをする子どもの栄養</p>
            <p className="text-xs text-blue-800">体力向上のための食事</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          適性診断で向いているスポーツを知る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          水泳授業で習ったことが、お子さんの体力の特徴にどう活かされるかは、他の体力要素との組み合わせで決まります。当サイトのスポーツ適性診断では、新体力テストの8種目の記録から、お子さんに向いているスポーツを総合的に判定できます。
        </p>

        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの体力から向いているスポーツを診断</p>
          <p className="text-blue-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-blue-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
