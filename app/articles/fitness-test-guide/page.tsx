import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '小学生の新体力テスト完全ガイド|8種目の見方と平均値の活用法',
  description:
    '文部科学省の新体力テスト8種目を解説。種目ごとの測定方法と全国平均値、結果をスポーツ選びに活かす方法をわかりやすく説明します。',
  openGraph: {
    title: '小学生の新体力テスト完全ガイド|8種目の見方と平均値の活用法',
    description:
      '文部科学省の新体力テスト8種目を解説。種目ごとの測定方法と全国平均値、結果をスポーツ選びに活かす方法をわかりやすく説明します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/fitness-test-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小学生の新体力テスト完全ガイド|8種目の見方と平均値の活用法',
    images: ['/og-image.png'],
  },
};

export default function FitnessTestGuidePage() {
  return (
    <ArticleLayout
      title="小学生の新体力テスト完全ガイド|8種目の見方と平均値の活用法"
      heroImage="/images/articles/fitness-test-guide.jpg"
      heroAlt="新体力テストで走っている子ども"
      publishDate="2025年4月"
      tags={['新体力テスト', '体力測定', '小学生']}
      shareText="新体力テストの結果を子どものスポーツ選びに活かす方法を解説。8種目の意味がわかります。 #新体力テスト #子育て"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          新体力テストとは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「新体力テスト」は、文部科学省が実施している体力・運動能力測定の標準テストです。6歳から79歳までの全年代を対象としており、小学生は毎年学校で実施しています。
        </p>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100 mb-6">
          <p className="font-bold text-indigo-900 mb-2">新体力テストの目的</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">1.</span>
              <span>子どもの体力・運動能力を客観的に評価する</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">2.</span>
              <span>全国規模での体力データを収集・分析する</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">3.</span>
              <span>子どもの体力向上につながる指導に活かす</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">4.</span>
              <span>親が子どもの適性を理解するデータを提供する</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          8種目の詳細解説
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          新体力テストは、以下の8種目で構成されています。各種目が何を測定しているかを理解することが重要です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">種目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">測定内容</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">測定する能力</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">握力</td>
                <td className="px-3 py-2 text-gray-600">握力計で両手を測定</td>
                <td className="px-3 py-2 text-gray-600">筋力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">上体起こし</td>
                <td className="px-3 py-2 text-gray-600">仰向け姿勢から上体を起こす</td>
                <td className="px-3 py-2 text-gray-600">腹筋の筋力・筋持久力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">長座体前屈</td>
                <td className="px-3 py-2 text-gray-600">座位で前に腕を伸ばす</td>
                <td className="px-3 py-2 text-gray-600">柔軟性</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">反復横とび</td>
                <td className="px-3 py-2 text-gray-600">線の間を左右に素早く移動</td>
                <td className="px-3 py-2 text-gray-600">敏捷性</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">シャトルラン</td>
                <td className="px-3 py-2 text-gray-600">20mを往復し、ペースに合わせて走行</td>
                <td className="px-3 py-2 text-gray-600">持久力・有酸素運動能力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">50m走</td>
                <td className="px-3 py-2 text-gray-600">50mを全力で走る</td>
                <td className="px-3 py-2 text-gray-600">瞬発力・走力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">立ち幅跳び</td>
                <td className="px-3 py-2 text-gray-600">立った状態から前方に跳ぶ</td>
                <td className="px-3 py-2 text-gray-600">下肢の瞬発力</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">ボール投げ</td>
                <td className="px-3 py-2 text-gray-600">軽いボールを遠くに投げる</td>
                <td className="px-3 py-2 text-gray-600">上肢・体幹の筋力・巧緻性</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          各年代の全国平均値
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          お子さんの結果が平均値とどれだけ離れているかを把握することで、現在地と改善点が見えてきます。以下は2023年度の全国平均値です。
        </p>

        <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100 mb-6">
          <p className="text-xs text-indigo-800">
            より詳しい年代別の平均値は、各年代のページをご確認ください。
            <br />
            <a href="/heikin/6sai-male" className="font-bold text-indigo-600 hover:underline">
              6歳男子
            </a>
            、
            <a href="/heikin/7sai-male" className="font-bold text-indigo-600 hover:underline">
              7歳男子
            </a>
            、
            <a href="/heikin/8sai-male" className="font-bold text-indigo-600 hover:underline">
              8歳男子
            </a>
            、
            <a href="/heikin/9sai-male" className="font-bold text-indigo-600 hover:underline">
              9歳男子
            </a>
            、
            <a href="/heikin/10sai-male" className="font-bold text-indigo-600 hover:underline">
              10歳男子
            </a>
            、
            <a href="/heikin/11sai-male" className="font-bold text-indigo-600 hover:underline">
              11歳男子
            </a>
            、
            <a href="/heikin/12sai-male" className="font-bold text-indigo-600 hover:underline">
              12歳男子
            </a>
            ほか
          </p>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
          <p className="font-bold text-indigo-900 mb-2">平均値の見方</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">平均値以上:</span>
              <span>その年代の子どもたちの中では、体力が高い方です</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">平均値以下:</span>
              <span>その年代の子どもたちの中では、体力が低い方です。ただし、発達段階なので改善可能</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">標準偏差:</span>
              <span>平均値からのばらつきの度合い。個人差が大きい項目もあります</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          結果をスポーツ選びに活かす方法
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">強みを見つける</h3>
              <p className="text-sm text-gray-600">
                8種目のうち、特に平均値より高い項目に注目します。その項目に関連したスポーツが、お子さんの適性とマッチしている可能性が高いです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">複数の視点で判断する</h3>
              <p className="text-sm text-gray-600">
                1つの項目だけでなく、複数の項目を総合的に判断することが重要です。例えば、サッカーなら「50m走」と「シャトルラン」両方を見ます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">お子さん本人の興味を優先</h3>
              <p className="text-sm text-gray-600">
                データは参考情報です。最も大切なのは、「お子さん本人が何をやりたいか」です。楽しさがあれば、能力は後からでも伸びます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">弱みは改善できる</h3>
              <p className="text-sm text-gray-600">
                平均値より低い項目でも、トレーニングで改善できます。運動は続けることで必ず成長します。焦らず長期的に見ましょう。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          結果が平均より低い場合の対策
        </h2>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100 mb-6">
          <p className="font-bold text-indigo-900 mb-3">考えるべきポイント</p>
          <ul className="space-y-2">
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">1.</span>
              <span>発達段階：子どもの成長速度は個人差が大きい。今は平均以下でも、後で追い越すことはよくあります</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">2.</span>
              <span>運動経験：今まであまり運動をしていなければ、これからの経験で大きく改善する可能性がある</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">3.</span>
              <span>適切な指導：正しいフォームと練習方法で、短期間で成果が出ることもあります</span>
            </li>
            <li className="text-sm text-indigo-800 flex gap-2">
              <span className="font-bold">4.</span>
              <span>楽しさ重視：無理強いすると運動嫌いになります。「できるようになった喜び」を大切にしましょう</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          新体力テストは、お子さんの体力・運動能力を客観的に評価するための重要なツールです。結果を単なる点数としてではなく、「お子さんの適性を理解するヒント」として活用することが大切です。データを参考にしながら、お子さん本人の興味と意思を最優先に、最適なスポーツ選びをしてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
