import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'ソフトボールに向いている子の特徴｜小学校と中学校の規則で見る競技設計',
  description:
    'ソフトボールに向いている子の特徴を日本ソフトボール協会の公式資料から解説。小学5・6年と中学以上で異なるボール・塁間・投球距離が発育発達に配慮された設計であること、野球との安全性の違い（ダブルベース）を紹介。',
  openGraph: {
    title: 'ソフトボールに向いている子の特徴｜小学校と中学校の規則で見る競技設計',
    description:
      'ソフトボールに向いている子の特徴を日本ソフトボール協会の公式資料から解説。小学5・6年と中学以上で異なるボール・塁間・投球距離が発育発達に配慮された設計であること、野球との安全性の違い（ダブルベース）を紹介。',
    images: [{ url: '/images/articles/softball-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/softball-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/softball-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ソフトボールに向いている子の特徴｜小学校と中学校の規則で見る競技設計',
    images: ['/images/articles/softball-aptitude.jpg'],
  },
};

export default function SoftballAptitudePage() {
  return (
    <ArticleLayout
      title="ソフトボールに向いている子の特徴｜小学校と中学校の規則で見る競技設計"
      heroImage="/images/articles/softball-aptitude.jpg"
      heroAlt="ソフトボールをしている子どもたち"
      publishDate="2026年8月"
      slug="softball-aptitude"
      description="ソフトボールに向いている子の特徴を日本ソフトボール協会の公式資料から解説。小学5・6年と中学以上で異なるボール・塁間・投球距離が発育発達に配慮された設計であること、野球との安全性の違い（ダブルベース）を紹介。"
      tags={['ソフトボール', 'ベースボール型', '適性診断']}
      shareText="ソフトボールは小学校高学年から始められるベースボール型ゲーム。野球より柔らかいボールで安全。 #子育て #ソフトボール"
      citations={[
        '公益財団法人日本ソフトボール協会「ソフトボールの基礎知識」 https://www.softball.or.jp/knowledge/',
        '公益財団法人日本ソフトボール協会「学校体育推進 学校体育ソフトボール基本ルール全文」 https://softball.or.jp/school/rules.html',
        '文部科学省「小学校学習指導要領解説 体育編」',
      ]}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          ソフトボールとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ソフトボールは野球と似た形式のボール運動ですが、ボールが大きく柔らかく、塁間が短いという特徴があります。公式には、野球よりも接近した攻防が展開される競技として位置づけられています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          小学校の体育では、高学年の「ボール運動」でベースボール型ゲームとして扱われ、バット操作と走塁による攻撃、ボール操作と定位置での守備を学びます。ルール工夫や作戦立案を通じて、仲間と力を合わせて競争する楽しさが重視されています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学年別に変わる競技規則 — 発育・発達に配慮した設計
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ソフトボールの最大の特徴は、小学校高学年と中学生で使用する球、塁間距離、投球距離がすべて異なる設計になっていることです。これは子どもの身体的・精神的発達に合わせた段階的な規則設計です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">区分</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対象学年</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">使用球</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">塁間距離</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">投球距離</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学高学年</td>
                <td className="px-3 py-2 text-gray-600">5・6年生</td>
                <td className="px-3 py-2 text-center text-gray-600">学校体育検定2号球</td>
                <td className="px-3 py-2 text-center text-gray-600">16.76m</td>
                <td className="px-3 py-2 text-center text-gray-600">10.67m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学生以上</td>
                <td className="px-3 py-2 text-gray-600">中学1年以上</td>
                <td className="px-3 py-2 text-center text-gray-600">学校体育検定3号球</td>
                <td className="px-3 py-2 text-center text-gray-600">18.29m</td>
                <td className="px-3 py-2 text-center text-gray-600">12.19m</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 公益財団法人日本ソフトボール協会「学校体育推進 学校体育ソフトボール基本ルール全文」</p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">区分</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">チーム人数</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">試合イニング</th>
                <th className="px-3 py-2 text-center font-bold text-gray-700">試合時間</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">小学高学年</td>
                <td className="px-3 py-2 text-center text-gray-600">10名（原則）</td>
                <td className="px-3 py-2 text-center text-gray-600">5イニング</td>
                <td className="px-3 py-2 text-center text-gray-600">約30分</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">中学生以上</td>
                <td className="px-3 py-2 text-center text-gray-600">10名（原則）</td>
                <td className="px-3 py-2 text-center text-gray-600">5イニング</td>
                <td className="px-3 py-2 text-center text-gray-600">規定なし</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 同上</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">段階的な規則設計の意図</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            小学校高学年では小さなボール（2号球）と短い塁間・投球距離で、バット操作や走塁の基本を学びます。中学生では段階的にボールを大きく（3号球）し、塁間と投球距離を延ばします。この設計により、子どもの身体的・精神的発達に無理のない形で競技を学ぶことができます。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          野球との主な違い — 安全性への工夫
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ソフトボールは野球と外見は似ていますが、子どもの安全を考慮した設計になっています。公式資料から見える主な違いを整理してみます。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">ソフトボール</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">野球</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ボールサイズ</td>
                <td className="px-3 py-2 text-gray-600">12インチ（外周30.2～30.8cm）、柔らか</td>
                <td className="px-3 py-2 text-gray-600">9インチ（外周22.9cm）、硬い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">塁間距離</td>
                <td className="px-3 py-2 text-gray-600">16.76m（小学）/ 18.29m（中学）</td>
                <td className="px-3 py-2 text-gray-600">27.43m</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">安全設計</td>
                <td className="px-3 py-2 text-gray-600">ダブルベース（一塁に白とオレンジの2つのベース）</td>
                <td className="px-3 py-2 text-gray-600">通常のシングルベース</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">出典: 公益財団法人日本ソフトボール協会「ソフトボールの基礎知識」</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2 text-sm">ダブルベースとは</p>
          <p className="text-sm text-green-800 leading-relaxed">
            一塁に白とオレンジの2つのベースがあり、ランナーと守備者が異なる経路を使うことで衝突を防ぐ安全設計です。野球には存在しない、ソフトボール特有の工夫です。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          ソフトボールが柔らかいボールを採用し、塁間を短くし、ダブルベースで衝突を防ぐ理由は、野球よりも子どもの身体的な負担を減らすことに徹底的に配慮しているためです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学校体育での扱い
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校の体育では、高学年の「ボール運動」でソフトボールはゴール型（サッカー・バスケットボール等）、ネット型（バレーボール等）と並ぶ重要なベースボール型ゲームとして扱われています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-2 text-sm">学習指導要領での位置づけ</p>
          <p className="text-sm text-gray-600 mb-3">
            「ベースボール型では、基本的なバット操作と走塁での攻撃、ボール操作と定位置での守備などによって攻防をすること」と示されています。
          </p>
          <p className="text-xs text-gray-500">出典: 文部科学省「小学校学習指導要領解説 体育編」</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          学校体育では簡易化されたゲーム形式を採用し、ルール工夫や作戦立案を通じて仲間と力を合わせて競争する楽しさを体験することが重視されています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          ソフトボールに向いている子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バット操作に興味がある子</h3>
              <p className="text-sm text-gray-600">
                ボール運動の中でも、ソフトボールの学習では「基本的なバット操作」が最初のステップです。ボールを打つ喜びを感じられる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">仲間との役割分担が好きな子</h3>
              <p className="text-sm text-gray-600">
                ソフトボールは、各自が定位置での守備を担当し、攻撃時には走塁ルールに従う。役割と責任が明確な競技環境を好む子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">作戦立案に関心のある子</h3>
              <p className="text-sm text-gray-600">
                学習指導要領では「ルール工夫や作戦立案を通じて」学ぶことが明記されています。試合の流れを読みながらプレーする知的な側面を楽しめる子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">段階的な学びを重視する子</h3>
              <p className="text-sm text-gray-600">
                小学校と中学校でボール・距離が段階的に変わる設計は、着実に技術を積み上げる環境です。焦らず基本から学びたい子に向いています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">これらの特徴は公式な適性基準ではありません</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            上記は、日本ソフトボール協会の公式資料と文部科学省の学習指導要領から見える競技の特性を整理したものです。実際には、小学校の高学年から始めてみて、子どもの適性や興味を見守ることが大切です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          他のボール運動との比較
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          小学校の体育では複数のボール運動から選択できます。ソフトボールと他の競技の特徴を比較してみてください。
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          <Link href="/articles/baseball-aptitude" className="bg-red-50 rounded-2xl p-4 border border-red-100 hover:bg-red-100 transition-colors block">
            <p className="font-bold text-red-900 text-sm mb-1">野球</p>
            <p className="text-xs text-red-800">硬いボールで塁間が長く、より高度な技術を要する</p>
          </Link>
          <Link href="/articles/basketball-aptitude" className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
            <p className="font-bold text-blue-900 text-sm mb-1">バスケットボール</p>
            <p className="text-xs text-blue-800">加速と減速を繰り返し、瞬発力が活きる</p>
          </Link>
          <Link href="/articles/ball-throwing-kids" className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:bg-orange-100 transition-colors block">
            <p className="font-bold text-orange-900 text-sm mb-1">ボール投げの基本</p>
            <p className="text-xs text-orange-800">投げるフォームと距離を段階的に学ぶ</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ソフトボールに向いている子は、バット操作を学びながら、チーム全体で作戦を立てて競争する楽しさを感じられる子です。柔らかいボール、短い塁間、ダブルベースといった設計は、子どもの安全と発育発達を最優先にした競技として位置づけられています。小学校高学年から始めることで、野球への道へ進む準備にもなります。
        </p>
      </div>

      <div>
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
