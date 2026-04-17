import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '6歳の子どもに向いているスポーツ｜小学校入学期の運動発達と習い事の選び方',
  description:
    '6歳（小学1年生）の運動発達の特徴を解説。サッカー・水泳・野球・体操など向いているスポーツと、新体力テストの平均データも紹介します。',
  openGraph: {
    title: '6歳の子どもに向いているスポーツ｜小学校入学期の運動発達と習い事の選び方',
    description:
      '6歳（小学1年生）の運動発達の特徴を解説。サッカー・水泳・野球・体操など向いているスポーツと、新体力テストの平均データも紹介します。',
    images: [{ url: '/images/articles/age-6-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-6-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '6歳の子どもに向いているスポーツ｜小学校入学期の運動発達と習い事の選び方',
    images: ['/images/articles/age-6-sports.jpg'],
  },
};

export default function Age6SportsPage() {
  return (
    <ArticleLayout
      title="6歳の子どもに向いているスポーツ｜小学校入学期の運動発達と習い事の選び方"
      heroImage="/images/articles/age-6-sports.jpg"
      heroAlt="6歳の子どもが小学校の体育でスポーツをしている様子"
      publishDate="2025年4月"
      slug="age-6-sports"
      description="6歳（小学1年生）の運動発達の特徴を解説。サッカー・水泳・野球・体操など向いているスポーツと、新体力テストの平均データも紹介します。"
      tags={['6歳', '小学1年生', '習い事', 'スポーツ適性']}
      shareText="6歳（小学1年生）に向いているスポーツは？運動発達の特徴から習い事の選び方まで解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          6歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          6歳は小学校入学と重なる節目の年です。体育の授業が始まり、新体力テストの対象年齢にもなります（文部科学省の新体力テストは小学1年生から対象）。この時期は基本的な動作パターンがほぼ定着し、複数の動作を組み合わせた動きが上手になります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">新体力テスト（6歳・男子平均）</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>50m走：11.7秒</li>
              <li>立ち幅跳び：108cm</li>
              <li>ソフトボール投げ：12.8m</li>
              <li>握力：8.7kg</li>
            </ul>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="text-sm font-bold text-pink-900 mb-2">新体力テスト（6歳・女子平均）</p>
            <ul className="text-xs text-pink-800 space-y-1">
              <li>50m走：12.1秒</li>
              <li>立ち幅跳び：103cm</li>
              <li>ソフトボール投げ：9.3m</li>
              <li>握力：7.5kg</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">※文部科学省「令和4年度体力・運動能力調査」より</p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          6歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">サッカー</h3>
            <p className="text-sm text-gray-600">
              6歳はサッカーを始めるのに最適な時期です。地域のサッカー少年団や民間スクールの多くが6歳（小学1年生）からの入団・入会を受け付けています。チームで動く楽しさを学びながら、走力・持久力・空間認識能力が同時に鍛えられます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">野球・ソフトボール</h3>
            <p className="text-sm text-gray-600">
              少年野球チームへの入団は6〜7歳が一般的です。「投げる・打つ・走る」という全身運動に加え、戦略的な思考や仲間との連携も学べます。特にボールを投げる力（投力）を伸ばしたい場合には最適なスポーツです。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳</h3>
            <p className="text-sm text-gray-600">
              小学校入学と同時に水泳を始める子どもも多く、6歳はクロールを本格習得できる時期です。スイミングスクールの6歳クラスでは、4泳法（クロール・背泳ぎ・平泳ぎ・バタフライ）の基礎を段階的に習得できます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操（器械体操）</h3>
            <p className="text-sm text-gray-600">
              小学校体育で登場する器械体操（マット・跳び箱・鉄棒）を習い事で先取りすることで、体育の授業でも自信を持って取り組めます。6歳は柔軟性が高い時期でもあり、習得しやすい年齢です。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          小学校入学後に習い事を続けるコツ
        </h2>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <ul className="space-y-3">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span><strong>宿題と両立できるスケジュールを組む</strong> — 小学校入学後は宿題・読書・就寝時間のルーティンが重要です。習い事の曜日・時間を無理のない範囲で設定しましょう。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span><strong>習い事は2〜3つまでを目安に</strong> — 詰め込みすぎると疲弊してどれも続かなくなります。好きなものを少数に絞ることが長続きの秘訣です。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span><strong>学校の友達と同じスポーツを始める選択肢も</strong> — 同じクラスの子が多いチームに入ることで、学校生活との相乗効果が生まれる場合もあります。</span>
            </li>
          </ul>
        </div>
      </div>
    </ArticleLayout>
  );
}
