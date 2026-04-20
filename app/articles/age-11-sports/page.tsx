import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '11歳の子どもに向いているスポーツ｜ゴールデンエイジ後期と専門化の始め方',
  description:
    '11歳（小学6年生）はゴールデンエイジの後期。技術の集大成と専門化が始まるこの時期に向いているスポーツと中学のスポーツ選択についても解説します。',
  openGraph: {
    title: '11歳の子どもに向いているスポーツ｜ゴールデンエイジ後期と専門化の始め方',
    description:
      '11歳（小学6年生）はゴールデンエイジの後期。技術の集大成と専門化が始まるこの時期に向いているスポーツと中学のスポーツ選択についても解説します。',
    images: [{ url: '/images/articles/age-11-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-11-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/age-11-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '11歳の子どもに向いているスポーツ｜ゴールデンエイジ後期と専門化の始め方',
    images: ['/images/articles/age-11-sports.jpg'],
  },
};

export default function Age11SportsPage() {
  return (
    <ArticleLayout
      title="11歳の子どもに向いているスポーツ｜ゴールデンエイジ後期と専門化の始め方"
      heroImage="/images/articles/age-11-sports.jpg"
      heroAlt="11歳の子どもが本格的なスポーツ練習をしている様子"
      publishDate="2025年4月"
      slug="age-11-sports"
      description="11歳（小学6年生）はゴールデンエイジの後期。技術の集大成と専門化が始まるこの時期に向いているスポーツと中学のスポーツ選択についても解説します。"
      tags={['11歳', '小学6年生', 'ゴールデンエイジ', '中学スポーツ']}
      shareText="11歳はゴールデンエイジ後期。技術の集大成期に向いているスポーツと中学への繋げ方を解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          11歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          11歳（小学6年生）はゴールデンエイジの後期にあたります。神経系はほぼ完成に近づき、習得した技術が「完全に体に染みつく」段階です。また、女子では思春期が始まる子もおり、男女で体格差が出始めます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">11歳男子の新体力テスト平均</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>50m走：8.9秒</li>
              <li>立ち幅跳び：163cm</li>
              <li>ソフトボール投げ：31.3m</li>
              <li>握力：22.5kg</li>
            </ul>
          </div>
          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="text-sm font-bold text-pink-900 mb-2">11歳女子の新体力テスト平均</p>
            <ul className="text-xs text-pink-800 space-y-1">
              <li>50m走：9.3秒</li>
              <li>立ち幅跳び：151cm</li>
              <li>ソフトボール投げ：18.2m</li>
              <li>握力：19.5kg</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">※文部科学省「令和4年度体力・運動能力調査」より</p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          11歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">これまでのスポーツを深める時期</h3>
            <p className="text-sm text-gray-600">
              ゴールデンエイジ後期の11歳は、新しいスポーツを一から始めるよりも、これまで積み上げてきた技術を「完成度を高める」ことに集中する時期です。試合での経験値を積み、戦術・判断力を磨くことで競技レベルが一段上がります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳（競技の確立）</h3>
            <p className="text-sm text-gray-600">
              スイミングを続けてきた子どもは、11歳前後で地区・県レベルの大会を意識するようになります。専門種目（得意な泳法・距離）を定めてタイムを伸ばす段階です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操（演技の完成期）</h3>
            <p className="text-sm text-gray-600">
              体操は11歳前後で演技構成が本格化します。難度の高い技（後方宙返り・ひねり技など）への挑戦が始まり、この時期の習得が選手としての基盤になります。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">武道（段位取得の視野）</h3>
            <p className="text-sm text-gray-600">
              柔道・空手・剣道を続けてきた子どもは、11〜12歳で初段（黒帯・一級）の取得が視野に入ります。礼節・忍耐・精神力の成長が目に見える形で確認できる時期です。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          中学進学に向けてスポーツをどう選ぶか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学6年生の後半は、中学の部活動を意識し始める時期です。「中学で何をやるか」を考えながら、11歳のうちに経験しておきたいスポーツを計画的に体験しておきましょう。
        </p>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-3">中学部活を選ぶ際のチェックリスト</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>小学校で続けてきたスポーツの部活があるか確認する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>体験入部（春〜夏）に参加して雰囲気を確認する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>勉強との両立を考えて活動頻度を確認する</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold">・</span>
              <span>新しいスポーツに挑戦する選択肢も否定しない</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">
          中学からスポーツを始めることも十分可能です。ゴールデンエイジで培った運動の基礎は新しい種目にも活きるため、中学入学を機に新しいスポーツに挑戦することは決して遅くありません。
        </p>
      </div>
    </ArticleLayout>
  );
}
