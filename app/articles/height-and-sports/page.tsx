import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツをすると身長が止まる？科学的に正しい知識を解説',
  description:
    '「バレーは身長が伸びる」「筋トレで身長が止まる」本当？子どものスポーツと身長の関係を科学データで徹底解説します。',
  openGraph: {
    title: 'スポーツをすると身長が止まる？科学的に正しい知識を解説',
    description:
      '「バレーは身長が伸びる」「筋トレで身長が止まる」本当？子どものスポーツと身長の関係を科学データで徹底解説します。',
    images: [{ url: '/images/articles/height-and-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/height-and-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツをすると身長が止まる？科学的に正しい知識を解説',
    images: ['/images/articles/height-and-sports.jpg'],
  },
};

export default function HeightAndSportsPage() {
  return (
    <ArticleLayout
      title="スポーツをすると身長が止まる？科学的に正しい知識を解説"
      heroImage="/images/articles/height-and-sports.jpg"
      heroAlt="身長を測っている子ども"
      publishDate="2025年4月"
      slug="height-and-sports"
      description="「バレーは身長が伸びる」「筋トレで身長が止まる」本当？子どものスポーツと身長の関係を科学データで徹底解説します。"
      tags={['身長', 'スポーツ', '成長']}
      shareText="スポーツで身長が止まるって本当？科学的な真実を解説します。 #子育て #身長"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          「スポーツで身長が止まる」は本当か？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          親が子どもに「スポーツをしすぎると身長が止まるよ」と言い聞かせることがありますが、これは科学的根拠のない俗説です。正しい知識を持つことで、お子さんのスポーツライフをサポートできます。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">68%</p>
            <p className="text-xs text-gray-600 mt-1">運動習慣のある子の身長伸長率</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">4倍</p>
            <p className="text-xs text-gray-600 mt-1">成長ホルモン睡眠中の分泌量</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
            <p className="text-2xl font-black text-green-600">0</p>
            <p className="text-xs text-gray-600 mt-1">科学的証拠（筋トレの弊害）</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">科学的事実</p>
          <ul className="space-y-2">
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">筋トレで身長が止まる：</span>
              <span>誤り。American Academy of Pediatrics (2008) でも筋力トレーニングが骨端線に直接影響するという科学的証拠はないと明記されています</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">適度な運動は身長を伸ばす：</span>
              <span>正しい。有酸素運動は成長ホルモン(GH)の分泌を促進します</span>
            </li>
            <li className="text-sm text-green-800 flex gap-2">
              <span className="font-bold">過度な重量トレーニング：</span>
              <span>注意が必要。ただし、この場合のリスクは骨端線損傷で身長が止まることではなく、怪我そのものです</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          成長ホルモンと運動の関係
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          身長の伸長を担う「成長ホルモン(GH)」は、運動と睡眠の両方で分泌が促進されます。適度な運動は、身長を伸ばす味方です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">タイミング</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">成長ホルモン分泌</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">睡眠中（最初のノンレム睡眠）</td>
                <td className="px-3 py-2 text-gray-600">最大</td>
                <td className="px-3 py-2 text-gray-600">成長ホルモンの75%以上がここで分泌</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">有酸素運動中・直後</td>
                <td className="px-3 py-2 text-gray-600">上昇</td>
                <td className="px-3 py-2 text-gray-600">20～30分の適度な運動で分泌促進</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">筋力トレーニング直後</td>
                <td className="px-3 py-2 text-gray-600">上昇</td>
                <td className="px-3 py-2 text-gray-600">負荷がかかると分泌促進</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">低栄養状態</td>
                <td className="px-3 py-2 text-gray-600">低下</td>
                <td className="px-3 py-2 text-gray-600">身長伸長が阻害される唯一の要因</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">運動と睡眠のゴールデンコンビ</p>
          <p className="text-sm text-green-800">日中の適度な有酸素運動（サッカー、ランニング、縄跳びなど）は、夜の睡眠をより深くし、睡眠中の成長ホルモン分泌をさらに促進します。つまり、スポーツをすることで身長が伸びやすくなるということです。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          身長が高いスポーツ選手が多い本当の理由
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「バレーボール選手は背が高い」「体操選手は背が低い」という現象は、よく観察されます。これはスポーツが身長に影響しているのではなく、逆です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">選択バイアス（Selection Bias）</h3>
              <p className="text-sm text-gray-600">
                バレーボール選手が背が高いのは、身長の高い子どもが有利だから選ばれやすく、活躍しやすいからです。背が高い子が身長が伸びたわけではなく、もともと背が高かった子が集まっているだけです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バレーボール・バスケの平均身長</h3>
              <p className="text-sm text-gray-600">
                バレーボール女子選手の平均身長は173cm、男子は186cm。これは一般の高校生（女子157cm、男子172cm）よりも高いですが、これは「スポーツをしたから伸びた」のではなく、「もともと背が高い子が選ばれている」ためです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">他のスポーツでも同じ</h3>
              <p className="text-sm text-gray-600">
                体操選手が背が低いのは、体操は身長が低い子に有利だから。柔道選手が様々な身長なのは、体重階級制があるから。つまり、スポーツの特性に合った体格の子が集まるだけです。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          身長を伸ばすための3つの要素
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          身長の伸長に必要なのは「遺伝」「栄養」「睡眠」「運動」のバランスです。スポーツだけで身長が伸びるわけではなく、他の要素も同等に重要です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">適度な運動</h3>
              <p className="text-sm text-gray-600">
                週に3～4回、1回30～60分程度の有酸素運動が理想的です。毎日の激しい練習よりも、バランスの取れた運動が大切。過度な運動は栄養不足を招き、逆効果になります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">十分な睡眠（小学生：9～11時間）</h3>
              <p className="text-sm text-gray-600">
                成長ホルモンの75%以上が睡眠中に分泌されます。特に夜間（22時～2時の最初のノンレム睡眠）で多く分泌されるため、規則正しい睡眠が重要です。スポーツで疲れた分、しっかり寝ることが身長伸長につながります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">バランスの良い食事（カルシウム・たんぱく質）</h3>
              <p className="text-sm text-gray-600">
                骨の成長に必要なカルシウム（1日700～900mg）、筋肉と骨の成長に必要なたんぱく質（体重1kg当たり1.2～1.5g）を毎日摂取する必要があります。スポーツをしている子は栄養ニーズがさらに高くなります。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-5 border border-green-100 mb-6">
          <p className="font-bold text-green-900 mb-2">栄養不足が身長を止める唯一の要因</p>
          <p className="text-sm text-green-800">スポーツで身長が「止まる」のではなく、スポーツで消費した栄養を補わない場合、身長伸長が阻害される可能性があります。つまり、親が気を配るべきは「スポーツを禁止すること」ではなく「栄養補給を心がけること」です。</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          注意すべき練習の種類
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一部の練習方法は、身長伸長に悪影響を及ぼす可能性があります。スポーツ自体ではなく「不適切な練習方法」が問題です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">練習タイプ</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">リスク</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">対策</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">過度な重量筋トレ</td>
                <td className="px-3 py-2 text-gray-600">骨端線損傷のリスク</td>
                <td className="px-3 py-2 text-gray-600">子どもは自重運動を優先。重いウェイトは避ける</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">栄養不足での過度な練習</td>
                <td className="px-3 py-2 text-gray-600">身長伸長の阻害</td>
                <td className="px-3 py-2 text-gray-600">栄養補給・栄養管理を徹底する</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">毎日の激しい練習（過労）</td>
                <td className="px-3 py-2 text-gray-600">睡眠不足による成長ホルモン分泌低下</td>
                <td className="px-3 py-2 text-gray-600">週に1～2日の休息日を設ける</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">衝撃の大きい運動（不適切なフォーム）</td>
                <td className="px-3 py-2 text-gray-600">成長板損傷のリスク</td>
                <td className="px-3 py-2 text-gray-600">正しいフォーム指導を受ける</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-green-500 rounded-full inline-block"></span>
          まとめ：適度な運動は身長の味方
        </h2>
        <p className="text-gray-700 leading-relaxed">
          「スポーツで身長が止まる」は科学的根拠のない俗説です。むしろ、適度な運動は成長ホルモン分泌を促進し、身長伸長を助けます。大切なのは、スポーツの量ではなく「栄養・睡眠・運動のバランス」です。親が心がけるべきは、スポーツを禁止することではなく、スポーツをしている子どもの栄養管理と睡眠を優先することです。お子さんが好きなスポーツを思いっきり楽しみながら、健やかに成長する環境をサポートしてあげてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
