import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '中田英寿の子供時代|山梨の少年がセリエAのスターへ—日本サッカーの先駆者',
  description:
  'ペルージャ・ASローマ・パルマなどセリエAで活躍した中田英寿選手の子供時代。山梨県甲府市で育ちサッカーに目覚めた少年が、日本人初の欧州トップリーグスターになるまでを紹介。',
  openGraph: {
    title: '中田英寿の子供時代|山梨の少年がセリエAのスターへ—日本サッカーの先駆者',
    description:
    'ペルージャ・ASローマ・パルマなどセリエAで活躍した中田英寿選手の子供時代。山梨県甲府市で育ちサッカーに目覚めた少年が、日本人初の欧州トップリーグスターになるまでを紹介。',
    images: [{ url: '/images/articles/nakata-hidetoshi-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/nakata-hidetoshi-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/nakata-hidetoshi-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中田英寿の子供時代|山梨の少年がセリエAのスターへ—日本サッカーの先駆者',
    images: ['/images/articles/nakata-hidetoshi-childhood.jpg'],
  },
};

export default function NakataHidetoshiChildhoodPage() {
  return (
    <ArticleLayout
      title="中田英寿の子供時代|山梨の少年がセリエAのスターへ—日本サッカーの先駆者"
      heroImage="/images/articles/nakata-hidetoshi-childhood.jpg"
      heroAlt="サッカーを練習する子ども"
      publishDate="2025年4月"
      slug="nakata-hidetoshi-childhood"
      description="ペルージャ・ASローマ・パルマなどセリエAで活躍した中田英寿選手の子供時代。山梨県甲府市で育ちサッカーに目覚めた少年が、日本人初の欧州トップリーグスターになるまでを紹介。"
      tags={['中田英寿', 'サッカー', '幼少期']}
      shareText="中田英寿選手が山梨からセリエAのスターへ、日本サッカーの扉を開いた話を紹介 #中田英寿 #サッカー"
      citations={['https://ja.wikipedia.org/wiki/%E4%B8%AD%E7%94%B0%E8%8B%B1%E5%AF%BF']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          中田英寿の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中田英寿選手は1977年1月22日、山梨県甲府市で生まれました。1998年にペルージャ（セリエA）へ渡り、ASローマ、パルマ、ボルトンなど欧州の名門クラブで活躍。日本人として初めて欧州トップリーグのスター選手となった、日本サッカーの先駆者です。2006年ワールドカップ後に29歳で現役を引退しました。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">1977年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">山梨県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">Serie A</p>
            <p className="text-xs text-gray-600 mt-1">活躍リーグ</p>
          </div>
        </div>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 mb-6">
          <p className="font-bold text-sky-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1977年1月22日</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>山梨県甲府市</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">欧州:</span>
              <span>ペルージャ、ASローマ、パルマ等（セリエA）</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">引退:</span>
              <span>2006年（29歳）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          山梨で芽生えたサッカーへの情熱
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中田選手は山梨県甲府市という地方都市で育ちました。当時の日本サッカーはJリーグ創設前夜で、欧州への道は完全に未知の領域でした。そんな時代に欧州で輝いた中田選手の挑戦は、後の世代の道標となりました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">幼少期から際立っていたゲームセンス</h3>
              <p className="text-sm text-gray-600">
                中田選手は幼少期からサッカーの試合の流れを読む「ゲームセンス」が他の子どもたちと一線を画していました。どこにボールが来るかを予測し、先回りしてポジションを取る能力は、後のセリエAでの活躍の原点です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">韮崎高校から平塚ベルマーレへ</h3>
              <p className="text-sm text-gray-600">
                山梨の名門・韮崎高校でサッカーを磨き、平塚ベルマーレ（現湘南ベルマーレ）に入団。Jリーグ草創期の競争の中で急成長し、1997年W杯アジア予選で日本代表の中心選手となりました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">誰も歩んでいない道への挑戦</h3>
              <p className="text-sm text-gray-600">
                1998年に欧州セリエAへ渡った中田選手は、当時誰も成功事例を知らない道を歩みました。この「先例のない挑戦」を成功させた勇気が、後の日本人選手全員への道を開きました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          日本サッカーの扉を開いた先駆者
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">時期</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">山梨県甲府市でサッカーを始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">高校</td>
                <td className="px-3 py-2 text-gray-600">韮崎高校でサッカーを磨く</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">1998年</td>
                <td className="px-3 py-2 text-gray-600">セリエA・ペルージャへ移籍（日本人初の快挙）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2001年</td>
                <td className="px-3 py-2 text-gray-600">ASローマでセリエAリーグ優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2006年</td>
                <td className="px-3 py-2 text-gray-600">W杯後に現役引退（29歳）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
          <p className="font-bold text-sky-900 mb-2">中田英寿が日本サッカーに残した遺産</p>
          <p className="text-sm text-sky-800">
            中田選手が欧州で成功した事実は、「日本人でもセリエAで戦える」という証明でした。その成功がなければ、今の日本人選手の欧州挑戦の文化はなかったかもしれません。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          まとめ：先例のない道を切り開く勇気が歴史を作る
        </h2>
        <p className="text-gray-700 leading-relaxed">
          中田英寿選手の幼少期が教えてくれることは、「誰も歩んでいない道を切り開く勇気が、自分だけでなく後続の全員に道を開く」ということです。山梨の地方出身でありながら、誰も成功した前例のないセリエAへ単身乗り込んだ中田選手の挑戦は、今の日本サッカーの礎となっています。お子さんがサッカーの夢を持つなら、「先例がないこと」を恐れず、自分を信じて挑戦する姿勢を育ててください。その精神が、次の時代の扉を開きます。
        </p>
      </div>
    </ArticleLayout>
  );
}
