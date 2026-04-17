import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '不器用な子・運動が苦手な子は伸びない？正しい関わり方',
  description:
    'ボールが取れない、縄跳びが苦手、体育が嫌いな子どもへの関わり方を解説。不器用さの原因と、親ができるサポート方法。',
  openGraph: {
    title: '不器用な子・運動が苦手な子は伸びない？正しい関わり方',
    description:
      'ボールが取れない、縄跳びが苦手、体育が嫌いな子どもへの関わり方を解説。不器用さの原因と、親ができるサポート方法。',
    images: [{ url: '/images/articles/child-clumsy.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/child-clumsy',
  },
  twitter: {
    card: 'summary_large_image',
    title: '不器用な子・運動が苦手な子は伸びない？正しい関わり方',
    images: ['/images/articles/child-clumsy.jpg'],
  },
};

export default function ChildClumsynessPage() {
  return (
    <ArticleLayout
      title="不器用な子・運動が苦手な子は伸びない？正しい関わり方"
      heroImage="/images/articles/child-clumsy.jpg"
      heroAlt="ゆっくり練習している子どもを見守る親"
      publishDate="2025年4月"
      slug="child-clumsy"
      description="ボールが取れない、縄跳びが苦手、体育が嫌いな子どもへの関わり方を解説。不器用さの原因と、親ができるサポート方法。"
      tags={['運動が苦手', '不器用', '子育て']}
      shareText="不器用・運動が苦手な子どもへの正しい関わり方。焦らず伸ばすコツを解説。 #子育て #運動が苦手"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          「不器用」な子が多い本当の理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子は不器用だから」と親が決めつけてしまうことがあります。しかし、子どもの「不器用さ」の背景には、様々な神経発達段階の違いがあります。これは「生まれつきの欠陥」ではなく、感覚統合や神経-筋協調の発達が人によって異なるだけです。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">5～6%</p>
            <p className="text-xs text-gray-600 mt-1">DCD該当</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">3つ</p>
            <p className="text-xs text-gray-600 mt-1">感覚統合</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
            <p className="text-2xl font-black text-purple-600">多様</p>
            <p className="text-xs text-gray-600 mt-1">才能の形</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">感覚統合の3つの種類</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">前庭覚（バランス）:</span>
              <span>体のバランスを保つ感覚。発達に遅れがあると階段や坂道で不安定</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">固有覚（体の位置）:</span>
              <span>体の位置を認識する感覚。発達に遅れがあるとボール操作が難しい</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">触覚（触れた感覚）:</span>
              <span>触れられたことに反応する感覚。敏感な子は多くの接触刺激に反応しやすい</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          DCD（発達性協調運動障害）って何？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          DCD（Developmental Coordination Disorder）は、5～6%の子どもに見られる発達上の違いです。知的能力や視力・聴力に問題はなく、脳が体の動きをプログラムしにくい状態です。診断を受けると、学校で配慮を得られたり、専門的なトレーニングを受けられたりします。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">特徴</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">説明</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対応</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ボール操作が難しい</td>
                <td className="px-3 py-2 text-gray-600">キャッチ・投げる・蹴る</td>
                <td className="px-3 py-2 text-gray-600">ゆっくり大きなボールで練習</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">細かい動作が難しい</td>
                <td className="px-3 py-2 text-gray-600">箸・ペン・ボタン</td>
                <td className="px-3 py-2 text-gray-600">段階的に練習・補助道具</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">バランスが悪い</td>
                <td className="px-3 py-2 text-gray-600">一本足・階段・坂道</td>
                <td className="px-3 py-2 text-gray-600">転倒防止・サポート体操</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          DCDの診断を受けるには、小児科や児童心理の専門医に相談します。早期の診断と支援により、子どもの自信と運動能力が大きく向上することが報告されています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          不器用さの4つのタイプと対応
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランスタイプ</h3>
              <p className="text-sm text-gray-600">
                階段で手すりが必要、一本足で立てない。対応：平衡台・ボード運動など、バランス能力を段階的に高める
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ボール操作タイプ</h3>
              <p className="text-sm text-gray-600">
                ボールが目の前に来ると慌てる、キャッチできない。対応：大きなボール・ゆっくりした速度から始める
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">細かい動作タイプ</h3>
              <p className="text-sm text-gray-600">
                箸が使えない、字が書けない。対応：段階的練習・補助道具（太いペン、握りやすい箸）</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">全体的に不器用タイプ</h3>
              <p className="text-sm text-gray-600">
                複数の領域で困難。DCD診断を検討し、専門的支援を受ける
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          親が絶対やってはいけないこと
        </h2>

        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-red-900">注意・叱責:</span> 「何度も言ったでしょ」「頭が悪い」は禁止。不器用な子ほど自尊心が傷つく
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-red-900">他人との比較:</span> 「○○くんはできるのに」は避ける。本人のペースを尊重
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-red-900">無理強い:</span> 「もっと練習しろ」は逆効果。少しずつ、楽しさを増やす
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-red-900">公の場での指摘:</span> 友人の前で「あなたは不器用」と言わない。二次的な問題（自信喪失）を生む
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          効果的なサポートの方法
        </h2>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 mb-6">
          <p className="font-bold text-purple-900 mb-2">ストレングスベースドアプローチ</p>
          <ul className="space-y-2">
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">できないことより:</span>
              <span>できることに注目。「ボールは難しいけど、走る時の姿勢が良い」と褒める</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">多様な動き体験:</span>
              <span>繰り返し練習より、様々な遊び（公園・ダンス・水遊び・ダッシュ）を経験させる</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">段階的な目標:</span>
              <span>「ボールをキャッチする」ではなく「大きなボールに手を出す」→「触る」→「つかむ」と細分化</span>
            </li>
            <li className="text-sm text-purple-800 flex gap-2">
              <span className="font-bold">親も一緒に:</span>
              <span>親がやってみて、失敗する様子を見せる。完璧でいい訳ではないことを伝える</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-500 rounded-full inline-block"></span>
          まとめ：不器用な子どもの可能性
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不器用な子どもの多くは、創造性・観察力・言語能力に優れていることが多いです。「運動が苦手=劣っている」ではなく、「運動に時間がかかる代わりに、別の強みがある」という考え方が大切です。
        </p>
        <p className="text-gray-700 leading-relaxed">
          焦らず、子どもの「できた」を増やす工夫をすれば、自信が生まれ、運動能力も伸びていきます。多くの不器用な子どもが、適切なサポートによって、得意分野を見つけ、活躍しています。
        </p>
      </div>
    </ArticleLayout>
  );
}
