import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '喘息・アレルギーのある子どもとスポーツ｜医学的コンセンサスは「できる」',
  description:
    '運動誘発喘息があってもスポーツができます。医学的コンセンサスは「むやみな運動制限は避けるべき」です。予防法・運動中の対応・学校との連携を、学会・省庁の情報で解説。',
  openGraph: {
    title: '喘息・アレルギーのある子どもとスポーツ｜医学的コンセンサスは「できる」',
    description:
      '運動誘発喘息があってもスポーツができます。予防法、運動中の対応、学校との連携を学会・省庁の情報に基づいて解説。医学的コンセンサスは「むやみな運動制限は避けるべき」',
    images: [{ url: '/images/articles/asthma-kids-sports.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/asthma-kids-sports',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/asthma-kids-sports',
  },
  twitter: {
    card: 'summary_large_image',
    title: '喘息・アレルギーのある子どもとスポーツ｜医学的コンセンサスは「できる」',
    images: ['/images/articles/asthma-kids-sports.jpg'],
  },
};

export default function AsthmaKidsSportsPage() {
  return (
    <ArticleLayout
      title="喘息・アレルギーのある子どもとスポーツ｜医学的コンセンサスは「できる」"
      heroImage="/images/articles/asthma-kids-sports.jpg"
      heroAlt="スポーツに取り組む子ども"
      publishDate="2026年7月"
      slug="asthma-kids-sports"
      description="運動誘発喘息があってもスポーツができます。医学的コンセンサスは「むやみな運動制限は避けるべき」です。予防法・運動中の対応・学校との連携を、学会・省庁の情報で解説。"
      tags={['喘息', 'アレルギー', 'スポーツ', '運動誘発喘息', 'EIB', '子育て']}
      shareText="喘息のある子どもでも、適切な管理と予防でスポーツ参加ができます。医学的コンセンサスは『運動制限は避けるべき』。予防法と対応方法を解説しました。 #子育て #喘息 #スポーツ"
      citations={[
        '環境再生保全機構『ぜん息で困った時』運動とぜん息ガイド https://www.erca.go.jp/yobou/zensoku/basic/kodomonozensoku/undo.html',
        '日本小児アレルギー学会『小児気管支喘息治療・管理ガイドライン 2023』 https://www.jspaci.jp/journal/asthma2023/',
        '日本臨床スポーツ医学会『アレルギーを持つ子どもの運動参加に関する提言』 https://www.rinspo.jp/files/proposal_28-1-02.pdf',
      ]}
    >
      <div>
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">医療上の重要なお知らせ</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            本記事は一般的な情報提供であり、医学的なアドバイスではありません。スポーツ参加の可否、予防薬の使用方法、運動中の対応については、必ず主治医・小児アレルギー専門医と相談してください。個々のお子さんの喘息の状態によって対応は異なります。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          「喘息があるから、うちの子はスポーツができない」。そう考えている親もいるかもしれません。しかし医学的には、これは誤解です。現在の医学的コンセンサスは「喘息のある子どもでも、適切な予防・管理により、スポーツ参加が可能である」というものです。むしろ、むやみに運動を制限することは、逆に喘息を悪化させる可能性すらあります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動誘発喘息とは
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          喘息のある子どもの中には、激しい運動時に症状が出る場合があります。これを「運動誘発喘息（EIA: Exercise Induced Asthma）」または「運動誘発気管支攣縮（EIB: Exercise Induced Bronchoconstriction）」と呼びます。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-2">運動誘発喘息の特徴</p>
          <ul className="space-y-2">
            <li className="text-sm text-blue-800">・激しい運動や長時間の運動に伴い気管支が収縮する</li>
            <li className="text-sm text-blue-800">・喘息の診断がある子どもに限った症状ではなく、喘息がない人にも起こる可能性がある</li>
            <li className="text-sm text-blue-800">・小児喘息患者の約 50% が運動誘発喘息を経験するとも言われている</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          つまり、運動誘発喘息は、喘息のある子どもの間でもかなり一般的な症状であり、決して珍しいものではありません。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          医学的コンセンサス：運動を制限してはいけない
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここが非常に重要なポイントです。医学的には、喘息のある子どもに対して「むやみな運動制限は避けるべき」とされています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            「ぜん息があるからといって運動を制限する必要はありません。適切な指導と予防で運動することが可能なことが多いです。むやみな運動制限は避けるようにお願い致します。」
          </p>
          <p className="text-xs text-gray-500">出典: 環境再生保全機構</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          なぜ、このような指針になっているのでしょう？それは、運動を制限すること自体が、逆効果になる可能性があるからです。
        </p>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
          <p className="font-bold text-amber-900 mb-2">運動制限が招く悪循環</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            運動が制限されると体力が低下します。体力が低下すると、軽い活動でも喘息症状が出やすくなってしまいます。つまり、「喘息だから運動を制限する」→「体力が落ちる」→「さらに症状が出やすくなる」という悪循環に陥る可能性があるのです。
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          医学的には「適切な管理のもとで、むしろ運動を続けることが重要」という考え方が支持されています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          症状が出やすい条件を知る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          運動誘発喘息が出やすい条件があります。これを理解することで、より安全に運動に取り組める準備ができます。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">運動の種類</p>
            <p className="text-sm text-blue-800">
              マラソン、サッカーなどの激しい運動で症状が出やすい傾向があります。一方、水泳は比較的症状が出にくい運動とされています。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">環境・季節</p>
            <p className="text-sm text-blue-800">
              冬季の冷たく乾燥した空気で症状が出やすくなります。マラソン、サッカー、スキーなど、冬のスポーツでの注意が必要です。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">運動の強度と継続時間</p>
            <p className="text-sm text-blue-800">
              長時間の激しい運動ほどリスクが高くなります。また、喘息が十分にコントロールされていないと症状が起きやすくなります。
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          これらは「運動を避けるべき条件」ではなく、「予防が特に重要な条件」として捉えるべきです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          予防法：適切な予防薬の使用
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          運動誘発喘息の最も大切な予防法は、医師の指示に基づいた予防薬の使用です。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">予防薬の効果</p>
          <p className="text-sm text-blue-800 leading-relaxed mb-3">
            予防薬（気管支拡張薬など）を使用することで、発作を起こさないようにコントロールすることができます。運動前の薬物療法が有効です。
          </p>
          <p className="text-sm text-blue-800 leading-relaxed">
            「喘息をきちんとコントロールして運動を控えることなく、子どもが好きでやりたい運動をさせることが重要です。」
          </p>
          <p className="text-xs text-gray-500 mt-2">出典: 環境再生保全機構</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">重要：薬は医師の指示を仰ぐ</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            予防薬の具体的な種類、用量、運動前のタイミングについては、必ず主治医の指示を受けてください。個々のお子さんの喘息の状態によって、対応は異なります。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          運動中に症状が出た時の対応
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          もしも運動中に喘息症状が出た場合、以下の対応をしてください。ただし、医療行為の指示ではなく、一般的な対応方法として理解してください。
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6">
          <p className="font-bold text-blue-900 mb-3">その場での対応</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li className="text-sm text-blue-800">運動を中止し、楽な姿勢で休む</li>
            <li className="text-sm text-blue-800">水を飲む（医師の指示があれば気管支拡張薬を使用）</li>
            <li className="text-sm text-blue-800">ほとんどの場合、15 分以内に症状は改善する</li>
            <li className="text-sm text-blue-800">症状が続く場合は、医療機関に連絡する</li>
          </ol>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="font-bold text-amber-900 mb-2">重要：主治医の指示を優先する</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            運動中の対応方法については、あらかじめ主治医から具体的な指示を受けておくことが大切です。症状の出方、対応のタイミング、いつ医療機関に連絡するかなど、個別の計画を立てておきましょう。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          学校・運動施設との連携が大切
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          喘息のある子どもがスポーツに安全に参加するためには、家庭だけでなく、学校やスポーツ施設との連携が非常に大切です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">学校への報告・相談</p>
            <p className="text-sm text-blue-800">
              体育の授業やスポーツ行事について、あらかじめ学校に喘息のことを伝え、対応について相談しておくことが重要です。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">運動施設・部活動での指導者への連携</p>
            <p className="text-sm text-blue-800">
              スポーツ施設や部活動の指導者に、お子さんの喘息についての情報を共有し、症状が出た時の対応について打ち合わせておきましょう。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <p className="font-bold text-blue-900 text-sm mb-2">医療機関との連携</p>
            <p className="text-sm text-blue-800">
              必要に応じて、医師から学校やスポーツ施設に対して、対応についてのアドバイスをもらう形式もあります。
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          このような連携を通じて、学校やスポーツ施設も「喘息 = 運動制限」という古い考え方から脱却し、「喘息 = 適切な管理と予防のもとでの運動参加」という新しいアプローチを理解するようになります。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          参考：学会の指針
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          日本の医学会も、喘息のある子どものスポーツ参加について、ガイドラインや提言を発表しています。
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              <strong>日本小児アレルギー学会</strong>が「小児気管支喘息治療・管理ガイドライン 2023」を発表（2023 年 11 月発刊）
            </li>
            <li className="text-sm text-gray-700">
              <strong>日本臨床スポーツ医学会小児科部会</strong>が「アレルギーを持つ子どもの運動参加に関する提言」を作成し、喘息のある子どもの安全なスポーツ参加を推奨
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          まとめ
        </h2>
        <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300 mb-6">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">・喘息があるからスポーツができないわけではありません</li>
            <li className="text-sm text-gray-700">・医学的コンセンサスは「むやみな運動制限は避けるべき」</li>
            <li className="text-sm text-gray-700">・適切な予防薬の使用により、運動は十分にコントロール可能です</li>
            <li className="text-sm text-gray-700">・学校・スポーツ施設・医療機関の連携が安全な運動参加を支えます</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          喘息のある子どもが「自分の好きなスポーツを楽しむ」という選択肢を失わないためにも、親と医療専門家、学校が一緒に正確な情報を持つことが大切です。お子さんの喘息の状態について主治医と十分に相談し、個別の計画を立てた上で、スポーツ参加を進めてください。
        </p>
      </div>
    </ArticleLayout>
  );
}
