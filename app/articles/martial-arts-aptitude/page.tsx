import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '空手・柔道に向いている子の特徴|武道で伸びる子の共通点と習い事効果',
  description:
    '空手と柔道それぞれに向いている子の特徴を体力・性格の両面から解説。武道を習わせることで得られる精神的な効果も紹介します。',
  openGraph: {
    title: '空手・柔道に向いている子の特徴|武道で伸びる子の共通点と習い事効果',
    description:
      '空手と柔道それぞれに向いている子の特徴を体力・性格の両面から解説。武道を習わせることで得られる精神的な効果も紹介します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/martial-arts-aptitude',
  },
  twitter: {
    card: 'summary_large_image',
    title: '空手・柔道に向いている子の特徴|武道で伸びる子の共通点と習い事効果',
    images: ['/og-image.png'],
  },
};

export default function MartialArtsAptitudePage() {
  return (
    <ArticleLayout
      title="空手・柔道に向いている子の特徴|武道で伸びる子の共通点と習い事効果"
      heroImage="/images/sport-karate.jpg"
      heroAlt="空手をしている子どもたち"
      publishDate="2025年4月"
      tags={['空手', '柔道', '武道', '習い事']}
      shareText="空手・柔道に向いている子の特徴と武道で伸びる子の共通点を解説。礼儀も身につく! #空手 #柔道 #子育て"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          武道を習わせる親が増えている理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          空手や柔道などの武道は、単なる「強くなるため」のスポーツではなく、心身の成長に大きな影響を与える教育の場として認識されています。近年、習わせる親が増え続けています。
        </p>

        <div className="bg-gray-100 rounded-2xl p-5 border border-gray-300 mb-6">
          <p className="font-bold text-gray-900 mb-3">武道習い事の特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">礼儀教育:</span>
              <span>挨拶・敬礼など、基本的な生活習慣が身につく</span>
            </li>
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">精神力開発:</span>
              <span>目標達成に向けた努力、失敗からの回復</span>
            </li>
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">護身術:</span>
              <span>実際の危機回避能力が身につく</span>
            </li>
            <li className="text-sm text-gray-700 flex gap-2">
              <span className="font-bold">体力向上:</span>
              <span>全身の筋力・持久力・敏捷性が鍛えられる</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          空手に向いている子 vs 柔道に向いている子
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          空手と柔道は、全く異なる特性を持つ武道です。それぞれに向いている子の特徴が異なります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-3 py-2 text-left font-bold text-gray-900">項目</th>
                <th className="px-3 py-2 text-left font-bold text-gray-900">空手に向いている</th>
                <th className="px-3 py-2 text-left font-bold text-gray-900">柔道に向いている</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">必要な体力</td>
                <td className="px-3 py-2 text-gray-600">敏捷性・瞬発力が高い</td>
                <td className="px-3 py-2 text-gray-600">筋力・持久力が高い</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">体格</td>
                <td className="px-3 py-2 text-gray-600">小柄でも問題ない</td>
                <td className="px-3 py-2 text-gray-600">体重が重い方が有利</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">性格タイプ</td>
                <td className="px-3 py-2 text-gray-600">積極的・反応が速い</td>
                <td className="px-3 py-2 text-gray-600">落ち着き・判断力がある</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">決定スタイル</td>
                <td className="px-3 py-2 text-gray-600">素早い攻撃で決める</td>
                <td className="px-3 py-2 text-gray-600">相手を分析してから動く</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">技</td>
                <td className="px-3 py-2 text-gray-600">パンチ・キックなど打撃</td>
                <td className="px-3 py-2 text-gray-600">投げ・抑込などの接触技</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">空手向きな性格</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>・積極的で行動的</li>
              <li>・反応が速く判断が早い</li>
              <li>・一人で判断して動ける</li>
              <li>・目立つことが好き</li>
              <li>・スピード感を好む</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">柔道向きな性格</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>・落ち着いていて慎重</li>
              <li>・相手の動きをよく見る</li>
              <li>・分析的な思考をする</li>
              <li>・身体の使い方に工夫がある</li>
              <li>・粘り強い</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          空手に向いている子の体力データ目安
        </h2>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6">
          <p className="font-bold text-gray-900 mb-3">空手適性の判定基準</p>
          <div className="space-y-2">
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">反復横とび:</span>
              <span className="text-sm text-gray-700">全国平均以上(敏捷性)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">50m走:</span>
              <span className="text-sm text-gray-700">全国平均より速い(瞬発力)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">立ち幅跳び:</span>
              <span className="text-sm text-gray-700">全国平均以上</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">握力:</span>
              <span className="text-sm text-gray-700">平均レベル以上</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          柔道に向いている子の体力データ目安
        </h2>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6">
          <p className="font-bold text-gray-900 mb-3">柔道適性の判定基準</p>
          <div className="space-y-2">
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">握力:</span>
              <span className="text-sm text-gray-700">全国平均以上(筋力)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">シャトルラン:</span>
              <span className="text-sm text-gray-700">全国平均以上(持久力)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">上体起こし:</span>
              <span className="text-sm text-gray-700">全国平均以上(腹筋)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-bold text-gray-900 min-w-fit">反復横とび:</span>
              <span className="text-sm text-gray-700">平均レベル以上</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          武道習得で得られる5つの効果
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">礼儀が身につく</h3>
              <p className="text-sm text-gray-600">
                武道では、挨拶・敬礼・礼儀が厳しく指導されます。これらは、日常生活でも自然に身につき、社会性の向上につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">集中力が高まる</h3>
              <p className="text-sm text-gray-600">
                試合では、一瞬の隙も許されません。集中力を高める訓練が自然に行われ、学業成績の向上にも繋がることが多いです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自信がつく</h3>
              <p className="text-sm text-gray-600">
                帯の昇進やレベル上昇など、目に見える成長が実感できます。失敗経験から回復する力も鍛えられます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">体力が向上</h3>
              <p className="text-sm text-gray-600">
                全身を使った反復練習により、筋力・柔軟性・持久力が総合的に向上します。健康寿命の延伸にも。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-black text-sm shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">護身術が身につく</h3>
              <p className="text-sm text-gray-600">
                実際の危機対応能力が身につきます。不確実な世の中で、子どもの安全性が向上します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          始める年齢のポイント
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">就学前(4～6歳)から始める</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>・礼儀教育の効果が大きい</li>
              <li>・基本動作が効率よく習得できる</li>
              <li>・長く続ける可能性が高い</li>
              <li>・デメリット: 理解度が低い場合がある</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">小学生(7歳以上)から始める</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>・理解度が高く、上達が早い</li>
              <li>・友達と一緒に習える</li>
              <li>・本人の意思で始めたケースが多い</li>
              <li>・メリット: 本人の動機付けが強い</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-700 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          空手と柔道は、異なる体力・性格を必要とする武道です。お子さんの適性と興味に合わせて、どちらが向いているかを判断することが大切です。新体力テストのデータを参考にしながら、お子さん本人の「やりたい」という気持ちを尊重して、武道の習い事を検討してください。武道で培われる礼儀と精神力は、生涯の財産になります。
        </p>
      </div>
    </ArticleLayout>
  );
}
