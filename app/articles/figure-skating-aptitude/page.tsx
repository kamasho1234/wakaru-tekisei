import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'フィギュアスケートに向いている子の特徴|級取得と発達段階から見る適性',
  description:
    'フィギュアスケートに向いている子の特徴を、バッジテスト制度と必要な体力要素から解説。小学校中学年から競技がスタートする仕組みと、向いている子の条件をまとめました。',
  openGraph: {
    title: 'フィギュアスケートに向いている子の特徴|級取得と発達段階から見る適性',
    description:
      'フィギュアスケートに向いている子の特徴を、バッジテスト制度と必要な体力要素から解説。小学校中学年から競技がスタートする仕組みと、向いている子の条件をまとめました。',
    images: [{ url: '/images/articles/figure-skating-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/figure-skating-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/figure-skating-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フィギュアスケートに向いている子の特徴|級取得と発達段階から見る適性',
    images: ['/images/articles/figure-skating-aptitude.jpg'],
  },
};

export default function FigureSkatingAptitudePage() {
  return (
    <ArticleLayout
      title="フィギュアスケートに向いている子の特徴|級取得と発達段階から見る適性"
      heroImage="/images/articles/figure-skating-aptitude.jpg"
      heroAlt="フィギュアスケートをしている子ども"
      publishDate="2026年8月"
      slug="figure-skating-aptitude"
      description="フィギュアスケートに向いている子の特徴を、バッジテスト制度と必要な体力要素から解説。小学校中学年から競技がスタートする仕組みと、向いている子の条件をまとめました。"
      tags={['フィギュアスケート', '適性診断', '柔軟性']}
      shareText="フィギュアスケートは小学校中学年からバッジテストで級を積み上げる競技。男女で必要な級が異なります。向いている子の特徴を解説。 #フィギュア #子育て"
      citations={[
        '日本スケート連盟「2024-25シーズン参加資格（年齢・取得級）」 https://www.skatingjapan.or.jp/common/img/info/entry%20qualifications_2024-25.pdf',
        '日本スケート連盟「2024-25シーズン国内競技会参加資格（年齢・取得級）について」 https://www.skatingjapan.or.jp/whatsnew/detail.php?id=224',
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          フィギュアスケートの競技制度：バッジテストと学年別カテゴリ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          フィギュアスケートは、多くの競技と異なり「年齢だけ」ではなく「バッジテストの級」を基準に競技カテゴリが決まります。日本スケート連盟は、2024-25シーズンの競技会参加資格を公表しており、小学校中学年から公式なカテゴリがあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          この仕組みが意味することは、フィギュアスケートが「1つずつ級を取得していく」という発達段階型の競技だということです。最初から高い難度を目指すのではなく、基本から積み上げていく必要があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          カテゴリと必要なバッジテスト級（2024-25シーズン）
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">学年（2024年4月時点）</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">カテゴリ</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">必要な級</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小学3年生〜小学4年生</td>
                <td className="px-3 py-2 text-gray-600">ノービスB</td>
                <td className="px-3 py-2 text-gray-600">男子 3級以上 / 女子 5級以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">小学5年生〜小学6年生</td>
                <td className="px-3 py-2 text-gray-600">ノービスA</td>
                <td className="px-3 py-2 text-gray-600">男子 4級以上 / 女子 6級以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">中学1年生〜高校1年生</td>
                <td className="px-3 py-2 text-gray-600">ジュニア</td>
                <td className="px-3 py-2 text-gray-600">男子 6級以上 / 女子 7級以上</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">大学生以上</td>
                <td className="px-3 py-2 text-gray-600">シニア</td>
                <td className="px-3 py-2 text-gray-600">7級以上</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 日本スケート連盟 2024-25シーズン参加資格資料</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">男女で異なる必要な級</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            同じ小学3年生でも、男子は「3級以上」、女子は「5級以上」と異なる基準です。女子の方が高い級が要求されます。この違いは、試技内容の難度差に基づいています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          フィギュアスケートに向いている子の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          以下は、フィギュアスケートという競技の特性から整理した特徴です。これらは公式に定められた基準ではなく、競技の仕組みと必要な体力要素から考えたものです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">級を1つずつ取っていく形式に向いている子</h3>
              <p className="text-sm text-gray-600">
                フィギュアスケートは「階段式」の競技です。3級から始まり、少しずつ難度が上がっていきます。急がず、確実に基本を習得していく過程を楽しめる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔軟性がある子</h3>
              <p className="text-sm text-gray-600">
                スケートの上でのしなやかな動きには、関節の柔軟性が不可欠です。長座体前屈が高い子は、身体の柔軟性に優れており、フィギュアスケートの基本動作を習得しやすい傾向があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">氷上という特殊な環境を楽しめる子</h3>
              <p className="text-sm text-gray-600">
                陸上スポーツと異なり、氷という不安定な環境での活動です。この特殊性を「おもしろい」と感じられる子、新しい環境への適応が速い子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">動きに敏感な子（バランス感覚が良い子）</h3>
              <p className="text-sm text-gray-600">
                スケートは足元が不確実な環境です。自分の身体の位置や動きを細かく感知できる子は、氷上での動作を習得しやすい傾向があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">立ち幅とびが得意な子</h3>
              <p className="text-sm text-gray-600">
                スケートのエッジを使った踏み切りと着地には、下肢の瞬発力が求められます。立ち幅とびで良い記録を出す子は、スケートの基本動作に必要な跳躍力を持っている可能性があります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">重要な注記</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記の特徴は、フィギュアスケートという競技の仕組みと必要な体力から整理したものです。これらが「公式な適性基準」ではなく、あくまで競技の特性から考えた傾向です。実際の向き不向きは、個人の努力や経験によっても大きく変わります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          体力テストの数値との関連
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストの種目とフィギュアスケートに必要な体力の関連をまとめました。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="font-bold text-gray-900 text-sm mb-1">長座体前屈</p>
            <p className="text-sm text-gray-600">
              柔軟性の指標です。全国平均を参考にしながら、お子さんの柔軟性を確認してください。
              <Link href="/articles/sit-and-reach-kids" className="text-blue-600 font-bold hover:underline ml-1">
                詳しくはこちら
              </Link>
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="font-bold text-gray-900 text-sm mb-1">立ち幅とび</p>
            <p className="text-sm text-gray-600">
              下肢の瞬発力と、スケートの踏み切り動作との関連があります。
              <Link href="/articles/standing-long-jump-kids" className="text-blue-600 font-bold hover:underline ml-1">
                詳しくはこちら
              </Link>
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="font-bold text-gray-900 text-sm mb-1">反復横とび</p>
            <p className="text-sm text-gray-600">
              バランス感覚と敏捷性の指標です。氷上での方向転換に関わる能力を測ります。
              <Link href="/articles/side-step-kids" className="text-blue-600 font-bold hover:underline ml-1">
                詳しくはこちら
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          フィギュアスケートと共通点のある競技
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          柔軟性や、細かい動作を積み重ねる点で共通する競技です。あわせて検討してみてください。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/dance-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">ダンス</p>
            <p className="text-xs text-blue-800">音楽に合わせた身体表現。柔軟性と表現力が重なる</p>
          </Link>
          <Link href="/articles/gymnastics-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">体操</p>
            <p className="text-xs text-blue-800">器械運動。柔軟性と技術習得が必要</p>
          </Link>
          <Link href="/articles/swimming-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">水泳</p>
            <p className="text-xs text-blue-800">柔軟性と全身の協調動作</p>
          </Link>
          <Link href="/articles/sport-start-timing" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">スポーツ開始のタイミング</p>
            <p className="text-xs text-blue-800">何歳から始めるかは発達段階が重要</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          診断してみましょう
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトでは、新体力テストの記録を入力することで、お子さんの体力の特徴と向いているスポーツを判定できます。フィギュアスケートに必要な柔軟性や跳躍力が、全国平均と比べてどうなのかを確認してみてください。
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
