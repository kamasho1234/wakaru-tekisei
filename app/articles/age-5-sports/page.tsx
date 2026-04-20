import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '5歳の子どもに向いているスポーツ｜幼児期後半の運動発達と習い事の選び方',
  description:
    '5歳児の運動発達の特徴を解説。体操・水泳・テニス入門・空手など向いているスポーツと小学校入学前に身につけておきたい運動能力を紹介します。',
  openGraph: {
    title: '5歳の子どもに向いているスポーツ｜幼児期後半の運動発達と習い事の選び方',
    description:
      '5歳児の運動発達の特徴を解説。体操・水泳・テニス入門・空手など向いているスポーツと小学校入学前に身につけておきたい運動能力を紹介します。',
    images: [{ url: '/images/articles/age-5-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-5-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/age-5-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5歳の子どもに向いているスポーツ｜幼児期後半の運動発達と習い事の選び方',
    images: ['/images/articles/age-5-sports.jpg'],
  },
};

export default function Age5SportsPage() {
  return (
    <ArticleLayout
      title="5歳の子どもに向いているスポーツ｜幼児期後半の運動発達と習い事の選び方"
      heroImage="/images/articles/age-5-sports.jpg"
      heroAlt="5歳の子どもが体操教室で運動している様子"
      publishDate="2025年4月"
      slug="age-5-sports"
      description="5歳児の運動発達の特徴を解説。体操・水泳・テニス入門・空手など向いているスポーツと小学校入学前に身につけておきたい運動能力を紹介します。"
      tags={['5歳', '幼児スポーツ', '習い事', '小学校入学前']}
      shareText="5歳の子どもに向いているスポーツは？幼児期後半の運動発達と習い事選び #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          5歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          5歳は小学校入学の1〜2年前にあたり、幼児期の運動発達がまとまってくる時期です。スキップができるようになり、ボールの上投げや片手でのキャッチも少しずつできるようになります。友達とルールのある遊びを楽しめるようになり、チームスポーツの基礎的な理解も始まります。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">運動項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">5歳の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">走る</td>
                <td className="px-3 py-2 text-gray-600">リズムよく走れる、方向転換も滑らか</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">跳ぶ</td>
                <td className="px-3 py-2 text-gray-600">スキップができる、縄跳びに挑戦できる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">投げる</td>
                <td className="px-3 py-2 text-gray-600">上から投げる動作が出てくる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">バランス</td>
                <td className="px-3 py-2 text-gray-600">片足立ち10秒以上、細い線の上を歩ける</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          5歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操・新体操</h3>
            <p className="text-sm text-gray-600">
              5歳は体操の基礎技術を本格的に習得できる時期です。前転・後転・側転の入門や、跳び箱・鉄棒の基本ができるクラスが多く、柔軟性が高いうちに始めることで怪我のリスクも低く習得できます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳</h3>
            <p className="text-sm text-gray-600">
              5歳頃からクロールの基礎（バタ足+腕の動き）を習得できます。多くのスイミングスクールで5歳前後から泳法の練習が本格化し、小学校までに25mを泳げるお子さんも多くいます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">テニス（幼児クラス）</h3>
            <p className="text-sm text-gray-600">
              5歳からのテニスは、ラケットでボールに当てる感覚を楽しむことが中心です。手と目の協調性（ハンドアイコーディネーション）を高め、集中力や反射神経の基礎も育てます。錦織圭選手も5歳でテニスを始めています。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">空手・武道（幼児クラス）</h3>
            <p className="text-sm text-gray-600">
              礼儀・集中力・体幹を同時に鍛えられる空手は、5歳から入門できる道場が多くあります。試合よりも「型」を中心に学ぶことで、精神的な成長にも効果があります。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          小学校入学前に身につけておきたい運動能力
        </h2>
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">体育の授業で困らないための基礎力</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>50mを最後まで走りきれる持久力</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>前転・後転の基本（体操の授業で使用）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>ボールを投げる・受け取る（ドッジボール等）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>縄跳びの前跳び（小1の体育で登場）</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">
          これらの能力は特定のスポーツに限らず、日常の公園遊びや習い事で自然に身につきます。「できなければいけない」と焦る必要はありませんが、小学校入学前後に苦手意識を持たないよう、楽しみながら経験させてあげましょう。
        </p>
      </div>
    </ArticleLayout>
  );
}
