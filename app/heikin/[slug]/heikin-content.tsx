'use client';

import Link from 'next/link';
import { fitnessNorms } from '@/lib/data/fitnessData';
import { useLanguage } from '@/contexts/LanguageContext';

type Age = 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Gender = 'male' | 'female';

const ageDescriptions: Record<Age, { ja: string; en: string }> = {
  6: {
    ja: '6歳は運動の基本的な動きを習得する段階です。走る、跳ぶ、投げるなどの基本動作がまだ発展途上ですが、この時期の体験が今後の運動能力発達の基礎となります。',
    en: 'Age 6 is a stage of learning basic movement skills. Running, jumping, and throwing are still developing, but experiences at this age form the foundation of future physical development.',
  },
  7: {
    ja: '7歳になると、運動の基本動作がより安定してきます。バランス感覚や柔軟性が高まる時期で、様々なスポーツに挑戦するのに適した年代です。',
    en: 'At age 7, basic movement becomes more stable. Balance and flexibility improve, making it a great time to try various sports.',
  },
  8: {
    ja: '8歳は体力が顕著に向上する時期です。筋力、持久力、敏捷性が発達し、本格的なスポーツ活動を始めるのに適した年齢になります。',
    en: 'Age 8 sees notable improvements in physical fitness. Strength, endurance, and agility develop, making it a suitable age to start organized sports.',
  },
  9: {
    ja: '9歳は「ゴールデンエイジ」と呼ばれ、運動神経が最も発達しやすい時期です。この時期の運動経験が、将来の運動能力に大きな影響を与えます。',
    en: 'Age 9 is called the "Golden Age" — the period when motor skills develop most rapidly. Physical experiences at this age greatly influence future athletic ability.',
  },
  10: {
    ja: '10歳になると、体力差がより顕著になり始めます。同じ学年でも個人差が大きくなる時期で、子どもの適性に合わせたスポーツ選択が重要です。',
    en: 'At age 10, physical differences between children become more pronounced. Individual variation increases, making sport selection that suits each child\'s aptitude important.',
  },
  11: {
    ja: '11歳は思春期への入口で、体格や体力に個人差が大きくなります。子どもの適性や興味を尊重しながら、スポーツ活動を継続することが大切です。',
    en: 'Age 11 marks the start of puberty, with growing individual differences in physique and fitness. Respecting each child\'s aptitude and interests in sport is important.',
  },
  12: {
    ja: '12歳は中学進学を控えた時期です。体力測定の結果から得られた情報をもとに、中学での運動部選びの参考にすることができます。',
    en: 'Age 12 comes just before entering middle school. Fitness test results can help inform decisions about which sports club to join in middle school.',
  },
};

const fitnessItemKeys = ['握力', '上体起こし', '長座体前屈', '反復横とび', 'シャトルラン', '走50m', '立ち幅跳び', 'ボール投げ'] as const;
const fitnessUnits: Record<string, string> = {
  握力: 'kg', 上体起こし: '回', 長座体前屈: 'cm', 反復横とび: '点',
  シャトルラン: '回', 走50m: '秒', 立ち幅跳び: 'cm', ボール投げ: 'm',
};

interface Props {
  age: Age;
  gender: Gender;
}

export default function HeikinContent({ age, gender }: Props) {
  const { t, lang } = useLanguage();
  const genderKey = gender === 'male' ? t('heikin.male') : t('heikin.female');
  const norms = fitnessNorms[age]?.[gender];

  const items = norms
    ? fitnessItemKeys.map((key) => ({
        label: t(`fitness.${key}`),
        value: norms[key].mean,
        unit: fitnessUnits[key],
      }))
    : [];

  const desc = ageDescriptions[age];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          {t('heikin.breadcrumbTop')}
        </Link>
        <span className="mx-2">/</span>
        <span>{age}歳{genderKey}</span>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {age}歳({genderKey}){lang === 'en' ? ' ' : 'の'}
            {lang === 'en' ? 'National Fitness Test Average' : '新体力テスト全国平均'}
          </h1>
          <p className="text-lg text-gray-600">{t('heikin.heroSubtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left font-semibold text-gray-900">{t('heikin.tableEvent')}</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900">{t('heikin.tableAvg')}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={item.label}
                  className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{item.label}</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {item.value !== undefined ? `${item.value} ${item.unit}` : t('heikin.dataNA')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Age Description */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {lang === 'en' ? `Physical Development at Age ${age}` : `${age}歳の体力発達の特徴`}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {lang === 'en' ? desc.en : desc.ja}
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('heikin.ctaTitle')}</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t('heikin.ctaBody')}</p>
          <Link
            href="/shindan/sports"
            className="inline-block px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('heikin.ctaBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
