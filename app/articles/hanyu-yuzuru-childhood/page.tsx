import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '羽生結弦の子供時代|スケートを始めたきっかけは喘息だった',
  description:
    'フィギュアスケート界のレジェンド・羽生結弦選手の子供時代。喘息をきっかけにスケートを始めた経緯と、幼少期のエピソードを紹介。',
  openGraph: {
    title: '羽生結弦の子供時代|スケートを始めたきっかけは喘息だった',
    description:
      'フィギュアスケート界のレジェンド・羽生結弦選手の子供時代。喘息をきっかけにスケートを始めた経緯と、幼少期のエピソードを紹介。',
    images: [{ url: '/images/articles/hanyu-yuzuru-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/hanyu-yuzuru-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/hanyu-yuzuru-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '羽生結弦の子供時代|スケートを始めたきっかけは喘息だった',
    images: ['/images/articles/hanyu-yuzuru-childhood.jpg'],
  },
};

export default function HanyuYuzuruChildhoodPage() {
  return (
    <ArticleLayout
      title="羽生結弦の子供時代|スケートを始めたきっかけは喘息だった"
      heroImage="/images/articles/hanyu-yuzuru-childhood.jpg"
      heroAlt="フィギュアスケートを練習する子ども"
      publishDate="2025年4月"
      slug="hanyu-yuzuru-childhood"
      description="フィギュアスケート界のレジェンド・羽生結弦選手の子供時代。喘息をきっかけにスケートを始めた経緯と、幼少期のエピソードを紹介。"
      tags={['羽生結弦', 'フィギュアスケート', '幼少期']}
      shareText="羽生結弦選手が喘息をきっかけにスケートを始めた話を知っていますか？ #羽生結弦 #フィギュアスケート"
      citations={['https://ja.wikipedia.org/wiki/%E7%BE%BD%E7%94%9F%E7%B5%90%E5%BC%A6']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          羽生結弦の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          羽生結弦選手は1994年12月7日、宮城県仙台市で生まれました。オリンピック2連覇を達成した世界的なフィギュアスケーターですが、その出発点は「喘息の子どもが健康になるために」という、意外なきっかけでした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">1994年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">宮城県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
            <p className="text-2xl font-black text-sky-600">4歳</p>
            <p className="text-xs text-gray-600 mt-1">スケート開始</p>
          </div>
        </div>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 mb-6">
          <p className="font-bold text-sky-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1994年12月7日</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>宮城県仙台市</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">出身小学校:</span>
              <span>仙台市立七北田小学校</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">スケート開始:</span>
              <span>4歳</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          スケートを始めたきっかけは「喘息」と「姉」
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          羽生結弦選手がスケートを始めたのは「本当はスケートがやりたかったから」ではなく、医学的な理由がありました。それは幼少期の「喘息」です。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">喘息という病気</h3>
              <p className="text-sm text-gray-600">
                羽生結弦選手は幼少期から気管支喘息を患っていました。屋外のホコリや空気汚染にさらされると、呼吸が困難になる状態です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">屋内スポーツという選択</h3>
              <p className="text-sm text-gray-600">
                医学的に、喘息の子どもには屋内スポーツが適しています。氷上はほこりが少なく、空気がきれいなため、健康改善に役立つと判断されました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">姉の影響</h3>
              <p className="text-sm text-gray-600">
                姉がスケート教室に通っており、4歳のときについていったのがきっかけ。最初から「スケートで世界一を目指す」という目標があったのではなく、「健康になるため」という親の想いから始まりました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          4歳から見せた負けず嫌いの性格
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          羽生結弦選手がスケートで頭角を現すようになったのは、確かな体力もありますが、何よりも「負けず嫌い」という性格が大きく作用していました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">4歳</td>
                <td className="px-3 py-2 text-gray-600">スケート開始</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">6歳</td>
                <td className="px-3 py-2 text-gray-600">大会初優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">幼少期</td>
                <td className="px-3 py-2 text-gray-600">姉に追いつこうと必死に練習（負けず嫌いの性格を発揮）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
          <p className="font-bold text-sky-900 mb-2">負けず嫌いが生んだ成長</p>
          <p className="text-sm text-sky-800">
            羽生結弦選手は、姉がスケートを上達させるのに対抗して、自分も練習を積み重ねました。この「負けたくない」という感情が、スケートの技術向上を加速させ、6歳で大会初優勝へと導きました。つまり、最高のアスリートを生み出すのは「外部からの押しつけ」ではなく「自分でやりたい」という内発的動機づけです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          小学生で5種類の3回転ジャンプを習得
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          羽生結弦選手は小学生の段階で、フィギュアスケートの最難関技の一つ「3回転ジャンプ」を5種類習得していました。これは同年代の選手と比べても、圧倒的な進歩速度です。
        </p>

        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 mb-6">
          <p className="font-bold text-sky-900 mb-2">小学生の大きな成果</p>
          <ul className="space-y-2">
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">習得時期:</span>
              <span>小学5年生（10～11歳）までに5種類の3回転ジャンプを習得</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">難易度:</span>
              <span>3回転ジャンプは成人選手でも習得に時間がかかる高難度技術</span>
            </li>
            <li className="text-sm text-sky-800 flex gap-2">
              <span className="font-bold">背景:</span>
              <span>喘息で始まったスケートが、4年間の積み重ねで「世界レベルの技術」へと成長</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          「喘息だから」という制限が、実は最高のスタート地点になりました。健康改善という親の想いから始まったスケートが、いつの間にか「本当にやりたいこと」へと変わっていったのです。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          東日本大震災を乗り越えて世界へ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          羽生結弦選手の人生で最大の試練は、2011年3月11日の東日本大震災です。仙台市の自宅と練習拠点が被災しました。しかし、この時期の対応が、後の世界チャンピオンを生み出しました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">被災の影響</h3>
              <p className="text-sm text-gray-600">
                仙台市内のスケート場が被災し、練習環境が大きく制限されました。多くの選手は別の場所でのトレーニングを余儀なくされました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2014年ソチオリンピック</h3>
              <p className="text-sm text-gray-600">
                大震災から3年後、15歳で全国から注目を浴びたバンクーバー五輪選手団に選ばれ、その3年後の2014年ソチオリンピックで金メダルを獲得しました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2018年平昌オリンピック</h3>
              <p className="text-sm text-gray-600">
                2018年平昌オリンピックで2連覇を達成。困難に立ち向かう力が、世界一という結果を生み出しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-sky-500 rounded-full inline-block"></span>
          まとめ：病気の子どもでも、世界一になれる
        </h2>
        <p className="text-gray-700 leading-relaxed">
          羽生結弦選手の人生は、「喘息という制限」から始まりました。医学的な理由で屋内スポーツを勧められ、姉について4歳でスケートを始めたのです。しかし、その「制限」が、実は最高の環境を生み出しました。健康改善のためのスケートは、6歳で初優勝し、小学生で5種類の3回転ジャンプを習得し、やがてオリンピック2連覇へと至りました。親が「病気だから何もできない」と諦めるのではなく、「健康で楽しくできることは何か」と考える—羽生結弦選手の成功は、この親のマインドから生まれたのです。お子さんが体が弱い、アレルギーがある、喘息がある...そうした制限がある子でも、環境を工夫すれば世界レベルの活躍は十分に可能です。
        </p>
      </div>
    </ArticleLayout>
  );
}
