import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ボクシングに向いている子の特徴｜年代別試合規定で見る成長への配慮',
  description:
    'ボクシングに向いている子の特徴を日本ボクシング連盟の公式ガイドから解説。小学5年生から参加できる実戦競技、それ以下の学年向けマスボクシング、年代別試合時間の段階的な設計を紹介。',
  openGraph: {
    title: 'ボクシングに向いている子の特徴｜年代別試合規定で見る成長への配慮',
    description:
      'ボクシングに向いている子の特徴を日本ボクシング連盟の公式ガイドから解説。小学5年生から参加できる実戦競技、それ以下の学年向けマスボクシング、年代別試合時間の段階的な設計を紹介。',
    images: [{ url: '/images/articles/boxing-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/boxing-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/boxing-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ボクシングに向いている子の特徴｜年代別試合規定で見る成長への配慮',
    images: ['/images/articles/boxing-aptitude.jpg'],
  },
};

export default function BoxingAptitudePage() {
  return (
    <ArticleLayout
      title="ボクシングに向いている子の特徴｜年代別試合規定で見る成長への配慮"
      heroImage="/images/articles/boxing-aptitude.jpg"
      heroAlt="ボクシング練習を行う子どもたち"
      publishDate="2026年8月"
      slug="boxing-aptitude"
      description="ボクシングに向いている子の特徴を日本ボクシング連盟の公式ガイドから解説。小学5年生から参加できる実戦競技、それ以下の学年向けマスボクシング、年代別試合時間の段階的な設計を紹介。"
      tags={['ボクシング', '武道', '適性診断']}
      shareText="ボクシングは小学5年生から参加可能。それ以下はマスボクシングのゴールデンキッズ区分で安全に学べる。 #子育て #ボクシング"
      citations={[
        '公益社団法人 日本ボクシング連盟「競技規則」 https://jabf-revival.com/rules/',
        '公益社団法人 日本ボクシング連盟「ジュニア育成」 https://jabf-revival.com/junior/',
        '文部科学省「中学校学習指導要領解説 保健体育編」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          ボクシングとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ボクシングは、グローブを装着して拳で対手とスパーリングを行う格闘技です。公益社団法人日本ボクシング連盟による公式競技規則では、子どもの発育・発達段階に応じて、学年ごとに異なるカテゴリが設定されています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          親御さんが最も気にされる「子どもにボクシングは安全か」という質問に対しては、公式ルールに基づいて答えられます。小学5年生までは実戦の試合ではなく、成長段階に合わせた練習体系が用意されているのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          子どもが参加できるボクシング — マスボクシング vs 実戦競技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ボクシングには、大きく2つの区分があります。子どもの成長段階によって、どの区分で練習・試合を行うかが決まります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <p className="font-bold text-red-900 mb-2 text-sm">マスボクシング（ゴールデンキッズ）：小学1〜3年生</p>
            <p className="text-sm text-red-800 leading-relaxed">
              小学1年生から参加できる区分です。実戦での打撃を当てる試合ではなく、身につけた技術と姿勢を競う「マスボクシング」形式になります。階級は体重ではなく「身長」で分けられており、成長段階による体格差が試合の組み合わせで配慮される設計になっています。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2 text-sm">実戦競技（アンダージュニア）：小学5年生から</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              打撃を当てる試合は、日本ボクシング連盟の公式ルールでは「小学5年生（10歳）」から参加が可能です。小学4年生以下では、マスボクシングの区分で技術を習得してから、段階的に実戦へ進む設計になっています。
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">マスボクシングの階級 — 身長で分ける理由</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            マスボクシングの階級分けは、体重ではなく「身長」を基準にしています。これは、同じ年代でも子どもによって成長速度が異なるため、身長で分けることで、競技力が近い相手と試合できるようにするための工夫です。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-100">
                  <th className="px-3 py-2 text-left font-bold text-gray-700">区分</th>
                  <th className="px-3 py-2 text-left font-bold text-gray-700">対象学年</th>
                  <th className="px-3 py-2 text-center font-bold text-gray-700">階級</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2 font-bold text-gray-900">ゴールデンキッズ低学年</td>
                  <td className="px-3 py-2 text-gray-600">1〜3年生</td>
                  <td className="px-3 py-2 text-center text-gray-600">125cmまで / 125cm超</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2 font-bold text-gray-900">ゴールデンキッズ高学年</td>
                  <td className="px-3 py-2 text-gray-600">4〜6年生</td>
                  <td className="px-3 py-2 text-center text-gray-600">140cmまで / 140cm超</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2 font-bold text-gray-900">ジュニア（中学）</td>
                  <td className="px-3 py-2 text-gray-600">1〜3年生</td>
                  <td className="px-3 py-2 text-center text-gray-600">155cmまで / 155cm超</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2 font-bold text-gray-900">ユース（高校）</td>
                  <td className="px-3 py-2 text-gray-600">1〜3年生</td>
                  <td className="px-3 py-2 text-center text-gray-600">165cmまで / 165cm超</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">出典: 公益社団法人 日本ボクシング連盟「競技規則」</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          年代別試合時間 — 段階的に伸びる設計
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          実戦競技の試合時間は、学年が上がるにつれて段階的に長くなります。子どもの身体的・精神的発達に合わせた設計になっており、いきなり長時間の試合を求めません。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">カテゴリ</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対象学年</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">試合時間</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">UJ（小学5・6年）</td>
                <td className="px-3 py-2 text-gray-600">5・6年生</td>
                <td className="px-3 py-2 text-center text-gray-600">10～12歳</td>
                <td className="px-3 py-2 text-center text-gray-600">1分30秒×3ラウンド</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学生</td>
                <td className="px-3 py-2 text-gray-600">1～3年生</td>
                <td className="px-3 py-2 text-center text-gray-600">12～15歳</td>
                <td className="px-3 py-2 text-center text-gray-600">2分×3ラウンド</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ジュニア（高校生）</td>
                <td className="px-3 py-2 text-gray-600">1～3年生</td>
                <td className="px-3 py-2 text-center text-gray-600">高校生</td>
                <td className="px-3 py-2 text-center text-gray-600">2分×3ラウンド</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シニア</td>
                <td className="px-3 py-2 text-gray-600">-</td>
                <td className="px-3 py-2 text-center text-gray-600">18～40歳</td>
                <td className="px-3 py-2 text-center text-gray-600">3分×3ラウンド</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 公益社団法人 日本ボクシング連盟「競技規則」 ※各ラウンド間は1分の休憩</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
          <p className="font-bold text-red-900 mb-2">段階的な試合時間設計の意図</p>
          <p className="text-sm text-red-800 leading-relaxed">
            小学5年生のUJカテゴリでは1分30秒×3ラウンド（休憩込みで約7分）の試合です。中学生になると2分×3ラウンド（約9分）に段階的に長くなります。この設計により、子どもの体力・精神的な持続力に無理のない形で、次第に試合の厳しさに適応していく構造になっています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          日本ボクシング連盟のジュニア育成方針
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本ボクシング連盟は、小学生から中学生を対象とした育成方針として、以下の4つの学習領域を重視しています。この方針は「競技を強要する」のではなく「子どもの適性と興味を見守る」というスタンスが伝わってきます。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">基礎を知る</h3>
              <p className="text-sm text-gray-600">
                ボクシングの基本となる姿勢、フットワーク、パンチの形などの技術基礎を学ぶ段階です。ここで正しい動きを身につけることが、その後の安全な発展につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体力をつくる</h3>
              <p className="text-sm text-gray-600">
                有酸素運動と筋力強化を通じて、競技に必要な体力基盤を構築します。この段階では、スポーツの楽しさや達成感を感じることを重視します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体幹をつくる</h3>
              <p className="text-sm text-gray-600">
                バランスと安定性を高める体幹トレーニングです。体幹が安定することで、より効率的で怪我しにくい動作が可能になります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽しさを知る</h3>
              <p className="text-sm text-gray-600">
                試合や練習を通じて、ボクシングの面白さや達成感を実感することです。長く続ける動機づけは、勝負よりも「楽しさ」に根ざしています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">この方針から見える「安全への配慮」</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            この4領域は「勝利」や「ランキング」といった競争原理に基づいていません。基礎から体幹まで段階的に構築し、その過程で楽しさを知るという流れは、子どもの身体と心が無理なく発達することを前提にした育成法です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校の保健体育では、武道の履修が定められています。学習指導要領で例示されている武道は以下の3つです。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <p className="font-bold text-gray-900 text-sm mb-1">柔道</p>
            <p className="text-xs text-gray-600">投げ技と寝技の基礎を学ぶ伝統武道</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <p className="font-bold text-gray-900 text-sm mb-1">剣道</p>
            <p className="text-xs text-gray-600">刀を用いた攻撃と防御の技術と精神性を学ぶ</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <p className="font-bold text-gray-900 text-sm mb-1">相撲</p>
            <p className="text-xs text-gray-600">伝統的な格闘技として相手を倒す技術を学ぶ</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          ボクシングは学校体育の「武道」に含まれていません。これは、学習指導要領が伝統武道を中心に構成されているためです。ボクシングを習う場合は、学校外の道場やクラブを通じた参加になります。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <p className="font-bold text-gray-900 mb-2 text-sm">学校体育と学校外活動の違い</p>
          <p className="text-sm text-gray-600">
            学校体育では武道として「安全指導」と「倫理観」が重視されます。ボクシングを習う場合は、学校外の認定道場で、日本ボクシング連盟の公式ルールと指導方針に基づく環境で始めることが重要です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          ボクシングに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">個人競技が好きな子</h3>
              <p className="text-sm text-gray-600">
                ボクシングは1対1の直接対決です。チームスポーツとは異なり、自分の努力が直結して結果に現れます。個人の責任と成長を実感したい子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">身体を鍛えることに興味がある子</h3>
              <p className="text-sm text-gray-600">
                ボクシングは体力、筋力、体幹をバランスよく鍛える競技です。「体を強くしたい」という動機が強い子が、練習を続けやすい傾向があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">集中力と判断力が必要な活動を好む子</h3>
              <p className="text-sm text-gray-600">
                ボクシングは、相手の動きを読み、素早く判断してパンチを出す必要があります。一瞬の判断が結果に影響する競技のため、集中力の高い子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">長期的な技術習得を楽しめる子</h3>
              <p className="text-sm text-gray-600">
                ボクシングは一朝一夕に上達しません。基礎から積み重ねる過程で、自分の動きが少しずつ改善されていく喜びを感じられる子が向いています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、日本ボクシング連盟の公式ガイドと競技特性から見える傾向を整理したものです。実際には、小学5年生や中学生になってから始めてみて、子どもの適性や興味を見守ることが大切です。最初は不安でも、基礎練習を通じて「ボクシングが好きになる」という子も多くいます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          他の武道との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中学校の保健体育では複数の武道から選択できます。ボクシングと他の武道の特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/judo-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">柔道</p>
            <p className="text-xs text-blue-800">投げ技と寝技の伝統武道。相手の力を活かす技術が特徴</p>
          </Link>
          <Link href="/articles/kendo-aptitude" className="bg-purple-50 rounded-2xl p-4 border border-purple-100 hover:bg-purple-100 transition-colors block">
            <p className="font-bold text-purple-900 text-sm mb-1">剣道</p>
            <p className="text-xs text-purple-800">刀を用いた攻防。精神性と礼儀が重視される</p>
          </Link>
          <Link href="/articles/martial-arts-aptitude" className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:bg-green-100 transition-colors block">
            <p className="font-bold text-green-900 text-sm mb-1">格闘技全般</p>
            <p className="text-xs text-green-800">武道から格闘技、そして体力づくりまで</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ボクシングに向いている子は、自分の身体と心を鍛えることを楽しめる子です。小学5年生から実戦競技に参加できますが、それまでのマスボクシングの段階で、安全に基礎を学ぶことができます。年代別試合規定の段階的な設計は、子どもの発育・発達を何より重視していることを示しています。正規の道場で、日本ボクシング連盟の公式ルールに基づいた指導を受けることで、安心して長く続けられる競技です。
        </p>
      </div>

      <div>
        <div className="mt-6 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-red-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-red-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-red-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
