// 3〜5歳向け幼児診断データ

export interface YojiQuestion {
  id: string;
  text: string;
  category: 'active' | 'rhythm' | 'focus' | 'social';
}

export interface YojiRecommendation {
  name: string;
  reason: string;
  image?: string;
}

export interface YojiType {
  id: 'active' | 'rhythm' | 'focus' | 'social';
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  recommendations: YojiRecommendation[];
  advice: string;
  color: string;
  textColor: string;
}

export const yojiQuestions: YojiQuestion[] = [
  // 活発・行動系
  { id: 'a1', text: 'よく走り回り、なかなか疲れない', category: 'active' },
  { id: 'a2', text: 'ジャンプや高いところへの登り降りが好き', category: 'active' },
  { id: 'a3', text: 'ボールを蹴ったり投げたりするのが大好き', category: 'active' },

  // リズム・表現系
  { id: 'r1', text: '音楽が流れると自然に体でリズムをとる', category: 'rhythm' },
  { id: 'r2', text: '回転したりくるくる動くような遊びが好き', category: 'rhythm' },
  { id: 'r3', text: 'まねっこ遊びや表現ごっこが好き', category: 'rhythm' },

  // 集中・器用系
  { id: 'f1', text: '積み木・折り紙など細かい作業を集中してやる', category: 'focus' },
  { id: 'f2', text: '同じ動きを何度も繰り返すのが好き（縄跳び・自転車など）', category: 'focus' },
  { id: 'f3', text: '片足立ちやバランスをとる遊びが得意', category: 'focus' },

  // 社交・チーム系
  { id: 's1', text: 'お友達と一緒に走り回るのが大好き', category: 'social' },
  { id: 's2', text: '「1番になりたい！」という気持ちが強い', category: 'social' },
  { id: 's3', text: 'みんなで一緒にやる遊びが一人遊びより好き', category: 'social' },
];

export const yojiTypes: YojiType[] = [
  {
    id: 'active',
    name: 'アクティブ型',
    tagline: '走る・跳ぶが大好き！エネルギッシュな子',
    description:
      '体を大きく動かすことが大好きなタイプです。持久力と瞬発力が自然と育ちやすく、スポーツ全般で活躍できる素地があります。まずはのびのびと走れる環境で、楽しみながら体づくりをしていきましょう。',
    traits: ['エネルギッシュ', '走るのが好き', 'じっとしていられない', '外遊び大好き'],
    recommendations: [
      { name: 'サッカー教室', reason: '走り回る運動量が多く、エネルギーを思いきり発散できます。', image: '/images/sport-soccer.jpg' },
      { name: 'スイミング', reason: '全身運動で体力の基礎をつくれます。3歳から通える教室が多く最初の習い事に最適。', image: '/images/sport-swimming.jpg' },
      { name: '陸上・かけっこ教室', reason: '走ることへの興味を伸ばし、正しいフォームを身につけられます。', image: '/images/kids-running.jpg' },
    ],
    advice:
      '幼児期は「楽しい！もっとやりたい！」という気持ちが最も大切です。勝ち負けより、体を動かす喜びを育てることを優先しましょう。',
    color: 'from-orange-400 to-red-500',
    textColor: 'text-orange-600',
  },
  {
    id: 'rhythm',
    name: 'リズム・表現型',
    tagline: '音楽と動きが大好き！感性豊かな子',
    description:
      'リズム感と表現力に優れたタイプです。音楽に合わせて体を動かすことが得意で、体操・ダンス系の習い事で才能が開花しやすいです。柔軟性と協調性を育てる活動がよく合います。',
    traits: ['リズム感がある', '音楽好き', '表現力豊か', '体が柔らかい'],
    recommendations: [
      { name: 'ダンス・リトミック教室', reason: '音楽とリズムで体を動かす楽しさを学べます。表現力と協調性が育ちます。', image: '/images/sport-dance.jpg' },
      { name: '体操教室', reason: '柔軟性と体幹を幼児期から鍛えられます。将来どんなスポーツをするにも基礎になります。', image: '/images/sport-gymnastics.jpg' },
      { name: 'スイミング', reason: 'リズムよく水をかく動作が得意なタイプです。柔軟性も活かせます。', image: '/images/sport-swimming.jpg' },
    ],
    advice:
      '表現型の子は、プレッシャーより「楽しい発表の場」があると伸びます。発表会のある教室を選ぶと意欲が続きやすいです。',
    color: 'from-purple-400 to-pink-500',
    textColor: 'text-purple-600',
  },
  {
    id: 'focus',
    name: '集中・技巧型',
    tagline: 'コツコツ取り組む！器用で集中力がある子',
    description:
      '一つのことに集中して取り組む力があるタイプです。繰り返し練習することへの耐性があり、技術を磨く競技で伸びやすいです。バランス感覚も優れており、体の動かし方を丁寧に習得できます。',
    traits: ['集中力がある', '器用', '繰り返しに強い', 'バランス感覚が良い'],
    recommendations: [
      { name: '体操教室', reason: '繰り返しの練習で技を磨く体操は、集中型のお子さんに最適です。', image: '/images/sport-gymnastics.jpg' },
      { name: '武道（空手・柔道）', reason: '型を繰り返し練習する武道は、集中力と規律心を育てます。', image: '/images/sport-karate.jpg' },
      { name: 'テニス教室', reason: 'ラケットの扱いや打ち方を丁寧に覚える作業が、技巧型の子に向いています。', image: '/images/sport-tennis.jpg' },
    ],
    advice:
      '集中型の子は、焦らずじっくり取り組む環境で伸びます。「できた！」の積み重ねが自信になりますので、小さな成功を大切に褒めてあげましょう。',
    color: 'from-blue-400 to-indigo-500',
    textColor: 'text-blue-600',
  },
  {
    id: 'social',
    name: 'チームプレイ型',
    tagline: 'みんなと一緒が大好き！社交的な子',
    description:
      '友達と一緒に動くことが大好きなタイプです。チームスポーツで力を発揮しやすく、仲間との連携やコミュニケーション能力が自然と育ちます。競争心も強く、仲間と刺激し合いながら伸びていきます。',
    traits: ['社交的', '競争心がある', 'チームワークが好き', '友達と遊ぶのが好き'],
    recommendations: [
      { name: 'サッカー教室', reason: 'チームで動く楽しさを学べます。友達と一緒に切磋琢磨できる環境です。', image: '/images/sport-soccer.jpg' },
      { name: 'バスケットボール教室', reason: 'チームワークと競争心を同時に育てられるスポーツです。', image: '/images/sport-basketball.jpg' },
      { name: 'スイミング', reason: 'まずは個人で泳ぎを覚えた後、チームでの競争も楽しめます。友達と一緒に通うのに最適。', image: '/images/sport-swimming.jpg' },
    ],
    advice:
      'チームプレイ型の子は、仲の良い友達と一緒に始めると継続しやすいです。勝ち負けに一喜一憂しやすいので、過程を褒める声かけを意識しましょう。',
    color: 'from-green-400 to-emerald-500',
    textColor: 'text-green-600',
  },
];
