import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '雨の日でもできる子どもの室内スポーツ・運動10選',
  description:
    '雨の日や悪天候でも子どもが楽しく体を動かせる室内スポーツと運動を紹介。縄跳び・ダンス・体操・バランス遊びなど、自宅や体育館でできる運動で子どもの体力と運動神経を育てましょう。',
  openGraph: {
    title: '雨の日でもできる子どもの室内スポーツ・運動10選',
    description:
      '雨の日や悪天候でも子どもが楽しく体を動かせる室内スポーツと運動を紹介。縄跳び・ダンス・体操など、自宅や体育館でできる運動で運動神経を育てましょう。',
    images: [{ url: '/images/articles/indoor-rainy-day-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/indoor-rainy-day-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/indoor-rainy-day-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '雨の日でもできる子どもの室内スポーツ・運動10選',
    images: ['/images/articles/indoor-rainy-day-sports.jpg'],
  },
};

export default function IndoorRainyDaySportsPage() {
  return (
    <ArticleLayout
      title="雨の日でもできる子どもの室内スポーツ・運動10選"
      heroImage="/images/articles/indoor-rainy-day-sports.jpg"
      heroAlt="室内で楽しく運動する子どもたち"
      publishDate="2025年5月"
      slug="indoor-rainy-day-sports"
      description="雨の日や悪天候でも子どもが楽しく体を動かせる室内スポーツと運動を紹介。縄跳び・ダンス・体操・バランス遊びなど、自宅や体育館でできる運動で子どもの体力と運動神経を育てましょう。"
      tags={['室内運動', '雨の日', '幼児', '小学生']}
      shareText="雨の日でも子どもが楽しく動ける！室内スポーツ・運動10選を紹介。縄跳び・ダンス・体操など自宅でできる運動で運動神経を育てましょう #子育て #室内遊び"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          雨の日こそ室内運動の大チャンス
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          雨の日は外で遊べない……そう思いがちですが、実は室内でも子どもの体力・運動神経を育てる機会はたくさんあります。屋外とは異なる動きのパターンを体験することで、バランス感覚や体幹、リズム感など、総合的な運動能力が鍛えられます。
        </p>
        <p className="text-gray-700 leading-relaxed">
          特に「プレゴールデンエイジ（3〜8歳）」や「ゴールデンエイジ（9〜12歳）」の時期は、多様な動きを経験することが重要です。雨の日の室内遊びもその一環として取り入れていきましょう。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          自宅でできる室内運動5選
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">縄跳び（短縄）</h3>
              <p className="text-sm text-gray-600">
                廊下や部屋の一角でできる万能運動。跳ぶリズム感・持久力・下半身の筋力を同時に鍛えられます。前跳び・後ろ跳び・あや跳びと段階的に難しくしていくと飽きずに続けられます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ダンス・リズム体操</h3>
              <p className="text-sm text-gray-600">
                動画に合わせて踊るだけでも十分な全身運動になります。リズム感・協調性・バランス感覚が自然と育ちます。ヒップホップ・よさこい・体操系など子どもの好みに合わせて選びましょう。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランスボード・片足立ち</h3>
              <p className="text-sm text-gray-600">
                バランスボード（なければクッションの上）での片足立ちは体幹強化に効果的です。目を閉じてやってみると難易度が上がり、固有感覚のトレーニングになります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ストレッチ・ヨガ</h3>
              <p className="text-sm text-gray-600">
                子ども向けヨガは柔軟性・集中力・深呼吸の習慣をつけるのに最適です。動物のポーズ（猫・コブラ・木など）は子どもでも楽しみやすく、続けやすいです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">風船バレー・新聞紙ボール</h3>
              <p className="text-sm text-gray-600">
                風船を使ったバレーボールは、安全に飛球系の動きを体験できます。目と手の協調動作（目と手の連動）の発達に効果的で、幼児から小学生まで幅広く楽しめます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          体育館・室内施設でできる運動5選
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-1">卓球</p>
            <p className="text-xs text-blue-800">反射神経・瞬発力・目と手の連動を鍛える。道具が揃えば自宅のテーブルでも代用できる場合も</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-1">バドミントン</p>
            <p className="text-xs text-amber-800">室内コートで楽しめる。シャトルを打つ感覚でリズム感・反応速度が育つ</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-1">体操（マット運動）</p>
            <p className="text-xs text-green-800">前転・側転・ブリッジなど体の使い方の基礎を学べる。柔軟性と体幹が同時に鍛えられる</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <p className="text-sm font-bold text-purple-900 mb-1">フットサル</p>
            <p className="text-xs text-purple-800">室内でできるサッカー。狭いスペースでのボールコントロールが技術向上に直結する</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 border border-red-100 md:col-span-2">
            <p className="text-sm font-bold text-red-900 mb-1">水泳（屋内プール）</p>
            <p className="text-xs text-red-800">天候に左右されない全身有酸素運動。心肺機能・持久力・柔軟性・体幹すべてを同時に鍛えられる。雨の日の習い事として特に相性が良い</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          雨の日は「外で遊べない日」ではなく、「室内で別の運動スキルを磨く日」と考えてみてください。縄跳びやダンス、ストレッチ、卓球など、屋外では体験しにくい動きを取り入れることで、子どもの運動能力はバランスよく発達します。天気に左右されない「室内運動のレパートリー」を増やしておくと、雨の日も充実した運動習慣が続けられます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          よくある質問
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">自宅での運動は何歳から始められますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">2〜3歳から始められる運動はたくさんあります。風船遊び・ストレッチ・バランス遊びなど、怪我のリスクが低いものから始めましょう。親が一緒に参加することで安全性が高まり、子どもの意欲も上がります。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">マンションでも音が出ない運動はありますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">ストレッチ・ヨガ・片足立ちバランス・腹筋運動など、ジャンプを伴わない運動は比較的音が出ません。また、ダンスでも「スローモーション動作」「アイソレーション（体の一部分だけを動かす）」など、低衝撃の動きに絞れば階下への影響を抑えられます。</p>
          </details>
          <details className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <summary className="px-5 py-4 font-bold text-gray-900 cursor-pointer text-sm">室内運動だけでも体力はつきますか？</summary>
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">種目によっては十分な運動強度を確保できます。縄跳び・ダンス・水泳（屋内プール）などは心肺機能・持久力・筋力すべてに刺激を与えられます。屋外運動との組み合わせが理想ですが、悪天候が続く時期でも室内運動を継続することで体力低下を防げます。</p>
          </details>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '自宅での運動は何歳から始められますか？',
                acceptedAnswer: { '@type': 'Answer', text: '2〜3歳から始められる運動はたくさんあります。風船遊び・ストレッチ・バランス遊びなど、怪我のリスクが低いものから始めましょう。' },
              },
              {
                '@type': 'Question',
                name: 'マンションでも音が出ない運動はありますか？',
                acceptedAnswer: { '@type': 'Answer', text: 'ストレッチ・ヨガ・片足立ちバランス・腹筋運動など、ジャンプを伴わない運動は比較的音が出ません。ダンスでもスローモーション動作など低衝撃の動きに絞ると良いです。' },
              },
              {
                '@type': 'Question',
                name: '室内運動だけでも体力はつきますか？',
                acceptedAnswer: { '@type': 'Answer', text: '縄跳び・ダンス・水泳（屋内プール）などは心肺機能・持久力・筋力すべてに刺激を与えられます。室内運動を継続することで体力低下を防げます。' },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
