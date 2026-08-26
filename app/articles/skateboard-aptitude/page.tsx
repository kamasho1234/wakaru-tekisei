import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スケートボードに向いている子の特徴｜オリンピック競技の適性診断',
  description:
    'オリンピック競技のスケートボード（ストリート・パーク）に向いている子の特徴を、公式大会要項と新体力テストのデータから解説。年齢制限がなく、バランス感覚と敏捷性が重要です。',
  openGraph: {
    title: 'スケートボードに向いている子の特徴｜オリンピック競技の適性診断',
    description:
      'スケートボードに向いている子の特徴。年齢制限なし・ヘルメット必須・45秒1本の集中力など、他競技にない特徴を解説。',
    images: [{ url: '/images/articles/skateboard-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/skateboard-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/skateboard-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スケートボードに向いている子の特徴｜オリンピック競技の適性診断',
    images: ['/images/articles/skateboard-aptitude.jpg'],
  },
};

export default function SkateboardAptitudePage() {
  return (
    <ArticleLayout
      title="スケートボードに向いている子の特徴｜オリンピック競技の適性診断"
      heroImage="/images/articles/skateboard-aptitude.jpg"
      heroAlt="スケートボードに取り組む子ども"
      publishDate="2026年8月"
      slug="skateboard-aptitude"
      description="オリンピック競技のスケートボード（ストリート・パーク）に向いている子の特徴を、公式大会要項と新体力テストのデータから解説。年齢制限がなく、バランス感覚と敏捷性が重要です。"
      tags={['スケートボード', 'オリンピック', '適性診断', 'バランス']}
      shareText="スケートボードは年齢制限なし！子どもも大人と同じ大会に出られる競技。ヘルメット必須で安全も重視。 #スケートボード #子育て"
      citations={[
        'ワールドスケートジャパン「第4回 スケートボード日本OPEN ストリート/パーク 大会要項」 https://worldskatejapan.or.jp/skate_board/skate_board_competition/4th_nihonopen_streetpark/',
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボードは、2020年の東京オリンピックから正式競技となりました。「ストリート」と「パーク」という2つの種目があり、障害物のある街路をイメージしたストリート、半円形のボウルをイメージしたパークという異なる環境での技を競います。
        </p>
        <p className="text-gray-700 leading-relaxed">
          スケートボードの最大の特徴は、公式大会に年齢制限がないことです。この記事では、スケートボードに向いている子の特徴を、公式大会要項と新体力テストのデータから解説します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          年齢制限がない競技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボードは、他のオリンピック競技と異なり、年齢を問わず同じ大会に出場できる数少ない競技です。ワールドスケートジャパンの公式大会要項には、以下のように記載されています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">参加資格（大会要項より）</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            年齢を問わず ヘルメット着用義務あり
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、子どもも大人と同じ大会に参加でき、同じ採点基準で評価されます。これは、子どもたちが早い段階で高度な技に挑戦できる環境が整っていることを意味します。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">小学校体育とは異なる領域</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            スケートボードは学習指導要領の学校体育には含まれていません。民間のスケートパークやスクールで習い始めることができます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          必須の安全装備：ヘルメット
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボード大会では、安全装備が厳格に規定されています。保護者が最初に気になる「安全面」について、公式資料で以下のように定められています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">ヘルメット着用規則（大会要項より）</p>
          <p className="text-sm text-blue-800 leading-relaxed mb-3">
            大会参加に際して選手は必ずスケートボード用途のヘルメットを着用してください。顎ヒモに関してもしっかりと締め、脱落が無いよう正しい着用が必要です。
          </p>
          <p className="font-bold text-blue-900 mb-2">ポイント</p>
          <ul className="space-y-1">
            <li className="text-sm text-blue-800 flex gap-2">
              <span>・</span>
              <span>スケートボード用のヘルメットを使用（自転車用とは異なる）</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-2">
              <span>・</span>
              <span>顎ヒモをしっかり締める（脱落防止）</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          安全装備の規定が明確になっているため、保護者は安心して子どもに薦められます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          競技形式：45秒1本の集中力
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボードの競技形式は、他のスポーツとは異なります。1本の試技が45秒という短い時間に集中する必要があります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">試技形式</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ストリート予選</td>
                <td className="px-3 py-2 text-gray-600">45秒の試技を2回実施</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ストリート決勝</td>
                <td className="px-3 py-2 text-gray-600">ラン45秒を3回 ＋ ベストトリック45秒を3回</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">パーク予選</td>
                <td className="px-3 py-2 text-gray-600">45秒の試技を3回実施</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">パーク決勝</td>
                <td className="px-3 py-2 text-gray-600">45秒の試技を3回 ＋ 上位5選手が追加1回</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: ワールドスケートジャパン「第4回 スケートボード日本OPEN ストリート/パーク 大会要項」</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">45秒という制限の意味</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            限られた時間に最高のパフォーマンスを発揮するため、リズム感と瞬時の判断力が求められます。どの技を組み立てるか、1本の試技で決断しなければならない競技です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          必要な体力要素と新体力テストの関連
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボードに必要な体力要素を、新体力テストのデータから分析できます。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">バランス感覚</h3>
              <p className="text-sm text-gray-600 mb-2">
                ボードの上で自分の体を支えるために最重要。反復横とびは素早い方向転換と姿勢保持のテストで、スケートボードでのバランス能力と関連しています。
              </p>
              <p className="text-xs text-gray-500">
                小5男子平均 40.90 点 ／ 女子平均 38.71 点
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">敏捷性と反応速度</h3>
              <p className="text-sm text-gray-600 mb-2">
                複雑な技を素早く組み立てるために必要。反復横とびで測定される敏捷性と、50m走で測定される反応速度が関連しています。
              </p>
              <p className="text-xs text-gray-500">
                小5男子50m走平均 9.46 秒 ／ 女子平均 9.77 秒
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">跳躍力</h3>
              <p className="text-sm text-gray-600 mb-2">
                空中で技を組み立てるために重要。立ち幅とびで測定される跳躍力が、スケートボードでの高さを出す動作に直結しています。
              </p>
              <p className="text-xs text-gray-500">
                小5男子平均 150.96 cm ／ 女子平均 142.39 cm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          向いている子の特徴（公式に定められた基準ではなく、競技の特徴から整理したものです）
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボードは、与えられた課題をクリアする競技ではなく、自分で技を選んで構成を組み立てる競技です。向いている子の特徴は次のとおりです。
        </p>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランス感覚が優れた子</h3>
              <p className="text-sm text-gray-600">
                ボード上での重心移動が上手な子。反復横とびのスコアが高い傾向にあります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔軟な思考を持つ子</h3>
              <p className="text-sm text-gray-600">
                スケートボードは、決まった技の組み立て方ではなく、自分の得意な技を組み合わせる競技。固定的な考え方ではなく、状況に応じて判断を変えられる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">失敗を繰り返しながら学べる子</h3>
              <p className="text-sm text-gray-600">
                一つの技を身につけるために何度も転ぶ必要があります。失敗を前向きに受け止め、同じ失敗から改善策を見つけられる子が成長します。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              ●
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">短時間に集中できる子</h3>
              <p className="text-sm text-gray-600">
                1本の試技が45秒という限られた時間。緊張感の中で最高のパフォーマンスを発揮できる集中力が重要です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          バランス感覚を高める
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          バランス感覚とそれに関連する体力要素について、以下の記事で詳しく解説しています。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/side-step-kids" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">反復横とび（敏捷性）</p>
            <p className="text-xs text-blue-800">素早い方向転換のテスト</p>
          </Link>
          <Link href="/articles/standing-long-jump-kids" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">立ち幅とび（跳躍力）</p>
            <p className="text-xs text-blue-800">脚の爆発力を測定</p>
          </Link>
        </div>

        <p className="text-gray-700 leading-relaxed">
          スケートボードは、年齢制限がなく、子どもが自分のペースでチャレンジできる競技です。興味を示したら、まずはスケートパークの無料体験や初心者向けスクールに参加することをおすすめします。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スケートボードに向いている子は、バランス感覚が優れ、敏捷性と跳躍力を持った子です。年齢制限がないため、子どもが早い段階で本格的に取り組むことができる競技です。安全装備（ヘルメット）が明確に規定されているため、保護者も安心できます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          新体力テストのデータを参考にしながら、お子さんにスケートボードが向いているか判断してみてください。
        </p>

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
