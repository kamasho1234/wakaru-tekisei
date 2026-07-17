import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもが本番・試合で緊張して力を出せない時｜メンタルトレーニング技法',
  description:
    '試合で実力を発揮できない原因は「緊張のコントロール不足」かもしれません。スポーツ庁が公開するメンタルトレーニング技法（呼吸法、イメージトレーニング、筋弛緩法）を親と子で実践できる形で解説します。',
  openGraph: {
    title: '子どもが本番・試合で緊張して力を出せない時｜メンタルトレーニング技法',
    description:
      '試合で実力を発揮できない子へ。スポーツ庁が公開するメンタルトレーニング技法（呼吸法、イメージトレーニング、筋弛緩法）を実践的に解説します。',
    images: [{ url: '/images/articles/kids-nervous-games.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/kids-nervous-games',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/kids-nervous-games',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもが本番・試合で緊張して力を出せない時｜メンタルトレーニング技法',
    images: ['/images/articles/kids-nervous-games.jpg'],
  },
};

export default function KidsNervousGamesPage() {
  return (
    <ArticleLayout
      title="子どもが本番・試合で緊張して力を出せない時｜メンタルトレーニング技法"
      heroImage="/images/articles/kids-nervous-games.jpg"
      heroAlt="試合に臨む子ども"
      publishDate="2026年7月"
      slug="kids-nervous-games"
      description="試合で実力を発揮できない原因は『緊張のコントロール不足』かもしれません。スポーツ庁が公開するメンタルトレーニング技法（呼吸法、イメージトレーニング、筋弛緩法）を親と子で実践できる形で解説します。"
      tags={['メンタルトレーニング', 'スポーツ心理学', '本番での緊張', 'パフォーマンス', '子育て']}
      shareText="試合で実力を出せない子も多いですが、メンタルトレーニングで改善できます。スポーツ庁が公開する4つの技法（呼吸法、イメージトレーニング、筋弛緩法、注意の切り替え）を解説しました。 #子育て #スポーツ #メンタルトレーニング"
      citations={[
        'スポーツ庁「メンタルトレーニング基礎講座」 https://www.jpnsport.go.jp/hpsc/study/sports_psychology/tabid/1473/Default.aspx',
        'スポーツ庁「心理学的サポートガイド」 https://www.jpnsport.go.jp/hpsc/Portals/0/resources/hpsc/shinri08.pdf',
        '日本スポーツ心理学会 https://www.jssp.jp/',
        '秋田県教育委員会「メンタルトレーニング」 https://common3.pref.akita.lg.jp/aiss/science/minikomi/h22.Mental5.pdf',
      ]}
    >
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          「練習ではうまくいくのに、試合になると力が出ない」。そんなお子さんの悩みを聞いたことはありませんか。実は、これは「メンタルの問題」であり、トレーニングで改善できるスキルです。スポーツ庁は、子ども向けのメンタルトレーニング技法を公開しており、親と子で実践することができます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          緊張は「悪い」のか？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          まず大切な理解として「緊張は必ずしも悪いものではない」ということを知ってください。スポーツ心理学には、有名な法則があります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">ヤーキーズ・ドッドソンの法則（逆 U 字理論）</p>
          <p className="text-sm text-blue-800 leading-relaxed mb-3">
            1908 年に心理学者が提唱した法則で、次のことが分かっています：
          </p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">●</span>
              <span>覚醒水準（ストレスや緊張のレベル）が低すぎると、パフォーマンスが落ちる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">●</span>
              <span>覚醒水準が中程度（適度な緊張）のとき、最も良いパフォーマンスを発揮できる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">●</span>
              <span>覚醒水準が高すぎても（緊張しすぎて）、パフォーマンスが低下する</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            つまり、「全く緊張していない状態」と「緊張しすぎている状態」の両方が悪く、「ちょうど良い適度な緊張」が最高のパフォーマンスを引き出すのです。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          大切なのは「緊張をなくすこと」ではなく「緊張をコントロールすること」です。この「コントロール」のスキルを習得するのが、メンタルトレーニングの目的です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツ庁が公開する 4 つのメンタルトレーニング技法
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スポーツ庁は、アスリートから子どもまで実践できるメンタルトレーニング技法を公開しています。以下の 4 つが代表的です。
        </p>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">1. 呼吸法（リラクセーション技法）</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            最もシンプルで、どこででも実践できるのが「呼吸法」です。緊張したときは、無意識に呼吸が浅くなります。意識的にゆっくり、深い呼吸をすることで、身体と心をリラックスさせることができます。
          </p>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
            <p className="font-bold text-blue-900 mb-2">基本的な呼吸法</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="text-sm text-blue-800">座った状態で背筋を伸ばす</li>
              <li className="text-sm text-blue-800">鼻からゆっくり（4 秒かけて）吸う</li>
              <li className="text-sm text-blue-800">その状態で 7 秒間止める</li>
              <li className="text-sm text-blue-800">口からゆっくり（8 秒かけて）吐き出す</li>
            </ol>
            <p className="text-xs text-blue-600 mt-3 font-bold">※ 4 秒吸って 7 秒止めて 8 秒かけて吐く「4-7-8 呼吸法」は、日本オリンピック委員会（JOC）でも採用されています</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            試合の 10 分前や、本番直前に 5 回～10 回繰り返すだけでも、効果が期待できます。子どもが学習しやすい簡単な技法です。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">2. 漸進的筋弛緩法</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            「身体の緊張」と「心の緊張」は連動しています。意図的に筋肉を緊張させたあと、一気に弛緩させることで「リラックスしている状態」を学ぶ技法です。
          </p>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
            <p className="font-bold text-blue-900 mb-2">実践方法（1 つの筋肉グループの例）</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="text-sm text-blue-800">握こぶしを作って、約 5 秒間、力感 50～70% 程度の強さで握る</li>
              <li className="text-sm text-blue-800">その後、一気に力を抜く</li>
              <li className="text-sm text-blue-800">「ああ、これがリラックスしている状態だ」と感覚を認識する</li>
            </ol>
            <p className="text-xs text-blue-700 mt-3">
              これを両腕、両脚、腹部、胸部など、全身の筋肉グループに対して繰り返します。この技法を習慣づけると、試合中でも自発的にリラックス状態を作ることができるようになります。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            この技法は、「身体の感覚」を通じて「リラックスする方法」を学ぶので、言葉で理解しにくい子どもにも効果的です。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">3. イメージトレーニング（イメージ技法）</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            「イメージトレーニング」は、脳内で成功場面を繰り返し想像することで、実際のパフォーマンスを高めるメンタルトレーニング技法です。
          </p>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
            <p className="font-bold text-blue-900 mb-2">実践ポイント</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800 flex gap-3">
                <span className="font-bold shrink-0">効果</span>
                <span>実際の動作の 70% 以上の効果があるとされています</span>
              </li>
              <li className="text-sm text-blue-800 flex gap-3">
                <span className="font-bold shrink-0">タイミング</span>
                <span>就寝前の 5 分間、成功している場面を細部まで想像する習慣が効果的</span>
              </li>
              <li className="text-sm text-blue-800 flex gap-3">
                <span className="font-bold shrink-0">精度</span>
                <span>イメージが鮮明であるほど効果が高まります。「視覚」だけでなく、音、触覚、感情まで含めて想像する</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            親が「試合のその場面を思い出して、細かく教えてくれる」ことで、子どもがより具体的にイメージしやすくなります。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">4. 注意の切り替え技法</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            試合中に「失敗を引きずる」「余計なことを考える」という状態から、「今、ここにある競技に集中する」という状態に切り替えるスキルです。
          </p>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
            <p className="font-bold text-blue-900 mb-2">実践方法</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800">・視線の固定：決まった場所（目標など）に視線を固定して、集中力を保つ</li>
              <li className="text-sm text-blue-800">・キューワード：「いけ」「よし」など、子ども自身が決めた合図の言葉を心の中で唱える</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            これは「雑念を完全になくす」のではなく「今の競技に注意を集中させる」という実用的な技法です。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          「ゾーン」に入る状態を作ること
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          メンタルトレーニングの最終的な目的は「ゾーン」に入ることです。ゾーンとは、時間を忘れて競技に没頭し、実力が最大限に引き出される状態のことです。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">ゾーンに入る条件</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            ゾーンに入るためには「適度な緊張とリラックスのバランスがとれている状態」が必要です。これが、先ほど説明したヤーキーズ・ドッドソンの法則における「中程度の覚醒水準」にあたります。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          上記 4 つのメンタルトレーニング技法は、全て「その子が自分でゾーンに入る状態を作る」ためのツールなのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親と指導者ができる支援
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          メンタルトレーニングのスキルは「習慣化」することで初めて試合で発揮されます。親と指導者が、その環境づくりをサポートすることが大切です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">親ができること</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-blue-800">・毎日の呼吸法やイメージトレーニングを習慣化する時間をつくる</li>
              <li className="text-sm text-blue-800">・試合前に子どもと一緒にメンタルトレーニングを実践する</li>
              <li className="text-sm text-blue-800">・試合後に「何がうまくいったか」を一緒に振り返る</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">指導者ができること</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-blue-800">・練習の一環にメンタルトレーニングを組み込む</li>
              <li className="text-sm text-blue-800">・試合直前に子どもがメンタルスキルを実践する時間を確保する</li>
              <li className="text-sm text-blue-800">・子どもが「ゾーンに入れた瞬間」を認識できるようにサポートする</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          メンタルトレーニングは「一度習ったら終わり」ではなく、スポーツトレーニングと同じように「継続的な実践」が必要です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          参考：スポーツ心理学の研究
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本でも、メンタルトレーニングに関する研究や教育活動が進んでいます。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              <strong>日本スポーツ心理学会</strong>は、メンタルトレーニング指導士の資格制度を設けており、専門家の育成を行っています
            </li>
            <li className="text-sm text-gray-700">
              機関誌『スポーツ心理学研究』でメンタルトレーニング関連の最新研究が発表されています
            </li>
            <li className="text-sm text-gray-700">
              2021 年からは、中学生・高校生や市民向けのスポーツ心理学入門講座をオンライン形式で実施しており、誰でもアクセス可能になっています
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          実践のポイント
        </h2>
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">段階的に</span>
              <span>最初は 1 つの技法から始め、習慣化してから他の技法を加える</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">毎日の練習</span>
              <span>試合の数週間前から、毎日練習に組み込むことが効果的</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">フィードバック</span>
              <span>試合後に「何がうまくいったか」を一緒に振り返り、改善点を見つける</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">個性を尊重</span>
              <span>子どもによって効果的な技法は異なるため、複数の方法を試して最適なものを見つける</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・緊張は「悪い」のではなく、コントロールすべきもの</li>
            <li className="text-sm text-gray-700">・適度な緊張がパフォーマンスを高める（ヤーキーズ・ドッドソンの法則）</li>
            <li className="text-sm text-gray-700">・スポーツ庁が公開する 4 つのメンタルトレーニング技法は、すべて実践可能</li>
            <li className="text-sm text-gray-700">・「ゾーン」に入る状態を自分で作ることが最終目標</li>
            <li className="text-sm text-gray-700">・親と指導者のサポートと習慣化が成功の鍵</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          「試合で力が出ない」というお子さんの悩みは、実は改善可能な課題です。メンタルトレーニングを通じて、お子さんが自分の緊張をコントロールし、試合で最高のパフォーマンスを発揮できるようサポートしていきましょう。
        </p>
      </div>
    </ArticleLayout>
  );
}
