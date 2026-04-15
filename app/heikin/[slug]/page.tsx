import HeikinContent from './heikin-content';

type Age = 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Gender = 'male' | 'female';

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

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const [ageStr, genderStr] = slug.split('-');
  const age = parseInt(ageStr) as Age;
  const gender = (genderStr === 'male' ? 'male' : 'female') as Gender;

  return <HeikinContent age={age} gender={gender} />;
}
