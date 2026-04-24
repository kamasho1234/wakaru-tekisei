import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: '宮里藍の子供時代|沖縄の少女が世界ランク1位のゴルファーになった理由',
  description:
    '女子ゴルフで世界ランク1位を達成した宮里藍選手の子供時代。4歳からゴルフを始めた沖縄育ちの少女が、世界一になるまでの道のりを紹介。',
  openGraph: {
    title: '宮里藍の子供時代|沖縄の少女が世界ランク1位のゴルファーになった理由',
    description:
      '女子ゴルフで世界ランク1位を達成した宮里藍選手の子供時代。4歳からゴルフを始めた沖縄育ちの少女が、世界一になるまでの道のりを紹介。',
    images: [{ url: '/images/articles/miyazato-ai-childhood.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://tekisei-sport.com/articles/miyazato-ai-childhood',
  },
  alternates: {
    canonical: 'https://tekisei-sport.com/articles/miyazato-ai-childhood',
  },
  twitter: {
    card: 'summary_large_image',
    title: '宮里藍の子供時代|沖縄の少女が世界ランク1位のゴルファーになった理由',
    images: ['/images/articles/miyazato-ai-childhood.jpg'],
  },
};

export default function MiyazatoAiChildhoodPage() {
  return (
    <ArticleLayout
      title="宮里藍の子供時代|沖縄の少女が世界ランク1位のゴルファーになった理由"
      heroImage="/images/articles/miyazato-ai-childhood.jpg"
      heroAlt="ゴルフを練習する子ども"
      publishDate="2025年4月"
      slug="miyazato-ai-childhood"
      description="女子ゴルフで世界ランク1位を達成した宮里藍選手の子供時代。4歳からゴルフを始めた沖縄育ちの少女が、世界一になるまでの道のりを紹介。"
      tags={['宮里藍', 'ゴルフ', '幼少期']}
      shareText="宮里藍選手が4歳からお父さんと一緒にゴルフを始めた話、知っていますか？ #宮里藍 #ゴルフ"
      citations={['https://ja.wikipedia.org/wiki/%E5%AE%AE%E9%87%8C%E8%97%8D']}
    >
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-lime-500 rounded-full inline-block"></span>
          宮里藍の幼少期プロフィール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          宮里藍選手は1985年6月19日、沖縄県中頭郡金武町で生まれました。米女子ゴルフツアー（LPGA）で世界ランキング1位を達成した日本を代表するゴルファーですが、その出発点は父親と兄たちとのファミリーゴルフでした。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-lime-50 rounded-2xl p-4 text-center border border-lime-100">
            <p className="text-2xl font-black text-lime-600">1985年</p>
            <p className="text-xs text-gray-600 mt-1">生年月日</p>
          </div>
          <div className="bg-lime-50 rounded-2xl p-4 text-center border border-lime-100">
            <p className="text-2xl font-black text-lime-600">沖縄県</p>
            <p className="text-xs text-gray-600 mt-1">出身地</p>
          </div>
          <div className="bg-lime-50 rounded-2xl p-4 text-center border border-lime-100">
            <p className="text-2xl font-black text-lime-600">4歳</p>
            <p className="text-xs text-gray-600 mt-1">ゴルフ開始</p>
          </div>
        </div>

        <div className="bg-lime-50 rounded-2xl p-5 border border-lime-100 mb-6">
          <p className="font-bold text-lime-900 mb-2">基本データ</p>
          <ul className="space-y-2">
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">生年月日:</span>
              <span>1985年6月19日</span>
            </li>
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">出身地:</span>
              <span>沖縄県中頭郡金武町</span>
            </li>
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">ゴルフ開始:</span>
              <span>4歳（父・克哉さんの指導）</span>
            </li>
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">プロ転向:</span>
              <span>2003年（17歳）</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-lime-500 rounded-full inline-block"></span>
          ゴルフ一家の末っ子として育つ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          宮里藍選手の父・克哉さんはゴルフ指導者として活動しており、兄の優作さん・聖志さんもプロゴルファーとなりました。藍選手は「ゴルフが当たり前にある環境」の中で育ちました。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-lime-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">父と兄に囲まれたゴルフ環境</h3>
              <p className="text-sm text-gray-600">
                父・克哉さんは元ゴルファーで、兄たちも幼い頃からゴルフをしていました。4歳の藍選手は「お兄ちゃんたちと同じことをしたい」という気持ちから、自然にクラブを握りました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-lime-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">沖縄の自然の中でのゴルフ</h3>
              <p className="text-sm text-gray-600">
                温暖な気候の沖縄は、一年中ゴルフができる環境です。他の地域の選手が冬に練習できない時期も、宮里選手は継続して練習することができました。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-lime-500 text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">15歳で日本アマチュア王者へ</h3>
              <p className="text-sm text-gray-600">
                中学生の頃から各地の大会で結果を出し続け、15歳で日本女子アマチュアゴルフ選手権を制覇。アマチュア最強の座を手にしました。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-lime-500 rounded-full inline-block"></span>
          17歳でプロ転向、日本ツアーを席巻
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2003年、高校卒業と同時に宮里藍選手はプロ転向を決意しました。プロテストに首位合格し、翌年には国内ツアー開幕戦で優勝するという衝撃的なデビューを果たしました。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-lime-100">
                <th className="px-3 py-2 text-left font-bold text-gray-700">年齢</th>
                <th className="px-3 py-2 text-left font-bold text-gray-700">出来事</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">4歳</td>
                <td className="px-3 py-2 text-gray-600">父・克哉さんからゴルフを習い始める</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">15歳（2001年）</td>
                <td className="px-3 py-2 text-gray-600">日本女子アマチュアゴルフ選手権 優勝</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">17歳（2003年）</td>
                <td className="px-3 py-2 text-gray-600">プロ転向（プロテスト首位合格）</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">18歳（2004年）</td>
                <td className="px-3 py-2 text-gray-600">国内ツアー開幕戦で優勝デビュー</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-bold text-gray-900">2010年</td>
                <td className="px-3 py-2 text-gray-600">米LPGAツアー 世界ランキング1位を達成</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-lime-50 rounded-2xl p-5 border border-lime-100">
          <p className="font-bold text-lime-900 mb-2">世界ランク1位という偉業</p>
          <p className="text-sm text-lime-800">
            日本人女性として初めて米LPGAツアーで世界ランキング1位を獲得した宮里藍選手。その礎は、4歳から父親と一緒に過ごしたゴルフの時間にありました。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-lime-500 rounded-full inline-block"></span>
          親が一緒に楽しむことで才能が育つ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          宮里藍選手の幼少期で注目すべきは、父親と兄たちが「ゴルフを楽しんでいた」という点です。「やらせた」のではなく、「一緒にやっていた」というのが大きな違いです。
        </p>

        <div className="bg-lime-50 rounded-2xl p-5 border border-lime-100 mb-6">
          <p className="font-bold text-lime-900 mb-2">親の関わり方が才能を引き出す</p>
          <ul className="space-y-2">
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">一緒に楽しむ:</span>
              <span>父親が「指導者として」ではなく「一緒にゴルフを楽しむ仲間」として関わった</span>
            </li>
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">家族でやる:</span>
              <span>兄たちも同じスポーツをしていたため、負けたくないという競争心が育った</span>
            </li>
            <li className="text-sm text-lime-800 flex gap-2">
              <span className="font-bold">環境を整える:</span>
              <span>一年中練習できる沖縄の気候と、ゴルフがある家庭環境が才能を後押し</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-lime-500 rounded-full inline-block"></span>
          まとめ：家族で同じスポーツをすることの力
        </h2>
        <p className="text-gray-700 leading-relaxed">
          宮里藍選手の成功は、「家族全員でゴルフをする文化」から生まれました。父親が指導者であり、兄たちが先輩ゴルファーであり、一家が同じ競技を共有していた。この環境が、4歳の幼い子どもを自然にゴルフへと引き込み、15歳のアマチュア王者、17歳のプロ選手、そして世界ランク1位へと育てました。お子さんにスポーツをさせたいなら、まず親が楽しんでいる姿を見せることが最も効果的です。「やりなさい」ではなく「一緒にやろう」という姿勢が、子どもの内発的動機を引き出すのです。
        </p>
      </div>
    </ArticleLayout>
  );
}
