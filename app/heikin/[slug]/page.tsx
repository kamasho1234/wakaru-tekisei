import Link from 'next/link';

type Age = 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Gender = 'male' | 'female';

// ダミーのフィットネスデータ（Agent 2で作成される lib/data/fitnessData からのインポート予定）
// ビルドエラーを防ぐため、ここでインライン定義
const fitnessData: Record<string, Record<Gender, Record<string, number>>> = {
  '6': {
    male: {
      握力: 10.5,
      上体起こし: 18,
      長座体前屈: 16.2,
      反復横とび: 35,
      シャトルラン: 18,
      走50m: 9.8,
      立ち幅跳び: 120,
      ボール投げ: 7.5,
    },
    female: {
      握力: 9.8,
      上体起こし: 16,
      長座体前屈: 17.5,
      反復横とび: 33,
      シャトルラン: 16,
      走50m: 10.1,
      立ち幅跳び: 112,
      ボール投げ: 5.8,
    },
  },
  '7': {
    male: {
      握力: 12.2,
      上体起こし: 20,
      長座体前屈: 17.0,
      反復横とび: 38,
      シャトルラン: 22,
      走50m: 9.4,
      立ち幅跳び: 132,
      ボール投げ: 8.5,
    },
    female: {
      握力: 11.2,
      上体起こし: 18,
      長座体前屈: 18.5,
      反復横とび: 36,
      シャトルラン: 20,
      走50m: 9.7,
      立ち幅跳び: 125,
      ボール投げ: 6.8,
    },
  },
  '8': {
    male: {
      握力: 14.5,
      上体起こし: 23,
      長座体前屈: 17.8,
      反復横とび: 41,
      シャトルラン: 26,
      走50m: 9.0,
      立ち幅跳び: 145,
      ボール投げ: 9.8,
    },
    female: {
      握力: 13.0,
      上体起こし: 20,
      長座体前屈: 19.5,
      反復横とび: 39,
      シャトルラン: 24,
      走50m: 9.3,
      立ち幅跳び: 138,
      ボール投げ: 7.8,
    },
  },
  '9': {
    male: {
      握力: 17.2,
      上体起こし: 26,
      長座体前屈: 18.5,
      反復横とび: 44,
      シャトルラン: 31,
      走50m: 8.6,
      立ち幅跳び: 158,
      ボール投げ: 11.2,
    },
    female: {
      握力: 15.2,
      上体起こし: 22,
      長座体前屈: 20.5,
      反復横とび: 42,
      シャトルラン: 28,
      走50m: 8.9,
      立ち幅跳び: 151,
      ボール投げ: 8.9,
    },
  },
  '10': {
    male: {
      握力: 20.0,
      上体起こし: 29,
      長座体前屈: 19.2,
      反復横とび: 47,
      シャトルラン: 36,
      走50m: 8.2,
      立ち幅跳び: 171,
      ボール投げ: 12.8,
    },
    female: {
      握力: 17.5,
      上体起こし: 24,
      長座体前屈: 21.5,
      反復横とび: 45,
      シャトルラン: 32,
      走50m: 8.5,
      立ち幅跳び: 164,
      ボール投げ: 9.9,
    },
  },
  '11': {
    male: {
      握力: 23.5,
      上体起こし: 32,
      長座体前屈: 19.8,
      反復横とび: 50,
      シャトルラン: 41,
      走50m: 7.8,
      立ち幅跳び: 184,
      ボール投げ: 14.5,
    },
    female: {
      握力: 20.2,
      上体起こし: 26,
      長座体前屈: 22.5,
      反復横とび: 48,
      シャトルラン: 36,
      走50m: 8.1,
      立ち幅跳び: 177,
      ボール投げ: 11.2,
    },
  },
  '12': {
    male: {
      握力: 27.8,
      上体起こし: 35,
      長座体前屈: 20.5,
      反復横とび: 53,
      シャトルラン: 46,
      走50m: 7.4,
      立ち幅跳び: 197,
      ボール投げ: 16.2,
    },
    female: {
      握力: 22.5,
      上体起こし: 28,
      長座体前屈: 23.5,
      反復横とび: 51,
      シャトルラン: 40,
      走50m: 7.9,
      立ち幅跳び: 190,
      ボール投げ: 12.5,
    },
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const ages: Age[] = [6, 7, 8, 9, 10, 11, 12];
  const genders: Gender[] = ['male', 'female'];

  return ages.flatMap((age) =>
    genders.map((gender) => ({
      slug: `${age}sai-${gender}`,
    }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const [ageStr, genderStr] = slug.split('-');
  const age = parseInt(ageStr);
  const genderJp = genderStr === 'male' ? '男子' : '女子';

  return {
    title: `${age}歳(${genderJp})の新体力テスト全国平均 | 8種目一覧 | わかる！子どものスポーツ適性`,
    description: `${age}歳${genderJp}の新体力テスト8種目の全国平均値。握力、上体起こし、長座体前屈、反復横とび、シャトルラン、50m走、立ち幅跳び、ボール投げの平均値を掲載しています。`,
  };
}

const ageDescriptions: Record<Age, string> = {
  6: '6歳は運動の基本的な動きを習得する段階です。走る、跳ぶ、投げるなどの基本動作がまだ発展途上ですが、この時期の体験が今後の運動能力発達の基礎となります。',
  7: '7歳になると、運動の基本動作がより安定してきます。バランス感覚や柔軟性が高まる時期で、様々なスポーツに挑戦するのに適した年代です。',
  8: '8歳は体力が顕著に向上する時期です。筋力、持久力、敏捷性が発達し、本格的なスポーツ活動を始めるのに適した年齢になります。',
  9: '9歳は「ゴールデンエイジ」と呼ばれ、運動神経が最も発達しやすい時期です。この時期の運動経験が、将来の運動能力に大きな影響を与えます。',
  10: '10歳になると、体力差がより顕著になり始めます。同じ学年でも個人差が大きくなる時期で、子どもの適性に合わせたスポーツ選択が重要です。',
  11: '11歳は思春期への入口で、体格や体力に個人差が大きくなります。子どもの適性や興味を尊重しながら、スポーツ活動を継続することが大切です。',
  12: '12歳は中学進学を控えた時期です。体力測定の結果から得られた情報をもとに、中学での運動部選びの参考にすることができます。',
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const [ageStr, genderStr] = slug.split('-');
  const age = parseInt(ageStr) as Age;
  const gender = (genderStr === 'male' ? 'male' : 'female') as Gender;

  const genderJp = gender === 'male' ? '男子' : '女子';
  const data = fitnessData[age]?.[gender] || {};

  const items = [
    { name: '握力', value: data.握力, unit: 'kg' },
    { name: '上体起こし', value: data.上体起こし, unit: '回' },
    { name: '長座体前屈', value: data.長座体前屈, unit: 'cm' },
    { name: '反復横とび', value: data.反復横とび, unit: '点' },
    { name: 'シャトルラン', value: data.シャトルラン, unit: '回' },
    { name: '走50m', value: data.走50m, unit: '秒' },
    { name: '立ち幅跳び', value: data.立ち幅跳び, unit: 'cm' },
    { name: 'ボール投げ', value: data.ボール投げ, unit: 'm' },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>
          {age}歳{genderJp}の全国平均
        </span>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {age}歳({genderJp})の新体力テスト全国平均
          </h1>
          <p className="text-lg text-gray-600">
            8種目の全国平均値一覧
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  種目
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900">
                  全国平均値
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={item.name}
                  className={`border-b ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {item.value !== undefined
                      ? `${item.value} ${item.unit}`
                      : 'データなし'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Age Description */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {age}歳の体力発達の特徴
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {ageDescriptions[age]}
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            お子さんの適性を知りたい方へ
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            新体力テストのデータを入力して、スポーツ適性診断を受けてみませんか？
          </p>
          <Link
            href="/shindan/sports"
            className="inline-block px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            スポーツ適性診断へ →
          </Link>
        </div>
      </section>
    </div>
  );
}
