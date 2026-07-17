import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '発達障害・DCD（発達性協調運動障害）とスポーツ｜子どもの運動支援ガイド',
  description:
    'DCD（発達性協調運動障害）のある子どもでも、適切な支援を受ければスポーツに参加できます。診断基準、有病率、効果的な支援方法を学会・省庁の情報に基づいて解説。医療専門家への相談の重要性を明確に。',
  openGraph: {
    title: '発達障害・DCD（発達性協調運動障害）とスポーツ｜子どもの運動支援ガイド',
    description:
      'DCD（発達性協調運動障害）のある子どもでも、適切な支援を受ければスポーツに参加できます。診断基準、有病率、効果的な支援方法を学会・省庁の情報に基づいて解説。',
    images: [{ url: '/images/articles/developmental-disorder-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/developmental-disorder-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/developmental-disorder-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '発達障害・DCD（発達性協調運動障害）とスポーツ｜子どもの運動支援ガイド',
    images: ['/images/articles/developmental-disorder-sports.jpg'],
  },
};

export default function DevelopmentalDisorderSportsPage() {
  return (
    <ArticleLayout
      title="発達障害・DCD（発達性協調運動障害）とスポーツ｜子どもの運動支援ガイド"
      heroImage="/images/articles/developmental-disorder-sports.jpg"
      heroAlt="スポーツに取り組む子ども"
      publishDate="2026年7月"
      slug="developmental-disorder-sports"
      description="DCD（発達性協調運動障害）のある子どもでも、適切な支援を受ければスポーツに参加できます。診断基準、有病率、効果的な支援方法を学会・省庁の情報に基づいて解説。医療専門家への相談の重要性を明確に。"
      tags={['発達障害', 'DCD', 'スポーツ支援', 'アダプテッド・スポーツ', '子育て']}
      shareText="DCD（発達性協調運動障害）のある子どもでも、適切な支援でスポーツに参加できます。診断基準、支援方法、医療機関への相談の位置づけを解説しました。 #子育て #スポーツ"
      citations={[
        '発達障害情報・支援センター「発達性協調運動障害（DCD）について」 https://hattatsu.go.jp/supporter/healthcare_health/about-dcd/',
        'スポーツ庁「スポーツ in LIFE」Special Column「子どもの発達を支援するスポーツ活動」 https://sportinlife.go.jp/general/column/article/9974/',
        '情報保障ネットワーク（DINF）「発達協調運動障害と学習支援」 https://www.dinf.ne.jp/doc/japanese/access/yuniko/yuniko17.html',
      ]}
    >
      <div>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">医療上の重要なお知らせ</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            本記事は一般的な情報提供であり、医学的なアドバイスではありません。DCD の診断、治療方針、スポーツ参加の可否については、必ず医師や作業療法士などの医療専門家に相談してください。個々のお子さんの症状や程度に基づいて、専門家と相談の上で判断してください。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子は運動が苦手で、ボール投げがうまくできない」「書き方が他の子と違う」「着替えが遅い」。こうした悩みを持つ親もいるかもしれません。もし「発達性協調運動障害（DCD）」という言葉を目にしたとしても、それは医学的な診断であり、親の自己判断では決めることはできません。ただし、適切な支援があれば、DCD のある子どもでもスポーツに参加することは十分可能です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          DCD（発達性協調運動障害）とは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          発達性協調運動障害（DCD: Developmental Coordination Disorder）は、DSM-5 で「神経発達症群」に分類される発達障害です。医学的な診断には、以下の条件を満たす必要があります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">DCD の診断基準</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li className="text-sm text-blue-800">
              <strong>運動技能の著しい困難</strong> — 年齢に対して期待される協調運動（ボール投げ、書き方、ハサミを使うなど）が著しく低い
            </li>
            <li className="text-sm text-blue-800">
              <strong>日常生活への著しい影響</strong> — 着替え、食事、学業、遊びなど日常生活が阻害されている
            </li>
            <li className="text-sm text-blue-800">
              <strong>小児期からの早期発症</strong> — 幼児期から症状が見られる
            </li>
            <li className="text-sm text-blue-800">
              <strong>他の神経疾患では説明できない</strong> — 脳性麻痺や脊髄損傷など、他の医学的条件では説明できない
            </li>
          </ol>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、「運動が苦手」というだけでは DCD ではなく、医師の診断を通じて初めて判断されるものです。同じような困難を示す子どもでも、原因は異なる可能性があります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          DCD はどのくらい一般的か
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          DCD の有病率は子ども人口の 5～8％と報告されています。これは同年代の ADHD（1～2％）や ASD（1～2％）よりも高い有病率です。つまり、クラスに 30 人いれば、DCD のある子どもが 1～2 人いる可能性があります。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">他の発達障害との併存</p>
          <p className="text-sm text-blue-800 leading-relaxed mb-2">
            DCD のある子どもは、複数の発達障害を併発することが多いとされています：
          </p>
          <ul className="space-y-1">
            <li className="text-sm text-blue-800 flex justify-between"><span>ADHD（注意欠如多動症）</span><span className="font-bold">約 50%</span></li>
            <li className="text-sm text-blue-800 flex justify-between"><span>ASD（自閉スペクトラム症）</span><span className="font-bold">約 4.1～8.2%</span></li>
            <li className="text-sm text-blue-800 flex justify-between"><span>LD（学習障害）</span><span className="font-bold">約 17.8～27.5%</span></li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          お子さんの「運動が苦手」という側面だけでなく、他の発達特性がないか、医療専門家に総合的に診てもらうことが大切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          スポーツの場で見える「できなさ」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          DCD のある子どもにとって、スポーツの場は特に課題が目立ちやすい環境です。運動は「できる」「できない」がはっきり見える場面だからです。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            「運動の場面というのは自分のできなさを披露する『失敗の連続の場』になる可能性があります」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 発達障害情報・支援センター</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          そのため、DCD のある子どもは、学校の体育授業や試合で繰り返し失敗を経験し、自信を失うことがあります。また、スポーツの場だけでなく、学校生活全体や社会性の発達にも影響することがあります。
        </p>

        <p className="text-gray-700 leading-relaxed">
          だからこそ、お子さんの特性を理解し、支援する関わり方が大切になってきます。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          DCD のある子どもはスポーツができない？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          いいえ、そうではありません。DCD のある子どもでも、適切な支援を受けることでスポーツに参加できます。スポーツ庁も、以下のような支援方法を推奨しています。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">効果的な支援方法</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">1.</span>
              <span>一人ひとりの動きの特性を見極める — 得意な動きと苦手な動きを正確に理解する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">2.</span>
              <span>スモールステップの練習 — その子に合ったレベルから始めて、段階的に難度を上げる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">3.</span>
              <span>「できる体」に焦点を当てる — 失敗を減らす環境調整に力を入れる</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">4.</span>
              <span>アダプテッド・スポーツ — ルールや道具を柔軟に工夫して、誰もが参加しやすいスポーツに調整する</span>
            </li>
            <li className="text-sm text-blue-800 flex gap-3">
              <span className="font-bold shrink-0">5.</span>
              <span>指導者育成と保護者の理解 — 指導者と家族が一丸となって支援する</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          特に注目したいのは「アダプテッド・スポーツ」です。これは「スポーツのルールや道具を柔軟に適合させて、その子が参加できるように調整する」という考え方です。例えば、ボール投げが苦手な子には軽いボールを使ったり、的を近づけたり、段階的に難度を上げたりします。
        </p>

        <p className="text-gray-700 leading-relaxed">
          大切なのは、「その子がスポーツを諦めさせる」のではなく、「その子が参加でき、成功体験を得られる環境を作ること」です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          医療機関への相談が大切
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          もし「うちの子は DCD かもしれない」と感じたら、医療機関への相談が第一歩です。自己診断は避け、医師や作業療法士の専門的な評価を受けてください。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">相談するメリット</p>
          <ul className="space-y-2">
            <li className="text-sm text-amber-800 flex gap-3">
              <span className="font-bold shrink-0">診断</span>
              <span>実際に DCD なのか、他の理由での困難なのかが明確になる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-3">
              <span className="font-bold shrink-0">支援計画</span>
              <span>お子さんに合った具体的な支援方法を提案してもらえる</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-3">
              <span className="font-bold shrink-0">学校・スポーツ施設への連携</span>
              <span>医療機関と学校、指導者が協力する体制が整いやすい</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          親と指導者ができること
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          DCD のある子どもを支援するために、親と指導者ができることがあります。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">親ができること</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800">・医療機関での診断・評価を受け、専門家の助言を理解する</li>
              <li className="text-sm text-blue-800">・学校やスポーツ施設の指導者に、お子さんの特性を正確に伝える</li>
              <li className="text-sm text-blue-800">・家庭での小さな成功体験を重ねて、自信を育てる</li>
              <li className="text-sm text-blue-800">・スポーツを「できない」で終わらせず、「工夫して参加する」という視点を持つ</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <p className="font-bold text-blue-900 mb-2">指導者ができること</p>
            <ul className="space-y-2">
              <li className="text-sm text-blue-800">・その子の得意な側面と苦手な側面を丁寧に観察する</li>
              <li className="text-sm text-blue-800">・段階的で達成しやすい練習プログラムを用意する</li>
              <li className="text-sm text-blue-800">・失敗よりも成功体験を意識的に増やす環境を作る</li>
              <li className="text-sm text-blue-800">・必要に応じてルールや道具を工夫し、その子が参加しやすくする</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・DCD は診断であり、親の自己判断で決めるものではありません</li>
            <li className="text-sm text-gray-700">・子ども人口の 5～8% が DCD とされており、決して珍しい障害ではありません</li>
            <li className="text-sm text-gray-700">・適切な支援を受ければ、DCD のある子どもでもスポーツに参加できます</li>
            <li className="text-sm text-gray-700">・医療専門家、学校、スポーツ施設が連携することが支援の鍵です</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          お子さんの運動の困難に気づいたとき、大切なのは「その困難を『個性の問題』で済ませるのではなく、医療専門家に相談し、正確な理解と適切な支援につなげること」です。DCD のある子どもも、工夫と支援を通じて、スポーツの喜びを経験することができます。
        </p>
      </div>
    </ArticleLayout>
  );
}
