import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'スポーツと勉強の両立はできる？脳科学が教える意外な関係',
  description:
    'スポーツに時間を取られて成績が下がる？実は逆。運動が脳の学習能力を高めることが科学的に証明されています。',
  openGraph: {
    title: 'スポーツと勉強の両立はできる？脳科学が教える意外な関係',
    description:
      'スポーツに時間を取られて成績が下がる？実は逆。運動が脳の学習能力を高めることが科学的に証明されています。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/sport-vs-study',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スポーツと勉強の両立はできる？脳科学が教える意外な関係',
    images: ['/og-image.png'],
  },
};

export default function SportVsStudyPage() {
  return (
    <ArticleLayout
      title="スポーツと勉強の両立はできる？脳科学が教える意外な関係"
      heroImage="/images/articles/sport-vs-study.jpg"
      heroAlt="勉強とスポーツを両立している子ども"
      publishDate="2025年4月"
      tags={['勉強との両立', '脳科学', 'スポーツ']}
      shareText="スポーツすると頭が良くなる？脳科学が証明する運動と学習能力の関係。 #子育て #勉強"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「スポーツをすると成績が下がる」は誤解
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          多くの親が「スポーツに時間を取られたら、勉強がおろそかになるのでは」と心配します。しかし、科学は全く逆の答えを示しています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">87点</p>
            <p className="text-xs text-gray-600 mt-1">運動習慣ある子の平均成績</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <p className="text-2xl font-black text-blue-600">76点</p>
            <p className="text-xs text-gray-600 mt-1">運動習慣ない子の平均成績</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">文科省の研究より</p>
          <p className="text-sm text-blue-800">
            運動習慣がある小学生は、そうでない子より国語・算数の成績が有意に高いことが明らかになっています。つまり、スポーツと勉強は「競争関係」ではなく「相乗効果」の関係なのです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動が脳に与える科学的なメカニズム
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          なぜ、運動をすると頭が良くなるのか？それはBDNF（脳由来神経栄養因子）という物質の分泌にあります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">運動がBDNFを増加させる</h3>
              <p className="text-sm text-gray-600">
                有酸素運動（ジョギング、サッカー、水泳など）をすると、脳から脳由来神経栄養因子（BDNF）が分泌されます。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">BDNFが脳細胞を成長させる</h3>
              <p className="text-sm text-gray-600">
                BDNFは脳の海馬（学習・記憶の中枢）の神経細胞を新生・成長させます。これが「脳の栄養」と呼ばれる所以です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">学習能力が向上する</h3>
              <p className="text-sm text-gray-600">
                その結果、集中力・記憶力・学習速度が向上します。実際に、運動直後の学習は定着率が高いことが実験で証明されています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="font-bold text-blue-900 mb-2">Ratey著『脳を鍛えるには運動しかない！』</p>
          <p className="text-sm text-blue-800">
            ハーバード医学大学院の神経科学者ジョン・レイティ氏が、BDNF研究の最新知見をわかりやすくまとめた著書。運動と学習能力の関係を徹底解説しています。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          有名な実験：運動で学力が上がった事例
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">ネイパービル市の実験（米国）</h3>
            <p className="text-sm text-blue-800 mb-3">
              イリノイ州ネイパービル市では、朝1時間の体育授業を導入しました。その結果は驚くべきものでした。
            </p>
            <div className="space-y-2">
              <p className="text-sm text-blue-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>体育導入前：平均的な学力水準</span>
              </p>
              <p className="text-sm text-blue-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>体育導入後：全米トップレベルの学力水準に向上</span>
              </p>
              <p className="text-sm text-blue-800 flex gap-2">
                <span className="font-bold">・</span>
                <span>TIMSS国際学力調査でも成績が大幅改善</span>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">重要なポイント</h3>
            <p className="text-sm text-blue-800">
              運動量を増やしただけで、勉強時間は変わっていません。つまり、運動そのものが脳機能を高め、学力向上につながったということです。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツと勉強を両立している子の特徴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">時間の使い方が上手い</h3>
              <p className="text-sm text-gray-600">
                限られた時間を効率よく使うため、勉強時の集中力が高い。スポーツで鍛えられた「脳の切り替え能力」が活躍しています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">メンタルが強い</h3>
              <p className="text-sm text-gray-600">
                スポーツで失敗と挑戦を繰り返すため、勉強でのつまずきにも立ち向かう力が備わります。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">脳が活性化している</h3>
              <p className="text-sm text-gray-600">
                運動により脳の血流が増加し、神経細胞が活発に働いているため、学習能力が自然と向上しています。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自己管理能力が高い</h3>
              <p className="text-sm text-gray-600">
                スポーツの練習時間、試合日程、勉強時間のバランスを取る必要があり、自然と自己管理スキルが磨かれます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          両立するための時間管理のコツ
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3 bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <span className="text-xl font-black text-blue-600 shrink-0">1</span>
            <p className="text-sm text-blue-800">
              <span className="font-bold">運動直後に勉強する</span><br/>
              運動後30～60分は集中力・記憶力が最高潮。この「ゾーン状態」を勉強に活用しましょう。
            </p>
          </div>
          <div className="flex gap-3 bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <span className="text-xl font-black text-blue-600 shrink-0">2</span>
            <p className="text-sm text-blue-800">
              <span className="font-bold">睡眠を削らない</span><br/>
              スポーツの練習で疲れるのは当然。勉強時間を確保するため睡眠を削ると、かえって学習効率が低下します。
            </p>
          </div>
          <div className="flex gap-3 bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <span className="text-xl font-black text-blue-600 shrink-0">3</span>
            <p className="text-sm text-blue-800">
              <span className="font-bold">曜日ごとに優先順位を決める</span><br/>
              試合がある週は勉強重視、練習オフの週は学習集中。メリハリをつけることで両立が可能になります。
            </p>
          </div>
          <div className="flex gap-3 bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <span className="text-xl font-black text-blue-600 shrink-0">4</span>
            <p className="text-sm text-blue-800">
              <span className="font-bold">質を重視する</span><br/>
              勉強時間の長さより、1時間の勉強でどれだけ集中できたかが大切。スポーツで培った「短時間で集中する力」が活躍します。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ：スポーツは勉強の「敵」ではない
        </h2>
        <p className="text-gray-700 leading-relaxed">
          科学的証拠は一貫して同じ結論を示しています：運動習慣がある子は、ない子より学力が高い。スポーツは勉強と競合するのではなく、脳を活性化させ、学習能力を高めるものです。「スポーツで成績が下がるかもしれない」という心配は不要。むしろ、バランスの取れた両立こそが、子どもの総合的な成長を促す最良の方法なのです。運動直後の学習を心がけ、睡眠をしっかり確保さえすれば、スポーツと勉強の相乗効果で、子どもの能力を最大限に引き出すことができます。
        </p>
      </div>
    </ArticleLayout>
  );
}
