import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '子どもの運動神経はいつまでに鍛えれば良い?年齢別発達の目安と対処法',
  description:
    '子どもの運動神経の発達段階を年齢別に解説。「うちの子は運動が苦手」と感じる前に知っておきたい、年齢ごとの特徴と親ができることをご紹介します。',
  openGraph: {
    title: '子どもの運動神経はいつまでに鍛えれば良い?年齢別発達の目安と対処法',
    description:
      '子どもの運動神経の発達段階を年齢別に解説。「うちの子は運動が苦手」と感じる前に知っておきたい、年齢ごとの特徴と親ができることをご紹介します。',
    images: [{ url: '/images/articles/motor-development.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/motor-development',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/motor-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どもの運動神経はいつまでに鍛えれば良い?年齢別発達の目安と対処法',
    images: ['/images/articles/motor-development.jpg'],
  },
};

export default function MotorDevelopmentPage() {
  return (
    <ArticleLayout
      title="子どもの運動神経はいつまでに鍛えれば良い?年齢別発達の目安と対処法"
      heroImage="/images/articles/motor-development.jpg"
      heroAlt="リレーをしている子どもたち"
      publishDate="2025年4月"
      slug="motor-development"
      description="子どもの運動神経の発達段階を年齢別に解説。「うちの子は運動が苦手」と感じる前に知っておきたい、年齢ごとの特徴と親ができることをご紹介します。"
      tags={['運動神経', '発達', '子育て']}
      shareText="子どもの運動神経はいつまでに伸ばせるの?年齢別の発達目安と対処法を解説。 #子育て #運動神経"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          運動神経の発達には「時期」がある
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          「うちの子は運動音痴」と感じている親は多いと思います。しかし、それは単なる「時期尚早」かもしれません。子どもの運動神経の発達は、年齢ごとに異なるステージがあり、理解と対応が重要です。
        </p>

        <div className="bg-teal-50 rounded-2xl p-5 border border-teal-100 mb-6">
          <p className="font-bold text-teal-900 mb-3">神経系の発達曲線（Scammonの法則）</p>
          <ul className="space-y-2">
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">0～12歳:</span>
              <span>神経系が急速に発達。特に6～12歳で90%が完成</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">12～18歳:</span>
              <span>神経系はほぼ完成。筋力の発達に移行</span>
            </li>
            <li className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">18歳以上:</span>
              <span>神経系・筋力の微調整と技術精度の向上</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、「運動神経を鍛えるなら12歳まで」が黄金期です。この時期にどのような経験をするかで、生涯の運動能力が大きく変わります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          年齢別の発達特徴と親ができること
        </h2>

        <div className="space-y-6 mb-6">
          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">3～4歳(幼児前期)</h3>
            <p className="text-sm text-gray-600 mb-3 font-bold">発達特徴:</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-3">
              <li>・走る・跳ぶなど基本的な動きが少しずつできるように</li>
              <li>・体のバランス感覚が発達し始める</li>
              <li>・集中力は短く、すぐ飽きやすい</li>
            </ul>
            <p className="text-sm text-gray-600 mb-1 font-bold">親ができることは:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>・毎日の外遊びで、様々な動作経験をさせる</li>
              <li>・親子で一緒に遊ぶ。運動は「楽しい」ことが最優先</li>
              <li>・失敗しても笑顔で見守る。怒らない</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">6～8歳(低学年)</h3>
            <p className="text-sm text-gray-600 mb-3 font-bold">発達特徴:</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-3">
              <li>・複雑な動作がスムーズにできるようになり始める</li>
              <li>・骨の成長が活発で、ケガのリスクが低い</li>
              <li>・学習能力が高まり、繰り返し練習で習得が早い</li>
            </ul>
            <p className="text-sm text-gray-600 mb-1 font-bold">親ができることは:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>・複数のスポーツを「試す」ことを奨励</li>
              <li>・習い事を始める場合は、本人の意思を最優先</li>
              <li>・友達と一緒に遊ぶことで、社会性も発達させる</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">9～10歳(ゴールデンエイジ)</h3>
            <p className="text-sm text-gray-600 mb-3 font-bold">発達特徴:</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-3">
              <li>・神経系がほぼ完成に向かう最重要時期</li>
              <li>・複雑な動作を驚くほど素早く習得</li>
              <li>・判断力と理解力が急速に高まる</li>
            </ul>
            <p className="text-sm text-gray-600 mb-1 font-bold">親ができることは:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>・本人が「やりたい！」と言ったスポーツに集中させる</li>
              <li>・正しい技術指導を受けさせる機会を作る</li>
              <li>・この時期の学習効率を最大限に活かす</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">11～12歳(高学年)</h3>
            <p className="text-sm text-gray-600 mb-3 font-bold">発達特徴:</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-3">
              <li>・神経系の発達がほぼ完了</li>
              <li>・思春期に向けて心身に変化が起こり始める</li>
              <li>・習得した技術の洗練と精度向上に注力</li>
            </ul>
            <p className="text-sm text-gray-600 mb-1 font-bold">親ができることは:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>・習得した技術の定着を支援</li>
              <li>・友達との関係性を大切にする環境作り</li>
              <li>・13歳以上での競技化の検討</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          「運動が苦手」と感じる前に確認すること
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">発達段階は正常か?</h3>
              <p className="text-sm text-gray-600">
                年齢に対して、標準的な発達をしているか確認。遅れがあれば、医師に相談。多くの場合は、単なる「個人差」です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">運動経験は十分か?</h3>
              <p className="text-sm text-gray-600">
                単に「運動をする機会が少なかった」だけかもしれません。毎日の外遊びや運動の習慣をつけることが先決です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">本人のモチベーションは?</h3>
              <p className="text-sm text-gray-600">
                親が「やりなさい」と強制すると、やる気が失われます。本人が「やりたい」と感じる環境作りが大切。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">正しい指導を受けているか?</h3>
              <p className="text-sm text-gray-600">
                誤ったフォームで練習していれば、上達しません。質の良い指導者から学ぶことが重要です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          家庭でできる運動神経を伸ばす遊び5選
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          特別な道具がなくても、家庭でできる遊びで運動神経を伸ばせます。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              1
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">かけっこ・鬼ごっこ</p>
              <p className="text-xs text-gray-600">瞬発力・持久力・敏捷性が鍛えられます</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              2
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">なわとび</p>
              <p className="text-xs text-gray-600">リズム感・足の協調性・持久力が鍛えられます</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              3
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">ボール遊び(キャッチボール・投げる)</p>
              <p className="text-xs text-gray-600">巧緻性・目と手の協調性が鍛えられます</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              4
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">逆立ち・ブリッジ</p>
              <p className="text-xs text-gray-600">体幹の筋力・バランス感覚が鍛えられます</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              5
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">階段上り下り・段差越え</p>
              <p className="text-xs text-gray-600">下肢の筋力・バランス感覚が鍛えられます</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-teal-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          運動神経は「生まれつきの才能」ではなく、「環境と経験」で大きく変わります。12歳までが黄金期。この時期に多様な運動経験をさせることが、その後の人生の身体スキルに大きな影響を与えます。「うちの子は運動が苦手」と決めつけず、本人のペースに合わせた、楽しい運動環境作りを心がけてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
