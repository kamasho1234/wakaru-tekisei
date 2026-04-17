import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '3歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の始め方',
  description:
    '3歳児の運動発達の特徴を解説し、体操・水泳・ダンスなど向いているスポーツを紹介。習い事を始める際の注意点と親のサポート方法もわかります。',
  openGraph: {
    title: '3歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の始め方',
    description:
      '3歳児の運動発達の特徴を解説し、体操・水泳・ダンスなど向いているスポーツを紹介。習い事を始める際の注意点と親のサポート方法もわかります。',
    images: [{ url: '/images/articles/age-3-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/age-3-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の始め方',
    images: ['/images/articles/age-3-sports.jpg'],
  },
};

export default function Age3SportsPage() {
  return (
    <ArticleLayout
      title="3歳の子どもに向いているスポーツ｜運動発達の特徴と習い事の始め方"
      heroImage="/images/articles/age-3-sports.jpg"
      heroAlt="3歳の子どもが体操をしている様子"
      publishDate="2025年4月"
      slug="age-3-sports"
      description="3歳児の運動発達の特徴を解説し、体操・水泳・ダンスなど向いているスポーツを紹介。習い事を始める際の注意点と親のサポート方法もわかります。"
      tags={['3歳', '幼児スポーツ', '習い事']}
      shareText="3歳の子どもに向いているスポーツは？運動発達の特徴から選び方まで解説 #子育て #スポーツ適性"
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          3歳の運動発達の特徴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          3歳は「プレゴールデンエイジ」の入り口にあたる時期です。この時期の子どもは、歩く・走る・跳ぶといった基本的な動作が急速に上手になり、全身を使った遊びを通じて運動能力の土台を作っています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">発達している能力</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>・両足ジャンプができる</li>
              <li>・片足立ちを数秒間保てる</li>
              <li>・三輪車をこぐことができる</li>
              <li>・ボールを蹴る動作が安定してくる</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">これから発達する能力</p>
            <ul className="text-xs text-amber-800 space-y-1">
              <li>・複雑な協調動作</li>
              <li>・リズムに合わせた動き</li>
              <li>・複数の動作の組み合わせ</li>
              <li>・ボールを投げる・受け取る</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          3歳前後は「何でも自分でやりたい」という自律性が芽生える時期でもあります。スポーツを「やらされる」のではなく「やってみたい」と思える環境づくりが最も大切です。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          3歳に向いているスポーツ
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">体操・リトミック体操</h3>
            <p className="text-sm text-gray-600">
              3歳からの習い事として最も人気の高いジャンルです。マット運動・跳び箱・鉄棒などの基礎から始まり、全身の協調性とバランス感覚を自然に育てます。プロ選手への道だけでなく、どのスポーツにも活きる基礎運動能力が身につきます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">水泳（スイミング）</h3>
            <p className="text-sm text-gray-600">
              3歳から通える水泳教室は全国に多く、水慣れから始まるカリキュラムが整っています。水中での全身運動は心肺機能を高め、浮力を使うため関節への負担も少なく安全です。溺れないための安全スキルとしても有効です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">ダンス・リトミック</h3>
            <p className="text-sm text-gray-600">
              音楽に合わせて体を動かすリトミックは、リズム感と表現力を育てます。将来的にどのスポーツでも役立つ「音に合わせて動く」能力の土台になります。楽しく体を動かすことへの抵抗感をなくす効果もあります。
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          3歳での習い事を始める際の注意点
        </h2>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <ul className="space-y-3">
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span><strong>「楽しい」を最優先にする</strong> — 3歳では技術習得より「運動が好き」という感情を育てることが先決です。嫌がるなら無理に続けさせないことが長期的に大切です。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span><strong>短時間・少回数から始める</strong> — 集中力が持続するのは10〜15分程度です。週1回45分程度のクラスから始めるのが理想的です。</span>
            </li>
            <li className="text-sm text-amber-800 flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span><strong>親の見学・参加ができる環境を選ぶ</strong> — 初めての場所では分離不安が出ることがあります。親が近くにいられる環境かどうかを確認しましょう。</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber-500 rounded-full inline-block"></span>
          親ができるサポート
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          3歳の子どもにとって、最高の運動環境は「親と一緒に体を動かす遊び」です。公園でかけっこをする、ボールを転がして遊ぶ、ジャングルジムで冒険するといった日常の遊びが、習い事と同等かそれ以上の運動発達の効果をもたらします。
        </p>
        <p className="text-gray-700 leading-relaxed">
          習い事を始める前に、まずは家庭での「動く遊び」を増やすことが、スポーツへの興味を引き出す最初のステップです。お子さんの興味が何に向いているかを観察してから、習い事を選ぶと失敗が少なくなります。
        </p>
      </div>
    </ArticleLayout>
  );
}
