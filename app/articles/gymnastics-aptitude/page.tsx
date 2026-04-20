import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '体操・体育系に向いている子の特徴|柔軟性と巧緻性で見る適性診断',
  description:
    '子どもが体操や新体操に向いているかどうかを柔軟性・巧緻性のデータから解説。体操を習わせるメリットと適切な開始年齢も紹介します。',
  openGraph: {
    title: '体操・体育系に向いている子の特徴|柔軟性と巧緻性で見る適性診断',
    description:
      '子どもが体操や新体操に向いているかどうかを柔軟性・巧緻性のデータから解説。体操を習わせるメリットと適切な開始年齢も紹介します。',
    images: [{ url: '/images/articles/gymnastics-aptitude.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/gymnastics-aptitude',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/gymnastics-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '体操・体育系に向いている子の特徴|柔軟性と巧緻性で見る適性診断',
    images: ['/images/articles/gymnastics-aptitude.jpg'],
  },
};

export default function GymnasticsAptitudePage() {
  return (
    <ArticleLayout
      title="体操・体育系に向いている子の特徴|柔軟性と巧緻性で見る適性診断"
      heroImage="/images/articles/gymnastics-aptitude.jpg"
      heroAlt="体操をしている子ども"
      publishDate="2025年4月"
      slug="gymnastics-aptitude"
      description="子どもが体操や新体操に向いているかどうかを柔軟性・巧緻性のデータから解説。体操を習わせるメリットと適切な開始年齢も紹介します。"
      tags={['体操', '適性診断', '柔軟性']}
      shareText="体操に向いている子の特徴を柔軟性・巧緻性のデータで解説。長座体前屈が目安! #体操 #子育て"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          体操に必要な体力5要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体操は、複雑な動きを正確に行うスポーツです。必要な体力要素を理解することで、お子さんの向き不向きが判断できます。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">柔軟性</h3>
              <p className="text-sm text-gray-600">
                正確なフォームで技を行うために最も重要。長座体前屈の値が高い子が向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">巧緻性</h3>
              <p className="text-sm text-gray-600">
                複雑な技を習得する能力。ボール投げやボール転がしの成績が高い子に向いています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランス感覚</h3>
              <p className="text-sm text-gray-600">
                体の重心コントロール。平均台や跳馬で必須の能力。反復横とびでも測定できます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">筋力</h3>
              <p className="text-sm text-gray-600">
                自分の体を支える力。上体起こしや握力で測定できます。特に手指の筋力が重要。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">空間認識能力</h3>
              <p className="text-sm text-gray-600">
                自分の体がどこにあるか認識する能力。ゴールデンエイジに発達が加速します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          向いている子の体力データ目安
        </h2>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-3">体操適性の判定基準</p>
          <div className="space-y-2">
            <div className="flex gap-3">
              <span className="text-sm font-bold text-pink-900 min-w-fit">長座体前屈:</span>
              <span className="text-sm text-pink-800">全国平均以上(最も重要な指標)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-pink-900 min-w-fit">ボール投げ:</span>
              <span className="text-sm text-pink-800">全国平均以上</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-pink-900 min-w-fit">反復横とび:</span>
              <span className="text-sm text-pink-800">全国平均以上</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-pink-900 min-w-fit">握力:</span>
              <span className="text-sm text-pink-800">平均レベル以上</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-pink-900 min-w-fit">上体起こし:</span>
              <span className="text-sm text-pink-800">平均レベル以上</span>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
          <p className="font-bold text-pink-900 mb-2">体操適性の最重要指標</p>
          <p className="text-sm text-pink-800">
            長座体前屈が高い子は、柔軟性に優れているため、体操の基本となる正しいフォームをスムーズに習得できます。体操を習わせるなら、まず長座体前屈の値をチェックしてください。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          体操を習わせる5つのメリット
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">姿勢改善</h3>
              <p className="text-sm text-gray-600">
                体操の指導では、正しい姿勢が強調されます。継続すると、日常生活でも姿勢が良くなります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">怪我の予防</h3>
              <p className="text-sm text-gray-600">
                全身の筋力とバランス感覚が向上し、転倒やねん挫などの怪我が減ります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">集中力向上</h3>
              <p className="text-sm text-gray-600">
                複雑な技を習得する過程で、集中力と忍耐力が鍛えられます。勉強にも良い影響を与えます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自信の構築</h3>
              <p className="text-sm text-gray-600">
                新しい技ができたときの喜びは、子どもの自信につながります。成功体験が増えます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">生涯スポーツとしての価値</h3>
              <p className="text-sm text-gray-600">
                体操は年齢制限が少なく、生涯にわたって楽しめるスポーツです。健康寿命を伸ばします。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          器械体操と新体操の違い
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">器械体操</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">新体操</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">性別</td>
                <td className="px-3 py-2 text-gray-600">男女両方</td>
                <td className="px-3 py-2 text-gray-600">女性が中心</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">使う道具</td>
                <td className="px-3 py-2 text-gray-600">跳馬、鉄棒など</td>
                <td className="px-3 py-2 text-gray-600">リボン、フープなど</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">重視される要素</td>
                <td className="px-3 py-2 text-gray-600">筋力・爆発力</td>
                <td className="px-3 py-2 text-gray-600">柔軟性・表現力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">開始年齢</td>
                <td className="px-3 py-2 text-gray-600">4～5歳から</td>
                <td className="px-3 py-2 text-gray-600">5～6歳から</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          何歳から始めるべきか
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          体操は比較的早い年齢から始められるスポーツです。早期スタートのメリットと、発達段階に応じた指導が重要です。
        </p>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mb-6">
          <p className="font-bold text-pink-900 mb-3">早期スタートのメリット</p>
          <ul className="space-y-2">
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">1.</span>
              <span>神経系の発達が活発な時期に習い始めることで、習得が効率的</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">2.</span>
              <span>柔軟性が高い幼少期に基本フォームを習得。後々の伸び代が大きい</span>
            </li>
            <li className="text-sm text-pink-800 flex gap-2">
              <span className="font-bold">3.</span>
              <span>ゴールデンエイジ(9～12歳)までに技術がしっかり身につく</span>
            </li>
          </ul>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">段階</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">4～5歳</td>
                <td className="px-3 py-2 text-gray-600">体操教室開始。基本動作(前転・後転)を習得</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6～8歳</td>
                <td className="px-3 py-2 text-gray-600">基本技術の習得期。倒立など難度が上がる</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">9～12歳</td>
                <td className="px-3 py-2 text-gray-600">ゴールデンエイジ。高度な技へのチャレンジ</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">13歳以上</td>
                <td className="px-3 py-2 text-gray-600">競技化・本格化の検討</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          体操に向いている子の特徴は、柔軟性と巧緻性に優れていることです。新体力テストのデータを参考にしながら、お子さんに体操を勧めるか判断できます。また、体操は習わせるメリットが大きく、全ての子どもにおすすめできるスポーツです。早期スタートで、ゴールデンエイジを最大限に活かす機会を作ってください。
        </p>
      </div>
    </ArticleLayout>
  );
}
