import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '新体操に向いている子の特徴|柔軟性と表現力で見る適性診断',
  description:
    '新体操に向いている子の特徴を柔軟性・表現力・手具操作から解説。学校体育の器械運動との違いも明確にし、体力テストとの関連をまとめました。',
  openGraph: {
    title: '新体操に向いている子の特徴|柔軟性と表現力で見る適性診断',
    description:
      '新体操に向いている子の特徴を柔軟性・表現力・手具操作から解説。学校体育の器械運動との違いも明確にし、体力テストとの関連をまとめました。',
    images: [{ url: '/images/articles/rhythmic-gymnastics-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/rhythmic-gymnastics-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/rhythmic-gymnastics-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '新体操に向いている子の特徴|柔軟性と表現力で見る適性診断',
    images: ['/images/articles/rhythmic-gymnastics-aptitude.jpg'],
  },
};

export default function RhythmicGymnasticsAptitudePage() {
  return (
    <ArticleLayout
      title="新体操に向いている子の特徴|柔軟性と表現力で見る適性診断"
      heroImage="/images/articles/rhythmic-gymnastics-aptitude.jpg"
      heroAlt="新体操をしている子ども"
      publishDate="2026年8月"
      slug="rhythmic-gymnastics-aptitude"
      description="新体操に向いている子の特徴を柔軟性・表現力・手具操作から解説。学校体育の器械運動との違いも明確にし、体力テストとの関連をまとめました。"
      tags={['新体操', '適性診断', '柔軟性', '表現']}
      shareText="新体操は音楽に合わせた身体動きと手具操作が特徴。学校の器械運動とは別の競技です。向いている子の特徴を解説。 #新体操 #子育て"
      citations={[
        '日本体操協会「新体操について」 https://jpn-gym.or.jp/competition/rhythmic/',
        '文部科学省「小学校・中学校学習指導要領解説（器械運動）」 https://www.mext.go.jp/content/20240918-mxt_kyoiku01-100002607.pdf',
        'スポーツ庁「令和7年度 全国体力・運動能力、運動習慣等調査」 https://www.mext.go.jp/sports/b_menu/toukei/kodomo/zencyo/1411922_00014.html',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          新体操とは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体操は、日本体操協会の公式説明によると、「音楽に合わせて身体の動きと手具の操作を組み合わせ、美しさと技術を表現するスポーツ」です。この定義から見えるのは、新体操が「動きのしなやかさと表現力」を重視する競技だということです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体操には「個人」と「団体」の2つの形式があります。個人では1人で手具を操りながら演技し、団体では複数人が手具を交換させながらダイナミックな構成を披露します。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          新体操で使う手具5種類
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体操では、次の5種類の手具が使われます。それぞれに異なる特徴と操作技術が求められます。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="font-bold text-pink-900 text-sm mb-1">フープ</p>
            <p className="text-sm text-pink-800">
              リングの形をした手具。転がす、くぐる、投げるなど多様な操作が必要。
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="font-bold text-pink-900 text-sm mb-1">ボール</p>
            <p className="text-sm text-pink-800">
              直径18.3cm。投げる、転がす、弾ませるなどの操作。正確な手指コントロールが求められます。
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="font-bold text-pink-900 text-sm mb-1">クラブ</p>
            <p className="text-sm text-pink-800">
              棍棒の形。投げて回転させたり、転がしたり。手指の巧緻性が最も求められます。
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="font-bold text-pink-900 text-sm mb-1">リボン</p>
            <p className="text-sm text-pink-800">
              長い布を操って空間に描く。優雅さと同時に正確な軌跡制御が必要。
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
            <p className="font-bold text-pink-900 text-sm mb-1">ロープ</p>
            <p className="text-sm text-pink-800">
              ロープを回転させたり、跳んだりして操る。タイミングと全身の協調が求められます。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          新体操と学校体育「器械運動」の違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学校の体育で習う「器械運動」と新体操は、別の競技です。この違いを理解することが重要です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">器械運動（学校体育）</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">新体操</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">何をするか</td>
                <td className="px-3 py-2 text-gray-600">マット運動・鉄棒・跳び箱など、器械を使った技を習得</td>
                <td className="px-3 py-2 text-gray-600">音楽に合わせて身体と手具を操り、美しさを表現</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">音楽の役割</td>
                <td className="px-3 py-2 text-gray-600">選択的。演技と直結しない</td>
                <td className="px-3 py-2 text-gray-600">必須。音楽に完全に合わせて演技する</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">手具</td>
                <td className="px-3 py-2 text-gray-600">マット・鉄棒・跳び箱など大型の器械</td>
                <td className="px-3 py-2 text-gray-600">フープ・ボール・クラブ・リボン・ロープ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">重視される要素</td>
                <td className="px-3 py-2 text-gray-600">筋力・爆発力・技術的正確性</td>
                <td className="px-3 py-2 text-gray-600">柔軟性・表現力・動きのしなやかさ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">採点の観点</td>
                <td className="px-3 py-2 text-gray-600">技ができているかの習熟度</td>
                <td className="px-3 py-2 text-gray-600">技術と芸術表現の両方</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">混同されやすいが別の競技</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            学校で器械運動の授業を受けた経験が、新体操に直結するとは限りません。逆に器械運動が苦手な子でも、新体操の「身体表現」という性質が合っていれば向いている可能性があります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          新体操に向いている子の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          以下は、新体操という競技の仕組みと必要な体力から整理した特徴です。これらは公式に定められた基準ではなく、競技の特性から考えたものです。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">音楽に合わせて体を動かすことが好きな子</h3>
              <p className="text-sm text-gray-600">
                新体操の本質は「音楽と身体の一体化」です。リズムに乗り、音の波に合わせて動くことを楽しめる子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔軟性がある子</h3>
              <p className="text-sm text-gray-600">
                新体操では、柔軟性が動きのしなやかさに直結します。長座体前屈の値が高い子は、新体操に必要な身体的特性を持っている可能性があります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">手具の操作という細かい技術の反復が苦にならない子</h3>
              <p className="text-sm text-gray-600">
                フープを正確に投げる、クラブを回す、ボールをコントロールする。これらの細かい動作の練習を根気強く続けられる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">身体を使って「表現する」ことに興味がある子</h3>
              <p className="text-sm text-gray-600">
                新体操は、単に技術を習得するだけでなく「自分の身体で何かを表現する」という要素が重要です。ダンスや劇に興味がある子も相性が良いかもしれません。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ボール投げが得意な子</h3>
              <p className="text-sm text-gray-600">
                新体操の手具操作（特にボールやクラブ）には、投擲の正確性と手指の巧緻性が関わります。ボール投げが得意な子は、手具操作の習得が早い傾向があります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">重要な注記</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記の特徴は、新体操という競技の仕組みと必要な体力から整理したものです。これらが「公式な適性基準」ではなく、あくまで競技の特性から考えた傾向です。実際の向き不向きは、個人の努力や経験によっても大きく変わります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          体力テストの数値との関連
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストの種目と新体操に必要な体力の関連をまとめました。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-pink-500">
            <p className="font-bold text-gray-900 text-sm mb-1">長座体前屈（最も重要）</p>
            <p className="text-sm text-gray-600">
              身体のしなやかさは新体操の基本です。全国平均よりも高い値が望ましいです。
              <Link href="/articles/sit-and-reach-kids" className="text-blue-600 font-bold hover:underline ml-1">
                詳しくはこちら
              </Link>
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-pink-500">
            <p className="font-bold text-gray-900 text-sm mb-1">ボール投げ（ソフトボール投げ）</p>
            <p className="text-sm text-gray-600">
              手具操作の正確性と投擲力の指標です。ボール、クラブなどの手具を操る能力と関連があります。
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-pink-500">
            <p className="font-bold text-gray-900 text-sm mb-1">反復横とび</p>
            <p className="text-sm text-gray-600">
              敏捷性とバランス感覚の指標です。手具を操りながら身体を動かす際に必要な能力です。
              <Link href="/articles/side-step-kids" className="text-blue-600 font-bold hover:underline ml-1">
                詳しくはこちら
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          体操競技との違い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「体操」と「新体操」は別の競技です。体操について詳しく知りたい方は、以下の記事をご覧ください。
        </p>

        <Link href="/articles/gymnastics-aptitude" className="bg-pink-50 rounded-2xl p-4 border border-pink-100 hover:bg-pink-100 transition-colors block">
          <p className="font-bold text-pink-900 text-sm mb-1">体操・体育系に向いている子の特徴</p>
          <p className="text-xs text-pink-800">器械体操と新体操の違いについて詳しく解説しています</p>
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          新体操選手に多い他の適性
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          音楽表現と柔軟性が必要な他のスポーツも、適性がある可能性があります。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/articles/dance-aptitude" className="bg-pink-50 rounded-2xl p-4 border border-pink-100 hover:bg-pink-100 transition-colors block">
            <p className="font-bold text-pink-900 text-sm mb-1">ダンス</p>
            <p className="text-xs text-pink-800">音楽に合わせた身体表現が重なります</p>
          </Link>
          <Link href="/articles/figure-skating-aptitude" className="bg-pink-50 rounded-2xl p-4 border border-pink-100 hover:bg-pink-100 transition-colors block">
            <p className="font-bold text-pink-900 text-sm mb-1">フィギュアスケート</p>
            <p className="text-xs text-pink-800">柔軟性と氷上での優雅な動き</p>
          </Link>
          <Link href="/articles/gymnastics-aptitude" className="bg-pink-50 rounded-2xl p-4 border border-pink-100 hover:bg-pink-100 transition-colors block">
            <p className="font-bold text-pink-900 text-sm mb-1">体操（器械運動）</p>
            <p className="text-xs text-pink-800">柔軟性と技術習得が必要</p>
          </Link>
          <Link href="/articles/golden-age" className="bg-pink-50 rounded-2xl p-4 border border-pink-100 hover:bg-pink-100 transition-colors block">
            <p className="font-bold text-pink-900 text-sm mb-1">ゴールデンエイジ</p>
            <p className="text-xs text-pink-800">表現系スポーツの習得に最適な時期</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          診断してみましょう
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトでは、新体力テストの記録を入力することで、お子さんの体力の特徴と向いているスポーツを判定できます。新体操に必要な柔軟性や手指の巧緻性が、全国平均と比べてどうなのかを確認してみてください。
        </p>

        <div className="mt-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white text-center">
          <p className="text-sm font-bold mb-1">お子さんの適性を診断してみませんか?</p>
          <p className="text-pink-100 text-xs mb-4">新体力テストの記録を入力するだけ・無料</p>
          <Link href="/shindan/sports" className="inline-block bg-white text-pink-600 font-black text-sm px-6 py-2.5 rounded-xl hover:bg-pink-50 transition-colors">
            無料でスポーツ適性診断
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
