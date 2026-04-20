import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '4歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の選び方',
  description:
    '4歳児の運動発達の特徴を解説。体操・水泳・サッカー入門など向いているスポーツと、習い事を始める際のポイントを紹介します。',
  openGraph: {
    title: '4歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の選び方',
    description:
      '4歳児の運動発達の特徴を解説。体操・水泳・サッカー入門など向いているスポーツと、習い事を始める際のポイントを紹介します。',
    images: [{ url: '/images/articles/age-4-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-4-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/age-4-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の選び方',
    images: ['/images/articles/age-4-sports.jpg'],
  },
};

export default function Age4SportsPage() {
  return (
    <ArticleLayout
      title="4歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の選び方"
      heroImage="/images/articles/age-4-sports.jpg"
      heroAlt="4歳の子どもがサッカーをしている様子"
      publishDate="2025年4月"
      slug="age-4-sports"
      description="4歳児の運動発達の特徴を解説。体操・水泳・サッカー入門など向いているスポーツと、習い事を始める際のポイントを紹介します。"
      tags={['4歳', '幼児スポーツ', '習い事']}
      shareText="4歳の子どもに向いているスポーツは？運動発達から習い事の選び方まで解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          4歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          4歳になると、3歳よりも動きがスムーズになり、バランス感覚と協調性が大きく向上します。片足ケンケンができるようになり、ボールを手で投げたり足で蹴ったりする動作も安定してきます。友達と一緒に動く「並行遊び」から、少しずつ「協同遊び」へと移行し始める時期でもあります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">バランス系</p>
            <p className="text-xs text-blue-800">片足立ち5秒以上、ケンケンで前進できる</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <p className="text-sm font-bold text-green-900 mb-2">ボール操作</p>
            <p className="text-xs text-green-800">ボールを蹴る・下から投げる動作が安定</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">社会性</p>
            <p className="text-xs text-amber-800">友達と一緒に遊ぶルールが少しずつ理解できる</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          4歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操</h3>
            <p className="text-sm text-gray-600">
              4歳は体操を始めるのに非常に適した時期です。前転・後転の基礎、跳び箱、鉄棒の前回りなどにチャレンジできます。全身の協調性・バランス・柔軟性を総合的に高める体操は、どのスポーツの基礎にもなります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳</h3>
            <p className="text-sm text-gray-600">
              4歳になると水への恐怖感が薄れてくる子が多く、バタ足や顔つけの練習が本格的にできるようになります。スイミングスクールのカリキュラムも4歳からの進級が設定されていることが多く、取り組みやすい年齢です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">サッカー（入門クラス）</h3>
            <p className="text-sm text-gray-600">
              4歳対象のサッカースクールでは、ボールを蹴る楽しさを体験することが中心です。ルールはほとんどなく、ボール遊びを通じてスポーツへの興味を引き出します。走る・蹴るといった基本動作が自然に身につきます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">ダンス</h3>
            <p className="text-sm text-gray-600">
              音楽に合わせてジャンプしたり回ったりするダンスは、4歳の子どもが大好きな動きそのものです。表現することへの楽しさと、リズム感・柔軟性を同時に育てられます。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          習い事を選ぶ際のポイント
        </h2>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <ul className="space-y-3">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span><strong>子どもが「やりたい」と言ったものを優先する</strong> — 4歳は自己主張が強くなる時期。親が決めたスポーツより、子ども本人が興味を持ったものの方が続きやすいです。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span><strong>体験教室を利用する</strong> — ほとんどのスポーツ教室で無料または低価格の体験ができます。入会前に必ず体験して、子どもの反応を見てから決めましょう。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span><strong>掛け持ちは週2〜3回まで</strong> — 習い事の数が多すぎると自由な遊びの時間が減り、かえって運動発達を妨げる場合があります。幼児期は「遊ぶ時間」も重要な運動経験です。</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          親ができるサポート
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          4歳の子どもは「見てもらいたい」「褒められたい」という承認欲求が強い時期です。習い事でできたことをしっかり認めて褒めることが、次の練習への意欲につながります。技術の上手い下手よりも、「やろうとしたこと」「チャレンジしたこと」を評価しましょう。
        </p>
        <p className="text-gray-700 leading-relaxed">
          また、帰宅後に「今日のお稽古で何が楽しかった？」と聞く習慣をつけることで、子ども自身がスポーツのどの要素が好きなのかを自覚しやすくなり、将来の適性発見につながります。
        </p>
      </div>
    </ArticleLayout>
  );
}
